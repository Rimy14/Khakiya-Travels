import React from 'react';
import { 
  Moon, 
  Award, 
  FileText, 
  Plane, 
  Compass, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

export default function ServicesSection({ onOpenBookingModal, onOpenAppointmentModal }) {
  const services = [
    {
      title: 'Umrah Pilgrimage Packages',
      desc: 'Tailored and scheduled group Umrah journeys featuring 5-star Makkah Clock Tower frontage, bullet train transfers, and Islamic scholar accompaniment.',
      icon: Moon
    },
    {
      title: 'Hajj 2026/2027 Quota',
      desc: 'Official Ministry of Hajj licensed quota packages with VIP air-conditioned Mina European tents, Swissôtel Makkah, and 24/7 Mufti guidance.',
      icon: Award
    },
    {
      title: 'Umrah eVisa & Nusuk Support',
      desc: 'Fast-track Saudi Umrah electronic visa processing, comprehensive medical travel insurance, and guaranteed Nusuk Rawdah permit reservations.',
      icon: FileText
    },
    {
      title: 'Direct Airline Allocations',
      desc: 'IATA accredited group seat allocations on SriLankan Airlines, Saudia, Qatar Airways, and Emirates with preferential Zamzam baggage quotas.',
      icon: Plane
    },
    {
      title: 'Guided Historical Ziyarat',
      desc: 'Comprehensive spiritual and educational excursions to Cave Hira, Mount Thawr, Mount Uhud, and Masjid Quba led by knowledgeable scholars.',
      icon: Compass
    },
    {
      title: 'Elderly & Wheelchair Care',
      desc: 'Specialized wheelchair helpers for Tawaf and Sa’i, accessible ground floor rooms, and electric cart assistance in Mina.',
      icon: HeartHandshake
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-8 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Clean Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-1">
            Why Pilgrims Choose Khakiya
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
            Comprehensive Pilgrimage Services
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
            From official Nusuk visa clearance to 5-star Haram frontage and ground scholar care.
          </p>
        </div>

        {/* Clean, Light & Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 hover:bg-white transition-all duration-200 flex flex-col justify-between hover:shadow-md"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60">
                  <button
                    onClick={() => {
                      if (item.title.includes('Package') || item.title.includes('Hajj')) {
                        onOpenBookingModal();
                      } else {
                        onOpenAppointmentModal();
                      }
                    }}
                    className="text-[11px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                  >
                    <span>Inquire Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
