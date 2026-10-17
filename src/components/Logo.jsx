import React from 'react';

export default function Logo({ size = 'medium', dark = false }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  return (
    <div className="flex flex-col items-start select-none group">
      <div className="flex items-center gap-1.5">
        {/* Brand Name */}
        <div className={`font-bold tracking-tight flex items-baseline leading-none ${
          isLarge ? 'text-4xl' : isSmall ? 'text-2xl' : 'text-3xl'
        }`}>
          <span className="text-[#F5B800] drop-shadow-sm font-['Outfit'] font-bold">GO</span>
          <span className={`font-['Outfit'] font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>Dest</span>
        </div>

        {/* Shield Car Badge matching template */}
        <div className={`relative transition-transform duration-300 group-hover:scale-105 ${
          isLarge ? 'w-9 h-10' : isSmall ? 'w-6 h-7' : 'w-7 h-8'
        }`}>
          <svg viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
            {/* Outer Shield with Gold gradient */}
            <path
              d="M18 1L33 6V18C33 27.5 26.6 36.2 18 39C9.4 36.2 3 27.5 3 18V6L18 1Z"
              fill="#F5B800"
              stroke="#D49B00"
              strokeWidth="1.5"
            />
            {/* Inner Shield Line */}
            <path
              d="M18 4L30 8V18C30 25.8 24.8 33 18 35.4C11.2 33 6 25.8 6 18V8L18 4Z"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeOpacity="0.7"
            />
            {/* Front facing car silhouette */}
            <path
              d="M11 25H25M11 25C10 25 9.5 24.2 9.5 23.5L10.5 18C10.6 17.5 11 17 11.5 17H13.2L14.5 13.5C14.8 12.8 15.5 12.3 16.3 12.3H19.7C20.5 12.3 21.2 12.8 21.5 13.5L22.8 17H24.5C25 17 25.4 17.5 25.5 18L26.5 23.5C26.5 24.2 26 25 25 25M11 25L10 28H12M25 25L26 28H24M14 17L15 14H21L22 17H14ZM12.5 21C12.5 21.6 12 22 11.5 22C11 22 10.5 21.6 10.5 21C10.5 20.4 11 20 11.5 20C12 20 12.5 20.4 12.5 21ZM25.5 21C25.5 21.6 25 22 24.5 22C24 22 23.5 21.6 23.5 21C23.5 20.4 24 20 24.5 20C25 20 25.5 20.4 25.5 21Z"
              stroke="#0D111A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </div>

      {/* Subline: CAR RIDE • HYDERABAD */}
      <div className={`tracking-widest font-bold flex items-center gap-1.5 ${
        isLarge ? 'text-xs' : 'text-[10px]'
      } ${dark ? 'text-slate-300' : 'text-slate-800'}`}>
        <span>CAR RIDE</span>
        <span className="text-[#F5B800] text-[8px]">•</span>
        <span>HYDERABAD</span>
      </div>
    </div>
  );
}
