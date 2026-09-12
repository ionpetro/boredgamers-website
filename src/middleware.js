import { NextResponse } from "next/server";

/**
 * Markdown content negotiation, per acceptmarkdown.com.
 *
 * When a client asks for text/markdown we rewrite to the matching .md route
 * and mark the response as negotiated. `Vary: Accept` is essential: without it
 * a CDN can hand the cached HTML variant to an agent that asked for markdown
 * (or the reverse), depending on which variant was cached first.
 */

// Paths that have a markdown representation, mapped to the route that serves it.
const MARKDOWN_ROUTES = new Map([
  ["/", "/index.md"],
  ["/about", "/about.md"],
  ["/contact", "/contact.md"],
  ["/privacy", "/privacy.md"],
]);

function prefersMarkdown(accept) {
  if (!accept) return false;

  // Parse the Accept header into media ranges with q-values so we only serve
  // markdown when it is genuinely preferred over HTML, not merely listed.
  const ranges = accept
    .split(",")
    .map((part) => {
      const [type, ...params] = part.trim().split(";");
      const q = params
        .map((p) => p.trim())
        .find((p) => p.startsWith("q="));
      const quality = q ? Number.parseFloat(q.slice(2)) : 1;
      return {
        type: type.trim().toLowerCase(),
        q: Number.isFinite(quality) ? quality : 0,
      };
    })
    .filter((r) => r.q > 0);

  const best = (...types) =>
    ranges
      .filter((r) => types.includes(r.type))
      .reduce((max, r) => Math.max(max, r.q), 0);

  const markdown = best("text/markdown", "text/x-markdown");
  if (markdown === 0) return false;

  const html = best("text/html", "application/xhtml+xml");
  const anything = best("*/*", "text/*");

  // Markdown wins ties: an explicit text/markdown beats a wildcard.
  return markdown >= html && markdown >= anything;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const target = MARKDOWN_ROUTES.get(pathname);

  if (target && prefersMarkdown(request.headers.get("accept"))) {
    const url = request.nextUrl.clone();
    url.pathname = target;
    const response = NextResponse.rewrite(url);
    response.headers.set("Vary", "Accept, Accept-Encoding");
    // Vercel's edge overwrites Vary on app-router responses and ignores the
    // next.config.js rule for it, so Vary: Accept cannot be relied on here.
    // Not caching the negotiated response removes the failure Vary guards
    // against: a cached markdown variant handed to a client wanting HTML.
    response.headers.set("Cache-Control", "no-store");
    return response;
  }

  // Advertise negotiation on the HTML variant too, so caches key on Accept
  // for every path that has a markdown representation.
  const response = NextResponse.next();
  if (target) {
    response.headers.set("Vary", "Accept, Accept-Encoding");
    response.headers.set("Link", `<${target}>; rel="alternate"; type="text/markdown"`);
  }
  return response;
}

export const config = {
  matcher: ["/", "/about", "/contact", "/privacy"],
};
