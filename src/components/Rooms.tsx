"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Bungalow {
  id: string;
  name: string;
  desc: string;
  long: string;
  price: string;
  capacity: string;
  image: string;
  gallery: string[];
  amenities: { icon: string; label: string }[];
  services: string[];
}

const bungalows: Bungalow[] = [
  {
    id: "bungalow-colibri",
    name: "Bungalow Colibrí",
    desc: "Un refugio íntimo rodeado de naturaleza.",
    long: "Sumérgete en la tranquilidad de este bungalow privado. Rodeado de vegetación exuberante, con todos los detalles cuidados para que tu estancia sea inolvidable.",
    price: "$750",
    capacity: "2 adultos",
    image: "/images/bungalow-colibri/_MG_3445.JPG",
    gallery: [
      "/images/bungalow-colibri/_MG_3442.JPG",
      "/images/bungalow-colibri/_MG_3443.JPG",
      "/images/bungalow-colibri/_MG_3454.JPG",
      "/images/bungalow-colibri/_MG_3455.JPG",
      "/images/bungalow-colibri/_MG_3456.JPG",
      "/images/bungalow-colibri/_MG_3467.JPG",
    ],
    amenities: [
      { icon: "🌿", label: "Terraza privada" },
      { icon: "🛁", label: "Baño de lujo" },
      { icon: "🌴", label: "Vista al jardín" },
    ],
    services: [
      "Concierge personal",
      "Desayuno incluido",
      "Servicio a la habitación",
    ],
  },
  {
    id: "bungalow-marlin",
    name: "Bungalow Marlín",
    desc: "Frente al mar, con brisa permanente.",
    long: "El sonido del mar te acompañará día y noche. Un bungalow diseñado para quienes buscan la experiencia costera definitiva.",
    price: "$1,100",
    capacity: "2 adultos",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=800&q=85",
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=800&q=85",
    ],
    amenities: [
      { icon: "🌊", label: "Vista al mar" },
      { icon: "🍸", label: "Bar privado" },
    ],
    services: ["Desayuno en habitación", "Transporte privado"],
  },
  {
    id: "bungalow-jaguar",
    name: "Bungalow Jaguar",
    desc: "La máxima privacidad en la selva.",
    long: "Rodeado de selva virgen, este bungalow ofrece la experiencia más exclusiva del resort. Piscina privada y terraza panorámica.",
    price: "$1,600",
    capacity: "4 adultos",
    image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=85",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=85",
    ],
    amenities: [
      { icon: "🏊", label: "Piscina privada" },
      { icon: "🔥", label: "Fogata" },
    ],
    services: ["Chef privado", "Excursiones personalizadas"],
  },
];

export default function Bungalows() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [galIdx, setGalIdx] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = "all 0.8s cubic-bezier(.25,.46,.45,.94)";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggle = (id: string) => {
    const next = expanded === id ? null : id;
    setExpanded(next);
    setGalIdx(0);
  };

  return (
    <section id="bungalows" className="min-h-screen w-full py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-4">
            Bungalows
          </p>
          <h2
            ref={headingRef}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight"
          >
            Tu propio refugio<br />en el paraíso
          </h2>
        </div>

        <div className="space-y-16">
          {bungalows.map((b) => (
            <BungalowCard
              key={b.id}
              bungalow={b}
              isOpen={expanded === b.id}
              onToggle={() => toggle(b.id)}
              galIdx={galIdx}
              onGalIdx={setGalIdx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BungalowCard({
  bungalow,
  isOpen,
  onToggle,
  galIdx,
  onGalIdx,
}: {
  bungalow: Bungalow;
  isOpen: boolean;
  onToggle: () => void;
  galIdx: number;
  onGalIdx: (n: number) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = "all 0.8s cubic-bezier(.25,.46,.45,.94)";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef}>
      <div
        onClick={onToggle}
        onKeyDown={(e) => { if (e.key === 'Enter') onToggle(); }}
        role="button"
        tabIndex={0}
        className="w-full text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={bungalow.image}
            alt={bungalow.name}
            className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
            <p className="text-white/80 text-sm tracking-[0.2em] uppercase font-body mb-1">
              Desde {bungalow.price} / noche
            </p>
            <span className="inline-block bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-2.5 text-xs tracking-[0.15em] uppercase font-body font-medium mt-4">
              Reservar
            </span>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl text-foreground">
              {bungalow.name}
            </h3>
            <p className="font-body text-base text-foreground/50 mt-1">{bungalow.desc}</p>
          </div>
          <span className="font-body text-sm tracking-[0.15em] text-accent uppercase">
            {isOpen ? "Cerrar" : "Ver más"}
          </span>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pt-12 pb-8 border-t border-secondary mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="relative h-[40vh] overflow-hidden mb-4">
                    <img
                      src={bungalow.gallery[galIdx]}
                      alt={bungalow.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      {bungalow.gallery.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => { e.stopPropagation(); onGalIdx(i); }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${i === galIdx ? "bg-white w-6" : "bg-white/50"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {bungalow.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); onGalIdx(i); }}
                        className={`flex-1 h-16 overflow-hidden border-2 transition-colors ${i === galIdx ? "border-accent" : "border-transparent"}`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-heading text-2xl text-foreground mb-4">{bungalow.name}</h4>
                  <p className="font-body text-foreground/60 leading-relaxed mb-8">{bungalow.long}</p>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 font-body font-medium mb-3">
                        Amenidades
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {bungalow.amenities.map((a) => (
                          <span key={a.label} className="text-sm font-body text-foreground/70 bg-secondary/50 px-4 py-2">
                            {a.icon} {a.label}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 font-body font-medium mb-3">
                        Servicios
                      </p>
                      <ul className="space-y-1">
                        {bungalow.services.map((s) => (
                          <li key={s} className="text-sm font-body text-foreground/60">— {s}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-6 pt-4">
                      <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 font-body">
                        Capacidad: {bungalow.capacity}
                      </p>
                      <p className="font-heading text-2xl text-accent">
                        {bungalow.price} <span className="text-sm font-body text-foreground/40">/noche</span>
                      </p>
                    </div>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="bg-accent text-background px-10 py-3.5 text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-accent-light transition-colors mt-4"
                    >
                      Reservar {bungalow.name}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
