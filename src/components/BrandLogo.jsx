import React from 'react';

// Official IATA Accredited Agent Mark with Agent Code 07302901
export function IataBadge({ theme = 'light' }) {
  const isDark = theme === 'dark';
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs ${
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
          <span className="text-[8px] font-mono text-slate-400 dark:text-blue-300 font-bold">07302901</span>
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

// Pure Typographic Official Khakiya Wordmark Logo (Font Only - No Bird Icon)
export default function BrandLogo({ theme = 'dark', size = 'normal' }) {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#173b75';

  return (
    <div className="flex flex-col justify-center select-none group">
      {/* Official Typography Mark: KHAKIYA with styled initial K and terminal A */}
      <div 
        className="flex items-baseline font-serif font-black tracking-[0.06em] leading-none transition-transform duration-200 group-hover:scale-[1.02]"
        style={{ color: textColor }}
      >
        <span className={size === 'large' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-[28px]'}>K</span>
        <span className={size === 'large' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-[23px]'}>HAKIY</span>
        <span className={size === 'large' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-[28px]'}>A</span>
      </div>

      {/* Horizontal Underline Bar + TRAVELS & TOURS */}
      <div className="flex items-center gap-1.5 mt-1">
        <div 
          className="h-[2px] w-6 sm:w-8 rounded-full" 
          style={{ backgroundColor: textColor }}
        ></div>
        <span 
          className="text-[9px] sm:text-[10px] tracking-[0.24em] font-sans font-extrabold uppercase leading-none"
          style={{ color: textColor }}
        >
          TRAVELS & TOURS
        </span>
      </div>
    </div>
  );
}
