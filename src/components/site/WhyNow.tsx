import { Cpu, Earth, Factory, Lock, Plug, Satellite } from "lucide-react";
import Section from "@/components/site/Section";

const FORCES = [
  {
    icon: <Factory size={18} />,
    title: "GW-scale supply is real",
    text: "Companies like Terafab are racing to bring massive new compute online. That supply needs routing.",
  },
  {
    icon: <Earth size={18} />,
    title: "Sovereignty is rewriting the map",
    text: "Regulators are forcing data residency. Routing has to become a first-class control.",
  },
  {
    icon: <Satellite size={18} />,
    title: "Orbital + edge are coming",
    text: "Off-grid compute is no longer a thought experiment. It needs a control plane the day it ships.",
  },
  {
    icon: <Plug size={18} />,
    title: "Every team is multi-vendor",
    text: "Single-vendor lock-in is no longer acceptable. Routing across vendors is the new default.",
  },
  {
    icon: <Cpu size={18} />,
    title: "AI is now the workload",
    text: "Training and inference are the new center of gravity. Routing AI compute is the highest-leverage layer.",
  },
  {
    icon: <Lock size={18} />,
    title: "Risk is now a board topic",
    text: "Outages, quotas, geopolitics. CIOs need a layer that adapts instead of failing over after the fact.",
  },
];

export default function WhyNow() {
  return (
    <Section
      id="why-now"
      kicker="Why now"
      title={<>The window is opening. <span className="text-grad">The routing layer is unowned.</span></>}
      intro="Compute supply is exploding. Sovereignty is hardening. AI is the workload. Five years from now, the routing layer is one of the most valuable software companies in infrastructure."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FORCES.map((f) => (
          <div key={f.title} className="cf-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#a78bfa]/25 bg-[#a78bfa]/10 text-[#e0d4ff]">
              {f.icon}
            </div>
            <div className="mt-4 text-base font-semibold text-white">{f.title}</div>
            <p className="mt-2 text-sm leading-6 text-white/65">{f.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
