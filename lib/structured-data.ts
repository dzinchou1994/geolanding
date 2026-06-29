import {
  CITIES,
  MAIN_SITE_URL,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";

export function getStructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GeoEskort",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${MAIN_SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GeoEskort",
    url: SITE_URL,
    sameAs: [MAIN_SITE_URL],
  };

  const localBusinessSchemas = CITIES.map((city) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Escort ${city.nameEn}`,
    url: MAIN_SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.nameEn,
      addressCountry: "GE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.lat,
      longitude: city.lng,
    },
  }));

  return [websiteSchema, organizationSchema, ...localBusinessSchemas];
}
