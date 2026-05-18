import { COMPUTE_POOLS } from "@/lib/compute-data";
import Section from "@/components/site/Section";

const ACCENT_DOT: Record<string, string> = {
  blue: "node-dot",
  violet: "node-dot violet",
  mint: "node-dot mint",
  gold: "node-dot gold",
  cyan: "node-dot cyan",
};

export default function PoolNetwork() {
  return (
    <Section
      id="pools"
      kicker="The network"
      title={<>Seven compute pools. <span className="text-grad">One programmable surface.</span></>}
      intro="ComputeFlow already models the full stack of compute supply — from elastic cloud GPUs to orbital nodes and future GW-scale fab capacity."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COMPUTE_POOLS.map((p) => (
          <div key={p.id} className="cf-card p-5">
            <div className="flex items-center gap-3">
              <span className={`${ACCENT_DOT[p.accent]} !h-3 !w-3`} aria-hidden />
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                {p.category.replace(/-/g, " ")}
              </div>
            </div>
            <div className="mt-3 text-lg font-semibold text-white">{p.name}</div>
            <p className="mt-1 text-sm text-white/65">{p.tagline}</p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] uppercase tracking-[0.18em] text-white/55">
              <Meta label="Latency" value={`${p.latencyMs}ms`} />
              <Meta label="Clean" value={`${p.energyClean}%`} />
              <Meta label="$/h" value={`$${p.hourlyRate.toFixed(2)}`} />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span
                className={`pill !text-[10px] ${
                  p.status === "online"
                    ? "pill-mint"
                    : p.status === "future"
                      ? "pill-gold"
                      : ""
                }`}
              >
                {p.status}
              </span>
              <span className="pill !text-[10px]">{p.region}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-2">
      <div className="text-[10px] text-white/45">{label}</div>
      <div className="mt-0.5 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}
