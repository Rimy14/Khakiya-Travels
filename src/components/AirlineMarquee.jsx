import React from 'react';
import { Plane, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { COLOR_AIRLINES } from './AirlineLogos';

export default function AirlineMarquee({ theme = 'light' }) {
  const isDark = theme === 'dark';

  // Duplicate the list 3 times for completely seamless infinite auto-scroll
  const duplicatedList = [...COLOR_AIRLINES, ...COLOR_AIRLINES, ...COLOR_AIRLINES];

  return (
    <div className={`w-full py-8 relative overflow-hidden transition-colors ${
      isDark 
        ? 'bg-[#071a34] border-y border-blue-900/60 shadow-inner' 
        : 'bg-white border-y border-slate-200/90 shadow-sm'
    }`}>
      {/* Subtle background light glow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
          <Plane className="w-4 h-4 text-blue-600 animate-pulse" />
          <span>Official IATA Airline Partners & Scheduled Carriers</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
          <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct Flights & Preferential Pilgrim Fares</span>
          </span>
        </div>
      </div>

      {/* Left and Right gradient edge masks for smooth fade effect */}
      <div className={`absolute top-0 left-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none ${
        isDark 
          ? 'bg-gradient-to-r from-[#071a34] to-transparent' 
          : 'bg-gradient-to-r from-white to-transparent'
      }`}></div>
      
      <div className={`absolute top-0 right-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none ${
        isDark 
          ? 'bg-gradient-to-l from-[#071a34] to-transparent' 
          : 'bg-gradient-to-l from-white to-transparent'
      }`}></div>

      {/* Infinite Auto-Scrolling Track with Clean Borderless Full-Color Logos */}
      <div className="animate-marquee flex items-center gap-12 sm:gap-16 py-2 cursor-pointer select-none">
        {duplicatedList.map((airline, idx) => {
          const LogoComponent = airline.component;
          return (
            <div
              key={idx}
              className="px-4 py-2 flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110 opacity-90 hover:opacity-100"
            >
              <LogoComponent className="h-7 sm:h-9" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
