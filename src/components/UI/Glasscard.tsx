"use client";

import { useLight } from "../LightProvider";

export default function GlassCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { x, y } = useLight();

  return (
    <div className="relative group rounded-2xl">

      {/* dynamic light layer */}
      <div
        className="
          pointer-events-none
          absolute inset-0 rounded-2xl
          opacity-0 group-hover:opacity-100
          transition duration-300
        "
        style={{
          background: `radial-gradient(
            500px circle at ${x}% ${y}%,
            rgba(255,255,255,0.10),
            rgba(99,102,241,0.12),
            transparent 70%
          )`,
        }}
      />

      {/* base glass */}
      <div
        className="
          relative z-10
          rounded-2xl
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          p-6
          transition duration-300
          hover:border-white/25
          hover:bg-white/[0.06]
        "
      >
        {children}
      </div>

    </div>
  );
}