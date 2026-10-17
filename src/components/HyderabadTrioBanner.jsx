import React from 'react';
import { Car, Bike, Sparkles, ShieldCheck, ArrowRight, Clock, Users, CheckCircle2, Zap } from 'lucide-react';
import { AutoRickshawIcon } from './VehicleIcon';

export default function HyderabadTrioBanner() {
  const mobilityOptions = [
    {
      id: 'bike',
      name: 'GODest Moto',
      subtitle: 'Fastest Solo Commute',
      fare: 'From ₹25',
      time: '2-3 Min Arrival',
      capacity: '1 Passenger',
      badge: 'Beat Traffic',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      iconBg: 'bg-amber-500 text-blue-950',
      borderColor: 'hover:border-amber-400',
      features: [
        'Free sanitized helmet provided',
        'Zips through Hitec City peak traffic',
        'Live GPS tracking & SOS support'
      ],
      icon: <Bike size={26} />
    },
    {
      id: 'auto',
      name: 'GODest Auto',
      subtitle: 'Metered Rickshaw Ride',
      fare: 'From ₹40',
      time: '3-4 Min Arrival',
      capacity: '3 Passengers',
      badge: 'Zero Bargaining',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      iconBg: 'bg-emerald-600 text-white',
      borderColor: 'hover:border-emerald-400',
      features: [
        'Government metered fare calculation',
        'Seats up to 3 with shopping bags',
        'Doorstep pickup anywhere in Hyderabad'
      ],
      icon: <AutoRickshawIcon size={26} />
    },
    {
      id: 'cab',
      name: 'GODest Prime Cabs',
      subtitle: 'AC Cabs & Electric SUVs',
      fare: 'From ₹120',
      time: '4-5 Min Arrival',
      capacity: '4-6 Passengers',
      badge: 'Airport & Family',
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
      iconBg: 'bg-blue-600 text-white',
      borderColor: 'hover:border-blue-400',
      features: [
        'Full climate control AC & luggage trunk',
        'Zero driver cancellation promise',
        'Dedicated Rajiv Gandhi Airport pickup'
      ],
      icon: <Car size={26} />
    }
  ];

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-white via-slate-50/60 to-white border-b border-slate-200" id="trio-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean Typography & Inspiring Layout */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles size={14} className="text-amber-600" />
            <span>HYDERABAD MOBILITY ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] text-slate-900 tracking-tight leading-tight">
            Three Ways to Move Across <span className="text-blue-600">Hyderabad</span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Whether you need a quick bike taxi to beat Madhapur rush hours, a metered auto for local trips, or an air-conditioned cab for airport flights, GODest delivers in one single app.
          </p>
        </div>

        {/* Hero Visual Card - 100% Crystal Clear Photographic Banner (No Blue Tint Overlays) */}
        <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-2xl mb-8 group">
          <div className="relative h-64 sm:h-80 md:h-[380px] lg:h-[440px] w-full overflow-hidden bg-slate-100">
            <img 
              src="/images/godest_hitec_city_mobility_trio_a.png" 
              alt="GODest Car, Bike Taxi, and Auto Rickshaw in front of Hyderabad Cyber Towers" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Top Left Floating Tag */}
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200 text-slate-900 text-xs font-bold flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5B800]"></span>
              <span>Cyber Towers • Hitec City Hub</span>
            </div>

            {/* Top Right Floating Tag */}
            <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200 text-slate-900 text-xs font-bold">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>Verified Captains</span>
            </div>

            {/* Bottom Floating Glass Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200 max-w-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F5B800] text-blue-950 font-bold flex items-center justify-center text-sm shadow-sm flex-shrink-0">
                  GD
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-['Outfit']">
                    Car • Bike Taxi • Auto Rickshaw
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Hyderabad’s trusted 3-in-1 mobility network with zero surge guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Card Vehicle Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {mobilityOptions.map((item) => (
            <div 
              key={item.id}
              className={`bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${item.borderColor}`}
            >
              <div>
                {/* Header row with Icon and Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Name & Pricing */}
                <h3 className="text-xl font-bold text-slate-900 font-['Outfit'] mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 mb-4 font-medium">
                  {item.subtitle}
                </p>

                <div className="flex items-baseline gap-2 pb-4 mb-4 border-b border-slate-100">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-600 font-['Outfit']">
                    {item.fare}
                  </span>
                  <span className="text-xs text-slate-400">base starting fare</span>
                </div>

                {/* Quick Specs */}
                <div className="grid grid-cols-2 gap-2 mb-5 text-[11px] font-semibold text-slate-700">
                  <div className="flex items-center gap-1.5 p-2 bg-slate-50 rounded-xl border border-slate-100">
                    <Clock size={14} className="text-blue-600 flex-shrink-0" />
                    <span>{item.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 bg-slate-50 rounded-xl border border-slate-100">
                    <Users size={14} className="text-blue-600 flex-shrink-0" />
                    <span>{item.capacity}</span>
                  </div>
                </div>

                {/* Feature Bullet Points */}
                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  {item.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link to Booking Form */}
              <a 
                href="#book-section"
                className="w-full flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-blue-950 font-bold py-3 px-4 rounded-xl text-xs shadow-md hover:shadow-lg transition-all"
              >
                <span>Select & Book {item.name}</span>
                <ArrowRight size={14} />
              </a>

            </div>
          ))}
        </div>

        {/* Bottom Trust Guarantee Strip */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-md flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-emerald-600" />
            <span>100% Police Verified Drivers</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-[#F5B800]" />
            <span>Zero Surge Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-blue-600" />
            <span>Average 2-3 Mins Arrival</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-amber-500" />
            <span>Transparent Digital Meter</span>
          </div>
        </div>

      </div>
    </section>
  );
}
