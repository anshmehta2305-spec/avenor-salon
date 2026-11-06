import React, { useState } from 'react';
import { Phone, Mail, MapPin, Sparkles, Send, Check } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export default function Footer({ onOpenBooking }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="relative bg-[var(--bg-card)] text-[var(--text-main)] border-t border-[var(--line-strong)] pt-16 pb-12 overflow-hidden transition-colors duration-300">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--gold)]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tier: Logo & Tagline Focus */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-12 border-b border-[var(--line)] gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--line-strong)] shadow-md mb-4">
              <img
                src="/assets/logo/avenor-logo-gold.png"
                alt="AVENOR - Defined by Elegance"
                className="h-12 sm:h-14 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(245,217,138,0.5)]"
              />
            </div>
            <p className="font-serif tracking-[0.25em] text-[var(--gold-deep)] text-xs uppercase font-medium">
              Defined by Elegance
            </p>
            <p className="text-xs text-[var(--text-soft)] mt-1 max-w-sm">
              India's premier luxury grooming atelier. Where bespoke cranial architecture meets timeless masculine poise.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="w-full md:w-auto max-w-md">
            <span className="text-xs uppercase tracking-widest text-[var(--gold-deep)] font-semibold block mb-2">
              The Gentleman's Gazette
            </span>
            <p className="text-xs text-[var(--text-soft)] mb-3">
              Receive seasonal grooming advisories, private salon invitations, and rare formulation drops.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 bg-[var(--bg-elevated)] border border-[var(--line)] rounded-lg px-4 py-2.5 text-xs text-[var(--text-main)] placeholder-[var(--text-faint)] focus:border-[var(--gold)] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="theme-btn-primary px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md active:scale-95"
              >
                {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-3.5 h-3.5" />}
                <span>{subscribed ? 'Joined' : 'Join'}</span>
              </button>
            </form>
            {subscribed && (
              <span className="text-[11px] text-[var(--gold-deep)] mt-1.5 block font-medium">
                Welcome to the fellowship. Check your inbox shortly.
              </span>
            )}
          </div>
        </div>

        {/* Middle Tier: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-[var(--line)] text-xs">
          <div>
            <h4 className="font-serif font-bold text-sm text-[var(--text-main)] uppercase tracking-wider mb-4">
              Atelier Rituals
            </h4>
            <ul className="space-y-2.5 text-[var(--text-soft)]">
              <li>
                <a href="#services" className="hover:text-[var(--gold-deep)] transition-colors">
                  Signature Avenor Cut
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--gold-deep)] transition-colors">
                  Imperial Straight-Razor Shave
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--gold-deep)] transition-colors">
                  Architectural Beard Sculpting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--gold-deep)] transition-colors">
                  Japanese Head Spa Scalp Reset
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--gold-deep)] transition-colors">
                  The Viceroy Grand Ritual
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-[var(--text-main)] uppercase tracking-wider mb-4">
              Flagship Salons
            </h4>
            <ul className="space-y-2.5 text-[var(--text-soft)]">
              <li>
                <a href="#reviews" className="hover:text-[var(--gold-deep)] transition-colors">
                  Bandra West, Mumbai
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[var(--gold-deep)] transition-colors">
                  BKC Financial Club, Mumbai
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[var(--gold-deep)] transition-colors">
                  Connaught Place, New Delhi
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[var(--gold-deep)] transition-colors">
                  Indiranagar, Bengaluru
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[var(--gold-deep)] transition-colors">
                  Jubilee Hills, Hyderabad
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-[var(--text-main)] uppercase tracking-wider mb-4">
              Explore Avenor
            </h4>
            <ul className="space-y-2.5 text-[var(--text-soft)]">
              <li>
                <a href="#about" className="hover:text-[var(--gold-deep)] transition-colors">
                  About Our House
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--gold-deep)] transition-colors">
                  Signature Services
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-[var(--gold-deep)] transition-colors">
                  Real Client Transformations
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[var(--gold-deep)] transition-colors">
                  The Avenor Collection
                </a>
              </li>
              <li>
                <a href="#barbers" className="hover:text-[var(--gold-deep)] transition-colors">
                  Master Barbers
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[var(--gold-deep)] transition-colors">
                  Client Reviews & Map
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[var(--gold-deep)] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--gold-deep)] transition-colors">
                  Complimentary Consultation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-[var(--text-main)] uppercase tracking-wider mb-4">
              Concierge Desk
            </h4>
            <ul className="space-y-2.5 text-[var(--text-soft)]">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[var(--gold-deep)]" />
                <a href={`tel:${SALON_DATA.brand.contact.concierge}`} className="hover:text-[var(--text-main)] font-mono">
                  {SALON_DATA.brand.contact.concierge}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[var(--gold-deep)]" />
                <a href={`mailto:${SALON_DATA.brand.contact.email}`} className="hover:text-[var(--text-main)]">
                  {SALON_DATA.brand.contact.email}
                </a>
              </li>
              <li className="text-[11px] leading-relaxed pt-2">
                {SALON_DATA.brand.contact.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[var(--text-faint)] gap-4">
          <div>
            © {new Date().getFullYear()} AVENOR Luxury Grooming Atelier. All rights reserved.
          </div>

          <div className="font-serif italic text-[var(--gold-deep)] tracking-widest text-xs">
            "Defined by Elegance"
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[var(--gold-deep)] transition-colors">Privacy Charter</a>
            <span>•</span>
            <a href="#" className="hover:text-[var(--gold-deep)] transition-colors">Hygiene Standards</a>
            <span>•</span>
            <a href="#" className="hover:text-[var(--gold-deep)] transition-colors">Terms of Patronage</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

