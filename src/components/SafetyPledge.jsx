import React from 'react';
import { ShieldCheck, Clock, Navigation, PhoneCall, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function SafetyPledge() {
  return (
    <section className="py-10 sm:py-14 bg-white" id="safety-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card - Royal Blue Gradient (No Black) */}
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden border border-blue-400">
          
          {/* Subtle gold and blue background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5B800]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Slogans & Pillars */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-xs font-bold tracking-wider uppercase">
                <ShieldCheck size={16} className="text-[#F5B800]" />
                <span>GODEST RIDER SAFETY PLEDGE</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] tracking-tight text-white leading-tight">
                  <span>Ride Safe with </span>
                  <span className="text-[#F5B800]">GODest</span>
                </h2>

                <div className="text-xl sm:text-2xl font-bold text-amber-300">
                  Your Trusted Car, Bike & Auto Ride in Hyderabad
                </div>
              </div>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                Your safety and peace of mind are non-negotiable. Whether you ride by Car, Bike, or Auto, every GODest trip in Hyderabad is monitored 24x7 with verified captains, SOS police linkages, and zero surge pricing.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-white/20 text-[#F5B800] flex items-center justify-center flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">24x7 Availability</h4>
                    <p className="text-xs text-blue-100">Guaranteed rides for late night flights & early morning office rush.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center flex-shrink-0">
                    <Navigation size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">City • Airport • Outstation</h4>
                    <p className="text-xs text-blue-100">From city streets to state highways with crystal-clear billing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-white/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Safe • Reliable • Affordable</h4>
                    <p className="text-xs text-blue-100">Police verified drivers, clean sanitized cabs, and transparent rates.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-white/20 text-amber-300 flex items-center justify-center flex-shrink-0">
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Zero Cancellation Promise</h4>
                    <p className="text-xs text-blue-100">Captains arrive on time without asking for destination or cancelling.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Verified Badge & Helpline Card in Crisp White */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-full max-w-sm rounded-3xl bg-white text-slate-800 border-2 border-blue-200 p-6 text-center space-y-5 shadow-2xl">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-[#F5B800] to-blue-600 flex items-center justify-center shadow-md">
                  <ShieldCheck size={38} className="text-white" />
                </div>

                <div>
                  <div className="text-4xl font-bold font-['Outfit'] text-blue-700">100%</div>
                  <div className="text-sm font-bold text-amber-600 uppercase tracking-wider">
                    Police Verified Captains
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Every driver undergoes background checks & vehicle inspection.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-600 block mb-2">
                    24x7 Hyderabad Emergency & Rider Support
                  </span>
                  <a 
                    href="tel:04060007000"
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all text-sm"
                  >
                    <PhoneCall size={16} />
                    <span>040-6000-7000</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
