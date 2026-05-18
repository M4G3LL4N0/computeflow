import Link from "next/link";
import { ArrowRight, Cpu, Globe2, Radar, Sparkles } from "lucide-react";
import GlobeMini from "@/components/site/GlobeMini";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 cf-bg-grid" aria-hidden />
      <div className="absolute inset-0 cf-bg-radial" aria-hidden />
      <span className="cf-orb top-[-6rem] left-[-6rem] h-72 w-72 bg-[#5b8cff]/40" aria-hidden />
      <span className="cf-orb top-[2rem] right-[-4rem] h-72 w-72 bg-[#a78bfa]/35" aria-hidden />
      <span className="cf-orb bottom-[-6rem] left-[30%] h-80 w-80 bg-[#4fd1ff]/25" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-16 pb-12 sm:px-6 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:pt-28 lg:pb-20">
        <div className="flex flex-col justify-center">
          <div className="pill w-fit">
            <Sparkles size={12} />
            <span>Operating system for global compute</span>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
            Terafab builds compute.{" "}
            <span className="text-grad">ComputeFlow routes it.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
            Paste a workload. ComputeFlow tells you where it should run — across cloud GPUs,
            private clusters, sovereign data centers, edge nodes, and future orbital and
            Terafab-scale supply — and exactly what trade-offs you are making.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/demo" className="btn btn-primary">
              Open the live router
              <ArrowRight size={16} />
            </Link>
            <Link href="/dashboard" className="btn btn-secondary">
              See the Command Center
            </Link>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            <StatCard
              icon={<Globe2 size={16} />}
              label="Compute pools simulated"
              value="7"
            />
            <StatCard
              icon={<Cpu size={16} />}
              label="Scoring axes"
              value="6"
              hint="cost · latency · energy · sovereignty · risk · availability"
            />
            <StatCard
              icon={<Radar size={16} />}
              label="Routing time"
              value="<200ms"
              hint="local, deterministic"
            />
          </div>
        </div>

        <div className="relative">
          <div className="cf-shell relative overflow-hidden p-5 sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/55">
                <span className="live-dot" />
                Live routing surface
              </div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                v0.1 · MVP
              </div>
            </div>

            <div className="mt-5">
              <GlobeMini />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <RouteChip
                accent="blue"
                label="Cloud GPU · US-East"
                value="58% • $1.9k/mo"
              />
              <RouteChip
                accent="violet"
                label="Sovereign · EU"
                value="22% • $890/mo"
              />
              <RouteChip
                accent="mint"
                label="Edge robotics"
                value="14% • 6ms p50"
              />
              <RouteChip
                accent="gold"
                label="Terafab-scale (forward)"
                value="6% • reserved"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  label,
  value,
  hint,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="cf-shell-flat p-4">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/45">
        {icon}
        <span>{label}</span>
      </div>
      <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
      {hint ? <div className="mt-1 text-[11px] text-white/45">{hint}</div> : null}
    </div>
  );
}

function RouteChip({
  accent,
  label,
  value,
}: {
  accent: "blue" | "violet" | "mint" | "gold";
  label: string;
  value: string;
}) {
  const dot =
    accent === "violet"
      ? "node-dot violet"
      : accent === "mint"
        ? "node-dot mint"
        : accent === "gold"
          ? "node-dot gold"
          : "node-dot";
  return (
    <div className="cf-shell-flat flex items-center gap-3 p-3">
      <span className={`${dot} !h-3 !w-3`} aria-hidden />
      <div className="min-w-0">
        <div className="truncate text-[12px] text-white/75">{label}</div>
        <div className="truncate text-[12px] font-semibold text-white">{value}</div>
      </div>
    </div>
  );
}
