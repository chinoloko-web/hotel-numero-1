"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Rooms from "@/components/Rooms";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";

const amenitiesList = [
  { icon: "🛏️", label: "Cama matrimonial" },
  { icon: "📺", label: "TV 32 pulgadas" },
  { icon: "🍳", label: "Cocina equipada" },
  { icon: "🚿", label: "Agua caliente" },
  { icon: "🅿️", label: "Estacionamiento" },
  { icon: "🌿", label: "Vista a la montaña" },
  { icon: "🛜", label: "WiFi gratuito" },
  { icon: "🧹", label: "Limpieza diaria" },
];

function PageContent() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const els = el.querySelectorAll("[data-hero-anim]");
    els.forEach((child, i) => {
      (child as HTMLElement).style.transition = `all 1s cubic-bezier(.25,.46,.45,.94) ${0.3 + i * 0.2}s`;
      (child as HTMLElement).style.opacity = "1";
      (child as HTMLElement).style.transform = "translateY(0)";
    });
  }, []);

  return (
    <main>
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-background">
        <div className="absolute inset-0">
          <img
            src="/images/vistas/IMG_5158.jpg"
            alt="Nuestros Bungalows"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.55)" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <p
            data-hero-anim
            className="text-white/50 text-xs tracking-[0.25em] uppercase font-body font-medium mb-4"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            Paraíso Celeste
          </p>
          <h1
            data-hero-anim
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-white tracking-[0.03em] leading-none mb-6"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            Nuestros
            <br />
            <span className="text-accent-light">Bungalows</span>
          </h1>
          <p
            data-hero-anim
            className="font-body text-base md:text-lg text-white/60 max-w-xl leading-relaxed"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            Cuatro refugios únicos diseñados para conectar con la naturaleza
            sin renunciar al confort. Cada bungalow tiene su propia personalidad.
          </p>
        </div>

        <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center">
          <a href="#bungalows" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors">
            <span className="text-[10px] tracking-[0.2em] uppercase font-body">Descubrir</span>
            <span className="text-2xl animate-bounce">↓</span>
          </a>
        </div>
      </section>

      <Rooms />

      <section className="w-full py-20 md:py-28 bg-secondary/30 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-3">Comodidades</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              Todo lo que necesitas
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {amenitiesList.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-background p-6 md:p-8 text-center border border-secondary/50 hover:border-accent/20 hover:shadow-lg transition-all duration-500"
              >
                <span className="text-2xl md:text-3xl">{a.icon}</span>
                <p className="font-body text-sm text-foreground/70 mt-3">{a.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img src="/images/vistas/IMG_4014.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.5)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            ¿Listo para vivir<br />la experiencia?
          </h2>
          <a
            href="https://www.simplebooking.it/ibe2/hotel/11431?lang=ES&cur=USD"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-foreground px-12 py-4 text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-white/90 transition-colors"
          >
            Reserva ahora
          </a>
        </div>
      </section>
    </main>
  );
}

export default function BungalowsPage() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <PageContent />
      <Footer />
    </SmoothScroll>
  );
}
