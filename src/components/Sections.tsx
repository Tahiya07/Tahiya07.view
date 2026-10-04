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

  const contentY = useTransform(scrollYProgress, [0, 0.22, 0.5, 0.78, 1], [46, 0, 0, 0, -28]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.16, 0.5, 0.84, 1], [0.35, 1, 1, 1, 0.72]);
  const contentScale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.985, 1, 1, 1, 0.995]);
  const lineScale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.25, 1, 1, 0.72]);

  return (
    <section ref={ref} id={id} className="relative scroll-mt-32">
      <motion.div
        className="mb-8 sm:mb-9"
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
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
        style={
          reduceMotion
            ? undefined
            : { y: contentY, opacity: contentOpacity, scale: contentScale }
        }
      >
        {children}
      </motion.div>
    </section>
  );
}
