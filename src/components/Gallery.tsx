"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/vistas/IMG_1541.jpg",
  "/images/vistas/IMG_1542.jpg",
  "/images/vistas/IMG_1708.jpg",
  "/images/vistas/IMG_2332.jpg",
  "/images/vistas/IMG_4014.jpg",
  "/images/vistas/IMG_5146.jpg",
  "/images/vistas/IMG_5150.jpg",
  "/images/vistas/IMG_5153.jpg",
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-g-item]");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, i) => {
            (item as HTMLElement).style.transition = `all 0.8s cubic-bezier(.25,.46,.45,.94) ${i * 0.06}s`;
            (item as HTMLElement).style.opacity = "1";
            (item as HTMLElement).style.transform = "translateY(0)";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    items.forEach((item) => {
      (item as HTMLElement).style.opacity = "0";
      (item as HTMLElement).style.transform = "translateY(40px)";
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const next = () => setIdx((prev) => (prev + 1) % images.length);
  const prev = () => setIdx((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, idx]);

  return (
    <section ref={sectionRef} id="galeria" className="w-full py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-4">Galería</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">La belleza está en los detalles</h2>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {images.map((src, i) => (
            <button key={i} data-g-item onClick={() => { setIdx(i); setOpen(true); }} className="break-inside-avoid overflow-hidden group w-full text-left">
              <img src={src} alt="" className="w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center"
          >
            <button onClick={() => setOpen(false)} className="absolute top-8 right-8 text-white/70 hover:text-white z-10 text-2xl">✕</button>
            <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl">‹</button>
            <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl">›</button>
            <motion.img
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              src={images[idx]} alt="" className="max-h-[85vh] max-w-[90vw] object-contain"
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? "bg-white w-4" : "bg-white/30"}`} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
