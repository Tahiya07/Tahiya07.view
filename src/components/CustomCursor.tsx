"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "custom-cursor-dot";
    ring.className = "custom-cursor-ring";
    document.body.append(dot, ring);

    let x = -100, y = -100, rx = -100, ry = -100;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.left = x + "px";
      dot.style.top = y + "px";
      dot.classList.add("is-visible");
      ring.classList.add("is-visible");
    };

    const animate = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(animate);
    };

    const down = () => {
      dot.classList.add("is-clicking");
      ring.classList.add("is-clicking");
    };

    const up = () => {
      dot.classList.remove("is-clicking");
      ring.classList.remove("is-clicking");
    };

    const over = () => ring.classList.add("is-hovering");
    const out = () => ring.classList.remove("is-hovering");

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    document.querySelectorAll("a, button, input, textarea").forEach((el) => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}
