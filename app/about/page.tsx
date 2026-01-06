import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[85dvh] flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/about-hero-bg.webp"
            alt="Sydney Commercial Architecture"
            fill
            priority
            className="object-cover animate-slow-zoom -z-10"
          />
          <div className="bg-gradient-to-b from-[#0f1e3c]/30 via-[#0f1e3c]/60 to-[#0f1e3c] absolute top-0 right-0 bottom-0 left-0 z-10"></div>
          <div 
            className="absolute inset-0 opacity-5 mix-blend-overlay z-10"
            style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
          ></div>
        </div>

        <div className="flex flex-col z-10 w-full max-w-5xl mx-auto relative items-center justify-center pt-20 md:pt-24">
          <div className="mb-6 flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/20 bg-blue-900/10 backdrop-blur-md animate-fade-in-up shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-bold text-blue-300 tracking-widest uppercase font-mono-sys">[EST.1999] SYDNEY OWNED &amp; OPERATED</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-[1.1] md:leading-tight animate-decrypt delay-100 font-montserrat mb-6 drop-shadow-2xl text-balance">
            Protecting Sydney&apos;s <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-500">Commercial Assets Since 1999</span>
          </h1>

          <p className="font-inter font-light text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 animate-fade-in-up delay-200 antialiased opacity-90 text-balance">
            Licensed. Certified. Proven. The security partner you can trust for stability and compliance.
          </p>
        </div>
      </section>

      {/* Company History Section */}
      <section className="w-full max-w-[1400px] mx-auto px-4 pb-20 relative z-20 mt-8 md:-mt-20">
        <div className="absolute top-0 left-0 w-full h-full max-w-xl bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="md:p-16 overflow-hidden text-white bg-[#0f172a] w-full border-white/5 border rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
            <div>
              <h2 className="font-montserrat font-semibold text-3xl md:text-5xl tracking-tight mb-8 leading-tight text-balance">
                Built on Accountability,
                <span className="text-blue-500"> Not Promises.</span>
              </h2>

              <div className="hidden md:flex items-center gap-4 mb-8 opacity-50">
                <span className="text-xs font-bold font-mono-sys text-slate-300">1999</span>
                <div className="h-px bg-slate-700 flex-grow"></div>
                <span className="text-xs font-bold text-slate-300 font-mono-sys">PRESENT</span>
              </div>
            </div>

            <div className="space-y-6 text-slate-300 font-inter text-lg leading-relaxed font-light">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:float-left first-letter:mr-3 first-letter:-mt-1">
                Group 7 Security was founded in 1999 with a simple mission: to deliver security services with transparency, professionalism, and zero compromise on quality.
              </p>
              <p>
                We understood early on that Facility Managers and Business Owners need more than just manpower. You need compliance, detailed reporting, and guards who understand corporate protocol.
              </p>
              <p className="text-white font-medium">
                Today, we protect government buildings, A-grade commercial towers, major construction sites, and hundreds of local businesses across Metro Sydney under the same stable ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Commercial Expertise Section */}
      <section className="w-full max-w-[1200px] mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase mb-3 block font-mono-sys">[STRATEGIC.ADVANTAGE]</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-white tracking-tight mb-6">
            Specialized Commercial Expertise
          </h2>
          <p className="text-slate-300 font-inter max-w-2xl mx-auto text-lg text-balance">
            We dedicate 100% of our resources to the commercial and government sectors. This specialization delivers measurable benefits to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="premium-hover-card p-8 group">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-white mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-900/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3 relative z-10">Corporate Skill Set</h3>
            <p className="text-slate-300 text-base leading-relaxed font-inter relative z-10">
              Our team is trained in conflict de-escalation, WHS compliance, and customer service. They are assets to your brand, not just guards.
            </p>
          </div>

          <div className="premium-hover-card p-8 group">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-white mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-900/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3 relative z-10">Career Professionals</h3>
            <p className="text-slate-300 text-base leading-relaxed font-inter relative z-10">
              By focusing on stable commercial environments, we retain career security officers who take pride in their work and know your site intimately.
            </p>
          </div>

          <div className="premium-hover-card p-8 group">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-white mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-900/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white font-montserrat mb-3 relative z-10">ISO 45001 Mitigation</h3>
            <p className="text-slate-300 text-base leading-relaxed font-inter relative z-10">
              Our specialized focus means our safety systems are tailored to reduce PCBU liability in high-compliance environments.
            </p>
          </div>
        </div>
      </section>

      {/* Audited for Your Protection Section */}
      <section className="w-full bg-[#0f172a] border-y border-white/5 py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        ></div>

        <div className="w-full max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-montserrat font-semibold text-white tracking-tight mb-4">Audited for Your Protection.</h2>
              <p className="text-slate-300 font-inter mb-8 text-lg">We don&apos;t just claim to be compliant. We are independently audited to international standards.</p>

              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 rounded-lg bg-[#0a0f1d] border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-blue-900/30 flex items-center justify-center text-blue-400 font-bold font-mono-sys text-xs">ASIAL</div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">ASIAL Member</h4>
                    <p className="text-slate-400 text-xs font-mono-sys">Since 1999</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-[#0a0f1d] border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-blue-900/30 flex items-center justify-center text-blue-400 font-bold font-mono-sys text-xs">ML</div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">NSW Master Licence</h4>
                    <p className="text-slate-400 text-xs font-mono-sys">Class 1 &amp; 2 Accredited</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-[#0a0f1d] border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-green-900/30 flex items-center justify-center text-green-400 font-bold font-mono-sys text-xs">OK</div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Zero Phoenixing</h4>
                    <p className="text-slate-400 text-xs font-mono-sys">Consistent Ownership</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="premium-hover-card p-8 flex flex-col h-full group">
                <div className="text-4xl font-black text-white/10 mb-4 font-montserrat group-hover:text-blue-500/20 transition-colors">9001</div>
                <h3 className="text-lg font-bold text-white font-montserrat mb-2">Quality Management</h3>
                <div className="h-px w-10 bg-blue-500 mb-4"></div>
                <p className="text-slate-300 text-base font-inter">Ensures consistent service delivery, every single shift. Processes are documented, measured, and improved.</p>
              </div>

              <div className="premium-hover-card p-8 flex flex-col h-full group">
                <div className="text-4xl font-black text-white/10 mb-4 font-montserrat group-hover:text-green-500/20 transition-colors">45001</div>
                <h3 className="text-lg font-bold text-white font-montserrat mb-2">Occupational Health &amp; Safety</h3>
                <div className="h-px w-10 bg-green-500 mb-4"></div>
                <p className="text-slate-300 text-base font-inter">Critical for Facility Managers. This certification helps protect your board and management from industrial liability risks.</p>
              </div>

              <div className="premium-hover-card p-8 flex flex-col h-full group">
                <div className="text-4xl font-black text-white/10 mb-4 font-montserrat group-hover:text-teal-500/20 transition-colors">14001</div>
                <h3 className="text-lg font-bold text-white font-montserrat mb-2">Environmental Management</h3>
                <div className="h-px w-10 bg-teal-500 mb-4"></div>
                <p className="text-slate-300 text-base font-inter">Aligns our operations with your ESG and sustainability goals through efficient fleet and resource management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Martin Miles */}
      <section className="w-full max-w-[1200px] mx-auto px-4 py-24 relative z-10">
        <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 p-8 md:p-12 gap-10 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] rounded-xl bg-black relative overflow-hidden g7-brighten-on-hover group border border-white/10">
                <Image
                  src="/images/martin-miles-ceo.webp"
                  alt="Martin Miles CEO"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-20">
                  <h3 className="text-2xl font-bold text-white font-montserrat">Martin Miles</h3>
                  <p className="text-blue-400 text-xs font-bold tracking-widest uppercase font-mono-sys">CEO &amp; GENERAL MANAGER</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <span className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-4 block font-mono-sys">[EXECUTIVE.LEADERSHIP]</span>
              <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-white tracking-tight mb-8">A Model of Total Accountability.</h2>

              <div className="space-y-6 text-slate-300 font-inter leading-relaxed">
                <p>
                  With extensive leadership in the security industry dating back to our founding in 1999, Martin has steered Group 7 Security towards a model of total accountability and stability.
                </p>
                <p>
                  Under his guidance, the company has integrated rigorous compliance standards with transparency tools like GPS-verified patrols, ensuring clients have complete visibility over their assets without the guesswork.
                </p>
              </div>

              <div className="mt-10 relative pl-8 border-l-2 border-blue-500/50 italic text-lg text-slate-200 font-light font-inter">
                &quot;Security is not about selling fear. It&apos;s about building systems that allow businesses to focus on what they do best—knowing their people and assets are protected.&quot;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Operational Edge Section */}
      <section className="w-full border-t border-white/5 bg-[#050A14] py-24">
        <div className="w-full max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-semibold text-white tracking-tight mb-4">Our Operational Edge</h2>
            <p className="text-slate-300 font-inter">Transparency Meets Reliability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-900/20 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] ring-1 ring-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 font-montserrat">GPS-Verified Accountability</h3>
              <p className="text-slate-300 text-base max-w-xs leading-relaxed">We provided digital proof of presence long before it was the industry standard.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-900/20 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] ring-1 ring-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 font-montserrat">Real-Time Reporting</h3>
              <p className="text-slate-300 text-base max-w-xs leading-relaxed">Clients see what we see, the moment it happens. Transparency is our default setting.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-900/20 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] ring-1 ring-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                  <rect width="6" height="6" x="9" y="9" rx="1"></rect>
                  <path d="M15 2v2"></path>
                  <path d="M15 20v2"></path>
                  <path d="M2 15h2"></path>
                  <path d="M2 9h2"></path>
                  <path d="M20 15h2"></path>
                  <path d="M20 9h2"></path>
                  <path d="M9 2v2"></path>
                  <path d="M9 20v2"></path>
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 font-montserrat">Integrated Systems</h3>
              <p className="text-slate-300 text-base max-w-xs leading-relaxed">We bridge the gap between physical guards and electronic access control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-white mb-8 tracking-tight">Partner with a Stable Provider.</h2>
          <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-mono font-bold text-white transition-all duration-300 bg-red-600 rounded-lg hover:bg-red-700 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.6)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900">
            <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative text-xs tracking-widest uppercase flex items-center gap-3">
              CONTACT MANAGEMENT
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}

