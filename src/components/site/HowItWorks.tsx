import { ClipboardList, Cpu, Map, Workflow } from "lucide-react";
import Section from "@/components/site/Section";

const STEPS = [
  {
    icon: <ClipboardList size={18} />,
    title: "1 · Define the workload",
    text: "Name it, pick a workload type, set budget, latency, energy, sovereignty, reliability, region, and urgency in plain UI.",
  },
  {
    icon: <Cpu size={18} />,
    title: "2 · Score every pool",
    text: "Local scoring engine evaluates 7 compute pools across cost, latency, energy, sovereignty, risk, and availability.",
  },
  {
    icon: <Workflow size={18} />,
    title: "3 · Build a split plan",
    text: "ComputeFlow returns a weighted split across the top three routes so you don&apos;t depend on a single supplier.",
  },
  {
    icon: <Map size={18} />,
    title: "4 · Explain in plain English",
    text: "You get a recommendation, why it won, what trade-offs you made, and the exact operational next step.",
  },
];

export default function HowItWorks() {
  return (
    <Section
      id="how"
      kicker="How it works"
      title={<>From workload to <span className="text-grad">routing plan</span> in under a minute</>}
      intro="ComputeFlow is the routing layer. Every workload runs through the same loop: define, score, split, explain."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s) => (
          <div key={s.title} className="cf-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[#cfe0ff]">
              {s.icon}
            </div>
            <div className="mt-4 text-[11px] uppercase tracking-[0.22em] text-white/45">
              Step
            </div>
            <div className="mt-1 text-lg font-semibold text-white">{s.title}</div>
            <p className="mt-2 text-sm leading-6 text-white/65" dangerouslySetInnerHTML={{ __html: s.text }} />
          </div>
        ))}
      </div>
    </Section>
  );
}
