import { AlertTriangle, Layers, Lock, ServerCog } from "lucide-react";
import Section from "@/components/site/Section";

const PROBLEMS = [
  {
    icon: <ServerCog size={18} />,
    title: "Compute is fragmenting",
    text: "Hyperscalers, neoclouds, sovereign clusters, private DCs, edge mesh, and tomorrow&apos;s orbital + GW-scale supply. No team can shop across all of it manually.",
  },
  {
    icon: <Layers size={18} />,
    title: "Trade-offs are invisible",
    text: "Cost, latency, energy, sovereignty, and risk move together — but most teams pick a vendor on price, then discover the trade-offs later.",
  },
  {
    icon: <Lock size={18} />,
    title: "Sovereignty is now a hard constraint",
    text: "Customer data, regulators, and procurement teams are all rewriting where workloads are allowed to run.",
  },
  {
    icon: <AlertTriangle size={18} />,
    title: "Capacity shocks are constant",
    text: "Quota changes, outages, new supply coming online — your routing plan should change with them. Spreadsheets can&apos;t.",
  },
];

export default function Problem() {
  return (
    <Section
      id="problem"
      kicker="The problem"
      title={<>Owning compute is hard. <span className="text-grad">Using it well is harder.</span></>}
      intro="Every team running serious AI infrastructure is making the same routing decisions in slack threads, spreadsheets, and tribal knowledge. That doesn&apos;t scale."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROBLEMS.map((p) => (
          <div key={p.title} className="cf-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#f3c969]/30 bg-[#f3c969]/10 text-[#f3dca5]">
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
  );
}
