"use client";

import { useEffect, useState } from "react";

export default function useScrollDepth() {
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const progress = window.scrollY / max;

      setDepth(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return depth;
}