import test from 'node:test';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {setTimeout as sleep} from 'node:timers/promises';
import {readFile} from 'node:fs/promises';
const base='http://127.0.0.1:18788';
test('Sif: key-free and origin-guard tests',async t=>{
 const child=spawn(process.execPath,['server.mjs'],{cwd:new URL('.',import.meta.url),env:{...process.env,OPENAI_API_KEY:'',ALETHEIA_ASSISTANT_PORT:'18788'},stdio:['ignore','pipe','pipe']});
 let out='';child.stdout.on('data',x=>out+=x);child.stderr.on('data',x=>out+=x);
 try{
  for(let i=0;i<80&&!out.includes('local bridge:');i++)await sleep(50);
  assert.match(out,/local bridge:/);
  await t.test('health: key-free handoff',async()=>{const r=await fetch(base+'/api/health');assert.equal(r.status,200);assert.deepEqual(await r.json(),{ok:true,ready:false,mode:'handoff'});});
  await t.test('HTML is independently optional',async()=>{const r=await fetch(base+'/');const s=await r.text();assert.equal(r.status,200);assert.match(s,/Optional interface/);assert.match(s,/Standard Aletheia website/);assert.equal((s.match(/data-skill="/g)||[]).length,6);assert.doesNotMatch(s,/pub\.3182162\.min\.js/);});
  await t.test('no free pretended API calls',async()=>{const r=await fetch(base+'/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:'{"message":"hello","skill":"trust"}'});assert.equal(r.status,503);assert.match((await r.json()).error,/not configured/);});
  await t.test('foreign origin denied',async()=>{const r=await fetch(base+'/api/health',{headers:{Origin:'https://example.org'}});assert.equal(r.status,403);});
  await t.test('no arbitrary file routes',async()=>{const r=await fetch(base+'/secrets');assert.equal(r.status,404);});
  await t.test('production pages retain one master tag and protocol refs',async()=>{for(const f of ['aletheia-assistant.htm','aletheia-assistant-rsc.htm']){const s=await readFile(new URL('./'+f,import.meta.url),'utf8');assert.equal((s.match(/pub\.3182162\.min\.js/g)||[]).length,1);}const h=await readFile(new URL('./aletheia-assistant.htm',import.meta.url),'utf8');assert.match(h,/github\.com\/KarstenEvans\/aletheia-protocol/);assert.match(h,/github\.com\/KarstenEvans\/thalia-protocol/);});
 }finally{child.kill('SIGTERM');await sleep(150);}
});