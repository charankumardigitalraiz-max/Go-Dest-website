import React, { useState } from 'react';
import Logo from './Logo';
import { PhoneCall, ShieldCheck, Menu, X, Sparkles, Star, MapPin } from 'lucide-react';

export default function Navbar({ onBookClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      {/* Top micro-announcement trust bar with royal blue background (no black) */}
      <div className="bg-blue-600 text-white py-1.5 px-4 text-xs font-medium border-b border-blue-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Slogan badges with professional SVG icons */}
          <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-[#F5B800] font-semibold">
              <Star size={13} className="text-[#F5B800] fill-[#F5B800]" />
              <span>24x7 Available</span>
            </span>
            <span className="text-blue-300 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 text-blue-100">
              <MapPin size={13} className="text-blue-200" />
              <span>City • Airport • Outstation</span>
            </span>
            <span className="text-blue-300 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 text-emerald-200 font-medium">
              <ShieldCheck size={13} className="text-emerald-300" />
              <span>Safe • Reliable • Affordable</span>
            </span>
          </div>

          {/* Right 24/7 Helpline */}
          <div className="flex items-center gap-3">
            <a
              href="tel:04060007000"
              className="flex items-center gap-1.5 text-blue-100 hover:text-[#F5B800] transition-colors"
            >
              <PhoneCall size={12} className="text-[#F5B800]" />
              <span className="hidden md:inline">Hyderabad 24/7 Helpline:</span>
              <strong className="text-white">040-6000-7000</strong>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Logo size="medium" />
          </a>

          {/* Desktop Nav Links (English Only) */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm text-slate-700">
            <a href="#book-section" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
              <span>Book Ride</span>
              <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full font-bold">Fast</span>
            </a>
            <a href="#fleet-section" className="hover:text-blue-600 transition-colors">
              Car, Bike & Auto
            </a>
            <a href="#routes-section" className="hover:text-blue-600 transition-colors">
              Popular Routes
            </a>
            <a href="#safety-section" className="hover:text-blue-600 transition-colors">
              Safety Pledge
            </a>
            <a href="#app-download-section" className="hover:text-blue-600 transition-colors">
              Download App
            </a>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold">
              <ShieldCheck size={15} className="text-blue-600" />
              <span>Zero Surge Guarantee</span>
            </div>

            <button
              onClick={onBookClick}
              className="flex items-center gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-blue-950 font-bold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles size={16} />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top">
          <nav className="flex flex-col space-y-2 font-semibold text-slate-800 text-sm">
            <a
              href="#book-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors flex items-center justify-between"
            >
              <span>Book Car, Bike or Auto</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">Instant</span>
            </a>
            <a
              href="#fleet-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Vehicles Available (Car, Bike, Auto)
            </a>
            <a
              href="#routes-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Popular Hyderabad Routes & Fares
            </a>
            <a
              href="#safety-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Safety Pledge & Verified Captains
            </a>
            <a
              href="#app-download-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Download Mobile App & QR
            </a>
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookClick();
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-blue-950 font-bold py-3 rounded-xl shadow-md text-sm"
          >
            <Sparkles size={16} />
            <span>Book Ride Now</span>
          </button>
        </div>
      )}
    </header>
  );
}
