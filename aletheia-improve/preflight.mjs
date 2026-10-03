#!/usr/bin/env node
// Aletheia Improve preflight: offline/read-only, Node >=18.
// node aletheia-improve/preflight.mjs --story Pip-and-the-Maples-Secret
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const args=process.argv.slice(2), i=args.indexOf('--story'), slug=i<0?'':args[i+1];
const strict=args.includes('--strict'), checks=[];
const exists=p=>fs.existsSync(path.resolve(root,p));
const read=p=>exists(p)?fs.readFileSync(path.resolve(root,p),'utf8'):'';
const check=(id,ok,detail,absent='FAIL')=>checks.push({id,status:ok?'PASS':absent,detail});
const required=['AGENTS.md','README.md','aletheia-GUI.md','aletheia-dev.md','aletheia-code.md','aletheia-improve/aletheia-improve.md','aletheia-storyteller.md','aletheia-storyteller-page.md','aletheia-storyteller.htm','aletheia-storyteller-rsc.htm','shared/README.md','shared/link-sprites.css','shared/link-sprites.js','shared/link-sprites.json','stories/stories.json'];
for(const p of required)check('required:'+p,exists(p),p);
for(const p of ['stories/stories.json','shared/link-sprites.json'])try{JSON.parse(read(p));check('json:'+p,true,'Valid JSON')}catch(e){check('json:'+p,false,String(e))}
if(!slug||!/^[A-Za-z0-9_-]+$/.test(slug))check('story:argument',false,'Supply safe --story <file-stem>');
else {
 const story='stories/'+slug+'.md',post='stories/'+slug+'-post.htm',page='stories/'+slug+'-page.md',youtube='stories/'+slug+'-youtube-video.md';
 for(const f of [story,post,page,youtube])check('deliverable:'+f,exists(f),f);
 const md=read(story),html=read(post);
 for(const f of [story,page,youtube])if(exists(f))check('protocols:'+f,read(f).includes('github.com/KarstenEvans/aletheia-protocol')&&read(f).includes('github.com/KarstenEvans/thalia-protocol'),'Aletheia and Thalia protocol references');
 check('story:substantive',md.length>1500,'Complete story text, rather than synopsis');
 check('story:camera',/\[(?:wide|zoom|pan);/.test(md),'Actual camera grammar');
 check('story:voice',/\[voice-profile;/.test(md)&&/\[voice:/.test(md),'Voice profiles and tags');
 const images=[...md.matchAll(/^\[image;([^;\]\r\n]+)/gm)].map(x=>x[1]);
 check('story:image-tags',images.length>0,'Images referenced in story');
 const missing=images.filter(x=>x.includes('/')||x.includes('..')||!exists('stories/'+x));
 check('story:installed-image-binaries',images.length>0&&missing.length===0,missing.length?'Missing: '+missing.join(', '):'Installed images found');
 let registered=false;try{registered=JSON.parse(read('stories/stories.json')).stories.some(x=>x.file===story)}catch{}
 check('story:manifest',registered,'Registered in canonical player manifest','NOT_TESTED');
 if(registered)check('manifest:no-phantom-assets',missing.length===0,'Registered story must not reference absent art');
 if(exists(post)){
  const urls=[...html.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/gi)].map(x=>x[1].split(/[?#]/)[0]);
  const broken=urls.filter(u=>u&&!u.startsWith('#')&&!/^(?:[a-z][\w+.-]*:|\/\/)/i.test(u)).filter(u=>!exists(path.join('stories',u)));
  check('post:relative-destinations',broken.length===0,broken.join(', ')||'All local destinations exist');
  check('post:burger-control',/<(?:button|summary)\b[^>]*(?:menu|burger)|(?:aria-label|id)=["'][^"']*(?:menu|burger)/i.test(html),'Menu presence; behaviour requires browser test');
  check('post:books-and-gifts',/Books\s*(?:&amp;|&)\s*Gifts/i.test(html)&&/aletheia-storyteller-rsc\.htm/.test(html),'Relevant resource link');
  check('post:constellation',/shared\/link-sprites\.css/.test(html)&&/shared\/link-sprites\.js/.test(html)&&/data-aletheia-constellation/.test(html),'Shared navigation, not invented stars');
  check('post:static-stars',(html.match(/aletheia-constellation__link/g)||[]).length>=5,'At least five static anchors');
  check('post:canonical-player',/aletheia-storyteller\.htm/.test(html),'Existing player link');
 }
 if(exists(youtube))check('youtube:narration-draft',read(youtube).length>=1500&&/scene/i.test(read(youtube))&&/narrat|voiceover/i.test(read(youtube)),'Full script equivalence still needs editorial verification');
}
check('manual:visual',false,'Requires rendered desktop/mobile checks','NOT_TESTED');
check('manual:live',false,'Requires public URL, seasonal, and device verification','NOT_TESTED');
const counts=Object.fromEntries(['PASS','FAIL','NOT_TESTED'].map(s=>[s,checks.filter(x=>x.status===s).length]));
const receipt={validator:'aletheia-improve-preflight',version:'1',story:slug||null,counts,checks};
console.log(JSON.stringify(receipt,null,2));
process.exitCode=counts.FAIL?1:(strict&&counts.NOT_TESTED?2:0);
