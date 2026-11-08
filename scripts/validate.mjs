#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const skill = path.join(root,'skills/ai-ready-sites');
const manifest = JSON.parse(fs.readFileSync(path.join(root,'plugin.json'),'utf8'));
const overlay = JSON.parse(fs.readFileSync(path.join(root,'.codex-plugin/plugin.json'),'utf8'));
assert.equal(manifest.$schema,'https://agent-plugins.org/schemas/1.0.0/plugin.schema.json');
assert.equal(manifest.name,'ai-ready-sites');assert.equal(manifest.version,'0.3.0');
assert.equal(overlay.name,manifest.name);assert.equal(overlay.version,manifest.version);
assert.deepEqual(overlay.interface,manifest.extensions['com.openai'].interface);
assert.equal(manifest.extensions['com.openai'].interface.category,'Developer Tools');
assert.ok(manifest.extensions['com.openai'].interface.shortDescription.length<=30);
for(const key of ['mcpServers','skills','interface','apps']) assert.ok(!(key in manifest));
const files=[];
function walk(folder) { for(const name of fs.readdirSync(folder)) {if(name==='.git')continue;const p=path.join(folder,name),s=fs.lstatSync(p);assert.ok(!s.isSymbolicLink(),'No symlinks');if(s.isDirectory())walk(p);else files.push(p);} }
walk(root);
assert.equal(files.filter(p=>path.basename(p)==='SKILL.md').length,1);
const entry=fs.readFileSync(path.join(skill,'SKILL.md'),'utf8');
assert.match(entry,/^---\nname: ai-ready-sites\n/);
assert.ok(Buffer.byteLength(entry)<1024*1024);
assert.ok(!entry.includes('[TODO:'));
let links=0;
for(const p of files) {
  assert.ok(!/(?:^|[\/\\])(?:node_modules|\.git|\.env|auth\.json)(?:[\/\\]|$)/.test(p));
  if (!p.endsWith('.md')) continue;
  const text=fs.readFileSync(p,'utf8');
  assert.ok(!/(?:[A-Z]:[\\/](?:Users|Noema|AI-ready)|\/Users\/Owner)/i.test(text),'Personal path in '+p);
  for(const match of text.matchAll(/\]\(([^)]+)\)/g)) {
    const href=match[1];if(/^(https?:|#)/.test(href))continue;
    const target=path.resolve(path.dirname(p),decodeURIComponent(href.split('#')[0]));
    const relative=path.relative(root,target);
    assert.ok(relative && !relative.startsWith('..') && !path.isAbsolute(relative),'Reference escapes package: '+href);
    assert.ok(fs.existsSync(target),'Broken link '+href+' in '+p);links++;
  }
}
const lock=JSON.parse(fs.readFileSync(path.join(skill,'upstreams.lock.json'),'utf8'));
assert.equal(lock.packageVersion,manifest.version);
assert.ok(entry.includes('version: '+JSON.stringify(manifest.version)), 'Skill version differs from manifest');
assert.equal(lock.upstreams.length,10);
for(const u of lock.upstreams) {
  assert.match(u.commit,/^[0-9a-f]{40}$/);
  const license=fs.readFileSync(path.join(skill,u.licensePath));
  assert.equal(crypto.createHash('sha256').update(license).digest('hex'),u.licenseSha256);
  for(const file of u.adaptedInto)assert.ok(fs.existsSync(path.join(skill,file)));
}
console.log(JSON.stringify({status:'PASS',files:files.length,skills:1,localLinks:links,sources:lock.upstreams.length,limitations:'Structural check; full YAML/schema parsing and behavior require separate validation.'}));
