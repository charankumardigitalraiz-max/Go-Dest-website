import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import {
  FileText,
  Lock,
  Receipt,
  ShieldCheck,
  Scale,
  ArrowLeft,
  PhoneCall,
  Mail,
  MapPin,
  CheckCircle2,
  ExternalLink,
  AlertTriangle,
  HeartHandshake,
  Sparkles,
  ChevronRight,
  Printer,
  Share2,
  Car,
  Bike,
  Zap,
  Info
} from 'lucide-react';
import { AutoRickshawIcon } from './VehicleIcon';
import Footer from './Footer';

export default function LegalScreen({
  initialTab = 'terms',
  onNavigateHome,
  onBookClick,
  onSelectTab
}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const tabs = [
    {
      id: 'terms',
      title: 'Terms of Service',
      shortTitle: 'Terms of Service',
      tag: 'Rider Agreement',
      icon: FileText,
      description: 'Platform nature, rider eligibility, seating capacities & lost property.'
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      shortTitle: 'Privacy Policy',
      tag: 'DPDP Act 2023',
      icon: Lock,
      description: 'Location telemetry, GPS cessation, number masking & RBI tokenization.'
    },
    {
      id: 'fares',
      title: 'Fares & Cancellation Policy',
      shortTitle: 'Fares & Cancellation',
      tag: 'Zero Surge Guarantee',
      icon: Receipt,
      description: '1.0x fixed fare breakdown, free cancellation window & refund SLAs.'
    },
    {
      id: 'safety',
      title: 'Safety Charter & Code of Conduct',
      shortTitle: 'Safety Charter',
      tag: '100% Police Verified',
      icon: ShieldCheck,
      description: 'Zero tolerance, Aadhaar KYC, Police NOC & one-touch SOS (112/1091).'
    },
    {
      id: 'grievance',
      title: 'Grievance Redressal Mechanism',
      shortTitle: 'Grievance Officer',
      tag: 'Statutory Govt SLA',
      icon: Scale,
      description: 'Designated Grievance Officer details, corporate HQ & 3-stage escalation.'
    }
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (onSelectTab) {
      onSelectTab(tabId);
    } else {
      window.history.pushState(null, '', `#legal/${tabId}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const currentTabObj = tabs.find((t) => t.id === activeTab) || tabs[0];
  const currentIndex = tabs.findIndex((t) => t.id === activeTab);
  const prevTab = currentIndex > 0 ? tabs[currentIndex - 1] : null;
  const nextTab = currentIndex < tabs.length - 1 ? tabs[currentIndex + 1] : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-['Plus_Jakarta_Sans'] selection:bg-amber-200 selection:text-slate-900">

      {/* Top Midnight Trust Bar */}
      <div className="bg-[#0F172A] text-slate-300 text-[11px] sm:text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3 font-medium">
            <span className="inline-flex items-center gap-1.5 font-bold text-[#F5B800]">
              <Zap size={12} className="fill-[#F5B800]" />
              <span>Zero-Surge Guaranteed</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-slate-300">
              Compliant with Motor Vehicle Aggregator Guidelines 2020 & DPDP Act 2023
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:04060007000"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-medium transition-colors"
            >
              <PhoneCall size={12} className="text-[#F5B800]" />
              <span className="hidden sm:inline text-slate-400">24/7 National Desk:</span>
              <strong className="text-white font-bold tracking-wide">040-6000-7000</strong>
            </a>
          </div>
        </div>
      </div>

      {/* Screen Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">

            {/* Left: Logo & Breadcrumbs */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => onNavigateHome()}
                className="flex-shrink-0 transition-opacity hover:opacity-95 cursor-pointer"
                title="Return to Home"
              >
                <Logo size="medium" />
              </button>

              <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 font-semibold border-l border-slate-200 pl-4">
                <button
                  type="button"
                  onClick={() => onNavigateHome()}
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Home
                </button>
                <span>/</span>
                <span className="text-slate-700">Legal & Policies</span>
                <span>/</span>
                <span className="text-amber-800 font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  {currentTabObj.shortTitle}
                </span>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => onNavigateHome()}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold shadow-2xs transition-all cursor-pointer"
              >
                <ArrowLeft size={15} />
                <span>Back to Rides</span>
              </button>

              <button
                type="button"
                onClick={onBookClick}
                className="flex items-center gap-1.5 sm:gap-2 bg-[#F5B800] hover:bg-[#E5A800] text-slate-950 font-bold px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <Sparkles size={15} />
                <span>Book Ride</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Hero Banner for Legal Screen */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 text-white py-10 sm:py-14 border-b border-slate-800 relative overflow-hidden">
        {/* Ambient golden road light lines */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-300/30 text-amber-300 text-xs font-bold tracking-wide uppercase">
              <Scale size={14} />
              <span>GODest Legal & Regulatory Portal</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight text-white">
              Terms, Policies & Consumer Charter
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Official regulatory guidelines, fare transparency disclosures, data protection frameworks, and grievance redressal protocols governing the nationwide GODest platform.
            </p>

            {/* Compliance Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] font-semibold text-slate-300">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 border border-white/15">
                <CheckCircle2 size={12} className="text-emerald-400" />
                <span>DPDP Act 2023 Compliant</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 border border-white/15">
                <CheckCircle2 size={12} className="text-emerald-400" />
                <span>Motor Vehicle Aggregator Guidelines 2020</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 border border-white/15">
                <CheckCircle2 size={12} className="text-emerald-400" />
                <span>Consumer Protection (E-Commerce) Rules 2020</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Sidebar Directory + Document Reader */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Left Column: Policy Directory Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 space-y-5 lg:sticky lg:top-26">

            <div className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-xs space-y-1.5">
              <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 font-['Outfit']">
                Policy Directory
              </div>

              {tabs.map((tab) => {
                const IconComp = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabChange(tab.id)}
                    className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all text-left cursor-pointer group ${isActive
                        ? 'bg-slate-900 text-white font-bold shadow-xs'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                      }`}
                  >
                    <div
                      className={`p-2 rounded-lg flex-shrink-0 transition-colors ${isActive
                          ? 'bg-[#F5B800] text-slate-950 font-bold'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                        }`}
                    >
                      <IconComp size={16} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs sm:text-sm font-bold truncate">
                          {tab.shortTitle}
                        </span>
                        <ChevronRight
                          size={14}
                          className={`transition-transform flex-shrink-0 ${isActive
                              ? 'text-[#F5B800] translate-x-0.5'
                              : 'text-slate-400 group-hover:translate-x-0.5'
                            }`}
                        />
                      </div>
                      <span
                        className={`text-[11px] block mt-0.5 line-clamp-1 ${isActive ? 'text-slate-300' : 'text-slate-500'
                          }`}
                      >
                        {tab.tag}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Assistance & Emergency Escalation Box */}
            <div className="bg-gradient-to-b from-amber-50/80 to-white rounded-2xl border border-amber-200 p-4 space-y-3.5 shadow-2xs">
              <div className="flex items-center gap-2 text-amber-950 font-bold text-xs uppercase tracking-wider font-['Outfit']">
                <Info size={15} className="text-[#F5B800]" />
                <span>Official Compliance Support</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                For official legal notices, police enquiries, or consumer dispute resolution, contact our central compliance team:
              </p>

              <div className="space-y-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <PhoneCall size={13} className="text-blue-600 flex-shrink-0" />
                  <a href="tel:04060007000" className="hover:text-blue-600 text-slate-900 font-bold">
                    040-6000-7000 (Desk)
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-blue-600 flex-shrink-0" />
                  <a href="mailto:grievance@godest.in" className="hover:text-blue-600">
                    grievance@godest.in
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={13} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Cyber Towers Road, Hitec City, Hyderabad 500081</span>
                </div>
              </div>

              <div className="pt-2 border-t border-amber-200/60 flex items-center gap-2 text-[11px] font-bold">
                <a
                  href="tel:112"
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-red-50 border border-red-200 text-red-700 hover:bg-red-100 transition-colors"
                >
                  <AlertTriangle size={12} className="text-red-600" />
                  <span>Police 112</span>
                </a>
                <a
                  href="tel:1091"
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-pink-50 border border-pink-200 text-pink-700 hover:bg-pink-100 transition-colors"
                >
                  <HeartHandshake size={12} className="text-pink-600" />
                  <span>SHE 1091</span>
                </a>
              </div>
            </div>

          </aside>

          {/* Right Column: Full Document Reading View (8 Cols) */}
          <article className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">

            {/* Document Header */}
            <div className="pb-6 border-b border-slate-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                    {currentTabObj.tag}
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs text-slate-500 font-semibold">
                    Effective: January 2026 Nationwide
                  </span>
                </div>

                {/* Print & Share Tools */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleShare}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-all cursor-pointer"
                    title="Copy Policy Link"
                  >
                    <Share2 size={13} />
                    <span>{copiedLink ? 'Copied Link!' : 'Share'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-all cursor-pointer"
                    title="Print Policy"
                  >
                    <Printer size={13} />
                    <span>Print</span>
                  </button>
                </div>
              </div>

              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
                {currentTabObj.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentTabObj.description}
              </p>
            </div>

            {/* TAB CONTENT RENDER */}
            <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-8 font-normal">

              {/* TAB 1: TERMS OF SERVICE */}
              {activeTab === 'terms' && (
                <div className="space-y-7 animate-in fade-in duration-200">

                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 space-y-1.5">
                    <strong className="text-xs font-bold uppercase tracking-wider block text-amber-900">
                      1. Legal Entity & Preamble
                    </strong>
                    <p className="text-xs leading-relaxed">
                      These Terms of Service constitute a legally binding agreement between you ("Rider", "User") and <strong>GODest Technologies Private Limited</strong> (CIN: U63090TG2026PTC184201), a technology intermediary operating ride-matching platforms in compliance with the Ministry of Road Transport and Highways (MoRTH) Motor Vehicle Aggregator Guidelines 2020.
                    </p>
                  </div>

                  <section className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                      2. Nature of Platform & Intermediary Facilitation
                    </h3>
                    <p className="text-slate-600">
                      GODest operates strictly as a digital technology aggregator. The company does not operate as a public passenger carrier, nor does it own or lease the commercial vehicles listed on the platform. Transportation services are rendered by independent, certified third-party commercial transport providers ("Captains") who hold valid commercial driving licenses, vehicle permits, and Police Clearances under applicable Indian laws.
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                      3. Rider Eligibility & Account Security
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 pl-1">
                      <li>You must be at least 18 years of age to register an independent account and book rides. Minors traveling in cabs must be accompanied by an adult guardian.</li>
                      <li>You are responsible for maintaining the confidentiality of your mobile OTP and login credentials. GODest will never request your account OTP via phone calls or SMS.</li>
                      <li>Accounts are strictly non-transferable. Booking rides on behalf of third parties requires accurate entry of the destination and pickup contact details.</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                      4. Vehicle Seating Capacities & Traffic Law Compliance
                    </h3>
                    <p className="text-slate-600">
                      To adhere strictly to the Motor Vehicles Act 1988 and State Transport Department safety rules, the following passenger capacities must be respected:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                        <div className="flex items-center gap-2 font-bold text-xs text-slate-900">
                          <Bike size={16} className="text-amber-600" />
                          <span>Solo Bike Taxi (Moto)</span>
                        </div>
                        <p className="text-xs text-slate-600">
                          Strictly <strong>1 passenger</strong> only. The pillion rider must wear the sanitized ISI-certified safety helmet provided by the Captain at all times.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                        <div className="flex items-center gap-2 font-bold text-xs text-slate-900">
                          <AutoRickshawIcon size={16} className="text-amber-600" />
                          <span>Metered Auto Rickshaw</span>
                        </div>
                        <p className="text-xs text-slate-600">
                          Maximum <strong>3 adult passengers</strong>. No passenger may sit beside the auto driver in compliance with RTA safety regulations.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                        <div className="flex items-center gap-2 font-bold text-xs text-slate-900">
                          <Car size={16} className="text-amber-600" />
                          <span>Prime AC Cabs (Sedan / SUV)</span>
                        </div>
                        <p className="text-xs text-slate-600">
                          Sedans seat up to <strong>4 passengers</strong>; Prime SUV / XL seats up to <strong>6 passengers</strong>. All occupants must wear seatbelts.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                      5. Lost Property Custody & Retrieval Protocol
                    </h3>
                    <p className="text-slate-600">
                      Captains are instructed to inspect vehicles at the conclusion of each ride; however, riders retain sole legal responsibility for their personal belongings. In the event an item is forgotten inside a vehicle:
                    </p>
                    <ol className="list-decimal list-inside space-y-1.5 text-slate-600 pl-1">
                      <li>Report the missing property within <strong>48 hours</strong> via the in-app support chat or by calling <a href="tel:04060007000" className="text-blue-600 font-bold hover:underline">040-6000-7000</a> with your Trip ID.</li>
                      <li>Our Command Desk will contact the Captain immediately to confirm item custody.</li>
                      <li>Recovered items are held in safe custody for up to 7 days at our registered regional hub (Cyber Towers Road, Hitec City, Hyderabad).</li>
                    </ol>
                  </section>

                </div>
              )}

              {/* TAB 2: PRIVACY POLICY */}
              {activeTab === 'privacy' && (
                <div className="space-y-7 animate-in fade-in duration-200">

                  <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-blue-950 space-y-1.5">
                    <strong className="text-xs font-bold uppercase tracking-wider block text-blue-900">
                      Compliant with the Digital Personal Data Protection (DPDP) Act 2023
                    </strong>
                    <p className="text-xs leading-relaxed">
                      GODest adheres to the highest data protection standards. We do not sell or monetize personal information. Data is processed exclusively to provide safe, reliable mobility services and emergency response.
                    </p>
                  </div>

                  <section className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                      1. GPS Telemetry & Active Ride Tracking
                    </h3>
                    <p className="text-slate-600">
                      We collect precise GPS coordinates only when the GODest application is open or during an active trip. Telemetry is utilized exclusively for Captain dispatch, route calculation, safe corridor monitoring, and SOS emergency coordinates.
                    </p>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium">
                      🔒 <strong>Automated Telemetry Cessation:</strong> Location tracking ceases automatically as soon as the Captain taps "End Ride" and the trip invoice is generated. Background telemetry is never tracked when the app is idle.
                    </div>
                  </section>

                  <section className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                      2. Private Number Masking (Dual-Blind Calling)
                    </h3>
                    <p className="text-slate-600">
                      Just like industry benchmarks set by Uber and Ola, GODest protects rider and driver personal phone numbers using cloud VOIP number masking. When you call your Captain, or when your Captain calls you to confirm pickup coordinates, calls are routed through a secure virtual forwarding proxy. Neither party can view the other's real mobile phone number.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                      3. Payment Data Security & RBI Tokenization
                    </h3>
                    <p className="text-slate-600">
                      GODest complies with Reserve Bank of India (RBI) tokenization guidelines. All credit card, debit card, UPI, and net banking transactions are processed through PCI-DSS Level 1 certified payment gateways. GODest does not store raw credit card numbers, CVVs, or UPI MPINs on company servers.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                      4. Your Data Rights & Deletion Requests
                    </h3>
                    <p className="text-slate-600">
                      Under the DPDP Act 2023, you have the right to access your personal data history, request data correction, or demand complete account and record deletion. You can submit a deletion request anytime by emailing our Data Protection Officer at <a href="mailto:privacy@godest.in" className="text-blue-600 font-bold hover:underline">privacy@godest.in</a>.
                    </p>
                  </section>

                </div>
              )}

              {/* TAB 3: FARES & CANCELLATION */}
              {activeTab === 'fares' && (
                <div className="space-y-7 animate-in fade-in duration-200">

                  <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 space-y-1.5">
                    <strong className="text-xs font-bold uppercase tracking-wider block text-emerald-900">
                      The 1.0x Fixed Multiplier Guarantee • Zero Surge Always
                    </strong>
                    <p className="text-xs leading-relaxed">
                      GODest is built on honest pricing. We do not inflate fares during morning office peak hours, torrential rains, or festivals. The rate you see is the standard meter or distance rate with zero surge multipliers.
                    </p>
                  </div>

                  <section className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                      1. Standard Transparent Tariff Structure
                    </h3>

                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
                        <thead className="bg-slate-100 text-slate-800 font-bold uppercase text-[11px]">
                          <tr>
                            <th className="py-2.5 px-3">Vehicle Mode</th>
                            <th className="py-2.5 px-3">Base Fare</th>
                            <th className="py-2.5 px-3">Per Km Rate</th>
                            <th className="py-2.5 px-3">Surge Multiplier</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-slate-700">
                          <tr>
                            <td className="py-2.5 px-3 font-bold text-slate-900">Solo Bike Moto</td>
                            <td className="py-2.5 px-3">₹25 (First 2 km)</td>
                            <td className="py-2.5 px-3">₹6 - ₹7 / km</td>
                            <td className="py-2.5 px-3 font-bold text-emerald-700">1.0x (Never Surged)</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-3 font-bold text-slate-900">Metered Auto</td>
                            <td className="py-2.5 px-3">₹35 (First 1.5 km)</td>
                            <td className="py-2.5 px-3">₹14 / km (Official)</td>
                            <td className="py-2.5 px-3 font-bold text-emerald-700">1.0x (Honest Meter)</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-3 font-bold text-slate-900">Prime Sedan / EV</td>
                            <td className="py-2.5 px-3">₹70 (First 4 km)</td>
                            <td className="py-2.5 px-3">₹15 - ₹18 / km</td>
                            <td className="py-2.5 px-3 font-bold text-emerald-700">1.0x (Guaranteed)</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-3 font-bold text-slate-900">Prime SUV / XL</td>
                            <td className="py-2.5 px-3">₹110 (First 4 km)</td>
                            <td className="py-2.5 px-3">₹22 - ₹24 / km</td>
                            <td className="py-2.5 px-3 font-bold text-emerald-700">1.0x (Guaranteed)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="text-[11px] text-slate-500">
                      * Government highway tolls, airport expressway toll gates, and airport entry parking fees are billed strictly against official fastag receipt without platform commission.
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                      2. Cancellation Policy & Zero Penalty Protection
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 pl-1">
                      <li><strong>5-Minute Free Cancellation Window:</strong> You can cancel any booking free of charge within 5 minutes of Captain confirmation.</li>
                      <li><strong>Zero Penalty on Captain Delay:</strong> If the assigned Captain is delayed by more than 5 minutes past their estimated arrival time or drives away from the designated pickup location, cancellation fees are completely waived.</li>
                      <li><strong>Captain Cancellation Accountability:</strong> Captains who repeatedly cancel accepted rides are subject to platform demerits, temporary dispatch suspension, and fine reimbursement to riders.</li>
                    </ul>
                  </section>

                  <section className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                      3. Refund Turnaround SLA
                    </h3>
                    <p className="text-slate-600">
                      Disputed fares, duplicate UPI debits, or cancellation fee refunds requested through in-app support or helpline (<a href="tel:04060007000" className="text-blue-600 font-bold hover:underline">040-6000-7000</a>) are audited and credited to the original payment source within <strong>24 to 48 business hours</strong>.
                    </p>
                  </section>

                </div>
              )}

              {/* TAB 4: SAFETY CHARTER */}
              {activeTab === 'safety' && (
                <div className="space-y-7 animate-in fade-in duration-200">

                  <div className="p-4 sm:p-5 rounded-2xl bg-pink-50/70 border border-pink-200 text-pink-950 space-y-1.5">
                    <strong className="text-xs font-bold uppercase tracking-wider block text-pink-900">
                      Zero-Tolerance Safety Pledge & Women's Protection
                    </strong>
                    <p className="text-xs leading-relaxed">
                      Safety is non-negotiable at GODest. Every ride is monitored through live telemetry corridors, backed by 100% verified Captains, and linked directly with National Emergency Services (112) and Telangana SHE Teams (1091).
                    </p>
                  </div>

                  <section className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                      1. Mandatory Multi-Tier Captain Verification
                    </h3>
                    <p className="text-slate-600">
                      No driver partner can operate on the GODest platform without completing all 4 steps of credential screening:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                        <strong className="text-xs font-bold text-slate-900 block">1. Biometric Aadhaar Verification</strong>
                        <span className="text-xs text-slate-600">Direct biometric Aadhaar KYC verification against UIDAI records to validate identity and permanent residential address.</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                        <strong className="text-xs font-bold text-slate-900 block">2. Police Clearance Certificate (PCC)</strong>
                        <span className="text-xs text-slate-600">Mandatory criminal background screening and Police Clearance NOC from the local police commissionerate.</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                        <strong className="text-xs font-bold text-slate-900 block">3. Sarathi License & Fitness Audit</strong>
                        <span className="text-xs text-slate-600">Real-time commercial driver license validity and vehicle fitness inspection checked with Ministry Parivahan databases.</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                        <strong className="text-xs font-bold text-slate-900 block">4. Gender Sensitivity & Etiquette</strong>
                        <span className="text-xs text-slate-600">In-person training on passenger privacy, women's safety protocols, and zero-tolerance behavior.</span>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                      2. Emergency SOS Integration with Police 112 & SHE Teams 1091
                    </h3>
                    <p className="text-slate-600">
                      Every active trip screen features a dedicated, high-contrast Red SOS button. Triggering SOS activates the following simultaneous safety protocols:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 pl-1">
                      <li><strong>Instant Live Link to Police 112:</strong> Real-time vehicle coordinates, captain identity, and vehicle registration are transmitted to Police Control.</li>
                      <li><strong>SHE Teams Direct Desk (1091):</strong> Immediate priority dispatch for women travelers with dedicated emergency responder coordination.</li>
                      <li><strong>Emergency Contacts Automated Alert:</strong> Sends instant SMS with a live GPS tracking link to up to 5 family contacts configured in your app.</li>
                    </ul>
                  </section>

                  <section className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                      3. Zero-Tolerance Code of Conduct
                    </h3>
                    <p className="text-slate-600">
                      Harassment, offensive remarks, discrimination, consumption of alcohol or narcotics, and rash or negligent driving trigger immediate permanent platform blacklisting and law enforcement handover. Both Captains and Riders are held to this mutual code of respect.
                    </p>
                  </section>

                </div>
              )}

              {/* TAB 5: GRIEVANCE REDRESSAL */}
              {activeTab === 'grievance' && (
                <div className="space-y-7 animate-in fade-in duration-200">

                  <div className="p-4 sm:p-5 rounded-2xl bg-purple-50/70 border border-purple-200 text-purple-950 space-y-1.5">
                    <strong className="text-xs font-bold uppercase tracking-wider block text-purple-900">
                      Mandatory Consumer Protection (E-Commerce) Rules 2020 Compliance
                    </strong>
                    <p className="text-xs leading-relaxed">
                      In compliance with the Consumer Protection Act 2019 and Motor Vehicle Aggregator Guidelines 2020, GODest has established a designated, nodal Grievance Redressal mechanism with time-bound statutory SLAs.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                      <div className="flex items-center gap-2 font-bold text-sm text-slate-900 font-['Outfit']">
                        <Scale size={18} className="text-blue-600" />
                        <span>Designated Grievance Officer</span>
                      </div>
                      <div className="space-y-1 text-xs text-slate-600">
                        <p><strong className="text-slate-900">Officer:</strong> Rajesh Kumar</p>
                        <p><strong className="text-slate-900">Designation:</strong> Head of Consumer Grievances & Legal Affairs</p>
                        <p><strong className="text-slate-900">Email:</strong> <a href="mailto:grievance@godest.in" className="text-blue-600 hover:underline font-bold">grievance@godest.in</a></p>
                        <p><strong className="text-slate-900">Phone:</strong> <a href="tel:04060007000" className="text-blue-600 hover:underline font-bold">040-6000-7000 (Extension 4)</a></p>
                        <p><strong className="text-slate-900">Office Hours:</strong> Monday – Saturday, 9:30 AM to 6:30 PM IST</p>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                      <div className="flex items-center gap-2 font-bold text-sm text-slate-900 font-['Outfit']">
                        <MapPin size={18} className="text-blue-600" />
                        <span>Registered Corporate Headquarters</span>
                      </div>
                      <div className="space-y-1 text-xs text-slate-600">
                        <p><strong className="text-slate-900">Company:</strong> GODest Technologies Private Limited</p>
                        <p><strong className="text-slate-900">Corporate Identity No (CIN):</strong> U63090TG2026PTC184201</p>
                        <p><strong className="text-slate-900">Registered Office:</strong> Cyber Towers Road, Hitec City, Hyderabad 500081, Telangana, India</p>
                        <p><strong className="text-slate-900">Website:</strong> <a href="https://godest.in" className="text-blue-600 hover:underline">www.godest.in</a></p>
                      </div>
                    </div>
                  </div>

                  <section className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                      Grievance Resolution Escalation Timeline (Statutory SLAs)
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
                      <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                          Stage 1 • Within 24 Hours
                        </span>
                        <h4 className="font-bold text-xs text-slate-900 pt-1">Formal Acknowledgment</h4>
                        <p className="text-xs text-slate-500">
                          Automated ticket issuance with Unique Grievance Tracking ID sent via SMS and Email to the complainant.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                          Stage 2 • Within 48 Hours
                        </span>
                        <h4 className="font-bold text-xs text-slate-900 pt-1">Investigation & Audit</h4>
                        <p className="text-xs text-slate-500">
                          Route telemetry audit, Captain calling log inspection, and preliminary resolution update provided.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                          Stage 3 • Within 15 Days
                        </span>
                        <h4 className="font-bold text-xs text-slate-900 pt-1">Final Settlement & Redressal</h4>
                        <p className="text-xs text-slate-500">
                          Complete formal grievance closure, compensation/refund execution, or administrative action report.
                        </p>
                      </div>
                    </div>
                  </section>

                </div>
              )}

            </div>

            {/* Bottom Navigation Strip: Prev / Next Policy & Back to Top */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                {prevTab ? (
                  <button
                    type="button"
                    onClick={() => handleTabChange(prevTab.id)}
                    className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={14} />
                    <span>Previous: {prevTab.shortTitle}</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => onNavigateHome()}
                    className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={14} />
                    <span>Back to Main Website</span>
                  </button>
                )}
              </div>

              <div>
                {nextTab ? (
                  <button
                    type="button"
                    onClick={() => handleTabChange(nextTab.id)}
                    className="flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span>Next: {nextTab.shortTitle}</span>
                    <ChevronRight size={14} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => onNavigateHome()}
                    className="flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span>Return to Home</span>
                    <ChevronRight size={14} />
                  </button>
                )}
              </div>
            </div>

          </article>

        </div>
      </main>

      {/* Proper Global Website Footer */}
      <Footer
        onBookClick={onBookClick}
        onOpenLegal={(tab) => handleTabChange(tab)}
      />

    </div>
  );
}
