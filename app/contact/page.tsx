'use client';

import Image from 'next/image';

export default function ContactPage() {
  // Auto-capitalize name and company fields
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\b\w/g, (c) => c.toUpperCase());
    e.target.value = value;
  };

  // Filter phone input to only allow numbers, plus, and spaces
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9+\s]/g, '');
    e.target.value = value;
  };

  // Filter postcode input to only allow numbers and limit to 4 digits
  const handlePostcodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
    e.target.value = value;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[50dvh] flex flex-col items-center justify-center text-center px-4 pt-24 md:pt-36 pb-12">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/contact-hero-bg.webp"
            alt="Contact Background"
            fill
            priority
            className="object-cover"
          />
          <div className="bg-gradient-to-b from-[#0f1e3c]/30 via-[#0f1e3c]/60 to-[#0f1e3c] absolute top-0 right-0 bottom-0 left-0 z-10"></div>
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}
          ></div>
          <div 
            className="absolute inset-0 opacity-10 mix-blend-overlay z-10"
            style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
          ></div>
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[80px] pointer-events-none"></div>
        </div>

        <div className="flex flex-col z-10 w-full max-w-4xl mx-auto relative items-center justify-center">
          <span className="mb-4 inline-flex items-center justify-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md animate-fade-in-up">
            <span className="text-[10px] font-bold text-blue-300 tracking-widest uppercase font-mono-sys">[CHANNEL.SECURE] 24/7 COMMAND</span>
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter font-montserrat mb-6 drop-shadow-2xl animate-decrypt delay-100 text-balance">
            Secure Your Site. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Protect Your Liability.</span>
          </h1>

          <p className="font-inter font-light text-base md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-6 animate-fade-in-up delay-200 antialiased text-balance">
            Whether you need an urgent patrol tonight or a long-term corporate partner, we mobilise immediately to mitigate your risk.
          </p>
        </div>
      </section>

      {/* Two Forms Section */}
      <section className="w-full max-w-[1200px] mx-auto px-4 relative z-10 mt-6 md:-mt-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Corporate Risk Solutions Form */}
          <div className="premium-hover-card relative rounded-2xl bg-[#0f172a] border border-blue-500/30 p-6 md:p-10 shadow-2xl animate-fade-in-up delay-200">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent rounded-2xl pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-2.5 rounded-lg bg-blue-900/20 text-blue-400 border border-blue-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                  <path d="M10 6h4"></path>
                  <path d="M10 10h4"></path>
                  <path d="M10 14h4"></path>
                  <path d="M10 18h4"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-montserrat font-semibold text-white tracking-tight">Corporate Risk Solutions</h2>
                <p className="text-xs text-slate-400 font-mono-sys mt-1 uppercase tracking-wide">For Facility Managers &amp; Enterprise</p>
              </div>
            </div>

            <form action="/contact-handler.php" method="POST" className="space-y-4 relative z-10">
                <input type="hidden" name="lead_source" value="corporate_liability_angle" />
                <input type="hidden" name="inquiry_type" value="Corporate Inquiry" />

                <div className="space-y-1.5">
                  <label htmlFor="corp-email" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Work Email *</label>
                  <input 
                    id="corp-email" 
                    name="corp-email" 
                    type="email" 
                    required 
                    placeholder="NAME@COMPANY.COM" 
                    className="custom-input w-full rounded-md px-3 py-3 text-base border-l-4 border-l-blue-500 focus:ring-0"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="corp-name" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Name</label>
                    <input 
                      id="corp-name" 
                      name="corp-name" 
                      type="text" 
                      placeholder="FULL NAME" 
                      onChange={handleNameChange}
                      className="custom-input w-full rounded-md px-3 py-3 text-sm" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="corp-phone" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Phone (For verification)</label>
                    <input 
                      id="corp-phone" 
                      name="corp-phone" 
                      type="tel" 
                      placeholder="0400..." 
                      onChange={handlePhoneChange}
                      className="custom-input w-full rounded-md px-3 py-3 text-sm" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="corp-message" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Tell us what keeps you up at night *</label>
                  <textarea 
                    id="corp-message" 
                    name="corp-message" 
                    required 
                    rows={2} 
                    placeholder="e.g. COMPLIANCE AUDIT, GATEHOUSE SECURITY, ALARM RESPONSE..." 
                    className="custom-input w-full rounded-md px-3 py-3 text-sm resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="group relative w-full flex items-center justify-center px-8 py-4 overflow-hidden font-mono font-bold text-white transition-all duration-300 bg-red-600 rounded-lg hover:bg-red-700 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.6)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 mt-4">
                  <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-xs tracking-widest uppercase flex items-center gap-3">
                    REQUEST RISK AUDIT
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      <path d="M12 8v4"></path>
                      <path d="M12 16h.01"></path>
                    </svg>
                  </span>
                </button>
                <p className="text-[9px] text-center text-slate-400 font-mono-sys mt-3 uppercase tracking-wider">
                  Strict Client Confidentiality Guaranteed
                </p>

                <div className="flex items-center justify-center gap-3 pt-3 opacity-60">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-[10px] text-slate-400 font-mono-sys">ISO 27001 Data Privacy</span>
                  </div>
                  <div className="w-px h-3 bg-slate-700"></div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <span className="text-[10px] text-slate-400 font-mono-sys">256-bit Encrypted</span>
                  </div>
                </div>
              </form>
          </div>

          {/* Rapid Business Quote Form */}
          <div className="premium-hover-card relative rounded-2xl bg-[#0f172a] border border-white/5 p-6 md:p-10 shadow-2xl animate-fade-in-up delay-300">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-transparent rounded-2xl pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-2.5 rounded-lg bg-indigo-900/20 text-indigo-400 border border-indigo-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-montserrat font-semibold text-white tracking-tight">Rapid Business Quote</h2>
                <p className="text-xs text-slate-400 font-mono-sys mt-1 uppercase tracking-wide">For Mobile Patrols, Alarms &amp; Static Guards</p>
              </div>
            </div>

            <form action="/contact-handler.php" method="POST" className="space-y-4 relative z-10">
                <input type="hidden" name="inquiry_type" value="Business Inquiry" />
                <div className="space-y-1.5">
                  <label htmlFor="sme-name" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Name *</label>
                  <input 
                    id="sme-name" 
                    name="sme-name" 
                    type="text" 
                    required 
                    placeholder="YOUR NAME" 
                    onChange={handleNameChange}
                    className="custom-input w-full rounded-md px-3 py-2.5 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="sme-business" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Business Name *</label>
                  <input 
                    id="sme-business" 
                    name="sme-business" 
                    type="text" 
                    required 
                    placeholder="YOUR BUSINESS" 
                    onChange={handleNameChange}
                    className="custom-input w-full rounded-md px-3 py-2.5 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="sme-email" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Email *</label>
                  <input 
                    id="sme-email" 
                    name="sme-email" 
                    type="email" 
                    required 
                    placeholder="YOUR@EMAIL.COM" 
                    className="custom-input w-full rounded-md px-3 py-2.5 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="sme-phone" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Best number for callback *</label>
                    <input 
                      id="sme-phone" 
                      name="sme-phone" 
                      type="tel" 
                      required 
                      placeholder="MOBILE NUMBER" 
                      onChange={handlePhoneChange}
                      className="custom-input w-full rounded-md px-3 py-2.5 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="sme-postcode" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Postcode *</label>
                    <input 
                      id="sme-postcode" 
                      name="sme-postcode" 
                      type="text" 
                      inputMode="numeric"
                      pattern="[0-9]*"
                      required 
                      placeholder="e.g. 2000" 
                      onChange={handlePostcodeChange}
                      className="custom-input w-full rounded-md px-3 py-2.5 text-sm"
                    />
                  </div>
                </div>

              <div className="space-y-1.5">
                <label htmlFor="sme-service" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Service Needed</label>
                <div className="relative">
                  <select id="sme-service" name="sme-service" className="custom-input custom-select w-full rounded-md px-3 py-2.5 text-sm text-slate-300">
                    <option value="" disabled>WHAT DO YOU NEED PROTECTED?</option>
                    <option value="Mobile Patrols">Mobile Patrols</option>
                    <option value="Alarm Monitoring">Alarm Monitoring</option>
                    <option value="Store Security Guard">Store Security Guard</option>
                    <option value="Warehouse Protection">Warehouse Protection</option>
                  </select>
                </div>
              </div>

              <label htmlFor="sme-urgent" className="flex items-center gap-3 cursor-pointer custom-checkbox py-2 group">
                <input id="sme-urgent" name="sme-urgent" type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 border border-slate-600 rounded bg-slate-900/50 flex items-center justify-center transition-colors group-hover:border-red-500 peer-checked:bg-red-600 peer-checked:border-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="hidden peer-checked:block text-white">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-sm text-slate-400 font-bold font-mono-sys group-hover:text-red-300 transition-colors uppercase peer-checked:text-red-500 peer-checked:animate-pulse">This is an urgent emergency</span>
              </label>

              <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-md p-3 mb-2">
                <p className="text-[10px] text-indigo-300 leading-tight font-mono-sys">Fast-Track Pricing: Ideal for warehouses, retail, and strata. We typically respond with a proposal same-day.</p>
              </div>

                <button type="submit" className="group relative w-full flex items-center justify-center px-8 py-4 overflow-hidden font-mono font-bold text-white transition-all duration-300 bg-red-600 rounded-lg hover:bg-red-700 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.6)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 mt-4">
                  <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-xs tracking-widest uppercase flex items-center gap-3">
                    GET QUOTE NOW
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </button>
                <p className="text-[9px] text-center text-slate-400 font-mono-sys mt-3 uppercase tracking-wider">
                  No Lock-in Contracts. 100% Australian Owned.
                </p>
              </form>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="w-full max-w-[1200px] mx-auto px-4 mb-20">
        <div className="rounded-xl border border-red-500/30 bg-gradient-to-r from-red-950/40 to-slate-900/40 p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group">
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] animate-pulse"></div>

          <div className="flex items-start gap-5 relative z-10 max-w-2xl">
            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 18v-6a5 5 0 1 1 10 0v6"></path>
                <path d="M5 21a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1H5v-1Z"></path>
                <path d="M21 12h1"></path>
                <path d="M18.5 4.5 18 5"></path>
                <path d="M2 12h1"></path>
                <path d="M12 2v1"></path>
                <path d="m4.929 4.929.707.707"></path>
                <path d="M12 12v6"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-white mb-2">Active Threat or Alarm?</h3>
              <p className="text-slate-300 font-inter text-sm mb-4">Don&apos;t email. Call our 24/7 Operations Centre immediately for alarm activations, incidents in progress, or emergency guard dispatch.</p>
              <div className="flex flex-wrap gap-2 text-[10px] text-red-300 uppercase font-bold tracking-wider font-mono-sys">
                <span className="bg-red-900/30 px-2 py-1 rounded border border-red-500/20">[PRIORITY_HIGH]</span>
                <span className="bg-red-900/30 px-2 py-1 rounded border border-red-500/20">RAPID RESPONSE</span>
              </div>
            </div>
          </div>

          <a href="tel:+61294025389" className="group relative z-10 flex flex-col items-center justify-center bg-red-600 rounded-xl px-8 py-4 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] hover:-translate-y-1 min-w-[200px] text-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full rounded-xl opacity-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="text-xs text-white/90 uppercase tracking-widest opacity-80 mb-1 font-mono-sys relative">CALL 24/7 OPS</span>
            <span className="text-2xl font-bold font-montserrat text-white relative">(02) 9402 5389</span>
          </a>
        </div>
      </section>

      {/* Office & Service Area + FAQ Section */}
      <section className="w-full max-w-[1200px] mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-lg font-montserrat font-semibold text-white mb-6 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Office &amp; Service Area
              </h3>
              <div className="premium-hover-card bg-[#0f172a] border border-white/5 rounded-xl p-6 space-y-6">
                <div className="relative z-10">
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wide font-bold mb-2 block font-mono-sys">[HQ.LOCATION]</span>
                    <p className="text-sm text-slate-300 font-inter">749-757 Bourke St,Redfern NSW 2016</p>
                  </div>
                  <div className="h-px bg-white/5 w-full my-6"></div>
                  <div>
                    <span className="text-xs text-blue-500 uppercase tracking-wide font-bold mb-2 block font-mono-sys">[CORPORATE.REACH]</span>
                    <p className="text-slate-300 text-sm font-inter mb-6">Greater Sydney &amp; Regional NSW (Project Based)</p>

                    <span className="text-xs text-red-500 uppercase tracking-wide font-bold mb-2 block font-mono-sys">[RAPID.PATROL.ZONES]</span>
                    <ul className="text-slate-400 text-sm space-y-1 font-inter list-disc pl-4 marker:text-red-500">
                      <li>Western Sydney Hub</li>
                      <li>Inner West &amp; CBD</li>
                      <li>North Shore</li>
                      <li>South West</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-900/50 border border-slate-800 rounded-lg p-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <div>
                <p className="text-sm text-white font-medium">NSW Master Security Licence</p>
                <p className="text-xs text-slate-500 font-mono-sys">Class 1 &amp; 2 (Fully Accredited)</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-lg font-montserrat font-semibold text-white mb-6 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
              Common Questions
            </h3>

            <div className="space-y-4">
              <details className="premium-hover-card group bg-[#0f172a] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:border-blue-500/30">
                <summary className="relative z-10 flex items-center justify-between p-5 cursor-pointer hover:bg-white/5 transition-colors">
                  <span className="text-base font-bold text-white font-montserrat">What areas do you currently service?</span>
                  <span className="text-slate-500 transition-transform duration-300 group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="relative z-10 px-5 pb-5 text-base text-slate-300 font-inter leading-relaxed space-y-3">
                  <p>We structure our coverage based on the service intensity required:</p>
                  <p><strong className="text-white">For Mobile Patrols (Speed-Critical):</strong> We strictly geofence our vehicles to Metro Sydney Zones (CBD, Inner West, Western Sydney). We do this for one reason: Response Time. By limiting the territory each car covers, we ensure a vehicle is always minutes away from your business when an alarm triggers.</p>
                  <p><strong className="text-white">For Enterprise &amp; Government (NSW-Wide):</strong> For clients requiring permanent on-site manpower, we operate everywhere in New South Wales.</p>
                  <p><strong className="text-white">Centralised Oversight:</strong> Whether our officers are patrolling Parramatta or stationed in regional NSW, they are connected 24/7 to our Redfern Command Centre. We monitor their movements, safety, and KPIs in real-time.</p>
                </div>
              </details>

              <details className="premium-hover-card group bg-[#0f172a] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:border-blue-500/30">
                <summary className="relative z-10 flex items-center justify-between p-5 cursor-pointer hover:bg-white/5 transition-colors">
                  <span className="text-base font-bold text-white font-montserrat">How fast can you respond to an alarm or incident?</span>
                  <span className="text-slate-500 transition-transform duration-300 group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="relative z-10 px-5 pb-5 text-base text-slate-300 font-inter leading-relaxed">
                  We do not rely on random patrols. We operate Geofenced Response Zones. Because our vehicles are GPS-tracked and restricted to specific territories (CBD, Western Sydney, North Shore), we maintain an average response time well below the industry standard. For high-risk corporate assets, we can also provide dedicated on-site static guards for immediate reaction.
                </div>
              </details>

              <details className="premium-hover-card group bg-[#0f172a] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:border-blue-500/30">
                <summary className="relative z-10 flex items-center justify-between p-5 cursor-pointer hover:bg-white/5 transition-colors">
                  <span className="text-base font-bold text-white font-montserrat">What level of liability coverage do you hold?</span>
                  <span className="text-slate-500 transition-transform duration-300 group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="relative z-10 px-5 pb-5 text-base text-slate-300 font-inter leading-relaxed">
                  We hold a $20,000,000 Public Liability Insurance policy, significantly higher than the standard $10M held by most security firms. This ensures your organization is fully protected against litigation, property damage, and third-party claims. Our Certificates of Currency are available for immediate download upon request.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Call Button */}
      <a
        href="tel:+61294025389"
        className="fixed bottom-4 left-4 right-4 z-50 block md:hidden bg-red-600 text-white font-bold uppercase shadow-lg rounded-xl px-6 py-4 text-center font-mono-sys text-sm tracking-widest animate-fade-in-up hover:bg-red-700 transition-colors"
      >
        <div className="flex items-center justify-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>EMERGENCY CALL: (02) 9402 5389</span>
        </div>
      </a>
    </>
  );
}
