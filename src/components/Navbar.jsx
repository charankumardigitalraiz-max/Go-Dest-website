import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import AppDownloadModal from './AppDownloadModal';
import {
  PhoneCall,
  ShieldCheck,
  Menu,
  X,
  Sparkles,
  Car,
  Smartphone,
  ChevronRight,
  Zap,
  Scale,
  Star,
  ArrowRight,
  CheckCircle2,
  Headphones
} from 'lucide-react';

export default function Navbar({ onBookClick, onOpenLegal, onOpenSupport, onNavigateHome }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('rider');

  const navItems = [
    {
      id: 'fleet-section',
      label: 'Vehicles',
      fullLabel: 'Vehicles (Car, Bike, Auto)',
      icon: Car
    },
    {
      id: 'safety-section',
      label: 'Safety',
      fullLabel: 'Safety Pledge & Verified Captains',
      icon: ShieldCheck
    },
    {
      id: 'app-download-section',
      label: 'Mobile App',
      fullLabel: 'Download Mobile App',
      icon: Smartphone
    },
    {
      id: 'testimonials-section',
      label: 'Reviews',
      fullLabel: 'Rider Reviews & Ratings',
      icon: Star
    },
    {
      id: 'contact-section',
      label: 'Contact',
      fullLabel: 'Contact Us & 24/7 Desk',
      icon: PhoneCall
    }
  ];

  // Accurate ScrollSpy using getBoundingClientRect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sectionIds = ['fleet-section', 'safety-section', 'app-download-section', 'testimonials-section', 'contact-section'];
      let current = '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active when section top is near the navbar
          if (rect.top <= 180 && rect.bottom >= 120) {
            current = id;
            break;
          }
        }
      }

      // Check if user is at the bottom of the page (footer / contact section)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        current = 'contact-section';
      }

      setActiveSection(current);
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    } else if (onNavigateHome) {
      onNavigateHome(id);
    } else {
      window.location.hash = `#${id}`;
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)]'
        : 'bg-white/98 backdrop-blur-sm border-b border-slate-100 shadow-none'
        }`}
    >
      {/* Top Midnight Trust Bar: Sleek, high-contrast & premium */}
      <div className="bg-[#0F172A] text-slate-300 text-[11px] sm:text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Left Trust Badges */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-slate-300 font-medium">
            <button
              type="button"
              onClick={() => onOpenLegal?.('fares')}
              className="inline-flex items-center gap-1.5 font-bold text-[#F5B800] hover:text-amber-300 transition-colors cursor-pointer"
              title="Click to view Zero Surge Policy"
            >
              <Zap size={12} className="fill-[#F5B800]" />
              <span>Zero-Surge Guaranteed</span>
            </button>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-slate-300">
              Pan-India 24/7 Car, Bike & Auto Rides
            </span>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-400 font-semibold">
              <CheckCircle2 size={11} className="text-emerald-400" />
              <span>100% Police Verified</span>
            </span>
          </div>

          {/* Right Support Desk & Legal Center */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* <button
              type="button"
              onClick={() => onOpenLegal?.('terms')}
              className="hidden lg:inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <Scale size={11} className="text-amber-400" />
              <span>Legal Center</span>
            </button> */}

            <span className="hidden lg:inline text-slate-700">|</span>

            {/* <button
              type="button"
              onClick={() => onOpenSupport?.()}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-medium transition-colors cursor-pointer"
              title="Open 24/7 Support Desk"
            >
              <PhoneCall size={12} className="text-[#F5B800]" />
              <span className="hidden sm:inline text-slate-400">24/7 Desk:</span>
              <strong className="text-white font-bold tracking-wide">040-6000-7000</strong>
            </button> */}
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
              }
            }}
            className="flex-shrink-0 transition-opacity hover:opacity-95 py-1"
            aria-label="GODest Home"
          >
            <Logo size="medium" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13.5px] font-semibold">
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all duration-200 group ${isActive
                    ? 'bg-slate-900 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 font-semibold'
                    }`}
                >
                  <IconComp
                    size={15}
                    className={`transition-colors ${isActive
                      ? 'text-[#F5B800]'
                      : 'text-slate-400 group-hover:text-slate-700'
                      }`}
                  />
                  <span>{item.label}</span>

                  {/* Active bottom gold glow indicator */}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-3 right-3 h-[2px] bg-[#F5B800] rounded-full shadow-[0_1px_6px_rgba(245,184,0,0.8)]"></span>
                  )}
                </a>
              );
            })}


            {/* Drive with Us Captain Partner CTA */}
            <button
              type="button"
              onClick={() => {
                setModalTab('partner');
                setIsAppModalOpen(true);
              }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-50/70 hover:bg-amber-100/90 text-amber-950 border border-amber-300/80 transition-all duration-150 font-bold shadow-2xs group ml-1 cursor-pointer"
            >
              <Zap size={14} className="text-[#F5B800] fill-[#F5B800] group-hover:scale-110 transition-transform" />
              <span>Drive with Us</span>
              <span className="text-[10px] uppercase font-extrabold tracking-wider px-1.5 py-0.5 rounded-md bg-[#F5B800] text-slate-950 shadow-2xs">
                Earn
              </span>
            </button>
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Primary Book Ride Button */}
            <button
              type="button"
              onClick={() => {
                setModalTab('rider');
                setIsAppModalOpen(true);
              }}
              className="flex items-center gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-slate-950 font-extrabold px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
            >
              <Sparkles size={15} className="group-hover:rotate-12 transition-transform" />
              <span>Book Ride</span>
              <ArrowRight size={14} className="hidden sm:inline group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">

          {/* Quick Booking Action Inside Mobile Drawer */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setModalTab('rider');
                setIsAppModalOpen(true);
              }}
              className="flex items-center justify-center gap-1.5 bg-[#F5B800] text-slate-950 font-bold py-2.5 px-3 rounded-xl text-xs shadow-sm cursor-pointer"
            >
              <Sparkles size={14} />
              <span>Book Ride</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setModalTab('partner');
                setIsAppModalOpen(true);
              }}
              className="flex items-center justify-center gap-1.5 bg-amber-50 border border-amber-300 text-amber-950 font-bold py-2.5 px-3 rounded-xl text-xs shadow-2xs cursor-pointer"
            >
              <Zap size={14} className="text-[#F5B800] fill-[#F5B800]" />
              <span>Join as Captain</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1 font-medium text-slate-700 text-sm pt-1 border-t border-slate-100">
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-colors ${isActive
                    ? 'bg-slate-900 text-white font-bold shadow-xs'
                    : 'hover:bg-slate-50 text-slate-700 hover:text-slate-950'
                    }`}
                >
                  <span className="flex items-center gap-3">
                    <IconComp size={17} className={isActive ? 'text-[#F5B800]' : 'text-slate-500'} />
                    <span>{item.fullLabel}</span>
                  </span>
                  {isActive ? (
                    <span className="text-[10px] font-bold text-slate-950 bg-[#F5B800] px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  ) : (
                    <ChevronRight size={15} className="text-slate-400" />
                  )}
                </a>
              );
            })}

            {/* Legal & Compliance Policies trigger */}
            {/* <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLegal?.('terms');
              }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-slate-950 transition-colors cursor-pointer text-left"
            >
              <span className="flex items-center gap-3">
                <Scale size={17} className="text-amber-600" />
                <span>Terms & Legal Policies</span>
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                5 Policies
              </span>
            </button> */}
          </nav>

          {/* Quick Helpline Box */}
          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSupport?.();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <PhoneCall size={14} className="text-[#F5B800]" />
              <span>National 24/7 Command Desk: 040-6000-7000</span>
            </button>
          </div>

        </div>
      )}

      {/* App Store & Play Store Download / Partner With Us Modal */}
      <AppDownloadModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        defaultTab={modalTab}
        onNavigateToPartner={() => {
          setIsAppModalOpen(false);
          const el = document.getElementById('contact-section');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </header>
  );
}
