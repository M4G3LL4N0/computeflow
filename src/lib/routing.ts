import {
  COMPUTE_POOLS,
  type ComputePool,
  type Region,
  type Sensitivity,
  type WorkloadType,
} from "./compute-data";
import { clamp } from "./utils";

export type WorkloadInput = {
  name: string;
  workloadType: WorkloadType;
  monthlyBudget: number; // USD
  latencyPriority: number; // 0-100
  energyPriority: number; // 0-100
  sensitivity: Sensitivity;
  reliabilityPriority: number; // 0-100
  region: Region | "any";
  urgency: number; // 0-100
};

export type RouteScores = {
  cost: number;
  latency: number;
  energy: number;
  sovereignty: number;
  availability: number;
  risk: number; // 0-100, higher = lower risk
  fit: number;
};

export type RouteOption = {
  pool: ComputePool;
  scores: RouteScores;
  allocation: number; // %
  reasons: string[];
  warnings: string[];
  estimatedMonthlyCost: number;
  estimatedLatencyMs: number;
};

export type RoutingReport = {
  workload: WorkloadInput;
  options: RouteOption[];
  recommended: RouteOption;
  split: RouteOption[];
  explanation: string;
  whyThisRouteWon: string;
  nextStep: string;
  totalEstimatedCost: number;
};

const SENSITIVITY_TIER: Record<Sensitivity, number> = {
  public: 1,
  restricted: 2,
  regulated: 3,
  sovereign: 4,
};

function scorePool(pool: ComputePool, input: WorkloadInput): RouteScores {
  // Cost score — higher costEfficiency and lower hourlyRate is better, weighted by budget pressure.
  const budgetPressure = clamp(100 - (input.monthlyBudget / 200_000) * 100, 0, 100); // tight budgets push cost weight up
  const costRaw =
    pool.costEfficiency * 0.65 +
    clamp(100 - pool.hourlyRate * 14, 0, 100) * 0.35;
  const cost = clamp(costRaw - (budgetPressure > 80 ? 6 : 0), 0, 100);

  // Latency — lower ms is better; map 0ms => 100, 250ms => 0.
  const latency = clamp(100 - pool.latencyMs * 0.55, 0, 100);

  // Energy — directly use clean %.
  const energy = clamp(pool.energyClean, 0, 100);

  // Sovereignty — pool tier must meet or exceed input requirement.
  const required = SENSITIVITY_TIER[input.sensitivity];
  const sovereignty = pool.sovereigntyTier >= required
    ? clamp(70 + (pool.sovereigntyTier - required) * 10, 0, 100)
    : clamp(35 - (required - pool.sovereigntyTier) * 18, 0, 100);

  // Availability — capacity headroom.
  const availability = clamp(pool.availability, 0, 100);

  // Risk — composite of reliability and status confidence.
  const statusBonus =
    pool.status === "online"
      ? 12
      : pool.status === "limited"
        ? 0
        : pool.status === "ramping"
          ? -10
          : -22;
  const risk = clamp(pool.reliability + statusBonus, 0, 100);

  // Fit — weighted blend driven by user priorities + workload affinity.
  const wLatency = 0.05 + (input.latencyPriority / 100) * 0.32;
  const wEnergy = 0.04 + (input.energyPriority / 100) * 0.22;
  const wReliab = 0.06 + (input.reliabilityPriority / 100) * 0.22;
  const wCost = 0.1 + (budgetPressure / 100) * 0.28;
  const wSov = input.sensitivity === "public" ? 0.04 : input.sensitivity === "restricted" ? 0.1 : 0.22;
  const wAvail = 0.06 + (input.urgency / 100) * 0.18;
  const total = wLatency + wEnergy + wReliab + wCost + wSov + wAvail;

  let fit =
    (latency * wLatency +
      energy * wEnergy +
      risk * wReliab +
      cost * wCost +
      sovereignty * wSov +
      availability * wAvail) /
    total;

  // Workload affinity bumps
  if (pool.bestFor.includes(input.workloadType)) fit += 8;
  if (input.region !== "any" && pool.region === input.region) fit += 5;
  if (input.region !== "any" && !pool.regions.includes(input.region as Region)) fit -= 10;
  if (pool.status === "future" && input.urgency > 60) fit -= 14;
  if (pool.status === "ramping" && input.urgency > 80) fit -= 8;
  if (input.sensitivity === "sovereign" && pool.sovereigntyTier < 4) fit -= 18;

  fit = clamp(fit, 0, 100);

  return { cost, latency, energy, sovereignty, availability, risk, fit };
}

function reasonsFor(pool: ComputePool, scores: RouteScores, input: WorkloadInput): string[] {
  const r: string[] = [];
  if (scores.cost >= 70) r.push(`Strong unit economics at ~$${pool.hourlyRate.toFixed(2)}/GPU-hr.`);
  if (scores.latency >= 70) r.push(`Median latency near ${pool.latencyMs}ms suits this workload.`);
  if (scores.energy >= 80) r.push(`${pool.energyClean}% clean energy mix.`);
  if (scores.sovereignty >= 80 && input.sensitivity !== "public")
    r.push(`Meets ${input.sensitivity} data requirements with margin.`);
  if (scores.risk >= 85) r.push(`Operationally mature with ${pool.reliability}% reliability history.`);
  if (pool.bestFor.includes(input.workloadType))
    r.push(`Pool is purpose-fit for ${input.workloadType.replace("-", " ")} workloads.`);
  if (r.length === 0) r.push("Acceptable trade-off across your constraints.");
  return r.slice(0, 4);
}

function warningsFor(pool: ComputePool, scores: RouteScores, input: WorkloadInput): string[] {
  const w: string[] = [];
  if (scores.sovereignty < 60 && input.sensitivity !== "public")
    w.push("Sovereignty tier below your data sensitivity level — review residency policy.");
  if (scores.availability < 40)
    w.push("Limited capacity headroom — expect queueing or partial allocation.");
  if (pool.status === "future")
    w.push("Pool is not generally available yet — treat as forward-routed capacity.");
  if (pool.status === "ramping")
    w.push("Operator is still ramping — reserve fallback capacity elsewhere.");
  if (input.region !== "any" && !pool.regions.includes(input.region as Region))
    w.push(`Region preference (${input.region}) is not natively served by this pool.`);
  if (scores.latency < 40 && input.latencyPriority > 60)
    w.push("Latency below your stated priority — not ideal for real-time paths.");
  return w.slice(0, 3);
}

export function routeWorkload(input: WorkloadInput): RoutingReport {
  const scored = COMPUTE_POOLS.map((pool) => {
    const scores = scorePool(pool, input);
    const reasons = reasonsFor(pool, scores, input);
    const warnings = warningsFor(pool, scores, input);
    // Cost estimate: assume ~720 GPU-hrs/mo per allocation slice baseline.
    const monthlyHours = 720;
    const estimatedMonthlyCost = Math.round(pool.hourlyRate * monthlyHours);
    return {
      pool,
      scores,
      allocation: 0,
      reasons,
      warnings,
      estimatedMonthlyCost,
      estimatedLatencyMs: pool.latencyMs,
    } as RouteOption;
  }).sort((a, b) => b.scores.fit - a.scores.fit);

  // Split: top 3, weighted by fit, normalized to 100.
  const top = scored.slice(0, 3);
  const fitSum = top.reduce((s, o) => s + o.scores.fit, 0) || 1;
  const split = top.map((o, i) => ({
    ...o,
    allocation:
      i === top.length - 1
        ? 100 -
          top
            .slice(0, -1)
            .reduce((s, x) => s + Math.round((x.scores.fit / fitSum) * 100), 0)
        : Math.round((o.scores.fit / fitSum) * 100),
  }));

  const recommended = split[0];
  const totalEstimatedCost = split.reduce(
    (s, o) => s + Math.round((o.estimatedMonthlyCost * o.allocation) / 100),
    0,
  );

  const explanation = buildExplanation(input, recommended, split);
  const whyThisRouteWon = buildWhyWon(input, recommended);
  const nextStep = buildNextStep(input, recommended);

  return {
    workload: input,
    options: scored,
    recommended,
    split,
    explanation,
    whyThisRouteWon,
    nextStep,
    totalEstimatedCost,
  };
}

function buildExplanation(input: WorkloadInput, top: RouteOption, split: RouteOption[]): string {
  const second = split[1];
  const third = split[2];
  const tail =
    second && third
      ? `We split ${split[0].allocation}% to ${top.pool.name}, ${second.allocation}% to ${second.pool.name}, and ${third.allocation}% to ${third.pool.name} so you do not depend on a single supplier.`
      : `${top.pool.name} carries most of the workload.`;
  return `For a ${input.workloadType.replace("-", " ")} workload with a $${input.monthlyBudget.toLocaleString()} monthly envelope, ${top.pool.name} is the best primary route. ${tail}`;
}

function buildWhyWon(input: WorkloadInput, option: RouteOption): string {
  const drivers: string[] = [];
  if (option.scores.cost >= 70) drivers.push("cost efficiency");
  if (option.scores.latency >= 70 && input.latencyPriority > 40) drivers.push("low latency");
  if (option.scores.energy >= 80 && input.energyPriority > 40) drivers.push("clean energy mix");
  if (option.scores.sovereignty >= 80 && input.sensitivity !== "public")
    drivers.push("data sovereignty fit");
  if (option.scores.risk >= 85 && input.reliabilityPriority > 40)
    drivers.push("operational reliability");
  if (drivers.length === 0) drivers.push("balanced trade-offs across all constraints");
  return `${option.pool.name} won on ${drivers.slice(0, 3).join(", ")}.`;
}

function buildNextStep(input: WorkloadInput, option: RouteOption): string {
  if (option.pool.status === "online")
    return `Provision a pilot allocation on ${option.pool.name} this week, mirror to the #2 pool for failover, then expand the split once steady-state cost and latency are confirmed.`;
  if (option.pool.status === "limited")
    return `Reserve a quota window on ${option.pool.name} now — pool is capacity-limited — and stage the rest on the secondary route.`;
  if (option.pool.status === "ramping")
    return `Stage an early-access agreement with ${option.pool.name} and keep production on the secondary pool until they hit GA.`;
  return `Forward-route demand to ${option.pool.name} via a memorandum of capacity, and serve current load from the #2 and #3 pools.`;
}

// Light-weight initial workload used for the home preview.
export function defaultWorkload(): WorkloadInput {
  return {
    name: "Frontier-7B finetune",
    workloadType: "training",
    monthlyBudget: 80_000,
    latencyPriority: 35,
    energyPriority: 70,
    sensitivity: "restricted",
    reliabilityPriority: 75,
    region: "any",
    urgency: 60,
  };
}
