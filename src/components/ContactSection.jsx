import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Calendar,
  Sparkles
} from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function ContactSection({ onOpenAppointmentModal }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Umrah Pilgrimage Package',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Umrah Pilgrimage Package',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-1">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Contact Khakiya Travels & Tours
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Visit our Colombo Head Office in Kotahena or send a message for dedicated Hajj and Umrah advisory.
          </p>
        </div>

        {/* Clean Luxury Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 bg-[#0B2545] text-white p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="pb-4 border-b border-blue-900">
                <BrandLogo theme="dark" />
              </div>

              {/* Office Details */}
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-blue-200 uppercase tracking-wider text-[10px]">Colombo Head Office</div>
                    <div className="font-semibold text-white mt-0.5">60B, Green Lane, Kotahena, Colombo - 13</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-blue-200 uppercase tracking-wider text-[10px]">Direct Hotline</div>
                    <div className="font-semibold text-white mt-0.5">
                      <a href="tel:0112448155" className="hover:underline">0112448155</a> / <a href="tel:0112448156" className="hover:underline">0112448156</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-blue-200 uppercase tracking-wider text-[10px]">Official Email</div>
                    <div className="font-semibold text-white mt-0.5">
                      <a href="mailto:info@khakiya.com" className="hover:underline">info@khakiya.com</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-blue-200 uppercase tracking-wider text-[10px]">Working Hours</div>
                    <div className="font-semibold text-white mt-0.5">Mon – Sat: 9:00 AM – 6:30 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Button */}
            <div className="pt-4 border-t border-blue-900">
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Schedule an Office Visit</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 text-slate-800 flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="text-xl font-extrabold text-[#0B2545]">Send an Inquiry</h3>
              <p className="text-xs text-slate-500 mt-1">Our pilgrimage specialists will respond within 24 hours.</p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-950">Inquiry Received Successfully!</h4>
                <p className="text-xs text-emerald-800">
                  Thank you for contacting Khakiya Travels. Our senior pilgrimage advisor will reach out shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      placeholder="Enter full name"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase text-slate-600 block mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      placeholder="07X XXXXXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Pilgrimage Package *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none cursor-pointer"
                    >
                      <option>Umrah Pilgrimage Package</option>
                      <option>Hajj 2026/2027 Pilgrimage Package</option>
                      <option>General Pilgrimage Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      placeholder="yourname@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Your Message (Optional)</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    placeholder="Mention preferred dates, number of travelers, or special requests..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0B2545] hover:bg-blue-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-blue-300" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
