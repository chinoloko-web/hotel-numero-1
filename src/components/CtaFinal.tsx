"use client";

export default function CtaFinal() {
  return (
    <section id="reservar" className="w-full py-20 md:py-28 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-3">Reservas</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
            Reserva tu estancia
          </h2>
          <p className="font-body text-foreground/60 max-w-md mx-auto">
            Selecciona tus fechas y descubre tu refugio en Bijagua.
          </p>
        </div>

        <div className="w-full h-[600px] md:h-[700px] overflow-hidden border border-secondary">
          <iframe
            src="https://www.simplebooking.it/ibe2/hotel/11431?lang=ES&cur=USD"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="SimpleBooking"
          />
        </div>
      </div>
    </section>
  );
}
