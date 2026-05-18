import type { Metadata } from "next";
import { SubpageVisual } from "@/components/SubpageVisual";
import { Mail, MessagesSquare, ShieldCheck } from "lucide-react";
import Section from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Contact — ComputeFlow",
  description: "Talk to the ComputeFlow team. Design partners, enterprise pilots, and sovereign programs welcome.",
};

const CHANNELS = [
  {
    icon: <Mail size={16} />,
    title: "Email",
    detail: "hello@computeflow.app",
    sub: "Founders read everything.",
  },
  {
    icon: <ShieldCheck size={16} />,
    title: "Enterprise & sovereign",
    detail: "enterprise@computeflow.app",
    sub: "Pilots, procurement, residency.",
  },
  {
    icon: <MessagesSquare size={16} />,
    title: "Design partners",
    detail: "partners@computeflow.app",
    sub: "Bring a workload. Get a routing plan.",
  },
];

export default function ContactPage() {
  return (
    <>
    <SubpageVisual variant="contact" />
      <Section
      kicker="Contact"
      title={
        <>
          Let&apos;s route <span className="text-grad">your workloads</span>
        </>
      }
      intro="We&apos;re looking for design partners running real AI, research, robotics, or sovereign workloads. If that&apos;s you, get in touch."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form
          className="cf-shell space-y-4 p-6 sm:p-8"
          action="mailto:hello@computeflow.app"
          method="post"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name">
              <input
                required
                name="name"
                placeholder="Jane Founder"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#5b8cff]/60 focus:outline-none"
              />
            </Field>
            <Field label="Work email">
              <input
                required
                type="email"
                name="email"
                placeholder="jane@company.com"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#5b8cff]/60 focus:outline-none"
              />
            </Field>
          </div>
          <Field label="Company">
            <input
              name="company"
              placeholder="Company name"
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#5b8cff]/60 focus:outline-none"
            />
          </Field>
          <Field label="What are you routing?">
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about the workload, constraints, and what you've tried."
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#5b8cff]/60 focus:outline-none"
            />
          </Field>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/45">
              We answer every email. Usually within 1 business day.
            </p>
            <button type="submit" className="btn btn-primary justify-center">
              Send message
            </button>
          </div>
        </form>

        <div className="space-y-4">
          {CHANNELS.map((c) => (
            <div key={c.title} className="cf-shell-flat p-5">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/45">
                {c.icon}
                <span>{c.title}</span>
              </div>
              <div className="mt-2 text-base font-semibold text-white">{c.detail}</div>
              <div className="mt-1 text-sm text-white/65">{c.sub}</div>
            </div>
          ))}

          <div className="cf-shell-flat p-5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">
              Headquarters
            </div>
            <div className="mt-2 text-sm text-white/80">
              Remote-first · operating from the US and EU. We meet wherever the compute is.
            </div>
          </div>
        </div>
      </div>
    </Section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-white/45">
        {label}
      </span>
      {children}
    </label>
  );
}
