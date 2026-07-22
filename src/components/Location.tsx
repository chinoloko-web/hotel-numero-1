"use client";

const attractions = [
  { name: "Parque Nacional Volcán Tenorio", dist: "5 km", time: "10 min" },
  { name: "Catarata Río Celeste", dist: "5 km", time: "10 min" },
  { name: "Laberinto Katira", dist: "8 km", time: "12 min" },
  { name: "Árbol Gigante (450 años)", dist: "3 km", time: "5 min" },
  { name: "Reserva Biológica Bosque Nuboso", dist: "15 km", time: "20 min" },
  { name: "Lago de Nicaragua", dist: "40 km", time: "45 min" },
];

export default function Location() {
  return (
    <section id="ubicacion" className="w-full py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-4">Ubicación</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">En el corazón de Bijagua</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div className="h-[40vh] md:h-[60vh] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.000000!2d-85.083333!3d10.733333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e78f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sBijagua%20de%20Upala!5e0!3m2!1ses!2scr!4v1"
              width="100%" height="100%" style={{ border: 0, filter: "grayscale(0.8) sepia(0.2)" }}
              allowFullScreen loading="lazy" title="Mapa Bijagua"
            />
          </div>
          <div>
            <p className="text-sm font-body text-foreground/60 mb-8 leading-relaxed">
              Del colono de Bijagua, al sureste 3 km, Provincia de Alajuela, Bijagua de Upala, Costa Rica.
            </p>
            <div className="space-y-4 mb-10">
              {attractions.map((a) => (
                <div key={a.name} className="flex items-center justify-between py-3 border-b border-secondary">
                  <span className="font-body text-sm text-foreground">{a.name}</span>
                  <div className="flex items-center gap-4 text-xs text-foreground/50 font-body">
                    <span>{a.dist}</span>
                    <span>{a.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://maps.google.com/?q=Bijagua+de+Upala+Alajuela+Costa+Rica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-background px-8 py-3 text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-accent-light transition-colors"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
