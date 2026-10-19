import React, { useState } from 'react';
import { allVehicles } from '../data/cabData';
import VehicleIcon, { AutoRickshawIcon } from './VehicleIcon';
import { Users, Briefcase, Zap, ShieldCheck, ArrowRight, Check, Car, Bike } from 'lucide-react';

export default function VehicleFleet({ onSelectVehicle }) {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all' 
    ? allVehicles 
    : allVehicles.filter(v => v.category === activeTab);

  return (
    <section className="py-10 sm:py-14 bg-white" id="fleet-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Car size={13} />
            <span>VEHICLES AVAILABLE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit'] text-slate-900 tracking-tight">
            Car, Bike & Auto for Every{" "}
            <span className="bg-gradient-to-r from-amber-600 via-[#F5B800] to-yellow-500 bg-clip-text text-transparent">
              Journey Across India
            </span>
          </h2>

          <p className="text-base text-slate-600">
            Choose the ride that matches your budget and timeline. Zero cancellations, transparent fares, and 100% verified captains.
          </p>

          {/* Filter Tabs using professional SVG icons */}
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'all' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-700 hover:text-blue-700'
              }`}
            >
              All Vehicles ({allVehicles.length})
            </button>
            <button 
              onClick={() => setActiveTab('car')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'car' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-700 hover:text-blue-700'
              }`}
            >
              <Car size={14} />
              <span>Cars & Cabs</span>
            </button>
            <button 
              onClick={() => setActiveTab('bike')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'bike' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-700 hover:text-blue-700'
              }`}
            >
              <Bike size={14} />
              <span>Bike Taxi</span>
            </button>
            <button 
              onClick={() => setActiveTab('auto')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'auto' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-700 hover:text-blue-700'
              }`}
            >
              <AutoRickshawIcon size={14} />
              <span>Auto Rickshaw</span>
            </button>
          </div>
        </div>

        {/* Fleet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((veh) => {
            const isFeatured = veh.id === 'car_ev_suv';
            return (
              <div 
                key={veh.id}
                className={`relative bg-white rounded-3xl p-5 transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isFeatured 
                    ? 'border-2 border-[#F5B800] shadow-xl ring-4 ring-[#F5B800]/10' 
                    : 'border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300'
                }`}
              >
                {/* Poster Badge on featured vehicle */}
                {veh.highlight && (
                  <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 bg-[#F5B800] text-slate-950 font-bold text-[10px] px-2.5 py-0.5 rounded-full shadow-md uppercase tracking-wider">
                    <Zap size={11} /> {veh.highlight}
                  </div>
                )}

                <div>
                  {/* Photo Thumbnail from generated assets */}
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                    <img 
                      src={veh.photoUrl || '/images/godest_charminar_taxi_hero_a.png'} 
                      alt={veh.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 bg-[#0D111A]/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[11px] font-bold flex items-center gap-1.5">
                      <VehicleIcon category={veh.category} id={veh.id} size={14} />
                      <span>{veh.categoryName}</span>
                    </div>
                  </div>

                  {/* Title & ETA */}
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
                      {veh.name}
                    </h3>
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Zap size={11} className="text-blue-600 fill-blue-600" />
                      <span>{veh.eta}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mb-4">
                    {veh.subtitle}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 bg-slate-50 rounded-xl mb-4 text-xs text-slate-700 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Users size={15} className="text-blue-600" />
                      <span>{veh.seats} {veh.seats === 1 ? 'Seat' : 'Seats'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase size={15} className="text-blue-600" />
                      <span>{veh.bags} Bag(s)</span>
                    </div>
                  </div>

                  {/* Pricing Details */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 border border-slate-100 rounded-xl mb-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Base Fare</span>
                      <strong className="text-sm text-slate-900 font-['Outfit']">₹{veh.baseFare}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Distance Rate</span>
                      <strong className="text-sm text-blue-700 font-['Outfit']">₹{veh.perKm}/km</strong>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-1.5 text-xs text-slate-600 mb-5">
                    <div className="flex items-center gap-2">
                      <Check size={13} className="text-emerald-600 flex-shrink-0" />
                      <span>Model: <strong>{veh.example}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={13} className="text-emerald-600 flex-shrink-0" />
                      <span>Zero Surge Guaranteed</span>
                    </div>
                  </div>
                </div>

                {/* Book Action */}
                <button 
                  onClick={() => onSelectVehicle(veh.id)}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs transition-all shadow-sm ${
                    isFeatured 
                      ? 'bg-[#F5B800] hover:bg-[#E5A800] text-slate-950' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  <span>Select & Book {veh.categoryName}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
