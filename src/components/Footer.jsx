import React from 'react';
import Logo from './Logo';
import { PhoneCall, Mail, MapPin, ShieldCheck, Heart, Star } from 'lucide-react';

export default function Footer({ onBookClick }) {
  return (
    <footer className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white pt-10 pb-8 border-t-4 border-[#F5B800]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-blue-600/60">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="medium" dark={true} />
            
            <p className="text-sm text-blue-100 max-w-sm leading-relaxed">
              Hyderabad’s premier mobility platform offering 24x7 Car Cabs, Bike Taxis, and Auto Rickshaws with verified captains and transparent zero-surge pricing.
            </p>

            <div className="text-xs font-semibold text-blue-950 bg-amber-300 border border-amber-400 px-3.5 py-1.5 rounded-xl inline-block shadow-sm">
              Ride Safe with GODest • Move to Destination
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <a href="#book-section" className="hover:text-[#F5B800] transition-colors">Book a Ride</a>
              </li>
              <li>
                <a href="#fleet-section" className="hover:text-[#F5B800] transition-colors">Cars & Cabs</a>
              </li>
              <li>
                <a href="#fleet-section" className="hover:text-[#F5B800] transition-colors">Bike Taxi (Moto)</a>
              </li>
              <li>
                <a href="#fleet-section" className="hover:text-[#F5B800] transition-colors">Auto Rickshaw</a>
              </li>
              <li>
                <a href="#routes-section" className="hover:text-[#F5B800] transition-colors">Popular Corridors</a>
              </li>
            </ul>
          </div>

          {/* Ride Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Hyderabad Services
            </h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <a href="#book-section" className="hover:text-[#F5B800] transition-colors">Rajiv Gandhi Int. Airport Express</a>
              </li>
              <li>
                <a href="#book-section" className="hover:text-[#F5B800] transition-colors">Hitec City & IT Corridor Commute</a>
              </li>
              <li>
                <a href="#book-section" className="hover:text-[#F5B800] transition-colors">Secunderabad Station Pickup</a>
              </li>
              <li>
                <a href="#book-section" className="hover:text-[#F5B800] transition-colors">Srisailam Pilgrimage Outstation</a>
              </li>
              <li>
                <a href="#book-section" className="hover:text-[#F5B800] transition-colors">Vijayawada & Warangal Highway Cabs</a>
              </li>
            </ul>
          </div>

          {/* Contact & 24/7 Helpline */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              24/7 Hyderabad Support
            </h4>
            
            <div className="space-y-2.5 text-xs text-blue-100">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#F5B800] flex-shrink-0 mt-0.5" />
                <span>Cyber Towers Road, Hitec City, Hyderabad, Telangana 500081</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall size={16} className="text-[#F5B800] flex-shrink-0" />
                <a href="tel:04060007000" className="hover:text-white font-bold text-sm text-[#F5B800]">
                  040-6000-7000
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#F5B800] flex-shrink-0" />
                <span>support@godest.in</span>
              </div>
            </div>

            <button 
              onClick={onBookClick}
              className="w-full bg-[#F5B800] hover:bg-[#E5A800] text-blue-950 font-bold py-3 px-4 rounded-xl text-xs shadow-md transition-all text-center block border border-amber-300"
            >
              Book GODest Ride Now
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200">
          <div>
            © {new Date().getFullYear()} GODest Technologies Pvt Ltd. All rights reserved. Hyderabad, India.
          </div>
          <div className="flex items-center gap-2">
            <span>Made for Hyderabad with</span>
            <Star size={13} className="text-[#F5B800] fill-[#F5B800]" />
            <span>Ride Safe with GODest</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
