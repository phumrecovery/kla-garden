/* สวนมหัศจรรย์ของน้องกล้า · engine v2 (ใช้ร่วมกันทุกตอน)
   ตอนแต่ละตอนกำหนด window.EP = {...} ก่อนโหลดไฟล์นี้
   ตารางไฟล์เสียงมาจาก เสียง/amap.js (window.AMAP) */
(function(){
const EP=window.EP;
const Z={intro:['สวนมหัศจรรย์','#8e5bd8','#f4eefc'],math:['ตลาดผลไม้ป้าส้ม','#e8701c','#fff3e6'],thai:['บ้านต้นไม้นิทาน','#2e9e57','#ebf8ef'],sci:['ทุ่งนักสำรวจ','#2389c9','#e8f4fc'],logic:['เขาวงกตไร่ข้าวโพด','#c99a00','#fff8dc'],eng:['รถไฟ ABC','#d64545','#fdeeee'],social:['หมู่บ้านในสวน','#d6457f','#fdeef4'],ready:['ห้องเรียนในสวน','#7b4bc4','#f1ebfb'],review:['งานเทศกาลเก็บเกี่ยว','#8e5bd8','#fbf3dc']};
const DECO={intro:'🌱🌸🍃',math:'🍊🍋🍎',thai:'🍃📖🌿',sci:'🔍🦋☁️',logic:'🌽⭐🌻',eng:'🚂✏️🎈',social:'🏠🎈🌳',ready:'✏️📚⭐',review:'🎉⭐🌾'};
const LV={easy:'ง่าย',mid:'กลาง',hard:'ท้าทาย'};
const PRAISE=['เก่งมาก','ถูกต้องนะ','สุดยอดเลย','เยี่ยมไปเลย','ใช่แล้ว เก่งจัง','ถูกเผงเลย','เก่งที่สุดเลย'];
const TH='๐๑๒๓๔๕๖๗๘๙',thd=n=>String(n).replace(/\d/g,d=>TH[d]);
const SC=[[6,8],[30,52],[54,10],[76,46],[12,60],[42,30],[66,68],[82,8],[30,6],[56,48],[20,34],[88,70],[4,34],[46,72],[70,24],[18,80],[60,86],[86,28],[36,84],[50,58]];
const KLA='<svg class="kla" viewBox="0 0 120 140"><g class="bodyg"><g class="leaves"><path d="M60 46 C60 34 60 28 60 22" stroke="#3f8a2e" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="44" cy="20" rx="16" ry="9" fill="#5cc46b" stroke="#3f8a2e" stroke-width="3" transform="rotate(-25 44 20)"/><ellipse cx="76" cy="20" rx="16" ry="9" fill="#5cc46b" stroke="#3f8a2e" stroke-width="3" transform="rotate(25 76 20)"/></g><circle cx="60" cy="88" r="46" fill="#b5e88a" stroke="#4f9a3a" stroke-width="4"/><g class="eyes"><ellipse cx="44" cy="82" rx="9" ry="11" fill="#fff"/><ellipse cx="76" cy="82" rx="9" ry="11" fill="#fff"/><circle class="pupil" cx="46" cy="84" r="5" fill="#2d2340"/><circle class="pupil" cx="78" cy="84" r="5" fill="#2d2340"/></g><circle cx="34" cy="100" r="6" fill="#ff9fb0" opacity=".8"/><circle cx="86" cy="100" r="6" fill="#ff9fb0" opacity=".8"/><path class="m-close" d="M48 104 Q60 116 72 104" stroke="#2d2340" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse class="m-open" cx="60" cy="108" rx="9" ry="7" fill="#7a2f3b" stroke="#2d2340" stroke-width="3"/></g></svg>';
const TEACH='<svg class="teach" viewBox="0 0 120 140"><g class="bodyg"><path d="M60 96 C60 112 58 124 60 138" stroke="#3f8a2e" stroke-width="6" fill="none"/><ellipse cx="44" cy="124" rx="14" ry="6" fill="#5cc46b" transform="rotate(-25 44 124)"/>'+[0,45,90,135,180,225,270,315].map(a=>'<ellipse cx="60" cy="26" rx="17" ry="26" fill="#b78be8" stroke="#7b4fc0" stroke-width="2.5" transform="rotate('+a+' 60 62)"/>').join('')+'<circle cx="60" cy="62" r="32" fill="#ffe08a" stroke="#d9a400" stroke-width="3"/><g class="eyes"><circle cx="49" cy="58" r="4.5" fill="#2d2340"/><circle cx="71" cy="58" r="4.5" fill="#2d2340"/></g><path d="M43 49 q6 -4 12 0 M65 49 q6 -4 12 0" stroke="#2d2340" stroke-width="2" fill="none"/><circle cx="60" cy="58" r="0"/><path class="mouth" d="M51 72 Q60 80 69 72" stroke="#2d2340" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="42" cy="70" rx="5" ry="3" fill="#ff9fb0" opacity=".7"/><ellipse cx="78" cy="70" rx="5" ry="3" fill="#ff9fb0" opacity=".7"/><path d="M36 46 h48" stroke="none"/><rect x="40" y="52" width="16" height="11" rx="5" fill="none" stroke="#7b4fc0" stroke-width="2"/><rect x="64" y="52" width="16" height="11" rx="5" fill="none" stroke="#7b4fc0" stroke-width="2"/><path d="M56 57 h8" stroke="#7b4fc0" stroke-width="2"/></g></svg>';
const JOOK='<svg class="jook" viewBox="0 0 120 140"><g class="bodyg"><path d="M58 38 C54 24 62 18 66 14 C66 24 72 26 70 36" fill="#8a5a2b"/><ellipse cx="60" cy="88" rx="44" ry="42" fill="#c98a4b" stroke="#8a5a2b" stroke-width="4"/><ellipse cx="62" cy="100" rx="26" ry="24" fill="#f7dcae"/><path class="wing" d="M18 86 Q2 98 20 108" fill="#a86f38"/><g class="eyes"><circle cx="48" cy="74" r="9" fill="#fff"/><circle cx="76" cy="74" r="9" fill="#fff"/><circle class="pupil" cx="49" cy="75" r="4.5" fill="#2d2340"/><circle class="pupil" cx="77" cy="75" r="4.5" fill="#2d2340"/></g><path class="beak-t" d="M56 86 L68 86 L62 92 Z" fill="#ff9a1f" stroke="#c96a00" stroke-width="2"/><path class="beak-b" d="M57 89 L67 89 L62 97 Z" fill="#ff9a1f" stroke="#c96a00" stroke-width="2"/></g></svg>';
const SPROUT='<svg class="sprout" viewBox="0 0 140 150"><g class="plant"><path class="stem" d="M70 122 C70 104 67 86 70 58" stroke="#3f8a2e" stroke-width="7" fill="none" stroke-linecap="round"/><g transform="translate(69 94)"><path class="lf a" d="M0 0 C-8 -14 -30 -18 -44 -10 C-32 4 -12 6 0 0Z" fill="#5cc46b" stroke="#3f8a2e" stroke-width="3" stroke-linejoin="round"/><path class="vein a" d="M-4 -2 C-16 -8 -28 -10 -38 -9" stroke="#3f8a2e" stroke-width="2" fill="none"/></g><g transform="translate(70 78)"><path class="lf b" d="M0 0 C8 -14 30 -18 44 -10 C32 4 12 6 0 0Z" fill="#6fd17c" stroke="#3f8a2e" stroke-width="3" stroke-linejoin="round"/><path class="vein b" d="M4 -2 C16 -8 28 -10 38 -9" stroke="#3f8a2e" stroke-width="2" fill="none"/></g><g class="flw"><ellipse cx="70" cy="22" rx="10.5" ry="15" fill="#ffb3c6" stroke="#e0607e" stroke-width="2" transform="rotate(0 70 38)"/><ellipse cx="70" cy="22" rx="10.5" ry="15" fill="#ff8fab" stroke="#e0607e" stroke-width="2" transform="rotate(60 70 38)"/><ellipse cx="70" cy="22" rx="10.5" ry="15" fill="#ffb3c6" stroke="#e0607e" stroke-width="2" transform="rotate(120 70 38)"/><ellipse cx="70" cy="22" rx="10.5" ry="15" fill="#ff8fab" stroke="#e0607e" stroke-width="2" transform="rotate(180 70 38)"/><ellipse cx="70" cy="22" rx="10.5" ry="15" fill="#ffb3c6" stroke="#e0607e" stroke-width="2" transform="rotate(240 70 38)"/><ellipse cx="70" cy="22" rx="10.5" ry="15" fill="#ff8fab" stroke="#e0607e" stroke-width="2" transform="rotate(300 70 38)"/><circle cx="70" cy="38" r="11" fill="#ffd23f" stroke="#e6a700" stroke-width="2"/><circle cx="66" cy="35" r="1.6" fill="#c98b00"/><circle cx="74" cy="35" r="1.6" fill="#c98b00"/><circle cx="70" cy="42" r="1.6" fill="#c98b00"/><ellipse cx="66" cy="33" rx="3" ry="2" fill="#fff" opacity=".6"/></g></g><ellipse class="seed" cx="70" cy="121" rx="7" ry="5" fill="#c98b4a" stroke="#7a4f24" stroke-width="2"/><path class="soil" d="M14 142 C20 122 46 116 70 118 C94 116 120 122 126 142 Z" fill="#9b6a3c"/><path d="M28 130 q4 -3 8 0 M92 128 q4 -3 8 0 M60 136 q4 -3 8 0" stroke="#7a4f24" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle class="dirt d1" cx="64" cy="118" r="3" fill="#9b6a3c"/><circle class="dirt d2" cx="76" cy="118" r="2.5" fill="#9b6a3c"/><circle class="dirt d3" cx="70" cy="117" r="2" fill="#9b6a3c"/></svg>';
const z=Z[EP.subject]||Z.intro;
document.documentElement.style.setProperty('--c',z[1]);document.documentElement.style.setProperty('--bg',z[2]);
const NAME=EP.mode?EP.title:'EP'+EP.ep+' '+EP.title;document.title=NAME;const LOG=[];
/* ข้อพิเศษทบทวนเลข: ทุกตอนแถมโจทย์คณิต 1 ข้อจากคลัง (เฉพาะเรื่องที่ดูแล้ว เน้นเรื่องที่ยังพลาด) ไม่นับดาวทอง */
if(!EP.mode&&EP.review!==false&&location.hash!=='#all'){try{const base=new URL(EP.menu||'../00_เมนูหลัก.html',location.href);const ld=(u,cb)=>{const e=document.createElement('script');e.src=new URL(u,base).href;e.onload=cb;document.head.append(e);};
  ld('engine/focus.js',()=>{const go=()=>{const x=window.pickFocus&&pickFocus(1)[0];if(x)EP.questions.push(Object.assign({},x,{bonus:true}));};window.BANK?go():ld('คลังโจทย์.js',go);});}catch(e){}}
/* อีโมจิ 🔺 ในบางเครื่องเล็กกว่าตัวอื่นมาก → วาดสามเหลี่ยมแดงขนาดเท่าอีโมจิแทน (ข้อความ/เสียงไม่เปลี่ยน) */
const TRI='<svg class="tri" viewBox="0 0 20 20"><polygon points="10,2 19,18 1,18" fill="#e5484d" stroke="#b8323a" stroke-width="1.2" stroke-linejoin="round"/></svg>';
const h=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.innerHTML=String(x).replace(/🔺/g,TRI);return e;};
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const synth=window.speechSynthesis;let voice=null,paused=false,tok=0,phase='cover',cur=0,QS=null;const score={first:0,gold:false};

/* ---------- เสียงประกอบ (สังเคราะห์ ไม่ใช้ไฟล์) ---------- */
let actx=null,sfxOn=store.get('kla-sfx')!=='0';
function ac(){if(!actx){try{actx=new (window.AudioContext||window.webkitAudioContext)();}catch(e){return null;}}if(actx.state==='suspended')actx.resume().catch(()=>{});return actx;}
function tone(f,dur,type,vol,when,to){const a=ac();if(!a||!sfxOn)return;const t=a.currentTime+(when||0);const o=a.createOscillator(),g=a.createGain();o.type=type||'sine';o.frequency.setValueAtTime(f,t);if(to)o.frequency.exponentialRampToValueAtTime(to,t+dur);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol||.12,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g).connect(a.destination);o.start(t);o.stop(t+dur+.05);}
function swoosh(dur,vol){const a=ac();if(!a||!sfxOn)return;const t=a.currentTime,len=Math.floor(a.sampleRate*dur),buf=a.createBuffer(1,len,a.sampleRate),d=buf.getChannelData(0);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*(1-i/len);
 const s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();s.buffer=buf;f.type='bandpass';f.Q.value=1.2;f.frequency.setValueAtTime(500,t);f.frequency.exponentialRampToValueAtTime(2600,t+dur);g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.0001,t+dur);s.connect(f).connect(g).connect(a.destination);s.start(t);}
const SFX={
 pop:i=>{const k=(i||0)%12;tone(480+k*40,.11,'triangle',.11,0,820+k*40);},
 whoosh:()=>swoosh(.32,.05),
 ok:()=>{[660,880,1320].forEach((f,i)=>tone(f,.24,'triangle',.12,i*.09));},
 no:()=>{tone(320,.16,'sine',.1,0,240);tone(250,.22,'sine',.08,.12,190);},
 sparkle:()=>{for(let i=0;i<7;i++)tone(1300+Math.random()*1400,.14,'sine',.045,i*.06);},
 fanfare:()=>{[523,659,784,1047].forEach((f,i)=>tone(f,i===3?.55:.18,'triangle',.13,i*.15));},
 chime:()=>{tone(988,.5,'sine',.07);tone(1319,.6,'sine',.05,.09);},
 flap:()=>{tone(900,.08,'sine',.05,0,1400);tone(1100,.08,'sine',.05,.1,1600);}
};

/* ---------- เอฟเฟกต์ภาพ ---------- */
function confetti(x,y,n){if(reduce)return;const cols=['#ffd23f','#2fae5c','#e8701c','#2389c9','#d64545','#8e5bd8'];
 for(let i=0;i<n;i++){const c=h('i','conf');c.style.left=x+'px';c.style.top=y+'px';c.style.background=cols[i%cols.length];const a=Math.random()*Math.PI*2,r=70+Math.random()*170;
  c.style.setProperty('--dx',Math.cos(a)*r+'px');c.style.setProperty('--dy',(Math.sin(a)*r+140)+'px');c.style.setProperty('--r',(Math.random()*720-360)+'deg');document.body.append(c);setTimeout(()=>c.remove(),1500);}}
function starBurst(x,y,n,ch){if(reduce)return;for(let i=0;i<n;i++){const s=h('span','burst',ch||'⭐');const a=i/n*Math.PI*2;s.style.left=x+'px';s.style.top=y+'px';s.style.setProperty('--dx',Math.cos(a)*160+'px');s.style.setProperty('--dy',Math.sin(a)*160+'px');s.style.animationDelay=(i%3)*.05+'s';document.body.append(s);setTimeout(()=>s.remove(),1500);}}
const centerOf=el=>{const r=el.getBoundingClientRect();return [r.left+r.width/2,r.top+r.height/2];};

/* ---------- เสียงพูด ---------- */
let voiceJ=null,voiceEn=null;function pick(){if(!synth)return;const all=synth.getVoices();const en=all.filter(x=>/^en[-_]/i.test(x.lang||''));voiceEn=en.find(x=>/natural|online/i.test(x.name)&&/us/i.test(x.lang))||en.find(x=>/natural|online/i.test(x.name))||en.find(x=>/us/i.test(x.lang))||en[0]||null;const v=all.filter(x=>x.lang&&x.lang.toLowerCase().replace('_','-').startsWith('th'));
 const nat=x=>/natural|online|neural/i.test(x.name);const by=re=>v.find(x=>nat(x)&&re.test(x.name));
 voice=by(/niwat/i)||v.filter(nat)[0]||v[0]||null;voiceJ=by(/premwadee/i)||by(/achara/i)||voice;}
if(synth){pick();synth.onvoiceschanged=pick;}
const app=document.getElementById('app');
const deco=h('div','deco');if(!reduce){const ch=[...(DECO[EP.subject]||DECO.intro)];for(let i=0;i<9;i++){const s=h('span','',ch[i%ch.length]);s.style.left=(i*11+Math.random()*6)+'%';s.style.animationDuration=(22+Math.random()*18)+'s';s.style.animationDelay=(-Math.random()*30)+'s';deco.append(s);}}
app.innerHTML='<div class="top"><a id="bH" class="home" title="กลับหน้าสวน" href="'+(EP.menu||'../00_เมนูหลัก.html')+'">🏡</a><div class="t">'+(EP.mode?NAME:z[0]+' · '+NAME)+'</div>'+(LV[EP.level]?'<span class="lv">'+LV[EP.level]+'</span>':'')+'<button id="bS" class="mute" title="เปิด/ปิดเสียงประกอบ">'+(sfxOn?'🔔':'🔕')+'</button><button id="bP" title="หยุด / เล่นต่อ">⏸</button><button id="bR" title="เริ่มใหม่ตั้งแต่ต้น">↺</button><button id="bF" title="เต็มจอ">⛶</button></div><div class="bar"><i id="pg"></i></div><div class="stage" id="st"></div><div class="foot"><div class="who" id="who"></div><div class="sub" id="sub"></div></div>';
app.prepend(deco);
document.getElementById('bH').onclick=e=>{if(EP.mode==='mock'&&!confirm('ออกจากการจำลองสอบ? ข้อที่ทำไปแล้วจะไม่ถูกบันทึก'))e.preventDefault();};
const st=document.getElementById('st'),sub=document.getElementById('sub'),who=document.getElementById('who'),pg=document.getElementById('pg');
let curWho='kla';const setWho=n=>{const ch=n!==curWho;curWho=n;who.innerHTML=n==='jook'?JOOK:n==='teach'?TEACH:KLA;if(ch&&n==='jook'&&!reduce){who.classList.remove('fly');void who.offsetWidth;who.classList.add('fly');SFX.flap();}};setWho('kla');
const talk=on=>{who.classList.toggle('talk',on);st.classList.toggle('talk',on&&curWho==='kla');};
const react=c=>{who.classList.remove('cheer','oops');void who.offsetWidth;who.classList.add(c);setTimeout(()=>who.classList.remove(c),1300);};
function runFx(el){const my=tok;(el._fx||[]).forEach(f=>{setTimeout(()=>{if(my!==tok||paused)return;SFX.pop(f.i);if(f.el)setTimeout(()=>f.el.classList.add('on'),320);},f.t*1000);});(el._later||[]).forEach(f=>setTimeout(()=>{if(my===tok)f.fn();},f.t*1000));}
function fixTri(el){const w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.nodeValue.includes('🔺')&&!(n.parentNode instanceof SVGElement)?1:3});const ns=[];while(w.nextNode())ns.push(w.currentNode);
 ns.forEach(n=>{const sp=document.createElement('span');sp.innerHTML=n.nodeValue.replace(/[<>&]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;'}[c])).replace(/🔺/g,TRI);n.replaceWith(sp);});}
async function show(el,anim){hideSub=false;fixTri(el);const old=st.firstElementChild;if(anim&&old&&!reduce){old.classList.add('leave');await wait(200);}st.innerHTML='';if(anim&&!reduce)el.classList.add('enter');st.append(el);runFx(el);}
const total=EP.scenes.length+EP.questions.length;const prog=x=>{pg.style.width=Math.round(x*100)+'%';};
const strip=t=>String(t).replace(/[\[\]]/g,'');
const isEn=t=>/^[A-Za-z0-9 ,.'!?\-]+$/.test(t.trim())&&/[A-Za-z]/.test(t);
const splitSeg=g=>{const out=[];String(g).split(/(\[[^\]]+\])/).forEach(p=>{if(!p.trim())return;if(p[0]==='[')out.push({t:p.slice(1,-1).trim(),en:true});else out.push({t:p.trim(),en:isEn(p)});});return out;};
const clean=t=>t.replace(/□/g,' ช่องว่าง ').replace(/[?!]/g,' ');
const hsh=t=>{let x=5381;for(const ch of t)x=((x*33)^ch.codePointAt(0))>>>0;return x.toString(16).padStart(8,'0');};
const AMAP=window.AMAP||EP.amap||{};
let curAudio=null;
function playRec(seg,my){const id=(curWho==='teach'&&!isEn(seg)&&AMAP[hsh('ครู|'+seg)])||AMAP[hsh(seg)];if(!EP.audioDir||!id)return Promise.resolve(false);
 return tryRec(EP.audioDir+id+'.mp3',my).then(r=>r===null?tryRec(EP.audioDir+id+'.wav',my):r).then(r=>!!r);}
const RATE=(()=>{const r=+store.get('kla-rate');return r>0.5&&r<2?r:1;})();
function tryRec(src,my){return new Promise(res=>{const a=new Audio(src);a.playbackRate=RATE;a.preservesPitch=true;curAudio=a;let ok=false;
  const iv=setInterval(()=>{if(my!==tok){a.pause();clearInterval(iv);res(true);}else if(paused&&!a.paused)a.pause();else if(!paused&&a.paused&&ok&&!a.ended)a.play().catch(()=>{});},150);
  a.onplaying=()=>{ok=true;a.playbackRate=RATE;talk(true);};a.onended=()=>{clearInterval(iv);talk(false);res(true);};a.onerror=()=>{clearInterval(iv);res(ok?true:null);};
  a.play().catch(()=>{if(!ok){clearInterval(iv);res(null);}});});}
function speak1(text,lang){const my=tok;const useTTS=synth&&(lang||voice);
 return new Promise(res=>{let fin=false,el=0;const lim=useTTS?text.length*220+6000:Math.max(1800,text.length*110);
  const done=()=>{if(fin)return;fin=true;clearInterval(iv);talk(false);res();};
  const iv=setInterval(()=>{if(my!==tok)return done();if(!paused)el+=100;if(el>=lim)done();},100);
  talk(true);
  if(useTTS){synth.cancel();const u=new SpeechSynthesisUtterance(clean(text));u.lang=lang||'th-TH';if(!lang)u.voice=(curWho==='jook'||curWho==='teach'?voiceJ:voice)||voice;else if(voiceEn)u.voice=voiceEn;u.rate=lang?0.8:0.95;u.onend=done;u.onerror=done;synth.speak(u);}
 });}
/* ระหว่างรอเด็กตอบ ซ่อนคำบรรยายด้านล่าง (กันแอบอ่านเจอคำตอบ) แสดงอีกครั้งหลังกดตัวเลือก */
let hideSub=false;
async function say(segs,lang){if(!Array.isArray(segs))segs=[segs];segs=segs.filter(Boolean);sub.classList.toggle('hid',hideSub);sub.textContent=hideSub?'👂 ฟังโจทย์ให้ดี แล้วเลือกคำตอบนะ':segs.map(strip).join(' ');const my=tok;
 for(const g of segs)for(const p of splitSeg(g)){if(my!==tok)return;const rec=await playRec(p.t,my);if(my!==tok)return;if(!rec)await speak1(p.t,p.en?'en-US':lang);}}
async function gap(ms,my){let t=0;while(t<ms){await wait(100);if(my!==tok)return;if(!paused)t+=100;}}

/* ---------- ภาพวาด SVG: ทรงสามมิติ กล่องบล็อก รอยเท้า วงจรชีวิต ---------- */
let gid=0;const BC=['#f6a04d','#5fb4e6','#7ccf8a','#c08fe6'];
function tint(hex,k){const n=parseInt(hex.slice(1),16);const f=c=>Math.max(0,Math.min(255,Math.round(k>1?c+(255-c)*(k-1):c*k)));return 'rgb('+f(n>>16)+','+f(n>>8&255)+','+f(n&255)+')';}
const poly=(pts,fill,cls)=>'<polygon'+(cls?' class="'+cls+'"':'')+' points="'+pts.map(p=>p[0].toFixed(1)+','+p[1].toFixed(1)).join(' ')+'" fill="'+fill+'"/>';
/* b={g:[[สูง..]..] แถวหลัง→หน้า, view:'iso'|'top'|'front'|'side', gray:[r,c,z], mark:[[r,c,z]], layers, color, nums} */
function blocksSVG(b,anim){const g=b.g,R=g.length,C=Math.max(...g.map(r=>r.length)),view=b.view||'iso',H=(r,c)=>(g[r]&&g[r][c])||0;
 const same=(a,r,c,z)=>a&&a[0]===r&&a[1]===c&&(a[2]||0)===z;
 const fill=(r,c,z)=>same(b.gray,r,c,z)?'#a3a7ad':(b.mark||[]).some(m=>same(m,r,c,z))?'#f472b6':b.layers?BC[z%BC.length]:(b.color||BC[0]);
 const svg=(w,hh,x0,y0,body)=>'<svg class="blk" viewBox="'+[x0,y0,w,hh].map(n=>n.toFixed(1)).join(' ')+'" stroke="#3b3b4f" stroke-width="2" stroke-linejoin="round">'+body+'</svg>';
 if(view==='iso'){const s=40,dx=s*.5,dy=s*.4;const cubes=[];
  for(let r=0;r<R;r++)for(let c=0;c<C;c++)for(let z=0;z<H(r,c);z++)cubes.push([r,c,z]);
  const order=[...cubes].sort((a,b2)=>a[2]-b2[2]||a[0]-b2[0]||a[1]-b2[1]);const draw=[...cubes].sort((a,b2)=>a[0]-b2[0]||a[2]-b2[2]||a[1]-b2[1]);
  let body='',xs=[],ys=[];draw.forEach(([r,c,z])=>{const f=fill(r,c,z),d=R-1-r,x=c*s+d*dx,y=-z*s-d*dy;
   const fr=[[x,y],[x+s,y],[x+s,y-s],[x,y-s]],top=[[x,y-s],[x+s,y-s],[x+s+dx,y-s-dy],[x+dx,y-s-dy]],rt=[[x+s,y],[x+s+dx,y-dy],[x+s+dx,y-s-dy],[x+s,y-s]];
   [...fr,...top,...rt].forEach(p=>{xs.push(p[0]);ys.push(p[1]);});const i=order.findIndex(o=>o[0]===r&&o[1]===c&&o[2]===z);
   body+='<g class="'+(anim?'cb':'')+'" data-i="'+i+'"'+(anim?' style="animation-delay:'+(anim.at+i*anim.sp).toFixed(2)+'s"':'')+'>'+poly(fr,f)+poly(top,tint(f,1.25))+poly(rt,tint(f,.78))+'</g>';});
  const x0=Math.min(...xs)-4,y0=Math.min(...ys)-4;return svg(Math.max(...xs)+4-x0,Math.max(...ys)+4-y0,x0,y0,body);}
 const s=44;let body='',w,hh;
 if(view==='top'){w=C*s;hh=R*s;for(let r=0;r<R;r++)for(let c=0;c<C;c++){const n=H(r,c);if(!n){if(b.grid)body+='<rect x="'+c*s+'" y="'+r*s+'" width="'+s+'" height="'+s+'" fill="none" stroke="#c9c3d6" stroke-dasharray="4 4"/>';continue;}
  const f=(b.gray&&b.gray[0]===r&&b.gray[1]===c)?'#a3a7ad':b.layers?BC[(n-1)%BC.length]:(b.color||BC[0]);body+='<rect x="'+c*s+'" y="'+r*s+'" width="'+s+'" height="'+s+'" fill="'+tint(f,1.25)+'"/>'+(b.nums?'<text x="'+(c*s+s/2)+'" y="'+(r*s+s/2+9)+'" text-anchor="middle" font-size="26" stroke="none" fill="#3b3b4f">'+n+'</text>':'');}}
 else{const front=view==='front',N=front?C:R,col=i=>{let m=0;for(let k=0;k<(front?R:C);k++)m=Math.max(m,front?H(k,i):H(R-1-i,k));return m;};const top=Math.max(1,...Array.from({length:N},(_,i)=>col(i)));w=N*s;hh=top*s;
  for(let i=0;i<N;i++)for(let z=0;z<col(i);z++)body+='<rect x="'+i*s+'" y="'+(hh-(z+1)*s)+'" width="'+s+'" height="'+s+'" fill="'+(b.color||BC[0])+'"/>';}
 return svg(w+4,hh+4,-2,-2,body);}
function solidSVG(n){const id='g'+(++gid),C={sphere:'#f25f5c',cube:'#f6a04d',cuboid:'#5fb4e6',cylinder:'#7ccf8a',cone:'#c08fe6',pyramid:'#f2c14e'}[n]||'#999';
 const st=' stroke="#3b3b4f" stroke-width="2.5" stroke-linejoin="round"';let b='';
 if(n==='sphere')b='<defs><radialGradient id="'+id+'" cx=".35" cy=".35" r=".7"><stop offset="0" stop-color="#fff"/><stop offset=".25" stop-color="'+tint(C,1.2)+'"/><stop offset="1" stop-color="'+tint(C,.7)+'"/></radialGradient></defs><circle cx="50" cy="52" r="38" fill="url(#'+id+')"'+st+'/>';
 else if(n==='cube'||n==='cuboid'){const w=n==='cube'?30:44,d=n==='cube'?30:18,h=n==='cube'?34:26,x=50-(w-d)*.43,y=60;const P=(a,c,z)=>[x+(a-c)*.866,y+(a+c)*.5-z];
  b=poly([P(0,0,h),P(w,0,h),P(w,d,h),P(0,d,h)],tint(C,1.25))+poly([P(0,d,0),P(w,d,0),P(w,d,h),P(0,d,h)],C)+poly([P(w,0,0),P(w,d,0),P(w,d,h),P(w,0,h)],tint(C,.78));b='<g'+st+'>'+b+'</g>';}
 else if(n==='cylinder')b='<defs><linearGradient id="'+id+'"><stop offset="0" stop-color="'+tint(C,.8)+'"/><stop offset=".4" stop-color="'+tint(C,1.25)+'"/><stop offset="1" stop-color="'+tint(C,.7)+'"/></linearGradient></defs><path d="M22 26 V78 A28 10 0 0 0 78 78 V26" fill="url(#'+id+')"'+st+'/><ellipse cx="50" cy="26" rx="28" ry="10" fill="'+tint(C,1.3)+'"'+st+'/>';
 else if(n==='cone')b='<defs><linearGradient id="'+id+'"><stop offset="0" stop-color="'+tint(C,.8)+'"/><stop offset=".4" stop-color="'+tint(C,1.25)+'"/><stop offset="1" stop-color="'+tint(C,.7)+'"/></linearGradient></defs><path d="M50 10 L20 78 A30 10 0 0 0 80 78 Z" fill="url(#'+id+')"'+st+'/>';
 else if(n==='pyramid')b='<g'+st+'>'+poly([[50,12],[16,72],[48,88]],tint(C,1.15))+poly([[50,12],[48,88],[86,70]],tint(C,.8))+'</g>';
 return '<svg class="sol" viewBox="0 0 100 100">'+b+'</svg>';}
/* รอยเท้า: ไก่ เป็ด หมาแมว ม้า วัว คน ช้าง */
function printSVG(n,k){const one={
 chicken:'<path d="M0 14 V-10 M0 14 L-11 -6 M0 14 L11 -6 M0 14 V22" stroke="#6b4f3a" stroke-width="4" stroke-linecap="round" fill="none"/>',
 duck:'<path d="M0 16 L-14 -8 Q-7 -3 0 -12 Q7 -3 14 -8 Z" fill="#6b4f3a"/>',
 paw:'<g fill="#6b4f3a"><ellipse cx="0" cy="8" rx="9" ry="8"/><circle cx="-11" cy="-5" r="4"/><circle cx="-4" cy="-11" r="4"/><circle cx="4" cy="-11" r="4"/><circle cx="11" cy="-5" r="4"/></g>',
 hoof:'<path d="M-10 12 V-2 A10 10 0 0 1 10 -2 V12" stroke="#6b4f3a" stroke-width="6" fill="none" stroke-linecap="round"/>',
 cow:'<g fill="#6b4f3a"><path d="M-2 14 Q-13 12 -11 -2 Q-9 -12 -2 -12 Z"/><path d="M2 14 Q13 12 11 -2 Q9 -12 2 -12 Z"/></g>',
 human:'<g fill="#6b4f3a"><ellipse cx="0" cy="4" rx="7" ry="13"/><circle cx="-5" cy="-13" r="3"/><circle cx="0" cy="-15" r="2.6"/><circle cx="4.5" cy="-14" r="2.3"/><circle cx="8" cy="-11" r="2"/></g>',
 elephant:'<g fill="#6b4f3a"><circle r="15"/></g>'}[n]||'';
 k=k||3;let b='';for(let i=0;i<k;i++)b+='<g transform="translate('+(22+i*34)+','+(i%2?62:34)+')">'+one+'</g>';return '<svg class="prt" viewBox="0 0 '+(14+k*34)+' 96">'+b+'</svg>';}
/* ภาพวงจรชีวิตที่ไม่มีอีโมจิ */
function picSVG(n){return '<svg class="pic" viewBox="0 0 100 100">'+({
 spawn:'<g stroke="#3b3b4f" stroke-width="1.5">'+[[30,40],[50,34],[70,42],[40,58],[60,58],[28,72],[50,76],[72,70]].map(([x,y])=>'<circle cx="'+x+'" cy="'+y+'" r="11" fill="#d7eef7"/><circle cx="'+x+'" cy="'+y+'" r="4" fill="#222" stroke="none"/>').join('')+'</g>',
 tadpole:'<path d="M42 50 Q70 30 92 52 Q70 46 60 56 Z" fill="#4d5b3a"/><ellipse cx="34" cy="52" rx="20" ry="15" fill="#4d5b3a"/><circle cx="26" cy="47" r="3" fill="#fff"/>',
 froglet:'<path d="M50 52 Q75 40 94 58 Q74 52 64 60 Z" fill="#5d7f3a"/><ellipse cx="36" cy="52" rx="20" ry="15" fill="#6c9a3e"/><circle cx="28" cy="46" r="3.5" fill="#fff"/><path d="M44 62 L52 78 L60 80 M30 64 L26 80 L18 82" stroke="#6c9a3e" stroke-width="5" fill="none" stroke-linecap="round"/>',
 pupa:'<path d="M50 6 V18" stroke="#6b4f3a" stroke-width="3"/><path d="M50 18 Q70 30 64 62 Q58 90 50 94 Q42 90 36 62 Q30 30 50 18 Z" fill="#9bbf5a" stroke="#5d7f3a" stroke-width="2"/><path d="M40 46 Q50 52 60 46 M38 62 Q50 68 62 62" stroke="#5d7f3a" stroke-width="2" fill="none"/>',
 wiggler:'<path d="M30 20 Q44 34 34 48 Q24 62 38 76" stroke="#555" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M30 20 L22 12 M30 20 L36 10" stroke="#555" stroke-width="2"/>',
 plant:'<rect x="0" y="70" width="100" height="30" fill="#b07a4f"/><path d="M50 70 L44 88 M50 72 L56 90 M47 80 L38 86 M53 82 L62 87" stroke="#f3e2c7" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M50 70 V24" stroke="#3f8a2e" stroke-width="4"/><ellipse cx="38" cy="52" rx="12" ry="6" fill="#5cc46b" transform="rotate(-25 38 52)"/><ellipse cx="62" cy="44" rx="12" ry="6" fill="#5cc46b" transform="rotate(25 62 44)"/><circle cx="66" cy="60" r="6" fill="#ff8a3d"/><g fill="#ff6f91"><circle cx="50" cy="14" r="6"/><circle cx="41" cy="20" r="6"/><circle cx="59" cy="20" r="6"/><circle cx="44" cy="29" r="6"/><circle cx="56" cy="29" r="6"/></g><circle cx="50" cy="22" r="5" fill="#ffd23f"/>',
 chada:'<path d="M50 4 L57 26 L53 26 L60 46 L55 46 L64 70 H36 L45 46 L40 46 L47 26 L43 26 Z" fill="#f5c542" stroke="#a87b12" stroke-width="2" stroke-linejoin="round"/><path d="M44 58 H56 M46 36 H54" stroke="#a87b12" stroke-width="2"/><rect x="28" y="70" width="44" height="13" rx="3" fill="#f5c542" stroke="#a87b12" stroke-width="2" stroke-linejoin="round"/><path d="M28 83 Q50 96 72 83 Z" fill="#e9a52a" stroke="#a87b12" stroke-width="2" stroke-linejoin="round"/><circle cx="50" cy="76.5" r="3.5" fill="#e5484d"/><circle cx="38" cy="76.5" r="2.6" fill="#3aa0e8"/><circle cx="62" cy="76.5" r="2.6" fill="#3aa0e8"/>',
 goad:'<path d="M16 90 L66 32" stroke="#a0662f" stroke-width="7" stroke-linecap="round"/><path d="M16 90 L26 78" stroke="#6e4219" stroke-width="10" stroke-linecap="round"/><path d="M61 27 L71 37 L90 6 Z" fill="#c3ccd5" stroke="#5a6470" stroke-width="2" stroke-linejoin="round"/><path d="M69 36 Q87 40 81 53 Q77 58 71 54" stroke="#8a949e" stroke-width="5.5" fill="none" stroke-linecap="round"/><circle cx="64" cy="34" r="5" fill="#d9a441" stroke="#8a6a1a" stroke-width="1.5"/>',
 base:'<rect x="32" y="22" width="36" height="9" rx="2" fill="#f5c542" stroke="#a87b12" stroke-width="2" stroke-linejoin="round"/><path d="M35 31 H65 L61 46 H39 Z" fill="#e9a52a" stroke="#a87b12" stroke-width="2" stroke-linejoin="round"/><path d="M36 46 Q40 38 44 46 Q48 38 52 46 Q56 38 60 46 Q62 42 64 46" fill="#ffb7c5" stroke="#d77a91" stroke-width="1.5"/><rect x="24" y="46" width="52" height="10" rx="2" fill="#f5c542" stroke="#a87b12" stroke-width="2" stroke-linejoin="round"/><path d="M18 56 H82 L87 76 H13 Z" fill="#e9a52a" stroke="#a87b12" stroke-width="2" stroke-linejoin="round"/><path d="M26 66 H74" stroke="#a87b12" stroke-width="1.5"/><rect x="8" y="76" width="84" height="10" rx="2" fill="#c98b1d" stroke="#a87b12" stroke-width="2" stroke-linejoin="round"/>',
 queen:'<path d="M20 100 Q22 76 50 73 Q78 76 80 100 Z" fill="#e05a8a"/><path d="M34 76 Q50 90 66 76" stroke="#f5c542" stroke-width="3" fill="none"/><rect x="44" y="62" width="12" height="13" fill="#f2c9a0"/><path d="M35 50 Q34 38 50 37 Q66 38 65 50 L66 66 Q62 54 50 52 Q38 54 34 66 Z" fill="#2b2b33"/><ellipse cx="50" cy="54" rx="13.5" ry="15" fill="#f7d4b0" stroke="#c99b6f" stroke-width="1.5"/><path d="M50 3 L56 20 L53 20 L58 34 H42 L47 20 L44 20 Z" fill="#f5c542" stroke="#a87b12" stroke-width="1.8" stroke-linejoin="round"/><rect x="37" y="33" width="26" height="8" rx="2" fill="#f5c542" stroke="#a87b12" stroke-width="1.6"/><circle cx="50" cy="37" r="2.2" fill="#e5484d"/><circle cx="45" cy="54" r="1.9" fill="#333"/><circle cx="55" cy="54" r="1.9" fill="#333"/><circle cx="41" cy="60" r="2.6" fill="#f6a7a7" opacity=".7"/><circle cx="59" cy="60" r="2.6" fill="#f6a7a7" opacity=".7"/><path d="M45.5 62 Q50 65.5 54.5 62" stroke="#c0504d" stroke-width="1.8" fill="none" stroke-linecap="round"/>',
 novice:'<path d="M18 100 Q20 72 50 69 Q80 72 82 100 Z" fill="#f2c9a0"/><path d="M18 100 Q20 72 50 69 L59 70 Q52 84 78 100 Z" fill="#f08c1a"/><path d="M38 73 Q47 88 60 100" stroke="#c96a0a" stroke-width="2" fill="none"/><rect x="44" y="58" width="12" height="13" fill="#f2c9a0"/><circle cx="30" cy="45" r="4.5" fill="#f2c9a0" stroke="#c99b6f" stroke-width="1.2"/><circle cx="70" cy="45" r="4.5" fill="#f2c9a0" stroke="#c99b6f" stroke-width="1.2"/><circle cx="50" cy="42" r="20" fill="#f7d4b0" stroke="#c99b6f" stroke-width="1.5"/><path d="M30.6 38 A20 20 0 0 1 69.4 38 Q50 30 30.6 38 Z" fill="#b89c84" opacity=".45"/><circle cx="43" cy="45" r="2" fill="#333"/><circle cx="57" cy="45" r="2" fill="#333"/><path d="M45 52 Q50 56 55 52" stroke="#c0504d" stroke-width="1.8" fill="none" stroke-linecap="round"/>',
 ching:'<path d="M30 40 Q30 12 50 12 Q70 12 70 40" stroke="#c0392b" stroke-width="2.6" fill="none"/><path d="M13 66 Q30 34 47 66 Z" fill="#e0b048" stroke="#9a7420" stroke-width="2" stroke-linejoin="round"/><ellipse cx="30" cy="66" rx="18" ry="5" fill="#c99a2e" stroke="#9a7420" stroke-width="2"/><circle cx="30" cy="41" r="3.5" fill="#9a7420"/><path d="M53 66 Q70 34 87 66 Z" fill="#e0b048" stroke="#9a7420" stroke-width="2" stroke-linejoin="round"/><ellipse cx="70" cy="66" rx="18" ry="5" fill="#c99a2e" stroke="#9a7420" stroke-width="2"/><circle cx="70" cy="41" r="3.5" fill="#9a7420"/><path d="M8 80 Q14 86 20 80 M80 80 Q86 86 92 80" stroke="#8e5bd8" stroke-width="2" fill="none" stroke-linecap="round"/>',
 phan:'<path d="M15 40 Q19 58 50 60 Q81 58 85 40 Z" fill="#e9a52a" stroke="#a87b12" stroke-width="2" stroke-linejoin="round"/><ellipse cx="50" cy="40" rx="35" ry="8" fill="#f5c542" stroke="#a87b12" stroke-width="2" stroke-linejoin="round"/><circle cx="38" cy="35" r="6.5" fill="#ff8fb1" stroke="#d6668a" stroke-width="1.2"/><circle cx="50" cy="31" r="6.5" fill="#fff" stroke="#e1b7c4" stroke-width="1.2"/><circle cx="62" cy="35" r="6.5" fill="#ff8fb1" stroke="#d6668a" stroke-width="1.2"/><circle cx="44" cy="25" r="5" fill="#ffd23f" stroke="#d1a21a" stroke-width="1.2"/><circle cx="56" cy="25" r="5" fill="#ffd23f" stroke="#d1a21a" stroke-width="1.2"/><path d="M44 60 L42 74 H58 L56 60 Z" fill="#f5c542" stroke="#a87b12" stroke-width="2" stroke-linejoin="round"/><path d="M27 88 Q30 74 50 74 Q70 74 73 88 Z" fill="#e9a52a" stroke="#a87b12" stroke-width="2" stroke-linejoin="round"/><ellipse cx="50" cy="88" rx="23" ry="5" fill="#c98b1d" stroke="#a87b12" stroke-width="2" stroke-linejoin="round"/>',
 nymph:'<path d="M20 60 Q50 40 80 58 Q50 66 20 60 Z" fill="#7cb342"/><circle cx="20" cy="56" r="8" fill="#7cb342"/><path d="M40 60 L32 78 M52 60 L56 80 M64 58 L76 76 M14 50 L6 36" stroke="#558b2f" stroke-width="3" fill="none"/>'}[n]||'')+'</svg>';}
const art=o=>o.clock?clockSVG(o.clock):o.money?moneyHTML(o.money):o.scale?scaleSVG(o.scale):o.tens!=null?tensHTML(o.tens):o.fig?figSVG(o.fig):o.pos?posSVG(o):o.kid?kidSVG(o.kid):o.solid?solidSVG(o.solid):o.blk?blocksSVG(o.blk):o.print?printSVG(o.print,o.k):o.pic?picSVG(o.pic):'';


/* ---------- สัปดาห์ 5–8: มัดไม้ ตั้งบวกลบ ตาราง ทิศทาง รูปเรขาคณิต ตำแหน่ง ซ้ายขวา ---------- */
const STK='<svg class="stk" viewBox="0 0 8 80"><rect x="1" y="2" width="6" height="76" rx="3" fill="#f1c46e" stroke="#a8742a" stroke-width="1.5"/></svg>';
const BUN=(()=>{let s='<svg class="bun" viewBox="0 0 46 80">';for(let i=0;i<10;i++)s+='<rect x="'+(1.5+i*4.3)+'" y="2" width="4.4" height="76" rx="2.2" fill="'+(i%2?'#e9b65c':'#f1c46e')+'" stroke="#a8742a" stroke-width="1"/>';return s+'<rect x="0" y="35" width="46" height="10" rx="3" fill="#e5484d"/></svg>';})();
const tensHTML=n=>'<span class="tens">'+BUN.repeat(Math.floor(n/10))+(n%10?'<span class="ones">'+STK.repeat(n%10)+'</span>':'')+'</span>';
function figSVG(f){const vb=f.vb||[100,100];let b='';
 (f.polys||[]).forEach(q=>{b+='<polygon points="'+q.p.map(x=>x.join(',')).join(' ')+'" fill="'+(q.f||'none')+'" stroke="'+(q.s||'#3b3b4f')+'" stroke-width="'+(q.w||2.5)+'" stroke-linejoin="round"/>';});
 (f.circles||[]).forEach(c=>{b+='<circle cx="'+c[0]+'" cy="'+c[1]+'" r="'+c[2]+'" fill="'+(c[3]||'none')+'" stroke="#3b3b4f" stroke-width="2.5"/>';});
 (f.paths||[]).forEach(c=>{b+='<path d="'+c[0]+'" fill="'+(c[1]||'none')+'" stroke="'+(c[3]||'#3b3b4f')+'" stroke-width="'+(c[2]||2.5)+'" stroke-linejoin="round" stroke-linecap="round"/>';});
 (f.lines||[]).forEach(l=>{b+='<line x1="'+l[0]+'" y1="'+l[1]+'" x2="'+l[2]+'" y2="'+l[3]+'" stroke="#3b3b4f" stroke-width="'+(l[4]||3)+'" stroke-linecap="round"'+(l[5]?' stroke-dasharray="6 5"':'')+'/>';});
 (f.txt||[]).forEach(t=>{b+='<text x="'+t[0]+'" y="'+t[1]+'" text-anchor="middle" dominant-baseline="central" font-size="'+(t[3]||22)+'" fill="'+(t[4]||'#3b3b4f')+'">'+t[2]+'</text>';});
 return '<svg class="fig" viewBox="0 0 '+vb[0]+' '+vb[1]+'">'+b+'</svg>';}
/* ตำแหน่ง: on under (โต๊ะ) · in behind front beside between (กล่อง) */
function posSVG(o){const w=o.pos,it=o.item||'🐱',E=(x,y,k)=>'<text x="'+x+'" y="'+y+'" text-anchor="middle" font-size="'+(k||46)+'">'+it+'</text>';
 const box=(x)=>'<rect x="'+x+'" y="72" width="76" height="58" rx="4" fill="#c98a4b" stroke="#7a4f22" stroke-width="2.5"/><path d="M'+(x+8)+' 92 H'+(x+68)+' M'+(x+8)+' 112 H'+(x+68)+'" stroke="#a96d33" stroke-width="2"/>';
 let b='<line x1="0" y1="131" x2="200" y2="131" stroke="#cfc6b8" stroke-width="3"/>';
 if(w==='on'||w==='under'){b+='<rect x="30" y="62" width="140" height="12" rx="3" fill="#a96d33" stroke="#6b4321" stroke-width="2"/><rect x="40" y="74" width="9" height="57" fill="#a96d33" stroke="#6b4321" stroke-width="2"/><rect x="151" y="74" width="9" height="57" fill="#a96d33" stroke="#6b4321" stroke-width="2"/>'+(w==='on'?E(100,60):E(100,126,40));}
 else if(w==='in')b+='<rect x="62" y="72" width="76" height="30" fill="#8a5a2b" stroke="#7a4f22" stroke-width="2.5"/>'+E(100,98,44)+box(62).replace('y="72" width="76" height="58"','y="96" width="76" height="34"');
 else if(w==='behind')b+=E(112,70,50)+box(62);
 else if(w==='front')b+=box(62)+E(96,144,44);
 else if(w==='beside')b+=box(52)+E(168,128);
 else if(w==='between')b+=box(6).replace(/x="6" y="72" width="76"/,'x="6" y="72" width="62"')+box(132).replace(/x="132" y="72" width="76"/,'x="132" y="72" width="62"')+E(100,128,42);
 return '<svg class="pos" viewBox="0 0 200 150">'+b+'</svg>';}
/* เด็กยกมือ: face front=หันหน้าหาเรา back=หันหลัง · hand = มือของเด็กเอง left/right */
function kidSVG(o){const front=o.face!=='back',side=o.hand==='right'?(front?-1:1):(front?1:-1),ax=100+side*34;
 let b='<rect x="78" y="78" width="44" height="58" rx="14" fill="#7cc8ff" stroke="#3b3b4f" stroke-width="2.5"/>';
 b+='<path d="M'+(100-side*22)+' 88 L'+(100-side*44)+' 124" stroke="#f4c9a0" stroke-width="9" stroke-linecap="round"/>';
 b+='<path d="M'+(100+side*22)+' 88 L'+ax+' 40" stroke="#f4c9a0" stroke-width="9" stroke-linecap="round"/><circle cx="'+ax+'" cy="34" r="9" fill="#ff8a65" stroke="#3b3b4f" stroke-width="2"/>';
 b+='<path d="M88 136 V160 M112 136 V160" stroke="#3b3b4f" stroke-width="8" stroke-linecap="round"/>';
 b+='<circle cx="100" cy="56" r="22" fill="#f4c9a0" stroke="#3b3b4f" stroke-width="2.5"/>';
 b+=front?'<path d="M78 50 Q100 22 122 50 Q110 38 100 40 Q90 38 78 50Z" fill="#4a3426"/><circle cx="92" cy="58" r="3" fill="#2d2340"/><circle cx="108" cy="58" r="3" fill="#2d2340"/><path d="M92 67 Q100 73 108 67" stroke="#2d2340" stroke-width="2.5" fill="none" stroke-linecap="round"/>':'<path d="M78 58 Q76 30 100 32 Q124 30 122 58 Q118 74 100 75 Q82 74 78 58Z" fill="#4a3426"/>';
 return '<svg class="kid" viewBox="0 0 200 170">'+b+'</svg>';}


/* ---------- สัปดาห์ 9–11: นาฬิกา เงิน ตาชั่ง ---------- */
function clockSVG(c){const hh=c[0]%12,mm=c[1]||0,ha=(hh+mm/60)*30,ma=mm*6;let b='<circle cx="50" cy="50" r="46" fill="#fff" stroke="#3b3b4f" stroke-width="4"/>';
 for(let i=1;i<=12;i++){const a=i*Math.PI/6;b+='<text x="'+(50+36*Math.sin(a)).toFixed(1)+'" y="'+(50-36*Math.cos(a)).toFixed(1)+'" text-anchor="middle" dominant-baseline="central" font-size="11" fill="#3b3b4f">'+i+'</text>';}
 for(let i=0;i<60;i++){if(i%5)b+='<line x1="50" y1="6" x2="50" y2="8.5" stroke="#b9b3c6" stroke-width="1" transform="rotate('+i*6+' 50 50)"/>';}
 b+='<line x1="50" y1="50" x2="50" y2="27" stroke="#e8701c" stroke-width="5" stroke-linecap="round" transform="rotate('+ha+' 50 50)"/>';
 b+='<line x1="50" y1="50" x2="50" y2="15" stroke="#2389c9" stroke-width="3.5" stroke-linecap="round" transform="rotate('+ma+' 50 50)"/><circle cx="50" cy="50" r="4" fill="#3b3b4f"/>';
 return '<svg class="clk" viewBox="0 0 100 100">'+b+'</svg>';}
const MONEY={1:['#d9dde3',13,'#8a919c'],2:['#f2d27a',13,'#b08a2a'],5:['#d9dde3',16,'#8a919c'],10:['#f2d27a',18,'#9a8a5a'],20:['#7ccf8a'],50:['#6fb6f0'],100:['#f28b82'],500:['#c08fe6'],1000:['#c9a27a']};
function moneyHTML(list){return '<span class="mny">'+list.map(v=>{const m=MONEY[v]||['#ddd'];
 if(v<20)return '<svg class="coin" viewBox="0 0 40 40" style="width:'+(m[1]*3.8)+'px"><circle cx="20" cy="20" r="18" fill="'+m[0]+'" stroke="'+m[2]+'" stroke-width="3"/>'+(v===10?'<circle cx="20" cy="20" r="11" fill="#d9dde3"/>':'')+'<text x="20" y="21" text-anchor="middle" dominant-baseline="central" font-size="'+(v>=10?15:17)+'" fill="#3b3b4f">'+v+'</text></svg>';
 return '<svg class="bill" viewBox="0 0 80 42"><rect x="1.5" y="1.5" width="77" height="39" rx="5" fill="'+m[0]+'" stroke="#3b3b4f" stroke-width="2"/><circle cx="58" cy="21" r="11" fill="#fff" opacity=".5"/><text x="24" y="22" text-anchor="middle" dominant-baseline="central" font-size="17" fill="#2d2340">'+v+'</text><text x="58" y="22" text-anchor="middle" dominant-baseline="central" font-size="9" fill="#2d2340">บาท</text></svg>';}).join('')+'</span>';}
/* ตาชั่งสองแขน: tilt l = ฝั่งซ้ายหนักกว่า */
function scaleSVG(o){const t=o.tilt==='l'?-12:o.tilt==='r'?12:0,rad=t*Math.PI/180,lx=100-70*Math.cos(rad),ly=40-70*Math.sin(rad),rx=100+70*Math.cos(rad),ry=40+70*Math.sin(rad);
 const pan=(x,y,e)=>'<line x1="'+x+'" y1="'+y+'" x2="'+(x-22)+'" y2="'+(y+34)+'" stroke="#8a7f99" stroke-width="2"/><line x1="'+x+'" y1="'+y+'" x2="'+(x+22)+'" y2="'+(y+34)+'" stroke="#8a7f99" stroke-width="2"/><path d="M'+(x-30)+' '+(y+34)+' Q'+x+' '+(y+50)+' '+(x+30)+' '+(y+34)+'Z" fill="#c9a46a" stroke="#7a5a2a" stroke-width="2"/><text x="'+x+'" y="'+(y+26)+'" text-anchor="middle" font-size="'+({1:30,2:24,3:18}[[...String(e).replace(/️/g,'')].length]||14)+'">'+e+'</text>';
 return '<svg class="scl" viewBox="0 0 200 150"><rect x="94" y="40" width="12" height="96" fill="#a96d33"/><rect x="66" y="132" width="68" height="12" rx="4" fill="#7a4f22"/><line x1="'+lx.toFixed(1)+'" y1="'+ly.toFixed(1)+'" x2="'+rx.toFixed(1)+'" y2="'+ry.toFixed(1)+'" stroke="#5b4630" stroke-width="7" stroke-linecap="round"/><circle cx="100" cy="40" r="7" fill="#e8701c"/>'+pan(lx,ly,o.l)+pan(rx,ry,o.r)+'</svg>';}

/* ---------- ภาพประกอบแต่ละแบบ ---------- */
function vis(v,still){const d=h('div','vis');d._fx=[];d._later=[];const at=still?0:(v.at||0);const dl=(i,s)=>(still?0:at+i*(s||.55));const T=v.type;
 const fx=(el,i,s,boing)=>{if(!still)d._fx.push({t:dl(i,s),i,el:boing?el:null});};
 const later=(t,fn)=>{if(still)fn();else d._later.push({t,fn});};
 if(T==='kla'||T==='jook'||T==='both'){const r=h('div','row');if(T!=='jook')r.append(h('div','char pop',KLA));if(T!=='kla')r.append(h('div','char pop',JOOK));d.append(r);if(v.text)d.append(h('div','bubble pop',strip(v.text)));}
 else if(T==='big'){d.append(h('div','card pop',(v.e?'<div class="e'+(v.sh?' shd':'')+'">'+v.e+'</div>':'')+(v.text?'<div class="L">'+v.text+'</div>':'')+(v.sub?'<div class="T">'+v.sub+'</div>':'')));}
 else if(T==='count'){const many=v.n>10;
  if(v.scatter){const b=h('div','scatter'+(many?' many':''));for(let i=0;i<v.n;i++){const p=SC[i%SC.length];const s=h('span','e pop',v.item);s.style.left=p[0]+'%';s.style.top=p[1]+'%';s.style.animationDelay=dl(i,.15)+'s';fx(s,i,.15);b.append(s);}d.append(b);}
  else{const r=h('div','row'+(many?' many':''));for(let i=0;i<v.n;i++){const it=h('div','it pop','<span class="e">'+v.item+'</span>'+(v.num===false||still?'':'<b>'+(i+1)+'</b>'));it.style.animationDelay=dl(i,v.speed)+'s';fx(it,i,v.speed,true);r.append(it);}d.append(r);
   if(v.total&&!still){const t=h('div','bignum pop',v.n+' <small>( '+thd(v.n)+' )</small>');t.style.animationDelay=(at+v.n*(v.speed||.55)+.3)+'s';d.append(t);later(at+v.n*(v.speed||.55)+.3,SFX.chime);}}}
 else if(T==='tenframe'){const n=v.n,frames=v.frames||Math.max(1,Math.ceil(n/10)),s=v.speed||.35;const w=h('div','tfs');let k=0;
  for(let f=0;f<frames;f++){const g=h('div','tf');for(let c=0;c<10;c++){const cell=h('i');if(k<n){const e=h('span','pop',v.item||'🔴');e.style.display='inline-block';e.style.animationDelay=dl(k,s)+'s';fx(e,k,s);cell.append(e);}g.append(cell);k++;}w.append(g);}d.append(w);
  if(v.total&&!still){const t=h('div','bignum pop',n+' <small>( '+thd(n)+' )</small>');t.style.animationDelay=(at+n*s+.3)+'s';d.append(t);later(at+n*s+.3,SFX.chime);}}
 else if(T==='numline'){const mn=v.min||0,mx=v.max||20,W=900,P=28,Y=78,X=x=>P+(x-mn)*(W-2*P)/(mx-mn);const lab=v.label||((mx-mn)>30?5:1);
  let s='<svg class="nl" viewBox="0 0 '+W+' 120"><line class="ax" x1="'+(P-12)+'" y1="'+Y+'" x2="'+(W-P+12)+'" y2="'+Y+'"/>';
  for(let x=mn;x<=mx;x++){const big=x%lab===0;s+='<line class="tk" x1="'+X(x)+'" y1="'+(Y-(big?10:6))+'" x2="'+X(x)+'" y2="'+(Y+(big?10:6))+'"/>';if(big)s+='<text x="'+X(x)+'" y="'+(Y+32)+'"'+((x===v.start||x===v.end)?' class="big"':'')+'>'+x+'</text>';}
  const step=v.step||1,nh=Math.abs(v.hops||0),dir=(v.hops||0)<0?-1:1;let x0=v.start;
  for(let i=0;i<nh;i++){const x1=x0+dir*step;const mx2=(X(x0)+X(x1))/2,hh=Math.min(60,18+Math.abs(X(x1)-X(x0))*.5);s+='<path class="hop" d="M'+X(x0)+' '+(Y-4)+' Q'+mx2+' '+(Y-hh)+' '+X(x1)+' '+(Y-4)+'"/><circle class="dot" cx="'+X(x1)+'" cy="'+Y+'" r="7"/>';x0=x1;}
  if(v.start!=null)s+='<circle class="start" cx="'+X(v.start)+'" cy="'+Y+'" r="9"/>';s+='</svg>';const box=h('div','');box.style.width='100%';box.style.display='flex';box.style.justifyContent='center';box.innerHTML=s;d.append(box);
  const sp=v.speed||.6;if(v.text){const t=h('div','bignum pop',v.text);const tt=still?0:at+nh*sp+.4;t.style.animationDelay=tt+'s';d.append(t);later(tt,SFX.chime);}
  const hs=[...box.querySelectorAll('.hop')],ds=[...box.querySelectorAll('.dot')];
  if(still&&v.showHops){hs.forEach(e=>e.classList.add('go'));ds.forEach(e=>e.classList.add('go'));}
  else if(!still)hs.forEach((e,i)=>later(at+i*sp,()=>{e.classList.add('go');ds[i].classList.add('go');SFX.pop(i);}));}
 else if(T==='compare'){const c=h('div','cmp');const rows={};[['a',v.la||'แถวบน'],['b',v.lb||'แถวล่าง']].forEach(([k,lab],ri)=>{const g=v[k];const r=h('div','r');r.append(h('div','lab',lab));const row=h('div','row left');rows[k]=[];for(let i=0;i<g.n;i++){const s=h('span','e pop',g.item);s.style.animationDelay=still?'0s':(at+ri*.4+i*.12)+'s';row.append(s);rows[k].push(s);}r.append(row);
   if(v.win===k||v.win==='eq'){if(still)r.classList.add('win');else later(v.wd||2.5,()=>{r.classList.add('win');SFX.chime();});}c.append(r);});d.append(c);
  if(v.pair&&!still){const m=Math.min(v.a.n,v.b.n);later((v.wd||2.5)-.6,()=>[...rows.a.slice(m),...rows.b.slice(m)].forEach(e=>e.classList.add('extra')));}
  if(v.res){const t=h('div','res pop',v.res);t.style.animationDelay=(still?0:(v.wd||2.5))+'s';d.append(t);}}
 else if(T==='nums'){const r=h('div','row');v.nums.forEach((n,i)=>{const w=h('div','it pop');w.style.animationDelay=dl(i,v.speed||.45)+'s';fx(w,i,v.speed||.45);const lab=v.labels&&v.labels[i];
   w.innerHTML='<small class="lb">'+(lab||'&nbsp;')+'</small><div class="n'+(n===null?' q':'')+(v.hi===i?' hi':'')+'">'+(n===null?'?':n)+'</div>';
   if(n===null&&v.fill!=null&&!still)later(v.fd||2.5,()=>{const c=w.querySelector('.n');c.textContent=v.fill;c.className='n hi pop';SFX.chime();});r.append(w);});d.append(r);}
 else if(T==='add'){const r=h('div','row');const grp=(g,i)=>{const w=h('div','grp');for(let k=0;k<g.n;k++){const e=h('span','e pop',g.item);e.style.animationDelay=dl(i*g.n+k,.25)+'s';fx(e,i*g.n+k,.25);w.append(e);}return w;};r.append(grp(v.a,0));const op=h('div','opr pop',v.op||'+');op.style.animationDelay=dl(v.a.n,.25)+'s';r.append(op);if(v.b.n===null){r.append(h('div','n q pop','?'));}else r.append(grp(v.b,1));d.append(r);
  if(v.show){const tt=still?0:at+(v.a.n+v.b.n)*.25+.6;const t=h('div','bignum pop',v.a.n+' '+(v.op||'+')+' '+(v.b.n===null?'?':v.b.n)+' = '+(v.op==='−'?v.a.n-v.b.n:v.a.n+v.b.n));t.style.animationDelay=tt+'s';d.append(t);later(tt,SFX.chime);}}
 else if(T==='bond'){const c=x=>x===null?'<div class="n q">?</div>':'<div class="n">'+x+'</div>';const parts=v.parts||[v.l,v.r];const k=parts.length;
  let lines='';parts.forEach((_,i)=>{const x=k===1?50:i*100/(k-1);lines+='<line x1="50" y1="0" x2="'+x+'" y2="60"/>';});
  const b=h('div','bond pop k'+k,'<div class="btop">'+c(v.top)+'</div><svg class="blines" viewBox="0 0 100 60" preserveAspectRatio="none">'+lines+'</svg><div class="bbot">'+parts.map(c).join('')+'</div>');b.style.setProperty('--k',Math.max(2,k));d.append(b);
  if(v.fill!=null&&!still)later(v.fd||3,()=>{const q=b.querySelector('.n.q');if(q){q.textContent=v.fill;q.className='n hi pop';SFX.chime();}});}
 else if(T==='sub'){const sp=v.speed||.45,n=v.n,k=v.k;const r=h('div','row subr'+(n>10?' many':''));const its=[];for(let i=0;i<n;i++){const s2=h('span','it pop','<span class="e">'+v.item+'</span>');s2.style.animationDelay=dl(i,.08)+'s';r.append(s2);its.push(s2);}d.append(r);
  const t0=at+n*.08+.6;its.slice(n-k).reverse().forEach((e,j)=>{if(still)e.classList.add('gone');else later(t0+j*sp,()=>{e.classList.add('gone');SFX.pop(j);});});
  if(v.text){const t=h('div','bignum pop',v.text);const tt=still?0:t0+k*sp+.4;t.style.animationDelay=tt+'s';d.append(t);later(tt,SFX.chime);}}
 else if(T==='blocks'){const sp=v.speed||.45,n=v.g.flat().reduce((a,b)=>a+b,0);const w=h('div','blkrow');
  const main=h('div','blkbox pop');main.innerHTML=blocksSVG(v,still?null:{at,sp});w.append(main);
  (v.views||[]).forEach((vw,i)=>{const k=h('div','card pop');k.innerHTML='<div class="art">'+blocksSVG(Object.assign({},v,{view:vw}))+'</div><div class="T">'+({top:'มองจากด้านบน',front:'มองจากด้านหน้า',side:'มองจากด้านข้าง'}[vw])+'</div>';const tt=still?0:(v.vd||at+n*sp+.3)+i*.6;k.style.animationDelay=tt+'s';w.append(k);});d.append(w);
  if(!still)main.querySelectorAll('.cb').forEach(c=>later(at+(+c.dataset.i)*sp+.15,()=>SFX.pop(+c.dataset.i)));
  if(v.text){const t=h('div','bignum pop',v.text);const tt=still?0:at+n*sp+.4;t.style.animationDelay=tt+'s';d.append(t);later(tt,SFX.chime);}}
 else if(T==='cycle'){const N=v.items.length,sp=v.speed||.9,box=h('div','cyc');const pos=v.items.map((_,i)=>{const a=-Math.PI/2+i*2*Math.PI/N;return [50+38*Math.cos(a),50+31*Math.sin(a)];});
  let ar='';pos.forEach((p,i)=>{const q=pos[(i+1)%N],mx=(p[0]+q[0])/2,my=(p[1]+q[1])/2,ang=Math.atan2(q[1]-p[1],q[0]-p[0])*180/Math.PI;ar+='<g class="'+(still?'':'cyA')+'" style="animation-delay:'+(still?0:at+i*sp+sp*.6)+'s" transform="translate('+mx+','+my+') rotate('+ang+')"><path d="M-5 0 H4 M1 -3 L5 0 L1 3" stroke="#8e5bd8" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>';});
  box.innerHTML='<svg class="cyar" viewBox="0 0 100 100" preserveAspectRatio="none">'+ar+'</svg>';
  v.items.forEach((c,i)=>{const k=h('div','card pop');k.style.left=pos[i][0]+'%';k.style.top=pos[i][1]+'%';k.innerHTML=(c.e?'<div class="e">'+c.e+'</div>':'')+(art(c)?'<div class="art">'+art(c)+'</div>':'')+(c.t?'<div class="T">'+c.t+'</div>':'');k.style.animationDelay=dl(i,sp)+'s';fx(k,i,sp);box.append(k);});d.append(box);}
 else if(T==='tens'){const sp=v.speed||.3,tn=v.tens!=null?v.tens:Math.floor(v.n/10),on=v.ones!=null?v.ones:v.n%10;const w=h('div','tensv');const B=h('div','tb'),U=h('div','tu');w.append(B,U);let k=0;const t=i=>still?0:at+i*sp;
  const add=(par,html,i,delay)=>{const e=h('span','pop',html);e.style.animationDelay=delay+'s';if(!still)d._fx.push({t:delay,i,el:null});par.append(e);return e;};
  const bs=[],us=[];for(let i=0;i<tn;i++)bs.push(add(B,BUN,k,t(k++)));for(let i=0;i<on;i++)us.push(add(U,STK,tn+i,still?0:at+(tn+i*.5)*sp));
  const tEnd=still?0:at+(tn+on*.5)*sp+.3;const lab=h('div','tlab pop');lab.style.animationDelay=tEnd+'s';const L=(a,b)=>'<span class="lt">'+a+' สิบ</span><span class="lu">'+b+' หน่วย</span>';lab.innerHTML=L(tn,on);if(v.lab!==false)d.append(w,lab);else d.append(w);
  const te=still?0:(v.ed||tEnd+1.2);
  if(v.exch&&on>=10){const go=()=>{us.slice(0,10).forEach(e=>e.classList.add('gather'));setTimeout(()=>{us.slice(0,10).forEach(e=>e.remove());const nb=h('span','pop',BUN);B.append(nb);lab.innerHTML=L(tn+1,on-10);SFX.chime();},still?0:600);};if(still){us.slice(0,10).forEach(e=>e.remove());B.append(h('span','',BUN));lab.innerHTML=L(tn+1,on-10);}else later(te,go);}
  if(v.split&&tn>0){const go=()=>{const lb=bs[bs.length-1];lb.classList.add('gather');setTimeout(()=>{lb.remove();for(let i=0;i<10;i++){const e=h('span','pop',STK);e.style.animationDelay=(i*.06)+'s';U.prepend(e);}lab.innerHTML=L(tn-1,on+10);SFX.chime();},still?0:600);};if(still){bs[bs.length-1].remove();for(let i=0;i<10;i++)U.prepend(h('span','',STK));lab.innerHTML=L(tn-1,on+10);}else later(te,go);}
  if(v.text){const tx=h('div','bignum pop',v.text);const tt=still?0:(v.exch||v.split?te+1.4:tEnd+.6);tx.style.animationDelay=tt+'s';d.append(tx);later(tt,SFX.chime);}}
 else if(T==='col'){const a=v.a,b=v.b,op=v.op||'+',sp=v.speed||2.2,A=[Math.floor(a/10),a%10],Bd=[Math.floor(b/10),b%10];let r0,r1,carry=0,borrow=false;
  if(op==='+'){const s0=A[1]+Bd[1];carry=s0>=10?1:0;r0=s0%10;r1=A[0]+Bd[0]+carry;}else{borrow=A[1]<Bd[1];r0=(borrow?A[1]+10:A[1])-Bd[1];r1=(borrow?A[0]-1:A[0])-Bd[0];}
  const g=h('div','colg pop');const cell=(c,x)=>{const e=h('div','cc '+c,x==null?'':String(x));g.append(e);return e;};
  cell('aux');const auxT=cell('aux ct');const auxU=cell('aux cu');
  cell('hd');cell('hd ct','สิบ');cell('hd cu','หน่วย');
  cell('');const aT=cell('ct',A[0]||'');const aU=cell('cu',A[1]);
  cell('op',op);cell('ct',Bd[0]||'');cell('cu',Bd[1]);
  const ln=h('div','cline');g.append(ln);
  cell('');const rT=cell('ct rs',v.q?'':(r1||''));const rU=cell('cu rs',v.q?'□':r0);if(v.q)rT.textContent='';
  d.append(g);
  if(!v.q){const hl=c=>{g.querySelectorAll('.cc').forEach(e=>e.classList.toggle('hl',e.classList.contains(c)&&!e.classList.contains('hd')));};
   const s1=()=>{hl('cu');},s2=()=>{if(borrow){aT.classList.add('x');auxT.textContent=A[0]-1;auxT.classList.add('pop','on');aU.innerHTML='<sup>1</sup>'+A[1];aU.classList.add('pop');SFX.pop(2);}},
    s3=()=>{rU.classList.add('on','pop');SFX.pop(4);if(carry){auxT.textContent='1';auxT.classList.add('pop','on');}},s4=()=>hl('ct'),s5=()=>{rT.classList.add('on','pop');SFX.chime();hl('none');};
   if(still){s1();s2();s3();s5();}else{later(at+.2,s1);if(borrow)later(at+sp*.6,s2);later(at+sp*(borrow?1.3:.8),s3);later(at+sp*(borrow?2.1:1.6),s4);later(at+sp*(borrow?2.7:2.2),s5);}}
  if(v.text){const tx=h('div','bignum pop',v.text);const tt=still?0:at+sp*(borrow?3.2:2.7);tx.style.animationDelay=tt+'s';d.append(tx);}}
 else if(T==='grid'){const W=v.w,H=v.h,z=60;let s='<svg class="grd" viewBox="-4 -4 '+(W*z+8)+' '+(H*z+8)+'">';
  for(let y=0;y<H;y++)for(let x=0;x<W;x++)s+='<rect x="'+x*z+'" y="'+y*z+'" width="'+z+'" height="'+z+'" rx="6" fill="'+((x+y)%2?'#eef7e4':'#f7fbef')+'" stroke="#c9d8b8" stroke-width="2"/>';
  Object.entries(v.cells||{}).forEach(([k,e])=>{const [x,y]=k.split(',').map(Number);s+='<text x="'+(x*z+z/2)+'" y="'+(y*z+z/2+2)+'" text-anchor="middle" dominant-baseline="central" font-size="38">'+e+'</text>';});
  const st=v.start||[0,0];s+='<g class="mv" style="transform:translate('+(st[0]*z+z/2)+'px,'+(st[1]*z+z/2)+'px)"><circle r="26" fill="#ffd23f" opacity=".55"/><text text-anchor="middle" dominant-baseline="central" font-size="38" y="2">'+(v.who||'🐭')+'</text></g></svg>';
  const box=h('div','grdbox pop',s);d.append(box);const path=[...(v.path||'').replace(/\s/g,'')];
  if(path.length){const r=h('div','arws');const chips=path.map(c=>{const e=h('span','arw',c);r.append(e);return e;});d.append(r);
   const mv=box.querySelector('.mv');let x=st[0],y=st[1];const steps=path.map(c=>{x+=c==='→'?1:c==='←'?-1:0;y+=c==='↓'?1:c==='↑'?-1:0;return [x,y];});const sp=v.speed||.7;
   const put=(i)=>{const [px,py]=steps[i];mv.style.transform='translate('+(px*z+z/2)+'px,'+(py*z+z/2)+'px)';chips.forEach((c,j)=>c.classList.toggle('on',j===i));chips[i].classList.add('done');};
   if(v.go!==false){if(still){mv.style.transition='none';put(steps.length-1);}else steps.forEach((_,i)=>later(at+.6+i*sp,()=>{put(i);SFX.pop(i);}));}}}
 else if(T==='fig'){const box=h('div','figbox pop',figSVG(v.fig));d.append(box);const svg=box.querySelector('svg');const hl=v.hl||[],sp=v.speed||.8;
  const cnt=h('div','res pop','');if(hl.length)d.append(cnt);cnt.style.visibility='hidden';
  hl.forEach((pts,i)=>{const go=()=>{svg.querySelectorAll('.hlp').forEach(e=>e.classList.add('old'));const p=document.createElementNS('http://www.w3.org/2000/svg','polygon');p.setAttribute('points',pts.map(x=>x.join(',')).join(' '));p.setAttribute('class','hlp');svg.prepend(p);cnt.style.visibility='visible';cnt.textContent=(v.unit||'รูปที่ ')+(i+1);SFX.pop(i);};if(!still)later(at+.5+i*sp,go);});
  if(v.text){const tx=h('div','bignum pop',v.text);const tt=still?0:at+.6+hl.length*sp;tx.style.animationDelay=tt+'s';d.append(tx);later(tt,()=>{cnt.style.display='none';SFX.chime();});}}

 else if(T==='memo'){/* จำภาพ: แสดงครบ sec วินาที แล้วของชิ้นหนึ่งหายไป (ในคำถามก็นับถอยหลังด้วย) */const sec=v.sec||5,its=v.items,r=h('div','row memo'),cs=its.map((e,i)=>{const c=h('div','card pop','<div class="e">'+e+'</div>');c.style.animationDelay=(i*.08)+'s';r.append(c);return c;});
  const bar=h('div','memob pop','👀 จำให้ดีนะ '+sec);d.append(bar,r);const preview=location.hash==='#all';
  const hide=()=>{if(v.gone!=null){const c=cs[v.gone];c.innerHTML='<div class="e">❓</div>';c.classList.add('gone2');}bar.textContent='อะไรหายไป?';bar.classList.add('ask');};
  if(preview)hide();else{let k=sec;const iv=setInterval(()=>{if(!d.isConnected){clearInterval(iv);return;}k--;if(k>0){bar.textContent='👀 จำให้ดีนะ '+k;}else{clearInterval(iv);hide();SFX.chime();}},1000+(at?0:0));}}

 else if(T==='cards'){const r=h('div','row'+(v.sm?' sm':''));v.items.forEach((c,i)=>{const k=h('div','card pop'+(c.bad?' bad':''));k.innerHTML=(art(c)?'<div class="art">'+art(c)+'</div>':'')+(c.e?'<div class="e'+(c.sh?' shd':'')+(c.flip?' flip':'')+(c.vflip?' vflip':'')+([...c.e].length>2?' sm':'')+'">'+c.e+'</div>':'')+(c.big?'<div class="L'+(c.flip?' flip':'')+(c.vflip?' vflip':'')+'">'+c.big+'</div>':'')+(c.m?'<div class="M">'+c.m+'</div>':'')+(c.t?'<div class="T">'+c.t+'</div>':'');k.style.animationDelay=dl(i,v.speed||.6)+'s';fx(k,i,v.speed||.6);r.append(k);});d.append(r);}
 return d;}
const optHTML=o=>typeof o==='string'?'<div class="'+([...o].length<=3?'L':'M')+'">'+o+'</div>':(art(o)?'<div class="art">'+art(o)+'</div>':'')+(o.e?'<div class="e'+(o.sh?' shd':'')+(o.flip?' flip':'')+(o.vflip?' vflip':'')+([...o.e].length>2?' sm':'')+([...o.e].length>4?' xs':'')+'">'+o.e+'</div>':'')+(o.big?'<div class="L'+(o.flip?' flip':'')+(o.vflip?' vflip':'')+'">'+o.big+'</div>':'')+(o.m?'<div class="M">'+o.m+'</div>':'')+(o.t?'<div class="T">'+o.t+'</div>':'');
const label=o=>typeof o==='string'?o:(o.t||o.big||o.m||'');const labelSay=o=>{if(o&&o.say)return o.say;const l=label(o);return /^[A-Za-z]$/.test(l)?'['+l+']':l;};
const rand=a=>a[Math.floor(Math.random()*a.length)];

/* ---------- ลำดับการเล่น ---------- */
const MOCK=EP.mode==='mock';
/* จดว่าข้อไหนเคยขึ้นแล้วกี่ครั้ง (kla-seen-v1 = {id:[ครั้ง, เวลาล่าสุด]}) ให้สนามสอบสุ่มข้อที่ยังไม่เคยทำก่อน */
const markSeen=id=>{try{const k='kla-seen-v1';const d=JSON.parse(localStorage.getItem(k)||'{}');const o=d[id]||[0,0];d[id]=[o[0]+1,Math.round(Date.now()/1000)];localStorage.setItem(k,JSON.stringify(d));}catch(e){}};
/* อ่านตัวเลือกให้ฟัง ("ข้อ ก ... ข้อ ข ...") เฉพาะข้อที่ตัวเลือกเป็นคำ/ตัวเลขทุกตัว ตัวเลือกที่เป็นภาพหรือลูกศรให้ดูเอง */
const SAYOK=/^[฀-๿A-Za-z0-9 ,.'!?\-+−=<>·\[\]]+$/;
/* ไม่อ่านตัวเลือก เมื่อโจทย์วัดการ "ดู/อ่าน" รูปตัวอักษรเอง (อ่านให้ฟังจะกลายเป็นเฉลย): พยัญชนะ สระ สะกด วรรณยุกต์ ตัวพิมพ์เล็กใหญ่ เลขไทย ภาพนี้คือคำใด
   หรือมีตัวเลือกเป็นตัวอักษรเดี่ยว/เลขไทย · บังคับเองได้ด้วย q.read=true/false */
const NOREAD=/เขียนถูก|เขียนผิด|เขียนคำ|เขียนตัว|เขียนเป็น|เขียนได้|ตัวพิมพ์|ตัวใหญ่ของ|ตัวเล็กของ|เลขไทย|สะกด|ไม้เอก|ไม้โท|ไม้ตรี|ไม้จัตวา|ไม้ม้วน|ไม้มลาย|สระ|พยัญชนะ|วรรณยุกต์|ตัวอักษร|คือตัวใด|ด้วยตัวใด|ตัวใดคือ|อ่านว่าอะไร|อ่านว่าอย่างไร|ภาษาอังกฤษคือคำใด|คำใดคือ|ภาพนี้คือคำใด|letter|[Cc]apital/;
const noRead=q=>q.read===false||(q.read!==true&&(NOREAD.test(q.q+' '+(q.say||''))||q.opts.some(o=>/^([ก-ฮ]|[ะ-ฺเ-ๅ็-๎◌\-]+|[A-Za-z]|[A-Z][a-z]|[a-z][A-Z])$|[๐-๙]/.test(label(o)))));
const optSay=q=>{if(noRead(q))return [];const ls=q.opts.map(labelSay);return ls.every(l=>l&&SAYOK.test(l)&&/[ก-ฮA-Za-z0-9]/.test(l))?ls.flatMap((l,i)=>['ข้อ '+'กขคง'[i],l]):[];};
/* ชุด 50 ข้อขึ้นไป: พักครึ่งทาง 10 วินาทีก่อนข้อ 26 */
/* พักครึ่งทาง (ชุด 50 ข้อ): ต้นกล้าเต้นตามเพลงสั้น ๆ 10 วินาที เพลงสังเคราะห์เอง ไม่ใช้ไฟล์ */
function music(sec){const a=ac();if(!a||!sfxOn)return ()=>{};const bus=a.createGain();bus.gain.value=1;bus.connect(a.destination);const t0=a.currentTime+.05,B=.3,F=m=>440*Math.pow(2,(m-69)/12);
 const N=(m,st,len,type,vol)=>{const t=t0+st*B;if(st*B>sec)return;const o=a.createOscillator(),g=a.createGain();o.type=type;o.frequency.setValueAtTime(F(m),t);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+len*B*.95);o.connect(g).connect(bus);o.start(t);o.stop(t+len*B+.05);};
 const A=[[72,1],[76,1],[79,1],[76,1],[77,1],[81,1],[79,2],[76,1],[79,1],[84,1],[79,1],[77,1],[74,1],[72,2]],Bp=[[74,1],[77,1],[81,1],[77,1],[76,1],[79,1],[84,2],[81,1],[79,1],[77,1],[76,1],[74,1],[76,1],[72,2]];
 let k=0;[...A,...Bp,[72,1],[76,1],[79,1],[84,2]].forEach(([m,l])=>{N(m,k,l,'triangle',.055);k+=l;});
 for(let i=0;i*2<k;i++){const r=[48,48,53,53,48,48,43,48][i%8];N(r,i*2,1.6,'sine',.07);N(r+12,i*2+1,.4,'square',.012);}
 let done=false;return ()=>{if(done)return;done=true;try{bus.gain.setTargetAtTime(.0001,a.currentTime,.05);setTimeout(()=>{try{bus.disconnect()}catch(e){}},500);}catch(e){}};}
async function rest(){const my=tok;const cd=h('div','restn pop','10');const msg=MOCK?'ครึ่งทางแล้วค่ะ พักสักครู่นะคะ ลุกขึ้นเต้นกับน้องกล้า ยืดแขนยืดขา หายใจลึก ๆ':'พักครึ่งทางกันก่อนนะ ลุกขึ้นมาเต้นกับน้องกล้า ยืดเส้นยืดสาย หายใจลึก ๆ';
 const notes=['♪','♫','♬','♪','♫','♩','♬'].map((n,i)=>'<span class="nt" style="left:'+(6+i*14)+'%;animation-delay:'+(i*.45).toFixed(2)+'s;--x:'+((i%2?1:-1)*(18+i*5))+'px;color:'+['#8e5bd8','#e8701c','#2389c9','#d64545','#2fae5c','#e0a800','#c2185b'][i]+'">'+n+'</span>').join('');
 await show(h('div','vis','<div class="party">'+(MOCK?'<div class="char pop">'+TEACH+'</div>':'')+'<div class="char pop dancer">'+KLA+'</div>'+notes+'</div><div class="bubble pop">🎵 พักครึ่งทาง มาเต้นกัน 10 วินาที</div>'),true);st.firstElementChild.append(cd);
 const stop=music(10.2);say(msg);
 for(let k=10;k>0;k--){cd.textContent=k;await gap(1000,my);if(paused)stop();if(my!==tok){stop();return false;}}
 stop();cd.textContent='🙌';SFX.sparkle();await say(MOCK?'พร้อมแล้ว ไปต่อกันเลยค่ะ':'ไปต่อกันเลย');return my===tok;}
async function mockIntro(){phase='quiz';const my=++tok;setWho('teach');SFX.chime();await show(h('div','vis','<div class="char pop">'+TEACH+'</div><div class="bubble pop">ฟังโจทย์ให้ดี แล้วเลือกคำตอบที่ถูกที่สุด 📝</div>'),true);
 await say(['สวัสดีค่ะ ครูชื่อดอกม่วง วันนี้มาลองทำข้อสอบเหมือนวันสอบจริงกันนะคะ','ครูจะอ่านโจทย์ให้ฟังข้อละสองรอบ แล้วให้เวลาคิดสักครู่ พอหมดเวลา ครูจะอ่านข้อต่อไปเลยนะคะ ข้อไหนไม่แน่ใจ ให้เลือกคำตอบที่คิดว่าใช่ที่สุดค่ะ']);if(my!==tok)return;EP._t0=Date.now();quiz(0);}
async function lesson(from){if(MOCK)return mockIntro();phase='lesson';const my=++tok;if(synth)synth.cancel();
 for(let i=from;i<EP.scenes.length;i++){cur=i;const s=EP.scenes[i];setWho('kla');if(i>from)SFX.whoosh();await show(vis(s.v||{type:'kla'}),true);if(my!==tok)return;prog(i/total);await say(s.say);if(my!==tok)return;await gap(800,my);if(my!==tok)return;}
 phase='quiz';SFX.chime();await show(h('div','vis','<div class="char pop">'+KLA+'</div><div class="bubble pop">ถึงเวลาตอบคำถามแล้ว 🌟</div>'),true);await say('ถึงเวลาตอบคำถามแล้ว ฟังให้ดีนะ');if(my!==tok)return;quiz(0);}
async function quiz(qi){if(qi>=EP.questions.length)return finish();if(EP.questions.length>=50&&qi===25&&!EP._rest){EP._rest=1;if(!await rest())return;}const q=EP.questions[qi];prog((EP.scenes.length+qi)/total);setWho(MOCK?'teach':'kla');if(!EP._t0)EP._t0=Date.now();const QS0=(MOCK?['ข้อ '+(qi+1),q.say||q.q].concat(optSay(q),['ครูอ่านอีกครั้งนะคะ',q.say||q.q]):[q.bonus?'ข้อพิเศษ ทบทวนเลข':q.star?'ข้อท้าทาย':'',q.say||q.q]).concat(optSay(q));
 const box=h('div','vis');if(q.star)box.append(h('div','star pop','⭐ ข้อท้าทาย ผิดได้ไม่เป็นไร'));if(q.bonus)box.append(h('div','star pop bonus','🔢 ข้อพิเศษ ทบทวนเลข'));if(q.v)box.append(vis(q.v,true));const qt=h('div','qtext',strip(q.q)+' ');if(!MOCK){const rp=h('button','rep','🔊');rp.title='ฟังคำถามอีกครั้ง';rp.onclick=()=>{if(QS&&!QS.lock){tok++;if(synth)synth.cancel();say(QS0);}};qt.append(rp);}if(EP.mode)box.prepend(h('div','qno pop','ข้อ '+(qi+1)+' / '+EP.questions.length));box.append(qt);
 const opts=h('div','opts');const btns=q.opts.map((o,i)=>{const b=h('button','opt pop','<span class="k">'+'กขคง'[i]+'.</span>'+optHTML(o));b.style.animationDelay=(i*.1)+'s';b.onclick=()=>answer(i,b);opts.append(b);return b;});box.append(opts);
 if(qi>0)SFX.whoosh();await show(box,true);if(q.star)SFX.sparkle();
 QS={qi,q,btns,tries:0,lock:false};hideSub=true;if(q.id&&(EP.mode||q.bonus))markSeen(q.id);if(MOCK)return mockTimer(qi,q,box,btns,QS0);say(QS0);}
/* จำลองสอบเหมือนวันจริง: ครูอ่านโจทย์ (และตัวเลือก) 2 รอบ แล้วให้เวลาคิด EP.sec วินาที หมดเวลาแล้วครูบอก แล้วอ่านข้อต่อไป */
async function mockTimer(qi,q,box,btns,segs){const my=tok;const ms=(EP.sec||15)*1000;const tm=h('div','tmr'),f=h('i');tm.append(f);const qn=box.querySelector('.qno');if(qn)qn.after(tm);else box.prepend(tm);
 await say(segs);if(my!==tok)return;let t=0;tm.classList.add('on');
 while(t<ms){await wait(100);if(my!==tok)return;if(!paused){t+=100;f.style.width=(100-t/ms*100)+'%';if(ms-t<=3000)tm.classList.add('low');if(t%1000===0&&ms-t<3000&&ms-t>0)SFX.pop(1);}}
 const s=QS;if(!s||s.lock)return;s.lock=true;LOG[qi]={id:q.id,t:q.t,ok:false,to:1};btns.forEach(x=>x.disabled=true);tm.classList.add('end');SFX.chime();hideSub=false;
 await say('หมดเวลาแล้วค่ะ');if(my!==tok)return;await gap(500,my);if(my!==tok)return;quiz(qi+1);}
/* ---------- เฉลยแบบภาพเคลื่อนไหว 3 มิติ (โหมดฝึก/คลิป): นับกล่องที่ซ้อนกัน · มองจากด้านบน/หน้า · พับภาพคลี่ ---------- */
function exPlan(q){const t=q.q+' '+(q.say||''),v=q.v||{},a=q.opts[q.ans];
 let g=v.type==='blocks'?v.g:null;if(!g&&/มากที่สุด|น้อยที่สุด/.test(t)&&a&&a.blk&&a.blk.g)g=a.blk.g;
 if(g&&/ติดกับ/.test(t)&&v.gray)return {k:'blk',g,view:'adj',gray:v.gray};
 if(g&&!/ติดกับ/.test(t)){if(/ด้านบน/.test(t))return {k:'blk',g,view:'top'};if(/ด้านหน้า/.test(t))return {k:'blk',g,view:'front'};if(/กี่กล่อง|กี่ใบ|กี่ก้อน|มากที่สุด|น้อยที่สุด/.test(t))return {k:'blk',g,view:'count'};}
 if(/คลี่|พับ/.test(t)){const net=(a&&a.solid)||(/ลูกบาศก์|ลูกเต๋า/.test(t)?'cube':/ทรงกระบอก/.test(t)?'cylinder':/กรวย/.test(t)?'cone':null);if(!net)return null;
  let nums=null,pair=null;const f=v.items&&v.items[0]&&v.items[0].fig;
  if(net==='cube'&&f&&f.txt){nums={};f.txt.forEach(([x,y,n])=>{nums[Math.round((x-30)/40)+','+Math.round((y-30)/40)]=n;});}
  const m=t.match(/ตรงข้ามกับหน้า (\d)/);if(m)pair=[m[1],label(a)];
  if(net==='cube'&&!nums&&/กี่รูป|กี่หน้า/.test(t))nums={'1,0':1,'0,1':2,'1,1':3,'2,1':4,'3,1':5,'1,2':6};
  return {k:'net',net,nums,pair};}
 return null;}
async function explain(p){const my=tok;let skip=false;const ov=h('div','ex3d'),box=h('div','exbox'),cap=h('div','excap','👀 มาดูกัน'),st3=h('div','x3d'),sc=h('div','sc3'),sk=h('button','pgo','ข้าม ▶');
 sk.onclick=()=>{skip=true;};st3.append(sc);box.append(cap,st3,sk);ov.append(box);document.body.append(ov);
 const W=async ms=>{let t=0;while(t<ms&&!skip){await wait(50);if(my!==tok)return false;if(!paused)t+=50;}return my===tok&&!skip;};
 try{if(p.k==='blk'){await exBlocks(p,sc,cap,W);if(my===tok&&p.st){sk.style.display='none';await blkPlay(p,sc,cap,box,my);}}
  else{if(p.net==='cube')await exCube(p,sc,cap,W);else if(p.net==='cylinder')await exCyl(sc,cap,W);else await exCone(sc,cap,W);if(!skip)await W(700);}}catch(e){}
 ov.remove();return my===tok;}
async function exBlocks(p,sc,cap,W){const g=p.g,R=g.length,C=Math.max(...g.map(r=>r.length)),S=46,cubes=[];
 for(let z=0;z<9;z++)for(let r=0;r<R;r++)for(let c=0;c<C;c++)if(((g[r]&&g[r][c])||0)>z)cubes.push([r,c,z]);
 const mz=Math.max(...cubes.map(x=>x[2]))+1;sc.style.setProperty('--s',S+'px');
 const els=cubes.map(()=>{const e=h('div','cu3',['f','b','l','r','t','d'].map(k=>'<i class="'+k+'"><b></b></i>').join(''));sc.append(e);return e;});
 const place=k=>cubes.forEach(([r,c,z],i)=>{els[i].style.transform='translate3d('+((c-(C-1)/2)*S*k)+'px,'+((-z+(mz-1)/2)*S*k)+'px,'+((r-(R-1)/2)*S*k)+'px)';});
 const gi=p.gray?cubes.findIndex(([r,c,z])=>r===p.gray[0]&&c===p.gray[1]&&z===(p.gray[2]||0)):-1;if(gi>=0)els[gi].classList.add('gy');
 const nb=gi<0?[]:cubes.map((x,i)=>i).filter(i=>Math.abs(cubes[i][0]-cubes[gi][0])+Math.abs(cubes[i][1]-cubes[gi][1])+Math.abs(cubes[i][2]-cubes[gi][2])===1);
 p.st={els,cubes,place,gi,nb};
 const ISO='rotateX(-25deg) rotateY(-35deg)';sc.style.transform=ISO;place(1);if(!await W(1000))return;
 if(p.view==='adj'){cap.textContent='แยกกล่องออกนิดนึง ดูว่ากล่องไหนแตะกล่องสีเทา';els.forEach(e=>e.style.transition='transform .9s ease');place(1.4);SFX.whoosh();if(!await W(1300))return;
  sc.style.transition='transform 2.4s ease-in-out';sc.style.transform='rotateX(-25deg) rotateY(25deg)';
  for(let k=0;k<nb.length;k++){const e=els[nb[k]];e.classList.add('hl');e.querySelectorAll('b').forEach(b=>b.textContent=k+1);cap.textContent='ติดกับกล่องสีเทา '+(k+1)+' กล่อง';SFX.pop(k);if(!await W(800))return;}
  cap.textContent='รวมติดกับกล่องสีเทา '+nb.length+' กล่อง';SFX.chime();if(!await W(1500))return;els.forEach(e=>e.style.transition='transform .8s ease');place(1);sc.style.transform=ISO;await W(900);return;}
 if(p.view!=='count'){cap.textContent=p.view==='top'?'⬇️ มองจากด้านบนลงมา':'👀 มองจากด้านหน้าตรง ๆ';sc.style.transition='transform 1.6s ease-in-out';sc.style.transform=p.view==='top'?'rotateX(-90deg) rotateY(0deg)':'rotateX(0deg) rotateY(0deg)';SFX.whoosh();
  if(!await W(3000))return;sc.style.transform=ISO;await W(1600);return;}
 cap.textContent='แยกกล่องออก จะเห็นกล่องที่ซ่อนอยู่';els.forEach(e=>e.style.transition='transform .9s ease');place(1.5);SFX.whoosh();if(!await W(1200))return;
 sc.style.transition='transform '+(cubes.length*.65+1.5).toFixed(1)+'s linear';sc.style.transform='rotateX(-25deg) rotateY(325deg)';
 for(let i=0;i<cubes.length;i++){els[i].classList.add('hl');els[i].querySelectorAll('b').forEach(b=>b.textContent=i+1);cap.textContent=(cubes[i][2]?'ชั้นที่ '+(cubes[i][2]+1):'ชั้นล่าง')+' · นับได้ '+(i+1)+' กล่อง';SFX.pop(i);if(!await W(650))return;}
 cap.textContent='รวมทั้งหมด '+cubes.length+' กล่อง';SFX.chime();if(!await W(1600))return;els.forEach(e=>e.style.transition='transform .8s ease');place(1);await W(900);}
/* หลังเฉลยบล็อก: ให้น้องใช้นิ้วลากหมุนดูรอบ ๆ และแตะกล่องนับเองทีละกล่อง (มีปุ่มแยกกล่อง นับใหม่ มองด้านบน/หน้า) จนกด ไปต่อ */
async function blkPlay(p,sc,cap,box,my){const {els,cubes,place,gi,nb}=p.st,N=cubes.length,goal=p.view==='adj'?nb.length:p.view==='count'?N:0;
 const clear=()=>els.forEach(e=>{e.classList.remove('hl');e.querySelectorAll('b').forEach(b=>b.textContent='');});clear();
 let rx=-25,ry=-35,spread=false,n=0;
 /* ขยายภาพให้เต็มกรอบ จะได้แตะกล่องด้วยนิ้วได้ง่าย */
 const fr={width:sc.parentNode.clientWidth,height:sc.parentNode.clientHeight},ext=Math.max(...cubes.map(([r,c,z])=>Math.max(r,c,z)))+1,K=Math.max(.8,Math.min(1.7,.62*Math.min(fr.width,fr.height)/(ext*46*1.3)));
 const rot=t=>{sc.style.transition=t||'none';sc.style.transform='scale3d('+K+','+K+','+K+') rotateX('+rx+'deg) rotateY('+ry+'deg)';};
 els.forEach(e=>e.style.transition='transform .6s ease');place(1);rot('transform .6s ease');
 const msg=()=>{cap.textContent=!goal?'👆 ลองใช้นิ้วลากหมุนดูได้เลย':n?'นับได้ '+n+' กล่อง':p.view==='adj'?'👆 หมุนดู แล้วแตะนับกล่องที่ติดกับกล่องสีเทา':'👆 ลากหมุนดู แล้วแตะนับทีละกล่องนะ';};msg();
 const bar=h('div','x3bar'),B=(t,f,c)=>{const b=h('button',(c||'btn2')+' x3b',t);b.onclick=f;bar.append(b);return b;};
 const bS=B('↔ แยกกล่อง',()=>{spread=!spread;place(spread?1.6:1);bS.textContent=spread?'↔ รวมกล่อง':'↔ แยกกล่อง';SFX.whoosh();});
 if(goal)B('↺ นับใหม่',()=>{n=0;clear();msg();SFX.pop(0);});
 B('⬇️ ด้านบน',()=>{rx=-90;ry=0;rot('transform .8s ease');});B('👀 ด้านหน้า',()=>{rx=0;ry=0;rot('transform .8s ease');});
 const go=B('ไปต่อ ▶',null,'go');box.append(bar);
 const st3=sc.parentNode;st3.classList.add('drag');let d0=null;
 st3.onpointerdown=e=>{d0={x:e.clientX,y:e.clientY,rx,ry,t:e.target,m:0};try{st3.setPointerCapture(e.pointerId)}catch(x){}};
 st3.onpointermove=e=>{if(!d0)return;const dx=e.clientX-d0.x,dy=e.clientY-d0.y;d0.m=Math.max(d0.m,Math.abs(dx)+Math.abs(dy));if(d0.m<8)return;ry=d0.ry+dx*.6;rx=Math.max(-90,Math.min(30,d0.rx-dy*.6));rot();};
 st3.onpointerup=st3.onpointercancel=()=>{const d=d0;d0=null;if(!d||d.m>=8||!goal)return;const cu=d.t&&d.t.closest&&d.t.closest('.cu3'),i=els.indexOf(cu);
  if(i<0||i===gi||cu.classList.contains('hl')){SFX.pop(0);return;}
  if(p.view==='adj'&&!nb.includes(i)){cu.animate([{filter:'none'},{filter:'brightness(.55)'},{filter:'none'}],{duration:450});cap.textContent='กล่องนี้ไม่ได้ติดกับกล่องสีเทานะ';SFX.no();return;}
  n++;cu.classList.add('hl');cu.querySelectorAll('b').forEach(b=>b.textContent=n);SFX.pop(n);msg();
  if(n===goal){cap.textContent='ครบแล้ว! ทั้งหมด '+goal+' กล่อง เก่งมาก 🎉';SFX.chime();const [x,y]=centerOf(st3);confetti(x,y,24);}};
 await new Promise(res=>{go.onclick=res;const iv=setInterval(()=>{if(my!==tok){clearInterval(iv);res();}},200);go.addEventListener('click',()=>clearInterval(iv));});}
async function exCube(p,sc,cap,W){const S=72,m=p.nums||{};sc.style.setProperty('--s',S+'px');
 const F=(c,r,cls)=>{const n=m[c+','+r];const e=h('div','nf'+(cls?' '+cls:''),'<b>'+(n==null?'':n)+'</b>');e.dataset.n=n==null?'':n;return e;};
 const base=F(1,1,'nbase'),top=F(1,0,'nt'),lf=F(0,1,'nl'),rt=F(2,1,'nr'),far=F(3,1,'nr'),bt=F(1,2,'nb');rt.append(far);base.append(top,lf,rt,bt);sc.append(base);
 const Z=' translateZ('+(S/2)+'px)';sc.style.transform='rotateX(0deg) rotateY(0deg) translateX('+(-S/2)+'px)';
 cap.textContent='ภาพคลี่ของลูกบาศก์ มีสี่เหลี่ยม 6 รูป';if(!await W(1300))return;
 sc.style.transition='transform 1s ease';sc.style.transform='rotateX(-20deg) rotateY(-25deg) translateX(0px)'+Z;if(!await W(900))return;
 cap.textContent='พับขึ้นทีละด้าน';for(const f of [lf,top,bt,rt,far]){f.classList.add('fold');SFX.whoosh();if(!await W(750))return;}
 cap.textContent='พับแล้วได้ลูกบาศก์';SFX.chime();sc.style.transition='transform 4.5s ease-in-out';sc.style.transform='rotateX(-25deg) rotateY(-385deg) translateX(0px)'+Z;
 if(p.pair){const hs=[...sc.querySelectorAll('.nf')].filter(e=>p.pair.includes(String(e.dataset.n)));hs.forEach(e=>e.classList.add('hl'));cap.textContent='หน้า '+p.pair[0]+' อยู่ตรงข้ามกับหน้า '+p.pair[1];}
 await W(4700);}
async function exCyl(sc,cap,W){const N=20,H=130,R=46,w=2*Math.PI*R/N;cap.textContent='ภาพคลี่ของทรงกระบอก';
 const st=[];for(let i=0;i<N;i++){const e=h('div','cs');Object.assign(e.style,{width:(w+.6)+'px',height:H+'px',left:(-w/2)+'px',top:(-H/2)+'px'});sc.append(e);st.push(e);}
 const cc=[h('div','cc'),h('div','cc')];cc.forEach(c=>{Object.assign(c.style,{width:2*R+'px',height:2*R+'px',left:-R+'px',top:-R+'px'});sc.append(c);});
 st.forEach((e,i)=>e.style.transform='translateX('+((i-(N-1)/2)*w)+'px) rotateY(0deg) translateZ(0px)');cc[0].style.transform='translateY('+(-H/2-R-4)+'px) rotateX(0deg)';cc[1].style.transform='translateY('+(H/2+R+4)+'px) rotateX(0deg)';
 if(!await W(1300))return;cap.textContent='ม้วนสี่เหลี่ยมเป็นท่อ แล้วปิดวงกลมบนล่าง';SFX.whoosh();
 [...st,...cc].forEach(e=>e.style.transition='transform 1.6s ease-in-out');st.forEach((e,i)=>e.style.transform='translateX(0px) rotateY('+(i*360/N)+'deg) translateZ('+R+'px)');
 cc[0].style.transform='translateY('+(-H/2)+'px) rotateX(90deg)';cc[1].style.transform='translateY('+(H/2)+'px) rotateX(90deg)';
 sc.style.transition='transform 1.6s ease';sc.style.transform='rotateX(-22deg) rotateY(0deg)';if(!await W(1800))return;
 cap.textContent='พับแล้วได้ทรงกระบอก';SFX.chime();sc.style.transition='transform 4s linear';sc.style.transform='rotateX(-22deg) rotateY(360deg)';await W(4000);}
async function exCone(sc,cap,W){const N=18,L=140,R=50,th=360*R/L,b=Math.asin(R/L)*180/Math.PI,H=L*Math.cos(b*Math.PI/180),w=2*L*Math.tan(th/N/2*Math.PI/180);cap.textContent='ภาพคลี่ของกรวย';
 const st=[];for(let i=0;i<N;i++){const e=h('div','ct');Object.assign(e.style,{width:(w+.6)+'px',height:L+'px',left:(-w/2)+'px',top:(-H/2)+'px'});sc.append(e);st.push(e);}
 const cc=h('div','cc cone');Object.assign(cc.style,{width:2*R+'px',height:2*R+'px',left:-R+'px',top:-R+'px'});sc.append(cc);
 st.forEach((e,i)=>e.style.transform='rotateY(0deg) rotateX(0deg) rotateZ('+(-th/2+(i+.5)*th/N)+'deg)');cc.style.transform='translateY('+(-H/2+L+R+8)+'px) rotateX(0deg)';
 if(!await W(1300))return;cap.textContent='ม้วนรูปพัดให้ปลายแหลมอยู่ข้างบน แล้วปิดก้นด้วยวงกลม';SFX.whoosh();
 [...st,cc].forEach(e=>e.style.transition='transform 1.6s ease-in-out');st.forEach((e,i)=>e.style.transform='rotateY('+(i*360/N)+'deg) rotateX('+b+'deg) rotateZ(0deg)');cc.style.transform='translateY('+(H/2)+'px) rotateX(90deg)';
 sc.style.transition='transform 1.6s ease';sc.style.transform='rotateX(-18deg) rotateY(0deg)';if(!await W(1800))return;
 cap.textContent='พับแล้วได้กรวย';SFX.chime();sc.style.transition='transform 4s linear';sc.style.transform='rotateX(-18deg) rotateY(360deg)';await W(4000);}
/* สนามสอบ: หลังตอบ เว้นเวลาให้กากบาทลงกระดาษจริง (EP.paper วินาที) มีวงนับถอยหลัง และปุ่มไปต่อ */
async function paperWait(){const sec=EP.paper||0;if(!EP.mode||!sec)return true;const my=tok;let skip=false;
 const el=h('div','paper','<div class="pring"><b>'+sec+'</b></div><div class="ptx">✏️ กากบาทในกระดาษ</div>');const bt=h('button','pgo','ไปต่อ ▶');bt.onclick=()=>{skip=true;};el.append(bt);document.body.append(el);
 const ring=el.querySelector('.pring'),num=el.querySelector('b');let t=0;const ms=sec*1000;
 while(t<ms&&!skip){await wait(100);if(my!==tok)break;if(!paused){t+=100;ring.style.setProperty('--p',(t/ms*360)+'deg');num.textContent=Math.ceil((ms-t)/1000);if(t%1000===0&&t<ms)SFX.pop(1);}}
 el.remove();return my===tok;}
async function answer(i,b){const s=QS;if(!s||s.lock)return;s.lock=true;hideSub=false;tok++;if(synth)synth.cancel();const q=s.q;
 if(MOCK){LOG[s.qi]={id:q.id,t:q.t,ok:i===q.ans};b.classList.add('picked');SFX.pop(3);s.btns.forEach(x=>x.disabled=true);await wait(650);if(!await paperWait())return;return quiz(s.qi+1);}
 if(i===q.ans){LOG[s.qi]={id:q.id,t:q.t,ok:s.tries===0};b.classList.add('ok');SFX.ok();react('cheer');const [x,y]=centerOf(b);confetti(x,y,s.tries===0?26:14);if(s.tries===0&&!q.star&&!q.bonus)score.first++;if(q.bonus&&window.logFocus)logFocus(q.id,q.t,s.tries===0);if(s.tries===0&&q.star){SFX.sparkle();starBurst(x,y,8);}s.btns.forEach(x=>x.disabled=true);const xp=exPlan(q);if(xp)await Promise.all([say([rand(PRAISE),q.why]),explain(xp)]);else await say([rand(PRAISE),q.why]);}
 else{b.classList.add('no');b.disabled=true;SFX.no();react('oops');s.tries++;
  if(s.tries===1){setWho('jook');await say(['เจ้าจุกใบ้ให้นะ',q.hint||'ลองดูดี ๆ อีกครั้งนะ']);setWho('kla');s.lock=false;return;}
  LOG[s.qi]={id:q.id,t:q.t,ok:false};if(q.bonus&&window.logFocus)logFocus(q.id,q.t,false);s.btns.forEach(x=>x.disabled=true);s.btns[q.ans].classList.add('ok');{const xs=['ไม่เป็นไรนะ คำตอบคือ',labelSay(q.opts[q.ans])||'ข้อ '+'กขคง'[q.ans],q.why],xp=exPlan(q);if(xp)await Promise.all([say(xs),explain(xp)]);else await say(xs);}}
 await wait(700);if(!await paperWait())return;quiz(s.qi+1);}
function save(gold){try{const k='kla-garden-v1';const d=JSON.parse(localStorage.getItem(k)||'{}');const o=d['EP'+EP.ep]||{};d['EP'+EP.ep]={seed:1,gold:!!(o.gold||gold),t:Date.now()};localStorage.setItem(k,JSON.stringify(d));}catch(e){}}
async function finish(){if(EP.mode)return examEnd();phase='end';react('cheer');QS=null;prog(1);const need=EP.questions.filter(q=>!q.star&&!q.bonus).length;const gold=score.first>=need;save(gold);
 const c=h('div','cover endc');c.innerHTML='<div class="pop">'+SPROUT+'</div><div class="endtx"><h1>ได้เมล็ดพันธุ์ 1 เมล็ด</h1>'+(EP.cert?'<div class="cert pop">🏆 เกียรติบัตร<small>เรียนครบ 99 ตอน ตั้งใจเรียน เก่งมาก พร้อมไปสอบแล้ว</small></div>':'')+(gold?'<div class="goldrow"><span class="gslot"></span><p class="gold">ตอบถูกตั้งแต่ครั้งแรกทุกข้อ ได้ดาวทอง!</p></div>':'')+(EP.dayEnd?'<p>วันนี้ดูครบ 3 ตอนแล้ว ไว้เจอกันรอบหน้านะ</p>':'')+'</div>';
 const bt=h('div','btns');const a1=h('button','btn2','↺ ดูอีกครั้ง');a1.onclick=()=>location.reload();bt.append(a1);
 if(EP.next&&!EP.dayEnd){const a=h('a','go','ตอนต่อไป ▶');a.href=EP.next;a.style.textDecoration='none';bt.append(a);}
 const m=h('a','btn2','🏡 กลับสวน');m.href=EP.menu;bt.append(m);c.querySelector('.endtx').append(bt);SFX.whoosh();await show(c,true);SFX.fanfare();
 [[650,0],[1900,3],[2700,5]].forEach(([t,k])=>setTimeout(()=>{if(phase==='end')SFX.pop(k);},t));setTimeout(()=>{const sp=c.querySelector('.sprout');if(sp&&phase==='end'){const [x,y]=centerOf(sp);confetti(x,y,30);}},3400);
 /* จบตอน: พูดสั้น ๆ · ได้ดาวทอง → ดาวบินหมุนเข้ามาจากนอกจอ มีประกายวิบวับเป็นทาง แล้วลงที่ช่องข้างข้อความ */
 const landed=gold?new Promise(r=>setTimeout(()=>{const sl=c.querySelector('.gslot');if(phase!=='end'||!sl)return r();flyStar(sl).then(()=>{c.querySelector('.goldrow').classList.add('on');r();});},3600)):null;
 await say(rand(['เย้ จบตอนนี้แล้ว เก่งมาก','เก่งมากเลย เรียนจบอีกหนึ่งตอนแล้ว','สุดยอด จบตอนนี้แล้ว']));
 if(gold){await landed;if(phase==='end')await say('ได้ทั้งเมล็ดพันธุ์ และดาวทองเลย');}else await say('ได้เมล็ดพันธุ์หนึ่งเมล็ด');}
const GSTAR='<svg viewBox="0 0 100 100"><defs><linearGradient id="gsg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff6b0"/><stop offset=".45" stop-color="#ffd23f"/><stop offset="1" stop-color="#f4a100"/></linearGradient></defs><path d="M50 5 L62 37 L96 38 L69 59 L79 93 L50 73 L21 93 L31 59 L4 38 L38 37Z" fill="url(#gsg)" stroke="#e09400" stroke-width="3" stroke-linejoin="round"/><path d="M34 32 Q42 22 52 24" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".85"/></svg>';
function sparkTrail(x,y){const cs=['#ffd23f','#fff3a6','#ff9ec4','#9be7ff','#ffffff','#ffb347'];for(let i=0;i<2;i++){const t=h('span','trail',Math.random()<.5?'✦':'✧');t.style.left=(x+(Math.random()-.5)*30)+'px';t.style.top=(y+(Math.random()-.5)*30)+'px';t.style.color=rand(cs);t.style.fontSize=(12+Math.random()*18)+'px';document.body.append(t);setTimeout(()=>t.remove(),1000);}}
function flyStar(slot){return new Promise(res=>{const done=()=>{slot.innerHTML=GSTAR;slot.classList.add('landed');const [x,y]=centerOf(slot);starBurst(x,y,12,'✨');confetti(x,y,24);SFX.fanfare();res();};
 if(reduce)return done();const r=slot.getBoundingClientRect(),tx=r.left+r.width/2,ty=r.top+r.height/2,sx=-90,sy=innerHeight*.75,cx=innerWidth*.35,cy=-innerHeight*.15;
 const s=h('div','flystar',GSTAR);document.body.append(s);const D=1800,t0=performance.now();let lt=0;
 for(let i=0;i<10;i++)tone(700+i*110,.14,'sine',.045,i*.16);
 const step=now=>{const p=Math.min(1,(now-t0)/D),e=1-Math.pow(1-p,3),u=1-e;const x=u*u*sx+2*u*e*cx+e*e*tx,y=u*u*sy+2*u*e*cy+e*e*ty;
  const sc=.55+.45*e+(p>.82?Math.sin((p-.82)/.18*Math.PI)*.3:0);s.style.transform='translate('+(x-36)+'px,'+(y-36)+'px) rotate('+(u*1080).toFixed(1)+'deg) scale('+sc.toFixed(3)+')';
  if(now-lt>26&&p<.96){lt=now;sparkTrail(x,y);}
  if(p<1&&phase==='end')requestAnimationFrame(step);else{s.remove();if(phase==='end')done();else res();}};
 requestAnimationFrame(step);});}
/* จบชุดสนามสอบ: เด็กเห็นแค่ดาวที่ได้ ผลรายข้อเก็บไว้ให้ผู้ปกครองดู */
async function examEnd(){phase='end';react('cheer');QS=null;prog(1);const n=EP.questions.length,ok=LOG.filter(x=>x&&x.ok).length;
 try{const k='kla-exam-v1';const d=JSON.parse(localStorage.getItem(k)||'[]');d.push({t:Date.now(),kind:MOCK?'mock':EP.warm?'warm':'practice',sec:EP._t0?Math.round((Date.now()-EP._t0)/1000):0,subj:EP.subj||'mix',n,ok,to:LOG.filter(x=>x&&x.to).length,items:LOG.map(x=>x?[x.id,x.t,x.ok?1:0]:null)});localStorage.setItem(k,JSON.stringify(d.slice(-80)));}catch(e){}
 const got=Math.max(ok,1),cheer=ok===0;
 const c=h('div','cover');c.innerHTML='<h1>ทำครบ '+n+' ข้อแล้ว</h1>'+
  '<div class="starbox"><div class="rays"></div><svg class="bigstar" viewBox="0 0 100 100"><defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff3a6"/><stop offset=".45" stop-color="#ffd23f"/><stop offset="1" stop-color="#f4a100"/></linearGradient>'+
  '<linearGradient id="sh" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><clipPath id="sc"><path d="M50 5 L62 37 L96 38 L69 59 L79 93 L50 73 L21 93 L31 59 L4 38 L38 37Z"/></clipPath></defs>'+
  '<path d="M50 5 L62 37 L96 38 L69 59 L79 93 L50 73 L21 93 L31 59 L4 38 L38 37Z" fill="url(#sg)" stroke="#e09400" stroke-width="3" stroke-linejoin="round"/>'+
  '<g clip-path="url(#sc)"><rect class="shine" x="-60" y="0" width="40" height="100" fill="url(#sh)" transform="skewX(-20)"/></g>'+
  '<circle cx="38" cy="50" r="4" fill="#5a3d00"/><circle cx="62" cy="50" r="4" fill="#5a3d00"/><path d="M42 62 Q50 69 58 62" stroke="#5a3d00" stroke-width="3" fill="none" stroke-linecap="round"/></svg>'+
  '<div class="scount"><b>0</b></div></div><p class="slabel">'+(cheer?'ดาวกำลังใจ':'ได้ดาว')+' <b class="sn">0</b> ดวง</p>';
 const bt=h('div','btns');const a1=h('button','go','↺ ทำชุดใหม่');a1.onclick=()=>location.reload();bt.append(a1);const m=h('a','btn2','🏡 กลับสวน');m.href=EP.menu;bt.append(m);c.append(bt);
 SFX.whoosh();await show(c,true);
 const box=c.querySelector('.starbox'),star=c.querySelector('.bigstar'),cnt=c.querySelector('.scount b'),sn=c.querySelector('.sn');
 const setN=v=>{cnt.textContent=v;sn.textContent=v;};
 const finale=()=>{if(phase!=='end')return;box.classList.add('done');SFX.fanfare();setTimeout(()=>SFX.sparkle(),350);const [x,y]=centerOf(star);confetti(x,y,40);starBurst(x,y,12);
  for(let i=0;i<10;i++){const t=h('span','twk','✦');const a=i/10*Math.PI*2,r=58+(i%2)*14;t.style.left=(50+Math.cos(a)*r)+'%';t.style.top=(50+Math.sin(a)*r)+'%';t.style.animationDelay=(i*.17)+'s';t.style.color='hsl('+(i*36)+' 95% 60%)';box.append(t);}};
 if(reduce){setN(got);finale();}
 else{const k=Math.min(got,20),W=innerWidth,H=innerHeight;let done=0;await wait(400);
  for(let i=0;i<k;i++){const [tx,ty]=centerOf(star);const side=i%4,r=Math.random();
   const sx=side===0?-60:side===1?W+60:r*W,sy=side===2?-60:side===3?H+60:r*H;
   const f=h('span','flystar','⭐');f.style.left=tx+'px';f.style.top=ty+'px';document.body.append(f);
   const an=f.animate([{transform:'translate('+(sx-tx)+'px,'+(sy-ty)+'px) translate(-50%,-50%) rotate(0deg) scale(1.5)',opacity:.3},{opacity:1,offset:.25},{transform:'translate(0,0) translate(-50%,-50%) rotate('+(540+Math.random()*360)+'deg) scale(.6)',opacity:1}],{duration:950,delay:i*Math.max(90,1400/k),easing:'cubic-bezier(.45,0,.25,1)',fill:'both'});
   an.onfinish=()=>{f.remove();if(phase!=='end')return;done++;setN(Math.round(done*got/k));tone(700+done*45,.12,'triangle',.09,0,1200+done*45);star.classList.remove('bump');void star.offsetWidth;star.classList.add('bump');if(done===k)setTimeout(finale,250);};}
  await wait(950+k*Math.max(90,1400/k)+700);}
 if(MOCK){setWho('teach');await say(['ทำครบทุกข้อแล้วค่ะ เก่งมาก ตั้งใจทำจนจบเลยนะคะ',cheer?'พยายามเก่งมาก ได้ดาวกำลังใจหนึ่งดวง':'']);return;}
 await say([cheer?'พยายามเก่งมาก ได้ดาวกำลังใจหนึ่งดวง':'','หนูทำสนามสอบครบทุกข้อแล้ว เก่งมากเลย','ฝึกบ่อย ๆ จะเก่งขึ้นทุกวันนะ']);}
function cover(){const c=h('div','cover');c.innerHTML='<div class="char pop">'+KLA+'</div><p>'+z[0]+(LV[EP.level]?' · ระดับ'+LV[EP.level]:'')+'</p><h1>'+NAME+'</h1>';const g=h('button','go pop','▶ เริ่มเลย');
 g.onclick=()=>{ac();SFX.chime();pick();if(!synth||!voice)sub.textContent='เครื่องนี้ไม่มีเสียงพูดภาษาไทย ผู้ปกครองช่วยอ่านคำบรรยายนี้ให้น้องฟังนะ';
  const j=/^#([sq])(\d+)$/.exec(location.hash);if(j&&j[1]==='q'){phase='quiz';tok++;quiz(Math.min(+j[2]-1,EP.questions.length-1));}else lesson(j?Math.min(+j[2]-1,EP.scenes.length-1):0);};c.append(g);show(c);sub.textContent='กด เริ่มเลย ได้เลยนะ';}
document.getElementById('bS').onclick=e=>{sfxOn=!sfxOn;store.set('kla-sfx',sfxOn?'1':'0');e.currentTarget.textContent=sfxOn?'🔔':'🔕';if(sfxOn)SFX.chime();};
document.getElementById('bP').onclick=e=>{paused=!paused;e.currentTarget.textContent=paused?'▶':'⏸';if(synth){paused?synth.pause():synth.resume();}if(curAudio){paused?curAudio.pause():curAudio.play().catch(()=>{});}};
function restart(){tok++;if(synth)synth.cancel();if(curAudio){try{curAudio.pause()}catch(e){}}paused=false;document.getElementById('bP').textContent='⏸';score.first=0;QS=null;lesson(0);}
document.getElementById('bR').onclick=restart;
document.getElementById('bF').onclick=()=>{try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();}catch(e){}};
/* #all = หน้าตรวจภาพทุกฉากทุกข้อ (สำหรับผู้ปกครอง/ตรวจงาน) */
if(location.hash==='#all'){const w=h('div','vis');EP.scenes.forEach((s,i)=>{w.append(h('div','qtext','ฉาก '+(i+1)));w.append(vis(s.v||{type:'kla'},true));});
 EP.questions.forEach((q,i)=>{w.append(h('div','qtext','ข้อ '+(i+1)+(q.star?' ⭐ ':' ')+strip(q.q)));if(q.v)w.append(vis(q.v,true));const o=h('div','opts');q.opts.forEach((x,k)=>o.append(h('button','opt'+(k===q.ans?' ok':''),'<span class="k">'+'กขคง'[k]+'.</span>'+optHTML(x))));w.append(o);});
 fixTri(w);st.innerHTML='';st.append(w);st.style.display='block';sub.textContent='โหมดตรวจภาพ: ข้อที่มีกรอบเขียวคือคำตอบ';}
else if(EP.autostart){ac();pick();lesson(0);}
else cover();
if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol)){try{navigator.serviceWorker.register(new URL('sw.js',new URL(EP.menu,location.href)).href).catch(()=>{});}catch(e){}}
})();
