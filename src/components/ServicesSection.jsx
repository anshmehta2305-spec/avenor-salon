import React, { useState } from 'react';
import { Clock, CheckCircle2, Sparkles, ArrowRight, Eye } from 'lucide-react';
import TiltCard from './TiltCard';

export const MAIN_SERVICES = [
  {
    id: 'srv-haircut',
    category: 'Haircut',
    name: 'Precision Scissor Haircut & Taper',
    subtitle: 'Includes purifying wash, cranial mapping, and thermal blow-dry',
    price: 1800,
    duration: '45 mins',
    badge: 'Signature Cut',
    image: '/images/service-haircut.webp',
    alt: 'Master barber performing precision scissor haircut',
    features: [
      'Cranial geometry & growth whorl consultation',
      'Purifying sea-kelp scalp cleanse & warm neck wrap',
      'Scissor-over-comb detailing & micro-tapering',
      'Cold towel compress & pomade styling'
    ]
  },
  {
    id: 'srv-styling',
    category: 'Styling',
    name: 'Executive Scalp Wash & Blow-dry',
    subtitle: 'Includes botanical cleanse, acupressure rinse, and directional styling',
    price: 950,
    duration: '30 mins',
    badge: 'Quick Refresh',
    image: '/images/service-styling.webp',
    alt: 'Gentleman receiving blow-dry and directional hair pomade styling',
    features: [
      'Invigorating botanical detox wash',
      'Cranial pressure-point stress relief',
      'High-velocity directional thermal drying',
      'Matte clay or high-sheen pomade application'
    ]
  },
  {
    id: 'srv-shave',
    category: 'Beard & Shave',
    name: 'Imperial Hot Towel Straight-Razor Shave',
    subtitle: 'Includes eucalyptus steamed towels, badger lather, and alum block finish',
    price: 1450,
    duration: '45 mins',
    badge: 'Heritage Shave',
    image: '/images/service-shave.webp',
    alt: 'Traditional hot towel straight razor shave ceremony',
    features: [
      'Pre-shave sweet almond hot oil soak',
      'Alternating triple-steamed herbal towels',
      'Single-stroke Japanese Feather platinum blade',
      'Alum block glide & ice-stone cooling compress'
    ]
  },
  {
    id: 'srv-facial',
    category: 'Facial',
    name: '24K Gold & Volcanic Dermal Facial',
    subtitle: 'Includes ultrasonic pore vacuum, gold colloidal mask, and jade lifting',
    price: 4200,
    duration: '60 mins',
    badge: 'Ultra Luxury',
    image: '/images/service-facial.webp',
    alt: 'Men restorative 24K gold and volcanic charcoal facial therapy',
    features: [
      'Sonic deep-pore ultrasonic vacuuming',
      '24-Karat micro-gold collagen firming masque',
      'Far-infrared jade stone lymphatic drainage',
      'Under-eye caffeine micro-roller treatment'
    ]
  },
  {
    id: 'srv-colour',
    category: 'Colour',
    name: 'Subtle Grey Camouflage & Tonal Tint',
    subtitle: 'Includes ammonia-free mineral blending with zero harsh demarcations',
    price: 2600,
    duration: '50 mins',
    badge: 'Natural Elegance',
    image: '/images/service-colour.webp',
    alt: 'Natural mineral tone hair colour and subtle grey blending',
    features: [
      'Discreet private suite application',
      'Custom mineral formula matching virgin hair',
      'Fades gracefully without brassy undertones',
      'Nourishing argan gloss conditioning rinse'
    ]
  },
  {
    id: 'srv-treatments',
    category: 'Treatments',
    name: 'Japanese Head Spa & Follicular Reset',
    subtitle: 'Includes hydro-circulation halo, ozone micro-mist, and scalp shiatsu',
    price: 2800,
    duration: '60 mins',
    badge: 'Trichology Pick',
    image: '/images/service-treatments.webp',
    alt: 'Japanese head spa scalp steam hydro-circulation reset',
    features: [
      'Micro-mist thermal steam ozone opening',
      'Bamboo charcoal exfoliating scrub',
      '360-degree warm herbal water halo waterfall',
      'Shoulder and neck Shiatsu pressure release'
    ]
  },
  {
    id: 'srv-groom',
    category: 'Groom Package',
    name: 'The Viceroy Matrimonial & Groom Suite',
    subtitle: 'Includes full haircut, beard sculpt, gold facial, hand therapy, and scotch',
    price: 8900,
    duration: '150 mins',
    badge: 'The Pinnacle Ritual',
    image: '/images/service-groom.webp',
    alt: 'The Viceroy Full-Spectrum and Matrimonial Groom Package',
    features: [
      'Private VIP chamber reserved for 2.5 hours',
      'Signature Haircut & Architectural Beard Contouring',
      '24K Sovereign Gold Illuminating Facial',
      'Executive Manicure, Hand Spa & Single Malt Tasting'
    ]
  }
];

export default function ServicesSection({ onBookService, activeFilter = 'All' }) {
  const [selectedCategory, setSelectedCategory] = useState(activeFilter);
  const [modalService, setModalService] = useState(null);

  const categories = ['All', 'Haircut', 'Styling', 'Beard & Shave', 'Facial', 'Colour', 'Treatments', 'Groom Package'];

  const filtered =
    selectedCategory === 'All'
      ? MAIN_SERVICES
      : MAIN_SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="relative py-28 bg-[var(--bg-page)] text-[var(--text-main)] border-t border-[var(--line)] overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-[var(--gold)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-[11px] tracking-[0.25em] uppercase font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold-deep)]" />
            <span>The Service Atelier</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[var(--text-main)] mb-3">
            Our Services
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[var(--gold-deep)] mb-4">
            Crafted for the modern gentleman
          </p>

          <p className="text-[var(--text-soft)] text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
            Every ritual is carried out inside private acoustic suites with medical-grade autoclave hygiene and single-origin refreshment pairings.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-14 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs tracking-wider uppercase font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border-[var(--btn-primary-border)] shadow-md'
                    : 'bg-[var(--surface)] text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Services Grid (3 cols desktop, 2 cols tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((service) => (
            <TiltCard
              key={service.id}
              className="group bg-[var(--bg-card)] border border-[var(--line)] hover:border-[var(--gold)] rounded-2xl overflow-hidden flex flex-col justify-between shadow-[var(--shadow-card)] transition-all duration-300"
            >
              <div>
                {/* Service Card Image Banner */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-[var(--bg-elevated)] border-b border-[var(--line)]">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05] transition-transform duration-700 group-hover:scale-108"
                  />
                  {/* Subtle bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)]/80 via-transparent to-transparent opacity-60" />

                  {/* Top Badges */}
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] shadow-md">
                    {service.badge}
                  </span>

                  <span className="absolute top-3 right-3 text-xs text-[var(--text-main)] bg-[var(--bg-card)]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[var(--line)] flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-[var(--gold-deep)]" /> {service.duration}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <span className="text-[10px] text-[var(--gold-deep)] uppercase tracking-widest font-semibold block mb-1">
                    {service.category}
                  </span>

                  <h3 className="font-serif font-bold text-xl text-[var(--text-main)] group-hover:text-[var(--gold-deep)] transition-colors mb-2 leading-snug">
                    {service.name}
                  </h3>

                  <p className="text-xs text-[var(--text-soft)] leading-relaxed mb-5 font-light">
                    {service.subtitle}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 mb-6 border-t border-[var(--line)] pt-4">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-soft)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--gold-deep)] flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Price & Dual Actions */}
              <div className="p-6 pt-0 border-t border-[var(--line)] flex items-center justify-between gap-4 mt-2">
                <div>
                  <span className="text-[10px] text-[var(--text-faint)] uppercase tracking-wider block">Investment</span>
                  <div className="text-xl font-serif font-bold text-[var(--gold-deep)]">
                    <span className="text-xs font-sans text-[var(--text-soft)] font-normal mr-1">from</span>
                    ₹{service.price.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setModalService(service)}
                    className="p-2.5 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-[var(--text-primary)] hover:text-[var(--accent-deep)] hover:border-[var(--accent)] transition-colors shadow-sm"
                    title="View Ritual Protocol"
                    aria-label={`View details for ${service.name}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onBookService(service.id)}
                    className="btn-avenor-primary px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest hover:brightness-105 active:scale-95 shadow-md flex items-center gap-1.5 transition-all"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Modal: Ritual Protocol Detail */}
        {modalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--overlay)] backdrop-blur-md animate-in fade-in">
            <div className="bg-[var(--surface-elevated)] border border-[var(--border-strong)] rounded-2xl max-w-lg w-full p-6 text-left shadow-[var(--shadow-lg)] relative text-[var(--text-primary)]">
              <button
                onClick={() => setModalService(null)}
                aria-label="Close protocol details"
                className="absolute top-4 right-4 p-1.5 rounded-full border border-[var(--border)] text-[var(--accent-deep)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-alt)]"
              >
                ✕
              </button>

              <span className="text-[10px] tracking-widest uppercase font-bold text-[var(--badge-text)] px-2.5 py-1 rounded bg-[var(--badge-bg)] border border-[var(--badge-border)]">
                {modalService.category} • {modalService.duration}
              </span>

              <h3 className="font-serif font-bold text-2xl text-[var(--text-primary)] mt-3 mb-2">
                {modalService.name}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-4 leading-relaxed">
                {modalService.subtitle}
              </p>

              <div className="mb-5">
                <h4 className="text-xs uppercase tracking-widest text-[var(--accent-deep)] font-semibold mb-2.5">
                  Complete Ritual Protocol
                </h4>
                <ul className="space-y-2">
                  {modalService.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[var(--text-primary)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-deep)] mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                <div>
                  <span className="text-xs text-[var(--text-muted)]">Starting From</span>
                  <div className="text-2xl font-serif font-bold text-[var(--accent-deep)]">
                    ₹{modalService.price.toLocaleString('en-IN')}
                  </div>
                </div>

                <button
                  onClick={() => {
                    const id = modalService.id;
                    setModalService(null);
                    onBookService(id);
                  }}
                  className="btn-avenor-primary px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 shadow-md"
                >
                  Reserve Slot Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
