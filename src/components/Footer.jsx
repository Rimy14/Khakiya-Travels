import React, { useState } from 'react';
import BrandLogo from './BrandLogo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Calendar,
  ChevronRight
} from 'lucide-react';

export default function Footer({ onOpenAppointmentModal }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setNewsletterEmail(''), 1000);
    }
  };

  const pilgrimageServices = [
    { label: 'Umrah Pilgrimage Package', href: '#packages' },
    { label: 'Hajj 2026/2027 Pilgrimage Package', href: '#packages' },
    { label: '5★ Clock Tower Haram Hotels', href: '#packages' },
    { label: 'Haramain High-Speed Bullet Train', href: '#packages' },
    { label: 'Guided Historical Ziyarat Tours', href: '#services' },
    { label: 'Senior Citizen & Wheelchair Care', href: '#services' },
    { label: 'Pilgrimage Rites Guide', href: '#guide' }
  ];

  return (
    <footer className="bg-white text-slate-700 border-t border-slate-200 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand & Letterhead Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo theme="light" size="large" />
            
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed pt-1">
              Khakiya Travels & Tours (Pvt) Ltd is Sri Lanka’s premier IATA accredited agency dedicated exclusively to providing serene, spiritually uplifting, and meticulously managed Hajj & Umrah pilgrimages.
            </p>

            {/* Official Accreditation Badges - Seamless on White */}
            <div className="pt-3 flex flex-wrap items-center gap-5">
              <img 
                src={`${import.meta.env.BASE_URL}iata-logo.png`} 
                alt="IATA Accredited Agent - Khakiya Travels" 
                className="h-12 sm:h-14 w-auto object-contain transition-transform hover:scale-105"
              />

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Nusuk Registered</span>
              </div>
            </div>
          </div>

          {/* Col 2: Hajj & Umrah Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-[#0B2545] uppercase tracking-wider">
              Pilgrimage Services
            </h4>
            <ul className="space-y-2 text-xs">
              {pilgrimageServices.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="hover:text-blue-600 transition-colors flex items-center gap-1.5 text-slate-600 font-medium"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Colombo Head Office & Inquiries (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold text-[#0B2545] uppercase tracking-wider">
              Colombo Head Office
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>60B, Green Lane, Kotahena, Colombo - 13, Sri Lanka</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-slate-800 font-bold">
                  <a href="tel:0112448155" className="hover:text-blue-600">0112448155</a> / <a href="tel:0112448156" className="hover:text-blue-600">0112448156</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <a href="mailto:info@khakiya.com" className="text-blue-600 font-semibold hover:underline">info@khakiya.com</a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAppointmentModal}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0B2545] hover:bg-blue-800 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book Office Appointment</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <div className="text-center sm:text-left">
            <span>© {new Date().getFullYear()} Khakiya Travels & Tours (Pvt) Ltd. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span>60B, Green Lane, Kotahena, Colombo 13</span>
            <span>•</span>
            <span className="text-blue-600 font-bold">IATA Accredited #07302901</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
