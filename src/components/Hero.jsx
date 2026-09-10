import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function Hero({ onFilterCategory }) {
  const [selectedJourneyType, setSelectedJourneyType] = useState('umrah');
  const [selectedSeason, setSelectedSeason] = useState('October - December 2026');

  const handleQuickSearch = () => {
    onFilterCategory(selectedJourneyType);
    const section = document.getElementById('packages');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[82vh] text-white flex flex-col justify-between pt-16 pb-14 overflow-hidden">
      
      {/* High-Resolution Panoramic Background Image with Cinematic Dark Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}hero-bg.jpg`}
          alt="Masjid Al-Haram Makkah and Holy Kaaba"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Luxury dark blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06152b]/90 via-[#0B2545]/70 to-[#071e3d]/95"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 w-full z-10 relative my-auto">
        
        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Sacred Journeys, <br />
            <span className="text-blue-200 font-light italic font-serif">
              Unmatched Comfort
            </span>
          </h1>
          
          <p className="text-slate-200 text-sm sm:text-base max-w-lg mx-auto font-normal leading-relaxed opacity-90">
            Dedicated Hajj & Umrah pilgrimages with 5-star Haram accommodations, scholar guidance, and personalized care.
          </p>
        </div>

        {/* Ultra-Clean Modern Floating Search Pill */}
        <div className="mt-10 sm:mt-12 max-w-2xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-full p-2 sm:p-2.5 shadow-2xl border border-white/50 text-slate-800">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
              
              {/* Journey Type */}
              <div className="sm:col-span-5 px-4 py-2 sm:py-1 border-b sm:border-b-0 sm:border-r border-slate-200">
                <label className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Journey</label>
                <select 
                  value={selectedJourneyType}
                  onChange={(e) => setSelectedJourneyType(e.target.value)}
                  className="w-full bg-transparent font-bold text-xs sm:text-sm text-slate-900 focus:outline-none cursor-pointer"
                >
                  <option value="umrah">Umrah 2026/2027</option>
                  <option value="hajj">Hajj 2026/2027</option>
                </select>
              </div>

              {/* Season */}
              <div className="sm:col-span-4 px-4 py-2 sm:py-1 border-b sm:border-b-0 sm:border-r border-slate-200">
                <label className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Season</label>
                <select 
                  value={selectedSeason}
                  onChange={(e) => setSelectedSeason(e.target.value)}
                  className="w-full bg-transparent font-bold text-xs sm:text-sm text-slate-900 focus:outline-none cursor-pointer"
                >
                  <option>Oct – Dec 2026</option>
                  <option>Jan – Feb 2027</option>
                  <option>Ramadan 2027</option>
                  <option>Hajj 2027</option>
                </select>
              </div>

              {/* Action Button */}
              <div className="sm:col-span-3">
                <button
                  onClick={handleQuickSearch}
                  className="w-full py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-full bg-[#0B2545] hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Search className="w-3.5 h-3.5 text-blue-300" />
                  <span>Search</span>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Subtle Minimalist Trust Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 text-xs text-slate-300 font-medium">
          <div><strong className="text-white font-bold text-sm">20+</strong> Years Experience</div>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <div><strong className="text-white font-bold text-sm">50k+</strong> Pilgrims Guided</div>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <div><strong className="text-white font-bold text-sm">IATA</strong> Accredited</div>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <div><strong className="text-white font-bold text-sm">24/7</strong> Ground Support</div>
        </div>

      </div>
    </section>
  );
}
