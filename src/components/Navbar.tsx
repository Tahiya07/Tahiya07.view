"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  "about",
  "education",
  "skills",
  "research",
  "projects",
  "contact",
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
  });

  const refs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      let current = "about";

      for (const id of sections) {
        const el = document.getElementById(id);

        if (!el) continue;

        if (scrollPos >= el.offsetTop) {
          current = id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // indicator positioning
  useEffect(() => {
    const el = refs.current[active];

    if (!el) return;

    const rect = el.getBoundingClientRect();
    const parentRect =
      el.parentElement!.getBoundingClientRect();

    setIndicator({
      left: rect.left - parentRect.left,
      width: rect.width,
    });
  }, [active]);

  return (
    <>
      {/* ================= DESKTOP DOCK ================= */}
      <div className="hidden sm:flex fixed top-5 left-0 right-0 justify-center z-50 px-4">

        <div
          className="
            relative flex gap-2
            px-3 py-2
            rounded-full
            bg-white/[0.05]
            border border-white/10
            backdrop-blur-2xl
            shadow-lg
          "
        >

          {/* ambient glow */}
          <div
            className="
              absolute inset-0
              rounded-full
              bg-white/[0.05]
              blur-xl
              opacity-40
            "
          />

          {/* active indicator */}
          <div
            className="
              absolute top-1 bottom-1
              rounded-full
              bg-white/10
              border border-white/10
              transition-all duration-500 ease-out
            "
            style={{
              left: indicator.left,
              width: indicator.width,
            }}
          />

          {sections.map((sec) => (
            <a
              key={sec}
              ref={(el) => {
                refs.current[sec] = el;
              }}
              href={`#${sec}`}
              className={`
                relative z-10
                px-3 py-1
                text-sm capitalize
                transition
                ${
                  active === sec
                    ? "text-white"
                    : "text-white/40"
                }
              `}
            >
              {sec}
            </a>
          ))}

        </div>
      </div>

      {/* ================= MOBILE DOCK ================= */}
      <div className="sm:hidden fixed bottom-5 left-0 right-0 flex justify-center z-50 px-4">

        <div
          className="
            flex gap-4
            px-5 py-3
            rounded-full
            bg-black/[0.40]
            border border-white/10
            backdrop-blur-2xl
          "
        >

          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`
                text-[11px]
                capitalize
                transition
                ${
                  active === sec
                    ? "text-white"
                    : "text-white/40"
                }
              `}
            >
              {sec}
            </a>
          ))}

        </div>
      </div>
    </>
  );
}