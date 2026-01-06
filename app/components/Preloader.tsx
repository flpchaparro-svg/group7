'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Fade out after 1.5 seconds or when window loads
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Remove from DOM after fade-out animation completes
      setTimeout(() => {
        setShouldRender(false);
      }, 1000);
    }, 1500);

    // Also hide when window is fully loaded
    const handleLoad = () => {
      setIsVisible(false);
      setTimeout(() => {
        setShouldRender(false);
      }, 1000);
    };

    if (typeof window !== 'undefined' && document.readyState === 'complete') {
      setIsVisible(false);
      setTimeout(() => {
        setShouldRender(false);
      }, 1000);
    } else if (typeof window !== 'undefined') {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', handleLoad);
      }
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#050a14] flex flex-col items-center justify-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Smaller Red Pulsing Dot */}
      <div className="relative mb-4">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-full animate-pulse shadow-[0_0_20px_rgba(220,38,38,0.5)]"></div>
        <div className="absolute inset-0 w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-full animate-ping opacity-75"></div>
      </div>

      {/* Loading Text - Small Technical Font */}
      <p className="text-slate-300 font-mono text-xs md:text-sm tracking-widest uppercase font-mono-sys">
        SYSTEM LOADING
      </p>
    </div>
  );
}

