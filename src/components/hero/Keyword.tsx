"use client";

import { motion } from "framer-motion";

export default function Keyword({
  text,
  index,
}: {
  text: string;
  index: number;
}) {
  const randomX = Math.random() * 200 - 100;
  const randomY = Math.random() * 200 - 100;

  return (
    <motion.div
      className="absolute text-sm md:text-base text-white/70 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10"
      initial={{ x: randomX, y: randomY, opacity: 0 }}
      animate={{
        x: [randomX, randomX + 20, randomX],
        y: [randomY, randomY - 20, randomY],
        opacity: 1,
      }}
      transition={{
        duration: 6 + index,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {text}
    </motion.div>
  );
}