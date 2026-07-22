"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useT } from "@/contexts/TranslationContext";
import Rooms from "@/components/Rooms";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

function PageContent() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const imageParallax = useTransform(scrollY, [0, 600], [0, 180]);
  const overlayParallax = useTransform(scrollY, [0, 600], [0, -70]);

  const { dict, locale } = useT();
  const bp = dict.bungalowsPage;

  return (
    <main>
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black">
        <motion.div className="absolute inset-0" style={{ y: imageParallax }}>
          <img
            src="/images/vistas/IMG_5158.jpg"
            alt="Nuestros Bungalows"
            className="w-full h-[120%] object-cover"
            style={{ filter: "brightness(0.55)" }}
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"
          style={{ y: overlayParallax }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/50 text-xs tracking-[0.25em] uppercase font-body font-medium mb-4"
          >
            {bp.badge}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-white tracking-[0.03em] leading-none mb-6"
          >
            {bp.titleLine1}
            <br />
            <span className="text-[#3D5F4F]">{bp.titleLine2}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-base md:text-lg text-white/60 max-w-xl leading-relaxed"
          >
            {bp.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-0 right-0 z-10 flex justify-center"
        >
          <a href="#bungalows" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors">
            <span className="text-[10px] tracking-[0.2em] uppercase font-body">{bp.discover}</span>
            <span className="text-2xl animate-bounce">↓</span>
          </a>
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Rooms />
      </motion.div>

      <section className="w-full py-20 md:py-28 bg-secondary/30 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-3">{bp.amenitiesBadge}</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              {bp.amenitiesTitle}
            </h2>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {bp.amenitiesList.map((a: { icon: string; label: string }) => (
              <motion.div
                key={a.label}
                variants={itemVariants}
                whileHover={{ scale: 1.03, borderColor: "#2E4A3D" }}
                className="bg-background p-6 md:p-8 text-center border border-secondary/50 hover:shadow-lg transition-shadow duration-500"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="text-2xl md:text-3xl inline-block"
                >
                  {a.icon}
                </motion.span>
                <p className="font-body text-sm text-foreground/70 mt-3">{a.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        id="reservar"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full py-20 md:py-28 px-6 md:px-12 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-3">{bp.bookingBadge}</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
              {bp.bookingTitle}
            </h2>
            <p className="font-body text-foreground/60 max-w-md mx-auto">
              {bp.bookingText}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[600px] md:h-[700px] overflow-hidden border border-secondary"
          >
            <iframe
              src={`https://www.simplebooking.it/ibe2/hotel/11431?lang=${bp.simplebookingLang}&cur=USD`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="SimpleBooking"
            />
          </motion.div>
        </div>
      </motion.section>
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
