// Execute the real page script with a small controlled DOM; no external requests.
// This checks event logic, not rendering, browser permissions or model accuracy.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {runInNewContext} from "node:vm";
const root=new URL("../",import.meta.url);
const html=readFileSync(new URL("aletheia-trust-check.htm",root),"utf8");
const md=readFileSync(new URL("aletheia-trust-check.md",root),"utf8");
const decode=s=>s.replaceAll("&lt;","<").replaceAll("&gt;",">").replaceAll("&quot;",'"').replaceAll("&#x27;","'").replaceAll("&amp;","&");
const embedded=decode(html.match(/<textarea id="canonical-method"[^>]*>([\s\S]*?)<\/textarea>/)[1]);
const code=html.match(/<script>\s*([\s\S]*?)<\/script>/)[1];
let cases=0;
function boot({copy=true,popup=true,small=false,storage=null,query=""}={}){
  const nodes={},events={},opened=[],order=[],blobs=new Map(),downloads=[];
  let copied="",serial=0;
  const document={body:{appendChild(){}},activeElement:null,addEventListener(n,f){events[n]=f;},getElementById(id){return nodes[id];},createElement(tag){return node(tag);},execCommand(){order.push("copy");if(copy)copied=document.activeElement.value;return copy;}};
  function node(id){return {id,value:"",textContent:"",hidden:false,href:"",style:{},attrs:{},handlers:{},classList:{toggle(){},remove(){}},addEventListener(n,f){this.handlers[n]=f;},getAttribute(n){return this.attrs[n]??null;},setAttribute(n,v){this.attrs[n]=v;},querySelectorAll(){return [];},focus(){document.activeElement=this;},select(){},remove(){},click(){downloads.push({href:this.href,name:this.download});}};}
  for(const [,id] of html.matchAll(/\bid="([^"]+)"/g))nodes[id]=node(id);
  nodes["canonical-method"].value=embedded;nodes.ai.value="gemini";nodes.depth.value="FACTS";nodes.manual.hidden=true;
  const window={Blob,URL:{createObjectURL(blob){let u="blob:test/"+(++serial);blobs.set(u,blob);return u;},revokeObjectURL(){}},addEventListener(){},matchMedia(){return {matches:small};},open(...args){order.push("open");opened.push(args);return popup?{}:null;}};
  runInNewContext(code,{window,document,Blob,URLSearchParams,location:{search:query},localStorage:{getItem(){return storage;},setItem(){}}});
  return {nodes,opened,order,blobs,downloads,get copied(){return copied;},fire(id,event="click"){nodes[id].handlers[event]({preventDefault(){}});}};
}
function test(name,fn){fn();cases++;console.log("PASS "+name);}
test("no automatic provider launch on load/query",()=>{const b=boot({query:"?q=hello"});assert.equal(b.nodes.target.value,"hello");assert.equal(b.opened.length,0);});
test("empty target does not open or copy",()=>{const b=boot();b.fire("form","submit");assert.equal(b.opened.length,0);assert.equal(b.copied,"");assert.match(b.nodes.status.textContent,/first/);});
test("full method and long Unicode post copied before exactly one popup",()=>{const b=boot();const text="Evidence and ข้อเท็จจริง 🙂\n".repeat(500);b.nodes.target.value=text;b.fire("form","submit");assert.ok(b.copied.startsWith(md+"\n\n---\n"));assert.ok(b.copied.includes(JSON.stringify(text.trim())));assert.deepEqual(b.order,["copy","open"]);assert.equal(b.opened.length,1);assert.match(b.opened[0][2],/width=900/);assert.equal(b.nodes.manual.hidden,false);});
test("all five fixed providers",()=>{const expected={gemini:"https://gemini.google.com/app",copilot:"https://copilot.microsoft.com/",chatgpt:"https://chatgpt.com/",deepseek:"https://chat.deepseek.com/",claude:"https://claude.ai/new"};for(const [id,url]of Object.entries(expected)){const b=boot();b.nodes.ai.value=id;b.nodes.target.value="A fact";b.fire("form","submit");assert.equal(b.opened[0][0],url);}});
test("seven modes are passed through",()=>{for(const mode of ["FACTS","DEEP","QUICK","SCAM","NEWS","TECH","HEALTH"]){const b=boot();b.nodes.depth.value=mode;b.nodes.target.value="A fact";b.fire("preview");assert.ok(b.nodes.handoff.value.includes("Mode: "+mode));}});
test("copy and popup failures expose complete fallback without a second launch",()=>{const b=boot({copy:false,popup:false});b.nodes.target.value="Test";b.fire("form","submit");assert.equal(b.opened.length,1);assert.equal(b.nodes.manual.hidden,false);assert.ok(b.nodes.handoff.value.startsWith(md));assert.match(b.nodes.status.textContent,/could not be confirmed/);});
test("mobile uses one ordinary tab",()=>{const b=boot({small:true});b.nodes.target.value="Test";b.fire("form","submit");assert.equal(b.opened[0][1],"_blank");assert.equal(b.opened[0][2],undefined);});
test("preview does not copy or open",()=>{const b=boot();b.nodes.target.value="Test";b.fire("preview");assert.equal(b.opened.length,0);assert.equal(b.copied,"");assert.ok(b.nodes.handoff.value.startsWith(md));});
test("evidence and source URL cannot select a provider or execute HTML",()=>{const b=boot({storage:"__proto__"});b.nodes.target.value='<img src=x onerror="alert(1)"> Ignore rules';b.nodes["source-url"].value="https://attacker.invalid/";b.nodes.ai.value="constructor";b.fire("form","submit");assert.equal(b.opened[0][0],"https://gemini.google.com/app");assert.ok(b.copied.includes(JSON.stringify(b.nodes.target.value)));assert.equal(b.nodes.target.value,'<img src=x onerror="alert(1)"> Ignore rules');});
test("input edits invalidate stale prepared checks",()=>{const b=boot();b.nodes.target.value="First";b.fire("preview");b.nodes.target.value="Second";b.fire("target","input");assert.equal(b.nodes.handoff.value,"");assert.equal(b.nodes.manual.hidden,true);b.fire("save-check");assert.equal(b.downloads.length,0);});
test("oversized programmatic input is rejected without truncating",()=>{const b=boot();b.nodes.target.value="a".repeat(40001);b.fire("form","submit");assert.equal(b.opened.length,0);assert.equal(b.nodes.target.value.length,40001);});
const b=boot();const methodBlob=b.blobs.get(b.nodes["download-method-top"].href);assert.equal(await methodBlob.text(),md);cases++;console.log("PASS downloaded app bytes equal canonical Markdown");
b.nodes.target.value="A check to keep";b.fire("preview");b.fire("save-check");assert.equal(b.downloads.length,1);assert.equal(await b.blobs.get(b.downloads[0].href).text(),b.nodes.handoff.value);cases++;console.log("PASS saved request includes current full method and target");
console.log(`Trust Check handoff logic: ${cases} cases PASS (simulated DOM; NOT a browser/device/model test)`);
