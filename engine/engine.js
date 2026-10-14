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
const JOOK='<svg class="jook" viewBox="0 0 120 140"><g class="bodyg"><path d="M58 38 C54 24 62 18 66 14 C66 24 72 26 70 36" fill="#8a5a2b"/><ellipse cx="60" cy="88" rx="44" ry="42" fill="#c98a4b" stroke="#8a5a2b" stroke-width="4"/><ellipse cx="62" cy="100" rx="26" ry="24" fill="#f7dcae"/><path class="wing" d="M18 86 Q2 98 20 108" fill="#a86f38"/><g class="eyes"><circle cx="48" cy="74" r="9" fill="#fff"/><circle cx="76" cy="74" r="9" fill="#fff"/><circle class="pupil" cx="49" cy="75" r="4.5" fill="#2d2340"/><circle class="pupil" cx="77" cy="75" r="4.5" fill="#2d2340"/></g><path class="beak-t" d="M56 86 L68 86 L62 92 Z" fill="#ff9a1f" stroke="#c96a00" stroke-width="2"/><path class="beak-b" d="M57 89 L67 89 L62 97 Z" fill="#ff9a1f" stroke="#c96a00" stroke-width="2"/></g></svg>';
const SPROUT='<svg class="sprout" viewBox="0 0 120 130"><ellipse cx="60" cy="118" rx="44" ry="10" fill="#8a5a2b" opacity=".35"/><path class="stem" d="M60 118 C60 95 58 75 60 50" stroke="#3f8a2e" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse class="lf a" cx="42" cy="72" rx="20" ry="10" fill="#5cc46b" stroke="#3f8a2e" stroke-width="3" transform="rotate(-30 42 72)"/><ellipse class="lf b" cx="78" cy="62" rx="20" ry="10" fill="#5cc46b" stroke="#3f8a2e" stroke-width="3" transform="rotate(30 78 62)"/><g class="flw"><circle cx="60" cy="40" r="9" fill="#ffd23f"/><circle cx="60" cy="25" r="9" fill="#ff9fb0"/><circle cx="74" cy="40" r="9" fill="#ff9fb0"/><circle cx="46" cy="40" r="9" fill="#ff9fb0"/><circle cx="60" cy="54" r="9" fill="#ff9fb0"/><circle cx="60" cy="40" r="7" fill="#ffd23f"/></g></svg>';
const z=Z[EP.subject]||Z.intro;
document.documentElement.style.setProperty('--c',z[1]);document.documentElement.style.setProperty('--bg',z[2]);
document.title='EP'+EP.ep+' '+EP.title;
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
app.innerHTML='<div class="top"><div class="t">'+z[0]+' · EP'+EP.ep+' '+EP.title+'</div>'+(LV[EP.level]?'<span class="lv">'+LV[EP.level]+'</span>':'')+'<button id="bS" class="mute" title="เปิด/ปิดเสียงประกอบ">'+(sfxOn?'🔔':'🔕')+'</button><button id="bP" title="หยุด / เล่นต่อ">⏸</button><button id="bR" title="เริ่มใหม่ตั้งแต่ต้น">↺</button><button id="bF" title="เต็มจอ">⛶</button></div><div class="bar"><i id="pg"></i></div><div class="stage" id="st"></div><div class="foot"><div class="who" id="who"></div><div class="sub" id="sub"></div></div>';
app.prepend(deco);
const st=document.getElementById('st'),sub=document.getElementById('sub'),who=document.getElementById('who'),pg=document.getElementById('pg');
let curWho='kla';const setWho=n=>{const ch=n!==curWho;curWho=n;who.innerHTML=n==='jook'?JOOK:KLA;if(ch&&n==='jook'&&!reduce){who.classList.remove('fly');void who.offsetWidth;who.classList.add('fly');SFX.flap();}};setWho('kla');
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
function playRec(seg,my){const id=AMAP[hsh(seg)];if(!EP.audioDir||!id)return Promise.resolve(false);
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
  if(useTTS){synth.cancel();const u=new SpeechSynthesisUtterance(clean(text));u.lang=lang||'th-TH';if(!lang)u.voice=(curWho==='jook'?voiceJ:voice)||voice;else if(voiceEn)u.voice=voiceEn;u.rate=lang?0.8:0.95;u.onend=done;u.onerror=done;synth.speak(u);}
 });}
async function say(segs,lang){if(!Array.isArray(segs))segs=[segs];segs=segs.filter(Boolean);sub.textContent=segs.map(strip).join(' ');const my=tok;
 for(const g of segs)for(const p of splitSeg(g)){if(my!==tok)return;const rec=await playRec(p.t,my);if(my!==tok)return;if(!rec)await speak1(p.t,p.en?'en-US':lang);}}
async function gap(ms,my){let t=0;while(t<ms){await wait(100);if(my!==tok)return;if(!paused)t+=100;}}

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
 else if(T==='cards'){const r=h('div','row'+(v.sm?' sm':''));v.items.forEach((c,i)=>{const k=h('div','card pop'+(c.bad?' bad':''));k.innerHTML=(c.e?'<div class="e'+(c.flip?' flip':'')+([...c.e].length>2?' sm':'')+'">'+c.e+'</div>':'')+(c.big?'<div class="L">'+c.big+'</div>':'')+(c.t?'<div class="T">'+c.t+'</div>':'');k.style.animationDelay=dl(i,v.speed||.6)+'s';fx(k,i,v.speed||.6);r.append(k);});d.append(r);}
 return d;}
const optHTML=o=>typeof o==='string'?'<div class="'+([...o].length<=3?'L':'M')+'">'+o+'</div>':(o.e?'<div class="e'+(o.flip?' flip':'')+([...o.e].length>2?' sm':'')+'">'+o.e+'</div>':'')+(o.big?'<div class="L">'+o.big+'</div>':'')+(o.t?'<div class="T">'+o.t+'</div>':'');
const label=o=>typeof o==='string'?o:(o.t||o.big||'');const labelSay=o=>{const l=label(o);return /^[A-Za-z]$/.test(l)?'['+l+']':l;};
const rand=a=>a[Math.floor(Math.random()*a.length)];

/* ---------- ลำดับการเล่น ---------- */
async function lesson(from){phase='lesson';const my=++tok;if(synth)synth.cancel();
 for(let i=from;i<EP.scenes.length;i++){cur=i;const s=EP.scenes[i];setWho('kla');if(i>from)SFX.whoosh();await show(vis(s.v||{type:'kla'}),true);if(my!==tok)return;prog(i/total);await say(s.say);if(my!==tok)return;await gap(800,my);if(my!==tok)return;}
 phase='quiz';SFX.chime();await show(h('div','vis','<div class="char pop">'+KLA+'</div><div class="bubble pop">ถึงเวลาตอบคำถามแล้ว 🌟</div>'),true);await say('ถึงเวลาตอบคำถามแล้ว ฟังให้ดีนะ');if(my!==tok)return;quiz(0);}
async function quiz(qi){if(qi>=EP.questions.length)return finish();const q=EP.questions[qi];prog((EP.scenes.length+qi)/total);setWho('kla');
 const box=h('div','vis');if(q.star)box.append(h('div','star pop','⭐ ข้อท้าทาย ผิดได้ไม่เป็นไร'));if(q.v)box.append(vis(q.v,true));const qt=h('div','qtext',strip(q.q)+' ');const rp=h('button','rep','🔊');rp.title='ฟังคำถามอีกครั้ง';rp.onclick=()=>{if(QS&&!QS.lock){tok++;if(synth)synth.cancel();say([q.star?'ข้อท้าทาย':'',q.say||q.q]);}};qt.append(rp);box.append(qt);
 const opts=h('div','opts');const btns=q.opts.map((o,i)=>{const b=h('button','opt pop','<span class="k">'+'กขคง'[i]+'.</span>'+optHTML(o));b.style.animationDelay=(i*.1)+'s';b.onclick=()=>answer(i,b);opts.append(b);return b;});box.append(opts);
 if(qi>0)SFX.whoosh();await show(box,true);if(q.star)SFX.sparkle();
 QS={qi,q,btns,tries:0,lock:false};say([q.star?'ข้อท้าทาย':'',q.say||q.q]);}
async function answer(i,b){const s=QS;if(!s||s.lock)return;s.lock=true;tok++;if(synth)synth.cancel();const q=s.q;
 if(i===q.ans){b.classList.add('ok');SFX.ok();react('cheer');const [x,y]=centerOf(b);confetti(x,y,s.tries===0?26:14);if(s.tries===0&&!q.star)score.first++;if(s.tries===0&&q.star){SFX.sparkle();starBurst(x,y,8);}s.btns.forEach(x=>x.disabled=true);await say([rand(PRAISE),q.why]);}
 else{b.classList.add('no');b.disabled=true;SFX.no();react('oops');s.tries++;
  if(s.tries===1){setWho('jook');await say(['เจ้าจุกใบ้ให้นะ',q.hint||'ลองดูดี ๆ อีกครั้งนะ']);setWho('kla');s.lock=false;return;}
  s.btns.forEach(x=>x.disabled=true);s.btns[q.ans].classList.add('ok');await say(['ไม่เป็นไรนะ คำตอบคือ',labelSay(q.opts[q.ans]),q.why]);}
 await wait(700);quiz(s.qi+1);}
function save(gold){try{const k='kla-garden-v1';const d=JSON.parse(localStorage.getItem(k)||'{}');const o=d['EP'+EP.ep]||{};d['EP'+EP.ep]={seed:1,gold:!!(o.gold||gold),t:Date.now()};localStorage.setItem(k,JSON.stringify(d));}catch(e){}}
async function finish(){phase='end';react('cheer');QS=null;prog(1);const need=EP.questions.filter(q=>!q.star).length;const gold=score.first>=need;save(gold);
 const c=h('div','cover');c.innerHTML='<div class="pop">'+SPROUT+'</div><h1>ได้เมล็ดพันธุ์ 1 เมล็ด</h1>'+(gold?'<p class="pop gold">⭐ ตอบถูกตั้งแต่ครั้งแรกทุกข้อ ได้ดาวทองด้วย</p>':'')+(EP.dayEnd?'<p>วันนี้ดูครบ 3 ตอนแล้ว ไว้เจอกันรอบหน้านะ</p>':'');
 const bt=h('div','btns');const a1=h('button','btn2','↺ ดูอีกครั้ง');a1.onclick=()=>location.reload();bt.append(a1);
 if(EP.next&&!EP.dayEnd){const a=h('a','go','ตอนต่อไป ▶');a.href=EP.next;a.style.textDecoration='none';bt.append(a);}
 const m=h('a','btn2','🏡 กลับสวน');m.href=EP.menu;bt.append(m);c.append(bt);SFX.whoosh();await show(c,true);SFX.fanfare();
 setTimeout(()=>{const sp=c.querySelector('.sprout');if(sp){const [x,y]=centerOf(sp);confetti(x,y,30);if(gold){SFX.sparkle();starBurst(x,y,10);}}},1700);
 await say([EP.summary,'หนูได้เมล็ดพันธุ์หนึ่งเมล็ด',gold?'และได้ดาวทองด้วย':'']);}
function cover(){const c=h('div','cover');c.innerHTML='<div class="char pop">'+KLA+'</div><p>'+z[0]+(LV[EP.level]?' · ระดับ'+LV[EP.level]:'')+'</p><h1>EP'+EP.ep+' '+EP.title+'</h1>';const g=h('button','go pop','▶ เริ่มเลย');
 g.onclick=()=>{ac();SFX.chime();pick();if(!synth||!voice)sub.textContent='เครื่องนี้ไม่มีเสียงพูดภาษาไทย ผู้ปกครองช่วยอ่านคำบรรยายนี้ให้น้องฟังนะ';
  const j=/^#([sq])(\d+)$/.exec(location.hash);if(j&&j[1]==='q'){phase='quiz';tok++;quiz(Math.min(+j[2]-1,EP.questions.length-1));}else lesson(j?Math.min(+j[2]-1,EP.scenes.length-1):0);};c.append(g);show(c);sub.textContent='กด เริ่มเลย ได้เลยนะ';}
document.getElementById('bS').onclick=e=>{sfxOn=!sfxOn;store.set('kla-sfx',sfxOn?'1':'0');e.currentTarget.textContent=sfxOn?'🔔':'🔕';if(sfxOn)SFX.chime();};
document.getElementById('bP').onclick=e=>{paused=!paused;e.currentTarget.textContent=paused?'▶':'⏸';if(synth){paused?synth.pause():synth.resume();}if(curAudio){paused?curAudio.pause():curAudio.play().catch(()=>{});}};
function restart(){tok++;if(synth)synth.cancel();if(curAudio){try{curAudio.pause()}catch(e){}}paused=false;document.getElementById('bP').textContent='⏸';score.first=0;QS=null;lesson(0);}
document.getElementById('bR').onclick=restart;
document.getElementById('bF').onclick=()=>{try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();}catch(e){}};
cover();
if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol)){try{navigator.serviceWorker.register(new URL('sw.js',new URL(EP.menu,location.href)).href).catch(()=>{});}catch(e){}}
})();
