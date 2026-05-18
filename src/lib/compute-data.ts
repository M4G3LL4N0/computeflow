// ComputeFlow simulated compute pool catalogue.
// All values are illustrative for the MVP routing engine.

export type Region = "us-east" | "us-west" | "eu" | "apac" | "global" | "orbital";

export type WorkloadType =
  | "training"
  | "inference"
  | "simulation"
  | "robotics"
  | "edge-orbital"
  | "batch";

export type Sensitivity = "public" | "restricted" | "regulated" | "sovereign";

export type ComputePool = {
  id: string;
  name: string;
  operator: string;
  category:
    | "public-cloud"
    | "private-ai"
    | "sovereign"
    | "edge-robotics"
    | "research-hpc"
    | "orbital"
    | "terafab-scale";
  region: Region;
  regions: Region[];
  // 0-100 scale, higher is better unless noted
  costEfficiency: number;
  latencyMs: number; // lower is better
  energyClean: number; // % clean energy
  sovereigntyTier: 0 | 1 | 2 | 3 | 4; // higher = stricter data residency
  availability: number; // 0-100, capacity headroom
  reliability: number; // 0-100, SLA history
  hourlyRate: number; // $ / GPU-hr equivalent
  status: "online" | "ramping" | "future" | "limited";
  bestFor: WorkloadType[];
  tagline: string;
  accent: "blue" | "violet" | "gold" | "mint" | "cyan";
  position: { x: number; y: number }; // % coordinates on schematic globe
};

export const COMPUTE_POOLS: ComputePool[] = [
  {
    id: "cloud-hyperscale",
    name: "Hyperscale Cloud GPU",
    operator: "Public cloud — multi-provider",
    category: "public-cloud",
    region: "us-east",
    regions: ["us-east", "us-west", "eu", "apac"],
    costEfficiency: 62,
    latencyMs: 38,
    energyClean: 64,
    sovereigntyTier: 1,
    availability: 88,
    reliability: 92,
    hourlyRate: 2.6,
    status: "online",
    bestFor: ["training", "inference", "batch"],
    tagline: "Elastic H100 / B200 capacity across major regions.",
    accent: "blue",
    position: { x: 26, y: 38 },
  },
  {
    id: "private-ai-dc",
    name: "Private AI Datacenter",
    operator: "Tier-1 colocation partner",
    category: "private-ai",
    region: "us-west",
    regions: ["us-west", "us-east"],
    costEfficiency: 78,
    latencyMs: 22,
    energyClean: 71,
    sovereigntyTier: 2,
    availability: 74,
    reliability: 95,
    hourlyRate: 1.9,
    status: "online",
    bestFor: ["training", "inference", "simulation"],
    tagline: "Reserved GPU pods. Predictable cost, dedicated tenants.",
    accent: "cyan",
    position: { x: 16, y: 50 },
  },
  {
    id: "sovereign-eu",
    name: "Sovereign EU Cluster",
    operator: "EU-only operator consortium",
    category: "sovereign",
    region: "eu",
    regions: ["eu"],
    costEfficiency: 55,
    latencyMs: 48,
    energyClean: 88,
    sovereigntyTier: 4,
    availability: 67,
    reliability: 93,
    hourlyRate: 3.1,
    status: "online",
    bestFor: ["training", "inference", "batch"],
    tagline: "Data never leaves the EU. Audited supply chain.",
    accent: "violet",
    position: { x: 50, y: 32 },
  },
  {
    id: "edge-robotics",
    name: "Edge Robotics Mesh",
    operator: "On-site + 5G edge nodes",
    category: "edge-robotics",
    region: "global",
    regions: ["us-east", "us-west", "eu", "apac"],
    costEfficiency: 48,
    latencyMs: 6,
    energyClean: 58,
    sovereigntyTier: 3,
    availability: 71,
    reliability: 86,
    hourlyRate: 3.4,
    status: "online",
    bestFor: ["robotics", "edge-orbital", "inference"],
    tagline: "Millisecond inference next to the machines that need it.",
    accent: "mint",
    position: { x: 70, y: 58 },
  },
  {
    id: "research-hpc",
    name: "Research Supercomputing",
    operator: "National lab partner pool",
    category: "research-hpc",
    region: "global",
    regions: ["us-east", "eu", "apac"],
    costEfficiency: 84,
    latencyMs: 65,
    energyClean: 79,
    sovereigntyTier: 3,
    availability: 42,
    reliability: 90,
    hourlyRate: 1.4,
    status: "limited",
    bestFor: ["simulation", "training", "batch"],
    tagline: "Cheap FLOPs for long-horizon training and physical simulation.",
    accent: "gold",
    position: { x: 82, y: 30 },
  },
  {
    id: "orbital",
    name: "Orbital Compute Node",
    operator: "LEO solar compute platform",
    category: "orbital",
    region: "orbital",
    regions: ["orbital"],
    costEfficiency: 38,
    latencyMs: 180,
    energyClean: 99,
    sovereigntyTier: 2,
    availability: 28,
    reliability: 72,
    hourlyRate: 5.2,
    status: "ramping",
    bestFor: ["batch", "edge-orbital", "simulation"],
    tagline: "Solar-only batch compute above the weather and the grid.",
    accent: "cyan",
    position: { x: 60, y: 12 },
  },
  {
    id: "terafab-scale",
    name: "Terafab-Scale Supplier Pool",
    operator: "Future GW-scale fab partners",
    category: "terafab-scale",
    region: "global",
    regions: ["us-east", "us-west", "apac"],
    costEfficiency: 90,
    latencyMs: 30,
    energyClean: 76,
    sovereigntyTier: 1,
    availability: 18,
    reliability: 80,
    hourlyRate: 1.1,
    status: "future",
    bestFor: ["training", "batch", "simulation"],
    tagline: "When new GW-scale supply ships, ComputeFlow routes onto it.",
    accent: "gold",
    position: { x: 40, y: 70 },
  },
];

export const WORKLOAD_TYPES: { id: WorkloadType; label: string; hint: string }[] = [
  { id: "training", label: "Training run", hint: "Long-horizon model training, fine-tuning, RL." },
  { id: "inference", label: "Inference fleet", hint: "Serving production model traffic at scale." },
  { id: "simulation", label: "Simulation", hint: "Physical sims, fluid, materials, world models." },
  { id: "robotics", label: "Robotics", hint: "Embodied AI, fleets, factory automation." },
  { id: "edge-orbital", label: "Edge / Orbital", hint: "Latency-sensitive or off-grid workloads." },
  { id: "batch", label: "Batch jobs", hint: "Background processing, evals, embeddings." },
];

export const REGIONS: { id: Region | "any"; label: string }[] = [
  { id: "any", label: "Any region" },
  { id: "us-east", label: "US East" },
  { id: "us-west", label: "US West" },
  { id: "eu", label: "Europe" },
  { id: "apac", label: "Asia Pacific" },
  { id: "global", label: "Global" },
  { id: "orbital", label: "Orbital" },
];

export const SENSITIVITY: { id: Sensitivity; label: string; tier: number }[] = [
  { id: "public", label: "Public data", tier: 1 },
  { id: "restricted", label: "Restricted / internal", tier: 2 },
  { id: "regulated", label: "Regulated (PII / health / finance)", tier: 3 },
  { id: "sovereign", label: "Sovereign — must stay in region", tier: 4 },
];
