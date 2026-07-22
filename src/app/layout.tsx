import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://paraisoceleste.com"),
  title: "Paraíso Celeste | Bungalows en Bijagua, Costa Rica",
  description: "Más que un lodge… Un refugio de paz natural. Bungalows equipados en Bijagua, cerca del Volcán Tenorio y Río Celeste.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
