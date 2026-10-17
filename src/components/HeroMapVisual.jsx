import React from 'react';
import VehicleIcon from './VehicleIcon';
import { MapPin, Navigation, ShieldCheck, Clock, Users, Zap, Compass, CheckCircle2, Landmark, Star } from 'lucide-react';

export default function HeroMapVisual({ activeVehicle, pickup, drop, estimate }) {
  return (
    <div className="relative w-full rounded-3xl bg-white text-slate-800 p-6 shadow-xl border-2 border-blue-200 overflow-hidden">
      
      {/* Background Subtle Map Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-map-light" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2563EB" strokeWidth="1" strokeDasharray="2,4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-map-light)" />
        </svg>
      </div>

      {/* Radiant glow spots in soft gold and blue */}
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-amber-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-blue-200/40 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="font-['Outfit'] font-bold text-xs tracking-wider text-blue-900 uppercase">
            HYDERABAD LIVE FLEET RADAR
          </span>
        </div>
        <span className="text-[11px] font-bold text-blue-800 bg-amber-100 border border-amber-300 px-2.5 py-1 rounded-full">
          3,800+ Active Rides
        </span>
      </div>

      {/* Simulated Live Route Map Board */}
      <div className="relative z-10 my-5 p-5 rounded-2xl bg-blue-50/60 border border-blue-100 shadow-sm">
        
        {/* City Skyline Silhouette & Landmarks */}
        <div className="flex items-center justify-between mb-4 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <Landmark size={14} className="text-amber-600" />
            <span className="font-semibold text-slate-800">Charminar • Hitec City • Airport</span>
          </div>
          <span className="text-blue-700 font-mono text-[11px] font-semibold">GPS Active • 4G Link</span>
        </div>

        {/* Route Graph Display */}
        <div className="space-y-4">
          {/* Pickup Node */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center flex-shrink-0 text-xs font-bold shadow-sm">
              A
            </div>
            <div className="flex-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 block tracking-wider">Pickup Point</span>
              <strong className="text-xs sm:text-sm text-slate-900 font-semibold line-clamp-1">{pickup}</strong>
            </div>
            <span className="text-xs text-emerald-800 font-bold bg-emerald-100 px-2.5 py-0.5 rounded-lg border border-emerald-300">
              {activeVehicle.eta} ETA
            </span>
          </div>

          {/* Dotted Route Connector with Animated Moving Vehicle */}
          <div className="relative pl-4">
            <div className="border-l-2 border-dashed border-blue-400 h-10 ml-0.5"></div>
            
            {/* Animated vehicle badge hovering along the path */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-3.5 bg-gradient-to-r from-[#F5B800] to-amber-400 text-blue-950 p-1.5 rounded-full shadow-md border border-amber-300 flex items-center gap-1.5 animate-bounce">
              <VehicleIcon category={activeVehicle.category} id={activeVehicle.id} size={14} />
              <span className="text-[10px] font-bold pr-1 hidden sm:inline">{activeVehicle.name}</span>
            </div>
          </div>

          {/* Drop Node */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-rose-100 border border-rose-300 text-rose-700 flex items-center justify-center flex-shrink-0 text-xs font-bold shadow-sm">
              B
            </div>
            <div className="flex-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 block tracking-wider">Destination</span>
              <strong className="text-xs sm:text-sm text-slate-900 font-semibold line-clamp-1">{drop}</strong>
            </div>
            <span className="text-xs text-blue-800 font-bold bg-blue-100 px-2.5 py-0.5 rounded-lg border border-blue-300">
              {estimate.distance} km
            </span>
          </div>
        </div>

      </div>

      {/* Live Vehicle Stats Card */}
      <div className="relative z-10 grid grid-cols-3 gap-2 text-center text-xs mb-5">
        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
          <span className="text-slate-500 block text-[10px] uppercase font-semibold">Vehicle Selected</span>
          <strong className="text-slate-900 font-bold block mt-0.5 text-xs sm:text-sm">{activeVehicle.name}</strong>
          <span className="text-[10px] text-blue-700 font-semibold">{activeVehicle.categoryName}</span>
        </div>

        <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200">
          <span className="text-slate-600 block text-[10px] uppercase font-semibold">Estimated Fare</span>
          <strong className="text-blue-700 font-bold block mt-0.5 text-base sm:text-lg font-['Outfit']">
            ₹{estimate.totalFare}
          </strong>
          <span className="text-[10px] text-emerald-700 font-bold">Zero Surge</span>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
          <span className="text-slate-500 block text-[10px] uppercase font-semibold">Pickup Time</span>
          <strong className="text-blue-700 font-bold block mt-0.5 text-xs sm:text-sm">{activeVehicle.eta}</strong>
          <span className="text-[10px] text-slate-500">Nearest Captain</span>
        </div>
      </div>

      {/* Hyderabad Landmark Highlights Banner */}
      <div className="relative z-10 p-4 rounded-2xl bg-gradient-to-r from-blue-50 via-amber-50 to-blue-50 border border-blue-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#F5B800] text-blue-950 flex items-center justify-center font-bold text-xl shadow-sm">
            GD
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Ride Safe with GODest</h4>
            <p className="text-[11px] text-slate-600">Hyderabad's Trusted Car • Bike • Auto Ride</p>
          </div>
        </div>

        <div className="text-right">
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-300">
            <ShieldCheck size={13} className="text-emerald-700" />
            <span>100% Safe</span>
          </span>
        </div>
      </div>

      {/* Floating Mini Feature Badges with Professional Lucide Icons */}
      <div className="relative z-10 grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-700 text-center font-semibold">
        <div className="flex items-center justify-center gap-1.5">
          <Star size={13} className="text-amber-500 fill-amber-500" />
          <span>24x7 Available</span>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <MapPin size={13} className="text-blue-600" />
          <span>City & Airport</span>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <ShieldCheck size={13} className="text-emerald-600" />
          <span>Affordable</span>
        </div>
      </div>

    </div>
  );
}
