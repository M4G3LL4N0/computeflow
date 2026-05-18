import type { Metadata } from "next";
import { SubpageVisual } from "@/components/SubpageVisual";
import CTA from "@/components/site/CTA";
import Faq from "@/components/site/Faq";
import Pricing from "@/components/site/Pricing";
import Section from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Pricing — ComputeFlow",
  description:
    "Free for exploration. Pro for individual operators. Team for platform teams. Enterprise for sovereign and procurement programs.",
};

export default function PricingPage() {
  return (
    <>
    <SubpageVisual variant="pricing" />
      <>
      <Section
        kicker="Pricing"
        title={<>Pay for <span className="text-grad">routing intelligence,</span> not iron</>}
        intro="ComputeFlow is asset-light, so pricing is asset-light. Start free, upgrade when you need shared queues, budgets, or sovereign controls."
      >
        <div />
      </Section>
      <Pricing />
      <Faq />
      <CTA />
    </>
  </>
  )
}
