import React, { useState } from 'react';
import { PILGRIMAGE_STEPS } from '../data/packagesData';
import { 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  ListChecks, 
  Compass, 
  Volume2, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

export default function PilgrimageGuide({ onOpenBookingModal }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Original Passport (min 6 months validity) & Saudi eVisa printout', checked: true, category: 'Documents' },
    { id: 2, text: '2 sets of white unstitched Ihram sheets + adjustable belt (Men)', checked: true, category: 'Clothing' },
    { id: 3, text: 'Unscented soap, sunscreen, and unscented wet wipes', checked: false, category: 'Toiletries' },
    { id: 4, text: 'Comfortable walking sandals exposing ankle bones', checked: false, category: 'Footwear' },
    { id: 5, text: 'Pocket Quran / Umrah Supplication Du’a Book', checked: true, category: 'Spiritual' },
    { id: 6, text: 'Prescription medicines with doctor’s letter & basic first-aid', checked: false, category: 'Health' },
    { id: 7, text: 'Portable power bank (under 20,000mAh for airline compliance)', checked: false, category: 'Electronics' },
    { id: 8, text: 'Drawstring shoe bag for entering Haram gates', checked: true, category: 'Accessories' },
  ]);

  const activeStep = PILGRIMAGE_STEPS[activeStepIndex];

  const toggleCheckItem = (id) => {
    setChecklist(
      checklist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const completedCount = checklist.filter((i) => i.checked).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  return (
    <section id="guide" className="py-20 px-4 sm:px-8 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            <span>Spiritual Knowledge Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Step-by-Step Umrah & Hajj Rituals Guide
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Master the sacred rites of Umrah and prepare your spiritual mindset with our authentic Sunnah guide and interactive preparation checklist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 7 COLS: RITUALS STEP-BY-STEP CAROUSEL / TABS */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 space-y-6">
            
            {/* Step Navigation Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {PILGRIMAGE_STEPS.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`p-3 rounded-2xl text-left border-2 transition-all ${
                      isActive
                        ? 'border-blue-600 bg-blue-50/70 shadow-sm ring-2 ring-blue-100'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                    }`}
                  >
                    <span className={`text-[10px] font-black uppercase block ${
                      isActive ? 'text-blue-700' : 'text-slate-400'
                    }`}>
                      Step {step.step}
                    </span>
                    <span className="text-xs font-bold text-slate-800 line-clamp-1 mt-0.5">
                      {step.title.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Step Details */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                    Stage {activeStep.step} of 04 • {activeStep.subtitle}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0B2545] mt-0.5">
                    {activeStep.title}
                  </h3>
                </div>
                <div className="font-serif text-xl sm:text-2xl text-amber-700 font-bold px-3 py-1 bg-amber-50 rounded-xl border border-amber-200">
                  {activeStep.arabic}
                </div>
              </div>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {activeStep.desc}
              </p>

              {/* Sacred Invocation / Du'a Box */}
              <div className="bg-gradient-to-r from-blue-900 to-[#0B2545] text-white p-5 rounded-2xl shadow-md space-y-2">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>Sacred Invocation / Talbiyah</span>
                </div>
                <p className="text-sm font-medium italic text-blue-100 font-serif">
                  "{activeStep.talbiyah}"
                </p>
              </div>

              {/* Sunnah Tips */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Essential Scholar Sunnah Tips:</span>
                </h4>
                <div className="space-y-1.5">
                  {activeStep.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Navigator CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex(activeStepIndex - 1)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 disabled:opacity-40"
                >
                  Previous Step
                </button>

                {activeStepIndex < PILGRIMAGE_STEPS.length - 1 ? (
                  <button
                    onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-[#0B2545] text-white hover:bg-blue-800 transition-all flex items-center gap-1"
                  >
                    <span>Next Step: {PILGRIMAGE_STEPS[activeStepIndex + 1].title.split(' ')[0]}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={onOpenBookingModal}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:scale-105 transition-all shadow-md"
                  >
                    <span>Book Your Umrah Now</span>
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* RIGHT 5 COLS: INTERACTIVE PACKING CHECKLIST */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-[#0B2545] flex items-center gap-2">
                  <ListChecks className="w-5 h-5 text-blue-600" />
                  <span>Pilgrim Packing Checklist</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Interactive preparation bag checklist</p>
              </div>
              <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                {completedCount} / {checklist.length}
              </span>
            </div>

            {/* Progress Bar */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-600 mb-1.5">
                <span>Readiness Progress</span>
                <span className="text-blue-900">{progressPercent}%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {checklist.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCheckItem(item.id)}
                  className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                    item.checked
                      ? 'bg-emerald-50/50 border-emerald-200 text-slate-800'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => {}}
                    className="w-4 h-4 text-blue-600 rounded mt-0.5 shrink-0"
                  />
                  <div className="flex-1">
                    <span className={`text-xs font-semibold ${item.checked ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                      {item.text}
                    </span>
                    <div className="text-[10px] text-blue-600 font-bold mt-0.5">{item.category}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Download advice */}
            <div className="p-3.5 bg-blue-50 rounded-2xl border border-blue-200 flex items-center gap-3 text-xs text-blue-900">
              <ShieldAlert className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Complimentary printed Umrah handbook provided to all Khakiya pilgrims at Colombo office!</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
