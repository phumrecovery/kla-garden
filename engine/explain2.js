/* เฉลยแบบภาพเคลื่อนไหว ชุดที่ 2 (ผู้ปกครองขอ 25 ต.ค. 69) — ใช้คู่กับ engine.js (explain)
   ทุกภาพสร้างจากตัวเลข/คำในโจทย์เอง และตรวจว่าผลที่คำนวณได้ตรงกับเฉลยก่อนเสมอ ถ้าไม่ตรงจะไม่แสดงภาพ (กันภาพเฉลยผิด)
   มีเสียงพากย์ทีละขั้น (น้องกล้าพูดตามจังหวะภาพ นับเลขออกเสียง) เสียงอยู่ในไฟล์ บทพากย์_ภาพเฉลย.csv · โหมดเก็บบท (rec) ใช้ทำรายการคำพูดให้ อัปเดตบทพากย์.py
   ชนิดภาพ: บวกลบ (กรอบสิบ / มัดสิบตั้งหลัก ทด-ยืม / เส้นจำนวน) แจกของ นับขา จับคู่เปรียบเทียบ เส้นจำนวนเรียงลำดับ หลักสิบหลักหน่วย
            เลขคู่-คี่ วันในสัปดาห์ เดือน นาฬิกา โหล-สัปดาห์ เรียงความสูง/น้ำหนัก ซ้าย-ขวา ภาพในกระจก ดวงอาทิตย์-เงา ไฟฉาย เข็มทิศ
            ตาชั่ง เทน้ำ น้ำสามสถานะ ฤดู วัฏจักรฝน อวัยวะ พยางค์ ตัวสะกด ประสมคำ */
(function(){
const NS='http://www.w3.org/2000/svg',VW=600,VH=330;
const TD='๐๑๒๓๔๕๖๗๘๙';
const norm=s=>String(s||'').replace(/[๐-๙]/g,d=>TD.indexOf(d)).replace(/[−–]/g,'-').replace(/\s+/g,' ').trim();
const nums=s=>(norm(s).match(/\d+/g)||[]).map(Number);
const TW={หนึ่ง:1,สอง:2,สาม:3,สี่:4,ห้า:5,หก:6};const tnum=s=>TW[s]!=null?TW[s]:+s;
const lab=o=>typeof o==='string'?o:(o&&(o.say||o.t||o.big||o.m))||'';
const ansL=q=>lab(q.opts[q.ans]);
const ansN=q=>{const m=norm(ansL(q)).match(/^(\d+)(\s|$)/);return m?+m[1]:null;};
const TXT=q=>norm(q.q+' '+(q.say||''));
const C=['#5b8def','#f59e0b','#22c55e','#ec4899','#8b5cf6'];
/* คำนาม → อีโมจิ (ให้ของในโจทย์ปัญหาเป็นภาพของจริง) · เรียงคำยาวก่อน */
const NOUN=[['ดินสอสี','🖍️'],['ลูกโป่ง','🎈'],['ลูกอม','🍬'],['ลูกบอล','⚽'],['ดอกไม้','🌸'],['สติกเกอร์','⭐'],['แอปเปิล','🍎'],['คุกกี้','🍪'],['ไอศกรีม','🍦'],['ตุ๊กตา','🧸'],['หนังสือ','📘'],
 ['ดินสอ','✏️'],['สมุด','📒'],['ขนม','🍪'],['ไข่','🥚'],['ส้ม','🍊'],['กล้วย','🍌'],['มะม่วง','🥭'],['องุ่น','🍇'],['ปลา','🐟'],['นก','🐦'],['ไก่','🐔'],['เป็ด','🦆'],['แมว','🐱'],['หมา','🐶'],['วัว','🐄'],['หมู','🐷'],['ม้า','🐴'],['แกะ','🐑'],
 ['ผีเสื้อ','🦋'],['ผึ้ง','🐝'],['มด','🐜'],['ช้าง','🐘'],['กบ','🐸'],['เค้ก','🍰'],['โดนัท','🍩'],['บาท','🪙'],['เหรียญ','🪙'],['คน','🧑'],['รถ','🚗'],['ต้นไม้','🌳'],['ดาว','⭐'],['แก้ว','🥛'],['ถุงเท้า','🧦']];
const emoOf=s=>{for(const [w,e] of NOUN)if(s.includes(w))return e;return null;};

/* ---------- ตัวช่วยวาด + พากย์ ---------- */
function mk(ctx){const svg=document.createElementNS(NS,'svg');svg.setAttribute('viewBox','0 0 '+VW+' '+VH);svg.setAttribute('class','x2svg');ctx.stage.append(svg);
 const REC=ctx.rec||null,F=!!ctx.fast||!!REC,D=ms=>F?0:ms;
 const E=(tag,a,p)=>{const e=document.createElementNS(NS,tag);for(const k in a)e.setAttribute(k,a[k]);(p||svg).append(e);return e;};
 const tx=(x,y,s,o={})=>{const e=E('text',Object.assign({x,y,'text-anchor':'middle','dominant-baseline':'central','font-size':o.fs||22,fill:o.fill||'#3b3b4f'},o.a||{}),o.p);e.textContent=s;if(o.w)e.setAttribute('font-weight',o.w);return e;};
 const pop=(e,ms=320)=>{e.style.transformBox='fill-box';e.style.transformOrigin='center';if(!F)e.animate([{opacity:0,transform:'scale(.2)'},{opacity:1,transform:'scale(1)'}],{duration:ms,easing:'cubic-bezier(.3,1.5,.5,1)',fill:'backwards'});return e;};
 const move=(e,x,y,ms=650)=>{e.style.transition=F?'none':'transform '+ms+'ms ease-in-out';e.style.transform='translate('+x+'px,'+y+'px)';};
 const fade=(e,o,ms=400)=>{e.style.transition=F?'none':'opacity '+ms+'ms';e.style.opacity=o;};
 const pulse=e=>{e.style.transformBox='fill-box';e.style.transformOrigin='center';if(!F)try{e.animate([{transform:'scale(1)'},{transform:'scale(1.3)'},{transform:'scale(1)'}],{duration:500,composite:'add'});}catch(x){}};
 const glow=(e,c)=>{e.style.filter='drop-shadow(0 0 7px '+(c||'#facc15')+')';};
 const cap=s=>{if(s!=null&&ctx.cap)ctx.cap.textContent=s;};
 const S=ctx.SFX||{pop(){},chime(){},whoosh(){},ok(){}};
 const sfx=(k,a)=>{if(!F)try{S[k](a)}catch(e){}};
 const W=async ms=>F?true:await ctx.W(ms);
 /* พูดเป็นท่อนสั้น ๆ ตามจังหวะภาพ (ตัวเลขเขียนเป็นเลขอารบิก ไฟล์เสียงอ่านเป็นคำไทย) · คืน false เมื่อกดข้าม/ออกจากหน้า
    โหมดเก็บบท (rec): ไม่พูด แค่จดทุกท่อนไว้ทำไฟล์เสียง */
 const say=async segs=>{segs=[].concat(segs).filter(x=>x!=null&&x!=='').map(String);if(!segs.length)return true;if(REC){REC.push(...segs);return true;}if(F)return true;
  if(ctx.say)return await ctx.say(segs);return await W(Math.max(700,segs.join(' ').length*70));};
 /* หนึ่งขั้น: ขึ้นคำบรรยาย + พูด + รอภาพขยับอย่างน้อย ms */
 const step=async(c,segs,ms)=>{cap(c);const r=await Promise.all([say(segs),ms?W(ms):true]);return r[0]&&r[1]&&await W(0);};
 const blip=s=>{if(!F&&ctx.blip)try{ctx.blip(String(s))}catch(e){}};
 /* จบภาพ: กริ๊ง + พลุเล็ก ๆ กลางภาพ + เน้นคำตอบ แล้วพูดสรุป */
 const fin=async(c,segs,els)=>{cap(c);sfx('chime');(els||[]).forEach(e=>{glow(e);pulse(e);});if(!F&&ctx.confetti)try{const r=svg.getBoundingClientRect();ctx.confetti(r.left+r.width/2,r.top+r.height*.4,22);}catch(e){}return await say(segs);};
 /* ของกระโดดเป็นคลื่น (ฉลองตอนจบ) */
 const wave=els=>{if(F)return;els.forEach((e,i)=>{try{e.animate([{transform:'translateY(0px)'},{transform:'translateY(-12px)'},{transform:'translateY(0px)'}],{duration:420,delay:i*60,composite:'add'});}catch(x){}});};
 /* ป้ายตัวเลขกลม ใช้ตอนนับ */
 const tag=(x,y,n,col,r=12)=>{const g=E('g',{});E('circle',{cx:x,cy:y,r,fill:col||'#ec4899',stroke:'#fff','stroke-width':2.5},g);tx(x,y+1,String(n),{fs:Math.round(r*1.15),w:700,fill:'#fff',p:g});pop(g,220);return g;};
 /* กระโดดโค้ง (กบบนเส้นจำนวน) · ตั้งตำแหน่งปลายทางไว้ก่อน ภาพค้างก็ยังอยู่ถูกที่ */
 const hop=(e,x0,y0,x1,y1,h,ms=560)=>{e.style.transform='translate('+x1+'px,'+y1+'px)';if(F)return;const k=[];for(let i=0;i<=8;i++){const t=i/8;k.push({transform:'translate('+(x0+(x1-x0)*t)+'px,'+(y0+(y1-y0)*t-h*4*t*(1-t))+'px)'});}try{e.animate(k,{duration:ms});}catch(x){}};
 /* แตะนับเอง: แตะแล้วขึ้นเลข + ได้ยินเสียงนับ */
 const tcs=[];const tc=(e,x,y)=>{e.classList.add('tc');e._xy=[x,y];tcs.push(e);return e;};
 const tapOn=(total,msg)=>{if(REC||!tcs.length)return;let n=0;const cnt=E('g',{});
  cap(msg||'👆 ลองแตะนับเองทีละอัน');const t0=tcs.find(e=>e.isConnected!==false&&e.classList.contains('tc'));
  if(t0){const hd=tx(t0._xy[0]+14,t0._xy[1]+26,'👆',{fs:26,p:cnt});if(!F)try{hd.animate([{transform:'translateY(0px)'},{transform:'translateY(-8px)'},{transform:'translateY(0px)'}],{duration:800,iterations:4});}catch(x){}setTimeout(()=>hd.remove(),3400);}
  svg.addEventListener('click',ev=>{const t=ev.target.closest&&ev.target.closest('.tc');if(!t||t._n||!t._xy)return;n++;t._n=n;const [x,y]=t._xy;
   const b=tx(x,y,String(n),{fs:16,w:700,fill:'#fff',p:cnt,a:{stroke:'#e11d48','stroke-width':5,'paint-order':'stroke'}});pop(b,200);try{S.pop(n)}catch(e){}blip(n);
   cap('นับได้ '+n);if(total&&n===total){cap('ครบแล้ว! ทั้งหมด '+total+' เก่งมาก 🎉');setTimeout(()=>blip('เก่งมาก'),750);try{S.chime();const r=svg.getBoundingClientRect();ctx.confetti&&ctx.confetti(r.left+r.width/2,r.top+r.height/2,20);}catch(e){}}});};
 return {svg,E,tx,pop,move,fade,pulse,glow,cap,sfx,W,say,step,blip,fin,wave,tag,hop,tc,tapOn,F,D};}
const roundRect=(G,x,y,w,h,f,s,r=10,p)=>G.E('rect',{x,y,width:w,height:h,rx:r,fill:f,stroke:s||'none','stroke-width':s?2:0},p);
/* แท่งสิบ (มัด 10 อัน) และก้อนหน่วย */
function rod(G,x,y,col,p){const g=G.E('g',{},p);G.E('rect',{x,y,width:14,height:100,rx:2,fill:col,stroke:'#334155','stroke-width':1.5},g);for(let i=1;i<10;i++)G.E('line',{x1:x,y1:y+i*10,x2:x+14,y2:y+i*10,stroke:'#334155','stroke-width':.8,opacity:.6},g);return g;}
function cube(G,x,y,col,p){return G.E('rect',{x,y,width:13,height:13,rx:2,fill:col,stroke:'#334155','stroke-width':1.3},p);}
function cross(G,x,y,p){const g=G.E('g',{},p);G.E('path',{d:'M'+(x-9)+' '+(y-9)+' L'+(x+9)+' '+(y+9)+' M'+(x+9)+' '+(y-9)+' L'+(x-9)+' '+(y+9),stroke:'#e11d48','stroke-width':4,'stroke-linecap':'round'},g);G.pop(g,200);return g;}
/* ของหนึ่งชิ้น: อีโมจิของจริงจากโจทย์ หรือเหรียญนับสี (มีแสงเงา) */
function thing(G,x,y,e,col,s=1,p){const g=G.E('g',{},p);if(e)G.tx(x,y+2,e,{fs:Math.round(33*s),p:g});else{G.E('circle',{cx:x,cy:y,r:18*s,fill:col,stroke:'#fff','stroke-width':3},g);G.E('ellipse',{cx:x-6*s,cy:y-7*s,rx:6*s,ry:4*s,fill:'#fff',opacity:.5},g);}return g;}
/* เอาของออกตามคำในโจทย์: นกบินไป ขนมถูกกิน ให้เพื่อน หล่น แตก · ช่องเดิมเหลือเงาจาง ๆ กับกากบาท (ยังนับได้ว่าเอาออกไปกี่อัน) */
const GONE={fly:'บินไป',eat:'กินไป',give:'ให้ไป',drop:'หล่นไป',pop:'แตกไป',lost:'หายไป',go:'ออกไป',x:'เอาออก'};
function takeAway(G,g,x,y,how,dest){const gh=g.cloneNode(true);gh.style.opacity=.2;gh.classList.remove('tc');g.parentNode.insertBefore(gh,g);g.classList.remove('tc');cross(G,x,y);
 let done=false;const end=()=>{if(done)return;done=true;try{g.remove()}catch(e){}};if(G.F)return end();
 const dx=dest?dest[0]-x:0,dy=dest?dest[1]-y:0;let k;
 if(how==='fly')k=[{transform:'translate(0px,0px) rotate(0deg)',opacity:1},{transform:'translate(60px,-70px) rotate(-12deg)',opacity:1,offset:.45},{transform:'translate(150px,-240px) rotate(-20deg)',opacity:0}];
 else if(how==='drop')k=[{transform:'translate(0px,0px) rotate(0deg)',opacity:1},{transform:'translate(0px,170px) rotate(60deg)',opacity:0}];
 else if(how==='pop')k=[{transform:'scale(1)',opacity:1},{transform:'scale(1.6)',opacity:.8,offset:.35},{transform:'scale(0)',opacity:0}];
 else if(how==='go')k=[{transform:'translate(0px,0px)',opacity:1},{transform:'translate(-230px,0px)',opacity:0}];
 else if(how==='eat'||how==='give')k=[{transform:'translate(0px,0px) scale(1)',opacity:1},{transform:'translate('+dx+'px,'+(dy-50)+'px) scale(.9)',opacity:1,offset:.6},{transform:'translate('+dx+'px,'+dy+'px) scale(.3)',opacity:0}];
 else k=[{opacity:1},{opacity:0}];
 g.style.transformBox='fill-box';g.style.transformOrigin='center';g.style.opacity=0;
 try{const a=g.animate(k,{duration:how==='x'?380:750,easing:'ease-in'});a.onfinish=end;}catch(e){end();}setTimeout(end,1300);}

/* ======================================================================
   วางแผน: ดูโจทย์แล้วเลือกชนิดภาพ (คืน null ถ้าไม่แน่ใจ)
   ====================================================================== */
const P=[];
/* ---- แจกของ / จัดใส่ภาชนะ ---- */
P.push(q=>{const t=TXT(q),A=ansN(q);if(A==null)return null;
 let m=t.match(/มี\s*([ก-๙]*?)\s*(\d+)\s*\S+\s+ใส่\s*([ก-๙]+?)ละ\s*(\d+)/);
 if(m){const N=+m[2],k=+m[4];if(N%k||N/k!==A||N>24)return null;return {kind:'share',mode:'group',N,n2:k,box:m[3],e:emoOf(t)};}
 m=t.match(/มี\s*[ก-๙]*?\s*(\d+)\s*\S+\s+แจก[ก-๙]*?\s*(\d+)\s*คน\s*คนละ\s*(\d+)\s*\S+\s*เหลือ/);
 if(m){const N=+m[1],k=+m[2],e=+m[3];if(N-k*e!==A||N>24||k>5||A<0)return null;return {kind:'share',mode:'left',N,n2:k,per:e,e:emoOf(t)};}
 m=t.match(/(\d+)\s*\S+.*?(?:แบ่ง|แจก)[ก-๙\s]*?(\d+)\s*คน/);if(m&&/คนละ/.test(t)&&!/เหลือ/.test(t)){const N=+m[1],k=+m[2];if(N%k||N/k!==A||N>24||k>5)return null;return {kind:'share',mode:'deal',N,n2:k,e:emoOf(t)};}
 return null;});
/* ---- นับขา มือ หู ---- */
const LEGE={'🐷':4,'🐶':4,'🐱':4,'🐄':4,'🐴':4,'🐑':4,'🐘':4,'🐔':2,'🦆':2,'🐦':2,'🐤':2};
P.push(q=>{const t=TXT(q),o=q.opts[q.ans];let m;
 if(/ขารวม/.test(t)&&o&&o.e&&(m=t.match(/(\d+)\s*ขา/))){const es=[...o.e].filter(c=>LEGE[c]);if(!es.length)return null;const tot=es.reduce((s,c)=>s+LEGE[c],0);if(tot!==+m[1])return null;
  const gs=[];es.forEach(c=>{const g=gs.find(g=>g.e===c);if(g)g.c++;else gs.push({e:c,c:1,k:LEGE[c]});});return {kind:'groups',gs,part:'ขา',tot};}
 if((m=t.match(/(\d+)\s*คน\s*อยากได้([ก-๙]+?)คนละ\s*(\d+)/))){const n=+m[1],k=+m[3];if(n*k!==ansN(q)||n>8)return null;return {kind:'groups',gs:[{e:'🧒',c:n,k}],part:m[2],se:emoOf(m[2])||'🍬',tot:n*k,per:true};}
 if((m=t.match(/^(แมงมุม|แมลง|ไก่|เป็ด|นก|หมา|แมว|วัว)มีกี่ขา/))){const k=LEGS[m[1]];if(k!==ansN(q))return null;return {kind:'groups',gs:[{e:m[1]==='แมงมุม'?'🕷️':m[1]==='แมลง'?'🐞':emoOf(m[1]),c:1,k}],part:'ขา',tot:k};}
 if((m=t.match(/([ก-๙]+?)\s*1\s*\S+\s*แลก([ก-๙]+?)ได้\s*(\d+)\s*\S+\s*ถ้ามี[ก-๙]*?\s*(\d+)/))){const k=+m[3],n=+m[4];if(k*n!==ansN(q)||n>8)return null;return {kind:'groups',gs:[{e:emoOf(m[1])||'🍎',c:n,k}],part:m[2],se:emoOf(m[2]),tot:k*n};}
 return null;});
const LEGS={คน:2,เด็ก:2,ไก่:2,เป็ด:2,นก:2,หมา:4,แมว:4,วัว:4,หมู:4,ม้า:4,แกะ:4,ช้าง:4,เสือ:4,กระต่าย:4,แมลง:6,มด:6,ผึ้ง:6,แมงมุม:8};
P.push(q=>{const t=TXT(q),A=ansN(q);if(A==null)return null;const pm=t.match(/(ขา|มือ|หู|ตา)\s*รวม|กี่(ขา|ข้าง)/);if(!pm)return null;const part=pm[1]||(/มือ/.test(t)?'มือ':/หู/.test(t)?'หู':'ขา');
 const re=/(เด็ก|คน|ไก่|เป็ด|นก|หมา|แมว|วัว|หมู|ม้า|แกะ|ช้าง|เสือ|กระต่าย|แมลง|มด|ผึ้ง|แมงมุม)\s*(\d+|หนึ่ง|สอง|สาม|สี่|ห้า)\s*(ตัว|คน)/g;let x,gs=[];
 while((x=re.exec(t)))gs.push({n:x[1],c:tnum(x[2]),k:part==='ขา'?LEGS[x[1]]:2,e:emoOf(x[1])||(x[1]==='เด็ก'||x[1]==='คน'?'🧒':'🐾')});
 if(!gs.length||gs.reduce((s,g)=>s+g.c,0)>6)return null;const tot=gs.reduce((s,g)=>s+g.c*g.k,0);if(tot!==A)return null;return {kind:'groups',gs,part,tot};});
/* ---- จับคู่เปรียบเทียบ (มากกว่ากี่ / สิ่งใดมากกว่า) ---- */
P.push(q=>{const t=TXT(q);let m=t.match(/^(\d+)\s*(มากกว่า|น้อยกว่า)\s*(\d+)\s*อยู่เท่าไร/);
 if(m){const a=+m[1],b=+m[3],A=ansN(q);if(A!==Math.abs(a-b)||Math.max(a,b)>20)return null;return {kind:'diff',a,b,na:'',nb:'',ask:'num',A};}
 m=t.match(/มี\s*([ก-๙]+?)\s*(\d+)\s*\S+\s+และ\s*([ก-๙]+?)\s*(\d+)\s*\S+\s+สิ่งใดมีจำนวน(มากกว่า|น้อยกว่า)/);
 if(m){const a=+m[2],b=+m[4];if(Math.max(a,b)>20)return null;const big=m[5]==='มากกว่า',win=a===b?'เท่ากัน':((a>b)===big?m[1]:m[3]);if(!ansL(q).includes(win))return null;
  return {kind:'diff',a,b,na:m[1],nb:m[3],ask:big?'more':'less',ea:emoOf(m[1]),eb:emoOf(m[3]),win};}
 const ns=nums(q.q),A=ansN(q);if(ns.length===2&&/มากกว่า|น้อยกว่า/.test(t)&&/กี่/.test(t)&&A===Math.abs(ns[0]-ns[1])&&Math.max(...ns)<=20&&!/[=○□]/.test(q.q)){const nm=t.match(/([ก-๙]+?)(?:จุ|มี)[ก-๙]*?\s*\d+[\s\S]*?\s([ก-๙]+?)(?:จุ|มี)[ก-๙]*?\s*\d+/);return {kind:'diff',a:ns[0],b:ns[1],na:nm?nm[1]:'',nb:nm?nm[2]:'',ask:'num',A,ea:emoOf(t),eb:emoOf(t)};}
 return null;});
/* ---- บวก ลบ (สมการ โจทย์ปัญหา หาตัวที่หายไป) ---- */
const SUBW=/หาย|ให้เพื่อน|ให้น้อง|กิน|ใช้ไป|ลง|บินไป|แตก|ขาย|ทิ้ง|หล่น|ตก|ให้ไป|เอาออก/;
function steps2val(a,st){let v=a;const seq=[a];for(const [o,n] of st){v=o==='+'?v+n:v-n;if(v<0)return null;seq.push(v);}return seq;}
P.push(q=>{const t=TXT(q),A=ansN(q),v=q.v||{};if(A==null)return null;
 if(v.type==='sub'&&v.n!=null&&v.k!=null){if(v.n-v.k!==A||v.n>20)return null;return {kind:'arith',a:v.n,st:[['-',v.k]],seq:[v.n,A],fill:null,A,mode:'tf',e:v.item||null};}
 if(v.type==='fig'&&v.fig&&v.fig.txt){const e=emoOf(t);if(!e)return null;const c=v.fig.txt.filter(x=>x[2]===e).length;const m=t.match(/(?:บินไป|หายไป|เอาออก|กินไป|ว่ายไป|เดินไป|วิ่งไป)\s*(\d+)/);
  if(m){const k=+m[1];if(c-k!==A)return null;return {kind:'arith',a:c,st:[['-',k]],seq:[c,A],fill:null,A,mode:'tf',e};}if(c!==A)return null;return {kind:'count',fig:v.fig,e,c};}
 {const m=t.match(/มี\S*?\s*(\d)\s*โหล\s*ให้\S*?ไป\s*(\d+)/);if(m){const a=12*+m[1],k=+m[2];if(a-k!==A||a>20)return null;return {kind:'arith',a,st:[['-',k]],seq:[a,A],fill:null,A,mode:'tf',e:emoOf(t),note:m[1]+' โหล = '+a};}}
 {const m=norm(ansL(q)).match(/^(\d+)\s*([+\-])\s*(\d+)$/),r=t.match(/ข้อใดมีผล(?:บวก|ลบ)?เท่ากับ\s*(\d+)/);if(m&&r){const a=+m[1],b=+m[3],v2=m[2]==='+'?a+b:a-b;if(v2!==+r[1]||v2<0||v2>99)return null;const mx=Math.max(a,b,v2);return {kind:'arith',a,st:[[m[2],b]],seq:[a,v2],fill:null,A:v2,mode:mx<=20&&a+(m[2]==='+'?b:0)<=20?'tf':'col',e:null};}}
 {const m=norm(ansL(q)).match(/^(\d+)\s*([+\-])\s*(\d+)$/);if(/ข้อใดต้อง(ทด|ยืม)/.test(t)&&m){const a=+m[1],b=+m[3],r=m[2]==='+'?a+b:a-b;if(r<0||r>99)return null;return {kind:'arith',a,st:[[m[2],b]],seq:[a,r],fill:null,A:r,mode:'col',e:null,why:true};}}
 if(/ทีละ|(?<!แ)ละ\s*\d|คนละ|เท่า ๆ กัน|กี่ขา|กี่ข้าง|มากกว่า|น้อยกว่า|ก่อน|ถัดจาก|ระหว่าง|โหล|สัปดาห์|เดือน|นาที|ชั่วโมง|แลก|เหรียญ|ต้องทด|ต้องยืม|ข้อใด|หลัก|มัด|สิบ\s|หน่วย/.test(t))return null;
 let a,st,fill=null;
 let m=t.match(/^(\d+(?:\s*[+\-]\s*\d+)+)\s*=\s*\?/);
 if(m){const tk=m[1].match(/\d+|[+\-]/g);a=+tk[0];st=[];for(let i=1;i<tk.length;i+=2)st.push([tk[i],+tk[i+1]]);}
 else if((m=t.match(/^(\d+)\s*([+\-])\s*□\s*=\s*(\d+)/))){a=+m[1];st=[[m[2],A]];fill=+m[3];}
 else if(!/[=□?]/.test(q.q)){const ns=nums(q.q);if(ns.length<2||ns.length>3)return null;
  if(ns.length===2&&/อยากได้|ต้องการ|ต้องเพิ่ม|อีกกี่/.test(t)&&ns[1]-ns[0]===A){a=ns[0];st=[['+',A]];fill=ns[1];}
  else{const ops=ns.length===2?[['+'],['-']]:[['+','+'],['+','-'],['-','+'],['-','-']],ok=[];
   for(const o of ops){const s=o.map((x,i)=>[x,ns[i+1]]),seq=steps2val(ns[0],s);if(seq&&seq[seq.length-1]===A)ok.push(s);}
   if(ok.length===1)st=ok[0];else if(ok.length>1){/* หลายแบบได้ผลเท่ากัน: ดูคำในโจทย์ */const segs=norm(t).split(/\d+/).slice(1);const guess=ns.slice(1).map((n,i)=>[SUBW.test(segs[i]||'')?'-':'+',n]);/* คำกริยาอยู่ระหว่างเลขก่อนหน้ากับเลขนี้ */if(ok.some(s=>JSON.stringify(s)===JSON.stringify(guess)))st=guess;else return null;}else return null;a=ns[0];}}
 else return null;
 const seq=steps2val(a,st);if(!seq)return null;if(fill==null&&seq[seq.length-1]!==A)return null;if(fill!=null&&seq[seq.length-1]!==fill)return null;
 const mx=Math.max(...seq,...st.map(s=>s[1]));if(mx>100)return null;
 const slots=a+st.filter(s=>s[0]==='+').reduce((x,s)=>x+s[1],0);/* กรอบสิบใช้ช่องใหม่ทุกครั้งที่เพิ่ม ช่องที่ขีดฆ่าแล้วไม่ใช้ซ้ำ */
 const mode=mx<=20&&slots<=20?'tf':(st.length===1&&seq[1]<=99&&fill==null?'col':'nl');
 return {kind:'arith',a,st,seq,fill,A,mode,e:/=/.test(q.q)?null:emoOf(t)};});
/* ---- หลักสิบ หลักหน่วย ---- */
P.push(q=>{const t=TXT(q);let m,N=null,t0,u0,reg=false;
 if((m=t.match(/^(\d+)\s*มีกี่สิบ\s*กี่หน่วย/))){N=+m[1];t0=Math.floor(N/10);u0=N%10;if(!norm(ansL(q)).includes(t0+' สิบ '+u0+' หน่วย'))return null;}
 else if((m=t.match(/(\d+)\s*สิบ\s*กับ\s*(\d+)\s*หน่วย/))){t0=+m[1];u0=+m[2];N=t0*10+u0;if(ansN(q)!==N)return null;}
 else if((m=t.match(/(\d+)\s*มัด\s*กับ\s*(\d+)\s*อัน/))){t0=+m[1];u0=+m[2];N=t0*10+u0;reg=u0>=10;if(ansN(q)!==N)return null;}
 else if(/มีไม้ทั้งหมดเท่าไร/.test(t)&&q.v&&q.v.type==='tens'){N=ansN(q);if(N==null)return null;t0=q.v.tens!=null?q.v.tens:Math.floor(N/10);u0=q.v.ones!=null?q.v.ones:N%10;if(t0*10+u0!==N)return null;reg=u0>=10;}
 else return null;if(N>99||t0>9||u0>19)return null;return {kind:'pv',N,t0,u0,reg};});
/* ---- เส้นจำนวน: มาก/น้อยที่สุด เรียงลำดับ เครื่องหมาย ---- */
P.push(q=>{const t=TXT(q),al=norm(ansL(q));let m;
 if((m=t.match(/(มาก|น้อย|หนัก|เบา|ยาว|สั้น)ที่สุด/))&&!/เรียง/.test(t)){const ls=q.opts.map(o=>norm(lab(o)));if(!ls.every(l=>/^\d+(\s*[ก-๙]+)?$/.test(l)))return null;
  const vs=ls.map(l=>+l.match(/\d+/)[0]),big=/มาก|หนัก|ยาว/.test(m[1]),tg=big?Math.max(...vs):Math.min(...vs);if(vs[q.ans]!==tg)return null;
  return {kind:'line',vs,tg,how:big?'max':'min',unit:(ls[0].match(/[ก-๙]+/)||[''])[0]};}
 if((m=t.match(/เรียงจาก(น้อยไปมาก|มากไปน้อย)/))){const up=m[1]==='น้อยไปมาก';
  if(/ตรงกลาง/.test(t)){const vs=(q.v&&q.v.nums?q.v.nums.filter(x=>x!=null).map(Number):q.opts.map(o=>nums(lab(o))[0])).filter(x=>!isNaN(x));if(vs.length<3)return null;const so=vs.slice().sort((a,b)=>a-b);if(so[1]!==ansN(q))return null;return {kind:'line',vs:so,tg:so[1],how:'mid'};}
  const vs=nums(al);if(vs.length<3)return null;for(let i=1;i<vs.length;i++)if(up?vs[i]<=vs[i-1]:vs[i]>=vs[i-1])return null;return {kind:'line',vs,how:up?'up':'down'};}
 if(/ข้อใดถูกต้อง/.test(t)&&(m=al.match(/^(\d+)\s*([<>=])\s*(\d+)$/))){const a=+m[1],b=+m[3];if((m[2]==='>'&&a<=b)||(m[2]==='<'&&a>=b)||(m[2]==='='&&a!==b))return null;return {kind:'line',vs:[a,b],how:'sym',sym:m[2]};}
 if(/เครื่องหมาย/.test(t)&&q.v){const s=norm(q.v.text||q.v.e||q.v.big||'');if((m=s.match(/^(\d+)\s*○\s*(\d+)$/))){const a=+m[1],b=+m[2],sy=a>b?'>':a<b?'<':'=',o=q.opts[q.ans],bs=norm(o&&o.big||lab(o));if(bs!==sy)return null;return {kind:'line',vs:[a,b],how:'sym',sym:sy};}}
 return null;});
/* ---- ก่อน หลัง ระหว่าง ---- */
P.push(q=>{const t=TXT(q),A=ansN(q);if(A==null||!/^เลข/.test(t))return null;let m;
 if((m=t.match(/ก่อน\s*(\d+)/))&&A===+m[1]-1)return {kind:'order',ref:[+m[1]],A,how:'before'};
 if((m=t.match(/(?:หลัง|ถัดจาก)\s*(\d+)/))&&A===+m[1]+1)return {kind:'order',ref:[+m[1]],A,how:'after'};
 if((m=t.match(/ระหว่าง\s*(\d+)\s*กับ\s*(\d+)/))&&+m[2]-+m[1]===2&&A===+m[1]+1)return {kind:'order',ref:[+m[1],+m[2]],A,how:'mid'};
 return null;});
/* ---- เลขคู่ เลขคี่ ---- */
P.push(q=>{const t=TXT(q);const sp=t.match(/(\d+)\s*\S+\s*แบ่งให้สองคนเท่า ๆ กันได้พอดีไหม/);if(sp){const v=+sp[1],al=ansL(q),ev=v%2===0;if(v>30||(ev?/ไม่/.test(al):!/ไม่/.test(al)))return null;return {kind:'oddeven',vs:[v],ev,share:true};}
 const m=t.match(/เลข(คู่|คี่)/);if(!m)return null;const vs=nums(ansL(q));if(!vs.length||vs.length>3||Math.max(...vs)>30)return null;
 const ev=m[1]==='คู่';if(!vs.every(v=>(v%2===0)===ev))return null;return {kind:'oddeven',vs,ev};});
/* ---- วันในสัปดาห์ ---- */
const DAYS=['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์'],DCOL=['#ef4444','#facc15','#f472b6','#22c55e','#f97316','#38bdf8','#a855f7'];
const dayIx=s=>DAYS.findIndex(d=>s.includes('วัน'+d)||s===d);
P.push(q=>{const t=TXT(q),al=ansL(q);let m,st,d,why;
 if(/หนึ่งสัปดาห์มีกี่วัน/.test(t)){if(ansN(q)!==7)return null;return {kind:'week',st:0,d:6,count:true};}
 if((m=t.match(/ถ้านับวันอาทิตย์เป็นวันที่\s*1\s*วันลำดับที่\s*(\d+)/))){st=0;d=+m[1]-1;why='ord';}
 else if((m=t.match(/ถ้าเมื่อวานเป็นวัน(\S+?)\s+วันนี้/))){st=DAYS.indexOf(m[1]);d=1;why='yest';}
 else if((m=t.match(/วันนี้วัน(\S+?)\s+(เมื่อวาน|พรุ่งนี้|อีก\s*(\d+)\s*วัน)/))){st=DAYS.indexOf(m[1]);d=m[2]==='เมื่อวาน'?-1:m[2]==='พรุ่งนี้'?1:+m[3];why=m[2];}
 else return null;if(st<0||Math.abs(d)>14)return null;const end=((st+d)%7+7)%7;if(!al.includes(DAYS[end]))return null;
 return {kind:'week',st,d,end,why};});
/* ---- เดือน ---- */
const MON=['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
P.push(q=>{const t=TXT(q),al=ansL(q);let m;
 if(/หนึ่งปีมีกี่เดือน/.test(t)&&ansN(q)===12)return {kind:'month',how:'count'};
 if((m=t.match(/ระหว่างเดือน(\S+?)\s*กับเดือน(\S+)/))){const a=MON.indexOf(m[1]),b=MON.indexOf(m[2]);if(a<0||b!==a+2||!al.includes(MON[a+1]))return null;return {kind:'month',how:'mid',a,b,c:a+1};}
 if(/เดือนแรกของปี/.test(t)&&al.includes(MON[0]))return {kind:'month',how:'first'};
 if(/เดือนสุดท้ายของปี/.test(t)&&al.includes(MON[11]))return {kind:'month',how:'last'};
 if((m=t.match(/เดือนใดมี\s*(30|31)\s*วัน/))){const i=MON.findIndex(x=>al.includes(x));if(i<0)return null;const dd=i===1?28:/ยน$/.test(MON[i])?30:31;if(dd!==+m[1])return null;return {kind:'month',how:'days',c:i};}
 if((m=t.match(/เดือน(\S+?)\s*มีกี่วัน/))){const i=MON.indexOf(m[1]);if(i<0)return null;return {kind:'month',how:'days',c:i};}
 return null;});
/* ---- นาฬิกา: ครึ่งชั่วโมง / ชั่วโมงมีกี่นาที ---- */
P.push(q=>{const t=TXT(q),A=ansN(q);if(/ครึ่งชั่วโมง/.test(t)&&/นาที/.test(t)&&A===30)return {kind:'clock',mins:30};if(/ชั่วโมง\s*มีกี่นาที/.test(t)&&A===60)return {kind:'clock',mins:60};return null;});
/* ---- โหล สัปดาห์→วัน คู่ ---- */
P.push(q=>{const t=TXT(q),A=ansN(q);if(A==null)return null;let m;
 if(/โหล/.test(t)){const half=/ครึ่งโหล/.test(t),n=(m=t.match(/(\d+)\s*โหล/))?+m[1]:1;const c=half?6:12*n;if(c!==A||n>2)return null;return {kind:'unit',how:'dozen',n,half,c,e:emoOf(t)||'🥚'};}
 if((m=t.match(/(\d+)\s*สัปดาห์\s*เท่ากับกี่วัน/))){const n=+m[1];if(n*7!==A||n>4)return null;return {kind:'unit',how:'week',n,c:A};}
 if((m=t.match(/(\d+)\s*คู่\s*มีกี่ข้าง/))){const n=+m[1];if(n*2!==A)return null;return {kind:'unit',how:'pair',n,c:A,e:emoOf(t)||'🧦'};}
 return null;});
/* ---- ใครสูง/หนักที่สุด (คิดสองชั้น) ---- */
P.push(q=>{const t=TXT(q);const CW='สูง|เตี้ย|หนัก|เบา|ตัวใหญ่|ตัวเล็ก|วิ่งเร็ว|วิ่งช้า';const m=t.match(new RegExp('^(.+?)('+CW+')กว่า(.+?)\\s+(.+?)('+CW+')กว่า(.+?)\\s+ใคร('+CW+')ที่สุด'));if(!m)return null;
 const hi=w=>/สูง|หนัก|ใหญ่|เร็ว/.test(w),dim=w=>/สูง|เตี้ย/.test(w)?'h':/หนัก|เบา/.test(w)?'w':/ใหญ่|เล็ก/.test(w)?'s':'r';if(dim(m[2])!==dim(m[5])||dim(m[2])!==dim(m[7]))return null;
 const rel=[[m[1],m[3],hi(m[2])],[m[4],m[6],hi(m[5])]].map(([a,b,h])=>h?[a,b]:[b,a]);/* [มากกว่า, น้อยกว่า] */
 let ord;if(rel[0][1]===rel[1][0])ord=[rel[0][0],rel[0][1],rel[1][1]];else if(rel[1][1]===rel[0][0])ord=[rel[1][0],rel[1][1],rel[0][1]];else return null;
 const want=hi(m[7])?ord[0]:ord[2];if(ansL(q)!==want)return null;return {kind:'rank',ord,dim:dim(m[2]),ask:m[7],want,rel:[[m[1],m[2],m[3]],[m[4],m[5],m[6]]]};});
/* ---- ซ้าย ขวา ---- */
P.push(q=>{const t=TXT(q),v=q.v||{},o=q.opts[q.ans];let m;
 if(v.type==='cards'&&v.items&&v.items.length>=3&&v.items.every(i=>i.e&&!i.kid)&&o&&o.e&&(m=t.match(/(ขวาสุด|ซ้ายสุด|ถัดจาก(\S+?)ไปทาง(ขวา|ซ้าย))/))){
  const ix=v.items.findIndex(i=>i.e===o.e);if(ix<0)return null;let ref=null,side;
  if(m[1]==='ขวาสุด'){if(ix!==v.items.length-1)return null;side='r';}else if(m[1]==='ซ้ายสุด'){if(ix!==0)return null;side='l';}
  else{const ro=q.opts.find(x=>lab(x)===m[2]);if(!ro||!ro.e)return null;ref=v.items.findIndex(i=>i.e===ro.e);side=m[3]==='ขวา'?'r':'l';if(ref<0||ix!==ref+(side==='r'?1:-1))return null;}
  return {kind:'row',items:v.items.map(i=>i.e),ix,ref,side};}
 const kid=v.type==='cards'&&v.items&&v.items[0]&&v.items[0].kid;
 if(kid&&/ยกมือข้างใด/.test(t)){const h=kid.hand==='right'?'ขวา':'ซ้าย';if(!ansL(q).includes(h))return null;return {kind:'turn',face:kid.face,hand:kid.hand};}
 if((m=t.match(/หันหน้าหาเรา\s*มือ(ขวา|ซ้าย)ของเขาอยู่ทางใดของเรา/))){const our=m[1]==='ขวา'?'ซ้าย':'ขวา';if(!ansL(q).includes(our))return null;return {kind:'turn',face:'front',hand:m[1]==='ขวา'?'right':'left',ask:'our'};}
 return null;});
/* ---- ภาพในกระจก / ในน้ำ ---- */
const MIR={b:'d',d:'b',p:'q',q:'p'},WAT={b:'p',p:'b',d:'q',q:'d'};
P.push(q=>{const t=TXT(q),o=q.opts[q.ans];let m;
 if((m=t.match(/ตัว\s*([bdpq])\s*ใน(กระจก|น้ำ)/))){const w=m[2]==='น้ำ',a=(w?WAT:MIR)[m[1]];if(ansL(q)!==a)return null;return {kind:'mirror',ch:m[1],to:a,water:w,letter:true};}
 if(o&&o.e&&(o.flip||o.vflip)&&/กระจก|น้ำ/.test(t))return {kind:'mirror',ch:o.e,water:!!o.vflip};
 if(/ซ้ายกับขวาเหมือนกัน/.test(t)&&o&&o.e&&!o.flip)return {kind:'mirror',ch:o.e,same:true};
 return null;});
/* ---- ดวงอาทิตย์ เงา ไฟฉาย เข็มทิศ ---- */
P.push(q=>{const t=TXT(q),al=ansL(q),all=t+' '+al;let m;
 if(/ไฟฉาย/.test(t)&&(m=t.match(/ทาง(ซ้าย|ขวา)ของ/))){const from=m[1]==='ซ้าย'?'l':'r';if(!al.includes(from==='l'?'ขวา':'ซ้าย'))return null;return {kind:'lamp',from};}
 if(/หันหน้าไปทางทิศเหนือ/.test(t)&&/ตะวันออก/.test(t)){if(!al.includes('ขวา'))return null;return {kind:'compass'};}
 if(/ทิศ.*กี่ทิศ/.test(t)&&ansN(q)===4)return {kind:'compass',count:true};
 if(!/ดวงอาทิตย์|เงา/.test(t)||/ไฟฉาย|กำแพง|ตุ๊กตา/.test(t))return null;
 const at=/เช้า|ขึ้น/.test(all)&&!/เที่ยง/.test(al)?'m':/เที่ยง|สูงที่สุด|สั้นที่สุด/.test(all)?'n':/เย็น|ตก/.test(all)?'e':null;if(!at)return null;return {kind:'sun',at};});
/* ---- ตาชั่ง ---- */
P.push(q=>{const t=TXT(q),o=q.opts[q.ans],v=q.v||{};let m;
 if(o&&o.scale&&/หนักเท่ากับ/.test(t))return {kind:'scale',l:o.scale.l,r:o.scale.r,tilt:o.scale.tilt||''};
 if((m=t.match(/ต้องวางเพิ่มข้าง(ซ้าย|ขวา)อีกกี่ชิ้น/))&&v.items&&v.items[0]&&v.items[0].scale){const s=v.items[0].scale,L=[...s.l],R=[...s.r],need=m[1]==='ซ้าย'?R.length-L.length:L.length-R.length;if(need!==ansN(q)||need<1)return null;return {kind:'scale',l:s.l,r:s.r,add:m[1]==='ซ้าย'?'l':'r',need};}
 if((m=t.match(/ข้อใดมีค่าเท่ากับ\s*(\d+)\s*([+\-])\s*(\d+)/))){const a=+m[1],b=+m[3],L=m[2]==='+'?a+b:a-b,mm=norm(ansL(q)).match(/^(\d+)\s*([+\-])\s*(\d+)$/);if(!mm)return null;const R=mm[2]==='+'?+mm[1]+ +mm[3]:+mm[1]-mm[3];if(R!==L)return null;return {kind:'scale',l:m[1]+' '+m[2].replace('-','−')+' '+m[3],r:norm(ansL(q)).replace('-','−'),sum:L,txt:true};}
 return null;});
/* ---- เทน้ำ (น้ำเท่ากัน แม้แก้วต่างกัน) ---- */
P.push(q=>{const t=TXT(q);if(/เท/.test(t)&&/ขวด/.test(t)&&/เท่ากัน/.test(ansL(q)))return {kind:'pour',n:/สามใบ/.test(t)?3:2};return null;});
/* ---- น้ำสามสถานะ ฤดู ฝน ---- */
P.push(q=>{const t=TXT(q),al=ansL(q),all=t+' '+al+' '+(q.why||'');
 if(/ฤดู/.test(t)){const s=/ร้อน/.test(al)?0:/ฝน/.test(al)?1:/หนาว/.test(al)?2:(/กี่ฤดู/.test(t)&&ansN(q)===3?-1:null);if(s==null)return null;return {kind:'season',s};}
 if(/ฝน\s*มาจาก|เมฆ/.test(t)&&/เมฆ/.test(al))return {kind:'rain'};
 let tr=[];if(/เรียงจากของแข็ง/.test(t))tr=['melt','boil'];else if(/ละลาย/.test(all))tr=['melt'];else if(/แข็งตัว|ช่องแข็ง|0 องศา|ศูนย์องศา/.test(all))tr=['freeze'];else if(/หยดน้ำ|เกาะ/.test(all))tr=['cond'];else if(/เดือด|ไอน้ำ|ระเหย|แห้ง|100 องศา|ร้อยองศา/.test(all))tr=['boil'];
 let node=null;if(/ข้อใดเป็นของแข็ง/.test(t))node=0;else if(/ข้อใดเป็นของเหลว/.test(t))node=1;else if(/ข้อใดเป็นแก๊ส/.test(t))node=2;
 if(!tr.length&&node==null)return null;if(!/น้ำ|ไอ/.test(all))return null;return {kind:'water',tr,node};});
/* ---- อวัยวะ ---- */
const ORG=['สมอง','หัวใจ','ปอด','กระเพาะอาหาร','จมูก','ตา','หู','ปาก','ฟัน','คอ'];
P.push(q=>{const t=TXT(q);if(!/อวัยวะ|ส่วนใดอยู่ระหว่างศีรษะ/.test(t))return null;const al=ansL(q);const os=ORG.filter(o=>al.includes(o)&&!(o==='ตา'&&/ตาม/.test(al)));if(!os.length)return null;return {kind:'body',os,why:q.why};});
/* ---- พยางค์ ---- */
const SYL={'กระต่าย':['กระ','ต่าย'],'ก้อนเมฆ':['ก้อน','เมฆ'],'ขาม':['ขาม'],'จระเข้':['จอ','ระ','เข้'],'ช้าง':['ช้าง'],'ดินสอ':['ดิน','สอ'],'ตุ๊กตา':['ตุ๊ก','กะ','ตา'],'ทะเล':['ทะ','เล'],'นก':['นก'],'นาฬิกา':['นา','ฬิ','กา'],'บ้าน':['บ้าน'],'ปลา':['ปลา'],'ปลาหมึก':['ปลา','หมึก'],
 'ผีเสื้อ':['ผี','เสื้อ'],'มะม่วง':['มะ','ม่วง'],'มะละกอ':['มะ','ละ','กอ'],'รถยนต์':['รถ','ยนต์'],'รถไฟ':['รถ','ไฟ'],'สมุด':['สะ','หมุด'],'สับปะรด':['สับ','ปะ','รด'],'องุ่น':['อะ','งุ่น'],'แตงโม':['แตง','โม'],'แมว':['แมว'],'ไก่':['ไก่'],'ไอศกรีม':['ไอ','ศะ','กรีม']};
P.push(q=>{const t=TXT(q);if(!/พยางค์/.test(t))return null;let m;
 if((m=t.match(/คำว่า\s*(\S+)\s*มีกี่พยางค์/))){const s=SYL[m[1]];if(!s||s.length!==ansN(q))return null;return {kind:'syll',rows:[[m[1],s]],hi:0};}
 if((m=t.match(/คำใดมี\s*(\d)\s*พยางค์/))){const ws=q.opts.map(lab);if(!ws.every(w=>SYL[w]))return null;const n=+m[1];if(SYL[ws[q.ans]].length!==n||ws.filter(w=>SYL[w].length===n).length!==1)return null;return {kind:'syll',rows:ws.map(w=>[w,SYL[w]]),hi:q.ans,n};}
 return null;});
/* ---- ตัวสะกด ---- */
const MAE={'แม่กก':'กขคฆ','แม่กด':'จชซฎฏฐฑฒดตถทธศษส','แม่กบ':'บปพฟภ','แม่กง':'ง','แม่กน':'นญณรลฬ','แม่กม':'ม','แม่เกย':'ย','แม่เกอว':'ว'};
const maeOf=c=>Object.keys(MAE).find(k=>MAE[k].includes(c))||null;
function finalOf(w){const s=w.replace(/[\u0E47-\u0E4C]/g,'').replace(/^[เแโใไ]/,'').replace(/[\u0E31\u0E34-\u0E3A]/g,'');const last=s.slice(-1);if(!/[ก-ฮ]/.test(last))return null;if(s.replace(/[^ก-ฮ]/g,'').length<2)return null;return last;}
const clus=w=>w.match(/[เแโใไ]|[ก-ฮ][\u0E31\u0E34-\u0E3A\u0E47-\u0E4E]*|[ะาำ]|./g)||[];
P.push(q=>{const t=TXT(q);let m;
 if((m=t.match(/คำว่า\s*(\S+)\s*สะกดด้วยแม่ใด/))&&!finalOf(m[1])&&/ก\s*กา/.test(ansL(q)))return {kind:'final',ws:[m[1]],hi:0,none:true};
 if((m=t.match(/คำใดเป็น(แม่[ก-๙]+)/))){const ws=q.opts.map(lab);if(!ws.every(w=>/^[ก-๙]+$/.test(w)))return null;const ms=ws.map(w=>{const f=finalOf(w);return f?maeOf(f):null;});if(ms[q.ans]!==m[1]||ms.filter(x=>x===m[1]).length!==1)return null;return {kind:'final',ws,hi:q.ans,ask:m[1]};}
 if((m=t.match(/คำว่า\s*(\S+)\s*(สะกดด้วยแม่ใด|มีตัวสะกดคือตัวใด)/))){const w=m[1],f=finalOf(w);if(!f)return null;const al=norm(ansL(q)).replace(/\s/g,'');if(m[2]==='สะกดด้วยแม่ใด'){if(maeOf(f)!==al)return null;}else if(al!==f)return null;return {kind:'final',ws:[w],hi:0};}
 if(/คำใดมีตัวสะกด/.test(t)){const ws=q.opts.map(lab);if(!ws.every(w=>/^[ก-๙]+$/.test(w)))return null;const fs=ws.map(finalOf);if(!fs[q.ans]||fs.filter(Boolean).length!==1)return null;return {kind:'final',ws,hi:q.ans};}
 return null;});
/* ---- ประสมคำ ---- */
P.push(q=>{const t=norm(q.q);const m=t.match(/^(.+?)\s+(?:อ่านว่าอะไร|หมายถึงภาพใด)/);if(!m||!/\+/.test(m[1]))return null;const parts=m[1].split('+').map(s=>s.trim());if(parts.length<2||parts.length>4)return null;const w=ansL(q);if(!w||!/^[ก-๙]+$/.test(w))return null;return {kind:'spell',parts,w};});

/* ======================================================================
   วาด/เล่น + พากย์ (ผู้ปกครองขอ 25 ต.ค. 69: ให้เด็ก 6 ขวบเห็นภาพและได้ยินคำอธิบายทีละขั้น)
   ทุกขั้น: ภาพขยับ → น้องกล้าพูดท่อนสั้น ๆ (นับเลขออกเสียงทีละตัว) → ขั้นต่อไป · จบด้วยคำตอบตัวใหญ่ + พลุ
   ====================================================================== */
const R={};
const MI='−',sym=o=>o==='-'?MI:'+';
const pvSay=n=>{const t=Math.floor(n/10),u=n%10;return n+' คือ '+(t?t+' สิบ':'')+(u||!t?(t?' ':'')+u+' หน่วย':'');};
/* ---------- กรอบสิบ: นับต่อ / นับถอยหลัง ---------- */
R.tf=async(p,G)=>{const addN=p.st.filter(s=>s[0]==='+').reduce((x,s)=>x+s[1],0),mx=Math.max(...p.seq,p.fill||0,p.a+addN),two=mx>10,cs=50,fy=24,fx=two?[30,320]:[175],fm=p.fill!=null,vb=p.vb||'x';
 const trays=fx.map(x=>{const g=G.E('g',{});roundRect(G,x-8,fy-8,cs*5+16,cs*2+16,'#fff1d0','#d6a35c',16,g);for(let i=0;i<10;i++)G.E('rect',{x:x+(i%5)*cs+4,y:fy+Math.floor(i/5)*cs+4,width:cs-8,height:cs-8,rx:10,fill:'#fffaf0',stroke:'#ecd3a4','stroke-width':2},g);return g;});
 const pos=i=>{const f=Math.floor(i/10),j=i%10;return [fx[f]+(j%5)*cs+cs/2,fy+Math.floor(j/5)*cs+cs/2];};
 const dots=[],put=(i,c)=>{const [x,y]=pos(i),g=thing(G,x,y,p.e,c);G.pop(g,260);G.tc(g,x,y);dots[i]=g;return g;};
 /* สมการโตขึ้นทีละส่วน สีตรงกับของ */
 const eq=G.E('text',{x:300,y:180,'text-anchor':'middle','dominant-baseline':'central','font-size':40,'font-weight':700,fill:'#3b3b4f'});
 const eqA=(s,c)=>{const t=G.E('tspan',{fill:c||'#3b3b4f'},eq);t.textContent=s;return t;};
 G.cap(p.note||('มี '+p.a));for(let i=0;i<p.a;i++){put(i,C[0]);if(i%5===4||i===p.a-1){G.sfx('pop',i%12);if(!await G.W(260))return;}}
 eqA(String(p.a),C[0]);if(!await G.say(p.note?[p.note]:['มี '+p.a]))return;
 let cnt=p.a,slot=p.a;const alive=[...Array(p.a).keys()],tg=[],tgs=[];
 for(let k=0;k<p.st.length;k++){const [o,n]=p.st[k],col=C[(k+1)%C.length];
  if(o==='+'){
   if(!await G.step(fm?'ต้องเติมให้ครบ '+p.fill:'เพิ่มอีก '+n,fm?['ต้องเติมให้ครบ '+p.fill,'เติมทีละอัน แล้วนับต่อนะ']:['เพิ่มมาอีก '+n,'นับต่อจาก '+cnt+' นะ']))return;
   const added=[];
   for(let j=0;j<n;j++){put(slot,col);const [x,y]=pos(slot);alive.push(slot);added.push(slot);slot++;cnt++;G.sfx('pop',cnt%12);tg.push(tgs[slot-1]=G.tag(x+15,y-15,cnt));G.cap(String(cnt));if(!await G.say([String(cnt)]))return;
    if(cnt===10&&two&&(j<n-1||k<p.st.length-1)){G.glow(trays[0]);G.pulse(trays[0]);if(!await G.step('ครบ 10 แล้ว!',['ครบสิบแล้ว เต็มกรอบพอดี']))return;}}
   eqA(' + ');eqA(fm?'□':String(n),col);
   if(fm){tg.forEach(t=>G.fade(t,0,300));if(!await G.step('เติมไปกี่อัน?',['ครบ '+p.fill+' แล้ว','เติมไปกี่อัน มานับกัน']))return;
    for(let j=0;j<added.length;j++){const [x,y]=pos(added[j]);G.tag(x+15,y-15,j+1,'#7c3aed');G.pulse(dots[added[j]]);G.sfx('pop',j%12);G.cap('เติมไป '+(j+1));if(!await G.say([String(j+1)]))return;}}}
  else{
   if(!await G.step(fm?'ต้องให้เหลือ '+p.fill:GONE[vb]+' '+n,fm?['ต้องให้เหลือ '+p.fill,'เอาออกทีละอัน แล้วนับถอยหลังนะ']:[GONE[vb]+' '+n,'นับถอยหลังนะ']))return;
   let dest=null;if(vb==='give'){dest=[520,270];G.pop(G.tx(520,270,'🧒',{fs:48}));}else if(vb==='eat'){dest=[300,268];G.pop(G.tx(300,268,'😋',{fs:48}));}
   const out=[];
   for(let j=0;j<n;j++){const ix=alive.pop(),[x,y]=pos(ix);cnt--;if(tgs[ix])G.fade(tgs[ix],0,250);takeAway(G,dots[ix],x,y,vb,dest);out.push(ix);G.sfx(vb==='fly'||vb==='go'?'whoosh':'pop',cnt%12);G.cap(String(cnt));if(!await G.say([String(cnt)]))return;}
   eqA(' '+MI+' ');eqA(fm?'□':String(n),'#e11d48');
   if(fm){if(!await G.step('เอาออกไปกี่อัน?',['เหลือ '+p.fill+' แล้ว','เอาออกไปกี่อัน มานับกัน']))return;
    for(let j=0;j<out.length;j++){const [x,y]=pos(out[out.length-1-j]);G.tag(x+15,y-15,j+1,'#7c3aed');G.sfx('pop',j%12);G.cap('เอาออกไป '+(j+1));if(!await G.say([String(j+1)]))return;}}}
  if(!await G.W(250))return;}
 const res=p.seq[p.seq.length-1],full=p.a+p.st.map(([o,n])=>' '+sym(o)+' '+n).join('')+' = '+res;eqA(' = ');eqA(String(res),fm?null:'#ec4899');
 if(fm){const r=G.tx(300,232,'□ = '+p.A,{fs:36,w:700,fill:'#7c3aed'});G.pop(r);if(!await G.fin('□ = '+p.A,[full,'ช่องว่างคือ '+p.A],[r]))return;G.tapOn(null);return;}
 G.wave(alive.map(i=>dots[i]));if(!await G.fin(full,[full],[eq]))return;G.tapOn(res);};
/* ---------- มัดสิบ ตั้งหลัก: ทด (สิบก้อนรวมเป็นแท่ง แล้วย้ายไปหลักสิบ) / ยืม (แท่งย้ายมาแล้วแตกเป็นสิบก้อน) ---------- */
R.col=async(p,G)=>{const a=p.a,[o,b]=p.st[0],add=o==='+',res=p.seq[1],at=Math.floor(a/10),au=a%10,bt=Math.floor(b/10),bu=b%10,TC='#2563eb',UC='#d97706';
 roundRect(G,8,30,170,262,'#eff6ff',null,14);roundRect(G,184,30,212,262,'#fff7ed',null,14);
 G.tx(93,16,'หลักสิบ',{fs:17,w:700,fill:TC});G.tx(290,16,'หลักหน่วย',{fs:17,w:700,fill:UC});
 const RX=i=>20+i*17,CX=(j,top)=>[196+(j%5)*16,top+Math.floor(j/5)*16];
 const hl=[G.E('rect',{x:460,y:36,width:52,height:200,rx:12,fill:'#bfdbfe',opacity:0}),G.E('rect',{x:520,y:36,width:52,height:200,rx:12,fill:'#fed7aa',opacity:0})];
 const lit=k=>hl.forEach((r,i)=>G.fade(r,i===k?.85:0,300));
 const dg=(x,y,s,c,fs=40)=>G.tx(x,y,s,{fs,w:700,fill:c||'#3b3b4f'});
 const mkC=(x,y,col)=>{const c=cube(G,x,y,col);c._b=[x,y];c._p=[x,y];return c;},goC=(c,x,y,ms)=>{c._p=[x,y];G.move(c,x-c._b[0],y-c._b[1],ms);};
 const rA=[],cA=[],rB=[],cB=[];
 for(let i=0;i<at;i++){const r=rod(G,RX(i),44,'#93c5fd');G.pop(r);rA.push(r);}for(let j=0;j<au;j++){const [x,y]=CX(j,48);G.pop(cA[j]=mkC(x,y,'#93c5fd'));}
 if(at)dg(486,70,String(at),TC);dg(546,70,String(au),UC);
 if(!await G.step(String(a),[pvSay(a)],700))return;
 if(add){for(let i=0;i<bt;i++){const r=rod(G,RX(i),182,'#fdba74');G.pop(r);rB.push(r);}for(let j=0;j<bu;j++){const [x,y]=CX(j,186);G.pop(cB[j]=mkC(x,y,'#fdba74'));}}
 dg(432,130,add?'+':MI);if(bt)dg(486,130,String(bt),TC);dg(546,130,String(bu),UC);G.E('line',{x1:420,y1:160,x2:580,y2:160,stroke:'#3b3b4f','stroke-width':3});
 if(!await G.step((add?'+ ':MI+' ')+b,[add?'บวกกับ':'ลบด้วย',pvSay(b)],700))return;
 lit(1);if(!await G.step('หลักหน่วยก่อน',['เริ่มที่หลักหน่วยก่อนนะ'],500))return;
 if(add){
  cB.forEach((c,j)=>{const [x,y]=CX(au+j,48);goC(c,x,y,700);});G.sfx('whoosh');
  const u=au+bu;if(!await G.step(au+' + '+bu+' = '+u,[au+' + '+bu+' = '+u],800))return;
  let carry=0;const all=cA.concat(cB);
  if(u>=10){carry=1;const ten=all.slice(0,10);ten.forEach(c=>c.setAttribute('fill','#fde047'));G.sfx('pop',3);
   if(!await G.step('ครบ 10 ก้อน!',['ครบสิบ มัดรวมเป็นหนึ่งสิบ'],400))return;
   ten.forEach((c,i)=>goC(c,362,44+i*10,600));if(!await G.W(700))return;
   const nr=rod(G,360,44,'#fde047');G.pop(nr,400);ten.forEach(c=>G.fade(c,0,200));G.sfx('chime');if(!await G.W(500))return;
   G.move(nr,RX(at)-360,0,900);G.sfx('whoosh');all.slice(10).forEach((c,j)=>{const [x,y]=CX(j,48);goC(c,x,y,600);});rA.push(nr);
   const cm=G.E('g',{});G.E('circle',{cx:486,cy:28,r:14,fill:'#fee2e2',stroke:'#e11d48','stroke-width':2},cm);G.tx(486,29,'1',{fs:19,w:700,fill:'#e11d48',p:cm});G.pop(cm);
   if(!await G.step('ทด 1 ไปหลักสิบ',['ทดหนึ่ง ไปไว้ที่หลักสิบ'],1000))return;}
  G.pop(dg(546,205,String(u%10),UC));if(!await G.step('หลักหน่วยได้ '+(u%10),['หลักหน่วยได้ '+(u%10)],300))return;
  const tt=at+bt+carry;
  if(tt){lit(0);if(!await G.step('ต่อไปหลักสิบ',['ต่อไปหลักสิบ'],300))return;
   rB.forEach((r,i)=>G.move(r,RX(at+carry+i)-RX(i),44-182,800));if(rB.length)G.sfx('whoosh');
   const ts=at+' + '+bt+(carry?' + 1':'')+' = '+tt;if(!await G.step(ts,[ts],900))return;G.pop(dg(486,205,String(tt),TC));if(!await G.W(400))return;}}
 else{let tA=at,uA=au;
  if(au<bu){if(!await G.step(au+' เอาออก '+bu+' ไม่พอ',['หน่วยมีไม่พอให้เอาออก','ขอยืมจากหลักสิบมาหนึ่งสิบ'],300))return;
   const r=rA.pop();r.querySelector('rect').setAttribute('fill','#fde047');G.pulse(r);G.move(r,340-RX(at-1),0,900);G.sfx('whoosh');if(!await G.W(1000))return;
   G.fade(r,0,250);for(let j=0;j<10;j++){const c=mkC(340.5,44+j*10,'#fde047');G.pop(c,200);const [x,y]=CX(au+j,48);goC(c,x,y,550);cA.push(c);}G.sfx('chime');
   G.E('line',{x1:470,y1:86,x2:502,y2:54,stroke:'#e11d48','stroke-width':3});G.pop(G.tx(486,26,String(at-1),{fs:22,w:700,fill:'#e11d48'}));G.pop(G.tx(524,50,'1',{fs:19,w:700,fill:'#e11d48'}));
   tA=at-1;uA=au+10;if(!await G.step('แตกเป็น 10 หน่วย มี '+uA,['แตกเป็นสิบหน่วย','ตอนนี้มี '+uA+' หน่วย'],700))return;}
  if(!await G.step('เอาออก '+bu,['เอาออก '+bu],200))return;
  for(let j=0;j<bu;j++){const c=cA[uA-1-j],[x,y]=c._p;c.setAttribute('opacity','.25');cross(G,x+6.5,y+6.5);G.sfx('pop',j%8);if(!await G.W(230))return;}
  const r1=uA-bu;if(!await G.step(uA+' '+MI+' '+bu+' = '+r1,[uA+' '+MI+' '+bu+' = '+r1],300))return;
  G.pop(dg(546,205,String(r1),UC));if(!await G.step('หลักหน่วยได้ '+r1,['หลักหน่วยได้ '+r1],300))return;
  const r2=tA-bt;
  if(tA){lit(0);if(!await G.step('ต่อไปหลักสิบ',['ต่อไปหลักสิบ'],300))return;
   for(let i=0;i<bt;i++){const r=rA[tA-1-i];r.setAttribute('opacity','.25');cross(G,RX(tA-1-i)+7,94);G.sfx('pop',i);if(!await G.W(300))return;}
   const ts=tA+' '+MI+' '+bt+' = '+r2;if(!await G.step(ts,[ts],400))return;if(r2)G.pop(dg(486,205,String(r2),TC));}}
 lit(-1);const eq=a+' '+(add?'+':MI)+' '+b+' = '+res,r=G.tx(300,312,eq,{fs:28,w:700,fill:'#7c3aed'});G.pop(r);
 await G.fin(eq,[eq],[r]);};
/* ---------- เส้นจำนวน: กบกระโดดทีละสิบ แล้วทีละหนึ่ง ---------- */
function nline(G,lo,hi,y){const X=v=>40+(v-lo)*520/(hi-lo),sp=hi-lo,step=sp<=30?1:sp<=60?5:10,lb=sp<=12?1:sp<=24?2:sp<=30?5:10;
 G.E('line',{x1:30,y1:y,x2:570,y2:y,stroke:'#475569','stroke-width':3});
 for(let v=lo;v<=hi;v+=step){const big=v%lb===0;G.E('line',{x1:X(v),y1:y-(big?8:5),x2:X(v),y2:y+(big?8:5),stroke:'#475569','stroke-width':big?2:1.4});if(big)G.tx(X(v),y+22,String(v),{fs:sp<=24?15:14,fill:'#475569'});}
 return X;}
function winOf(vs){const mn=Math.min(...vs),mx=Math.max(...vs);if(mx<=20)return [0,20];if(mx-mn<=16){const lo=Math.max(0,Math.floor(mn/2)*2-2);return [lo,lo+Math.max(12,Math.ceil((mx-lo+2)/2)*2)];}if(mx<=100)return [0,100];return null;}
const frog=(G,x,y)=>{const f=G.E('g',{});G.tx(0,-6,'🐸',{fs:40,p:f});f.style.transform='translate('+x+'px,'+y+'px)';G.pop(f);return f;};
R.nl=async(p,G)=>{const all=p.seq.concat(p.fill!=null?[p.fill]:[]),lo=Math.floor(Math.min(...all)/10)*10,hi=Math.max(lo+10,Math.ceil(Math.max(...all)/10)*10),Y=250,X=nline(G,lo,hi,Y),fine=hi-lo<=30,fm=p.fill!=null;
 const labs=[],mark=(v,lab)=>{G.pop(G.E('circle',{cx:X(v),cy:Y,r:6,fill:'#ec4899'}),200);if(!lab)return;labs.filter(l=>Math.abs(l.x-X(v))<26).forEach(l=>{G.fade(l.t,0,200);l.x=-99;});const t=G.tx(X(v),Y+46,String(v),{fs:18,w:700,fill:'#ec4899'});G.pop(t);labs.push({x:X(v),t});};
 let cur=p.a;const fr=frog(G,X(cur),Y-22);mark(cur,true);
 if(!await G.step('เริ่มที่ '+cur,fm?['เริ่มที่ '+cur,'ต้องไปให้ถึง '+p.fill]:['เริ่มที่ '+cur],600))return;let old=[];
 for(let k=0;k<p.st.length;k++){const [o,n]=p.st[k],sg=o==='+'?1:-1,tens=Math.floor(n/10),ones=n%10,c=C[(k+1)%C.length],arcs=[];old.forEach(e=>G.fade(e,.3,300));
  if(!fm&&!await G.step((o==='+'?'+ ':MI+' ')+n,[(o==='+'?'บวก ':'ลบ ')+n],300))return;
  const jump=async(d,lab,big)=>{const nx=cur+sg*d,x0=X(cur),x1=X(nx),hh=Math.min(90,20+Math.abs(x1-x0)*.45)*(k%2?1.5:1);
   arcs.push(G.E('path',{d:'M'+x0+' '+(Y-8)+' Q'+((x0+x1)/2)+' '+(Y-8-hh*2)+' '+x1+' '+(Y-8),fill:'none',stroke:c,'stroke-width':3,'stroke-dasharray':'7 6'}));
   if(lab)arcs.push(G.tx((x0+x1)/2,Y-8-hh-14,lab,{fs:15,w:700,fill:c}));G.hop(fr,x0,Y-22,x1,Y-22,hh+10);G.sfx('pop',(nx+12)%12);cur=nx;mark(cur,big);G.cap(String(cur));
   return await G.say([String(cur)]);};
  if(tens){if(!await G.say([sg>0?'กระโดดทีละสิบ':'ถอยหลังทีละสิบ']))return;for(let i=0;i<tens;i++)if(!await jump(10,(sg>0?'+':MI)+'10',true))return;}
  if(ones){if(fine){if(!await G.say([tens?(sg>0?'แล้วกระโดดทีละหนึ่ง':'แล้วถอยทีละหนึ่ง'):(sg>0?'กระโดดทีละหนึ่ง':'ถอยทีละหนึ่ง')]))return;for(let i=0;i<ones;i++)if(!await jump(1,'',i===ones-1))return;}
   else{if(!await G.say([(sg>0?'แล้วไปต่ออีก ':'แล้วถอยอีก ')+ones]))return;if(!await jump(ones,(sg>0?'+':MI)+ones,true))return;}}
  old=arcs;if(!await G.W(300))return;}
 const res=p.seq[p.seq.length-1],full=p.a+p.st.map(([o,n])=>' '+sym(o)+' '+n).join('')+' = '+res;
 if(fm){const r=G.tx(300,40,'□ = '+p.A,{fs:34,w:700,fill:'#7c3aed'});G.pop(r);await G.fin('□ = '+p.A,['กระโดดไปทั้งหมด '+p.A,full],[r]);return;}
 const r=G.tx(300,40,full,{fs:32,w:700,fill:'#7c3aed'});G.pop(r);await G.fin(full,[full],[r]);};
R.arith=async(p,G)=>{await R[p.mode](p,G);};
/* ---------- แจกของ: ทีละรอบ คนละชิ้น / ใส่ภาชนะทีละใบ ---------- */
R.share=async(p,G)=>{const grp=p.mode==='group',m=grp?p.N/p.n2:p.n2,per=p.mode==='left'?p.per:p.N/m,sc=p.N>12?.78:.9;const ix=i=>78+(i%12)*40,iy=i=>44+Math.floor(i/12)*42;
 const it=[];for(let i=0;i<p.N;i++){const g=thing(G,ix(i),iy(i),p.e,C[0],sc);G.pop(g,200);it.push(g);}
 if(!await G.step('มีทั้งหมด '+p.N,['มีทั้งหมด '+p.N],600))return;
 const bw=Math.min(200,560/m),bx=j=>300-(m*bw)/2+j*bw+bw/2,cols=Math.min(per,5),rows=Math.ceil(per/5),sp=Math.min(28,(bw-18)/cols);
 for(let j=0;j<m;j++){if(grp){roundRect(G,bx(j)-bw/2+6,198-(rows-1)*12,bw-12,78+(rows-1)*24,'#fde68a','#b45309',14);G.tx(bx(j),292,p.box+' '+(j+1),{fs:15,w:700,fill:'#92400e'});}
  else{G.E('ellipse',{cx:bx(j),cy:238,rx:bw/2-6,ry:30+(rows-1)*14,fill:'#fff',stroke:'#94a3b8','stroke-width':3});G.tx(bx(j),298,'🧒',{fs:32});}}
 it.forEach(g=>G.svg.append(g));/* ของอยู่บนจานเสมอ */
 if(!await G.step(grp?'ใส่'+p.box+'ละ '+p.n2:'แจก '+m+' คน',grp?['ใส่'+p.box+'ละ '+p.n2]:p.mode==='left'?['แจกให้ '+m+' คน คนละ '+per]:['แจกให้ '+m+' คน','แจกทีละคน คนละหนึ่งชิ้น วนไปเรื่อย ๆ'],400))return;
 const give=p.mode==='left'?m*per:p.N;
 for(let i=0;i<give;i++){const j=grp?Math.floor(i/p.n2):i%m,s=grp?i%p.n2:Math.floor(i/m),x=bx(j)+((s%5)-(cols-1)/2)*sp,y=238-(rows-1)*12+Math.floor(s/5)*24;G.move(it[i],x-ix(i),y-iy(i),450);G.sfx('pop',i%12);
  if(grp){if(s===p.n2-1){G.cap((j+1)+' '+p.box);if(!await G.say([(j+1)+' '+p.box]))return;}else if(!await G.W(250))return;}
  else if(j===m-1){G.cap('ได้คนละ '+(s+1));if(!await G.say(['ได้คนละ '+(s+1)]))return;}else if(!await G.W(300))return;}
 if(p.mode==='left'){const lf=p.N-give,ex=it.slice(give);ex.forEach(g=>{G.glow(g);G.pulse(g);G.tc(g,0,0);});if(!await G.step('แจกไป '+give,['แจกไปแล้ว '+give],300))return;
  const eq=p.N+' '+MI+' '+Array(m).fill(per).join(' '+MI+' ')+' = '+lf,r=G.tx(300,150,eq,{fs:28,w:700,fill:'#7c3aed'});G.pop(r);await G.fin('เหลือ '+lf,['เหลือ '+lf],[r]);return;}
 G.wave(it);const r=G.tx(300,150,grp?p.N+' แบ่งทีละ '+p.n2+' ได้ '+m+' '+p.box:p.N+' แจก '+m+' คน ได้คนละ '+per,{fs:26,w:700,fill:'#7c3aed'});G.pop(r);
 await G.fin(grp?'ได้ '+m+' '+p.box:'ได้คนละ '+per,grp?['ได้ '+m+' '+p.box]:['ทุกคนได้เท่ากันพอดี'],[r]);};
/* ---------- นับในภาพ ---------- */
R.count=async(p,G)=>{const [vw,vh]=p.fig.vb,k=Math.min(560/vw,250/vh),ox=300-vw*k/2,oy=14;let n=0;
 for(const [x,y,e,fs] of p.fig.txt){const t=G.tx(ox+x*k,oy+y*k,e,{fs:(fs||30)*k*.9,a:{opacity:e===p.e?1:.3}});G.pop(t,200);}
 if(!await G.step('นับเฉพาะ '+p.e,['มานับทีละตัวกันนะ'],700))return;
 const ts=p.fig.txt.filter(x=>x[2]===p.e).sort((a,b)=>a[0]-b[0]||a[1]-b[1]);
 for(const [x,y] of ts){n++;const X=ox+x*k,Y=oy+y*k;G.pop(G.E('circle',{cx:X,cy:Y,r:22*k*1.2,fill:'none',stroke:'#ec4899','stroke-width':3}),200);G.tag(X+20*k,Y-20*k,n);G.sfx('pop',n%12);G.cap(String(n));if(!await G.say([String(n)]))return;}
 const r=G.tx(300,302,'มี '+p.e+' ทั้งหมด '+p.c,{fs:28,w:700,fill:'#7c3aed'});G.pop(r);await G.fin('ทั้งหมด '+p.c,['มีทั้งหมด '+p.c],[r]);};
/* ---------- นับขา มือ / แลกของ ---------- */
const PE={หู:'👂',มือ:'✋',ตา:'👁️'};
R.groups=async(p,G)=>{
 if(p.se){const n=p.gs[0].c,k=p.gs[0].k,sw=Math.min(90,540/n),xs=j=>300-(n*sw)/2+j*sw+sw/2,ky=Math.min(32,150/k);let run=0;
  for(let j=0;j<n;j++)G.pop(G.tx(xs(j),58,p.gs[0].e,{fs:40}));
  if(!await G.step(p.per?'ให้คนละ '+k:'1 ชิ้น แลกได้ '+k,[p.intro||(p.per?'ให้คนละ '+k:'หนึ่งชิ้น แลกได้ '+k)],600))return;
  for(let j=0;j<n;j++){G.E('line',{x1:xs(j),y1:84,x2:xs(j),y2:104,stroke:'#94a3b8','stroke-width':2});for(let i=0;i<k;i++){const y=124+i*ky,t=G.tx(xs(j),y,p.se,{fs:Math.min(26,ky)});G.pop(t,200);G.tc(t,xs(j),y);}
   run+=k;G.tag(xs(j),124+k*ky+6,run,'#ec4899',14);G.sfx('pop',j%12);G.cap(String(run));if(!await G.say([String(run)]))return;}
  const eq=Array(n).fill(k).join(' + ')+' = '+p.tot,r=G.tx(300,314,eq,{fs:26,w:700,fill:'#7c3aed'});G.pop(r);if(!await G.fin(eq,['รวม '+p.tot],[r]))return;G.tapOn(p.tot);return;}
 const n=p.gs.reduce((s,g)=>s+g.c,0),sw=Math.min(110,560/n),xs=j=>300-(n*sw)/2+j*sw+sw/2,one=p.tot<=20,leg=p.part==='ขา';let i=0,run=0;
 for(const g of p.gs)for(let c=0;c<g.c;c++){G.pop(G.tx(xs(i),78,g.e,{fs:Math.min(54,sw-8)}));i++;}
 const ks=[...new Set(p.gs.map(g=>g.k))],unit=p.gs.every(g=>g.e==='🧒')?'คนละ ':'ตัวละ ',intro=ks.map(k=>unit+k+' '+p.part);
 if(!await G.step(intro.join(' · '),intro.concat([one?'นับทีละ'+p.part+'นะ':'นับต่อไปเรื่อย ๆ นะ']),500))return;
 i=0;for(const g of p.gs)for(let c=0;c<g.c;c++){const x=xs(i),d=Math.min(15,(sw-14)/g.k),col=C[i%C.length];
  for(let k=0;k<g.k;k++){const dx=(k-(g.k-1)/2)*d,e=leg?G.E('rect',{x:x+dx-3.5,y:116,width:7,height:30,rx:3.5,fill:col}):PE[p.part]?G.tx(x+dx,130,PE[p.part],{fs:Math.round(Math.min(20,d+6))}):G.E('circle',{cx:x+dx,cy:130,r:6,fill:col});G.pop(e,180);G.tc(e,x+dx,130);
   if(one){run++;G.sfx('pop',run%12);G.cap(String(run));if(!await G.say([String(run)]))return;}}
  if(!one){run+=g.k;G.sfx('pop',i%12);G.cap(String(run));}G.tag(x,176,run,'#ec4899',15);if(!one&&!await G.say([String(run)]))return;i++;}
 const eq=p.gs.flatMap(g=>Array(g.c).fill(g.k)).join(' + ')+' = '+p.tot,r=G.tx(300,262,eq,{fs:28,w:700,fill:'#7c3aed'});G.pop(r);
 if(!await G.fin(eq,['รวม '+p.tot+' '+p.part],[r]))return;G.tapOn(p.tot);};
/* ---------- จับคู่ มากกว่า/น้อยกว่า ---------- */
R.diff=async(p,G)=>{const n=Math.max(p.a,p.b),sw=Math.min(34,460/n),x=i=>330-(n*sw)/2+i*sw+sw/2,rows=[[p.a,84,p.ea,C[0],p.na],[p.b,196,p.eb,C[1],p.nb]],els=[[],[]];
 for(let r=0;r<2;r++){const [c,y,e,col,nm]=rows[r];if(nm)G.tx(12,y,nm,{fs:17,w:700,a:{'text-anchor':'start'}});
  for(let i=0;i<c;i++){const g=thing(G,x(i),y,e,col,Math.min(1,(sw-2)/36));G.pop(g,200);els[r].push(g);}
  G.tx(580,y,String(c),{fs:28,w:700,fill:col});G.sfx('pop',r);if(!await G.step((nm?nm+' ':'')+'มี '+c,['มี '+c],300))return;}
 if(!await G.step('จับคู่ทีละคู่',['จับคู่กันทีละคู่นะ'],300))return;const m=Math.min(p.a,p.b);
 for(let i=0;i<m;i++){G.pop(G.E('line',{x1:x(i),y1:106,x2:x(i),y2:174,stroke:'#94a3b8','stroke-width':2.5,'stroke-dasharray':'4 4'}),150);G.sfx('pop',i%12);if(!await G.W(170))return;}
 const d=Math.abs(p.a-p.b),big=p.a>p.b?0:1,ex=els[big].slice(m);
 if(d){if(!await G.step('ตัวที่ไม่มีคู่',['ตัวที่ไม่มีคู่ มานับกัน'],300))return;
  for(let i=0;i<d;i++){G.glow(ex[i]);G.pulse(ex[i]);G.tag(x(m+i),rows[big][1]-30,i+1,'#e11d48',11);G.sfx('pop',i%12);G.cap(String(i+1));if(!await G.say([String(i+1)]))return;}}
 if(p.ask==='num'){const eq=Math.max(p.a,p.b)+' '+MI+' '+Math.min(p.a,p.b)+' = '+d,r=G.tx(300,284,eq,{fs:30,w:700,fill:'#7c3aed'});G.pop(r);await G.fin(eq,[Math.max(p.a,p.b)+' มากกว่า '+Math.min(p.a,p.b)+' อยู่ '+d],[r]);return;}
 const s=p.a===p.b?'จับคู่ได้พอดี จึงมีเท่ากัน':p.win+' มี'+(p.ask==='more'?'มากกว่า':'น้อยกว่า'),r=G.tx(300,284,s,{fs:28,w:700,fill:'#7c3aed'});G.pop(r);await G.fin(s,[s],[r]);};
/* ---------- เส้นจำนวน: มาก/น้อย เรียงลำดับ ปากจระเข้ ---------- */
R.line=async(p,G)=>{const w=winOf(p.vs);if(!w)return;const X=nline(G,w[0],w[1],240),mk=[],ys=[180,140,100];
 const order=p.how==='down'?p.vs.slice():p.vs.slice().sort((a,b)=>a-b);
 if(!await G.step('ยิ่งไปทางขวา ยิ่งมาก',['บนเส้นจำนวน ยิ่งไปทางขวา ยิ่งมาก'],400))return;
 for(let i=0;i<order.length;i++){const v=order[i],near=mk.filter(m=>Math.abs(X(m.v)-X(v))<34).length,y=ys[near%3],g=G.E('g',{});G.E('line',{x1:X(v),y1:y+14,x2:X(v),y2:232,stroke:C[i%C.length],'stroke-width':2.5},g);G.E('circle',{cx:X(v),cy:y,r:21,fill:C[i%C.length]},g);G.tx(X(v),y,String(v),{fs:16,w:700,fill:'#fff',p:g});G.pop(g);mk.push({v,g});G.sfx('pop',i);G.cap(String(v));if(!await G.say([String(v)]))return;}
 if(p.how==='max'||p.how==='min'||p.how==='mid'){const m=mk.find(m=>m.v===p.tg);G.pop(G.tx(X(p.tg),44,p.how==='max'?'👑':p.how==='min'?'🌱':'⭐',{fs:36}));
  const s=p.how==='max'?p.tg+' อยู่ขวาสุด จึงมากที่สุด':p.how==='min'?p.tg+' อยู่ซ้ายสุด จึงน้อยที่สุด':p.tg+' อยู่ตรงกลาง';await G.fin(s+(p.unit&&p.how!=='mid'?' ('+p.unit+')':''),[s],[m.g]);return;}
 if(p.how==='up'||p.how==='down'){const ar=G.tx(300,40,p.how==='up'?'น้อย  ➜ ➜ ➜  มาก':'น้อย  ⬅ ⬅ ⬅  มาก',{fs:24,w:700,fill:'#7c3aed'});G.pop(ar);
  if(!await G.step(p.vs.join('  '),[p.how==='up'?'เรียงจากน้อยไปมาก อ่านจากซ้ายไปขวา':'เรียงจากมากไปน้อย เริ่มจากทางขวา อ่านไปทางซ้าย'],300))return;
  for(const v of p.vs){const m=mk.find(m=>m.v===v);G.pulse(m.g);G.glow(m.g);G.sfx('pop',2);if(!await G.say([String(v)]))return;}await G.fin(p.vs.join('  '),[]);return;}
 const [a,b]=p.vs,s=p.sym,big=G.E('g',{});G.tx(222,52,String(a),{fs:46,w:700,fill:'#7c3aed',p:big});G.tx(378,52,String(b),{fs:46,w:700,fill:'#7c3aed',p:big});G.pop(big);
 if(s==='=')G.tx(300,52,'=',{fs:46,w:700,fill:'#7c3aed',p:big});
 else{const jaw=G.E('g',{},big),d=s==='>'?-1:1,tip=300-d*24,op=300+d*24,at=(t,y0,dy)=>[op+(tip-op)*t,y0+dy*t];
  G.E('path',{d:'M'+op+' 22 L'+tip+' 52 L'+op+' 82',fill:'none',stroke:'#16a34a','stroke-width':10,'stroke-linecap':'round','stroke-linejoin':'round'},jaw);
  [.3,.6].forEach(t=>{const [ux,uy]=at(t,22,30),[lx,ly]=at(t,82,-30);G.E('path',{d:'M'+(ux-4)+' '+(uy+4)+' L'+ux+' '+(uy+13)+' L'+(ux+4)+' '+(uy+4)+'Z',fill:'#fff',stroke:'#16a34a','stroke-width':1},jaw);G.E('path',{d:'M'+(lx-4)+' '+(ly-4)+' L'+lx+' '+(ly-13)+' L'+(lx+4)+' '+(ly-4)+'Z',fill:'#fff',stroke:'#16a34a','stroke-width':1},jaw);});
  const [ex,ey]=at(.78,22,30);G.E('circle',{cx:ex,cy:ey-11,r:6,fill:'#fff',stroke:'#14532d','stroke-width':2},jaw);G.E('circle',{cx:ex,cy:ey-11,r:2.5,fill:'#14532d'},jaw);
  jaw.style.transformBox='fill-box';jaw.style.transformOrigin=(d<0?'right':'left')+' center';if(!G.F)try{jaw.animate([{transform:'scaleY(1)'},{transform:'scaleY(.45)'},{transform:'scaleY(1)'}],{duration:500,iterations:4,delay:300});}catch(x){}
  if(!await G.step(a>b?a+' อยู่ทางขวาของ '+b:a+' อยู่ทางซ้ายของ '+b,['ปากจระเข้ อ้าหาเลขที่มากกว่า'],300))return;}
 await G.fin(a+' '+s+' '+b,[a+' '+s+' '+b],[big]);};
/* ---------- ก่อน หลัง ระหว่าง: กบกระโดดหนึ่งช่อง ---------- */
R.order=async(p,G)=>{const c=p.ref[0],lo=Math.max(0,c-5),X=nline(G,lo,lo+10,230);
 p.ref.forEach(v=>{G.pop(G.E('circle',{cx:X(v),cy:252,r:15,fill:'none',stroke:'#2563eb','stroke-width':3}));});
 const s0=p.how==='mid'?p.ref[0]:c,fr=frog(G,X(s0),208);
 if(!await G.step(p.how==='mid'?'ระหว่าง '+p.ref[0]+' กับ '+p.ref[1]:'เริ่มที่ '+c,p.how==='mid'?['หา '+p.ref[0]+' กับ '+p.ref[1]+' บนเส้นจำนวน']:['เริ่มที่ '+c],500))return;
 if(!await G.say([p.how==='before'?'ก่อน คือถอยไปทางซ้ายหนึ่งช่อง':p.how==='after'?'ถัดไป คือไปทางขวาหนึ่งช่อง':'ตรงกลาง คือเลขที่อยู่ระหว่างสองตัวนี้']))return;
 G.hop(fr,X(s0),208,X(p.A),208,46,650);G.sfx('pop',3);if(!await G.W(700))return;
 G.pop(G.E('circle',{cx:X(p.A),cy:230,r:9,fill:'#ec4899'}),300);const t=G.tx(X(p.A),140,String(p.A),{fs:48,w:700,fill:'#ec4899'});G.pop(t);
 await G.fin(p.how==='before'?'ก่อน '+c+' คือ '+p.A:p.how==='after'?'ถัดจาก '+c+' คือ '+p.A:'ตรงกลางคือ '+p.A,['คือ '+p.A],[t]);};
/* ---------- หลักสิบ หลักหน่วย: นับมัดละสิบ แล้วนับต่อทีละหนึ่ง ---------- */
R.pv=async(p,G)=>{const rs=[],cs=[],RX=i=>34+i*26,CX=j=>[330+(j%5)*24,62+Math.floor(j/5)*24];
 roundRect(G,14,30,272,200,'#eff6ff',null,14);roundRect(G,300,30,286,200,'#fff7ed',null,14);
 G.tx(150,16,'มัดละ 10 (สิบ)',{fs:17,w:700,fill:'#2563eb'});G.tx(443,16,'อันเดี่ยว (หน่วย)',{fs:17,w:700,fill:'#d97706'});
 for(let i=0;i<p.t0;i++){const r=rod(G,RX(i),50,'#93c5fd');G.pop(r);rs.push(r);}
 for(let j=0;j<p.u0;j++){const [x,y]=CX(j),c=G.E('rect',{x,y,width:19,height:19,rx:3,fill:'#fdba74',stroke:'#334155','stroke-width':1.3});c._b=[x,y];G.pop(c);cs.push(c);}
 if(!await G.step(p.t0+' มัด กับ '+p.u0+' อัน',['มัดหนึ่ง มีสิบอัน'],700))return;
 let t=p.t0,u=p.u0;
 if(p.reg){cs.slice(0,10).forEach(c=>c.setAttribute('fill','#fde047'));if(!await G.step('ครบ 10 อัน!',['อันเดี่ยวครบสิบ มัดรวมได้อีกหนึ่งมัด'],400))return;
  cs.slice(0,10).forEach((c,i)=>G.move(c,520-c._b[0],50+i*10-c._b[1],600));if(!await G.W(700))return;
  const nr=rod(G,520,50,'#fde047');G.pop(nr,300);cs.slice(0,10).forEach(c=>G.fade(c,0,200));G.sfx('chime');if(!await G.W(400))return;
  G.move(nr,RX(t)-520,0,900);G.sfx('whoosh');rs.push(nr);t++;u-=10;cs.slice(10).forEach((c,j)=>{const [x,y]=CX(j);G.move(c,x-c._b[0],y-c._b[1],500);});if(!await G.W(1000))return;}
 if(t&&!await G.say(['นับมัดละสิบก่อนนะ']))return;
 let run=0;for(let i=0;i<t;i++){run+=10;G.tag(RX(i)+7,168,run,'#2563eb',14);G.pulse(rs[i]);G.sfx('pop',i);G.cap(String(run));if(!await G.say([String(run)]))return;}
 if(u&&!await G.say([t?'แล้วนับต่อทีละหนึ่ง':'นับทีละหนึ่ง']))return;
 for(let j=0;j<u;j++){run++;const [x,y]=CX(j);G.tag(x+9.5,y+9.5,run,'#d97706',11);G.sfx('pop',j);G.cap(String(run));if(!await G.say([String(run)]))return;}
 const N=t*10+u,r=G.tx(300,280,t+' สิบ กับ '+u+' หน่วย = '+N,{fs:32,w:700,fill:'#7c3aed'});G.pop(r);await G.fin(t+' สิบ '+u+' หน่วย คือ '+N,[t+' สิบ กับ '+u+' หน่วย คือ '+N],[r]);};
/* ---------- เลขคู่ เลขคี่: จับคู่ทีละสอง ---------- */
R.oddeven=async(p,G)=>{const n=p.vs.length,ys=n===1?[150]:n===2?[100,215]:[70,160,250];
 if(p.share&&!await G.step('แบ่งให้สองคน',['แบ่งให้สองคน ทีละชิ้น'],200))return;
 for(let r=0;r<n;r++){const v=p.vs[r],y=ys[r],sp=Math.min(34,430/Math.ceil(v/2)),x0=p.share?118:86,xs=i=>x0+Math.floor(i/2)*sp,yy=i=>y+(i%2?18:-18);G.tx(40,y,String(v),{fs:28,w:700});
  if(p.share){G.tx(90,y-18,'🧒',{fs:22});G.tx(90,y+18,'🧒',{fs:22});}
  for(let i=0;i<v;i++){G.pop(G.E('circle',{cx:xs(i),cy:yy(i),r:9,fill:C[r]}),160);if(i%2===1)G.pop(G.E('line',{x1:xs(i),y1:y-8,x2:xs(i),y2:y+8,stroke:'#94a3b8','stroke-width':3}),150);G.sfx('pop',i%12);if(!await G.W(p.share?200:110))return;}
  const odd=v%2===1;if(odd){G.pop(G.E('circle',{cx:xs(v-1),cy:yy(v-1),r:15,fill:'none',stroke:'#e11d48','stroke-width':3}));G.pop(G.tx(xs(v-1)+22,yy(v-1)+18,'😢',{fs:18}));}
  G.pop(G.tx(565,y,odd?'คี่':'คู่',{fs:24,w:700,fill:odd?'#e11d48':'#16a34a'}));G.cap(v+(odd?' เป็นเลขคี่':' เป็นเลขคู่'));
  if(!p.share&&!await G.say([String(v),odd?'เหลือหนึ่งตัวไม่มีคู่ เป็นเลขคี่':'จับคู่ได้ครบ ไม่มีเหลือ เป็นเลขคู่']))return;}
 if(p.share){const s=p.ev?'ได้คนละ '+p.vs[0]/2+' พอดี':'เหลือหนึ่งชิ้น จึงแบ่งให้สองคนเท่ากันไม่ได้';await G.fin(s,[s]);return;}
 await G.fin(p.ev?'จับคู่ได้ครบ = เลขคู่':'เหลือ 1 ไม่มีคู่ = เลขคี่',[]);};
/* ---------- วันในสัปดาห์: วงล้อ 7 วัน ---------- */
R.week=async(p,G)=>{const cx=300,cy=165,rr=118,pos=i=>[cx+rr*Math.sin(i/7*2*Math.PI),cy-rr*Math.cos(i/7*2*Math.PI)],nd=[];
 DAYS.forEach((d,i)=>{const [x,y]=pos(i),g=G.E('g',{});G.E('circle',{cx:x,cy:y,r:33,fill:DCOL[i],stroke:'#fff','stroke-width':3},g);G.tx(x,y,d.length>4?d.slice(0,4)+'.':d,{fs:14,w:700,fill:i===1?'#3b3b4f':'#fff',p:g});G.pop(g,250);nd.push(g);});
 G.tx(cx,cy,'↻',{fs:44,fill:'#cbd5e1'});if(!await G.W(600))return;
 if(p.count){if(!await G.say(['หนึ่งสัปดาห์มีวันอะไรบ้าง มานับกัน']))return;
  for(let i=0;i<7;i++){const [x,y]=pos(i);G.tag(x+26,y-26,i+1);G.pulse(nd[i]);G.sfx('pop',i);G.cap((i+1)+' วัน'+DAYS[i]);if(!await G.say(['วัน'+DAYS[i]]))return;}
  await G.fin('หนึ่งสัปดาห์มี 7 วัน',['หนึ่งสัปดาห์มีเจ็ดวัน']);return;}
 let cur=p.st;const rg=G.E('g',{});G.E('circle',{cx:0,cy:0,r:41,fill:'none',stroke:'#3b3b4f','stroke-width':5},rg);const at=i=>{const [x,y]=pos(i);rg.style.transition=G.F?'none':'transform .45s ease-in-out';rg.style.transform='translate('+x+'px,'+y+'px)';};at(cur);
 if(!await G.step(p.why==='ord'?'วันอาทิตย์ = วันที่ 1':p.why==='yest'?'เมื่อวาน = วัน'+DAYS[p.st]:'วันนี้ = วัน'+DAYS[p.st],[p.why==='ord'?'เริ่มนับวันอาทิตย์เป็นวันที่หนึ่ง':p.why==='yest'?'เมื่อวานเป็นวัน'+DAYS[p.st]:'วันนี้วัน'+DAYS[p.st]],500))return;
 if(p.why==='ord')G.tag(pos(cur)[0]+26,pos(cur)[1]-26,1);
 const sg=p.d<0?-1:1,how=p.why==='yest'?'วันนี้ ถัดจากเมื่อวานหนึ่งวัน':p.why==='เมื่อวาน'?'เมื่อวาน ถอยหลังหนึ่งวัน':p.why==='พรุ่งนี้'?'พรุ่งนี้ เดินหน้าหนึ่งวัน':p.why==='ord'?'นับต่อไปทีละวัน':'นับไปอีก '+p.d+' วัน';
 if(!await G.say([how]))return;
 for(let k=1;k<=Math.abs(p.d);k++){cur=((cur+sg)%7+7)%7;at(cur);const [x,y]=pos(cur);G.tag(x+26,y-26,p.why==='ord'?k+1:k);G.sfx('pop',k%8);G.cap((p.why==='ord'?'วันที่ '+(k+1):k+' วัน')+' วัน'+DAYS[cur]);if(!await G.say(['วัน'+DAYS[cur]]))return;}
 const s=p.why==='ord'?'วันลำดับที่ '+(p.d+1)+' คือวัน'+DAYS[cur]:'คือวัน'+DAYS[cur];await G.fin(s+(p.d%7===0&&p.d?' (ครบ 7 วัน วนกลับมาวันเดิม)':''),[s],[nd[cur]]);};
/* ---------- เดือน ---------- */
R.month=async(p,G)=>{const pos=i=>[60+(i%6)*96,84+Math.floor(i/6)*98],nd=[],dOf=i=>i===1?28:/ยน$/.test(MON[i])?30:31;
 MON.forEach((m,i)=>{const [x,y]=pos(i),d=dOf(i),g=G.E('g',{});const col=p.how==='days'?(d===31?'#bfdbfe':d===30?'#fde68a':'#fecaca'):'#e0e7ff';roundRect(G,x-46,y-36,92,72,col,'#94a3b8',12,g);G.tx(x,y-9,m,{fs:14,w:700,p:g});
  if(p.how==='days')G.tx(x,y+17,d===28?'28/29':String(d),{fs:17,w:700,fill:'#475569',p:g});G.pop(g,220);nd.push(g);});
 if(!await G.W(600))return;const hi=i=>{G.glow(nd[i],'#f59e0b');G.pulse(nd[i]);};
 if(p.how==='count'){for(let i=0;i<12;i++){const [x,y]=pos(i);G.tag(x+42,y-34,i+1);G.sfx('pop',i%8);G.cap((i+1)+' เดือน'+MON[i]);if(!await G.say(['เดือน'+MON[i]]))return;}await G.fin('หนึ่งปีมี 12 เดือน',['หนึ่งปีมีสิบสองเดือน']);return;}
 if(p.how==='mid'){hi(p.a);G.cap('เดือน'+MON[p.a]);if(!await G.say(['เดือน'+MON[p.a]]))return;hi(p.b);G.cap('เดือน'+MON[p.b]);if(!await G.say(['เดือน'+MON[p.b]]))return;hi(p.c);await G.fin('ตรงกลางคือ '+MON[p.c],['ตรงกลางคือ เดือน'+MON[p.c]],[nd[p.c]]);return;}
 if(p.how==='first'||p.how==='last'){const i=p.how==='first'?0:11;hi(i);await G.fin(p.how==='first'?'เดือนแรก = มกราคม':'เดือนสุดท้าย = ธันวาคม',[p.how==='first'?'เดือนแรกของปี คือเดือนมกราคม':'เดือนสุดท้ายของปี คือเดือนธันวาคม'],[nd[i]]);return;}
 G.tx(300,300,'ลงท้าย "คม" มี 31 วัน · ลงท้าย "ยน" มี 30 วัน · กุมภาพันธ์ 28/29 วัน',{fs:16,w:700,fill:'#475569'});
 if(!await G.step(null,['เดือนที่ลงท้ายด้วย คม มีสามสิบเอ็ดวัน','ลงท้ายด้วย ยน มีสามสิบวัน','กุมภาพันธ์ มียี่สิบแปด หรือยี่สิบเก้าวัน'],300))return;
 hi(p.c);const d=dOf(p.c),s='เดือน'+MON[p.c]+' มี '+(d===28?'28 หรือ 29':d)+' วัน';await G.fin(s,[s],[nd[p.c]]);};
/* ---------- นาฬิกา: เข็มยาวเดิน นับทีละ 5 ---------- */
R.clock=async(p,G)=>{const cx=300,cy=160,r=120;G.E('circle',{cx,cy,r,fill:'#fff',stroke:'#3b3b4f','stroke-width':5});const sec=G.E('path',{d:'',fill:'#bfdbfe',opacity:.8});
 for(let i=1;i<=12;i++){const a=i/12*2*Math.PI;G.tx(cx+(r-22)*Math.sin(a),cy-(r-22)*Math.cos(a),String(i),{fs:18,w:700});}
 G.E('line',{x1:cx,y1:cy,x2:cx,y2:cy-58,stroke:'#3b3b4f','stroke-width':7,'stroke-linecap':'round'});
 const hand=G.E('line',{x1:cx,y1:cy,x2:cx,y2:cy-98,stroke:'#e11d48','stroke-width':5,'stroke-linecap':'round'});G.E('circle',{cx,cy,r:7,fill:'#3b3b4f'});
 if(!await G.step('เข็มยาว 1 ช่อง = 5 นาที',['เข็มยาวเดินหนึ่งช่องตัวเลข เท่ากับห้านาที','นับทีละห้านะ'],600))return;
 for(let m=5;m<=p.mins;m+=5){const a=m/60*2*Math.PI,x=cx+98*Math.sin(a),y=cy-98*Math.cos(a);hand.setAttribute('x2',x);hand.setAttribute('y2',y);
  sec.setAttribute('d',m>=60?'M'+cx+' '+(cy-r+8)+' A'+(r-8)+' '+(r-8)+' 0 1 1 '+(cx-.01)+' '+(cy-r+8)+'Z':'M'+cx+' '+cy+' L'+cx+' '+(cy-r+8)+' A'+(r-8)+' '+(r-8)+' 0 '+(m>30?1:0)+' 1 '+(cx+(r-8)*Math.sin(a))+' '+(cy-(r-8)*Math.cos(a))+'Z');
  G.pop(G.tx(cx+(r+20)*Math.sin(a),cy-(r+20)*Math.cos(a),String(m),{fs:14,w:700,fill:'#e11d48'}),200);G.sfx('pop',(m/5)%8);G.cap(m+' นาที');if(!await G.say([String(m)]))return;}
 await G.fin(p.mins===30?'ครึ่งชั่วโมง = 30 นาที':'1 ชั่วโมง = 60 นาที',[p.mins===30?'ครึ่งชั่วโมง เข็มยาวเดินครึ่งรอบ เท่ากับสามสิบนาที':'หนึ่งชั่วโมง เข็มยาวเดินครบรอบ เท่ากับหกสิบนาที'],[hand]);};
/* ---------- โหล สัปดาห์ คู่ ---------- */
R.unit=async(p,G)=>{let run=0;
 if(p.how==='dozen'){if(!await G.step('1 โหล = 12',[p.half?'หนึ่งโหล มีสิบสองชิ้น ครึ่งโหลคือครึ่งหนึ่ง':'หนึ่งโหล มีสิบสองชิ้น มานับกัน'],300))return;
  for(let d=0;d<p.n;d++){const ox=p.n>1?(d?320:40):180;roundRect(G,ox-10,40,260,120,'#fef3c7','#d97706',16);
   if(d){G.cap('อีก 1 โหล');if(!await G.say(['อีกหนึ่งโหล']))return;}
   for(let i=0;i<12;i++){const x=ox+20+(i%6)*40,y=75+Math.floor(i/6)*50,g=G.E('g',{});G.tx(x,y,p.e,{fs:28,p:g});G.pop(g,200);G.sfx('pop',i%8);
    if(p.half&&i>=6){G.fade(g,.25);if(!await G.W(120))return;}else{G.tc(g,x,y);run++;G.tag(x+14,y-16,run,'#ec4899',10);G.cap(String(run));if(!await G.say([String(run)]))return;}}}
  const r=G.tx(300,255,p.half?'1 โหล = 12 · ครึ่งโหล = 6':p.n>1?Array(p.n).fill(12).join(' + ')+' = '+p.c:'1 โหล = 12',{fs:28,w:700,fill:'#7c3aed'});G.pop(r);
  if(!await G.fin(p.half?'ครึ่งโหล = 6':p.n+' โหล = '+p.c,[p.half?'ครึ่งโหล คือหก':p.n+' โหล คือ '+p.c],[r]))return;}
 else if(p.how==='week'){if(!await G.step('1 สัปดาห์ = 7 วัน',['หนึ่งสัปดาห์มีเจ็ดวัน'],300))return;
  for(let w=0;w<p.n;w++){for(let i=0;i<7;i++){const x=90+i*66,y=64+w*62,g=G.E('g',{});G.E('circle',{cx:x,cy:y,r:24,fill:DCOL[i]},g);G.tx(x,y,DAYS[i].slice(0,2),{fs:13,w:700,fill:i===1?'#3b3b4f':'#fff',p:g});G.pop(g,180);G.tc(g,x,y);run++;G.sfx('pop',i);if(!await G.W(130))return;}
   G.tag(565,64+w*62,run,'#ec4899',16);G.cap('สัปดาห์ที่ '+(w+1)+' → '+run+' วัน');if(!await G.say([String(run)]))return;}
  const r=G.tx(300,312,Array(p.n).fill(7).join(' + ')+' = '+p.c+' วัน',{fs:28,w:700,fill:'#7c3aed'});G.pop(r);if(!await G.fin(p.n+' สัปดาห์ = '+p.c+' วัน',[p.n+' สัปดาห์ คือ '+p.c+' วัน'],[r]))return;}
 else{if(!await G.step('1 คู่ = 2 ข้าง',['หนึ่งคู่ มีสองข้าง'],300))return;
  for(let i=0;i<p.n;i++){roundRect(G,300-(p.n*130)/2+i*130+8,96,114,90,'#f1f5f9','#cbd5e1',16);for(let k=0;k<2;k++){const x=300-(p.n*130)/2+i*130+43+k*44,g=G.E('g',{});G.tx(x,140,p.e,{fs:46,p:g});G.pop(g);G.tc(g,x,140);run++;G.tag(x,196,run);G.sfx('pop',run);G.cap(String(run));if(!await G.say([String(run)]))return;}}
  if(!await G.fin(p.n+' คู่ = '+p.c+' ข้าง',[p.n+' คู่ มี '+p.c+' ข้าง']))return;}
 G.tapOn(p.half?6:p.c);};
/* ---------- ใครสูง / หนักที่สุด ---------- */
function kid(G,x,base,h,nm,col,p){const g=G.E('g',{},p);const hr=16;G.E('rect',{x:x-16,y:base-h+hr*2,width:32,height:h-hr*2,rx:12,fill:col},g);G.E('circle',{cx:x,cy:base-h+hr,r:hr,fill:'#fcd9b6',stroke:'#c08457','stroke-width':2},g);
 G.E('circle',{cx:x-5,cy:base-h+hr-2,r:2.2,fill:'#3b3b4f'},g);G.E('circle',{cx:x+5,cy:base-h+hr-2,r:2.2,fill:'#3b3b4f'},g);G.E('path',{d:'M'+(x-5)+' '+(base-h+hr+6)+' Q'+x+' '+(base-h+hr+10)+' '+(x+5)+' '+(base-h+hr+6),stroke:'#3b3b4f','stroke-width':1.6,fill:'none'},g);
 G.tx(x,base+18,nm,{fs:16,w:700,p:g});return g;}
R.rank=async(p,G)=>{const H={},col={},hi=w=>/สูง|หนัก|ใหญ่|เร็ว/.test(w);const hs=[190,145,100];p.ord.forEach((n,i)=>{H[n]=hs[i];col[n]=C[i];});const base=280;
 const rel=async(s,draw)=>{const [a,w,b]=p.rel[s],t=a+' '+w+'กว่า '+b;draw(s,a,w,b);G.sfx('pop',s);return await G.step(t,[t],1300);};
 if(p.dim==='h'){
  for(let s=0;s<2;s++)if(!await rel(s,(s,a,w,b)=>{const g=G.E('g',{}),xa=s?380:90,xb=s?500:210;kid(G,xa,base,H[a],a,col[a],g);kid(G,xb,base,H[b],b,col[b],g);G.E('line',{x1:xa-30,y1:base-H[a],x2:xb+30,y2:base-H[a],stroke:'#94a3b8','stroke-width':2,'stroke-dasharray':'5 5'},g);G.pop(g);}))return;
  G.svg.innerHTML='';if(!await G.step('เรียง: '+p.ord.join(' > '),['เอามาเรียงกัน'],300))return;
  p.ord.forEach((n,i)=>{const g=kid(G,170+i*130,base,H[n],n,col[n]);G.pop(g);});G.tx(300,30,'สูง ➜ ➜ เตี้ย',{fs:22,w:700,fill:'#7c3aed'});}
 else if(p.dim==='s'||p.dim==='r'){const sz={};p.ord.forEach((n,i)=>sz[n]=[72,56,40][i]);
  for(let s=0;s<2;s++)if(!await rel(s,(s,a,w,b)=>{const g=G.E('g',{});
   if(p.dim==='s'){G.tx(s?380:110,170,'🧒',{fs:sz[a],p:g});G.tx(s?380:110,230,a,{fs:16,w:700,p:g});G.tx(s?500:230,170,'🧒',{fs:sz[b],p:g});G.tx(s?500:230,230,b,{fs:16,w:700,p:g});G.pop(g);}
   else{const y=s?190:90,fa=hi(w),xa=fa?260:180,xb=fa?180:260;G.E('line',{x1:40,y1:y+26,x2:300,y2:y+26,stroke:'#cbd5e1','stroke-width':2},g);const ra=G.tx(40,y,'🏃',{fs:40,p:g}),rb=G.tx(40,y,'🏃',{fs:40,p:g});G.tx(xa,y-30,a,{fs:14,w:700,p:g});G.tx(xb,y-30,b,{fs:14,w:700,p:g});G.tx(320,y,'🏁',{fs:30,p:g});G.pop(g);G.move(ra,xa-40,0,1000);G.move(rb,xb-40,0,1000);}}))return;
  G.svg.innerHTML='';if(!await G.step('เรียง: '+p.ord.join(' > '),['เอามาเรียงกัน'],300))return;
  if(p.dim==='s')p.ord.forEach((n,i)=>{const g=G.E('g',{});G.tx(160+i*140,160,'🧒',{fs:sz[n],p:g});G.tx(160+i*140,225,n,{fs:18,w:700,p:g});G.pop(g);});
  else p.ord.forEach((n,i)=>{const x=[300,170,430][i],h=[150,110,80][i],g=G.E('g',{});G.E('rect',{x:x-60,y:290-h,width:120,height:h,fill:['#facc15','#cbd5e1','#fdba74'][i],rx:8},g);G.tx(x,290-h/2,String(i+1),{fs:36,w:700,fill:'#fff',p:g});G.tx(x,290-h-36,'🏃',{fs:40,p:g});G.tx(x,290-h-72,n,{fs:16,w:700,p:g});G.pop(g);});
  G.tx(300,30,p.dim==='s'?'ตัวใหญ่ ➜ ➜ ตัวเล็ก':'ถึงก่อน = วิ่งเร็วกว่า',{fs:22,w:700,fill:'#7c3aed'});}
 else{const bal=(x,l,r)=>{const g=G.E('g',{});G.E('path',{d:'M'+x+' 250 l-24 30 h48 z',fill:'#94a3b8'},g);const bm=G.E('g',{},g);bm.style.transformBox='view-box';bm.style.transformOrigin=x+'px 250px';G.E('line',{x1:x-100,y1:250,x2:x+100,y2:250,stroke:'#475569','stroke-width':6,'stroke-linecap':'round'},bm);
   G.tx(x-100,222,'🧒',{fs:34,p:bm});G.tx(x+100,222,'🧒',{fs:34,p:bm});G.tx(x-100,186,l,{fs:15,w:700,p:bm});G.tx(x+100,186,r,{fs:15,w:700,p:bm});bm.style.transition=G.F?'none':'transform 1s';G.pop(g);return bm;};
  for(let s=0;s<2;s++){let bm;if(!await rel(s,(s,a,w,b)=>{const heavy=w==='หนัก'?a:b;bm=bal(s?450:150,a,b);setTimeout(()=>{bm.style.transform='rotate('+(heavy===a?-12:12)+'deg)';},G.F?0:400);if(G.F)bm.style.transform='rotate('+(heavy===a?-12:12)+'deg)';}))return;}
  G.svg.innerHTML='';if(!await G.step('เรียง: '+p.ord.join(' > '),['เอามาเรียงกัน'],300))return;p.ord.forEach((n,i)=>{const g=G.E('g',{});G.tx(160+i*140,160,'🧒',{fs:60-i*10,p:g});G.tx(160+i*140,225,n,{fs:18,w:700,p:g});G.pop(g);});G.tx(300,40,'หนัก ➜ ➜ เบา',{fs:22,w:700,fill:'#7c3aed'});}
 if(!await G.W(700))return;const i=p.ord.indexOf(p.want);let st=null;if(p.dim!=='r')st=G.tx((p.dim==='h'?170+i*130:160+i*140),p.dim==='h'?base-H[p.want]-26:80,'⭐',{fs:36});
 const s='ดังนั้น '+p.want+' '+p.ask+'ที่สุด';await G.fin(s,[s],st?[st]:[]);};
/* ---------- แถวซ้าย-ขวา: นิ้วชี้เลื่อนไป ---------- */
R.row=async(p,G)=>{const n=p.items.length,x=i=>300-(n*90)/2+i*90+45;p.items.forEach((e,i)=>{G.pop(G.tx(x(i),130,e,{fs:50}));});
 G.pop(G.tx(80,236,'✋ ซ้ายมือของหนู',{fs:18,w:700,fill:'#2563eb'}));G.pop(G.tx(520,236,'ขวามือของหนู 🤚',{fs:18,w:700,fill:'#d97706'}));
 if(!await G.step('ซ้าย-ขวา ดูจากมือของหนูเอง',['ซ้ายกับขวา ดูจากมือของหนูเองนะ'],900))return;
 const i0=p.ref!=null?p.ref:p.side==='r'?n-1:0,ring=G.E('rect',{x:-38,y:88,width:76,height:84,rx:14,fill:'none',stroke:'#ec4899','stroke-width':5}),hd=G.tx(0,196,'👆',{fs:34});
 const at=(i,ms)=>{[ring,hd].forEach(e=>{e.style.transition=G.F?'none':'transform '+(ms||500)+'ms ease-in-out';e.style.transform='translate('+x(i)+'px,0px)';});};at(i0);G.pop(ring);
 if(p.ref!=null){if(!await G.step('เริ่มที่ภาพนี้',['เริ่มที่ภาพนี้',p.side==='r'?'แล้วไปทางขวาหนึ่งช่อง':'แล้วไปทางซ้ายหนึ่งช่อง'],600))return;at(p.ix,700);G.sfx('pop',2);if(!await G.W(800))return;}
 const s=p.ref!=null?'ถัดไปทาง'+(p.side==='r'?'ขวา':'ซ้าย')+' คือภาพนี้':p.side==='r'?'ภาพที่อยู่ใกล้มือขวาที่สุด คือขวาสุด':'ภาพที่อยู่ใกล้มือซ้ายที่สุด คือซ้ายสุด';await G.fin(s,[s],[ring]);};
/* ---------- หันหน้า/หันหลัง (3 มิติ) ---------- */
function kidCard(view,hand){/* hand = มือของเด็กที่ยก ('right'/'left') · ด้านหน้า มือขวาของเด็กอยู่ฝั่งซ้ายของเรา */
 const front=view==='front',hx=(hand==='right')===front?55:145,ox=hx===55?145:55;
 return '<svg viewBox="0 0 200 240" width="100%" height="100%"><ellipse cx="100" cy="228" rx="60" ry="8" fill="#000" opacity=".12"/>'+
  '<rect x="70" y="100" width="60" height="85" rx="18" fill="'+(front?'#60a5fa':'#3b82f6')+'"/><rect x="74" y="182" width="20" height="44" rx="8" fill="#334155"/><rect x="106" y="182" width="20" height="44" rx="8" fill="#334155"/>'+
  '<path d="M'+(hx===55?72:128)+' 112 L'+hx+' 50" stroke="#fcd9b6" stroke-width="14" stroke-linecap="round"/><circle cx="'+hx+'" cy="44" r="12" fill="#fcd9b6" stroke="#c08457" stroke-width="2"/>'+
  '<path d="M'+(ox===55?72:128)+' 112 L'+ox+' 168" stroke="#fcd9b6" stroke-width="14" stroke-linecap="round"/>'+
  '<circle cx="100" cy="70" r="30" fill="'+(front?'#fcd9b6':'#4b3621')+'" stroke="#c08457" stroke-width="2"/>'+(front?'<circle cx="89" cy="66" r="3.5" fill="#3b3b4f"/><circle cx="111" cy="66" r="3.5" fill="#3b3b4f"/><path d="M90 80 Q100 88 110 80" stroke="#3b3b4f" stroke-width="2.5" fill="none" stroke-linecap="round"/>':'<path d="M74 60 Q100 40 126 60" stroke="#2b1d12" stroke-width="6" fill="none"/>')+
  '<text x="'+hx+'" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#e11d48">มือ'+(hand==='right'?'ขวา':'ซ้าย')+'ของเขา</text>'+
  '<text x="100" y="236" text-anchor="middle" font-size="13" fill="#475569">'+(front?'หันหน้าหาเรา':'หันหลังให้เรา')+'</text></svg>';}
R.turn=async(p,ctx)=>{const side=face=>((p.hand==='right')===(face==='front')?'ซ้าย':'ขวา'),hd=p.hand==='right'?'ขวา':'ซ้าย',f2=p.face==='front'?'back':'front';
 const L=[['เขา'+(p.face==='front'?'หันหน้าหาเรา':'หันหลังให้เรา')+' มือ'+hd+'ของเขา อยู่ฝั่ง'+side(p.face)+'ของเรา'],['ถ้าเขาหมุนตัวไป'+(p.face==='front'?'หันหลัง':'หันหน้า')+' มือ'+hd+'ของเขา จะไปอยู่ฝั่ง'+side(f2)+'ของเรา'],[p.face==='front'?'หันหน้าหาเรา ซ้ายขวาจะกลับกับของเรา':'หันหลังให้เรา ซ้ายขวาตรงกับของเรา']];
 if(ctx.rec){L.forEach(s=>ctx.rec.push(...s));return;}
 const st=ctx.stage;st.innerHTML='';st.style.perspective='900px';const wrap=document.createElement('div');wrap.className='x2turn';
 wrap.innerHTML='<div class="x2flip"><div class="fa">'+kidCard(p.face,p.hand)+'</div><div class="fb">'+kidCard(f2,p.hand)+'</div></div><div class="x2lr"><span>⬅ ซ้ายของเรา</span><span>ขวาของเรา ➡</span></div>';st.append(wrap);
 const fl=wrap.querySelector('.x2flip'),cap=s=>ctx.cap.textContent=s,W=async ms=>ctx.fast?true:await ctx.W(ms),say=async s=>ctx.fast?true:ctx.say?await ctx.say(s):await W(2600);if(ctx.fast)fl.style.transition='none';
 const step=async(s,ms)=>{cap(s[0]);const r=await Promise.all([say(s),W(ms)]);return r[0]&&r[1];};
 if(!await step(L[0],1500))return;fl.style.transform='rotateY(180deg)';try{ctx.SFX.whoosh()}catch(e){}if(!await step(L[1],1600))return;
 fl.style.transform='rotateY(0deg)';cap(L[2][0]);try{ctx.SFX.chime()}catch(e){}await say(L[2]);};
/* ---------- กระจก / ในน้ำ ---------- */
R.mirror=async(p,G)=>{const w=p.water,big=p.letter?84:72,L=c=>'['+c+']';
 if(w){G.E('rect',{x:40,y:165,width:520,height:150,fill:'#bfdbfe',opacity:.7});for(let i=0;i<4;i++)G.tx(90+i*130,300,'〰',{fs:22,fill:'#60a5fa'});G.tx(530,185,'น้ำ',{fs:16,w:700,fill:'#2563eb'});}else{G.E('rect',{x:294,y:28,width:12,height:272,rx:4,fill:'#93c5fd'});G.E('line',{x1:298,y1:40,x2:298,y2:290,stroke:'#fff','stroke-width':2,opacity:.8});G.tx(300,316,'กระจก',{fs:15,w:700,fill:'#2563eb'});}
 const ox=w?300:170,oy=w?100:165;const o=G.tx(ox,oy,p.ch,{fs:big,w:700,fill:'#3b3b4f'});G.pop(o);
 if(!await G.step(p.same?'ลองพลิกซ้ายเป็นขวา':'ของจริง',p.same?['ลองพลิกซ้ายเป็นขวาดูนะ']:p.letter?['นี่คือตัว',L(p.ch)]:['นี่คือของจริง'],600))return;
 const m=G.tx(ox,oy,p.ch,{fs:big,w:700,fill:'#ec4899'});m.style.transformBox='fill-box';m.style.transformOrigin='center';
 const to=w?'translate(0px,130px) scaleY(-1)':(p.same?'translate(260px,0px) scaleX(-1)':'translate(260px,0px) scaleX(-1)');
 if(!G.F){try{m.animate(p.same?[{transform:'translate(260px,0px) scaleX(1)'},{transform:to}]:[{transform:'translate(0px,0px) scale(1,1)'},{transform:to}],{duration:1400,easing:'ease-in-out'});}catch(x){}}m.style.transform=to;G.sfx('whoosh');
 if(!await G.step(null,[p.same?'พลิกซ้ายเป็นขวา':w?'เงาในน้ำ บนจะกลับเป็นล่าง':'ส่องกระจก ซ้ายจะกลับเป็นขวา'],1500))return;
 if(p.letter){await G.fin('ตัว '+p.ch+' → '+p.to,['ตัว',L(p.ch),w?'ในน้ำ จะกลายเป็นตัว':'ในกระจก จะกลายเป็นตัว',L(p.to)],[m]);return;}
 await G.fin(p.same?'พลิกแล้วยังเหมือนเดิม':w?'ในน้ำ ภาพกลับหัว':'ในกระจก ซ้ายกลับเป็นขวา',[p.same?'พลิกแล้วยังเหมือนเดิม ซ้ายกับขวาจึงเหมือนกัน':w?'ในน้ำ ภาพจะกลับหัว':'ในกระจก ภาพจะกลับซ้ายเป็นขวา'],[m]);};
/* ---------- ดวงอาทิตย์ เงา ---------- */
R.sun=async(p,G)=>{G.E('rect',{x:0,y:0,width:600,height:250,fill:'#e0f2fe'});G.E('rect',{x:0,y:250,width:600,height:80,fill:'#bbf7d0'});
 G.tx(60,300,'ตะวันออก',{fs:16,w:700,fill:'#b45309'});G.tx(540,300,'ตะวันตก',{fs:16,w:700,fill:'#7c3aed'});G.tx(60,275,'(ดวงอาทิตย์ขึ้น)',{fs:12,fill:'#475569'});G.tx(540,275,'(ดวงอาทิตย์ตก)',{fs:12,fill:'#475569'});
 G.E('path',{d:'M60 245 Q300 -155 540 245',fill:'none',stroke:'#fbbf24','stroke-width':2,'stroke-dasharray':'6 8'});
 const sh=G.E('line',{x1:300,y1:250,x2:300,y2:250,stroke:'#334155','stroke-width':12,'stroke-linecap':'round',opacity:.35});G.tx(300,226,'🧍',{fs:46});
 const sun=G.tx(60,245,'☀️',{fs:42});const at={m:.13,n:.5,e:.87},lb=[['เช้า',.13],['เที่ยง',.5],['เย็น',.87]];
 const put=t=>{const x=60+480*t,y=245-200*Math.sin(Math.PI*t);sun.setAttribute('x',x);sun.setAttribute('y',y);const alt=Math.sin(Math.PI*t),L=26+150*(1-alt),dir=t<.5?1:-1;sh.setAttribute('x2',300+(Math.abs(t-.5)<.02?0:dir*L));};
 lb.forEach(([n,t])=>{const x=60+480*t,y=245-200*Math.sin(Math.PI*t);G.tx(x,y-34,n,{fs:15,w:700,fill:'#b45309'});});
 G.cap('ดวงอาทิตย์ขึ้นทิศตะวันออก ตกทิศตะวันตก');const sp=G.say(['ดวงอาทิตย์ขึ้นทางทิศตะวันออก แล้วตกทางทิศตะวันตก','ดูเงาของเด็กนะ']);
 for(let i=0;i<=40;i++){put(.03+.94*i/40);if(!await G.W(80))return;}if(!await sp)return;
 const T=at[p.at];for(let i=0;i<=15;i++){put(.97+(T-.97)*i/15);if(!await G.W(40))return;}put(T);
 await G.fin(p.at==='m'?'เช้า: ดวงอาทิตย์ทิศตะวันออก เงายาวไปทางตะวันตก':p.at==='n'?'เที่ยง: ดวงอาทิตย์สูงสุด เงาสั้นที่สุด':'เย็น: ดวงอาทิตย์ทิศตะวันตก เงายาวไปทางตะวันออก',
  p.at==='m'?['ตอนเช้า ดวงอาทิตย์อยู่ทางทิศตะวันออก','เงาจะยาว และชี้ไปทางทิศตะวันตก']:p.at==='n'?['ตอนเที่ยง ดวงอาทิตย์อยู่สูงที่สุด','เงาจึงสั้นที่สุด']:['ตอนเย็น ดวงอาทิตย์อยู่ทางทิศตะวันตก','เงาจะยาว และชี้ไปทางทิศตะวันออก'],[sun,sh]);};
R.lamp=async(p,G)=>{G.E('rect',{x:0,y:0,width:600,height:330,fill:'#1e293b'});G.E('rect',{x:0,y:250,width:600,height:80,fill:'#334155'});const L=p.from==='l';
 const lx=L?70:530,d=L?1:-1;/* วาดไฟฉายเอง ให้หัวไฟหันเข้าหาตุ๊กตาเสมอ */G.E('rect',{x:L?lx-30:lx-6,y:150,width:36,height:20,rx:5,fill:'#64748b'});G.E('path',{d:'M'+(lx+d*6)+' 146 L'+(lx+d*26)+' 138 L'+(lx+d*26)+' 182 L'+(lx+d*6)+' 174 Z',fill:'#94a3b8'});
 const beam=G.E('path',{d:L?'M96 160 L300 120 L300 250 Z':'M504 160 L300 120 L300 250 Z',fill:'#fef08a',opacity:0});G.fade(beam,.45,700);G.tx(300,215,'🧸',{fs:56});
 if(!await G.step('แสงมาจากทาง'+(L?'ซ้าย':'ขวา'),['ไฟฉายส่องมาจากทาง'+(L?'ซ้าย':'ขวา')],1100))return;
 const sh=G.E('ellipse',{cx:L?400:200,cy:252,rx:80,ry:14,fill:'#000',opacity:0});G.fade(sh,.6,600);
 await G.fin('เงาอยู่ทาง'+(L?'ขวา':'ซ้าย'),['ตุ๊กตาบังแสงไว้','เงาจึงไปอยู่ฝั่งตรงข้าม คือทาง'+(L?'ขวา':'ซ้าย')]);};
R.compass=async(p,G)=>{const cx=300,cy=165,DIR=[['เหนือ',0,-110],['ตะวันออก',150,0],['ใต้',0,110],['ตะวันตก',-150,0]];
 G.E('line',{x1:cx,y1:cy-90,x2:cx,y2:cy+90,stroke:'#cbd5e1','stroke-width':3});G.E('line',{x1:cx-110,y1:cy,x2:cx+110,y2:cy,stroke:'#cbd5e1','stroke-width':3});
 if(p.count){G.tx(cx,cy,'🧭',{fs:50});for(const [i,[n,dx,dy]] of DIR.entries()){G.pop(G.tx(cx+dx,cy+dy,n,{fs:20,w:700}));G.tag(cx+dx+(dx?0:46),cy+dy+(dy?0:-28),i+1);G.sfx('pop',i);G.cap('ทิศ'+n);if(!await G.say(['ทิศ'+n]))return;}
  await G.fin('ทิศหลักมี 4 ทิศ',['ทิศหลักมีสี่ทิศ']);return;}
 DIR.forEach(([n,dx,dy])=>G.pop(G.tx(cx+dx,cy+dy,n,{fs:20,w:700,fill:n==='ตะวันออก'?'#e11d48':n==='ตะวันตก'?'#2563eb':'#3b3b4f'})));
 G.tx(cx,cy,'🧍',{fs:50});G.pop(G.tx(cx,cy-60,'⬆',{fs:28,fill:'#2563eb'}));if(!await G.step('หันหน้าไปทางทิศเหนือ',['หันหน้าไปทางทิศเหนือ'],900))return;
 const h=G.tx(cx+74,cy+34,'🤚 ขวามือ',{fs:18,w:700,fill:'#e11d48'});G.pop(h);if(!await G.step('ขวามือ = ทิศตะวันออก',['มือขวาชี้ไปทางทิศตะวันออก'],600))return;
 G.pop(G.tx(cx-74,cy+34,'ซ้ายมือ ✋',{fs:18,w:700,fill:'#2563eb'}));await G.fin('ขวามือ = ตะวันออก · ซ้ายมือ = ตะวันตก',['มือซ้ายชี้ไปทางทิศตะวันตก'],[h]);};
/* ---------- ตาชั่ง ---------- */
R.scale=async(p,G)=>{const cx=300,py=120;G.E('path',{d:'M'+cx+' '+py+' L'+(cx-50)+' 300 L'+(cx+50)+' 300 Z',fill:'#cbd5e1'});
 const bm=G.E('g',{});bm.style.transformBox='view-box';bm.style.transformOrigin=cx+'px '+py+'px';G.E('line',{x1:cx-180,y1:py,x2:cx+180,y2:py,stroke:'#475569','stroke-width':8,'stroke-linecap':'round'},bm);
 const pan=(x)=>{const g=G.E('g',{},bm);G.E('path',{d:'M'+(x-70)+' '+(py+60)+' Q'+x+' '+(py+100)+' '+(x+70)+' '+(py+60)+' Z',fill:'#fde68a',stroke:'#b45309','stroke-width':2},g);G.E('line',{x1:x,y1:py,x2:x-60,y2:py+60,stroke:'#94a3b8'},g);G.E('line',{x1:x,y1:py,x2:x+60,y2:py+60,stroke:'#94a3b8'},g);return g;};
 const pl=pan(cx-180),pr=pan(cx+180);const tilt=d=>{bm.style.transition=G.F?'none':'transform .9s ease-in-out';bm.style.transform='rotate('+d+'deg)';};
 if(p.txt){G.tx(cx-180,py+40,p.l,{fs:24,w:700,p:bm});G.tx(cx+180,py+40,p.r,{fs:24,w:700,p:bm});tilt(-8);if(!await G.step('ลองชั่งดู',['ลองชั่งดูนะ'],900))return;
  G.pop(G.tx(cx-180,py+125,'= '+p.sum,{fs:24,w:700,fill:'#2563eb',p:bm}));if(!await G.say([p.l+' = '+p.sum]))return;G.pop(G.tx(cx+180,py+125,'= '+p.sum,{fs:24,w:700,fill:'#2563eb',p:bm}));if(!await G.say([p.r+' = '+p.sum]))return;
  tilt(0);await G.fin('ทั้งสองข้างได้ '+p.sum+' เท่ากัน',['สองข้างเท่ากัน ตาชั่งจึงตรง']);return;}
 const em=s=>[...s].filter(c=>c.trim()&&!/️/.test(c));let L=em(p.l),Rr=em(p.r);const draw=(arr,x,g)=>{g.querySelectorAll('.it').forEach(e=>e.remove());arr.forEach((e,i)=>{const t=G.tx(x-((arr.length-1)*28)/2+i*28,py+44,e,{fs:28,p:g});t.classList.add('it');});};
 draw(L,cx-180,pl);draw(Rr,cx+180,pr);
 if(p.add){tilt(p.add==='l'?14:-14);if(!await G.step('ข้าง'+(p.add==='l'?'ขวา':'ซ้าย')+'หนักกว่า',['ข้างที่หนักกว่า จะเอียงลง'],1100))return;const tgt=p.add==='l'?L:Rr,one=tgt[0];
  for(let k=1;k<=p.need;k++){tgt.push(one);draw(tgt,p.add==='l'?cx-180:cx+180,p.add==='l'?pl:pr);G.sfx('pop',k);G.cap('วางเพิ่ม '+k+' ชิ้น');const left=p.need-k;tilt(left?(p.add==='l'?14:-14)*left/p.need:0);if(!await G.step(null,[String(k)],800))return;}
  await G.fin('เพิ่ม '+p.need+' ชิ้น ตาชั่งตรง',['เพิ่ม '+p.need+' ชิ้น สองข้างเท่ากัน ตาชั่งจึงตรง']);return;}
 tilt(14);if(!await G.step('ลองชั่งดู',['ลองชั่งดูนะ'],1000))return;tilt(p.tilt==='l'?-14:p.tilt==='r'?14:0);
 await G.fin(p.tilt?'ข้างที่หนักกว่าเอียงลง':'หนักเท่ากัน ตาชั่งตรง',[p.tilt?'ข้างที่หนักกว่า จะเอียงลง':'หนักเท่ากัน ตาชั่งจึงอยู่ระดับเดียวกัน']);};
/* ---------- เทน้ำ ---------- */
R.pour=async(p,G)=>{const gl=p.n===3?[[110,60,150],[300,90,100],[490,130,70]]:[[180,60,150],[420,130,70]],lv=[],bt=[];
 gl.forEach(([x,w,h])=>{const b=G.E('g',{});G.tx(x,40,'🍶',{fs:36,p:b});b.style.transformBox='fill-box';b.style.transformOrigin='center';bt.push(b);G.E('rect',{x:x-w/2,y:290-h,width:w,height:h,fill:'none',stroke:'#475569','stroke-width':3,rx:4});const r=G.E('rect',{x:x-w/2+3,y:287,width:w-6,height:0,fill:'#7cc6f2'});lv.push([r,w,h]);});
 const sp=G.step('น้ำขวดละเท่ากัน',['น้ำขวดละเท่ากัน เทลงแก้วคนละใบ'],900);bt.forEach(b=>{b.style.transition=G.F?'none':'transform .6s';b.style.transform='rotate(120deg)';});if(!await sp)return;
 const vol=4800;for(let s=1;s<=20;s++){lv.forEach(([r,w,h])=>{const hh=Math.min(h-6,vol/(w-6)*s/20);r.setAttribute('y',287-hh);r.setAttribute('height',hh);});if(!await G.W(70))return;}
 bt.forEach(b=>{b.style.transform='rotate(0deg)';});
 await G.fin('น้ำเท่ากัน',['น้ำยังเท่ากัน','แก้วแคบ น้ำจึงดูสูง แก้วกว้าง น้ำจึงดูเตี้ย'],lv.map(x=>x[0]));};
/* ---------- น้ำสามสถานะ ---------- */
R.water=async(p,G)=>{const nd=[[100,'🧊','น้ำแข็ง','ของแข็ง'],[300,'💧','น้ำ','ของเหลว'],[500,'♨️','ไอน้ำ','แก๊ส']],ng=[];
 nd.forEach(([x,e,n,s])=>{const g=G.E('g',{});G.E('circle',{cx:x,cy:160,r:52,fill:'#f1f5f9',stroke:'#94a3b8','stroke-width':3},g);G.tx(x,150,e,{fs:40,p:g});G.tx(x,192,n,{fs:15,w:700,p:g});G.tx(x,228,s,{fs:13,fill:'#475569',p:g});G.pop(g);ng.push(g);});
 const AR={melt:[100,300,'top','ร้อนขึ้น → ละลาย','#ef4444','ร้อนขึ้น น้ำแข็งละลายเป็นน้ำ'],boil:[300,500,'top','ร้อนมาก → เดือด/ระเหย','#ef4444','ร้อนมาก น้ำกลายเป็นไอ ลอยขึ้นไป'],cond:[500,300,'bot','เย็นลง → เป็นหยดน้ำ','#3b82f6','เย็นลง ไอน้ำกลายเป็นหยดน้ำ'],freeze:[300,100,'bot','เย็นมาก → แข็งตัว','#3b82f6','เย็นมาก น้ำแข็งตัวเป็นน้ำแข็ง']};
 const pa={};Object.entries(AR).forEach(([k,[a,b,sd,t,c]])=>{const y=sd==='top'?100:220,yy=sd==='top'?70:250,on=p.tr.includes(k);pa[k]=G.E('path',{d:'M'+(a+(b>a?40:-40))+' '+y+' Q'+((a+b)/2)+' '+(sd==='top'?40:280)+' '+(b+(b>a?-40:40))+' '+y,fill:'none',stroke:c,'stroke-width':on?5:2,opacity:on?1:.25});
  G.tx((a+b)/2,yy+(sd==='top'?-14:14),t,{fs:on?16:13,w:700,fill:c,a:{opacity:on?1:.35}});});
 G.tx(200,310,'0 องศา: น้ำแข็ง ⇄ น้ำ',{fs:13,fill:'#475569'});G.tx(400,310,'100 องศา: น้ำเดือด',{fs:13,fill:'#475569'});
 if(!await G.step('น้ำมี 3 สถานะ',['น้ำมีสามสถานะ','ของแข็ง ของเหลว และแก๊ส'],600))return;
 if(p.node!=null){const s=nd[p.node][2]+' เป็น'+nd[p.node][3];await G.fin(s,[s],[ng[p.node]]);return;}
 for(const k of p.tr){const [a,b]=AR[k],s=[a,b].map(x=>ng[nd.findIndex(n=>n[0]===x)]);G.pulse(s[0]);
  /* อนุภาควิ่งตามลูกศร */const dot=G.tx(a,AR[k][2]==='top'?100:220,AR[k][2]==='top'?'🔥':'❄️',{fs:22});dot.style.transition=G.F?'none':'transform 1.2s ease-in-out';setTimeout(()=>{dot.style.transform='translate('+(b-a)+'px,0px)';},G.F?0:50);if(G.F)dot.style.transform='translate('+(b-a)+'px,0px)';
  if(!await G.step(AR[k][3],[AR[k][5]],1300))return;G.fade(dot,0,300);G.pulse(s[1]);G.glow(s[1]);G.sfx('pop',2);}
 await G.fin(p.tr.map(k=>AR[k][3]).join(' · '),[],p.tr.map(k=>pa[k]));};
R.season=async(p,G)=>{const ss=[['☀️','ฤดูร้อน','มี.ค. - พ.ค.','ฤดูร้อน ช่วงเดือนมีนาคม ถึงพฤษภาคม'],['🌧️','ฤดูฝน','มิ.ย. - ต.ค.','ฤดูฝน ช่วงเดือนมิถุนายน ถึงตุลาคม'],['❄️','ฤดูหนาว','พ.ย. - ก.พ.','ฤดูหนาว ช่วงเดือนพฤศจิกายน ถึงกุมภาพันธ์']],gs=[];
 for(let i=0;i<3;i++){const x=110+i*190,g=G.E('g',{});roundRect(G,x-80,60,160,200,['#fef3c7','#dbeafe','#e0f2fe'][i],'#94a3b8',18,g);const ic=G.tx(x,120,ss[i][0],{fs:58,p:g});G.tx(x,190,ss[i][1],{fs:20,w:700,p:g});G.tx(x,225,ss[i][2],{fs:14,fill:'#475569',p:g});G.pop(g);gs.push(g);
  if(!G.F)try{ic.animate([{transform:'translateY(0px)'},{transform:'translateY(-8px)'},{transform:'translateY(0px)'}],{duration:900,iterations:2});}catch(x){}
  if(p.s===-1)G.tag(x,40,i+1);G.sfx('pop',i);G.cap(ss[i][1]);if(!await G.say([ss[i][1]]))return;}
 if(p.s===-1){await G.fin('ประเทศไทยมี 3 ฤดู',['ประเทศไทยมีสามฤดู']);return;}
 await G.fin(ss[p.s][1]+' ('+ss[p.s][2]+')',[ss[p.s][3]],[gs[p.s]]);};
R.rain=async(p,G)=>{G.E('rect',{x:0,y:250,width:600,height:80,fill:'#60a5fa'});G.tx(120,282,'ทะเล แม่น้ำ',{fs:16,w:700,fill:'#fff'});
 const sun=G.tx(150,60,'☀️',{fs:48});G.pop(sun);if(!G.F)try{sun.animate([{transform:'rotate(0deg)'},{transform:'rotate(360deg)'}],{duration:6000,iterations:2});}catch(x){}
 const vs=[];for(let i=0;i<4;i++){const v=G.tx(110+i*45,230,'〰',{fs:24,fill:'#94a3b8'});vs.push(v);if(!G.F)try{v.animate([{transform:'translateY(0px)',opacity:1},{transform:'translateY(-150px)',opacity:0}],{duration:1500,delay:i*250,iterations:3});}catch(x){}}
 if(!await G.step('น้ำระเหยเป็นไอ ลอยขึ้นไป',['แดดร้อน น้ำระเหยกลายเป็นไอ ลอยขึ้นไป'],1800))return;
 const cl=G.tx(420,70,'☁️',{fs:76});G.pop(cl,600);if(!await G.step('ไอน้ำรวมกันเป็นเมฆ',['ไอน้ำรวมกันเป็นเมฆ'],900))return;
 cl.textContent='🌧️';for(let i=0;i<7;i++){const d=G.tx(375+i*15,122,'💧',{fs:18});if(!G.F)try{d.animate([{transform:'translateY(0px)'},{transform:'translateY(125px)',opacity:.2}],{duration:900,delay:i*120,iterations:3});}catch(x){}}
 await G.fin('เมฆ → ฝน',['เมฆหนักขึ้น ก็ตกลงมาเป็นฝน'],[cl]);};
/* ---------- อวัยวะ ---------- */
R.body=async(p,G)=>{const cx=300;G.E('circle',{cx,cy:66,r:42,fill:'#fde2c8',stroke:'#c08457','stroke-width':3});G.E('rect',{x:cx-12,y:104,width:24,height:18,fill:'#fde2c8'});
 G.E('rect',{x:cx-62,y:120,width:124,height:140,rx:28,fill:'#fde2c8',stroke:'#c08457','stroke-width':3});G.E('rect',{x:cx-98,y:128,width:30,height:112,rx:14,fill:'#fde2c8',stroke:'#c08457','stroke-width':2});G.E('rect',{x:cx+68,y:128,width:30,height:112,rx:14,fill:'#fde2c8',stroke:'#c08457','stroke-width':2});
 G.E('rect',{x:cx-46,y:256,width:36,height:66,rx:12,fill:'#fde2c8',stroke:'#c08457','stroke-width':2});G.E('rect',{x:cx+10,y:256,width:36,height:66,rx:12,fill:'#fde2c8',stroke:'#c08457','stroke-width':2});
 G.E('circle',{cx:cx-14,cy:60,r:4,fill:'#3b3b4f'});G.E('circle',{cx:cx+14,cy:60,r:4,fill:'#3b3b4f'});G.E('path',{d:'M'+(cx-2)+' 66 l4 10 h-6',stroke:'#c08457','stroke-width':2,fill:'none'});G.E('path',{d:'M'+(cx-12)+' 86 Q'+cx+' 94 '+(cx+12)+' 86',stroke:'#c0392b','stroke-width':3,fill:'none'});
 G.E('ellipse',{cx:cx-42,cy:66,rx:7,ry:12,fill:'#fde2c8',stroke:'#c08457','stroke-width':2});G.E('ellipse',{cx:cx+42,cy:66,rx:7,ry:12,fill:'#fde2c8',stroke:'#c08457','stroke-width':2});
 const IN={สมอง:[cx,44,'🧠',26],ปอด:[cx-26,162,'🫁',30],หัวใจ:[cx+14,170,'❤️',22],กระเพาะอาหาร:[cx-8,218,'🟠',22]},ie={};
 Object.entries(IN).forEach(([n,[x,y,e,fs]])=>{ie[n]=G.tx(x,y,e,{fs,a:{opacity:p.os.includes(n)?1:.25}});});
 if(ie['หัวใจ']&&p.os.includes('หัวใจ')&&!G.F)try{ie['หัวใจ'].animate([{transform:'scale(1)'},{transform:'scale(1.25)'},{transform:'scale(1)'}],{duration:700,iterations:6});}catch(x){}
 const AT={สมอง:[cx,44],ปอด:[cx-26,162],หัวใจ:[cx+14,170],กระเพาะอาหาร:[cx-8,218],ตา:[cx+14,60],หู:[cx+42,66],จมูก:[cx,72],ปาก:[cx,88],ฟัน:[cx,88],คอ:[cx,112]};
 if(!await G.step('ดูตำแหน่งในร่างกาย',['มาดูตำแหน่งในร่างกายกัน'],600))return;
 for(const [i,o] of p.os.entries()){const [x,y]=AT[o],lx=i%2?520:80,ly=80+i*70;G.pop(G.E('line',{x1:x,y1:y,x2:lx+(i%2?-50:50),y2:ly,stroke:'#e11d48','stroke-width':2.5}),300);G.pop(G.E('circle',{cx:x,cy:y,r:14,fill:'none',stroke:'#e11d48','stroke-width':3}));G.pop(G.tx(lx,ly,o,{fs:22,w:700,fill:'#e11d48'}));G.sfx('pop',i);G.cap(o);if(!await G.say([o]))return;}
 await G.fin(p.why||p.os.join(' '),[]);};
/* ---------- พยางค์: ปรบมือทีละพยางค์ ---------- */
const SYS={'ฬิ':'ลิ','ศะ':'สะ'};/* พยางค์ที่อ่านแยกแล้วเครื่องอ่านเพี้ยน → อ่านตามเสียงจริง (บนจอยังเขียนเหมือนเดิม) */
R.syll=async(p,G)=>{const n=p.rows.length,ys=n===1?[150]:[70,160,250],hiG=[];
 for(let r=0;r<n;r++){const [w,ss]=p.rows[r],y=ys[r],on=r===p.hi;G.tx(90,y,w,{fs:n===1?36:24,w:700,fill:on?'#3b3b4f':'#64748b'});G.cap(w);if(!await G.say([w]))return;
  for(let i=0;i<ss.length;i++){const x=(n===1?210:200)+i*(n===1?110:90),g=G.E('g',{});roundRect(G,x-40,y-26,80,52,on?C[i%C.length]:'#cbd5e1',null,14,g);G.tx(x,y,ss[i],{fs:22,w:700,fill:'#fff',p:g});G.pop(g);if(on)hiG.push(g);
   const cl=G.tx(x,y-40,'👏',{fs:20});G.pop(cl,200);G.sfx('pop',i+4);if(!await G.W(n===1?150:380))return;if(n===1&&!await G.say([SYS[ss[i]]||ss[i]]))return;}
  G.pop(G.tx(560,y,ss.length+'',{fs:30,w:700,fill:on?'#ec4899':'#94a3b8'}));if(n>1&&!await G.say([ss.length+' พยางค์']))return;}
 const [w,ss]=p.rows[p.hi];if(n>1){G.cap(ss.join(' - '));if(!await G.say(ss.map(x=>SYS[x]||x)))return;}
 await G.fin(w+' อ่านว่า '+ss.join('-')+' = '+ss.length+' พยางค์',[w+' มี '+ss.length+' พยางค์'],hiG);};
/* ---------- ตัวสะกด ---------- */
R.final=async(p,G)=>{const n=p.ws.length,ys=n===1?[130]:[70,160,250];
 if(p.none){const w=p.ws[0],cl=clus(w),x0=300-(cl.length-1)*31;cl.forEach((c,i)=>G.pop(G.tx(x0+i*62,130,c,{fs:70,w:700})));G.cap(w);if(!await G.say([w]))return;const r=G.tx(300,240,'ไม่มีตัวสะกด → แม่ ก กา',{fs:28,w:700,fill:'#7c3aed'});G.pop(r);
  await G.fin(w+' ไม่มีตัวสะกด จึงอยู่ในแม่ ก กา',[w+' ไม่มีตัวสะกด','จึงอยู่ในแม่ ก กา'],[r]);return;}
 for(let r=0;r<n;r++){const w=p.ws[r],cl=clus(w),f=finalOf(w),y=ys[r],fs=n===1?70:44,gap=n===1?62:42,x0=300-(cl.length-1)*gap/2;let fi=-1;if(f)for(let i=cl.length-1;i>=0;i--)if(cl[i][0]===f){fi=i;break;}
  cl.forEach((c,i)=>{const t=G.tx(x0+i*gap,y,c,{fs,w:700,fill:'#3b3b4f'});G.pop(t,200);});G.cap(w);if(!await G.say([w]))return;
  if(fi>=0){const t=G.tx(x0+fi*gap,y,cl[fi],{fs,w:700,fill:'#e11d48'});G.pulse(t);G.pop(G.tx(x0+fi*gap,y+(n===1?62:34),'ตัวสะกด',{fs:n===1?18:13,w:700,fill:'#e11d48'}));if(n>1)G.pop(G.tx(560,y,maeOf(f),{fs:16,w:700,fill:'#e11d48'}));if(!await G.say(['ตัวสะกดคือ',f]))return;}
  else{if(n>1)G.tx(560,y,'ไม่มี',{fs:16,fill:'#94a3b8'});if(!await G.say(['ไม่มีตัวสะกด']))return;}G.sfx('pop',r);}
 const w=p.ws[p.hi],f=finalOf(w);if(n===1){const r=G.tx(300,270,'ตัวสะกด '+f+' → '+maeOf(f)+'  ('+MAE[maeOf(f)].split('').join(' ')+')',{fs:24,w:700,fill:'#7c3aed'});G.pop(r);}
 await G.fin(p.ask?w+' มีตัวสะกด '+f+' จึงเป็น'+p.ask:w+' มีตัวสะกด '+f+' อยู่ใน'+maeOf(f),p.ask?[w,'จึงเป็น'+p.ask]:n>1?[w+' มีตัวสะกด']:[f,'อยู่ใน'+maeOf(f)]);};
/* ---------- ประสมคำ: อ่านแบบเดียวกับโจทย์ (บ ประสมสระอิ น เป็นตัวสะกด) แล้วเลื่อนมารวมเป็นคำ ---------- */
const VN={'า':'สระอา','ิ':'สระอิ','ี':'สระอี','ึ':'สระอึ','ื':'สระอือ','ือ':'สระอือ','ุ':'สระอุ','ู':'สระอู','เ-ะ':'สระเอะ','เ':'สระเอ','แ':'สระแอ','โ':'สระโอ','ไ':'สระไอ','ใ':'สระใอ','ะ':'สระอะ','ำ':'สระอำ'};
const spellSay=ps=>{const v=ps.findIndex(s=>VN[s.replace(/◌/g,'')]);if(v<0)return [ps.join(' + ')];return ps.map((s,i)=>i===v?'ประสม'+VN[s.replace(/◌/g,'')]:i>v?s+' เป็นตัวสะกด':s);};
R.spell=async(p,G)=>{const n=p.parts.length,gap=120,x0=300-(n-1)*gap/2,ps=[],pl=[];
 p.parts.forEach((s,i)=>{const g=G.E('g',{});roundRect(G,x0+i*gap-44,70,88,70,C[i%C.length],null,16,g);G.tx(x0+i*gap,105,s,{fs:34,w:700,fill:'#fff',p:g});G.pop(g);ps.push(g);if(i)pl.push(G.pop(G.tx(x0+i*gap-gap/2,105,'+',{fs:30,w:700})));});
 if(!await G.step(p.parts.join(' + '),spellSay(p.parts),900))return;
 pl.forEach(t=>G.fade(t,0,250));ps.forEach((g,i)=>G.move(g,300-(x0+i*gap),80,800));G.sfx('whoosh');if(!await G.W(900))return;ps.forEach(g=>G.fade(g,0,300));
 const w=G.tx(300,190,p.w,{fs:84,w:700,fill:'#7c3aed'});G.pop(w,500);await G.fin(p.parts.join(' ')+' อ่านว่า '+p.w,['อ่านว่า',p.w],[w]);};

/* ======================================================================
   ภาพเฉลยของหัวข้อชุดเพิ่ม 6 (26 ต.ค. 69) · ข้อมูลภาพมากับข้อในคลัง (q.x2) ตรวจกับเฉลยแล้วตอนสร้างคลัง
   ====================================================================== */
const INK='#3b3b4f';
const trOf=t=>{const r=t[5];if(!r)return '';if(r==='h')return 'translate('+2*t[0]+' 0) scale(-1 1)';if(r==='v')return 'translate(0 '+2*t[1]+') scale(1 -1)';if(r[0]==='r')return 'rotate('+r.slice(1)+' '+t[0]+' '+t[1]+')';return '';};
/* วาดรูปแบบเดียวกับ figSVG ของ engine ลงในภาพเฉลย (ย่อ/ขยายได้) */
function drawFig(G,f,x,y,w,h,par){const vb=f.vb||[100,100];const s=G.E('svg',{x,y,width:w,height:h,viewBox:'0 0 '+vb[0]+' '+vb[1],overflow:'visible'},par);
 (f.polys||[]).forEach(q=>G.E('polygon',{points:q.p.map(p=>p.join(',')).join(' '),fill:q.f||'none',stroke:q.s||INK,'stroke-width':q.w||2.5,'stroke-linejoin':'round'},s));
 (f.circles||[]).forEach(c=>G.E('circle',{cx:c[0],cy:c[1],r:c[2],fill:c[3]||'none',stroke:INK,'stroke-width':2.5},s));
 (f.paths||[]).forEach(c=>G.E('path',{d:c[0],fill:c[1]||'none','stroke-width':c[2]||2.5,stroke:c[3]||INK,'stroke-linejoin':'round','stroke-linecap':'round'},s));
 (f.lines||[]).forEach(l=>{const a={x1:l[0],y1:l[1],x2:l[2],y2:l[3],stroke:INK,'stroke-width':l[4]||3,'stroke-linecap':'round'};if(l[5])a['stroke-dasharray']='6 5';G.E('line',a,s);});
 (f.txt||[]).forEach(t=>{const e=G.tx(t[0],t[1],t[2],{fs:t[3]||22,fill:t[4]||INK,p:s});const tr=trOf(t);if(tr)e.setAttribute('transform',tr);});
 return s;}
function shPath(k,cx,cy,r){if(k==='c')return 'M'+(cx-r)+' '+cy+' a'+r+' '+r+' 0 1 0 '+2*r+' 0 a'+r+' '+r+' 0 1 0 '+(-2*r)+' 0 Z';
 if(k==='s'){const d=Math.round(r*.85);return 'M'+(cx-d)+' '+(cy-d)+' H'+(cx+d)+' V'+(cy+d)+' H'+(cx-d)+' Z';}
 if(k==='t')return 'M'+cx+' '+(cy-r)+' L'+(cx+r)+' '+(cy+Math.round(r*.75))+' L'+(cx-r)+' '+(cy+Math.round(r*.75))+' Z';
 if(k==='h'){const f=(a,b)=>(cx+r*a).toFixed(0)+' '+(cy+r*b).toFixed(0);return 'M'+f(0,.85)+' C'+f(-1.35,-.15)+' '+f(-.65,-1.1)+' '+f(0,-.4)+' C'+f(.65,-1.1)+' '+f(1.35,-.15)+' '+f(0,.85)+' Z';}
 const pts=[];if(k==='st'){for(let i=0;i<10;i++){const rr=i%2?r*.45:r;pts.push([cx+rr*Math.sin(i*Math.PI/5),cy-rr*Math.cos(i*Math.PI/5)]);}}else{const n=+k.slice(1);for(let i=0;i<n;i++)pts.push([cx+r*Math.sin(2*Math.PI*i/n),cy-r*Math.cos(2*Math.PI*i/n)]);}
 return 'M'+pts.map(p=>p[0].toFixed(0)+' '+p[1].toFixed(0)).join(' L')+' Z';}
const arrowTo=(G,x1,y1,x2,y2,col,par)=>{const g=G.E('g',{},par),a=Math.atan2(y2-y1,x2-x1),h=13;G.E('line',{x1,y1,x2,y2,stroke:col,'stroke-width':5,'stroke-linecap':'round'},g);
 G.E('path',{d:'M'+x2+' '+y2+' L'+(x2-h*Math.cos(a-.5))+' '+(y2-h*Math.sin(a-.5))+' L'+(x2-h*Math.cos(a+.5))+' '+(y2-h*Math.sin(a+.5))+' Z',fill:col},g);return g;};
/* ---------- ปริศนาภาพพยัญชนะ: ภาพ → ชื่อ → พยัญชนะตัวแรก → รวมเป็นคำ ---------- */
R.rebus=async(p,G)=>{const n=p.ps.length,gap=Math.min(150,520/n),x=i=>300-(n-1)*gap/2+i*gap,pics=[],tiles=[];
 p.ps.forEach(([e])=>pics.push(G.pop(G.tx(0,0,e,{fs:58}))));pics.forEach((t,i)=>{t.setAttribute('x',x(i));t.setAttribute('y',58);});
 if(!await G.step('นึกชื่อภาพทีละภาพ',['นึกชื่อภาพทีละภาพ แล้วเอาพยัญชนะตัวแรกมาเรียงกัน'],500))return;
 for(let i=0;i<n;i++){const [e,nm,c]=p.ps[i];G.pulse(pics[i]);G.pop(G.tx(x(i),112,nm,{fs:22,w:700,fill:'#475569'}));
  const t=G.E('g',{});roundRect(G,x(i)-30,140,60,62,C[i%C.length],null,14,t);G.tx(x(i),172,c,{fs:40,w:700,fill:'#fff',p:t});G.pop(t);tiles.push(t);G.sfx('pop',i);G.cap(nm+' → '+c);
  if(!await G.say([nm+' คือ '+c]))return;}
 const tw=66,x0=300-(n-1)*tw/2;tiles.forEach((t,i)=>G.move(t,x0+i*tw-x(i),100,700));G.sfx('whoosh');if(!await G.W(800))return;
 if(p.pic)G.pop(G.tx(x0+n*tw+30,272,'= '+p.pic,{fs:52}));
 await G.fin(p.ps.map(x=>x[2]).join(' + ')+' อ่านว่า '+p.w,['อ่านว่า',p.w],tiles);};
/* ---------- ถอดรหัส: ชี้คอลัมน์ในตารางทีละตัว ---------- */
R.code=async(p,G)=>{const n=p.tab.length,cw=Math.min(66,560/n),x=i=>300-(n*cw)/2+i*cw+cw/2,col={},num={},let_={};
 p.tab.forEach(([c,d],i)=>{col[c]=i;num[c]=d;let_[d]=c;roundRect(G,x(i)-cw/2,16,cw,46,'#fef3c7',INK,0);roundRect(G,x(i)-cw/2,62,cw,46,'#fff',INK,0);G.tx(x(i),39,c,{fs:28,w:700});G.tx(x(i),85,String(d),{fs:26,w:700,fill:'#2563eb'});});
 const hl=G.E('rect',{x:-cw/2,y:11,width:cw,height:102,rx:8,fill:'none',stroke:'#ec4899','stroke-width':5,opacity:0});
 if(p.dir==='f'&&p.e)G.pop(G.tx(70,215,p.e,{fs:62}));
 if(!await G.step(p.dir==='f'?'สะกดชื่อภาพทีละตัว':'ดูตัวเลขทีละตัว',[p.dir==='f'?'สะกดชื่อภาพทีละตัว แล้วดูตัวเลขที่อยู่ใต้พยัญชนะ':'ดูตัวเลขทีละตัว แล้วดูพยัญชนะที่อยู่ข้างบน'],400))return;
 const L=[...p.w],sx=i=>300-(L.length-1)*80/2+i*80,out=[];
 for(let i=0;i<L.length;i++){const c=L[i],d=num[c],j=col[c];hl.setAttribute('opacity',1);hl.style.transition=G.F?'none':'transform .45s';hl.style.transform='translate('+x(j)+'px,0px)';
  const g=G.E('g',{});roundRect(G,sx(i)-32,150,64,56,'#fef3c7',INK,12,g);G.tx(sx(i),178,c,{fs:30,w:700,p:g});roundRect(G,sx(i)-32,214,64,56,'#dbeafe',INK,12,g);G.tx(sx(i),242,String(d),{fs:30,w:700,fill:'#2563eb',p:g});G.pop(g);out.push(g);
  G.sfx('pop',i);G.cap(p.dir==='f'?c+' = '+d:d+' = '+c);if(!await G.say([p.dir==='f'?c+' คือ '+d:d+' คือ '+c]))return;if(!await G.W(250))return;}
 hl.setAttribute('opacity',0);const code=L.map(c=>num[c]).join(' ');
 await G.fin(p.w+' = '+code,p.dir==='f'?[p.w+' เขียนเป็น '+code]:['อ่านว่า',p.w],out);};
/* ---------- รูปซ้อนทับ: ยกออกมาทีละชั้น ---------- */
R.layer=async(p,G)=>{const ox=14,oy=60,els=[];
 p.sh.forEach(([k,x,y,r,c])=>els.push(G.E('path',{d:shPath(k,ox+x,oy+y,r),fill:c,stroke:INK,'stroke-width':3,'stroke-linejoin':'round'})));
 const nest=!!p.nest,order=nest?[0,1,2]:[2,1,0],LB=nest?['นอกสุด','ตรงกลาง','ข้างในสุด']:['ชั้นบนสุด','ชั้นกลาง','ชั้นล่างสุด'],rowY=i=>68+i*96;
 const SAY=nest?[n=>n+' อยู่นอกสุด ล้อมรูปอื่นไว้',n=>n+' อยู่ตรงกลาง',n=>n+' อยู่ข้างในสุด']:[n=>n+' อยู่ชั้นบนสุด เห็นเส้นครบ ไม่มีรูปไหนบัง',n=>n+' อยู่ชั้นกลาง',n=>n+' อยู่ชั้นล่างสุด ถูกรูปอื่นทับ'];
 if(!await G.step(nest?'ดูว่ารูปไหนล้อมรูปไหน':'ยกรูปออกมาทีละชั้น',[nest?'ดูว่ารูปไหนล้อมรูปไหนไว้':'ลองยกรูปออกมาทีละชั้น จากข้างบนลงมา'],500))return;
 const rows=[];
 for(let s=0;s<3;s++){const i=order[s],[k,x,y,r,c]=p.sh[i],nm=p.nm[i];G.glow(els[i],'#ec4899');
  const g=G.E('g',{});G.E('path',{d:shPath(k,0,0,Math.min(r,36)),fill:c,stroke:INK,'stroke-width':3,'stroke-linejoin':'round'},g);g.style.transform='translate('+(ox+x)+'px,'+(oy+y)+'px)';
  if(!nest)G.fade(els[i],.25,500);G.move(g,360,rowY(s),700);G.sfx('whoosh');G.pop(G.tx(500,rowY(s),LB[s],{fs:20,w:700,fill:'#7c3aed'}));rows.push(g);G.cap(LB[s]+': '+nm);
  if(!await G.say([SAY[s](nm)]))return;els[i].style.filter='';}
 const want={top:0,mid:1,bottom:2,out:0,in:2}[p.ask];await G.fin(LB[want]+': '+p.nm[order[want]],['คำตอบคือ'+p.nm[order[want]]],[rows[want]]);};
/* ---------- ตารางอุปมา: ดูแถวบน แล้วทำแถวล่างแบบเดียวกัน ---------- */
R.matrix=async(p,G)=>{const f=p.qv&&p.qv.fig,af=p.opts&&p.opts[p.ans]&&p.opts[p.ans].fig;if(!f||!af)return;const S=1.42,ox=12,oy=12,CL=[[55,55],[155,55],[55,155],[155,155]],cc=i=>[ox+CL[i][0]*S,oy+CL[i][1]*S];
 drawFig(G,f,ox,oy,210*S,210*S);
 const hlr=(a,b)=>G.E('rect',{x:ox+6*S,y:oy+(a?106:6)*S,width:198*S,height:98*S,rx:14,fill:'none',stroke:'#ec4899','stroke-width':6});
 const h1=hlr(0);G.pop(h1);const a1=arrowTo(G,cc(0)[0]+34,cc(0)[1]-52,cc(1)[0]-34,cc(1)[1]-52,'#ec4899');G.pop(a1);
 G.pop(G.tx(450,70,'แถวบน',{fs:20,w:700,fill:'#475569'}));G.pop(G.tx(450,110,p.lab,{fs:24,w:700,fill:'#ec4899'}));
 if(!await G.step(p.lab,['ดูแถวบนก่อน',p.say],600))return;
 G.fade(h1,0,300);const h2=hlr(1);G.pop(h2);G.pop(arrowTo(G,cc(2)[0]+34,cc(2)[1]-52,cc(3)[0]-34,cc(3)[1]-52,'#7c3aed'));G.pop(G.tx(450,200,'แถวล่าง ทำแบบเดียวกัน',{fs:18,w:700,fill:'#475569'}));
 if(!await G.step('แถวล่างทำแบบเดียวกัน',['แถวล่างก็ต้องเปลี่ยนแบบเดียวกัน',p.res],600))return;
 const [x3,y3]=cc(3);G.E('rect',{x:x3-46*S,y:y3-46*S,width:92*S,height:92*S,fill:'#fff'});const g=G.E('g',{});drawFig(G,af,-46*S,-46*S,92*S,92*S,g);g.style.transform='translate(470px,265px)';G.move(g,x3,y3,800);G.sfx('whoosh');
 if(!await G.W(900))return;await G.fin(p.lab,['คำตอบคือรูปนี้'],[g]);};
/* ---------- บล็อก: หยิบก้อนสีชมพูออก / วางเพิ่ม แล้วนับ ---------- */
function isoCubes(G,g,mark,ox,oy,s){const R_=g.length,C_=Math.max(...g.map(r=>r.length)),dx=s*.5,dy=s*.4,H=(r,c)=>(g[r]&&g[r][c])||0,cubes=[];
 for(let r=0;r<R_;r++)for(let c=0;c<C_;c++)for(let z=0;z<H(r,c);z++)cubes.push([r,c,z]);
 cubes.sort((a,b)=>a[0]-b[0]||a[2]-b[2]||a[1]-b[1]);const isM=(r,c,z)=>(mark||[]).some(m=>m[0]===r&&m[1]===c&&m[2]===z),out=[];
 for(const [r,c,z] of cubes){const d=R_-1-r,x=ox+c*s+d*dx,y=oy-z*s-d*dy,col=isM(r,c,z)?'#f472b6':'#f6a04d',grp=G.E('g',{});
  const P=pts=>G.E('polygon',{points:pts.map(p=>p.join(',')).join(' '),stroke:INK,'stroke-width':2,'stroke-linejoin':'round'},grp);
  P([[x,y],[x+s,y],[x+s,y-s],[x,y-s]]).setAttribute('fill',col);P([[x,y-s],[x+s,y-s],[x+s+dx,y-s-dy],[x+dx,y-s-dy]]).setAttribute('fill',col==='#f472b6'?'#f9a8d4':'#f9c08a');P([[x+s,y],[x+s+dx,y-dy],[x+s+dx,y-s-dy],[x+s,y-s]]).setAttribute('fill',col==='#f472b6'?'#db2777':'#c2410c');
  out.push({r,c,z,g:grp,m:isM(r,c,z),cx:x+s/2+dx/2,cy:y-s-dy/2});}
 return out;}
R.blkrm=async(p,G)=>{const s=46,R_=p.g.length,C_=Math.max(...p.g.map(r=>r.length)),W=C_*s+R_*s*.5,ox=(p.add?230:300)-W/2,cs=isoCubes(G,p.g,p.mark,ox,290,s);
 if(!p.add){if(!await G.step('หยิบสีชมพูออก '+p.take+' ก้อน',['หยิบก้อนสีชมพูออก '+p.take+' ก้อน'],300))return;
  cs.filter(c=>c.m).forEach((c,i)=>{G.move(c.g,0,-160,700);G.fade(c.g,0,700);});G.sfx('whoosh');if(!await G.W(900))return;}
 if(!await G.say([p.add?'นับบล็อกในภาพก่อน':'แล้วนับก้อนที่เหลือ ทีละชั้น']))return;
 const left=cs.filter(c=>!c.m).sort((a,b)=>a.z-b.z||b.r-a.r||a.c-b.c);let n=0;
 for(const c of left){n++;G.tag(c.cx,c.cy,n,'#7c3aed',12);G.sfx('pop',n%12);G.cap(String(n));if(!await G.say([String(n)]))return;}
 if(p.add){if(!await G.step('เพิ่มอีก '+p.take+' ก้อน',['เพิ่มมาอีก '+p.take,'นับต่อจาก '+n+' นะ'],200))return;
  for(let i=0;i<p.take;i++){n++;const x=470+(i%2)*56,y=150+Math.floor(i/2)*60,g=G.E('g',{});G.E('rect',{x:x-22,y:y-22,width:44,height:44,rx:4,fill:'#86efac',stroke:INK,'stroke-width':2},g);G.pop(g);G.tag(x,y,n,'#16a34a',12);G.sfx('pop',n%12);G.cap(String(n));if(!await G.say([String(n)]))return;}}
 await G.fin(p.add?'รวม '+n+' ก้อน':'เหลือ '+n+' ก้อน',[p.add?'รวม '+n+' ก้อน':'เหลือ '+n+' ก้อน']);};
/* ---------- พับตัดกระดาษ: คลี่ครึ่งซ้ายออกมาให้เห็นรูที่เกิดเหมือนเงาในกระจก ---------- */
const PW=160,PH=120;
function holeD(h,ox,oy,side){const t=h[0],y=oy+(t==='sq'||t==='tri'?h[2]:h[1]),X=x=>ox+(side==='R'?PW/2+x:PW/2-x);
 if(t==='semi'){const r=h[2];return 'M'+X(0)+' '+(y-r)+' A'+r+' '+r+' 0 0 '+(side==='R'?1:0)+' '+X(0)+' '+(y+r)+' Z';}
 if(t==='sq'){const s=h[3],cx=X(h[1]);return 'M'+(cx-s/2)+' '+(y-s/2)+' h'+s+' v'+s+' h'+(-s)+' Z';}
 if(t==='tri'){const s=h[3],cx=X(h[1]),d=side==='R'?1:-1;return 'M'+(cx-d*s/2)+' '+(y-s/2)+' L'+(cx+d*s/2)+' '+y+' L'+(cx-d*s/2)+' '+(y+s/2)+' Z';}
 const s=h[2],e=X(PW/2),w=side==='R'?-s:s;return 'M'+e+' '+(y-s/2)+' h'+w+' v'+s+' h'+(-w);}
R.fold=async(p,G)=>{const S=2,ox=300-PW/2*S,oy=30,P=(d,c,par)=>G.E('path',{d,fill:c,stroke:INK,'stroke-width':2.5/S,'stroke-linejoin':'round'},par);
 const root=G.E('g',{});root.setAttribute('transform','translate('+ox+' '+oy+') scale('+S+')');
 const right=G.E('g',{},root);P('M'+PW/2+' 0 h'+PW/2+' v'+PH+' h'+(-PW/2)+' Z','#fff7d6',right);p.holes.forEach(h=>P(holeD(h,0,0,'R'),'#cbd5e1',right));
 const left=G.E('g',{},root);P('M0 0 h'+PW/2+' v'+PH+' h'+(-PW/2)+' Z','#fef3c7',left);p.holes.forEach(h=>P(holeD(h,0,0,'L'),'#cbd5e1',left));
 left.style.transformBox='view-box';left.style.transformOrigin=PW/2+'px 0px';left.style.transform='scaleX(0)';
 const fl=G.E('line',{x1:PW/2,y1:-6,x2:PW/2,y2:PH+6,stroke:'#e11d48','stroke-width':1.5,'stroke-dasharray':'4 3'},root);
 if(!await G.step('รอยพับอยู่ตรงเส้นแดง',['กระดาษพับครึ่ง รอยพับอยู่ตรงเส้นสีแดง','ตัดทีเดียว ได้รูทั้งสองชั้น'],600))return;
 left.style.transition=G.F?'none':'transform 1.6s ease-in-out';left.style.transform='scaleX(1)';G.sfx('whoosh');
 if(!await G.step('คลี่ออก',['คลี่ออกมา รูจะเกิดอีกฝั่งด้วย เหมือนเงาในกระจก'],1700))return;
 const ts=[...new Set(p.holes.map(h=>h[0]))],SAY={semi:'ครึ่งวงกลมที่ตัดตรงรอยพับ กลายเป็นวงกลมเต็มวง',sq:'สี่เหลี่ยมมีสองรู ซ้ายกับขวา',tri:'สามเหลี่ยมมีสองรู และหันกลับข้างกัน',notch:'รอยบากเกิดทั้งขอบซ้ายและขอบขวา'};
 for(const t of ts){if(!await G.say([SAY[t]]))return;}
 await G.fin('คลี่แล้วได้ภาพนี้',['คลี่แล้วได้ภาพนี้'],[root]);};
/* ---------- ชุดคำสั่งลูกศร: ให้ลิงเดินตามทีละชุด นับผลไม้ ---------- */
R.path=async(p,G)=>{const z=56,gx=24,gy=42,cx=(a,b)=>[gx+a*z+z/2,gy+b*z+z/2],MV={'→':[1,0],'←':[-1,0],'↑':[0,-1],'↓':[0,1]};
 for(let b=0;b<p.h;b++)for(let a=0;a<p.w;a++)G.E('rect',{x:gx+a*z,y:gy+b*z,width:z,height:z,rx:6,fill:(a+b)%2?'#eef7e4':'#f7fbef',stroke:'#c9d8b8','stroke-width':2});
 const ce={};Object.entries(p.cells).forEach(([k,e])=>{const [a,b]=k.split(',').map(Number),[x,y]=cx(a,b);ce[k]=G.tx(x,y+2,e,{fs:34});});
 const mk=G.E('g',{});G.tx(0,0,'🐒',{fs:36,p:mk});const home=cx(p.st[0],p.st[1]);mk.style.transform='translate('+home[0]+'px,'+home[1]+'px)';
 const progs=(p.opts||[]).map(o=>(o.m||'').replace(/ /g,'')).filter(Boolean);const ORD=['ชุดแรก','ชุดที่สอง','ชุดที่สาม'],cnts=[];
 if(!await G.step('ลองเดินตามทีละชุด',['ลองให้ลิงเดินตามลูกศรทีละชุด แล้วนับผลไม้'],300))return;
 for(let i=0;i<progs.length;i++){const pr=[...progs[i]];let [a,b]=p.st,cnt=0;const marks=[];mk.style.transition='none';mk.style.transform='translate('+home[0]+'px,'+home[1]+'px)';
  const lab=G.tx(470,70+i*60,'ข้อ '+'กขค'[i]+'  '+pr.join(' '),{fs:17,w:700,fill:C[i]});G.cap('ข้อ '+'กขค'[i]+': '+pr.join(' '));
  for(const m of pr){const [x0,y0]=cx(a,b);a+=MV[m][0];b+=MV[m][1];const [x1,y1]=cx(a,b);G.hop(mk,x0,y0,x1,y1,18,300);marks.push(G.E('circle',{cx:x1,cy:y1+20,r:5,fill:C[i]}));
   const e=p.cells[a+','+b];if(e&&p.fr.includes(e)){cnt++;marks.push(G.tag(x1+18,y1-18,cnt,C[i],11));G.sfx('pop',cnt+3);}if(!await G.W(340))return;}
  cnts.push(cnt);G.pop(G.tx(560,70+i*60,cnt+' ผล',{fs:18,w:700,fill:C[i]}));if(!await G.say([cnt?ORD[i]+' ได้ผลไม้ '+cnt+' ผล':ORD[i]+' ไม่ได้ผลไม้เลย']))return;marks.forEach(m=>G.fade(m,0,300));}
 const best=cnts.indexOf(Math.max(...cnts));await G.fin('ข้อ '+'กขค'[best]+' ได้ผลไม้มากที่สุด',['ชุดนี้ได้ผลไม้มากที่สุด']);};
/* ---------- ลม: เส้นลมพัด ธงปลิวตาม ---------- */
R.wind=async(p,G)=>{const d=p.dir==='r'?1:-1,px=300;
 if(p.compass){G.E('circle',{cx:100,cy:62,r:30,fill:'#fff',stroke:INK,'stroke-width':2.5});G.E('path',{d:'M100 36 L106 62 L100 58 L94 62 Z',fill:'#ef4444'});G.tx(100,18,'เหนือ',{fs:14,w:700});G.tx(100,108,'ใต้',{fs:14,w:700});G.tx(176,62,'ตะวันออก',{fs:14,w:700,fill:'#e11d48'});G.tx(30,62,'ตะวันตก',{fs:14,w:700,fill:'#2563eb'});}
 let obj;if(p.smoke){G.E('path',{d:'M280 300 h40 l-6 -36 h-28 Z',fill:'#a16207',stroke:INK,'stroke-width':2});obj=G.E('path',{d:'M300 262 Q300 200 300 140',fill:'none',stroke:'#94a3b8','stroke-width':7,'stroke-linecap':'round'});}
 else{G.E('line',{x1:px,y1:90,x2:px,y2:310,stroke:INK,'stroke-width':6,'stroke-linecap':'round'});obj=G.E('path',{d:'M300 96 Q311 126 307 166 L299 166 Q303 126 300 96 Z',fill:'#f87171',stroke:INK,'stroke-width':2.5});}
 const streaks=[];for(let i=0;i<3;i++){const y=(p.compass?160:130)+i*45,g=G.E('path',{d:'M'+(d>0?60:540)+' '+y+' q'+(30*d)+' -14 '+(60*d)+' 0 t'+(60*d)+' 0',fill:'none',stroke:'#60a5fa','stroke-width':4,'stroke-linecap':'round'});streaks.push(g);
  if(!G.F)try{g.animate([{transform:'translateX(0px)',opacity:0},{transform:'translateX('+(140*d)+'px)',opacity:1,offset:.5},{transform:'translateX('+(280*d)+'px)',opacity:0}],{duration:1600,iterations:3,delay:i*250});}catch(x){}}
 G.sfx('whoosh');if(!await G.step(p.lines[0],[p.lines[0]],1200))return;
 obj.setAttribute('d',p.smoke?'M300 262 Q'+(300+30*d)+' 200 '+(300+130*d)+' 150':d>0?'M300 96 Q340 82 380 102 Q368 120 386 140 Q340 128 300 150 Z':'M300 96 Q260 82 220 102 Q232 120 214 140 Q260 128 300 150 Z');G.pulse(obj);
 for(const s of p.lines.slice(1,-1))if(!await G.say([s]))return;
 await G.fin(p.lines[p.lines.length-1],[p.lines[p.lines.length-1]],[obj]);};
/* ---------- ชักเยอ: ลูกศรแรงยาวตามจำนวนคน ---------- */
R.tug=async(p,G)=>{const g=G.E('g',{});G.E('line',{x1:40,y1:210,x2:560,y2:210,stroke:'#a16207','stroke-width':7,'stroke-linecap':'round'},g);G.tx(300,232,'🎀',{fs:26,p:g});
 for(let i=0;i<p.l;i++)G.tx(60+i*34,190,'🧒',{fs:34,p:g});for(let i=0;i<p.r;i++)G.tx(540-i*34,190,'🧒',{fs:34,p:g});G.E('line',{x1:300,y1:250,x2:300,y2:290,stroke:'#94a3b8','stroke-width':3,'stroke-dasharray':'5 4'});
 const la=arrowTo(G,280,90,280-p.l*32,90,'#2563eb'),ra=arrowTo(G,320,90,320+p.r*32,90,'#e11d48');G.pop(la);if(!await G.step('ซ้าย '+p.l+' คน',['ฝั่งซ้าย '+p.l+' คน'],400))return;
 G.pop(ra);if(!await G.step('ขวา '+p.r+' คน',['ฝั่งขวา '+p.r+' คน'],400))return;
 if(p.l===p.r){if(!G.F)try{g.animate([{transform:'translateX(0px)'},{transform:'translateX(-8px)'},{transform:'translateX(8px)'},{transform:'translateX(0px)'}],{duration:500,iterations:3});}catch(x){}await G.fin(p.res,['แรงเท่ากัน เชือกจึงไม่เคลื่อนที่']);return;}
 G.move(g,p.r>p.l?50:-50,0,1400);if(!await G.say(['ฝั่งที่มีคนมากกว่า ดึงแรงกว่า']))return;await G.fin(p.res,['เชือกจึงเคลื่อนที่'+p.res]);};
/* ---------- เคาะแก้ว: น้ำมากเสียงต่ำ น้ำน้อยเสียงสูง ---------- */
R.pitch=async(p,G)=>{const xs=[130,300,470],gl=[];p.lv.forEach((h,i)=>{const x=xs[i]-30,g=G.E('g',{});G.E('path',{d:'M'+(x+4)+' '+(268-h)+' h52 l-4 '+(h-4)+' h-44 Z',fill:'#7cc6f2'},g);G.E('path',{d:'M'+x+' 140 h60 l-6 128 h-48 Z',fill:'none',stroke:INK,'stroke-width':3},g);G.tx(xs[i],292,'แก้วที่ '+(i+1),{fs:16,w:700,fill:'#7c3aed',p:g});gl.push(g);});
 if(!await G.step('ลองเคาะทีละใบ',['ลองเคาะทีละใบ ฟังเสียงนะ'],300))return;const rk=p.lv.map(h=>[...p.lv].sort((a,b)=>a-b).indexOf(h));
 for(let i=0;i<3;i++){G.pulse(gl[i]);G.sfx('pop',[11,6,0][rk[i]]);const n=[5,3,1][rk[i]];for(let k=0;k<n;k++){const w=G.E('path',{d:'M'+(xs[i]+40+k*9)+' 160 q8 20 0 40',fill:'none',stroke:'#ec4899','stroke-width':3});G.fade(w,0,1500);}
  G.cap('แก้วที่ '+(i+1)+(['น้ำน้อย เสียงสูง','น้ำปานกลาง','น้ำมาก เสียงต่ำ'][rk[i]]));if(!await G.say(['แก้วที่ '+(i+1)+' '+['น้ำน้อย เสียงสูงแหลม','น้ำปานกลาง เสียงกลาง ๆ','น้ำมาก เสียงต่ำทุ้ม'][rk[i]]]))return;}
 await G.fin('แก้วที่ '+(p.gi+1)+(p.ask==='low'?' เสียงต่ำที่สุด':' เสียงสูงที่สุด'),['น้ำยิ่งมาก เสียงยิ่งต่ำ น้ำยิ่งน้อย เสียงยิ่งสูง'],[gl[p.gi]]);};
/* ---------- ต้นไม้เอนหาแสง ---------- */
R.plant=async(p,G)=>{const L=p.side==='l';G.E('rect',{x:0,y:0,width:600,height:330,fill:'#334155'});const wx=L?40:480;G.E('rect',{x:wx,y:50,width:80,height:80,fill:'#fde68a',stroke:INK,'stroke-width':3});
 const beam=G.E('path',{d:L?'M120 60 L300 170 L300 250 L120 130 Z':'M480 60 L300 170 L300 250 L480 130 Z',fill:'#fef08a',opacity:0});G.fade(beam,.35,800);
 G.E('path',{d:'M270 310 h60 l-8 -40 h-44 Z',fill:'#b45309',stroke:INK,'stroke-width':2});const st=G.E('path',{d:'M300 270 Q300 220 300 170',fill:'none',stroke:'#16a34a','stroke-width':7,'stroke-linecap':'round'}),lf=G.tx(300,160,'🌱',{fs:40});
 if(!await G.step('แสงเข้ามาทาง'+(L?'ซ้าย':'ขวา'),['ต้นไม้ต้องการแสง'],900))return;
 const d=L?-1:1;for(let k=1;k<=6;k++){const ex=300+d*k*14,ey=170+k*2;st.setAttribute('d','M300 270 Q300 215 '+ex+' '+ey);lf.setAttribute('x',ex);lf.setAttribute('y',ey-10);if(!await G.W(220))return;}
 if(!await G.say(['ลำต้นจึงค่อย ๆ เอนเข้าหาแสง']))return;await G.fin('ต้นไม้เอนไปทาง'+(L?'ซ้าย':'ขวา'),['ต้นไม้เอนไปทาง'+(L?'ซ้าย':'ขวา')+' เข้าหาแสง'],[lf]);};
/* ---------- ดอกไม้ดูดน้ำสี ---------- */
R.dye=async(p,G)=>{G.E('path',{d:'M250 310 h100 l-10 -110 h-80 Z',fill:'#fecaca',stroke:INK,'stroke-width':3});G.E('path',{d:'M262 300 h76 l-8 -80 h-60 Z',fill:'#ef4444',opacity:.75});
 const stem=G.E('line',{x1:300,y1:300,x2:300,y2:110,stroke:'#16a34a','stroke-width':8,'stroke-linecap':'round'}),red=G.E('line',{x1:300,y1:300,x2:300,y2:110,stroke:'#ef4444','stroke-width':4,'stroke-dasharray':'190','stroke-dashoffset':'190'});
 const pet=[];for(let i=0;i<8;i++){const a=i/8*2*Math.PI;pet.push(G.E('ellipse',{cx:300+28*Math.sin(a),cy:90-28*Math.cos(a),rx:14,ry:22,fill:'#fff',stroke:INK,'stroke-width':2,transform:'rotate('+(i*45)+' '+(300+28*Math.sin(a))+' '+(90-28*Math.cos(a))+')'}));}G.E('circle',{cx:300,cy:90,r:14,fill:'#facc15',stroke:INK,'stroke-width':2});
 if(!await G.step('ก้านดูดน้ำขึ้นไป',['ก้านดอกดูดน้ำขึ้นไปทางลำต้น'],400))return;red.style.transition=G.F?'none':'stroke-dashoffset 2s linear';red.style.strokeDashoffset='0';if(!await G.W(2000))return;
 pet.forEach(e=>{e.style.transition=G.F?'none':'fill 1.5s';e.style.fill='#fca5a5';});if(!await G.say(['สีแดงในน้ำ ขึ้นไปถึงกลีบดอก']))return;await G.fin('กลีบดอกมีสีแดงขึ้นมา',['กลีบดอกจึงมีสีแดงขึ้นมา'],pet.slice(0,1));};
/* ---------- แผนที่: บอกทิศรอบบ้าน แล้วชี้คำตอบ ---------- */
R.map=async(p,G)=>{const ox=150,oy=15,SP={up:[150,42],down:[150,258],right:[258,150],left:[42,150]};
 G.E('rect',{x:ox,y:oy,width:300,height:300,fill:'#dcfce7'});G.E('rect',{x:ox+128,y:oy,width:44,height:300,fill:'#cbd5e1'});G.E('rect',{x:ox,y:oy+128,width:300,height:44,fill:'#cbd5e1'});
 G.E('circle',{cx:ox+150,cy:oy+150,r:24,fill:'#fff',stroke:INK,'stroke-width':2.5});G.tx(ox+150,oy+152,'🏠',{fs:30});const pls=[];
 p.pl.forEach(([e,nm,pos])=>{const [x,y]=SP[pos],g=G.E('g',{});G.E('circle',{cx:ox+x,cy:oy+y,r:28,fill:'#fff',stroke:INK,'stroke-width':2.5},g);G.tx(ox+x,oy+y+2,e,{fs:32,p:g});G.tx(ox+x,oy+y+(pos==='down'?-42:42),nm,{fs:14,w:700,p:g});pls.push(g);});
 const rot=p.rot===90,na=G.E('g',{});G.E('path',{d:rot?'M560 60 L520 70 L527 60 L520 50 Z':'M530 20 L540 60 L530 53 L520 60 Z',fill:'#ef4444',stroke:INK,'stroke-width':2},na);G.tx(rot?505:530,rot?60:76,'N',{fs:18,w:700,fill:'#ef4444',p:na});
 if(!await G.step('ดูลูกศร N',[p.lines[0]],500))return;G.pulse(na);
 const DL=rot?{right:'เหนือ',left:'ใต้',up:'ตะวันตก',down:'ตะวันออก'}:{up:'เหนือ',down:'ใต้',right:'ตะวันออก',left:'ตะวันตก'},OFF={up:[0,-62],down:[0,62],right:[70,0],left:[-70,0]};
 for(const pos of ['up','right','down','left']){const [dx,dy]=OFF[pos];G.pop(arrowTo(G,ox+150+dx*.35,oy+150+dy*.35,ox+150+dx*.75,oy+150+dy*.75,'#7c3aed'));const LP={up:[36,-50],down:[36,52],right:[52,-24],left:[-52,-24]}[pos];G.pop(G.tx(ox+150+LP[0],oy+150+LP[1],DL[pos],{fs:14,w:700,fill:'#7c3aed',a:{stroke:'#fff','stroke-width':4,'paint-order':'stroke'}}));G.sfx('pop',2);if(!await G.W(350))return;}
 for(const s of p.lines.slice(1,-1))if(!await G.say([s]))return;
 await G.fin(p.lines[p.lines.length-1],[p.lines[p.lines.length-1]],[pls[p.hi]]);};
/* ---------- นับช่องจากบ้าน ---------- */
R.steps=async(p,G)=>{const z=56,gx=160,gy=22,cx=(a,b)=>[gx+a*z+z/2,gy+b*z+z/2];for(let b=0;b<5;b++)for(let a=0;a<5;a++)G.E('rect',{x:gx+a*z,y:gy+b*z,width:z,height:z,rx:6,fill:(a+b)%2?'#eef7e4':'#f7fbef',stroke:'#c9d8b8','stroke-width':2});
 const [hx,hy]=cx(p.home[0],p.home[1]);G.tx(hx,hy+2,'🏠',{fs:34});const pg=p.pl.map(([e,nm,a,b])=>{const [x,y]=cx(a,b);return G.tx(x,y+2,e,{fs:34});});
 if(!await G.step('นับช่องจากบ้าน',['นับช่องจากบ้าน ไปแต่ละที่'],300))return;let best=0;
 for(let i=0;i<p.pl.length;i++){const [e,nm,a,b,d]=p.pl[i];let x=p.home[0],y=p.home[1],k=0;const ms=[];
  while(x!==a||y!==b){if(x!==a)x+=a>x?1:-1;else y+=b>y?1:-1;k++;const [px,py]=cx(x,y);ms.push(G.tag(px+(x===a&&y===b?18:0),py+(x===a&&y===b?-18:0),k,C[i],11));G.sfx('pop',k);if(!await G.W(260))return;}
  G.cap(nm+' '+d+' ช่อง');if(!await G.say([nm+' '+d+' ช่อง']))return;if(d<p.pl[best][4])best=i;ms.forEach(m=>G.fade(m,.35,300));}
 await G.fin(p.pl[best][1]+'ใกล้บ้านที่สุด',[p.pl[best][1]+'ใกล้บ้านที่สุด'],[pg[best]]);};
/* ---------- ใกล้ดูใหญ่ ไกลดูเล็ก ---------- */
R.near=async(p,G)=>{const f=p.qv&&p.qv.fig;if(!f)return;const S=1.45,ox=300-150*S,oy=4;drawFig(G,f,ox,oy,300*S,220*S);
 const T=[[80,160,'ใกล้'],[205,112,'กลาง'],[168,92,'ไกล']];
 if(!await G.step('ใกล้ดูใหญ่ ไกลดูเล็ก',['ของที่อยู่ใกล้ จะดูใหญ่','ของที่อยู่ไกล จะดูเล็ก'],300))return;
 for(const [x,y,t] of T){G.pop(G.tx(ox+x*S+(t==='ใกล้'?70:40),oy+y*S-10,t,{fs:18,w:700,fill:'#e11d48'}));G.sfx('pop',2);if(!await G.W(450))return;}
 const i=p.ask==='near'?0:2;await G.fin('ต้นไม้หมายเลข '+p.lab[i]+(p.ask==='near'?' ใกล้ที่สุด':' ไกลที่สุด'),['ต้นไม้หมายเลข '+p.lab[i]+(p.ask==='near'?' ดูใหญ่ที่สุด จึงอยู่ใกล้ที่สุด':' ดูเล็กที่สุด จึงอยู่ไกลที่สุด')]);};
/* ---------- ของเป็นกอง หายไปทั้งกอง ---------- */
R.pile=async(p,G)=>{const bw=Math.min(130,540/p.g),bx=j=>300-(p.g*bw)/2+j*bw+bw/2,boxes=[];
 for(let j=0;j<p.g;j++){const g=G.E('g',{});roundRect(G,bx(j)-bw/2+8,90,bw-16,120,'#fef3c7','#d97706',16,g);for(let i=0;i<p.each;i++)G.tx(bx(j)-((Math.min(p.each,3)-1)*24)/2+(i%3)*24,120+Math.floor(i/3)*36,p.e,{fs:26,p:g});G.tx(bx(j),232,p.box+' '+(j+1),{fs:15,w:700,fill:'#92400e',p:g});G.pop(g);boxes.push(g);}
 if(!await G.step(p.g+' '+p.box+' '+p.box+'ละ '+p.each,['มี '+p.g+' '+p.box,p.box+'ละ '+p.each+' '+p.u],500))return;
 for(let j=p.g-p.lost;j<p.g;j++){G.move(boxes[j],0,-150,800);G.fade(boxes[j],0,800);}G.sfx('whoosh');if(!await G.step('หายไป '+p.lost+' '+p.box,['หายไป '+p.lost+' '+p.box],900))return;
 let run=0;for(let j=0;j<p.g-p.lost;j++){run+=p.each;G.tag(bx(j),70,run,'#ec4899',15);G.sfx('pop',j);G.cap(String(run));if(!await G.say([String(run)]))return;}
 await G.fin('เหลือ '+run+' '+p.u,['เหลือ '+run+' '+p.u]);};
/* ---------- สามจำนวนรวมกัน: ลองบวกทีละข้อ ---------- */
R.sum3=async(p,G)=>{const rows=(p.opts||[]).map(o=>nums(lab(o)));if(rows.length<3)return;let ok=-1;
 if(!await G.step('ลองบวกทีละข้อ',['ลองบวกทีละข้อ'],300))return;
 for(let i=0;i<rows.length;i++){const r=rows[i],s=r.reduce((a,b)=>a+b,0),y=80+i*80,eq=r.join(' + ')+' = '+s,good=s===p.n;if(good)ok=i;
  G.tx(70,y,'ข้อ '+'กขค'[i],{fs:22,w:700,fill:'#475569'});const t=G.tx(300,y,eq,{fs:34,w:700,fill:good?'#16a34a':'#3b3b4f'});G.pop(t);G.cap(eq);if(!await G.say([eq]))return;
  G.pop(G.tx(520,y,good?'✔':'✘',{fs:36,w:700,fill:good?'#16a34a':'#e11d48'}));G.sfx(good?'chime':'pop',2);if(!await G.W(300))return;}
 await G.fin('ข้อ '+'กขค'[ok]+' รวมกันได้ '+p.n,['ข้อนี้รวมกันได้ '+p.n+' พอดี']);};
/* ---------- คนหันหน้าเข้าหาเรา: ซ้ายของเขาคือขวาของเรา ---------- */
R.facing=async(p,G)=>{const n=p.names.length,x=i=>300-(n-1)*120/2+i*120,ks=[];
 p.names.forEach((nm,i)=>{const g=G.E('g',{});G.tx(x(i),130,'🧒',{fs:64,p:g});G.tx(x(i),190,nm,{fs:18,w:700,p:g});G.pop(g);ks.push(g);});
 G.tx(110,300,'⬅ ซ้ายของเรา',{fs:16,w:700,fill:'#2563eb'});G.tx(490,300,'ขวาของเรา ➡',{fs:16,w:700,fill:'#d97706'});
 const nm=p.names[p.ref],our=p.side==='ซ้าย'?'ขวา':'ซ้าย';G.glow(ks[p.ref],'#ec4899');
 if(!await G.step(nm+'หันหน้าเข้าหาเรา',[nm+'หันหน้าเข้าหาเรา','ซ้ายขวาของเขา จะกลับกับของเรา'],600))return;
 const hx=x(p.ref)+(p.side==='ซ้าย'?1:-1)*38;G.pop(G.tx(hx,96,'✋',{fs:28}));G.pop(G.tx(hx,64,'มือ'+p.side+'ของ'+nm,{fs:15,w:700,fill:'#e11d48'}));
 if(!await G.step('มือ'+p.side+'ของเขา = ทาง'+our+'ของเรา',['มือ'+p.side+'ของ'+nm+' อยู่ทาง'+our+'ของเรา'],500))return;
 G.pop(arrowTo(G,x(p.ref),232,x(p.who),232,'#e11d48'));await G.fin('ทางมือ'+p.side+'ของ'+nm+' คือ '+p.names[p.who],['คือ'+p.names[p.who]],[ks[p.who]]);};
/* คำกริยาในโจทย์ลบ → ท่าเอาของออก (นกบินไป ขนมถูกกิน ให้เพื่อน ...) */
const verbOf=t=>/บินไป|บินหนี/.test(t)?'fly':/กิน/.test(t)?'eat':/ให้|แจก|ขาย/.test(t)?'give':/แตก/.test(t)?'pop':/หล่น|ตก/.test(t)?'drop':/หาย/.test(t)?'lost':/เดินไป|วิ่งไป|ว่ายไป/.test(t)?'go':'x';
window.EX2={
 plan(q){try{if(!q||!q.opts||q.ans==null)return null;
  /* ข้อชุดใหม่มีข้อมูลภาพเฉลยมาด้วย (q.x2) · chk = ป้ายของคำตอบ ถ้าไม่ตรงกับเฉลยจะไม่แสดงภาพ */
  if(q.x2&&R[q.x2.kind]){const r=Object.assign({},q.x2);if(r.chk!=null&&norm(lab(q.opts[q.ans]))!==norm(r.chk))return null;r.opts=q.opts;r.ans=q.ans;r.qv=q.v;return Object.assign(r,{k:'x2'});}
  for(const f of P){const r=f(q);if(r){if(r.kind==='arith')r.vb=/=/.test(q.q)?'x':verbOf(TXT(q));return Object.assign({},r,{k:'x2'});}}}catch(e){}return null;},
 /* ctx: stage cap W fast SFX confetti say blip · rec=[] เก็บคำพูดทุกท่อน (ไม่วาดจริง ไม่รอ) */
 async run(p,ctx){try{if(p.kind==='turn')return await R.turn(p,ctx);const G=mk(ctx);await R[p.kind](p,G);}catch(e){console.warn('EX2',p.kind,e);}}};
})();
