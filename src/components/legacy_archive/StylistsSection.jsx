import React from 'react';
import { Star, Award, Calendar, MapPin, Sparkles } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export default function StylistsSection({ onBookWithStylist }) {
  return (
    <section id="stylists" className="relative py-24 bg-[#0d0d0e] text-[#faf7f2] border-t border-[#c5a059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c0407] border border-[#c5a059]/30 text-[#dfbf7a] text-[11px] tracking-[0.2em] uppercase font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>The Masters of Craft</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Artisans of Cranial Architecture. <br />
            <span className="gold-gradient-text italic font-normal">
              Defined by Elegance.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[#9c948b] leading-relaxed font-light">
            Each Master Barber undergoes continuous certification under Japanese precision scissor protocols and British wet-shaving academies.
          </p>
        </div>

        {/* Stylists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SALON_DATA.stylists.map((st) => (
            <div
              key={st.id}
              className="group rounded-2xl bg-[#141215] border border-[#2b272a] hover:border-[#c5a059]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
            >
              <div>
                {/* Photo */}
                <div className="relative h-72 overflow-hidden bg-[#1e1c20]">
                  <img
                    src={st.avatar}
                    alt={st.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141215] via-[#141215]/20 to-transparent" />

                  {/* Rating Tag */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-xs font-semibold text-[#dfbf7a]">
                    <Star className="w-3 h-3 fill-[#dfbf7a]" />
                    <span>{st.rating}</span>
                  </div>

                  {/* Location badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-[#f4ede2] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-[#c5a059]/30">
                    <MapPin className="w-3 h-3 text-[#c5a059]" />
                    <span>{st.location}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <span className="text-[10px] tracking-widest uppercase text-[#c5a059] font-semibold block mb-1">
                    {st.experience} Atelier Mastery
                  </span>

                  <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#dfbf7a] transition-colors mb-1">
                    {st.name}
                  </h3>

                  <p className="text-xs text-[#dfbf7a] font-medium mb-3">
                    {st.role}
                  </p>

                  <div className="p-2.5 rounded-lg bg-[#1a181c] border border-[#2c282c] mb-4 text-[11px] text-[#c7bfb5]">
                    <strong className="text-white block text-[10px] uppercase tracking-wider mb-0.5">
                      Signature Specialty:
                    </strong>
                    {st.specialty}
                  </div>

                  <p className="text-xs text-[#9c948b] font-light leading-relaxed mb-2">
                    {st.bio}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onBookWithStylist(st.id)}
                  className="w-full py-2.5 rounded-lg bg-[#221f24] hover:bg-gradient-to-r hover:from-[#c5a059] hover:to-[#dfbf7a] text-white hover:text-[#0b0b0c] border border-[#c5a059]/30 hover:border-[#c5a059] text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve with {st.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

