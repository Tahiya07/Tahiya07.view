"use client";

import useIsMobile from "../hooks/useIsMobile";

export default function ProfileOrb() {
  const isMobile = useIsMobile();

  return (
    <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 mx-auto">

      {/* 🌌 STATIC PREMIUM GLOW */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.25), transparent 60%), radial-gradient(circle at 70% 70%, rgba(168,85,247,0.18), transparent 65%)",
          transform: "scale(1.35)",
        }}
      />

      {/* 🧿 ORB */}
      <div
        className="
          relative w-full h-full rounded-full
          border border-white/10
          bg-white/5 backdrop-blur-2xl
          overflow-hidden z-10
        "
      >
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover scale-110"
        />

        {/* depth shading */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      </div>

      {/* subtle ring */}
      <div className="absolute inset-0 rounded-full border border-white/10" />

    </div>
  );
}