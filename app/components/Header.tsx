'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="z-50 flex animate-fade-in-up w-full px-4 absolute top-6 right-0 left-0 justify-center">
      <nav className="nav-glass relative flex bg-white/95 w-full max-w-[950px] border-white/20 border rounded-full p-2 items-center justify-between shadow-lg shadow-blue-900/5">
        {/* Logo */}
        <Link href="/" className="group flex gap-2 items-center shrink-0 pl-2 z-10" aria-label="Group 7 Security Home">
          <div className="relative h-7 md:h-9 w-auto flex items-center justify-center">
            <Image
              src="/images/logo.webp"
              alt="Group 7 Security"
              width={150}
              height={36}
              className="object-contain h-7 md:h-9 w-auto"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2 z-10">
          <Link href="/corporate" className={`text-xs font-bold hover:text-red-600 transition-colors font-mono-sys uppercase tracking-wide ${pathname === '/corporate' ? 'text-red-600' : 'text-[#0a2e5c]'}`}>
            Corporate
          </Link>
          <Link href="/business" className={`text-xs font-bold hover:text-red-600 transition-colors font-mono-sys uppercase tracking-wide ${pathname === '/business' ? 'text-red-600' : 'text-[#0a2e5c]'}`}>
            Business
          </Link>
          <Link href="/services" className={`text-xs font-bold hover:text-red-600 transition-colors font-mono-sys uppercase tracking-wide ${pathname === '/services' ? 'text-red-600' : 'text-[#0a2e5c]'}`}>
            Services
          </Link>
          <Link href="/about" className={`text-xs font-bold hover:text-red-600 transition-colors font-mono-sys uppercase tracking-wide ${pathname === '/about' ? 'text-red-600' : 'text-[#0a2e5c]'}`}>
            About
          </Link>
          <Link href="/contact" className={`text-xs font-bold hover:text-red-600 transition-colors font-mono-sys uppercase tracking-wide ${pathname === '/contact' ? 'text-red-600' : 'text-[#0a2e5c]'}`}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={mobileMenuButtonRef}
          id="mobile-menu-btn"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
          className="lg:hidden absolute left-1/2 -translate-x-1/2 text-[#0a2e5c] p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M4 5h16"></path>
            <path d="M4 12h16"></path>
            <path d="M4 19h16"></path>
          </svg>
        </button>

        {/* 24/7 Call Button */}
        <div className="flex items-center gap-3 shrink-0 z-10">
          <a
            href="tel:+61294025389"
            className="group relative inline-flex items-center justify-center overflow-hidden font-mono font-bold text-white transition-all duration-300 bg-red-600 rounded-lg hover:bg-red-700 hover:shadow-[0_0_20px_-5px_rgba(220,38,38,0.6)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Mobile: Icon only */}
            <span className="relative p-2.5 md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </span>
            {/* Desktop: Icon + Text */}
            <span className="relative px-5 py-2 hidden md:flex items-center gap-2 text-[10px] sm:text-xs tracking-widest uppercase">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              (02) 9402 5389
            </span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className="absolute top-16 bg-white w-[90%] max-w-[400px] rounded-2xl shadow-xl p-6 flex flex-col gap-4 border border-slate-100 lg:hidden origin-top animate-fade-in-up z-50"
        >
          <Link 
            href="/" 
            className={`text-base font-semibold py-3 px-2 border-b border-slate-100 font-mono-sys transition-colors ${pathname === '/' ? 'text-red-600' : 'text-[#0a2e5c]'}`} 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/corporate" 
            className={`text-base font-semibold py-3 px-2 border-b border-slate-100 font-mono-sys transition-colors ${pathname === '/corporate' ? 'text-red-600' : 'text-[#0a2e5c]'}`} 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Corporate
          </Link>
          <Link 
            href="/business" 
            className={`text-base font-semibold py-3 px-2 border-b border-slate-100 font-mono-sys transition-colors ${pathname === '/business' ? 'text-red-600' : 'text-[#0a2e5c]'}`} 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Business
          </Link>
          <Link 
            href="/services" 
            className={`text-base font-semibold py-3 px-2 border-b border-slate-100 font-mono-sys transition-colors ${pathname === '/services' ? 'text-red-600' : 'text-[#0a2e5c]'}`} 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/about" 
            className={`text-base font-semibold py-3 px-2 border-b border-slate-100 font-mono-sys transition-colors ${pathname === '/about' ? 'text-red-600' : 'text-[#0a2e5c]'}`} 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`text-base font-semibold py-3 px-2 font-mono-sys transition-colors ${pathname === '/contact' ? 'text-red-600' : 'text-[#0a2e5c]'}`} 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

