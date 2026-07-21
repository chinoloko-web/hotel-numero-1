import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://paraisoceleste.com"),
  title: "Paraíso Celeste | Luxury Boutique Hotel Tulum",
  description: "Donde el tiempo se mueve más lento. Un refugio boutique de lujo en la Riviera Maya.",
  openGraph: {
    title: "Paraíso Celeste | Luxury Boutique Hotel Tulum",
    description: "Donde el tiempo se mueve más lento. Un refugio boutique de lujo en la Riviera Maya.",
    images: ["/images/bungalow-colibri/30PARAISO CELESTE.jpg"],
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
              description: "Hotel boutique de lujo en Tulum, Riviera Maya.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tulum",
                addressRegion: "Quintana Roo",
                addressCountry: "MX",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
