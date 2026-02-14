export default function JSONLDSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SecurityService"],
    "name": "Group 7 Security",
    "url": "https://group7security.com.au",
    "logo": "https://group7security.com.au/images/logo.webp",
    "image": "https://group7security.com.au/images/home-hero-bg.webp",
    "description": "Professional security guard and mobile patrol services in Sydney and Australia. ISO 9001 certified corporate protection.",
    "telephone": "+61 2 9402 5389",
    "email": "info@group7security.com.au",
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
      "streetAddress": "749-757 Bourke St",
      "addressLocality": "Redfern",
      "addressRegion": "NSW",
      "postalCode": "2016",
      "addressCountry": "AU"
    },
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
    "sameAs": [
      "https://www.facebook.com/group7security", // <<<< Add your social links if you have them
      "https://www.linkedin.com/company/group7security"
    ],
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

