import React, { useState } from 'react';
import { Smartphone, Sparkles, Check } from 'lucide-react';

export default function AppDownloadBanner() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleSimulateScan = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section className="py-10 sm:py-14 bg-slate-50 border-t border-slate-200" id="app-download-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with Vibrant Yellow & Blue Theme (No Black Backgrounds) */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#F5B800] via-[#FFCA28] to-[#F5B800] p-6 sm:p-10 shadow-xl border-2 border-amber-400 overflow-hidden">
          
          {/* Decorative geometric patterns */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#1E3A8A_2px,transparent_2px)] [background-size:16px_16px] pointer-events-none"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4 text-slate-900">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles size={13} />
                <span>HYDERABAD'S NO. 1 MOBILITY APP</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] tracking-tight leading-tight text-slate-900">
                Book now on the GODest App
              </h2>

              <p className="text-base sm:text-lg font-bold text-slate-800">
                Hyderabad's Trusted Car Ride • Bike Taxi • Auto Rickshaw
              </p>

              <div className="text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-2">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm border border-amber-200">
                  Ride Safe with GODest
                </span>
                <span>•</span>
                <span>Move to Destination</span>
              </div>

              {/* App Store Buttons using Blue & White - No Black Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button 
                  type="button" 
                  onClick={handleSimulateScan}
                  className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-2xl shadow-lg transition-transform hover:-translate-y-0.5 border border-blue-500"
                >
                  {/* Google Play Vector SVG */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M3.6 1.8L13.8 12 3.6 22.2C3.2 21.8 3 21.2 3 20.4V3.6C3 2.8 3.2 2.2 3.6 1.8Z" fill="#FFFFFF" />
                    <path d="M17.2 8.6L13.8 12 3.6 1.8C4.1 1.5 4.8 1.5 5.4 1.9L17.2 8.6Z" fill="#FFE082" />
                    <path d="M17.2 15.4L5.4 22.1C4.8 22.5 4.1 22.5 3.6 22.2L13.8 12 17.2 15.4Z" fill="#FF8A80" />
                    <path d="M20.8 10.6C21.6 11.1 22 11.6 22 12C22 12.4 21.6 12.9 20.8 13.4L17.2 15.4 13.8 12 17.2 8.6 20.8 10.6Z" fill="#FFD54F" />
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="text-[10px] uppercase font-medium text-blue-100 block">Get it on</span>
                    <strong className="text-sm font-bold text-white">Google Play</strong>
                  </div>
                </button>

                <button 
                  type="button" 
                  onClick={handleSimulateScan}
                  className="flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-2xl shadow-lg transition-transform hover:-translate-y-0.5 border border-blue-500"
                >
                  {/* Apple Vector SVG */}
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.66-.82 1.11-1.96.99-3.1-.96.04-2.13.65-2.82 1.46-.61.71-1.14 1.87-1 2.98 1.08.08 2.18-.54 2.83-1.34z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="text-[10px] uppercase font-medium text-blue-100 block">Download on</span>
                    <strong className="text-sm font-bold text-white">App Store</strong>
                  </div>
                </button>
              </div>

              {downloadSuccess && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-emerald-800 text-xs font-bold shadow-md">
                  <Check size={16} className="text-emerald-600" /> 
                  <span>App download link sent! Open GODest on your phone to ride instantly.</span>
                </div>
              )}
            </div>

            {/* Middle: 3D Phone App Render with Blue Border */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative w-48 sm:w-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-500 bg-white transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/images/godest_app_phone_mockup.png" 
                  alt="GODest Hyderabad Ride App on Phone" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right: QR Code box - Blue & Gold Styling (No Black) */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="w-full max-w-xs bg-white rounded-3xl p-5 shadow-2xl border-2 border-blue-600 text-center space-y-3">
                
                {/* Visual SVG QR Code in Royal Blue & Gold */}
                <div className="w-36 h-36 mx-auto p-2 bg-white rounded-2xl border-2 border-blue-100 flex items-center justify-center">
                  <svg 
                    viewBox="0 0 100 100" 
                    className="w-full h-full" 
                    fill="#1E3A8A"
                  >
                    <rect x="5" y="5" width="26" height="26" rx="4" fill="#1E3A8A" />
                    <rect x="9" y="9" width="18" height="18" rx="2" fill="#FFFFFF" />
                    <rect x="13" y="13" width="10" height="10" rx="1" fill="#F5B800" />

                    <rect x="69" y="5" width="26" height="26" rx="4" fill="#1E3A8A" />
                    <rect x="73" y="9" width="18" height="18" rx="2" fill="#FFFFFF" />
                    <rect x="77" y="13" width="10" height="10" rx="1" fill="#F5B800" />

                    <rect x="5" y="69" width="26" height="26" rx="4" fill="#1E3A8A" />
                    <rect x="9" y="73" width="18" height="18" rx="2" fill="#FFFFFF" />
                    <rect x="13" y="77" width="10" height="10" rx="1" fill="#F5B800" />

                    <rect x="36" y="8" width="8" height="8" />
                    <rect x="48" y="8" width="6" height="6" />
                    <rect x="38" y="20" width="12" height="6" />
                    <rect x="55" y="22" width="8" height="8" />
                    <rect x="8" y="36" width="6" height="14" />
                    <rect x="20" y="38" width="8" height="8" />
                    <rect x="34" y="34" width="8" height="8" />
                    <rect x="46" y="36" width="12" height="12" fill="#2563EB" />
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
                  <h4 className="text-sm font-bold text-slate-900 font-['Outfit']">
                    Scan & Ride Now
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Scan with any phone camera
                  </p>
                </div>

                <button 
                  type="button" 
                  onClick={handleSimulateScan}
                  className="w-full flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl text-xs transition-colors shadow-sm"
                >
                  <Smartphone size={13} /> 
                  <span>Scan with Camera</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
