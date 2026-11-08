#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const usage = 'node browser-check.mjs --url URL --out DIRECTORY [--module INSTALLED_MODULE] [--channel chrome|msedge] [--button EXACT_NAME --expect-status EXACT_TEXT]\nUses existing Playwright and browser only. No downloads. Captures desktop/mobile screenshots; assertions are limited smoke checks. Exit 0=PASS, 1=FAIL, 2=NOT_RUN (missing prerequisites).';
if (process.argv.includes('--help')) { console.log(usage); process.exit(0); }
const args = {};
const allowed = new Set(['--url','--out','--module','--channel','--button','--expect-status']);
for (let i = 2; i < process.argv.length; i += 2) {
  if (!allowed.has(process.argv[i]) || !process.argv[i + 1]) { console.error(usage); process.exit(1); }
  args[process.argv[i].slice(2)] = process.argv[i + 1];
}
if (!args.url || !args.out || (!!args.button !== !!args['expect-status'])) { console.error(usage); process.exit(1); }
try { if (!['http:', 'https:'].includes(new URL(args.url).protocol)) throw Error(); }
catch { console.error('Use an explicit HTTP(S) test URL.'); process.exit(1); }
const requireFromProject = createRequire(path.join(process.cwd(), 'package.json'));
let api;
for (const name of args.module ? [path.resolve(args.module)] : ['playwright', 'playwright-core']) {
  try { api = requireFromProject(name); if (api.chromium) break; } catch {}
}
if (!api?.chromium) {
  console.log(JSON.stringify({ status: 'NOT_RUN', reason: 'No existing Playwright library resolved. Use host browser tools or authorize runtime setup.' }));
  process.exit(2);
}
let browser;
try { browser = await api.chromium.launch({ headless: true, ...(args.channel ? {channel: args.channel} : {}) }); }
catch (error) {
  console.log(JSON.stringify({ status: 'NOT_RUN', reason: 'Browser could not launch', detail: String(error.message).split('\n')[0] }));
  process.exit(2);
}
const output = path.resolve(args.out);
const results = [];
let code = 0;
try {
  fs.mkdirSync(output, { recursive: true });
  for (const [name, width, height] of [['desktop',1440,900], ['mobile',390,844]]) {
    const context = await browser.newContext({ viewport: {width,height}, reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = [];
    const failedRequests = [];
    page.on('pageerror', e => errors.push(String(e.message)));
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
    page.on('requestfailed', r => failedRequests.push({url: r.url(), error: r.failure()?.errorText}));
    const result = { name, viewport: {width,height}, url: args.url, checks: {}, errors, failedRequests };
    try {
      const response = await page.goto(args.url, { waitUntil: 'load', timeout: 30000 });
      await page.evaluate(() => document.fonts?.ready);
      result.url = page.url();
      result.checks.navigation = !!response && response.status() < 400;
      result.checks.noHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1);
      if (args.button) {
        await page.getByRole('button', {name: args.button, exact: true}).click({timeout:10000});
        await page.waitForFunction(expected => document.querySelector('[role="status"]')?.textContent?.trim() === expected, args['expect-status'], {timeout:10000});
        result.checks.expectedStatus = true;
      }
      result.screenshot = name + '.png';
      await page.screenshot({ path: path.join(output, result.screenshot), fullPage: true });
      result.checks.noRuntimeErrors = errors.length === 0 && failedRequests.length === 0;
      result.status = Object.values(result.checks).every(Boolean) ? 'PASS' : 'FAIL';
    } catch (error) { result.status = 'FAIL'; result.failure = String(error.message); }
    if (result.status !== 'PASS') code = 1;
    results.push(result);
    await context.close();
  }
  const report = {status: code ? 'FAIL' : 'PASS', browser: browser.version(), results, limitations: ['Screenshots captured, not visually reviewed by this script.', 'Not a full accessibility, performance, SEO, or user-journey audit.', 'Both profiles use reduced motion; normal animation is not tested.']};
  fs.writeFileSync(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally { await browser.close(); }
process.exitCode = code;
