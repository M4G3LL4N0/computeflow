import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 18% 20%, rgba(91,140,255,0.4), transparent 38%), radial-gradient(circle at 80% 30%, rgba(167,139,250,0.35), transparent 42%), radial-gradient(circle at 50% 90%, rgba(79,209,255,0.3), transparent 50%), linear-gradient(180deg,#070b1a,#04060d)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 cf-bg-grid opacity-60" aria-hidden />
        <div className="relative grid gap-8 px-6 py-14 sm:px-10 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <div className="pill mb-5 inline-flex">Final word</div>
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Don&apos;t bet on one factory.{" "}
              <span className="text-grad">Route across all of them.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Whenever a new GPU lights up, a new cluster comes online, or a new compute
              source goes live, ComputeFlow turns it into usable capacity for your team.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/demo" className="btn btn-primary">
                Route a workload now
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Talk to the team
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="cf-shell p-5">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                Investor-grade thesis
              </div>
              <div className="mt-3 space-y-3 text-sm text-white/80">
                <p>
                  &ldquo;The future is not only who owns compute. It is who controls where
                  compute flows.&rdquo;
                </p>
                <p className="text-white/55">
                  Owning compute is step one. Routing compute is step two. ComputeFlow is
                  step two.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
