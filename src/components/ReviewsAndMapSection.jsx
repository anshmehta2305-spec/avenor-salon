import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, MapPin, Phone, Clock, ExternalLink, ShieldCheck, Sparkles, Navigation } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export default function ReviewsAndMapSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedOutletTab, setSelectedOutletTab] = useState(0);

  const testimonials = SALON_DATA.testimonials;
  const outlets = SALON_DATA.outlets;
  const currentOutlet = outlets[selectedOutletTab] || outlets[0];

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="reviews" className="relative py-28 bg-[var(--bg-page)] text-[var(--text-main)] border-t border-[var(--line)] overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[var(--gold)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-[11px] tracking-[0.25em] uppercase font-semibold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold-deep)]" />
            <span>Verified Client Chronicles</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[var(--text-main)] mb-3">
            Client Reviews & Locations
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[var(--gold-deep)]">
            Rated 4.8 / 5.0 across metropolitan flagship ateliers
          </p>
        </div>

        {/* Google Rating Block (High-Impact Trust Hero) */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--line-strong)] shadow-[var(--shadow-card)] flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300">
          <div className="flex items-center gap-5">
            {/* Google G Emblem */}
            <div className="w-16 h-16 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--line)] flex items-center justify-center text-2xl font-bold shadow-md flex-shrink-0">
              <span className="text-[var(--gold-deep)]">G</span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text-main)]">4.8</span>
                <div className="flex items-center text-[var(--gold-deep)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--gold-deep)]" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-[var(--text-soft)] mt-1">
                Based on <strong className="text-[var(--text-main)]">5,200+ verified client ratings</strong> across Mumbai, Delhi NCR, Bengaluru & Hyderabad.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-[var(--line-strong)] bg-[var(--bg-card)] hover:bg-[var(--gold)] hover:text-white text-[var(--gold-deep)] text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 shadow-sm"
            >
              <span>See all reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Testimonials Carousel & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          {/* Left Column: Testimonial Carousel */}
          <div className="lg:col-span-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--line)] p-8 flex flex-col justify-between shadow-[var(--shadow-card)] relative">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-[var(--gold-deep)]">
                  {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--gold-deep)]" />
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--badge-text)] px-2.5 py-1 rounded bg-[var(--badge-bg)] border border-[var(--badge-border)]">
                  Verified Patron
                </span>
              </div>

              <blockquote className="font-serif italic text-base sm:text-lg text-[var(--text-main)] leading-relaxed mb-6 font-normal">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
            </div>

            <div>
              <div className="pt-6 border-t border-[var(--line)] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[var(--text-main)]">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-[11px] text-[var(--gold-deep)] font-medium">
                    {testimonials[currentTestimonial].title}
                  </p>
                  <p className="text-[10px] text-[var(--text-faint)] mt-0.5">
                    Patron of {testimonials[currentTestimonial].outlet}
                  </p>
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Testimonial"
                    className="p-2.5 rounded-full border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-[var(--accent-deep)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] hover:border-[var(--btn-primary-border)] transition-all shadow-sm"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Testimonial"
                    className="p-2.5 rounded-full border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-[var(--accent-deep)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] hover:border-[var(--btn-primary-border)] transition-all shadow-sm"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Map & Outlet Details */}
          <div className="lg:col-span-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--line)] overflow-hidden shadow-[var(--shadow-card)] flex flex-col justify-between">
            {/* Outlet Selector Tabs */}
            <div className="flex items-center gap-2 p-3 bg-[var(--bg-alt)] border-b border-[var(--line)] overflow-x-auto scrollbar-none">
              {outlets.slice(0, 4).map((outlet, idx) => (
                <button
                  key={outlet.id}
                  onClick={() => setSelectedOutletTab(idx)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider whitespace-nowrap transition-all ${
                    selectedOutletTab === idx
                      ? 'bg-[var(--gold-gradient)] text-white shadow-md'
                      : 'text-[var(--text-soft)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)]'
                  }`}
                >
                  {outlet.city} • {outlet.name.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Outlet Location Overview */}
            <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--gold-deep)] font-bold block mb-1">
                    Flagship Atelier
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[var(--text-main)]">
                    {currentOutlet.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${currentOutlet.phone}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)] text-[var(--text-main)] hover:border-[var(--gold)] text-xs font-mono"
                  >
                    <Phone className="w-3.5 h-3.5 text-[var(--gold-deep)]" />
                    <span>{currentOutlet.phone}</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 text-xs text-[var(--text-soft)]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[var(--gold-deep)] flex-shrink-0 mt-0.5" />
                  <span>{currentOutlet.address}, {currentOutlet.city} - {currentOutlet.pincode}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[var(--gold-deep)] flex-shrink-0 mt-0.5" />
                  <span>Tue - Sun: 09:00 AM - 09:30 PM (Mondays by Private Invitation)</span>
                </div>
              </div>

              {/* Embedded Dark/Light Google Map Iframe */}
              <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-[var(--line)] bg-[var(--bg-elevated)]">
                <iframe
                  title={`Map of ${currentOutlet.name}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05)' }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://maps.google.com/maps?q=${currentOutlet.coordinates.lat},${currentOutlet.coordinates.lng}&hl=en&z=14&output=embed`}
                />

                <div className="absolute bottom-3 right-3">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${currentOutlet.coordinates.lat},${currentOutlet.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--line)] text-xs font-bold text-[var(--gold-deep)] hover:text-[var(--text-main)] shadow-lg"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[var(--gold)]" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
