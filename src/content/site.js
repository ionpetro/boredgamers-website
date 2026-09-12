/**
 * Single source of truth for the facts this site states about itself.
 *
 * Everything here is derived from the homepage or the linked public profiles.
 * Nothing is inferred: no postal address or phone number is published because
 * neither has been verified. Keep it that way unless the business supplies them.
 */

export const SITE_URL = "https://www.boredgamers.gr";

export const BUSINESS_EMAIL = "bgbusinessoffers@gmail.com";

export const CHANNEL_ID = "UCAOcbyg6KNM2h99t7XNiQ8A";

export const SOCIAL_PROFILES = [
  "https://www.youtube.com/@BoredGamersOfficial",
  "https://www.instagram.com/boredgamersofficial/",
  "https://www.tiktok.com/@boredgamersofficial",
  "https://www.facebook.com/YouUp.BoredGamers/",
  "https://open.spotify.com/show/46dNeISTE55Mv4TECIctam",
];

// Follower counts as published on the homepage. These are maintained by hand;
// update them here and the homepage, llms.txt and markdown variants follow.
export const AUDIENCE = {
  youtube: "61.9K",
  instagram: "19.5K",
  tiktok: "63.6K",
};

export const TEAM = [
  { handle: "@01001101_K", url: "https://www.instagram.com/01001101_k/" },
  { handle: "@JOHNBOURSI", url: "https://www.instagram.com/johnboursi/" },
  { handle: "@VIKINGBAE", url: "https://www.instagram.com/vikingbae/" },
  { handle: "@PARASKEVYO", url: "https://www.instagram.com/paraskevyo/" },
  { handle: "@DKARAGOUNIS89", url: "https://www.instagram.com/dkaragounis89/" },
];

export const SPONSORS = [
  { name: "Hasbro", tagline: "Entertain and connect generations of fans" },
  { name: "efood", tagline: "Το efood είναι το delivery στην Ελλάδα!" },
  { name: "Fridays", tagline: "In here, it's always Friday." },
  { name: "ΨΥΧΟΓΙΟΣ", tagline: "Ένας κόσμος ψυχαγωγίας." },
  { name: "Strength Shop", tagline: "Εξοπλισμός δύναμης για κάθε προπόνηση." },
];
