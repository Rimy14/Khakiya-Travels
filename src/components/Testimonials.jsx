import React from 'react';
import { TESTIMONIALS } from '../data/packagesData';
import { Star, Quote, CheckCircle2, Award, Heart } from 'lucide-react';
import { COLOR_AIRLINES } from './AirlineLogos';

export default function Testimonials() {
  const airlinePartners = [
    { name: 'Saudia Airlines', code: 'SV' },
    { name: 'Qatar Airways', code: 'QR' },
    { name: 'Emirates', code: 'EK' },
    { name: 'SriLankan Airlines', code: 'UL' },
    { name: 'Etihad Airways', code: 'EY' },
    { name: 'Turkish Airlines', code: 'TK' },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold mb-3">
            <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>Pilgrim Testimonials & Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Trusted by Thousands of Sri Lankan Families
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Read authentic feedback from pilgrims who embarked on their sacred Hajj and Umrah journeys under Khakiya’s dedicated care.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1.5"
            >
              <Quote className="w-10 h-10 text-blue-200 absolute top-6 right-6 group-hover:text-blue-400 transition-colors" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-blue-600"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{review.name}</h4>
                  <div className="text-[11px] text-slate-500">{review.city}</div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{review.badge}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
