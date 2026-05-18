import Section from "@/components/site/Section";

const ITEMS = [
  {
    q: "Are you competing with Terafab?",
    a: "No. Terafab is building compute. We make compute usable. Routing benefits from every new supply source coming online — including Terafab&apos;s. Different layer, friendly rivalry.",
  },
  {
    q: "What does the MVP actually do?",
    a: "You enter a workload, pick a type, set six constraints, and the local scoring engine returns a ranked routing plan with a recommended split, explanations, and an operational next step.",
  },
  {
    q: "Where does the data come from?",
    a: "The MVP runs a deterministic local model over seven simulated pools. Phase 2 adds live pricing, quota, and capacity feeds. No paid APIs are required for the MVP.",
  },
  {
    q: "Do we install anything in our cloud?",
    a: "No. ComputeFlow is software-defined and asset-light. You can run the routing layer side-by-side with your existing orchestration, then connect feeds in phase 2.",
  },
  {
    q: "How does pricing work?",
    a: "Free for exploration, Pro for individual operators, Team for platform teams, Enterprise for sovereign and procurement programs. We price the routing intelligence, not the iron.",
  },
  {
    q: "Why is this an asset-light business?",
    a: "Because the value is in the routing decision, not in owning the GPUs. Every new compute source that comes online — cloud, sovereign, edge, orbital, fab-scale — makes the routing layer more valuable, not less.",
  },
];

export default function Faq() {
  return (
    <Section
      id="faq"
      kicker="FAQ"
      title={<>Honest answers about <span className="text-grad">the routing bet</span></>}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {ITEMS.map((item) => (
          <div key={item.q} className="cf-card p-5">
            <div className="text-base font-semibold text-white">{item.q}</div>
            <p
              className="mt-2 text-sm leading-6 text-white/65"
              dangerouslySetInnerHTML={{ __html: item.a }}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
