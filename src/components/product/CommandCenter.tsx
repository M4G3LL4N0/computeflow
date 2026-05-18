import { Activity, Cpu, Gauge, Leaf, LineChart, Workflow } from "lucide-react";
import { COMPUTE_POOLS } from "@/lib/compute-data";

const ACCENT_DOT: Record<string, string> = {
  blue: "node-dot",
  violet: "node-dot violet",
  mint: "node-dot mint",
  gold: "node-dot gold",
  cyan: "node-dot cyan",
};

const QUEUE = [
  {
    name: "Frontier-7B finetune",
    type: "training",
    primary: "Private AI Datacenter",
    state: "running",
    eta: "4h 12m",
    accent: "cyan",
  },
  {
    name: "Realtime customer copilot",
    type: "inference",
    primary: "Hyperscale Cloud GPU",
    state: "running",
    eta: "always-on",
    accent: "blue",
  },
  {
    name: "EU patient triage model",
    type: "training",
    primary: "Sovereign EU Cluster",
    state: "queued",
    eta: "begins 02:10 UTC",
    accent: "violet",
  },
  {
    name: "Factory fleet motion planner",
    type: "robotics",
    primary: "Edge Robotics Mesh",
    state: "running",
    eta: "rolling",
    accent: "mint",
  },
  {
    name: "Materials sim sweep",
    type: "simulation",
    primary: "Research Supercomputing",
    state: "queued",
    eta: "08:00 UTC",
    accent: "gold",
  },
  {
    name: "Nightly embedding refresh",
    type: "batch",
    primary: "Orbital Compute Node",
    state: "forward",
    eta: "next pass",
    accent: "cyan",
  },
];

export default function CommandCenter() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Kpi
          icon={<Cpu size={14} />}
          label="Simulated capacity"
          value="48.6 EFLOPs"
          hint="Across 7 pools · MVP model"
        />
        <Kpi
          icon={<Workflow size={14} />}
          label="Active routing plans"
          value="142"
          hint="Across 31 customer workloads"
        />
        <Kpi
          icon={<LineChart size={14} />}
          label="Avg. cost savings"
          value="34%"
          hint="vs. single-vendor baseline"
          tone="mint"
        />
        <Kpi
          icon={<Leaf size={14} />}
          label="Clean-energy routed"
          value="71%"
          hint="Weighted across all workloads"
          tone="gold"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="cf-shell p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Activity size={15} className="text-[#5b8cff]" />
              Global compute pools
            </div>
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/45">
              Live simulated state
            </span>
          </div>

          <div className="mt-5 space-y-3">
            {COMPUTE_POOLS.map((pool) => (
              <div key={pool.id} className="cf-card flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className={`${ACCENT_DOT[pool.accent]} !h-3 !w-3`} aria-hidden />
                  <div>
                    <div className="text-sm font-semibold text-white">{pool.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                      {pool.category.replace(/-/g, " ")} · {pool.region}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-[11px] uppercase tracking-[0.18em] text-white/55 sm:grid-cols-4">
                  <Stat label="Avail" value={`${pool.availability}%`} />
                  <Stat label="Latency" value={`${pool.latencyMs}ms`} />
                  <Stat label="Clean" value={`${pool.energyClean}%`} />
                  <Stat label="$/h" value={`$${pool.hourlyRate.toFixed(2)}`} hide="sm" />
                </div>
                <span
                  className={`pill ${
                    pool.status === "online"
                      ? "pill-mint"
                      : pool.status === "future"
                        ? "pill-gold"
                        : ""
                  } !text-[10px]`}
                >
                  {pool.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="cf-shell p-5 sm:p-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Gauge size={15} className="text-[#5b8cff]" />
                Workload queue
              </div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                {QUEUE.length} live
              </span>
            </div>
            <ul className="mt-5 space-y-3">
              {QUEUE.map((q) => (
                <li key={q.name} className="cf-card flex items-center justify-between gap-3 p-3.5">
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white">{q.name}</div>
                    <div className="truncate text-[11px] uppercase tracking-[0.18em] text-white/45">
                      {q.type} · {q.primary}
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
                        q.state === "running"
                          ? "text-[#5af0c0]"
                          : q.state === "queued"
                            ? "text-[#f3c969]"
                            : "text-[#a78bfa]"
                      }`}
                    >
                      {q.state}
                    </div>
                    <div className="text-[11px] text-white/55">{q.eta}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <NetworkMap />
        </div>
      </div>
    </div>
  );
}

function Kpi({
  icon,
  label,
  value,
  hint,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  hint?: string;
  tone?: "mint" | "gold";
}) {
  const ring =
    tone === "mint" ? "ring-1 ring-[#5af0c0]/25" : tone === "gold" ? "ring-1 ring-[#f3c969]/25" : "";
  return (
    <div className={`cf-shell-flat p-4 ${ring}`}>
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/45">
        {icon}
        <span>{label}</span>
      </div>
      <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
      {hint ? <div className="mt-1 text-[11px] text-white/45">{hint}</div> : null}
    </div>
  );
}

function Stat({
  label,
  value,
  hide,
}: {
  label: string;
  value: string;
  hide?: "sm";
}) {
  return (
    <div className={hide === "sm" ? "hidden sm:block" : ""}>
      <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">{label}</div>
      <div className="mt-0.5 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

function NetworkMap() {
  return (
    <div className="cf-shell relative overflow-hidden p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-white">Global routing fabric</div>
        <span className="text-[11px] uppercase tracking-[0.22em] text-white/45">
          schematic
        </span>
      </div>
      <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_45%,rgba(91,140,255,0.18),transparent_60%),linear-gradient(180deg,#070b1a,#04060d)]">
        <div className="absolute inset-0 cf-bg-grid opacity-50" aria-hidden />
        {/* Continents abstract bands */}
        <div className="absolute top-[28%] left-[6%] h-[18%] w-[28%] rounded-[40%] bg-white/4" />
        <div className="absolute top-[26%] left-[40%] h-[16%] w-[22%] rounded-[40%] bg-white/4" />
        <div className="absolute top-[34%] left-[64%] h-[20%] w-[28%] rounded-[40%] bg-white/4" />
        <div className="absolute bottom-[12%] left-[28%] h-[14%] w-[16%] rounded-[40%] bg-white/4" />

        {/* Connection paths */}
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
          {COMPUTE_POOLS.map((a) =>
            COMPUTE_POOLS.filter((b) => b.id !== a.id)
              .slice(0, 3)
              .map((b) => (
                <line
                  key={`${a.id}-${b.id}`}
                  x1={`${a.position.x}%`}
                  y1={`${a.position.y}%`}
                  x2={`${b.position.x}%`}
                  y2={`${b.position.y}%`}
                  stroke="rgba(120,160,255,0.18)"
                  strokeWidth="1"
                />
              )),
          )}
        </svg>

        {COMPUTE_POOLS.map((pool) => (
          <div
            key={pool.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${pool.position.x}%`, top: `${pool.position.y}%` }}
          >
            <span className={`${ACCENT_DOT[pool.accent]} !h-3 !w-3`} />
            <div className="mt-2 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-white/60">
              {pool.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
