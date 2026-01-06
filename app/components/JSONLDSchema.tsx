export default function JSONLDSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SecurityService"],
    "name": "Group 7 Security",
    "url": "https://group7security.com.au",
    "logo": "https://group7security.com.au/images/logo.webp", 
    "image": "https://group7security.com.au/images/home-hero-bg.webp",
    "description": "Professional security guard and mobile patrol services in Sydney and Australia. ISO 9001 certified corporate protection.",
    "telephone": "+61 400 000 000", // CHANGE THIS to your real mobile/landline
    "email": "info@group7security.com.au", // CHANGE THIS
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Sydney"
      },
      {
        "@type": "State",
        "name": "New South Wales"
      },
       {
        "@type": "Country",
        "name": "Australia"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Level 1, 100 George St", // CHANGE THIS (Use your registered business address)
      "addressLocality": "Parramatta", // CHANGE THIS
      "addressRegion": "NSW",
      "postalCode": "2150", // CHANGE THIS
      "addressCountry": "AU"
    },
    // If you don't have a physical office open to the public, keep the address but 
    // Google Maps usually requires a verified location.
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "serviceType": [
      "Security Guard Services",
      "Mobile Patrols",
      "Corporate Concierge",
      "Construction Site Security",
      "Alarm Response"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

