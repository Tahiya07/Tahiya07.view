"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  "home",
  "skills",
  "experience",
  "projects",
  "contact",
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [light, setLight] = useState(true);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const refs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const isLight = saved !== "dark";
    setLight(isLight);
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    localStorage.setItem("portfolio-theme", next ? "light" : "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = "home";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) current = id;
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = refs.current[active];
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const parentRect = el.parentElement!.getBoundingClientRect();

    setIndicator({
      left: rect.left - parentRect.left,
      width: rect.width,
    });
  }, [active]);

  return (
    <>
      <div className="hidden sm:flex fixed top-5 left-0 right-0 justify-center z-50 px-4">
        <div className="relative flex gap-2 px-3 py-2 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-2xl shadow-lg">
          <div className="absolute inset-0 rounded-full bg-white/[0.05] blur-xl opacity-40" />

          <div
            className="absolute top-1 bottom-1 rounded-full bg-white/10 border border-white/10 transition-all duration-500 ease-out"
            style={{ left: indicator.left, width: indicator.width }}
          />

          {sections.map((sec) => (
            <a
              key={sec}
              ref={(el) => {
                refs.current[sec] = el;
              }}
              href={sec === "home" ? "#top" : `#${sec}`}
              className={`relative z-10 px-3 py-1 text-sm capitalize transition ${
                active === sec ? "text-white" : "text-white/40"
              }`}
            >
              {sec === "home" ? "Home" : sec}
            </a>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${light ? "dark" : "light"} theme`}
            className="relative z-10 ml-1 px-2 py-1 text-xs text-white/60 hover:text-white transition"
          >
            {light ? "◐" : "☼"}
          </button>
        </div>
      </div>

      <div className="sm:hidden fixed bottom-5 left-0 right-0 flex justify-center z-50 px-4">
        <div className="flex gap-3 px-4 py-3 rounded-full bg-black/[0.40] border border-white/10 backdrop-blur-2xl max-w-[calc(100vw-2rem)] overflow-x-auto">
          {sections.map((sec) => (
            <a
              key={sec}
              href={sec === "home" ? "#top" : `#${sec}`}
              className={`text-[10px] capitalize whitespace-nowrap transition ${
                active === sec ? "text-white" : "text-white/40"
              }`}
            >
              {sec === "home" ? "Home" : sec}
            </a>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${light ? "dark" : "light"} theme`}
            className="text-[10px] text-white/60 whitespace-nowrap"
          >
            {light ? "◐" : "☼"}
          </button>
        </div>
      </div>
    </>
  );
}
