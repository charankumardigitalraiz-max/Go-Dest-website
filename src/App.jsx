import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HyderabadTrioBanner from './components/HyderabadTrioBanner';
import VehicleFleet from './components/VehicleFleet';
import HyderabadRoutes from './components/HyderabadRoutes';
import SafetyPledge from './components/SafetyPledge';
import AppDownloadBanner from './components/AppDownloadBanner';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import LegalScreen from './components/LegalScreen';
import SupportScreen from './components/SupportScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home' | 'legal' | 'support'
  const [activeLegalTab, setActiveLegalTab] = useState('terms');
  const [activeSupportCategory, setActiveSupportCategory] = useState('all');
  const [activeSupportTab, setActiveSupportTab] = useState('topics');
  const [activeBooking, setActiveBooking] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // URL Hash Synchronized Routing for separate screens and sections
  useEffect(() => {
    const handleHashRouting = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#legal')) {
        const parts = hash.split('/');
        const tab = parts[1] || 'terms';
        setCurrentScreen('legal');
        setActiveLegalTab(tab);
      } else if (hash.startsWith('#support')) {
        const parts = hash.split('/');
        const sub = parts[1] || 'topics';
        setCurrentScreen('support');
        if (sub === 'track' || sub === 'ticket') {
          setActiveSupportTab(sub);
          setActiveSupportCategory('all');
        } else {
          setActiveSupportCategory(sub);
          setActiveSupportTab('topics');
        }
      } else {
        setCurrentScreen('home');
        const cleanSection = hash.replace('#', '');
        if (cleanSection) {
          setTimeout(() => {
            const el = document.getElementById(cleanSection);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 80);
        }
      }
    };

    handleHashRouting();
    window.addEventListener('popstate', handleHashRouting);
    window.addEventListener('hashchange', handleHashRouting);

    return () => {
      window.removeEventListener('popstate', handleHashRouting);
      window.removeEventListener('hashchange', handleHashRouting);
    };
  }, []);

  const handleOpenLegal = (tab = 'terms') => {
    setActiveLegalTab(tab);
    setCurrentScreen('legal');
    window.history.pushState(null, '', `#legal/${tab}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSupport = (sub = 'topics') => {
    if (sub === 'track' || sub === 'ticket') {
      setActiveSupportTab(sub);
      setActiveSupportCategory('all');
    } else {
      setActiveSupportCategory('all');
      setActiveSupportTab('topics');
    }
    setCurrentScreen('support');
    const hash = sub && sub !== 'topics' ? `#support/${sub}` : '#support';
    window.history.pushState(null, '', hash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = (targetSection = null) => {
    setCurrentScreen('home');
    window.history.pushState(null, '', window.location.pathname);
    if (targetSection) {
      setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToBook = () => {
    const el = document.getElementById('book-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartBooking = (bookingData) => {
    setActiveBooking(bookingData);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    scrollToBook();
  };

  const handleSelectVehicleFromFleet = (_vehicleId) => {
    scrollToBook();
  };

  const handleSelectRoute = (route, category) => {
    setSelectedRoute(route);
    if (category) {
      setSelectedCategory(category);
    }
    scrollToBook();
  };

  // SEPARATE SCREEN: Dedicated Legal & Policies Portal
  if (currentScreen === 'legal') {
    return (
      <LegalScreen
        initialTab={activeLegalTab}
        onNavigateHome={handleNavigateHome}
        onBookClick={() => handleNavigateHome('book-section')}
        onOpenSupport={handleOpenSupport}
        onSelectTab={(tab) => {
          setActiveLegalTab(tab);
          window.history.pushState(null, '', `#legal/${tab}`);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  // SEPARATE SCREEN: 24/7 National Command & Support Portal
  if (currentScreen === 'support') {
    return (
      <SupportScreen
        initialCategory={activeSupportCategory}
        initialTab={activeSupportTab}
        onNavigateHome={handleNavigateHome}
        onBookClick={() => handleNavigateHome('book-section')}
        onOpenLegal={handleOpenLegal}
        onSelectCategory={(cat) => {
          setActiveSupportCategory(cat);
          const hash = cat && cat !== 'all' ? `#support/${cat}` : '#support';
          window.history.pushState(null, '', hash);
        }}
        onSelectTab={(tab) => {
          setActiveSupportTab(tab);
          window.history.pushState(null, '', `#support/${tab}`);
        }}
      />
    );
  }

  // MAIN SCREEN: Landing Page & Booking Engine
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-['Plus_Jakarta_Sans'] selection:bg-amber-200 selection:text-slate-900">

      {/* Navigation */}
      <Navbar
        onBookClick={scrollToBook}
        onOpenLegal={handleOpenLegal}
        onOpenSupport={handleOpenSupport}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Live Booking Engine for Car, Bike, and Auto */}
        <Hero
          onStartBooking={handleStartBooking}
          selectedPreRoute={selectedRoute}
          selectedPreCategory={selectedCategory}
        />

        {/* 3 Ways to Ride: Car, Bike & Auto Showcase with Hitec City visual */}
        <HyderabadTrioBanner
          onSelectCategory={handleSelectCategory}
        />

        {/* Vehicle Fleet: Car, Bike, Auto Showcase with realistic photos */}
        {/* <VehicleFleet
          onSelectVehicle={handleSelectVehicleFromFleet}
        /> */}

        {/* Popular Hyderabad Routes with side-by-side Fare comparison */}
        {/* <HyderabadRoutes
          onSelectRoute={handleSelectRoute}
        /> */}

        {/* Safety Pledge: Ride Safe with GODest */}
        <SafetyPledge />

        {/* Official App & QR Code Banner with 3D Phone Render */}
        <AppDownloadBanner />

        {/* Rider Testimonials */}
        <Testimonials />

        {/* 24/7 Command Desk Contact & Headquarters Section */}
        {/* <ContactSection onOpenLegal={handleOpenLegal} /> */}
      </main>

      {/* Footer */}
      <Footer
        onBookClick={scrollToBook}
        onOpenLegal={handleOpenLegal}
        onOpenSupport={handleOpenSupport}
      />

      {/* Interactive Booking Simulation Modal */}
      {activeBooking && (
        <BookingModal
          bookingData={activeBooking}
          onClose={() => setActiveBooking(null)}
        />
      )}

    </div>
  );
}
