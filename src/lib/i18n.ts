import "server-only";

export const locales = ["es", "en"] as const;
export const defaultLocale = "es" as const;

export type Locale = (typeof locales)[number];

export const hasLocale = (locale: string): locale is Locale =>
  (locales as readonly string[]).includes(locale);

const dictionaries = {
  es: () => import("@/dictionaries/es.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export const localeLabels: Record<Locale, string> = {
  es: "ES",
  en: "EN",
};
