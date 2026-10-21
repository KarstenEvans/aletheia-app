import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const base = new URL('../', import.meta.url);
const md = readFileSync(new URL('aletheia-site-audit.md', base), 'utf8');
const html = readFileSync(new URL('aletheia-site-audit.htm', base), 'utf8');
const page = readFileSync(new URL('aletheia-site-audit-page.md', base), 'utf8');
const script = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)][0][1];
assert(!md.includes('\\n'), 'Literal newline escapes leaked into Markdown prose');
for (const heading of ['## RUN MODE', '## Stage 0 — Identity and Trust Gate (before optimisation)', '## Stage 1 — Reachability Gate', '## Stage 2 — Discovery Files']) {
  assert(md.split('\n').includes(heading), `Missing standalone heading: ${heading}`);
}
assert(!/Stage 1 Reachability is always first|Run Stage 1 first/.test(md + page));
assert(md.includes('MISSING — optional discovery aid'));
assert(md.includes('An inaccessible URL or tool refusal does not establish that a file is missing.'));

async function run(input, checked = false, clipboardFails = false) {
  const elements = new Map();
  let copied;
  for (const id of ['toggle', 'nav', 'copy', 'site', 'place', 'geoFinal', 'status']) {
    elements.set(id, {value: '', checked: false, textContent: '', handlers: {},
      addEventListener(type, callback) { this.handlers[type] = callback; },
      querySelectorAll() { return []; }, classList: { toggle() {}, remove() {} },
      getAttribute() { return 'false'; }, setAttribute() {}});
  }
  elements.get('site').value = input;
  elements.get('geoFinal').checked = checked;
  vm.runInNewContext(script, { URL, document: { getElementById(id) { return elements.get(id); } },
    navigator: {clipboard: {async writeText(text) { if (clipboardFails) throw new Error('denied'); copied = text; }}} });
  await elements.get('copy').handlers.click();
  return {copied, status: elements.get('status').textContent};
}
for (const checked of [false, true]) {
  const {copied, status} = await run('https://example.org/path?q=one', checked);
  assert(copied.includes('https://example.org/path?q=one'));
  assert(copied.indexOf('Stage 0 Identity and Trust Gate') < copied.indexOf('Stage 1 Reachability Gate'));
  assert(!copied.includes('Start with Stage 1'));
  assert(copied.includes('Continue technical diagnosis if trust evidence is inconclusive.'));
  assert(copied.includes('MISSING — optional discovery aid'));
  assert(copied.includes('NOT TESTED/UNKNOWN'));
  assert(copied.includes('search crawler and training-bot policies independently'));
  assert(copied.includes(checked ? 'OPTIONAL FINAL PASS REQUESTED' : 'Do not run Stage 6'));
  assert(status.includes('copied'));
}
for (const invalid of ['', 'localhost', 'https://user:password@example.org/', 'javascript:alert(1)']) {
  const result = await run(invalid);
  assert.equal(result.copied, undefined);
  assert(result.status.includes('valid public site address'));
}
assert((await run('example.org')).copied.startsWith('Run Aletheia Site Audit for https://example.org/'));
assert((await run('example.org', false, true)).status.includes('Clipboard blocked'));
assert.equal((html.match(/pub\.3182162\.min\.js/g) || []).length, 1);
console.log('PASS: Markdown headings, stage order, real handoff off/on, optional inventory, URL validation, clipboard failure and tracking count. Browser/device behaviour not tested.');
