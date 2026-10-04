"use client";

import { motion, useReducedMotion } from "framer-motion";

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

  return (
    <section id={id} className="relative scroll-mt-32">
      <motion.div
        className="mb-8 sm:mb-9"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-white/65">
          {title}
        </p>
        <motion.div
          className="h-0.5 w-14 bg-white/25 mt-3 origin-left rounded-full"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      <motion.div
        className="relative"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.75, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
