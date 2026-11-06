import React, { useState } from 'react';
import { MapPin, Phone, Star, ShieldCheck, Clock, ExternalLink, Calendar, Check } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export default function OutletsSection({ onSelectOutletForBooking, selectedOutletId }) {
  const [activeCity, setActiveCity] = useState('All');

  const cities = ['All', 'Mumbai', 'New Delhi', 'Bengaluru', 'Hyderabad'];

  const filteredOutlets =
    activeCity === 'All'
      ? SALON_DATA.outlets
      : SALON_DATA.outlets.filter((o) => o.city === activeCity);

  return (
    <section id="outlets" className="relative py-24 bg-[#0a0a0b] text-[#faf7f2] border-t border-[#c5a059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c0407] border border-[#c5a059]/30 text-[#dfbf7a] text-[11px] tracking-[0.2em] uppercase font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Private Sanctuaries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Flagship Ateliers. <br />
            <span className="gold-gradient-text italic font-normal">
              Find Your Sanctuary.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[#9c948b] leading-relaxed font-light">
            Located in India’s most distinguished enclaves. Every salon features private acoustic suites, reserved valet parking, and bespoke single malt tasting lounges.
          </p>
        </div>

        {/* City Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-5 py-2.5 rounded-full text-xs tracking-wider uppercase font-medium transition-all ${
                activeCity === city
                  ? 'bg-[#c5a059] text-[#0b0b0c] font-bold shadow-md'
                  : 'bg-[#161518] text-[#9c948b] border border-[#2b272a] hover:text-white hover:border-[#c5a059]/40'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Outlets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOutlets.map((outlet) => {
            const isCurrent = outlet.id === selectedOutletId;
            return (
              <div
                key={outlet.id}
                className={`group rounded-2xl bg-[#141215] border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  isCurrent
                    ? 'border-[#c5a059] gold-glow'
                    : 'border-[#2b272a] hover:border-[#c5a059]/50'
                }`}
              >
                <div>
                  {/* Photo Banner */}
                  <div className="relative h-56 overflow-hidden bg-[#1c1a1d]">
                    <img
                      src={outlet.image}
                      alt={outlet.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141215] via-transparent to-transparent opacity-80" />

                    <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded bg-[#35080e]/90 text-[#dfbf7a] border border-[#c5a059]/30">
                      {outlet.city} Flagship
                    </span>

                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-[#dfbf7a]">
                      <Star className="w-3.5 h-3.5 fill-[#dfbf7a]" />
                      <span>{outlet.rating}</span>
                      <span className="text-[10px] text-[#9c948b]">({outlet.reviewsCount})</span>
                    </div>

                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{outlet.suites} Private VIP Chambers</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#dfbf7a] transition-colors mb-2">
                      {outlet.name}
                    </h3>

                    <p className="text-xs text-[#a49d94] flex items-start gap-2 mb-4 leading-relaxed font-light">
                      <MapPin className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                      <span>
                        {outlet.address}, {outlet.city} - {outlet.pincode}
                      </span>
                    </p>

                    <div className="flex items-center gap-2 text-xs text-[#c5a059] mb-5">
                      <Phone className="w-3.5 h-3.5" />
                      <a href={`tel:${outlet.phone}`} className="hover:underline font-mono">
                        {outlet.phone}
                      </a>
                    </div>

                    {/* Amenities Chips */}
                    <div className="space-y-1.5 mb-6 border-t border-[#262327] pt-4">
                      <span className="text-[10px] uppercase tracking-widest text-[#9c948b] block mb-2 font-medium">
                        Atelier Amenities
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {outlet.amenities.map((amenity, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2.5 py-1 rounded bg-[#1e1c20] text-[#c7bfb5] border border-[#332f34] flex items-center gap-1"
                          >
                            <Check className="w-2.5 h-2.5 text-[#c5a059]" />
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectOutletForBooking(outlet.id)}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-[#c5a059] to-[#dfbf7a] text-[#0b0b0c] font-bold text-xs uppercase tracking-widest shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Reserve Suite at {outlet.name.split(' ')[0]}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

