import React, { useState } from 'react';
import {
  PhoneCall,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building,
  Sparkles,
  ArrowRight,
  Check,
  Copy,
  User,
  Phone,
  Hash,
  ShieldAlert,
  Bike,
  Car,
  Clock,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Navigation,
  Award
} from 'lucide-react';

export default function ContactSection({ onOpenLegal }) {
  const [activeTab, setActiveTab] = useState('form'); // 'form' | 'partner' | 'solutions' | 'hubs'
  const [inquiryType, setInquiryType] = useState('rider'); // 'rider' | 'captain' | 'corporate' | 'lost_item'
  const [expandedFaq, setExpandedFaq] = useState(0);

  // General Inquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    rideId: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Partner Registration Form State
  const [partnerData, setPartnerData] = useState({
    name: '',
    phone: '',
    vehicleType: 'auto', // 'auto' | 'cab' | 'bike' | 'fleet'
    vehicleNumber: '',
    city: 'Hyderabad',
    dlNumber: ''
  });
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [partnerRefId, setPartnerRefId] = useState('');

  const [copied, setCopied] = useState(false);

  const quickChips = [
    { id: 'rider', label: 'Rider Help', icon: User },
    { id: 'lost_item', label: 'Lost Property', icon: HelpCircle },
    { id: 'captain', label: 'Captain Fleet', icon: Bike },
    { id: 'corporate', label: 'Corporate B2B', icon: Building }
  ];

  const quickMessageSuggestions = [
    'Left my bag / phone in ride',
    'Driver asked extra cash',
    'Need GST invoice',
    'Want to register auto fleet'
  ];

  const quickResolutions = [
    {
      title: 'Left an item inside an Auto or Cab?',
      badge: 'Immediate Action',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
      description:
        'Call our 24/7 hotline 040-6000-7000 or WhatsApp with your Ride ID. Our dispatch officer bridges a masked call to the driver or tracks the vehicle via telemetry within 15 mins.',
      actionText: 'Report Lost Item via WhatsApp',
      actionUrl: 'https://wa.me/914060007000?text=Hi%20GODest,%20I%20left%20an%20item%20in%20my%20ride'
    },
    {
      title: 'Charged extra or meter demanded by driver?',
      badge: 'Fair Price Guarantee',
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
      description:
        'GODest operates on zero-surge transparent pricing. Decline extra cash and submit your Ride ID. Verified overcharges are refunded to your UPI/wallet within 30 minutes.',
      actionText: 'Dispute Fare',
      actionUrl: 'mailto:support@godest.in?subject=Fare%20Dispute'
    },
    {
      title: 'Want to register as a Captain with 0% Commission?',
      badge: 'Captain Onboarding',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      description:
        'Keep 100% of your earnings. Carry your Aadhaar, DL, and RC to our Hitec City Hub, or finish WhatsApp onboarding in under 5 minutes.',
      actionText: 'Start Captain Onboarding',
      actionUrl: 'https://wa.me/914060007000?text=Hi%20GODest,%20I%20want%20to%20register%20as%20a%20Captain'
    },
    {
      title: 'Corporate billing, GST invoicing & bulk accounts',
      badge: 'B2B Enterprise',
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-200',
      description:
        'Get consolidated monthly billing, 100% compliant GST input tax credit, and priority dispatch across Hyderabad, Bangalore, and Vijayawada.',
      actionText: 'Contact Enterprise Desk',
      actionUrl: 'mailto:corporate@godest.in?subject=Corporate%20Fleet%20Inquiry'
    }
  ];

  const hubLocations = [
    {
      city: 'Hyderabad HQ',
      title: 'Central Command & Captain Center',
      address: 'Plot 42, Cyber Towers Junction, Madhapur, Hyderabad - 500081',
      timings: '24/7 All Days',
      phone: '040-6000-7000'
    },
    {
      city: 'RGIA Shamshabad',
      title: 'Airport Transit Assistance',
      address: 'Arrivals Gate 4, Commercial Cab Zone P4, RGIA Airport',
      timings: '24/7 Operations',
      phone: '040-6000-7001'
    },
    {
      city: 'Secunderabad',
      title: 'Railway Mobility Kiosk',
      address: 'Platform 1 Main Exit, Station Road, Secunderabad - 500003',
      timings: '05:00 AM – 11:30 PM',
      phone: '040-6000-7002'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = `GD-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setSubmitted(true);
  };

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    const ref = `GD-CAP-${Math.floor(100000 + Math.random() * 900000)}`;
    setPartnerRefId(ref);
    setPartnerSubmitted(true);
  };

  const handleCopy = (text) => {
    if (navigator.clipboard && text) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="contact-section"
      className="w-full relative bg-slate-900 text-slate-900 scroll-mt-16 overflow-hidden border-t border-slate-200"
    >
      {/* Full-width Compact Split Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-0">

        {/* ======================================================== */}
        {/* LEFT PANEL: COMPACT EDITORIAL COMMAND DECK (40% desktop) */}
        {/* ======================================================== */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1D4ED8] text-white p-6 sm:p-8 lg:p-10 relative flex flex-col justify-between overflow-hidden">

          {/* Background Decorative Accent Ring */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#F5B800] opacity-90 pointer-events-none -z-0 shadow-xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full border-4 border-[#F5B800]/40 pointer-events-none -z-0" />

          {/* Top Info */}
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] font-extrabold uppercase tracking-wider font-['Outfit'] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>COMMAND DESK • LIVE</span>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-['Outfit'] tracking-tight leading-[1.1] text-white">
                Find your way <br />
                <span className="text-[#F5B800] drop-shadow-sm">forward with us.</span>
              </h2>

              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed font-medium max-w-sm">
                Real humans. Rapid resolution. Lost items, fare queries, or 0% commission captain onboarding — our Hyderabad ground team is live 24/7.
              </p>
            </div>

            {/* Compact Direct Channels */}
            <div className="space-y-2.5 pt-1 max-w-sm">

              {/* Channel 1: Phone Hotline */}
              <a
                href="tel:04060007000"
                className="group p-2.5 sm:p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all flex items-center justify-between cursor-pointer shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white text-[#2563EB] flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <PhoneCall size={15} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-blue-200">Hotline</span>
                      <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-emerald-400 text-slate-950">&lt; 45s SLA</span>
                    </div>
                    <div className="text-sm font-black text-white font-mono tracking-wide">040-6000-7000</div>
                  </div>
                </div>
                <ArrowRight size={14} className="text-blue-200 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* Channel 2: WhatsApp Dispatch */}
              <a
                href="https://wa.me/914060007000?text=Hi%20GODest,%20I%20need%20assistance%20with%20my%20ride"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 sm:p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all flex items-center justify-between cursor-pointer shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400 text-slate-950 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <MessageCircle size={15} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-blue-200">WhatsApp Desk</span>
                      <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-white/20 text-white">Online</span>
                    </div>
                    <div className="text-sm font-black text-white font-mono tracking-wide">+91 40 6000 7000</div>
                  </div>
                </div>
                <ArrowRight size={14} className="text-blue-200 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* Channel 3: SOS Police & SHE Team */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-rose-950/40 backdrop-blur-md border border-rose-400/30 flex items-center justify-between gap-2 shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-500 text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <ShieldAlert size={15} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-rose-200 block">Emergency SOS</span>
                    <span className="text-[11px] font-bold text-white">Direct Police & SHE Teams</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <a
                    href="tel:112"
                    className="px-2 py-0.5 rounded bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-extrabold shadow-2xs transition-colors"
                  >
                    112
                  </a>
                  <a
                    href="tel:1091"
                    className="px-2 py-0.5 rounded bg-pink-600 hover:bg-pink-700 text-white text-[11px] font-extrabold shadow-2xs transition-colors"
                  >
                    1091
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Left Panel Bottom Info */}
          <div className="relative z-10 pt-5 mt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-[11px] text-blue-100">
            <div className="flex items-center gap-1.5">
              <Building size={12} className="text-[#F5B800]" />
              <span>Cyber Towers, Hitec City, Hyd</span>
            </div>
            <div className="font-mono opacity-80 text-[10px]">
              Avg. reply: 42s
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* RIGHT PANEL: HIGHLIGHTED CONSOLE WITH PARTNER OPTION     */}
        {/* ======================================================== */}
        <div className="lg:col-span-7 bg-[#F4F6F9] p-4 sm:p-6 lg:p-8 flex flex-col justify-between">

          <div className="space-y-3.5">

            {/* Top Interactive Mode Tabs (Includes 'Partner With Us' option) */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3">
              <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-200/90 border border-slate-300/70">
                <button
                  type="button"
                  onClick={() => setActiveTab('form')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${activeTab === 'form'
                    ? 'bg-white text-[#2563EB] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  <Send size={12} />
                  <span>Send Message</span>
                </button>

                {/* Dedicated Partner Onboarding Form Tab */}
                <button
                  type="button"
                  onClick={() => setActiveTab('partner')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${activeTab === 'partner'
                    ? 'bg-white text-slate-950 shadow-xs ring-1 ring-amber-400'
                    : 'text-slate-700 hover:text-slate-950 font-bold'
                    }`}
                >
                  <Award size={13} className="text-amber-500 fill-amber-400" />
                  <span>Partner With Us</span>
                  <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-[#F5B800] text-slate-950">
                    0% Comm
                  </span>
                </button>

                {/* <button
                  type="button"
                  onClick={() => setActiveTab('solutions')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${activeTab === 'solutions'
                    ? 'bg-white text-[#2563EB] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  <Sparkles size={12} className="text-amber-500" />
                  <span>Quick Help</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('hubs')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${activeTab === 'hubs'
                    ? 'bg-white text-[#2563EB] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  <MapPin size={12} />
                  <span>Hubs</span>
                </button> */}
              </div>

              <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                <ShieldCheck size={13} className="text-emerald-600" />
                <span>Verified Dispatch</span>
              </div>
            </div>

            {/* TAB CONTENT 1: HIGH-CONTRAST HIGHLIGHTED INQUIRY FORM */}
            {activeTab === 'form' && (
              <div className="animate-in fade-in duration-200">
                {submitted ? (
                  /* Form Success State */
                  <div className="py-8 px-5 bg-white rounded-2xl border-2 border-emerald-400 ring-4 ring-emerald-500/10 shadow-lg text-center space-y-3.5 max-w-md mx-auto">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-2xs">
                      <CheckCircle2 size={28} className="stroke-[2.5]" />
                    </div>

                    <div className="space-y-0.5">
                      <h4 className="text-xl font-black font-['Outfit'] text-slate-900">
                        Inquiry Dispatched!
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Our Hyderabad duty officer has received your request. Typical callback time is under 15 minutes.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between gap-3 font-mono">
                      <div className="text-left">
                        <span className="text-[9px] uppercase font-bold text-slate-400 block">Reference ID</span>
                        <span className="text-sm font-black text-[#2563EB]">{referenceId}</span>
                      </div>
                      <button
                        onClick={() => handleCopy(referenceId)}
                        className="px-2.5 py-1 rounded-lg bg-white border border-blue-200 text-xs font-bold text-[#2563EB] flex items-center gap-1 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                      >
                        {copied ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                        <span>{copied ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>

                    <div className="pt-1 flex flex-col sm:flex-row gap-2 justify-center">
                      <a
                        href={`https://wa.me/914060007000?text=Hi%20GODest,%20I%20have%20submitted%20inquiry%20${referenceId}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all"
                      >
                        <MessageCircle size={14} />
                        <span>WhatsApp Update</span>
                      </a>

                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', phone: '', email: '', rideId: '', message: '' });
                        }}
                        className="py-2 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                      >
                        Send Another
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Highlighted Elevated Form Card */
                  <div className="bg-white rounded-2xl border-2 border-blue-500/30 ring-4 ring-blue-500/10 shadow-xl shadow-blue-500/5 overflow-hidden transition-all">

                    {/* Highlighted Top Banner Strip */}
                    <div className="bg-gradient-to-r from-blue-50 via-white to-amber-50/50 px-4 py-2 border-b border-blue-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#F5B800] ring-2 ring-amber-300 animate-pulse" />
                        <span className="text-[11px] font-black tracking-wider uppercase text-slate-900 font-['Outfit']">
                          DIRECT INQUIRY CONSOLE
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-[#2563EB] bg-blue-100/70 px-2 py-0.5 rounded-full">
                        Priority Queue
                      </span>
                    </div>

                    <form onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-3">

                      {/* Category Selector Chips */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">
                            Topic
                          </span>
                          <span className="text-[10px] text-slate-400">Select one:</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                          {quickChips.map((chip) => {
                            const IconComp = chip.icon;
                            const isSelected = inquiryType === chip.id;
                            return (
                              <button
                                type="button"
                                key={chip.id}
                                onClick={() => {
                                  setInquiryType(chip.id);
                                  if (chip.id === 'captain') {
                                    setActiveTab('partner');
                                  }
                                }}
                                className={`py-1.5 px-2.5 rounded-xl border text-[11px] font-bold flex items-center justify-center gap-1 transition-all cursor-pointer ${isSelected
                                  ? 'border-[#2563EB] bg-blue-50 text-[#2563EB] font-black shadow-2xs'
                                  : 'border-slate-200 bg-slate-50/60 text-slate-600 hover:border-slate-300 hover:bg-slate-100/60'
                                  }`}
                              >
                                <IconComp size={12} />
                                <span>{chip.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-[10px] font-black text-slate-600 uppercase tracking-wider mb-1">
                            Your Name *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                              <User size={13} />
                            </div>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Sravan Reddy"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full pl-7 pr-2.5 py-1.5 rounded-xl bg-slate-50/70 border border-slate-300 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 text-xs text-slate-900 outline-none transition-all font-medium"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-black text-slate-600 uppercase tracking-wider mb-1">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                              <Phone size={13} />
                            </div>
                            <input
                              type="tel"
                              required
                              placeholder="e.g. +91 98765 43210"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full pl-7 pr-2.5 py-1.5 rounded-xl bg-slate-50/70 border border-slate-300 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 text-xs text-slate-900 outline-none transition-all font-medium"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Email & Ride ID */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-[10px] font-black text-slate-600 uppercase tracking-wider mb-1">
                            Email <span className="text-slate-400 font-normal lowercase">(optional)</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                              <Mail size={13} />
                            </div>
                            <input
                              type="email"
                              placeholder="sravan@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full pl-7 pr-2.5 py-1.5 rounded-xl bg-slate-50/70 border border-slate-300 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 text-xs text-slate-900 outline-none transition-all font-medium"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-black text-slate-600 uppercase tracking-wider mb-1">
                            Ride ID / Auto No. <span className="text-slate-400 font-normal lowercase">(optional)</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                              <Hash size={13} />
                            </div>
                            <input
                              type="text"
                              placeholder="GD-8921-HYD"
                              value={formData.rideId}
                              onChange={(e) => setFormData({ ...formData, rideId: e.target.value })}
                              className="w-full pl-7 pr-2.5 py-1.5 rounded-xl bg-slate-50/70 border border-slate-300 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 text-xs text-slate-900 outline-none font-mono uppercase transition-all font-medium"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message & Quick Chips */}
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="text-[10px] font-black text-slate-600 uppercase tracking-wider">
                            Message Details *
                          </label>
                          <span className="text-[9px] text-slate-400">Quick template:</span>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-1.5">
                          {quickMessageSuggestions.map((sug, i) => (
                            <button
                              type="button"
                              key={i}
                              onClick={() => setFormData({ ...formData, message: sug })}
                              className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-slate-100 hover:bg-blue-100 hover:text-[#2563EB] text-slate-700 transition-colors cursor-pointer text-left"
                            >
                              + {sug}
                            </button>
                          ))}
                        </div>

                        <textarea
                          required
                          rows={2}
                          placeholder="Describe your issue or inquiry..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-slate-50/70 border border-slate-300 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 text-xs text-slate-900 outline-none resize-none transition-all font-medium leading-relaxed"
                        />
                      </div>

                      {/* Submit Row */}
                      <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                        <div className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                          <Clock size={11} className="text-[#2563EB]" />
                          <span>Guaranteed human callback &lt; 15 mins</span>
                        </div>

                        <button
                          type="submit"
                          className="w-full sm:w-auto px-6 py-2 rounded-xl bg-gradient-to-r from-[#F5B800] via-[#F5B800] to-[#E5A800] hover:brightness-105 text-slate-950 font-black text-xs shadow-md hover:shadow-lg hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                        >
                          <Send size={12} className="stroke-[2.5]" />
                          <span>Submit Inquiry to Desk</span>
                        </button>
                      </div>

                    </form>
                  </div>
                )}
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB CONTENT 2: DEDICATED PARTNER ONBOARDING FORM         */}
            {/* ======================================================== */}
            {activeTab === 'partner' && (
              <div className="animate-in fade-in duration-200">
                {partnerSubmitted ? (
                  /* Partner Success Screen */
                  <div className="py-8 px-5 bg-white rounded-2xl border-2 border-[#F5B800] ring-4 ring-amber-500/10 shadow-lg text-center space-y-3.5 max-w-md mx-auto">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto shadow-2xs">
                      <CheckCircle2 size={28} className="stroke-[2.5]" />
                    </div>

                    <div className="space-y-0.5">
                      <h4 className="text-xl font-black font-['Outfit'] text-slate-900">
                        Captain Application Received!
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Welcome to GODest zero-commission network. Our onboarding manager will call you within 10 minutes.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 flex items-center justify-between gap-3 font-mono">
                      <div className="text-left">
                        <span className="text-[9px] uppercase font-bold text-slate-500 block">Captain Token ID</span>
                        <span className="text-sm font-black text-slate-900">{partnerRefId}</span>
                      </div>
                      <button
                        onClick={() => handleCopy(partnerRefId)}
                        className="px-2.5 py-1 rounded-lg bg-white border border-amber-300 text-xs font-bold text-slate-900 flex items-center gap-1 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                      >
                        {copied ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                        <span>{copied ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>

                    <div className="pt-1 flex flex-col sm:flex-row gap-2 justify-center">
                      <a
                        href={`https://wa.me/914060007000?text=Hi%20GODest,%20I%20have%20submitted%20Captain%20application%20with%20Token%20${partnerRefId}.%20Vehicle:%20${partnerData.vehicleType}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all"
                      >
                        <MessageCircle size={14} />
                        <span>Fast-Track on WhatsApp</span>
                      </a>

                      <button
                        onClick={() => {
                          setPartnerSubmitted(false);
                          setPartnerData({ name: '', phone: '', vehicleType: 'auto', vehicleNumber: '', city: 'Hyderabad', dlNumber: '' });
                        }}
                        className="py-2 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                      >
                        New Partner Form
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Dedicated Partner Onboarding Card */
                  <div className="bg-white rounded-2xl border-2 border-amber-400 ring-4 ring-amber-400/10 shadow-xl shadow-amber-500/5 overflow-hidden transition-all">

                    {/* Partner Header Strip */}
                    <div className="bg-gradient-to-r from-amber-100/90 via-[#F5B800]/25 to-blue-50 px-4 py-2 border-b border-amber-200/80 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Award size={14} className="text-slate-950 fill-amber-500" />
                        <span className="text-[11px] font-black tracking-wider uppercase text-slate-950 font-['Outfit']">
                          CAPTAIN & FLEET PARTNERSHIP
                        </span>
                      </div>
                      <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                        100% Earnings to You
                      </span>
                    </div>

                    <form onSubmit={handlePartnerSubmit} className="p-4 sm:p-5 space-y-3">

                      {/* Vehicle Category Chips */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-black text-slate-600 uppercase tracking-wider">
                            Select Vehicle Category *
                          </span>
                          <span className="text-[10px] text-emerald-700 font-bold">0% Commission</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                          {[
                            { id: 'auto', label: 'Auto Rickshaw', icon: '🛺' },
                            { id: 'cab', label: 'Cab (Sedan/SUV)', icon: '🚗' },
                            { id: 'bike', label: 'Bike Taxi', icon: '🏍️' },
                            { id: 'fleet', label: 'Fleet (2+ Cabs)', icon: '🏢' }
                          ].map((item) => {
                            const isSelected = partnerData.vehicleType === item.id;
                            return (
                              <button
                                type="button"
                                key={item.id}
                                onClick={() => setPartnerData({ ...partnerData, vehicleType: item.id })}
                                className={`py-1.5 px-2 rounded-xl border text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${isSelected
                                  ? 'border-amber-500 bg-amber-50 text-slate-950 font-black shadow-2xs'
                                  : 'border-slate-200 bg-slate-50/60 text-slate-600 hover:border-slate-300 hover:bg-slate-100/60'
                                  }`}
                              >
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Captain Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-[10px] font-black text-slate-600 uppercase tracking-wider mb-1">
                            Captain Full Name *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                              <User size={13} />
                            </div>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Ramesh Kumar"
                              value={partnerData.name}
                              onChange={(e) => setPartnerData({ ...partnerData, name: e.target.value })}
                              className="w-full pl-7 pr-2.5 py-1.5 rounded-xl bg-slate-50/70 border border-slate-300 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-100 text-xs text-slate-900 outline-none transition-all font-medium"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-black text-slate-600 uppercase tracking-wider mb-1">
                            WhatsApp / Mobile Number *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                              <Phone size={13} />
                            </div>
                            <input
                              type="tel"
                              required
                              placeholder="e.g. +91 98480 12345"
                              value={partnerData.phone}
                              onChange={(e) => setPartnerData({ ...partnerData, phone: e.target.value })}
                              className="w-full pl-7 pr-2.5 py-1.5 rounded-xl bg-slate-50/70 border border-slate-300 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-100 text-xs text-slate-900 outline-none transition-all font-medium"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Vehicle Number & DL */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-[10px] font-black text-slate-600 uppercase tracking-wider mb-1">
                            Vehicle Plate Number *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                              <Hash size={13} />
                            </div>
                            <input
                              type="text"
                              required
                              placeholder="e.g. TS 09 UB 4567"
                              value={partnerData.vehicleNumber}
                              onChange={(e) => setPartnerData({ ...partnerData, vehicleNumber: e.target.value })}
                              className="w-full pl-7 pr-2.5 py-1.5 rounded-xl bg-slate-50/70 border border-slate-300 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-100 text-xs text-slate-900 outline-none font-mono uppercase transition-all font-medium"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-black text-slate-600 uppercase tracking-wider mb-1">
                            Driving License (DL) Number *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                              <ShieldCheck size={13} />
                            </div>
                            <input
                              type="text"
                              required
                              placeholder="e.g. TS00920200001234"
                              value={partnerData.dlNumber}
                              onChange={(e) => setPartnerData({ ...partnerData, dlNumber: e.target.value })}
                              className="w-full pl-7 pr-2.5 py-1.5 rounded-xl bg-slate-50/70 border border-slate-300 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-100 text-xs text-slate-900 outline-none font-mono uppercase transition-all font-medium"
                            />
                          </div>
                        </div>
                      </div>

                      {/* City Selector */}
                      <div>
                        <label className="block text-[10px] font-black text-slate-600 uppercase tracking-wider mb-1">
                          Primary Operating Hub *
                        </label>
                        <select
                          value={partnerData.city}
                          onChange={(e) => setPartnerData({ ...partnerData, city: e.target.value })}
                          className="w-full px-3 py-1.5 rounded-xl bg-slate-50/70 border border-slate-300 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-100 text-xs text-slate-900 outline-none transition-all font-medium cursor-pointer"
                        >
                          <option value="Hyderabad">Hyderabad (Hitec City, Secunderabad, Airport, All Hubs)</option>
                          <option value="Bangalore">Bangalore (Electronic City, Whitefield, Airport)</option>
                          <option value="Vijayawada">Vijayawada & Amaravati Corridor</option>
                          <option value="Warangal">Warangal & Hanumakonda</option>
                        </select>
                      </div>

                      {/* Partner Perks Banner */}
                      <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-50 to-blue-50/40 border border-amber-200/70 text-[10px] text-slate-700 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 font-bold">
                          <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0" />
                          <span>Instant Daily UPI Payouts • 0% Commission • Free Accidental Cover</span>
                        </div>
                        <span className="text-amber-800 font-extrabold uppercase text-[9px] bg-amber-200/60 px-1.5 py-0.2 rounded">
                          Bonus ₹15k
                        </span>
                      </div>

                      {/* Partner Submit Button */}
                      <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                        <span className="text-[10px] text-slate-500 font-medium">
                          Bring physical copies of RC & DL to the desk.
                        </span>

                        <button
                          type="submit"
                          className="w-full sm:w-auto px-6 py-2 rounded-xl bg-gradient-to-r from-[#F5B800] via-[#F5B800] to-[#E5A800] hover:brightness-105 text-slate-950 font-black text-xs shadow-md hover:shadow-lg hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                        >
                          <Award size={13} className="stroke-[2.5]" />
                          <span>Register as Captain Partner</span>
                        </button>
                      </div>

                    </form>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT 3: QUICK RESOLUTIONS & LOST ITEM FAQ */}
            {/* {activeTab === 'solutions' && (
              <div className="space-y-2.5 animate-in fade-in duration-200">
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-2.5 text-amber-900 text-xs">
                  <Sparkles size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Instant Self-Help Solutions:</strong> Choose a scenario below for immediate action without waiting.
                  </div>
                </div>

                <div className="space-y-2">
                  {quickResolutions.map((item, idx) => {
                    const isOpen = expandedFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => setExpandedFaq(isOpen ? -1 : idx)}
                          className="w-full p-3 flex items-center justify-between gap-2.5 text-left hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-[9px] font-black uppercase px-1.5 py-0.2 rounded-full border ${item.badgeColor}`}>
                              {item.badge}
                            </span>
                            <span className="text-xs font-black text-slate-900">
                              {item.title}
                            </span>
                          </div>
                          {isOpen ? (
                            <ChevronUp size={14} className="text-slate-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown size={14} className="text-slate-400 flex-shrink-0" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="px-3 pb-3 pt-1 border-t border-slate-100 space-y-2 text-xs text-slate-600 leading-relaxed animate-in fade-in duration-150">
                            <p>{item.description}</p>
                            <a
                              href={item.actionUrl}
                              target={item.actionUrl.startsWith('http') ? '_blank' : undefined}
                              rel={item.actionUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-2xs transition-colors"
                            >
                              <span>{item.actionText}</span>
                              <ArrowRight size={12} />
                            </a>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )} */}

            {/* {activeTab === 'hubs' && (
              <div className="space-y-2.5 animate-in fade-in duration-200">
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200/80 flex items-start gap-2.5 text-blue-900 text-xs">
                  <Navigation size={16} className="text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">In-Person Facilitation:</strong> Walk into our Hyderabad transit hubs for device support or onboarding.
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {hubLocations.map((hub, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-2 hover:border-blue-300 transition-colors"
                    >
                      <div className="space-y-1">
                        <span className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded-full bg-slate-100 text-slate-700 inline-block">
                          {hub.city}
                        </span>
                        <h5 className="text-[11px] font-black text-slate-900 leading-tight">
                          {hub.title}
                        </h5>
                        <p className="text-[10px] text-slate-500 leading-snug">
                          {hub.address}
                        </p>
                      </div>

                      <div className="pt-1.5 border-t border-slate-100 space-y-0.5 text-[10px]">
                        <div className="text-slate-600 font-medium flex items-center gap-1">
                          <Clock size={10} className="text-[#2563EB]" />
                          <span>{hub.timings}</span>
                        </div>
                        <a
                          href={`tel:${hub.phone.replace(/[^0-9]/g, '')}`}
                          className="text-[#2563EB] font-bold font-mono hover:underline block"
                        >
                          {hub.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )} */}

          </div>



        </div>

      </div>
    </section>
  );
}
