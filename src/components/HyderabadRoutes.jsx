import React from 'react';
import { popularRoutes } from '../data/cabData';
import { Clock, ArrowRight, MapPin, Car, Bike } from 'lucide-react';
import { AutoRickshawIcon } from './VehicleIcon';

export default function HyderabadRoutes({ onSelectRoute }) {
  return (
    <section className="py-10 sm:py-14 bg-slate-50 border-t border-b border-slate-200" id="routes-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <MapPin size={13} />
            <span>POPULAR HYDERABAD CORRIDORS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit'] text-slate-900 tracking-tight">
            Transparent Fares Across Hyderabad
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Compare instant estimates for Bike, Auto, and Car on Hyderabad’s most traveled daily and airport routes.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularRoutes.map((route, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                    {route.tag}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Clock size={13} className="text-blue-600" />
                    {route.duration} ({route.distance})
                  </span>
                </div>

                {/* Path Nodes */}
                <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0"></span>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">From</span>
                      <strong className="text-xs sm:text-sm text-slate-800 font-semibold">{route.from}</strong>
                    </div>
                  </div>

                  <div className="border-l-2 border-dashed border-slate-300 ml-1.5 pl-4 h-3"></div>

                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0"></span>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">To</span>
                      <strong className="text-xs sm:text-sm text-slate-800 font-semibold">{route.to}</strong>
                    </div>
                  </div>
                </div>

                {/* Compare Bike, Auto, Car Fares using Professional SVGs */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-blue-50/60 border border-blue-100 rounded-2xl mb-5 text-center">
                  <div className="p-2 bg-white rounded-xl border border-slate-100">
                    <span className="text-[11px] font-medium text-slate-500 flex items-center justify-center gap-1 mb-1">
                      <Bike size={13} className="text-blue-600" />
                      <span>Bike</span>
                    </span>
                    <strong className="text-sm font-bold text-slate-800 font-['Outfit']">
                      ₹{route.fares.bike}
                    </strong>
                  </div>

                  <div className="p-2 bg-white rounded-xl border border-slate-100">
                    <span className="text-[11px] font-medium text-slate-500 flex items-center justify-center gap-1 mb-1">
                      <AutoRickshawIcon size={13} className="text-emerald-600" />
                      <span>Auto</span>
                    </span>
                    <strong className="text-sm font-bold text-slate-800 font-['Outfit']">
                      ₹{route.fares.auto}
                    </strong>
                  </div>

                  <div className="p-2 bg-white rounded-xl border border-amber-300 shadow-xs ring-2 ring-amber-400/20">
                    <span className="text-[11px] font-bold text-amber-800 flex items-center justify-center gap-1 mb-1">
                      <Car size={13} className="text-amber-600" />
                      <span>Car Cab</span>
                    </span>
                    <strong className="text-sm font-bold text-blue-700 font-['Outfit']">
                      ₹{route.fares.car}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Action Button - Blue, No Black */}
              <button 
                onClick={() => onSelectRoute(route)}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-md"
              >
                <span>Book This Route</span>
                <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
