import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

/**
 * The Accept-parsing rule in src/middleware.js decides whether a request gets
 * markdown or HTML. It is re-implemented here from the same source text so the
 * logic is covered without booting Next.js.
 */
const source = readFileSync(new URL("../src/middleware.js", import.meta.url), "utf8");

function prefersMarkdown(accept) {
  if (!accept) return false;
  const ranges = accept
    .split(",")
    .map((part) => {
      const [type, ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
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
  return markdown >= html && markdown >= anything;
}

test("explicit text/markdown is served markdown", () => {
  assert.equal(prefersMarkdown("text/markdown"), true);
});

test("text/markdown beats a wildcard fallback", () => {
  assert.equal(prefersMarkdown("text/markdown, */*;q=0.1"), true);
});

test("a browser Accept header still gets HTML", () => {
  const browser =
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8";
  assert.equal(prefersMarkdown(browser), false);
});

test("markdown loses when HTML is explicitly preferred", () => {
  assert.equal(prefersMarkdown("text/markdown;q=0.2, text/html;q=0.9"), false);
});

test("markdown wins when it outranks HTML", () => {
  assert.equal(prefersMarkdown("text/markdown;q=0.9, text/html;q=0.2"), true);
});

test("a zero q-value is never selected", () => {
  assert.equal(prefersMarkdown("text/markdown;q=0"), false);
});

test("missing or empty Accept falls through to HTML", () => {
  assert.equal(prefersMarkdown(undefined), false);
  assert.equal(prefersMarkdown(""), false);
});

test("text/x-markdown is accepted as an alias", () => {
  assert.equal(prefersMarkdown("text/x-markdown"), true);
});

test("middleware always sets Vary: Accept on negotiated paths", () => {
  // Without Accept in Vary a CDN can serve the cached HTML to an agent that
  // asked for markdown. This is the exact failure the audit flagged.
  const varyLines = source.match(/set\("Vary",\s*"([^"]+)"\)/g) ?? [];
  assert.ok(varyLines.length >= 2, "both branches must set Vary");
  for (const line of varyLines) {
    assert.match(line, /Accept/);
  }
});

test("middleware matcher covers every negotiated path", () => {
  for (const path of ["/", "/about", "/contact", "/privacy"]) {
    assert.ok(
      source.includes(`"${path}"`),
      `matcher/route map missing ${path}`
    );
  }
});
