import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';

export const FAQS = [
  {
    question: 'Do I need to book an appointment in advance?',
    answer: 'While walk-ins are welcomed subject to VIP suite vacancy, advance reservations are strongly encouraged to guarantee zero waiting time, your preferred Art Director, and tailored beverage preparation.'
  },
  {
    question: 'Do you do beard-only visits?',
    answer: 'Yes, absolutely. Our Architectural Beard Trim & Shaping and Classic Hot Towel Straight-Razor Shave can be booked as dedicated standalone 35–45 minute ceremonies, complete with hot steamed botanical compresses and beard elixir comb-through.'
  },
  {
    question: 'Can your stylists help me choose a haircut that suits my face shape?',
    answer: 'Without question. Every single haircut begins with our signature Cranial Consultation. Our Creative Directors evaluate your forehead proportions, jawline angle, growth whorls, and daily grooming routine before proposing a bespoke haircut blueprint.'
  },
  {
    question: 'What products and formulations do you use?',
    answer: 'We exclusively deploy our in-house Avenor Apothecary formulations and clinical-grade trichology solutions. Everything is 100% paraben-free, sulfate-free, and formulated with cold-pressed Moroccan argan, Icelandic volcanic bentonite, Celtic sea minerals, and pure oud resins.'
  },
  {
    question: 'Do you offer wedding and matrimonial packages?',
    answer: 'Yes. Our Wedding Groom Package reserves our private VIP chamber for up to 3 hours for the groom and groomsmen party. Includes precision cutting, razor line-up, 24K gold skin facial, hand therapy, and complimentary single malt scotch tasting.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-28 bg-[var(--bg-page)] text-[var(--text-main)] border-t border-[var(--line)] overflow-hidden transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-[11px] tracking-[0.25em] uppercase font-semibold mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[var(--gold-deep)]" />
            <span>Concierge Inquiries</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-[var(--text-main)] mb-3">
            Frequently Asked Questions
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[var(--gold-deep)]">
            Everything you need to know about your atelier visit
          </p>
        </div>

        {/* Accordion Cards */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[var(--line)] bg-[var(--bg-card)] overflow-hidden transition-all duration-300 hover:border-[var(--gold)] shadow-[var(--shadow-card)]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between text-base sm:text-lg font-serif font-semibold text-[var(--text-main)] hover:text-[var(--gold-deep)] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className="w-8 h-8 rounded-full bg-[var(--bg-elevated)] border border-[var(--line)] flex items-center justify-center text-[var(--gold-deep)] flex-shrink-0 transition-transform">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[var(--text-faint)]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-[var(--text-soft)] leading-relaxed border-t border-[var(--line)] pt-4 font-light animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
