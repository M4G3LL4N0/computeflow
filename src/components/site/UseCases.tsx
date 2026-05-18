import { Atom, Building, Cpu, FlaskConical, Radio, Rocket } from "lucide-react";
import Section from "@/components/site/Section";

const CASES = [
  {
    icon: <Cpu size={18} />,
    title: "AI labs & model builders",
    text: "Split training across private + research pools, pre-route inference to clouds, reserve forward capacity.",
  },
  {
    icon: <Building size={18} />,
    title: "Enterprise AI platforms",
    text: "Centralize cost, sovereignty, and risk policy across product teams without a procurement bottleneck.",
  },
  {
    icon: <FlaskConical size={18} />,
    title: "Research & national labs",
    text: "Stitch national HPC, sovereign clusters, and cloud bursts together for long-horizon simulation.",
  },
  {
    icon: <Radio size={18} />,
    title: "Robotics & embodied AI",
    text: "Route real-time inference to edge mesh, batch training to private DCs, keep policies portable.",
  },
  {
    icon: <Rocket size={18} />,
    title: "Aerospace & orbital",
    text: "Forward-route batch workloads to orbital nodes when the energy and latency math works.",
  },
  {
    icon: <Atom size={18} />,
    title: "Sovereign + regulated",
    text: "Hard data-residency policy at the routing layer — workloads never plan against forbidden pools.",
  },
];

export default function UseCases() {
  return (
    <Section
      id="use-cases"
      kicker="Who it&apos;s for"
      title={<>Built for everyone running <span className="text-grad">serious AI infrastructure</span></>}
      intro="ComputeFlow is the routing layer, so it sits underneath whatever you're already building. It doesn&apos;t replace your stack. It coordinates it."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CASES.map((c) => (
          <div key={c.title} className="cf-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[#cfe0ff]">
              {c.icon}
            </div>
            <div className="mt-4 text-base font-semibold text-white">{c.title}</div>
            <p className="mt-2 text-sm leading-6 text-white/65">{c.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
