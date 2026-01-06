import Image from 'next/image';
import Link from 'next/link';

export default function SMEPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[85dvh] flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/sme-hero-bg.webp"
            alt="Sydney Industrial Park Night Security"
            fill
            priority
            className="object-cover animate-slow-zoom -z-10"
          />
          <div className="bg-gradient-to-b from-[#0f1e3c]/30 via-[#0f1e3c]/60 to-[#0f1e3c] absolute top-0 right-0 bottom-0 left-0 z-10"></div>
          <div 
            className="absolute inset-0 opacity-10 mix-blend-overlay z-10"
            style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
          ></div>
        </div>

        <div className="flex flex-col z-10 w-full max-w-5xl mx-auto relative items-center justify-center pt-20 md:pt-24">
          <div className="mb-6 flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/20 bg-blue-900/10 backdrop-blur-md animate-fade-in-up shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] font-bold text-blue-300 tracking-widest uppercase font-mono-sys">[STATUS: ACTIVE] METRO-WIDE RAPID RESPONSE</span>
          </div>

          <h1 className="font-montserrat font-semibold text-white text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.1] md:leading-tight mb-6 drop-shadow-2xl animate-decrypt delay-100 text-balance">
            GPS-Verified Mobile Patrols <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-500">&amp; Alarm Response</span>
          </h1>

          <p className="font-inter font-light text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed mb-10 animate-fade-in-up delay-200 antialiased opacity-90 text-balance">
            The deterrence of a full-time guard at a fraction of the cost. Randomised, tracked, and visible patrols that disrupt criminal planning.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-300">
            <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-mono font-bold text-white transition-all duration-300 bg-red-600 rounded-lg hover:bg-red-700 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.6)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 w-full sm:w-auto">
              <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-xs tracking-widest uppercase flex items-center gap-3">
                GET RAPID QUOTE
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </Link>

            <a href="tel:+61294025389" className="group relative inline-flex items-center justify-center px-8 py-3.5 font-mono font-bold text-slate-300 transition-all duration-300 bg-slate-800/50 border border-white/10 rounded-lg hover:text-white hover:border-blue-500/50 hover:bg-slate-800 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] w-full sm:w-auto">
              <span className="text-xs tracking-widest uppercase flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                (02) 9402 5389
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Don't Let Theft Eat Your Margins Section */}
      <section className="w-full max-w-[1400px] mx-auto px-4 pb-20 relative z-20 mt-8 md:-mt-20">
        <div className="absolute top-0 right-0 w-full h-full max-w-xl bg-red-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="md:p-16 overflow-hidden text-white bg-[#0f172a] w-full border-white/5 border rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="font-montserrat font-semibold text-3xl md:text-5xl tracking-tight mb-8 leading-tight text-balance">
                Don&apos;t Let Theft
                <span className="text-red-500"> Eat Your Margins.</span>
              </h2>

              <div className="space-y-6 text-slate-300 font-inter text-lg leading-relaxed font-light">
                <p>
                  From retail shrinkage and ram raids to warehouse break-ins and copper theft, the threat to Sydney local businesses is rising. You need a security partner who acts fast—not one who sends you to voicemail.
                </p>
                <p>
                  Group 7 Security provides cost-effective, scalable protection packages. Whether you run a logistics hub, a corporate office, or a retail store, we have a solution that fits your budget.
                </p>
              </div>
            </div>

            <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-8 shadow-xl relative overflow-hidden group premium-hover-card">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-50"></div>
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-start justify-between border-b border-white/5 pb-6">
                  <div>
                    <span className="block text-xs font-bold text-red-400 uppercase tracking-widest mb-1 font-mono-sys">RETAIL THEFT TREND</span>
                    <div className="text-3xl font-bold text-white font-mono-sys flex items-center gap-2">
                      +4.3%
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                      </svg>
                    </div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wide font-mono-sys">[SOURCE: BOCSAR_2024]</span>
                  </div>
                  <div className="bg-red-500/10 p-3 rounded-lg text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <span className="block text-xs font-bold text-green-400 uppercase tracking-widest mb-1 font-mono-sys">PATROL COVERAGE</span>
                    <div className="text-3xl font-bold text-white font-mono-sys">RAPID RESPONSE</div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wide font-mono-sys">WEST // INNER_WEST // NORTH // SOUTH</span>
                  </div>
                  <div className="bg-green-500/10 p-3 rounded-lg text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="10" x2="14" y1="2" y2="2"></line>
                      <line x1="12" x2="15" y1="14" y2="11"></line>
                      <circle cx="12" cy="14" r="8"></circle>
                    </svg>
                  </div>
                </div>

                <Link href="/contact" className="group relative inline-flex items-center justify-center w-full px-8 py-4 overflow-hidden font-mono font-bold text-white transition-all duration-300 bg-red-600 rounded-lg hover:bg-red-700 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.6)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 mt-2">
                  <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-xs tracking-widest uppercase flex items-center gap-3">
                    Get Immediate Protection
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="w-full max-w-[1400px] mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-16">
          <span className="block font-mono-sys text-xs text-blue-500 mb-2">// CAPABILITY.LIST</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-white tracking-tight mb-4">Core Services</h2>
          <p className="text-slate-400 font-inter max-w-2xl mx-auto">Scalable security solutions built for business owners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="premium-hover-card p-8 flex flex-col h-full group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z"></path>
                <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z"></path>
                <path d="M21 12h1"></path>
                <path d="M18.5 4.5 18 5"></path>
                <path d="M2 12h1"></path>
                <path d="M12 2v1"></path>
                <path d="m4.929 4.929.707.707"></path>
                <path d="M12 12v6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3">Mobile Security Patrols</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-7 font-inter flex-grow">
              Visible deterrence. Rapid response. GPS verified. Why pay for a guard all night when you can pay per visit? Perfect balance of security and budget.
            </p>
            <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
              <li className="flex items-start gap-2 text-sm text-slate-300 font-inter font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="text-blue-500 mt-1.5 shrink-0">
                  <rect width="8" height="8" rx="1" fill="currentColor" />
                </svg>
                GPS Transparency (Time-stamped logs)
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300 font-inter font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="text-blue-500 mt-1.5 shrink-0">
                  <rect width="8" height="8" rx="1" fill="currentColor" />
                </svg>
                Randomized Intervals
              </li>
            </ul>
            <Link href="/service#mobile-patrols" className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-500 uppercase tracking-widest transition-colors hover:text-blue-400">
              <span>VIEW DETAILS</span>
              <span className="block h-[1px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-8"></span>
            </Link>
          </div>

          <div className="premium-hover-card p-8 flex flex-col h-full group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                <path d="M4 2C2.8 3.7 2 5.7 2 8"></path>
                <path d="M22 8c0-2.3-.8-4.3-2-6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3">Alarm Monitoring &amp; Response</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-7 font-inter flex-grow">
              Grade A1 Monitoring. When your alarm triggers at 3 AM, seconds matter. Our 24/7 control room dispatches the nearest response vehicle immediately.
            </p>
            <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
              <li className="flex items-start gap-2 text-sm text-slate-300 font-inter font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="text-blue-500 mt-1.5 shrink-0">
                  <rect width="8" height="8" rx="1" fill="currentColor" />
                </svg>
                No Voicemail (Live Operators)
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300 font-inter font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="text-blue-500 mt-1.5 shrink-0">
                  <rect width="8" height="8" rx="1" fill="currentColor" />
                </svg>
                Police Liaison &amp; False Alarm Management
              </li>
            </ul>
            <Link href="/service#electronic-security" className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-500 uppercase tracking-widest transition-colors hover:text-blue-400">
              <span>VIEW DETAILS</span>
              <span className="block h-[1px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-8"></span>
            </Link>
          </div>

          <div className="premium-hover-card p-8 flex flex-col h-full group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                <path d="M17 18h1"></path>
                <path d="M12 18h1"></path>
                <path d="M7 18h1"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3">Warehouse &amp; Industrial Security</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-7 font-inter flex-grow">
              Purpose-Built for Industrial Sites. We secure your laydown yards, gates, and perimeters against unauthorized access and copper theft.
            </p>
            <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
              <li className="flex items-start gap-2 text-sm text-slate-300 font-inter font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="text-blue-500 mt-1.5 shrink-0">
                  <rect width="8" height="8" rx="1" fill="currentColor" />
                </svg>
                Lock-Up &amp; Unlock Services
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300 font-inter font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="text-blue-500 mt-1.5 shrink-0">
                  <rect width="8" height="8" rx="1" fill="currentColor" />
                </svg>
                Solar CCTV for remote yards
              </li>
            </ul>
            <Link href="/contact" className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-500 uppercase tracking-widest transition-colors hover:text-blue-400">
              <span>SECURE YOUR WAREHOUSE</span>
              <span className="block h-[1px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-8"></span>
            </Link>
          </div>

          <div className="premium-hover-card p-8 flex flex-col h-full group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3">Retail Loss Prevention</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-7 font-inter flex-grow">
              Stop Shrinkage. Protect Your Team. Retail theft isn&apos;t just about lost inventory—it&apos;s about staff safety.
            </p>
            <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
              <li className="flex items-start gap-2 text-sm text-slate-300 font-inter font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="text-blue-500 mt-1.5 shrink-0">
                  <rect width="8" height="8" rx="1" fill="currentColor" />
                </svg>
                Uniformed Deterrence for peak hours
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300 font-inter font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="text-blue-500 mt-1.5 shrink-0">
                  <rect width="8" height="8" rx="1" fill="currentColor" />
                </svg>
                Anti-Ram Raid &amp; Bollard Advice
              </li>
            </ul>
            <Link href="/contact" className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-500 uppercase tracking-widest transition-colors hover:text-blue-400">
              <span>STOP RETAIL THEFT</span>
              <span className="block h-[1px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-8"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Security That Fits Your Budget Section */}
      <section className="w-full bg-[#0f172a] border-y border-white/5 py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        ></div>

        <div className="w-full max-w-6xl mx-auto px-4 relative z-10 pt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-semibold text-white tracking-tight mb-4">Security That Fits Your Budget</h2>
            <p className="text-slate-400 font-inter max-w-xl mx-auto">Every business is different. We build a custom package based on your risk level and needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="premium-hover-card p-6 flex flex-col justify-between h-full bg-[#0f172a] border border-white/5">
              <div>
                <h3 className="text-lg font-bold text-white font-montserrat mb-2">Mobile Patrol</h3>
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-6 font-mono-sys">Best for Warehouses</p>
                <div className="flex-grow space-y-4 mb-8">
                  <div className="flex gap-3 text-sm text-slate-300 font-inter">
                    <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Randomized nightly visits
                  </div>
                  <div className="flex gap-3 text-sm text-slate-300 font-inter">
                    <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Perimeter checks
                  </div>
                  <div className="flex gap-3 text-sm text-slate-300 font-inter">
                    <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    GPS verification reports
                  </div>
                </div>
              </div>
              <Link href="/contact" className="group relative inline-flex items-center justify-center w-full px-4 py-3 font-mono font-bold text-slate-300 transition-all duration-300 bg-slate-800/50 border border-white/10 rounded-lg hover:text-white hover:border-blue-500/50 hover:bg-slate-800 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]">
                <span className="text-xs tracking-widest uppercase">Check Availability</span>
              </Link>
            </div>

            <div className="premium-hover-card p-6 flex flex-col justify-between h-full bg-[#0f172a] border border-white/5">
              <div>
                <h3 className="text-lg font-bold text-white font-montserrat mb-2">Alarm Response</h3>
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-6 font-mono-sys">Best for Retail &amp; Offices</p>
                <div className="flex-grow space-y-4 mb-8">
                  <div className="flex gap-3 text-sm text-slate-300 font-inter">
                    <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    24/7 Monitoring
                  </div>
                  <div className="flex gap-3 text-sm text-slate-300 font-inter">
                    <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Key holding service
                  </div>
                  <div className="flex gap-3 text-sm text-slate-300 font-inter">
                    <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Emergency dispatch
                  </div>
                </div>
              </div>
              <Link href="/contact" className="group relative inline-flex items-center justify-center w-full px-4 py-3 font-mono font-bold text-slate-300 transition-all duration-300 bg-slate-800/50 border border-white/10 rounded-lg hover:text-white hover:border-blue-500/50 hover:bg-slate-800 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]">
                <span className="text-xs tracking-widest uppercase">Check Availability</span>
              </Link>
            </div>

            <div className="relative transform md:scale-105 z-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono-sys shadow-lg z-20 whitespace-nowrap">Most Popular</div>
              <div className="premium-hover-card p-6 flex flex-col justify-between h-full bg-gradient-to-b from-[#1e3a8a]/20 to-[#0f172a] border-2 border-blue-600 shadow-[0_0_30px_rgba(37,99,235,0.15)]">
                <div>
                  <h3 className="text-lg font-bold text-white font-montserrat mb-2 mt-2">Total Protection</h3>
                  <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-6 font-mono-sys">Best for High-Risk Sites</p>
                  <div className="flex-grow space-y-4 mb-8">
                    <div className="flex gap-3 text-sm text-slate-200 font-inter font-medium">
                      <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Mobile Patrols Included
                    </div>
                    <div className="flex gap-3 text-sm text-slate-200 font-inter font-medium">
                      <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      24/7 Monitoring
                    </div>
                    <div className="flex gap-3 text-sm text-slate-200 font-inter font-medium">
                      <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Lock-up / Unlock Service
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="group relative inline-flex items-center justify-center w-full px-4 py-3 overflow-hidden font-mono font-bold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-[0_0_20px_-5px_rgba(37,99,235,0.6)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                  <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-xs tracking-widest uppercase">Get Best Value</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Patrol Hubs Section */}
      <section className="z-10 w-full max-w-[1400px] mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col h-full justify-center">
            <h2 className="text-3xl font-montserrat font-semibold text-white tracking-tight mb-6">Strategic Patrol Hubs</h2>
            <p className="text-slate-300 font-inter mb-8 text-lg leading-relaxed">
              We don&apos;t dispatch from a distant HQ. Our vehicles are staged in Western Sydney, The Inner West, and North Shore for minutes-away response times.
            </p>

            <div className="space-y-4">
              <div className="premium-hover-card p-4 flex items-center gap-4 hover:bg-white/5 transition-colors">
                <div className="bg-blue-500/10 p-3 rounded-full text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold font-montserrat text-lg">Western Sydney</h4>
                  <p className="text-sm text-slate-300 font-inter">Industrial &amp; Logistics Hub</p>
                </div>
              </div>

              <div className="premium-hover-card p-4 flex items-center gap-4 hover:bg-white/5 transition-colors">
                <div className="bg-blue-500/10 p-3 rounded-full text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold font-montserrat text-lg">Inner West</h4>
                  <p className="text-sm text-slate-300 font-inter">Retail &amp; Business Precincts</p>
                </div>
              </div>

              <div className="premium-hover-card p-4 flex items-center gap-4 hover:bg-white/5 transition-colors">
                <div className="bg-blue-500/10 p-3 rounded-full text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold font-montserrat text-lg">North Shore</h4>
                  <p className="text-sm text-slate-300 font-inter">Business Parks &amp; Corporate</p>
                </div>
              </div>

              <div className="premium-hover-card p-4 flex items-center gap-4 hover:bg-white/5 transition-colors">
                <div className="bg-blue-500/10 p-3 rounded-full text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold font-montserrat text-lg">South West Sydney</h4>
                  <p className="text-sm text-slate-300 font-inter">Industrial Zones</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] bg-black rounded-xl border border-white/10 shadow-2xl overflow-hidden g7-image-overlay group premium-hover-card z-0">
            <Image
              src="/images/home-patrol-map-bg.webp"
              alt="Sydney Patrol Map"
              fill
              className="object-cover object-[center_40%] transition-all duration-500 ease-out"
            />

            <div className="absolute top-0 right-0 bottom-0 left-0">
              <div className="absolute top-[65%] left-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group-hover:scale-110 transition-transform duration-500 cursor-pointer z-10">
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
                <line x1="55%" y1="75%" x2="35%" y2="82%" stroke="#ef4444" strokeWidth="1"></line>
                <line x1="65%" y1="48%" x2="55%" y2="75%" stroke="#ef4444" strokeWidth="1"></line>
              </svg>
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
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 text-slate-300 border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Commercial Specialists</h3>
              <p className="text-slate-300 text-sm max-w-xs mx-auto">We are 100% dedicated to the corporate and industrial sectors. You get a professional security officer, not a bouncer.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 text-slate-300 border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Fully Licensed &amp; Insured</h3>
              <p className="text-slate-300 text-sm max-w-xs mx-auto">NSW Master Security Licence (Class 1 &amp; 2). Fully insured for <span className="text-white font-semibold">$20M Public Liability</span>.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 text-slate-300 border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                  <line x1="9" x2="9" y1="3" y2="18"></line>
                  <line x1="15" x2="15" y1="6" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">GPS Accountability</h3>
              <p className="text-sm text-slate-300 max-w-xs mr-auto ml-auto">Every patrol is tracked. Its report is automatically generated.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


