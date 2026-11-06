import React from 'react';
import { Crown, Check, Sparkles, Shield, Gift } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export default function GuildMembership({ onOpenBooking }) {
  return (
    <section id="guild" className="relative py-24 bg-[#0d0d0e] text-[#faf7f2] border-t border-[#c5a059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c0407] border border-[#c5a059]/30 text-[#dfbf7a] text-[11px] tracking-[0.2em] uppercase font-semibold mb-3">
            <Crown className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Private Patronage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            The Avenor Guild. <br />
            <span className="gold-gradient-text italic font-normal">
              Continuous Refinement.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[#9c948b] leading-relaxed font-light">
            An invitation-only fellowship for discerning gentlemen desiring unlimited maintenance, priority suite reservations, and curated lifestyle privileges.
          </p>
        </div>

        {/* Membership Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {SALON_DATA.guildTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col justify-between border transition-all duration-300 ${
                tier.popular
                  ? 'bg-gradient-to-b from-[#25090e] via-[#160508] to-[#111012] border-[#c5a059] gold-glow-lg'
                  : 'bg-[#141215] border-[#2f2b2e] hover:border-[#c5a059]/40'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-8 px-3.5 py-1 rounded-full bg-[#c5a059] text-[#0b0b0c] text-[10px] font-bold uppercase tracking-widest shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                <span className="text-[10px] tracking-widest uppercase text-[#dfbf7a] font-semibold block mb-1">
                  {tier.tier}
                </span>

                <h3 className="font-serif font-bold text-2xl text-white mb-2">
                  {tier.name}
                </h3>

                <div className="text-2xl font-serif font-bold text-[#dfbf7a] mb-6">
                  {tier.price}
                </div>

                <div className="space-y-3.5 mb-8 border-t border-[#332f32] pt-6">
                  {tier.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-[#dcd5cc]">
                      <div className="w-4 h-4 rounded-full bg-[#c5a059]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#dfbf7a] stroke-[3]" />
                      </div>
                      <span className="leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenBooking()}
                className={`w-full py-3.5 rounded-lg text-xs uppercase tracking-widest font-bold transition-all ${
                  tier.popular
                    ? 'bg-gradient-to-r from-[#c5a059] to-[#dfbf7a] text-[#0b0b0c] shadow-lg hover:shadow-[0_0_25px_rgba(197,160,89,0.5)]'
                    : 'bg-[#221f24] text-white hover:bg-[#c5a059] hover:text-[#0b0b0c] border border-[#c5a059]/40'
                }`}
              >
                Apply for Guild Fellowship
              </button>
            </div>
          ))}
        </div>

        {/* Press Accolades Strip */}
        <div className="pt-12 border-t border-[#242125] text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#9c948b] font-medium block mb-6">
            Recognized by India's Premier Style Chronicles
          </span>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-[#dfbf7a]">
              GQ INDIA
            </span>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-[#dfbf7a]">
              ROBB REPORT
            </span>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-[#dfbf7a]">
              ELLE MAN
            </span>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-[#dfbf7a]">
              VOGUE HOMMES
            </span>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-[#dfbf7a]">
              THE MINT LUXURY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

