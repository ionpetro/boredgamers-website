import {
  BUSINESS_EMAIL,
  SITE_URL,
  SOCIAL_PROFILES,
} from "../content/site.js";

/**
 * JSON-LD identity graph for the homepage.
 *
 * Organization is the right identity type here: BoredGamers is a media group,
 * not a product or a single person. No `address` or `telephone` is emitted
 * because neither has been verified — publishing a guessed NAP would be worse
 * than omitting it, since inconsistent NAP data actively harms discoverability.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "BoredGamers",
    alternateName: "Bored Gamers",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo-512.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/images/background.png`,
    description:
      "Greek entertainment channel and community publishing videos, a podcast, live club events and sponsored brand content.",
    email: BUSINESS_EMAIL,
    foundingLocation: {
      "@type": "Country",
      name: "Greece",
    },
    areaServed: {
      "@type": "Country",
      name: "Greece",
    },
    knowsLanguage: ["el", "en"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "business",
        email: BUSINESS_EMAIL,
        availableLanguage: ["Greek", "English"],
        url: `${SITE_URL}/contact`,
      },
      {
        "@type": "ContactPoint",
        contactType: "press",
        email: BUSINESS_EMAIL,
        availableLanguage: ["Greek", "English"],
        url: `${SITE_URL}/contact`,
      },
    ],
    sameAs: SOCIAL_PROFILES,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "BoredGamers",
    description:
      "Official site of BoredGamers, a Greek entertainment channel and community.",
    inLanguage: "el",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function homepageGraph() {
  return [organizationSchema(), websiteSchema()];
}
