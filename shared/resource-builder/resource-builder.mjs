// Aletheia Resource Builder — no dependencies, Node.js 18+.
// Discover candidate metadata; never treat discovery as permission. No automatic publishing.
function attributes(tag){const out={};for(const m of tag.matchAll(/([:\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g))out[m[1].toLowerCase()]=m[2]??m[3]??m[4];return out;}

function clean(s){return String(s??"").replace(/<[^>]*>/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/\s+/g," ").trim();}

function esc(s){return String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");}

function safeLink(s){return typeof s==="string"&&/^https:\/\/[a-z0-9][a-z0-9.-]+(?::443)?(?:[/?#]|$)/i.test(s)&&!/[<>"'\s\\]/.test(s);}

function discover(html,base,resolve){
 const meta={},json=[],images=[];let pageTitle="";
 for(const m of html.matchAll(/<meta\b[^>]*>/gi)){const a=attributes(m[0]);if((a.property||a.name)&&a.content)meta[(a.property||a.name).toLowerCase()]=a.content;}
 for(const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)){if(attributes(m[1]).type?.toLowerCase()==="application/ld+json"){try{json.push(JSON.parse(m[2]));}catch{}}}
 function visit(o){if(Array.isArray(o))return o.flatMap(visit);if(!o||typeof o!=="object")return [];return [o,...(o["@graph"]?visit(o["@graph"]):[]),...(o.mainEntity?visit(o.mainEntity):[])];}
 const products=json.flatMap(visit).filter(x=>[x["@type"]].flat().includes("Product"));const p=products.length===1?products[0]:null;
 pageTitle=clean(p?.name||meta["og:title"]||html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]);
 function add(raw,method,alt="",score=0){if(typeof raw==="object"&&raw)raw=raw.url||raw.contentUrl;if(typeof raw!=="string")return;const url=resolve(raw,base);if(!safeLink(url)||/logo|favicon|sprite|tracking|placeholder|pixel|cookie|payment|banner|badge/i.test(url))return;if(images.some(x=>x.url===url))return;images.push({url,method,alt:clean(alt),score,permission:"unknown",publication:"candidate-only"});}
 if(p)for(const item of [p.image??[]].flat())add(item,"Product JSON-LD",p.name,100);
 add(meta["og:image:secure_url"]||meta["og:image"],"Open Graph",meta["og:image:alt"],70);add(meta["twitter:image"],"Twitter image",meta["twitter:image:alt"],60);
 for(const m of html.matchAll(/<img\b[^>]*>/gi)){const a=attributes(m[0]);if((a.width&&Number(a.width)<100)||(a.height&&Number(a.height)<100))continue;const context=[a.class,a.id,a.alt].join(" ");const src=a["data-src"]||a["data-large_image"]||a.src;add(src,/product|gallery|woocommerce/i.test(context)?"Product gallery":"Page image",a.alt,/product|gallery|woocommerce/i.test(context)?80:20);}
 return {source:base,title:pageTitle,descriptionCandidate:clean(p?.description||meta["og:description"]||meta.description).slice(0,500),productIdentity:products.length===1?"single Product JSON-LD":products.length>1?"ambiguous products":"metadata only",candidates:images.sort((a,b)=>b.score-a.score).slice(0,8),note:"Descriptions are source material: paraphrase facts; verify exact identity and image rights before publication."};
}

function card(item){
 if(!safeLink(item.href)||!item.title||!item.description)throw Error("Missing safe destination/title/description");
 const allowed=["approved-feed","merchant-permission","open-license","owner","official-embed"].includes(item.image?.rights);
 const use=allowed&&safeLink(item.image?.url)&&item.image.alt&&item.image.source&&item.image.credit;
 const rel=item.affiliate==="approved"?"noopener sponsored":"noopener";const protect=item.independentAffiliate===true&&item.affiliate==="approved"?" data-awinignore":"";
 const image=use?`<img class="resource-photo" src="${esc(item.image.url)}" alt="${esc(item.image.alt)}" loading="lazy" decoding="async" onerror="this.hidden=true">`:"";
 const credit=use?`<p class="sub image-credit">${item.image.illustrative?"Illustrative image, not the exact product. ":""}${esc(item.image.credit)}${safeLink(item.image.source)?` · <a href="${esc(item.image.source)}" target="_blank" rel="noopener">Image source</a>`:""}${safeLink(item.image.licenseUrl)?` · <a href="${esc(item.image.licenseUrl)}" target="_blank" rel="noopener">Licence</a>`:""}</p>`:"";
 return `<article class="card resource-card"><a class="resource-link" href="${esc(item.href)}" target="_blank" rel="${rel}"${protect}>${image}<h3>${esc(item.title)}</h3><p>${esc(item.description)}</p><span class="resource-cta">${esc(item.label||"View resource")} ↗</span></a>${credit}</article>`;
}

import {readFile} from 'node:fs/promises';
import {lookup} from 'node:dns/promises';
import {isIP} from 'node:net';
const [cmd,arg,source]=process.argv.slice(2);
function resolve(raw,base){try{const u=new URL(raw,base);return u.protocol==='https:'&&!u.username&&!u.password?u.href:'';}catch{return '';}}
async function fetchPage(raw){const u=new URL(raw);if(u.protocol!=='https:'||u.username||u.password||u.port&&u.port!=='443'||isIP(u.hostname)||!u.hostname.includes('.')||/\.(local|internal|localhost)$/i.test(u.hostname))throw Error('Only public HTTPS hostnames are allowed');const ips=await lookup(u.hostname,{all:true});if(!ips.length||ips.some(x=>x.family!==4||/^(?:0\.|10\.|127\.|169\.254\.|192\.168\.|172\.(?:1[6-9]|2\d|3[01])\.|100\.(?:6[4-9]|[7-9]\d|1[01]\d|12[0-7])\.|22[4-9]\.|23\d\.|24\d\.|25[0-5]\.)/.test(x.address)))throw Error('Non-public or unsupported IP; use saved HTML instead');const r=await fetch(u,{redirect:'error',signal:AbortSignal.timeout(10000),headers:{'User-Agent':'AletheiaResourceBuilder/0.1 (single requested page)','Accept':'text/html'}});if(!r.ok||!r.headers.get('content-type')?.includes('text/html'))throw Error('Page unavailable or not HTML: '+r.status);const reader=r.body.getReader();let n=0;const parts=[];try{while(true){const {done,value}=await reader.read();if(done)break;n+=value.byteLength;if(n>2000000)throw Error('HTML exceeds 2 MB');parts.push(value);}}finally{await reader.cancel().catch(()=>{});}return Buffer.concat(parts).toString('utf8');}
if(cmd==='discover'){if(!safeLink(arg)||!source)throw Error('Usage: discover https://host/product saved.html|--fetch');const html=source==='--fetch'?await fetchPage(arg):await readFile(source,'utf8');if(html.length>2000000)throw Error('HTML exceeds 2 MB');console.log(JSON.stringify(discover(html,arg,resolve),null,2));}
else if(cmd==='card'){console.log(card(JSON.parse(await readFile(arg,'utf8'))));}
else if(cmd==='self-test'){const html="<html><head><title>Rice bowl</title><meta property=\"og:image\" content=\"https://example.org/og.jpg\"><script type=\"application/ld+json\">{\"@graph\":[{\"@type\":\"Product\",\"name\":\"Bowl\",\"description\":\"A blue bowl\",\"image\":[\"https://example.org/bowl.jpg\"]}]}</script></head><body><img src=\"https://example.org/logo.png\"><img class=\"product gallery\" src=\"https://example.org/gallery.jpg\" alt=\"Bowl side view\"></body></html>";const x=discover(html,'https://example.org/product',resolve);if(x.title!=='Bowl'||!x.candidates[0].url.endsWith('bowl.jpg')||x.candidates.some(c=>c.url.includes('logo')))throw Error('extract failed');const sample={"title":"<b>Rice bowl","description":"A & B","href":"https://example.org/product","image":{"url":"https://example.org/bowl.jpg","alt":"Bowl","source":"https://example.org/photo","credit":"Creator","rights":"unknown"}};if(card(sample).includes('<img')||!card(sample).includes('&lt;b&gt;')||!card({...sample,image:{...sample.image,rights:'open-license'}}).includes('<img'))throw Error('rights/escape failed');let bad=false;try{card({...sample,href:'javascript:alert(1)'})}catch{bad=true}if(!bad)throw Error('URL validation failed');console.log('Self-test passed');}
else console.error('Usage: resource-builder.mjs discover URL saved.html|--fetch | card approved-item.json | self-test');
