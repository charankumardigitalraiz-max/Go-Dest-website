import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Smartphone,
  Sparkles,
  QrCode,
  Shield,
  Zap,
  Star,
  Clock,
  ArrowRight,
  Check,
  Award,
  Copy,
  CheckCircle2,
  PhoneCall,
  Download,
  ShieldCheck,
  Bike,
  Car
} from 'lucide-react';
import { AutoRickshawIcon } from './VehicleIcon';
import Logo from './Logo';

export default function AppDownloadModal({
  isOpen,
  onClose,
  defaultTab = 'rider',
  onNavigateToPartner
}) {
  const [activeTab, setActiveTab] = useState(defaultTab); // 'rider' | 'partner'
  const [copiedLink, setCopiedLink] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const riderPlayStoreUrl = 'https://play.google.com/store/apps/details?id=in.godest.rider';
  const riderAppStoreUrl = 'https://apps.apple.com/in/app/godest-ride-booking/id640000000';

  const partnerPlayStoreUrl = 'https://play.google.com/store/apps/details?id=in.godest.captain';
  const partnerAppStoreUrl = 'https://apps.apple.com/in/app/godest-captain-partner/id650000000';

  const currentUrl = activeTab === 'rider' ? riderPlayStoreUrl : partnerPlayStoreUrl;

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handlePartnerWebsiteClick = () => {
    onClose();
    if (onNavigateToPartner) {
      onNavigateToPartner();
    } else {
      const el = document.getElementById('contact-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2.5 sm:p-5 lg:p-6 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-[32px] shadow-2xl overflow-hidden border border-slate-200/90 animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh] sm:max-h-[92vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ======================================================== */}
        {/* TOP HERO HEADER WITH DYNAMIC AMBIENT BACKDROP            */}
        {/* ======================================================== */}
        <div
          className={`p-3.5 sm:p-6 lg:p-7 relative overflow-hidden transition-all duration-300 flex-shrink-0 ${activeTab === 'rider'
            ? 'bg-gradient-to-br from-[#0B132B] via-[#1E3A8A] to-[#2563EB] text-white'
            : 'bg-gradient-to-br from-[#F5B800] via-[#EAB308] to-[#CA8A04] text-slate-950'
            }`}
        >
          {/* Glowing Ambient Light Orbs */}
          <div
            className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-colors duration-300 opacity-25 ${activeTab === 'rider' ? 'bg-[#F5B800]' : 'bg-white'
              }`}
          />
          <div
            className={`absolute -bottom-10 -left-10 w-60 h-60 rounded-full blur-2xl pointer-events-none ${activeTab === 'rider' ? 'bg-blue-500/20' : 'bg-amber-300/30'
              }`}
          />

          {/* Top Bar with Brand Badge & Close Button */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Logo size="small" dark={true} />
            </div>

            <button
              type="button"
              onClick={onClose}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95 flex-shrink-0 group ${activeTab === 'rider'
                ? 'bg-[#F5B800] hover:bg-[#E5A800] text-slate-950 border border-amber-300'
                : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white border border-blue-400/40'
                }`}
              aria-label="Close modal"
            >
              <X size={16} className="transition-transform duration-200 group-hover:rotate-90" />
            </button>
          </div>

          {/* Headline & Value Proposition */}
          <div className="relative z-10 mt-2 sm:mt-3.5 space-y-1">
            <h3
              className={`text-base sm:text-2xl lg:text-3xl font-black font-['Outfit'] tracking-tight leading-snug ${activeTab === 'rider' ? 'text-white' : 'text-slate-950'
                }`}
            >
              {activeTab === 'rider' ? (
                <>
                  Fastest Doorstep Rides,{' '}
                  <span className="text-[#F5B800]">Zero Surge.</span>
                </>
              ) : (
                <>
                  Keep 100% of Every Fare,{' '}
                  <span className="text-white drop-shadow-sm">0% Commission.</span>
                </>
              )}
            </h3>

            <p
              className={`text-[11px] sm:text-xs md:text-sm font-medium max-w-lg leading-relaxed line-clamp-2 sm:line-clamp-none ${activeTab === 'rider' ? 'text-blue-100' : 'text-slate-900/90'
                }`}
            >
              {activeTab === 'rider'
                ? 'Bike Taxi, Metered Auto & AC Cabs at your doorstep in under 3 minutes across Hyderabad and all major hubs.'
                : 'Drive your Bike, Auto, or Cab on India’s fairest driver network with instant daily UPI cashouts.'}
            </p>
          </div>

          {/* Interactive Floating Mode Switcher */}
          <div
            className={`relative z-10 mt-2.5 sm:mt-4 p-1 rounded-xl sm:rounded-2xl grid grid-cols-2 gap-1 backdrop-blur-md transition-colors duration-200 ${activeTab === 'rider'
              ? 'bg-black/25 border border-white/15'
              : 'bg-slate-950/20 border border-slate-950/20'
              }`}
          >
            <button
              type="button"
              onClick={() => setActiveTab('rider')}
              className={`py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1 sm:gap-2 ${activeTab === 'rider'
                ? 'bg-[#F5B800] text-slate-950 shadow-md ring-1 ring-amber-400/50'
                : 'text-slate-950/80 font-bold hover:text-slate-950 hover:bg-black/10'
                }`}
            >
              <Smartphone
                size={13}
                className={activeTab === 'rider' ? 'text-slate-950 flex-shrink-0' : 'text-slate-950 flex-shrink-0'}
              />
              <span className="truncate">Rider App</span>
              <span className="hidden sm:inline font-bold opacity-80 text-[10px]">(Book Rides)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('partner')}
              className={`py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1 sm:gap-1.5 ${activeTab === 'partner'
                ? 'bg-[#2563EB] text-white shadow-md ring-1 ring-blue-700/50'
                : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
            >
              <Award
                size={13}
                className={`flex-shrink-0 ${activeTab === 'partner' ? 'text-[#F5B800] fill-amber-400' : 'text-amber-300 fill-amber-300'}`}
              />
              <span className="truncate">Captain / Partner</span>
              <span
                className={`text-[8.5px] sm:text-[9px] font-extrabold px-1.5 py-0.5 rounded-full flex-shrink-0 ${activeTab === 'partner' ? 'bg-[#F5B800] text-slate-950' : 'bg-white/20 text-white'
                  }`}
              >
                0% Comm
              </span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MODAL BODY (Scrollable content)                          */}
        {/* ======================================================== */}
        <div className="p-2.5 sm:p-6 lg:p-7 space-y-2.5 sm:space-y-5 overflow-y-auto">

          {/* TAB 1: RIDER APP VIEW */}
          {activeTab === 'rider' && (
            <div className="space-y-2.5 sm:space-y-5 animate-in fade-in duration-150">

              {/* 3 Supported Ride Modes Visual Strip */}
              {/* <div className="grid grid-cols-3 gap-1 sm:gap-2.5">
                <div className="p-1.5 sm:p-3 rounded-lg sm:rounded-2xl bg-blue-50/80 border border-blue-200/70 flex items-center gap-1 sm:gap-2.5 shadow-2xs">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <Bike size={13} className="sm:w-[17px] sm:h-[17px]" />
                  </div>
                  <div className="min-w-0">
                    <strong className="text-[10px] sm:text-xs font-black text-slate-900 block font-['Outfit'] truncate">Moto</strong>
                    <span className="text-[8.5px] sm:text-[10px] text-blue-800 font-bold block truncate">From ₹25</span>
                  </div>
                </div>

                <div className="p-1.5 sm:p-3 rounded-lg sm:rounded-2xl bg-amber-50/80 border border-amber-200/70 flex items-center gap-1 sm:gap-2.5 shadow-2xs">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <AutoRickshawIcon size={13} className="sm:w-[17px] sm:h-[17px]" />
                  </div>
                  <div className="min-w-0">
                    <strong className="text-[10px] sm:text-xs font-black text-slate-900 block font-['Outfit'] truncate">Auto</strong>
                    <span className="text-[8.5px] sm:text-[10px] text-amber-900 font-bold block truncate">From ₹35</span>
                  </div>
                </div>

                <div className="p-1.5 sm:p-3 rounded-lg sm:rounded-2xl bg-slate-100/80 border border-slate-200 flex items-center gap-1 sm:gap-2.5 shadow-2xs">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <Car size={13} className="sm:w-[17px] sm:h-[17px]" />
                  </div>
                  <div className="min-w-0">
                    <strong className="text-[10px] sm:text-xs font-black text-slate-900 block font-['Outfit'] truncate">AC Cabs</strong>
                    <span className="text-[8.5px] sm:text-[10px] text-slate-700 font-bold block truncate">From ₹89</span>
                  </div>
                </div>
              </div> */}

              {/* Download Buttons & QR Code Split Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-stretch">

                {/* Left: 2 Official Store Download Buttons (7 Cols) */}
                <div className="sm:col-span-7 flex flex-col justify-between space-y-1.5 sm:space-y-2.5">
                  <span className="text-[9.5px] sm:text-[11px] font-black uppercase tracking-wider text-slate-500 block">
                    Download for iOS & Android
                  </span>

                  {/* Google Play Button */}
                  <a
                    href={riderPlayStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white p-2 sm:p-3.5 rounded-xl sm:rounded-2xl transition-all shadow-md hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-0.5 active:scale-98 group cursor-pointer border border-blue-400/30"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
                        <path d="M3.6 1.8L13.8 12 3.6 22.2C3.2 21.8 3 21.2 3 20.4V3.6C3 2.8 3.2 2.2 3.6 1.8Z" fill="#FFFFFF" />
                        <path d="M17.2 8.6L13.8 12 3.6 1.8C4.1 1.5 4.8 1.5 5.4 1.9L17.2 8.6Z" fill="#FFC107" />
                        <path d="M17.2 15.4L5.4 22.1C4.8 22.5 4.1 22.5 3.6 22.2L13.8 12 17.2 15.4Z" fill="#FF5252" />
                        <path d="M20.8 10.6C21.6 11.1 22 11.6 22 12C22 12.4 21.6 12.9 20.8 13.4L17.2 8.6 20.8 10.6Z" fill="#4CAF50" />
                      </svg>
                    </div>
                    <div className="text-left leading-tight flex-1 min-w-0">
                      <span className="text-[8px] sm:text-[10px] uppercase font-bold text-blue-100 block tracking-wider">
                        GET IT ON
                      </span>
                      <strong className="text-[11.5px] sm:text-sm font-black text-white font-['Outfit'] group-hover:text-amber-300 transition-colors block truncate">
                        Google Play Store
                      </strong>
                    </div>
                    <ArrowRight size={13} className="text-blue-200 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0 sm:w-4 sm:h-4" />
                  </a>

                  {/* Apple App Store Button */}
                  <a
                    href={riderAppStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3.5 bg-[#F5B800] hover:bg-[#E5A800] text-slate-950 p-2 sm:p-3.5 rounded-xl sm:rounded-2xl transition-all shadow-md hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-0.5 active:scale-98 group cursor-pointer border border-amber-400/40"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-slate-950" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.66-.82 1.11-1.96.99-3.1-.96.04-2.13.65-2.82 1.46-.61.71-1.14 1.87-1 2.98 1.08.08 2.18-.54 2.83-1.34z" />
                      </svg>
                    </div>
                    <div className="text-left leading-tight flex-1 min-w-0">
                      <span className="text-[8px] sm:text-[10px] uppercase font-bold text-slate-800 block tracking-wider">
                        DOWNLOAD ON THE
                      </span>
                      <strong className="text-[11.5px] sm:text-sm font-black text-slate-950 font-['Outfit'] transition-colors block truncate">
                        Apple App Store
                      </strong>
                    </div>
                    <ArrowRight size={13} className="text-slate-800 group-hover:text-slate-950 group-hover:translate-x-1 transition-all flex-shrink-0 sm:w-4 sm:h-4" />
                  </a>

                  {/* Share Link Utility */}
                  <div className="pt-0.5 flex items-center justify-between text-xs text-slate-500">
                    <span className="text-[9.5px] sm:text-[11px] font-medium">Free download • Version 3.4.1</span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="text-[#2563EB] hover:underline font-bold text-[9.5px] sm:text-[11px] flex items-center gap-1 cursor-pointer"
                    >
                      {copiedLink ? <Check size={11} className="text-emerald-600" /> : <Copy size={11} />}
                      <span>{copiedLink ? 'Link Copied!' : 'Copy Download Link'}</span>
                    </button>
                  </div>
                </div>

                {/* Right: Tactile Camera QR Code Box (5 Cols) */}
                <div className="sm:col-span-5 bg-gradient-to-b from-slate-50 to-blue-50/40 p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/90 flex flex-row sm:flex-col items-center justify-center text-left sm:text-center gap-2.5 sm:gap-2">
                  <div className="relative p-1 sm:p-2.5 bg-white rounded-lg sm:rounded-2xl border border-slate-200 shadow-xs flex-shrink-0">
                    {/* Viewfinder Corner Accents */}
                    <div className="absolute -top-0.5 -left-0.5 sm:-top-1 sm:-left-1 w-2 sm:w-3 h-2 sm:h-3 border-t-2 border-l-2 border-[#2563EB] rounded-tl" />
                    <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 sm:w-3 h-2 sm:h-3 border-t-2 border-r-2 border-[#2563EB] rounded-tr" />
                    <div className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 w-2 sm:w-3 h-2 sm:h-3 border-b-2 border-l-2 border-[#2563EB] rounded-bl" />
                    <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-2 sm:w-3 h-2 sm:h-3 border-b-2 border-r-2 border-[#2563EB] rounded-br" />

                    <div className="sm:hidden">
                      <QrCode size={40} className="text-slate-900" />
                    </div>
                    <div className="hidden sm:block">
                      <QrCode size={88} className="text-slate-900" />
                    </div>
                  </div>

                  <div className="space-y-0.5 min-w-0">
                    <span className="text-[10px] sm:text-xs font-black text-slate-900 block font-['Outfit']">
                      Scan with Phone Camera
                    </span>
                    <p className="text-[8.5px] sm:text-[10px] text-slate-500 leading-tight">
                      Instantly opens your device store to install.
                    </p>
                  </div>
                </div>

              </div>

              {/* Guarantees Strip */}
              {/* <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  <span>3-Minute Pickup Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  <span>Zero Surge Forever</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  <span>Police 112 Integrated</span>
                </div>
              </div> */}

            </div>
          )}

          {/* TAB 2: PARTNER APP VIEW */}
          {activeTab === 'partner' && (
            <div className="space-y-2.5 sm:space-y-5 animate-in fade-in duration-150">

              {/* Partner Perks Highlight Cards */}
              {/* <div className="grid grid-cols-3 gap-1 sm:gap-2.5">
                <div className="p-1.5 sm:p-3 rounded-lg sm:rounded-2xl bg-amber-50/80 border border-amber-200 flex flex-col justify-between shadow-2xs">
                  <span className="text-[8px] sm:text-[10px] font-black uppercase text-amber-800 tracking-wider truncate">Commission</span>
                  <div className="text-xs sm:text-lg font-black text-slate-900 font-['Outfit'] mt-0.5 truncate">
                    0% Zero
                  </div>
                  <span className="text-[8px] sm:text-[10px] text-amber-900 font-medium truncate">100% fare</span>
                </div>

                <div className="p-1.5 sm:p-3 rounded-lg sm:rounded-2xl bg-emerald-50/80 border border-emerald-200 flex flex-col justify-between shadow-2xs">
                  <span className="text-[8px] sm:text-[10px] font-black uppercase text-emerald-800 tracking-wider truncate">Payout</span>
                  <div className="text-xs sm:text-lg font-black text-slate-900 font-['Outfit'] mt-0.5 truncate">
                    Instant UPI
                  </div>
                  <span className="text-[8px] sm:text-[10px] text-emerald-800 font-medium truncate">Daily transfer</span>
                </div>

                <div className="p-1.5 sm:p-3 rounded-lg sm:rounded-2xl bg-blue-50/80 border border-blue-200 flex flex-col justify-between shadow-2xs">
                  <span className="text-[8px] sm:text-[10px] font-black uppercase text-blue-800 tracking-wider truncate">Bonus</span>
                  <div className="text-xs sm:text-lg font-black text-slate-900 font-['Outfit'] mt-0.5 truncate">
                    ₹15,000
                  </div>
                  <span className="text-[8px] sm:text-[10px] text-blue-800 font-medium truncate">Incentives</span>
                </div>
              </div> */}

              {/* Download Buttons & QR Code Split Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-stretch">

                {/* Left: 2 Captain Store Download Buttons (7 Cols) */}
                <div className="sm:col-span-7 flex flex-col justify-between space-y-1.5 sm:space-y-2.5">
                  <span className="text-[9.5px] sm:text-[11px] font-black uppercase tracking-wider text-slate-500 block">
                    Download Official Captain / Driver App
                  </span>

                  {/* Google Play (Captain) */}
                  <a
                    href={partnerPlayStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white p-2 sm:p-3.5 rounded-xl sm:rounded-2xl transition-all shadow-md hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-0.5 active:scale-98 group cursor-pointer border border-blue-400/30"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
                        <path d="M3.6 1.8L13.8 12 3.6 22.2C3.2 21.8 3 21.2 3 20.4V3.6C3 2.8 3.2 2.2 3.6 1.8Z" fill="#FFFFFF" />
                        <path d="M17.2 8.6L13.8 12 3.6 1.8C4.1 1.5 4.8 1.5 5.4 1.9L17.2 8.6Z" fill="#FFC107" />
                        <path d="M17.2 15.4L5.4 22.1C4.8 22.5 4.1 22.5 3.6 22.2L13.8 12 17.2 15.4Z" fill="#FF5252" />
                        <path d="M20.8 10.6C21.6 11.1 22 11.6 22 12C22 12.4 21.6 12.9 20.8 13.4L17.2 15.4 13.8 12 17.2 8.6 20.8 10.6Z" fill="#4CAF50" />
                      </svg>
                    </div>
                    <div className="text-left leading-tight flex-1 min-w-0">
                      <span className="text-[8px] sm:text-[10px] uppercase font-bold text-blue-100 block tracking-wider">
                        GET IT ON
                      </span>
                      <strong className="text-[11.5px] sm:text-sm font-black text-white font-['Outfit'] group-hover:text-amber-300 transition-colors block truncate">
                        Google Play (Captain)
                      </strong>
                    </div>
                    <ArrowRight size={13} className="text-blue-200 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0 sm:w-4 sm:h-4" />
                  </a>

                  {/* App Store (Captain) */}
                  <a
                    href={partnerAppStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3.5 bg-[#F5B800] hover:bg-[#E5A800] text-slate-950 p-2 sm:p-3.5 rounded-xl sm:rounded-2xl transition-all shadow-md hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-0.5 active:scale-98 group cursor-pointer border border-amber-400/40"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-7 sm:h-7 fill-slate-950" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.66-.82 1.11-1.96.99-3.1-.96.04-2.13.65-2.82 1.46-.61.71-1.14 1.87-1 2.98 1.08.08 2.18-.54 2.83-1.34z" />
                      </svg>
                    </div>
                    <div className="text-left leading-tight flex-1 min-w-0">
                      <span className="text-[8px] sm:text-[10px] uppercase font-bold text-slate-800 block tracking-wider">
                        DOWNLOAD ON THE
                      </span>
                      <strong className="text-[11.5px] sm:text-sm font-black text-slate-950 font-['Outfit'] transition-colors block truncate">
                        App Store (Captain)
                      </strong>
                    </div>
                    <ArrowRight size={13} className="text-slate-800 group-hover:text-slate-950 group-hover:translate-x-1 transition-all flex-shrink-0 sm:w-4 sm:h-4" />
                  </a>

                  {/* Share Link Utility */}
                  <div className="pt-0.5 flex items-center justify-between text-xs text-slate-500">
                    <span className="text-[9.5px] sm:text-[11px] font-medium">Captain APK v2.8</span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="text-amber-700 hover:underline font-bold text-[9.5px] sm:text-[11px] flex items-center gap-1 cursor-pointer"
                    >
                      {copiedLink ? <Check size={11} className="text-emerald-600" /> : <Copy size={11} />}
                      <span>{copiedLink ? 'Link Copied!' : 'Copy Link'}</span>
                    </button>
                  </div>
                </div>

                {/* Right: Tactile Camera QR Code Box for Captain (5 Cols) */}
                <div className="sm:col-span-5 bg-gradient-to-b from-amber-50 to-orange-50/40 p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-amber-200 flex flex-row sm:flex-col items-center justify-center text-left sm:text-center gap-2.5 sm:gap-2">
                  <div className="relative p-1 sm:p-2.5 bg-white rounded-lg sm:rounded-2xl border border-amber-300 shadow-xs flex-shrink-0">
                    {/* Viewfinder Corner Accents */}
                    <div className="absolute -top-0.5 -left-0.5 sm:-top-1 sm:-left-1 w-2 sm:w-3 h-2 sm:h-3 border-t-2 border-l-2 border-amber-500 rounded-tl" />
                    <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 sm:w-3 h-2 sm:h-3 border-t-2 border-r-2 border-amber-500 rounded-tr" />
                    <div className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 w-2 sm:w-3 h-2 sm:h-3 border-b-2 border-l-2 border-amber-500 rounded-bl" />
                    <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-2 sm:w-3 h-2 sm:h-3 border-b-2 border-r-2 border-amber-500 rounded-br" />

                    <div className="sm:hidden">
                      <QrCode size={40} className="text-amber-950" />
                    </div>
                    <div className="hidden sm:block">
                      <QrCode size={88} className="text-amber-950" />
                    </div>
                  </div>

                  <div className="space-y-0.5 min-w-0">
                    <span className="text-[10px] sm:text-xs font-black text-slate-900 block font-['Outfit']">
                      Captain Fast-Install QR
                    </span>
                    <p className="text-[8.5px] sm:text-[10px] text-slate-500 leading-tight">
                      Scan to download & KYC in 5 mins.
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct Web Registration Action Card */}
              {/* <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-100/90 via-amber-50 to-white border-2 border-amber-300 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-950 font-['Outfit']">
                      Prefer applying on our website?
                    </span>
                    <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-[#F5B800] text-slate-950">
                      No App Needed
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Fill the 2-minute partner form to receive an immediate verification call.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handlePartnerWebsiteClick}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer flex-shrink-0 active:scale-95"
                >
                  <span>Open Partner Form</span>
                  <ArrowRight size={13} />
                </button>
              </div> */}

            </div>
          )}

        </div>

        {/* ======================================================== */}
        {/* MODAL FOOTER                                             */}
        {/* ======================================================== */}
        {/* <div className="px-5 sm:px-7 py-3.5 bg-slate-50 border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-emerald-600" />
            <span>Official 256-bit secure APK and App Store downloads</span>
          </div>

          <div className="flex items-center gap-2">
            <span>24/7 Command Helpline:</span>
            <a
              href="tel:04060007000"
              className="text-[#2563EB] font-black font-mono hover:underline"
            >
              040-6000-7000
            </a>
          </div>
        </div> */}

      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
