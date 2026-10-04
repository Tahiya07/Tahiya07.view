"use client";

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[var(--background)]">
      <div className="light-atmosphere pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="light-glow light-glow-one" />
        <div className="light-glow light-glow-two" />
        <div className="light-grid" />
        <div className="light-orbit" style={{ left: "30%", top: "18%" }} />
        <div className="light-orbit" style={{ left: "52%", top: "54%", opacity: 0.55 }} />
      </div>

      <div className="dark-atmosphere pointer-events-none absolute inset-0">
        <div className="dark-grid absolute inset-0" />

        <div className="dark-energy-field absolute inset-0" aria-hidden="true">
          <div className="dark-light-orb dark-light-orb-one" />
          <div className="dark-light-orb dark-light-orb-two" />
          <div className="dark-light-beam dark-light-beam-one" />
          <div className="dark-light-beam dark-light-beam-two" />
        </div>

        <div
          className="dark-dot-shower absolute inset-0"
          aria-hidden="true"
        >
          {Array.from({ length: 56 }, (_, i) => {
            const left = (i * 37.7 + 8) % 100;
            const delay = -((i * 0.47) % 7.5);
            const duration = 8.5 + ((i * 1.13) % 5.5);
            const size = 2.2 + ((i * 0.31) % 2.8);
            const pulseDelay = -((i * 0.83) % 6.5);
            const pulseDuration = 4.5 + ((i * 0.67) % 4.5);

            return (
              <span
                key={i}
                className="dark-fall-dot"
                style={{
                  left: left + "%",
                  width: size + "px",
                  height: size + "px",
                  animationDelay: delay + "s, " + pulseDelay + "s",
                  animationDuration: duration + "s, " + pulseDuration + "s",
                }}
              />
            );
          })}
        </div>

        <div className="absolute -left-[18%] -top-[16%] h-[720px] w-[720px] rounded-full blur-[150px]" style={{ background: "rgba(255, 255, 255, 0.07)" }} />

        <div className="absolute -bottom-[22%] -right-[16%] h-[760px] w-[760px] rounded-full blur-[170px]" style={{ background: "rgba(255, 255, 255, 0.05)" }} />

        <div className="dark-trace dark-trace-one" />
        <div className="dark-trace dark-trace-two" />

        <div className="dark-vignette absolute inset-0" />
      </div>
    </div>
  );
}
