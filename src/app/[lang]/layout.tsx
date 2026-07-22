import type LayoutProps from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { TranslationProvider } from "@/contexts/TranslationContext";
import LangSetter from "@/components/LangSetter";

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  return {
    title:
      lang === "en"
        ? "Paraíso Celeste | Bungalows in Bijagua, Costa Rica"
        : "Paraíso Celeste | Bungalows en Bijagua, Costa Rica",
    description:
      lang === "en"
        ? "More than a lodge… A haven of natural peace. Equipped bungalows in Bijagua, near Volcán Tenorio and Río Celeste."
        : "Más que un lodge… Un refugio de paz natural. Bungalows equipados en Bijagua, cerca del Volcán Tenorio y Río Celeste.",
    openGraph: {
      title:
        lang === "en"
          ? "Paraíso Celeste | Bungalows in Bijagua, Costa Rica"
          : "Paraíso Celeste | Bungalows en Bijagua, Costa Rica",
      description:
        lang === "en"
          ? "More than a lodge… A haven of natural peace."
          : "Más que un lodge… Un refugio de paz natural.",
      images: ["/images/bungalow-colibri/IMG_4090.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[lang]"> & { children: React.ReactNode }) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <TranslationProvider dict={dict} locale={lang}>
      <LangSetter lang={lang} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            name: "Paraíso Celeste",
            description:
              lang === "en"
                ? "Bungalows in Bijagua, Costa Rica. More than a lodge… A haven of natural peace."
                : "Bungalows en Bijagua, Costa Rica. Más que un lodge… Un refugio de paz natural.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bijagua de Upala",
              addressRegion: "Alajuela",
              addressCountry: "CR",
            },
          }),
        }}
      />
      {children}
    </TranslationProvider>
  );
}
