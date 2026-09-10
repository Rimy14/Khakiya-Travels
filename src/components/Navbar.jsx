import React, { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';
import { 
  Calendar, 
  Menu, 
  X, 
  Ticket,
  Sparkles,
  Phone
} from 'lucide-react';

export default function Navbar({ 
  onOpenBookingModal, 
  onOpenAppointmentModal, 
  onOpenVoucherModal,
  bookedCount = 0
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Packages', href: '#packages' },
    { label: 'Services', href: '#services' },
    { label: 'Pilgrimage Guide', href: '#guide' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-8 py-3 transition-all duration-300">
      {/* Floating Glassmorphic Container */}
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-5 sm:px-7 py-3 flex items-center justify-between ${
        isScrolled 
          ? 'bg-[#0B2545]/90 backdrop-blur-xl shadow-2xl border border-white/15' 
          : 'bg-[#0B2545]/80 backdrop-blur-lg shadow-lg border border-white/10'
      }`}>
        
        {/* Brand Logo on Left */}
        <a href="#hero" className="flex items-center">
          <BrandLogo theme="dark" size="normal" />
        </a>

        {/* Center Nav Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-200 hover:text-white text-xs font-semibold tracking-wider uppercase transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-3">
          {/* Subtle My Passes Icon Badge */}
          {bookedCount > 0 && (
            <button
              onClick={onOpenVoucherModal}
              title="View your booked passes & vouchers"
              className="relative p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-amber-300 border border-amber-400/40 transition-all hover:scale-105"
            >
              <Ticket className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] flex items-center justify-center shadow-md">
                {bookedCount}
              </span>
            </button>
          )}

          <button
            onClick={onOpenAppointmentModal}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
          >
            Book Appointment
          </button>

          <button
            onClick={() => onOpenBookingModal()}
            className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-md shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
          >
            Book Package
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          {bookedCount > 0 && (
            <button
              onClick={onOpenVoucherModal}
              className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/40"
            >
              <Ticket className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 bg-[#0B2545]/95 backdrop-blur-xl rounded-2xl p-5 border border-white/15 shadow-2xl space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAppointmentModal(); }}
              className="w-full py-2.5 rounded-xl text-xs font-semibold bg-white/10 text-white border border-white/15"
            >
              Book Appointment
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBookingModal(); }}
              className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-blue-600 text-white shadow-md"
            >
              Book Package
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
