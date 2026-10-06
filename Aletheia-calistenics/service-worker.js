const C='aletheia-calistenics-v4';
const CORE=['./','./Aleteheia-calistenics.htm','./Aleteheia-calistenics-rsc.htm','./story-player.css','./story-player.js','./poster-data.js','./workout.json','./manifest.json','./icon.svg','../shared/link-sprites.css','../shared/link-sprites.js','../shared/link-sprites.json'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)).catch(()=>{}));});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('aletheia-calistenics-')&&k!==C).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  if(url.pathname.endsWith('.htm')||url.pathname.endsWith('.html')||url.pathname.endsWith('.js')||url.pathname.endsWith('.json')){
    e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r;}).catch(()=>caches.match(e.request)));
    return;
  }
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{const y=x.clone();caches.open(C).then(c=>c.put(e.request,y));return x;})));
});
