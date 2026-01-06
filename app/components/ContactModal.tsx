'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useModal } from '../context/ModalContext';

export default function ContactModal() {
  const { isOpen, inquiryType, closeModal } = useModal();
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Auto-capitalize name and company fields
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\b\w/g, (c) => c.toUpperCase());
    e.target.value = value;
    // Clear error when user starts typing
    if (fieldErrors[e.target.name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };

  // Filter phone input to only allow numbers, plus, and spaces
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9+\s]/g, '');
    e.target.value = value;
    // Clear error when user starts typing
    if (fieldErrors[e.target.name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };

  // Filter postcode input to only allow numbers and limit to 4 digits
  const handlePostcodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
    e.target.value = value;
    // Clear error when user starts typing
    if (fieldErrors[e.target.name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };

  // Validation functions
  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const digitsOnly = phone.replace(/[^0-9]/g, '');
    return digitsOnly.length >= 8;
  };

  const validatePostcode = (postcode: string): boolean => {
    const digitsOnly = postcode.replace(/[^0-9]/g, '');
    return digitsOnly.length === 4;
  };

  const validateForm = (formData: FormData, formType: 'corporate' | 'business' | 'general'): boolean => {
    const errors: Record<string, string> = {};

    if (formType === 'corporate') {
      const email = formData.get('corp-email') as string;
      const message = formData.get('corp-message') as string;

      if (!email || !validateEmail(email)) {
        errors['corp-email'] = 'Please enter a valid email address';
      }
      if (!message || message.trim() === '') {
        errors['corp-message'] = 'This field is required';
      }
    } else {
      const name = formData.get('sme-name') as string;
      const email = formData.get('sme-email') as string;
      const business = formData.get('sme-business') as string;
      const phone = formData.get('sme-phone') as string;
      const postcode = formData.get('sme-postcode') as string;

      if (!name || name.trim() === '') {
        errors['sme-name'] = 'This field is required';
      }
      if (!email || !validateEmail(email)) {
        errors['sme-email'] = 'Please enter a valid email address';
      }
      if (!business || business.trim() === '') {
        errors['sme-business'] = 'This field is required';
      }
      if (!phone || !validatePhone(phone)) {
        errors['sme-phone'] = 'Please enter a valid phone number (at least 8 digits)';
      }
      if (!postcode || !validatePostcode(postcode)) {
        errors['sme-postcode'] = 'Please enter a valid 4-digit postcode';
      }
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeModal]);

  // Reset form state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setFieldErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCorporateSubmit = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    
    // Validate before submitting
    if (!validateForm(formData, 'corporate')) {
      e.preventDefault(); // Stop only if errors exist
      return;
    }
    // If valid, let the browser POST to PHP automatically
  };

  const handleBusinessSubmit = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    
    // Validate before submitting
    if (!validateForm(formData, 'business')) {
      e.preventDefault(); // Stop only if errors exist
      return;
    }
    // If valid, let the browser POST to PHP automatically
  };

  const handleGeneralSubmit = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    
    // Validate before submitting
    if (!validateForm(formData, 'general')) {
      e.preventDefault(); // Stop only if errors exist
      return;
    }
    // If valid, let the browser POST to PHP automatically
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={closeModal}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal Container */}
      <div
        className="relative z-10 w-[95%] sm:w-full max-w-lg max-h-[90vh] bg-[#050a14] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 sticky top-0 bg-[#050a14] z-20">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-montserrat font-semibold text-white">
              {inquiryType === 'corporate' ? 'Corporate Security Audit' : inquiryType === 'sme' ? 'Get Business Quote' : 'Request a Quote'}
            </h2>
            <button
              onClick={closeModal}
              className="text-slate-400 hover:text-white transition-colors p-4 -mr-4 -mt-4 hover:bg-white/5 rounded-lg touch-manipulation"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {inquiryType === 'corporate' ? (
            /* Corporate Risk Solutions Form */
            <div className="relative rounded-2xl bg-[#0f172a] border border-blue-500/30 p-6 shadow-2xl">
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
                  <h3 className="text-xl font-montserrat font-semibold text-white tracking-tight">Corporate Risk Solutions</h3>
                  <p className="text-xs text-slate-400 font-mono-sys mt-1 uppercase tracking-wide">For Facility Managers &amp; Enterprise</p>
                </div>
              </div>

              <form onSubmit={handleCorporateSubmit} action="/contact-handler.php" method="POST" className="space-y-4 relative z-10">
                <input type="hidden" name="lead_source" value="corporate_liability_angle" />
                <input type="hidden" name="inquiry_type" value="Corporate Inquiry" />

                <div className="space-y-1.5">
                  <label htmlFor="modal-corp-email" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Work Email *</label>
                  <input 
                    id="modal-corp-email" 
                    name="corp-email" 
                    type="email" 
                    required 
                    placeholder="NAME@COMPANY.COM" 
                    className={`custom-input w-full rounded-md px-3 py-3 text-base border-l-4 focus:ring-0 ${fieldErrors['corp-email'] ? 'border-l-red-500 border-red-500/50' : 'border-l-blue-500'}`}
                  />
                  {fieldErrors['corp-email'] && (
                    <p className="text-xs text-red-400 font-mono-sys">{fieldErrors['corp-email']}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="modal-corp-name" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Name</label>
                    <input 
                      id="modal-corp-name" 
                      name="corp-name" 
                      type="text" 
                      placeholder="FULL NAME" 
                      onChange={handleNameChange}
                      className="custom-input w-full rounded-md px-3 py-3 text-sm" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="modal-corp-phone" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Phone (For verification)</label>
                    <input 
                      id="modal-corp-phone" 
                      name="corp-phone" 
                      type="tel" 
                      placeholder="0400..." 
                      onChange={handlePhoneChange}
                      className="custom-input w-full rounded-md px-3 py-3 text-sm" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="modal-corp-message" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Tell us what keeps you up at night *</label>
                  <textarea 
                    id="modal-corp-message" 
                    name="corp-message" 
                    required 
                    rows={2} 
                    placeholder="e.g. COMPLIANCE AUDIT, GATEHOUSE SECURITY, ALARM RESPONSE..." 
                    className={`custom-input w-full rounded-md px-3 py-3 text-sm resize-none ${fieldErrors['corp-message'] ? 'border-red-500/50' : ''}`}
                  ></textarea>
                  {fieldErrors['corp-message'] && (
                    <p className="text-xs text-red-400 font-mono-sys">{fieldErrors['corp-message']}</p>
                  )}
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
          ) : inquiryType === 'sme' || inquiryType === 'general' ? (
            /* Rapid Business Quote Form */
            <div className="relative rounded-2xl bg-[#0f172a] border border-white/5 p-6 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-transparent rounded-2xl pointer-events-none"></div>

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2.5 rounded-lg bg-indigo-900/20 text-indigo-400 border border-indigo-500/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-semibold text-white tracking-tight">Rapid Business Quote</h3>
                  <p className="text-xs text-slate-400 font-mono-sys mt-1 uppercase tracking-wide">For Mobile Patrols, Alarms &amp; Static Guards</p>
                </div>
              </div>

              <form onSubmit={inquiryType === 'sme' ? handleBusinessSubmit : handleGeneralSubmit} action="/contact-handler.php" method="POST" className="space-y-4 relative z-10">
                <input type="hidden" name="inquiry_type" value="Business Inquiry" />

                <div className="space-y-1.5">
                  <label htmlFor="modal-sme-name" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Name *</label>
                  <input 
                    id="modal-sme-name" 
                    name="sme-name" 
                    type="text" 
                    required 
                    placeholder="YOUR NAME" 
                    onChange={handleNameChange}
                    className={`custom-input w-full rounded-md px-3 py-2.5 text-sm ${fieldErrors['sme-name'] ? 'border-red-500/50' : ''}`}
                  />
                  {fieldErrors['sme-name'] && (
                    <p className="text-xs text-red-400 font-mono-sys">{fieldErrors['sme-name']}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="modal-sme-business" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Business Name *</label>
                  <input 
                    id="modal-sme-business" 
                    name="sme-business" 
                    type="text" 
                    required 
                    placeholder="YOUR BUSINESS" 
                    onChange={handleNameChange}
                    className={`custom-input w-full rounded-md px-3 py-2.5 text-sm ${fieldErrors['sme-business'] ? 'border-red-500/50' : ''}`}
                  />
                  {fieldErrors['sme-business'] && (
                    <p className="text-xs text-red-400 font-mono-sys">{fieldErrors['sme-business']}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="modal-sme-email" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Email *</label>
                  <input 
                    id="modal-sme-email" 
                    name="sme-email" 
                    type="email" 
                    required 
                    placeholder="YOUR@EMAIL.COM" 
                    className={`custom-input w-full rounded-md px-3 py-2.5 text-sm ${fieldErrors['sme-email'] ? 'border-red-500/50' : ''}`}
                  />
                  {fieldErrors['sme-email'] && (
                    <p className="text-xs text-red-400 font-mono-sys">{fieldErrors['sme-email']}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="modal-sme-phone" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Best number for callback *</label>
                    <input 
                      id="modal-sme-phone" 
                      name="sme-phone" 
                      type="tel" 
                      required 
                      placeholder="MOBILE NUMBER" 
                      onChange={handlePhoneChange}
                      className={`custom-input w-full rounded-md px-3 py-2.5 text-sm ${fieldErrors['sme-phone'] ? 'border-red-500/50' : ''}`}
                    />
                    {fieldErrors['sme-phone'] && (
                      <p className="text-xs text-red-400 font-mono-sys">{fieldErrors['sme-phone']}</p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="modal-sme-postcode" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Postcode *</label>
                    <input 
                      id="modal-sme-postcode" 
                      name="sme-postcode" 
                      type="text" 
                      inputMode="numeric"
                      pattern="[0-9]*"
                      required 
                      placeholder="e.g. 2000" 
                      onChange={handlePostcodeChange}
                      className={`custom-input w-full rounded-md px-3 py-2.5 text-sm ${fieldErrors['sme-postcode'] ? 'border-red-500/50' : ''}`}
                    />
                    {fieldErrors['sme-postcode'] && (
                      <p className="text-xs text-red-400 font-mono-sys">{fieldErrors['sme-postcode']}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="modal-sme-service" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide font-mono-sys block">Service Needed</label>
                  <div className="relative">
                    <select id="modal-sme-service" name="sme-service" className="custom-input custom-select w-full rounded-md px-3 py-2.5 text-sm text-slate-300">
                      <option value="" disabled>WHAT DO YOU NEED PROTECTED?</option>
                      <option value="Mobile Patrols">Mobile Patrols</option>
                      <option value="Alarm Monitoring">Alarm Monitoring</option>
                      <option value="Store Security Guard">Store Security Guard</option>
                      <option value="Warehouse Protection">Warehouse Protection</option>
                    </select>
                  </div>
                </div>

                <label htmlFor="modal-sme-urgent" className="flex items-center gap-3 cursor-pointer custom-checkbox py-2 group">
                  <input id="modal-sme-urgent" name="sme-urgent" type="checkbox" className="hidden peer" />
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
          ) : null}
        </div>
      </div>
    </div>
  );
}
