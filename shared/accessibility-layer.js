/* Aletheia Accessibility Layer v0.1 */
(function(){
'use strict';
const roots=document.querySelectorAll('[data-aletheia-accessibility]');
if(!roots.length)return;
const keyText='aletheiaAccessText',keyFocus='aletheiaAccessFocus';
const sizes=['small','normal','large','xlarge'];
function setText(v){
 if(!sizes.includes(v))v='normal';
 if(v==='normal')document.documentElement.removeAttribute('data-aletheia-text');
 else document.documentElement.setAttribute('data-aletheia-text',v);
 try{localStorage.setItem(keyText,v)}catch(e){}
 roots.forEach(r=>{const s=r.querySelector('[data-access-status]');if(s)s.textContent='Text size: '+v+'.';});
}
function setFocus(on){
 document.documentElement.setAttribute('data-aletheia-focus',on?'true':'false');
 try{localStorage.setItem(keyFocus,on?'1':'0')}catch(e){}
 roots.forEach(r=>{const b=r.querySelector('[data-access-focus]');if(b)b.setAttribute('aria-pressed',String(on));});
}
function speak(root){
 if(!('speechSynthesis'in window)){const s=root.querySelector('[data-access-status]');if(s)s.textContent='Read aloud is not available in this browser.';return;}
 let text=String(window.getSelection&&window.getSelection()||'').trim();
 if(!text){const region=document.querySelector('[data-aletheia-read-region]');text=region?region.innerText.trim():'';}
 if(!text){const s=root.querySelector('[data-access-status]');if(s)s.textContent='Select text, or use this control on a page with a reading region.';return;}
 speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text.slice(0,12000));u.lang=document.documentElement.lang||'en-GB';
 u.onstart=()=>{const s=root.querySelector('[data-access-status]');if(s)s.textContent='Reading aloud.'};
 u.onend=()=>{const s=root.querySelector('[data-access-status]');if(s)s.textContent='Reading finished.'};
 u.onerror=()=>{const s=root.querySelector('[data-access-status]');if(s)s.textContent='Read aloud stopped or failed.'};
 speechSynthesis.speak(u);
}
function build(root){
 root.classList.add('aletheia-access');
 root.innerHTML='<div class="aletheia-access__head"><strong>Accessibility</strong><button type="button" data-access-smaller aria-label="Smaller text">A−</button><button type="button" data-access-larger aria-label="Larger text">A+</button><button type="button" data-access-reset>Reset text</button><button type="button" data-access-focus aria-pressed="false">Focus</button><button type="button" data-access-read>🔊 Read</button><button type="button" data-access-stop>Stop</button></div><p class="aletheia-access__status" data-access-status aria-live="polite">No diagnosis or account required.</p>';
 root.querySelector('[data-access-smaller]').onclick=()=>{const cur=document.documentElement.getAttribute('data-aletheia-text')||'normal';setText(sizes[Math.max(0,sizes.indexOf(cur)-1)])};
 root.querySelector('[data-access-larger]').onclick=()=>{const cur=document.documentElement.getAttribute('data-aletheia-text')||'normal';setText(sizes[Math.min(sizes.length-1,sizes.indexOf(cur)+1)])};
 root.querySelector('[data-access-reset]').onclick=()=>setText('normal');
 root.querySelector('[data-access-focus]').onclick=()=>setFocus(document.documentElement.getAttribute('data-aletheia-focus')!=='true');
 root.querySelector('[data-access-read]').onclick=()=>speak(root);
 root.querySelector('[data-access-stop]').onclick=()=>{if('speechSynthesis'in window)speechSynthesis.cancel();const s=root.querySelector('[data-access-status]');if(s)s.textContent='Speech stopped.'};
 if(!('speechSynthesis'in window)){root.querySelector('[data-access-read]').disabled=true;root.querySelector('[data-access-stop]').disabled=true}
}
let saved='normal',focus=false;try{saved=localStorage.getItem(keyText)||'normal';focus=localStorage.getItem(keyFocus)==='1'}catch(e){}
roots.forEach(build);setText(saved);setFocus(focus);
})();
