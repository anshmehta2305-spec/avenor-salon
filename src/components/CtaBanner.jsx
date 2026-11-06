import React from 'react';
import { Calendar, Phone, Sparkles, ShieldCheck } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export default function CtaBanner({ onOpenBooking }) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0b0b0c] via-[#1c0509] to-[#070608] border-t border-[#e6c068]/20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#e6c068]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Avenor Logo clearly visible */}
        <div className="inline-block p-4 sm:p-5 rounded-2xl bg-[#140407]/90 border border-[#f5d98a]/35 shadow-[0_0_40px_rgba(245,217,138,0.25)] mb-8">
          <img
            src="/assets/logo/avenor-logo-gold.png"
            alt="AVENOR - Defined by Elegance"
            className="h-14 sm:h-16 md:h-20 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(245,217,138,0.55)]"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24060b] border border-[#e6c068]/30 text-[#f5d98a] text-[11px] tracking-[0.25em] uppercase font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#e6c068]" />
          <span>The Private Sanctuary</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
          Book your appointment
        </h2>

        <p className="font-serif italic text-xl text-[#f5d98a] mb-6">
          Defined by Elegance
        </p>

        <p className="text-sm sm:text-base text-[#c7bfb5] max-w-xl mx-auto font-light leading-relaxed mb-10">
          Step into an acoustic sanctuary where surgical autoclave hygiene, bespoke cranial architecture, and complimentary single malt tastings await you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-9 py-4 rounded-lg bg-gradient-to-r from-[#e6c068] via-[#f5d98a] to-[#d4af37] text-[#0b0b0c] font-bold text-xs uppercase tracking-[0.2em] shadow-2xl hover:shadow-[0_0_40px_rgba(230,192,104,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Your Private Suite</span>
          </button>

          <a
            href={`tel:${SALON_DATA.brand.contact.concierge}`}
            className="w-full sm:w-auto px-7 py-4 rounded-lg border border-[#e6c068]/40 bg-[#161418]/80 hover:bg-[#252229] text-[#f5d98a] hover:text-white text-xs font-semibold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#e6c068]" />
            <span>Call Concierge</span>
          </a>
        </div>
      </div>
    </section>
  );
}

