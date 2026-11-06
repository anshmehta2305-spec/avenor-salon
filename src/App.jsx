import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageMarquee from './components/ImageMarquee';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import RealResultsSection from './components/RealResultsSection';
import ProductsSection from './components/ProductsSection';
import BarbersCarousel from './components/BarbersCarousel';
import ReviewsAndMapSection from './components/ReviewsAndMapSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import CartDrawer from './components/CartDrawer';
import ProductQuickViewModal from './components/ProductQuickViewModal';
import { MessageCircle, ArrowUp, Calendar } from 'lucide-react';
import { SALON_DATA } from './data/salonData';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('avenor-theme');
      if (saved) return (saved === 'day' || saved === 'light') ? 'light' : 'dark';
      return 'dark'; // Strict default: dark mode on first visit (do not follow system setting)
    }
    return 'dark';
  });

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('avenor-theme', nextTheme);
    } catch (e) {}
  };

  const [isPreloading, setIsPreloading] = useState(true);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialService, setBookingInitialService] = useState(null);
  const [selectedOutletId, setSelectedOutletId] = useState('mum-bandra');

  // E-commerce Cart State
  const [cart, setCart] = useState([
    {
      id: 'prod-beard-01',
      name: 'Royal Oud & Sandalwood Beard Oil',
      category: 'Beard',
      size: '50 ml',
      price: 1850,
      quantity: 1
    }
  ]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  // Quick View 3D Modal State
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleOpenBooking = (serviceId = null, outletId = null) => {
    if (serviceId) setBookingInitialService(serviceId);
    if (outletId) setSelectedOutletId(outletId);
    setBookingModalOpen(true);
  };

  const handleSelectOutlet = (outletId) => {
    setSelectedOutletId(outletId);
  };

  const handleAddToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          category: product.category,
          size: product.size,
          price: product.price,
          quantity
        }
      ];
    });
    setCartDrawerOpen(true);
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveCartItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] font-body selection:bg-[var(--gold)] selection:text-white transition-colors duration-300">
      {/* 1. Preloader */}
      {isPreloading && <Preloader onComplete={() => setIsPreloading(false)} />}

      {/* 2. Global Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenBooking={() => handleOpenBooking()}
        onSelectOutlet={handleSelectOutlet}
        selectedOutletId={selectedOutletId}
        cartCount={totalCartCount}
        onOpenCart={() => setCartDrawerOpen(true)}
      />

      {/* Main Page Layout (Strictly 12-Section Architecture) */}
      <main>
        {/* 2. Hero: Full-Width Cinematic Slideshow + 3D Atelier Mode */}
        <Hero
          theme={theme}
          onOpenBooking={handleOpenBooking}
          selectedOutletId={selectedOutletId}
          onSelectOutlet={handleSelectOutlet}
        />

        {/* 3. Image Marquee: Continuous Portrait-Style Scroll */}
        <ImageMarquee />

        {/* 4. About Us: Brand Story + 3 Precision Pillars + Book Button */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Our Services: High-Definition Photography Cards & Rituals */}
        <ServicesSection onBookService={(srvId) => handleOpenBooking(srvId)} />

        {/* 6. Real Results on Real Clients: Interactive Before/After Drag Sliders */}
        <RealResultsSection onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Products: The Avenor Collection Grid with 3D Tilt, Quick View & Cart */}
        <ProductsSection
          onAddToCart={handleAddToCart}
          onQuickView={(product) => setQuickViewProduct(product)}
        />

        {/* 8. Meet Our Barbers/Stylists: Team Portrait Carousel & Philosophy */}
        <BarbersCarousel onBookWithBarber={() => handleOpenBooking()} />

        {/* 9. Reviews & Google Rating: 4.8-Star Authority, Testimonials & Map */}
        <ReviewsAndMapSection />

        {/* 10. FAQ: Accordion with 5 Core Gentleman Inquiries */}
        <FaqSection />

        {/* 11. Contact CTA: Complimentary Consultation Form & Booking */}
        <ContactSection />
      </main>

      {/* 12. Grand Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* 13. Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => {
          setBookingModalOpen(false);
          setBookingInitialService(null);
        }}
        initialServiceId={bookingInitialService}
        initialOutletId={selectedOutletId}
      />

      {/* 14. 3D Product Quick View Modal */}
      <ProductQuickViewModal
        isOpen={!!quickViewProduct}
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* 15. E-Commerce Cart Slide-in Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Bottom Action Strip: Sticky Book Now + WhatsApp Concierge + Scroll Top */}
      <div className="fixed bottom-6 inset-x-0 z-40 px-4 sm:px-6 pointer-events-none flex items-center justify-between">
        {/* Sticky Book Now Button on bottom left */}
        <div className="pointer-events-auto">
          <button
            onClick={() => handleOpenBooking()}
            className="theme-btn-primary flex items-center gap-2.5 px-5 py-3 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all"
            aria-label="Book your appointment"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Book Appointment</span>
            <span className="sm:hidden">Book</span>
          </button>
        </div>

        {/* Right Floating Actions: WhatsApp & Scroll to top */}
        <div className="pointer-events-auto flex items-center gap-2.5">
          {/* WhatsApp Direct Concierge */}
          <a
            href={`https://wa.me/919724585704?text=${encodeURIComponent(
              "Hello Avenor Concierge, I would like to inquire about reserving a private suite appointment."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3.5 sm:px-4 py-3 rounded-full bg-[var(--concierge)] text-white border border-[#25d366]/40 shadow-2xl transition-all hover:scale-105 active:scale-95 hover:brightness-110"
            title="Direct WhatsApp Concierge"
          >
            <div className="w-2 h-2 rounded-full bg-[#25d366] animate-ping" />
            <MessageCircle className="w-4 h-4 text-[#25d366]" />
            <span className="text-xs font-semibold tracking-wider uppercase hidden md:inline">
              Concierge
            </span>
          </a>

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[var(--bg-card)] hover:bg-[var(--gold)] text-[var(--gold-deep)] hover:text-[var(--btn-primary-text)] border border-[var(--line-strong)] transition-all shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
