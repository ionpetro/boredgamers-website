import {
  AUDIENCE,
  BUSINESS_EMAIL,
  SITE_URL,
  SOCIAL_PROFILES,
  SPONSORS,
  TEAM,
} from "./site.js";

/**
 * Page copy in one place, rendered as HTML by the route and as markdown by the
 * .md variant, so the two representations can never drift apart.
 *
 * Every claim here is traceable to the homepage or a linked public profile.
 */

export const ABOUT = {
  title: "About BoredGamers",
  description:
    "BoredGamers is a Greek entertainment channel and community: videos, a podcast, live club events, merch and brand collaborations.",
  lede: "BoredGamers is a Greek entertainment group that makes videos, records a podcast, runs live club events and works with brands.",
  sections: [
    {
      heading: "What BoredGamers is",
      paragraphs: [
        "BoredGamers is a Greek-language entertainment channel built around a group of friends talking on camera. The homepage describes it in the group's own words: strange stories, arguments, travel, and communicating the things that bother them in a way that is enjoyable to watch.",
        "The output is published mainly on YouTube, with the same community active on Instagram, TikTok, Facebook and Spotify. The Spotify presence is a podcast show rather than a music profile, so the material exists in both video and audio form.",
      ],
    },
    {
      heading: "Audience",
      paragraphs: [
        `As published on the homepage, the channel reaches roughly ${AUDIENCE.youtube} subscribers on YouTube, ${AUDIENCE.instagram} followers on Instagram and ${AUDIENCE.tiktok} on TikTok. These figures are maintained by hand and reflect the most recent update to the site rather than a live API reading.`,
        "The audience is predominantly Greek-speaking, which is why the site and nearly all content are in Greek.",
      ],
    },
    {
      heading: "The team",
      paragraphs: [
        `The credits section of the homepage lists the people who appear in and make the videos: ${TEAM.map(
          (m) => m.handle
        ).join(", ")}. Each links to that person's public Instagram profile.`,
      ],
    },
    {
      heading: "Brand collaborations",
      paragraphs: [
        `BoredGamers produces sponsored segments and branded videos. Companies that have appeared on the site as sponsors include ${SPONSORS.map(
          (s) => s.name
        ).join(", ")}.`,
        `Sponsorship and commercial enquiries go to ${BUSINESS_EMAIL}.`,
      ],
    },
  ],
};

export const CONTACT = {
  title: "Contact BoredGamers",
  description:
    "How to reach BoredGamers for sponsorships, brand collaborations, press and general enquiries, plus every official channel and profile.",
  lede: "One email address handles business enquiries. Everything else happens on the public channels.",
  sections: [
    {
      heading: "Business and sponsorship",
      paragraphs: [
        `Commercial enquiries - sponsorships, branded content, appearances and partnership proposals - go to ${BUSINESS_EMAIL}. This is the address published on the homepage and it is the correct route for anything involving a budget or a contract.`,
        "There is no published postal address or telephone number for BoredGamers. If you need one for an invoice or a contract, ask by email and the team can supply it directly.",
      ],
    },
    {
      heading: "Press and media",
      paragraphs: [
        `Press requests, interview invitations and media enquiries use the same address: ${BUSINESS_EMAIL}. Mentioning the outlet and the deadline in the subject line helps.`,
      ],
    },
    {
      heading: "Official channels",
      paragraphs: [
        "These are the only official BoredGamers profiles. Anything else claiming to be BoredGamers is not run by the team.",
      ],
      list: SOCIAL_PROFILES,
    },
    {
      heading: "Audience questions",
      paragraphs: [
        "Questions about videos, the podcast or club events are best asked in the comments or by direct message on the channel they relate to, where the community and the team are active. The business address is not monitored for viewer support.",
      ],
    },
  ],
};

export const PRIVACY = {
  title: "Privacy",
  description:
    "What boredgamers.gr collects, the third-party services the site loads, and how to contact BoredGamers about privacy.",
  lede: "This page describes only what the boredgamers.gr website itself does. It is a factual description of the site, not legal advice.",
  sections: [
    {
      heading: "What this site collects directly",
      paragraphs: [
        "boredgamers.gr has no accounts, no login, no comment system and no forms. The site does not ask you for your name, your email address or any other personal detail, and there is no database of visitors behind it.",
        "The one interactive control that touches your device is the button that copies the business email address to your clipboard. That happens entirely in your browser and nothing is transmitted when you use it.",
      ],
    },
    {
      heading: "Analytics",
      paragraphs: [
        "The site loads Vercel Web Analytics, which records aggregate page views and referrers to show which pages are visited. It is configured as a privacy-friendly analytics product that does not use cookies for tracking and does not build a cross-site profile of individual visitors.",
      ],
    },
    {
      heading: "Embedded third-party content",
      paragraphs: [
        "Several sections embed video players from YouTube, and the recent-videos section requests video listings from the YouTube Data API. When an embedded player loads, YouTube receives the request directly from your browser, and its own privacy policy and cookie practices apply to that interaction. The same is true of any outbound link you follow to Instagram, TikTok, Facebook or Spotify.",
        "Fonts are loaded from Google Fonts, which likewise receives a request from your browser when a page loads.",
      ],
    },
    {
      heading: "Hosting",
      paragraphs: [
        "The site is hosted on Vercel. As with any web host, its servers process the network requests needed to deliver pages, which includes standard server-side request information.",
      ],
    },
    {
      heading: "Questions",
      paragraphs: [
        `Privacy questions about this website can be sent to ${BUSINESS_EMAIL}.`,
        `This description covers ${SITE_URL} only. The BoredGamers presence on YouTube, Instagram, TikTok, Facebook and Spotify is governed by each of those platforms' own policies.`,
      ],
    },
  ],
};

export const PAGES = { about: ABOUT, contact: CONTACT, privacy: PRIVACY };

/** Render a page definition as markdown, used by the .md route variants. */
export function toMarkdown(page, { canonical }) {
  const lines = [`# ${page.title}`, "", page.lede, ""];

  for (const section of page.sections) {
    lines.push(`## ${section.heading}`, "");
    for (const paragraph of section.paragraphs) {
      lines.push(paragraph, "");
    }
    if (section.list) {
      for (const item of section.list) {
        lines.push(`- ${item}`);
      }
      lines.push("");
    }
  }

  lines.push("---", "", `Canonical: ${canonical}`, "");
  return lines.join("\n");
}
