import React, { useState } from 'react';
import { Send, Phone, Check, Sparkles } from 'lucide-react';
import { IMAGES } from '../data/images';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Haircut & Cranial Architecture',
    atelier: 'Bandra Flagship, Mumbai'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#e6c068', '#f5d98a', '#480d15', '#ffffff']
    });
  };

  return (
    <section id="contact" className="relative py-28 bg-[var(--bg-page)] text-[var(--text-main)] border-t border-[var(--line)] overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--gold)]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--line-strong)] overflow-hidden shadow-[var(--shadow-card)] transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: Big Photography with Color Grade */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-[580px] bg-[var(--bg-elevated)] overflow-hidden">
              <img
                src={IMAGES.contact.src}
                alt={IMAGES.contact.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
              />

              {/* Themed Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)]/80 via-transparent to-transparent opacity-70" />

              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-[var(--bg-card)]/90 border border-[var(--line-strong)] backdrop-blur-md shadow-lg">
                <span className="text-[10px] uppercase tracking-widest text-[var(--gold-deep)] font-bold block mb-1">
                  Complimentary Advisory
                </span>
                <h4 className="font-serif font-bold text-xl text-[var(--text-main)] mb-2">
                  1-on-1 Cranial Consultation
                </h4>
                <p className="text-xs text-[var(--text-soft)] leading-relaxed font-light mb-4">
                  Speak directly with a Creative Director to analyze hair texture, growth density, and suitable silhouettes.
                </p>
                <div className="flex items-center gap-2 text-xs text-[var(--gold-deep)] font-mono">
                  <Phone className="w-3.5 h-3.5 text-[var(--gold)]" />
                  <span>Direct Hotline: +91 97245 85704</span>
                </div>
              </div>
            </div>

            {/* Right Column: Short Consultation Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-[11px] tracking-[0.25em] uppercase font-semibold mb-4 w-fit shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[var(--gold-deep)]" />
                <span>Personalized Guidance</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--text-main)] tracking-tight mb-3">
                Not sure what suits you best?
              </h2>

              <p className="text-xs sm:text-sm text-[var(--text-soft)] leading-relaxed mb-8 font-light">
                Leave your details below. Our Front Concierge will contact you within 2 business hours to arrange a personalized consultation.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--accent)] text-center space-y-4 animate-in zoom-in-95 duration-300 shadow-md">
                  <div className="w-12 h-12 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] mx-auto flex items-center justify-center shadow-lg">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-[var(--text-main)]">
                    Consultation Request Received
                  </h3>
                  <p className="text-xs text-[var(--text-soft)] max-w-sm mx-auto">
                    Thank you, <strong className="text-[var(--text-main)]">{formData.name}</strong>. Our Senior Stylist from {formData.atelier} will call or WhatsApp you at{' '}
                    <strong className="text-[var(--gold-deep)] font-mono">{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[var(--gold-deep)] hover:text-[var(--text-main)] underline underline-offset-4 tracking-wider uppercase font-semibold"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[var(--text-soft)] font-semibold mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aryan Malhotra"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[var(--bg-elevated)] border border-[var(--line)] rounded-xl px-4 py-3 text-xs text-[var(--text-main)] placeholder-[var(--text-faint)] focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 focus:outline-none transition-colors shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[var(--text-soft)] font-semibold mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 97245 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[var(--bg-elevated)] border border-[var(--line)] rounded-xl px-4 py-3 text-xs text-[var(--text-main)] placeholder-[var(--text-faint)] focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 focus:outline-none transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[var(--text-soft)] font-semibold mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[var(--bg-elevated)] border border-[var(--line)] rounded-xl px-4 py-3 text-xs text-[var(--text-main)] focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 focus:outline-none transition-colors shadow-sm"
                      >
                        <option value="Haircut & Cranial Architecture">Haircut & Cranial Architecture</option>
                        <option value="Beard Trim & Razor Sculpting">Beard Trim & Razor Sculpting</option>
                        <option value="Classic Hot Towel Shave">Classic Hot Towel Shave</option>
                        <option value="24K Gold & Charcoal Facial">24K Gold & Charcoal Facial</option>
                        <option value="Japanese Head Spa">Japanese Head Spa</option>
                        <option value="Wedding Groom Package">Wedding Groom Package</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[var(--text-soft)] font-semibold mb-1.5">
                        Preferred Atelier Location
                      </label>
                      <select
                        value={formData.atelier}
                        onChange={(e) => setFormData({ ...formData, atelier: e.target.value })}
                        className="w-full bg-[var(--bg-elevated)] border border-[var(--line)] rounded-xl px-4 py-3 text-xs text-[var(--text-main)] focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 focus:outline-none transition-colors shadow-sm"
                      >
                        <option value="Bandra Flagship, Mumbai">Bandra Flagship, Mumbai</option>
                        <option value="BKC Financial Club, Mumbai">BKC Financial Club, Mumbai</option>
                        <option value="Connaught Place, New Delhi">Connaught Place, New Delhi</option>
                        <option value="Indiranagar 100ft, Bengaluru">Indiranagar 100ft, Bengaluru</option>
                        <option value="Jubilee Hills, Hyderabad">Jubilee Hills, Hyderabad</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="theme-btn-primary w-full py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] shadow-md flex items-center justify-center gap-2 mt-4 active:scale-95 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Complimentary Consultation</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
