import React from 'react';
import Logo from './Logo';
import {
  PhoneCall,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowRight,
  HeartHandshake,
  AlertTriangle,
  CheckCircle2,
  Car,
  Bike,
  Smartphone,
  Zap,
  Sparkles,
  Star,
  Scale,
  FileText,
  Lock,
  Receipt
} from 'lucide-react';
import { AutoRickshawIcon } from './VehicleIcon';

export default function Footer({ onBookClick: _onBookClick, onOpenLegal } = {}) {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-amber-50/30 text-slate-700 pt-12 pb-8 border-t border-slate-200">

      {/* Decorative Golden Road Speed Lines & Glowing Shades across Left, Center, and Right */}
      <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1400 600" preserveAspectRatio="none" fill="none">
          {/* Left glowing orb */}
          <circle cx="180" cy="220" r="240" fill="url(#footerYellowGlowLeft)" />
          {/* Center glowing orb */}
          <circle cx="700" cy="300" r="260" fill="url(#footerYellowGlowCenter)" />
          {/* Right glowing orb */}
          <circle cx="1200" cy="200" r="280" fill="url(#footerYellowGlowRight)" />

          {/* Left side speed dash marks */}
          <path
            d="M-50 -50 L250 650 M0 -50 L300 650 M50 -50 L350 650"
            stroke="#F5B800"
            strokeWidth="12"
            strokeDasharray="30 20"
            opacity="0.32"
          />

          {/* Center speed dash marks */}
          <path
            d="M500 -50 L750 650 M560 -50 L810 650 M620 -50 L870 650"
            stroke="#F5B800"
            strokeWidth="12"
            strokeDasharray="30 20"
            opacity="0.25"
          />

          {/* Right side speed dash marks (matching Hero) */}
          <path
            d="M980 -50 L1280 650 M1040 -50 L1340 650 M1100 -50 L1400 650"
            stroke="#F5B800"
            strokeWidth="12"
            strokeDasharray="30 20"
            opacity="0.35"
          />

          <defs>
            <radialGradient
              id="footerYellowGlowLeft"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(180 220) rotate(90) scale(240)"
            >
              <stop stopColor="#F5B800" stopOpacity="0.32" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="footerYellowGlowCenter"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(700 300) rotate(90) scale(260)"
            >
              <stop stopColor="#F5B800" stopOpacity="0.28" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="footerYellowGlowRight"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1200 200) rotate(90) scale(280)"
            >
              <stop stopColor="#F5B800" stopOpacity="0.35" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Ambient warm yellow glowing blur pools on left, center, and right */}
      <div className="absolute top-10 left-5 w-72 h-72 bg-amber-200/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-amber-200/25 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-slate-200/90">

          {/* Col 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="medium" dark={false} />

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
              India's premier mobility platform offering 24x7 Car Cabs, Bike Taxis, and Auto Rickshaws with 100% verified captains and transparent zero-surge pricing.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-emerald-700 shadow-2xs">
                <CheckCircle2 size={13} className="text-emerald-600" />
                <span>Zero-Surge Guaranteed</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-blue-700 shadow-2xs">
                <ShieldCheck size={13} className="text-blue-600" />
                <span>Police NOC Cleared</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links with Icons (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-['Outfit']">
              Ride GODest
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <a href="#book-section" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <Sparkles size={13} className="text-amber-500 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                  <span>Book a Ride</span>
                </a>
              </li>
              <li>
                <a href="#fleet-section" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <Car size={13} className="text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                  <span>Vehicles & Fleet</span>
                </a>
              </li>
              <li>
                <a href="#safety-section" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <ShieldCheck size={13} className="text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                  <span>Safety Charter</span>
                </a>
              </li>
              <li>
                <a href="#app-download-section" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <Smartphone size={13} className="text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                  <span>Download App</span>
                </a>
              </li>
              <li>
                <a href="#testimonials-section" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <Star size={13} className="text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                  <span>Rider Reviews</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Fleet Modes & Captains with Icons (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-['Outfit']">
              Our Fleet Modes
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <a href="#fleet-section" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <Bike size={13} className="text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                  <span>Solo Bike Taxi (Moto)</span>
                </a>
              </li>
              <li>
                <a href="#fleet-section" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <AutoRickshawIcon size={13} className="text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                  <span>Metered Auto Rickshaw</span>
                </a>
              </li>
              <li>
                <a href="#fleet-section" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <Car size={13} className="text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                  <span>Prime AC Cabs & EV SUV</span>
                </a>
              </li>
              <li>
                <a href="#safety-section" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <ShieldCheck size={13} className="text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                  <span>Police Verified Captains</span>
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://wa.me/914060007000?text=Hi%20GODest,%20I%20want%20to%20register%20as%20a%20Captain%20(Driver%20Partner)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-300 px-2.5 py-1 rounded-lg transition-colors"
                >
                  <Zap size={13} className="text-[#F5B800] fill-[#F5B800]" />
                  <span>Drive with Us (Captain)</span>
                  <span className="text-[10px] bg-[#F5B800] text-slate-950 px-1.5 py-0.2 rounded font-bold">
                    Earn
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: 24/7 Command Desk & Support (3 Cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-['Outfit']">
              24/7 National Command Desk
            </h4>

            <div className="space-y-2 text-xs text-slate-600 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Corporate HQ: Cyber Towers Road, Hitec City, Hyderabad 500081</span>
              </div>

              <div className="flex items-center gap-2.5">
                <PhoneCall size={15} className="text-blue-600 flex-shrink-0" />
                <a href="tel:04060007000" className="text-slate-900 hover:text-blue-600 font-bold text-sm tracking-wide transition-colors">
                  040-6000-7000
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-blue-600 flex-shrink-0" />
                <a href="mailto:support@godest.in" className="hover:text-blue-600 transition-colors">
                  support@godest.in
                </a>
              </div>
            </div>

            {/* Emergency Hotline Chips */}
            <div className="pt-1 flex items-center gap-2 text-[11px] font-semibold">
              <a
                href="tel:1091"
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-pink-50 border border-pink-200 text-pink-700 hover:bg-pink-100 transition-colors"
              >
                <HeartHandshake size={12} className="text-pink-600" />
                <span>SHE Teams: 1091</span>
              </a>
              <a
                href="tel:112"
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-50 border border-red-200 text-red-700 hover:bg-red-100 transition-colors"
              >
                <AlertTriangle size={12} className="text-red-600" />
                <span>Police: 112</span>
              </a>
            </div>

            {/* Partner with Us (Driver) Action Button */}
            <a
              href="https://wa.me/914060007000?text=Hi%20GODest,%20I%20want%20to%20register%20as%20a%20Captain%20(Driver%20Partner)"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer mt-2 group"
            >
              <Car size={14} className="flex-shrink-0" />
              <span>Partner with Us (Driver)</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

        </div>

        {/* Legal Policies & Compliance Bar: Rapido / Uber / Ola Benchmark */}
        <div className="pt-8 pb-5 border-t border-slate-200/90 mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center flex-shrink-0">
              <Scale size={14} className="text-amber-800" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <span>Trust, Legal & Compliance</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded">DPDP 2023</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Transparent ride policies benchmarked with MV Aggregator Guidelines
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <button
              type="button"
              onClick={() => onOpenLegal?.('terms')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 text-slate-700 hover:text-slate-900 text-xs font-semibold shadow-2xs transition-all cursor-pointer"
            >
              <FileText size={12} className="text-blue-600" />
              <span>Terms of Service</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenLegal?.('privacy')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 text-slate-700 hover:text-slate-900 text-xs font-semibold shadow-2xs transition-all cursor-pointer"
            >
              <Lock size={12} className="text-emerald-600" />
              <span>Privacy Policy</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenLegal?.('fares')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 text-slate-700 hover:text-slate-900 text-xs font-semibold shadow-2xs transition-all cursor-pointer"
            >
              <Receipt size={12} className="text-amber-600" />
              <span>Fares & Cancellation</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenLegal?.('safety')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 text-slate-700 hover:text-slate-900 text-xs font-semibold shadow-2xs transition-all cursor-pointer"
            >
              <ShieldCheck size={12} className="text-pink-600" />
              <span>Safety Conduct</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenLegal?.('grievance')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold shadow-2xs transition-all cursor-pointer"
            >
              <Scale size={12} className="text-amber-800" />
              <span>Grievance Officer</span>
            </button>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar: Clean copyright, corporate CIN & 24/7 National Hotline */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <div>
            © 2026 GODest Technologies Pvt Ltd. All rights reserved. Pan-India Mobility Aggregator.
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500">
            <span>CIN: U63090TG2026PTC184201</span>
            <span>•</span>
            <span>Hitec City, Hyderabad 500081</span>
            <span>•</span>
            <a
              href="tel:04060007000"
              className="text-blue-700 hover:text-blue-800 font-bold transition-colors inline-flex items-center gap-1"
            >
              <PhoneCall size={11} />
              <span>040-6000-7000</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
