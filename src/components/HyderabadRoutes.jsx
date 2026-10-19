import React, { useState, useRef, useEffect } from 'react';
import {
  Clock,
  ArrowRight,
  Car,
  Bike,
  Plane,
  Building2,
  Train,
  ShieldCheck,
  Zap,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Compass,
  MessageCircle,
  Users,
  Briefcase,
  ShoppingBag,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { AutoRickshawIcon } from './VehicleIcon';

export default function HyderabadRoutes({ onSelectRoute: _onSelectRoute }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const carouselRef = useRef(null);

  const filterTabs = [
    { id: 'all', label: 'All Travel Services' },
    { id: 'daily', label: 'Daily & City Rides' },
    { id: 'airport', label: 'Airport & Stations' },
    { id: 'outstation', label: 'Outstation & Corporate' }
  ];

  const travelServices = [
    {
      id: 'service_daily',
      category: 'daily',
      title: 'Daily City Commutes',
      tag: 'Everyday Mobility',
      tagColor: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: Bike,
      iconColor: 'text-blue-600',
      description: 'Quick, reliable doorstep rides for daily office travel, college commutes, and neighborhood errands across major Indian cities.',
      features: [
        'Beat peak rush-hour traffic with Solo Bike Taxi',
        'Affordable doorstep 3-wheeler Metered Auto',
        'Average 3-minute captain arrival at your location'
      ],
      bestFor: 'Daily office, college & local errands',
      whatsappMsg: 'Hi GODest, I want to book a daily city ride'
    },
    {
      id: 'service_airport',
      category: 'airport',
      title: '24/7 Airport Express',
      tag: 'Flight Transfers',
      tagColor: 'bg-amber-100 text-amber-800 border-amber-200',
      icon: Plane,
      iconColor: 'text-amber-600',
      description: 'Guaranteed on-time airport drops and terminal pickups with round-the-clock availability, flight delay tracking, and luggage assistance at domestic and international airports.',
      features: [
        '24/7 guaranteed on-time airport drop & pickup',
        'All Expressway and toll charges included in standard fare',
        'Spacious boots for heavy flight baggage'
      ],
      bestFor: 'Domestic & international flight passengers',
      whatsappMsg: 'Hi GODest, I want to book an Airport Express ride'
    },
    {
      id: 'service_corporate',
      category: 'outstation',
      title: 'Corporate & Business Travel',
      tag: 'Executive Travel',
      tagColor: 'bg-purple-100 text-purple-800 border-purple-200',
      icon: Briefcase,
      iconColor: 'text-purple-600',
      description: 'Premium air-conditioned sedans and electric SUVs tailored for corporate professionals, business client meetings, and campus commutes.',
      features: [
        'Sanitized AC sedans with mobile charging points',
        'Zero surge pricing during office morning & evening hours',
        'GST-compliant invoices for corporate expense reimbursement'
      ],
      bestFor: 'Office executives, client visits & business meetings',
      whatsappMsg: 'Hi GODest, I want to book a Corporate / Business ride'
    },
    {
      id: 'service_transit',
      category: 'airport',
      title: 'Railway & Metro Station Connect',
      tag: 'Station Transfers',
      tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      icon: Train,
      iconColor: 'text-emerald-600',
      description: 'Hassle-free pickups directly outside major railway platforms and metro stations with courteous captains and transparent pricing.',
      features: [
        'Platform gate doorstep pickups at major railway stations and metro hubs',
        'Transparent digital meter rate without station-side haggling',
        'Hassle-free luggage handling and assistance'
      ],
      bestFor: 'Train passengers & last-mile metro commuters',
      whatsappMsg: 'Hi GODest, I want to book a Railway Station pickup ride'
    },
    {
      id: 'service_outstation',
      category: 'outstation',
      title: 'Intercity Outstation Journeys',
      tag: 'Highway Certified',
      tagColor: 'bg-rose-100 text-rose-800 border-rose-200',
      icon: Compass,
      iconColor: 'text-rose-600',
      description: 'Comfortable one-way and round trips across Indian states and national highways with senior highway drivers.',
      features: [
        'Highway-certified senior captains with extensive route experience',
        'Flexible one-way drops and multi-day round trip packages',
        'Sanitized Sedan and spacious SUV options'
      ],
      bestFor: 'Weekend getaways, family trips & pilgrimage tours',
      whatsappMsg: 'Hi GODest, I want to book an Intercity Outstation ride'
    },
    {
      id: 'service_family',
      category: 'daily',
      title: 'Family & Group Travel',
      tag: 'Spacious Rides',
      tagColor: 'bg-teal-100 text-teal-800 border-teal-200',
      icon: Users,
      iconColor: 'text-teal-600',
      description: 'Roomy 6-seater SUVs and comfortable sedans for shopping trips, family weddings, healthcare visits, and festive gatherings.',
      features: [
        'Extra legroom and large seating capacity for up to 6 passengers',
        'Multiple stops supported on a single booking',
        'Pay conveniently after the ride via Cash, UPI, or Cards'
      ],
      bestFor: 'Family outings, shopping sprees & hospital visits',
      whatsappMsg: 'Hi GODest, I want to book a Family / Group ride'
    }
  ];

  const filteredServices = activeFilter === 'all'
    ? travelServices
    : travelServices.filter(s => s.category === activeFilter);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    const firstCard = carouselRef.current.children[0];
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 24;
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(Math.max(index, 0), filteredServices.length - 1));
    }
  };

  const handleFilterChange = (tabId) => {
    setActiveFilter(tabId);
    setCurrentIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      const firstCard = carouselRef.current.children[0];
      const scrollDist = firstCard ? firstCard.offsetWidth + 24 : 380;
      carouselRef.current.scrollBy({ left: -scrollDist, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      const firstCard = carouselRef.current.children[0];
      const scrollDist = firstCard ? firstCard.offsetWidth + 24 : 380;
      carouselRef.current.scrollBy({ left: scrollDist, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (index) => {
    if (carouselRef.current && carouselRef.current.children[index]) {
      const targetCard = carouselRef.current.children[index];
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    handleScroll();
  }, [filteredServices.length]);

  return (
    <section className="py-12 sm:py-16 bg-slate-50/70 border-t border-b border-slate-200" id="routes-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-amber-300/80 shadow-2xs text-[11px] font-semibold tracking-[0.08em] uppercase text-slate-800">
            <span className="w-2 h-2 rounded-full bg-[#F5B800] animate-ping"></span>
            <span>PAN-INDIA MOBILITY SOLUTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal font-['Outfit'] text-slate-800 tracking-[-0.03em] leading-[1.2]">
            Tailored Rides for{' '}
            <span className="font-semibold text-slate-900">Every </span>
            <span className="font-bold bg-gradient-to-r from-amber-600 via-[#F5B800] to-amber-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
            From your daily morning office rush to midnight airport flights and family weekend outstation trips — GODest provides verified, transparent 24/7 mobility across India.
          </p>
        </div>

        {/* Informative Category Filter Tabs & Carousel Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleFilterChange(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${isSelected
                      ? 'bg-[#F5B800] text-slate-950 shadow-sm ring-2 ring-amber-300/40'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Carousel Arrows & Indicator */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 mr-1 hidden sm:inline">
              Swipe or click arrows
            </span>
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollLeft}
              className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all cursor-pointer shadow-2xs ${canScrollLeft
                  ? 'bg-white hover:bg-amber-50 text-slate-800 border-slate-200 active:scale-95'
                  : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed opacity-60'
                }`}
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollRight}
              className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all cursor-pointer shadow-2xs ${canScrollRight
                  ? 'bg-white hover:bg-amber-50 text-slate-800 border-slate-200 active:scale-95'
                  : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed opacity-60'
                }`}
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex items-stretch gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 pb-4 px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filteredServices.map((service) => {
              const IconComponent = service.icon;

              return (
                <div
                  key={service.id}
                  className="w-[86vw] sm:w-[350px] md:w-[380px] lg:w-[390px] flex-shrink-0 snap-start bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-amber-300 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between space-y-4 group"
                >
                  {/* Top: Icon & Category Tag */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <IconComponent size={20} className={service.iconColor} />
                      </div>
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${service.tagColor}`}>
                        {service.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 font-['Outfit'] group-hover:text-blue-900 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
                        {service.description}
                      </p>
                    </div>

                    {/* Key Informative Features */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Best For Tag */}
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">
                        Recommended For
                      </span>
                      <span className="text-xs font-semibold text-blue-700">
                        {service.bestFor}
                      </span>
                    </div>
                  </div>

                  {/* Direct Action Button */}
                  <div className="pt-3 border-t border-slate-100">
                    <a
                      href={`https://wa.me/914060007000?text=${encodeURIComponent(service.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow-xs active:scale-95 cursor-pointer"
                    >
                      <MessageCircle size={15} className="fill-slate-950 text-slate-950" />
                      <span>Inquire / Book this Ride</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 pt-3">
            {filteredServices.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${currentIndex === i
                    ? 'w-7 h-2.5 bg-[#F5B800] ring-2 ring-amber-300/40 shadow-xs'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Trust & Transparency Standard Charter */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                The GODest Service Pledge
              </span>
              <h3 className="text-xl font-bold font-['Outfit'] text-slate-900">
                Transparent Mobility Across All Categories
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold self-start sm:self-auto">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>Zero Surge Guaranteed 24/7</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Solo Bike Taxi */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
                  <Bike size={18} />
                </div>
                <div>
                  <strong className="text-sm font-bold text-slate-900 block">Solo Bike Taxi</strong>
                  <span className="text-[11px] font-bold text-blue-700">From ₹6 / km</span>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Fastest way to beat peak traffic across Indian cities. Sanitized helmets provided for passenger safety.
              </p>
            </div>

            {/* Metered Auto */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
                  <AutoRickshawIcon size={18} />
                </div>
                <div>
                  <strong className="text-sm font-bold text-slate-900 block">Metered Auto</strong>
                  <span className="text-[11px] font-bold text-blue-700">From ₹14 / km</span>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Everyday doorstep 3-wheeler rides with honest digital meter rates and zero haggling.
              </p>
            </div>

            {/* Comfort AC Cabs */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
                  <Car size={18} />
                </div>
                <div>
                  <strong className="text-sm font-bold text-slate-900 block">Comfort AC Cabs</strong>
                  <span className="text-[11px] font-bold text-blue-700">From ₹18 / km</span>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Spacious Sedans & EV SUVs with clean AC interiors, boot luggage room, and mobile chargers.
              </p>
            </div>
          </div>

          {/* Bottom 24/7 Helpline Strip */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-600" />
              <span>Doorstep Pickup Across Major Cities Nationwide • Pay Cash / UPI After Ride</span>
            </div>
            <a
              href="tel:04060007000"
              className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 font-bold"
            >
              <PhoneCall size={14} />
              <span>All-India 24/7 Helpline: 040-6000-7000</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
