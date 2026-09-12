import {
  AUDIENCE,
  BUSINESS_EMAIL,
  SITE_URL,
  SOCIAL_PROFILES,
  SPONSORS,
  TEAM,
} from "../../content/site.js";

export const dynamic = "force-static";

function homepageMarkdown() {
  return `# BoredGamers

Greek entertainment channel and community: YouTube videos, a Spotify podcast,
live club events, merch and sponsored brand content.

## What we make

Θα μας βρειτε να λeμε παραξενες ιστοριες, να τσακωνομαστε, να ταξιδευουμε και να
επικοινωνουμε με ομορφο τροπο πραγματα που μας ενοχλουν.

Conversational entertainment video in Greek — strange stories, arguments and
travel — published on YouTube and distributed as a podcast and short-form video.

## Audience

| Platform | Following |
| --- | --- |
| YouTube | ${AUDIENCE.youtube} |
| Instagram | ${AUDIENCE.instagram} |
| TikTok | ${AUDIENCE.tiktok} |

Figures are maintained by hand and reflect the last update to this site rather
than a live reading from each platform.

## Team

${TEAM.map((m) => `- ${m.handle} — ${m.url}`).join("\n")}

## Sponsors

${SPONSORS.map((s) => `- **${s.name}** — ${s.tagline}`).join("\n")}

Sponsorship and commercial enquiries: ${BUSINESS_EMAIL}

## Official channels

${SOCIAL_PROFILES.map((url) => `- ${url}`).join("\n")}

## More

- [About](${SITE_URL}/about)
- [Contact](${SITE_URL}/contact)
- [Privacy](${SITE_URL}/privacy)
- [Agent guidance](${SITE_URL}/llms.txt)

---

Canonical: ${SITE_URL}/
`;
}

export function GET() {
  return new Response(homepageMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      // Vercel's edge replaces Vary on app-router responses and ignores
      // next.config.js header rules for it, so Vary: Accept cannot be made
      // to stick. Opting out of caching removes the risk that header exists
      // to prevent: an uncached response cannot be served to the wrong client.
      "Cache-Control": "no-store",
      Vary: "Accept, Accept-Encoding",
      Link: `<${SITE_URL}/>; rel="canonical"`,
    },
  });
}
