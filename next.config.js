const path = require("path");

// HTML pages that also have a text/markdown representation. These are served
// to ordinary visitors, so they keep normal caching.
const NEGOTIATED_HTML_PATHS = ["/", "/about", "/contact", "/privacy"];

// The markdown representations themselves. Only these opt out of caching.
const MARKDOWN_PATHS = [
  "/index.md",
  "/about.md",
  "/contact.md",
  "/privacy.md",
];

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  /**
   * `Vary: Accept` for the content-negotiated routes.
   *
   * This has to live here rather than in middleware or the route handlers:
   * Next.js sets its own `Vary` (RSC, Next-Router-State-Tree,
   * Next-Router-Prefetch) on every app-router response and overwrites whatever
   * those layers set. Headers declared in next.config.js are applied by the CDN
   * after that, so they survive.
   *
   * Without this, a cached markdown variant can be served to a browser that
   * asked for HTML, or vice versa, depending on which one the CDN cached first.
   */
  async headers() {
    const vary = {
      key: "Vary",
      value:
        "Accept, Accept-Encoding, RSC, Next-Router-State-Tree, Next-Router-Prefetch",
    };

    return [
      // HTML pages: advertise the negotiation, but keep normal caching. These
      // are what visitors actually load, so they must stay cacheable.
      ...NEGOTIATED_HTML_PATHS.map((source) => ({
        source,
        headers: [vary],
      })),

      // Markdown variants: verified against the deployed site, Vercel's edge
      // replaces Vary on app-router responses and ignores the rule above, so
      // Accept never reaches clients. Not caching these removes the risk Vary
      // guards against - a cached markdown body served to a client that asked
      // for HTML - and costs nothing, since agents fetch them rarely.
      ...MARKDOWN_PATHS.map((source) => ({
        source,
        headers: [vary, { key: "Cache-Control", value: "no-store" }],
      })),
    ];
  },
};
