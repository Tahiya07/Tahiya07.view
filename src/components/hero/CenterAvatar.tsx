"use client";

import { motion } from "framer-motion";
import useMouseTilt from "./useMouseTilt";

export default function CenterAvatar() {
  const { ref, style, handleMouseMove } = useMouseTilt();

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="w-44 h-44 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center"
      style={{ perspective: 900 }}
    >
      <motion.div
        style={style}
        className="text-white text-xl font-semibold"
      >
        YOU
      </motion.div>
    </div>
  );
}