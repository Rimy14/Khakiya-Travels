import React from 'react';

// Official Khakiya Flying Dove Emblem Component
export function KhakiyaDoveIcon({ className = "w-8 h-8", color = "currentColor" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill={color} xmlns="http://www.w3.org/2000/svg">
      {/* Dove Head and Beak */}
      <path d="M 22 64 C 18 56 12 46 2 38 C 7 35 13 36 19 41 C 23 45 25 53 26 64 Z" />
      
      {/* Wing 1 (Top sweeping wing) */}
      <path d="M 27 61 C 32 44 48 24 96 10 C 78 28 52 48 28 62 Z" />
      
      {/* Wing 2 (Middle sweeping wing) */}
      <path d="M 27 64 C 36 51 54 36 90 26 C 72 42 48 58 27 65 Z" />
      
      {/* Wing 3 (Lower sweeping wing) */}
      <path d="M 27 67 C 38 58 56 47 84 44 C 68 57 46 68 27 68 Z" />
      
      {/* Tail Feather 1 (Left downward curve) */}
      <path d="M 25 71 C 20 78 18 86 18 94 C 24 96 28 90 31 81 C 32 78 30 73 25 71 Z" />
      
      {/* Tail Feather 2 (Bottom sweeping tail) */}
      <path d="M 27 71 C 28 80 34 90 46 92 C 44 84 38 76 28 71 Z" />
    </svg>
  );
}

// Official IATA Accredited Agent Logo Badge with Agent Code 07302901
export function IataBadge({ theme = 'light', compact = false }) {
  const isDark = theme === 'dark';
  return (
    <div className={`inline-flex items-center gap-2 rounded-lg border text-xs select-none transition-all ${
      compact ? 'px-2.5 py-1' : 'px-3 py-1.5'
    } ${
      isDark 
        ? 'bg-blue-950/70 border-blue-400/40 text-white' 
        : 'bg-white border-slate-300 text-[#0B2545] shadow-sm'
    }`}>
      {/* IATA Globe & Wing Emblem */}
      <div className="flex items-center gap-1.5">
        <svg className="w-5 h-5 text-blue-500 shrink-0" viewBox="0 0 40 30" fill="currentColor">
          <circle cx="20" cy="15" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <line x1="11" y1="15" x2="29" y2="15" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20 6 C16 9 16 21 20 24 C24 21 24 9 20 6 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 11 L12 11 M2 15 L11 15 M5 19 L12 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M28 11 L36 11 M29 15 L38 15 M28 19 L35 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="font-extrabold tracking-widest text-[11px] font-sans">IATA</span>
          <span className="text-[8px] font-mono text-blue-300 dark:text-blue-300 font-bold">07302901</span>
        </div>
      </div>

      {/* Divider */}
      <div className={`h-5 w-[1px] ${isDark ? 'bg-blue-700' : 'bg-slate-300'}`}></div>

      <div className="flex flex-col leading-none">
        <span className="text-[10px] font-bold tracking-tight">Accredited</span>
        <span className="text-[9px] text-slate-400 dark:text-blue-300 font-medium">Agent</span>
      </div>
    </div>
  );
}

// Exact Official Khakiya Brand Logo
export default function BrandLogo({ theme = 'dark', size = 'normal', showIcon = true }) {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#0B2545';
  const subtextColor = isDark ? '#E2E8F0' : '#334155';

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none group">
      {/* Official Dove Emblem */}
      {showIcon && (
        <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
          <KhakiyaDoveIcon 
            className={size === 'large' ? 'w-10 h-10 sm:w-12 sm:h-12' : 'w-8 h-8 sm:w-9 sm:h-9'} 
            color={textColor} 
          />
        </div>
      )}

      {/* Typography: KHAKIYA + Baseline Rule + TRAVELS & TOURS */}
      <div className="flex flex-col justify-center">
        <div 
          className="flex items-baseline font-serif font-black tracking-[0.08em] leading-none transition-transform duration-200 group-hover:scale-[1.01]"
          style={{ color: textColor }}
        >
          <span className={size === 'large' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-[27px]'}>K</span>
          <span className={size === 'large' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-[22px]'}>HAKIY</span>
          <span className={size === 'large' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-[27px]'}>A</span>
        </div>

        {/* Horizontal Rule + TRAVELS & TOURS */}
        <div className="flex items-center gap-2 mt-1">
          <div 
            className="h-[1.5px] w-6 sm:w-8 rounded-full" 
            style={{ backgroundColor: textColor }}
          ></div>
          <span 
            className="text-[8px] sm:text-[9px] tracking-[0.24em] font-sans font-bold uppercase leading-none"
            style={{ color: subtextColor }}
          >
            TRAVELS & TOURS
          </span>
        </div>
      </div>
    </div>
  );
}
