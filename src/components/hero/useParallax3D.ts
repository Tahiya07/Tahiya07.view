"use client";

import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function useParallax3D() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;

      const xPercent = (e.clientX / innerWidth - 0.5) * 2;
      const yPercent = (e.clientY / innerHeight - 0.5) * 2;

      x.set(xPercent * 20);
      y.set(yPercent * 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springConfig = { stiffness: 80, damping: 20 };

  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  return {
    x: smoothX,
    y: smoothY,
  };
}