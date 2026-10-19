import React from 'react';
import {
  Star,
  ThumbsUp,
  CheckCircle2,
  Bike,
  Car
} from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Sravan Reddy',
      role: 'Software Engineer',
      location: 'Tech Corridor Commuter',
      tag: 'Office Commute',
      vehicle: 'GODest Moto',
      vehicleIcon: Bike,
      fare: '₹129',
      avatarColor: 'from-amber-500 to-amber-600',
      initials: 'SR',
      quote:
        'Beats the 50-minute peak traffic bottleneck in just 18 minutes for ₹129. Sanitized helmet, punctual captain, and zero surge. The daily commute lifesaver for tech professionals!'
    },
    {
      id: 2,
      name: 'Dr. Priyanka Sharma',
      role: 'Resident Doctor',
      location: 'Hospital & Healthcare',
      tag: 'Midnight Safety',
      vehicle: 'Prime AC Cab',
      vehicleIcon: Car,
      fare: '₹349',
      avatarColor: 'from-blue-600 to-indigo-600',
      initials: 'PS',
      quote:
        'Late 2 AM hospital emergency shifts require absolute safety. 3-minute doorstep pickup, quiet electric cab, and live GPS shared with family. Super reliable!'
    },
    {
      id: 3,
      name: 'Ananya Deshmukh',
      role: 'Fintech Consultant',
      location: 'Airport Terminal Express',
      tag: 'Airport Express',
      vehicle: 'Prime Sedan AC',
      vehicleIcon: Car,
      fare: '₹599',
      avatarColor: 'from-purple-600 to-indigo-600',
      initials: 'AD',
      quote:
        'Transparent airport transfer with zero surge when other apps quoted 2.5x surge pricing! Courteous captain was 10 mins early and handled all luggage with care.'
    }
  ];

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-white via-slate-50/50 to-white relative scroll-mt-20" id="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Compact Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50/90 text-amber-950 border border-amber-200/90 text-[11px] font-semibold tracking-[0.08em] uppercase shadow-2xs">
            <ThumbsUp size={12} className="text-[#F5B800]" />
            <span>4.96 ★ RATED • 50,000+ TRIPS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-normal font-['Outfit'] text-slate-800 tracking-[-0.03em] leading-[1.2]">
            <span>India Loves Riding with </span>
            <span className="font-bold bg-gradient-to-r from-amber-600 via-[#F5B800] to-amber-500 bg-clip-text text-transparent">
              GODest
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
            Real feedback from verified riders moving safe across major Indian cities every day.
          </p>
        </div>

        {/* Compact 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {reviews.map((item) => {
            const VehicleIconComponent = item.vehicleIcon;

            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-amber-400/80 transition-all duration-200"
              >
                <div className="space-y-3">
                  {/* Top Bar: Stars + Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#F5B800]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#F5B800]" />
                      ))}
                      <span className="text-xs font-bold text-slate-800 ml-1">5.0</span>
                    </div>

                    <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/60">
                      {item.tag}
                    </span>
                  </div>

                  {/* Concise Quote */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Footer: User Profile + Fare Paid Badge */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    {/* Compact Avatar */}
                    <div
                      className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.avatarColor} text-white font-bold flex items-center justify-center text-xs shadow-xs font-['Outfit'] flex-shrink-0`}
                    >
                      {item.initials}
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm font-['Outfit'] leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium truncate max-w-[150px] sm:max-w-[130px] lg:max-w-[160px]">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  {/* Fare & Mode Pill */}
                  <div className="text-right flex-shrink-0">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                      <VehicleIconComponent size={12} className="text-blue-600" />
                      <span>{item.fare}</span>
                    </span>
                    <span className="text-[9px] text-emerald-600 font-bold block uppercase tracking-wider mt-0.5">
                      Zero Surge
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Bottom Trust Guarantee Strip */}
        <div className="mt-6 p-3 sm:p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/90 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-800 font-semibold">
            <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />
            <span>100% Police-verified captains with zero surge guarantee across all operational cities in India.</span>
          </div>

          <a
            href="#book-section"
            className="hidden sm:inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 font-bold flex-shrink-0"
          >
            <span>Book Ride →</span>
          </a>
        </div>

      </div>
    </section>
  );
}
