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
    <footer className="bg-[#051326] text-slate-300 border-t border-blue-950 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-blue-900/50">
          
          {/* Col 1: Brand & Letterhead Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo theme="dark" size="normal" />
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Khakiya Travels & Tours (Pvt) Ltd is Sri Lanka’s premier IATA accredited agency dedicated exclusively to providing serene, spiritually uplifting, and meticulously managed Hajj & Umrah pilgrimages.
            </p>

            {/* Official IATA Accreditation Mark Card */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="bg-white rounded-xl px-3 py-1.5 border border-slate-200 shadow-md inline-flex items-center hover:shadow-lg transition-all">
                <img 
                  src={`${import.meta.env.BASE_URL}iata-logo.png`} 
                  alt="IATA Accredited Agent - Khakiya Travels (Pvt) Ltd" 
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-900/40 border border-blue-500/30 text-blue-200 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Nusuk Verified</span>
              </div>
            </div>
          </div>

          {/* Col 2: Hajj & Umrah Services (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
              Hajj & Umrah Services
            </h4>
            <ul className="space-y-2 text-xs">
              {pilgrimageServices.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="hover:text-blue-300 transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <ChevronRight className="w-3 h-3 text-blue-500 shrink-0" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Colombo Head Office & Inquiries (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
              Colombo Head Office
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span>60B, Green Lane, Kotahena, Colombo - 13, Sri Lanka</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <div className="text-slate-300 font-semibold">
                  <a href="tel:0112448155" className="hover:text-blue-300">0112448155</a> / <a href="tel:0112448156" className="hover:text-blue-300">0112448156</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <a href="mailto:info@khakiya.com" className="text-blue-300 hover:underline">info@khakiya.com</a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAppointmentModal}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book Office Appointment</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="text-center sm:text-left">
            <span>© {new Date().getFullYear()} Khakiya Travels & Tours (Pvt) Ltd. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span>60B, Green Lane, Kotahena, Colombo 13</span>
            <span>•</span>
            <span className="text-blue-400">IATA Accredited</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
