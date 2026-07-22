"use client";

import { useRef, useEffect } from "react";

const data = [
  { name: "Joudy", img: "", text: "Me encantó la experiencia en este hospedaje, la vista de la habitación y la paz que hay. Está totalmente equipada entonces pudimos preparar varias comidas. Mi parte favorita es que está muy cerca del parque volcán Tenorio aprox 10mins y del laberinto Katira. Recomiendo al 100% este hospedaje para escaparse con la familia, amigos o pareja.", country: "Costa Rica" },
  { name: "Jonathan", img: "", text: "Un lugar hermoso, una vista increíble como ninguna en la zona reforzada con la excelente atención al cliente orden y limpieza.", country: "Costa Rica" },
  { name: "Teresita", img: "", text: "La ubicación de los bungalows es excelente, con una vista espectacular hacia las montañas, están muy bien equipados, tienen unos bellísimos balcones desde donde se puede apreciar el amanecer y el atardecer en todo su esplendor.", country: "Costa Rica" },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

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
    <section className="w-full py-32 overflow-hidden">
      <div className="px-6 md:px-12 mb-16 max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-4">Testimonios</p>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">Lo que dicen nuestros huéspedes</h2>
      </div>
      <div className="relative overflow-hidden">
        <div ref={trackRef} className="flex gap-8 px-6 md:px-12" style={{ width: "max-content", willChange: "transform" }}>
          {[...data, ...data, ...data].map((t, i) => (
            <div key={i} className="min-w-[350px] md:min-w-[420px] bg-white p-8 md:p-10 border border-secondary/50 flex-shrink-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm font-heading font-medium">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-foreground/40 font-body">{t.country}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-accent text-sm">★</span>
              ))}</div>
              <p className="font-body text-foreground/70 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
