import React, { useState, useEffect } from 'react';
import {
  X,
  FileText,
  ShieldCheck,
  Lock,
  Receipt,
  AlertTriangle,
  Scale,
  PhoneCall,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

export default function TermsAndPoliciesModal({ isOpen, onClose, initialTab = 'terms' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const tabs = [
    { id: 'terms', label: 'Terms of Service', icon: FileText, tag: 'Rider Agreement' },
    { id: 'privacy', label: 'Privacy Policy', icon: Lock, tag: 'DPDP 2023 Act' },
    { id: 'fares', label: 'Fares & Cancellation', icon: Receipt, tag: 'Zero Surge' },
    { id: 'safety', label: 'Safety & Code of Conduct', icon: ShieldCheck, tag: '100% Verified' },
    { id: 'grievance', label: 'Grievance Redressal', icon: Scale, tag: 'Official SLA' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-700/80 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F5B800] text-slate-950 flex items-center justify-center font-bold shadow-sm flex-shrink-0">
              <Scale size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-['Outfit'] font-bold text-base sm:text-lg text-white">
                  GODest Legal & Policy Center
                </span>
                <span className="text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-300/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  India Compliant
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Benchmarked against Motor Vehicle Aggregator Guidelines & DPDP Act 2023
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Navigation Strip */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 pt-2 flex items-center gap-1.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex-shrink-0">
          {tabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                  isActive
                    ? 'bg-white text-slate-900 border-[#F5B800] shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60 border-transparent'
                }`}
              >
                <IconComp size={15} className={isActive ? 'text-[#F5B800]' : 'text-slate-400'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
          
          {/* TAB 1: TERMS OF SERVICE */}
          {activeTab === 'terms' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block">
                  Last Updated: January 2026 • Effective Nationwide in India
                </span>
                <p className="text-xs text-amber-950 font-medium leading-relaxed">
                  These Terms of Service govern the access and use of the GODest ride-hailing technology platform operated by GODest Technologies Pvt. Ltd., connecting passengers with licensed third-party commercial transport providers (Captains).
                </p>
              </div>

              <div className="space-y-4">
                <section className="space-y-1.5">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 font-['Outfit']">
                    1. Platform Nature & Contracting Authority
                  </h3>
                  <p className="text-slate-600">
                    GODest acts as a technology intermediary enabling registered riders to request and schedule mobility services with independent commercial driver partners ("Captains") operating Solo Bike Taxis, Metered Auto Rickshaws, and Commercial AC Cabs. GODest does not own transport vehicles; transportation services are performed directly by licensed Captains.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 font-['Outfit']">
                    2. User Eligibility & Account Responsibilities
                  </h3>
                  <p className="text-slate-600">
                    Users must be at least 18 years of age to book independent rides. All account details, mobile numbers, and payment authorization must be accurate. Accounts cannot be transferred or assigned to unauthorized third parties.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 font-['Outfit']">
                    3. Passenger Seating & Vehicle Safety Capacity
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-xs font-bold text-slate-900 block">Solo Bike Taxi (Moto)</strong>
                      <span className="text-[11px] text-slate-600 block mt-0.5">Strictly 1 passenger. Pillion rider must wear the sanitized ISI helmet provided by the Captain.</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-xs font-bold text-slate-900 block">Metered Auto Rickshaw</strong>
                      <span className="text-[11px] text-slate-600 block mt-0.5">Maximum 3 adult passengers in compliance with standard Motor Vehicles Act limits.</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-xs font-bold text-slate-900 block">Prime AC Cabs (Sedan/SUV)</strong>
                      <span className="text-[11px] text-slate-600 block mt-0.5">Sedan up to 4 passengers; XL SUV up to 6 passengers. All front and rear seatbelts must remain fastened.</span>
                    </div>
                  </div>
                </section>

                <section className="space-y-1.5">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 font-['Outfit']">
                    4. Lost Property & Retrieval Protocol
                  </h3>
                  <p className="text-slate-600">
                    While Captains are required to inspect vehicles post-ride, passengers are responsible for their belongings. In the event of forgotten items, passengers can contact the 24/7 National Command Desk via <a href="tel:04060007000" className="text-blue-700 font-bold hover:underline">040-6000-7000</a> or through the in-app support chat within 48 hours for immediate coordination.
                  </p>
                </section>
              </div>
            </div>
          )}

          {/* TAB 2: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-900 block">
                  Compliant with Digital Personal Data Protection (DPDP) Act 2023 & IT Act 2000
                </span>
                <p className="text-xs text-blue-950 font-medium leading-relaxed">
                  Your privacy and location telemetry are strictly guarded with bank-grade encryption, automated number masking, and zero third-party commercial data brokering.
                </p>
              </div>

              <div className="space-y-4">
                <section className="space-y-1.5">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 font-['Outfit']">
                    1. Location Telemetry & GPS Tracking
                  </h3>
                  <p className="text-slate-600">
                    We collect precise GPS coordinates only when the GODest application is in active use to match nearest Captains, track active trips, monitor safe route corridors, and facilitate emergency SOS response. Telemetry stops once a ride concludes.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 font-['Outfit']">
                    2. Private Virtual Calling & Phone Number Masking
                  </h3>
                  <p className="text-slate-600">
                    Captains and riders never view each other's private mobile phone numbers. All pre-ride calls and in-app communications are masked through encrypted virtual cloud proxies to eliminate unwanted post-trip contacts.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 font-['Outfit']">
                    3. Payment Data Security (PCI-DSS & RBI Compliance)
                  </h3>
                  <p className="text-slate-600">
                    GODest complies with Reserve Bank of India tokenization directives. Card numbers, bank passwords, and UPI PINs are handled exclusively by RBI-certified payment gateways and NPCI networks. GODest does not store raw credit card CVVs or net banking credentials.
                  </p>
                </section>

                <section className="space-y-1.5">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 font-['Outfit']">
                    4. Data Retention & User Rights
                  </h3>
                  <p className="text-slate-600">
                    Users reserve the right to review their ride history, download account data, or request account and personal record deletion by writing to <a href="mailto:privacy@godest.in" className="text-blue-700 font-bold hover:underline">privacy@godest.in</a>.
                  </p>
                </section>
              </div>
            </div>
          )}

          {/* TAB 3: FARES & CANCELLATION */}
          {activeTab === 'fares' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 block">
                  The GODest Honest Tariff Guarantee • 1.0x Fixed Multiplier
                </span>
                <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                  Unlike traditional mobility aggregators, GODest guarantees zero surge pricing during peak hours, sudden monsoon showers, and festive periods.
                </p>
              </div>

              <div className="space-y-4">
                <section className="space-y-1.5">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 font-['Outfit']">
                    1. Transparent Fare Calculation
                  </h3>
                  <p className="text-slate-600">
                    Fares are calculated objectively based on vehicle category base tariff and actual distance driven:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
                    <li><strong className="text-slate-900">Solo Bike Taxi:</strong> Base fare from ₹25, then from ₹6 – ₹7 / km.</li>
                    <li><strong className="text-slate-900">Metered Auto:</strong> Base fare from ₹35, then official RTA digital meter tariffs from ₹14 / km.</li>
                    <li><strong className="text-slate-900">AC Cabs (Sedan & SUV):</strong> Base fare from ₹89, then from ₹18 / km.</li>
                    <li><strong className="text-slate-900">Tolls & Parking:</strong> State highway tolls, airport expressway fees, and airport entry parking are billed at official government receipts.</li>
                  </ul>
                </section>

                <section className="space-y-1.5">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 font-['Outfit']">
                    2. Cancellation Policy & Zero Penalty Guarantee
                  </h3>
                  <div className="space-y-2 text-slate-600">
                    <p>
                      <strong>Free Cancellations:</strong> Riders can cancel free of charge within 5 minutes of booking confirmation.
                    </p>
                    <p>
                      <strong>Zero Penalty for Captain Delays:</strong> If the assigned Captain is delayed by more than 5 minutes beyond the estimated arrival time or is moving in the wrong direction, riders can cancel with zero cancellation fees.
                    </p>
                  </div>
                </section>

                <section className="space-y-1.5">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 font-['Outfit']">
                    3. Refund & Dispute Resolution Timeline
                  </h3>
                  <p className="text-slate-600">
                    Any incorrect meter billing, double UPI deduction, or disputed route diversion reported via in-app support will be reviewed and refunded to original source or UPI within <strong>24 to 48 business hours</strong>.
                  </p>
                </section>
              </div>
            </div>
          )}

          {/* TAB 4: SAFETY & CODE OF CONDUCT */}
          {activeTab === 'safety' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="p-4 rounded-2xl bg-pink-50/70 border border-pink-200/80 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-pink-900 block">
                  Zero-Tolerance Security & Women's Safety Pledge
                </span>
                <p className="text-xs text-pink-950 font-medium leading-relaxed">
                  GODest maintains zero tolerance for verbal abuse, harassment, discrimination, or alcohol/substance influence. Captains and riders violating code of conduct face immediate platform debarment and police escalation.
                </p>
              </div>

              <div className="space-y-4">
                <section className="space-y-1.5">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 font-['Outfit']">
                    1. 100% Police & Background Verification Standards
                  </h3>
                  <p className="text-slate-600">
                    Every Captain onboarded to GODest undergoes mandatory multi-point screening:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
                    <li>Biometric Aadhaar identity verification and residential address validation</li>
                    <li>Official Police Clearance Certificate (PCC) / Criminal Background Verification NOC</li>
                    <li>Commercial transport driver licensing and active vehicular fitness certificates</li>
                    <li>Mandatory defensive driving and gender-sensitivity orientation</li>
                  </ul>
                </section>

                <section className="space-y-1.5">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 font-['Outfit']">
                    2. Emergency SOS Integration & Law Enforcement Link
                  </h3>
                  <p className="text-slate-600">
                    Every active trip features a one-touch Emergency SOS button in the mobile app. Triggering SOS immediately:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
                    <li>Transmits live GPS coordinates and vehicle telemetry to our 24/7 National Command Desk</li>
                    <li>Sends automated SMS alerts with live tracking link to designated emergency contacts</li>
                    <li>Establishes direct link to National Emergency Services (<a href="tel:112" className="text-red-600 font-bold hover:underline">Police 112</a>) and Women Safety (<a href="tel:1091" className="text-pink-600 font-bold hover:underline">SHE Teams / 1091</a>)</li>
                  </ul>
                </section>
              </div>
            </div>
          )}

          {/* TAB 5: GRIEVANCE REDRESSAL */}
          {activeTab === 'grievance' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-900 block">
                  Mandatory Consumer Protection (E-Commerce) Rules 2020 Compliance
                </span>
                <p className="text-xs text-purple-950 font-medium leading-relaxed">
                  In accordance with the Consumer Protection Act 2019 and Motor Vehicle Aggregator Guidelines 2020, designated nodal and grievance officers are appointed for swift customer resolution.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm font-['Outfit']">
                    <Scale size={16} className="text-blue-600" />
                    <span>Designated Grievance Officer</span>
                  </div>
                  <div className="space-y-1 text-xs text-slate-600">
                    <p><strong className="text-slate-900">Name:</strong> Rajesh Kumar</p>
                    <p><strong className="text-slate-900">Designation:</strong> Head of Consumer Grievances & Compliance</p>
                    <p><strong className="text-slate-900">Email:</strong> <a href="mailto:grievance@godest.in" className="text-blue-600 hover:underline">grievance@godest.in</a></p>
                    <p><strong className="text-slate-900">Direct Desk:</strong> <a href="tel:04060007000" className="text-blue-600 hover:underline">040-6000-7000 (Ext. 4)</a></p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm font-['Outfit']">
                    <MapPin size={16} className="text-blue-600" />
                    <span>Registered Corporate Address</span>
                  </div>
                  <div className="space-y-1 text-xs text-slate-600">
                    <p><strong className="text-slate-900">Company:</strong> GODest Technologies Private Limited</p>
                    <p><strong className="text-slate-900">Address:</strong> Cyber Towers Road, Hitec City, Hyderabad, Telangana 500081, India</p>
                    <p><strong className="text-slate-900">CIN:</strong> U63090TG2026PTC184201</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800">
                  Grievance Resolution Escalation SLA
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 pt-1">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-slate-900 block">Stage 1: Acknowledgment</span>
                    <span className="text-[11px] text-slate-500">System ticket generated with SMS/Email confirmation within <strong>24 hours</strong>.</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-slate-900 block">Stage 2: Investigation</span>
                    <span className="text-[11px] text-slate-500">Route telemetry and captain log audit completed within <strong>48 hours</strong>.</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-slate-900 block">Stage 3: Final Resolution</span>
                    <span className="text-[11px] text-slate-500">Formal grievance closure and refund within <strong>15 business days</strong> maximum.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
            <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />
            <span>GODest operates under Government of India Aggregator Directives</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="tel:04060007000"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              <PhoneCall size={13} className="text-blue-600" />
              <span>Helpline 040-6000-7000</span>
            </a>

            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
