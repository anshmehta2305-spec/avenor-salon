import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, Star, ShieldCheck, Sparkles, Box, Image as ImageIcon } from 'lucide-react';
import HeroThreeScene from './HeroThreeScene';
import { IMAGES } from '../data/images';

export default function Hero({ onOpenBooking, theme = 'dark' }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [show3DView, setShow3DView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const slides = IMAGES.hero;

  // Auto-play slideshow every 5.5 seconds unless paused or in 3D mode
  useEffect(() => {
    if (show3DView || isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [show3DView, isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      id="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[90vh] md:min-h-[94vh] flex items-center justify-center overflow-hidden bg-[var(--bg-page)] transition-colors duration-300"
    >
      {/* 3D Atelier View Mode */}
      {show3DView ? (
        <div className="absolute inset-0 z-0 bg-[var(--bg-page)] flex items-center justify-center animate-in fade-in duration-500">
          <HeroThreeScene theme={theme} />
        </div>
      ) : (
        /* Full-Width Cinematic Image Slideshow */
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 pointer-events-none scale-105'
              } transition-transform duration-[7000ms]`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover object-center filter brightness-[0.8] contrast-[1.05]"
              />

              {/* Themed Photo Overlays: Ivory gradient in Day mode, Dark luxury gradient in Dark mode */}
              <div
                className="absolute inset-0 transition-all duration-300"
                style={{ background: 'var(--hero-overlay)' }}
              />
              <div
                className="absolute inset-0 transition-all duration-300"
                style={{ background: 'linear-gradient(to top, var(--bg-page) 0%, transparent 45%)' }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Overline Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-[11px] tracking-[0.25em] uppercase font-semibold mb-6 shadow-md backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-ping" />
            <span>Defined by Elegance</span>
          </div>

          {/* Large Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[var(--text-main)] tracking-tight leading-[1.05] mb-6">
            Men's Grooming Salon, <br />
            <span className="gold-gradient-text italic font-normal">
              Defined by Elegance.
            </span>
          </h1>

          {/* Supporting Line */}
          <p className="text-[var(--text-soft)] text-base sm:text-xl font-light leading-relaxed max-w-2xl mb-8">
            Bespoke cranial architecture, straight-razor ceremonies, and Japanese head spa therapies. Crafted exclusively for India's modern gentlemen inside private acoustic suites.
          </p>

          {/* Action Row: Book Appointment + Toggle 3D Atelier */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={() => onOpenBooking()}
              className="theme-btn-primary px-8 py-4 rounded-lg font-bold text-xs tracking-[0.2em] uppercase shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Appointment</span>
            </button>

            <a
              href="#services"
              className="px-7 py-4 rounded-lg border border-[var(--line-strong)] bg-[var(--bg-card)] text-[var(--text-main)] hover:border-[var(--gold)] hover:text-[var(--gold-deep)] text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Toggle 3D Scene / Photography Mode */}
            <button
              onClick={() => setShow3DView(!show3DView)}
              className="px-4 py-4 rounded-lg border border-[var(--gold)] bg-[var(--bg-card)] hover:border-[var(--gold-deep)] text-xs font-medium tracking-wider text-[var(--gold-deep)] flex items-center justify-center gap-2 transition-all backdrop-blur-md shadow-sm"
              title="Toggle 3D Scene View"
            >
              {show3DView ? <ImageIcon className="w-4 h-4 text-[var(--gold)]" /> : <Box className="w-4 h-4 text-[var(--gold)]" />}
              <span className="hidden sm:inline">{show3DView ? 'Cinematic View' : '3D Atelier View'}</span>
            </button>
          </div>

          {/* Trust Metrics Bar */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--line)] text-left max-w-lg">
            <div>
              <div className="flex items-center gap-1 text-[var(--gold-deep)] font-serif text-2xl font-bold">
                <span>4.8</span>
                <Star className="w-4 h-4 fill-[var(--gold-deep)] text-[var(--gold-deep)]" />
              </div>
              <div className="text-[10px] text-[var(--text-faint)] tracking-wider uppercase mt-0.5">
                5,200+ Google Reviews
              </div>
            </div>

            <div>
              <div className="text-[var(--text-main)] font-serif text-2xl font-bold">100%</div>
              <div className="text-[10px] text-[var(--text-faint)] tracking-wider uppercase mt-0.5 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[var(--gold)]" /> Autoclave Sterile
              </div>
            </div>

            <div>
              <div className="text-[var(--text-main)] font-serif text-2xl font-bold">5 Cities</div>
              <div className="text-[10px] text-[var(--text-faint)] tracking-wider uppercase mt-0.5">
                Flagship Suites
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slideshow Arrow Controls */}
      {!show3DView && (
        <div className="absolute bottom-6 right-6 sm:right-12 z-20 flex items-center gap-3">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="w-11 h-11 rounded-full border border-[var(--line-strong)] bg-[var(--bg-card)]/80 backdrop-blur-md text-[var(--text-main)] hover:border-[var(--gold)] hover:text-[var(--gold-deep)] flex items-center justify-center transition-all hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-card)]/80 backdrop-blur-md border border-[var(--line)] text-[10px] font-mono text-[var(--text-soft)]">
            <span className="text-[var(--gold-deep)] font-bold">{currentSlide + 1}</span>
            <span>/</span>
            <span>{slides.length}</span>
          </div>

          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="w-11 h-11 rounded-full border border-[var(--line-strong)] bg-[var(--bg-card)]/80 backdrop-blur-md text-[var(--text-main)] hover:border-[var(--gold)] hover:text-[var(--gold-deep)] flex items-center justify-center transition-all hover:scale-105"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
}
