import React from 'react';

// Full Color Vector Logos for Major Airlines

export function EmiratesLogo({ className = "h-8" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="font-serif font-black text-2xl tracking-tight text-[#D71921] uppercase leading-none">
        Emirates
      </span>
    </div>
  );
}

export function SriLankanLogo({ className = "h-8" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Stylized Peacock feather in SriLankan Red, Blue, Gold */}
      <svg className="h-8 w-8 shrink-0" viewBox="0 0 100 100" fill="none">
        <path d="M15 85 C25 60 50 30 90 15 C75 40 60 65 35 90 C25 92 18 90 15 85 Z" fill="#EE1C25" />
        <path d="M10 85 C20 55 45 25 80 10 C68 35 55 60 30 85 C20 87 14 87 10 85 Z" fill="#008080" />
        <path d="M5 85 C15 50 38 20 70 8 C60 30 48 55 25 82 C16 84 10 85 5 85 Z" fill="#002D62" />
        <circle cx="82" cy="12" r="6" fill="#F59E0B" />
      </svg>
      <div className="flex flex-col">
        <span className="font-extrabold text-lg tracking-tight text-[#002D62] italic font-sans leading-none">
          SriLankan
        </span>
        <span className="text-[9px] tracking-[0.25em] text-[#EE1C25] font-bold uppercase">
          Airlines
        </span>
      </div>
    </div>
  );
}

export function QatarAirwaysLogo({ className = "h-8" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="w-8 h-8 rounded-full bg-[#5C0632] flex items-center justify-center p-1.5 shadow-sm shrink-0">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-1.8 0-3.3-1.2-3.8-2.8l1.9-.6c.3 1 1 1.6 1.9 1.6 1.1 0 2-.9 2-2s-.9-2-2-2c-.5 0-1 .2-1.4.5l-1.3-1.3.3-4.9h6.4v1.8h-4.8l-.1 1.9c.5-.3 1.1-.4 1.7-.4 2.2 0 4 1.8 4 4s-1.8 4.2-4.8 4.2z"/>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-serif font-black text-base tracking-wider text-[#5C0632] uppercase leading-none">
          QATAR
        </span>
        <span className="text-[8px] font-sans font-extrabold tracking-[0.2em] text-slate-500 uppercase">
          AIRWAYS القطرية
        </span>
      </div>
    </div>
  );
}

export function SingaporeAirlinesLogo({ className = "h-8" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Kris Bird */}
      <svg className="h-8 w-9 text-[#D59E29] shrink-0" viewBox="0 0 100 70" fill="currentColor">
        <path d="M10 50 L40 10 L60 10 L45 35 L90 20 L95 28 L40 48 L25 65 Z" />
      </svg>
      <div className="flex flex-col">
        <span className="font-sans font-black text-sm tracking-wider text-[#00266B] uppercase leading-tight">
          SINGAPORE
        </span>
        <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#00266B] uppercase leading-none">
          AIRLINES
        </span>
      </div>
    </div>
  );
}

export function EtihadLogo({ className = "h-8" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex flex-col text-center">
        <span className="font-serif text-[12px] text-[#BD9B60] font-bold tracking-widest">
          الإتـحـاد
        </span>
        <span className="font-serif font-black text-base tracking-[0.25em] text-[#7F6B41] uppercase leading-none">
          ETIHAD
        </span>
        <span className="text-[7px] tracking-[0.3em] text-[#5C4A28] uppercase font-bold">
          AIRWAYS
        </span>
      </div>
    </div>
  );
}

export function BritishAirwaysLogo({ className = "h-8" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="font-serif font-black text-sm tracking-wider text-[#075AAA] uppercase">
        BRITISH AIRWAYS
      </span>
      {/* Speedmarque ribbon in Red and Blue */}
      <svg className="h-5 w-11 shrink-0" viewBox="0 0 100 30" fill="none">
        <path d="M0 20 Q50 5 100 2 L95 12 Q50 15 5 28 Z" fill="#EB2226" />
        <path d="M10 25 Q55 12 100 8 L98 16 Q55 20 15 30 Z" fill="#075AAA" />
      </svg>
    </div>
  );
}

export function SaudiaLogo({ className = "h-8" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="w-8 h-8 rounded-full bg-[#006C35] flex items-center justify-center text-white shrink-0 p-1">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-[#C5A059]">
          <path d="M12 2v20M8 8l8 8M16 8l-8 8" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-sans font-black text-sm tracking-wider text-[#006C35] uppercase leading-none">
          SAUDIA
        </span>
        <span className="text-[9px] font-bold text-[#C5A059] uppercase tracking-widest">
          السعودية
        </span>
      </div>
    </div>
  );
}

export function TurkishAirlinesLogo({ className = "h-8" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="w-8 h-8 rounded-full bg-[#E81932] flex items-center justify-center text-white shadow-sm shrink-0">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-sans font-black text-sm tracking-tight text-[#232B38] uppercase leading-none">
          TURKISH
        </span>
        <span className="text-[9px] font-bold text-[#E81932] uppercase tracking-wider">
          AIRLINES
        </span>
      </div>
    </div>
  );
}

export function AirIndiaLogo({ className = "h-8" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="w-8 h-8 bg-[#ED1C24] rounded-lg flex items-center justify-center text-white font-black text-xs shadow-sm">
        AI
      </div>
      <div className="flex flex-col">
        <span className="font-sans font-extrabold text-sm text-[#ED1C24] uppercase tracking-wider leading-none">
          AIR INDIA
        </span>
        <span className="text-[8px] font-bold text-[#F37023] uppercase tracking-widest">
          एअर इंडिया
        </span>
      </div>
    </div>
  );
}

export function OmanAirLogo({ className = "h-8" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#007A3D] to-[#C59B27] flex items-center justify-center text-white text-xs font-black shrink-0">
        WY
      </div>
      <div className="flex flex-col">
        <span className="font-sans font-extrabold text-sm text-[#007A3D] uppercase tracking-wider leading-none">
          OMAN AIR
        </span>
        <span className="text-[8px] text-[#C59B27] font-bold uppercase tracking-widest">
          الطيران العماني
        </span>
      </div>
    </div>
  );
}

export function FlyDubaiLogo({ className = "h-8" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="font-sans font-black text-2xl tracking-tight text-[#0066B2]">
        fly<span className="text-[#F37021]">dubai</span>
      </span>
    </div>
  );
}

export function KuwaitAirwaysLogo({ className = "h-8" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="w-7 h-7 rounded bg-[#0047BA] text-white flex items-center justify-center text-xs font-black">
        KU
      </div>
      <div className="flex flex-col">
        <span className="font-sans font-black text-sm text-[#0047BA] uppercase tracking-wider leading-none">
          KUWAIT AIRWAYS
        </span>
        <span className="text-[8px] text-slate-500 font-bold uppercase">الخطوط الجوية الكويتية</span>
      </div>
    </div>
  );
}

export const COLOR_AIRLINES = [
  { id: 'qatar', component: QatarAirwaysLogo, name: 'Qatar Airways' },
  { id: 'srilankan', component: SriLankanLogo, name: 'SriLankan Airlines' },
  { id: 'british', component: BritishAirwaysLogo, name: 'British Airways' },
  { id: 'airindia', component: AirIndiaLogo, name: 'Air India' },
  { id: 'singapore', component: SingaporeAirlinesLogo, name: 'Singapore Airlines' },
  { id: 'etihad', component: EtihadLogo, name: 'Etihad Airways' },
  { id: 'emirates', component: EmiratesLogo, name: 'Emirates' },
  { id: 'saudia', component: SaudiaLogo, name: 'Saudia' },
  { id: 'turkish', component: TurkishAirlinesLogo, name: 'Turkish Airlines' },
  { id: 'oman', component: OmanAirLogo, name: 'Oman Air' },
  { id: 'flydubai', component: FlyDubaiLogo, name: 'flydubai' },
  { id: 'kuwait', component: KuwaitAirwaysLogo, name: 'Kuwait Airways' },
];
