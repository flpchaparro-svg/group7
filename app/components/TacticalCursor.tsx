'use client';

import { useEffect, useRef } from 'react';

export default function TacticalCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;

      // Direct instant positioning - no lag, no smoothing
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.interactive');

      // Update colors and scale instantly
      if (dotRef.current && ringRef.current) {
        if (isInteractive) {
          // Hover state: Red and scale up
          dotRef.current.classList.remove('bg-white');
          dotRef.current.classList.add('bg-red-600');
          ringRef.current.classList.remove('border-white');
          ringRef.current.classList.add('border-red-600');
          ringRef.current.style.transform = 'translate(-50%, -50%) scale(1.2)';
        } else {
          // Default state: White and normal size
          dotRef.current.classList.remove('bg-red-600');
          dotRef.current.classList.add('bg-white');
          ringRef.current.classList.remove('border-red-600');
          ringRef.current.classList.add('border-white');
          ringRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[2147483647] hidden lg:block"
      style={{
        transform: 'translate(0, 0)',
      }}
    >
      {/* Ring - Thicker border, 32px size with shadow for visibility */}
      <div
        ref={ringRef}
        className="absolute w-8 h-8 border-2 border-white rounded-full pointer-events-none shadow-[0_0_4px_rgba(0,0,0,0.8)]"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Dot - Centered inside ring with shadow for visibility */}
      <div
        ref={dotRef}
        className="absolute w-2 h-2 bg-white rounded-full pointer-events-none shadow-[0_0_4px_rgba(0,0,0,0.8)]"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}
