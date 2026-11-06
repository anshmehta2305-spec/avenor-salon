import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '../data/images';

export default function ImageMarquee() {
  const items = IMAGES.marquee;
  const containerRef = useRef(null);
  const animFrameRef = useRef(null);
  const resumeTimerRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check prefers-reduced-motion media query
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  // Update arrow disabled states based on scroll position
  const updateScrollButtons = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const atStart = el.scrollLeft <= 6;
    const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 6;

    setCanScrollLeft(!atStart);
    setCanScrollRight(!atEnd);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    updateScrollButtons();
    const handleScroll = () => updateScrollButtons();

    el.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [updateScrollButtons]);

  // Pause auto-scroll on interaction, then resume 3 seconds later
  const markInteraction = useCallback(() => {
    setIsInteracting(true);
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 3000);
  }, []);

  // Auto-scroll loop using requestAnimationFrame (pauses on hover, interaction, or reduced motion)
  useEffect(() => {
    if (prefersReducedMotion) return;

    let autoScrollSpeed = 0.65; // adjust auto-scroll speed here (pixels per frame)

    const step = () => {
      const el = containerRef.current;
      if (el && !isHovered && !isInteracting && !isDragging) {
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
          // At the end, gently cycle back to start
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += autoScrollSpeed;
        }
        updateScrollButtons();
      }
      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isHovered, isInteracting, isDragging, prefersReducedMotion, updateScrollButtons]);

  // Scroll manually via arrow buttons
  // Adjust scroll distance here:
  // Desktop: ~2.5 to 3 cards; Mobile/Tablet: 1 to 2 cards
  const handleScroll = (direction) => {
    markInteraction();
    const el = containerRef.current;
    if (!el) return;

    const isDesktop = window.innerWidth >= 1024;
    // Card width + gap: desktop ~ (256 + 28) = 284; mobile ~ (224 + 20) = 244
    const scrollDistance = isDesktop ? el.clientWidth * 0.72 : 284;
    const delta = direction === 'left' ? -scrollDistance : scrollDistance;

    el.scrollBy({
      left: delta,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  };

  // Keyboard navigation when strip is focused
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handleScroll('left');
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleScroll('right');
    }
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e) => {
    const el = containerRef.current;
    if (!el) return;

    setIsDragging(true);
    markInteraction();
    setStartX(e.pageX - el.offsetLeft);
    setScrollStart(el.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = containerRef.current;
    if (!el) return;

    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.4; // drag acceleration factor
    el.scrollLeft = scrollStart - walk;
    updateScrollButtons();
  };

  const handleMouseUpOrLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      markInteraction();
    }
  };

  return (
    <section
      role="region"
      aria-label="Avenor craft gallery"
      className="relative py-12 bg-[var(--bg-alt)] border-y border-[var(--line)] overflow-hidden select-none transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseUpOrLeave();
      }}
    >
      {/* Edge gradient fades */}
      <div className="absolute left-0 inset-y-0 w-6 sm:w-8 bg-gradient-to-r from-[var(--bg-alt)]/90 to-transparent z-10 pointer-events-none transition-colors duration-300" />
      <div className="absolute right-0 inset-y-0 w-6 sm:w-8 bg-gradient-to-l from-[var(--bg-alt)]/90 to-transparent z-10 pointer-events-none transition-colors duration-300" />

      {/* Round LEFT Arrow Button */}
      <button
        type="button"
        onClick={() => handleScroll('left')}
        disabled={!canScrollLeft}
        aria-label="Previous styles"
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[var(--surface-elevated)] backdrop-blur-md border border-[var(--border-strong)] text-[var(--accent-deep)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] hover:border-[var(--btn-primary-border)] hover:scale-[1.08] hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-[var(--surface-elevated)] disabled:hover:text-[var(--accent-deep)] disabled:hover:shadow-none"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
      </button>

      {/* Round RIGHT Arrow Button */}
      <button
        type="button"
        onClick={() => handleScroll('right')}
        disabled={!canScrollRight}
        aria-label="Next styles"
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[var(--surface-elevated)] backdrop-blur-md border border-[var(--border-strong)] text-[var(--accent-deep)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] hover:border-[var(--btn-primary-border)] hover:scale-[1.08] hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-[var(--surface-elevated)] disabled:hover:text-[var(--accent-deep)] disabled:hover:shadow-none"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
      </button>

      {/* Scrollable Gallery Track with Snap */}
      <div
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onTouchStart={markInteraction}
        onTouchMove={markInteraction}
        onWheel={markInteraction}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
        className={`flex items-center gap-5 sm:gap-7 overflow-x-auto px-6 sm:px-14 py-2 cursor-grab active:cursor-grabbing focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)]/40 [&::-webkit-scrollbar]:hidden ${
          isInteracting || isHovered ? 'snap-x snap-mandatory' : ''
        }`}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative w-56 sm:w-64 h-80 sm:h-92 rounded-2xl overflow-hidden border border-[var(--line)] hover:border-[var(--gold)] transition-all duration-500 shadow-xl flex-shrink-0 bg-[var(--bg-card)] snap-start"
          >
            {/* Portrait Image */}
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              draggable={false}
              className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05] transition-transform duration-700 group-hover:scale-108 pointer-events-none select-none"
            />

            {/* Dark warm color grade overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 group-hover:opacity-70 transition-opacity pointer-events-none" />

            {/* Title Badge */}
            <div className="absolute bottom-4 inset-x-4 flex items-center justify-between pointer-events-none">
              <div>
                <span className="text-[10px] text-[var(--gold-light)] uppercase tracking-widest font-semibold block">
                  Avenor Craft
                </span>
                <h4 className="font-serif font-bold text-sm text-white drop-shadow-sm">{item.title}</h4>
              </div>
              <div className="w-2 h-2 rounded-full bg-[var(--gold-light)] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_var(--gold)]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
