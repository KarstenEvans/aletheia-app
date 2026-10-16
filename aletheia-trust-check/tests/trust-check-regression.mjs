// Trust Check static source regression tests. Run: node tests/trust-check-regression.mjs
// Read-only: this test makes no web requests, GitHub changes or external AI calls.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { Script } from "node:vm";

const root = new URL("../", import.meta.url);
const read = (name) => readFileSync(new URL(name, root), "utf8");
const readRaw = (name) => readFileSync(new URL(name, root));
const markdown = read("aletheia-trust-check.md");
const html = read("aletheia-trust-check.htm");
const page = read("aletheia-trust-check-page.md");
const original = readRaw("aletheia-trust-check-original-2026-10-10.md");
const archivedMd = readRaw("archive/aletheia-trust-check-v0.3-pre-security-improve-2026-10-11.md");
const archivedHtml = readRaw("archive/aletheia-trust-check-v0.3-pre-security-improve-2026-10-11.htm");
const gitSha = (buffer) => createHash("sha1")
  .update(Buffer.from("blob " + buffer.byteLength + "\0"))
  .update(buffer)
  .digest("hex");

assert.equal(gitSha(original), "8f6212a56fb5c6fd5f9823f7116e56c2e645acf0", "Original source changed");
assert.equal(gitSha(archivedMd), "ec44dcbd8084569f94c7f41faee867e15758c2ba", "v0.3 Markdown backup changed");
assert.equal(gitSha(archivedHtml), "1f2719a3f1ea5b517d505f055d64a88816d0ce5e", "v0.3 HTML backup changed");
assert.match(markdown, /version: "0\.5\.0"/);
for (const link of [
  "github.com/KarstenEvans/aletheia-protocol",
  "github.com/KarstenEvans/thalia-protocol"
]) {
  assert.ok(markdown.includes(link), "Missing canonical protocol reference: " + link);
}
for (const term of [
  "Source-lineage and data-integrity",
  "one evidence lineage",
  "Prompt-injection boundary",
  "SUSPECTED INJECTION",
  "READ / ANALYSE / DRAFT",
  "per-action approval",
  "do not authenticate it by voice/appearance alone"
]) assert.ok(markdown.includes(term), "Missing security contract: " + term);

const decode = (s) => s.replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#x27;", "'").replaceAll("&amp;", "&");
const embedded = html.match(/<textarea id="canonical-method"[^>]*>([\s\S]*?)<\/textarea>/);
assert.ok(embedded, "Full portable method missing from HTML");
assert.equal(decode(embedded[1]), markdown, "Embedded method differs from canonical Markdown");
assert.equal(gitSha(readRaw("archive/aletheia-trust-check-v0.4-before-publication-2026-10-16.md")), "ef9e3d4cea7c0c91738240523c9bf0d0489bf3e1");
assert.equal(gitSha(readRaw("archive/aletheia-trust-check-v0.4-before-publication-2026-10-16.htm")), "57406bc640f52a0254de672f5eeb20c721e05412");
for (const label of ["SUPPORTED", "MISLEADING", "CONTRADICTED", "UNVERIFIED", "OPINION/PREDICTION"])
  assert.ok(markdown.includes(label), "Missing claim verdict: " + label);
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(ids.length, new Set(ids).size, "Duplicate HTML id found");
assert.equal((html.match(/class="aletheia-constellation__link"/g) || []).length, 5, "Navigation stars changed");
assert.equal((html.match(/www\.dwin2\.com\/pub\.3182162\.min\.js/g) || []).length, 1, "Unexpected affiliate loader count");
assert.match(html, /id="form"/);
assert.match(html, /id="manual"/);
assert.match(html, /id="open-ai"/);
assert.match(html, /window\.open\(url,/);
assert.ok(html.includes("canonical-method"));
assert.ok(html.includes("FACTS"));
assert.match(html, /JSON\.stringify\(q\)/);
assert.doesNotMatch(html, /eval\s*\(|new Function\s*\(/);
assert.ok(page.includes("injection"), "Page QA lacks threat-case gate");
const inlineScripts = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)];
assert.ok(inlineScripts.length > 0, "No inline JavaScript found");
for (const [, code] of inlineScripts) new Script(code); // Parse only, do NOT execute.
console.log("Trust Check static regression: PASS (source/syntax only; NOT a browser/AI/device test)");
