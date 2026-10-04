"use client";

import { useEffect, useState } from "react";

export default function BackgroundGlow() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[var(--background)]">
      <div className="dark-atmosphere pointer-events-none absolute inset-0">
        <div className="dark-grid absolute inset-0" />

        <div
          className="absolute -left-[18%] -top-[16%] h-[720px] w-[720px] rounded-full blur-[150px]"
          style={{
            background: "rgba(37, 99, 235, 0.13)",
            transform: "translate(" + scrollY * 0.018 + "px, " + scrollY * -0.012 + "px)",
          }}
        />

        <div
          className="absolute -bottom-[22%] -right-[16%] h-[760px] w-[760px] rounded-full blur-[170px]"
          style={{
            background: "rgba(139, 92, 246, 0.11)",
            transform: "translate(" + scrollY * -0.018 + "px, " + scrollY * 0.014 + "px)",
          }}
        />

        <div
          className="dark-trace dark-trace-one"
          style={{ transform: "translate3d(" + scrollY * 0.012 + "px, " + scrollY * -0.008 + "px, 0)" }}
        />
        <div
          className="dark-trace dark-trace-two"
          style={{ transform: "translate3d(" + scrollY * -0.01 + "px, " + scrollY * 0.006 + "px, 0)" }}
        />

        <div className="dark-vignette absolute inset-0" />
      </div>
    </div>
  );
}
