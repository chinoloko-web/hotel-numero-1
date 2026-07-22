"use client";

import { useRef, useEffect } from "react";
import { useT } from "@/contexts/TranslationContext";

const data = [
  { name: "Joudy", img: "", text: "Me encantó la experiencia en este hospedaje, la vista de la habitación y la paz que hay. Está totalmente equipada entonces pudimos preparar varias comidas. Mi parte favorita es que está muy cerca del parque volcán Tenorio aprox 10mins y del laberinto Katira. Recomiendo al 100% este hospedaje para escaparse con la familia, amigos o pareja.", country: "Costa Rica" },
  { name: "Jonathan", img: "", text: "Un lugar hermoso, una vista increíble como ninguna en la zona reforzada con la excelente atención al cliente orden y limpieza.", country: "Costa Rica" },
  { name: "Teresita", img: "", text: "La ubicación de los bungalows es excelente, con una vista espectacular hacia las montañas, están muy bien equipados, tienen unos bellísimos balcones desde donde se puede apreciar el amanecer y el atardecer en todo su esplendor.", country: "Costa Rica" },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const { dict } = useT();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    const step = () => {
      const card = track.querySelector("div");
      if (!card) return;
      pos += 1;
      const maxScroll = track.scrollWidth - track.parentElement!.offsetWidth;
      if (pos >= maxScroll) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
    };
    timerRef.current = setInterval(step, 30);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="relative w-full py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/[0.02] rounded-full blur-3xl" />
      </div>
      <div className="px-6 md:px-12 mb-16 max-w-7xl mx-auto relative">
        <p className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-4">{dict.testimonials.badge}</p>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">{dict.testimonials.title}</h2>
        <div className="w-16 h-0.5 bg-accent/20 mt-6" />
      </div>
      <div className="relative overflow-hidden">
        <div ref={trackRef} className="flex gap-8 px-6 md:px-12" style={{ width: "max-content", willChange: "transform" }}>
          {[...data, ...data, ...data].map((t, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[360px] bg-white/80 backdrop-blur-sm p-6 md:p-8 border border-secondary/50 flex-shrink-0 relative hover:shadow-xl hover:shadow-accent/5 transition-shadow duration-500">
              <span className="absolute top-5 left-5 text-4xl text-accent/10 font-heading leading-none select-none" aria-hidden>&ldquo;</span>
              <div className="flex items-center gap-3 mb-4 relative">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-heading font-medium ring-2 ring-accent/20">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-body text-xs font-medium text-foreground">{t.name}</p>
                  <p className="text-[9px] tracking-[0.15em] uppercase text-foreground/40 font-body">{t.country}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">{Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-accent/70 text-[11px]">★</span>
              ))}</div>
              <p className="font-body text-foreground/60 leading-relaxed italic relative z-10 text-xs">&ldquo;{t.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
