"use client";

import { motion } from "framer-motion";
import { useT } from "@/contexts/TranslationContext";

export default function Introduction() {
  const { dict, locale } = useT();

  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-6"
        >
          <span className="inline-block w-6 h-px bg-accent/30 align-middle mr-3" />
          {dict.intro.badge}
          <span className="inline-block w-6 h-px bg-accent/30 align-middle ml-3" />
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8"
        >
          {dict.intro.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-12 h-0.5 bg-accent/30 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-base md:text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto"
        >
          {dict.intro.text}
        </motion.p>

        <motion.a
          href={`/${locale}/bungalows`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="relative inline-block mt-10 border border-accent text-accent px-8 py-3 text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-accent hover:text-background transition-colors overflow-hidden group"
        >
          <span className="relative z-10">{dict.intro.cta}</span>
          <span className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </motion.a>
      </div>
    </section>
  );
}
