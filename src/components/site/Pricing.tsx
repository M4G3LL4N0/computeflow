import Link from "next/link";
import { Check } from "lucide-react";
import Section from "@/components/site/Section";

const TIERS = [
  {
    name: "Free",
    price: "$0",
    cadence: "/forever",
    tag: "Explore the router",
    cta: { label: "Start free", href: "/demo" },
    accent: "border-white/12",
    features: [
      "5 routing simulations / month",
      "All 7 compute pools",
      "Cost, latency, energy, sovereignty scores",
      "Single-user, no saved scenarios",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    cadence: "/month",
    tag: "For founders + ML engineers",
    cta: { label: "Start Pro trial", href: "/contact" },
    accent: "border-[#5b8cff]/50",
    highlight: true,
    features: [
      "Unlimited routing simulations",
      "Saved scenarios + scenario diffs",
      "Deeper scoring + risk explanations",
      "Cost forecast across 12 months",
      "Email + slack delivery of reports",
    ],
  },
  {
    name: "Team",
    price: "$249",
    cadence: "/month",
    tag: "For platform + ML infra teams",
    cta: { label: "Talk to us", href: "/contact" },
    accent: "border-[#a78bfa]/40",
    features: [
      "Everything in Pro",
      "Shared workload queues",
      "Org budgets + spend alerts",
      "Workload routing policies",
      "Collaboration + audit trail",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    tag: "For sovereign + procurement programs",
    cta: { label: "Contact sales", href: "/contact" },
    accent: "border-[#f3c969]/40",
    features: [
      "Private connectors to your clusters",
      "SOC 2, ISO, residency controls",
      "Custom routing policy engine",
      "Procurement, SLAs, support pod",
      "Onboard new compute as it appears",
    ],
  },
];

export default function Pricing() {
  return (
    <Section
      id="pricing"
      kicker="Pricing"
      title={<>Start free. Scale as <span className="text-grad">capacity scales.</span></>}
      intro="ComputeFlow is asset-light, so pricing is asset-light too. Pay for the routing intelligence, not the iron."
    >
      <div className="grid gap-5 lg:grid-cols-4">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`cf-card flex flex-col p-6 ${tier.accent} ${tier.highlight ? "ring-1 ring-[#5b8cff]/40" : ""}`}
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-white">{tier.name}</div>
              {tier.highlight ? (
                <span className="pill !py-1 !text-[10px]">Most popular</span>
              ) : null}
            </div>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight text-white">
                {tier.price}
              </span>
              <span className="text-sm text-white/55">{tier.cadence}</span>
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">
              {tier.tag}
            </div>
            <ul className="mt-6 flex-1 space-y-2.5 text-sm text-white/75">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check size={15} className="mt-[3px] flex-none text-[#5b8cff]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href={tier.cta.href}
              className={`mt-6 w-full text-center ${tier.highlight ? "btn btn-primary" : "btn btn-secondary"}`}
            >
              {tier.cta.label}
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
