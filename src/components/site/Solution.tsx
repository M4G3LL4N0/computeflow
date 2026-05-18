import { Compass, GitMerge, Layers, Radar } from "lucide-react";
import Section from "@/components/site/Section";

const SOLUTIONS = [
  {
    icon: <Compass size={18} />,
    title: "One control plane",
    text: "Cloud GPUs, private clusters, sovereign DCs, edge, and orbital — all routed from one place, with one mental model.",
  },
  {
    icon: <Radar size={18} />,
    title: "Six-axis scoring",
    text: "Cost, latency, energy, sovereignty, risk, and availability — scored locally, deterministically, every time.",
  },
  {
    icon: <GitMerge size={18} />,
    title: "Split routing by default",
    text: "Never bet on one supplier. ComputeFlow recommends a weighted split across the top three pools.",
  },
  {
    icon: <Layers size={18} />,
    title: "Forward-routes new supply",
    text: "When new compute comes online — anywhere — ComputeFlow turns it into usable capacity in the same UI.",
  },
];

export default function Solution() {
  return (
    <Section
      id="solution"
      kicker="The solution"
      title={<>The neutral <span className="text-grad">control plane</span> for global compute</>}
      intro="ComputeFlow makes every compute source — cloud, private, sovereign, edge, orbital, future GW-scale — feel like one programmable surface."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SOLUTIONS.map((s) => (
          <div key={s.title} className="cf-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#5b8cff]/30 bg-[#5b8cff]/10 text-[#cfe0ff]">
              {s.icon}
            </div>
            <div className="mt-4 text-base font-semibold text-white">{s.title}</div>
            <p className="mt-2 text-sm leading-6 text-white/65">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
