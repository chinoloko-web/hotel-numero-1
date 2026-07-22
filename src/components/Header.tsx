"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/contexts/TranslationContext";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { dict, locale } = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: "smooth" }); return true; }
    return false;
  };

  const handleReservar = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!scrollTo("reservar")) {
      window.location.href = `/${locale}/#reservar`;
    }
  };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && window.location.pathname === `/${locale}`) {
      e.preventDefault();
      const id = href.slice(2);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const otherLocale = locale === "es" ? "en" : "es";
  const currentPath =
    typeof window !== "undefined"
      ? window.location.pathname.replace(`/${locale}`, "") || "/"
      : "/";

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
          href={`/${locale}`}
          className="font-heading tracking-[0.08em] text-foreground transition-all duration-300"
          style={{ fontSize: scrolled ? "1.25rem" : "1.5rem" }}
        >
          Paraíso Celeste
        </a>

        <nav className="hidden md:flex items-center gap-10">
          <Link
            href={`/${locale}/bungalows`}
            className="text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors font-body font-medium"
          >
            {dict.nav.bungalows}
          </Link>
          <a
            href={`/${locale}/#galeria`}
            onClick={(e) => handleNav(e, `/${locale}/#galeria`)}
            className="text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors font-body font-medium"
          >
            {dict.nav.galeria}
          </a>
          <a
            href={`/${locale}/#ubicacion`}
            onClick={(e) => handleNav(e, `/${locale}/#ubicacion`)}
            className="text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors font-body font-medium"
          >
            {dict.nav.ubicacion}
          </a>

          <Link
            href={`/${otherLocale}${currentPath}`}
            className="text-[11px] tracking-[0.15em] uppercase text-foreground/40 hover:text-foreground transition-colors font-body font-medium border border-foreground/20 px-3 py-1"
          >
            {otherLocale === "en" ? "EN" : "ES"}
          </Link>
        </nav>

        <a
          href={`https://www.simplebooking.it/ibe2/hotel/11431?lang=${locale === "en" ? "EN" : "ES"}&cur=USD`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-background px-6 py-2.5 text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-accent-light transition-colors duration-500"
        >
          {dict.nav.reservar}
        </a>
      </div>
    </header>
  );
}
