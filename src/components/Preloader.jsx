import React, { useEffect, useState } from 'react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsFading(true), 300);
          setTimeout(() => onComplete && onComplete(), 750);
          return 100;
        }
        const increment = Math.floor(Math.random() * 14) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 65);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070608] transition-opacity duration-700 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center px-6 text-center max-w-lg w-full">
        {/* Luminous High-Contrast Logo Container */}
        <div className="relative mb-8 p-6 sm:p-8 rounded-2xl border border-[#f5d98a]/35 bg-gradient-to-b from-[#24050a]/90 via-[#140608]/95 to-[#0b0b0d] shadow-[0_0_50px_rgba(245,217,138,0.25)] flex items-center justify-center">
          <img
            src="/assets/logo/avenor-logo-gold.png"
            alt="AVENOR - Defined by Elegance"
            className="w-72 sm:w-80 md:w-96 h-auto object-contain filter drop-shadow-[0_0_25px_rgba(245,217,138,0.65)] opacity-100"
          />
        </div>

        {/* Brand Tagline Motif */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-12 bg-[#f5d98a]/60" />
          <p className="font-serif tracking-[0.3em] text-[#f5d98a] text-xs uppercase font-semibold">
            Defined by Elegance
          </p>
          <div className="h-[1px] w-12 bg-[#f5d98a]/60" />
        </div>

        {/* Golden Progress Bar */}
        <div className="w-full bg-[#1b171a] h-[3px] rounded-full overflow-hidden mb-3 border border-[#f5d98a]/25 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#c5a059] via-[#ffe6a3] to-[#f5d98a] transition-all duration-150 ease-out shadow-[0_0_15px_rgba(245,217,138,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between w-full text-[11px] text-[#9c948b] tracking-widest uppercase">
          <span className="text-[#c7bfb5]">Preparing Private Atelier</span>
          <span className="font-mono text-[#f5d98a] font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
