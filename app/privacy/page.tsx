'use client';

import Link from 'next/link';

export default function PrivacyPage() {
  // Schema for Google to understand this is a Legal Document
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy Policy for Group 7 Security. Details on how we collect, store, and protect client data in accordance with the Privacy Act 1988.",
    "publisher": {
      "@type": "Organization",
      "name": "Group 7 Security",
      "url": "https://group7security.com.au"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="w-full min-h-screen bg-slate-50 pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          
          {/* Header */}
          <div className="border-b border-slate-100 pb-8 mb-8">
            <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-slate-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 font-mono-sys">
              LAST UPDATED: JANUARY 2026
            </p>
          </div>

          {/* Legal Content */}
          <div className="prose prose-slate max-w-none font-inter text-slate-600 prose-headings:font-montserrat prose-headings:font-bold prose-headings:text-slate-800 prose-a:text-blue-600">
            
            <p className="lead">
              Group 7 Security Pty Ltd ("we," "us," or "our") is committed to protecting the privacy of our clients, employees, and site visitors. We are bound by the <strong>Privacy Act 1988 (Cth)</strong> and the Australian Privacy Principles (APPs).
            </p>

            <h3>1. Collection of Personal Information</h3>
            <p>
              We collect information strictly necessary to provide security services and ensure site safety. This includes:
            </p>
            <ul>
              <li><strong>Identity Data:</strong> Names, job titles, and company details provided via our contact forms.</li>
              <li><strong>Contact Data:</strong> Email addresses, telephone numbers, and site addresses.</li>
              <li><strong>Operational Data:</strong> Security logs, incident reports, and site access records generated during our patrols.</li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <p>
              Your data is used solely for legitimate business purposes, including:
            </p>
            <ul>
              <li>Providing accurate quotes and security risk assessments.</li>
              <li>Deploying guards and mobile patrols to your specific locations.</li>
              <li>Communicating with you regarding alarm activations or emergency incidents.</li>
              <li>Complying with regulatory bodies, including the Security Licensing & Enforcement Directorate (SLED).</li>
            </ul>

            <h3>3. Data Security & Storage (ISO 27001 Alignment)</h3>
            <p>
              We treat data security with the same rigor as physical security. 
              Client data is stored on secure, encrypted servers located in Australia. 
              We implement strict access controls to ensure only authorized operational staff can view client details.
            </p>

            <h3>4. Disclosure of Information</h3>
            <p>
              We do not sell, trade, or rent your personal identification information to others. 
              We may disclose information only when required by law (e.g., to NSW Police) or to authorized subcontractors strictly for the purpose of fulfilling a service contract.
            </p>

            <h3>5. Contact Us</h3>
            <p>
              If you have questions about this policy or wish to request access to your data, please contact our Privacy Officer:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 not-prose text-sm">
              <p className="mb-1"><strong>Group 7 Security Pty Ltd</strong></p>
              <p className="mb-1">749-757 Bourke St, Redfern NSW 2016</p>
              <p className="mb-1">Email: info@group7security.com.au</p>
              <p>Phone: (02) 9402 5389</p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100">
             <Link href="/" className="text-sm font-bold text-red-600 hover:text-red-700 font-mono-sys uppercase tracking-wider">
               ← Return to Home
             </Link>
          </div>
        </div>
      </main>
    </>
  );
}

