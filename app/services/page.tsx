'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useModal } from '../context/ModalContext';

export default function ServicesPage() {
  const { openModal } = useModal();
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[60dvh] flex flex-col items-center justify-center text-center px-4 pt-24 md:pt-32 pb-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/service-hero-bg.webp"
            alt="Services Background"
            fill
            priority
            className="object-cover"
          />
          <div className="bg-gradient-to-b from-[#0f1e3c]/30 via-[#0f1e3c]/60 to-[#0f1e3c] absolute top-0 right-0 bottom-0 left-0 z-10"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div 
            className="absolute inset-0 opacity-10 mix-blend-overlay z-10"
            style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
          ></div>
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}
          ></div>
        </div>

        <div className="flex flex-col z-10 w-full max-w-4xl mx-auto relative items-center justify-center">
          <span className="mb-4 inline-flex items-center justify-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md animate-fade-in-up">
            <span className="text-[10px] font-bold text-blue-300 tracking-widest uppercase font-mono-sys">[COMMERCIAL.CAPABILITIES]</span>
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter font-montserrat mb-6 drop-shadow-2xl animate-decrypt delay-100 text-balance">
            Our Security Services
          </h1>

          <p className="font-inter font-light text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 animate-fade-in-up delay-200 antialiased text-balance">
            Comprehensive protection solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-900/50 rounded-2xl border border-white/10 backdrop-blur-md animate-fade-in-up delay-300 shadow-2xl">
            <a href="#manned-guarding" className="group relative px-6 py-3 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/5 focus:bg-white/5 focus:ring-1 ring-blue-500/50">
              <span className="relative z-10 text-[11px] font-bold font-mono-sys uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors">
                Guarding &amp; Patrols
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>

            <div className="w-px h-6 bg-white/10 hidden sm:block"></div>

            <a href="#electronic-security" className="group relative px-6 py-3 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/5 focus:bg-white/5 focus:ring-1 ring-blue-500/50">
              <span className="relative z-10 text-[11px] font-bold font-mono-sys uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors">
                Integrated Tech
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>

            <div className="w-px h-6 bg-white/10 hidden sm:block"></div>

            <a href="#specialised-services" className="group relative px-6 py-3 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/5 focus:bg-white/5 focus:ring-1 ring-blue-500/50">
              <span className="relative z-10 text-[11px] font-bold font-mono-sys uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors">
                Strategic Risk
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Physical Asset Protection Section */}
      <section id="manned-guarding" className="w-full max-w-[1200px] mx-auto px-4 py-16 md:py-24 relative z-10 border-t border-white/5 scroll-mt-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="md:text-3xl flex items-center gap-3 text-2xl font-semibold text-white tracking-tight font-montserrat text-balance">
              <span className="text-blue-500 font-mono-sys text-sm font-bold mr-2">// 01.</span>
              Physical Asset Protection
            </h2>
          </div>
          <p className="text-slate-400 text-base font-inter max-w-md text-left md:text-right hidden md:block">
            Career professionals trained for corporate environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="premium-hover-card p-8 group">
            <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center text-blue-400 mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <polyline points="16 11 18 13 22 9"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3 relative z-10">Corporate Security Officers</h3>
            <p className="text-slate-300 text-base leading-relaxed font-inter mb-6 min-h-[40px] relative z-10">
              Corporate-grade officers who integrate seamlessly with your operations. Trained in WHS protocols, asset protection, and premium customer service.
            </p>
            <div className="pt-6 border-t border-white/5 relative z-10">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono-sys">[DEPLOYMENT.ZONE]</span>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-xs font-medium border border-white/5 font-mono-sys">Retail &amp; Showrooms</span>
                <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-xs font-medium border border-white/5 font-mono-sys">Office Towers</span>
              </div>
              <button onClick={() => openModal('general')} className="text-blue-400 text-xs font-bold font-mono-sys hover:text-blue-300 uppercase tracking-widest">REQUEST OFFICER QUOTE →</button>
            </div>
          </div>

          <div id="mobile-patrols" className="premium-hover-card p-8 group border-blue-500/20">
            <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center text-blue-400 mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"></path>
                <path d="M7 14h.01"></path>
                <path d="M17 14h.01"></path>
                <rect width="18" height="8" x="3" y="10" rx="2"></rect>
                <path d="M5 18v2"></path>
                <path d="M19 18v2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3 relative z-10">Intelligent Mobile Patrols</h3>
            <p className="text-slate-300 text-base leading-relaxed font-inter mb-6 min-h-[40px] relative z-10">
              The cost-effective alternative to a full-time guard. Our GPS-tracked vehicles provide randomized, highly visible deterrence that disrupts criminal planning patterns.
            </p>
            <div className="pt-6 border-t border-white/5 relative z-10">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono-sys">[OPTIMIZED.FOR]</span>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-xs font-medium border border-white/5 font-mono-sys">Logistics Hubs</span>
                <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-xs font-medium border border-white/5 font-mono-sys">Industrial Estates</span>
              </div>
              <button onClick={() => openModal('general')} className="text-blue-400 text-xs font-bold font-mono-sys hover:text-blue-300 uppercase tracking-widest">GET PATROL QUOTE →</button>
            </div>
          </div>

          <div className="premium-hover-card p-8 group">
            <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center text-blue-400 mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3 relative z-10">Premium Corporate Concierge</h3>
            <p className="text-slate-300 text-base leading-relaxed font-inter mb-6 min-h-[40px] relative z-10">
              Security ambassadors who manage your front desk. They handle access control, visitor management, and contractor inductions while maintaining a five-star image.
            </p>
            <div className="pt-6 border-t border-white/5 relative z-10">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono-sys">[DEPLOYMENT.ZONE]</span>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-xs font-medium border border-white/5 font-mono-sys">Residential Strata</span>
                <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-xs font-medium border border-white/5 font-mono-sys">A-Grade Commercial</span>
              </div>
              <button onClick={() => openModal('general')} className="text-blue-400 text-xs font-bold font-mono-sys hover:text-blue-300 uppercase tracking-widest">REQUEST PROPOSAL →</button>
            </div>
          </div>

          <div className="premium-hover-card p-8 group">
            <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center text-blue-400 mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"></path>
                <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path>
                <path d="M4 15v-3a6 6 0 0 1 6-6h0"></path>
                <path d="M14 6h0a6 6 0 0 1 6 6v3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3 relative z-10">Construction Site Security</h3>
            <p className="text-slate-300 text-base leading-relaxed font-inter mb-6 min-h-[40px] relative z-10">
              Specialist officers certified to work on active building sites (White Card). We manage gatehouse logs, check deliveries, and ensure strict adherence to safety zones.
            </p>
            <div className="pt-6 border-t border-white/5 relative z-10">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono-sys">[OPTIMIZED.FOR]</span>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-xs font-medium border border-white/5 font-mono-sys">Tier 1 Projects</span>
                <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-xs font-medium border border-white/5 font-mono-sys">Infrastructure</span>
              </div>
              <button onClick={() => openModal('general')} className="text-blue-400 text-xs font-bold font-mono-sys hover:text-blue-300 uppercase tracking-widest">GET SITE QUOTE →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Technology Solutions Section */}
      <section id="electronic-security" className="w-full max-w-[1200px] mx-auto px-4 py-16 md:py-24 relative z-10 border-t border-white/5 scroll-mt-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-montserrat font-semibold text-white tracking-tight flex items-center gap-3 text-balance">
              <span className="text-teal-500 font-mono-sys text-sm font-bold mr-2">// 02.</span>
              Integrated Technology Solutions
            </h2>
          </div>
          <p className="text-slate-400 text-base font-inter max-w-md text-left md:text-right hidden md:block">
            Converged security systems that communicate seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="premium-hover-card p-8 group">
            <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center text-teal-400 mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                <path d="M4 2C2.8 3.7 2 5.7 2 8"></path>
                <path d="M22 8c0-2.3-.8-4.3-2-6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3 relative z-10">A1 Graded Alarm Monitoring</h3>
            <p className="text-slate-300 text-base leading-relaxed font-inter mb-6 min-h-[40px] relative z-10">
              Back-to-Base monitoring you can rely on. When your alarm triggers, our 24/7 control room responds immediately, dispatching patrols or police as required.
            </p>
            <div className="pt-6 border-t border-white/5 relative z-10">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono-sys">[CONNECTION.TYPE]</span>
              <p className="text-slate-300 text-xs font-medium font-mono-sys mb-4">Wireless 4G or Fixed Line (NBN Ready)</p>
              <button onClick={() => openModal('general')} className="text-teal-400 text-xs font-bold font-mono-sys hover:text-teal-300 uppercase tracking-widest">GET MONITORING QUOTE →</button>
            </div>
          </div>

          <div className="premium-hover-card p-8 group">
            <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center text-teal-400 mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                <path d="M12 8a4 4 0 1 0 0 8 4 4 0 1 0 0-8z"></path>
                <path d="M14.5 9.5 17 7"></path>
                <path d="M9.5 9.5 7 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3 relative z-10">Smart Access Management</h3>
            <p className="text-slate-300 text-base leading-relaxed font-inter mb-6 min-h-[40px] relative z-10">
              Replace keys with smart cards or mobile credentials (Bluetooth). We install cloud-based systems that let you grant or revoke access instantly from anywhere.
            </p>
            <div className="pt-6 border-t border-white/5 relative z-10">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono-sys">[SYS.FEATURES]</span>
              <p className="text-slate-300 text-xs font-medium font-mono-sys mb-4">Mobile entry, Time-stamped logs, Remote management</p>
              <button onClick={() => openModal('general')} className="text-teal-400 text-xs font-bold font-mono-sys hover:text-teal-300 uppercase tracking-widest">REQUEST TECH SPECS →</button>
            </div>
          </div>

          <div className="premium-hover-card p-8 group">
            <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center text-teal-400 mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708 0l-1.68-4.032a1 1 0 0 1 .9-1.484Z"></path>
                <path d="M20.5 12h-3.5"></path>
                <path d="M5.75 12h-3.63a1 1 0 0 0-.89 1.44l2.03 4.06a1 1 0 0 0 1.7 0l1.68-4.03a1 1 0 0 0-.9-1.48Z"></path>
                <path d="M3.5 12h3.5"></path>
                <path d="M9 16.5V23"></path>
                <path d="M15 16.5V23"></path>
                <path d="M7 2h10"></path>
                <path d="M12 2v14.5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3 relative z-10">High-Definition CCTV</h3>
            <p className="text-slate-300 text-base leading-relaxed font-inter mb-6 min-h-[40px] relative z-10">
              Crystal clear evidence and powerful deterrence. We offer both permanent installations and solar-powered temporary towers for construction sites.
            </p>
            <div className="pt-6 border-t border-white/5 relative z-10">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono-sys">[COMPLIANCE]</span>
              <p className="text-slate-300 text-xs font-medium font-mono-sys mb-4">NDAA-compliant hardware available</p>
              <button onClick={() => openModal('general')} className="text-teal-400 text-xs font-bold font-mono-sys hover:text-teal-300 uppercase tracking-widest">GET CCTV QUOTE →</button>
            </div>
          </div>

          <div className="premium-hover-card p-8 group">
            <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center text-teal-400 mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                <path d="M7 12h10"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3 relative z-10">Industrial Perimeter Detection</h3>
            <p className="text-slate-300 text-base leading-relaxed font-inter mb-6 min-h-[40px] relative z-10">
              Laser beams and motion sensors designed for large industrial boundaries. These trigger an instant alert if a fence line is breached.
            </p>
            <div className="pt-6 border-t border-white/5 relative z-10">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono-sys">[OPTIMIZED.FOR]</span>
              <p className="text-slate-300 text-xs font-medium font-mono-sys mb-4">Laydown Yards, Car Dealerships, Logistics</p>
              <button onClick={() => openModal('general')} className="text-teal-400 text-xs font-bold font-mono-sys hover:text-teal-300 uppercase tracking-widest">REQUEST SITE AUDIT →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Risk Solutions Section */}
      <section id="specialised-services" className="w-full max-w-[1200px] mx-auto px-4 py-16 md:py-24 relative z-10 border-t border-white/5 scroll-mt-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-montserrat font-semibold text-white tracking-tight flex items-center gap-3 text-balance">
              <span className="text-red-500 font-mono-sys text-sm font-bold mr-2">// 03.</span>
              Strategic Risk Solutions
            </h2>
          </div>
          <p className="text-slate-400 text-base font-inter max-w-md text-left md:text-right hidden md:block">
            High-level consulting and specific threat mitigation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="premium-hover-card p-8 group">
            <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center text-red-400 mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <path d="M3 6h18"></path>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white font-montserrat mb-3 relative z-10">Retail Profit Protection</h3>
            <p className="text-slate-300 text-base leading-relaxed font-inter mb-4 relative z-10">
              Strategies to reduce shrinkage and protect margins. We provide undercover store detectives to apprehend offenders and uniformed guards for visible deterrence.
            </p>
            <button onClick={() => openModal('general')} className="text-red-400 text-xs font-bold font-mono-sys hover:text-red-300 uppercase tracking-widest mt-auto inline-block">CONSULT AN EXPERT →</button>
          </div>

          <div className="premium-hover-card p-8 group">
            <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center text-red-400 mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <path d="m9 14 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white font-montserrat mb-3 relative z-10">Risk Governance &amp; Audits</h3>
            <p className="text-slate-300 text-base leading-relaxed font-inter mb-4 relative z-10">
              Comprehensive assessments for insurers and boards. We review your site for vulnerabilities and provide a detailed report for ESG compliance.
            </p>
            <button onClick={() => openModal('general')} className="text-red-400 text-xs font-bold font-mono-sys hover:text-red-300 uppercase tracking-widest mt-auto inline-block">BOOK RISK AUDIT →</button>
          </div>

          <div className="premium-hover-card p-8 group">
            <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center text-red-400 mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white font-montserrat mb-3 relative z-10">Secure Open &amp; Close</h3>
            <p className="text-slate-300 text-base leading-relaxed font-inter mb-4 relative z-10">
              Protect your staff from early morning or late night risks. We hold your keys and ensure your premises are securely opened and alarmed.
            </p>
            <button onClick={() => openModal('general')} className="text-red-400 text-xs font-bold font-mono-sys hover:text-red-300 uppercase tracking-widest mt-auto inline-block">GET SERVICE QUOTE →</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full relative px-4 py-24 z-10">
        <div className="max-w-4xl mx-auto rounded-[2rem] bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/20 p-8 md:p-16 text-center relative overflow-hidden premium-hover-card">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>

          <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-white mb-6 relative z-10">Customized Service Packages</h2>
          <p className="text-slate-300 font-inter text-lg mb-10 max-w-xl mx-auto relative z-10 leading-relaxed">
            You don&apos;t need to fit into a box. We combine services—like adding Mobile Patrols to your Alarm Monitoring—to create a unified protection plan.
          </p>
          <div className="relative z-10">
            <button onClick={() => openModal('general')} className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-mono font-bold text-white transition-all duration-300 bg-red-600 rounded-lg hover:bg-red-700 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.6)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900">
              <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-xs tracking-widest uppercase flex items-center gap-3">
                REQUEST A PROPOSAL
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
