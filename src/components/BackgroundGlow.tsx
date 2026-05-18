"use client";

import { useEffect, useState } from "react";

export default function BackgroundGlow() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#05060a] overflow-hidden">

      {/* base ambient field */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.12), transparent 40%)," +
            "radial-gradient(circle at 80% 30%, rgba(168,85,247,0.10), transparent 45%)," +
            "radial-gradient(circle at 50% 80%, rgba(16,185,129,0.08), transparent 40%)",
        }}
      />

      {/* floating glow 1 */}
      <div
        className="
          absolute
          w-[600px] h-[600px]
          rounded-full
          bg-blue-500/[0.10]
          blur-[140px]
        "
        style={{
          transform: `translate(${scrollY * 0.02}px, ${scrollY * -0.03}px)`,
        }}
      />

      {/* floating glow 2 */}
      <div
        className="
          absolute bottom-0 right-0
          w-[700px] h-[700px]
          rounded-full
          bg-purple-500/[0.10]
          blur-[160px]
        "
        style={{
          transform: `translate(${scrollY * -0.03}px, ${scrollY * 0.02}px)`,
        }}
      />

      {/* cinematic vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.85)_100%)]" />

    </div>
  );
}