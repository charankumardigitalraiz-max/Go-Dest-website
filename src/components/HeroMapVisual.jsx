import React, { useRef } from 'react';
import { AutoRickshawIcon } from './VehicleIcon';
import { 
  Car, 
  Bike, 
  Plane, 
  Compass, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Wallet, 
  Headphones,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function HeroMapVisual({ onSelectService }) {
  const scrollRefServices = useRef(null);
  const scrollRefGuarantees = useRef(null);

  const services = [
    {
      id: 'bike',
      name: 'Bike Taxi',
      tagline: 'Fastest solo ride to beat traffic',
      badge: 'Lowest Fare',
      rate: 'From ₹6 / km',
      icon: <Bike size={18} className="text-blue-700" />,
      features: ['Beat peak traffic', 'Helmets provided', 'Zero rain surge']
    },
    {
      id: 'auto',
      name: 'Metered Auto',
      tagline: 'Everyday affordable doorstep auto',
      badge: 'Zero Surge',
      rate: 'From ₹14 / km',
      icon: <AutoRickshawIcon size={18} className="text-amber-800" />,
      features: ['Digital meter rate', 'Doorstep pickup', 'Zero bargaining']
    },
    {
      id: 'car',
      name: 'AC Cabs (Sedan & SUV)',
      tagline: 'Comfortable family & business rides',
      badge: 'Top Rated',
      rate: 'From ₹18 / km',
      icon: <Car size={18} className="text-blue-700" />,
      features: ['Chilled AC cabin', 'Extra luggage space', 'Verified captains']
    },
    {
      id: 'airport',
      name: 'Airport Express',
      tagline: 'Guaranteed on-time airport drop & pickup',
      badge: '24x7 Ready',
      rate: 'Fixed Transparent Fare',
      icon: <Plane size={18} className="text-amber-700" />,
      features: ['Flight delay tracking', 'Luggage assistance', 'All tolls included']
    },
    {
      id: 'outstation',
      name: 'Outstation Travel',
      tagline: 'Intercity one-way and round trips',
      badge: 'Highway Certified',
      rate: 'Custom City Packages',
      icon: <Compass size={18} className="text-blue-700" />,
      features: ['Highway trained captains', 'Clean sanitized cars', '24/7 roadside assist']
    }
  ];

  const guarantees = [
    {
      icon: <ShieldCheck size={16} className="text-emerald-600 flex-shrink-0" />,
      title: 'Zero Surge Pricing',
      desc: 'Fair, transparent rates 24/7 without sudden peak-hour or rain spikes'
    },
    {
      icon: <Clock size={16} className="text-blue-600 flex-shrink-0" />,
      title: 'Fast Doorstep Pickup',
      desc: 'Nearest verified captain arrives at your doorstep in minutes'
    },
    {
      icon: <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />,
      title: '100% Verified Captains',
      desc: 'Comprehensive background checks and police-verified drivers for safe travel'
    },
    {
      icon: <Wallet size={16} className="text-purple-600 flex-shrink-0" />,
      title: 'Pay After the Ride',
      desc: 'Complete freedom to pay via Cash, UPI (GPay/PhonePe), or Cards post trip'
    }
  ];

  const scrollHorizontally = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full rounded-3xl bg-white text-slate-800 p-5 sm:p-6 shadow-xl border border-slate-200 overflow-hidden">
      
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-amber-100/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-blue-100/60 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-3.5 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F5B800] animate-ping"></span>
          <span className="font-['Outfit'] font-bold text-xs tracking-wider text-slate-900 uppercase">
            What We Provide
          </span>
        </div>
        <span className="text-[11px] font-bold text-blue-800 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full">
          Car • Bike • Auto
        </span>
      </div>

      {/* Services List with Horizontal Scrolling */}
      <div className="relative z-10 my-4 space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider font-['Outfit']">
              Our Mobility Offerings
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              Swipe horizontally to explore ride options
            </p>
          </div>

          {/* Horizontal Scroll Controls */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scrollHorizontally(scrollRefServices, 'left')}
              className="w-7 h-7 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              type="button"
              onClick={() => scrollHorizontally(scrollRefServices, 'right')}
              className="w-7 h-7 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* Scrollable Container with Snap Points */}
        <div
          ref={scrollRefServices}
          className="flex items-stretch gap-3 overflow-x-auto pb-3 pt-1 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService && onSelectService(service.id)}
              className="w-[260px] sm:w-[280px] flex-shrink-0 snap-start p-3.5 rounded-2xl bg-slate-50 hover:bg-amber-50/70 border border-slate-200 hover:border-amber-400/90 transition-all shadow-2xs hover:shadow-md flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs group-hover:scale-105 transition-transform flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-900 transition-colors font-['Outfit']">
                        {service.name}
                      </h4>
                      <span className="text-[11px] font-bold text-blue-700 block">
                        {service.rate}
                      </span>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-md flex-shrink-0">
                    {service.badge}
                  </span>
                </div>

                <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                  {service.tagline}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-slate-600 font-medium pt-2 mt-2.5 border-t border-slate-200/70">
                {service.features.map((feat, i) => (
                  <span key={i} className="flex items-center gap-1">
                    {i > 0 && <span className="text-slate-300">•</span>}
                    <span className="text-slate-700">{feat}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Guarantees & Why Choose GODest with Horizontal Scrolling */}
      <div className="relative z-10 pt-3.5 border-t border-slate-200 space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold text-slate-900 uppercase tracking-wider font-['Outfit']">
            Our Customer Guarantees
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scrollHorizontally(scrollRefGuarantees, 'left')}
              className="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs active:scale-95"
              aria-label="Scroll guarantees left"
            >
              <ChevronLeft size={13} />
            </button>
            <button
              type="button"
              onClick={() => scrollHorizontally(scrollRefGuarantees, 'right')}
              className="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs active:scale-95"
              aria-label="Scroll guarantees right"
            >
              <ChevronRight size={13} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRefGuarantees}
          className="flex items-stretch gap-2.5 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {guarantees.map((item, idx) => (
            <div
              key={idx}
              className="w-[220px] sm:w-[240px] flex-shrink-0 snap-start flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-amber-300 transition-all"
            >
              <div className="mt-0.5">{item.icon}</div>
              <div>
                <strong className="text-xs font-bold text-slate-900 block font-['Outfit']">
                  {item.title}
                </strong>
                <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Trust Badge */}
      <div className="relative z-10 mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-600">
        <div className="flex items-center gap-1.5">
          <Sparkles size={14} className="text-[#F5B800]" />
          <span>Ride Safe • Affordable • Transparent</span>
        </div>
        <div className="flex items-center gap-1 text-blue-700 font-bold">
          <Headphones size={13} />
          <span>24/7 Support</span>
        </div>
      </div>

    </div>
  );
}
