"use client";

import { useEffect, useRef } from "react";

const items = [
  { title: "Spa", desc: "Rituales ancestrales.", img: "/images/vistas/IMG_1709.jpg", span: "md:col-span-1 md:row-span-2" },
  { title: "Piscina Infinita", desc: "Agua y horizonte.", img: "/images/vistas/IMG_1541.jpg", span: "md:col-span-2 md:row-span-1" },
  { title: "Restaurante", desc: "Cocina de autor.", img: "/images/vistas/IMG_2332.jpg", span: "md:col-span-1 md:row-span-1" },
  { title: "Yoga", desc: "Frente al océano.", img: "/images/fauna/IMG_4391.jpg", span: "md:col-span-1 md:row-span-1" },
  { title: "Playa Privada", desc: "Arena blanca, silencio total.", img: "/images/vistas/IMG_4014.jpg", span: "md:col-span-2 md:row-span-1" },
  { title: "Tours", desc: "Cenotes y ruinas.", img: "/images/vistas/IMG_8414.jpg", span: "md:col-span-1 md:row-span-1" },
];

export default function Amenities() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const children = el.querySelectorAll("[data-amenity]");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            (child as HTMLElement).style.transition = `all 0.8s cubic-bezier(.25,.46,.45,.94) ${i * 0.1}s`;
            (child as HTMLElement).style.opacity = "1";
            (child as HTMLElement).style.transform = "translateY(0) scale(1)";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    children.forEach((child) => {
      (child as HTMLElement).style.opacity = "0";
      (child as HTMLElement).style.transform = "translateY(40px) scale(0.95)";
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="amenidades" className="w-full py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.25em] uppercase text-accent font-body font-medium mb-4">Amenidades</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            Todo lo que necesitas,<br />y nada que no
          </h2>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
          {items.map((item) => (
            <div
              key={item.title}
              data-amenity
              className={`relative overflow-hidden group ${item.span}`}
            >
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500" />
              <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-heading text-xl md:text-2xl text-white mb-2">{item.title}</h3>
                <p className="font-body text-sm text-white/70 max-w-xs translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
