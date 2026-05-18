import Link from "next/link";
import Logo from "@/components/site/Logo";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[#04060d]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo size={28} />
            <span className="text-base font-semibold text-white">ComputeFlow</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
            The neutral control plane for every GPU, cluster, edge device, and orbital node.
            Terafab builds compute. We make it usable.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.22em] text-white/40">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Routing layer
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Software-defined
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Asset-light
            </span>
          </div>
        </div>

        <FooterCol
          title="Product"
          links={[
            { href: "/demo", label: "Live router" },
            { href: "/dashboard", label: "Command Center" },
            { href: "/pricing", label: "Pricing" },
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            { href: "/#roadmap", label: "Roadmap" },
          ]}
        />
        <FooterCol
          title="Resources"
          links={[
            { href: "/#faq", label: "FAQ" },
            { href: "/#use-cases", label: "Use cases" },
            { href: "/#why-now", label: "Why now" },
          ]}
        />
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} ComputeFlow Systems. All rights reserved.</span>
          <span className="text-white/35">Terafab builds compute. ComputeFlow routes it.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
        {title}
      </div>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
