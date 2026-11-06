import React, { useState } from 'react';
import { Sparkles, Scissors, ArrowLeftRight, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../data/images';

function BeforeAfterSlider({ transformation }) {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e) => {
    if (!isDragging && e.type !== 'touchmove') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const offset = clientX - rect.left;
    const percentage = Math.min(Math.max((offset / rect.width) * 100, 5), 95);
    setSliderPos(percentage);
  };

  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg-card)] overflow-hidden p-5 sm:p-6 shadow-[var(--shadow-card)] transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-[10px] text-[var(--gold-deep)] uppercase tracking-widest font-bold block mb-1">
            {transformation.service}
          </span>
          <h3 className="font-serif font-bold text-xl text-[var(--text-main)]">
            {transformation.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-[var(--text-soft)] bg-[var(--bg-elevated)] px-3 py-1.5 rounded-full border border-[var(--line)]">
          <Scissors className="w-3.5 h-3.5 text-[var(--gold-deep)]" />
          <span>Artisan: <strong className="text-[var(--text-main)]">{transformation.stylist}</strong></span>
        </div>
      </div>

      {/* Interactive Drag to Compare Viewport */}
      <div
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleMouseMove}
        className="relative h-[360px] sm:h-[440px] rounded-xl overflow-hidden cursor-ew-resize select-none border border-[var(--line)]"
      >
        {/* AFTER Image (Full background) */}
        <img
          src={transformation.after}
          alt={transformation.afterAlt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.06]"
        />
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-bold tracking-widest uppercase text-[#f5d98a] border border-[#e6c068]/40 shadow-lg">
          AFTER (AVENOR)
        </div>

        {/* BEFORE Image (Clipped by slider position) */}
        <div
          style={{ width: `${sliderPos}%` }}
          className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-[var(--gold)] shadow-[0_0_20px_rgba(184,146,58,0.5)]"
        >
          <img
            src={transformation.before}
            alt={transformation.beforeAlt}
            loading="lazy"
            style={{ width: '100%', maxWidth: 'none' }}
            className="absolute inset-y-0 left-0 h-full w-[100vw] max-w-[800px] object-cover object-center filter brightness-[0.8] grayscale-[20%]"
          />
          <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-bold tracking-widest uppercase text-white/90 border border-white/20 shadow-lg">
            BEFORE
          </div>
        </div>

        {/* Center Drag Handle */}
        <div
          style={{ left: `calc(${sliderPos}% - 18px)` }}
          className="absolute top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[var(--gold-gradient)] text-white flex items-center justify-center shadow-[0_0_25px_rgba(184,146,58,0.6)] pointer-events-none"
        >
          <ArrowLeftRight className="w-4 h-4 stroke-[2.5]" />
        </div>
      </div>

      {/* Caption & Stylist Notes */}
      <div className="mt-4 pt-3 border-t border-[var(--line)] flex items-center justify-between text-xs text-[var(--text-soft)]">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--gold-deep)]" />
          <span>{transformation.notes}</span>
        </span>
        <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-[var(--gold-deep)]">
          ← Drag handle to compare →
        </span>
      </div>
    </div>
  );
}

export default function RealResultsSection({ onOpenBooking }) {
  const transformations = IMAGES.transformations;

  return (
    <section id="results" className="relative py-28 bg-[var(--bg-page)] text-[var(--text-main)] border-t border-[var(--line)] overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[var(--gold)]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-[11px] tracking-[0.25em] uppercase font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold-deep)]" />
            <span>Documented Transformations</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[var(--text-main)] mb-3">
            Real Results on Real Clients
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[var(--gold-deep)] mb-4">
            Precision cranial and facial contouring
          </p>

          <p className="text-[var(--text-soft)] text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
            Swipe the dividing line to inspect before-and-after follicular symmetry, hairline restoration, and jawline graduation crafted by our Master Artisans.
          </p>
        </div>

        {/* 2-Column Grid of Before/After Sliders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {transformations.map((trans) => (
            <BeforeAfterSlider key={trans.id} transformation={trans} />
          ))}
        </div>

        {/* Consult Banner */}
        <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--line)] shadow-[var(--shadow-card)] flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto text-center md:text-left">
          <div>
            <h4 className="font-serif font-bold text-xl text-[var(--text-main)] mb-1">
              Ready for your bespoke cranial blueprint?
            </h4>
            <p className="text-xs text-[var(--text-soft)] font-light">
              Complimentary 15-minute face-shape diagnostic and beverage pairing with every inaugural booking.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="theme-btn-primary px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest shadow-md flex-shrink-0 active:scale-95 transition-all"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
