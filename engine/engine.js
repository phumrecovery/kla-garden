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
const SPROUT='<svg class="sprout" viewBox="0 0 140 150"><g class="plant"><path class="stem" d="M70 122 C70 104 67 86 70 58" stroke="#3f8a2e" stroke-width="7" fill="none" stroke-linecap="round"/><g transform="translate(69 94)"><path class="lf a" d="M0 0 C-8 -14 -30 -18 -44 -10 C-32 4 -12 6 0 0Z" fill="#5cc46b" stroke="#3f8a2e" stroke-width="3" stroke-linejoin="round"/><path class="vein a" d="M-4 -2 C-16 -8 -28 -10 -38 -9" stroke="#3f8a2e" stroke-width="2" fill="none"/></g><g transform="translate(70 78)"><path class="lf b" d="M0 0 C8 -14 30 -18 44 -10 C32 4 12 6 0 0Z" fill="#6fd17c" stroke="#3f8a2e" stroke-width="3" stroke-linejoin="round"/><path class="vein b" d="M4 -2 C16 -8 28 -10 38 -9" stroke="#3f8a2e" stroke-width="2" fill="none"/></g><g class="flw"><circle cx="70" cy="34" r="9" fill="#ff9fb0"/><circle cx="84" cy="46" r="9" fill="#ff9fb0"/><circle cx="56" cy="46" r="9" fill="#ff9fb0"/><circle cx="70" cy="58" r="9" fill="#ff9fb0"/><circle cx="70" cy="46" r="8" fill="#ffd23f"/></g></g><ellipse class="seed" cx="70" cy="121" rx="7" ry="5" fill="#c98b4a" stroke="#7a4f24" stroke-width="2"/><path class="soil" d="M14 142 C20 122 46 116 70 118 C94 116 120 122 126 142 Z" fill="#9b6a3c"/><path d="M28 130 q4 -3 8 0 M92 128 q4 -3 8 0 M60 136 q4 -3 8 0" stroke="#7a4f24" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle class="dirt d1" cx="64" cy="118" r="3" fill="#9b6a3c"/><circle class="dirt d2" cx="76" cy="118" r="2.5" fill="#9b6a3c"/><circle class="dirt d3" cx="70" cy="117" r="2" fill="#9b6a3c"/></svg>';
const z=Z[EP.subject]||Z.intro;
document.documentElement.style.setProperty('--c',z[1]);document.documentElement.style.setProperty('--bg',z[2]);
const NAME=EP.mode?EP.title:'EP'+EP.ep+' '+EP.title;document.title=NAME;const LOG=[];
const h=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.innerHTML=x;return e;};
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
app.innerHTML='<div class="top"><div class="t">'+(EP.mode?NAME:z[0]+' · '+NAME)+'</div>'+(LV[EP.level]?'<span class="lv">'+LV[EP.level]+'</span>':'')+'<button id="bS" class="mute" title="เปิด/ปิดเสียงประกอบ">'+(sfxOn?'🔔':'🔕')+'</button><button id="bP" title="หยุด / เล่นต่อ">⏸</button><button id="bR" title="เริ่มใหม่ตั้งแต่ต้น">↺</button><button id="bF" title="เต็มจอ">⛶</button></div><div class="bar"><i id="pg"></i></div><div class="stage" id="st"></div><div class="foot"><div class="who" id="who"></div><div class="sub" id="sub"></div></div>';
app.prepend(deco);
const st=document.getElementById('st'),sub=document.getElementById('sub'),who=document.getElementById('who'),pg=document.getElementById('pg');
let curWho='kla';const setWho=n=>{const ch=n!==curWho;curWho=n;who.innerHTML=n==='jook'?JOOK:n==='teach'?TEACH:KLA;if(ch&&n==='jook'&&!reduce){who.classList.remove('fly');void who.offsetWidth;who.classList.add('fly');SFX.flap();}};setWho('kla');
const talk=on=>{who.classList.toggle('talk',on);st.classList.toggle('talk',on&&curWho==='kla');};
const react=c=>{who.classList.remove('cheer','oops');void who.offsetWidth;who.classList.add(c);setTimeout(()=>who.classList.remove(c),1300);};
function runFx(el){const my=tok;(el._fx||[]).forEach(f=>{setTimeout(()=>{if(my!==tok||paused)return;SFX.pop(f.i);if(f.el)setTimeout(()=>f.el.classList.add('on'),320);},f.t*1000);});(el._later||[]).forEach(f=>setTimeout(()=>{if(my===tok)f.fn();},f.t*1000));}
async function show(el,anim){const old=st.firstElementChild;if(anim&&old&&!reduce){old.classList.add('leave');await wait(200);}st.innerHTML='';if(anim&&!reduce)el.classList.add('enter');st.append(el);runFx(el);}
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
async function say(segs,lang){if(!Array.isArray(segs))segs=[segs];segs=segs.filter(Boolean);sub.textContent=segs.map(strip).join(' ');const my=tok;
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
 nymph:'<path d="M20 60 Q50 40 80 58 Q50 66 20 60 Z" fill="#7cb342"/><circle cx="20" cy="56" r="8" fill="#7cb342"/><path d="M40 60 L32 78 M52 60 L56 80 M64 58 L76 76 M14 50 L6 36" stroke="#558b2f" stroke-width="3" fill="none"/>'}[n]||'')+'</svg>';}
const art=o=>o.solid?solidSVG(o.solid):o.blk?blocksSVG(o.blk):o.print?printSVG(o.print,o.k):o.pic?picSVG(o.pic):'';

/* ---------- ภาพประกอบแต่ละแบบ ---------- */
function vis(v,still){const d=h('div','vis');d._fx=[];d._later=[];const at=still?0:(v.at||0);const dl=(i,s)=>(still?0:at+i*(s||.55));const T=v.type;
 const fx=(el,i,s,boing)=>{if(!still)d._fx.push({t:dl(i,s),i,el:boing?el:null});};
 const later=(t,fn)=>{if(still)fn();else d._later.push({t,fn});};
 if(T==='kla'||T==='jook'||T==='both'){const r=h('div','row');if(T!=='jook')r.append(h('div','char pop',KLA));if(T!=='kla')r.append(h('div','char pop',JOOK));d.append(r);if(v.text)d.append(h('div','bubble pop',strip(v.text)));}
 else if(T==='big'){d.append(h('div','card pop',(v.e?'<div class="e">'+v.e+'</div>':'')+(v.text?'<div class="L">'+v.text+'</div>':'')+(v.sub?'<div class="T">'+v.sub+'</div>':'')));}
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
 else if(T==='cards'){const r=h('div','row'+(v.sm?' sm':''));v.items.forEach((c,i)=>{const k=h('div','card pop'+(c.bad?' bad':''));k.innerHTML=(art(c)?'<div class="art">'+art(c)+'</div>':'')+(c.e?'<div class="e'+(c.flip?' flip':'')+([...c.e].length>2?' sm':'')+'">'+c.e+'</div>':'')+(c.big?'<div class="L">'+c.big+'</div>':'')+(c.t?'<div class="T">'+c.t+'</div>':'');k.style.animationDelay=dl(i,v.speed||.6)+'s';fx(k,i,v.speed||.6);r.append(k);});d.append(r);}
 return d;}
const optHTML=o=>typeof o==='string'?'<div class="'+([...o].length<=3?'L':'M')+'">'+o+'</div>':(art(o)?'<div class="art">'+art(o)+'</div>':'')+(o.e?'<div class="e'+(o.flip?' flip':'')+([...o.e].length>2?' sm':'')+([...o.e].length>4?' xs':'')+'">'+o.e+'</div>':'')+(o.big?'<div class="L">'+o.big+'</div>':'')+(o.m?'<div class="M">'+o.m+'</div>':'')+(o.t?'<div class="T">'+o.t+'</div>':'');
const label=o=>typeof o==='string'?o:(o.t||o.big||o.m||'');const labelSay=o=>{if(o&&o.say)return o.say;const l=label(o);return /^[A-Za-z]$/.test(l)?'['+l+']':l;};
const rand=a=>a[Math.floor(Math.random()*a.length)];

/* ---------- ลำดับการเล่น ---------- */
const MOCK=EP.mode==='mock';
async function mockIntro(){phase='quiz';const my=++tok;setWho('teach');SFX.chime();await show(h('div','vis','<div class="char pop">'+TEACH+'</div><div class="bubble pop">ฟังโจทย์ให้ดี แล้วเลือกคำตอบที่ถูกที่สุด 📝</div>'),true);
 await say(['สวัสดีค่ะ ครูชื่อดอกม่วง วันนี้มาลองทำข้อสอบเหมือนวันสอบจริงกันนะคะ','ครูจะอ่านโจทย์ให้ฟังทีละข้อ ข้อไหนไม่แน่ใจ ให้เลือกคำตอบที่คิดว่าใช่ที่สุด แล้วไปข้อต่อไปได้เลยค่ะ']);if(my!==tok)return;EP._t0=Date.now();quiz(0);}
async function lesson(from){if(MOCK)return mockIntro();phase='lesson';const my=++tok;if(synth)synth.cancel();
 for(let i=from;i<EP.scenes.length;i++){cur=i;const s=EP.scenes[i];setWho('kla');if(i>from)SFX.whoosh();await show(vis(s.v||{type:'kla'}),true);if(my!==tok)return;prog(i/total);await say(s.say);if(my!==tok)return;await gap(800,my);if(my!==tok)return;}
 phase='quiz';SFX.chime();await show(h('div','vis','<div class="char pop">'+KLA+'</div><div class="bubble pop">ถึงเวลาตอบคำถามแล้ว 🌟</div>'),true);await say('ถึงเวลาตอบคำถามแล้ว ฟังให้ดีนะ');if(my!==tok)return;quiz(0);}
async function quiz(qi){if(qi>=EP.questions.length)return finish();const q=EP.questions[qi];prog((EP.scenes.length+qi)/total);setWho(MOCK?'teach':'kla');if(!EP._t0)EP._t0=Date.now();const QS0=MOCK?['ข้อ '+(qi+1),q.say||q.q]:[q.star?'ข้อท้าทาย':'',q.say||q.q];
 const box=h('div','vis');if(q.star)box.append(h('div','star pop','⭐ ข้อท้าทาย ผิดได้ไม่เป็นไร'));if(q.v)box.append(vis(q.v,true));const qt=h('div','qtext',strip(q.q)+' ');const rp=h('button','rep','🔊');rp.title='ฟังคำถามอีกครั้ง';rp.onclick=()=>{if(QS&&!QS.lock){tok++;if(synth)synth.cancel();say(QS0);}};qt.append(rp);if(MOCK)box.append(h('div','qno','ข้อ '+(qi+1)+' / '+EP.questions.length));box.append(qt);
 const opts=h('div','opts');const btns=q.opts.map((o,i)=>{const b=h('button','opt pop','<span class="k">'+'กขคง'[i]+'.</span>'+optHTML(o));b.style.animationDelay=(i*.1)+'s';b.onclick=()=>answer(i,b);opts.append(b);return b;});box.append(opts);
 if(qi>0)SFX.whoosh();await show(box,true);if(q.star)SFX.sparkle();
 QS={qi,q,btns,tries:0,lock:false};say(QS0);}
async function answer(i,b){const s=QS;if(!s||s.lock)return;s.lock=true;tok++;if(synth)synth.cancel();const q=s.q;
 if(MOCK){LOG[s.qi]={id:q.id,t:q.t,ok:i===q.ans};b.classList.add('picked');SFX.pop(3);s.btns.forEach(x=>x.disabled=true);await wait(650);return quiz(s.qi+1);}
 if(i===q.ans){LOG[s.qi]={id:q.id,t:q.t,ok:s.tries===0};b.classList.add('ok');SFX.ok();react('cheer');const [x,y]=centerOf(b);confetti(x,y,s.tries===0?26:14);if(s.tries===0&&!q.star)score.first++;if(s.tries===0&&q.star){SFX.sparkle();starBurst(x,y,8);}s.btns.forEach(x=>x.disabled=true);await say([rand(PRAISE),q.why]);}
 else{b.classList.add('no');b.disabled=true;SFX.no();react('oops');s.tries++;
  if(s.tries===1){setWho('jook');await say(['เจ้าจุกใบ้ให้นะ',q.hint||'ลองดูดี ๆ อีกครั้งนะ']);setWho('kla');s.lock=false;return;}
  LOG[s.qi]={id:q.id,t:q.t,ok:false};s.btns.forEach(x=>x.disabled=true);s.btns[q.ans].classList.add('ok');await say(['ไม่เป็นไรนะ คำตอบคือ',labelSay(q.opts[q.ans])||'ข้อ '+'กขคง'[q.ans],q.why]);}
 await wait(700);quiz(s.qi+1);}
function save(gold){try{const k='kla-garden-v1';const d=JSON.parse(localStorage.getItem(k)||'{}');const o=d['EP'+EP.ep]||{};d['EP'+EP.ep]={seed:1,gold:!!(o.gold||gold),t:Date.now()};localStorage.setItem(k,JSON.stringify(d));}catch(e){}}
async function finish(){if(EP.mode)return examEnd();phase='end';react('cheer');QS=null;prog(1);const need=EP.questions.filter(q=>!q.star).length;const gold=score.first>=need;save(gold);
 const c=h('div','cover');c.innerHTML='<div class="pop">'+SPROUT+'</div><h1>ได้เมล็ดพันธุ์ 1 เมล็ด</h1>'+(gold?'<p class="pop gold">⭐ ตอบถูกตั้งแต่ครั้งแรกทุกข้อ ได้ดาวทองด้วย</p>':'')+(EP.dayEnd?'<p>วันนี้ดูครบ 3 ตอนแล้ว ไว้เจอกันรอบหน้านะ</p>':'');
 const bt=h('div','btns');const a1=h('button','btn2','↺ ดูอีกครั้ง');a1.onclick=()=>location.reload();bt.append(a1);
 if(EP.next&&!EP.dayEnd){const a=h('a','go','ตอนต่อไป ▶');a.href=EP.next;a.style.textDecoration='none';bt.append(a);}
 const m=h('a','btn2','🏡 กลับสวน');m.href=EP.menu;bt.append(m);c.append(bt);SFX.whoosh();await show(c,true);SFX.fanfare();
 [[650,0],[1900,3],[2700,5]].forEach(([t,k])=>setTimeout(()=>{if(phase==='end')SFX.pop(k);},t));setTimeout(()=>{const sp=c.querySelector('.sprout');if(sp&&phase==='end'){const [x,y]=centerOf(sp);confetti(x,y,30);if(gold){SFX.sparkle();starBurst(x,y,10);}}},3400);
 await say([EP.summary,'หนูได้เมล็ดพันธุ์หนึ่งเมล็ด',gold?'และได้ดาวทองด้วย':'']);}
/* จบชุดสนามสอบ: เด็กเห็นแค่ดาวที่ได้ ผลรายข้อเก็บไว้ให้ผู้ปกครองดู */
async function examEnd(){phase='end';react('cheer');QS=null;prog(1);const n=EP.questions.length,ok=LOG.filter(x=>x&&x.ok).length;
 try{const k='kla-exam-v1';const d=JSON.parse(localStorage.getItem(k)||'[]');d.push({t:Date.now(),kind:MOCK?'mock':'practice',sec:EP._t0?Math.round((Date.now()-EP._t0)/1000):0,subj:EP.subj||'mix',n,ok,items:LOG.map(x=>x?[x.id,x.t,x.ok?1:0]:null)});localStorage.setItem(k,JSON.stringify(d.slice(-80)));}catch(e){}
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
 st.innerHTML='';st.append(w);st.style.display='block';sub.textContent='โหมดตรวจภาพ: ข้อที่มีกรอบเขียวคือคำตอบ';}
else if(EP.autostart){ac();pick();lesson(0);}
else cover();
if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol)){try{navigator.serviceWorker.register(new URL('sw.js',new URL(EP.menu,location.href)).href).catch(()=>{});}catch(e){}}
})();
