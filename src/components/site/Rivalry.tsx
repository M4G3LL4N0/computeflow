import { Building2, Network } from "lucide-react";
import Section from "@/components/site/Section";

const TERAFAB = [
  "Builds chips",
  "Owns infrastructure",
  "Vertical integration",
  "Capital-heavy",
  "Physical scale",
  "Years to ramp",
  "One massive supply-side bet",
];

const COMPUTEFLOW = [
  "Routes compute",
  "Coordinates infrastructure",
  "Software-defined",
  "Asset-light",
  "Network scale",
  "Works now",
  "Benefits from every new compute source online",
];

export default function Rivalry() {
  return (
    <Section
      id="rivalry"
      kicker="Friendly rivalry"
      title={<>Two halves of the same future. <span className="text-grad">Different bets.</span></>}
      intro="The hard part of the next decade isn't only building compute. It's deciding where each workload should run. Terafab is going to win the first half. ComputeFlow is going to win the second."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <RivalCard
          icon={<Building2 size={16} />}
          title="The factory bet"
          subtitle="Companies like Terafab"
          items={TERAFAB}
          tone="gold"
        />
        <RivalCard
          icon={<Network size={16} />}
          title="The routing bet"
          subtitle="ComputeFlow"
          items={COMPUTEFLOW}
          tone="blue"
        />
      </div>
      <p className="mt-8 text-center text-sm font-medium text-white/55">
        &ldquo;Owning compute is step one. Routing compute is step two.&rdquo;
      </p>
    </Section>
  );
}

function RivalCard({
  icon,
  title,
  subtitle,
  items,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  items: string[];
  tone: "gold" | "blue";
}) {
  const accent = tone === "gold" ? "pill pill-gold" : "pill";
  const ring = tone === "gold" ? "ring-[#f3c969]/30" : "ring-[#5b8cff]/30";
  return (
    <div className={`cf-shell p-6 ring-1 ${ring}`}>
      <div className="flex items-center justify-between gap-3">
        <div className={accent}>
          {icon}
          <span>{subtitle}</span>
        </div>
        <span className="text-[11px] uppercase tracking-[0.22em] text-white/40">vs.</span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li
            key={i}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white/80"
          >
            <span
              className={`inline-block h-1.5 w-1.5 rounded-full ${tone === "gold" ? "bg-[#f3c969]" : "bg-[#5b8cff]"}`}
              aria-hidden
            />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
