import React from 'react';

export default function Logo({ size = 'medium', dark = false, className = '' }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';
  const isXLarge = size === 'xlarge';

  // Calibrated logo heights - refined for sleek, balanced navbar proportions
  const defaultHeight = isXLarge
    ? 'h-14 sm:h-16 md:h-18'
    : isLarge
      ? 'h-11 sm:h-13 md:h-14'
      : isSmall
        ? 'h-7 sm:h-8'
        : 'h-9 sm:h-10 md:h-11'; // medium: sleek and well-proportioned in Navbar and Footer

  const finalHeight = className || defaultHeight;

  return (
    <div className="flex items-center select-none group">
      <div
        className={`transition-transform duration-200 group-hover:scale-102 flex-shrink-0 flex items-center ${dark
          ? 'bg-white/95 px-2 py-1 rounded-2xl shadow-sm border border-white/30'
          : ''
          }`}
      >
        <img
          src="/hor-logo.webp"
          alt="GO Dest - Safe Ride • Move to Destination"
          className={`${finalHeight} w-auto object-contain block`}
          loading="eager"
        />
      </div>
    </div>
  );
}
