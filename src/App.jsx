import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackagesSection from './components/PackagesSection';
import PackageDetailModal from './components/PackageDetailModal';
import BookingModal from './components/BookingModal';
import AppointmentSchedulerModal from './components/AppointmentSchedulerModal';
import QuickVoucherModal from './components/QuickVoucherModal';
import ServicesSection from './components/ServicesSection';
import PilgrimageGuide from './components/PilgrimageGuide';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AirlineMarquee from './components/AirlineMarquee';
import { PACKAGES } from './data/packagesData';
import { MessageCircle, Ticket, Calendar, Sparkles } from 'lucide-react';

export default function App() {
  const currency = 'LKR';
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Modals
  const [packageDetailModal, setPackageDetailModal] = useState(null); // package object
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingPackage, setSelectedBookingPackage] = useState(null);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [voucherModalOpen, setVoucherModalOpen] = useState(false);

  // Local storage stored data
  const [savedBookings, setSavedBookings] = useState(() => {
    try {
      const stored = localStorage.getItem('khakiya_bookings');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  const [savedAppointments, setSavedAppointments] = useState(() => {
    try {
      const stored = localStorage.getItem('khakiya_appointments');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleBookingConfirmed = (booking) => {
    const updated = [booking, ...savedBookings];
    setSavedBookings(updated);
    try {
      localStorage.setItem('khakiya_bookings', JSON.stringify(updated));
    } catch (e) {}
    showToast(`🎉 Booking confirmed! Ref: ${booking.referenceId}`);
  };

  const handleAppointmentConfirmed = (appt) => {
    const updated = [appt, ...savedAppointments];
    setSavedAppointments(updated);
    try {
      localStorage.setItem('khakiya_appointments', JSON.stringify(updated));
    } catch (e) {}
    showToast(`📅 Appointment scheduled! Pass: ${appt.referenceId}`);
  };

  const handleClearAllStorage = () => {
    setSavedBookings([]);
    setSavedAppointments([]);
    localStorage.removeItem('khakiya_bookings');
    localStorage.removeItem('khakiya_appointments');
    showToast('Cleared stored records.');
  };

  const handleOpenBookingWithPackage = (pkg) => {
    setSelectedBookingPackage(pkg || PACKAGES[0]);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B2545] text-white px-5 py-3 rounded-2xl shadow-2xl border border-blue-400/40 text-xs sm:text-sm font-bold flex items-center gap-3 animate-bounce">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        onOpenBookingModal={() => handleOpenBookingWithPackage(PACKAGES[0])}
        onOpenAppointmentModal={() => setAppointmentModalOpen(true)}
        onOpenVoucherModal={() => setVoucherModalOpen(true)}
        bookedCount={savedBookings.length + savedAppointments.length}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBookingModal={() => handleOpenBookingWithPackage(PACKAGES[0])}
          onOpenAppointmentModal={() => setAppointmentModalOpen(true)}
          onFilterCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* Auto-Scrolling Airlines Marquee */}
        <AirlineMarquee theme="light" />

        {/* Packages Explorer */}
        <PackagesSection
          currency={currency}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onOpenPackageDetails={(pkg) => setPackageDetailModal(pkg)}
          onSelectPackageForBooking={(pkg) => handleOpenBookingWithPackage(pkg)}
        />

        {/* Services Showcase */}
        <ServicesSection
          onOpenBookingModal={() => handleOpenBookingWithPackage(PACKAGES[0])}
          onOpenAppointmentModal={() => setAppointmentModalOpen(true)}
        />

        {/* Step-by-Step Pilgrimage Guide */}
        <PilgrimageGuide
          onOpenBookingModal={() => handleOpenBookingWithPackage(PACKAGES[0])}
        />

        {/* Verified Testimonials */}
        <Testimonials />

        {/* Contact & Branch Section */}
        <ContactSection
          onOpenAppointmentModal={() => setAppointmentModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBookingModal={() => handleOpenBookingWithPackage(PACKAGES[0])}
        onOpenAppointmentModal={() => setAppointmentModalOpen(true)}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        <a
          href="https://wa.me/94112448155?text=Assalamu%20Alaikum%20Khakiya%20Travels,%20I%20would%20like%20to%20inquire%20about%20Hajj%20and%20Umrah%20packages."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
          aria-label="WhatsApp Us"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute left-15 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-xl shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            WhatsApp Us
          </span>
        </a>
      </div>

      {/* Clean Floating AI Assistant Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => showToast('✨ Khakiya AI Assistant is currently in development and will be live soon inshaAllah.')}
          className="h-12 px-4 rounded-full bg-[#0B2545] hover:bg-blue-900 text-white shadow-xl shadow-blue-950/30 border border-blue-400/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 group"
          aria-label="Khakiya AI Assistant"
        >
          <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-bold tracking-wide">AI Assistant</span>
        </button>
      </div>

      {/* Package Detail Modal */}
      {packageDetailModal && (
        <PackageDetailModal
          packageData={packageDetailModal}
          currency={currency}
          onClose={() => setPackageDetailModal(null)}
          onBookPackage={(pkg) => handleOpenBookingWithPackage(pkg)}
        />
      )}

      {/* Interactive 5-Step Booking Modal */}
      {bookingModalOpen && (
        <BookingModal
          initialPackage={selectedBookingPackage}
          currency={currency}
          onClose={() => {
            setBookingModalOpen(false);
            setSelectedBookingPackage(null);
          }}
          onBookingConfirmed={handleBookingConfirmed}
        />
      )}

      {/* Appointment Scheduler Modal */}
      {appointmentModalOpen && (
        <AppointmentSchedulerModal
          onClose={() => setAppointmentModalOpen(false)}
          onAppointmentConfirmed={handleAppointmentConfirmed}
        />
      )}

      {/* Quick Voucher / Passes Drawer */}
      {voucherModalOpen && (
        <QuickVoucherModal
          bookings={savedBookings}
          appointments={savedAppointments}
          onClose={() => setVoucherModalOpen(false)}
          onClearAll={handleClearAllStorage}
        />
      )}

    </div>
  );
}
