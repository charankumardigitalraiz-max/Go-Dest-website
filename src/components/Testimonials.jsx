import React, { useState, useEffect, useRef } from 'react';
import {
  Star,
  Users,
  BarChart3,
  Heart,
  ChevronLeft,
  ChevronRight,
  Receipt,
  X,
  CheckCircle2,
  ThumbsUp,
  ShieldCheck,
  Zap,
  ArrowRight,
  Clock
} from 'lucide-react';

export default function Testimonials() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedReceiptReview, setSelectedReceiptReview] = useState(null);

  // Touch swipe support
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Review dataset curated for the reference layout
  const reviews = [
    {
      id: 1,
      name: 'Jordan Lee',
      role: 'Staff Architect, Tech Corridor',
      city: 'Hyderabad',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      initials: 'JL',
      rating: 5,
      shortQuote: 'A simpler way to do daily commute.',
      highlightPhrase: 'Our daily commute finally feels effortless.',
      quote:
        'GODest has given our team the punctuality, zero surge pricing, and peace of mind to focus on what really matters. Punctual captains and sanitized helmets every single morning!',
      fare: '₹129',
      tripId: 'GD-8921-HYD',
      routeFrom: 'Mindspace',
      routeTo: 'Gachibowli',
      captainName: 'Ramesh K. (4.98 ★)',
      captainVehicle: 'TVS Raider 125 • TS 09 EC 4122'
    },
    {
      id: 2,
      name: 'Dr. Priyanka Sharma',
      role: 'Emergency Physician, Apollo City',
      city: 'Hyderabad',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      initials: 'PS',
      rating: 5,
      shortQuote: 'Absolute safety at 2 AM emergency shifts.',
      highlightPhrase: 'Late-night shifts with absolute safety & peace of mind.',
      quote:
        'Late 2 AM hospital emergency calls require uncompromising safety and instant dispatch. 3-minute doorstep arrival, quiet electric cab, and live GPS continuously monitored by GODest Safety Squad.',
      fare: '₹349',
      tripId: 'GD-5412-MED',
      routeFrom: 'Jubilee Hills',
      routeTo: 'Apollo ER',
      captainName: 'Mohd. Khaja (4.99 ★)',
      captainVehicle: 'Tata Nexon EV • TS 10 EV 8890'
    },
    {
      id: 3,
      name: 'Ananya Deshmukh',
      role: 'Partner, Global Capital Advisory',
      city: 'Bengaluru',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      initials: 'AD',
      rating: 5,
      shortQuote: 'It just works — zero surge, beautifully.',
      highlightPhrase: 'Zero surge when other apps quoted 2.5x surge pricing!',
      quote:
        'Transparent airport transfer with zero surge when other apps quoted 2.5x pricing! The courteous captain arrived 10 minutes early, loaded flight luggage with care, and drove smoothly.',
      fare: '₹599',
      tripId: 'GD-9910-AIR',
      routeFrom: 'Banjara Hills',
      routeTo: 'RGIA Airport',
      captainName: 'Venkatesh Rao (4.97 ★)',
      captainVehicle: 'Maruti Dzire AC • TS 07 UA 9012'
    },
    {
      id: 4,
      name: 'Vikramaditya Varma',
      role: 'Founder, T-Hub Innovation Hub',
      city: 'Hyderabad',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      initials: 'VV',
      rating: 5,
      shortQuote: 'Metro to doorstep in 60 seconds flat.',
      highlightPhrase: 'Zero bargaining headaches, exact digital meter tracking.',
      quote:
        'Zero bargaining headaches right outside the metro station. The auto arrived directly at the exit within 60 seconds. Fixed digital rate, clean sanitized seats, and effortless UPI payment right inside.',
      fare: '₹89',
      tripId: 'GD-3281-AUT',
      routeFrom: 'Madhapur Metro',
      routeTo: 'T-Hub Phase 2',
      captainName: 'Syed Ismail (4.95 ★)',
      captainVehicle: 'Bajaj Compact Auto • TS 08 EA 6140'
    },
    {
      id: 5,
      name: 'Meenakshi Sundaram',
      role: 'Financial Analyst, Waverock Hub',
      city: 'Hyderabad',
      avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80',
      initials: 'MS',
      rating: 5,
      shortQuote: 'Monsoon lifesaver with flat upfront fare.',
      highlightPhrase: 'Not a single cancellation during sudden monsoon downpour.',
      quote:
        'During sudden monsoon downpours when other apps demand 3x surge or reject trips, GODest accepted within 15 seconds, honoured normal flat pricing, and the AC was chilling perfectly. Simply unmatched!',
      fare: '₹289',
      tripId: 'GD-4418-FIN',
      routeFrom: 'Botanical Garden',
      routeTo: 'Waverock Hub',
      captainName: 'Satyanarayana P. (4.98 ★)',
      captainVehicle: 'Hyundai Aura AC • TS 09 UB 5519'
    },
    {
      id: 6,
      name: 'Karthik Balasubramanian',
      role: 'Research Fellow, IIT Hyderabad',
      city: 'Hyderabad',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      initials: 'KB',
      rating: 5,
      shortQuote: 'Pocket-friendly campus commute.',
      highlightPhrase: 'Pocket-friendly student pricing with full helmet hygiene.',
      quote:
        'Takes me from the outer junction to the research labs in 10 minutes flat for just ₹79. Disposable hairnet and fresh helmet provided every single ride! Truly built for Indian campuses.',
      fare: '₹79',
      tripId: 'GD-1192-IIT',
      routeFrom: 'Kandi Junction',
      routeTo: 'IIT Academic Block',
      captainName: 'B. Shiva (4.96 ★)',
      captainVehicle: 'Honda Shine 125 • TS 15 EK 2911'
    }
  ];

  const totalReviews = reviews.length;
  const [direction, setDirection] = useState('next');

  // Continuous Auto-play timer (auto moves every 4s, pauses on hover)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection('next');
      setCarouselIndex((prev) => (prev + 1) % totalReviews);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalReviews, isAutoPlaying]);

  // Handlers
  const handleNext = () => {
    setDirection('next');
    setCarouselIndex((prev) => (prev + 1) % totalReviews);
  };
  const handlePrev = () => {
    setDirection('prev');
    setCarouselIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Card items: Left (Prev), Center (Active), Right (Next)
  const activeReview = reviews[carouselIndex];
  const prevIndex = (carouselIndex - 1 + totalReviews) % totalReviews;
  const nextIndex = (carouselIndex + 1) % totalReviews;
  const prevReview = reviews[prevIndex];
  const nextReview = reviews[nextIndex];

  return (
    <section
      className="py-10 sm:py-16 bg-white relative overflow-hidden scroll-mt-20 selection:bg-amber-100"
      id="testimonials-section"
    >
      {/* ========================================================= */}
      {/* BACKGROUND DECORATIVE SHAPES (EXACT REFERENCE REPLICA)   */}
      {/* ========================================================= */}
      {/* Top-Right Yellow Circle Blob */}
      <div className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#F5B800] pointer-events-none -z-0 opacity-90" />

      {/* Bottom-Left Soft Blue Circle Blob */}
      <div className="absolute -bottom-28 -left-28 sm:-bottom-36 sm:-left-36 w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full bg-[#BFDBFE]/50 pointer-events-none -z-0" />

      {/* Bottom-Right Dotted Grid Accent */}
      <div className="hidden lg:grid absolute bottom-6 right-8 grid-cols-5 gap-3 pointer-events-none -z-0 opacity-40">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600/40" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ========================================================= */}
          {/* LEFT COLUMN: TITLE, HIGHLIGHTS & STATS                    */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-200/80 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-[#2563EB] text-[11px] font-extrabold tracking-wider uppercase font-['Outfit']">
                VERIFIED CUSTOMER STORIES
              </span>
            </div>

            {/* Refined Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-slate-800 leading-[1.14] tracking-[-0.02em] font-['Outfit']">
              <span>Real people.</span><br />
              <span>Real momentum.</span>
            </h2>

            {/* Yellow Accent Bar with dot */}
            <div className="flex items-center gap-2">
              <div className="w-16 h-1.5 bg-[#F5B800] rounded-full" />
              <div className="w-2.5 h-1.5 bg-amber-400 rounded-full" />
            </div>

            {/* Rich Substantial Description */}
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-lg">
              From ambitious daily tech park commutes in Hyderabad to midnight airport transfers in Bengaluru and Mumbai, over <strong className="text-slate-900 font-bold">120,000+ verified commuters</strong> trust GODest for punctual captains, live GPS safety tracking, and flat, surge-free pricing.
            </p>

            {/* Trust Highlights - Sleek 3-Column Glassmorphic Ribbon */}
            {/* <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/80 grid grid-cols-3 divide-x divide-slate-200/80 text-center max-w-lg shadow-2xs">
              <div className="px-1.5 sm:px-2">
                <div className="inline-flex p-1.5 rounded-xl bg-amber-100/80 text-amber-700 mb-1">
                  <Zap size={14} className="fill-amber-500" />
                </div>
                <p className="font-bold text-slate-900 text-xs font-['Outfit']">Zero Surge</p>
                <p className="text-[10px] text-slate-500 font-medium">Flat fares always</p>
              </div>

              <div className="px-1.5 sm:px-2">
                <div className="inline-flex p-1.5 rounded-xl bg-blue-100/80 text-blue-700 mb-1">
                  <ShieldCheck size={14} />
                </div>
                <p className="font-bold text-slate-900 text-xs font-['Outfit']">100% Police</p>
                <p className="text-[10px] text-slate-500 font-medium">Verified captains</p>
              </div>

              <div className="px-1.5 sm:px-2">
                <div className="inline-flex p-1.5 rounded-xl bg-emerald-100/80 text-emerald-700 mb-1">
                  <Clock size={14} />
                </div>
                <p className="font-bold text-slate-900 text-xs font-['Outfit']">2-3 Min ETA</p>
                <p className="text-[10px] text-slate-500 font-medium">Rapid dispatch</p>
              </div>
            </div> */}

            {/* 3 Metric Stats from Reference Image */}
            <div className="pt-2 flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8">
              {/* Stat 1: 50,000+ happy riders */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <Users size={22} className="stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-tight font-['Outfit']">
                    50,000+
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">happy riders</p>
                </div>
              </div>

              {/* Stat 2: 4.96/5 average rating */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <BarChart3 size={22} className="stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-tight font-['Outfit']">
                    4.96 / 5
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">average rating</p>
                </div>
              </div>

              {/* Stat 3: 99.4% zero surge */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <Heart size={22} className="stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-tight font-['Outfit']">
                    99.4%
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">zero surge rate</p>
                </div>
              </div>
            </div>

            {/* Quick Action CTA */}
            {/* <div className="pt-2 flex items-center gap-4">
              <a
                href="#book-section"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <span>Experience Zero Surge Ride</span>
                <ArrowRight size={14} />
              </a>
            </div> */}
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 3D CARD CAROUSEL (EXACT 3-CARD STACK)      */}
          {/* ========================================================= */}
          <div
            className="lg:col-span-7 flex flex-col items-center lg:items-end justify-center select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* 3D Stacked Carousel Stage */}
            <div className="relative w-full max-w-[560px] h-[460px] sm:h-[490px] flex items-center justify-center">
              {/* 1. LEFT CARD (Warm Cream/Yellow Background, Tilted Left) */}
              {prevReview && (
                <div
                  key={`prev-${prevReview.id}`}
                  onClick={handlePrev}
                  className="absolute left-0 sm:left-4 w-[240px] sm:w-[270px] h-[340px] sm:h-[370px] bg-[#FEF9E7] rounded-[28px] p-6 flex flex-col justify-between shadow-md cursor-pointer transition-all duration-500 ease-out transform -rotate-6 -translate-x-4 sm:-translate-x-8 translate-y-3 scale-95 opacity-80 hover:opacity-100 hover:scale-100 hover:-translate-x-6 sm:hover:-translate-x-12 hover:-rotate-8 z-10 border border-amber-200/60 hover:border-amber-400 hover:shadow-xl group"
                  title="Click to view previous customer story"
                >
                  {/* Floating tooltip on hover */}
                  <div className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-full bg-[#F5B800] text-slate-950 text-[10px] font-black uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm flex items-center gap-1 scale-90 group-hover:scale-100 pointer-events-none">
                    <ChevronLeft size={12} />
                    <span>Previous</span>
                  </div>

                  <div>
                    {/* User Avatar */}
                    <img
                      src={prevReview.avatar}
                      alt={prevReview.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                      className="w-13 h-13 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white shadow-xs group-hover:scale-105 transition-transform"
                    />
                    <div
                      style={{ display: 'none' }}
                      className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-amber-500 text-white font-bold items-center justify-center text-sm shadow-xs border-2 border-white"
                    >
                      {prevReview.initials}
                    </div>

                    {/* Short quote */}
                    <p className="text-slate-800 font-bold text-sm sm:text-base leading-snug mt-6 font-['Outfit']">
                      “{prevReview.shortQuote}”
                    </p>
                  </div>

                  {/* Decorative skeleton lines */}
                  <div className="space-y-2 pt-4 opacity-50">
                    <div className="h-2 bg-amber-300/60 rounded-full w-24" />
                    <div className="h-2 bg-amber-300/40 rounded-full w-16" />
                  </div>
                </div>
              )}

              {/* 2. CENTER CARD (Hero White Card, Front & Prominent with Highlight Aura) */}
              {activeReview && (
                <div
                  key={activeReview.id}
                  className={`relative w-full max-w-[340px] sm:max-w-[390px] min-h-[430px] sm:min-h-[450px] bg-white rounded-[32px] p-7 sm:p-9 flex flex-col justify-between shadow-[0_25px_60px_-15px_rgba(0,0,0,0.14)] z-20 border border-slate-100 ${
                    direction === 'next' ? 'animate-card-slide-next' : 'animate-card-slide-prev'
                  }`}
                >
                  {/* Glowing Ambient Highlight Aura */}
                  <div className="absolute -inset-1.5 rounded-[36px] bg-gradient-to-tr from-amber-400/25 via-blue-500/20 to-amber-300/30 blur-md pointer-events-none -z-10 animate-card-glow" />

                  {/* Top Golden-Blue Accent Bar */}
                  <div className="absolute top-0 inset-x-8 h-1.5 bg-gradient-to-r from-amber-400 via-[#F5B800] to-blue-600 rounded-b-full shadow-xs" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      {/* Big Solid Blue Double Quote SVG */}
                      <div className="text-[#2563EB]">
                        <svg
                          className="w-10 h-8 sm:w-12 sm:h-9 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      {/* Moving Card Highlight: Zero Surge Ride Tag */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 text-[11px] font-extrabold shadow-2xs">
                        <Zap size={12} className="text-[#F5B800] fill-[#F5B800]" />
                        <span>Zero Surge Ride</span>
                      </span>
                    </div>

                    {/* 5 Solid Gold Stars */}
                    <div className="flex items-center gap-1 text-[#F5B800]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className="fill-[#F5B800]" />
                      ))}
                    </div>

                    {/* Bold Headline */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] leading-snug font-['Outfit']">
                      “{activeReview.highlightPhrase}”
                    </h3>

                    {/* Review Body */}
                    <p className="text-slate-500 text-xs sm:text-[14px] leading-relaxed font-normal">
                      {activeReview.quote}
                    </p>
                  </div>

                  {/* Rider Profile at Bottom */}
                  <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={activeReview.avatar}
                        alt={activeReview.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                      />
                      <div
                        style={{ display: 'none' }}
                        className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold items-center justify-center text-sm shadow-xs border-2 border-white"
                      >
                        {activeReview.initials}
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base font-['Outfit'] leading-tight">
                          {activeReview.name}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium truncate max-w-[170px]">
                          {activeReview.role}
                        </p>
                      </div>
                    </div>

                    {/* Verified Trip Receipt Trigger */}
                    <button
                      type="button"
                      onClick={() => setSelectedReceiptReview(activeReview)}
                      className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-blue-600 transition-colors shadow-2xs cursor-pointer"
                      title="View Verified Trip Receipt"
                    >
                      <Receipt size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* 3. RIGHT CARD (Pastel Blue Background, Tilted Right) */}
              {nextReview && (
                <div
                  key={`next-${nextReview.id}`}
                  onClick={handleNext}
                  className="absolute right-0 sm:right-4 w-[240px] sm:w-[270px] h-[340px] sm:h-[370px] bg-[#EDF5FF] rounded-[28px] p-6 flex flex-col justify-between shadow-md cursor-pointer transition-all duration-500 ease-out transform rotate-6 translate-x-4 sm:translate-x-8 translate-y-3 scale-95 opacity-80 hover:opacity-100 hover:scale-100 hover:translate-x-6 sm:hover:translate-x-12 hover:rotate-8 z-10 border border-blue-200/60 hover:border-blue-400 hover:shadow-xl group"
                  title="Click to view next customer story"
                >
                  {/* Floating tooltip on hover */}
                  <div className="absolute -top-3 right-6 px-2.5 py-0.5 rounded-full bg-[#2563EB] text-white text-[10px] font-black uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm flex items-center gap-1 scale-90 group-hover:scale-100 pointer-events-none">
                    <span>Next</span>
                    <ChevronRight size={12} />
                  </div>

                  <div>
                    {/* User Avatar */}
                    <img
                      src={nextReview.avatar}
                      alt={nextReview.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                      className="w-13 h-13 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white shadow-xs group-hover:scale-105 transition-transform"
                    />
                    <div
                      style={{ display: 'none' }}
                      className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-indigo-600 text-white font-bold items-center justify-center text-sm shadow-xs border-2 border-white"
                    >
                      {nextReview.initials}
                    </div>

                    {/* Short quote */}
                    <p className="text-slate-800 font-bold text-sm sm:text-base leading-snug mt-6 font-['Outfit']">
                      “{nextReview.shortQuote}”
                    </p>
                  </div>

                  {/* Decorative skeleton lines */}
                  <div className="space-y-2 pt-4 opacity-50">
                    <div className="h-2 bg-blue-300/60 rounded-full w-24" />
                    <div className="h-2 bg-blue-300/40 rounded-full w-16" />
                  </div>
                </div>
              )}
            </div>

            {/* ========================================================= */}
            {/* CAROUSEL BOTTOM CONTROLS: INDICATOR, COUNTER & ARROWS     */}
            {/* ========================================================= */}
            <div className="w-full max-w-[560px] flex items-center justify-between sm:justify-end gap-5 sm:gap-7 mt-6 px-4">
              
              {/* Pagination Dots with Smooth Pill Highlight */}
              <div className="flex items-center gap-1.5">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setDirection(idx > carouselIndex ? 'next' : 'prev');
                      setCarouselIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === carouselIndex
                        ? 'w-10 bg-[#F5B800] shadow-2xs'
                        : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Slide Counter */}
              <div className="text-slate-600 font-bold text-xs sm:text-sm font-mono tracking-wider">
                0{carouselIndex + 1} <span className="text-slate-300">/</span> 0{totalReviews}
              </div>

              {/* Prev & Next Navigation Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FEF0C7] hover:bg-[#F5B800] text-slate-900 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-xs border border-amber-300/60 cursor-pointer"
                  aria-label="Previous customer story"
                  title="Previous story"
                >
                  <ChevronLeft size={18} className="stroke-[2.5]" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-md cursor-pointer"
                  aria-label="Next customer story"
                  title="Next story"
                >
                  <ChevronRight size={18} className="stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* VERIFIED DIGITAL RIDE RECEIPT MODAL                      */}
      {/* ========================================================= */}
      {selectedReceiptReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedReceiptReview(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Receipt className="text-amber-400" size={18} />
                <div>
                  <h3 className="font-bold text-sm font-['Outfit']">Verified Trip Receipt</h3>
                  <p className="text-[10px] text-slate-400 font-mono">{selectedReceiptReview.tripId}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedReceiptReview(null)}
                className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4 text-xs text-slate-800">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                <div className="flex justify-between font-semibold">
                  <span className="text-slate-500">Route</span>
                  <span className="text-slate-900">{selectedReceiptReview.routeFrom} ➔ {selectedReceiptReview.routeTo}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span className="text-slate-500">Captain</span>
                  <span className="text-slate-900">{selectedReceiptReview.captainName}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span className="text-slate-500">Vehicle</span>
                  <span className="text-slate-900 font-mono text-[11px]">{selectedReceiptReview.captainVehicle}</span>
                </div>
              </div>

              <div className="space-y-1.5 border-t border-b border-slate-100 py-3">
                <div className="flex justify-between text-slate-600">
                  <span>Base Distance Fare</span>
                  <span>{selectedReceiptReview.fare}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Surge Multiplier</span>
                  <span className="text-emerald-600 font-bold">₹0.00 (Zero Surge Guaranteed)</span>
                </div>
                <div className="flex justify-between text-slate-900 font-bold text-sm pt-1.5 border-t border-dashed border-slate-200">
                  <span>Total Amount Paid</span>
                  <span className="text-blue-700 text-base font-extrabold">{selectedReceiptReview.fare}</span>
                </div>
              </div>

              <div className="text-center bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 text-emerald-800 flex items-center justify-center gap-1.5 font-semibold text-xs">
                <CheckCircle2 size={14} className="text-emerald-600" />
                <span>100% Police Verified Captain & Zero Surge Honored</span>
              </div>

              <button
                onClick={() => setSelectedReceiptReview(null)}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors text-xs"
              >
                Close Receipt
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
