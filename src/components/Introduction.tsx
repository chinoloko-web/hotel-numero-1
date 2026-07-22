"use client";

import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section className="w-full py-20 md:py-28 px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-6"
        >
          Bienvenido
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6"
        >
          Más que un lodge… Un refugio de paz natural
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-base md:text-lg text-foreground/60 leading-relaxed"
        >
          Enclavado en Bijagua, Costa Rica, Paraíso Celeste te invita a
          conectar con la naturaleza. A minutos del Volcán Tenorio y la
          Catarata Río Celeste, cada estancia es una experiencia única.
        </motion.p>

        <motion.a
          href="/bungalows"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block mt-8 border border-accent text-accent px-8 py-3 text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-accent hover:text-background transition-colors"
        >
          Ver nuestros bungalows
        </motion.a>
      </div>
    </section>
  );
}
