import React from 'react';
import {
  ShieldCheck,
  UserCheck,
  HeartHandshake,
  Lock,
  Radio,
  CheckCircle2,
  PhoneCall,
  AlertTriangle,
  Phone
} from 'lucide-react';

export default function SafetyPledge() {
  const safetyPillars = [
    {
      id: 'police',
      title: 'Police Verified Captains',
      subtitle: 'Official Background Verification',
      desc: 'Biometric Aadhaar identity checks, official criminal background screening, and defensive driving certification nationwide.',
      tag: '100% Cleared',
      tagColor: 'text-blue-700 bg-blue-50 border-blue-200',
      icon: UserCheck,
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      id: 'women',
      title: "Women's SafeZone & Emergency SOS",
      subtitle: 'National Women Helpline (1091 & 112)',
      desc: 'Direct escalation to Emergency Response Teams and local law enforcement with prioritized night monitoring (8 PM to 6 AM) and strict code of conduct.',
      tag: 'Priority 24/7',
      tagColor: 'text-pink-700 bg-pink-50 border-pink-200',
      icon: HeartHandshake,
      iconBg: 'bg-pink-50 text-pink-600 border-pink-100'
    },
    {
      id: 'telemetry',
      title: 'Live GPS & Number Masking',
      subtitle: 'Private Virtual Calling',
      desc: 'Real-time telemetry detects unexpected route diversions. Captains never see your personal phone number.',
      tag: 'Encrypted',
      tagColor: 'text-amber-800 bg-amber-50 border-amber-200',
      icon: Radio,
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100'
    },
    {
      id: 'inspection',
      title: 'Inspected Fleet & Sanitized Gear',
      subtitle: 'Cars, Bikes & Metered Autos',
      desc: 'Sanitized ISI bike helmets, calibrated auto meters, and seatbelted AC cabs inspected weekly for hygiene.',
      tag: 'Zero Defect',
      tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    }
  ];

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-white via-slate-50/60 to-white border-t border-b border-slate-200 scroll-mt-20" id="safety-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* Compact Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 text-blue-800 border border-blue-200/90 text-[11px] font-semibold tracking-[0.08em] uppercase shadow-2xs">
            <ShieldCheck size={13} className="text-blue-600" />
            <span>GODEST NATIONAL SAFETY CHARTER</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-normal font-['Outfit'] text-slate-800 tracking-[-0.03em] leading-[1.2]">
            Engineered for{' '}
            <span className="font-semibold text-slate-900">Absolute Safety</span> Across{' '}
            <span className="font-bold bg-gradient-to-r from-amber-600 via-[#F5B800] to-amber-500 bg-clip-text text-transparent">
              India
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
            Zero-tolerance security active 24x7. Police-verified captains, dedicated emergency SOS integration, and instant safety dispatch nationwide.
          </p>
        </div>

        {/* Compact 4-Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {safetyPillars.map((pillar) => {
            const IconComponent = pillar.icon;

            return (
              <div
                key={pillar.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between shadow-2xs hover:shadow-lg hover:border-amber-400/80 transition-all duration-200 group"
              >
                <div className="space-y-3">
                  {/* Top Bar: Icon + Status Tag */}
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-transform group-hover:scale-105 ${pillar.iconBg}`}>
                      <IconComponent size={18} />
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${pillar.tagColor}`}>
                      {pillar.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base font-['Outfit'] leading-snug group-hover:text-blue-700 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                  <span className="flex items-center gap-1 text-emerald-600">
                    <CheckCircle2 size={12} />
                    <span>Active Protocol</span>
                  </span>
                  <span>Car • Bike • Auto</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Emergency Hotline & SOS Action Bar */}
        {/* <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 text-white shadow-md flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 text-[#F5B800] flex items-center justify-center flex-shrink-0">
              <PhoneCall size={18} />
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="font-bold font-['Outfit'] text-sm sm:text-base text-white">
                  Pan-India 24/7 Command & Emergency Desk:
                </span>
                <span className="text-[11px] font-bold text-amber-300 bg-white/10 px-2 py-0.5 rounded border border-white/15">
                  Under 90s Dispatch
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-blue-100 font-medium">
                Connected with Cyberabad & Rachakonda Commissionerates for rapid roadside assistance.
              </p>
            </div>
          </div>


          <div className="flex flex-wrap items-center justify-center gap-2.5 flex-shrink-0">
            <a
              href="tel:04060007000"
              className="flex items-center gap-1.5 bg-[#F5B800] hover:bg-[#E5A800] text-slate-950 font-bold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-sm transition-transform active:scale-95"
            >
              <Phone size={14} />
              <span>040-6000-7000</span>
            </a>

            <a
              href="tel:1091"
              className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white font-semibold px-3 py-2 rounded-xl text-xs border border-white/20 transition-colors"
            >
              <HeartHandshake size={13} className="text-pink-300" />
              <span>SHE Teams: 1091</span>
            </a>

            <a
              href="tel:112"
              className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white font-semibold px-3 py-2 rounded-xl text-xs border border-white/20 transition-colors"
            >
              <AlertTriangle size={13} className="text-red-300" />
              <span>Police: 112</span>
            </a>
          </div>
        </div> */}

      </div>
    </section>
  );
}
