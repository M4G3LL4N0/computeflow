import { COMPUTE_POOLS } from "@/lib/compute-data";

export default function GlobeMini() {
  return (
    <div className="relative aspect-[16/12] w-full overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_40%,rgba(91,140,255,0.18),transparent_60%),linear-gradient(180deg,#070b1a,#04060d)]">
      {/* Orbit rings */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="h-[88%] w-[88%] rounded-full border border-white/8" />
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <div className="h-[64%] w-[64%] rounded-full border border-white/10" />
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <div className="h-[36%] w-[36%] rounded-full border border-white/14 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.18),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(91,140,255,0.35),transparent_60%)]" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/8" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/8" />
      </div>

      {/* Nodes */}
      {COMPUTE_POOLS.map((pool) => {
        const dotCls =
          pool.accent === "violet"
            ? "node-dot violet"
            : pool.accent === "mint"
              ? "node-dot mint"
              : pool.accent === "gold"
                ? "node-dot gold"
                : pool.accent === "cyan"
                  ? "node-dot cyan"
                  : "node-dot";
        return (
          <div
            key={pool.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${pool.position.x}%`, top: `${pool.position.y}%` }}
            title={pool.name}
          >
            <span className={`${dotCls} !h-2.5 !w-2.5`} />
          </div>
        );
      })}

      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/45">
        <span>Compute pools online</span>
        <span>Global · sovereign · edge · orbital</span>
      </div>
    </div>
  );
}
