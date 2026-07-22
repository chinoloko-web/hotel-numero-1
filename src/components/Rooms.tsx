"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useT } from "@/contexts/TranslationContext";

interface Bungalow {
  id: string;
  price: string;
  capacity: string;
  image: string;
  gallery: string[];
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const modalVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const bungalows: Bungalow[] = [
  {
    id: "bungalow-colibri",
    price: "$135.19",
    capacity: "2 adultos",
    image: "/images/bungalow-colibri/IMG_4090_h.jpg",
    gallery: [
      "/images/bungalow-colibri/_MG_3442.JPG",
      "/images/bungalow-colibri/_MG_3443.JPG",
      "/images/bungalow-colibri/_MG_3454.JPG",
      "/images/bungalow-colibri/_MG_3455.JPG",
      "/images/bungalow-colibri/_MG_3456.JPG",
      "/images/bungalow-colibri/_MG_3467.JPG",
    ],
  },
  {
    id: "bungalow-tucan",
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
  },
  {
    id: "bungalow-perezoso",
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
  },
  {
    id: "bungalow-tapir",
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
  },
];

const amenityIcons: Record<string, string[]> = {
  "bungalow-colibri": ["🛏️", "📺", "❄️", "🍳"],
  "bungalow-tucan": ["🛏️", "📺", "🌀", "🍳"],
  "bungalow-perezoso": ["🛏️", "📺", "❄️", "🍳"],
  "bungalow-tapir": ["🛏️", "📺", "🌀", "🍳"],
};

export default function Rooms() {
  const [selected, setSelected] = useState<Bungalow | null>(null);
  const [galIdx, setGalIdx] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { dict, locale } = useT();

  const bd = dict.rooms;

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

  const binfo = (b: Bungalow) => (bd as any)[b.id] || { name: b.id, desc: "", long: "", amenities: [], services: [] };

  return (
    <section id="bungalows" className="w-full py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-3">{bd.sectionBadge}</p>
          <h2 ref={headingRef} className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            {bd.sectionTitle}
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {bungalows.map((b) => {
            const info = binfo(b);
            return (
              <motion.button
                key={b.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openModal(b)}
                className="relative h-[40vh] md:h-[50vh] overflow-hidden group text-left w-full"
              >
                <motion.img
                  src={b.image}
                  alt={info.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-body">{bd.from} {b.price}{bd.perNight}</p>
                  <h3 className="font-heading text-xl md:text-2xl text-white mt-1">{info.name}</h3>
                  <p className="text-white/60 text-sm mt-1 font-body">{info.desc}</p>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-[10px] tracking-[0.15em] uppercase font-body px-3 py-1.5 border border-white/20"
                >
                  {bd.seeMore}
                </motion.div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (() => {
          const info = binfo(selected);
          return (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelected(null)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                className="bg-background w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <img src={selected.gallery[galIdx]} alt={info.name} className="w-full h-[35vh] md:h-[50vh] object-cover" />
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
                      <h3 className="font-heading text-2xl md:text-3xl text-foreground">{info.name}</h3>
                      <p className="font-body text-foreground/50 text-sm mt-1">{info.desc}</p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <p className="font-heading text-2xl text-accent">{selected.price}</p>
                      <p className="text-[10px] tracking-[0.15em] uppercase text-foreground/40 font-body">{bd.perNight}</p>
                    </div>
                  </div>
                  <p className="font-body text-foreground/60 leading-relaxed mb-8">{info.long}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 font-body font-medium mb-3">{bd.amenities}</p>
                      <div className="flex flex-wrap gap-2">
                        {info.amenities.map((label: string, i: number) => {
                          const icons = amenityIcons[selected.id] || [];
                          return (
                            <span key={label} className="text-sm font-body text-foreground/70 bg-secondary/50 px-3 py-1.5">{icons[i] || "•"} {label}</span>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 font-body font-medium mb-3">{bd.services}</p>
                      <ul className="space-y-1">
                        {info.services.map((s: string) => (
                          <li key={s} className="text-sm font-body text-foreground/60">— {s}</li>
                        ))}
                      </ul>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 font-body mt-4">{bd.capacity}: {selected.capacity}</p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-secondary flex flex-col md:flex-row gap-3">
                    <a
                      href={`https://www.simplebooking.it/ibe2/hotel/11431?lang=${locale === "en" ? "EN" : "ES"}&cur=USD`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent text-background px-8 py-3 text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-accent-light transition-colors text-center"
                    >
                      {bd.reserve} {info.name}
                    </a>
                    <button onClick={() => setSelected(null)} className="border border-foreground/20 text-foreground px-8 py-3 text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-foreground/5 transition-colors">
                      {bd.close}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
