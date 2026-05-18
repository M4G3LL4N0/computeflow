import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  flat,
}: {
  children: ReactNode;
  className?: string;
  flat?: boolean;
}) {
  return (
    <div className={cn(flat ? "cf-shell-flat" : "cf-card", className)}>{children}</div>
  );
}
