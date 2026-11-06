import React from 'react';
import { Scissors, UserCheck, ShieldCheck, Calendar, Sparkles } from 'lucide-react';
import { IMAGES } from '../data/images';

export default function AboutSection({ onOpenBooking }) {
  const points = [
    {
      icon: Scissors,
      title: 'Precision cuts for your hair type',
      desc: 'Tailored scissor-over-comb architecture adapting to growth whorls, follicular density, and natural hair texture.'
    },
    {
      icon: UserCheck,
      title: 'Styled to your face shape and lifestyle',
      desc: 'In-depth cranial consultation before blade touches hair, balancing jawline proportions and daily styling ease.'
    },
    {
      icon: ShieldCheck,
      title: 'Premium products that protect and nourish',
      desc: 'Formulated in micro-batches with cold-pressed rare botanicals, volcanic clay, and oud resins. Zero parabens or sulfates.'
    }
  ];

  return (
    <section id="about" className="relative py-28 bg-[var(--bg-page)] text-[var(--text-main)] overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--gold)]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Luxury Border & Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[var(--line-strong)] shadow-[var(--shadow-card)] group bg-[var(--bg-card)]">
              <img
                src={IMAGES.about.src}
                alt={IMAGES.about.alt}
                loading="lazy"
                className="w-full h-[480px] sm:h-[540px] object-cover object-center filter brightness-[0.88] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
              />

              {/* Themed dark/ivory gradient bottom overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)]/80 via-transparent to-transparent opacity-70" />

              {/* Floating Experience Plaque */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[var(--bg-card)]/90 border border-[var(--line-strong)] backdrop-blur-md shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[var(--gold-deep)] uppercase tracking-widest font-semibold block mb-0.5">
                    Private Sanctuaries
                  </span>
                  <h4 className="font-serif font-bold text-base text-[var(--text-main)]">
                    Acoustically Isolated VIP Chambers
                  </h4>
                  <p className="text-[11px] text-[var(--text-faint)] mt-0.5">
                    Mumbai • New Delhi • Bengaluru • Hyderabad
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-elevated)] border border-[var(--gold)]/40 flex items-center justify-center text-[var(--gold-deep)] flex-shrink-0 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Subtle decorative gold corner frame */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[var(--gold)]/40 rounded-tl-xl pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[var(--gold)]/40 rounded-br-xl pointer-events-none" />
          </div>

          {/* Right Column: Narrative & 3 Icon Points */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-[11px] tracking-[0.25em] uppercase font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[var(--gold-deep)]" />
              <span>About Avenor</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--text-main)] tracking-tight mb-4 leading-tight">
              Crafted for the <br />
              <span className="gold-gradient-text italic font-normal">
                Discerning Gentleman.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-soft)] font-light leading-relaxed mb-8">
              Founded on the belief that men’s grooming is not an errand, but an essential ritual of composure. Inside our private chambers, time slows down. Every scissor taper is calculated, every razor angle is surgical, and every appointment includes complimentary single-origin espresso and single malt tastings.
            </p>

            {/* Three Icon Points */}
            <div className="space-y-6 mb-10">
              {points.map((pt, index) => {
                const IconComponent = pt.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-[var(--bg-card)] border border-[var(--line-strong)] flex items-center justify-center text-[var(--gold-deep)] flex-shrink-0 group-hover:border-[var(--gold)] group-hover:scale-105 transition-all shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-base text-[var(--text-main)] group-hover:text-[var(--gold-deep)] transition-colors mb-1">
                        {pt.title}
                      </h3>
                      <p className="text-xs text-[var(--text-soft)] leading-relaxed font-light">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Book Button */}
            <button
              onClick={() => onOpenBooking()}
              className="theme-btn-primary px-8 py-3.5 rounded-lg font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book An Experience</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
