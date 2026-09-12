import { CONTACT, toMarkdown } from "../../content/pages.js";
import { SITE_URL } from "../../content/site.js";

export const dynamic = "force-static";

export function GET() {
  return new Response(toMarkdown(CONTACT, { canonical: `${SITE_URL}/contact` }), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      // Vercel's edge replaces Vary on app-router responses and ignores
      // next.config.js header rules for it, so Vary: Accept cannot be made
      // to stick. Opting out of caching removes the risk that header exists
      // to prevent: an uncached response cannot be served to the wrong client.
      "Cache-Control": "no-store",
      Vary: "Accept, Accept-Encoding",
      Link: `<${SITE_URL}/contact>; rel="canonical"`,
    },
  });
}
