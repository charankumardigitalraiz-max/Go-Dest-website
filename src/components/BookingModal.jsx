import React, { useState, useEffect } from 'react';
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
  UserCheck,
  Star
} from 'lucide-react';

export default function BookingModal({ bookingData, onClose }) {
  const [stage, setStage] = useState('searching'); // 'searching' | 'confirmed'
  const [progress, setProgress] = useState(15);
  const [otp] = useState(() => Math.floor(1000 + Math.random() * 9000));

  useEffect(() => {
    // Simulate finding a captain in 2.2 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStage('confirmed');
          return 100;
        }
        return prev + 25;
      });
    }, 450);

    return () => clearInterval(interval);
  }, []);

  if (!bookingData) return null;

  const { vehicle, pickup, drop, estimate } = bookingData;

  // Determine vehicle specific details
  const getVehicleDetails = () => {
    if (vehicle.category === 'bike') {
      return {
        driverName: 'K. Sridhar (GODest Moto Captain)',
        rating: '4.95 (2,100+ rides)',
        vehicleModel: 'Bajaj Pulsar 150 (Black)',
        plateNumber: 'TS 09 BK 7824',
        perk: 'Sanitized helmet provided'
      };
    } else if (vehicle.category === 'auto') {
      return {
        driverName: 'Md. Ismail (GODest Auto Captain)',
        rating: '4.91 (3,400+ rides)',
        vehicleModel: 'Bajaj RE Auto Rickshaw (Yellow & Green)',
        plateNumber: 'TS 09 AT 5419',
        perk: 'Zero bargaining • Digital meter'
      };
    } else {
      return {
        driverName: 'V. Ramesh Kumar (GODest Cab Captain)',
        rating: '4.98 (4,800+ rides)',
        vehicleModel: `${vehicle.name} (Signature Yellow & White)`,
        plateNumber: 'TS 09 EA 4521',
        perk: 'Air-conditioned • Sanitized cab'
      };
    }
  };

  const details = getVehicleDetails();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Modal Header - Blue, No Black */}
        <div className="bg-blue-700 text-white p-5 flex items-center justify-between border-b border-blue-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#F5B800] animate-ping"></span>
            <span className="font-['Outfit'] font-bold text-lg text-white">
              {stage === 'searching' ? 'Searching Nearest Captain...' : 'Ride Confirmed!'}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-blue-800 text-blue-100 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Searching Animation Stage */}
        {stage === 'searching' && (
          <div className="p-8 text-center space-y-6">
            <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-blue-500/20 border-t-blue-600 animate-spin"></div>
              <div className="absolute inset-3 rounded-full border-4 border-[#F5B800]/20 border-b-[#F5B800] animate-spin"></div>
              <VehicleIcon category={vehicle.category} id={vehicle.id} size={38} className="text-blue-600" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
                Contacting nearby {vehicle.categoryName}s in Hyderabad
              </h3>
              <p className="text-sm text-slate-500">
                Finding high-rated verified captain near <span className="font-semibold text-slate-700">{pickup}</span>
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-600 to-[#F5B800] h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-blue-700 font-semibold bg-blue-50 py-2 rounded-xl border border-blue-100">
              <ShieldCheck size={16} />
              <span>Ride Safe with GODest • 100% Verified Captain</span>
            </div>
          </div>
        )}

        {/* Confirmed Stage */}
        {stage === 'confirmed' && (
          <div className="p-6 space-y-6 max-h-[85vh] overflow-y-auto">
            {/* Success Banner */}
            <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 p-4 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950 text-sm">Captain Arriving in {vehicle.eta}</h4>
                  <p className="text-xs text-emerald-700">{details.perk}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">START OTP</span>
                <span className="text-xl font-bold text-blue-700 font-mono tracking-widest bg-white px-2.5 py-0.5 rounded-lg border border-blue-200 shadow-sm">
                  {otp}
                </span>
              </div>
            </div>

            {/* Captain & Vehicle Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 border-2 border-[#F5B800] flex items-center justify-center text-blue-900 shadow-sm">
                  <UserCheck size={28} className="text-slate-800" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base flex items-center gap-1.5">
                    <span>{details.driverName}</span>
                  </h4>
                  <p className="text-xs text-amber-700 font-semibold flex items-center gap-1">
                    <Star size={11} className="fill-amber-600 text-amber-600" />
                    <span>{details.rating}</span>
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">{details.vehicleModel}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#0D111A] text-[#F5B800] text-xs font-mono font-bold tracking-wider shadow-sm">
                  {details.plateNumber}
                </span>
              </div>
            </div>

            {/* Route Details */}
            <div className="border border-slate-200 rounded-2xl p-4 space-y-3 bg-white">
              <div className="flex items-start gap-3">
                <div className="flex flex-col items-center mt-1">
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="w-0.5 h-7 bg-slate-200"></span>
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                </div>
                <div className="flex-1 space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 block font-semibold text-[10px]">PICKUP</span>
                    <strong className="text-slate-800 text-xs sm:text-sm">{pickup}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold text-[10px]">DROP</span>
                    <strong className="text-slate-800 text-xs sm:text-sm">{drop}</strong>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                <span>Trip Distance: <strong>{estimate.distance} km</strong></span>
                <span>Category: <strong className="text-blue-700">{vehicle.name}</strong></span>
              </div>
            </div>

            {/* Fare Breakdown */}
            <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>Base Fare</span>
                <span>₹{vehicle.baseFare}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>Distance Rate ({estimate.distance} km × ₹{vehicle.perKm})</span>
                <span>₹{estimate.distance * vehicle.perKm}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-emerald-700 font-semibold">
                <span>Surge Pricing</span>
                <span className="bg-emerald-100 px-1.5 py-0.5 rounded text-[11px]">₹0 (Zero Surge Guaranteed)</span>
              </div>
              <div className="pt-2 border-t border-blue-200 flex items-center justify-between font-bold text-slate-900">
                <span className="text-sm">Total Payable (Cash/UPI to Captain)</span>
                <span className="text-xl text-blue-700 font-bold font-['Outfit']">
                  ₹{estimate.totalFare}
                </span>
              </div>
            </div>

            {/* Actions: Blue Primary & Secondary */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a 
                href="tel:04060007000"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md transition-all text-sm"
              >
                <PhoneCall size={16} />
                <span>Call Captain</span>
              </a>
              <button 
                onClick={() => alert(`Live tracking link copied for ride with ${details.driverName} (${details.plateNumber})!`)}
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-blue-700 border-2 border-blue-600 font-bold py-3 rounded-xl transition-all text-sm"
              >
                <Share2 size={16} />
                <span>Share Trip Live</span>
              </button>
            </div>

            <button 
              onClick={onClose}
              className="w-full text-center text-xs text-slate-400 hover:text-slate-600 font-medium py-1 transition-colors"
            >
              Cancel Ride (Zero Cancellation Fee)
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
