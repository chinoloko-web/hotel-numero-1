"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useT } from "@/contexts/TranslationContext";

const gallery = [
  "/images/vistas/IMG_1541.jpg",
  "/images/vistas/IMG_1708.jpg",
  "/images/vistas/IMG_2332.jpg",
  "/images/vistas/IMG_4014.jpg",
  "/images/vistas/IMG_5146.jpg",
  "/images/vistas/IMG_5150.jpg",
  "/images/vistas/IMG_5158.jpg",
  "/images/vistas/IMG_8414.jpg",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const amenityIcons = [
  "📍", "🛋️", "🤝", "🐾", "🚗", "🔒",
];

export default function Amenities() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { dict } = useT();

  return (
    <section id="galeria" className="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/[0.04] rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-3">{dict.amenities.badge}</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">{dict.amenities.title}</h2>
          <div className="w-12 h-0.5 bg-accent/20 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 mb-16"
        >
          {dict.amenities.items.map((item: { title: string; desc: string }, i: number) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -6, borderColor: "#2E4A3D" }}
              className="group bg-background/60 backdrop-blur-sm p-5 md:p-6 text-center border border-secondary/60 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500"
            >
              <span className="text-2xl md:text-3xl block mb-3 group-hover:scale-110 transition-transform duration-500">
                {amenityIcons[i] || "•"}
              </span>
              <h3 className="font-heading text-sm md:text-base text-foreground mb-1">{item.title}</h3>
              <p className="text-[10px] md:text-xs text-foreground/50 font-body leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4"
        >
          {gallery.map((src, i) => (
            <motion.button
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => setLightbox(i)}
              className="break-inside-avoid overflow-hidden group w-full text-left relative"
            >
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-700 z-10" />
              <img src={src} alt="" className="w-full object-cover transition-all duration-[1.2s] group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/20 transition-colors duration-700" />
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-8 right-8 text-white/70 hover:text-white z-10 text-2xl">✕</button>
            <button onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p! - 1 + gallery.length) % gallery.length); }} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl">‹</button>
            <button onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p! + 1) % gallery.length); }} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl">›</button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={gallery[lightbox]} alt="" className="max-h-[85vh] max-w-[90vw] object-contain"
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {gallery.map((_, i) => (
                <button key={i} onClick={(e) => { e.stopPropagation(); setLightbox(i); }} className={`w-1.5 h-1.5 rounded-full transition-all ${i === lightbox ? "bg-white w-4" : "bg-white/30"}`} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
