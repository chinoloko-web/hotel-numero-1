"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Bungalows", href: "/bungalows" },
  { label: "Galería", href: "#galeria" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-8 md:px-12 flex items-center"
      style={{
        height: scrolled ? "64px" : "96px",
        backgroundColor: scrolled ? "rgba(250,248,245,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(46,74,61,0.06)" : "1px solid transparent",
      }}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <a
          href="/"
          className="font-heading tracking-[0.08em] text-foreground transition-all duration-300"
          style={{ fontSize: scrolled ? "1.25rem" : "1.5rem" }}
        >
          Paraíso Celeste
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            l.href.startsWith("/") ? (
              <a
                key={l.href}
                href={l.href}
                className="text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors font-body font-medium"
              >
                {l.label}
              </a>
            ) : (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href.slice(1))}
                className="text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors font-body font-medium"
              >
                {l.label}
              </button>
            )
          ))}
        </nav>

        <a
          href="https://www.simplebooking.it/ibe2/hotel/11431?lang=ES&cur=USD"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-background px-6 py-2.5 text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-accent-light transition-colors duration-500"
        >
          Reservar
        </a>
      </div>
    </header>
  );
}
