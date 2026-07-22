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
    image: "/images/bungalow-colibri/IMG_4090.jpg",
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
    id: "bungalow-tucan",
    name: "Bungalow Tucán",
    desc: "Rodeado de selva, con vistas increíbles.",
    long: "Un espacio diseñado para conectar con la naturaleza. Amplio, iluminado y con todos los detalles que hacen de tu estancia una experiencia única.",
    price: "$890",
    capacity: "2 adultos",
    image: "/images/bungalow-tucan/IMG_7370.jpg",
    gallery: [
      "/images/bungalow-tucan/IMG_8586.jpg",
      "/images/bungalow-tucan/IMG_8587.jpg",
      "/images/bungalow-tucan/IMG_8589.jpg",
      "/images/bungalow-tucan/IMG_8590.jpg",
      "/images/bungalow-tucan/IMG_8591.jpg",
      "/images/bungalow-tucan/IMG_8592.jpg",
    ],
    amenities: [
      { icon: "🌿", label: "Terraza con hamaca" },
      { icon: "🚿", label: "Ducha al aire libre" },
      { icon: "🌺", label: "Jardín privado" },
    ],
    services: [
      "Concierge personal",
      "Desayuno incluido",
      "Yoga al amanecer",
    ],
  },
  {
    id: "bungalow-perezoso",
    name: "Bungalow Perezoso",
    desc: "Tu santuario personal en la selva.",
    long: "Rodeado de vegetación exuberante, este bungalow ofrece la combinación perfecta de confort y naturaleza. Ideal para desconectar del mundo.",
    price: "$820",
    capacity: "2 adultos",
    image: "/images/bungalow-perezoso/IMG_8575.JPG",
    gallery: [
      "/images/bungalow-perezoso/IMG_8576.JPG",
      "/images/bungalow-perezoso/IMG_8577.JPG",
      "/images/bungalow-perezoso/IMG_0171.JPG",
      "/images/bungalow-perezoso/IMG_0172.JPG",
      "/images/bungalow-perezoso/IMG_0173.JPG",
      "/images/bungalow-perezoso/IMG_0178.JPG",
    ],
    amenities: [
      { icon: "🌴", label: "Terraza amplia" },
      { icon: "🛁", label: "Baño de lujo" },
      { icon: "🌿", label: "Vista a la selva" },
    ],
    services: [
      "Desayuno incluido",
      "Concierge 24h",
      "Yoga privado",
    ],
  },
  {
    id: "bungalow-tapir",
    name: "Bungalow Tapir",
    desc: "El más exclusivo, con piscina privada.",
    long: "Un oasis de privacidad y lujo. Con piscina privada, terraza panorámica y los mejores atardeceres del resort. La experiencia definitiva.",
    price: "$1,400",
    capacity: "4 adultos",
    image: "/images/bungalow-tapir/12PARAISO CELESTE.jpg",
    gallery: [
      "/images/bungalow-tapir/45PARAISO CELESTE.jpg",
      "/images/bungalow-tapir/46PARAISO CELESTE.jpg",
      "/images/bungalow-tapir/61PARAISO CELESTE.jpg",
      "/images/bungalow-tapir/IMG_7371.jpg",
      "/images/bungalow-tapir/IMG_7373.JPG",
    ],
    amenities: [
      { icon: "🏊", label: "Piscina privada" },
      { icon: "🔥", label: "Fogata" },
      { icon: "🍸", label: "Bar privado" },
    ],
    services: [
      "Chef privado",
      "Mayordomo personal",
      "Excursiones exclusivas",
    ],
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
