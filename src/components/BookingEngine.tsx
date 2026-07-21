"use client";

import { useState } from "react";

export default function BookingEngine() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-6 md:px-12">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white/75 backdrop-blur-xl border border-white/30 px-8 py-6"
      >
        <div className="flex flex-col md:flex-row items-end gap-4 md:gap-6">
          <div className="flex-1 w-full">
            <label className="block text-[10px] tracking-[0.2em] uppercase text-foreground/50 mb-2 font-body font-medium">
              Check In
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent border-b border-foreground/10 pb-2 text-sm font-body text-foreground focus:outline-none focus:border-accent transition-colors"
              required
            />
          </div>
          <div className="flex-1 w-full">
            <label className="block text-[10px] tracking-[0.2em] uppercase text-foreground/50 mb-2 font-body font-medium">
              Check Out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent border-b border-foreground/10 pb-2 text-sm font-body text-foreground focus:outline-none focus:border-accent transition-colors"
              required
            />
          </div>
          <div className="w-full md:w-24">
            <label className="block text-[10px] tracking-[0.2em] uppercase text-foreground/50 mb-2 font-body font-medium">
              Huéspedes
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-transparent border-b border-foreground/10 pb-2 text-sm font-body text-foreground focus:outline-none focus:border-accent transition-colors appearance-none"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto bg-accent text-background px-10 py-3 text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-accent-light transition-colors"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}
