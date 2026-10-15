"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Slim reading-progress bar fixed at the very top of the page. */
export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[80] h-0.5 origin-left bg-teal"
      style={{ scaleX }}
    />
  );
}
