"use client";

import { useEffect, useRef } from "react";

export default function Introduction() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const children = el.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            (child as HTMLElement).style.transition = `all 0.8s cubic-bezier(.25,.46,.45,.94) ${i * 0.15}s`;
            (child as HTMLElement).style.opacity = "1";
            (child as HTMLElement).style.transform = "translateY(0)";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    children.forEach((child) => {
      (child as HTMLElement).style.opacity = "0";
      (child as HTMLElement).style.transform = "translateY(30px)";
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <p data-reveal className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-6">Bienvenido</p>
        <h2 data-reveal className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
          Más que un lodge… Un refugio de paz natural
        </h2>
        <p data-reveal className="font-body text-base md:text-lg text-foreground/60 leading-relaxed">
          Enclavado en Bijagua, Costa Rica, Paraíso Celeste te invita a
          conectar con la naturaleza. A minutos del Volcán Tenorio y la
          Catarata Río Celeste, cada estancia es una experiencia única.
        </p>
        <a
          data-reveal
          href="/bungalows"
          className="inline-block mt-8 border border-accent text-accent px-8 py-3 text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-accent hover:text-background transition-colors"
        >
          Ver nuestros bungalows
        </a>
      </div>
    </section>
  );
}
