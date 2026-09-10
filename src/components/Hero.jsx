import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  Search,
  CheckCircle2, 
  Award,
  ShieldCheck,
  Plane,
  Building2
} from 'lucide-react';

export default function Hero({ onOpenBookingModal, onOpenAppointmentModal, onFilterCategory }) {
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
    <section id="hero" className="relative min-h-[85vh] text-white flex flex-col justify-between pt-12 pb-16 overflow-hidden">
      
      {/* High-Resolution Panoramic Background Image with Clean Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Masjid Al-Haram Makkah and Holy Kaaba"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft luxury dark blue gradient overlay to ensure perfect contrast and clean readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06152b]/90 via-[#0B2545]/75 to-[#071e3d]/95"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 w-full z-10 relative my-auto">
        
        {/* Sleek Top Pill */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-xs font-semibold tracking-wide">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>IATA Accredited Agent • Sri Lanka’s Premier Hajj & Umrah Organizer</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Sacred Journeys, <br />
            <span className="text-blue-200 font-light italic font-serif">
              Unmatched Comfort
            </span>
          </h1>
          
          <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
            Experience spiritually uplifting Hajj & Umrah pilgrimages with 5-star Haram frontage accommodations, scholar guidance, and personalized care.
          </p>

          {/* Clean Primary Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Customize Pilgrimage</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenAppointmentModal}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all hover:scale-105 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-slate-300" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

        {/* Clean, Streamlined Quick Search Bar */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-3 sm:p-4 border border-slate-200 text-slate-800">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
              
              {/* Journey Type */}
              <div className="px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-slate-200">
                <label className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Journey</label>
                <select 
                  value={selectedJourneyType}
                  onChange={(e) => setSelectedJourneyType(e.target.value)}
                  className="w-full bg-transparent font-bold text-xs sm:text-sm text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option value="umrah">Umrah 2026/2027 Packages</option>
                  <option value="hajj">Hajj 2026 / 2027 Quota</option>
                </select>
              </div>

              {/* Season */}
              <div className="px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-slate-200">
                <label className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Season</label>
                <select 
                  value={selectedSeason}
                  onChange={(e) => setSelectedSeason(e.target.value)}
                  className="w-full bg-transparent font-bold text-xs sm:text-sm text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option>October - December 2026</option>
                  <option>January - February 2027</option>
                  <option>Ramadan 2027 Season</option>
                  <option>Hajj 2027 Season</option>
                </select>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={handleQuickSearch}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0B2545] hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Search className="w-4 h-4 text-blue-300" />
                  <span>Search Packages</span>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Minimal Clean Stats Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mt-10 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white text-base">20+</span>
            <span>Years of Trust</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white text-base">50,000+</span>
            <span>Pilgrims Guided</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white text-base">100%</span>
            <span>IATA Accredited</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white text-base">24/7</span>
            <span>Ground Care</span>
          </div>
        </div>

      </div>
    </section>
  );
}
