#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const help = 'node scripts/install.mjs [--skills-dir DIRECTORY] [--replace]\nInstalls only the self-contained ai-ready-sites skill. Default: CODEX_HOME/skills or ~/.codex/skills. No network, account, config, MCP, or global instruction changes. Existing different content requires --replace and is backed up outside skills.';
if (process.argv.includes('--help')) { console.log(help); process.exit(0); }
let skillsDir = path.join(process.env.CODEX_HOME || path.join(os.homedir(), '.codex'), 'skills');
let replace = false;
for (let i = 2; i < process.argv.length; i++) {
  if (process.argv[i] === '--skills-dir' && process.argv[i+1]) skillsDir = process.argv[++i];
  else if (process.argv[i] === '--replace') replace = true;
  else { console.error(help); process.exit(1); }
}
const source = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'skills', 'ai-ready-sites');
const targetRoot = path.resolve(skillsDir);
const target = path.join(targetRoot, 'ai-ready-sites');
const within = (parent, child) => { const relative = path.relative(parent, child); return relative === '' || (!relative.startsWith('..' + path.sep) && relative !== '..' && !path.isAbsolute(relative)); };
if (within(source, target) || within(target, source)) throw new Error('Source and destination overlap.');
function inventory(directory) {
  const result = {};
  function walk(folder) {
    for (const name of fs.readdirSync(folder).sort()) {
      const file = path.join(folder, name), stat = fs.lstatSync(file);
      if (stat.isSymbolicLink()) throw new Error('Symlinks are not supported: ' + file);
      if (stat.isDirectory()) walk(file);
      else if (stat.isFile()) result[path.relative(directory,file).split(path.sep).join('/')] = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
      else throw new Error('Unsupported file type: ' + file);
    }
  }
  walk(directory); return result;
}
const expected = inventory(source);
if (!expected['SKILL.md'] || !expected['LICENSE'] || !expected['THIRD_PARTY_NOTICES.md']) throw new Error('Incomplete source package');
if (fs.existsSync(target)) {
  if (fs.lstatSync(target).isSymbolicLink()) throw new Error('Refusing to replace a symlink destination');
  if (JSON.stringify(inventory(target)) === JSON.stringify(expected)) {
    console.log(JSON.stringify({status:'ALREADY_INSTALLED',target,files:Object.keys(expected).length})); process.exit(0);
  }
  if (!replace) { console.error('Destination differs. Nothing changed. Use --replace to preserve a backup and install.'); process.exit(1); }
}
fs.mkdirSync(targetRoot, {recursive:true});
const stagingParent = fs.mkdtempSync(path.join(targetRoot, '.ai-ready-sites-staging-'));
const staging = path.join(stagingParent, 'package');
let backup = null;
try {
  fs.cpSync(source, staging, {recursive:true, errorOnExist:true, force:false});
  if (JSON.stringify(inventory(staging)) !== JSON.stringify(expected)) throw new Error('Staged file verification failed');
  if (fs.existsSync(target)) {
    const backupRoot = path.join(path.dirname(targetRoot), 'ai-ready-sites-backups');
    fs.mkdirSync(backupRoot,{recursive:true});
    backup = path.join(backupRoot, new Date().toISOString().replace(/[:.]/g,'-') + '-' + crypto.randomBytes(3).toString('hex'));
    // Both exact absolute paths are checked against their intended parents before moving.
    if (!within(targetRoot,target) || !within(backupRoot,backup)) throw new Error('Invalid backup path');
    fs.renameSync(target,backup);
  }
  fs.renameSync(staging,target);
} catch (error) {
  if (backup && !fs.existsSync(target)) fs.renameSync(backup,target);
  throw error;
} finally {
  if (within(targetRoot,stagingParent) && fs.existsSync(stagingParent)) fs.rmSync(stagingParent,{recursive:true});
}
console.log(JSON.stringify({status:'INSTALLED',target,backup,files:Object.keys(expected).length,version:'0.3.0'}));
