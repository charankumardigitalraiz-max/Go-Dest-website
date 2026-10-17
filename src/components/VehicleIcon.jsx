import React from 'react';
import { Car, Bike, Zap } from 'lucide-react';

export function AutoRickshawIcon({ className = "w-5 h-5", size = 20 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Auto Rickshaw Silhouette SVG */}
      <path d="M4 17h16" />
      <circle cx="6.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
      <path d="M4 15V8a2 2 0 0 1 2-2h8l4 4v5" />
      <path d="M9 6v9" />
      <path d="M14 10h4" />
      <path d="M3 13h1" />
    </svg>
  );
}

export default function VehicleIcon({ category, id, size = 20, className = "" }) {
  if (category === 'bike') {
    return <Bike size={size} className={className} />;
  }
  if (category === 'auto') {
    return <AutoRickshawIcon size={size} className={className} />;
  }
  if (id === 'car_ev_suv') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <Car size={size} />
        <Zap size={Math.round(size * 0.55)} className="absolute -top-1 -right-1 text-amber-500 fill-amber-500" />
      </div>
    );
  }
  return <Car size={size} className={className} />;
}
