import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Calendar, Sparkles, MapPin, Award } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import { IMAGES } from '../data/images';

export default function BarbersCarousel({ onBookWithBarber }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const barbers = [
    {
      ...SALON_DATA.stylists[0],
      photo: IMAGES.barbers.armaan.src,
      alt: IMAGES.barbers.armaan.alt,
      quote: "A haircut must respect the skull's unique architecture, never fight it."
    },
    {
      ...SALON_DATA.stylists[1],
      photo: IMAGES.barbers.vikram.src,
      alt: IMAGES.barbers.vikram.alt,
      quote: "The straight razor is an instrument of tranquility when held with reverence."
    },
    {
      ...SALON_DATA.stylists[2],
      photo: IMAGES.barbers.devanshu.src,
      alt: IMAGES.barbers.devanshu.alt,
      quote: "Follicular health is the root foundation of all enduring masculine styling."
    },
    {
      ...SALON_DATA.stylists[3],
      photo: IMAGES.barbers.sameer.src,
      alt: IMAGES.barbers.sameer.alt,
      quote: "A low-fade should look effortlessly natural from boardroom to weekend."
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + barbers.length) % barbers.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % barbers.length);
  };

  return (
    <section id="barbers" className="relative py-28 bg-[var(--bg-page)] text-[var(--text-main)] border-t border-[var(--line)] overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-[var(--gold)]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-[11px] tracking-[0.25em] uppercase font-semibold mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[var(--gold-deep)]" />
              <span>Masters of Cranial Architecture</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[var(--text-main)] mb-2">
              Meet Our Barbers
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-[var(--gold-deep)]">
              Artisans trained across London & Tokyo academies
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous barber"
              className="p-3.5 rounded-full bg-[var(--bg-card)] border border-[var(--line-strong)] text-[var(--gold-deep)] hover:bg-[var(--gold)] hover:text-white transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next barber"
              className="p-3.5 rounded-full bg-[var(--bg-card)] border border-[var(--line-strong)] text-[var(--gold-deep)] hover:bg-[var(--gold)] hover:text-white transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {barbers.map((barber, index) => {
            const isFeatured = index === currentIndex;
            return (
              <div
                key={barber.id}
                className={`group rounded-2xl bg-[var(--bg-card)] border transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-[var(--shadow-card)] ${
                  isFeatured
                    ? 'border-[var(--gold)] ring-1 ring-[var(--gold)]/40 shadow-lg'
                    : 'border-[var(--line)] hover:border-[var(--gold)]'
                }`}
              >
                <div>
                  {/* Photo Banner */}
                  <div className="relative h-64 overflow-hidden bg-[var(--bg-elevated)] border-b border-[var(--line)]">
                    <img
                      src={barber.photo}
                      alt={barber.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-top filter brightness-[0.92] contrast-[1.04] transition-transform duration-700 group-hover:scale-108"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)]/80 via-transparent to-transparent opacity-70" />

                    {/* Experience Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 shadow-md">
                      <Award className="w-3 h-3 text-[var(--gold-deep)]" />
                      <span>{barber.experience}</span>
                    </div>

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[var(--bg-card)]/90 backdrop-blur-md text-[var(--gold-deep)] border border-[var(--line)] text-xs font-mono flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[var(--gold-deep)]" />
                      <span>{barber.rating}</span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-xl text-[var(--text-main)] group-hover:text-[var(--gold-deep)] transition-colors mb-1">
                      {barber.name}
                    </h3>

                    <p className="text-xs text-[var(--gold-deep)] font-semibold tracking-wider uppercase mb-3">
                      {barber.role}
                    </p>

                    <p className="text-xs text-[var(--text-soft)] italic leading-relaxed mb-4 font-light">
                      "{barber.quote}"
                    </p>

                    {/* Specialties Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {(barber.specialties || (typeof barber.specialty === 'string' ? barber.specialty.split(', ') : [])).map((spec, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-soft)] border border-[var(--line)]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Flagship Location */}
                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-faint)]">
                      <MapPin className="w-3.5 h-3.5 text-[var(--gold-deep)]" />
                      <span>{barber.atelier || barber.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Book CTA */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onBookWithBarber(barber.id)}
                    className="w-full py-2.5 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] hover:border-[var(--btn-primary-border)] text-[var(--accent-deep)] font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Reserve With {barber.name.split(' ')[0]}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
