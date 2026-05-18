"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/site/Logo";

const NAV = [
  { href: "/demo", label: "Demo" },
  { href: "/dashboard", label: "Command Center" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#04060d]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo />
          <span className="text-sm font-semibold tracking-tight text-white">ComputeFlow</span>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40 sm:inline">
            Routing layer
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/demo"
            className="btn btn-primary !py-2.5 !px-4 !text-[13px]"
          >
            Try the router
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden">
          <div className="mx-3 mb-3 rounded-2xl border border-white/10 bg-[#070b18]/95 p-3 shadow-2xl">
            <div className="flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/demo"
                className="btn btn-primary mt-2 justify-center"
                onClick={() => setOpen(false)}
              >
                Try the router
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
