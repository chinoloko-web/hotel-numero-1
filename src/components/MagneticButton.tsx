"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

export default function MagneticButton({
  children,
  className = "",
  onClick,
  type = "button",
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const move = (e: MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const leave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      onMouseMove={move}
      onMouseLeave={leave}
      className={className}
      style={{ transition: "transform 0.2s cubic-bezier(.25,.46,.45,.94)" }}
    >
      {children}
    </button>
  );
}
