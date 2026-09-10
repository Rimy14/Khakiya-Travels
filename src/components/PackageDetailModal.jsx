import React, { useState } from 'react';
import { formatPrice } from './PackagesSection';
import { 
  X, 
  Check, 
  MapPin, 
  Calendar, 
  Clock, 
  Plane, 
  Hotel, 
  Star, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  XCircle,
  Sparkles
} from 'lucide-react';

export default function PackageDetailModal({ packageData, currency, onClose, onBookPackage }) {
  const [activeTab, setActiveTab] = useState('itinerary'); // 'itinerary' | 'hotels' | 'inclusions'

  if (!packageData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-hidden shadow-2xl flex flex-col my-auto border border-slate-200">
        
        {/* Header with image banner */}
        <div className="relative h-48 sm:h-64 w-full bg-slate-900 shrink-0">
          <img
            src={packageData.images[0]}
            alt={packageData.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/60 to-transparent"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-transform hover:scale-110"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Info */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-500 text-slate-900">
                {packageData.badge}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs bg-white/20 backdrop-blur-md text-slate-200">
                {packageData.duration}
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white">
              {packageData.title}
            </h2>
            <p className="text-xs sm:text-sm text-blue-200 mt-0.5">
              {packageData.tagline}
            </p>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 py-2 gap-3 text-xs sm:text-sm font-bold">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`py-2 px-3 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'itinerary'
                ? 'border-blue-700 text-blue-900 font-extrabold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>Day-by-Day Schedule</span>
          </button>

          <button
            onClick={() => setActiveTab('hotels')}
            className={`py-2 px-3 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'hotels'
                ? 'border-blue-700 text-blue-900 font-extrabold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Hotel className="w-4 h-4 text-blue-600" />
            <span>Hotels & Distance</span>
          </button>

          <button
            onClick={() => setActiveTab('inclusions')}
            className={`py-2 px-3 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'inclusions'
                ? 'border-blue-700 text-blue-900 font-extrabold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Inclusions & Exclusions</span>
          </button>
        </div>

        {/* Modal Body Content Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: ITINERARY */}
          {activeTab === 'itinerary' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#0B2545] flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Complete Pilgrimage Journey Timeline</span>
              </h3>
              <div className="relative pl-6 border-l-2 border-blue-200 space-y-6">
                {packageData.itinerary.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                    <div>
                      <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-900 font-extrabold text-[11px] mb-1">
                        Day {item.day}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: HOTELS */}
          {activeTab === 'hotels' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Makkah Hotel Card */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-md">
                      Makkah Al-Mukarramah
                    </span>
                    <div className="flex text-amber-400">
                      {[...Array(packageData.makkahHotel.stars || 5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{packageData.makkahHotel.name}</h4>
                    <p className="text-xs font-semibold text-emerald-700 mt-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{packageData.makkahHotel.distance}</span>
                    </p>
                  </div>
                  <p className="text-xs text-slate-600">
                    Stay for {packageData.makkahHotel.nights} Nights. Direct Haram audio feed, luxury buffet dining halls, executive express elevators to prayer halls.
                  </p>
                </div>

                {/* Madinah Hotel Card */}
                {packageData.madinahHotel.name !== 'N/A' && (
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                        Madinah Al-Munawwarah
                      </span>
                      <div className="flex text-amber-400">
                        {[...Array(packageData.madinahHotel.stars || 5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{packageData.madinahHotel.name}</h4>
                      <p className="text-xs font-semibold text-emerald-700 mt-1 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{packageData.madinahHotel.distance}</span>
                      </p>
                    </div>
                    <p className="text-xs text-slate-600">
                      Stay for {packageData.madinahHotel.nights} Nights. Steps from Prophet's Mosque Green Dome and Bab Al-Salam courtyard.
                    </p>
                  </div>
                )}
              </div>

              {/* Room Occupancy Options */}
              <div className="bg-blue-50/70 rounded-2xl p-4 border border-blue-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">Available Room Occupancy Options:</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {packageData.roomTypes.map((room, idx) => (
                    <div key={idx} className="bg-white p-2.5 rounded-xl border border-blue-100 text-center">
                      <div className="text-xs font-bold text-slate-800">{room.type}</div>
                      <div className="text-[10px] text-blue-700 font-semibold mt-0.5">{room.discountText}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INCLUSIONS */}
          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-200 space-y-3">
                <h4 className="text-sm font-bold text-emerald-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Package Inclusions (Fully Covered)</span>
                </h4>
                <div className="space-y-2">
                  {packageData.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-emerald-950 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusions */}
              <div className="bg-rose-50/60 rounded-2xl p-4 border border-rose-200 space-y-3">
                <h4 className="text-sm font-bold text-rose-900 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>Exclusions & Optional Add-ons</span>
                </h4>
                <div className="space-y-2">
                  {packageData.exclusions.map((exc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-rose-950 font-medium">
                      <span className="text-rose-500 font-bold shrink-0">•</span>
                      <span>{exc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Price and Book CTA */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-[11px] font-bold text-slate-500 uppercase">Package Starting Rate</div>
            <div className="text-2xl font-black text-[#0B2545]">
              {formatPrice(packageData.basePriceUSD, currency)}
              <span className="text-xs font-normal text-slate-500 ml-1">/ person</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex-1 sm:flex-none"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookPackage(packageData);
              }}
              className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 flex-1 sm:flex-none"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Proceed to Booking Customizer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
