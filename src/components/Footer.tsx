"use client";

import { useState } from "react";
import { useT } from "@/contexts/TranslationContext";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { dict } = useT();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="w-full bg-foreground text-background/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20">
          <div className="md:col-span-1">
            <span className="font-heading text-2xl tracking-[0.06em] text-white">Paraíso Celeste</span>
            <p className="font-body text-sm text-background/50 mt-4 max-w-xs leading-relaxed">
              {dict.footer.tagline}
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-background/40 font-body font-medium mb-6">{dict.footer.contact}</p>
            <ul className="space-y-3 font-body text-sm">
              <li>Del colono de Bijagua, al sureste 3 km</li>
              <li>Bijagua de Upala, Alajuela, Costa Rica</li>
              <li>+506 8945 8333</li>
              <li>gerencia@bungalowsparaisoceleste.com</li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-background/40 font-body font-medium mb-6">{dict.footer.social}</p>
            <ul className="space-y-3">
              {["WhatsApp", "Instagram"].map((s) => (
                <li key={s}>
                  <a
                    href={s === "WhatsApp" ? "https://wa.link/bw45cj" : "https://www.instagram.com/bungalows_paraisoceleste/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-background/40 font-body font-medium mb-6">{dict.footer.newsletter}</p>
            <form onSubmit={onSubmit} className="space-y-4">
              <input
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder={dict.footer.newsletterPlaceholder}
                className="w-full bg-transparent border-b border-background/20 pb-2 text-sm font-body text-white placeholder:text-background/30 focus:outline-none focus:border-accent transition-colors"
                required
              />
              <button type="submit" className="text-[10px] tracking-[0.2em] uppercase text-accent font-body font-medium hover:text-accent-light transition-colors">
                {dict.footer.newsletterCta}
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-background/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/30 font-body">&copy; {new Date().getFullYear()} {dict.footer.copyright}</p>
          <div className="flex gap-6 text-xs text-background/30 font-body">
            <a href="#" className="hover:text-background/60 transition-colors">{dict.footer.privacy}</a>
            <a href="#" className="hover:text-background/60 transition-colors">{dict.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
