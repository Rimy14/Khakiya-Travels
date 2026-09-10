import React from 'react';

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

// Exact Official Khakiya Brand Logo (Direct Image Rendering)
export default function BrandLogo({ theme = 'dark', size = 'normal' }) {
  const isDark = theme === 'dark';
  const logoSrc = isDark 
    ? `${import.meta.env.BASE_URL}khakiya-logo-white.png` 
    : `${import.meta.env.BASE_URL}khakiya-logo-blue.png`;

  let sizeClasses = 'h-10 sm:h-12 w-auto';
  if (size === 'large') {
    sizeClasses = 'h-14 sm:h-16 w-auto';
  } else if (size === 'small') {
    sizeClasses = 'h-8 sm:h-9 w-auto';
  }

  return (
    <div className="flex items-center select-none group">
      <img
        src={logoSrc}
        alt="Khakiya Travels & Tours"
        className={`${sizeClasses} object-contain transition-transform duration-200 group-hover:scale-105`}
      />
    </div>
  );
}
