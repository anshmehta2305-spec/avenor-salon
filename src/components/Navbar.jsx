import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ChevronDown, ShoppingBag, Sun, Moon } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export default function Navbar({
  theme = 'dark',
  onToggleTheme,
  onOpenBooking,
  cartCount = 0,
  onOpenCart,
  onSelectServiceCategory
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceDropdownItems = [
    { label: 'Haircut & Styling', cat: 'hair', desc: 'Precision cranial architecture' },
    { label: 'Beard & Shave', cat: 'beard', desc: 'Straight-blade & contouring' },
    { label: 'Facial & Skin Care', cat: 'skin', desc: '24K gold & charcoal detox' },
    { label: 'Hair Colour', cat: 'hair', desc: 'Natural grey blending' },
    { label: 'Scalp Treatments', cat: 'hair', desc: 'Japanese head spa & steam' },
    { label: 'Signature Packages', cat: 'packages', desc: 'The Viceroy & Groom suite' }
  ];

  const handleDropdownSelect = (cat) => {
    if (onSelectServiceCategory) onSelectServiceCategory(cat);
    setServicesDropdownOpen(false);
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--header-bg)] backdrop-blur-md border-b border-[var(--line)] shadow-lg py-2.5'
          : 'bg-transparent py-3 md:py-4 border-b border-[var(--line)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: EXACT AVENOR LOGO (Tile Stays Dark in Both Themes) */}
        <a href="#hero" className="flex items-center gap-3 group py-1" aria-label="Avenor Homepage">
          <div className="p-1.5 md:p-2 rounded-xl bg-[#180509] border border-[#f5d98a]/35 hover:border-[#f5d98a] transition-all shadow-[0_0_20px_rgba(245,217,138,0.25)] flex items-center justify-center">
            <img
              src="/assets/logo/avenor-logo-gold.png"
              alt="AVENOR - Defined by Elegance"
              className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] filter drop-shadow-[0_0_12px_rgba(245,217,138,0.5)]"
            />
          </div>
        </a>

        {/* Center: Main Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] tracking-widest uppercase font-medium">
          <a href="#hero" className="text-[var(--text-main)] hover:text-[var(--gold-deep)] transition-colors relative py-1">
            Home
          </a>

          <a href="#about" className="text-[var(--text-main)] hover:text-[var(--gold-deep)] transition-colors relative py-1">
            About
          </a>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-1 text-[var(--text-main)] hover:text-[var(--gold-deep)] transition-colors py-1 uppercase"
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5 text-[var(--gold-deep)]" />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute top-full -left-6 mt-1 w-72 bg-[var(--bg-card)] border border-[var(--line-strong)] rounded-xl shadow-[var(--shadow-soft)] p-2 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="px-3 py-1.5 text-[10px] text-[var(--text-faint)] tracking-widest uppercase border-b border-[var(--line)] mb-1 font-semibold">
                  Atelier Rituals
                </div>
                {serviceDropdownItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDropdownSelect(item.cat)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[var(--bg-alt)] hover:border hover:border-[var(--line)] transition-all text-xs group"
                  >
                    <div className="font-semibold text-[var(--text-main)] group-hover:text-[var(--gold-deep)] flex items-center justify-between">
                      <span>{item.label}</span>
                      <span className="text-[10px] text-[var(--gold-deep)] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </div>
                    <div className="text-[10px] text-[var(--text-faint)] mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#products" className="text-[var(--text-main)] hover:text-[var(--gold-deep)] transition-colors relative py-1">
            Products
          </a>

          <a href="#results" className="text-[var(--text-main)] hover:text-[var(--gold-deep)] transition-colors relative py-1">
            Results
          </a>

          <a href="#barbers" className="text-[var(--text-main)] hover:text-[var(--gold-deep)] transition-colors relative py-1">
            Barbers
          </a>

          <a href="#reviews" className="text-[var(--text-main)] hover:text-[var(--gold-deep)] transition-colors relative py-1">
            Reviews
          </a>

          <a href="#contact" className="text-[var(--text-main)] hover:text-[var(--gold-deep)] transition-colors relative py-1">
            Contact
          </a>
        </nav>

        {/* Right: Phone, Cart, Theme Toggle & Gold Book Button */}
        <div className="hidden lg:flex items-center gap-4 text-xs font-semibold tracking-wider">
          {/* Phone Link */}
          <a
            href="tel:+919724585704"
            className="flex items-center gap-2 text-[var(--gold-deep)] hover:text-[var(--gold)] transition-colors font-mono"
            title="Call Concierge"
          >
            <Phone className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>+91 97245 85704</span>
          </a>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-lg border border-[var(--line)] bg-[var(--bg-card)] hover:border-[var(--gold)] text-[var(--gold-deep)] transition-all hover:scale-105 active:scale-95"
            aria-label={`View cart with ${cartCount} items`}
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[var(--gold)] text-[var(--btn-primary-text)] text-[10px] font-bold flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          {/* Theme Toggle Button (Between Cart & Book Now) */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Day mode' : 'Switch to Dark mode'}
            title={theme === 'dark' ? 'Switch to Day mode' : 'Switch to Dark mode'}
            className="p-2.5 rounded-lg border border-[var(--line)] bg-[var(--bg-card)] hover:border-[var(--gold)] text-[var(--gold-deep)] transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[var(--accent)]" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--accent-deep)]" />
            )}
          </button>

          {/* Book Now Button */}
          <button
            onClick={() => onOpenBooking()}
            className="theme-btn-primary relative group overflow-hidden px-5 py-2.5 rounded-lg font-bold text-xs tracking-widest uppercase shadow-md hover:brightness-105 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="flex items-center gap-2 relative z-10">
              <Calendar className="w-3.5 h-3.5" />
              Book Now
            </span>
          </button>
        </div>

        {/* Mobile Controls: Phone Icon + Cart + Theme Toggle + Book + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+919724585704"
            className="p-2 rounded-lg border border-[var(--line)] bg-[var(--bg-card)] text-[var(--gold-deep)]"
            aria-label="Call Concierge"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-lg border border-[var(--line)] bg-[var(--bg-card)] text-[var(--gold-deep)]"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[var(--gold)] text-[var(--btn-primary-text)] text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Day mode' : 'Switch to Dark mode'}
            className="p-2 rounded-lg border border-[var(--line)] bg-[var(--bg-card)] text-[var(--gold-deep)]"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[var(--accent)]" /> : <Moon className="w-4 h-4 text-[var(--accent-deep)]" />}
          </button>

          <button
            onClick={() => onOpenBooking()}
            className="theme-btn-primary px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wider uppercase shadow-sm"
          >
            Book
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--text-main)] hover:text-[var(--gold-deep)]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--bg-card)] border-b border-[var(--line)] px-6 py-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-widest font-medium">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[var(--text-main)] hover:text-[var(--gold-deep)]"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[var(--text-main)] hover:text-[var(--gold-deep)]"
            >
              About Avenor
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[var(--text-main)] hover:text-[var(--gold-deep)] flex items-center justify-between"
            >
              <span>Our Services</span>
              <span className="text-[10px] text-[var(--gold-deep)] bg-[var(--bg-alt)] border border-[var(--line)] px-2 py-0.5 rounded">7 Categories</span>
            </a>
            <a
              href="#results"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[var(--text-main)] hover:text-[var(--gold-deep)]"
            >
              Real Results (Before / After)
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[var(--text-main)] hover:text-[var(--gold-deep)]"
            >
              The Avenor Collection
            </a>
            <a
              href="#barbers"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[var(--text-main)] hover:text-[var(--gold-deep)]"
            >
              Meet Our Barbers
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[var(--text-main)] hover:text-[var(--gold-deep)]"
            >
              Client Reviews
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[var(--text-main)] hover:text-[var(--gold-deep)]"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[var(--text-main)] hover:text-[var(--gold-deep)]"
            >
              Contact Consultation
            </a>

            <div className="pt-4 mt-2 border-t border-[var(--line)] flex flex-col gap-3">
              <a
                href="tel:+919724585704"
                className="w-full py-2.5 rounded-lg border border-[var(--line-strong)] text-center text-xs tracking-wider text-[var(--gold-deep)] flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +91 97245 85704</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-lg bg-[var(--gold-gradient)] text-[var(--btn-primary-text)] font-bold tracking-widest text-xs uppercase"
              >
                Book Your Appointment
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
