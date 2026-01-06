'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useModal } from './context/ModalContext';

export default function Home() {
  const { openModal } = useModal();
  return (
    <>
      {/* Hero Section */}
      <main className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
            src="/images/home-hero-bg.webp"
            alt="Sydney Harbour Security"
            fill
          priority
            className="object-cover object-center animate-slow-zoom -z-10"
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10"></div>
          <div className="bg-gradient-to-b from-[#0f1e3c]/30 via-[#0f1e3c]/60 to-[#0f1e3c] absolute top-0 right-0 bottom-0 left-0 z-10"></div>
          <div className="scanline-overlay"></div>
        </div>

        <div className="flex flex-col w-full h-full max-w-5xl z-10 mr-auto ml-auto pt-24 relative items-center justify-center">
          {/* Status Badge */}
          <div className="mb-6 flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md animate-fade-in-up shadow-xl">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-600"></span>
            </span>
            <span className="text-[10px] font-bold text-slate-300 tracking-widest uppercase font-mono-sys">[OPS.ACTIVE] SYDNEY METRO WIDE</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-montserrat font-semibold text-white text-balance text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.1] md:leading-tight mb-6 drop-shadow-2xl animate-decrypt delay-100">
            Active Protection <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">for Sydney Business</span>
          </h1>

          <p className="font-inter font-light text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10 animate-fade-in-up delay-200 antialiased opacity-90 text-balance">
            Delivering the visible presence and rapid response capabilities required to secure your people and property around the clock.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
            <Link href="/corporate" className="group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-mono font-bold text-white transition-all duration-300 bg-red-600 rounded-lg hover:bg-red-700 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.6)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 w-full sm:w-auto">
              <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-xs tracking-widest uppercase flex items-center gap-3">
                Corporate Risk Solutions
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </Link>
            <Link href="/business" className="group relative inline-flex items-center justify-center px-8 py-3.5 font-mono font-bold text-slate-300 transition-all duration-300 bg-slate-800/50 border border-white/10 rounded-lg hover:text-white hover:border-blue-500/50 hover:bg-slate-800 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] w-full sm:w-auto">
              <span className="text-xs tracking-widest uppercase">Business Patrols</span>
            </Link>
          </div>

          {/* Feature Icons */}
          <div className="sm:mt-28 animate-fade-in-up delay-300 w-full border-white/5 border-t mt-20 pt-10">
            <div className="mb-0 md:mb-16 grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-4 max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <div className="text-red-600 transition-transform duration-300 group-hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-400 font-mono-sys tracking-wide">METRO-WIDE COVERAGE</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <div className="text-red-600 transition-transform duration-300 group-hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-400 tracking-wide font-mono-sys">RAPID RESPONSE</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <div className="text-red-600 transition-transform duration-300 group-hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <line x1="3" x2="21" y1="22" y2="22"></line>
                    <line x1="6" x2="6" y1="18" y2="11"></line>
                    <line x1="10" x2="10" y1="18" y2="11"></line>
                    <line x1="14" x2="14" y1="18" y2="11"></line>
                    <line x1="18" x2="18" y1="18" y2="11"></line>
                    <polygon points="12 2 20 7 4 7"></polygon>
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-400 font-mono-sys tracking-wide">GOVERNMENT LICENSED</span>
              </div>
            </div>
        </div>
        </div>
      </main>

      {/* Main Content Container */}
      <div className="z-10 w-full max-w-[1400px] mr-auto ml-auto pr-4 pb-20 pl-4 relative space-y-12">
        {/* Certifications Marquee */}
        <section className="overflow-hidden z-20 w-full pt-8 pb-8 relative border-y border-white/5">
          <div className="inline-flex flex-nowrap overflow-hidden mask-gradient w-full">
            <ul className="flex md:justify-start [&_li]:mx-4 animate-infinite-scroll w-max gap-8 items-center justify-center">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  ),
                  title: 'NSW Master Security Licence',
                  subtitle: 'Active | Class: ME'
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                  ),
                  title: 'ISO 9001: Quality Management',
                  subtitle: 'Certified'
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <path d="m9 14 2 2 4-4"></path>
                    </svg>
                  ),
                  title: 'ISO 45001: Liability Shield',
                  subtitle: 'Mitigating PCBU Risk'
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                    </svg>
                  ),
                  title: 'ISO 14001: ESG Compliance',
                  subtitle: 'Environmental Mgmt.'
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  ),
                  title: 'Cm3 Prequalified',
                  subtitle: 'Approved'
                }
              ].map((item, index) => (
                <li key={`first-${index}`} className="flex-shrink-0">
                  <div className="static-border-card flex items-center gap-4 px-6 py-3 cursor-default">
                    <div className="text-blue-500">{item.icon}</div>
                    <div className="flex flex-col text-left">
                      <span className="text-white text-xs font-bold font-mono-sys uppercase tracking-wide">{item.title}</span>
                      <span className="text-slate-400 text-[10px] font-mono-sys">{item.subtitle}</span>
                    </div>
                  </div>
                </li>
              ))}
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  ),
                  title: 'NSW Master Security Licence',
                  subtitle: 'Active | Class: ME'
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                  ),
                  title: 'ISO 9001: Quality Management',
                  subtitle: 'Certified'
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <path d="m9 14 2 2 4-4"></path>
                    </svg>
                  ),
                  title: 'ISO 45001: Liability Shield',
                  subtitle: 'Mitigating PCBU Risk'
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                    </svg>
                  ),
                  title: 'ISO 14001: ESG Compliance',
                  subtitle: 'Environmental Mgmt.'
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  ),
                  title: 'Cm3 Prequalified',
                  subtitle: 'Approved'
                }
              ].map((item, index) => (
                <li key={`second-${index}`} className="flex-shrink-0">
                  <div className="static-border-card flex items-center gap-4 px-6 py-3 cursor-default">
                    <div className="text-blue-500">{item.icon}</div>
                    <div className="flex flex-col text-left">
                      <span className="text-white text-xs font-bold font-mono-sys uppercase tracking-wide">{item.title}</span>
                      <span className="text-slate-400 text-[10px] font-mono-sys">{item.subtitle}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Enterprise Grade Protection Section */}
        <section className="w-full rounded-[2.5rem] py-16 md:py-24 px-6 md:px-12 overflow-hidden text-white border border-white/5 bg-[#0f172a] relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <span className="block font-mono-sys text-xs text-blue-500 mb-2">// SECURITY.LEVEL_05</span>
              <h2 className="font-montserrat font-semibold text-white text-3xl md:text-5xl tracking-tight mb-6 leading-tight">
                Enterprise Grade Protection
                <span className="text-blue-400 opacity-90"> For Every Business Size</span>
              </h2>
              <p className="font-inter text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
                Whether you manage a skyscraper or a warehouse, our protocols adapt to your specific risk profile.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Corporate Card */}
              <div className="premium-hover-card p-10 flex flex-col justify-between h-full group">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-blue-300 bg-blue-500/10 px-4 py-1.5 rounded-full font-mono-sys border border-blue-500/20">
                      [TYPE: CORPORATE]
                    </span>
                    <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:border-blue-400/30 transition-colors duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                        <path d="M10 6h4"></path>
                        <path d="M10 10h4"></path>
                        <path d="M10 14h4"></path>
                        <path d="M10 18h4"></path>
                      </svg>
                    </div>
                  </div>

                  <h3 className="font-montserrat text-2xl font-semibold text-white leading-snug tracking-tight mb-4">
                    For Facility Managers, Strata Committees, and Corporate Directors
                  </h3>

                  <p className="text-[15px] text-slate-300 font-inter leading-relaxed mb-8">
                    You face liability risks that keep you up at night. Industrial manslaughter laws. Strata reforms. We mitigate those risks with compliance-first security strategies.{' '}
                    <button
                      onClick={() => openModal('corporate')}
                      className="text-blue-400 hover:text-blue-300 underline font-medium transition-colors"
                    >
                      Request a consultation
                    </button>
                    {' '}for tenders and compliance audits.
                  </p>

                  <div className="relative w-full h-40 mb-8 rounded-xl overflow-hidden ring-1 ring-white/10 g7-brighten-on-hover group">
                    <Image
                      src="/images/home-corp-card.webp"
                      alt="Corporate Office Lobby Security"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent z-20"></div>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-500 shrink-0 mt-0.5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="text-[15px] font-medium text-slate-300 font-inter">Converged Security: Physical &amp; Cyber</span>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-500 shrink-0 mt-0.5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="text-[15px] font-medium text-slate-300 font-inter">Concierge Services</span>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-500 shrink-0 mt-0.5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="text-[15px] font-medium text-slate-300 font-inter">ESG-Compliant Risk Management</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 flex items-end justify-between border-t border-white/5 pt-8 relative z-10">
                  <Link
                    href="/corporate"
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-500 uppercase tracking-widest transition-colors hover:text-blue-400 group/link"
                  >
                    VIEW CORPORATE SOLUTIONS
                    <span className="block h-[1px] w-0 bg-blue-400 transition-all duration-300 group-hover/link:w-8"></span>
                  </Link>
                  <Link
                    href="/corporate"
                    className="h-14 w-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Business/SME Card */}
              <div className="premium-hover-card p-10 flex flex-col justify-between h-full group">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-red-400 bg-red-500/10 px-4 py-1.5 rounded-full font-mono-sys border border-red-500/20">
                      [TYPE: INDUSTRIAL]
                    </span>
                    <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-red-400 group-hover:border-red-400/30 transition-colors duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"></path>
                        <path d="M6 18h12"></path>
                        <path d="M6 14h12"></path>
                        <rect width="12" height="12" x="6" y="10"></rect>
                      </svg>
                    </div>
                  </div>

                  <h3 className="font-montserrat text-2xl font-semibold text-white leading-snug tracking-tight mb-4">
                    For Warehouse Managers, Retailers, and Business Owners
                  </h3>

                  <p className="text-[15px] text-slate-300 font-inter leading-relaxed mb-8">
                    The deterrence of a full-time guard at 10% of the cost. Randomised, tracked, and visible patrols that disrupt criminal planning.{' '}
                    <button
                      onClick={() => openModal('general')}
                      className="text-red-400 hover:text-red-300 underline font-medium transition-colors"
                    >
                      Request a quote
                    </button>
                    {' '}to get started.
                  </p>

                  <div className="relative w-full h-40 mb-8 rounded-xl overflow-hidden ring-1 ring-white/10 g7-brighten-on-hover group">
                    <Image
                      src="/images/home-sme-card.webp"
                      alt="Industrial Warehouse Security"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20"></div>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-500 shrink-0 mt-0.5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="text-[15px] font-medium text-slate-300 font-inter">24/7 Mobile Security Patrols</span>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-500 shrink-0 mt-0.5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="text-[15px] font-medium text-slate-300 font-inter">Alarm Monitoring &amp; Response</span>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-500 shrink-0 mt-0.5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="text-[15px] font-medium text-slate-300 font-inter">Retail Loss Prevention</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 flex items-end justify-between border-t border-white/5 pt-8 relative z-10">
                  <Link
                    href="/sme"
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold text-red-400 uppercase tracking-widest transition-colors hover:text-red-300 group/link"
                  >
                    VIEW BUSINESS SOLUTIONS
                    <span className="block h-[1px] w-0 bg-red-400 transition-all duration-300 group-hover/link:w-8"></span>
                  </Link>
                  <Link
                    href="/sme"
                    className="h-14 w-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:border-red-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us / About Section */}
        <section className="w-full rounded-[2.5rem] py-16 md:py-24 px-4 md:px-10 overflow-hidden text-white border border-white/5 bg-[#0f172a]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            {/* Left Column: Heading, Subheading, Image */}
            <div className="flex flex-col pt-4 md:pl-6 h-full">
              <h2 className="md:text-5xl leading-[1.1] text-4xl font-semibold text-white tracking-tight font-montserrat mb-6">
                100% Commercial &amp; Corporate Focus
              </h2>
              <p className="font-inter text-lg text-slate-300 leading-relaxed mb-10 max-w-lg font-light">
                We specialize exclusively in commercial and industrial sectors. Our officers are career professionals focused on asset protection, WHS compliance, and corporate protocols.
              </p>
              <div className="relative w-full aspect-video lg:aspect-auto lg:flex-grow rounded-2xl overflow-hidden shadow-2xl border border-white/10 g7-brighten-on-hover group min-h-[300px]">
                <Image
                  src="/images/home-focus-bg.webp"
                  alt="Professional Focus"
                  fill
                  className="object-cover object-top"
                />
                <div className="bg-[#0f172a]/10 absolute top-0 right-0 bottom-0 left-0 z-20"></div>
              </div>
            </div>

            {/* Right Column: Specialized Commercial Expertise + 3 Cards */}
            <div className="flex flex-col gap-6 pt-0 lg:pt-4 h-full">
              <div className="p-6 rounded-xl border border-blue-500/20 bg-blue-500/5">
                <h4 className="text-blue-400 font-bold font-montserrat mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  Specialized Commercial Expertise
                </h4>
                <p className="text-sm text-slate-300 font-inter">
                  By dedicating our operations exclusively to commercial and government sectors, we ensure our team is trained specifically for your environment. We provide career security officers focused on asset protection and safety compliance.
                </p>
              </div>
              <div className="premium-hover-card p-6 flex flex-col">
                <div className="flex shadow-red-900/40 text-white bg-blue-400 w-10 h-10 rounded-lg mb-4 shadow-lg items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="font-montserrat font-semibold text-white text-lg mb-2">Fully Insured</h3>
                <p className="font-inter text-sm text-slate-300 leading-relaxed mb-4">
                  $20 Million Public Liability Insurance. We protect your assets and your legal standing.
                </p>
              </div>
              <div className="premium-hover-card p-6 flex flex-col">
                <div className="flex shadow-red-900/40 text-white bg-blue-400 w-10 h-10 rounded-lg mb-4 shadow-lg items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="font-montserrat font-semibold text-white text-lg mb-2">Compliance</h3>
                <p className="font-inter text-sm text-slate-300 leading-relaxed mb-4">
                  Our operations meet ISO 9001, ISO 45001, and ISO 14001 standards. We shield you from liability.
                </p>
              </div>
              <div className="premium-hover-card p-6 flex flex-col">
                <div className="flex shadow-red-900/40 text-white bg-blue-400 w-10 h-10 rounded-lg mb-4 shadow-lg items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M12 20v2"></path>
                    <path d="M12 2v2"></path>
                    <path d="M17 20v2"></path>
                    <path d="M17 2v2"></path>
                    <path d="M2 12h2"></path>
                    <path d="M2 17h2"></path>
                    <path d="M2 7h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="M20 17h2"></path>
                    <path d="M20 7h2"></path>
                    <path d="M7 20v2"></path>
                    <path d="M7 2v2"></path>
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                  </svg>
                </div>
                <h3 className="font-montserrat font-semibold text-white text-lg mb-2">Technology</h3>
                <p className="font-inter text-sm text-slate-300 leading-relaxed mb-4">
                  From mobile credentials to integrated access control, we deploy cutting-edge systems that satisfy your insurers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Focus for Patrols. City-Wide Reach for Enterprise. Section */}
        <section className="w-full rounded-[2.5rem] py-16 md:py-24 px-6 md:px-12 overflow-hidden text-white border border-white/5 bg-[#0f172a]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            <div className="flex flex-col h-full justify-between">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-montserrat font-semibold text-white tracking-tight mb-6">
                  Local Focus for Patrols.
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-500"> City-Wide Reach for Enterprise.</span>
                </h2>
                <p className="text-lg text-slate-300 font-inter max-w-lg leading-relaxed">
                  Dedicated Rapid Response Zones for Local Business. Comprehensive Coverage for Corporate Clients.
                </p>
              </div>

              <div className="premium-hover-card p-8 rounded-xl mb-8">
                <h3 className="uppercase text-xl font-bold text-white tracking-tight font-mono-sys mb-2"> 01. ENTERPRISE COVERAGE</h3>
                <div className="inline-flex text-[10px] uppercase font-bold text-blue-400 tracking-wider bg-blue-500/10 border-blue-500/20 border rounded-full mb-4 pt-0.5 pr-2.5 pb-0.5 pl-2.5 items-center font-mono-sys">
                  STATUS: ACTIVE | METRO-WIDE
                </div>

                <p className="text-slate-300 font-inter leading-relaxed text-base mb-4">
                  From the CBD to Greater Western Sydney, we deploy project teams, concierge staff, and integrated systems wherever your assets are located.
                </p>

                <Link href="/corporate" className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-500 uppercase tracking-widest transition-colors hover:text-blue-400 mt-4">
                  <span>VIEW CORPORATE SOLUTIONS</span>
                  <span className="block h-[1px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-8"></span>
                </Link>
              </div>

              <div className="relative w-full aspect-video bg-black rounded-xl border border-white/10 shadow-lg overflow-hidden g7-brighten-on-hover group">
                <Image
                  src="/images/home-enterprise-hq.webp"
                  alt="Corporate Headquarters"
                  fill
                  className="object-cover"
                />
                <div className="bg-gradient-to-t from-[#020617] to-transparent opacity-30 absolute top-0 right-0 bottom-0 left-0 z-20"></div>
                <div className="absolute bottom-5 left-5">
                  <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-[10px] font-bold text-white tracking-wide uppercase font-mono-sys">HQ Protection Active</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 h-full">
              <div className="relative w-full aspect-[4/3] bg-black rounded-xl border border-white/10 shadow-2xl overflow-hidden g7-brighten-on-hover group premium-hover-card z-0">
                <Image
                  src="/images/home-patrol-map-bg.webp"
                  alt="Sydney Patrol Map"
                  fill
                  className="object-cover object-[center_40%]"
                />

                <div className="absolute top-0 right-0 bottom-0 left-0 z-20">
                  <div className="absolute top-[65%] left-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group-hover:scale-110 transition-transform duration-500 cursor-pointer z-20">
                    <div className="relative flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,1)] z-10"></div>
                      <div className="absolute w-8 h-8 bg-red-500/20 rounded-full animate-ping"></div>
                    </div>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 bg-slate-900/90 border border-red-500/30 rounded text-[9px] font-bold text-white tracking-wide backdrop-blur-md whitespace-nowrap font-mono-sys">
                      WESTERN HUB
                    </div>
                  </div>
                  
                  <div className="absolute top-[48%] left-[65%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group-hover:scale-110 transition-transform duration-500 delay-75 cursor-pointer z-10">
                    <div className="relative flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,1)] z-10"></div>
                      <div className="absolute w-8 h-8 bg-red-500/20 rounded-full animate-ping delay-300"></div>
                    </div>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 bg-slate-900/90 border border-red-500/30 rounded text-[9px] font-bold text-white tracking-wide backdrop-blur-md whitespace-nowrap font-mono-sys">
                      NORTH SHORE
                    </div>
                  </div>
                  
                  <div className="absolute top-[75%] left-[55%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group-hover:scale-110 transition-transform duration-500 delay-150 cursor-pointer z-10">
                    <div className="relative flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,1)] z-10"></div>
                      <div className="absolute w-8 h-8 bg-red-500/20 rounded-full animate-ping delay-150"></div>
                    </div>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 bg-slate-900/90 border border-red-500/30 rounded text-[9px] font-bold text-white tracking-wide backdrop-blur-md whitespace-nowrap font-mono-sys">
                      INNER WEST
                    </div>
                  </div>
                  
                  <div className="absolute top-[82%] left-[35%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group-hover:scale-110 transition-transform duration-500 delay-100 cursor-pointer z-10">
                    <div className="relative flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,1)] z-10"></div>
                      <div className="absolute w-8 h-8 bg-red-500/20 rounded-full animate-ping delay-500"></div>
                    </div>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 bg-slate-900/90 border border-red-500/30 rounded text-[9px] font-bold text-white tracking-wide backdrop-blur-md whitespace-nowrap font-mono-sys">
                      SOUTH WEST
                    </div>
                  </div>
                  
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <line x1="25%" y1="65%" x2="55%" y2="75%" stroke="#ef4444" strokeWidth="1"></line>
                    <line x1="65%" y1="48%" x2="55%" y2="75%" stroke="#ef4444" strokeWidth="1"></line>
                    <line x1="35%" y1="82%" x2="55%" y2="75%" stroke="#ef4444" strokeWidth="1"></line>
                  </svg>
                </div>
              </div>

              <div className="premium-hover-card p-8 rounded-xl flex flex-col justify-between flex-1 relative z-20 bg-[#0f172a]">
                <div>
                  <h3 className="uppercase text-xl font-bold text-white tracking-tight font-mono-sys mb-2">02. PATROL ZONES</h3>
                  <div className="flex flex-wrap gap-3 mb-4 gap-x-3 gap-y-3 items-center">
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-wider font-mono-sys">
                      Rapid Response
                    </div>
                    <span className="text-xs font-medium text-red-400 tracking-wide font-inter">Rapid Dispatch</span>
                  </div>

                  <p className="text-slate-300 font-inter leading-relaxed text-base mb-6">
                    To ensure fast alarm response times, our patrol vehicles are permanently stationed in key industrial hubs.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 text-slate-300 text-base">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      Western Sydney Hub
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-base">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      Inner West Hub
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-base">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      North Shore Hub
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-base">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      South West Hub
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => openModal('general')}
                    className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-red-400 uppercase tracking-widest transition-colors hover:text-red-300"
                  >
                    <span>REQUEST PATROL QUOTE</span>
                    <span className="block h-[1px] w-0 bg-red-400 transition-all duration-300 group-hover:w-8"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Group 7 Difference Section */}
        <section className="w-full bg-[#0f172a] border-t border-white/5 pt-20 pb-20">
          <div className="w-full max-w-[1400px] mx-auto px-4 text-center">
            <h2 className="text-3xl font-montserrat font-semibold text-white tracking-tight mb-16">The Group 7 Difference</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 text-slate-300 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] ring-1 ring-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Commercial Specialists</h3>
                <p className="text-slate-300 text-base max-w-xs mx-auto">We are 100% dedicated to the corporate and industrial sectors. You get a professional security officer, not a bouncer.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 text-slate-300 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] ring-1 ring-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Fully Licensed &amp; Insured</h3>
                <p className="text-slate-300 text-base max-w-xs mx-auto">NSW Master Security Licence (Class 1 &amp; 2). Fully insured for <span className="text-white font-semibold">$20M Public Liability</span>.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 text-slate-300 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] ring-1 ring-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                    <line x1="9" x2="9" y1="3" y2="18"></line>
                    <line x1="15" x2="15" y1="6" y2="21"></line>
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">GPS Accountability</h3>
                <p className="text-base text-slate-300 max-w-xs mr-auto ml-auto">Every patrol is tracked. Its report is automatically generated.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full rounded-[2.5rem] py-16 md:py-24 px-6 md:px-12 overflow-hidden text-white border border-white/5 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-red-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="font-montserrat font-semibold text-white text-3xl md:text-5xl tracking-tight mb-6 leading-tight">
              Ready to Secure Your Assets?
            </h2>
            <p className="font-inter text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              Get a customized security solution that protects your business, mitigates risk, and ensures compliance. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openModal('general')}
                className="group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-mono font-bold text-white transition-all duration-300 bg-red-600 rounded-lg hover:bg-red-700 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.6)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 w-full sm:w-auto"
              >
                <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-xs tracking-widest uppercase flex items-center gap-3">
                  Get a Quote
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </button>
              <Link href="/services" className="group relative inline-flex items-center justify-center px-8 py-3.5 font-mono font-bold text-slate-300 transition-all duration-300 bg-slate-800/50 border border-white/10 rounded-lg hover:text-white hover:border-blue-500/50 hover:bg-slate-800 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] w-full sm:w-auto">
                <span className="text-xs tracking-widest uppercase">Our Services</span>
              </Link>
            </div>
          </div>
        </section>
    </div>
    </>
  );
}
