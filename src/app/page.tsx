import CTA from "@/components/site/CTA";
import { TrustStrip } from "@/components/TrustStrip";
import { MarketingGraphicsStack } from "@/components/MarketingGraphicsStack";
import Faq from "@/components/site/Faq";
import Hero from "@/components/site/Hero";
import HowItWorks from "@/components/site/HowItWorks";
import PoolNetwork from "@/components/site/PoolNetwork";
import Pricing from "@/components/site/Pricing";
import Problem from "@/components/site/Problem";
import Rivalry from "@/components/site/Rivalry";
import Roadmap from "@/components/site/Roadmap";
import Section from "@/components/site/Section";
import Solution from "@/components/site/Solution";
import UseCases from "@/components/site/UseCases";
import WhyNow from "@/components/site/WhyNow";
import ComputeRouter from "@/components/product/ComputeRouter";

export default function HomePage() {
  return (
    <>        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <TrustStrip />
        </div>
        <MarketingGraphicsStack />

      <Hero />
      <Rivalry />
      <Problem />
      <Solution />
      <HowItWorks />

      <Section
        id="preview"
        kicker="Interactive preview"
        title={<>Try the routing engine. <span className="text-grad">Right here.</span></>}
        intro="No signup. No paid APIs. Adjust the workload, run the engine, and see how the routing plan changes in real time."
      >
        <ComputeRouter />
      </Section>

      <PoolNetwork />
      <UseCases />
      <WhyNow />
      <Pricing />
      <Roadmap />
      <Faq />
      <CTA />
    </>
  );
}
