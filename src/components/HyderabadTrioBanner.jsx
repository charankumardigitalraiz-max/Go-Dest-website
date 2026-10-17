import React, { useState } from 'react';
import { 
  Car, 
  Bike, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Zap, 
  MapPin, 
  PhoneCall, 
  Building2, 
  Landmark 
} from 'lucide-react';
import { AutoRickshawIcon } from './VehicleIcon';

export default function HyderabadTrioBanner({ onSelectCategory }) {
  const [activeHub, setActiveHub] = useState('hitec'); // 'hitec' | 'charminar'

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

  const hubData = {
    hitec: {
      tag: 'Cyberabad IT Corridor',
      title: 'Connecting Cyber Towers, Madhapur & Gachibowli',
      desc: 'Beat peak tech rush hours with rapid bike taxis, metered autos, and chilled AC cabs stationed at every major IT park.',
      image: '/images/godest_hitec_city_mobility_trio_a.png',
      location: 'HITEC City • Cyber Towers • Mindspace • Financial District',
      stat: '3,800+ Active Captains'
    },
    charminar: {
      tag: 'Heritage & Old City Corridor',
      title: 'Connecting Charminar, Secunderabad & Airport',
      desc: 'Seamless travel from historic monuments and bazaar lanes to Rajiv Gandhi International Airport with zero surge pricing.',
      image: '/images/godest_charminar_taxi_hero_a.png',
      location: 'Charminar • Secunderabad • Begumpet • RGIA Airport',
      stat: '100% Digital Metering'
    }
  };

  const currentHub = hubData[activeHub];

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-white via-slate-50/70 to-white border-b border-slate-200" id="trio-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          
          {/* Banner Top Header */}
          <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={13} className="text-[#F5B800]" />
                <span>HYDERABAD'S 3-IN-1 MOBILITY NETWORK</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Outfit'] text-slate-900 tracking-tight leading-tight">
                Ride Safe with GODest • Move to Destination
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm font-medium">
                Car Cabs, Bike Taxi & Metered Auto Rickshaw — all in one single app with zero surge pricing.
              </p>
            </div>

            {/* Hub Switcher Toggle */}
            <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl self-start md:self-auto flex-shrink-0">
              <button
                onClick={() => setActiveHub('hitec')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeHub === 'hitec'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-blue-700'
                }`}
              >
                <Building2 size={14} />
                <span>Cyber Towers & IT Hub</span>
              </button>

              <button
                onClick={() => setActiveHub('charminar')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeHub === 'charminar'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-blue-700'
                }`}
              >
                <Landmark size={14} />
                <span>Charminar & Heritage Hub</span>
              </button>
            </div>
          </div>

          {/* Panoramic Visual Stage */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-100 group">
            <img 
              src={currentHub.image} 
              alt={currentHub.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />
            
            {/* Subtle Gradient Framing */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/10 pointer-events-none"></div>

            {/* Floating Top Left Pill */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-slate-200 text-slate-900 text-xs font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{currentHub.stat}</span>
            </div>

            {/* Floating Top Right Pill */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-slate-200 text-slate-900 text-xs font-bold flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>Zero Surge Guaranteed</span>
            </div>

            {/* Bottom Photo Overlay Information */}
            <div className="absolute bottom-4 left-4 right-4 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div className="max-w-xl drop-shadow-md">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                  {currentHub.tag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-['Outfit'] text-white">
                  {currentHub.title}
                </h3>
                <p className="text-xs text-slate-200 font-medium hidden sm:block mt-0.5">
                  {currentHub.location}
                </p>
              </div>

              <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 text-slate-900 text-xs font-bold shadow-md self-start sm:self-auto">
                <Clock size={13} className="text-blue-600" />
                <span>Pickup in 2-4 Mins</span>
              </div>
            </div>
          </div>

          {/* 3-Pillar Mobility Bar (Car, Bike, Auto) */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-white">
            
            {/* PILLAR 1: Bike Taxi */}
            <div className="p-5 sm:p-6 flex flex-col justify-between space-y-3 hover:bg-slate-50/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <Bike size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base font-['Outfit']">
                      GODest Moto
                    </h4>
                    <p className="text-[11px] text-blue-700 font-semibold">Fast Solo Commute</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-base font-bold text-slate-900 font-['Outfit'] block leading-none">
                    Starts ₹25
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">₹7 / km</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Zips past Cyber Towers & Mindspace rush hour bottlenecks. Includes free sanitized helmet with rapid 2-minute dispatch.
              </p>

              <button
                onClick={() => handleBook('bike')}
                className="w-full flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-blue-950 font-bold py-2.5 px-3 rounded-xl text-xs shadow-xs hover:shadow-sm transition-all cursor-pointer"
              >
                <span>Book Bike Taxi</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* PILLAR 2: Auto Rickshaw */}
            <div className="p-5 sm:p-6 flex flex-col justify-between space-y-3 bg-amber-50/30 hover:bg-amber-50/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center border border-amber-200">
                    <AutoRickshawIcon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base font-['Outfit']">
                      GODest Auto
                    </h4>
                    <p className="text-[11px] text-amber-800 font-semibold">Metered 3-Seater</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-base font-bold text-slate-900 font-['Outfit'] block leading-none">
                    Starts ₹35
                  </span>
                  <span className="text-[10px] text-amber-800 font-medium">Digital Meter</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Zero street haggling, zero driver refusals. Strict digital meter fares with comfortable seating for up to 3 passengers.
              </p>

              <button
                onClick={() => handleBook('auto')}
                className="w-full flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-blue-950 font-bold py-2.5 px-3 rounded-xl text-xs shadow-xs hover:shadow-sm transition-all cursor-pointer"
              >
                <span>Book Metered Auto</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* PILLAR 3: AC Cabs */}
            <div className="p-5 sm:p-6 flex flex-col justify-between space-y-3 hover:bg-slate-50/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <Car size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base font-['Outfit']">
                      GODest Prime Cabs
                    </h4>
                    <p className="text-[11px] text-blue-700 font-semibold">Electric SUV & Sedans</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-base font-bold text-slate-900 font-['Outfit'] block leading-none">
                    Starts ₹89
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">Large Boot</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                100% chilled AC guaranteed with spacious trunks for airport suitcases and zero driver cancellation guarantee.
              </p>

              <button
                onClick={() => handleBook('car')}
                className="w-full flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-blue-950 font-bold py-2.5 px-3 rounded-xl text-xs shadow-xs hover:shadow-sm transition-all cursor-pointer"
              >
                <span>Book AC Cab</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

          {/* Bottom Trust & Contact Ribbon */}
          <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span>Zero Surge Pricing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span>100% Digital Meter</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span>Verified Captains</span>
              </div>
            </div>

            <a
              href="tel:+919121291212"
              className="flex items-center gap-2 text-slate-800 hover:text-blue-700 font-bold"
            >
              <PhoneCall size={14} className="text-blue-600" />
              <span>Call to Book: +91 91212 91212</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
