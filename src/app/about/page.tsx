import type { Metadata } from "next";
import { SubpageVisual } from "@/components/SubpageVisual";
import { Network, Sparkles, Workflow } from "lucide-react";
import CTA from "@/components/site/CTA";
import Section from "@/components/site/Section";

export const metadata: Metadata = {
  title: "About — ComputeFlow",
  description:
    "ComputeFlow is the operating system for global compute routing. We help AI teams decide where workloads should run across every compute source.",
};

const PRINCIPLES = [
  {
    icon: <Network size={18} />,
    title: "Neutrality is the product",
    text: "We don&apos;t pick sides between hyperscalers, sovereign DCs, edge, or future fab-scale supply. The routing layer is only valuable if it&apos;s neutral.",
  },
  {
    icon: <Workflow size={18} />,
    title: "Split routing by default",
    text: "Every routing plan is a weighted split. Single-vendor lock-in is a bug, not a feature.",
  },
  {
    icon: <Sparkles size={18} />,
    title: "Explain everything",
    text: "Every recommendation comes with reasons, warnings, and an operational next step. No black boxes.",
  },
];

export default function AboutPage() {
  return (
    <>
    <SubpageVisual variant="about" />
      <>
      <Section
        kicker="About"
        title={<>We&apos;re building the <span className="text-grad">routing layer</span> for the compute decade</>}
        intro="ComputeFlow is the operating system for global compute. We help AI teams, research labs, robotics companies, model builders, and infrastructure teams decide where workloads should run across cloud, private, sovereign, edge, orbital, and future fab-scale compute."
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="cf-shell p-6 sm:p-8">
            <div className="pill mb-4 inline-flex">Thesis</div>
            <p className="text-lg leading-8 text-white/80">
              The future is not only who owns compute. It is who controls where compute
              flows. Compute supply is exploding — Terafab and others are pouring tens of
              billions into chips, fabs, GW-scale clusters, even orbital nodes. The
              software layer that decides which workload runs where is one of the most
              valuable, unbuilt companies in infrastructure.
            </p>
            <p className="mt-4 text-base leading-7 text-white/65">
              We&apos;re building it. Asset-light. Neutral. Software-defined. The kind of
              company that benefits from every new compute source that comes online —
              including, especially, the ones we admire most.
            </p>
          </div>
          <div className="cf-shell-flat p-6 sm:p-8">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">
              Investor-grade soundbites
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
              <li>&ldquo;Terafab builds compute. We make it usable.&rdquo;</li>
              <li>&ldquo;Owning compute is step one. Routing compute is step two.&rdquo;</li>
              <li>
                &ldquo;The neutral control plane for every GPU, cluster, edge device, and
                orbital node.&rdquo;
              </li>
              <li>
                &ldquo;When new compute comes online, ComputeFlow turns it into usable
                capacity.&rdquo;
              </li>
              <li>&ldquo;Don&apos;t bet on one factory. Route across all of them.&rdquo;</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        kicker="Principles"
        title={<>How we build, <span className="text-grad">opinionated</span></>}
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="cf-card p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[#cfe0ff]">
                {p.icon}
              </div>
              <div className="mt-4 text-base font-semibold text-white">{p.title}</div>
              <p
                className="mt-2 text-sm leading-6 text-white/65"
                dangerouslySetInnerHTML={{ __html: p.text }}
              />
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  </>
  )
}
