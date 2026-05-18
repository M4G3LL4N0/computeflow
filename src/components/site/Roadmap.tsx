import { Check, Hourglass, Sparkles } from "lucide-react";
import Section from "@/components/site/Section";

const PHASES = [
  {
    name: "Phase 1 · Routing engine",
    status: "live",
    items: [
      "Six-axis scoring across 7 compute pools",
      "Recommended split allocation",
      "Plain-English explanations and warnings",
      "Command Center dashboard with simulated state",
    ],
  },
  {
    name: "Phase 2 · Live capacity feeds",
    status: "next",
    items: [
      "Real-time pricing + quota feeds for public clouds",
      "Connectors to private clusters and sovereign DCs",
      "Org budgets, spend alerts, cost forecast",
      "Routing policy engine (compliance + procurement)",
    ],
  },
  {
    name: "Phase 3 · Programmable routing",
    status: "future",
    items: [
      "SDK + API for workload orchestration",
      "Automatic re-routing on capacity / risk events",
      "Marketplace for new compute supply",
      "Forward-routing for orbital and GW-scale capacity",
    ],
  },
];

export default function Roadmap() {
  return (
    <Section
      id="roadmap"
      kicker="Roadmap"
      title={<>From routing UI to <span className="text-grad">programmable control plane</span></>}
      intro="We build in phases. Each phase is shippable on its own. Together they become the operating system for global compute."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {PHASES.map((p) => (
          <div key={p.name} className="cf-card p-6">
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold text-white">{p.name}</div>
              <PhaseBadge status={p.status} />
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-white/75">
              {p.items.map((i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check size={14} className="mt-[3px] flex-none text-[#5b8cff]" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function PhaseBadge({ status }: { status: string }) {
  if (status === "live") {
    return (
      <span className="pill pill-mint !text-[10px]">
        <span className="live-dot !h-1.5 !w-1.5" />
        Shipping
      </span>
    );
  }
  if (status === "next") {
    return (
      <span className="pill !text-[10px]">
        <Hourglass size={10} />
        Next
      </span>
    );
  }
  return (
    <span className="pill pill-gold !text-[10px]">
      <Sparkles size={10} />
      Future
    </span>
  );
}
