import React from 'react';

// Official Khakiya Flying Dove Emblem (4-tier curved wings)
export function KhakiyaDoveIcon({ className = "w-7 h-7", color = "currentColor" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(10, 8) scale(0.8)">
        {/* Main Bird Head & Upper Wing */}
        <path d="M12 35 C14 26 24 16 38 12 C44 10 52 9 60 12 C61 14 57 18 50 20 C38 23 28 29 20 38 C16 43 14 47 12 52 C10 45 11 39 12 35 Z" fill={color} />
        {/* Feather Tier 1 */}
        <path d="M14 53 C18 43 28 32 46 25 C58 20 68 20 78 22 C80 24 74 29 64 32 C48 37 36 46 26 59 C21 66 18 72 16 79 C14 70 13 60 14 53 Z" fill={color} opacity="0.95" />
        {/* Feather Tier 2 */}
        <path d="M17 78 C22 66 34 54 54 46 C67 41 78 42 88 45 C90 47 84 52 72 55 C54 60 41 72 32 87 C28 93 25 97 22 101 C20 93 18 84 17 78 Z" fill={color} opacity="0.9" />
        {/* Lower Tail Feathers */}
        <path d="M21 95 C27 86 38 76 58 72 C68 70 76 72 82 75 C83 77 77 81 68 83 C52 87 42 96 36 108 C31 117 28 120 26 120 C24 112 23 102 21 95 Z" fill={color} opacity="0.8" />
      </g>
    </svg>
  );
}

// Official IATA Accredited Agent Logo Badge with Agent Code 07302901
export function IataBadge({ theme = 'light', compact = false }) {
  const isDark = theme === 'dark';
  return (
    <div className={`inline-flex items-center gap-2 rounded-lg border text-xs select-none transition-all ${
      compact ? 'px-2 py-1' : 'px-3 py-1.5'
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

// Official Khakiya Brand Logo (Dove Emblem + Font Wordmark)
export default function BrandLogo({ theme = 'dark', size = 'normal', showIcon = true }) {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#0B2545';
  const iconColor = isDark ? '#FFFFFF' : '#0284C7';

  return (
    <div className="flex items-center gap-2.5 select-none group">
      {/* Official Flying Dove Emblem */}
      {showIcon && (
        <div className={`shrink-0 transition-transform duration-200 group-hover:scale-105 ${
          isDark ? 'text-white' : 'text-blue-600'
        }`}>
          <KhakiyaDoveIcon 
            className={size === 'large' ? 'w-9 h-9 sm:w-10 sm:h-10' : 'w-7 h-7 sm:w-8 sm:h-8'} 
            color={iconColor} 
          />
        </div>
      )}

      {/* Typography Mark: KHAKIYA + TRAVELS & TOURS */}
      <div className="flex flex-col justify-center">
        <div 
          className="flex items-baseline font-serif font-black tracking-[0.06em] leading-none transition-transform duration-200 group-hover:scale-[1.01]"
          style={{ color: textColor }}
        >
          <span className={size === 'large' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-[26px]'}>K</span>
          <span className={size === 'large' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-[21px]'}>HAKIY</span>
          <span className={size === 'large' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-[26px]'}>A</span>
        </div>

        {/* Horizontal Underline Bar + TRAVELS & TOURS */}
        <div className="flex items-center gap-1.5 mt-1">
          <div 
            className="h-[2px] w-5 sm:w-6 rounded-full" 
            style={{ backgroundColor: textColor }}
          ></div>
          <span 
            className="text-[8px] sm:text-[9.5px] tracking-[0.22em] font-sans font-extrabold uppercase leading-none"
            style={{ color: textColor }}
          >
            TRAVELS & TOURS
          </span>
        </div>
      </div>
    </div>
  );
}
