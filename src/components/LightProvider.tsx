"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LightContext = createContext({ x: 50, y: 50 });

export function useLight() {
  return useContext(LightContext);
}

export default function LightProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPos({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <LightContext.Provider value={pos}>
      {children}
    </LightContext.Provider>
  );
}