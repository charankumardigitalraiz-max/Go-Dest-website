import React from 'react';
import { driverTestimonies } from '../data/cabData';
import { Star, ShieldCheck, ThumbsUp } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <ThumbsUp size={13} />
            <span>RIDER EXPERIENCES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit'] text-slate-900 tracking-tight">
            Hyderabad Loves Riding with GODest
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Real feedback from Hyderabad IT professionals, doctors, and airport commuters who ride safe every day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {driverTestimonies.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#F5B800] fill-[#F5B800]" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1.5">5.0</span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-['Outfit']">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
                <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded-md border border-blue-100">
                  {item.rideType}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
