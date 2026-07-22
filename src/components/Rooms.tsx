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
    price: "$135.19",
    capacity: "2 adultos",
    image: "/images/bungalow-colibri/_MG_3443.JPG",
    gallery: [
      "/images/bungalow-colibri/_MG_3442.JPG",
      "/images/bungalow-colibri/_MG_3443.JPG",
      "/images/bungalow-colibri/_MG_3454.JPG",
      "/images/bungalow-colibri/_MG_3455.JPG",
      "/images/bungalow-colibri/_MG_3456.JPG",
      "/images/bungalow-colibri/_MG_3467.JPG",
    ],
    amenities: [
      { icon: "🛏️", label: "Cama matrimonial" },
      { icon: "📺", label: "TV 32\"" },
      { icon: "❄️", label: "Aire acondicionado" },
      { icon: "🍳", label: "Cocina equipada" },
    ],
    services: [
      "Desayuno incluido",
      "Concierge personal",
      "Servicio a la habitación",
    ],
  },
  {
    id: "bungalow-tucan",
    name: "Bungalow Tucán",
    desc: "Rodeado de selva, con vistas increíbles.",
    long: "Un espacio diseñado para conectar con la naturaleza. Amplio, iluminado y con todos los detalles que hacen de tu estancia una experiencia única.",
    price: "$120.71",
    capacity: "2 adultos",
    image: "/images/bungalow-tucan/IMG_7370_h.jpg",
    gallery: [
      "/images/bungalow-tucan/IMG_8586.jpg",
      "/images/bungalow-tucan/IMG_8587.jpg",
      "/images/bungalow-tucan/IMG_8589.jpg",
      "/images/bungalow-tucan/IMG_8590.jpg",
      "/images/bungalow-tucan/IMG_8591.jpg",
      "/images/bungalow-tucan/IMG_8592.jpg",
    ],
    amenities: [
      { icon: "🛏️", label: "Cama matrimonial" },
      { icon: "📺", label: "TV 32\"" },
      { icon: "🌀", label: "Ventilador" },
      { icon: "🍳", label: "Cocina equipada" },
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
    price: "$135.19",
    capacity: "2 adultos",
    image: "/images/bungalow-perezoso/IMG_0178_h.JPG",
    gallery: [
      "/images/bungalow-perezoso/IMG_8576.JPG",
      "/images/bungalow-perezoso/IMG_8577.JPG",
      "/images/bungalow-perezoso/IMG_0171.JPG",
      "/images/bungalow-perezoso/IMG_0172.JPG",
      "/images/bungalow-perezoso/IMG_0173.JPG",
      "/images/bungalow-perezoso/IMG_0178.JPG",
    ],
    amenities: [
      { icon: "🛏️", label: "Cama matrimonial" },
      { icon: "📺", label: "TV 32\"" },
      { icon: "❄️", label: "Aire acondicionado" },
      { icon: "🍳", label: "Cocina equipada" },
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
    price: "$120.71",
    capacity: "2 adultos",
    image: "/images/bungalow-tapir/12PARAISO CELESTE.jpg",
    gallery: [
      "/images/bungalow-tapir/45PARAISO CELESTE.jpg",
      "/images/bungalow-tapir/46PARAISO CELESTE.jpg",
      "/images/bungalow-tapir/61PARAISO CELESTE.jpg",
      "/images/bungalow-tapir/IMG_7371.jpg",
      "/images/bungalow-tapir/IMG_7373.JPG",
    ],
    amenities: [
      { icon: "🛏️", label: "Cama matrimonial" },
      { icon: "📺", label: "TV 32\"" },
      { icon: "🌀", label: "Ventilador" },
      { icon: "🍳", label: "Cocina equipada" },
    ],
    services: [
      "Desayuno incluido",
      "Concierge personal",
      "Excursiones exclusivas",
    ],
  },

];

export default function Bungalows() {
  const [selected, setSelected] = useState<Bungalow | null>(null);
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

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setGalIdx((p) => (p + 1) % selected.gallery.length);
      if (e.key === "ArrowLeft") setGalIdx((p) => (p - 1 + selected.gallery.length) % selected.gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, galIdx]);

  const openModal = (b: Bungalow) => {
    setSelected(b);
    setGalIdx(0);
  };

  return (
    <section id="bungalows" className="w-full py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-3">Bungalows</p>
          <h2 ref={headingRef} className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            Tu refugio en el paraíso
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {bungalows.map((b, i) => (
            <motion.button
              key={b.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => openModal(b)}
              className="relative h-[40vh] md:h-[50vh] overflow-hidden group text-left w-full"
            >
              <img src={b.image} alt={b.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-body">Desde {b.price} / noche</p>
                <h3 className="font-heading text-xl md:text-2xl text-white mt-1">{b.name}</h3>
                <p className="text-white/60 text-sm mt-1 font-body">{b.desc}</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-[10px] tracking-[0.15em] uppercase font-body px-3 py-1.5 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                Ver más
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img src={selected.gallery[galIdx]} alt={selected.name} className="w-full h-[35vh] md:h-[50vh] object-cover" />
                <button
                  onClick={(e) => { e.stopPropagation(); setGalIdx((p) => (p - 1 + selected.gallery.length) % selected.gallery.length); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-3xl"
                >‹</button>
                <button
                  onClick={(e) => { e.stopPropagation(); setGalIdx((p) => (p + 1) % selected.gallery.length); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-3xl"
                >›</button>
                <button onClick={() => setSelected(null)} className="absolute top-4 right-14 bg-black/40 text-white w-9 h-9 flex items-center justify-center hover:bg-black/60 transition-colors text-sm">✕</button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {selected.gallery.map((_, i) => (
                    <button key={i} onClick={(e) => { e.stopPropagation(); setGalIdx(i); }} className={`w-1.5 h-1.5 rounded-full transition-all ${i === galIdx ? "bg-white w-5" : "bg-white/40"}`} />
                  ))}
                </div>
              </div>
              <div className="p-6 md:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl text-foreground">{selected.name}</h3>
                    <p className="font-body text-foreground/50 text-sm mt-1">{selected.desc}</p>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <p className="font-heading text-2xl text-accent">{selected.price}</p>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-foreground/40 font-body">por noche</p>
                  </div>
                </div>
                <p className="font-body text-foreground/60 leading-relaxed mb-8">{selected.long}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 font-body font-medium mb-3">Amenidades</p>
                    <div className="flex flex-wrap gap-2">
                      {selected.amenities.map((a) => (
                        <span key={a.label} className="text-sm font-body text-foreground/70 bg-secondary/50 px-3 py-1.5">{a.icon} {a.label}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 font-body font-medium mb-3">Servicios</p>
                    <ul className="space-y-1">
                      {selected.services.map((s) => (
                        <li key={s} className="text-sm font-body text-foreground/60">— {s}</li>
                      ))}
                    </ul>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 font-body mt-4">Capacidad: {selected.capacity}</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-secondary flex flex-col md:flex-row gap-3">
                  <button
                    onClick={() => {
                      const el = document.getElementById("reservar");
                      if (el) { el.scrollIntoView({ behavior: "smooth" }); setSelected(null); }
                    }}
                    className="bg-accent text-background px-8 py-3 text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-accent-light transition-colors text-center"
                  >
                    Reservar {selected.name}
                  </button>
                  <button onClick={() => setSelected(null)} className="border border-foreground/20 text-foreground px-8 py-3 text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-foreground/5 transition-colors">
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
