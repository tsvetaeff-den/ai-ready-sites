#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const installer=path.join(path.dirname(fileURLToPath(import.meta.url)),'install.mjs');
const testRoot=fs.mkdtempSync(path.join(os.tmpdir(),'ai-ready-install-test-'));
const skills=path.join(testRoot,'skills'), target=path.join(skills,'ai-ready-sites');
function run(extra=[]) {const r=spawnSync(process.execPath,[installer,'--skills-dir',skills,...extra],{encoding:'utf8'});return {code:r.status,stdout:r.stdout,stderr:r.stderr};}
const results=[];
try {
  let r=run();assert.equal(r.code,0,r.stderr);assert.equal(JSON.parse(r.stdout).status,'INSTALLED');results.push('fresh install');
  const original=fs.readFileSync(path.join(target,'SKILL.md'));
  r=run();assert.equal(r.code,0,r.stderr);assert.equal(JSON.parse(r.stdout).status,'ALREADY_INSTALLED');results.push('idempotent repeat');
  fs.writeFileSync(path.join(target,'SKILL.md'),'existing user customization');
  r=run();assert.equal(r.code,1);assert.equal(fs.readFileSync(path.join(target,'SKILL.md'),'utf8'),'existing user customization');results.push('refuse silent overwrite');
  r=run(['--replace']);assert.equal(r.code,0,r.stderr);const backup=JSON.parse(r.stdout).backup;
  assert.equal(fs.readFileSync(path.join(backup,'SKILL.md'),'utf8'),'existing user customization');
  assert.deepEqual(fs.readFileSync(path.join(target,'SKILL.md')),original);results.push('replace preserves exact backup');
  assert.ok(!fs.existsSync(path.join(testRoot,'config.toml')));assert.ok(!fs.existsSync(path.join(testRoot,'AGENTS.md')));results.push('no config/instruction mutation');
  assert.ok(!fs.readdirSync(skills).some(name=>name.startsWith('.ai-ready-sites-staging-')));results.push('temporary staging cleaned');
  console.log(JSON.stringify({status:'PASS',checks:results}));
} finally {
  const actual=fs.realpathSync(testRoot), base=fs.realpathSync(os.tmpdir());
  assert.equal(path.dirname(actual),base);assert.ok(path.basename(actual).startsWith('ai-ready-install-test-'));
  fs.rmSync(actual,{recursive:true});
}
