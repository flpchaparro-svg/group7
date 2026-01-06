export default function JSONLDSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SecurityService"],
    "name": "Group 7 Security",
    "url": "https://group7security.com.au",
    "logo": "https://group7security.com.au/images/logo.webp",
    "image": "https://group7security.com.au/images/home-hero-bg.webp",
    "description": "Professional security guard and mobile patrol services in Sydney and Australia. ISO 9001 certified corporate protection.",
    "telephone": "+61 400 000 000", // <<<< CHANGE THIS to your real phone number
    "email": "info@group7security.com.au", // <<<< CHANGE THIS to your real email
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
      "streetAddress": "Level 1, 100 George St", // <<<< CHANGE THIS to your real address
      "addressLocality": "Parramatta", // <<<< CHANGE THIS to your suburb
      "addressRegion": "NSW",
      "postalCode": "2150", // <<<< CHANGE THIS to your postcode
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

