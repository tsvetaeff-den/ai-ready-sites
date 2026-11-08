#!/usr/bin/env node
import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import http from 'node:http';import assert from 'node:assert/strict';import {spawn} from 'node:child_process';import {fileURLToPath} from 'node:url';
const args=process.argv.slice(2);const moduleIndex=args.indexOf('--module');
if(moduleIndex<0||!args[moduleIndex+1]){console.log('node scripts/test-browser.mjs --module EXISTING_PLAYWRIGHT_MODULE [--channel chrome] [--out DIRECTORY]');process.exit(2);}
const read=name=>{const i=args.indexOf(name);return i<0?null:args[i+1];};
const out=path.resolve(read('--out')||fs.mkdtempSync(path.join(os.tmpdir(),'ai-ready-browser-test-')));
const helper=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../skills/ai-ready-sites/scripts/browser-check.mjs');
const page='<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" href="data:,"><title>Local UI test</title><style>body{margin:0;font:18px system-ui;color:#18342b;background:#f5f7f4}main{max-width:48rem;margin:auto;padding:32px}button{padding:14px 20px;background:#18342b;color:white;border:0;border-radius:4px;font:inherit}button:focus-visible{outline:3px solid #c05b16;outline-offset:4px}</style></head><body><main><h1>Local UI test</h1><p>A synthetic interaction for testing the included helper.</p><button onclick="document.querySelector(\'[role=status]\').textContent=\'Checked\'">Run check</button><p role="status">Ready</p></main></body></html>';
const server=http.createServer((req,res)=>{res.writeHead(200,{'Content-Type':'text/html'});res.end(req.url==='/broken'?page.replace('<main>','<main style="min-width:2000px">')+'<script>throw new Error("intentional runtime failure")</script>':page);});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const url='http://127.0.0.1:'+server.address().port;
async function run(extra){return await new Promise(resolve=>{const child=spawn(process.execPath,[helper,...extra],{stdio:['ignore','pipe','pipe']});let stdout='',stderr='';child.stdout.on('data',d=>stdout+=d);child.stderr.on('data',d=>stderr+=d);child.on('close',code=>resolve({code,stdout,stderr}));});}
const channel=read('--channel')?['--channel',read('--channel')]:[];
try {
  let r=await run(['--url',url,'--out',path.join(out,'missing'),'--module',path.join(out,'not-installed.cjs')]);assert.equal(r.code,2,r.stderr);assert.equal(JSON.parse(r.stdout).status,'NOT_RUN');
  r=await run(['--url',url,'--out',path.join(out,'good'),'--module',args[moduleIndex+1],...channel,'--button','Run check','--expect-status','Checked']);
  assert.equal(r.code,0,r.stdout+r.stderr);const good=JSON.parse(r.stdout);assert.ok(good.results.every(x=>x.checks.expectedStatus));
  r=await run(['--url',url+'/broken','--out',path.join(out,'broken'),'--module',args[moduleIndex+1],...channel]);assert.equal(r.code,1,r.stdout+r.stderr);const bad=JSON.parse(r.stdout);assert.ok(bad.results.every(x=>!x.checks.noHorizontalOverflow&&!x.checks.noRuntimeErrors));
  console.log(JSON.stringify({status:'PASS',checks:['missing runtime -> NOT_RUN','safe button -> observed status on both viewports','overflow and runtime exception -> FAIL'],artifacts:out}));
} finally {await new Promise(resolve=>server.close(resolve));}
