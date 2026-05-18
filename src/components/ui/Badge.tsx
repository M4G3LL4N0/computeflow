import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "blue" | "gold" | "mint";

export default function Badge({
  children,
  tone = "blue",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const toneCls =
    tone === "gold" ? "pill pill-gold" : tone === "mint" ? "pill pill-mint" : "pill";
  return <span className={cn(toneCls, className)}>{children}</span>;
}
