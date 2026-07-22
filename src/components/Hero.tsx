"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useT } from "@/contexts/TranslationContext";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const imageParallax = useTransform(scrollY, [0, 600], [0, 200]);
  const overlayParallax = useTransform(scrollY, [0, 600], [0, -80]);

  const { dict, locale } = useT();

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    if (!title || !subtitle || !cta) return;

    title.style.opacity = "0";
    title.style.transform = "translateY(60px)";
    subtitle.style.opacity = "0";
    subtitle.style.transform = "translateY(30px)";
    cta.style.opacity = "0";
    cta.style.transform = "translateY(20px)";

    requestAnimationFrame(() => {
      title.style.transition = "all 1.2s cubic-bezier(.25,.46,.45,.94)";
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";

      setTimeout(() => {
        subtitle.style.transition = "all 0.8s cubic-bezier(.25,.46,.45,.94)";
        subtitle.style.opacity = "1";
        subtitle.style.transform = "translateY(0)";
      }, 400);

      setTimeout(() => {
        cta.style.transition = "all 0.6s cubic-bezier(.25,.46,.45,.94)";
        cta.style.opacity = "1";
        cta.style.transform = "translateY(0)";
      }, 700);
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black">
      <motion.div className="absolute inset-0" style={{ y: imageParallax }}>
        <img
          src="/images/bungalow-colibri/IMG_4090.jpg?v=1"
          alt="Paraíso Celeste"
          className="w-full h-[120%] object-cover"
          style={{ filter: "brightness(0.65)" }}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"
        style={{ y: overlayParallax }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <span className="inline-block w-8 h-px bg-white/20 align-middle mr-3" />
          <span className="text-white/50 text-xs tracking-[0.25em] uppercase font-body font-medium">{dict.hero.location}</span>
          <span className="inline-block w-8 h-px bg-white/20 align-middle ml-3" />
        </motion.div>

        <h1
          ref={titleRef}
          className="font-heading text-4xl md:text-6xl lg:text-7xl text-white tracking-[0.04em] leading-none mb-6"
          dangerouslySetInnerHTML={{ __html: dict.hero.title }}
        />
        <p
          ref={subtitleRef}
          className="font-body text-base md:text-lg text-white/60 tracking-[0.2em] uppercase max-w-lg mx-auto mb-12"
        >
          {dict.hero.subtitle}
        </p>
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col md:flex-row items-center gap-4"
        >
          <a
            href={`https://www.simplebooking.it/ibe2/hotel/11431?lang=${locale === "en" ? "EN" : "ES"}&cur=USD`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-foreground px-10 py-3.5 text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-white/90 transition-colors shadow-lg shadow-black/20"
          >
            {dict.hero.cta}
          </a>
          <a
            href={`/${locale}/bungalows`}
            className="text-white/80 text-sm tracking-[0.15em] uppercase font-body font-medium hover:text-white transition-colors border border-white/20 px-10 py-3.5 hover:border-white/40"
          >
            {dict.hero.ctaBungalows}
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex flex-col items-center gap-2 text-white/30">
          <span className="text-[9px] tracking-[0.25em] uppercase font-body font-medium">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
