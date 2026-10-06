/* Aletheia Rice Intelligence v0.4 - Four-Scout + Imaginary Paper Lab
   Local-only orchestration. No real trading, orders, counterparty contact or brokerage. */
(function(){
'use strict';

var SCOUTS={
  GPT:{name:'ChatGPT',provider:'chatgpt',url:'https://chatgpt.com/'},
  GEM:{name:'Google Gemini',provider:'gemini',url:'https://gemini.google.com/'},
  DS:{name:'DeepSeek',provider:'deepseek',url:'https://chat.deepseek.com/'},
  KIMI:{name:'Kimi',provider:'kimi',url:'https://www.kimi.com/'}
};
var REPORTS={};
var LEDGER_KEY='aletheia-rice-paper-ledger-v1';
var LEDGER_SCHEMA='aletheia-rice-paper-ledger/v1';
var IMPORT_SCHEMA='aletheia-rice-paper-trades/v1';
var STARTING_I=100000;
var BT=String.fromCharCode(96),FENCE=BT+BT+BT;
var ledger={schema:LEDGER_SCHEMA,starting_capital_i:STARTING_I,currency:'GBP',imaginary_unit:'i',positions:[]};

function el(id){return document.getElementById(id)}
function safe(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function day(){return new Date().toISOString().slice(0,10)}
function loadLedger(){try{var x=JSON.parse(localStorage.getItem(LEDGER_KEY)||'null');if(x&&x.schema===LEDGER_SCHEMA&&Array.isArray(x.positions))ledger=x}catch(e){}}
function saveLedger(){try{localStorage.setItem(LEDGER_KEY,JSON.stringify(ledger))}catch(e){}paintLedger()}
function dl(name,body,type){
  type=type||'text/markdown';
  var u=URL.createObjectURL(new Blob([body],{type:type+';charset=utf-8'})),a=document.createElement('a');
  a.href=u;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u)},1200);
}
async function copy(text){
  try{await navigator.clipboard.writeText(text);return true}catch(e){
    var x=document.createElement('textarea');x.value=text;x.style.cssText='position:fixed;left:-9999px;top:0';
    document.body.append(x);x.select();var ok=false;try{ok=document.execCommand('copy')}catch(e2){}x.remove();return ok;
  }
}
function status(t){if(el('scoutStatus'))el('scoutStatus').textContent=t}
function paperStatus(t){if(el('paperStatus'))el('paperStatus').textContent=t}
function basePrompt(){
  if(window.AletheiaRice&&typeof window.AletheiaRice.promptFor==='function')return window.AletheiaRice.promptFor(null);
  return (el('promptText')&&el('promptText').value.trim())||'Run a current Aletheia Rice Intelligence briefing from public sources.';
}
function scoutPrompt(code){
  var s=SCOUTS[code];
  return basePrompt()+
  '\n\n## FOUR-SCOUT PASS - '+s.name+' / '+code+
  '\nAct as an independent rice-market research scout. Do not rely on another AI\\'s answer.'+
  '\nSearch broadly in relevant original languages where useful. For China-facing demand, include Chinese official/primary sources where material.'+
  '\nSeparate OBSERVED FACT, SOURCE FORECAST and INFERENCE.'+
  '\nPreserve exact dates, country, rice grade, unit, trade basis and original URLs.'+
  '\nDo not count repeated news stories that originate from the same source as independent confirmation.'+
  '\nDo not place or recommend a real trade.'+
  '\n\n### CLAIM LEDGER\nFor every material claim: claim | evidence type | original source | source URL | observed/release date | confidence.'+
  '\n### CONTRADICTIONS / GAPS\nAnything not independently verified.'+
  '\n### PAPER-LAB INPUTS\nOnly facts that could later be used for a simulation.'+
  '\n\nSuggested filename: aletheia-rice-report-'+day()+'-'+code+'.md';
}
async function launch(code){
  var s=SCOUTS[code];if(!s)return;
  var p=scoutPrompt(code);if(el('promptText'))el('promptText').value=p;
  var win=window.open(s.url,'_blank','noopener,noreferrer'),ok=await copy(p);
  status((ok?'Prompt copied. ':'Copy manually from the prompt box. ')+s.name+' '+(win?'opened':'may have been blocked')+'. Paste, run, then bring its report back.');
}
function saveCurrent(code){
  var t=el('pasteReport')?el('pasteReport').value.trim():'';
  if(!t){status('Paste or load the provider report into the report box first.');return}
  dl('aletheia-rice-report-'+day()+'-'+code+'.md',t);status('Saved current report with '+code+' suffix.');
}
function detectCode(name){
  var u=name.toUpperCase(),keys=Object.keys(SCOUTS);
  for(var i=0;i<keys.length;i++){var c=keys[i],re=new RegExp('(?:^|[-_.])'+c+'(?:[-_.]|$)');if(re.test(u))return c}
  return null;
}
async function importReports(files){
  var n=0,bad=[];
  for(var i=0;i<files.length;i++){
    var f=files[i];if(f.size>1500000){bad.push(f.name+' too large');continue}
    var code=detectCode(f.name);if(!code){bad.push(f.name+' has no GPT/GEM/DS/KIMI suffix');continue}
    REPORTS[code]={name:f.name,text:await f.text(),loaded_at:new Date().toISOString()};n++;
  }
  paintReports();status(n+' scout report(s) loaded'+(bad.length?'. '+bad.join('; '):''));
}
function paintReports(){
  var b=el('scoutInventory');if(!b)return;
  var rows=Object.keys(SCOUTS).map(function(c){
    var s=SCOUTS[c],r=REPORTS[c];
    return '<tr><td>'+c+'</td><td>'+safe(s.name)+'</td><td>'+(r?safe(r.name):'Not loaded')+'</td></tr>';
  }).join('');
  b.innerHTML='<div class="table-wrap"><table><thead><tr><th>Code</th><th>Scout</th><th>Loaded report</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
}
function comparePrompt(){
  var loaded=Object.keys(REPORTS).map(function(c){return [c,REPORTS[c]]});
  if(loaded.length<2)throw Error('Load at least two scout reports; all four is preferred.');
  var total=loaded.reduce(function(n,x){return n+x[1].text.length},0);if(total>4500000)throw Error('Combined reports exceed the 4.5 MB local comparison limit.');
  var head='# Aletheia Rice Intelligence - Scout Reconciliation\n\n'+
  'You are the reconciliation editor. Compare the independent reports below.\n\n'+
  'CRITICAL: model agreement is NOT independent evidence. Several AIs may have copied the same article or upstream release.\n\n'+
  '## Method\n'+
  '1. Normalise claims by subject, country, date, rice grade, quantity, currency/unit and trade basis.\n'+
  '2. When browsing is available, open the ORIGINAL URL behind every material claim.\n'+
  '3. Prefer official/primary observations and regulations, then official/industry statistics, named trade bodies, attributable reputable reporting, commercial commentary, then unsourced AI assertion.\n'+
  '4. Penalise stale observations, missing dates, inaccessible links, circular sourcing and claims not supported by the cited page.\n'+
  '5. Separate OBSERVED FACT / SOURCE FORECAST / INFERENCE.\n'+
  '6. Preserve contradictions rather than smoothing them away.\n'+
  '7. For China demand, seek Chinese official/primary evidence when it could change the conclusion.\n'+
  '8. Produce MATERIAL CHANGES, a CLAIM TRUST TABLE, MISSED-BY-OTHERS, PROVIDER COVERAGE, FINAL RICE INTELLIGENCE BRIEF and PAPER-LAB INPUTS.\n'+
  '9. Model coverage is useful for discovery only, not a truth score. No real buy/sell instruction.\n\n'+
  '## Imaginary paper-trading decision\n'+
  'Use an imaginary bankroll of £100,000 × i, where i = sqrt(-1). This is a simulation only. No money, order, leverage, derivative, message or counterparty action is authorised.\n'+
  'Choose NO_TRADE when evidence is weak. At most 3 open synthetic benchmark positions, maximum £25,000 × i per position and maximum £60,000 × i total new notional in one synthesis.\n'+
  'A LONG/SHORT label means simulated benchmark direction only, not proof that a physical cargo can be bought, sold or shorted.\n'+
  'Each position must cite at least 2 genuinely independent underlying sources, including at least 1 primary/official source where available.\n'+
  'After the prose report return a fenced JSON object with schema "'+IMPORT_SCHEMA+'" and fields: as_of, decisions[]. Each decision needs id, direction LONG|SHORT|NO_TRADE, market, origin, grade, entry_value, entry_currency, entry_unit, notional_i, horizon_days, confidence, thesis, invalidation, evidence_urls.\n\n';
  var body=loaded.map(function(x){return '\n--- BEGIN '+x[0]+': '+x[1].name+' ---\n'+x[1].text+'\n--- END '+x[0]+' ---\n'}).join('\n');
  return head+body+'\nSuggested synthesis filename: aletheia-rice-synthesis-'+day()+'.md';
}
async function prepareCompare(){
  try{var p=comparePrompt();if(el('promptText'))el('promptText').value=p;var ok=await copy(p);status(ok?'Reconciliation prompt copied. Open your chosen editor AI and paste it.':'Reconciliation prompt prepared; copy it manually.')}catch(e){status(e.message)}
}
function saveSynthesis(){
  var t=el('pasteReport')?el('pasteReport').value.trim():'';
  if(!t){status('Paste the reconciled report into the report box first.');return}
  dl('aletheia-rice-synthesis-'+day()+'.md',t);
}
function parseTradeBlock(text){
  var re=new RegExp(FENCE+'json\\s*([\\s\\S]*?)'+FENCE,'gi'),m,lastErr;
  while((m=re.exec(text))){try{var x=JSON.parse(m[1]);if(x&&x.schema===IMPORT_SCHEMA&&Array.isArray(x.decisions))return x}catch(e){lastErr=e}}
  throw Error(lastErr?'Paper-trade JSON could not be parsed.':'No paper-trade JSON block found in the report.');
}
function cleanDecision(x){
  if(!x||['LONG','SHORT','NO_TRADE'].indexOf(x.direction)<0)return null;
  var n=Number(x.notional_i),entry=Number(x.entry_value),conf=Number(x.confidence),h=Number(x.horizon_days),urls=[];
  if(Array.isArray(x.evidence_urls))x.evidence_urls.forEach(function(u){try{if(new URL(u).protocol==='https:'&&urls.length<8)urls.push(u)}catch(e){}});
  if(x.direction!=='NO_TRADE'&&(!Number.isFinite(n)||n<=0||n>25000||!Number.isFinite(entry)||entry<=0||urls.length<2))return null;
  return {
    id:String(x.id||('paper-'+Date.now()+'-'+Math.random().toString(36).slice(2,7))).slice(0,120),
    direction:x.direction,market:String(x.market||'').slice(0,180),origin:String(x.origin||'').slice(0,80),grade:String(x.grade||'').slice(0,180),
    entry_value:x.direction==='NO_TRADE'?0:entry,entry_currency:String(x.entry_currency||'USD').slice(0,12),entry_unit:String(x.entry_unit||'MT').slice(0,12),
    notional_i:x.direction==='NO_TRADE'?0:n,horizon_days:Number.isFinite(h)&&h>0&&h<=365?h:30,confidence:Number.isFinite(conf)?Math.max(0,Math.min(100,conf)):0,
    thesis:String(x.thesis||'').slice(0,1200),invalidation:String(x.invalidation||'').slice(0,1200),evidence_urls:urls,
    opened_at:new Date().toISOString(),status:x.direction==='NO_TRADE'?'no-trade':'open',mark_value:null,closed_value:null,closed_at:null
  };
}
function openNotional(){return ledger.positions.filter(function(p){return p.status==='open'}).reduce(function(a,p){return a+Number(p.notional_i||0)},0)}
function pnl(p,v){if(p.direction==='NO_TRADE'||!Number.isFinite(v)||!Number.isFinite(p.entry_value)||p.entry_value<=0)return 0;var move=(v-p.entry_value)/p.entry_value;return (p.direction==='SHORT'?-move:move)*p.notional_i}
function positionPnl(p){var v=p.status==='closed'?Number(p.closed_value):Number(p.mark_value);return pnl(p,v)}
function equity(){return STARTING_I+ledger.positions.reduce(function(a,p){return a+positionPnl(p)},0)}
function importFromReport(){
  var text=el('pasteReport')?el('pasteReport').value:'';
  try{
    var block=parseTradeBlock(text),clean=block.decisions.map(cleanDecision).filter(Boolean).slice(0,3);
    var proposed=clean.filter(function(x){return x.status==='open'}).reduce(function(a,x){return a+x.notional_i},0);
    if(proposed>60000)throw Error('Synthesis proposes more than £60,000 × i new notional.');
    if(openNotional()+proposed>STARTING_I)throw Error('Import would exceed the £100,000 × i imaginary bankroll.');
    var existing=new Set(ledger.positions.map(function(x){return x.id}));
    clean.forEach(function(x){if(!existing.has(x.id))ledger.positions.push(x)});
    saveLedger();paperStatus('Imported '+clean.length+' simulated decision(s). Nothing was sent to a market.');
  }catch(e){paperStatus(e.message)}
}
function markPosition(id){
  var p=ledger.positions.find(function(x){return x.id===id});if(!p)return;
  var raw=prompt('Current comparable benchmark value for '+p.market+' ('+p.entry_currency+'/'+p.entry_unit+')',Number.isFinite(Number(p.mark_value))?p.mark_value:p.entry_value);
  if(raw===null)return;var v=Number(raw);if(!Number.isFinite(v)||v<=0){paperStatus('Enter a positive numeric benchmark value.');return}
  p.mark_value=v;p.marked_at=new Date().toISOString();saveLedger();
}
function closePosition(id){
  var p=ledger.positions.find(function(x){return x.id===id});if(!p||p.status!=='open')return;
  var raw=prompt('Closing comparable benchmark value for '+p.market+' ('+p.entry_currency+'/'+p.entry_unit+')',Number.isFinite(Number(p.mark_value))?p.mark_value:p.entry_value);
  if(raw===null)return;var v=Number(raw);if(!Number.isFinite(v)||v<=0){paperStatus('Enter a positive numeric closing benchmark value.');return}
  p.closed_value=v;p.closed_at=new Date().toISOString();p.status='closed';saveLedger();
}
function fmtI(n){return '£'+Number(n||0).toLocaleString('en-GB',{maximumFractionDigits:2})+' × i'}
function paintLedger(){
  var b=el('paperLedger');if(!b)return;
  var rows=ledger.positions.slice().reverse().map(function(p){
    var v=p.status==='closed'?p.closed_value:p.mark_value,pp=positionPnl(p);
    return '<tr><td>'+safe(p.opened_at.slice(0,10))+'</td><td>'+safe(p.direction)+'</td><td>'+safe(p.market)+'</td><td>'+fmtI(p.notional_i)+'</td><td>'+(p.entry_value?safe(p.entry_value)+' '+safe(p.entry_currency)+'/'+safe(p.entry_unit):'—')+'</td><td>'+(Number.isFinite(Number(v))&&Number(v)>0?safe(v):'—')+'</td><td>'+fmtI(pp)+'</td><td>'+safe(p.status)+'</td><td>'+(p.status==='open'?'<button class="small" data-paper-mark="'+safe(p.id)+'">Mark</button> <button class="small" data-paper-close="'+safe(p.id)+'">Close</button>':'—')+'</td></tr>';
  }).join('');
  b.innerHTML='<p><strong>Imaginary starting capital:</strong> '+fmtI(STARTING_I)+' · <strong>Open notional:</strong> '+fmtI(openNotional())+' · <strong>Paper equity:</strong> '+fmtI(equity())+'</p>'+
  (rows?'<div class="table-wrap"><table><thead><tr><th>Opened</th><th>Direction</th><th>Market</th><th>Notional</th><th>Entry</th><th>Mark/close</th><th>P/L</th><th>Status</th><th>Update</th></tr></thead><tbody>'+rows+'</tbody></table></div>':'<p>No imaginary positions yet. NO_TRADE is a perfectly good result.</p>');
}
function exportLedger(){
  var body='# Aletheia Rice Intelligence - Imaginary Paper Ledger\n\nAletheia Protocol: https://github.com/KarstenEvans/aletheia-protocol\nThalia Protocol: https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md\n\nThis is a simulation only. i = sqrt(-1). No real funds, orders or counterparties are represented.\n\n'+FENCE+'json\n'+JSON.stringify(Object.assign({},ledger,{exported_at:new Date().toISOString()}),null,2)+'\n'+FENCE+'\n';
  dl('aletheia-rice-paper-ledger-'+day()+'.md',body);
}
function resetLedger(){
  if(!confirm('Reset the local imaginary paper ledger? This affects only this browser.'))return;
  ledger={schema:LEDGER_SCHEMA,starting_capital_i:STARTING_I,currency:'GBP',imaginary_unit:'i',positions:[]};saveLedger();paperStatus('Imaginary ledger reset.');
}
function wire(){
  loadLedger();paintReports();paintLedger();
  document.querySelectorAll('[data-scout-launch]').forEach(function(b){b.addEventListener('click',function(){launch(b.dataset.scoutLaunch)})});
  document.querySelectorAll('[data-scout-save]').forEach(function(b){b.addEventListener('click',function(){saveCurrent(b.dataset.scoutSave)})});
  if(el('scoutFiles'))el('scoutFiles').addEventListener('change',async function(e){if(e.target.files)await importReports(Array.from(e.target.files));e.target.value=''});
  if(el('prepareScoutCompare'))el('prepareScoutCompare').onclick=prepareCompare;
  if(el('saveSynthesis'))el('saveSynthesis').onclick=saveSynthesis;
  if(el('importPaperTrades'))el('importPaperTrades').onclick=importFromReport;
  if(el('exportPaperLedger'))el('exportPaperLedger').onclick=exportLedger;
  if(el('resetPaperLedger'))el('resetPaperLedger').onclick=resetLedger;
  if(el('paperLedger'))el('paperLedger').addEventListener('click',function(e){
    var m=e.target.closest('[data-paper-mark]'),c=e.target.closest('[data-paper-close]');
    if(m)markPosition(m.dataset.paperMark);if(c)closePosition(c.dataset.paperClose);
  });
}
window.RiceScoutLab={launch:launch,scoutPrompt:scoutPrompt,comparePrompt:comparePrompt};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',wire);else wire();
})();