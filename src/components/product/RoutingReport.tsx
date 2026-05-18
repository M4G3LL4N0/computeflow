import { ArrowRight, Sparkles, Workflow } from "lucide-react";
import RouteScoreCard from "@/components/product/RouteScoreCard";
import type { RoutingReport as Report } from "@/lib/routing";

const ACCENT_DOT: Record<string, string> = {
  blue: "node-dot",
  violet: "node-dot violet",
  mint: "node-dot mint",
  gold: "node-dot gold",
  cyan: "node-dot cyan",
};

export default function RoutingReport({ report }: { report: Report }) {
  const { split, recommended, explanation, whyThisRouteWon, nextStep, totalEstimatedCost } = report;
  return (
    <div className="space-y-6">
      <div className="cf-shell p-5 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="pill"><Sparkles size={11} /> Recommendation</div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Route {report.workload.name || "this workload"} to{" "}
              <span className="text-grad">{recommended.pool.name}</span>
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
              {explanation}
            </p>
          </div>
          <div className="cf-shell-flat min-w-[220px] p-4 text-sm">
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">
              Blended monthly cost
            </div>
            <div className="mt-1 text-2xl font-semibold text-white">
              ${totalEstimatedCost.toLocaleString()}
            </div>
            <div className="mt-1 text-[11px] text-white/45">
              Across {split.length} routes · weighted by fit
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="cf-shell-flat p-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">
              Why this route won
            </div>
            <p className="mt-2 text-sm leading-6 text-white/80">{whyThisRouteWon}</p>
          </div>
          <div className="cf-shell-flat p-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">
              Operational next step
            </div>
            <p className="mt-2 text-sm leading-6 text-white/80">{nextStep}</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/45">
            <Workflow size={12} />
            Recommended split
          </div>
          <div className="mt-3 flex w-full overflow-hidden rounded-full border border-white/10 bg-white/[0.04]">
            {split.map((s) => (
              <div
                key={s.pool.id}
                className="flex items-center justify-center px-2 py-2 text-[11px] font-semibold text-[#04060d]"
                style={{
                  width: `${s.allocation}%`,
                  background:
                    s.pool.accent === "violet"
                      ? "linear-gradient(90deg,#bba1ff,#7a52ff)"
                      : s.pool.accent === "mint"
                        ? "linear-gradient(90deg,#9ff5d4,#22b48a)"
                        : s.pool.accent === "gold"
                          ? "linear-gradient(90deg,#ffe6a0,#d6a13a)"
                          : s.pool.accent === "cyan"
                            ? "linear-gradient(90deg,#a6ecff,#1aa5d8)"
                            : "linear-gradient(90deg,#c5d6ff,#5b8cff)",
                }}
                title={`${s.pool.name} — ${s.allocation}%`}
              >
                {s.allocation}%
              </div>
            ))}
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {split.map((s) => (
              <div
                key={s.pool.id}
                className="cf-shell-flat flex items-center gap-3 p-3"
              >
                <span className={`${ACCENT_DOT[s.pool.accent]} !h-3 !w-3`} aria-hidden />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold text-white">
                    {s.pool.name}
                  </div>
                  <div className="text-[11px] text-white/55">
                    {s.allocation}% · ${s.estimatedMonthlyCost.toLocaleString()}/mo · {s.estimatedLatencyMs}ms
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {split.map((option, i) => (
          <RouteScoreCard
            key={option.pool.id}
            option={option}
            rank={i + 1}
            primary={i === 0}
          />
        ))}
      </div>

      <div className="cf-shell-flat flex flex-wrap items-center justify-between gap-3 p-4">
        <div className="text-sm text-white/65">
          Want this routed automatically as soon as new capacity comes online?
        </div>
        <a href="/contact" className="btn btn-secondary !py-2 !px-3 !text-[13px]">
          Set up auto-routing <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
