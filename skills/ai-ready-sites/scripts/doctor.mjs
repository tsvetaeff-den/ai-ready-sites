#!/usr/bin/env node
import { createRequire } from 'node:module';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

if (process.argv.includes('--help')) {
  console.log('node doctor.mjs\nRead-only local capability check. Run in the project directory. Does not install or fetch anything. Host MCP/browser tools must be checked separately.');
  process.exit(0);
}
const requireFromProject = createRequire(path.join(process.cwd(), 'package.json'));
const libraries = {};
for (const name of ['playwright', 'playwright-core']) {
  try { libraries[name] = { available: true, path: requireFromProject.resolve(name) }; }
  catch { libraries[name] = { available: false }; }
}
const locator = process.platform === 'win32' ? 'where.exe' : 'which';
const commands = {};
for (const name of ['node', 'npm', 'playwright-cli', 'google-chrome', 'chromium']) {
  const found = spawnSync(locator, [name], { encoding: 'utf8', timeout: 5000, windowsHide: true });
  commands[name] = { onPath: found.status === 0 };
}
console.log(JSON.stringify({ node: process.version, platform: process.platform, libraries, commands, hostBrowserTools: 'CHECK_HOST_TOOL_CATALOG', note: 'Command availability does not prove that a browser can launch. No changes made.' }, null, 2));
