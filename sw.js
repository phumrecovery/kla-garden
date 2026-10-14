/* service worker: เก็บไฟล์ที่เคยเปิดไว้ในเครื่อง ดูออฟไลน์ได้ และอัปเดตเบื้องหลังเมื่อมีเน็ต */
const V='kla-v2';
const CORE=['./','00_เมนูหลัก.html','engine/engine.js','engine/engine.css','เสียง/amap.js','manifest.webmanifest','icon-192.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(V).then(c=>Promise.all(CORE.map(u=>c.add(new Request(u,{cache:'reload'})).catch(()=>{})))));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
const FONT=/fonts\.(googleapis|gstatic)\.com$/;
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
 if(u.origin!==location.origin&&!FONT.test(u.hostname))return;
 const media=/\.mp3$/i.test(u.pathname);const key=media?u.href:r;
 e.respondWith(caches.open(V).then(async c=>{const hit=await c.match(key,{ignoreSearch:media});
  const net=fetch(media?u.href:r).then(res=>{if(res&&(res.ok||res.type==='opaque'))c.put(key,res.clone()).catch(()=>{});return res;}).catch(()=>hit);
  return hit||net;}));});
