import React, { useState, useEffect } from 'react';
import { allVehicles } from '../data/cabData';
import VehicleIcon, { AutoRickshawIcon } from './VehicleIcon';
import { 
  Car, 
  Bike,
  Plane, 
  Compass, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Star,
  Building2,
  Landmark,
  Train,
  ArrowUpDown,
  MapPin
} from 'lucide-react';

export default function Hero({ onStartBooking, selectedPreRoute, selectedPreCategory }) {
  const [vehicleCategory, setVehicleCategory] = useState('car'); // 'car' | 'bike' | 'auto'
  const [rideType, setRideType] = useState('city');
  const [pickup, setPickup] = useState('Hitec City (Cyber Towers / Mindspace)');
  const [drop, setDrop] = useState('Rajiv Gandhi International Airport (RGIA)');
  const [selectedVehicleId, setSelectedVehicleId] = useState('car_ev_suv');

  // React to pre-selected route if passed
  useEffect(() => {
    if (selectedPreRoute) {
      setPickup(selectedPreRoute.from);
      setDrop(selectedPreRoute.to);
    }
  }, [selectedPreRoute]);

  // React to pre-selected category (car, bike, auto)
  useEffect(() => {
    if (selectedPreCategory) {
      handleCategorySelect(selectedPreCategory);
    }
  }, [selectedPreCategory]);

  const handleCategorySelect = (category) => {
    setVehicleCategory(category);
    if (category === 'bike') {
      setSelectedVehicleId('bike_moto');
    } else if (category === 'auto') {
      setSelectedVehicleId('auto_rickshaw');
    } else {
      setSelectedVehicleId('car_ev_suv');
    }
  };

  const displayedVehicles = allVehicles.filter(v => v.category === vehicleCategory);
  const activeVehicle = allVehicles.find(v => v.id === selectedVehicleId) || displayedVehicles[0] || allVehicles[0];

  // Dynamic fare calculation
  const calculateEstimate = (veh = activeVehicle) => {
    let distanceKm = 24;
    if (pickup.includes('Airport') || drop.includes('Airport')) {
      distanceKm = 34;
    } else if (pickup.includes('Srisailam') || drop.includes('Srisailam')) {
      distanceKm = 215;
    } else if (pickup.includes('Vijayawada') || drop.includes('Vijayawada')) {
      distanceKm = 275;
    } else if (pickup.includes('Charminar') && drop.includes('Jubilee')) {
      distanceKm = 16;
    } else if (pickup.includes('Kukatpally') && drop.includes('Financial')) {
      distanceKm = 15;
    }

    const base = veh.baseFare;
    const perKm = veh.perKm;
    const total = base + (distanceKm * perKm);
    return {
      distance: distanceKm,
      totalFare: Math.round(total),
      eta: veh.eta
    };
  };

  const currentEstimate = calculateEstimate(activeVehicle);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    onStartBooking({
      rideType,
      pickup,
      drop,
      vehicle: activeVehicle,
      estimate: currentEstimate
    });
  };

  const swapLocations = () => {
    const temp = pickup;
    setPickup(drop);
    setDrop(temp);
  };

  // Dynamic photo matching active mode
  const getHeroImage = () => {
    if (vehicleCategory === 'auto') {
      return '/images/godest_auto_rickshaw_product_a.png';
    } else if (vehicleCategory === 'bike') {
      return '/images/godest_hitec_city_mobility_trio_a.png';
    }
    return '/images/godest_charminar_taxi_hero_a.png';
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/30 via-white to-slate-50/40 pt-6 pb-8 lg:pt-8 lg:pb-10" id="book-section">
      
      {/* Decorative Golden Road Speed Lines (Inspired by template.jpeg) */}
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full opacity-25 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
          <circle cx="650" cy="200" r="280" fill="url(#yellowGlow)" />
          <path d="M400 -50 L750 650 M450 -50 L800 650 M500 -50 L850 650" stroke="#F5B800" strokeWidth="12" strokeDasharray="30 20" opacity="0.3" />
          <defs>
            <radialGradient id="yellowGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(650 200) rotate(90) scale(280)">
              <stop stopColor="#F5B800" stopOpacity="0.3" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Section Header - Balances the 2 columns perfectly */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-300 shadow-sm text-xs font-bold text-slate-800">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5B800] animate-ping"></span>
            <span>HYDERABAD'S PREMIER MOBILITY PLATFORM</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] text-slate-900 tracking-tight leading-tight">
            <span>Ride Safe with </span>
            <span className="text-[#F5B800] px-1 inline-block">GODest</span>
          </h1>

          <div className="text-xl sm:text-2xl font-bold text-blue-700 font-['Outfit']">
            GODest Move to Destination
          </div>

          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Reliable 24x7 Car Cabs, Bike Taxis, and Auto Rickshaws with 100% verified captains and zero surge pricing.
          </p>
        </div>

        {/* 2 Equal-Height Balanced Columns (items-stretch) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT: Unified Ride Booking Card (6 Cols - Height Balanced) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-200/90 flex flex-col justify-between">
            
            <div className="space-y-4">
              {/* Category Selector Tabs */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-2xl">
                <button
                  type="button"
                  onClick={() => handleCategorySelect('car')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    vehicleCategory === 'car'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-blue-700 hover:bg-slate-200/50'
                  }`}
                >
                  <Car size={15} />
                  <span>Car Cabs</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleCategorySelect('bike')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    vehicleCategory === 'bike'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-blue-700 hover:bg-slate-200/50'
                  }`}
                >
                  <Bike size={15} />
                  <span>Bike Taxi</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleCategorySelect('auto')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    vehicleCategory === 'auto'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-blue-700 hover:bg-slate-200/50'
                  }`}
                >
                  <AutoRickshawIcon size={15} />
                  <span>Auto Meter</span>
                </button>
              </div>

              {/* Service Corridor Pills */}
              <div className="flex items-center gap-2 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setRideType('city')}
                  className={`px-3 py-1 rounded-xl transition-all ${
                    rideType === 'city'
                      ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  City Ride
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setRideType('airport');
                    setDrop('Rajiv Gandhi International Airport (RGIA)');
                  }}
                  className={`px-3 py-1 rounded-xl transition-all flex items-center gap-1 ${
                    rideType === 'airport'
                      ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Plane size={11} />
                  <span>Airport Express</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setRideType('outstation');
                    setDrop('Srisailam Temple (Outstation Pilgrimage)');
                  }}
                  className={`px-3 py-1 rounded-xl transition-all flex items-center gap-1 ${
                    rideType === 'outstation'
                      ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Compass size={11} />
                  <span>Outstation</span>
                </button>
              </div>

              {/* Connected Pickup & Drop Inputs */}
              <div className="relative space-y-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                {/* Pickup */}
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0 ring-4 ring-emerald-100"></span>
                  <div className="flex-1">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">
                      Pickup Location
                    </label>
                    <input 
                      type="text" 
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full text-xs sm:text-sm font-semibold text-slate-800 bg-transparent border-none outline-none focus:ring-0 p-0"
                      placeholder="Enter pickup address in Hyderabad"
                      required
                    />
                  </div>
                </div>

                {/* Divider with Swap Button */}
                <div className="relative flex items-center justify-center my-0.5">
                  <div className="w-full border-t border-slate-200"></div>
                  <button 
                    type="button" 
                    onClick={swapLocations}
                    title="Swap locations"
                    className="absolute bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 p-1 rounded-full border border-slate-200 shadow-sm transition-all transform hover:rotate-180"
                  >
                    <ArrowUpDown size={12} />
                  </button>
                </div>

                {/* Drop */}
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500 flex-shrink-0 ring-4 ring-rose-100"></span>
                  <div className="flex-1">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">
                      Drop Destination
                    </label>
                    <input 
                      type="text" 
                      value={drop}
                      onChange={(e) => setDrop(e.target.value)}
                      className="w-full text-xs sm:text-sm font-semibold text-slate-800 bg-transparent border-none outline-none focus:ring-0 p-0"
                      placeholder="Enter destination area"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Popular Location Shortcuts */}
              <div className="flex items-center gap-1.5 flex-wrap text-xs">
                <span className="text-slate-400 font-bold text-[10px]">Popular:</span>
                <button 
                  type="button" 
                  onClick={() => setDrop('Rajiv Gandhi International Airport (RGIA)')}
                  className="px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-medium transition-colors text-[11px]"
                >
                  RGIA Airport
                </button>
                <button 
                  type="button" 
                  onClick={() => setDrop('Hitec City (Cyber Towers / Mindspace)')}
                  className="px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-medium transition-colors text-[11px]"
                >
                  Hitec City
                </button>
                <button 
                  type="button" 
                  onClick={() => setDrop('Charminar (Historic Old City)')}
                  className="px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-medium transition-colors text-[11px]"
                >
                  Charminar
                </button>
                <button 
                  type="button" 
                  onClick={() => setDrop('Secunderabad Railway Station')}
                  className="px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-medium transition-colors text-[11px]"
                >
                  Secunderabad
                </button>
              </div>

              {/* Compact Vehicle Options if category has multiple */}
              {displayedVehicles.length > 1 && (
                <div className="grid grid-cols-2 gap-2">
                  {displayedVehicles.map((veh) => {
                    const isSelected = selectedVehicleId === veh.id;
                    const fare = calculateEstimate(veh).totalFare;
                    return (
                      <div
                        key={veh.id}
                        onClick={() => setSelectedVehicleId(veh.id)}
                        className={`p-2 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-amber-50/70 border-[#F5B800] ring-1 ring-[#F5B800]/20'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <VehicleIcon category={veh.category} id={veh.id} size={16} className="text-blue-700" />
                          <div>
                            <strong className="text-[11px] text-slate-900 block leading-tight">{veh.name}</strong>
                            <span className="text-[9px] text-slate-500">{veh.eta} away</span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-blue-700 font-['Outfit']">₹{fare}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Bottom Fare & Action CTA */}
            <div className="pt-3 border-t border-slate-200 mt-4 space-y-2.5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase font-semibold text-slate-400 block">Total Estimated Fare</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Outfit']">
                      ₹{currentEstimate.totalFare}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      Zero Surge
                    </span>
                  </div>
                </div>

                <div className="text-right text-xs text-slate-500">
                  <span className="font-semibold text-blue-700 block text-xs">{activeVehicle.name}</span>
                  <span className="text-[11px]">{currentEstimate.distance} km • {activeVehicle.eta} arrival</span>
                </div>
              </div>

              {/* Primary Booking Button */}
              <button 
                type="button"
                onClick={handleBookingSubmit}
                className="w-full flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-blue-950 font-bold py-3 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
              >
                <Sparkles size={16} />
                <span>Confirm & Book {activeVehicle.name}</span>
                <ArrowRight size={16} />
              </button>

              <div className="flex items-center justify-center gap-3 text-[10px] font-semibold text-slate-500 pt-0.5">
                <span>Verified Captain</span>
                <span>•</span>
                <span>Pay Cash / UPI After Trip</span>
                <span>•</span>
                <span>Zero Cancellation</span>
              </div>
            </div>

          </div>

          {/* RIGHT: High-Definition Vehicle Showcase (6 Cols - Height Balanced) */}
          <div className="lg:col-span-6 bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden flex flex-col justify-between">
            
            {/* Visual Frame - Fills Available Height */}
            <div className="relative w-full h-72 sm:h-80 lg:h-full min-h-[360px] overflow-hidden bg-slate-100 flex-1 group">
              <img 
                src={getHeroImage()} 
                alt="GODest Hyderabad Mobility - Taxi, Bike, and Auto" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Live Fleet Radar Pill */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-slate-200 text-slate-800 shadow-md text-xs font-bold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>3,800+ Active Rides in Hyderabad</span>
              </div>

              {/* Floating Instant Pickup Pill */}
              <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-md border border-slate-200 flex items-center gap-2 text-slate-800 text-xs font-bold">
                <Clock size={14} className="text-blue-600" />
                <span>{activeVehicle.eta} Instant Pickup</span>
              </div>

              {/* Floating Rating Pill */}
              <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-md border border-slate-200 flex items-center gap-2 text-slate-800 text-xs font-bold">
                <Star size={14} className="text-[#F5B800] fill-[#F5B800]" />
                <span>4.9 / 5.0 Rating (50K+ Trips)</span>
              </div>

              {/* Floating Zero Surge Pill */}
              <div className="absolute bottom-4 right-4 z-10 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-md border border-slate-200 flex items-center gap-2 text-slate-800 text-xs font-bold">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>Zero Surge Guarantee</span>
              </div>
            </div>

            {/* Bottom Card Strip - Direct Alignment with Template Poster */}
            <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base font-['Outfit']">
                  Ride Safe with GODest
                </h4>
                <p className="text-slate-500 text-xs">
                  Charminar • Hitec City • Rajiv Gandhi Int. Airport
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-blue-950 bg-[#F5B800] px-3.5 py-1.5 rounded-xl shadow-sm inline-block">
                  Car • Bike • Auto
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Full-Width Trust Guarantee Strip (Exact Match with template.jpeg Footer Bar) */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 shadow-lg flex flex-wrap items-center justify-around gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <Star size={17} className="text-[#F5B800] fill-[#F5B800]" />
            <span>24x7 Available in Hyderabad</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={17} className="text-blue-600" />
            <span>City • Airport • Outstation</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={17} className="text-emerald-600" />
            <span>Safe • Reliable • Affordable</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={17} className="text-amber-500" />
            <span>100% Police Verified Captains</span>
          </div>
        </div>

      </div>
    </section>
  );
}
