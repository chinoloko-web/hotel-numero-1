"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    if (!title || !subtitle || !cta) return;

    title.style.opacity = "0";
    title.style.transform = "translateY(60px)";
    subtitle.style.opacity = "0";
    subtitle.style.transform = "translateY(30px)";
    cta.style.opacity = "0";
    cta.style.transform = "translateY(20px)";

    requestAnimationFrame(() => {
      title.style.transition = "all 1.2s cubic-bezier(.25,.46,.45,.94)";
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";

      setTimeout(() => {
        subtitle.style.transition = "all 0.8s cubic-bezier(.25,.46,.45,.94)";
        subtitle.style.opacity = "1";
        subtitle.style.transform = "translateY(0)";
      }, 400);

      setTimeout(() => {
        cta.style.transition = "all 0.6s cubic-bezier(.25,.46,.45,.94)";
        cta.style.opacity = "1";
        cta.style.transform = "translateY(0)";
      }, 700);
    });
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: "smooth" }); return true; }
    return false;
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/bungalow-colibri/IMG_4090.jpg?v=1"
          alt="Paraíso Celeste"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.7)" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/30" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="text-white/50 text-xs tracking-[0.25em] uppercase font-body font-medium mb-6">
          Bijagua, Costa Rica
        </p>
        <h1
          ref={titleRef}
          className="font-heading text-4xl md:text-6xl lg:text-7xl text-white tracking-[0.04em] leading-none mb-4"
        >
          Más que un lodge…<br />Un refugio de paz natural
        </h1>
        <p
          ref={subtitleRef}
          className="font-body text-base md:text-lg text-white/70 tracking-[0.2em] uppercase max-w-lg mx-auto mb-10"
        >
          More than a lodge… A haven of natural peace
        </p>
        <div ref={ctaRef} className="flex flex-col md:flex-row items-center gap-4">
          <button
            onClick={() => scrollTo("reservar")}
            className="bg-white text-foreground px-10 py-3.5 text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-white/90 transition-colors"
          >
            Reservar Ahora
          </button>
          <a
            href="/bungalows"
            className="text-white/80 text-sm tracking-[0.15em] uppercase font-body font-medium hover:text-white transition-colors"
          >
            Ver Bungalows
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-8">
        <a href="/bungalows" className="text-white/40 text-2xl animate-bounce">↓</a>
      </div>
    </section>
  );
}
