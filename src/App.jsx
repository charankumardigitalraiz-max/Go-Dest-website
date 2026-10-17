import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HyderabadTrioBanner from './components/HyderabadTrioBanner';
import VehicleFleet from './components/VehicleFleet';
import HyderabadRoutes from './components/HyderabadRoutes';
import SafetyPledge from './components/SafetyPledge';
import AppDownloadBanner from './components/AppDownloadBanner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [activeBooking, setActiveBooking] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const handleSelectVehicleFromFleet = (vehicleId) => {
    scrollToBook();
  };

  const handleSelectRoute = (route, category) => {
    setSelectedRoute(route);
    if (category) {
      setSelectedCategory(category);
    }
    scrollToBook();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-['Plus_Jakarta_Sans'] selection:bg-amber-200 selection:text-slate-900">

      {/* Navigation */}
      <Navbar onBookClick={scrollToBook} />

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
        <VehicleFleet
          onSelectVehicle={handleSelectVehicleFromFleet}
        />

        {/* Popular Hyderabad Routes with side-by-side Fare comparison */}
        <HyderabadRoutes
          onSelectRoute={handleSelectRoute}
        />

        {/* Safety Pledge: Ride Safe with GODest */}
        <SafetyPledge />

        {/* Official App & QR Code Banner with 3D Phone Render */}
        <AppDownloadBanner />

        {/* Rider Testimonials */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer onBookClick={scrollToBook} />

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
