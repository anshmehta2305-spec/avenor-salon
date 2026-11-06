import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Quote, HelpCircle } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export default function TestimonialsAndFaq() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="relative py-24 bg-[#0a0a0b] text-[#faf7f2] border-t border-[#c5a059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Testimonials Grid */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c5a059] font-semibold block mb-3">
              Client Chronicles
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Words from Discerning Gentlemen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SALON_DATA.testimonials.map((t) => (
              <div
                key={t.id}
                className="p-7 rounded-2xl bg-[#141215] border border-[#2b272a] hover:border-[#c5a059]/40 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-[#dfbf7a]">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#dfbf7a]" />
                    ))}
                  </div>

                  <p className="font-serif italic text-sm text-[#dcd5cc] leading-relaxed mb-6 font-normal">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#232024]">
                  <h4 className="font-bold text-sm text-white">{t.name}</h4>
                  <p className="text-[11px] text-[#9c948b] mt-0.5">{t.designation}</p>
                  <span className="inline-block mt-2 text-[10px] text-[#c5a059] tracking-wider uppercase font-semibold">
                    Service: {t.serviceUsed}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c0407] border border-[#c5a059]/30 text-[#dfbf7a] text-[11px] tracking-[0.2em] uppercase font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Inquiries & Concierge</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3.5">
            {SALON_DATA.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-[#2b272a] bg-[#141215] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-serif font-medium text-white hover:text-[#dfbf7a] transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#9c948b] flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-[#a49d94] leading-relaxed border-t border-[#232024] pt-3 font-light">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

