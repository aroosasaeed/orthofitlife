import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface Props {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: Props) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {kicker && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold tracking-[0.18em] uppercase",
            tone === "light" ? "text-sage" : "text-teal",
          )}
        >
          {kicker}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl leading-[1.15] font-medium tracking-tight text-balance md:text-4xl",
          tone === "light" ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed", tone === "light" ? "text-white/70" : "text-slate-soft")}>
          {description}
        </p>
      )}
    </div>
  );
}
