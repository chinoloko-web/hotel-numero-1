"use client";

import { useRef, useEffect } from "react";

const data = [
  { name: "Ana García", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80", text: "No hay palabras para describir la experiencia. Cada detalle está cuidado con una dedicación que solo se encuentra en los lugares más especiales del mundo.", country: "México" },
  { name: "James Mitchell", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80", text: "The silence, the nature, the architecture. Everything feels intentional. This is not a hotel, this is a sanctuary.", country: "EE.UU." },
  { name: "Sophie Laurent", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80", text: "Un paradis sur terre. Le spa au coucher du soleil restera gravé dans ma mémoire pour toujours.", country: "Francia" },
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
                <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
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
