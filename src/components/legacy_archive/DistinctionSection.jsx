import React from 'react';
import { ShieldCheck, Compass, Sparkles, VolumeX, Wine, Check } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

const ICONS = [Compass, ShieldCheck, VolumeX, Wine];

export default function DistinctionSection() {
  return (
    <section id="distinction" className="relative py-28 bg-[#0b0b0c] text-white border-t border-[#c5a059]/15">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#480d15]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header (Nike LP Variation 1 High-Impact Typography) */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#c5a059]">
              THE AVENOR PROTOCOL
            </span>
            <div className="h-[1px] w-16 bg-[#c5a059]/40" />
            <span className="text-[11px] uppercase tracking-widest text-[#9c948b]">
              Defined by Elegance
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold uppercase tracking-tight leading-[0.98] text-white">
            FOUR PILLARS OF <br />
            <span className="gold-gradient-text italic font-normal lowercase font-serif">
              uncompromised refinement.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#a49d94] max-w-2xl font-light mt-6 leading-relaxed">
            In an era of noisy, rushed haircutting franchises, Avenor was founded to revive the lost sanctuary of masculine composure. Every element from blade angle to ambient acoustics is calculated.
          </p>
        </div>

        {/* 4 Editorial Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SALON_DATA.distinctions.map((pillar, index) => {
            const Icon = ICONS[index] || Sparkles;
            return (
              <div
                key={pillar.number}
                className="group relative p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#141215] to-[#0f0e10] border border-[#2a2629] hover:border-[#c5a059]/60 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(72,13,21,0.25)] flex flex-col justify-between"
              >
                <div>
                  {/* Pillar Number & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#242124] mb-6">
                    <span className="font-mono text-3xl sm:text-4xl font-light text-[#c5a059]/70 group-hover:text-[#dfbf7a] transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#220a0f] border border-[#c5a059]/30 flex items-center justify-center text-[#dfbf7a] group-hover:border-[#c5a059] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Tagline & Title */}
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#c5a059] font-semibold block mb-2">
                    {pillar.tagline}
                  </span>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-4 group-hover:text-[#dfbf7a] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#b0a89d] font-light leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Highlight Badge */}
                <div className="pt-4 border-t border-[#242124] flex items-center gap-2 text-xs text-[#dfbf7a] font-medium">
                  <Check className="w-4 h-4 text-[#c5a059]" />
                  <span>{pillar.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Quote Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#1f050a] via-[#140b0e] to-[#0e0d10] border border-[#c5a059]/30 relative overflow-hidden text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a059] font-semibold block mb-3">
              The Avenor Creed
            </span>
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl italic text-white leading-snug mb-6">
              "True luxury is never loud. It is found in the quiet confidence of a razor gliding without sound, the warm aroma of cedarwood, and leaving the world outside."
            </blockquote>
            <div className="text-xs uppercase tracking-widest text-[#dfbf7a] font-semibold">
              Armaan Qureshi — Creative Director
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

