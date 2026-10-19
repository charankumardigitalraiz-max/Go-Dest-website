import React, { useState } from 'react';
import { Smartphone, Sparkles, Check, QrCode, Shield, Zap, ArrowRight, Star, Clock } from 'lucide-react';

export default function AppDownloadBanner() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleSimulateScan = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-[#FFFBEB] to-yellow-50/90 text-slate-900 py-12 sm:py-16 border-t border-b border-amber-200/80" id="app-download-section">
      
      {/* Decorative Golden Road Speed Lines & Ambient Warm Yellow Accents */}
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full opacity-25 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 800 500" fill="none">
          <circle cx="650" cy="180" r="260" fill="url(#appYellowGlow)" />
          <path d="M400 -50 L750 550 M450 -50 L800 550 M500 -50 L850 550" stroke="#F5B800" strokeWidth="10" strokeDasharray="25 15" opacity="0.35" />
          <defs>
            <radialGradient id="appYellowGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(650 180) rotate(90) scale(260)">
              <stop stopColor="#F5B800" stopOpacity="0.25" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-200/35 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Full-Width Container matching Navbar & Hero max-w-7xl */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Content Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Top Micro Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-amber-300/80 text-slate-800 text-[11px] font-semibold tracking-[0.08em] uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#F5B800] animate-ping"></span>
              <span>OFFICIAL ALL-INDIA MOBILITY APP</span>
            </div>

            {/* Main Headline */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal font-['Outfit'] tracking-[-0.03em] leading-[1.2] text-slate-800">
                <span>Book Rides Faster with the </span>
                <span className="font-bold bg-gradient-to-r from-amber-600 via-[#F5B800] to-amber-500 bg-clip-text text-transparent">
                  GODest App
                </span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm lg:text-base mt-2.5 leading-relaxed max-w-2xl font-normal">
                India's trusted ride-hailing app for daily commutes, airport transfers, and outstation trips nationwide. Experience guaranteed 3-minute doorstep pickups, transparent zero surge fares, and 100% verified captains.
              </p>
            </div>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="p-3 rounded-2xl bg-white/95 border border-amber-200/80 shadow-xs">
                <Clock size={16} className="text-blue-600 mb-1" />
                <strong className="text-xs font-bold text-slate-900 block">3-Min Pickup</strong>
                <span className="text-[10px] text-slate-500">Nearest captain dispatch</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/95 border border-amber-200/80 shadow-xs">
                <Zap size={16} className="text-amber-500 mb-1" />
                <strong className="text-xs font-bold text-slate-900 block">Zero Surge</strong>
                <span className="text-[10px] text-slate-500">Fixed, fair 24/7 rates</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/95 border border-amber-200/80 shadow-xs">
                <Shield size={16} className="text-emerald-600 mb-1" />
                <strong className="text-xs font-bold text-slate-900 block">Verified Captains</strong>
                <span className="text-[10px] text-slate-500">Police background checked</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/95 border border-amber-200/80 shadow-xs">
                <Star size={16} className="text-[#F5B800] fill-[#F5B800] mb-1" />
                <strong className="text-xs font-bold text-slate-900 block">4.9 / 5 Rating</strong>
                <span className="text-[10px] text-slate-500">50K+ happy riders</span>
              </div>
            </div>

            {/* Store Download Action Buttons (Official Sleek Dark Badges) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Google Play Button */}
              <button
                type="button"
                onClick={handleSimulateScan}
                className="flex items-center gap-3 bg-slate-950 hover:bg-slate-800 text-white px-5 py-3 rounded-2xl transition-all active:scale-95 cursor-pointer shadow-md group"
              >
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M3.6 1.8L13.8 12 3.6 22.2C3.2 21.8 3 21.2 3 20.4V3.6C3 2.8 3.2 2.2 3.6 1.8Z" fill="#FFFFFF" />
                  <path d="M17.2 8.6L13.8 12 3.6 1.8C4.1 1.5 4.8 1.5 5.4 1.9L17.2 8.6Z" fill="#FFC107" />
                  <path d="M17.2 15.4L5.4 22.1C4.8 22.5 4.1 22.5 3.6 22.2L13.8 12 17.2 15.4Z" fill="#FF5252" />
                  <path d="M20.8 10.6C21.6 11.1 22 11.6 22 12C22 12.4 21.6 12.9 20.8 13.4L17.2 15.4 13.8 12 17.2 8.6 20.8 10.6Z" fill="#4CAF50" />
                </svg>
                <div className="text-left leading-tight">
                  <span className="text-[10px] uppercase font-medium text-slate-400 block">GET IT ON</span>
                  <strong className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors">Google Play</strong>
                </div>
              </button>

              {/* App Store Button */}
              <button
                type="button"
                onClick={handleSimulateScan}
                className="flex items-center gap-3 bg-slate-950 hover:bg-slate-800 text-white px-5 py-3 rounded-2xl transition-all active:scale-95 cursor-pointer shadow-md group"
              >
                <svg className="w-6 h-6 fill-white flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.66-.82 1.11-1.96.99-3.1-.96.04-2.13.65-2.82 1.46-.61.71-1.14 1.87-1 2.98 1.08.08 2.18-.54 2.83-1.34z" />
                </svg>
                <div className="text-left leading-tight">
                  <span className="text-[10px] uppercase font-medium text-slate-400 block">Download on the</span>
                  <strong className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors">App Store</strong>
                </div>
              </button>
            </div>

            {/* Captain Partner Registration */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-700">
              <span>Own a Bike, Auto, or Commercial Car?</span>
              <a
                href="https://wa.me/914060007000?text=Hi%20GODest,%20I%20want%20to%20register%20as%20a%20Captain%20(Driver%20Partner)"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 font-bold inline-flex items-center gap-1 transition-colors underline"
              >
                <span>Register as a Captain & Start Earning</span>
                <ArrowRight size={13} />
              </a>
            </div>

            {downloadSuccess && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold animate-in fade-in">
                <Check size={15} className="text-emerald-700" />
                <span>Download link initiated! Open GODest on your phone to ride instantly.</span>
              </div>
            )}

          </div>

          {/* Right Visual Column: Modern Phone Showcase + QR Code (5 Cols) */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end gap-5 sm:gap-7">
            
            {/* Phone Render with subtle glow */}
            <div className="relative w-44 sm:w-52 rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-300/60 bg-white flex-shrink-0 transform hover:scale-105 transition-transform duration-500">
              <img
                src="/images/godest_app_phone_mockup.png"
                alt="GODest Mobile App Interface"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Crisp QR Code Card */}
            <div className="w-40 sm:w-44 bg-white rounded-3xl p-4 shadow-xl border-2 border-[#F5B800] text-center space-y-2.5 flex-shrink-0">
              <div className="w-28 h-28 mx-auto p-2 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  fill="#0F172A"
                >
                  <rect x="5" y="5" width="26" height="26" rx="4" fill="#0F172A" />
                  <rect x="9" y="9" width="18" height="18" rx="2" fill="#FFFFFF" />
                  <rect x="13" y="13" width="10" height="10" rx="1" fill="#F5B800" />

                  <rect x="69" y="5" width="26" height="26" rx="4" fill="#0F172A" />
                  <rect x="73" y="9" width="18" height="18" rx="2" fill="#FFFFFF" />
                  <rect x="77" y="13" width="10" height="10" rx="1" fill="#F5B800" />

                  <rect x="5" y="69" width="26" height="26" rx="4" fill="#0F172A" />
                  <rect x="9" y="73" width="18" height="18" rx="2" fill="#FFFFFF" />
                  <rect x="13" y="77" width="10" height="10" rx="1" fill="#F5B800" />

                  <rect x="36" y="8" width="8" height="8" />
                  <rect x="48" y="8" width="6" height="6" />
                  <rect x="38" y="20" width="12" height="6" />
                  <rect x="55" y="22" width="8" height="8" />
                  <rect x="8" y="36" width="6" height="14" />
                  <rect x="20" y="38" width="8" height="8" />
                  <rect x="34" y="34" width="8" height="8" />
                  <rect x="46" y="36" width="12" height="12" fill="#F5B800" />
                  <rect x="64" y="36" width="8" height="6" />
                  <rect x="78" y="38" width="14" height="6" />
                  <rect x="8" y="54" width="14" height="8" />
                  <rect x="28" y="50" width="8" height="8" />
                  <rect x="40" y="54" width="10" height="8" />
                  <rect x="56" y="52" width="6" height="14" />
                  <rect x="68" y="48" width="8" height="10" />
                  <rect x="82" y="50" width="10" height="10" />
                  <rect x="36" y="68" width="14" height="6" />
                  <rect x="54" y="70" width="10" height="8" />
                  <rect x="70" y="66" width="8" height="14" />
                  <rect x="82" y="66" width="10" height="6" />
                  <rect x="36" y="80" width="8" height="12" />
                  <rect x="48" y="84" width="12" height="8" />
                  <rect x="66" y="84" width="16" height="8" />
                  <rect x="86" y="78" width="6" height="14" />

                  <circle cx="50" cy="50" r="5" fill="#F5B800" />
                </svg>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 font-['Outfit']">
                  Scan & Ride Now
                </h4>
                <p className="text-[10px] text-slate-500 font-medium">
                  Point phone camera
                </p>
              </div>

              <button
                type="button"
                onClick={handleSimulateScan}
                className="w-full flex items-center justify-center gap-1.5 bg-[#F5B800] hover:bg-[#E5A800] text-slate-950 font-bold py-1.5 px-2 rounded-xl text-[11px] transition-colors shadow-xs cursor-pointer"
              >
                <QrCode size={13} />
                <span>Scan with Camera</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
