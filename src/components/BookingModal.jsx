import React, { useState, useEffect } from 'react';
import {
  X,
  Check,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  Wine,
  Coffee,
  Sparkles,
  ShieldCheck,
  Copy,
  CalendarCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SALON_DATA } from '../data/salonData';

export default function BookingModal({ isOpen, onClose, initialServiceId, initialOutletId }) {
  const [step, setStep] = useState(1);
  const [selectedOutlet, setSelectedOutlet] = useState(initialOutletId || SALON_DATA.outlets[0].id);
  const [selectedServices, setSelectedServices] = useState(
    initialServiceId ? [initialServiceId] : ['srv-01']
  );
  const [selectedStylist, setSelectedStylist] = useState('any');
  const [selectedDate, setSelectedDate] = useState('Today');
  const [selectedTime, setSelectedTime] = useState('11:30 AM');
  const [beveragePreference, setBeveragePreference] = useState('Islay Single Malt Scotch');
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [bookingRef, setBookingRef] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServices((prev) => (prev.includes(initialServiceId) ? prev : [...prev, initialServiceId]));
    }
  }, [initialServiceId]);

  useEffect(() => {
    if (initialOutletId) {
      setSelectedOutlet(initialOutletId);
    }
  }, [initialOutletId]);

  if (!isOpen) return null;

  // Calculations
  const chosenOutlet = SALON_DATA.outlets.find((o) => o.id === selectedOutlet) || SALON_DATA.outlets[0];
  const chosenServices = SALON_DATA.services.filter((s) => selectedServices.includes(s.id));
  const totalPrice = chosenServices.reduce((acc, curr) => acc + curr.price, 0);
  const totalDuration = chosenServices.reduce((acc, curr) => acc + curr.durationMins, 0);
  const chosenStylist =
    selectedStylist === 'any'
      ? { name: 'First Available Master Director', role: 'Allocated upon arrival', avatar: null }
      : SALON_DATA.stylists.find((st) => st.id === selectedStylist) || SALON_DATA.stylists[0];

  const handleToggleService = (srvId) => {
    if (selectedServices.includes(srvId)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((id) => id !== srvId));
      }
    } else {
      setSelectedServices([...selectedServices, srvId]);
    }
  };

  const handleCompleteBooking = (e) => {
    e.preventDefault();
    if (!customer.name || !customer.phone) {
      alert('Please provide your name and phone number for reservation confirmation.');
      return;
    }
    const refCode = `AVN-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refCode);
    setStep(5);

    // Confetti celebration
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#c5a059', '#dfbf7a', '#480d15', '#ffffff']
    });
  };

  const copyRefToClipboard = () => {
    navigator.clipboard.writeText(bookingRef);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const dateOptions = Array.from({ length: 6 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const dayName = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short' });
    const dateNum = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return {
      label: `${dayName}, ${dateNum}`,
      value: i === 0 ? 'Today' : `${dayName}, ${dateNum}`
    };
  });

  const timeSlots = [
    '10:00 AM', '11:00 AM', '11:30 AM', '12:30 PM',
    '02:00 PM', '03:15 PM', '04:30 PM', '05:45 PM',
    '06:30 PM', '07:30 PM', '08:15 PM'
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[var(--overlay)] backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[var(--surface-elevated)] border border-[var(--border-strong)] rounded-2xl shadow-[var(--shadow-lg)] overflow-hidden text-[var(--text-primary)] transition-colors duration-300">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[var(--surface)] border-b border-[var(--border)]">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo/avenor-logo-gold.png"
              alt="Avenor"
              className="h-7 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(245,217,138,0.5)]"
            />
            <div className="h-4 w-[1px] bg-[var(--border-strong)]" />
            <div>
              <h2 id="booking-modal-title" className="text-sm uppercase tracking-widest font-serif font-bold text-[var(--text-primary)]">
                Bespoke Atelier Reservation
              </h2>
              <p className="text-[10px] text-[var(--accent-deep)] tracking-wider uppercase font-semibold">
                Step {step} of 4 • Defined by Elegance
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close reservation modal"
            className="p-1.5 rounded-full border border-[var(--border)] text-[var(--accent-deep)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-alt)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Progress */}
        {step < 5 && (
          <div className="grid grid-cols-4 border-b border-[var(--border)] text-center text-[11px] tracking-wider uppercase bg-[var(--surface-alt)]">
            <div
              className={`py-2.5 px-1 border-r border-[var(--border)] font-semibold transition-colors ${
                step >= 1 ? 'bg-[var(--accent)]/15 text-[var(--accent-deep)] font-bold' : 'text-[var(--text-muted)]'
              }`}
            >
              1. Atelier
            </div>
            <div
              className={`py-2.5 px-1 border-r border-[var(--border)] font-semibold transition-colors ${
                step >= 2 ? 'bg-[var(--accent)]/15 text-[var(--accent-deep)] font-bold' : 'text-[var(--text-muted)]'
              }`}
            >
              2. Services ({selectedServices.length})
            </div>
            <div
              className={`py-2.5 px-1 border-r border-[var(--border)] font-semibold transition-colors ${
                step >= 3 ? 'bg-[var(--accent)]/15 text-[var(--accent-deep)] font-bold' : 'text-[var(--text-muted)]'
              }`}
            >
              3. Stylist
            </div>
            <div
              className={`py-2.5 px-1 font-semibold transition-colors ${
                step >= 4 ? 'bg-[var(--accent)]/15 text-[var(--accent-deep)] font-bold' : 'text-[var(--text-muted)]'
              }`}
            >
              4. Slot & Details
            </div>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* STEP 1: SELECT OUTLET */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-[var(--text-primary)] mb-1">
                  Select Your Flagship Atelier
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  Choose your preferred private grooming destination across India's metropolitan hubs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {SALON_DATA.outlets.map((outlet) => {
                  const isSelected = outlet.id === selectedOutlet;
                  return (
                    <div
                      key={outlet.id}
                      onClick={() => setSelectedOutlet(outlet.id)}
                      className={`relative p-4 rounded-xl cursor-pointer border transition-all ${
                        isSelected
                          ? 'border-[var(--accent)] bg-[var(--accent)]/10 ring-1 ring-[var(--accent)] shadow-md'
                          : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/50'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[var(--accent)] flex items-center justify-center text-[var(--accent-contrast)]">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                      <div className="flex items-start gap-3">
                        <img
                          src={outlet.image}
                          alt={outlet.name}
                          className="w-16 h-16 rounded-lg object-cover border border-[var(--border)]"
                        />
                        <div className="flex-1">
                          <span className="text-[10px] tracking-widest uppercase text-[var(--accent-deep)] font-semibold">
                            {outlet.city}
                          </span>
                          <h4 className="font-serif font-bold text-sm text-[var(--text-primary)]">{outlet.name}</h4>
                          <p className="text-[11px] text-[var(--text-secondary)] line-clamp-1 mt-0.5">{outlet.address}</p>
                          <div className="flex items-center gap-2 mt-2 text-[10px] text-[var(--accent-deep)] font-medium">
                            <span>★ {outlet.rating}</span>
                            <span>•</span>
                            <span>{outlet.suites} VIP Suites</span>
                            <span>•</span>
                            <span>Valet Parking</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: SELECT SERVICES */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[var(--text-primary)] mb-1">
                    Select Bespoke Grooming Rituals
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    You may select multiple services. Each ritual is conducted in a private acoustic chamber.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[var(--text-muted)]">Estimated Total</div>
                  <div className="text-lg font-serif font-bold text-[var(--accent-deep)]">
                    ₹{totalPrice.toLocaleString('en-IN')}
                    <span className="text-xs text-[var(--text-muted)] ml-1">({totalDuration} mins)</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {SALON_DATA.services.map((srv) => {
                  const isSelected = selectedServices.includes(srv.id);
                  return (
                    <div
                      key={srv.id}
                      onClick={() => handleToggleService(srv.id)}
                      className={`relative p-4 rounded-xl cursor-pointer border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-[var(--accent)] bg-[var(--accent)]/10 ring-1 ring-[var(--accent)] shadow-md'
                          : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] font-semibold">
                            {srv.badge}
                          </span>
                          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[var(--accent-deep)]" /> {srv.duration}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-sm text-[var(--text-primary)] mb-1">{srv.title}</h4>
                        <p className="text-[11px] text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                          {srv.tagline}
                        </p>
                      </div>

                      <div className="mt-3 pt-3 border-t border-[var(--border)] flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-bold text-[var(--accent-deep)] font-serif">
                            ₹{srv.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-[10px] text-[var(--text-muted)] line-through">
                            ₹{srv.originalPrice.toLocaleString('en-IN')}
                          </span>
                        </div>

                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center border text-xs ${
                            isSelected
                              ? 'bg-[var(--accent)] border-[var(--accent)] text-[var(--accent-contrast)]'
                              : 'border-[var(--border-strong)] text-transparent'
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: SELECT STYLIST */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-[var(--text-primary)] mb-1">
                  Choose Your Master Artisan
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  Select an Art Director or let our Front Concierge allocate the premier available specialist.
                </p>
              </div>

              {/* Any Stylist Option */}
              <div
                onClick={() => setSelectedStylist('any')}
                className={`p-4 rounded-xl cursor-pointer border transition-all flex items-center justify-between ${
                  selectedStylist === 'any'
                    ? 'border-[var(--accent)] bg-[var(--accent)]/10 ring-1 ring-[var(--accent)] shadow-md'
                    : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--surface-alt)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-deep)]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[var(--text-primary)]">
                      First Available Master Director
                    </h4>
                    <p className="text-[11px] text-[var(--text-secondary)]">
                      Fastest booking turnaround with zero waiting time at {chosenOutlet.name}.
                    </p>
                  </div>
                </div>

                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                    selectedStylist === 'any'
                      ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-contrast)]'
                      : 'border-[var(--border-strong)]'
                  }`}
                >
                  {selectedStylist === 'any' && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
              </div>

              {/* Individual Stylists */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {SALON_DATA.stylists.map((st) => {
                  const isSelected = selectedStylist === st.id;
                  return (
                    <div
                      key={st.id}
                      onClick={() => setSelectedStylist(st.id)}
                      className={`p-4 rounded-xl cursor-pointer border transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'border-[var(--accent)] bg-[var(--accent)]/10 ring-1 ring-[var(--accent)] shadow-md'
                          : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/50'
                      }`}
                    >
                      <img
                        src={st.avatar}
                        alt={st.name}
                        className="w-14 h-14 rounded-lg object-cover border border-[var(--border)]"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif font-bold text-sm text-[var(--text-primary)]">{st.name}</h4>
                          <span className="text-[10px] text-[var(--accent-deep)] font-semibold">
                            {st.rating}★
                          </span>
                        </div>
                        <p className="text-[10px] text-[var(--accent-deep)] uppercase tracking-wider font-semibold">{st.role}</p>
                        <p className="text-[10px] text-[var(--text-secondary)] mt-1 line-clamp-1">{st.specialty}</p>
                        <p className="text-[10px] text-[var(--text-muted)]">{st.experience} Experience</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: DATE, TIME & GUEST DETAILS */}
          {step === 4 && (
            <form onSubmit={handleCompleteBooking} className="space-y-6">
              {/* Date Selection */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[var(--accent-deep)] font-semibold mb-2">
                  Select Date
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {dateOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => setSelectedDate(opt.value)}
                      className={`py-2 px-1 text-center rounded-lg border text-xs transition-all ${
                        selectedDate === opt.value
                          ? 'theme-btn-primary font-bold shadow-sm'
                          : 'bg-[var(--surface)] text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--accent)]/40'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slot Selection */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[var(--accent-deep)] font-semibold mb-2">
                  Select Time Slot ({chosenOutlet.city} Time)
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 text-center rounded-lg border text-xs font-mono transition-all ${
                        selectedTime === time
                          ? 'theme-btn-primary font-bold shadow-sm'
                          : 'bg-[var(--surface)] text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--accent)]/40'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Complimentary Beverage Pairing */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[var(--accent-deep)] font-semibold mb-2 flex items-center gap-1.5">
                  <Wine className="w-3.5 h-3.5 text-[var(--accent-deep)]" /> Complimentary In-Suite Refreshment
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { label: 'Islay Single Malt Scotch', desc: 'Peaty smoky reserve with dark chocolate' },
                    { label: 'Double Ristretto Espresso', desc: 'Locally roasted Ethiopian single origin' },
                    { label: 'Darjeeling First Flush Tea', desc: 'Organic floral loose-leaf infusion' }
                  ].map((bev) => (
                    <div
                      key={bev.label}
                      onClick={() => setBeveragePreference(bev.label)}
                      className={`p-3 rounded-lg border cursor-pointer text-xs transition-all ${
                        beveragePreference === bev.label
                          ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent-deep)] ring-1 ring-[var(--accent)]'
                          : 'border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:border-[var(--accent)]/40'
                      }`}
                    >
                      <div className="font-semibold text-[var(--text-primary)]">{bev.label}</div>
                      <div className="text-[10px] text-[var(--text-muted)] mt-0.5">{bev.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-3 pt-2 border-t border-[var(--border)]">
                <h4 className="text-xs uppercase tracking-widest text-[var(--accent-deep)] font-semibold">
                  Gentleman's Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-[var(--text-secondary)] font-medium mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan Singhania"
                      value={customer.name}
                      onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                      className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder-[var(--placeholder)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:outline-none rounded-lg px-3.5 py-2.5 text-xs shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-[var(--text-secondary)] font-medium mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 97245 XXXXX"
                      value={customer.phone}
                      onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                      className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder-[var(--placeholder)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:outline-none rounded-lg px-3.5 py-2.5 text-xs shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-[var(--text-secondary)] font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="aryan@lifestyle.in"
                    value={customer.email}
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder-[var(--placeholder)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:outline-none rounded-lg px-3.5 py-2.5 text-xs shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-[var(--text-secondary)] font-medium mb-1">Special Preferences / Requests</label>
                  <input
                    type="text"
                    placeholder="e.g. Sensitive neck skin, prefer silent suite, arriving with companion..."
                    value={customer.notes}
                    onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                    className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder-[var(--placeholder)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:outline-none rounded-lg px-3.5 py-2.5 text-xs shadow-sm"
                  />
                </div>
              </div>

              {/* Reservation Guarantee Note */}
              <div className="flex items-center gap-2 p-3 rounded-lg bg-[var(--surface-alt)] border border-[var(--border)] text-[11px] text-[var(--accent-deep)] font-medium">
                <ShieldCheck className="w-4 h-4 text-[var(--accent-deep)] flex-shrink-0" />
                <span>Zero pre-payment required. Pay comfortably at the atelier following your consultation.</span>
              </div>
            </form>
          )}

          {/* STEP 5: BOOKING CONFIRMED */}
          {step === 5 && (
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] mx-auto flex items-center justify-center shadow-lg">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div>
                <span className="text-[11px] tracking-[0.25em] uppercase text-[var(--accent-deep)] font-semibold">
                  Reservation Confirmed
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--text-primary)] mt-1">
                  We Await Your Presence, {customer.name}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto mt-2">
                  Your private suite at {chosenOutlet.name} has been prepared. A confirmation dispatch has been routed to your WhatsApp at {customer.phone}.
                </p>
              </div>

              {/* Booking Reference Card */}
              <div className="max-w-md mx-auto p-5 rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] text-left space-y-3.5 shadow-md">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                  <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Booking Reference</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-base font-bold text-[var(--accent-deep)] tracking-widest">
                      {bookingRef}
                    </span>
                    <button
                      onClick={copyRefToClipboard}
                      className="p-1 text-[var(--accent-deep)] hover:text-[var(--text-primary)]"
                      title="Copy Reference"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[var(--text-muted)] block text-[10px] uppercase">Flagship Atelier</span>
                    <span className="text-[var(--text-primary)] font-medium">{chosenOutlet.name}</span>
                    <span className="text-[var(--text-muted)] block text-[10px]">{chosenOutlet.address}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] block text-[10px] uppercase">Date & Slot</span>
                    <span className="text-[var(--text-primary)] font-medium">{selectedDate}</span>
                    <span className="text-[var(--accent-deep)] block font-mono font-bold">{selectedTime}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] block text-[10px] uppercase">Stylist</span>
                    <span className="text-[var(--text-primary)] font-medium">{chosenStylist.name}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] block text-[10px] uppercase">In-Suite Tasting</span>
                    <span className="text-[var(--text-primary)] font-medium">{beveragePreference}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs">
                  <span className="text-[var(--text-muted)]">Total Services Amount</span>
                  <span className="font-serif font-bold text-[var(--accent-deep)] text-sm">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const text = `Booking Confirmed at AVENOR: ${bookingRef} on ${selectedDate} at ${selectedTime}. Address: ${chosenOutlet.address}`;
                    navigator.clipboard.writeText(text);
                    alert('Booking summary copied to clipboard!');
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-md bg-[var(--surface-alt)] hover:bg-[var(--surface)] border border-[var(--border-strong)] text-xs tracking-wider uppercase font-semibold text-[var(--text-primary)] flex items-center justify-center gap-2 shadow-sm"
                >
                  <CalendarCheck className="w-4 h-4 text-[var(--accent-deep)]" />
                  <span>Copy Appointment Summary</span>
                </button>

                <button
                  onClick={onClose}
                  className="theme-btn-primary w-full sm:w-auto px-8 py-3 rounded-md text-xs tracking-wider uppercase font-bold shadow-md active:scale-95 transition-all"
                >
                  Return to Atelier
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Controls */}
        {step < 5 && (
          <div className="px-6 py-4 bg-[var(--surface)] border-t border-[var(--border)] flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 rounded text-xs uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
            ) : (
              <div className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent-deep)]" /> Valet Included
              </div>
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="theme-btn-primary px-6 py-2.5 rounded font-bold text-xs uppercase tracking-widest shadow-md flex items-center gap-1 active:scale-95 transition-all"
              >
                Proceed to {step === 1 ? 'Services' : step === 2 ? 'Stylist' : 'Slot & Details'}
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleCompleteBooking}
                className="theme-btn-primary px-8 py-2.5 rounded font-bold text-xs uppercase tracking-widest shadow-md active:scale-95 transition-all"
              >
                Confirm Reservation (₹{totalPrice.toLocaleString('en-IN')})
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
