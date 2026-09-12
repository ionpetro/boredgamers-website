import { CONTACT, toMarkdown } from "../../content/pages.js";
import { SITE_URL } from "../../content/site.js";

export const dynamic = "force-static";

export function GET() {
  return new Response(toMarkdown(CONTACT, { canonical: `${SITE_URL}/contact` }), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept, Accept-Encoding",
      Link: `<${SITE_URL}/contact>; rel="canonical"`,
    },
  });
}
