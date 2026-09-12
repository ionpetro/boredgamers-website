import { ABOUT, toMarkdown } from "../../content/pages.js";
import { SITE_URL } from "../../content/site.js";

export const dynamic = "force-static";

export function GET() {
  return new Response(toMarkdown(ABOUT, { canonical: `${SITE_URL}/about` }), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept, Accept-Encoding",
      Link: `<${SITE_URL}/about>; rel="canonical"`,
    },
  });
}
