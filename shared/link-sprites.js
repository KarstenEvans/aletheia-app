/* Aletheia Constellation v1. Reads one maintained JSON catalogue. Safe static HTML fallbacks stay visible on fetch errors. */
(function(){
  'use strict';
  var current=document.currentScript;
  var root=current && current.src ? new URL('./',current.src) : null;
  if(!root) return;
  function seasonAt(date, seasons) {
    var mmdd=String(date.getMonth()+1).padStart(2,'0')+'-'+String(date.getDate()).padStart(2,'0');
    var seasonal=(seasons||[]).find(function(s){return mmdd>=s.start && mmdd<=s.end;});
    return seasonal ? seasonal.id : 'default';
  }
  function isSafeUrl(value){
    try{var url=new URL(value);return url.protocol==='https:' && !url.username && !url.password;}catch(e){return false;}
  }
  function makeLink(item,sprite,season){
    var a=document.createElement('a');a.className='aletheia-constellation__link';a.href=item.url;
    a.setAttribute('data-awinignore','');a.setAttribute('aria-label',item.label);
    if(item.season) a.setAttribute('data-as-special',item.season);
    var art=document.createElement('span');art.className='aletheia-constellation__sprite';art.setAttribute('aria-hidden','true');art.textContent=sprite||'★';
    var label=document.createElement('span');label.textContent=item.label;
    a.appendChild(art);a.appendChild(label);return a;
  }
  function render(el,data,date){
    if(!el||!data||!Array.isArray(data.links)||!Array.isArray(data.seasonalLinks))return false;
    var season=seasonAt(date||new Date(),data.seasons);
    document.documentElement.dataset.aletheiaSeason=season;
    var items=data.links.filter(function(x){return x.label && isSafeUrl(x.url);}).map(function(x){
      return {item:x,sprite:x.sprites && (x.sprites[season]||x.sprites.default)||'★'};
    });
    data.seasonalLinks.filter(function(x){return x.season===season && x.label && isSafeUrl(x.url);}).forEach(function(x){
      items.push({item:x,sprite:x.sprite||'★'});
    });
    var max=(data.policy && data.policy.maximumLinks)||6;
    items=items.slice(0,max);
    if(!items.length)return false;
    var host=el.querySelector('.aletheia-constellation__links');
    if(!host)return false;
    var frag=document.createDocumentFragment();
    items.forEach(function(x){frag.appendChild(makeLink(x.item,x.sprite,season));});
    host.replaceChildren(frag);
    el.setAttribute('data-as-season',season);
    var desc=el.querySelector('[data-as-description]');
    if(desc) desc.textContent=season==='halloween'?'A seasonal witch appears through 10 November.':season==='winter'?'The links have their winter sprites.':'A few stars that lead you home.';
    return true;
  }
  window.AletheiaConstellation=Object.freeze({seasonAt:seasonAt,render:render});
  document.querySelectorAll('[data-aletheia-constellation]').forEach(function(el){
    fetch(new URL('link-sprites.json',root).href,{cache:'no-cache'})
      .then(function(r){if(!r.ok)throw Error('manifest unavailable');return r.json();})
      .then(function(data){render(el,data,new Date());})
      .catch(function(){/* Static star links remain available; never show an unverified seasonal link. */});
  });
})();