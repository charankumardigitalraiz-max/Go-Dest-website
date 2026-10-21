import React, { useState, useEffect } from 'react';
import { AutoRickshawIcon } from './VehicleIcon';
import {
  Car,
  Bike,
  ArrowRight,
  Clock,
  ShieldCheck,
  Star,
  MapPin,
  MessageCircle,
  PhoneCall,
  CheckCircle2,
  Zap,
  ChevronRight,
  Sparkles,
  Smartphone
} from 'lucide-react';
import AppDownloadModal from './AppDownloadModal';

export default function Hero({ onStartBooking: _onStartBooking, selectedPreRoute: _selectedPreRoute, selectedPreCategory }) {
  const [activeVehicleView, setActiveVehicleView] = useState('car'); // 'car' | 'bike' | 'auto'
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

  useEffect(() => {
    if (selectedPreCategory) {
      setActiveVehicleView(selectedPreCategory);
    }
  }, [selectedPreCategory]);

  const vehicleShowcase = {
    car: {
      name: 'Comfort AC Cabs',
      tagline: 'Sedans, Hatchbacks & EV SUVs for city commutes & airport runs',
      rate: 'From ₹18 / km',
      image: '/images/godest_charminar_taxi_hero_a.png',
      badge: 'Top Rated AC Ride'
    },
    bike: {
      name: 'Solo Bike Taxi',
      tagline: 'Fastest way to beat peak Hitec City and Secunderabad traffic',
      rate: 'From ₹6 / km',
      image: '/images/godest_bike_taxi_hero_a.png',
      badge: 'Lowest Fare'
    },
    auto: {
      name: 'Metered Auto',
      tagline: 'Everyday affordable doorstep 3-wheeler rides at honest meter rates',
      rate: 'From ₹14 / km',
      image: '/images/godest_auto_rickshaw_product_a.png',
      badge: 'Zero Surge'
    }
  };

  const currentShowcase = vehicleShowcase[activeVehicleView] || vehicleShowcase.car;

  const scrollToFleet = () => {
    const el = document.getElementById('fleet-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/30 via-white to-slate-50/40 pt-6 pb-7 lg:pt-8 lg:pb-9" id="book-section">

      {/* Decorative Golden Road Speed Lines (Brand Signature) */}
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full opacity-25 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
          <circle cx="650" cy="190" r="270" fill="url(#yellowGlow)" />
          <path d="M400 -50 L750 650 M450 -50 L800 650 M500 -50 L850 650" stroke="#F5B800" strokeWidth="12" strokeDasharray="30 20" opacity="0.3" />
          <defs>
            <radialGradient id="yellowGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(650 190) rotate(90) scale(270)">
              <stop stopColor="#F5B800" stopOpacity="0.3" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main 2-Column Balanced Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* LEFT: Well-Proportioned Hero Details & Services (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-5">

            {/* Header Cluster */}
            <div className="space-y-2.5">

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-300/80 shadow-2xs text-[11px] font-semibold text-slate-800 tracking-[0.08em] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#F5B800] animate-ping"></span>
                  <span>INDIA'S PREMIER MOBILITY PLATFORM</span>
                </span>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/90 px-2.5 py-0.5 rounded-full">
                  Zero Surge Guarantee
                </span>
              </div>

              {/* Main Headline */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-normal font-['Outfit'] text-slate-800 tracking-[-0.03em] leading-[1.18]">
                  <span>Ride Safe Across </span>
                  <span className="font-bold bg-gradient-to-r from-amber-600 via-[#F5B800] to-amber-500 bg-clip-text text-transparent">
                    India
                  </span>
                </h1>

                {/* Slogan & Identity Card - 100% English */}
                <div className="mt-2.5 p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-amber-50/70 via-white to-blue-50/50 border border-amber-200/70">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-base sm:text-lg font-semibold text-slate-900 font-['Outfit'] tracking-tight">
                      GODest Move to Destination
                    </span>
                    <span className="text-[11px] font-semibold text-amber-900 bg-amber-100/80 border border-amber-200 px-2 py-0.5 rounded-md">
                      Ride Safe, Fast & Affordable
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-blue-700 font-['Outfit'] flex items-center gap-2 mt-1">
                    <span>Bike Taxi • Metered Auto • AC Cabs</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-600 font-medium">City • Airport • Outstation</span>
                  </div>
                </div>
              </div>

              {/* Clear description */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                India's trusted 24/7 mobility platform for daily city commutes, airport transfers, and outstation trips nationwide. Transparent zero surge pricing, verified captains, and guaranteed doorstep pickup across major cities.
              </p>
            </div>

            {/* 3 Mobility Modes Quick Selection Cards (Responsive Horizontal Scroll on mobile, 3-Col Grid on sm+) */}
            <div className="flex sm:grid sm:grid-cols-3 gap-2.5 overflow-x-auto pb-1.5 sm:pb-0 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div
                onClick={() => setActiveVehicleView('bike')}
                className={`w-[170px] sm:w-auto flex-shrink-0 snap-start p-3 rounded-2xl border-2 transition-all cursor-pointer ${activeVehicleView === 'bike'
                  ? 'bg-amber-50/80 border-[#F5B800] ring-2 ring-[#F5B800]/20 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 flex-shrink-0">
                    <Bike size={18} />
                  </div>
                  <div>
                    <strong className="text-xs text-slate-900 font-bold block leading-tight">Bike Taxi</strong>
                    <span className="text-[10px] text-blue-700 font-bold">From ₹6/km</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Fastest solo commute to beat traffic
                </p>
              </div>

              <div
                onClick={() => setActiveVehicleView('auto')}
                className={`w-[170px] sm:w-auto flex-shrink-0 snap-start p-3 rounded-2xl border-2 transition-all cursor-pointer ${activeVehicleView === 'auto'
                  ? 'bg-amber-50/80 border-[#F5B800] ring-2 ring-[#F5B800]/20 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 flex-shrink-0">
                    <AutoRickshawIcon size={18} />
                  </div>
                  <div>
                    <strong className="text-xs text-slate-900 font-bold block leading-tight">Metered Auto</strong>
                    <span className="text-[10px] text-blue-700 font-bold">From ₹14/km</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Everyday doorstep honest meter rate
                </p>
              </div>

              <div
                onClick={() => setActiveVehicleView('car')}
                className={`w-[170px] sm:w-auto flex-shrink-0 snap-start p-3 rounded-2xl border-2 transition-all cursor-pointer ${activeVehicleView === 'car'
                  ? 'bg-amber-50/80 border-[#F5B800] ring-2 ring-[#F5B800]/20 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 flex-shrink-0">
                    <Car size={18} />
                  </div>
                  <div>
                    <strong className="text-xs text-slate-900 font-bold block leading-tight">AC Cabs</strong>
                    <span className="text-[10px] text-blue-700 font-bold">From ₹18/km</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Sedans & EV SUVs for family & airport
                </p>
              </div>
            </div>

            {/* Guarantees Strip */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              <div className="p-2 rounded-xl bg-slate-50/90 border border-slate-200 flex items-center justify-center gap-2 text-xs font-semibold text-slate-700">
                <ShieldCheck size={15} className="text-emerald-600 flex-shrink-0" />
                <span className="truncate">Zero Surge</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-50/90 border border-slate-200 flex items-center justify-center gap-2 text-xs font-semibold text-slate-700">
                <Clock size={15} className="text-blue-600 flex-shrink-0" />
                <span className="truncate">3-Min Pickup</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-50/90 border border-slate-200 flex items-center justify-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />
                <span className="truncate">Verified Captains</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-50/90 border border-slate-200 flex items-center justify-center gap-2 text-xs font-semibold text-slate-700">
                <Zap size={15} className="text-amber-500 flex-shrink-0" />
                <span className="truncate">Pay After Trip</span>
              </div>
            </div> */}

            {/* Direct Action Strip: Instant App Booking + Fleet */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
              {/* Primary Instant Booking Button -> Opens App Download Modal */}
              <button
                type="button"
                onClick={() => setIsAppModalOpen(true)}
                className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-slate-950 font-extrabold py-3 px-5 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-95 text-xs sm:text-sm group cursor-pointer"
              >
                <Smartphone size={17} className="stroke-[2.5]" />
                <span>Book Ride Instantly on App</span>
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* 24/7 Helpline */}
              {/* <a
                href="tel:04060007000"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-bold py-3 px-4 rounded-2xl text-xs sm:text-sm transition-colors shadow-xs"
              >
                <PhoneCall size={15} className="text-blue-600" />
                <span>040-6000-7000</span>
              </a> */}

              {/* Explore Fleet */}
              <button
                type="button"
                onClick={scrollToFleet}
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-2xl text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
              >
                <span>Fleet & Fares</span>
                <ChevronRight size={15} />
              </button>
            </div>

            {/* Bottom Trust Assurance Line */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-[11px] font-semibold text-slate-500 pt-1.5 border-t border-slate-100">
              <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <CheckCircle2 size={13} /> 50,000+ Safe Rides
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-amber-700 font-semibold">
                <Star size={13} className="fill-amber-500 text-amber-500" /> 4.9/5 Average Rating
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <ShieldCheck size={13} className="text-blue-600" /> Zero Cancellation Fee
              </span>
            </div>

          </div>

          {/* RIGHT: Perfectly Balanced Visual Showcase (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden flex flex-col justify-between">

            {/* Visual Frame with Golden Ratio Height (350px on desktop) */}
            <div className="relative w-full h-72 sm:h-80 lg:h-[350px] overflow-hidden bg-slate-100 group flex-1">
              <img
                src={currentShowcase.image}
                alt="GODest India Mobility - Taxi, Bike, and Auto"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Live Fleet Pill */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-slate-200 text-slate-800 shadow-md text-xs font-bold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>3,800+ Active Captains Across India</span>
              </div>

              {/* Floating 3-Min Pickup Pill */}
              {/* <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-md border border-slate-200 flex items-center gap-2 text-slate-800 text-xs font-bold">
                <Clock size={13} className="text-blue-600" />
                <span>3-Min Pickup</span>
              </div> */}

              {/* Floating Rating Pill */}
              {/* <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-md border border-slate-200 flex items-center gap-2 text-slate-800 text-xs font-bold">
                <Star size={13} className="text-[#F5B800] fill-[#F5B800]" />
                <span>4.9 / 5.0 Rating (50K+ Trips)</span>
              </div> */}

              {/* Floating Zero Surge Pill */}
              {/* <div className="absolute bottom-4 right-4 z-10 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-md border border-slate-200 flex items-center gap-2 text-slate-800 text-xs font-bold">
                <ShieldCheck size={13} className="text-emerald-600" />
                <span>Zero Surge</span>
              </div> */}
            </div>

            {/* Bottom Vehicle Switcher Strip */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider pl-1">
                Preview Vehicle:
              </span>
              <div className="flex items-center gap-2">
                {[
                  { id: 'bike', label: 'Bike', icon: <Bike size={14} /> },
                  { id: 'auto', label: 'Auto', icon: <AutoRickshawIcon size={14} /> },
                  { id: 'car', label: 'AC Cabs', icon: <Car size={14} /> },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveVehicleView(item.id)}
                    className={`flex items-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeVehicleView === item.id
                      ? 'bg-[#F5B800] text-slate-950 shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Card Sub-strip */}
            {/* <div className="px-4 py-2.5 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">
                Ride Safe with GODest
              </span>
              <span className="text-[11px] font-bold text-blue-700">
                Car • Bike • Auto
              </span>
            </div> */}

          </div>

        </div>

        {/* Bottom Full-Width Trust Guarantee Strip */}
        <div className="mt-6 sm:mt-7 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-wrap items-center justify-around gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <Star size={16} className="text-[#F5B800] fill-[#F5B800]" />
            <span>24x7 Available Across India</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-blue-600" />
            <span>City • Airport • Outstation</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-600" />
            <span>Safe • Reliable • Affordable</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-amber-500" />
            <span>100% Police Verified Captains</span>
          </div>
        </div>

      </div>

      {/* App Store & Google Play Instant Booking Modal */}
      <AppDownloadModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        defaultTab="rider"
        onNavigateToPartner={() => {
          setIsAppModalOpen(false);
          const el = document.getElementById('contact-section');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </section>
  );
}
