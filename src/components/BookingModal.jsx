import React, { useState } from 'react';
import VehicleIcon from './VehicleIcon';
import { 
  X, 
  CheckCircle2, 
  PhoneCall, 
  Share2, 
  Navigation, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Sparkles,
  Smartphone,
  ExternalLink,
  MessageCircle,
  QrCode,
  Check
} from 'lucide-react';

export default function BookingModal({ bookingData, onClose }) {
  const [copiedLink, setCopiedLink] = useState(false);

  if (!bookingData) return null;

  const { vehicle, pickup, drop, estimate } = bookingData;

  // Generate pre-filled WhatsApp booking link
  const whatsappMessage = encodeURIComponent(
    `Hi GODest! I would like to book a ${vehicle.name}.\n\n` +
    `📍 Pickup: ${pickup}\n` +
    `🏁 Drop: ${drop}\n` +
    `🚗 Category: ${vehicle.categoryName}\n` +
    `📏 Distance: ~${estimate.distance} km\n` +
    `💰 Estimated Fare: ₹${estimate.totalFare} (Zero Surge)\n\n` +
    `Please confirm the nearest captain for me.`
  );
  const whatsappUrl = `https://wa.me/914060007000?text=${whatsappMessage}`;

  const handleCopyEstimate = () => {
    const textToCopy = `GODest Fare Estimate:\n${vehicle.name} from ${pickup} to ${drop}: ₹${estimate.totalFare} (${estimate.distance} km). Book via 040-6000-7000 or GODest App!`;
    navigator.clipboard?.writeText?.(textToCopy);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-5 flex items-center justify-between border-b border-blue-600">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#F5B800] animate-ping"></span>
            <div>
              <span className="font-['Outfit'] font-bold text-lg text-white block leading-snug">
                Trip Fare Estimate & Booking
              </span>
              <span className="text-[11px] text-blue-200 block">
                Official Zero-Surge National Tariff
              </span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-blue-100 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[85vh] overflow-y-auto">
          
          {/* Vehicle & Fare Banner */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 shadow-sm flex-shrink-0">
                <VehicleIcon category={vehicle.category} id={vehicle.id} size={28} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base font-['Outfit']">
                  {vehicle.name}
                </h4>
                <p className="text-xs text-slate-500">
                  {vehicle.categoryName} • ~{vehicle.eta} pickup
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Total Fare</span>
              <div className="text-2xl font-extrabold text-blue-700 font-['Outfit']">
                ₹{estimate.totalFare}
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Zero Surge
              </span>
            </div>
          </div>

          {/* Route Summary */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center mt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                <div className="w-0.5 h-7 bg-slate-300 my-0.5"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              </div>

              <div className="flex-1 space-y-2 text-xs">
                <div>
                  <span className="text-slate-400 block font-semibold text-[10px]">PICKUP CORRIDOR</span>
                  <strong className="text-slate-800 text-xs sm:text-sm">{pickup}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold text-[10px]">DESTINATION DROP</span>
                  <strong className="text-slate-800 text-xs sm:text-sm">{drop}</strong>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-medium">
              <span>Estimated Distance: <strong>{estimate.distance} km</strong></span>
              <span>Estimated Travel: <strong>~{Math.round(estimate.distance * 2.2)} mins</strong></span>
            </div>
          </div>

          {/* Transparent Itemized Fare Breakdown (Ola & Rapido Style) */}
          <div className="bg-blue-50/60 border border-blue-200 rounded-2xl p-4 space-y-2 text-xs">
            <div className="flex items-center justify-between text-slate-600">
              <span>Base Minimum Fare</span>
              <span className="font-semibold text-slate-800">₹{vehicle.baseFare}</span>
            </div>
            <div className="flex items-center justify-between text-slate-600">
              <span>Distance Fare ({estimate.distance} km × ₹{vehicle.perKm}/km)</span>
              <span className="font-semibold text-slate-800">₹{estimate.distance * vehicle.perKm}</span>
            </div>
            <div className="flex items-center justify-between text-emerald-700 font-semibold">
              <span>Peak Hour / Rain Surge Fee</span>
              <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-[11px] font-bold">
                ₹0 (Zero Surge Guaranteed)
              </span>
            </div>
            <div className="pt-2 border-t border-blue-200 flex items-center justify-between font-bold text-slate-900">
              <span className="text-sm">Payable Amount (Cash or UPI)</span>
              <span className="text-xl text-blue-700 font-['Outfit']">₹{estimate.totalFare}</span>
            </div>
          </div>

          {/* Real-World Booking Action Channels */}
          <div className="space-y-2.5 pt-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block text-center">
              Choose How You Want to Book:
            </span>

            {/* WhatsApp Booking (Instant) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-transform hover:scale-[1.01] text-sm"
            >
              <MessageCircle size={18} />
              <span>Book Instantly via WhatsApp</span>
            </a>

            {/* 24x7 Call Dispatch */}
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="tel:04060007000"
                className="flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-slate-950 font-bold py-3 px-3 rounded-xl shadow-sm text-xs transition-all"
              >
                <PhoneCall size={15} />
                <span>Call 040-6000-7000</span>
              </a>

              <a
                href="#app-download-section"
                onClick={onClose}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-3 rounded-xl shadow-sm text-xs transition-all"
              >
                <Smartphone size={15} />
                <span>Get GODest App</span>
              </a>
            </div>
          </div>

          {/* Share / Copy Fare */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
            <button
              type="button"
              onClick={handleCopyEstimate}
              className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1.5 transition-colors"
            >
              {copiedLink ? (
                <>
                  <Check size={14} className="text-emerald-600" />
                  <span className="text-emerald-600">Fare Summary Copied!</span>
                </>
              ) : (
                <>
                  <Share2 size={14} />
                  <span>Share Fare Summary</span>
                </>
              )}
            </button>

            <span className="text-slate-400 font-medium">
              Pay Captain Directly After Trip
            </span>
          </div>

          {/* Safety Guarantees Footer */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1 font-semibold text-slate-700">
              <ShieldCheck size={13} className="text-blue-600" />
              <span>100% Police Verified</span>
            </span>
            <span>•</span>
            <span>Zero Cancellation Fee</span>
            <span>•</span>
            <span>No Street Bargaining</span>
          </div>

        </div>

      </div>
    </div>
  );
}
