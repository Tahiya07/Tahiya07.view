"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 88%", "end 12%"],
  });

  const revealY = useTransform(scrollYProgress, [0, 0.35], [36, 0]);
  const revealOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const revealScale = useTransform(scrollYProgress, [0, 0.35], [0.985, 1]);
  const lineScale = useTransform(scrollYProgress, [0, 0.35], [0, 1]);

  return (
    <section ref={ref} id={id} className="relative scroll-mt-32">
      <motion.div
        className="mb-8 sm:mb-9"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        style={reduceMotion ? undefined : { y: revealY, opacity: revealOpacity }}
      >
        <p className="text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-white/65">
          {title}
        </p>

        <motion.div
          className="h-0.5 w-14 bg-white/25 mt-3 origin-left rounded-full"
          style={reduceMotion ? undefined : { scaleX: lineScale }}
        />
      </motion.div>

      <motion.div
        className="relative"
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        style={
          reduceMotion
            ? undefined
            : { y: revealY, opacity: revealOpacity, scale: revealScale }
        }
      >
        {children}
      </motion.div>
    </section>
  );
}
