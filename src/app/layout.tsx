import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://paraisoceleste.com"),
  title: "Paraíso Celeste | Bungalows en Bijagua, Costa Rica",
  description: "Más que un lodge… Un refugio de paz natural. Bungalows equipados en Bijagua, cerca del Volcán Tenorio y Río Celeste.",
  openGraph: {
    title: "Paraíso Celeste | Bungalows en Bijagua, Costa Rica",
    description: "Más que un lodge… Un refugio de paz natural. Bungalows equipados en Bijagua, cerca del Volcán Tenorio y Río Celeste.",
    images: ["/images/bungalow-colibri/IMG_4090.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Paraíso Celeste",
              description: "Bungalows en Bijagua, Costa Rica. Más que un lodge… Un refugio de paz natural.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bijagua de Upala",
                addressRegion: "Alajuela",
                addressCountry: "CR",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
