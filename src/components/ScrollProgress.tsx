"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.06, 0.94, 1], [0.35, 0.9, 0.9, 0.35]);

  return (
    <div
      className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 md:flex flex-col items-center gap-3"
      aria-hidden="true"
    >
      <div className="relative h-28 w-px overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="absolute left-0 top-0 w-px rounded-full bg-white/75 origin-top"
          style={reduceMotion ? { height: "38%" } : { height }}
        />
      </div>

      <motion.span
        className="text-[9px] tracking-[0.28em] uppercase text-white/30 [writing-mode:vertical-rl]"
        style={reduceMotion ? { opacity: 0.35 } : { opacity }}
      >
        Scroll
      </motion.span>
    </div>
  );
}
