/* service worker: เก็บไฟล์ที่เคยเปิดไว้ในเครื่อง ดูออฟไลน์ได้
   - หน้าเว็บ/สคริปต์: ดึงจากเน็ตก่อน (ได้เนื้อหาล่าสุดทันที) ถ้าไม่มีเน็ตใช้ของที่เก็บไว้
   - เสียง/รูป/ฟอนต์: ใช้ของที่เก็บไว้ก่อน (ประหยัดเน็ต) */
const V='kla-v13';  /* เปลี่ยนเลขเมื่อแก้ไฟล์เสียงชื่อเดิม (เช่น สร้างเสียงใหม่ทับไฟล์ที่เสีย) ให้แท็บเล็ตโหลดใหม่ */
const CORE=['./','00_เมนูหลัก.html','engine/engine.js','engine/engine.css','เสียง/amap.js','icon-192.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(V).then(c=>Promise.all(CORE.map(u=>c.add(new Request(u,{cache:'reload'})).catch(()=>{})))));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
const FONT=/fonts\.(googleapis|gstatic)\.com$/;
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
 if(u.origin!==location.origin&&!FONT.test(u.hostname))return;
 if(/\.webmanifest$/.test(u.pathname))return;
 const media=/\.(mp3|wav|png|jpg|woff2?)$/i.test(u.pathname)||FONT.test(u.hostname);const key=media?u.href:r;
 e.respondWith(caches.open(V).then(async c=>{
  const save=res=>{if(res&&(res.ok||res.type==='opaque'))c.put(key,res.clone()).catch(()=>{});return res;};
  if(media){const hit=await c.match(key,{ignoreSearch:true});return hit||fetch(u.href).then(save);}
  try{return save(await fetch(u.href,{cache:'no-cache'}));}catch(err){const hit=await c.match(r,{ignoreSearch:true});if(hit)return hit;throw err;}
 }));});
