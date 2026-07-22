"use client";

import { useEffect, useRef } from "react";

export default function Introduction() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const img = el.querySelector("[data-intro-img]") as HTMLElement;
    const title = el.querySelector("[data-intro-title]") as HTMLElement;
    const text = el.querySelector("[data-intro-text]") as HTMLElement;
    if (!img || !title || !text) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.style.transition = "all 1.2s cubic-bezier(.25,.46,.45,.94)";
            img.style.opacity = "1";
            img.style.transform = "translateX(0)";

            setTimeout(() => {
              title.style.transition = "all 0.8s cubic-bezier(.25,.46,.45,.94)";
              title.style.opacity = "1";
              title.style.transform = "translateY(0)";
            }, 300);

            setTimeout(() => {
              text.style.transition = "all 0.8s cubic-bezier(.25,.46,.45,.94)";
              text.style.opacity = "1";
              text.style.transform = "translateY(0)";
            }, 500);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    img.style.opacity = "0";
    img.style.transform = "translateX(-80px)";
    title.style.opacity = "0";
    title.style.transform = "translateY(40px)";
    text.style.opacity = "0";
    text.style.transform = "translateY(30px)";

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="introduccion" className="min-h-screen w-full py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
          <img
            data-intro-img
            src="/images/vistas/IMG_5158.jpg"
            alt="Arquitectura tropical"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-lg">
          <p className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-8">
            Bienvenido
          </p>
          <h2
            data-intro-title
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] mb-8"
          >
            Despierta con el sonido del océano
          </h2>
          <p
            data-intro-text
            className="font-body text-base md:text-lg text-foreground/60 leading-relaxed"
          >
            Enclavado entre la selva y el mar Caribe, Paraíso Celeste es más
            que un hotel. Es un santuario donde cada amanecer cuenta una
            historia distinta. Donde el único itinerario es el presente.
          </p>
        </div>
      </div>
    </section>
  );
}
