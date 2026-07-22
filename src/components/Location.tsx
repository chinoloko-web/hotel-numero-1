"use client";

import { motion } from "framer-motion";
import { useT } from "@/contexts/TranslationContext";

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Location() {
  const { dict } = useT();

  return (
    <section id="ubicacion" className="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/[0.02] rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-3">{dict.location.badge}</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">{dict.location.title}</h2>
          <div className="w-12 h-0.5 bg-accent/20 mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-accent/5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-[30vh] md:h-[40vh] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.000000!2d-85.083333!3d10.733333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e78f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sBijagua%20de%20Upala!5e0!3m2!1ses!2scr!4v1"
                width="100%" height="100%" style={{ border: 0, filter: "grayscale(0.8) sepia(0.2)" }}
                allowFullScreen loading="lazy" title="Mapa Bijagua"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            <p className="text-sm font-body text-foreground/60 mb-6 leading-relaxed">
              {dict.location.address}
            </p>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {dict.location.attractions.map((a: { name: string; dist: string }, i: number) => (
                <motion.div
                  key={a.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  className="flex items-center justify-between py-2.5 border-b border-secondary/60 hover:border-accent/20 transition-colors duration-300 group"
                >
                  <span className="font-body text-xs text-foreground group-hover:text-accent transition-colors">{a.name}</span>
                  <span className="text-[10px] text-foreground/40 font-body bg-secondary/30 px-2 py-0.5">{a.dist}</span>
                </motion.div>
              ))}
            </div>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://maps.google.com/?q=Bijagua+de+Upala+Alajuela+Costa+Rica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-background px-8 py-3 text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-accent-light transition-colors"
            >
              <span>{dict.location.directions}</span>
              <span className="text-xs opacity-70">↗</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
