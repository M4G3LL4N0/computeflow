import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Section({
  id,
  kicker,
  title,
  intro,
  children,
  className,
  align = "left",
}: {
  id?: string;
  kicker?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">
        {(kicker || title || intro) && (
          <header
            className={cn(
              "mb-10 max-w-3xl sm:mb-14",
              align === "center" && "mx-auto text-center",
            )}
          >
            {kicker ? (
              <div className="pill mb-5 inline-flex">{kicker}</div>
            ) : null}
            {title ? (
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                {title}
              </h2>
            ) : null}
            {intro ? (
              <p className="mt-5 text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                {intro}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
