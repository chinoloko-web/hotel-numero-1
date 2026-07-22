"use client";

import { useEffect, useRef } from "react";

const data = [
  {
    title: "Cenotes Sagrados",
    desc: "Sumérgete en aguas cristalinas milenarias. Un viaje al corazón de la península.",
    img: "/images/vistas/IMG_1543.jpg",
    time: "Medio día",
  },
  {
    title: "Cena en la Selva",
    desc: "Bajo un dosel de estrellas, una experiencia gastronómica que despierta los sentidos.",
    img: "/images/vistas/IMG_2365.jpg",
    time: "3 horas",
  },
  {
    title: "Amanecer en el Mar",
    desc: "Kayak al amanecer cuando el sol pinta el horizonte de dorado. El mundo es solo tuyo.",
    img: "/images/vistas/IMG_4015.jpg",
    time: "Mañana completa",
  },
];

export default function Experiences() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const cards = el.querySelectorAll("[data-exp]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target as HTMLElement;
            const img = card.querySelector("[data-exp-img]") as HTMLElement;
            const text = card.querySelector("[data-exp-text]") as HTMLElement;
            if (img) { img.style.transition = "all 0.8s cubic-bezier(.25,.46,.45,.94)"; img.style.opacity = "1"; img.style.transform = "translateX(0)"; }
            if (text) { text.style.transition = "all 0.8s cubic-bezier(.25,.46,.45,.94) 0.15s"; text.style.opacity = "1"; text.style.transform = "translateX(0)"; }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    cards.forEach((card) => {
      const img = card.querySelector("[data-exp-img]") as HTMLElement;
      const text = card.querySelector("[data-exp-text]") as HTMLElement;
      if (img) { img.style.opacity = "0"; img.style.transform = "translateX(-60px)"; }
      if (text) { text.style.opacity = "0"; text.style.transform = "translateX(60px)"; }
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="experiencias" className="w-full py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-4">Experiencias</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">No solo te hospedes.<br />Vive.</h2>
        </div>
        <div className="space-y-20 md:space-y-32">
          {data.map((exp, i) => (
            <div key={exp.title} data-exp className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${i % 2 === 1 ? "" : ""}`}>
              <div data-exp-img className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative h-[40vh] md:h-[55vh] overflow-hidden">
                  <img src={exp.img} alt={exp.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div data-exp-text className={i % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/30 font-body mb-4">{exp.time}</p>
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-6">{exp.title}</h3>
                <p className="font-body text-base md:text-lg text-foreground/60 leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
