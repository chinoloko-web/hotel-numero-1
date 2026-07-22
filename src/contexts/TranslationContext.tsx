"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";

type Ctx = { dict: Dictionary; locale: Locale };

const TranslationContext = createContext<Ctx | null>(null);

export function TranslationProvider({
  dict,
  locale,
  children,
}: Ctx & { children: ReactNode }) {
  return (
    <TranslationContext.Provider value={{ dict, locale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(TranslationContext);
  if (!ctx) throw new Error("useT must be used within TranslationProvider");
  return ctx;
}
