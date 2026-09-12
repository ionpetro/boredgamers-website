#!/usr/bin/env node
/**
 * Verifies the agent-readiness surfaces over HTTP against a running site.
 *
 *   node scripts/verify-endpoints.mjs [base-url]
 *
 * Defaults to the production origin. Exits non-zero if any check fails.
 */

const BASE = (process.argv[2] ?? "https://www.boredgamers.gr").replace(/\/$/, "");

let passed = 0;
const failures = [];

function check(name, condition, detail = "") {
  if (condition) {
    passed += 1;
    console.log(`  ok   ${name}`);
  } else {
    failures.push(`${name}${detail ? ` — ${detail}` : ""}`);
    console.log(`  FAIL ${name}${detail ? ` — ${detail}` : ""}`);
  }
}

function textRatio(html) {
  let t = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  return { chars: t.length, ratio: (100 * t.length) / html.length };
}

async function main() {
  console.log(`Verifying ${BASE}\n`);

  // 1. Agent-friendly 404
  console.log("404 handling");
  const missing = await fetch(`${BASE}/some-path-that-does-not-exist`);
  const missingBody = await missing.text();
  check("nonexistent path returns 404", missing.status === 404, `got ${missing.status}`);
  check(
    "404 body points at recovery routes",
    ["/llms.txt", "/sitemap.xml"].every((p) => missingBody.includes(p)),
    "missing sitemap/llms links"
  );
  check("404 body names the site map", missingBody.toLowerCase().includes("404"));

  // 2. Content without JavaScript
  console.log("\nRaw HTML content");
  const home = await fetch(`${BASE}/`);
  const homeHtml = await home.text();
  const { chars, ratio } = textRatio(homeHtml);
  check("homepage returns 200", home.status === 200, `got ${home.status}`);
  check("at least 500 chars of text", chars >= 500, `${chars} chars`);
  check("content ratio >= 5%", ratio >= 5, `${ratio.toFixed(2)}%`);
  check("exactly one H1", (homeHtml.match(/<h1[\s>]/gi) ?? []).length === 1);

  // 3. Markdown content negotiation
  console.log("\nMarkdown negotiation (acceptmarkdown.com)");
  for (const path of ["/", "/about", "/contact", "/privacy"]) {
    const res = await fetch(`${BASE}${path}`, {
      headers: { Accept: "text/markdown" },
    });
    const ctype = res.headers.get("content-type") ?? "";
    const vary = res.headers.get("vary") ?? "";
    const body = await res.text();
    check(`${path} serves text/markdown`, ctype.includes("text/markdown"), ctype);
    check(`${path} Vary includes Accept`, /accept/i.test(vary), vary || "(none)");
    check(`${path} markdown body has an H1`, /^#\s/m.test(body));
  }
  const htmlRes = await fetch(`${BASE}/`, { headers: { Accept: "text/html" } });
  check(
    "Accept: text/html still returns HTML",
    (htmlRes.headers.get("content-type") ?? "").includes("text/html")
  );

  // 4 & 7. JSON-LD / Organization completeness
  console.log("\nStructured data");
  const ldMatches = [
    ...homeHtml.matchAll(
      /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
    ),
  ];
  check("JSON-LD present on homepage", ldMatches.length > 0);
  let org = null;
  for (const m of ldMatches) {
    try {
      const parsed = JSON.parse(m[1]);
      const nodes = Array.isArray(parsed) ? parsed : [parsed];
      org = nodes.find((n) => n["@type"] === "Organization") ?? org;
    } catch (e) {
      check("JSON-LD parses", false, e.message);
    }
  }
  check("Organization node found", Boolean(org));
  if (org) {
    check("Organization has name", Boolean(org.name));
    check("Organization has url", Boolean(org.url));
    check("Organization has description", Boolean(org.description));
    check("Organization has contactPoint", Array.isArray(org.contactPoint) && org.contactPoint.length > 0);
    check(
      "contactPoint carries email + contactType",
      (org.contactPoint ?? []).every((c) => c.email && c.contactType)
    );
    check("Organization has sameAs profiles", (org.sameAs ?? []).length >= 3);
  }

  // 5. Agent instructions
  console.log("\nAgent instructions");
  const llms = await fetch(`${BASE}/llms.txt`);
  const llmsBody = await llms.text();
  check("llms.txt returns 200", llms.status === 200, `got ${llms.status}`);
  check("llms.txt has a when-to-use section", /when to use/i.test(llmsBody));
  check("llms.txt states how to call the site", /how to call/i.test(llmsBody));
  check("llms.txt names concrete use cases", llmsBody.length > 800, `${llmsBody.length} chars`);

  // 6. Sitemap + robots
  console.log("\nSitemap and robots");
  const sitemap = await fetch(`${BASE}/sitemap.xml`);
  const sitemapBody = await sitemap.text();
  check("sitemap.xml returns 200", sitemap.status === 200, `got ${sitemap.status}`);
  check("sitemap is valid urlset", sitemapBody.includes("<urlset"));
  check("sitemap lists lastmod", sitemapBody.includes("<lastmod>"));
  check(
    "sitemap covers all routes",
    ["/about", "/contact", "/privacy"].every((p) => sitemapBody.includes(p))
  );
  const robots = await fetch(`${BASE}/robots.txt`);
  const robotsBody = await robots.text();
  check("robots.txt returns 200", robots.status === 200, `got ${robots.status}`);
  check("robots.txt references sitemap", robotsBody.includes("sitemap.xml"));

  // 8. Trust anchor pages
  console.log("\nTrust anchor pages");
  for (const path of ["/about", "/contact", "/privacy"]) {
    const res = await fetch(`${BASE}${path}`);
    const body = await res.text();
    const { chars: c } = textRatio(body);
    check(`${path} returns 200`, res.status === 200, `got ${res.status}`);
    check(`${path} has >= 500 chars`, c >= 500, `${c} chars`);
    check(`${path} has an H1`, /<h1[\s>]/i.test(body));
  }

  console.log(`\n${passed} passed, ${failures.length} failed`);
  if (failures.length) {
    console.log("\nFailures:");
    for (const f of failures) console.log(`  - ${f}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
