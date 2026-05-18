import type { Metadata } from "next";
import { SubpageVisual } from "@/components/SubpageVisual";
import ComputeRouter from "@/components/product/ComputeRouter";
import Section from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Live router — ComputeFlow",
  description:
    "Paste a workload and ComputeFlow returns a ranked routing plan with cost, latency, energy, sovereignty, risk, and availability scores.",
};

export default function DemoPage() {
  return (
    <>
    <SubpageVisual variant="demo" />
      <>
      <Section
        kicker="Live router"
        title={<>Route a workload <span className="text-grad">across the world&apos;s compute</span></>}
        intro="Adjust the workload definition below. The local routing engine returns a ranked plan, a recommended split, plain-English reasoning, and the exact next step to take."
      >
        <ComputeRouter />
      </Section>
    </>
  </>
  )
}
