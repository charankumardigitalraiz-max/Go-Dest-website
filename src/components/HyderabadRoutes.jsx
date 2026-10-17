import React, { useState } from 'react';
import { popularRoutes } from '../data/cabData';
import { 
  Clock, 
  ArrowRight, 
  MapPin, 
  Car, 
  Bike, 
  Plane, 
  Building2, 
  Train, 
  Landmark, 
  Navigation, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  PhoneCall, 
  Compass,
  Sparkles
} from 'lucide-react';
import { AutoRickshawIcon } from './VehicleIcon';

export default function HyderabadRoutes({ onSelectRoute }) {
  const [activeFilter, setActiveFilter] = useState('all');
  // Track selected vehicle mode for each route: 'car' | 'bike' | 'auto'
  const [selectedModes, setSelectedModes] = useState({
    0: 'car',
    1: 'auto',
    2: 'bike',
    3: 'car'
  });

  const getCorridorIcon = (tag) => {
    switch (tag) {
      case 'Airport Corridor':
        return <Plane size={13} className="text-blue-600" />;
      case 'IT Express':
        return <Building2 size={13} className="text-purple-600" />;
      case 'Daily Commute':
        return <Train size={13} className="text-emerald-600" />;
      case 'City Heritage':
        return <Landmark size={13} className="text-amber-600" />;
      default:
        return <Navigation size={13} className="text-blue-600" />;
    }
  };

  const getExpresswayName = (tag) => {
    switch (tag) {
      case 'Airport Corridor':
        return 'PVNR Elevated Expressway (Toll Covered)';
      case 'IT Express':
        return 'Hitec City Bypass & Cyberabad Flyovers';
      case 'Daily Commute':
        return 'Begumpet & Gachibowli Non-Stop Link';
      case 'City Heritage':
        return 'Panjagutta & Charminar Heritage Corridor';
      default:
        return 'Fastest Traffic-Optimized Route';
    }
  };

  const handleModeChange = (routeIdx, mode) => {
    setSelectedModes(prev => ({
      ...prev,
      [routeIdx]: mode
    }));
  };

  const filteredRoutes = popularRoutes.filter((route) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'airport') return route.tag === 'Airport Corridor';
    if (activeFilter === 'it') return route.tag === 'IT Express';
    if (activeFilter === 'commute') return route.tag === 'Daily Commute' || route.tag === 'City Heritage';
    return true;
  });

  const modeDetails = {
    bike: {
      name: 'Bike Taxi',
      icon: Bike,
      color: 'text-blue-600',
      tag: 'Fastest Solo',
      perk: 'Free sanitized helmet • Zips through peak rush hours'
    },
    auto: {
      name: 'Metered Auto',
      icon: AutoRickshawIcon,
      color: 'text-amber-800',
      tag: 'Up to 3 Seats',
      perk: 'Strict digital meter tariff • Zero street haggling'
    },
    car: {
      name: 'Prime AC Cab',
      icon: Car,
      color: 'text-blue-600',
      tag: '100% Chilled AC',
      perk: 'Large luggage trunk • Zero driver cancellations'
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-white via-slate-50 to-white border-t border-b border-slate-200" id="routes-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-wider shadow-xs">
            <MapPin size={13} className="text-blue-600" />
            <span>HYDERABAD CORRIDORS & FARES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] text-slate-900 tracking-tight leading-tight">
            Transparent Fares Across <span className="text-blue-600">Hyderabad</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto">
            Compare instant estimates for Bike Taxi, Metered Auto, and AC Cabs on Hyderabad’s most traveled business, heritage, and airport corridors.
          </p>

          {/* Corridor Filter Tabs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/20'
                  : 'bg-white text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              All Corridors ({popularRoutes.length})
            </button>
            <button
              onClick={() => setActiveFilter('airport')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'airport'
                  ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/20'
                  : 'bg-white text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              <Plane size={13} />
              <span>Airport Express</span>
            </button>
            <button
              onClick={() => setActiveFilter('it')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'it'
                  ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/20'
                  : 'bg-white text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              <Building2 size={13} />
              <span>IT & Cyber Towers</span>
            </button>
            <button
              onClick={() => setActiveFilter('commute')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'commute'
                  ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/20'
                  : 'bg-white text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              <Landmark size={13} />
              <span>City Heritage & Railway</span>
            </button>
          </div>
        </div>

        {/* Dynamic 2-Column Responsive Route Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {filteredRoutes.map((route, idx) => {
            const currentMode = selectedModes[idx] || 'car';
            const fare = route.fares[currentMode];
            const details = modeDetails[currentMode];

            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 group"
              >
                <div>
                  
                  {/* Card Header: Tag & Duration Badge */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200 px-3 py-1 rounded-full shadow-xs">
                      {getCorridorIcon(route.tag)}
                      <span>{route.tag}</span>
                    </span>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <Clock size={13} className="text-blue-600" />
                      <span>{route.duration}</span>
                      <span>•</span>
                      <span className="font-bold text-slate-900">{route.distance}</span>
                    </div>
                  </div>

                  {/* Visual Connected Transit Waypoints */}
                  <div className="my-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5">
                    
                    {/* Origin */}
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex flex-col items-center">
                        <span className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100 flex-shrink-0"></span>
                        <div className="w-0.5 h-7 bg-slate-200 my-0.5"></div>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Pickup Location</span>
                        <h4 className="text-sm font-bold text-slate-900 font-['Outfit']">{route.from}</h4>
                      </div>
                    </div>

                    {/* Destination */}
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex flex-col items-center">
                        <span className="w-3 h-3 rounded-full bg-red-500 ring-4 ring-red-100 flex-shrink-0"></span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Drop Destination</span>
                        <h4 className="text-sm font-bold text-slate-900 font-['Outfit']">{route.to}</h4>
                      </div>
                    </div>

                    {/* Expressway Corridor Info */}
                    <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                      <Compass size={12} className="text-blue-600 flex-shrink-0" />
                      <span>Via {getExpresswayName(route.tag)}</span>
                    </div>
                  </div>

                  {/* Interactive 3-Way Mode Comparator */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Select Vehicle to Compare Fares:
                    </span>

                    <div className="grid grid-cols-3 gap-2">
                      
                      {/* Bike Option */}
                      <button
                        type="button"
                        onClick={() => handleModeChange(idx, 'bike')}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          currentMode === 'bike'
                            ? 'bg-blue-50/80 border-blue-600 shadow-xs ring-2 ring-blue-600/20'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className="text-[11px] font-semibold text-slate-600 flex items-center justify-center gap-1 mb-0.5">
                          <Bike size={13} className="text-blue-600" />
                          <span>Bike</span>
                        </span>
                        <strong className="text-sm sm:text-base font-bold text-slate-900 font-['Outfit'] block leading-none">
                          ₹{route.fares.bike}
                        </strong>
                      </button>

                      {/* Auto Option */}
                      <button
                        type="button"
                        onClick={() => handleModeChange(idx, 'auto')}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          currentMode === 'auto'
                            ? 'bg-amber-50/80 border-amber-500 shadow-xs ring-2 ring-amber-500/20'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className="text-[11px] font-semibold text-slate-600 flex items-center justify-center gap-1 mb-0.5">
                          <AutoRickshawIcon size={13} className="text-amber-700" />
                          <span>Auto</span>
                        </span>
                        <strong className="text-sm sm:text-base font-bold text-slate-900 font-['Outfit'] block leading-none">
                          ₹{route.fares.auto}
                        </strong>
                      </button>

                      {/* Car Option */}
                      <button
                        type="button"
                        onClick={() => handleModeChange(idx, 'car')}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          currentMode === 'car'
                            ? 'bg-blue-50/80 border-blue-600 shadow-xs ring-2 ring-blue-600/20'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className="text-[11px] font-semibold text-slate-600 flex items-center justify-center gap-1 mb-0.5">
                          <Car size={13} className="text-blue-600" />
                          <span>AC Cab</span>
                        </span>
                        <strong className="text-sm sm:text-base font-bold text-slate-900 font-['Outfit'] block leading-none">
                          ₹{route.fares.car}
                        </strong>
                      </button>

                    </div>

                    {/* Active Mode Perk Banner */}
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0" />
                      <span>{details.perk}</span>
                    </div>

                  </div>

                </div>

                {/* Primary Booking Trigger */}
                <button
                  type="button"
                  onClick={() => onSelectRoute(route, currentMode)}
                  className="w-full flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-blue-950 font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Book {details.name} for This Route • ₹{fare}</span>
                  <ArrowRight size={15} />
                </button>

              </div>
            );
          })}
        </div>

        {/* Bottom Trust & Fare Guarantee Ribbon */}
        <div className="mt-8 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-700">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-1.5">
              <Zap size={15} className="text-amber-500" />
              <span>Zero Surge Pricing Locked</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-emerald-600" />
              <span>100% Digital Meter Transparency</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Plane size={15} className="text-blue-600" />
              <span>Fixed Airport Flat Rates</span>
            </div>
          </div>

          <a
            href="tel:+919121291212"
            className="flex items-center gap-2 text-slate-900 hover:text-blue-700 font-bold"
          >
            <PhoneCall size={14} className="text-blue-600" />
            <span>Need Custom Route? Call +91 91212 91212</span>
          </a>
        </div>

      </div>
    </section>
  );
}
