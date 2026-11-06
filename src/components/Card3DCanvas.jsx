import React from 'react';

/**
 * Card3DCanvas:
 * Ultra-performant 3D vector & metallic artifact renderer.
 * Avoids spawning multiple WebGL contexts (which causes browser GPU WebGL context loss).
 * Uses CSS 3D perspective, smooth floating rotation, and metallic shaders.
 */

export default function Card3DCanvas({ modelType = 'bottle', fallbackImage = null, size = 160 }) {
  const render3DModel = () => {
    switch (modelType) {
      case 'scissors':
        return (
          <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-[0_10px_20px_rgba(245,217,138,0.3)]">
            <defs>
              <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="45%" stopColor="#e4e4e7" />
                <stop offset="70%" stopColor="#a1a1aa" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
              <linearGradient id="goldSheen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffe6a3" />
                <stop offset="50%" stopColor="#e6c068" />
                <stop offset="100%" stopColor="#9e7b35" />
              </linearGradient>
            </defs>
            {/* Blade 1 */}
            <path d="M50 50 L25 15 C26 12 29 14 31 16 L50 48 Z" fill="url(#chromeGrad)" />
            {/* Blade 2 */}
            <path d="M50 50 L75 15 C74 12 71 14 69 16 L50 48 Z" fill="url(#chromeGrad)" />
            {/* Central Pivot Screw */}
            <circle cx="50" cy="50" r="5" fill="url(#goldSheen)" stroke="#fff" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="2.5" fill="#50350d" />
            {/* Handles & Finger Loops */}
            <path d="M48 52 L36 72" stroke="url(#chromeGrad)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="32" cy="80" r="9" fill="none" stroke="url(#chromeGrad)" strokeWidth="3.5" />
            <circle cx="32" cy="80" r="7" fill="none" stroke="url(#goldSheen)" strokeWidth="1" />
            <path d="M52 52 L64 72" stroke="url(#chromeGrad)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="68" cy="80" r="9" fill="none" stroke="url(#chromeGrad)" strokeWidth="3.5" />
            <circle cx="68" cy="80" r="7" fill="none" stroke="url(#goldSheen)" strokeWidth="1" />
          </svg>
        );

      case 'razor':
        return (
          <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-[0_10px_20px_rgba(245,217,138,0.3)]">
            <defs>
              <linearGradient id="razorGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff2c2" />
                <stop offset="40%" stopColor="#e6c068" />
                <stop offset="80%" stopColor="#b3892c" />
                <stop offset="100%" stopColor="#7a5814" />
              </linearGradient>
              <linearGradient id="razorChrome" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#d4d4d8" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            {/* Razor Head Bar */}
            <rect x="24" y="24" width="52" height="10" rx="3" fill="url(#razorChrome)" stroke="#fff" strokeWidth="0.5" />
            {/* Scalloped teeth */}
            <line x1="26" y1="34" x2="74" y2="34" stroke="url(#razorGold)" strokeWidth="2" strokeDasharray="3 2" />
            {/* Cap */}
            <path d="M26 24 C30 18 70 18 74 24 Z" fill="url(#razorGold)" />
            {/* Neck collar */}
            <rect x="46" y="34" width="8" height="6" rx="1" fill="url(#razorGold)" />
            {/* Knurled Handle */}
            <rect x="45.5" y="40" width="9" height="42" rx="4.5" fill="url(#razorGold)" stroke="#3e2808" strokeWidth="0.5" />
            <line x1="45.5" y1="46" x2="54.5" y2="46" stroke="#fff" strokeWidth="1" opacity="0.6" />
            <line x1="45.5" y1="56" x2="54.5" y2="56" stroke="#fff" strokeWidth="1" opacity="0.6" />
            <line x1="45.5" y1="66" x2="54.5" y2="66" stroke="#fff" strokeWidth="1" opacity="0.6" />
            <line x1="45.5" y1="76" x2="54.5" y2="76" stroke="#fff" strokeWidth="1" opacity="0.6" />
          </svg>
        );

      case 'jar':
        return (
          <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-[0_10px_20px_rgba(245,217,138,0.3)]">
            <defs>
              <linearGradient id="jarGoldLid" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fff3cd" />
                <stop offset="40%" stopColor="#e6c068" />
                <stop offset="100%" stopColor="#9e7b35" />
              </linearGradient>
              <linearGradient id="jarGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2c2830" />
                <stop offset="40%" stopColor="#121114" />
                <stop offset="100%" stopColor="#080709" />
              </linearGradient>
            </defs>
            {/* Jar Cap */}
            <rect x="22" y="28" width="56" height="14" rx="4" fill="url(#jarGoldLid)" stroke="#fff" strokeWidth="0.5" />
            <line x1="24" y1="35" x2="76" y2="35" stroke="#fff" strokeWidth="1" opacity="0.5" />
            {/* Jar Body */}
            <rect x="25" y="42" width="50" height="34" rx="6" fill="url(#jarGlass)" stroke="#e6c068" strokeWidth="0.8" />
            {/* Gold Label Strip */}
            <rect x="28" y="52" width="44" height="12" rx="2" fill="#1e0509" stroke="#e6c068" strokeWidth="0.6" />
            <text x="50" y="60.5" textAnchor="middle" fill="#f5d98a" fontSize="5" fontFamily="serif" fontWeight="bold" letterSpacing="1">
              AVENOR
            </text>
          </svg>
        );

      case 'tube':
        return (
          <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-[0_10px_20px_rgba(245,217,138,0.3)]">
            <defs>
              <linearGradient id="tubeGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fff2c2" />
                <stop offset="50%" stopColor="#e6c068" />
                <stop offset="100%" stopColor="#a37e2e" />
              </linearGradient>
              <linearGradient id="tubeBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2a272e" />
                <stop offset="60%" stopColor="#141216" />
                <stop offset="100%" stopColor="#0a090b" />
              </linearGradient>
            </defs>
            {/* Crimp Top */}
            <rect x="28" y="16" width="44" height="6" rx="2" fill="url(#tubeGold)" />
            {/* Tube Body */}
            <path d="M30 22 L36 68 L64 68 L70 22 Z" fill="url(#tubeBodyGrad)" stroke="#e6c068" strokeWidth="0.7" />
            {/* Gold Label */}
            <rect x="38" y="38" width="24" height="12" rx="2" fill="#24050a" stroke="#e6c068" strokeWidth="0.6" />
            <text x="50" y="46" textAnchor="middle" fill="#f5d98a" fontSize="4.5" fontFamily="serif" fontWeight="bold">AVENOR</text>
            {/* Cap */}
            <rect x="41" y="68" width="18" height="14" rx="2" fill="url(#tubeGold)" />
          </svg>
        );

      case 'dropper':
        return (
          <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-[0_10px_20px_rgba(245,217,138,0.3)]">
            <defs>
              <linearGradient id="amberDropper" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="50%" stopColor="#92400e" />
                <stop offset="100%" stopColor="#451a03" />
              </linearGradient>
              <linearGradient id="dropperGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fff3cd" />
                <stop offset="50%" stopColor="#e6c068" />
                <stop offset="100%" stopColor="#a37e2e" />
              </linearGradient>
            </defs>
            {/* Pipette Bulb */}
            <path d="M44 18 C44 14 56 14 56 18 L55 24 L45 24 Z" fill="#181412" stroke="#e6c068" strokeWidth="0.5" />
            {/* Gold Collar */}
            <rect x="42" y="24" width="16" height="8" rx="1.5" fill="url(#dropperGold)" />
            {/* Neck */}
            <rect x="44" y="32" width="12" height="6" fill="url(#amberDropper)" />
            {/* Bottle Body */}
            <rect x="33" y="38" width="34" height="46" rx="6" fill="url(#amberDropper)" stroke="#e6c068" strokeWidth="0.8" />
            {/* Gold Crest Label */}
            <rect x="37" y="48" width="26" height="18" rx="2" fill="#1b0509" stroke="#e6c068" strokeWidth="0.6" />
            <text x="50" y="58" textAnchor="middle" fill="#f5d98a" fontSize="4.5" fontFamily="serif" fontWeight="bold">AVENOR</text>
            <text x="50" y="63" textAnchor="middle" fill="#e6c068" fontSize="2.8" letterSpacing="0.5">ELIXIR</text>
          </svg>
        );

      case 'perfume':
        return (
          <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-[0_10px_20px_rgba(245,217,138,0.35)]">
            <defs>
              <linearGradient id="perfumeGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="50%" stopColor="#78350f" />
                <stop offset="100%" stopColor="#291205" />
              </linearGradient>
              <linearGradient id="perfumeGoldCap" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff6d6" />
                <stop offset="50%" stopColor="#e6c068" />
                <stop offset="100%" stopColor="#8c6a23" />
              </linearGradient>
            </defs>
            {/* Heavy Gold Cube Cap */}
            <rect x="38" y="16" width="24" height="20" rx="3" fill="url(#perfumeGoldCap)" stroke="#fff" strokeWidth="0.5" />
            {/* Gold Neck */}
            <rect x="44" y="36" width="12" height="5" fill="url(#perfumeGoldCap)" />
            {/* Faceted Glass Flacon Body */}
            <rect x="28" y="41" width="44" height="46" rx="6" fill="url(#perfumeGlass)" stroke="#e6c068" strokeWidth="1" />
            {/* Inner Gold Foil Plaque */}
            <rect x="34" y="52" width="32" height="22" rx="2" fill="#1a0407" stroke="url(#perfumeGoldCap)" strokeWidth="0.8" />
            <text x="50" y="62" textAnchor="middle" fill="#f5d98a" fontSize="5" fontFamily="serif" fontWeight="bold" letterSpacing="0.8">
              AVENOR
            </text>
            <text x="50" y="69" textAnchor="middle" fill="#e6c068" fontSize="3" letterSpacing="0.8">
              NOIR EDP
            </text>
          </svg>
        );

      case 'clippers':
      case 'trimmer':
        return (
          <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-[0_10px_20px_rgba(245,217,138,0.3)]">
            <defs>
              <linearGradient id="trimmerGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff3cd" />
                <stop offset="50%" stopColor="#e6c068" />
                <stop offset="100%" stopColor="#8c6a23" />
              </linearGradient>
            </defs>
            {/* T-Blade */}
            <rect x="30" y="18" width="40" height="9" rx="2" fill="url(#trimmerGold)" stroke="#fff" strokeWidth="0.5" />
            <line x1="32" y1="21" x2="68" y2="21" stroke="#222" strokeWidth="1.5" strokeDasharray="2 1.5" />
            {/* Body */}
            <path d="M36 27 L34 78 C34 82 66 82 66 78 L64 27 Z" fill="#151317" stroke="url(#trimmerGold)" strokeWidth="1" />
            {/* Gold Grip Inlay */}
            <rect x="40" y="40" width="20" height="24" rx="3" fill="url(#trimmerGold)" />
            <circle cx="50" cy="52" r="3" fill="#151317" />
          </svg>
        );

      case 'crown':
        return (
          <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-[0_10px_20px_rgba(245,217,138,0.35)]">
            <defs>
              <linearGradient id="crownGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff7d6" />
                <stop offset="45%" stopColor="#e6c068" />
                <stop offset="100%" stopColor="#9e7b35" />
              </linearGradient>
            </defs>
            {/* Imperial Peaks */}
            <path d="M22 66 L25 32 L38 48 L50 24 L62 48 L75 32 L78 66 Z" fill="url(#crownGold)" stroke="#fff" strokeWidth="0.5" />
            {/* Base Circlet */}
            <rect x="20" y="66" width="60" height="12" rx="3" fill="#1e0407" stroke="url(#crownGold)" strokeWidth="1.2" />
            <circle cx="32" cy="72" r="2.5" fill="url(#crownGold)" />
            <circle cx="50" cy="72" r="3.5" fill="#d97706" stroke="#fff" strokeWidth="0.5" />
            <circle cx="68" cy="72" r="2.5" fill="url(#crownGold)" />
            {/* Pearls on peaks */}
            <circle cx="25" cy="31" r="2.5" fill="#fff" />
            <circle cx="50" cy="23" r="3.5" fill="#fff" />
            <circle cx="75" cy="31" r="2.5" fill="#fff" />
          </svg>
        );

      case 'comb':
        return (
          <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-[0_10px_20px_rgba(245,217,138,0.25)]">
            <defs>
              <linearGradient id="combGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffe6a3" />
                <stop offset="50%" stopColor="#e6c068" />
                <stop offset="100%" stopColor="#9e7b35" />
              </linearGradient>
            </defs>
            {/* Comb Spine */}
            <rect x="18" y="32" width="64" height="12" rx="3" fill="#181514" stroke="url(#combGold)" strokeWidth="1" />
            <line x1="22" y1="38" x2="78" y2="38" stroke="url(#combGold)" strokeWidth="1.5" />
            {/* Teeth */}
            {Array.from({ length: 16 }).map((_, i) => (
              <line
                key={i}
                x1={22 + i * 3.6}
                y1={44}
                x2={22 + i * 3.6}
                y2={68}
                stroke="#2a2422"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ))}
          </svg>
        );

      case 'giftbox':
        return (
          <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-[0_10px_20px_rgba(245,217,138,0.3)]">
            <defs>
              <linearGradient id="boxGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff3cd" />
                <stop offset="50%" stopColor="#e6c068" />
                <stop offset="100%" stopColor="#8c6a23" />
              </linearGradient>
            </defs>
            {/* Box Body */}
            <rect x="25" y="38" width="50" height="42" rx="4" fill="#161418" stroke="#332e36" strokeWidth="1" />
            {/* Box Lid */}
            <rect x="22" y="30" width="56" height="12" rx="3" fill="#201c22" stroke="url(#boxGold)" strokeWidth="1" />
            {/* Gold Ribbon Vertical */}
            <rect x="46" y="30" width="8" height="50" fill="url(#boxGold)" />
            {/* Gold Ribbon Horizontal */}
            <rect x="25" y="54" width="50" height="8" fill="url(#boxGold)" />
            {/* Bow */}
            <circle cx="44" cy="25" r="5" fill="none" stroke="url(#boxGold)" strokeWidth="2.5" />
            <circle cx="56" cy="25" r="5" fill="none" stroke="url(#boxGold)" strokeWidth="2.5" />
            <circle cx="50" cy="26" r="3" fill="url(#boxGold)" />
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-[0_10px_20px_rgba(245,217,138,0.3)]">
            <defs>
              <linearGradient id="defBottleGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fff3cd" />
                <stop offset="50%" stopColor="#e6c068" />
                <stop offset="100%" stopColor="#9e7b35" />
              </linearGradient>
            </defs>
            {/* Cap */}
            <rect x="43" y="18" width="14" height="12" rx="2" fill="url(#defBottleGold)" />
            {/* Neck */}
            <rect x="45" y="30" width="10" height="6" fill="#181518" />
            {/* Bottle Body */}
            <rect x="32" y="36" width="36" height="46" rx="6" fill="#181518" stroke="url(#defBottleGold)" strokeWidth="1" />
            {/* Label */}
            <rect x="36" y="48" width="28" height="18" rx="2" fill="#220509" stroke="url(#defBottleGold)" strokeWidth="0.8" />
            <text x="50" y="58" textAnchor="middle" fill="#f5d98a" fontSize="4.5" fontFamily="serif" fontWeight="bold">AVENOR</text>
            <text x="50" y="63" textAnchor="middle" fill="#e6c068" fontSize="2.8" letterSpacing="0.5">ATELIER</text>
          </svg>
        );
    }
  };

  return (
    <div
      style={{ width: '100%', height: `${size}px` }}
      className="flex items-center justify-center relative overflow-hidden group/model"
    >
      <div className="transform transition-transform duration-500 group-hover/model:scale-110 group-hover/model:-rotate-3 group-hover/model:translate-y-[-4px]">
        {render3DModel()}
      </div>
    </div>
  );
}
