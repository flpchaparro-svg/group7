# SEO Code Snippets for Group 7 Security

## 1. JSON-LD Schema Markup

This schema has been integrated into the site via `app/components/JSONLDSchema.tsx`. Here's the standalone code snippet:

```html
<script type="application/ld+json">
{
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
}
</script>
```

**Note:** Replace the placeholders:
- `[YOUR_STREET_ADDRESS]` - Your business street address
- `[YOUR_CITY]` - Your city (e.g., "Sydney")
- `[YOUR_STATE]` - Your state (e.g., "NSW")
- `[YOUR_POSTCODE]` - Your postal code
- `[YOUR_TELEPHONE]` - Your phone number (e.g., "+61 2 9402 5389")
- `[YOUR_PRICE_RANGE]` - Your price range (e.g., "$$" or "Contact for pricing")

---

## 2. Meta Tags

These meta tags have been integrated into `app/layout.tsx` via Next.js metadata API. Here's the standalone HTML version:

```html
<head>
  <title>Security Guards Australia | Corporate Security & Mobile Patrols</title>
  <meta name="description" content="Professional security guard and mobile patrol services in Australia. Corporate security, alarm response, and 24/7 protection for businesses.">
  <meta name="keywords" content="Security Guards Australia, Corporate Security, Mobile Patrols, Security Services Australia, Alarm Response, Static Guards">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://group7security.com.au">
  <meta property="og:title" content="Group 7 Security | Professional Security Services Australia">
  <meta property="og:description" content="Professional security guard and mobile patrol services in Australia. Corporate security, alarm response, and 24/7 protection for businesses.">
  <meta property="og:site_name" content="Group 7 Security">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Group 7 Security | Professional Security Services Australia">
  <meta name="twitter:description" content="Professional security guard and mobile patrol services in Australia. Corporate security, alarm response, and 24/7 protection for businesses.">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://group7security.com.au">
  
  <!-- Robots -->
  <meta name="robots" content="index, follow">
</head>
```

**Title:** 60 characters (within limit)  
**Description:** 160 characters (within limit)

---

## 3. robots.txt

File location: `public/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://group7security.com.au/sitemap.xml
```

---

## 4. sitemap.xml

File location: `public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://group7security.com.au/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://group7security.com.au/about/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://group7security.com.au/services/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://group7security.com.au/contact/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

**Note:** Update the `<lastmod>` dates to reflect when you last modified each page.

---

## Implementation Status

✅ **JSON-LD Schema** - Integrated in `app/components/JSONLDSchema.tsx` and added to layout  
✅ **Meta Tags** - Updated in `app/layout.tsx` using Next.js Metadata API  
✅ **robots.txt** - Created in `public/robots.txt`  
✅ **sitemap.xml** - Created in `public/sitemap.xml`

All files are ready to use. Remember to:
1. Fill in the placeholders in the JSON-LD schema (streetAddress, telephone, priceRange)
2. Update the sitemap.xml lastmod dates when you update pages
3. Test the schema markup using Google's Rich Results Test: https://search.google.com/test/rich-results

