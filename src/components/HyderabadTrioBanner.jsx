import React, { useState } from 'react';
import { Car, Bike, Sparkles, ShieldCheck, ArrowRight, Clock, CheckCircle2, Zap, Star, MapPin, PhoneCall, Headphones } from 'lucide-react';
import { AutoRickshawIcon } from './VehicleIcon';

export default function HyderabadTrioBanner({ onSelectCategory }) {
  const [selectedPersona, setSelectedPersona] = useState('all'); // 'all' | 'rush' | 'errands' | 'airport'

  const handleBook = (category) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    } else {
      const el = document.getElementById('book-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const personaFilters = [
    { id: 'all', label: 'All 3 Ride Modes' },
    { id: 'rush', label: 'Daily Office Rush', targetCategory: 'bike' },
    { id: 'errands', label: 'Local Market & Errands', targetCategory: 'auto' },
    { id: 'airport', label: 'Airport & Family Trip', targetCategory: 'car' }
  ];

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200" id="trio-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles size={13} className="text-[#F5B800]" />
            <span>HYDERABAD'S 3-IN-1 MOBILITY NETWORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] text-slate-900 tracking-tight leading-tight">
            Three Ways to Move <span className="text-blue-600">Hyderabad</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto">
            Choose the ride that matches your route, budget, and timing. 100% verified captains, transparent digital meters, and zero surge pricing across Cyberabad, Old City, and Secunderabad.
          </p>

          {/* Persona Filter Chips */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {personaFilters.map((tab) => {
              const isActive = selectedPersona === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedPersona(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/20'
                      : 'bg-white text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Side-by-Side Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* CARD 1: GODest Moto (Bike Taxi) */}
          <div 
            className={`bg-white rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-md hover:shadow-xl ${
              selectedPersona === 'rush' 
                ? 'border-blue-600 ring-2 ring-blue-500/30 -translate-y-1' 
                : 'border-slate-200/90 hover:border-blue-300'
            }`}
          >
            {/* Visual Banner */}
            <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
              <img 
                src="/images/godest_hitec_city_mobility_trio_b.png" 
                alt="GODest Moto Bike Taxi in Hyderabad"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Top Tag */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl shadow-sm border border-slate-200 text-slate-900 text-xs font-bold flex items-center gap-1.5">
                <Zap size={13} className="text-amber-500" />
                <span>Fastest in Traffic</span>
              </div>

              {/* ETA Badge */}
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-sm border border-slate-200 text-slate-900 text-xs font-bold flex items-center gap-1">
                <Clock size={12} className="text-blue-600" />
                <span>~2 min pickup</span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                      <Bike size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg font-['Outfit']">
                        GODest Moto
                      </h3>
                      <p className="text-[11px] text-blue-700 font-semibold">Fast Solo Commute</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-lg font-bold text-slate-900 font-['Outfit'] block leading-none">
                      Starts ₹25
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">₹7 / km</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                  Zips past Cyber Towers, Madhapur, and Gachibowli rush hours. The fastest way to beat Hyderabad bottlenecks.
                </p>

                {/* Features */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Free sanitized safety helmet for every rider</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Zero surge pricing even during peak rain hours</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Rapid 2-minute captain dispatch across all hubs</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleBook('bike')}
                className="w-full mt-4 flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-blue-950 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <span>Book Bike Taxi</span>
                <ArrowRight size={15} />
              </button>

            </div>
          </div>

          {/* CARD 2: GODest Auto (Metered Rickshaw) */}
          <div 
            className={`bg-white rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-md hover:shadow-xl ${
              selectedPersona === 'errands' 
                ? 'border-amber-400 ring-2 ring-amber-400/40 -translate-y-1' 
                : 'border-slate-200/90 hover:border-amber-300'
            }`}
          >
            {/* Visual Banner */}
            <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
              <img 
                src="/images/godest_auto_rickshaw_product_a.png" 
                alt="GODest Auto Rickshaw in Hyderabad"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Top Tag */}
              <div className="absolute top-3 left-3 bg-amber-100/95 backdrop-blur-md px-3 py-1 rounded-xl shadow-sm border border-amber-300 text-amber-950 text-xs font-bold flex items-center gap-1.5">
                <Star size={13} className="text-amber-600 fill-amber-600" />
                <span>Hyderabad Favorite</span>
              </div>

              {/* ETA Badge */}
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-sm border border-slate-200 text-slate-900 text-xs font-bold flex items-center gap-1">
                <Clock size={12} className="text-blue-600" />
                <span>~3 min pickup</span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                      <AutoRickshawIcon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg font-['Outfit']">
                        GODest Auto
                      </h3>
                      <p className="text-[11px] text-amber-800 font-semibold">Metered 3-Seater</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-lg font-bold text-slate-900 font-['Outfit'] block leading-none">
                      Starts ₹35
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">Digital Meter</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                  Doorstep pickup for up to 3 passengers. 100% digital meter with zero street haggling or driver refusals.
                </p>

                {/* Features */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Strictly digital meter tariffs matched to RTA norms</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Comfortable 3-passenger seating with shopping bag space</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>No bargaining required — exact fare calculated in-app</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleBook('auto')}
                className="w-full mt-4 flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-blue-950 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <span>Book Metered Auto</span>
                <ArrowRight size={15} />
              </button>

            </div>
          </div>

          {/* CARD 3: GODest Prime Cabs & Electric SUV */}
          <div 
            className={`bg-white rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-md hover:shadow-xl ${
              selectedPersona === 'airport' 
                ? 'border-blue-600 ring-2 ring-blue-500/30 -translate-y-1' 
                : 'border-slate-200/90 hover:border-blue-300'
            }`}
          >
            {/* Visual Banner */}
            <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
              <img 
                src="/images/godest_electric_suv_studio_a.png" 
                alt="GODest Electric SUV and AC Cabs"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Top Tag */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl shadow-sm border border-slate-200 text-slate-900 text-xs font-bold flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-emerald-600" />
                <span>100% Chilled AC</span>
              </div>

              {/* ETA Badge */}
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-sm border border-slate-200 text-slate-900 text-xs font-bold flex items-center gap-1">
                <Clock size={12} className="text-blue-600" />
                <span>~4 min pickup</span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                      <Car size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg font-['Outfit']">
                        GODest Prime Cabs
                      </h3>
                      <p className="text-[11px] text-blue-700 font-semibold">Electric SUV & AC Sedans</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-lg font-bold text-slate-900 font-['Outfit'] block leading-none">
                      Starts ₹89
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">Large Boot</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                  Spacious air-conditioned sedans and silent electric SUVs with ample trunk space for airport suitcases and family travel.
                </p>

                {/* Features */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Guaranteed 100% AC operation without extra surcharges</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Zero driver cancellation guarantee for scheduled rides</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Fixed flat airport rates to RGIA Shamshabad</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleBook('car')}
                className="w-full mt-4 flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-blue-950 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <span>Book AC Cab</span>
                <ArrowRight size={15} />
              </button>

            </div>
          </div>

        </div>

        {/* Bottom Trust Pillars Ribbon */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center flex-shrink-0 border border-amber-200">
              <Zap size={18} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 font-['Outfit']">Zero Surge Pricing</h4>
              <p className="text-[11px] text-slate-500 font-medium">Transparent fares 24x7</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 border border-emerald-200">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 font-['Outfit']">Verified Captains</h4>
              <p className="text-[11px] text-slate-500 font-medium">Police verified & trained</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-200">
              <MapPin size={18} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 font-['Outfit']">Live GPS & SOS</h4>
              <p className="text-[11px] text-slate-500 font-medium">Hyderabad police integrated</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center flex-shrink-0 border border-purple-200">
              <Headphones size={18} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 font-['Outfit']">Call to Book 24x7</h4>
              <p className="text-[11px] text-slate-500 font-medium">+91 91212 91212</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
