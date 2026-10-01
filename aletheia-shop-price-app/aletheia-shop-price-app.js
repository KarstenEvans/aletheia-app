
(()=>{'use strict';
const el=id=>document.getElementById(id), norm=s=>String(s||'').trim().replace(/\s+/g,' ').toLowerCase();
const lines=s=>[...new Set(String(s||'').split(/\r?\n/).map(x=>x.trim()).filter(Boolean))];
const gbp=n=>(Number(n)<0?'-£'+Math.abs(Number(n)).toFixed(2):'£'+Number(n).toFixed(2));
const templates={
 blank:{shops:[],items:[]},
 grocery:{shops:["Tesco","Asda","Sainsbury's","Waitrose","Lidl","Aldi","Morrisons","Iceland","Ocado","Co-op"],items:["Semi-skimmed milk 2 L","Sliced bread 800 g","Eggs 6","Plain flour 1.5 kg","Bananas 1 kg","Apples 6","Potatoes 2 kg","Onions 1 kg","Carrots 1 kg","Chicken breast 1 kg","Beef mince 500 g","Rice 1 kg","Pasta 500 g","Cheddar 400 g","Butter 250 g","Baked beans 400 g","Tinned tomatoes 400 g","Tea bags 80","Breakfast cereal 500 g","Vegetable oil 1 L","Toilet rolls 9","Washing-up liquid 500 ml"]},
 diy:{shops:["B&Q","Wickes","Screwfix","Toolstation","Selco","Jewson","Travis Perkins"],items:["Electric lawnmower","Garden spade","Claw hammer","Wood screws pack of 100","Nails pack of 100","Cordless drill","Screwdriver set","White emulsion paint 5 L","Timber 2.4 m","Building sand bag","Silicone sealant tube","Gardening gloves"]},
 cars:{shops:["Halfords","Euro Car Parts","GSF Car Parts","Decathlon","Sports Direct","JD Sports","Evans Cycles"],items:["Engine oil 5 L (specify grade)","Wiper blades (specify vehicle)","Tyre inflator","Bicycle helmet","Bike inner tube (specify size)","Bicycle lights","Running shoes (specify size)","Football size 5","Resistance bands"]},
 gifts:{shops:["Bookshop.org","Waterstones","Amazon UK","The Range","Currys","Argos","John Lewis","Smyths Toys"],items:["Paperback gift book (specify title)","Audiobook gift voucher","Watch","Wireless keyboard","Computer mouse","Laptop (specify budget)","Headphones","Board game","Christmas decorations","Halloween costume","Wrapping paper"]}
};
const key='aletheia-shopping-v1', oldkey='aletheia-shop-price-last-shop';
let state={template:'blank',shops:[],items:[],loyalty:[],history:[]},offers=[],ranks=[],checked=null,handle=null;
const msg=(id,t)=>el(id).textContent=t;
const basketKey=()=>JSON.stringify(state.items.map(norm).sort());
function store(){try{localStorage.setItem(key,JSON.stringify(state))}catch(e){msg('setupStatus','Local saving unavailable. Export shopping-list.md to preserve changes.');}}
function readOld(str){
 const p=String(str||'').match(/ALETHEIA_SHOP_PRICE_LAST_SHOP([\s\S]*?)END_ALETHEIA_SHOP_PRICE_LAST_SHOP/);
 if(!p)return null;
 const a=p[1].match(/shops:\s*([\s\S]*?)products:/i),b=p[1].match(/products:\s*([\s\S]*)/i);
 return {shops:lines(a?a[1]:''),items:lines(b?b[1]:'')};
}
function paint(){
 el('template').value=templates[state.template]?state.template:'blank';
 el('shopLines').value=state.shops.join('\n');el('itemLines').value=state.items.join('\n');
 el('memberShops').value=state.loyalty.join(', ');graph();
}
function sync(){
 state.shops=lines(el('shopLines').value);state.items=lines(el('itemLines').value);
 state.loyalty=String(el('memberShops').value).split(',').map(x=>x.trim()).filter(Boolean);store();
 const block=(state.shops.length||state.items.length)?'ALETHEIA_SHOP_PRICE_LAST_SHOP\nshops:\n'+state.shops.join('\n')+'\nproducts:\n'+state.items.join('\n')+'\nEND_ALETHEIA_SHOP_PRICE_LAST_SHOP':'';
 el('lastShop').value=block;
 try{if(block)localStorage.setItem(oldkey,block);else localStorage.removeItem(oldkey)}catch(e){}
 el('lastShop').dispatchEvent(new Event('input'));graph();
}
window.getShopTask=function(){
 return 'SELECTED ALETHeIA SHOPPING COMMAND: '+el('question').value+
 '\nSelected shops ONLY:\n'+state.shops.join('\n')+
 '\nExact item lines, pack sizes and quantities:\n'+state.items.join('\n')+
 '\nConfirmed loyalty card shops ONLY: '+(state.loyalty.join(', ')||'none')+
 '\nSearch genuinely current sources when supported, and disclose when not. Report dates, exact/equivalent matches, and direct URLs. Never invent prices or stock.'+
 '\nReturn a copyable ALETHEIA_SHOP_PRICE_QUOTES_JSON block as defined in the canonical Markdown, with quoted shop, item (exact list line), line_total_gbp including requested quantity, matched_product, match, source_url, source_checked_at, loyalty, stock. No unsupported estimates.'+
 '\nITEM means the three cheapest selected shops per item. WEEKLY means three cheapest COMPLETE same-list baskets shown left to right, excluding retailers with missing items. SPLIT is optional extra stops, considering travel. GRAPH must use historical records from imported user file only. Do not claim the site has live API access.'+
 '\nIn the chosen AI I may attach barcode/product photos with + Camera / Gallery and type NEXT when finished. If already listed, confirm only genuine missing details before checking prices.';
};
function urlok(s){try{let u=new URL(s);return u.protocol==='https:'?u.href:null}catch(e){return null}}
function recent(t){const v=new Date(t).getTime(),now=Date.now();return Number.isFinite(v)&&v<=now+7200000&&v>=now-7*86400000}
function parse(){
 const raw=el('priceJson').value,b=raw.indexOf('{'),e=raw.lastIndexOf('}');
 if(b<0||e<=b)throw Error('Paste the structured JSON quotes block returned by your AI.');
 const data=JSON.parse(raw.slice(b,e+1));
 if(!Array.isArray(data.quotes)||data.quotes.length>1000)throw Error('A quotes array (up to 1000) is required.');
 const stores=new Map(state.shops.map(x=>[norm(x),x])),items=new Map(state.items.map(x=>[norm(x),x]));
 const memberships=new Set(state.loyalty.map(norm)),seen=new Map(),excluded={missing:0,stale:0,loyalty:0,outside:0};
 for(const q of data.quotes){
  const shop=stores.get(norm(q.shop)),item=items.get(norm(q.item));
  if(!shop||!item){excluded.outside++;continue}
  const total=Number(q.line_total_gbp),link=urlok(q.source_url),match=String(q.match||'').toUpperCase();
  if(!(total>0&&total<=100000)||!link||!q.matched_product||!['EXACT','EQUIVALENT','SUITABLE'].includes(match)||String(q.stock||'').toLowerCase()==='out of stock'){excluded.missing++;continue}
  if(!recent(q.source_checked_at)){excluded.stale++;continue}
  if(q.loyalty===true&&!memberships.has(norm(shop))){excluded.loyalty++;continue}
  const offer={shop,item,total,link,match,matched:String(q.matched_product),time:q.source_checked_at};
  const id=norm(shop)+'|'+norm(item);
  if(!seen.has(id)||seen.get(id).total>total)seen.set(id,offer);
 }
 offers=[...seen.values()];checked=recent(data.checked_at)?data.checked_at:new Date().toISOString();
 return excluded;
}
function compare(){
 el('perItem').replaceChildren();el('weeklyResult').replaceChildren();el('missingResult').replaceChildren();
 state.items.forEach(item=>{
  const d=document.createElement('section');d.className='hint';d.style.margin='12px 0';
  const title=document.createElement('strong');title.textContent=item;d.append(title);
  const matching=offers.filter(x=>norm(x.item)===norm(item)).sort((a,b)=>a.total-b.total||a.shop.localeCompare(b.shop)).slice(0,3);
  if(!matching.length){let p=document.createElement('p');p.textContent='No usable recent quote. Missing is not £0.';d.append(p)}
  else{const ol=document.createElement('ol');matching.forEach(x=>{let li=document.createElement('li');li.append(document.createTextNode(x.shop+' '+gbp(x.total)+' · '+x.match+' · '+x.matched+' · '+x.time+' '));let a=document.createElement('a');a.href=x.link;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Source';li.append(a);ol.append(li)});d.append(ol)}
  el('perItem').append(d);
 });
 const totals=state.shops.map(shop=>{const found=state.items.map(item=>offers.find(q=>norm(q.shop)===norm(shop)&&norm(q.item)===norm(item)));
 return {shop,total:Math.round(found.filter(Boolean).reduce((a,q)=>a+q.total,0)*100)/100,complete:!!state.items.length&&found.every(Boolean),missing:state.items.filter((x,i)=>!found[i])}});
 ranks=totals.filter(x=>x.complete).sort((a,b)=>a.total-b.total||a.shop.localeCompare(b.shop));
 if(!ranks.length)el('weeklyResult').textContent='No complete comparable basket. No cheapest whole shop can be determined.';
 else{
  const note=document.createElement('p');note.textContent='Three cheapest COMPLETE selected retailers, cheapest at left. Travel and delivery not included.';el('weeklyResult').append(note);
  const row=document.createElement('div');row.className='rankrow';row.setAttribute('role','list');
  ranks.slice(0,3).forEach((x,i)=>{let d=document.createElement('div');d.className='ranktile';d.setAttribute('role','listitem');let head=document.createElement('strong');head.textContent=(i+1)+'. '+x.shop;d.append(head,document.createElement('br'),document.createTextNode(gbp(x.total)));row.append(d)});
  el('weeklyResult').append(row);
 }
 const incomplete=totals.filter(x=>!x.complete);
 if(incomplete.length){const d=document.createElement('details'),s=document.createElement('summary'),ul=document.createElement('ul');s.textContent=incomplete.length+' shops excluded: incomplete basket';d.append(s);
  incomplete.forEach(x=>{let li=document.createElement('li');li.textContent=x.shop+' missing '+x.missing.slice(0,8).join('; ')+(x.missing.length>8?'…':'');ul.append(li)});d.append(ul);el('missingResult').append(d)}
}
function graph(){
 const target=el('trend');target.replaceChildren();
 const hs=state.history.filter(x=>x.basketKey===basketKey()).sort((a,b)=>Date.parse(a.date)-Date.parse(b.date)).slice(-20);
 if(!hs.length){target.textContent='No dated results recorded for this exact list.';return}
 const ol=document.createElement('ol');hs.forEach(h=>{const li=document.createElement('li');li.textContent=h.date.slice(0,10)+' '+gbp(h.total)+' '+h.shop;ol.append(li)});target.append(ol);
 if(hs.length<2){const p=document.createElement('p');p.textContent='Record another comparable check for a trend graph.';target.append(p);return}
 const n='http://www.w3.org/2000/svg',svg=document.createElementNS(n,'svg');
 svg.setAttribute('viewBox','0 0 390 175');svg.setAttribute('role','img');svg.setAttribute('aria-label','History of cheapest complete basket totals, with the precise values listed above');
 const lo=Math.min(...hs.map(x=>x.total)),hi=Math.max(...hs.map(x=>x.total)),range=Math.max(hi-lo,1);
 const pts=hs.map((h,i)=>({x:24+i*340/(hs.length-1),y:150-(h.total-lo)*110/range}));
 const poly=document.createElementNS(n,'polyline');poly.setAttribute('points',pts.map(p=>p.x+','+p.y).join(' '));poly.setAttribute('stroke','#315a45');poly.setAttribute('stroke-width','3');poly.setAttribute('fill','none');svg.append(poly);
 pts.forEach(p=>{let circle=document.createElementNS(n,'circle');circle.setAttribute('cx',p.x);circle.setAttribute('cy',p.y);circle.setAttribute('r','4');circle.setAttribute('fill','#315a45');svg.append(circle)});target.append(svg);
 const diff=hs.at(-1).total-hs[0].total,p=document.createElement('p');p.textContent='Recorded change '+(diff>0?'+':'')+gbp(diff)+' on the same shopping list. Past quotes are never treated as current.';target.append(p);
}
function markdown(){
 const data={schema:'aletheia-shopping-list-v1',exported:new Date().toISOString(),...state};
 return '# Aletheia Shopping List\n\n## Shops\n'+state.shops.map(s=>'- '+s).join('\n')+'\n\n## Products\n'+state.items.map(i=>'- '+i).join('\n')+'\n\n## Dated historical complete basket totals\n'+state.history.map(h=>'- '+h.date+' | '+h.shop+' | '+gbp(h.total)).join('\n')+'\n\n> These are historical observations, not live prices. Photos are not stored.\n\n<!-- ALETHEIA_SHOPPING_LIST_JSON_BEGIN\n'+JSON.stringify(data,null,2)+'\nALETHEIA_SHOPPING_LIST_JSON_END -->\n';
}
function download(content,name,type){let blob=new Blob([content],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500)}
async function saveMd(){
 const content=markdown();
 if(typeof window.showSaveFilePicker==='function'){
  try{const h=handle||await window.showSaveFilePicker({suggestedName:'shopping-list.md',types:[{description:'Markdown',accept:{'text/markdown':['.md']}}]});
   const writer=await h.createWritable();await writer.write(content);await writer.close();handle=h;msg('fileStatus','Saved shopping-list.md with permission.');return}
  catch(e){if(e.name==='AbortError'){msg('fileStatus','Save cancelled.');return}}
 }
 download(content,'shopping-list.md','text/markdown');msg('fileStatus','Downloaded shopping-list.md. Import it next time if needed.');
}
function importMd(text){
 const m=text.match(/ALETHEIA_SHOPPING_LIST_JSON_BEGIN\s*([\s\S]*?)\s*ALETHEIA_SHOPPING_LIST_JSON_END/);
 if(m){
  const obj=JSON.parse(m[1]);if(obj.schema!=='aletheia-shopping-list-v1'||!Array.isArray(obj.shops)||!Array.isArray(obj.items))throw Error('Invalid list structure.');
  state.shops=lines(obj.shops.join('\n')).slice(0,500);state.items=lines(obj.items.join('\n')).slice(0,500);
  state.template=templates[obj.template]?obj.template:'blank';state.loyalty=Array.isArray(obj.loyalty)?obj.loyalty.map(String):[];
  const good=Array.isArray(obj.history)?obj.history.filter(h=>h&&typeof h.basketKey==='string'&&typeof h.date==='string'&&Number(h.total)>0&&Number.isFinite(Number(h.total))):[];
  state.history=[...new Map([...state.history,...good].map(h=>[h.date+'|'+h.basketKey+'|'+h.shop,h])).values()].slice(-200);
 }else{const old=readOld(text);if(!old)throw Error('Not an Aletheia list.');state.shops=old.shops;state.items=old.items;state.template='blank'}
 paint();sync();offers=[];ranks=[];el('priceJson').value='';compare();msg('fileStatus','Lists loaded and dated history merged. Recheck current prices before comparison.');
}
try{
 const obj=JSON.parse(localStorage.getItem(key));
 if(obj&&Array.isArray(obj.shops)&&Array.isArray(obj.items)){state={template:obj.template||'blank',shops:obj.shops,items:obj.items,loyalty:Array.isArray(obj.loyalty)?obj.loyalty:[],history:Array.isArray(obj.history)?obj.history:[]}}
 else{const old=readOld(localStorage.getItem(oldkey)||el('lastShop').value);if(old){state.shops=old.shops;state.items=old.items}}
}catch(e){const old=readOld(el('lastShop').value);if(old){state.shops=old.shops;state.items=old.items}}
paint();if(state.shops.length||state.items.length)sync();
el('template').addEventListener('change',e=>{const choice=e.target.value;if((state.shops.length||state.items.length)&&!confirm('Replace your current shops and items with the '+choice+' template? Dated history is preserved.')){e.target.value=state.template;return}
 state.template=choice;state.shops=[...templates[choice].shops];state.items=[...templates[choice].items];paint();sync();msg('setupStatus','Template ready. Edit shops and items as needed.')});
['shopLines','itemLines','memberShops'].forEach(id=>el(id).addEventListener('input',sync));
el('lastShop').addEventListener('change',()=>{const p=readOld(el('lastShop').value);if(p){state.shops=p.shops;state.items=p.items;state.template='blank';paint();sync()}});
el('compareQuotes').addEventListener('click',()=>{
 if(!state.shops.length||!state.items.length){msg('priceStatus','Enter shops and products first.');return}
 try{const rejected=parse();compare();msg('priceStatus',offers.length+' sourced recent item/shop prices accepted; '+ranks.length+' complete baskets. Excluded '+JSON.stringify(rejected)+'.')}
 catch(e){offers=[];ranks=[];msg('priceStatus','Invalid data: '+e.message);el('weeklyResult').textContent='No verified comparison.'}
});
el('recordCheck').addEventListener('click',()=>{
 if(!ranks.length){msg('priceStatus','Record cancelled: no complete priced basket.');return}
 const best=ranks[0],rec={date:checked||new Date().toISOString(),basketKey:basketKey(),shop:best.shop,total:best.total};
 if(!state.history.some(x=>x.date===rec.date&&x.basketKey===rec.basketKey&&x.shop===rec.shop))state.history.push(rec);
 state.history=state.history.slice(-200);store();graph();msg('priceStatus','Recorded '+gbp(rec.total)+' at '+rec.shop+'. Export shopping-list.md for a durable backup.');
});
el('saveMd').addEventListener('click',saveMd);
el('loadMd').addEventListener('change',async e=>{const file=e.target.files&&e.target.files[0];if(!file)return;
 if(file.size>2000000){msg('fileStatus','File over 2MB limit.');return}
 try{importMd(await file.text())}catch(err){msg('fileStatus','Import failed: '+err.message)}e.target.value='';
});
el('csv').addEventListener('click',()=>{if(!ranks.length){msg('priceStatus','No complete verified results to download.');return}
 const rows=['Rank,Shop,Total GBP,Checked'];
 ranks.forEach((x,i)=>rows.push((i+1)+',"'+x.shop.replace(/"/g,'""')+'",'+x.total+','+checked));
 download(rows.join('\r\n'),'shopping-weekly-comparison.csv','text/csv');
});
el('cameraImage').addEventListener('change',async e=>{const file=e.target.files&&e.target.files[0];if(!file)return;
 if(file.size>15000000){msg('scanStatus','Image too large. Use your AI camera or type the barcode.');return}
 if(typeof window.BarcodeDetector==='undefined'){msg('scanStatus','Local barcode scanning unsupported. Use + Camera in your chosen AI.');return}
 try{const supported=await BarcodeDetector.getSupportedFormats(),formats=['ean_13','ean_8','upc_a','upc_e'].filter(x=>supported.includes(x));
  if(!formats.length)throw Error('Unsupported EAN/UPC format');
  const image=await createImageBitmap(file),matches=await new BarcodeDetector({formats}).detect(image);if(image.close)image.close();
  const m=matches.find(x=>/^\d{8,14}$/.test(String(x.rawValue)));
  if(!m){msg('scanStatus','No readable barcode: photograph the digits or use AI Camera.');return}
  const item='EAN '+m.rawValue;
  if(!lines(el('itemLines').value).some(x=>norm(x)===norm(item))){el('itemLines').value+=(el('itemLines').value.trim()?'\n':'')+item;sync()}
  msg('scanStatus','Added barcode '+m.rawValue+'. Ask your AI to verify actual product and size. The photo was not saved.');
 }catch(err){msg('scanStatus','Barcode detection failed. Use AI Camera / Photos or type the code.')}
 e.target.value='';
});
})();
