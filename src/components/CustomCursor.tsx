"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onHover = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest("a,button,[data-cursor]");
      cursor.style.transform = t
        ? `translate(${mouseX - 6}px, ${mouseY - 6}px) scale(2.5)`
        : `translate(${mouseX - 6}px, ${mouseY - 6}px) scale(1)`;
    };

    const loop = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;
      cursor.style.transform = `translate(${currentX - 6}px, ${currentY - 6}px)`;
      rafRef.current = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMouse);
    document.addEventListener("mouseover", onHover);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMouse);
      document.removeEventListener("mouseover", onHover);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-accent/40 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
      style={{ willChange: "transform" }}
    />
  );
}
