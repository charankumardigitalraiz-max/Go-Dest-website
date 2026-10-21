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
  Activity,
  Navigation,
  Radio,
  Gauge,
  Users,
  Briefcase,
  Check
} from 'lucide-react';
import { AutoRickshawIcon } from './VehicleIcon';

export default function HyderabadTrioBanner({ onSelectCategory }) {
  const [activeMode, setActiveMode] = useState('trio'); // 'trio' | 'bike' | 'auto' | 'car'

  const handleBook = (category) => {
    const targetCat = category === 'trio' ? 'car' : category;
    if (onSelectCategory) {
      onSelectCategory(targetCat);
    } else {
      const el = document.getElementById('book-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const modeContent = {
    trio: {
      id: 'trio',
      category: 'car',
      name: 'All 3 Modes in One App',
      badge: 'All-India Unified Network',
      tagline: 'Bike, Auto & AC Cabs at Your Fingertips',
      image: '/images/godest_hitec_city_mobility_trio_a.png',
      fareLabel: 'Starts ₹25 to ₹89',
      fareSub: 'Zero surge on all categories',
      eta: '2-4 Mins Pickup',
      capacity: '1 to 6 Seats',
      luggage: 'Backpacks to Flight Bags',
      speed: 'Instant Multi-Modal Dispatch',
      sampleRoute: {
        from: 'Cyber Towers / Major City Centers',
        to: 'Airport Express / Central Hubs',
        estTime: 'Quick Dispatch',
        cost: 'Transparent Meter & Fixed Rates'
      },
      highlights: [
        'Thousands of verified captains active nationwide',
        'Automatic smart dispatch to nearest available vehicle',
        'Live police-integrated SOS and GPS ride tracking'
      ]
    },
    bike: {
      id: 'bike',
      category: 'bike',
      name: 'GODest Moto (Bike Taxi)',
      badge: 'Fastest in Peak Traffic',
      tagline: 'Beat Dense City Bottlenecks Solo',
      image: '/images/godest_hitec_city_mobility_trio_b.png',
      fareLabel: 'Starts ₹25',
      fareSub: '₹7 / km • Zero rain surge',
      eta: '2 Mins Pickup',
      capacity: '1 Rider',
      luggage: 'Backpack Friendly',
      speed: 'Fastest Solo Commute',
      sampleRoute: {
        from: 'Major Tech Hubs & IT Parks',
        to: 'City Centers & Metro Stations',
        estTime: '8-12 mins',
        cost: 'From ₹25'
      },
      highlights: [
        'Free sanitized safety helmet provided with every ride',
        'Zips past dense morning & evening peak rush hours',
        'Most economical and rapid daily solo commute option'
      ]
    },
    auto: {
      id: 'auto',
      category: 'auto',
      name: 'GODest Auto (Metered Rickshaw)',
      badge: 'Pan-India Daily Favorite',
      tagline: 'Zero Haggling • 100% Digital Meter',
      image: '/images/godest_auto_rickshaw_product_a.png',
      fareLabel: 'Starts ₹35',
      fareSub: 'Official RTA Digital Meter',
      eta: '3 Mins Pickup',
      capacity: 'Up to 3 Riders',
      luggage: 'Shopping Bags & Parcels',
      speed: 'Direct Doorstep Pickup',
      sampleRoute: {
        from: 'Central Railway & Metro Stations',
        to: 'Local Markets & Residential Hubs',
        estTime: 'Quick Dispatch',
        cost: 'Transparent Digital Meter'
      },
      highlights: [
        'Eliminates driver refusals and street fare bargaining',
        'Strict digital meter pricing matched directly to government tariffs',
        'Spacious comfortable cabin for family errands and market trips'
      ]
    },
    car: {
      id: 'car',
      category: 'car',
      name: 'GODest Prime Cabs & EV SUV',
      badge: 'Chilled AC & Airport Fleet',
      tagline: 'Maximum Comfort • Zero Cancellations',
      image: '/images/godest_electric_suv_studio_a.png',
      fareLabel: 'Starts ₹89',
      fareSub: 'Fixed Airport Rates Available',
      eta: '4 Mins Pickup',
      capacity: '4 to 6 Seats',
      luggage: 'Large Suitcase Boot',
      speed: 'Smooth Highway Cruise',
      sampleRoute: {
        from: 'Hitec City (Mindspace)',
        to: 'RGIA Shamshabad Airport',
        estTime: '34 mins via ORR',
        cost: '₹699 flat rate'
      },
      highlights: [
        'Guaranteed 100% chilled AC operation with zero surcharges',
        'Zero driver cancellation guarantee for booked scheduled rides',
        'Silent electric vehicles & premium sedans with huge boot space'
      ]
    }
  };

  const current = modeContent[activeMode];

  return (
    <section className="py-10 sm:py-14 bg-[#F8FAFC] border-b border-slate-200 scroll-mt-20" id="fleet-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50/90 text-amber-950 border border-amber-200/90 text-[11px] font-semibold tracking-[0.08em] uppercase shadow-2xs">
            <Sparkles size={13} className="text-[#F5B800]" />
            <span>NEXT-GEN MOBILITY ACROSS INDIA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal font-['Outfit'] text-slate-800 tracking-[-0.03em] leading-[1.2]">
            The Smartest Way to Move Across{' '}
            <span className="font-bold bg-gradient-to-r from-amber-600 via-[#F5B800] to-amber-500 bg-clip-text text-transparent">
              India
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
            Switch effortlessly between Bike Taxi, Metered Auto, and AC Cabs. Real-time telemetry, zero surge pricing, and 100% verified captain safety across all corridors.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* MAIN STAGE BENTO (8 Cols) */}
          <div className="lg:col-span-8 bg-white rounded-md border border-slate-200/90 shadow-lg p-5 sm:p-7 flex flex-col justify-between space-y-5">

            {/* Top Interactive Mode Pills */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-2xl">
                <button
                  onClick={() => setActiveMode('trio')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeMode === 'trio'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-blue-700'
                    }`}
                >
                  <Sparkles size={13} />
                  <span>All 3 Modes</span>
                </button>

                <button
                  onClick={() => setActiveMode('bike')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeMode === 'bike'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-blue-700'
                    }`}
                >
                  <Bike size={14} />
                  <span>Bike Moto</span>
                </button>

                <button
                  onClick={() => setActiveMode('auto')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeMode === 'auto'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-blue-700'
                    }`}
                >
                  <AutoRickshawIcon size={14} />
                  <span>Metered Auto</span>
                </button>

                <button
                  onClick={() => setActiveMode('car')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeMode === 'car'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-blue-700'
                    }`}
                >
                  <Car size={14} />
                  <span>Prime AC Cabs</span>
                </button>
              </div>

              <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full shadow-xs">
                {current.badge}
              </span>
            </div>

            {/* Dynamic Visual Stage with Glassmorphic Telemetry HUD */}
            <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/20 pointer-events-none"></div>

              {/* HUD Floating Pill: Live ETA */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-slate-200 text-slate-900 text-xs font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{current.eta}</span>
              </div>

              {/* HUD Floating Pill: Tariff Rate */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-slate-200 text-slate-900 text-xs font-bold flex items-center gap-1.5">
                <Zap size={13} className="text-[#F5B800]" />
                <span>{current.fareLabel}</span>
              </div>

              {/* HUD Bottom Bar: Route Simulation */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 text-slate-800">
                  <Navigation size={14} className="text-blue-600 flex-shrink-0" />
                  <span className="font-bold">{current.sampleRoute.from}</span>
                  <span className="text-slate-400">➔</span>
                  <span className="font-semibold text-slate-700">{current.sampleRoute.to}</span>
                </div>

                <div className="flex items-center gap-2 text-slate-600 font-medium">
                  <span className="text-blue-700 font-bold">{current.sampleRoute.estTime}</span>
                  <span>•</span>
                  <span className="text-emerald-700 font-bold">{current.sampleRoute.cost}</span>
                </div>
              </div>
            </div>

            {/* Quick Specs & Booking Action */}
            <div className="space-y-4">

              {/* Telemetry Spec Badges */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-500 mb-0.5">
                    <Users size={12} className="text-blue-600" />
                    <span>Seating</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900 font-['Outfit']">{current.capacity}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-500 mb-0.5">
                    <Briefcase size={12} className="text-amber-600" />
                    <span>Luggage</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900 font-['Outfit']">{current.luggage}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-500 mb-0.5">
                    <Gauge size={12} className="text-emerald-600" />
                    <span>Speed Advantage</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900 font-['Outfit']">{current.speed}</span>
                </div>
              </div>

              {/* Highlights */}
              {/* <div className="space-y-1.5 pt-1">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div> */}

              {/* Main Booking Trigger */}
              <button
                onClick={() => handleBook(current.category)}
                className="w-full flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-blue-950 font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Book {current.name} on GODest</span>
                <ArrowRight size={16} />
              </button>

            </div>

          </div>

          {/* RIGHT TELEMETRY BENTO WIDGETS (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">

            {/* WIDGET 1: Live Dispatch Radar */}
            <div className="bg-white rounded-md border border-slate-200/90 shadow-md p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Live Dispatch Radar</h4>
                </div>
                <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                  Active 24x7
                </span>
              </div>

              <div>
                <span className="text-3xl font-bold font-['Outfit'] text-slate-900 block leading-none">
                  12,500+
                </span>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Verified Captains patrolling active city corridors right now
                </p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex justify-between font-medium">
                  <span>Tech Parks & Commercial Hubs</span>
                  <span className="font-bold text-slate-900">1,420+ Available</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Central Railway & Metro Stations</span>
                  <span className="font-bold text-slate-900">980+ Available</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Major Airport Corridors</span>
                  <span className="font-bold text-slate-900">640+ Available</span>
                </div>
              </div>
            </div>

            {/* WIDGET 2: 1.0x Zero Surge Lock */}
            <div className="bg-white rounded-md border border-slate-200/90 shadow-md p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-amber-700">
                  <ShieldCheck size={16} />
                  <h4 className="text-xs font-bold uppercase tracking-wider">Tariff Guarantee</h4>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  1.0x Fixed
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold font-['Outfit'] text-slate-900">
                  Strict Zero Surge Pricing
                </h4>
                <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                  Heavy rain, office rush hour, or festival rush — your price per kilometer remains locked to honest meter rates.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 font-semibold flex items-center gap-2">
                <Zap size={14} className="text-amber-600 flex-shrink-0" />
                <span>Save 25% to 40% compared to surge pricing apps</span>
              </div>
            </div>

            {/* WIDGET 3: 24x7 Direct Phone Dispatch */}
            <div className="bg-white rounded-md border border-slate-200/90 shadow-md p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-blue-700">
                  <PhoneCall size={16} />
                  <h4 className="text-xs font-bold uppercase tracking-wider">Direct Phone Booking</h4>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>

              <div>
                <span className="text-xs text-slate-500 font-medium block">Pan-India 24/7 Control Room</span>
                <a
                  href="tel:+919121291212"
                  className="text-lg font-bold font-['Outfit'] text-blue-700 hover:text-blue-800 transition-colors block"
                >
                  +91 91212 91212
                </a>
              </div>

              <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                Need immediate ride assistance or prefer voice booking? Our dedicated 24/7 operators are available nationwide round the clock.
              </p>
            </div>

          </div>

        </div>

        {/* BOTTOM TACTILE MODE CARDS (3 Columns) */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Card 1: Moto */}
          <div
            onClick={() => setActiveMode('bike')}
            className={`p-4 rounded-md border-2 cursor-pointer transition-all bg-white flex items-center justify-between shadow-xs hover:shadow-md ${activeMode === 'bike'
              ? 'border-blue-600 ring-2 ring-blue-500/20 bg-blue-50/30'
              : 'border-slate-200 hover:border-slate-300'
              }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Bike size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-['Outfit']">GODest Moto</h4>
                <p className="text-[11px] text-slate-500 font-medium">Solo Commute • Starts ₹25</p>
              </div>
            </div>
            <span className="text-xs font-bold text-blue-600 font-['Outfit'] flex items-center gap-1">
              Select <ArrowRight size={12} />
            </span>
          </div>

          {/* Card 2: Auto */}
          <div
            onClick={() => setActiveMode('auto')}
            className={`p-4 rounded-md border-2 cursor-pointer transition-all bg-white flex items-center justify-between shadow-xs hover:shadow-md ${activeMode === 'auto'
              ? 'border-amber-500 ring-2 ring-amber-400/20 bg-amber-50/30'
              : 'border-slate-200 hover:border-slate-300'
              }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <AutoRickshawIcon size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-['Outfit']">GODest Auto</h4>
                <p className="text-[11px] text-slate-500 font-medium">Digital Meter • Starts ₹35</p>
              </div>
            </div>
            <span className="text-xs font-bold text-amber-800 font-['Outfit'] flex items-center gap-1">
              Select <ArrowRight size={12} />
            </span>
          </div>

          {/* Card 3: Cab */}
          <div
            onClick={() => setActiveMode('car')}
            className={`p-4 rounded-md border-2 cursor-pointer transition-all bg-white flex items-center justify-between shadow-xs hover:shadow-md ${activeMode === 'car'
              ? 'border-blue-600 ring-2 ring-blue-500/20 bg-blue-50/30'
              : 'border-slate-200 hover:border-slate-300'
              }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Car size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-['Outfit']">Prime AC Cabs</h4>
                <p className="text-[11px] text-slate-500 font-medium">Electric SUV • Starts ₹89</p>
              </div>
            </div>
            <span className="text-xs font-bold text-blue-600 font-['Outfit'] flex items-center gap-1">
              Select <ArrowRight size={12} />
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
