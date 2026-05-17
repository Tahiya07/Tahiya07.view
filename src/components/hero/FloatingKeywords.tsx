"use client";

import { motion } from "framer-motion";

const words = [
  "React",
  "Next.js",
  "AI",
  "Frontend",
  "UI/UX",
  "Tailwind",
  "ML",
  "Dev"
];

export default function FloatingKeywords() {
  return (
    <div className="relative w-full h-full">
      {words.map((word, i) => {
        const baseX = (i % 4) * 120 - 180;
        const baseY = Math.floor(i / 4) * 120 - 120;

        return (
          <motion.div
            key={word}
            className="absolute px-3 py-1 text-sm rounded-full border border-white/10 bg-white/5 text-white/70"
            initial={{ x: baseX, y: baseY, opacity: 0 }}
            animate={{
              x: [baseX, baseX + 10, baseX],
              y: [baseY, baseY - 10, baseY],
              opacity: 1,
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {word}
          </motion.div>
        );
      })}
    </div>
  );
}