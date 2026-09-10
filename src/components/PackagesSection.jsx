import React, { useState } from 'react';
import { PACKAGES, EXCHANGE_RATES } from '../data/packagesData';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  Star, 
  Building2, 
  Plane, 
  ArrowRight, 
  Check, 
  Search,
  Info,
  ShieldCheck
} from 'lucide-react';

export function formatPrice(basePriceUSD, currency) {
  const rate = EXCHANGE_RATES[currency] || 1;
  const calculated = Math.round(basePriceUSD * rate);

  if (currency === 'LKR') {
    return `LKR ${(calculated).toLocaleString('en-US')}`;
  }
  if (currency === 'SAR') {
    return `SAR ${(calculated).toLocaleString('en-US')}`;
  }
  if (currency === 'AED') {
    return `AED ${(calculated).toLocaleString('en-US')}`;
  }
  return `USD $${(calculated).toLocaleString('en-US')}`;
}

export default function PackagesSection({ 
  currency, 
  onSelectPackageForBooking, 
  onOpenPackageDetails,
  selectedCategory,
  setSelectedCategory
}) {
  const categories = [
    { id: 'all', label: 'All Packages' },
    { id: 'umrah', label: 'Umrah Package' },
    { id: 'hajj', label: 'Hajj 2026/2027' },
  ];

  const filteredPackages = PACKAGES.filter((pkg) => {
    return selectedCategory === 'all' || pkg.category === selectedCategory;
  });

  return (
    <section id="packages" className="py-20 px-4 sm:px-8 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-1">
            Official Pilgrimage Itineraries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Hajj & Umrah Packages
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            5-star Haram frontage accommodations, direct flights, and comprehensive scholar guidance.
          </p>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="flex justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                selectedCategory === cat.id
                  ? 'bg-[#0B2545] text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2-Column Side-by-Side Clean Grid for Umrah & Hajj */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPackages.map((pkg) => {
            const displayPrice = formatPrice(pkg.basePriceUSD, currency);
            return (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={pkg.images[0]}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-lg text-xs font-extrabold uppercase tracking-wider bg-blue-600 text-white shadow-md">
                      {pkg.badge}
                    </span>
                    <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full text-amber-300 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{pkg.rating}</span>
                      <span className="text-slate-300 text-[10px]">({pkg.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Duration in image footer */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/95">
                    <span className="flex items-center gap-1.5 font-semibold text-xs">
                      <Clock className="w-3.5 h-3.5 text-blue-300" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold text-xs">
                      <Plane className="w-3.5 h-3.5 text-blue-300" />
                      {pkg.airline}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {pkg.tagline}
                    </p>

                    {/* Hotel Info */}
                    <div className="mt-4 pt-3 border-t border-slate-100 text-xs space-y-2">
                      <div className="flex items-center gap-2 text-slate-800">
                        <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="font-bold text-slate-900">{pkg.makkahHotel.name}</span>
                      </div>
                      <div className="text-[11px] text-emerald-700 font-extrabold pl-6">
                        📍 {pkg.makkahHotel.distance}
                      </div>

                      <div className="flex items-center gap-2 text-slate-800 pt-1">
                        <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-bold text-slate-900">{pkg.madinahHotel.name}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 font-semibold pl-6">
                        📍 {pkg.madinahHotel.distance}
                      </div>
                    </div>

                    {/* Top Inclusions */}
                    <div className="mt-4 space-y-1.5 text-xs text-slate-600">
                      {pkg.inclusions.slice(0, 3).map((inc, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA Bottom */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Starting from</span>
                      <div className="text-xl sm:text-2xl font-black text-[#0B2545]">
                        {displayPrice}
                        <span className="text-xs font-normal text-slate-500 ml-1">/ person</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenPackageDetails(pkg)}
                        className="py-2.5 px-3.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors flex items-center gap-1.5"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>

                      <button
                        onClick={() => onSelectPackageForBooking(pkg)}
                        className="py-2.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all shadow-md shadow-blue-600/20 flex items-center gap-1.5 hover:scale-105 active:scale-95"
                      >
                        <span>Book Package</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
