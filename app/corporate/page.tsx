'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useModal } from '../context/ModalContext';

export default function CorporatePage() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const { openModal } = useModal();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[90dvh] flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/corp-hero-bg.webp"
            alt="Sydney Corporate Skyline"
            fill
            priority
            onLoad={() => setIsLoaded(true)}
            className={`object-cover animate-slow-zoom grayscale mix-blend-overlay transition-opacity duration-1000 ${isLoaded ? 'opacity-50' : 'opacity-0'}`}
          />
          <div className="bg-gradient-to-b from-[#0f1e3c]/30 via-[#0f1e3c]/60 to-[#0f1e3c] absolute top-0 right-0 bottom-0 left-0 z-10"></div>
        </div>

        <div className="flex flex-col z-10 w-full max-w-5xl mx-auto relative items-center justify-center pt-20 md:pt-24">
          <div className="mb-6 flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/20 bg-blue-900/10 backdrop-blur-md animate-fade-in-up shadow-xl">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-bold text-blue-300 tracking-widest uppercase font-mono-sys">[DIVISION: ENTERPRISE] RISK MANAGEMENT</span>
          </div>

          <h1 className="font-montserrat font-semibold text-white text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.1] md:leading-tight mb-6 drop-shadow-2xl animate-decrypt delay-100 text-balance">
            Strategic Asset Protection <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-500">For NSW Enterprise &amp; Government</span>
          </h1>

          <p className="font-inter font-light text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 animate-fade-in-up delay-200 antialiased opacity-90 text-balance">
            Mitigate liability. Ensure ESG compliance. Secure your people in a converging cyber-physical landscape with Sydney&apos;s most accountable partner.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-300">
            <button
              onClick={() => openModal('corporate')}
              className="group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-mono font-bold text-white transition-all duration-300 bg-red-600 rounded-lg hover:bg-red-700 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.6)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 w-full sm:w-auto"
            >
              <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-xs tracking-widest uppercase flex items-center gap-3">
                REQUEST COMPLIANCE AUDIT
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* $20M Liability Shield Section */}
      <section className="w-full relative z-20 -mt-10 mb-24 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
          <span className="text-[12rem] md:text-[20rem] font-black text-white/5 font-montserrat leading-none tracking-tighter">$20M</span>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="premium-hover-card rounded-[2.5rem] bg-[#0f172a]/80 backdrop-blur-xl border border-blue-500/30 p-8 md:p-20 text-center relative overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)]">
            
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-blue-600/10 to-transparent opacity-50 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-widest font-mono-sys mb-8">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                LIABILITY SHIELD: ACTIVE
              </div>

              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 font-montserrat tracking-tight mb-6">
                $20,000,000
              </h2>

              <h3 className="text-2xl md:text-4xl font-semibold text-white font-montserrat tracking-tight mb-6">
                Public Liability Insurance
              </h3>

              <p className="text-slate-300 font-inter text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                We don&apos;t just protect your property. We protect your balance sheet. In an era of increasing litigation and Strata liability, our comprehensive coverage is your ultimate financial firewall.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl border-t border-white/10 pt-10">
                <div className="flex flex-col items-center">
                  <span className="text-white font-bold text-lg font-montserrat">Fully Audited</span>
                  <span className="text-slate-400 text-xs uppercase tracking-wide font-mono-sys mt-1">Independent Verification</span>
                </div>
                <div className="flex flex-col items-center border-l border-r border-white/10 px-4">
                  <span className="text-white font-bold text-lg font-montserrat">NSW Master License</span>
                  <span className="text-slate-400 text-xs uppercase tracking-wide font-mono-sys mt-1">Class 1 &amp; 2 Accredited</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-white font-bold text-lg font-montserrat">ISO 45001</span>
                  <span className="text-slate-400 text-xs uppercase tracking-wide font-mono-sys mt-1">Safety Mgmt Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Matrix Section */}
      <section className="w-full max-w-[1400px] mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-16">
          <span className="block font-mono-sys text-xs text-blue-500 mb-2">// CAPABILITY.MATRIX</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-white tracking-tight mb-4">Core Corporate Services</h2>
          <p className="text-slate-300 font-inter max-w-2xl mx-auto">Enterprise-grade solutions tailored for high-risk and high-compliance environments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cyber-Physical Convergence */}
          <div 
            ref={(el) => { if (el) cardsRef.current[0] = el; }}
            className="premium-hover-card p-8 flex flex-col h-full group"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3">Cyber-Physical Convergence</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-6 font-inter flex-grow">
              Legacy keys are a liability. We bridge IT and Physical security with encrypted, cloud-managed access control that logs every entry and exit in real-time.
            </p>
            <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
              <li className="flex items-start gap-2 text-sm text-slate-300 font-inter font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="text-blue-500 mt-1.5 shrink-0">
                  <rect width="8" height="8" rx="1" fill="currentColor" />
                </svg>
                Mobile Credentials (Bluetooth/NFC)
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300 font-inter font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="text-blue-500 mt-1.5 shrink-0">
                  <rect width="8" height="8" rx="1" fill="currentColor" />
                </svg>
                Data Sovereignty (NDAA-Compliant)
              </li>
            </ul>
            <button
              onClick={() => openModal('corporate')}
              className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-500 uppercase tracking-widest transition-colors hover:text-blue-400"
            >
              <span>REQUEST TECH AUDIT</span>
              <span className="block h-[1px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-8"></span>
            </button>
          </div>

          {/* Frontline Diplomacy */}
          <div 
            ref={(el) => { if (el) cardsRef.current[1] = el; }}
            className="premium-hover-card p-8 flex flex-col h-full group"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                <path d="M10 6h4"></path>
                <path d="M10 10h4"></path>
                <path d="M10 14h4"></path>
                <path d="M10 18h4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3">Frontline Diplomacy (Concierge)</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-6 font-inter flex-grow">
              Security ambassadors who protect your brand as much as your building. Perfect for A-Grade assets requiring by-law enforcement and premium visitor management.
            </p>
            <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
              <li className="flex items-start gap-2 text-sm text-slate-300 font-inter font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="text-blue-500 mt-1.5 shrink-0">
                  <rect width="8" height="8" rx="1" fill="currentColor" />
                </svg>
                Digital Incident Logs
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300 font-inter font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="text-blue-500 mt-1.5 shrink-0">
                  <rect width="8" height="8" rx="1" fill="currentColor" />
                </svg>
                Short-Term Rental Protocols
              </li>
            </ul>
            <button
              onClick={() => openModal('corporate')}
              className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-500 uppercase tracking-widest transition-colors hover:text-blue-400"
            >
              <span>HIRE CONCIERGE</span>
              <span className="block h-[1px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-8"></span>
            </button>
          </div>

          {/* Tier 1 Site Hardening */}
          <div 
            ref={(el) => { if (el) cardsRef.current[2] = el; }}
            className="premium-hover-card p-8 flex flex-col h-full group"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"></path>
                <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path>
                <path d="M4 15v-3a6 6 0 0 1 6-6h0"></path>
                <path d="M14 6h0a6 6 0 0 1 6 6v3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3">Tier 1 Site Hardening</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-6 font-inter flex-grow">
              One safety failure can destroy your timeline. We deploy White Card certified officers trained in strict WHS protocols for major infrastructure projects.
            </p>
            <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
              <li className="flex items-start gap-2 text-sm text-slate-300 font-inter font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="text-blue-500 mt-1.5 shrink-0">
                  <rect width="8" height="8" rx="1" fill="currentColor" />
                </svg>
                Gatehouse &amp; Delivery Logistics
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300 font-inter font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="text-blue-500 mt-1.5 shrink-0">
                  <rect width="8" height="8" rx="1" fill="currentColor" />
                </svg>
                Copper Theft Prevention
              </li>
            </ul>
            <button
              onClick={() => openModal('corporate')}
              className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-500 uppercase tracking-widest transition-colors hover:text-blue-400"
            >
              <span>SECURE YOUR SITE</span>
              <span className="block h-[1px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-8"></span>
            </button>
          </div>

          {/* Enterprise Loss Prevention */}
          <div 
            ref={(el) => { if (el) cardsRef.current[3] = el; }}
            className="premium-hover-card p-8 flex flex-col h-full group"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <path d="M3 6h18"></path>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3">Enterprise Loss Prevention</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-6 font-inter flex-grow">
              Aggressive shoplifting endangers your team. We prioritize staff safety while dismantling organized retail crime rings in large-format retail.
            </p>
            <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
              <li className="flex items-start gap-2 text-sm text-slate-300 font-inter font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="text-blue-500 mt-1.5 shrink-0">
                  <rect width="8" height="8" rx="1" fill="currentColor" />
                </svg>
                Undercover Store Detectives
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300 font-inter font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="text-blue-500 mt-1.5 shrink-0">
                  <rect width="8" height="8" rx="1" fill="currentColor" />
                </svg>
                Civil Recovery Programs
              </li>
            </ul>
            <button
              onClick={() => openModal('corporate')}
              className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-500 uppercase tracking-widest transition-colors hover:text-blue-400"
            >
              <span>PREVENT LOSS</span>
              <span className="block h-[1px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-8"></span>
            </button>
          </div>

          {/* Risk Advisory & ESG Compliance - Spans 2 columns */}
          <div 
            ref={(el) => { if (el) cardsRef.current[4] = el; }}
            className="premium-hover-card p-8 flex flex-col h-full group md:col-span-2 lg:col-span-2"
          >
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8 items-center h-full">
              <div className="flex-1">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M3 3v18h18"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white font-montserrat mb-3">Risk Advisory &amp; ESG Compliance</h3>
                <p className="text-slate-300 text-base leading-relaxed mb-6 font-inter">
                  Corporate tenders now include ESG criteria. We help you meet those requirements while protecting your people. Full supply chain audits and liability reports for board governance.
                </p>
                <button
                  onClick={() => openModal('corporate')}
                  className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-500 uppercase tracking-widest transition-colors hover:text-blue-400"
                >
                  <span>REQUEST CONFIDENTIAL AUDIT</span>
                  <span className="block h-[1px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-8"></span>
                </button>
              </div>
              <div className="relative w-full aspect-square rounded-xl overflow-hidden g7-brighten-on-hover group">
                <Image
                  src="/images/corp-risk-card.webp"
                  alt="Risk Assessment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent z-20"></div>
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-bold px-2 py-1 bg-white/10 backdrop-blur-md rounded text-white border border-white/20 font-mono-sys">MODERN SLAVERY ACT</span>
                    <span className="text-[10px] font-bold px-2 py-1 bg-white/10 backdrop-blur-md rounded text-white border border-white/20 font-mono-sys">CROWDED PLACES</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="w-full max-w-[1400px] mx-auto px-4 py-12">
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#0f172a] border border-white/10 shadow-2xl">
          <div className="absolute inset-0 z-0 g7-image-overlay">
            <Image
              src="/images/corp-case-study.webp"
              alt="Construction Site Security"
              fill
              className="object-cover transition-all duration-500 ease-out mix-blend-overlay"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/95 to-transparent z-0"></div>

          <div className="relative z-10 p-8 md:p-16 max-w-4xl">
            <span className="inline-block px-3 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-widest mb-6 font-mono-sys">[CASE.STUDY: TIER_1]</span>

            <h2 className="text-2xl md:text-3xl font-montserrat font-medium text-white italic leading-relaxed mb-8">
              &quot;Group 7 didn&apos;t just provide guards—they provided a defensible WHS ecosystem. Their compliance reporting gave our Board the assurance they needed during a critical high-risk phase of construction.&quot;
            </h2>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-lg font-mono-sys">PD</div>
              <div>
                <div className="text-white font-semibold font-inter">Project Director</div>
                <div className="text-slate-300 text-sm font-inter">Sydney Tier 1 Construction Firm</div>
              </div>
            </div>

            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-md">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white shadow-lg shadow-green-900/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              <span className="text-sm font-bold text-slate-200 font-mono-sys">ZERO LOST TIME INJURIES (LTI) // 90% INCIDENT REDUCTION</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-white mb-6">Security Failure is Not an Option.</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Join the Tier 1 entities and Government bodies who trust Group 7 to protect their people, assets, and reputation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openModal('corporate')}
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-mono font-bold text-white transition-all duration-300 bg-red-600 rounded-lg hover:bg-red-700 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.6)] w-full sm:w-auto"
            >
              <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-sm tracking-widest uppercase flex items-center gap-3">
                START YOUR PARTNERSHIP
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
