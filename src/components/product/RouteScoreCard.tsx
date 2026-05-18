import { AlertTriangle, CheckCircle2 } from "lucide-react";
import type { RouteOption } from "@/lib/routing";

const ACCENT_DOT: Record<string, string> = {
  blue: "node-dot",
  violet: "node-dot violet",
  mint: "node-dot mint",
  gold: "node-dot gold",
  cyan: "node-dot cyan",
};

export default function RouteScoreCard({
  option,
  rank,
  primary,
}: {
  option: RouteOption;
  rank: number;
  primary?: boolean;
}) {
  const { pool, scores } = option;
  return (
    <div
      className={`cf-card p-5 ${primary ? "ring-1 ring-[#5b8cff]/40" : ""}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className={`${ACCENT_DOT[pool.accent]} !h-3 !w-3`} aria-hidden />
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">
              #{rank} · {pool.category.replace(/-/g, " ")}
            </div>
            <div className="text-base font-semibold text-white">{pool.name}</div>
            <div className="text-xs text-white/55">{pool.operator}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] uppercase tracking-[0.22em] text-white/40">
            Fit score
          </div>
          <div className="text-2xl font-semibold text-white">
            {Math.round(scores.fit)}
            <span className="text-sm text-white/45">/100</span>
          </div>
          {primary ? (
            <div className="mt-1 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-[#94f3c8]">
              <CheckCircle2 size={11} /> Primary
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <ScoreRow label="Cost" value={scores.cost} />
        <ScoreRow label="Latency" value={scores.latency} />
        <ScoreRow label="Energy" value={scores.energy} tone="mint" />
        <ScoreRow label="Sovereignty" value={scores.sovereignty} />
        <ScoreRow label="Risk-adjusted" value={scores.risk} tone="gold" />
        <ScoreRow label="Availability" value={scores.availability} />
      </div>

      <div className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
        <Meta label="Allocation" value={`${option.allocation}%`} />
        <Meta label="Est. monthly" value={`$${option.estimatedMonthlyCost.toLocaleString()}`} />
        <Meta label="Median latency" value={`${option.estimatedLatencyMs}ms`} />
      </div>

      <div className="mt-5">
        <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">
          Why it ranked here
        </div>
        <ul className="mt-2 space-y-1.5 text-sm text-white/75">
          {option.reasons.map((r) => (
            <li key={r} className="flex gap-2">
              <CheckCircle2 size={14} className="mt-[3px] flex-none text-[#5af0c0]" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>

      {option.warnings.length > 0 ? (
        <div className="mt-4 rounded-xl border border-[#f3c969]/25 bg-[#f3c969]/8 p-3">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#f3dca5]">
            Watch outs
          </div>
          <ul className="mt-2 space-y-1.5 text-sm text-white/75">
            {option.warnings.map((w) => (
              <li key={w} className="flex gap-2">
                <AlertTriangle size={14} className="mt-[3px] flex-none text-[#f3c969]" />
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function ScoreRow({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone?: "gold" | "mint";
}) {
  const cls = tone === "gold" ? "score-bar gold" : tone === "mint" ? "score-bar mint" : "score-bar";
  return (
    <div>
      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-white/50">
        <span>{label}</span>
        <span className="font-mono text-white/80">{Math.round(value)}</span>
      </div>
      <div className={`${cls} mt-1.5`}>
        <span style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="cf-shell-flat p-3">
      <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">{label}</div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}
