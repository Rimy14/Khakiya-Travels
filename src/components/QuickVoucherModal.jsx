import React, { useState } from 'react';
import { X, Ticket, Calendar, Printer, Trash2, Eye, ExternalLink } from 'lucide-react';
import BrandLogo, { IataBadge } from './BrandLogo';

export default function QuickVoucherModal({ bookings = [], appointments = [], onClose, onClearAll }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[92vh] overflow-hidden shadow-2xl flex flex-col my-auto border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#0B2545] text-white p-4 sm:px-6 flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600 text-white">
              <Ticket className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">My Active Bookings & Passes</h2>
              <p className="text-xs text-blue-200">View and print confirmed vouchers</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6">
          
          {bookings.length === 0 && appointments.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <Ticket className="w-12 h-12 mx-auto text-slate-300 mb-3" />
              <h4 className="text-base font-bold text-slate-800">No active bookings yet</h4>
              <p className="text-xs text-slate-500 mt-1">Book a Hajj or Umrah package or schedule an appointment to generate vouchers.</p>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Confirmed Package Bookings */}
              {bookings.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Ticket className="w-4 h-4 text-blue-600" />
                    <span>Hajj & Umrah Package Bookings ({bookings.length})</span>
                  </h3>

                  <div className="space-y-3">
                    {bookings.map((b, i) => (
                      <div
                        key={i}
                        className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-blue-300 transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-blue-100 text-blue-900">
                              {b.referenceId}
                            </span>
                            <span className="text-xs font-extrabold text-slate-900">{b.package.title}</span>
                          </div>
                          <div className="text-xs text-slate-600 mt-1">
                            Lead: <strong>{b.leadPassenger.title} {b.leadPassenger.fullName}</strong> • {b.travelersCount} Pax • {b.travelMonth}
                          </div>
                          <div className="text-xs font-extrabold text-blue-900 mt-0.5">
                            Total: {b.pricing.finalTotalFormatted}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-center">
                          <button
                            onClick={() => setSelectedItem({ type: 'booking', data: b })}
                            className="px-3 py-1.5 rounded-xl bg-[#0B2545] hover:bg-blue-800 text-white text-xs font-bold flex items-center gap-1.5"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>View Voucher</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Confirmed Appointments */}
              {appointments.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <span>Scheduled Appointments ({appointments.length})</span>
                  </h3>

                  <div className="space-y-3">
                    {appointments.map((a, i) => (
                      <div
                        key={i}
                        className="bg-amber-50/50 rounded-2xl p-4 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-amber-200 text-amber-900">
                              {a.referenceId}
                            </span>
                            <span className="text-xs font-extrabold text-slate-900">{a.selectedTopic}</span>
                          </div>
                          <div className="text-xs text-slate-600 mt-1">
                            Date: <strong>{a.selectedDate}</strong> at <strong>{a.selectedSlot}</strong> • {a.clientName}
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedItem({ type: 'appointment', data: a })}
                          className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Pass</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Detailed Selected Voucher View */}
          {selectedItem && (
            <div className="fixed inset-0 z-60 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
              <div className="bg-white rounded-3xl p-5 sm:p-7 max-w-2xl w-full max-h-[92vh] overflow-y-auto space-y-6 shadow-2xl border border-slate-200">
                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <Ticket className="w-5 h-5 text-blue-600" />
                    <h3 className="font-extrabold text-base text-slate-900">
                      {selectedItem.type === 'booking' ? 'Official Pilgrimage Voucher' : 'Official Appointment Pass'}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setSelectedItem(null)} 
                    className="p-1.5 text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Printable Document Area */}
                <div id="printable-voucher" className="bg-white rounded-2xl p-5 border-2 border-slate-300 shadow-sm space-y-5">
                  
                  {/* Voucher Header with Brand Letterhead style */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-blue-900 pb-4 gap-3">
                    <BrandLogo theme="light" size="normal" />
                    <div className="text-left sm:text-right text-xs text-slate-600">
                      <IataBadge theme="light" />
                      <div className="font-mono text-sm font-black text-blue-950 mt-1">
                        REF: {selectedItem.data.referenceId}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Issued: {selectedItem.data.createdAt ? new Date(selectedItem.data.createdAt).toLocaleDateString('en-GB') : new Date().toLocaleDateString('en-GB')}
                      </div>
                    </div>
                  </div>

                  {selectedItem.type === 'booking' ? (
                    <>
                      {/* Pilgrimage & Client details grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                        <div>
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">Lead Pilgrim</span>
                          <span className="font-extrabold text-slate-900 text-sm">
                            {selectedItem.data.leadPassenger?.title} {selectedItem.data.leadPassenger?.fullName || 'Pilgrim'}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">Passport No</span>
                          <span className="font-mono font-bold text-slate-900 uppercase">
                            {selectedItem.data.leadPassenger?.passportNumber || 'Pending'}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">Pilgrims Count</span>
                          <span className="font-bold text-slate-900">
                            {selectedItem.data.travelersCount} Person(s)
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">Travel Season</span>
                          <span className="font-bold text-blue-800">
                            {selectedItem.data.travelMonth}
                          </span>
                        </div>
                      </div>

                      {/* Package Selected Information */}
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between border-b border-slate-200 pb-1.5">
                          <span className="font-bold text-slate-600">Package Title:</span>
                          <span className="font-extrabold text-blue-900">{selectedItem.data.package?.title}</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-200 pb-1.5">
                          <span className="font-bold text-slate-600">Accommodation Room:</span>
                          <span className="font-semibold text-slate-900">{selectedItem.data.roomType}</span>
                        </div>
                        {selectedItem.data.package?.makkahHotel && (
                          <div className="flex justify-between border-b border-slate-200 pb-1.5">
                            <span className="font-bold text-slate-600">Makkah Hotel:</span>
                            <span className="font-semibold text-slate-900">{selectedItem.data.package.makkahHotel.name}</span>
                          </div>
                        )}
                        {selectedItem.data.airlinePreference && (
                          <div className="flex justify-between border-b border-slate-200 pb-1.5">
                            <span className="font-bold text-slate-600">Airline Preference:</span>
                            <span className="font-semibold text-slate-900">{selectedItem.data.airlinePreference}</span>
                          </div>
                        )}
                        <div className="flex justify-between border-b border-slate-200 pb-1.5">
                          <span className="font-bold text-slate-600">Total Quoted Amount:</span>
                          <span className="font-black text-base text-blue-900">{selectedItem.data.pricing?.finalTotalFormatted}</span>
                        </div>
                      </div>

                      {/* Next Steps Guidance */}
                      <div className="bg-blue-50 p-3.5 rounded-xl border border-blue-200 text-xs text-blue-950 space-y-1">
                        <h4 className="font-extrabold text-blue-900 uppercase tracking-wider text-[10px]">
                          Official Next Steps:
                        </h4>
                        <ul className="list-disc pl-4 space-y-0.5 text-slate-700 text-[11px]">
                          <li>Our Senior Hajj & Umrah Consultant will reach out via WhatsApp / Call.</li>
                          <li>You will receive the official Saudi Nusuk Visa authorization documents & airline ticket PNR.</li>
                          <li>Visit our Head Office at <strong>60B, Green Lane, Kotahena, Colombo - 13</strong> for Ihram kit handover.</li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Appointment Pass Details */}
                      <div className="grid grid-cols-2 gap-3 text-xs bg-amber-50/60 p-3.5 rounded-xl border border-amber-200">
                        <div>
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">Client Name</span>
                          <span className="font-bold text-slate-900">{selectedItem.data.clientName || 'Valued Pilgrim'}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">Date & Time</span>
                          <span className="font-extrabold text-blue-900">{selectedItem.data.selectedDate} • {selectedItem.data.selectedSlot}</span>
                        </div>
                      </div>

                      {selectedItem.data.selectedTopic && (
                        <div className="flex justify-between border-b border-slate-200 pb-1.5 text-xs">
                          <span className="font-bold text-slate-600">Discussion Topic:</span>
                          <span className="font-extrabold text-blue-900">{selectedItem.data.selectedTopic}</span>
                        </div>
                      )}

                      <div className="bg-blue-50 p-3.5 rounded-xl border border-blue-200 text-xs text-blue-950 space-y-1">
                        <div className="font-bold">Consultation Location:</div>
                        <p className="text-slate-700">
                          Colombo Head Office: 60B, Green Lane, Kotahena, Colombo - 13 (Dedicated parking available).
                        </p>
                      </div>
                    </>
                  )}

                  {/* Letterhead Footer Contact */}
                  <div className="text-center text-[10px] text-slate-500 pt-2 border-t border-slate-200">
                    Khakiya Travels & Tours (Pvt) Ltd • 0112448155 / 6 • info@khakiya.com • www.khakiya.com
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    onClick={handlePrint}
                    className="px-5 py-2.5 bg-[#0B2545] hover:bg-blue-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-md transition-all"
                  >
                    <Printer className="w-4 h-4 text-amber-300" />
                    <span>Print / Save PDF</span>
                  </button>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:px-6 flex items-center justify-between">
          <button
            onClick={onClearAll}
            className="text-xs text-rose-600 hover:text-rose-800 font-bold flex items-center gap-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear History</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
