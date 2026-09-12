import test from "node:test";
import assert from "node:assert/strict";

import { homepageGraph, organizationSchema } from "../src/app/structured-data.js";
import { ABOUT, CONTACT, PRIVACY, toMarkdown } from "../src/content/pages.js";
import { SITE_URL, SOCIAL_PROFILES } from "../src/content/site.js";
import sitemap from "../src/app/sitemap.js";
import robots from "../src/app/robots.js";

/**
 * Unit coverage for the agent-readiness behaviours. These run without a server;
 * scripts/verify-endpoints.mjs checks the same guarantees over HTTP.
 */

test("organization schema carries a usable identity", () => {
  const org = organizationSchema();
  assert.equal(org["@type"], "Organization");
  assert.equal(org.url, SITE_URL);
  assert.ok(org.name);
  assert.ok(org.description.length > 40);
  assert.ok(org.logo.url.startsWith("https://"));
});

test("organization schema exposes a contactPoint agents can act on", () => {
  const org = organizationSchema();
  assert.ok(Array.isArray(org.contactPoint));
  assert.ok(org.contactPoint.length >= 1);
  for (const point of org.contactPoint) {
    assert.equal(point["@type"], "ContactPoint");
    assert.ok(point.contactType);
    assert.match(point.email, /@/);
  }
});

test("organization schema omits unverified address and phone", () => {
  // Publishing a guessed NAP is worse than omitting it: inconsistent address
  // data actively harms brand discoverability.
  const org = organizationSchema();
  assert.equal(org.address, undefined);
  assert.equal(org.telephone, undefined);
});

test("sameAs lists every official profile", () => {
  const org = organizationSchema();
  assert.deepEqual(org.sameAs, SOCIAL_PROFILES);
  for (const url of org.sameAs) {
    assert.match(url, /^https:\/\//);
  }
});

test("homepage graph pairs Organization with WebSite", () => {
  const graph = homepageGraph();
  const types = graph.map((node) => node["@type"]);
    assert.deepEqual(types, ["Organization", "WebSite"]);
  const site = graph.find((n) => n["@type"] === "WebSite");
  assert.equal(site.publisher["@id"], `${SITE_URL}/#organization`);
});

test("homepage graph is JSON-serialisable", () => {
  assert.doesNotThrow(() => JSON.parse(JSON.stringify(homepageGraph())));
});

for (const [name, page] of Object.entries({ ABOUT, CONTACT, PRIVACY })) {
  test(`${name} page has enough content for a trust anchor`, () => {
    const text = [
      page.title,
      page.lede,
      ...page.sections.flatMap((s) => [s.heading, ...s.paragraphs]),
    ].join(" ");
    // The audit threshold for a trust anchor page is 500 characters.
    assert.ok(
      text.length >= 500,
      `${name} has ${text.length} chars, need >= 500`
    );
  });

  test(`${name} markdown variant is well formed`, () => {
    const md = toMarkdown(page, { canonical: `${SITE_URL}/x` });
    assert.match(md, /^# /, "must open with an h1");
    assert.ok(md.includes("## "), "must contain h2 sections");
    assert.ok(md.includes(`Canonical: ${SITE_URL}/x`));
    assert.ok(!md.includes("undefined"));
  });
}

test("sitemap lists every public route with absolute URLs", () => {
  const entries = sitemap();
  const urls = entries.map((e) => e.url);
  assert.deepEqual(urls, [
    `${SITE_URL}/`,
    `${SITE_URL}/about`,
    `${SITE_URL}/contact`,
    `${SITE_URL}/privacy`,
  ]);
  for (const entry of entries) {
    assert.ok(entry.lastModified instanceof Date);
    assert.ok(Number.isFinite(entry.priority));
  }
});

test("robots points at the sitemap and allows crawling", () => {
  const r = robots();
  assert.equal(r.sitemap, `${SITE_URL}/sitemap.xml`);
  assert.equal(r.rules[0].userAgent, "*");
  assert.equal(r.rules[0].allow, "/");
});
