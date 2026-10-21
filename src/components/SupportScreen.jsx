import React, { useState, useEffect } from 'react';
import {
  PhoneCall,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowLeft,
  MessageCircle,
  Clock,
  HelpCircle,
  Receipt,
  AlertTriangle,
  CheckCircle2,
  Send,
  Sparkles,
  ExternalLink,
  Car,
  Bike,
  Zap,
  Headphones,
  BadgeCheck,
  Check,
  Copy,
  Search,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  X,
  CreditCard,
  Briefcase,
  AlertCircle,
  User,
  Phone,
  Hash,
  FileText,
  LifeBuoy,
  RefreshCw,
  ShieldAlert,
  Compass,
  Navigation,
  CheckCheck
} from 'lucide-react';
import { AutoRickshawIcon } from './VehicleIcon';
import Logo from './Logo';
import AppDownloadModal from './AppDownloadModal';
import Footer from './Footer';

export default function SupportScreen({
  initialCategory = 'fare_surge',
  initialTab = 'console',
  onNavigateHome,
  onBookClick,
  onOpenLegal,
  onSelectCategory,
  onSelectTab
}) {
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('rider');

  // Navigation tabs: 'console' (form) | 'track' | 'channels'
  const [activeConsoleTab, setActiveConsoleTab] = useState('ticket');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Pre-selected sample trip for interactive demo
  const [selectedSampleTrip, setSelectedSampleTrip] = useState(null);

  // Ticket form state
  const [ticketForm, setTicketForm] = useState({
    name: '',
    phone: '',
    rideCategory: 'car', // 'car' | 'bike' | 'auto'
    rideId: '',
    category: initialCategory || 'fare_surge',
    priority: 'high',
    message: ''
  });

  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [generatedTicketId, setGeneratedTicketId] = useState('');
  const [copiedTicket, setCopiedTicket] = useState(false);

  // Ticket Lookup state
  const [lookupId, setLookupId] = useState('');
  const [lookupResult, setLookupResult] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (initialTab === 'track') {
      setActiveConsoleTab('track');
    }
  }, [initialTab]);

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    const id = `GD-TKT-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedTicketId(id);
    setTicketSubmitted(true);
  };

  const handleCopyTicket = () => {
    if (navigator.clipboard && generatedTicketId) {
      navigator.clipboard.writeText(generatedTicketId);
      setCopiedTicket(true);
      setTimeout(() => setCopiedTicket(false), 2000);
    }
  };

  const handleLookup = (e) => {
    e.preventDefault();
    if (!lookupId.trim()) return;

    setLookupResult({
      id: lookupId.toUpperCase(),
      status: 'In Active Review',
      statusColor: 'text-amber-800 bg-amber-50 border-amber-300',
      category: 'Zero Surge Fare Lock Dispute',
      vehicle: 'Prime AC Sedan',
      officer: 'S. K. Verma (South Zone Command Desk)',
      eta: 'Under 15 mins',
      timeline: [
        { time: '12:40 PM', title: 'Ticket Received', desc: 'Case auto-assigned to Central Grievance Officer', done: true },
        { time: '12:48 PM', title: 'GPS Telemetry Reviewed', desc: 'Ride GPS and digital meter verified against booked flat rate', done: true },
        { time: 'In Progress', title: 'Refund Processing', desc: 'Instant UPI credit queued via ICICI Aggregator gateway', done: false }
      ]
    });
  };

  // Recent trips helper for one-click resolution
  const sampleTrips = [
    {
      id: 'GD-8921-HYD',
      mode: 'bike',
      vehicleLabel: 'Solo Moto',
      icon: Bike,
      date: 'Today, 11:20 AM',
      route: 'Madhapur → Cyber Towers Hitec City',
      fare: '₹38',
      surgeCharged: true
    },
    {
      id: 'GD-7634-HYD',
      mode: 'auto',
      vehicleLabel: 'Metered Auto',
      icon: AutoRickshawIcon,
      date: 'Yesterday, 06:45 PM',
      route: 'Banjara Hills Rd 12 → Jubilee Hills',
      fare: '₹85',
      surgeCharged: false
    },
    {
      id: 'GD-4412-HYD',
      mode: 'car',
      vehicleLabel: 'Prime Cab',
      icon: Car,
      date: '20 Oct, 09:15 PM',
      route: 'Gachibowli → RGI Airport Terminal 1',
      fare: '₹420',
      surgeCharged: false
    }
  ];

  const handleSelectTrip = (trip) => {
    setSelectedSampleTrip(trip.id);
    setTicketForm((prev) => ({
      ...prev,
      rideCategory: trip.mode,
      rideId: trip.id,
      category: trip.surgeCharged ? 'fare_surge' : 'lost_item',
      message: `Need resolution for trip ${trip.id} (${trip.route}). `
    }));
    setActiveConsoleTab('ticket');

    // Scroll smoothly to form
    const el = document.getElementById('resolution-console');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectHeroPillar = (category) => {
    setTicketForm((prev) => ({
      ...prev,
      category
    }));
    setActiveConsoleTab('ticket');
    const el = document.getElementById('resolution-console');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const faqs = [
    {
      q: 'How does the Zero Surge refund guarantee work during rain or peak traffic?',
      a: 'Go Dest enforces 1.0x flat regular pricing at all times. If any driver or external meter demands extra surge pricing during rain or peak rush hours, simply submit your Ride ID. Our command desk audits the GPS trip telemetry and processes an instant UPI refund directly to your linked account within 15 minutes.'
    },
    {
      q: 'I left a phone or bag in an auto / cab. How do I recover it immediately?',
      a: 'Call our 24/7 Command Hotline at 040-6000-7000 or message on WhatsApp. We immediately freeze the captain’s next trip dispatch, contact the verified driver via our secure hotline, and coordinate safe doorstep handover or delivery to the nearest police station.'
    },
    {
      q: 'What should I do if a captain demands offline cash instead of app fare?',
      a: 'Never pay extra cash beyond the digital fare shown on your screen. You can tap "Raise Support Ticket" or call 040-6000-7000. All captains are 100% Aadhaar & Police verified; haggling or offline demand incurs an immediate platform suspension under our Zero-Haggling Code of Conduct.'
    },
    {
      q: 'Where do I find my Ride ID for creating a ticket?',
      a: 'Your Ride ID (e.g. GD-8921-HYD) is displayed on your booking SMS, WhatsApp trip receipt, or can be found under Ride History. Even if you do not have the Ride ID, you can submit your registered phone number and our team will match your trip.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 via-white to-slate-50/70 text-slate-900 font-['Plus_Jakarta_Sans'] flex flex-col selection:bg-[#F5B800]/30 selection:text-slate-900 relative">

      {/* Decorative Golden Road Speed Lines (Signature Brand Element) */}
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-[560px] opacity-25 pointer-events-none overflow-hidden -z-0">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
          <circle cx="650" cy="180" r="280" fill="url(#supportYellowGlowMaster)" />
          <path d="M400 -50 L750 650 M450 -50 L800 650 M500 -50 L850 650" stroke="#F5B800" strokeWidth="12" strokeDasharray="30 20" opacity="0.32" />
          <defs>
            <radialGradient id="supportYellowGlowMaster" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(650 180) rotate(90) scale(280)">
              <stop stopColor="#F5B800" stopOpacity="0.3" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Top Midnight Trust Bar: Sleek, high-contrast & premium */}
      <div className="bg-[#0F172A] text-slate-300 text-[11px] sm:text-xs py-1.5 px-4 border-b border-slate-800 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3 font-medium">
            <span className="inline-flex items-center gap-1.5 font-bold text-[#F5B800]">
              <Zap size={12} className="fill-[#F5B800]" />
              <span>Zero-Surge Guaranteed</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-slate-300">
              24/7 National Operations Command • Direct Police 112 Integrated
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:04060007000"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-medium transition-colors cursor-pointer"
              title="Call 24/7 Command Hotline"
            >
              <PhoneCall size={12} className="text-[#F5B800]" />
              <span className="hidden sm:inline text-slate-400">24/7 Command Hotline:</span>
              <strong className="text-white font-bold tracking-wide">040-6000-7000</strong>
            </a>
          </div>
        </div>
      </div>

      {/* Screen Header (Dedicated, sticky, clean) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">

            {/* Left: Logo & Breadcrumbs */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => onNavigateHome?.()}
                className="flex-shrink-0 transition-opacity hover:opacity-95 cursor-pointer"
                title="Return to Home"
              >
                <Logo size="medium" />
              </button>

              <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 font-semibold border-l border-slate-200 pl-4">
                <button
                  type="button"
                  onClick={() => onNavigateHome?.()}
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Home
                </button>
                <span>/</span>
                <span className="text-slate-700">Rider Support</span>
                <span>/</span>
                <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                  24/7 Resolution Hub
                </span>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => onNavigateHome?.()}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold shadow-2xs transition-all cursor-pointer"
              >
                <ArrowLeft size={15} />
                <span>Back to Home</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setModalTab('rider');
                  setIsAppModalOpen(true);
                }}
                className="flex items-center gap-1.5 sm:gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-slate-950 font-bold px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <Sparkles size={15} />
                <span>Book Ride</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 1. HERO HEADER: CLEAN, AIRY & PURPOSEFUL                  */}
      {/* ========================================================= */}
      <section className="relative z-10 pt-10 pb-8 sm:pt-14 sm:pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main Title Cluster */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5B800]/20 text-slate-950 text-xs font-extrabold uppercase tracking-wider font-['Outfit'] border border-[#F5B800]/50 shadow-2xs">
              <Sparkles size={13} className="text-amber-700" />
              <span>Go Dest 24/7 National Rider Care</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black font-['Outfit'] tracking-tight text-slate-900 leading-[1.08]">
              Rider Support & <span className="text-[#2563EB] relative inline-block">
                Resolution Hub
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#F5B800]/40 -z-10 rounded-full" />
              </span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
              Immediate assistance for Zero-Surge price adjustments, forgotten belongings recovery, driver conduct disputes, and 24/7 safety response across all ride categories.
            </p>

            {/* Live Service Level SLA Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 text-xs">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>24/7 Command Desk Live</span>
                <span className="text-emerald-400">•</span>
                <span className="text-emerald-700 font-medium">Response &lt; 45s</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 font-bold shadow-2xs">
                <Zap size={13} className="text-[#2563EB]" />
                <span>15-Minute Zero Surge UPI Refund</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 font-bold shadow-2xs">
                <ShieldCheck size={13} className="text-amber-700" />
                <span>Police 112 & Aadhaar Verified</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. THREE CORE ACTION PILLARS (HERO RESOLUTION CARDS)      */}
      {/* ========================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Pillar 1: Zero Surge Fare Dispute */}
          <div
            onClick={() => handleSelectHeroPillar('fare_surge')}
            className="group p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top ambient glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-200/50 transition-colors" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 group-hover:bg-[#F5B800] text-amber-700 group-hover:text-slate-950 flex items-center justify-center transition-colors shadow-2xs">
                  <Zap size={22} className="stroke-[2.5]" />
                </div>
                <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                  100% Price Lock
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-extrabold text-slate-900 font-['Outfit'] group-hover:text-amber-700 transition-colors">
                  Zero Surge Refund
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Charged higher during rain or peak traffic? Our digital meter telemetry audits your ride and initiates an instant UPI refund within 15 minutes.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-800">
              <span>Claim Surge Refund</span>
              <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* Pillar 2: Lost & Found Radar */}
          <div
            onClick={() => handleSelectHeroPillar('lost_item')}
            className="group p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top ambient glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-200/50 transition-colors" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-[#2563EB] text-[#2563EB] group-hover:text-white flex items-center justify-center transition-colors shadow-2xs">
                  <Briefcase size={22} className="stroke-[2.5]" />
                </div>
                <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-900 border border-blue-200">
                  Instant Lockdown
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-extrabold text-slate-900 font-['Outfit'] group-hover:text-[#2563EB] transition-colors">
                  Lost & Found Property
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Left a phone, bag, or wallet in a Solo Moto, Auto, or Cab? We freeze the captain's dispatch queue and coordinate a safe doorstep recovery.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2563EB] group-hover:text-blue-800">
              <span>Recover Lost Item</span>
              <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* Pillar 3: Driver Conduct & Safety SOS */}
          <div
            onClick={() => handleSelectHeroPillar('safety_sos')}
            className="group p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top ambient glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-200/50 transition-colors" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 group-hover:bg-emerald-600 text-emerald-700 group-hover:text-white flex items-center justify-center transition-colors shadow-2xs">
                  <ShieldCheck size={22} className="stroke-[2.5]" />
                </div>
                <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200">
                  Police Verified 112
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-extrabold text-slate-900 font-['Outfit'] group-hover:text-emerald-700 transition-colors">
                  Captain Conduct & Safety
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Driver demanded offline cash, haggled, or took an unauthorized route? 100% Aadhaar & Police verified captains with immediate disciplinary action.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
              <span>Report Captain Issue</span>
              <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. RECENT RIDES SELECTOR (INTERACTIVE REAL RIDE EXPERIENCE)*/}
      {/* ========================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block font-['Outfit']">
                QUICK RESOLUTION
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-['Outfit']">
                Need Help with a Recent Journey?
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Click a trip to auto-fill ticket details
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {sampleTrips.map((trip) => {
              const IconComponent = trip.icon;
              const isSelected = selectedSampleTrip === trip.id;

              return (
                <div
                  key={trip.id}
                  onClick={() => handleSelectTrip(trip)}
                  className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'border-[#2563EB] bg-blue-50/70 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'bg-[#2563EB] text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      <IconComponent size={18} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-xs text-slate-900 truncate">
                          {trip.vehicleLabel}
                        </span>
                        <span className="font-mono text-[10px] text-slate-400">
                          {trip.id}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 truncate font-medium">
                        {trip.route}
                      </p>
                      <span className="text-[10px] text-slate-400 block">
                        {trip.date} • {trip.fare}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold flex-shrink-0 transition-colors ${
                      isSelected ? 'bg-[#2563EB] text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    Resolve →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. MAIN RESOLUTION CONSOLE (TABS: TICKET | TRACK | CALL)  */}
      {/* ========================================================= */}
      <section id="resolution-console" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 overflow-hidden">

          {/* Console Header with Modern Segmented Navigation Switcher */}
          <div className="bg-gradient-to-r from-[#0F2042] via-[#1E3A8A] to-[#2563EB] p-6 sm:p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5B800]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F5B800] text-slate-950 text-[11px] font-black uppercase tracking-wider">
                  <BadgeCheck size={13} />
                  <span>OFFICIAL RESOLUTION DESK</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] tracking-tight">
                  {activeConsoleTab === 'ticket' ? 'Raise Incident Ticket' : activeConsoleTab === 'track' ? 'Live Ticket Lookup' : 'Direct Concierge Desk'}
                </h2>
                <p className="text-xs sm:text-sm text-blue-100 max-w-md font-medium">
                  {activeConsoleTab === 'ticket'
                    ? 'Fill out ride details for instant inspection by our Command Desk.'
                    : activeConsoleTab === 'track'
                    ? 'Enter your support reference ID to see assigned officer and refund status.'
                    : 'Get immediate phone, WhatsApp, or emergency police assistance.'}
                </p>
              </div>

              {/* Segmented Switcher Controls */}
              <div className="flex-shrink-0 bg-slate-950/30 p-1.5 rounded-2xl backdrop-blur-md border border-white/20 self-stretch sm:self-auto shadow-inner">
                <div className="grid grid-cols-3 gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveConsoleTab('ticket')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      activeConsoleTab === 'ticket'
                        ? 'bg-white text-slate-950 shadow-md font-black'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <FileText size={13} className={activeConsoleTab === 'ticket' ? 'text-[#2563EB]' : ''} />
                    <span>Ticket</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveConsoleTab('track')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      activeConsoleTab === 'track'
                        ? 'bg-white text-slate-950 shadow-md font-black'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Clock size={13} className={activeConsoleTab === 'track' ? 'text-[#2563EB]' : ''} />
                    <span>Track</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveConsoleTab('channels')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      activeConsoleTab === 'channels'
                        ? 'bg-white text-slate-950 shadow-md font-black'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <PhoneCall size={13} className={activeConsoleTab === 'channels' ? 'text-[#2563EB]' : ''} />
                    <span>Hotline</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Console Body */}
          <div className="p-6 sm:p-8">

            {/* TAB 1: CREATE TICKET FORM */}
            {activeConsoleTab === 'ticket' && (
              <div>
                {ticketSubmitted ? (
                  /* Success Confirmation State */
                  <div className="text-center py-8 space-y-6 max-w-lg mx-auto animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-18 h-18 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 size={40} className="stroke-[2.5]" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit']">
                        Support Ticket Created!
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600">
                        Assigned to South Zone Command Desk. An officer is reviewing GPS records.
                      </p>
                    </div>

                    {/* Reference ID card */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between gap-4 font-mono">
                      <div className="text-left">
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">Incident Reference ID</span>
                        <span className="text-lg sm:text-xl font-black text-[#2563EB]">{generatedTicketId}</span>
                      </div>
                      <button
                        onClick={handleCopyTicket}
                        className="px-3.5 py-2 rounded-xl bg-white border border-blue-200 text-xs font-bold text-[#2563EB] flex items-center gap-1.5 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                      >
                        {copiedTicket ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                        <span>{copiedTicket ? 'Copied' : 'Copy ID'}</span>
                      </button>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1 text-slate-600">
                      <p>• SMS & WhatsApp updates queued for: <strong className="text-slate-900">{ticketForm.phone || '+91 98765 43210'}</strong></p>
                      <p>• Estimated Resolution SLA: <strong className="text-emerald-700">Under 15 Minutes</strong></p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={`https://wa.me/914060007000?text=Hi%20Go%20Dest,%20I%20have%20created%20Ticket%20${generatedTicketId}%20and%20need%20assistance.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                      >
                        <MessageCircle size={16} />
                        <span>Chat on WhatsApp</span>
                      </a>

                      <button
                        onClick={() => {
                          setTicketSubmitted(false);
                          setTicketForm({
                            name: '',
                            phone: '',
                            rideCategory: 'car',
                            rideId: '',
                            category: 'fare_surge',
                            priority: 'high',
                            message: ''
                          });
                        }}
                        className="py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all cursor-pointer"
                      >
                        Submit Another Query
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Input Form */
                  <form onSubmit={handleTicketSubmit} className="space-y-6">

                    {/* Fleet Vehicle Selector */}
                    <div>
                      <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                        Select Ride Vehicle Mode *
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: 'bike', label: 'Solo Moto', sub: 'Bike Taxi', icon: Bike },
                          { id: 'auto', label: 'Metered Auto', sub: 'Rickshaw', icon: AutoRickshawIcon },
                          { id: 'car', label: 'Prime Cab', sub: 'AC Sedan / SUV', icon: Car }
                        ].map((v) => {
                          const IconC = v.icon;
                          const isSel = ticketForm.rideCategory === v.id;
                          return (
                            <button
                              type="button"
                              key={v.id}
                              onClick={() => setTicketForm({ ...ticketForm, rideCategory: v.id })}
                              className={`p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer relative ${
                                isSel
                                  ? 'bg-blue-50/70 border-[#2563EB] shadow-xs ring-2 ring-blue-100'
                                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1.5">
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                                  isSel ? 'bg-[#2563EB] text-white' : 'bg-slate-100 text-slate-600'
                                }`}>
                                  <IconC size={16} />
                                </div>
                                {isSel && (
                                  <span className="w-4 h-4 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[9px] font-bold">
                                    ✓
                                  </span>
                                )}
                              </div>
                              <h4 className={`text-xs font-extrabold ${isSel ? 'text-[#1E3A8A]' : 'text-slate-900'}`}>
                                {v.label}
                              </h4>
                              <p className="text-[10px] text-slate-500 font-medium">
                                {v.sub}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
                          Your Full Name *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <User size={16} />
                          </div>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Sravan Reddy"
                            value={ticketForm.name}
                            onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 text-sm text-slate-900 outline-none transition-all font-medium"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <Phone size={16} />
                          </div>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. +91 98765 43210"
                            value={ticketForm.phone}
                            onChange={(e) => setTicketForm({ ...ticketForm, phone: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 text-sm text-slate-900 outline-none transition-all font-medium"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Category & Ride ID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
                          Incident Category *
                        </label>
                        <select
                          value={ticketForm.category}
                          onChange={(e) => setTicketForm({ ...ticketForm, category: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 text-sm text-slate-900 outline-none bg-white font-semibold transition-all"
                        >
                          <option value="fare_surge">⚡ Zero Surge Refund / Overcharged Fare</option>
                          <option value="lost_item">🎒 Lost Item in Vehicle (Phone, Bag, Wallet)</option>
                          <option value="safety_sos">🛡️ Captain Demanded Extra Cash / Haggling</option>
                          <option value="payment_upi">💳 UPI Double Debit / Failed Booking Credit</option>
                          <option value="booking_delay">🚖 Captain Delay / Unjust Cancellation</option>
                          <option value="other">💬 General Inquiry / App Feedback</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
                          Ride ID (Optional)
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <Hash size={16} />
                          </div>
                          <input
                            type="text"
                            placeholder="e.g. GD-8921-HYD"
                            value={ticketForm.rideId}
                            onChange={(e) => setTicketForm({ ...ticketForm, rideId: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 text-sm text-slate-900 outline-none font-mono uppercase transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-1.5">
                        Describe What Happened *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Provide details: trip timing, exact extra amount charged, description of misplaced bag/phone, or captain behavior..."
                        value={ticketForm.message}
                        onChange={(e) => setTicketForm({ ...ticketForm, message: e.target.value })}
                        className="w-full p-4 rounded-xl border border-slate-300 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 text-sm text-slate-900 outline-none resize-none transition-all leading-relaxed font-medium"
                      />
                    </div>

                    {/* Submit Bar */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <ShieldCheck size={16} className="text-emerald-600 flex-shrink-0" />
                        <span>Audited under DPDP Act 2023. SLA &lt; 15 mins.</span>
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#F5B800] to-[#E5A800] hover:from-[#F5B800] hover:to-[#D99B00] text-slate-950 font-black text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
                      >
                        <Send size={16} className="stroke-[2.5]" />
                        <span>Submit for Instant Resolution</span>
                      </button>
                    </div>

                  </form>
                )}
              </div>
            )}

            {/* TAB 2: LIVE TICKET STATUS LOOKUP */}
            {activeConsoleTab === 'track' && (
              <div className="space-y-6">
                <form onSubmit={handleLookup} className="space-y-3">
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                    Enter Support Ticket Reference ID
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Hash size={16} />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. GD-TKT-892144"
                        value={lookupId}
                        onChange={(e) => setLookupId(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-50 text-sm text-slate-900 outline-none font-mono uppercase tracking-wider"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-7 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white text-sm font-bold shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Clock size={16} />
                      <span>Track Status</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>Try active sample reference:</span>
                    <button
                      type="button"
                      onClick={() => setLookupId('GD-TKT-892144')}
                      className="text-[#2563EB] font-mono underline font-bold cursor-pointer hover:text-blue-800"
                    >
                      GD-TKT-892144
                    </button>
                  </div>
                </form>

                {lookupResult && (
                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-base font-bold text-slate-900">{lookupResult.id}</span>
                      <span className={`text-xs font-black px-3 py-1 rounded-full border ${lookupResult.statusColor}`}>
                        ● {lookupResult.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-white border border-slate-200">
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Category</span>
                        <strong className="text-slate-800">{lookupResult.category}</strong>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-200">
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Assigned Officer</span>
                        <strong className="text-slate-800">{lookupResult.officer}</strong>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-200">
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Resolution Target</span>
                        <strong className="text-emerald-700">{lookupResult.eta}</strong>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200 space-y-2.5">
                      <span className="text-[11px] font-extrabold uppercase text-slate-400 block tracking-wider">
                        Live Resolution Progress
                      </span>
                      {lookupResult.timeline.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <span className="w-2 h-2 rounded-full bg-[#2563EB] mt-1.5 flex-shrink-0" />
                          <div>
                            <strong className="text-slate-800">{step.title}</strong>
                            <span className="text-slate-400 text-xs ml-2">({step.time})</span>
                            <p className="text-xs text-slate-500">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                      <span className="text-slate-600">Need immediate escalation?</span>
                      <a
                        href="tel:04060007000"
                        className="inline-flex items-center gap-1.5 text-[#2563EB] font-bold hover:underline"
                      >
                        <PhoneCall size={13} />
                        <span>Call Officer: 040-6000-7000</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: DIRECT CHANNELS */}
            {activeConsoleTab === 'channels' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://wa.me/914060007000?text=Hi%20Go%20Dest%20Support,%20I%20need%20urgent%20help%20with%20my%20ride"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 hover:border-emerald-300 hover:shadow-md transition-all flex items-start gap-3.5 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors">
                        WhatsApp Concierge
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">Instant messaging with active command officers. Avg response &lt; 60 seconds.</p>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 mt-2">
                        <span>Chat Now</span>
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </a>

                  <a
                    href="tel:04060007000"
                    className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200 hover:border-blue-300 hover:shadow-md transition-all flex items-start gap-3.5 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center flex-shrink-0">
                      <PhoneCall size={20} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-[#2563EB] transition-colors">
                        040-6000-7000 Phone Line
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">24/7 dedicated national helpline for Hyderabad and pan-India rides.</p>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] mt-2">
                        <span>Call 24/7</span>
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </a>
                </div>

                {/* Emergency Card */}
                <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center flex-shrink-0">
                      <ShieldAlert size={20} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm text-rose-950">
                        Emergency Police & Women Safety Helpline
                      </h4>
                      <p className="text-xs text-rose-700">Immediate live dispatch bridge with state police control rooms.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="tel:112"
                      className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-sm"
                    >
                      Police 112
                    </a>
                    <a
                      href="tel:1091"
                      className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold transition-all shadow-sm"
                    >
                      SHE 1091
                    </a>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. FREQUENTLY ASKED QUESTIONS                             */}
      {/* ========================================================= */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block font-['Outfit']">
                KNOWLEDGE BASE
              </span>
              <h3 className="text-lg font-extrabold font-['Outfit'] text-slate-900">
                Frequently Asked Questions
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Clear answers in seconds
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-4">
                <button
                  type="button"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-[#2563EB] transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 group-hover:text-[#2563EB] flex-shrink-0 transition-transform duration-200 ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedFaq === idx && (
                  <div className="mt-3 pr-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. STATUTORY GRIEVANCE REDRESSAL OFFICER BANNER           */}
      {/* ========================================================= */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 text-[#2563EB] text-[11px] font-bold uppercase tracking-wider">
              <BadgeCheck size={12} />
              <span>Statutory Compliance • IT Rules 2021 & Aggregator Guidelines</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
              Grievance Redressal Officer & Corporate Head Office
            </h3>
            <p className="text-xs text-slate-500 max-w-2xl">
              Designated under Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-4 text-xs text-slate-700">
              <span><strong>Grievance Officer:</strong> V. R. Sharma</span>
              <span>•</span>
              <span><strong>Email:</strong> <a href="mailto:grievance@godest.in" className="text-[#2563EB] underline font-semibold">grievance@godest.in</a></span>
              <span>•</span>
              <span><strong>Corporate HQ:</strong> Cyber Towers Road, Hitec City, Hyderabad - 500081</span>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => onOpenLegal?.('grievance')}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              View Grievance Policy
            </button>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer
        onBookClick={onBookClick}
        onOpenLegal={onOpenLegal}
        onOpenSupport={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      {/* App Store & Play Store Download / Book Ride Modal */}
      <AppDownloadModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        defaultTab={modalTab}
        onNavigateToPartner={() => {
          setIsAppModalOpen(false);
          onNavigateHome?.('contact-section');
        }}
      />
    </div>
  );
}
