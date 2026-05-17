"use client";

import { useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export default function useMouseTilt() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-200, 200], [10, -10]);
  const rotateY = useTransform(x, [-200, 200], [-10, 10]);

  const springConfig = { stiffness: 100, damping: 20 };

  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const xVal = e.clientX - rect.left - rect.width / 2;
    const yVal = e.clientY - rect.top - rect.height / 2;

    x.set(xVal);
    y.set(yVal);
  };

  return {
    ref,
    style: {
      rotateX: springRotateX,
      rotateY: springRotateY,
      transformPerspective: 900,
    },
    handleMouseMove,
  };
}