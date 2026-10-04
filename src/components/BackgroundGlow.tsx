"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function BackgroundGlow() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const lightGlowOneX = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const lightGlowOneY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const lightGlowTwoX = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const lightGlowTwoY = useTransform(scrollYProgress, [0, 1], [0, 85]);
  const lightGridY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const lightOrbitOneRotate = useTransform(scrollYProgress, [0, 1], [-18, 28]);
  const lightOrbitTwoRotate = useTransform(scrollYProgress, [0, 1], [18, -42]);

  const darkOrbOneX = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const darkOrbOneY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const darkOrbTwoX = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const darkOrbTwoY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const darkGridY = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const darkTraceOneX = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const darkTraceOneY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const darkTraceTwoX = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const darkTraceTwoY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const dotShowerY = useTransform(scrollYProgress, [0, 1], [0, -170]);
  const dotShowerScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const fieldOrbOneX = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fieldOrbOneY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fieldOrbTwoX = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const fieldOrbTwoY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[var(--background)]">
      <div className="light-atmosphere pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="light-glow light-glow-one"
          style={reduceMotion ? undefined : { x: lightGlowOneX, y: lightGlowOneY }}
        />
        <motion.div
          className="light-glow light-glow-two"
          style={reduceMotion ? undefined : { x: lightGlowTwoX, y: lightGlowTwoY }}
        />
        <motion.div
          className="light-grid"
          style={reduceMotion ? undefined : { y: lightGridY }}
        />
        <motion.div
          className="light-orbit"
          style={reduceMotion ? { left: "30%", top: "18%" } : { left: "30%", top: "18%", rotate: lightOrbitOneRotate }}
        />
        <motion.div
          className="light-orbit"
          style={reduceMotion
            ? { left: "52%", top: "54%", opacity: 0.55 }
            : { left: "52%", top: "54%", opacity: 0.55, rotate: lightOrbitTwoRotate }}
        />
      </div>

      <div className="dark-atmosphere pointer-events-none absolute inset-0">
        <motion.div
          className="dark-grid absolute inset-0"
          style={reduceMotion ? undefined : { y: darkGridY }}
        />

        <div className="dark-energy-field absolute inset-0" aria-hidden="true">
          <motion.div
            className="dark-light-orb dark-light-orb-one"
            style={reduceMotion ? undefined : { x: darkOrbOneX, y: darkOrbOneY }}
          />
          <motion.div
            className="dark-light-orb dark-light-orb-two"
            style={reduceMotion ? undefined : { x: darkOrbTwoX, y: darkOrbTwoY }}
          />
          <div className="dark-light-beam dark-light-beam-one" />
          <div className="dark-light-beam dark-light-beam-two" />
        </div>

        <motion.div
          className="dark-dot-shower absolute inset-0"
          aria-hidden="true"
          style={reduceMotion ? undefined : { y: dotShowerY, scale: dotShowerScale }}
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
        </motion.div>

        <motion.div
          className="absolute -left-[18%] -top-[16%] h-[720px] w-[720px] rounded-full blur-[150px]"
          style={{
            background: "rgba(37, 99, 235, 0.13)",
            ...(reduceMotion ? {} : { x: fieldOrbOneX, y: fieldOrbOneY }),
          }}
        />

        <motion.div
          className="absolute -bottom-[22%] -right-[16%] h-[760px] w-[760px] rounded-full blur-[170px]"
          style={{
            background: "rgba(139, 92, 246, 0.11)",
            ...(reduceMotion ? {} : { x: fieldOrbTwoX, y: fieldOrbTwoY }),
          }}
        />

        <motion.div
          className="dark-trace dark-trace-one"
          style={reduceMotion ? undefined : { x: darkTraceOneX, y: darkTraceOneY }}
        />
        <motion.div
          className="dark-trace dark-trace-two"
          style={reduceMotion ? undefined : { x: darkTraceTwoX, y: darkTraceTwoY }}
        />

        <div className="dark-vignette absolute inset-0" />
      </div>
    </div>
  );
}
