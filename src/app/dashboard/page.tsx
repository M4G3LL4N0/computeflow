import type { Metadata } from "next";
import { SubpageVisual } from "@/components/SubpageVisual";
import CommandCenter from "@/components/product/CommandCenter";
import Section from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Command Center — ComputeFlow",
  description:
    "Live simulated state of the global compute fabric: pools, workloads, capacity, and routing health.",
};

export default function DashboardPage() {
  return (
    <>
    <SubpageVisual variant="dashboard" />
      <Section
      kicker="Command Center"
      title={<>The control room for <span className="text-grad">global compute</span></>}
      intro="A live snapshot of the compute fabric ComputeFlow is routing across. Capacity, latency, clean-energy mix, and live workloads — in one place."
    >
      <CommandCenter />
    </Section>
  </>
  )
}
