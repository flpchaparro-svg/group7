import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-900 pt-24 pb-12 font-inter relative overflow-hidden z-20 rounded-t-[2.5rem] -mt-10 border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          {/* Left Column - Logo and Info */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            <div className="flex items-center gap-2.5 mb-8">
              <Image 
                src="/images/logo.webp" 
                width={60} 
                height={60} 
                alt="Group 7 Logo"
                className="drop-shadow-sm"
              />
              <span className="text-xl font-bold font-montserrat tracking-tight text-slate-900">G7 SECURITY</span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm font-light">
              Sydney&apos;s most accountable protection. We design security strategies that move businesses forward safely. Licensed, certified, and proven.
            </p>

            <div className="flex flex-col gap-2 mb-10 text-slate-600 text-sm">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>749-757 Bourke St, Redfern NSW 2016</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>info@group7security.com.au</span>
              </div>
            </div>

            <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-mono font-bold text-white transition-all duration-300 bg-red-600 rounded-lg hover:bg-red-700 hover:shadow-[0_0_20px_-5px_rgba(220,38,38,0.6)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 w-full sm:w-auto">
              <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-xs tracking-widest uppercase flex items-center gap-3">
                Contact Us for a Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="m22 2-7 20-4-9-9-4Z"></path>
                  <path d="M22 2 11 13"></path>
                </svg>
              </span>
            </Link>
          </div>

          {/* Right Column - Links */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6">
            {/* Quick Links */}
            <div className="flex flex-col gap-5">
              <h4 className="font-montserrat font-semibold text-slate-900 text-[15px] tracking-tight">Quick Links</h4>
              <ul className="space-y-3.5">
                <li>
                  <Link href="/" className="text-[13px] text-slate-500 hover:text-red-600 transition-colors font-mono-sys">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/corporate" className="text-[13px] text-slate-500 hover:text-red-600 transition-colors font-mono-sys">
                    Corporate Security Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/business" className="text-[13px] text-slate-500 hover:text-red-600 transition-colors font-mono-sys">
                    Business Protection
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-[13px] text-slate-500 hover:text-red-600 transition-colors font-mono-sys">
                    Mobile Patrols
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-[13px] text-slate-500 hover:text-red-600 transition-colors font-mono-sys">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[13px] text-slate-500 hover:text-red-600 transition-colors font-mono-sys">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Industries */}
            <div className="flex flex-col gap-5">
              <h4 className="font-montserrat font-semibold text-slate-900 text-[15px] tracking-tight">Industries</h4>
              <ul className="space-y-3.5">
                <li>
                  <span className="text-[13px] text-slate-400 font-mono-sys">
                    Construction Sites
                  </span>
                </li>
                <li>
                  <span className="text-[13px] text-slate-400 font-mono-sys">
                    Retail &amp; Loss Prevention
                  </span>
                </li>
                <li>
                  <span className="text-[13px] text-slate-400 font-mono-sys">
                    Strata &amp; Residential
                  </span>
                </li>
              </ul>
            </div>

            {/* Trust & Compliance */}
            <div className="flex flex-col gap-5">
              <h4 className="font-montserrat font-semibold text-slate-900 text-[15px] tracking-tight">Trust &amp; Compliance</h4>
              <ul className="space-y-3.5">
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check text-green-600">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-[13px] text-slate-500 font-mono-sys">NSW Master Licence</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-badge text-slate-400 mt-0.5">
                    <path d="M12 15h.01"></path>
                    <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M2 15a5 5 0 0 1 10 0v2.5"></path>
                    <path d="M7 15v7"></path>
                  </svg>
                  <span className="text-[13px] text-slate-500 font-mono-sys">ISO 9001 | 45001 | 14001</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-200 w-full mb-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
            <p className="text-[11px] text-slate-500 font-medium">© 2025 Group 7 Security Pty Ltd</p>
            <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full"></div>
            <a href="tel:+61294025389" className="text-[11px] text-slate-600 font-semibold tracking-wide">
              24/7 Emergency: (02) 9402 5389
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            <a href="https://www.facebook.com/profile.php?id=61584913757360" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center hover:bg-slate-200 hover:text-red-600 text-slate-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/martin-miles-290473356/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center hover:bg-slate-200 hover:text-blue-700 text-slate-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


