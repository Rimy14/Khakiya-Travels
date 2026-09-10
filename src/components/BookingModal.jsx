import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PACKAGES, EXCHANGE_RATES } from '../data/packagesData';
import { formatPrice } from './PackagesSection';
import { 
  X, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  User, 
  Users, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  Plane, 
  Printer, 
  Ticket, 
  CheckCircle2, 
  Building2, 
  Percent,
  Download,
  Share2
} from 'lucide-react';
import BrandLogo, { IataBadge } from './BrandLogo';

export default function BookingModal({ 
  initialPackage, 
  currency, 
  onClose, 
  onBookingConfirmed 
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPkgId, setSelectedPkgId] = useState(initialPackage ? initialPackage.id : PACKAGES[0].id);
  
  // Customization state
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [travelMonth, setTravelMonth] = useState('October 2026');
  const [travelersCount, setTravelersCount] = useState(1);
  const [airlinePreference, setAirlinePreference] = useState('Saudia / Qatar Airways');

  // Lead pilgrim details
  const [title, setTitle] = useState('Mr.');
  const [fullName, setFullName] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [wheelchairAssistance, setWheelchairAssistance] = useState(false);

  // Add-ons
  const [addons, setAddons] = useState({
    vipAirportMeet: false, // $45
    extraLuggage: false,   // $35
    bulletTrainUpgrade: true, // $60
    zamzamPack: true,      // $20
    travelInsurance: true  // $30
  });

  // Promo code
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [validationError, setValidationError] = useState('');

  // Confirmation data
  const [confirmedBookingData, setConfirmedBookingData] = useState(null);

  const activePackage = PACKAGES.find((p) => p.id === selectedPkgId) || PACKAGES[0];
  const roomTypes = activePackage.roomTypes || [
    { type: 'Standard Room', priceMultiplier: 1.0, discountText: 'Standard' }
  ];
  const activeRoom = roomTypes[selectedRoomIndex] || roomTypes[0];

  // Price calculations
  const baseRate = activePackage.basePriceUSD;
  const roomMultiplier = activeRoom.priceMultiplier || 1.0;
  const perPersonPrice = Math.round(baseRate * roomMultiplier);

  let addonsTotalUSD = 0;
  if (addons.vipAirportMeet) addonsTotalUSD += 45 * travelersCount;
  if (addons.extraLuggage) addonsTotalUSD += 35 * travelersCount;
  if (addons.bulletTrainUpgrade) addonsTotalUSD += 60 * travelersCount;
  if (addons.zamzamPack) addonsTotalUSD += 20 * travelersCount;
  if (addons.travelInsurance) addonsTotalUSD += 30 * travelersCount;

  const subtotalUSD = (perPersonPrice * travelersCount) + addonsTotalUSD;
  const discountAmountUSD = Math.round(subtotalUSD * (discountPercent / 100));
  const finalTotalUSD = subtotalUSD - discountAmountUSD;

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'KHAKIYA2026' || code === 'KHAKIYA2027' || code === 'KHAKIYA2025' || code === 'UMRAH5') {
      setDiscountPercent(5);
      setPromoMessage('✨ 5% Special Client Discount Applied!');
    } else if (code === 'VIPHAJJ') {
      setDiscountPercent(8);
      setPromoMessage('🌟 8% VIP Privilege Discount Applied!');
    } else {
      setDiscountPercent(0);
      setPromoMessage('❌ Invalid voucher code. Try "KHAKIYA2026"');
    }
  };

  const handleContinueStep = () => {
    setValidationError('');
    if (currentStep === 2) {
      if (!fullName.trim()) {
        setValidationError('Please enter the full name of the lead pilgrim.');
        return;
      }
      if (!phone.trim()) {
        setValidationError('Please enter a WhatsApp or contact phone number.');
        return;
      }
    }
    setCurrentStep(currentStep + 1);
  };

  const handleCompleteBooking = () => {
    const bookingRef = `KHK-${Math.floor(100000 + Math.random() * 900000)}`;
    const bookingPayload = {
      referenceId: bookingRef,
      createdAt: new Date().toISOString(),
      package: activePackage,
      roomType: activeRoom.type,
      travelMonth,
      airlinePreference,
      travelersCount,
      leadPassenger: {
        title,
        fullName,
        passportNumber,
        nicNumber,
        email,
        phone,
        city,
        specialRequest,
        wheelchairAssistance
      },
      addons,
      pricing: {
        currency,
        basePriceUSD: baseRate,
        finalTotalUSD,
        finalTotalFormatted: formatPrice(finalTotalUSD, currency),
        discountAmountUSD
      }
    };

    setConfirmedBookingData(bookingPayload);
    onBookingConfirmed(bookingPayload);
    setCurrentStep(5);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti triggered');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[94vh] overflow-hidden shadow-2xl flex flex-col my-auto border border-slate-200">
        
        {/* Top Header */}
        <div className="bg-[#0B2545] text-white p-4 sm:px-6 flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600/60 text-white">
              <Ticket className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">Hajj & Umrah Booking System</h2>
              <p className="text-xs text-blue-200">Official Reservation & Customizer Portal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Bar */}
        {currentStep < 5 && (
          <div className="bg-slate-100 px-4 sm:px-8 py-3 border-b border-slate-200 overflow-x-auto">
            <div className="flex items-center justify-between min-w-[500px] text-xs font-bold">
              {[
                { num: 1, label: '1. Package & Room' },
                { num: 2, label: '2. Pilgrim Details' },
                { num: 3, label: '3. VIP Add-ons' },
                { num: 4, label: '4. Summary & Quote' }
              ].map((step) => (
                <div
                  key={step.num}
                  className={`flex items-center gap-2 ${
                    currentStep === step.num
                      ? 'text-blue-700'
                      : currentStep > step.num
                      ? 'text-emerald-700'
                      : 'text-slate-400'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-extrabold ${
                      currentStep === step.num
                        ? 'bg-blue-600 text-white ring-4 ring-blue-100'
                        : currentStep > step.num
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    {currentStep > step.num ? <Check className="w-3.5 h-3.5" /> : step.num}
                  </div>
                  <span>{step.label}</span>
                  {step.num < 4 && <ChevronRight className="w-3.5 h-3.5 text-slate-400 ml-2" />}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Body / Steps */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: PACKAGE & ROOM CUSTOMIZATION */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1.5">
                  Select Pilgrimage / Tour Package
                </label>
                <select
                  value={selectedPkgId}
                  onChange={(e) => {
                    setSelectedPkgId(e.target.value);
                    setSelectedRoomIndex(0);
                  }}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                >
                  {PACKAGES.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.title} — ({pkg.duration}) — Starts at {formatPrice(pkg.basePriceUSD, currency)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Room Occupancy Options */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                  Select Room Occupancy Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {roomTypes.map((room, idx) => {
                    const isSelected = selectedRoomIndex === idx;
                    const calculatedRoomUSD = Math.round(baseRate * (room.priceMultiplier || 1));
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedRoomIndex(idx)}
                        className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all ${
                          isSelected
                            ? 'border-blue-600 bg-blue-50/70 shadow-md ring-2 ring-blue-100'
                            : 'border-slate-200 hover:border-blue-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                            {room.discountText}
                          </span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                        </div>
                        <div className="text-xs font-bold text-slate-900 mt-2">{room.type}</div>
                        <div className="text-sm font-extrabold text-[#0B2545] mt-1">
                          {formatPrice(calculatedRoomUSD, currency)}
                          <span className="text-[10px] font-normal text-slate-500"> / pax</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Travel Season, Group Size & Airline */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1.5">
                    Travel Month
                  </label>
                  <select
                    value={travelMonth}
                    onChange={(e) => setTravelMonth(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800"
                  >
                    <option>October 2026</option>
                    <option>November 2026</option>
                    <option>December 2026 (Holidays)</option>
                    <option>January 2027</option>
                    <option>February 2027</option>
                    <option>Ramadan 2027</option>
                    <option>Dhul Hijjah 2027 (Hajj)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1.5">
                    Number of Pilgrims
                  </label>
                  <div className="flex items-center border border-slate-300 rounded-xl bg-slate-50 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setTravelersCount(Math.max(1, travelersCount - 1))}
                      className="px-4 py-2.5 font-bold hover:bg-slate-200 text-slate-700 text-sm"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-extrabold text-sm text-slate-900">
                      {travelersCount} {travelersCount > 1 ? 'Pilgrims' : 'Pilgrim'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setTravelersCount(travelersCount + 1)}
                      className="px-4 py-2.5 font-bold hover:bg-slate-200 text-slate-700 text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1.5">
                    Airline Carrier Preference
                  </label>
                  <select
                    value={airlinePreference}
                    onChange={(e) => setAirlinePreference(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800"
                  >
                    <option>Saudia / Qatar Airways (Recommended)</option>
                    <option>SriLankan Airlines Direct</option>
                    <option>Emirates Airline</option>
                    <option>Oman Air / Air Arabia</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: PILGRIM INFORMATION */}
          {currentStep === 2 && (
            <div className="space-y-4">
              {validationError && (
                <div className="bg-rose-50 border border-rose-300 text-rose-800 px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
                  <span>⚠️ {validationError}</span>
                </div>
              )}

              <div className="bg-blue-50/60 p-3.5 rounded-2xl border border-blue-200 flex items-center gap-3 text-xs text-blue-900">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <span>
                  Please provide primary traveler details. Our visa team will review passport validity (minimum 6 months required for Saudi eVisa).
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Title</label>
                  <select
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-sm font-semibold"
                  >
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                    <option>Al-Haj</option>
                    <option>Hajjah</option>
                    <option>Dr.</option>
                  </select>
                </div>

                <div className="sm:col-span-3">
                  <label className="text-xs font-bold uppercase text-slate-600 block mb-1">
                    Full Name (As shown in Passport) *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter full name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase text-slate-600 block mb-1">
                    Passport Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={passportNumber}
                    onChange={(e) => setPassportNumber(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-sm font-semibold uppercase"
                    placeholder="e.g. N1234567"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-slate-600 block mb-1">
                    National ID (NIC) / Nationality
                  </label>
                  <input
                    type="text"
                    value={nicNumber}
                    onChange={(e) => setNicNumber(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-sm font-semibold"
                    placeholder="e.g. 199012345678"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase text-slate-600 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-sm font-semibold"
                    placeholder="yourname@example.com"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-slate-600 block mb-1">
                    WhatsApp / Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-sm font-semibold"
                    placeholder="07X XXXXXXX"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-slate-600 block mb-1">
                    City of Residence
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-sm font-semibold"
                    placeholder="Colombo, Kandy, Galle..."
                  />
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="wheelchair"
                    checked={wheelchairAssistance}
                    onChange={(e) => setWheelchairAssistance(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <label htmlFor="wheelchair" className="text-xs font-bold text-slate-800 cursor-pointer">
                    Request Wheelchair & Special Senior Citizen Assistance during Tawaf & Sa'i
                  </label>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-slate-600 block mb-1">
                    Special Dietary / Accommodation Requests (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-800"
                    placeholder="e.g. Adjoining rooms requested for family, diabetic meals on flight..."
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: ADD-ONS */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#0B2545]">
                Enhance Your Sacred Journey with VIP Add-ons
              </h3>

              <div className="space-y-3">
                {[
                  {
                    key: 'vipAirportMeet',
                    title: 'Jeddah / Madinah VIP Airport Meet & Assist',
                    desc: 'Fast-track passport control lounge, baggage porter, and direct private luxury transfer.',
                    priceUSD: 45
                  },
                  {
                    key: 'bulletTrainUpgrade',
                    title: 'Haramain High-Speed Train First-Class VIP Seat',
                    desc: 'Spacious leather seating, hot refreshments, and quiet executive carriage.',
                    priceUSD: 60
                  },
                  {
                    key: 'extraLuggage',
                    title: 'Extra 10kg Airline Luggage Allowance',
                    desc: 'Pre-purchased excess baggage for Zamzam and gifts for relatives.',
                    priceUSD: 35
                  },
                  {
                    key: 'zamzamPack',
                    title: '5L Blessed Zamzam Home Box with Security Packing',
                    desc: 'Official certified canister packed in airline-approved protective carton.',
                    priceUSD: 20
                  },
                  {
                    key: 'travelInsurance',
                    title: 'Comprehensive Global Takaful / Travel Insurance',
                    desc: 'Emergency medical hospitalization, flight delay, and baggage loss coverage.',
                    priceUSD: 30
                  }
                ].map((addon) => {
                  const isChecked = addons[addon.key];
                  return (
                    <div
                      key={addon.key}
                      onClick={() => setAddons({ ...addons, [addon.key]: !isChecked })}
                      className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'border-blue-600 bg-blue-50/70 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="w-4 h-4 text-blue-600 rounded mt-1"
                        />
                        <div>
                          <div className="text-sm font-bold text-slate-900">{addon.title}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{addon.desc}</div>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <div className="text-sm font-extrabold text-[#0B2545]">
                          +{formatPrice(addon.priceUSD * travelersCount, currency)}
                        </div>
                        <div className="text-[10px] text-slate-500">for {travelersCount} pax</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: SUMMARY & LIVE QUOTE */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <h3 className="text-base font-extrabold text-[#0B2545]">{activePackage.title}</h3>
                    <p className="text-xs text-slate-500">{activeRoom.type} • {travelersCount} Pilgrim(s)</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                    {travelMonth}
                  </span>
                </div>

                {/* Breakdown table */}
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex justify-between">
                    <span>Base Package ({formatPrice(perPersonPrice, currency)} × {travelersCount} pax)</span>
                    <span className="font-bold">{formatPrice(perPersonPrice * travelersCount, currency)}</span>
                  </div>

                  {addonsTotalUSD > 0 && (
                    <div className="flex justify-between text-blue-700">
                      <span>Selected VIP Add-ons</span>
                      <span className="font-bold">+{formatPrice(addonsTotalUSD, currency)}</span>
                    </div>
                  )}

                  {discountAmountUSD > 0 && (
                    <div className="flex justify-between text-emerald-700 font-bold">
                      <span>Discount Voucher ({discountPercent}%)</span>
                      <span>-{formatPrice(discountAmountUSD, currency)}</span>
                    </div>
                  )}

                  <div className="border-t border-slate-300 pt-3 flex justify-between items-baseline text-slate-900">
                    <div>
                      <span className="text-sm font-extrabold">Total Estimated Investment</span>
                      <p className="text-[10px] text-slate-500">Includes all government taxes & flights</p>
                    </div>
                    <span className="text-2xl font-black text-[#0B2545]">
                      {formatPrice(finalTotalUSD, currency)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Promo code box */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Promo Code (e.g. KHAKIYA2026)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold uppercase"
                />
                <button
                  type="button"
                  onClick={handleApplyPromo}
                  className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs font-bold"
                >
                  Apply
                </button>
              </div>
              {promoMessage && (
                <p className={`text-xs font-bold ${discountPercent > 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                  {promoMessage}
                </p>
              )}

              {/* Lead Traveler Card Preview */}
              <div className="bg-blue-50/50 rounded-2xl p-4 border border-blue-200 text-xs text-slate-700 space-y-1">
                <div className="font-bold text-blue-900">Lead Pilgrim: {title} {fullName}</div>
                <div>Passport: <strong className="uppercase">{passportNumber}</strong> • Phone: <strong>{phone}</strong></div>
                <div>Email: <strong>{email}</strong> • Origin: <strong>{city}, Sri Lanka</strong></div>
              </div>
            </div>
          )}

          {/* STEP 5: INSTANT BOOKING CONFIRMATION & PRINTABLE PASS */}
          {currentStep === 5 && confirmedBookingData && (
            <div className="space-y-6">
              
              {/* Confirmed Alert Banner */}
              <div className="bg-emerald-500 text-white rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white text-emerald-600 flex items-center justify-center font-black">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold">Booking Request Confirmed!</h3>
                    <p className="text-xs text-emerald-100">
                      Reference Code: <strong className="text-white text-sm font-mono tracking-wider">{confirmedBookingData.referenceId}</strong>
                    </p>
                  </div>
                </div>
                <button
                  onClick={handlePrint}
                  className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold backdrop-blur-sm"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Voucher</span>
                </button>
              </div>

              {/* Printable Official Voucher Card */}
              <div id="printable-voucher" className="bg-white rounded-3xl p-6 border-2 border-slate-300 shadow-xl space-y-6">
                
                {/* Voucher Header with Brand Letterhead style */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-blue-900 pb-4 gap-4">
                  <BrandLogo theme="light" size="normal" />
                  <div className="text-right text-xs text-slate-600">
                    <IataBadge theme="light" />
                    <div className="font-mono text-sm font-black text-blue-950 mt-1">
                      REF: {confirmedBookingData.referenceId}
                    </div>
                    <div className="text-[10px]">Issued: {new Date().toLocaleDateString('en-GB')}</div>
                  </div>
                </div>

                {/* Pilgrimage & Client details grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Lead Pilgrim</span>
                    <span className="font-extrabold text-slate-900 text-sm">
                      {confirmedBookingData.leadPassenger.title} {confirmedBookingData.leadPassenger.fullName}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Passport No</span>
                    <span className="font-mono font-bold text-slate-900 uppercase">
                      {confirmedBookingData.leadPassenger.passportNumber}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Pilgrims Count</span>
                    <span className="font-bold text-slate-900">
                      {confirmedBookingData.travelersCount} Person(s)
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Travel Season</span>
                    <span className="font-bold text-blue-800">
                      {confirmedBookingData.travelMonth}
                    </span>
                  </div>
                </div>

                {/* Package Selected Information */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-bold text-slate-700">Package Title:</span>
                    <span className="font-extrabold text-blue-900">{confirmedBookingData.package.title}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-bold text-slate-700">Accommodation Room:</span>
                    <span className="font-semibold text-slate-900">{confirmedBookingData.roomType}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-bold text-slate-700">Makkah Hotel:</span>
                    <span className="font-semibold text-slate-900">{confirmedBookingData.package.makkahHotel.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-bold text-slate-700">Total Quoted Amount:</span>
                    <span className="font-black text-base text-blue-900">{confirmedBookingData.pricing.finalTotalFormatted}</span>
                  </div>
                </div>

                {/* Next Steps Guidance */}
                <div className="bg-blue-50 p-4 rounded-2xl border border-blue-200 text-xs text-blue-950 space-y-1.5">
                  <h4 className="font-extrabold text-blue-900 uppercase tracking-wider text-[11px]">
                    What Happens Next:
                  </h4>
                  <ul className="list-disc pl-4 space-y-1 text-slate-700">
                    <li>Our Senior Hajj & Umrah Consultant (Colombo Office) will reach out via WhatsApp / Call within <strong>2 business hours</strong>.</li>
                    <li>You will receive the official Saudi Nusuk Visa authorization documents and airline ticket PNR confirmation.</li>
                    <li>You can visit our Head Office at <strong>60B, Green Lane, Kotahena, Colombo - 13</strong> for Ihram kit handover and biometric clearance.</li>
                  </ul>
                </div>

                {/* Footer contact */}
                <div className="text-center text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                  Khakiya Travels & Tours (Pvt) Ltd • 0112448155/6 • info@khakiya.com • www.khakiya.com
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handlePrint}
                  className="px-5 py-2.5 rounded-xl bg-[#0B2545] hover:bg-blue-800 text-white text-xs font-bold shadow-md flex items-center gap-2"
                >
                  <Printer className="w-4 h-4 text-amber-300" />
                  <span>Download / Print Official Voucher</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold"
                >
                  Done & Close
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        {currentStep < 5 && (
          <div className="bg-slate-50 border-t border-slate-200 p-4 sm:px-6 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
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

            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <span className="text-[10px] text-slate-500 block uppercase font-bold">Estimated Total</span>
                <span className="text-base font-extrabold text-[#0B2545]">
                  {formatPrice(finalTotalUSD, currency)}
                </span>
              </div>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleContinueStep}
                  className="py-2.5 px-6 rounded-xl bg-[#0B2545] hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                >
                  <span>Continue</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleCompleteBooking}
                  className="py-2.5 px-7 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 hover:from-blue-700 hover:to-blue-950 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Confirm Reservation</span>
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
