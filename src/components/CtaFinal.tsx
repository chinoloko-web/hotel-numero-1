"use client";

export default function CtaFinal() {
  return (
    <section id="reservar" className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      <img
        src="/images/bungalow-colibri/IMG_4090.jpg?v=1"
        alt="Atardecer"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.6)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="font-heading text-4xl md:text-6xl lg:text-7xl text-white leading-[1.15] mb-8 max-w-4xl">
          Tu próxima historia<br />comienza aquí.
        </p>
        <p className="font-body text-base md:text-lg text-white/60 mb-10 max-w-md">
          Cada viaje es único. Déjanos ser parte del tuyo.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-foreground px-12 py-4 text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-white/90 transition-colors"
        >
          Reserva tu experiencia
        </a>
      </div>
    </section>
  );
}
