import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';
import BrandLogo, { IataBadge } from './BrandLogo';

export default function AppointmentSchedulerModal({ onClose, onAppointmentConfirmed }) {
  const [step, setStep] = useState(1); // 1: Select Topic & Slot, 2: Details, 3: Confirmation Pass
  
  const [selectedTopic, setSelectedTopic] = useState('Hajj 2026/2027 Registration & Official Quota');
  const [selectedDate, setSelectedDate] = useState('2026-10-15');
  const [selectedSlot, setSelectedSlot] = useState('11:00 AM');

  // Contact Info
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [validationError, setValidationError] = useState('');

  const [confirmedAppt, setConfirmedAppt] = useState(null);

  // Available sample slots
  const timeSlots = [
    { time: '09:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '02:00 PM', available: true },
    { time: '03:30 PM', available: false },
    { time: '04:45 PM', available: true },
    { time: '06:00 PM', available: true },
  ];

  const handleConfirm = () => {
    setValidationError('');
    if (!clientName.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!clientPhone.trim()) {
      setValidationError('Please enter your WhatsApp or phone number.');
      return;
    }

    const apptRef = `APT-${Math.floor(10000 + Math.random() * 90000)}`;
    const payload = {
      referenceId: apptRef,
      location: 'Colombo Head Office (60B, Green Lane, Kotahena, Colombo - 13)',
      selectedTopic,
      selectedDate,
      selectedSlot,
      clientName,
      clientPhone,
      clientEmail,
      notes,
      createdAt: new Date().toISOString()
    };
    setConfirmedAppt(payload);
    onAppointmentConfirmed(payload);
    setStep(3);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[94vh] overflow-hidden shadow-2xl flex flex-col my-auto border border-slate-200">
        
        {/* Top Header */}
        <div className="bg-[#0B2545] text-white p-4 sm:px-6 flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600 text-white">
              <CalendarCheck className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">Book Office Consultation</h2>
              <p className="text-xs text-blue-200">Personalized Hajj & Umrah Advisory Session</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: TOPIC & DATE / TIME */}
          {step === 1 && (
            <div className="space-y-5">
              
              {/* Consultation Topic */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1.5">
                  1. Pilgrimage Discussion Topic
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                >
                  <option>Hajj 2026/2027 Registration & Official Quota</option>
                  <option>Umrah Pilgrimage Package Consultation</option>
                  <option>General Hajj & Umrah Advisory</option>
                </select>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1.5 flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-blue-600" />
                    <span>2. Select Appointment Date</span>
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    min="2026-01-01"
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Monday – Saturday (9:00 AM – 6:30 PM)
                  </p>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>3. Available 30-Min Slot</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => {
                      const isSelected = selectedSlot === slot.time;
                      return (
                        <button
                          key={slot.time}
                          type="button"
                          disabled={!slot.available}
                          onClick={() => setSelectedSlot(slot.time)}
                          className={`py-2 px-1 text-xs font-bold rounded-xl border transition-all ${
                            !slot.available
                              ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed line-through'
                              : isSelected
                              ? 'bg-[#0B2545] text-white border-[#0B2545] shadow-md'
                              : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                          }`}
                        >
                          {slot.time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Office Location info strip */}
              <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-200 flex items-start gap-3 text-xs">
                <MapPin className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-blue-900 block">Location: Colombo Head Office</span>
                  <span className="text-slate-600">60B, Green Lane, Kotahena, Colombo - 13 (Parking Available)</span>
                </div>
              </div>

            </div>
          )}

          {/* STEP 2: CONTACT DETAILS */}
          {step === 2 && (
            <div className="space-y-4">
              {validationError && (
                <div className="bg-rose-50 border border-rose-300 text-rose-800 px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
                  <span>⚠️ {validationError}</span>
                </div>
              )}

              <div className="bg-blue-50/60 p-3.5 rounded-2xl border border-blue-200 text-xs text-blue-900">
                Please enter your contact information to reserve your dedicated advisory session.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase text-slate-600 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-slate-600 block mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    placeholder="07X XXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-slate-600 block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="yourname@example.com"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-slate-600 block mb-1">
                  Specific Requirements / Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="e.g. Inquiring for family package with elderly parents..."
                />
              </div>

              {/* Summary pill */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                <div>Selected Date: <strong>{selectedDate}</strong> at <strong>{selectedSlot}</strong></div>
                <div>Topic: <strong>{selectedTopic}</strong></div>
                <div>Location: <strong>60B, Green Lane, Kotahena, Colombo - 13</strong></div>
              </div>
            </div>
          )}

          {/* STEP 3: CONFIRMATION PASS */}
          {step === 3 && confirmedAppt && (
            <div className="space-y-5">
              <div className="bg-emerald-500 text-white rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white text-emerald-600 flex items-center justify-center font-black">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold">Appointment Confirmed!</h3>
                    <p className="text-xs text-emerald-100">
                      Pass ID: <strong className="text-white text-sm font-mono">{confirmedAppt.referenceId}</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Appointment Pass Card */}
              <div className="bg-white rounded-2xl p-5 border-2 border-slate-300 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <BrandLogo theme="light" />
                  <IataBadge theme="light" />
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Client Name</span>
                    <span className="font-bold text-slate-900">{confirmedAppt.clientName || 'Valued Pilgrim'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Date & Time</span>
                    <span className="font-extrabold text-blue-900">{confirmedAppt.selectedDate} • {confirmedAppt.selectedSlot}</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-3.5 rounded-xl border border-blue-200 text-xs text-blue-950 space-y-1">
                  <div className="font-bold">Consultation Location:</div>
                  <p className="text-slate-700">
                    Colombo Head Office: 60B, Green Lane, Kotahena, Colombo - 13 (Dedicated parking available).
                  </p>
                </div>

                <div className="text-center text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                  Confirmation dispatched to {confirmedAppt.clientPhone || 'your contact number'}.
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#0B2545] hover:bg-blue-800 text-white text-xs font-bold"
                >
                  Done & Close
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        {step < 3 && (
          <div className="bg-slate-50 border-t border-slate-200 p-4 sm:px-6 flex items-center justify-between">
            {step === 2 ? (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-200 text-slate-700 font-bold text-xs"
              >
                Cancel
              </button>
            )}

            {step === 1 ? (
              <button
                type="button"
                onClick={() => setStep(2)}
                className="py-2.5 px-6 rounded-xl bg-[#0B2545] hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
              >
                <span>Enter Details</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleConfirm}
                className="py-2.5 px-7 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Confirm Appointment</span>
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
