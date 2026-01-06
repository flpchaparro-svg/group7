export default function JSONLDSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SecurityService"],
    "name": "Group 7 Security",
    "url": "https://group7security.com.au",
    "description": "Professional security guard and patrol services in Australia.",
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[YOUR_STREET_ADDRESS]",
      "addressLocality": "[YOUR_CITY]",
      "addressRegion": "[YOUR_STATE]",
      "postalCode": "[YOUR_POSTCODE]",
      "addressCountry": "AU"
    },
    "telephone": "[YOUR_TELEPHONE]",
    "priceRange": "[YOUR_PRICE_RANGE]",
    "serviceType": [
      "Security Guard Services",
      "Mobile Patrol Services",
      "Corporate Security",
      "Alarm Response",
      "Static Guard Services"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

