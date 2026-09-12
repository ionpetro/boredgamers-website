const path = require("path");

// Paths that have both an HTML and a text/markdown representation.
const NEGOTIATED_PATHS = [
  "/",
  "/about",
  "/contact",
  "/privacy",
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
    return NEGOTIATED_PATHS.map((source) => ({
      source,
      headers: [
        {
          key: "Vary",
          value:
            "Accept, Accept-Encoding, RSC, Next-Router-State-Tree, Next-Router-Prefetch",
        },
      ],
    }));
  },
};
