"use client";

import { motion, useReducedMotion, type Variant } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, fadeIn, scaleIn, slideFromLeft, slideFromRight, viewportOnce } from "@/components/animations/variants";

const variantMap: Record<string, Variants> = {
  up: fadeUp,
  in: fadeIn,
  scale: scaleIn,
  left: slideFromLeft,
  right: slideFromRight,
};

interface RevealProps {
  children: ReactNode;
  /** Animation variant name. Default "up". */
  variant?: keyof typeof variantMap;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header";
}

/**
 * Viewport-triggered reveal. Falls back to an unanimated wrapper when the
 * user prefers reduced motion.
 */
export function Reveal({
  children,
  variant = "up",
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Component = motion[as] as typeof motion.div;
  const variants = variantMap[variant] ?? fadeUp;

  if (reduce) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
