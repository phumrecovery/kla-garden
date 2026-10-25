/* เฉลยแบบภาพเคลื่อนไหว ชุดที่ 2 (ผู้ปกครองขอ 25 ต.ค. 69) — ใช้คู่กับ engine.js (explain)
   ทุกภาพสร้างจากตัวเลข/คำในโจทย์เอง และตรวจว่าผลที่คำนวณได้ตรงกับเฉลยก่อนเสมอ ถ้าไม่ตรงจะไม่แสดงภาพ (กันภาพเฉลยผิด)
   ไม่มีเสียงพูดใหม่ (ไม่ต้องสร้างไฟล์เสียงเพิ่ม): ใช้คำบรรยายบนจอ + เสียงประกอบ ส่วนน้องกล้ายังพูดเหตุผล (why) เหมือนเดิม
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

/* ---------- ตัวช่วยวาด ---------- */
function mk(ctx){const svg=document.createElementNS(NS,'svg');svg.setAttribute('viewBox','0 0 '+VW+' '+VH);svg.setAttribute('class','x2svg');ctx.stage.append(svg);
 const F=!!ctx.fast,D=ms=>F?0:ms;
 const E=(tag,a,p)=>{const e=document.createElementNS(NS,tag);for(const k in a)e.setAttribute(k,a[k]);(p||svg).append(e);return e;};
 const tx=(x,y,s,o={})=>{const e=E('text',Object.assign({x,y,'text-anchor':'middle','dominant-baseline':'central','font-size':o.fs||22,fill:o.fill||'#3b3b4f'},o.a||{}),o.p);e.textContent=s;if(o.w)e.setAttribute('font-weight',o.w);return e;};
 const pop=(e,ms=320)=>{e.style.transformBox='fill-box';e.style.transformOrigin='center';if(!F)e.animate([{opacity:0,transform:'scale(.2)'},{opacity:1,transform:'scale(1)'}],{duration:ms,easing:'cubic-bezier(.3,1.5,.5,1)',fill:'backwards'});return e;};
 const move=(e,x,y,ms=650)=>{e.style.transition=F?'none':'transform '+ms+'ms ease-in-out';e.style.transform='translate('+x+'px,'+y+'px)';};
 const fade=(e,o,ms=400)=>{e.style.transition=F?'none':'opacity '+ms+'ms';e.style.opacity=o;};
 const pulse=e=>{e.style.transformBox='fill-box';e.style.transformOrigin='center';if(!F)e.animate([{transform:'scale(1)'},{transform:'scale(1.3)'},{transform:'scale(1)'}],{duration:500});};
 const cap=s=>{ctx.cap.textContent=s;};
 const S=ctx.SFX||{pop(){},chime(){},whoosh(){},ok(){}};
 const sfx=(k,a)=>{if(!F)try{S[k](a)}catch(e){}};
 const W=async ms=>F?true:await ctx.W(ms);
 /* แตะนับเอง: องค์ประกอบที่ใส่ไว้ใน tcs แตะแล้วขึ้นเลขลำดับ */
 const tcs=[];const tc=(e,x,y)=>{e.classList.add('tc');e._xy=[x,y];tcs.push(e);return e;};
 const tapOn=(total,msg)=>{if(!tcs.length)return;let n=0;const cnt=document.createElementNS(NS,'g');svg.append(cnt);
  cap(msg||'👆 ลองแตะนับเองทีละอัน');
  svg.addEventListener('click',ev=>{const t=ev.target.closest&&ev.target.closest('.tc');if(!t||t._n)return;n++;t._n=n;const [x,y]=t._xy;
   const b=tx(x,y,String(n),{fs:16,w:700,fill:'#fff',p:cnt,a:{stroke:'#e11d48','stroke-width':5,'paint-order':'stroke'}});pop(b,200);try{S.pop(n)}catch(e){}
   cap('นับได้ '+n);if(total&&n===total){cap('ครบแล้ว! ทั้งหมด '+total+' เก่งมาก 🎉');try{S.chime();const r=svg.getBoundingClientRect();ctx.confetti&&ctx.confetti(r.left+r.width/2,r.top+r.height/2,20);}catch(e){}}});};
 return {svg,E,tx,pop,move,fade,pulse,cap,sfx,W,tc,tapOn,F,D};}
const roundRect=(G,x,y,w,h,f,s,r=10,p)=>G.E('rect',{x,y,width:w,height:h,rx:r,fill:f,stroke:s||'none','stroke-width':s?2:0},p);
/* แท่งสิบ (มัด 10 อัน) และก้อนหน่วย */
function rod(G,x,y,col,p){const g=G.E('g',{},p);G.E('rect',{x,y,width:14,height:100,rx:2,fill:col,stroke:'#334155','stroke-width':1.5},g);for(let i=1;i<10;i++)G.E('line',{x1:x,y1:y+i*10,x2:x+14,y2:y+i*10,stroke:'#334155','stroke-width':.8,opacity:.6},g);return g;}
function cube(G,x,y,col,p){return G.E('rect',{x,y,width:13,height:13,rx:2,fill:col,stroke:'#334155','stroke-width':1.3},p);}
function cross(G,x,y,p){const g=G.E('g',{},p);G.E('path',{d:'M'+(x-9)+' '+(y-9)+' L'+(x+9)+' '+(y+9)+' M'+(x+9)+' '+(y-9)+' L'+(x-9)+' '+(y+9),stroke:'#e11d48','stroke-width':4,'stroke-linecap':'round'},g);return g;}

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
   วาด/เล่น
   ====================================================================== */
const R={};
/* ---------- กรอบสิบ ---------- */
R.tf=async(p,G)=>{const mx=Math.max(...p.seq,p.fill||0,p.a+p.st.filter(s=>s[0]==='+').reduce((x,s)=>x+s[1],0)),two=mx>10,cs=46,fy=58,fx=two?[48,322]:[185];
 fx.forEach(x=>{roundRect(G,x-6,fy-6,cs*5+12,cs*2+12,'#fff7e6','#d6b98c',12);for(let i=0;i<10;i++)G.E('rect',{x:x+(i%5)*cs,y:fy+Math.floor(i/5)*cs,width:cs,height:cs,fill:'none',stroke:'#d6b98c','stroke-width':2});});
 const pos=i=>{const f=Math.floor(i/10),j=i%10;return [fx[f]+(j%5)*cs+cs/2,fy+Math.floor(j/5)*cs+cs/2];};
 const dots=[],put=(i,c)=>{const [x,y]=pos(i),g=G.E('g',{});if(p.e)G.tx(x,y+1,p.e,{fs:30,p:g});else G.E('circle',{cx:x,cy:y,r:17,fill:c,stroke:'#fff','stroke-width':3},g);G.pop(g,260);G.tc(g,x,y);dots[i]=g;return g;};
 const eq=G.tx(300,262,'',{fs:34,w:700});let s=String(p.a);eq.textContent=s;
 G.cap(p.note?'มี '+p.note:'มี '+p.a);for(let i=0;i<p.a;i++){put(i,C[0]);if(i%5===4&&!await G.W(160))return;}if(!await G.W(700))return;
 let cnt=p.a,slot=p.a;const alive=dots.map((d,i)=>i);const fillMode=p.fill!=null;
 for(let k=0;k<p.st.length;k++){const [o,n]=p.st[k];
  if(o==='+'){G.cap(fillMode?'เติมทีละอัน ให้ครบ '+p.fill:'เพิ่มอีก '+n);for(let j=0;j<n;j++){const g=put(slot,C[k+1]);alive.push(slot);slot++;cnt++;G.sfx('pop',cnt%8);if(fillMode){const [x,y]=pos(slot-1);G.tx(x,y-24,String(j+1),{fs:14,w:700,fill:'#ec4899'});}
    G.cap((fillMode?'เติม '+(j+1)+' → มี ':'')+cnt+(cnt===10&&two?' (เต็ม 10 แล้ว!)':''));if(!await G.W(420))return;}}
  else{G.cap(fillMode?'เอาออกทีละอัน ให้เหลือ '+p.fill:'เอาออก '+n);for(let j=0;j<n;j++){cnt--;const ix=alive.pop(),[x,y]=pos(ix),d=dots[ix];G.fade(d,.22);d.classList.remove('tc');cross(G,x,y);G.sfx('pop',cnt%8);G.cap((fillMode?'เอาออก '+(j+1)+' → ':'เหลือ ')+cnt);if(!await G.W(420))return;}}
  s+=' '+(o==='-'?'−':'+')+' '+(fillMode?'□':n);eq.textContent=s;if(!await G.W(500))return;}
 eq.textContent=fillMode?s+' = '+p.fill+'   □ = '+p.A:s+' = '+cnt;G.pop(eq);G.sfx('chime');G.cap(fillMode?'ต้องใส่ '+p.A:'ได้ '+cnt);if(!await G.W(900))return;
 G.tapOn(fillMode?null:cnt);};
/* ---------- มัดสิบ ตั้งหลัก (ทด / ยืม) ---------- */
R.col=async(p,G)=>{const a=p.a,[o,b]=p.st[0],add=o==='+',res=p.seq[1],at=Math.floor(a/10),au=a%10,bt=Math.floor(b/10),bu=b%10;
 G.E('line',{x1:200,y1:20,x2:200,y2:310,stroke:'#cbd5e1','stroke-width':2,'stroke-dasharray':'6 6'});G.tx(110,24,'หลักสิบ',{fs:18,w:700,fill:'#2563eb'});G.tx(290,24,'หลักหน่วย',{fs:18,w:700,fill:'#d97706'});
 const RX=(i)=>28+i*17,CX=(j,row)=>[214+(j%5)*16,row+Math.floor(j/5)*16];
 /* ตั้งหลักทางขวา */
 const wx={t:478,u:528,op:438};const dg=(x,y,s,c,fs=40)=>G.tx(x,y,s,{fs,w:700,fill:c||'#3b3b4f'});
 const rA=[],cA=[],rB=[],cB=[];
 G.cap('ตั้ง '+a);for(let i=0;i<at;i++){const r=rod(G,RX(i),48,'#93c5fd');G.pop(r);rA.push(r);}for(let j=0;j<au;j++){const [x,y]=CX(j,52);const c=cube(G,x,y,'#93c5fd');G.pop(c);cA.push(c);}
 dg(wx.t,110,at?String(at):'','#2563eb');dg(wx.u,110,String(au),'#d97706');if(!await G.W(900))return;
 if(add){G.cap('บวก '+b);for(let i=0;i<bt;i++){const r=rod(G,RX(i),190,'#fdba74');G.pop(r);rB.push(r);}for(let j=0;j<bu;j++){const [x,y]=CX(j,194);const c=cube(G,x,y,'#fdba74');G.pop(c);cB.push(c);}}
 else G.cap('ลบ '+b);
 dg(wx.op,165,add?'+':'−');dg(wx.t,165,bt?String(bt):'','#2563eb');dg(wx.u,165,String(bu),'#d97706');G.E('line',{x1:420,y1:192,x2:560,y2:192,stroke:'#3b3b4f','stroke-width':3});if(!await G.W(1000))return;
 if(add){
  G.cap('รวมหลักหน่วยก่อน: '+au+' + '+bu);cB.forEach((c,j)=>{const [x0,y0]=CX(j,194),[x1,y1]=CX(au+j,52);G.move(c,x1-x0,y1-y0);});G.sfx('whoosh');if(!await G.W(900))return;
  const u=au+bu;let carry=0;
  if(u>=10){carry=1;G.cap('หน่วยรวมได้ '+u+' ครบ 10 → มัดเป็น 1 สิบ แล้ว "ทด 1" ไปหลักสิบ');const all=cA.concat(cB);all.slice(0,10).forEach(c=>{c.setAttribute('fill','#fde047');});if(!await G.W(1000))return;
   all.slice(0,10).forEach(c=>G.fade(c,0));const nr=rod(G,RX(at),48,'#fde047');G.pop(nr,500);G.sfx('chime');
   all.slice(10).forEach((c,j)=>{const t=c.style.transform.match(/-?\d+(\.\d+)?/g)||['0','0'];const k=cB.indexOf(c),j0=k>=0?k:cA.indexOf(c),y0=k>=0?194:52;const [x0,yy0]=CX(j0,y0),[x1,y1]=CX(j,52);G.move(c,x1-x0,y1-yy0);});
   const cm=G.tx(wx.t,70,'1',{fs:22,w:700,fill:'#e11d48'});G.pop(cm);rA.push(nr);if(!await G.W(1200))return;}
  dg(wx.u,225,String(u%10),'#d97706');G.cap('หลักหน่วยได้ '+(u%10)+(carry?' (ทด 1)':''));if(!await G.W(900))return;
  G.cap('รวมหลักสิบ: '+at+' + '+bt+(carry?' + 1 (ที่ทดมา)':''));rB.forEach((r,i)=>G.move(r,RX(at+carry+i)-RX(i),48-190));G.sfx('whoosh');if(!await G.W(1000))return;
  const tt=at+bt+carry;if(tt)dg(wx.t,225,String(tt),'#2563eb');}
 else{let tA=at,uA=au;
  if(au<bu){G.cap('หน่วย '+au+' เอาออก '+bu+' ไม่พอ → "ยืม" 1 สิบ มาแตกเป็น 10 หน่วย');const r=rA.pop();r.querySelector('rect').setAttribute('fill','#fde047');if(!await G.W(900))return;
   G.fade(r,0);for(let j=0;j<10;j++){const [x,y]=CX(au+j,52);const c=cube(G,x,y,'#fde047');G.pop(c,250);cA.push(c);G.sfx('pop',j%8);if(!await G.W(90))return;}
   tA=at-1;uA=au+10;G.E('line',{x1:wx.t-14,y1:122,x2:wx.t+14,y2:98,stroke:'#e11d48','stroke-width':3});const s1=G.tx(wx.t,70,String(tA),{fs:22,w:700,fill:'#e11d48'}),s2=G.tx(wx.u-24,82,'1',{fs:22,w:700,fill:'#e11d48'});G.pop(s1);G.pop(s2);if(!await G.W(1000))return;}
  G.cap('เอาออก '+bu+' หน่วย');for(let j=0;j<bu;j++){const c=cA[uA-1-j];c.setAttribute('opacity','.25');const [x,y]=CX(uA-1-j,52);cross(G,x+6,y+6);G.sfx('pop',j%8);if(!await G.W(260))return;}
  dg(wx.u,225,String(uA-bu),'#d97706');G.cap('หลักหน่วยเหลือ '+(uA-bu));if(!await G.W(800))return;
  G.cap('เอาออก '+bt+' สิบ');for(let i=0;i<bt;i++){const r=rA[tA-1-i];r.setAttribute('opacity','.25');cross(G,RX(tA-1-i)+7,98);G.sfx('pop',i);if(!await G.W(350))return;}
  if(tA-bt)dg(wx.t,225,String(tA-bt),'#2563eb');}
 if(!await G.W(500))return;G.cap('ได้ '+res);G.sfx('chime');const r=G.tx(300,292,a+' '+(add?'+':'−')+' '+b+' = '+res,{fs:28,w:700});G.pop(r);};
/* ---------- เส้นจำนวน ---------- */
function nline(G,lo,hi,y){const X=v=>40+(v-lo)*520/(hi-lo),sp=hi-lo,step=sp<=24?1:sp<=60?5:10,lb=sp<=24?(sp<=12?1:2):10;
 G.E('line',{x1:30,y1:y,x2:570,y2:y,stroke:'#475569','stroke-width':3});
 for(let v=lo;v<=hi;v+=step){G.E('line',{x1:X(v),y1:y-7,x2:X(v),y2:y+7,stroke:'#475569','stroke-width':2});if(v%lb===0||sp<=12)G.tx(X(v),y+22,String(v),{fs:sp<=24?15:14,fill:'#475569'});}
 return X;}
function winOf(vs){const mn=Math.min(...vs),mx=Math.max(...vs);if(mx<=20)return [0,20];if(mx-mn<=16){const lo=Math.max(0,Math.floor(mn/2)*2-2);return [lo,lo+Math.max(12,Math.ceil((mx-lo+2)/2)*2)];}if(mx<=100)return [0,100];return null;}
R.nl=async(p,G)=>{const w=winOf(p.seq.concat([0]));if(!w)return;const [lo,hi]=[Math.floor(Math.min(...p.seq)/10)*10,Math.ceil(Math.max(...p.seq)/10)*10||10];const X=nline(G,lo,Math.max(hi,lo+10),240);
 let cur=p.a;const mk1=G.E('g',{});G.E('circle',{cx:0,cy:0,r:10,fill:'#ec4899'},mk1);mk1.style.transform='translate('+X(cur)+'px,240px)';G.tx(X(cur),205,String(cur),{fs:18,w:700,fill:'#ec4899'});G.cap('เริ่มที่ '+cur);if(!await G.W(800))return;
 for(let k=0;k<p.st.length;k++){const [o,n]=p.st[k],sg=o==='+'?1:-1,tens=Math.floor(n/10),ones=n%10,hops=[];if(tens<=5){for(let i=0;i<tens;i++)hops.push(10);}else hops.push(tens*10);if(ones)hops.push(ones);
  G.cap((o==='+'?'บวก ':'ลบ ')+n+(hops.length>1?' (ทีละสิบ แล้วค่อยหน่วย)':''));
  for(const hpp of hops){const nx=cur+sg*hpp,x0=X(cur),x1=X(nx),hgt=Math.min(70,18+Math.abs(x1-x0)*.5),c=C[(k+1)%C.length];
   const pa=G.E('path',{d:'M'+x0+' 232 Q'+((x0+x1)/2)+' '+(232-hgt*2)+' '+x1+' 232',fill:'none',stroke:c,'stroke-width':3.5,'stroke-dasharray':'600','stroke-dashoffset':G.F?'0':'600'});if(!G.F)pa.animate([{strokeDashoffset:600},{strokeDashoffset:0}],{duration:600,fill:'forwards'});
   G.tx((x0+x1)/2,232-hgt-14,(sg>0?'+':'−')+hpp,{fs:16,w:700,fill:c});mk1.style.transition=G.F?'none':'transform .6s';mk1.style.transform='translate('+x1+'px,240px)';cur=nx;G.sfx('pop',k);if(!await G.W(750))return;}
  G.tx(X(cur),205-(k+1)*0,String(cur),{fs:18,w:700,fill:'#ec4899'});G.cap('ได้ '+cur);if(!await G.W(700))return;}
 const eq=G.tx(300,60,p.a+' '+p.st.map(([o,n])=>(o==='-'?'−':'+')+' '+n).join(' ')+' = '+cur,{fs:30,w:700});G.pop(eq);G.sfx('chime');G.cap('คำตอบ '+cur);};
R.arith=async(p,G)=>{await R[p.mode](p,G);};
/* ---------- แจกของ ---------- */
R.share=async(p,G)=>{const it=[],m=p.mode==='group'?p.N/p.n2:p.n2,per=p.mode==='left'?p.per:p.N/m;const ix=i=>60+(i%12)*40,iy=i=>50+Math.floor(i/12)*40;
 G.cap('มีทั้งหมด '+p.N);for(let i=0;i<p.N;i++){const g=G.E('g',{});if(p.e)G.tx(ix(i),iy(i),p.e,{fs:26,p:g});else G.E('circle',{cx:ix(i),cy:iy(i),r:13,fill:C[0]},g);G.pop(g,220);it.push(g);}if(!await G.W(800))return;
 const bw=Math.min(150,540/m),bx=j=>300-(m*bw)/2+j*bw+bw/2;
 for(let j=0;j<m;j++){const pl=G.E('ellipse',{cx:bx(j),cy:240,rx:bw/2-8,ry:30,fill:'#fff',stroke:'#94a3b8','stroke-width':3});G.pop(pl);G.tx(bx(j),292,p.mode==='group'?(p.box||'')+' '+(j+1):'คนที่ '+(j+1),{fs:15,fill:'#475569'});}
 it.forEach(g=>G.svg.append(g));/* ของอยู่บนจานเสมอ */if(!await G.W(500))return;
 const give=p.mode==='left'?m*per:p.N;for(let i=0;i<give;i++){const j=p.mode==='group'?Math.floor(i/p.n2):i%m,s=p.mode==='group'?i%p.n2:Math.floor(i/m);const x=bx(j)+(s-(per-1)/2)*Math.min(26,(bw-20)/Math.max(1,per)),y=238;G.move(it[i],x-ix(i),y-iy(i),500);G.sfx('pop',i%8);
  if(p.mode==='group')G.cap(p.box+'ที่ '+(j+1)+': ใส่ '+(s+1));else G.cap('แจกรอบที่ '+(s+1));if(!await G.W(p.N>12?220:380))return;}
 if(p.mode==='left'){it.slice(give).forEach(g=>{g.style.filter='drop-shadow(0 0 6px #facc15)';G.pulse(g);G.tc(g,0,0);});G.sfx('chime');G.cap('แจกคนละ '+per+' ไป '+m+' คน ใช้ไป '+give+' เหลือ '+(p.N-give));G.pop(G.tx(300,150,p.N+' − '+Array(m).fill(per).join(' − ')+' = '+(p.N-give),{fs:26,w:700}));return;}
 G.sfx('chime');G.cap(p.mode==='group'?'ได้ '+m+' '+p.box:'ได้คนละ '+per);const r=G.tx(300,150,p.mode==='group'?p.N+' แบ่งทีละ '+p.n2+' ได้ '+m+' '+p.box:p.N+' แจก '+m+' คน ได้คนละ '+per,{fs:26,w:700});G.pop(r);};
/* ---------- นับในภาพ ---------- */
R.count=async(p,G)=>{const [vw,vh]=p.fig.vb,k=Math.min(560/vw,260/vh),ox=300-vw*k/2,oy=20;let n=0;
 for(const [x,y,e,fs] of p.fig.txt){const X=ox+x*k,Y=oy+y*k,t=G.tx(X,Y,e,{fs:(fs||30)*k*.9,a:{opacity:e===p.e?1:.3}});G.pop(t,200);}
 G.cap('นับเฉพาะ '+p.e+' ทีละตัว');if(!await G.W(800))return;
 const ts=p.fig.txt.filter(x=>x[2]===p.e).sort((a,b)=>a[0]-b[0]||a[1]-b[1]);for(const [x,y] of ts){n++;const X=ox+x*k,Y=oy+y*k;G.E('circle',{cx:X,cy:Y,r:22*k*1.2,fill:'none',stroke:'#ec4899','stroke-width':3});G.tx(X+22*k,Y-22*k,String(n),{fs:18,w:700,fill:'#ec4899'});G.sfx('pop',n);G.cap('นับได้ '+n);if(!await G.W(500))return;}
 G.sfx('chime');G.cap('มี '+p.e+' ทั้งหมด '+p.c);};
/* ---------- นับขา มือ ---------- */
R.groups=async(p,G)=>{if(p.se){/* แลกของ: ของ 1 ชิ้น แลกได้ k ชิ้น */const n=p.gs[0].c,k=p.gs[0].k,sw=Math.min(90,540/n),xs=j=>300-(n*sw)/2+j*sw+sw/2;let run=0;
  for(let j=0;j<n;j++){G.pop(G.tx(xs(j),70,p.gs[0].e,{fs:40}));}G.cap(p.per?'ให้คนละ '+k:'แลกทีละ 1 ได้ '+k);if(!await G.W(800))return;
  for(let j=0;j<n;j++){G.E('line',{x1:xs(j),y1:95,x2:xs(j),y2:130,stroke:'#94a3b8','stroke-width':2});for(let i=0;i<k;i++){const y=150+i*34,t=G.tx(xs(j),y,p.se,{fs:26});G.pop(t,200);G.tc(t,xs(j),y);}run+=k;G.tx(xs(j),150+k*34+6,String(run),{fs:20,w:700,fill:'#ec4899'});G.sfx('pop',j);G.cap('ได้ '+p.part+' '+run);if(!await G.W(650))return;}
  G.sfx('chime');G.cap(Array(n).fill(k).join(' + ')+' = '+p.tot);if(!await G.W(900))return;G.tapOn(p.tot);return;}
const n=p.gs.reduce((s,g)=>s+g.c,0),sw=Math.min(110,540/n);let i=0,run=0;const xs=j=>300-(n*sw)/2+j*sw+sw/2;
 for(const g of p.gs)for(let c=0;c<g.c;c++){const x=xs(i);const e=G.tx(x,90,g.e,{fs:46});G.pop(e);i++;}G.cap('นับทีละตัว ตัวละ '+[...new Set(p.gs.map(g=>g.k))].join(' หรือ ')+' '+p.part);if(!await G.W(900))return;
 i=0;for(const g of p.gs)for(let c=0;c<g.c;c++){const x=xs(i);for(let k=0;k<g.k;k++){const dx=(k-(g.k-1)/2)*Math.min(13,(sw-12)/g.k),d=G.E('circle',{cx:x+dx,cy:160,r:5.5,fill:C[i%C.length]});G.pop(d,200);G.tc(d,x+dx,160);}
  run+=g.k;G.tx(x,200,String(run),{fs:24,w:700,fill:'#ec4899'});G.sfx('pop',i);G.cap('นับต่อ: '+run);i++;if(!await G.W(700))return;}
 G.sfx('chime');const r=G.tx(300,262,p.gs.flatMap(g=>Array(g.c).fill(g.k)).join(' + ')+' = '+p.tot,{fs:28,w:700});G.pop(r);G.cap('รวม '+p.tot+' '+p.part);if(!await G.W(900))return;G.tapOn(p.tot);};
/* ---------- จับคู่ มากกว่า/น้อยกว่า ---------- */
R.diff=async(p,G)=>{const n=Math.max(p.a,p.b),sw=Math.min(32,500/n),x=i=>300-(n*sw)/2+i*sw+sw/2,rows=[[p.a,90,p.ea,C[0],p.na],[p.b,200,p.eb,C[1],p.nb]],els=[[],[]];
 for(let r=0;r<2;r++){const [c,y,e,col,nm]=rows[r];if(nm)G.tx(40,y,nm,{fs:16,w:700,a:{'text-anchor':'start'}});for(let i=0;i<c;i++){const g=G.E('g',{});if(e)G.tx(x(i),y,e,{fs:Math.min(26,sw-2),p:g});else G.E('circle',{cx:x(i),cy:y,r:Math.min(12,sw/2-2),fill:col},g);G.pop(g,200);els[r].push(g);}
  G.tx(565,y,String(c),{fs:26,w:700,fill:col});if(!await G.W(500))return;}
 G.cap('จับคู่ทีละคู่');const m=Math.min(p.a,p.b);for(let i=0;i<m;i++){G.E('line',{x1:x(i),y1:106,x2:x(i),y2:184,stroke:'#94a3b8','stroke-width':2});G.sfx('pop',i%8);if(!await G.W(150))return;}
 const big=p.a>p.b?0:1,ex=els[big].slice(m);ex.forEach(e=>{e.style.filter='drop-shadow(0 0 6px #facc15)';G.pulse(e);});
 const d=Math.abs(p.a-p.b);G.sfx('chime');
 if(p.ask==='num'){G.cap('เหลือที่ไม่มีคู่ '+d+' → '+Math.max(p.a,p.b)+' มากกว่า '+Math.min(p.a,p.b)+' อยู่ '+d);G.tx(300,282,Math.max(p.a,p.b)+' − '+Math.min(p.a,p.b)+' = '+d,{fs:28,w:700});}
 else G.cap(p.a===p.b?'จับคู่ครบพอดี จึงเท่ากัน':'แถวที่เหลือไม่มีคู่ คือ '+(big?p.nb:p.na)+' มีมากกว่า '+d);};
/* ---------- เส้นจำนวน: มาก/น้อย เรียงลำดับ ---------- */
R.line=async(p,G)=>{const w=winOf(p.vs);if(!w)return;const X=nline(G,w[0],w[1],235),mk=[];const ys=[175,135,95];
 const order=p.how==='down'?p.vs.slice():p.vs.slice().sort((a,b)=>a-b);
 G.cap('วางตัวเลขบนเส้นจำนวน: ยิ่งไปทางขวา ยิ่งมาก');
 for(let i=0;i<order.length;i++){const v=order[i],near=mk.filter(m=>Math.abs(X(m.v)-X(v))<34).length,y=ys[near%3];const g=G.E('g',{});G.E('line',{x1:X(v),y1:y+14,x2:X(v),y2:228,stroke:C[i%C.length],'stroke-width':2.5},g);G.E('circle',{cx:X(v),cy:y,r:20,fill:C[i%C.length]},g);G.tx(X(v),y,String(v),{fs:16,w:700,fill:'#fff',p:g});G.pop(g);mk.push({v,g});G.sfx('pop',i);if(!await G.W(650))return;}
 if(p.how==='max'||p.how==='min'||p.how==='mid'){const m=mk.find(m=>m.v===p.tg);G.pulse(m.g);m.g.style.filter='drop-shadow(0 0 8px #facc15)';G.tx(X(p.tg),40,p.how==='max'?'👑':p.how==='min'?'🌱':'⭐',{fs:34});
  G.cap(p.how==='max'?p.tg+(p.unit?' '+p.unit:'')+' อยู่ขวาสุด จึงมากที่สุด':p.how==='min'?p.tg+(p.unit?' '+p.unit:'')+' อยู่ซ้ายสุด จึงน้อยที่สุด':'เรียงแล้ว '+p.tg+' อยู่ตรงกลาง');}
 else if(p.how==='up'||p.how==='down'){const ar=G.tx(300,40,p.how==='up'?'น้อย  ➜ ➜ ➜  มาก':'น้อย  ⬅ ⬅ ⬅  มาก',{fs:24,w:700,fill:'#7c3aed'});G.pop(ar);G.cap(p.how==='up'?'น้อยไปมาก: อ่านจากซ้ายไปขวา '+p.vs.join('  '):'มากไปน้อย: เริ่มจากทางขวา อ่านไปทางซ้าย '+p.vs.join('  '));}
 else{const [a,b]=p.vs,s=p.sym;G.cap(a===b?a+' เท่ากับ '+b:(a>b?a+' อยู่ทางขวาของ '+b+' จึงมากกว่า':a+' อยู่ทางซ้ายของ '+b+' จึงน้อยกว่า'));const r=G.tx(300,40,a+'  '+s+'  '+b,{fs:40,w:700,fill:'#7c3aed'});G.pop(r);G.tx(300,78,s==='='?'เท่ากัน':'ปากจระเข้อ้าหาเลขที่มากกว่า',{fs:16,fill:'#475569'});}
 G.sfx('chime');};
/* ---------- ก่อน หลัง ระหว่าง ---------- */
R.order=async(p,G)=>{const c=p.ref[0],lo=Math.max(0,c-5),X=nline(G,lo,lo+10,215);
 p.ref.forEach(v=>{const g=G.E('circle',{cx:X(v),cy:215,r:13,fill:'#60a5fa'});G.pop(g);});G.cap(p.how==='mid'?'หา '+p.ref[0]+' กับ '+p.ref[1]+' บนเส้นจำนวน':'หา '+c+' บนเส้นจำนวน');if(!await G.W(900))return;
 const x0=X(p.how==='mid'?p.ref[0]:c),x1=X(p.A),pa=G.E('path',{d:'M'+x0+' 205 Q'+((x0+x1)/2)+' 140 '+x1+' 205',fill:'none',stroke:'#ec4899','stroke-width':4});G.pop(pa);
 const g=G.E('circle',{cx:x1,cy:215,r:16,fill:'#ec4899'});G.pop(g,500);G.tx(x1,160,String(p.A),{fs:34,w:700,fill:'#ec4899'});G.sfx('chime');
 G.cap(p.how==='before'?'ก่อน '+c+' = ถอยไปทางซ้าย 1 ช่อง คือ '+p.A:p.how==='after'?'ถัดจาก '+c+' = ไปทางขวา 1 ช่อง คือ '+p.A:'ตรงกลางระหว่าง '+p.ref[0]+' กับ '+p.ref[1]+' คือ '+p.A);};
/* ---------- หลักสิบ หลักหน่วย ---------- */
R.pv=async(p,G)=>{const rs=[],cs=[],RX=i=>40+i*24,CX=j=>[330+(j%5)*22,70+Math.floor(j/5)*22];
 G.tx(150,26,'มัดละ 10 (สิบ)',{fs:17,w:700,fill:'#2563eb'});G.tx(390,26,'อันเดี่ยว (หน่วย)',{fs:17,w:700,fill:'#d97706'});
 for(let i=0;i<p.t0;i++){const r=rod(G,RX(i),55,'#93c5fd');G.pop(r);rs.push(r);}for(let j=0;j<p.u0;j++){const [x,y]=CX(j);const c=G.E('rect',{x,y,width:18,height:18,rx:3,fill:'#fdba74',stroke:'#334155','stroke-width':1.3});G.pop(c);cs.push(c);}if(!await G.W(800))return;
 let t=p.t0,u=p.u0;
 if(p.reg){G.cap(u+' อัน ครบ 10 มัดได้อีก 1 มัด');cs.slice(0,10).forEach(c=>c.setAttribute('fill','#fde047'));if(!await G.W(900))return;cs.slice(0,10).forEach(c=>G.fade(c,0));const nr=rod(G,RX(t),55,'#fde047');G.pop(nr,500);rs.push(nr);t++;u-=10;G.sfx('chime');if(!await G.W(900))return;}
 let run=0;for(let i=0;i<t;i++){run+=10;G.tx(RX(i)+7,172,String(run),{fs:14,w:700,fill:'#2563eb'});G.cap('นับทีละสิบ: '+run);G.sfx('pop',i);if(!await G.W(500))return;}
 for(let j=0;j<u;j++){run++;const [x,y]=CX(p.reg?j+10:j);G.tx(x+9,y+30,String(run),{fs:11,w:700,fill:'#d97706'});G.cap('นับต่อทีละหนึ่ง: '+run);G.sfx('pop',j);if(!await G.W(380))return;}
 G.sfx('chime');const r=G.tx(300,250,t+' สิบ กับ '+u+' หน่วย = '+(t*10+u),{fs:30,w:700});G.pop(r);G.cap(t+' สิบ '+u+' หน่วย คือ '+(t*10+u));};
/* ---------- เลขคู่ เลขคี่ ---------- */
R.oddeven=async(p,G)=>{const n=p.vs.length,ys=n===1?[150]:n===2?[105,205]:[75,160,245];
 for(let r=0;r<n;r++){const v=p.vs[r],y=ys[r];G.tx(40,y,String(v),{fs:26,w:700});
  for(let i=0;i<v;i++){const col=Math.floor(i/2),x=80+col*Math.min(30,470/Math.ceil(v/2)),yy=y+(i%2?14:-14);const d=G.E('circle',{cx:x,cy:yy,r:8,fill:C[r]});G.pop(d,180);}
  if(!await G.W(500))return;const odd=v%2===1;if(odd){const col=Math.floor((v-1)/2),x=80+col*Math.min(30,470/Math.ceil(v/2));G.E('circle',{cx:x,cy:y-14,r:13,fill:'none',stroke:'#e11d48','stroke-width':3});}
  G.tx(560,y,odd?'คี่':'คู่',{fs:22,w:700,fill:odd?'#e11d48':'#16a34a'});G.sfx('pop',r);if(!await G.W(700))return;}
 G.cap(p.share?(p.ev?'แบ่งเป็นคู่ได้ครบ ได้คนละ '+p.vs[0]/2+' พอดี':'แบ่งแล้วเหลือ 1 ชิ้น จึงแบ่งให้สองคนเท่ากันพอดีไม่ได้'):p.ev?'จับคู่ได้ครบทุกเม็ด ไม่มีเหลือ = เลขคู่':'จับคู่แล้วเหลือ 1 เม็ด = เลขคี่');G.sfx('chime');};
/* ---------- วันในสัปดาห์ ---------- */
R.week=async(p,G)=>{const cx=300,cy=165,rr=118,pos=i=>[cx+rr*Math.sin(i/7*2*Math.PI),cy-rr*Math.cos(i/7*2*Math.PI)],nd=[];
 DAYS.forEach((d,i)=>{const [x,y]=pos(i),g=G.E('g',{});G.E('circle',{cx:x,cy:y,r:32,fill:DCOL[i],stroke:'#fff','stroke-width':3},g);G.tx(x,y,d.length>4?d.slice(0,4)+'.':d,{fs:14,w:700,fill:i===1?'#3b3b4f':'#fff',p:g});G.pop(g,250);nd.push(g);});
 G.tx(cx,cy,'↻',{fs:40,fill:'#cbd5e1'});if(!await G.W(700))return;
 if(p.count){for(let i=0;i<7;i++){const [x,y]=pos(i);G.tx(x,y-44,String(i+1),{fs:18,w:700,fill:'#ec4899'});G.sfx('pop',i);G.cap('นับ '+(i+1)+' วัน');if(!await G.W(400))return;}G.cap('หนึ่งสัปดาห์มี 7 วัน');G.sfx('chime');return;}
 let cur=p.st;const ring=G.E('circle',{cx:pos(cur)[0],cy:pos(cur)[1],r:40,fill:'none',stroke:'#3b3b4f','stroke-width':5});
 G.cap(p.why==='ord'?'เริ่มนับวันอาทิตย์เป็นวันที่ 1':p.why==='yest'?'เมื่อวานเป็นวัน'+DAYS[p.st]:'วันนี้วัน'+DAYS[p.st]);if(!await G.W(900))return;
 const sg=p.d<0?-1:1;for(let k=1;k<=Math.abs(p.d);k++){cur=((cur+sg)%7+7)%7;const [x,y]=pos(cur);ring.setAttribute('cx',x);ring.setAttribute('cy',y);G.tx(x,y-44,String(p.why==='ord'?k+1:k),{fs:16,w:700,fill:'#ec4899'});G.sfx('pop',k%8);
  G.cap(p.why==='ord'?'วันที่ '+(k+1):(sg<0?'ถอยหลัง ':'เดินหน้า ')+k+' วัน');if(!await G.W(450))return;}
 G.pulse(nd[cur]);G.sfx('chime');G.cap(p.why==='ord'?'วันลำดับที่ '+(p.d+1)+' คือวัน'+DAYS[cur]:p.why==='yest'?'วันนี้ = ถัดจากเมื่อวาน 1 วัน คือวัน'+DAYS[cur]:p.why==='เมื่อวาน'?'เมื่อวาน = ถอยหลัง 1 วัน คือวัน'+DAYS[cur]:p.why==='พรุ่งนี้'?'พรุ่งนี้ = เดินหน้า 1 วัน คือวัน'+DAYS[cur]:'อีก '+p.d+' วัน คือวัน'+DAYS[cur]+(p.d%7===0?' (ครบ 7 วันวนกลับมาวันเดิม)':''));};
/* ---------- เดือน ---------- */
R.month=async(p,G)=>{const pos=i=>[60+(i%6)*96,90+Math.floor(i/6)*90],nd=[];
 MON.forEach((m,i)=>{const [x,y]=pos(i),d=i===1?28:/ยน$/.test(m)?30:31,g=G.E('g',{});const col=p.how==='days'?(d===31?'#bfdbfe':d===30?'#fde68a':'#fecaca'):'#e0e7ff';roundRect(G,x-44,y-28,88,56,col,'#94a3b8',10,g);G.tx(x,y-6,m.length>7?m.slice(0,7)+'.':m,{fs:13,w:700,p:g});
  if(p.how==='days')G.tx(x,y+15,d===28?'28/29':String(d),{fs:13,fill:'#475569',p:g});G.pop(g,220);nd.push(g);});
 if(!await G.W(700))return;
 if(p.how==='count'){for(let i=0;i<12;i++){const [x,y]=pos(i);G.tx(x,y-40,String(i+1),{fs:16,w:700,fill:'#ec4899'});G.sfx('pop',i%8);G.cap('นับ '+(i+1)+' เดือน');if(!await G.W(300))return;}G.cap('หนึ่งปีมี 12 เดือน');G.sfx('chime');return;}
 const hi=i=>{nd[i].style.filter='drop-shadow(0 0 8px #f59e0b)';G.pulse(nd[i]);};
 if(p.how==='mid'){hi(p.a);hi(p.b);G.cap('หาเดือน'+MON[p.a]+' กับ '+MON[p.b]);if(!await G.W(1000))return;hi(p.c);G.cap('ตรงกลางคือ '+MON[p.c]);}
 else if(p.how==='first'){hi(0);G.cap('เดือนแรกของปี คือ มกราคม');}else if(p.how==='last'){hi(11);G.cap('เดือนสุดท้ายของปี คือ ธันวาคม');}
 else{hi(p.c);G.tx(300,265,'ลงท้าย "คม" มี 31 วัน · ลงท้าย "ยน" มี 30 วัน · กุมภาพันธ์ 28/29 วัน',{fs:16,w:700,fill:'#475569'});G.cap(MON[p.c]+' มี '+(p.c===1?'28 หรือ 29':/ยน$/.test(MON[p.c])?30:31)+' วัน');}
 G.sfx('chime');};
/* ---------- นาฬิกา ---------- */
R.clock=async(p,G)=>{const cx=300,cy=160,r=120;G.E('circle',{cx,cy,r,fill:'#fff',stroke:'#3b3b4f','stroke-width':5});
 for(let i=1;i<=12;i++){const a=i/12*2*Math.PI;G.tx(cx+(r-22)*Math.sin(a),cy-(r-22)*Math.cos(a),String(i),{fs:18,w:700});}
 G.E('line',{x1:cx,y1:cy,x2:cx,y2:cy-58,stroke:'#3b3b4f','stroke-width':7,'stroke-linecap':'round'});const sec=G.E('path',{d:'',fill:'#bfdbfe',opacity:.8});
 const hand=G.E('line',{x1:cx,y1:cy,x2:cx,y2:cy-98,stroke:'#e11d48','stroke-width':5,'stroke-linecap':'round'});G.E('circle',{cx,cy,r:7,fill:'#3b3b4f'});
 G.cap('เข็มยาว เดินหนึ่งช่องตัวเลข = 5 นาที');if(!await G.W(800))return;
 for(let m=5;m<=p.mins;m+=5){const a=m/60*2*Math.PI,x=cx+98*Math.sin(a),y=cy-98*Math.cos(a);hand.setAttribute('x2',x);hand.setAttribute('y2',y);
  sec.setAttribute('d','M'+cx+' '+cy+' L'+cx+' '+(cy-r+8)+' A'+(r-8)+' '+(r-8)+' 0 '+(m>30?1:0)+' 1 '+(cx+(r-8)*Math.sin(a))+' '+(cy-(r-8)*Math.cos(a))+'Z');
  G.tx(cx+(r+20)*Math.sin(a),cy-(r+20)*Math.cos(a),String(m),{fs:13,w:700,fill:'#e11d48'});G.sfx('pop',(m/5)%8);G.cap(m+' นาที');if(!await G.W(330))return;}
 G.sfx('chime');G.cap(p.mins===30?'ครึ่งชั่วโมง = เข็มยาวเดินครึ่งรอบ = 30 นาที':'หนึ่งชั่วโมง = เข็มยาวเดินครบรอบ = 60 นาที');};
/* ---------- โหล สัปดาห์ คู่ ---------- */
R.unit=async(p,G)=>{let run=0;
 if(p.how==='dozen'){for(let d=0;d<p.n;d++){const ox=p.n>1?(d?320:40):180;roundRect(G,ox-10,40,260,120,'#fef3c7','#d97706',16);
   for(let i=0;i<12;i++){const x=ox+20+(i%6)*40,y=75+Math.floor(i/6)*50;const g=G.E('g',{});G.tx(x,y,p.e,{fs:28,p:g});G.pop(g,200);if(p.half&&i>=6)G.fade(g,.25);else{G.tc(g,x,y);run++;G.tx(x,y+24,String(run),{fs:12,w:700,fill:'#ec4899'});}G.sfx('pop',i%8);if(!await G.W(170))return;}}
  G.sfx('chime');G.cap(p.half?'ครึ่งโหล = ครึ่งหนึ่งของ 12 = 6':p.n+' โหล = '+p.c);const r=G.tx(300,255,p.half?'1 โหล = 12 → ครึ่งโหล = 6':p.n>1?Array(p.n).fill(12).join(' + ')+' = '+p.c:'1 โหล = 12',{fs:28,w:700});G.pop(r);}
 else if(p.how==='week'){for(let w=0;w<p.n;w++){for(let i=0;i<7;i++){const x=90+i*70,y=70+w*70,g=G.E('g',{});G.E('circle',{cx:x,cy:y,r:24,fill:DCOL[i]},g);G.tx(x,y,DAYS[i].slice(0,2),{fs:13,w:700,fill:'#fff',p:g});G.pop(g,180);G.tc(g,x,y);run++;G.sfx('pop',i);if(!await G.W(140))return;}
   G.tx(565,70+w*70,String(run),{fs:22,w:700,fill:'#ec4899'});G.cap('สัปดาห์ที่ '+(w+1)+' → นับได้ '+run+' วัน');if(!await G.W(600))return;}
  G.sfx('chime');const r=G.tx(300,290,Array(p.n).fill(7).join(' + ')+' = '+p.c+' วัน',{fs:28,w:700});G.pop(r);}
 else{for(let i=0;i<p.n;i++)for(let k=0;k<2;k++){const x=300-(p.n*130)/2+i*130+43+k*44,g=G.E('g',{});G.tx(x,140,p.e,{fs:48,p:g});G.pop(g);G.tc(g,x,140);run++;G.tx(x,185,String(run),{fs:16,w:700,fill:'#ec4899'});if(!await G.W(350))return;}G.cap('1 คู่ = 2 ข้าง');}
 if(!await G.W(800))return;G.tapOn(p.half?6:p.c);};
/* ---------- ใครสูง / หนักที่สุด ---------- */
function kid(G,x,base,h,nm,col,p){const g=G.E('g',{},p);const hr=16;G.E('rect',{x:x-16,y:base-h+hr*2,width:32,height:h-hr*2,rx:12,fill:col},g);G.E('circle',{cx:x,cy:base-h+hr,r:hr,fill:'#fcd9b6',stroke:'#c08457','stroke-width':2},g);
 G.E('circle',{cx:x-5,cy:base-h+hr-2,r:2.2,fill:'#3b3b4f'},g);G.E('circle',{cx:x+5,cy:base-h+hr-2,r:2.2,fill:'#3b3b4f'},g);G.E('path',{d:'M'+(x-5)+' '+(base-h+hr+6)+' Q'+x+' '+(base-h+hr+10)+' '+(x+5)+' '+(base-h+hr+6),stroke:'#3b3b4f','stroke-width':1.6,fill:'none'},g);
 G.tx(x,base+18,nm,{fs:16,w:700,p:g});return g;}
R.rank=async(p,G)=>{const H={},Wd={},col={},hi=w=>/สูง|หนัก|ใหญ่|เร็ว/.test(w);const hs=[190,145,100];p.ord.forEach((n,i)=>{H[n]=hs[i];col[n]=C[i];});const base=280;
 if(p.dim==='h'){
  for(let s=0;s<2;s++){const [a,w,b]=p.rel[s];G.cap(a+' '+w+'กว่า '+b);const g=G.E('g',{});const xa=s?380:90,xb=s?500:210;kid(G,xa,base,H[a],a,col[a],g);kid(G,xb,base,H[b],b,col[b],g);
   G.E('line',{x1:xa-30,y1:base-H[a],x2:xb+30,y2:base-H[a],stroke:'#94a3b8','stroke-width':2,'stroke-dasharray':'5 5'},g);G.pop(g);G.sfx('pop',s);if(!await G.W(1600))return;}
  G.svg.innerHTML='';G.cap('เอามาเรียงกัน: '+p.ord.join(' > '));
  p.ord.forEach((n,i)=>{const g=kid(G,170+i*130,base,H[n],n,col[n]);G.pop(g);});G.tx(300,30,'สูง ➜ ➜ เตี้ย',{fs:22,w:700,fill:'#7c3aed'});}
 else if(p.dim==='s'||p.dim==='r'){const sz={};p.ord.forEach((n,i)=>sz[n]=[72,56,40][i]);
  for(let s=0;s<2;s++){const [a,w,b]=p.rel[s];G.cap(a+' '+w+'กว่า '+b);const g=G.E('g',{});
   if(p.dim==='s'){G.tx(s?380:110,170,'🧒',{fs:sz[a],p:g});G.tx(s?380:110,230,a,{fs:16,w:700,p:g});G.tx(s?500:230,170,'🧒',{fs:sz[b],p:g});G.tx(s?500:230,230,b,{fs:16,w:700,p:g});G.pop(g);}
   else{const y=s?190:90,fa=hi(w),xa=fa?260:180,xb=fa?180:260;G.E('line',{x1:40,y1:y+26,x2:300,y2:y+26,stroke:'#cbd5e1','stroke-width':2},g);G.tx(xa,y,'🏃',{fs:40,p:g});G.tx(xa,y-30,a,{fs:14,w:700,p:g});G.tx(xb,y,'🏃',{fs:40,p:g});G.tx(xb,y-30,b,{fs:14,w:700,p:g});G.tx(320,y,'🏁',{fs:30,p:g});G.pop(g);}
   G.sfx('pop',s);if(!await G.W(1600))return;}
  G.svg.innerHTML='';G.cap('เอามาเรียงกัน: '+p.ord.join(' > '));
  if(p.dim==='s')p.ord.forEach((n,i)=>{const g=G.E('g',{});G.tx(160+i*140,160,'🧒',{fs:sz[n],p:g});G.tx(160+i*140,225,n,{fs:18,w:700,p:g});G.pop(g);});
  else{G.tx(300,40,'🥇🥈🥉',{fs:1});p.ord.forEach((n,i)=>{const x=[300,170,430][i],h=[150,110,80][i],g=G.E('g',{});G.E('rect',{x:x-60,y:290-h,width:120,height:h,fill:['#facc15','#cbd5e1','#fdba74'][i],rx:8},g);G.tx(x,290-h/2,String(i+1),{fs:36,w:700,fill:'#fff',p:g});G.tx(x,290-h-36,'🏃',{fs:40,p:g});G.tx(x,290-h-72,n,{fs:16,w:700,p:g});G.pop(g);});}
  G.tx(300,30,p.dim==='s'?'ตัวใหญ่ ➜ ➜ ตัวเล็ก':'ถึงก่อน = วิ่งเร็วกว่า',{fs:22,w:700,fill:'#7c3aed'});}
 else{
  const bal=(x,l,r,s)=>{const g=G.E('g',{});G.E('path',{d:'M'+x+' 250 l-24 30 h48 z',fill:'#94a3b8'},g);const bm=G.E('g',{},g);bm.style.transformBox='view-box';bm.style.transformOrigin=x+'px 250px';G.E('line',{x1:x-100,y1:250,x2:x+100,y2:250,stroke:'#475569','stroke-width':6,'stroke-linecap':'round'},bm);
   G.tx(x-100,222,'🧒',{fs:34,p:bm});G.tx(x+100,222,'🧒',{fs:34,p:bm});G.tx(x-100,186,l,{fs:15,w:700,p:bm});G.tx(x+100,186,r,{fs:15,w:700,p:bm});bm.style.transition=G.F?'none':'transform 1s';G.pop(g);return bm;};
  for(let s=0;s<2;s++){const [a,w,b]=p.rel[s],heavy=w==='หนัก'?a:b;G.cap(a+' '+w+'กว่า '+b);const bm=bal(s?450:150,a,b,s);if(!await G.W(400))return;bm.style.transform='rotate('+(heavy===a?-12:12)+'deg)';G.sfx('pop',s);if(!await G.W(1500))return;}
  G.svg.innerHTML='';G.cap('เอามาเรียงกัน: '+p.ord.join(' > '));p.ord.forEach((n,i)=>{const g=G.E('g',{});G.tx(160+i*140,160,'🧒',{fs:60-i*10,p:g});G.tx(160+i*140,225,n,{fs:18,w:700,p:g});G.pop(g);});G.tx(300,40,'หนัก ➜ ➜ เบา',{fs:22,w:700,fill:'#7c3aed'});}
 if(!await G.W(900))return;const i=p.ord.indexOf(p.want);if(p.dim!=='r')G.tx((p.dim==='h'?170+i*130:160+i*140),p.dim==='h'?base-H[p.want]-26:80,'⭐',{fs:34});G.sfx('chime');G.cap('ดังนั้น '+p.want+' '+p.ask+'ที่สุด');};
/* ---------- แถวซ้าย-ขวา ---------- */
R.row=async(p,G)=>{const n=p.items.length,x=i=>300-(n*90)/2+i*90+45;p.items.forEach((e,i)=>{const t=G.tx(x(i),130,e,{fs:50});G.pop(t);});
 const l=G.tx(70,230,'✋ ซ้ายมือของหนู',{fs:18,w:700,fill:'#2563eb'}),r=G.tx(530,230,'ขวามือของหนู 🤚',{fs:18,w:700,fill:'#d97706'});G.pop(l);G.pop(r);G.E('line',{x1:150,y1:262,x2:450,y2:262,stroke:'#94a3b8','stroke-width':3,'marker-end':''});
 G.cap('ซ้าย-ขวา ดูจากมือของหนูเอง');if(!await G.W(1100))return;
 const ring=G.E('rect',{x:x(p.ref!=null?p.ref:p.side==='r'?n-1:0)-38,y:88,width:76,height:84,rx:14,fill:'none',stroke:'#ec4899','stroke-width':5});G.pop(ring);
 if(p.ref!=null){G.cap('เริ่มที่ภาพนี้ แล้วไปทาง'+(p.side==='r'?'ขวา':'ซ้าย')+' 1 ช่อง');if(!await G.W(1100))return;ring.setAttribute('x',x(p.ix)-38);G.sfx('pop',2);}
 G.sfx('chime');G.cap(p.ref!=null?'ถัดไปทาง'+(p.side==='r'?'ขวา':'ซ้าย')+' คือภาพนี้':p.side==='r'?'ภาพที่อยู่ใกล้มือขวาที่สุด = ขวาสุด':'ภาพที่อยู่ใกล้มือซ้ายที่สุด = ซ้ายสุด');};
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
R.turn=async(p,ctx)=>{const st=ctx.stage;st.innerHTML='';st.style.perspective='900px';const wrap=document.createElement('div');wrap.className='x2turn';
 wrap.innerHTML='<div class="x2flip"><div class="fa">'+kidCard(p.face,p.hand)+'</div><div class="fb">'+kidCard(p.face==='front'?'back':'front',p.hand)+'</div></div><div class="x2lr"><span>⬅ ซ้ายของเรา</span><span>ขวาของเรา ➡</span></div>';st.append(wrap);
 const fl=wrap.querySelector('.x2flip'),cap=s=>ctx.cap.textContent=s,W=async ms=>ctx.fast?true:await ctx.W(ms);if(ctx.fast)fl.style.transition='none';
 const side=(face)=>((p.hand==='right')===(face==='front')?'ซ้าย':'ขวา');
 cap('เขา'+(p.face==='front'?'หันหน้าหาเรา':'หันหลังให้เรา')+' มือ'+(p.hand==='right'?'ขวา':'ซ้าย')+'ของเขาอยู่ฝั่ง'+side(p.face)+'ของเรา');if(!await W(2600))return;
 fl.style.transform='rotateY(180deg)';try{ctx.SFX.whoosh()}catch(e){}cap('ถ้าเขาหมุนตัวไป'+(p.face==='front'?'หันหลัง':'หันหน้า')+' มือ'+(p.hand==='right'?'ขวา':'ซ้าย')+'ของเขาจะไปอยู่ฝั่ง'+side(p.face==='front'?'back':'front')+'ของเรา');if(!await W(3000))return;
 fl.style.transform='rotateY(0deg)';cap(p.face==='front'?'หันหน้าหาเรา ซ้าย-ขวาจะกลับกับของเรา':'หันหลังให้เรา ซ้าย-ขวาตรงกับของเรา');};
/* ---------- กระจก / ในน้ำ ---------- */
R.mirror=async(p,G)=>{const w=p.water,big=p.letter?80:70;
 if(w){G.E('rect',{x:40,y:165,width:520,height:150,fill:'#bfdbfe',opacity:.7});G.tx(530,185,'น้ำ',{fs:16,w:700,fill:'#2563eb'});}else{G.E('line',{x1:300,y1:30,x2:300,y2:300,stroke:'#60a5fa','stroke-width':6});G.tx(300,316,'กระจก',{fs:15,w:700,fill:'#2563eb'});}
 const ox=w?300:170,oy=w?100:165;const o=G.tx(ox,oy,p.ch,{fs:big,w:700,fill:'#3b3b4f'});G.pop(o);G.cap(p.same?'ลองพับครึ่งดู ซ้ายกับขวาเหมือนกันไหม':'ของจริง');if(!await G.W(900))return;
 const m=G.tx(ox,oy,p.ch,{fs:big,w:700,fill:'#ec4899'});m.style.transformBox='fill-box';m.style.transformOrigin='center';
 const to=w?'translate(0px,130px) scaleY(-1)':(p.same?'scaleX(-1)':'translate(260px,0px) scaleX(-1)');
 if(p.same){m.style.transform='translate(260px,0px)';if(!G.F)m.animate([{transform:'translate(260px,0px) scaleX(1)'},{transform:'translate(260px,0px) scaleX(-1)'}],{duration:1200,fill:'forwards'});else m.style.transform='translate(260px,0px) scaleX(-1)';}
 else{if(!G.F)m.animate([{transform:'translate(0,0) scale(1,1)'},{transform:to}],{duration:1400,easing:'ease-in-out',fill:'forwards'});else m.style.transform=to;}
 G.sfx('whoosh');if(!await G.W(1500))return;G.sfx('chime');
 G.cap(p.same?'พลิกซ้ายเป็นขวาแล้ว ยังเหมือนเดิม':w?'ในน้ำ ภาพกลับหัว บนเป็นล่าง'+(p.letter?' '+p.ch+' จึงเป็น '+p.to:''):'ในกระจก ซ้ายกลับเป็นขวา'+(p.letter?' '+p.ch+' จึงเป็น '+p.to:''));};
/* ---------- ดวงอาทิตย์ เงา ---------- */
R.sun=async(p,G)=>{G.E('rect',{x:0,y:0,width:600,height:250,fill:'#e0f2fe'});G.E('rect',{x:0,y:250,width:600,height:80,fill:'#bbf7d0'});
 G.tx(60,300,'ตะวันออก',{fs:16,w:700,fill:'#b45309'});G.tx(540,300,'ตะวันตก',{fs:16,w:700,fill:'#7c3aed'});G.tx(60,275,'(ดวงอาทิตย์ขึ้น)',{fs:12,fill:'#475569'});G.tx(540,275,'(ดวงอาทิตย์ตก)',{fs:12,fill:'#475569'});
 G.E('path',{d:'M60 245 Q300 -155 540 245',fill:'none',stroke:'#fbbf24','stroke-width':2,'stroke-dasharray':'6 8'});
 const sh=G.E('line',{x1:300,y1:250,x2:300,y2:250,stroke:'#334155','stroke-width':12,'stroke-linecap':'round',opacity:.35});G.tx(300,226,'🧍',{fs:46});
 const sun=G.tx(60,245,'☀️',{fs:40});const at={m:.13,n:.5,e:.87},lb=[['เช้า',.13],['เที่ยง',.5],['เย็น',.87]];
 const put=t=>{const x=60+480*t,y=245-200*Math.sin(Math.PI*t);sun.setAttribute('x',x);sun.setAttribute('y',y);const alt=Math.sin(Math.PI*t),L=26+150*(1-alt),dir=t<.5?1:-1;sh.setAttribute('x2',300+(Math.abs(t-.5)<.02?0:dir*L));};
 lb.forEach(([n,t])=>{const x=60+480*t,y=245-200*Math.sin(Math.PI*t);G.tx(x,y-34,n,{fs:15,w:700,fill:'#b45309'});});
 G.cap('ดวงอาทิตย์เดินจากทิศตะวันออก ไปทิศตะวันตก');for(let i=0;i<=40;i++){put(.03+.94*i/40);if(!await G.W(70))return;}
 const T=at[p.at];for(let i=0;i<=15;i++){put(.97+(T-.97)*i/15);if(!await G.W(40))return;}put(T);G.pulse(sun);G.sfx('chime');
 G.cap(p.at==='m'?'ตอนเช้า ดวงอาทิตย์อยู่ทิศตะวันออก เงาชี้ไปทางตะวันตก และยาว':p.at==='n'?'ตอนเที่ยง ดวงอาทิตย์อยู่สูงที่สุด เงาสั้นที่สุด':'ตอนเย็น ดวงอาทิตย์อยู่ทิศตะวันตก เงาชี้ไปทางตะวันออก และยาว');};
R.lamp=async(p,G)=>{G.E('rect',{x:0,y:0,width:600,height:330,fill:'#1e293b'});G.E('rect',{x:0,y:250,width:600,height:80,fill:'#334155'});const L=p.from==='l';
 const lx=L?70:530,d=L?1:-1;/* วาดไฟฉายเอง ให้หัวไฟหันเข้าหาตุ๊กตาเสมอ */G.E('rect',{x:L?lx-30:lx-6,y:150,width:36,height:20,rx:5,fill:'#64748b'});G.E('path',{d:'M'+(lx+d*6)+' 146 L'+(lx+d*26)+' 138 L'+(lx+d*26)+' 182 L'+(lx+d*6)+' 174 Z',fill:'#94a3b8'});
 const beam=G.E('path',{d:L?'M96 160 L300 120 L300 250 Z':'M504 160 L300 120 L300 250 Z',fill:'#fef08a',opacity:0});G.fade(beam,.45,700);G.tx(300,215,'🧸',{fs:56});G.cap('แสงไฟฉายส่องมาจากทาง'+(L?'ซ้าย':'ขวา'));if(!await G.W(1100))return;
 const sh=G.E('ellipse',{cx:L?400:200,cy:252,rx:80,ry:14,fill:'#000',opacity:0});G.fade(sh,.6,600);G.sfx('chime');G.cap('ตุ๊กตาบังแสงไว้ เงาจึงไปอยู่ฝั่งตรงข้าม คือทาง'+(L?'ขวา':'ซ้าย'));};
R.compass=async(p,G)=>{const cx=300,cy=165;if(p.count){[['เหนือ',0,-110],['ตะวันออก',150,0],['ใต้',0,110],['ตะวันตก',-150,0]].forEach(([n,dx,dy],i)=>{});}
[['เหนือ',0,-110],['ใต้',0,110],['ตะวันออก',150,0],['ตะวันตก',-150,0]].forEach(([n,dx,dy])=>{const t=G.tx(cx+dx,cy+dy,n,{fs:20,w:700,fill:n==='ตะวันออก'?'#e11d48':'#3b3b4f'});G.pop(t);});
 G.E('line',{x1:cx,y1:cy-90,x2:cx,y2:cy+90,stroke:'#cbd5e1','stroke-width':3});G.E('line',{x1:cx-110,y1:cy,x2:cx+110,y2:cy,stroke:'#cbd5e1','stroke-width':3});
 if(p.count){G.tx(cx,cy,'🧭',{fs:50});for(const [i,[dx,dy]] of [[0,-110],[150,0],[0,110],[-150,0]].entries()){G.tx(cx+dx+(dx?0:44),cy+dy+(dy?0:-26),String(i+1),{fs:18,w:700,fill:'#ec4899'});G.sfx('pop',i);if(!await G.W(450))return;}G.sfx('chime');G.cap('ทิศหลักมี 4 ทิศ: เหนือ ใต้ ตะวันออก ตะวันตก');return;}
 G.tx(cx,cy,'🧍',{fs:50});G.tx(cx,cy-60,'⬆',{fs:28,fill:'#2563eb'});G.cap('หันหน้าไปทางทิศเหนือ (ข้างบน)');if(!await G.W(1200))return;
 const h=G.tx(cx+70,cy+34,'🤚 ขวามือ',{fs:18,w:700,fill:'#e11d48'});G.pop(h);G.tx(cx-70,cy+34,'ซ้ายมือ ✋',{fs:18,w:700,fill:'#2563eb'});G.sfx('chime');G.cap('ขวามือ คือทิศตะวันออก ซ้ายมือ คือทิศตะวันตก');};
/* ---------- ตาชั่ง ---------- */
R.scale=async(p,G)=>{const cx=300,py=120;G.E('path',{d:'M'+cx+' '+py+' L'+(cx-50)+' 300 L'+(cx+50)+' 300 Z',fill:'#cbd5e1'});
 const bm=G.E('g',{});bm.style.transformBox='view-box';bm.style.transformOrigin=cx+'px '+py+'px';G.E('line',{x1:cx-180,y1:py,x2:cx+180,y2:py,stroke:'#475569','stroke-width':8,'stroke-linecap':'round'},bm);
 const pan=(x)=>{const g=G.E('g',{},bm);G.E('path',{d:'M'+(x-70)+' '+(py+60)+' Q'+x+' '+(py+100)+' '+(x+70)+' '+(py+60)+' Z',fill:'#fde68a',stroke:'#b45309','stroke-width':2},g);G.E('line',{x1:x,y1:py,x2:x-60,y2:py+60,stroke:'#94a3b8'},g);G.E('line',{x1:x,y1:py,x2:x+60,y2:py+60,stroke:'#94a3b8'},g);return g;};
 const pl=pan(cx-180),pr=pan(cx+180);const tilt=d=>{bm.style.transition=G.F?'none':'transform .9s ease-in-out';bm.style.transform='rotate('+d+'deg)';};
 if(p.txt){G.tx(cx-180,py+40,p.l,{fs:24,w:700,p:bm});G.tx(cx+180,py+40,p.r,{fs:24,w:700,p:bm});tilt(-8);G.cap('ลองชั่งดู');if(!await G.W(1000))return;
  G.tx(cx-180,py+125,'= '+p.sum,{fs:22,w:700,fill:'#2563eb',p:bm});G.tx(cx+180,py+125,'= '+p.sum,{fs:22,w:700,fill:'#2563eb',p:bm});tilt(0);G.sfx('chime');G.cap('ทั้งสองข้างได้ '+p.sum+' เท่ากัน ตาชั่งจึงตรง');return;}
 const em=s=>[...s].filter(c=>c.trim()&&!/\uFE0F/.test(c));let L=em(p.l),Rr=em(p.r);const draw=(arr,x,g)=>{g.querySelectorAll('.it').forEach(e=>e.remove());arr.forEach((e,i)=>{const t=G.tx(x-((arr.length-1)*28)/2+i*28,py+44,e,{fs:28,p:g});t.classList.add('it');});};
 draw(L,cx-180,pl);draw(Rr,cx+180,pr);
 if(p.add){tilt(p.add==='l'?14:-14);G.cap('ข้าง'+(p.add==='l'?'ขวา':'ซ้าย')+'หนักกว่า ตาชั่งเอียงลง');if(!await G.W(1200))return;const tgt=p.add==='l'?L:Rr,one=tgt[0];
  for(let k=1;k<=p.need;k++){tgt.push(one);draw(tgt,p.add==='l'?cx-180:cx+180,p.add==='l'?pl:pr);G.sfx('pop',k);G.cap('วางเพิ่ม '+k+' ชิ้น');const left=p.need-k;tilt(left?(p.add==='l'?14:-14)*left/p.need:0);if(!await G.W(900))return;}
  G.sfx('chime');G.cap('เพิ่ม '+p.need+' ชิ้น ทั้งสองข้างเท่ากัน ตาชั่งจึงตรง');return;}
 tilt(14);G.cap('ลองชั่งดู');if(!await G.W(1000))return;tilt(p.tilt==='l'?-14:p.tilt==='r'?14:0);G.sfx('chime');G.cap(p.tilt?'ข้างที่หนักกว่าจะเอียงลง':'หนักเท่ากัน ตาชั่งจึงอยู่ระดับเดียวกัน');};
/* ---------- เทน้ำ ---------- */
R.pour=async(p,G)=>{const gl=p.n===3?[[110,60,150],[300,90,100],[490,130,70]]:[[180,60,150],[420,130,70]],lv=[];
 gl.forEach(([x,w,h],i)=>{G.tx(x,40,'🍶',{fs:34});G.E('rect',{x:x-w/2,y:290-h,width:w,height:h,fill:'none',stroke:'#475569','stroke-width':3,rx:4});const r=G.E('rect',{x:x-w/2+3,y:287,width:w-6,height:0,fill:'#7cc6f2'});lv.push([r,w,h]);});
 G.cap('น้ำขวดละเท่ากัน เทลงแก้วคนละใบ');if(!await G.W(900))return;const vol=4800;
 for(let s=1;s<=20;s++){lv.forEach(([r,w,h])=>{const hh=Math.min(h-6,vol/(w-6)*s/20);r.setAttribute('y',287-hh);r.setAttribute('height',hh);});if(!await G.W(70))return;}
 G.sfx('chime');G.cap('น้ำเท่ากัน แก้วแคบน้ำจึงดูสูงกว่า แก้วกว้างน้ำดูเตี้ยกว่า');};
/* ---------- น้ำสามสถานะ ---------- */
R.water=async(p,G)=>{const nd=[[100,'🧊','น้ำแข็ง','ของแข็ง'],[300,'💧','น้ำ','ของเหลว'],[500,'♨️','ไอน้ำ','แก๊ส']],ng=[];
 nd.forEach(([x,e,n,s])=>{const g=G.E('g',{});G.E('circle',{cx:x,cy:160,r:52,fill:'#f1f5f9',stroke:'#94a3b8','stroke-width':3},g);G.tx(x,150,e,{fs:40,p:g});G.tx(x,192,n,{fs:15,w:700,p:g});G.tx(x,228,s,{fs:13,fill:'#475569',p:g});G.pop(g);ng.push(g);});
 const AR={melt:[100,300,'top','ร้อนขึ้น → ละลาย','#ef4444'],boil:[300,500,'top','ร้อนมาก → เดือด/ระเหย','#ef4444'],cond:[500,300,'bot','เย็นลง → เป็นหยดน้ำ','#3b82f6'],freeze:[300,100,'bot','เย็นมาก → แข็งตัว','#3b82f6']};
 Object.entries(AR).forEach(([k,[a,b,sd,t,c]])=>{const y=sd==='top'?100:220,yy=sd==='top'?70:250,on=p.tr.includes(k);const pa=G.E('path',{d:'M'+(a+(b>a?40:-40))+' '+y+' Q'+((a+b)/2)+' '+(sd==='top'?40:280)+' '+(b+(b>a?-40:40))+' '+y,fill:'none',stroke:c,'stroke-width':on?5:2,opacity:on?1:.25});
  G.tx((a+b)/2,yy+(sd==='top'?-14:14),t,{fs:on?16:13,w:700,fill:c,a:{opacity:on?1:.35}});});
 G.tx(200,310,'0 องศา: น้ำแข็ง ⇄ น้ำ',{fs:13,fill:'#475569'});G.tx(400,310,'100 องศา: น้ำเดือด',{fs:13,fill:'#475569'});
 if(!await G.W(800))return;
 if(p.node!=null){G.pulse(ng[p.node]);ng[p.node].style.filter='drop-shadow(0 0 8px #facc15)';G.cap(nd[p.node][2]+' เป็น'+nd[p.node][3]);G.sfx('chime');return;}
 for(const k of p.tr){const [a,b]=AR[k];const s=[a,b].map(x=>ng[nd.findIndex(n=>n[0]===x)]);G.pulse(s[0]);if(!await G.W(600))return;G.pulse(s[1]);G.sfx('pop',2);G.cap(AR[k][3]);if(!await G.W(1300))return;}G.sfx('chime');};
R.season=async(p,G)=>{const ss=[['☀️','ฤดูร้อน','มี.ค. - พ.ค.'],['🌧️','ฤดูฝน','มิ.ย. - ต.ค.'],['❄️','ฤดูหนาว','พ.ย. - ก.พ.']];
 for(let i=0;i<3;i++){const x=110+i*190,g=G.E('g',{});roundRect(G,x-80,60,160,200,['#fef3c7','#dbeafe','#e0f2fe'][i],'#94a3b8',18,g);G.tx(x,120,ss[i][0],{fs:56,p:g});G.tx(x,190,ss[i][1],{fs:20,w:700,p:g});G.tx(x,225,ss[i][2],{fs:14,fill:'#475569',p:g});G.pop(g);if(p.s===-1)G.tx(x,40,String(i+1),{fs:22,w:700,fill:'#ec4899'});G.sfx('pop',i);if(!await G.W(600))return;
  if(p.s===i){g.style.filter='drop-shadow(0 0 10px #f59e0b)';G.pulse(g);}}
 G.sfx('chime');G.cap(p.s===-1?'ประเทศไทยมี 3 ฤดู':ss[p.s][1]+' ('+ss[p.s][2]+')');};
R.rain=async(p,G)=>{G.E('rect',{x:0,y:250,width:600,height:80,fill:'#60a5fa'});G.tx(120,280,'ทะเล แม่น้ำ',{fs:16,w:700,fill:'#fff'});
 const cl=G.tx(420,70,'☁️',{fs:70});G.pop(cl);G.cap('แดดร้อน น้ำระเหยเป็นไอ ลอยขึ้นไป');for(let i=0;i<3;i++){const v=G.tx(140+i*50,230,'〰',{fs:24,fill:'#94a3b8'});if(!G.F)v.animate([{transform:'translateY(0)',opacity:1},{transform:'translateY(-150px)',opacity:0}],{duration:1500,delay:i*200,iterations:2});}
 G.tx(160,60,'☀️',{fs:44});if(!await G.W(1800))return;G.cap('ไอน้ำรวมกันเป็นเมฆ แล้วตกลงมาเป็นฝน');for(let i=0;i<6;i++){const d=G.tx(380+i*16,120,'💧',{fs:18});if(!G.F)d.animate([{transform:'translateY(0)'},{transform:'translateY(120px)',opacity:.2}],{duration:900,delay:i*120,iterations:3});}G.sfx('chime');};
/* ---------- อวัยวะ ---------- */
R.body=async(p,G)=>{const cx=300;G.E('circle',{cx,cy:66,r:42,fill:'#fde2c8',stroke:'#c08457','stroke-width':3});G.E('rect',{x:cx-12,y:104,width:24,height:18,fill:'#fde2c8'});
 G.E('rect',{x:cx-62,y:120,width:124,height:140,rx:28,fill:'#fde2c8',stroke:'#c08457','stroke-width':3});G.E('rect',{x:cx-98,y:128,width:30,height:112,rx:14,fill:'#fde2c8',stroke:'#c08457','stroke-width':2});G.E('rect',{x:cx+68,y:128,width:30,height:112,rx:14,fill:'#fde2c8',stroke:'#c08457','stroke-width':2});
 G.E('rect',{x:cx-46,y:256,width:36,height:66,rx:12,fill:'#fde2c8',stroke:'#c08457','stroke-width':2});G.E('rect',{x:cx+10,y:256,width:36,height:66,rx:12,fill:'#fde2c8',stroke:'#c08457','stroke-width':2});
 G.E('circle',{cx:cx-14,cy:60,r:4,fill:'#3b3b4f'});G.E('circle',{cx:cx+14,cy:60,r:4,fill:'#3b3b4f'});G.E('path',{d:'M'+(cx-2)+' 66 l4 10 h-6',stroke:'#c08457','stroke-width':2,fill:'none'});G.E('path',{d:'M'+(cx-12)+' 86 Q'+cx+' 94 '+(cx+12)+' 86',stroke:'#c0392b','stroke-width':3,fill:'none'});
 G.E('ellipse',{cx:cx-42,cy:66,rx:7,ry:12,fill:'#fde2c8',stroke:'#c08457','stroke-width':2});G.E('ellipse',{cx:cx+42,cy:66,rx:7,ry:12,fill:'#fde2c8',stroke:'#c08457','stroke-width':2});
 const IN={สมอง:[cx,44,'🧠',26],ปอด:[cx-26,162,'🫁',30],หัวใจ:[cx+14,170,'❤️',22],กระเพาะอาหาร:[cx-8,218,'🟠',22]};
 Object.entries(IN).forEach(([n,[x,y,e,fs]])=>G.tx(x,y,e,{fs,a:{opacity:p.os.includes(n)?1:.25}}));
 const AT={สมอง:[cx,44],ปอด:[cx-26,162],หัวใจ:[cx+14,170],กระเพาะอาหาร:[cx-8,218],ตา:[cx+14,60],หู:[cx+42,66],จมูก:[cx,72],ปาก:[cx,88],ฟัน:[cx,88],คอ:[cx,112]};
 G.cap('ดูตำแหน่งในร่างกาย');if(!await G.W(700))return;
 p.os.forEach((o,i)=>{const [x,y]=AT[o],lx=i%2?520:80,ly=80+i*70;G.E('line',{x1:x,y1:y,x2:lx+(i%2?-50:50),y2:ly,stroke:'#e11d48','stroke-width':2.5});G.E('circle',{cx:x,cy:y,r:14,fill:'none',stroke:'#e11d48','stroke-width':3});const t=G.tx(lx,ly,o,{fs:22,w:700,fill:'#e11d48'});G.pop(t);});
 G.sfx('chime');G.cap(p.why||'');};
/* ---------- พยางค์ ---------- */
R.syll=async(p,G)=>{const n=p.rows.length,ys=n===1?[150]:[70,160,250];
 for(let r=0;r<n;r++){const [w,ss]=p.rows[r],y=ys[r],on=r===p.hi;G.tx(90,y,w,{fs:n===1?36:24,w:700,fill:on?'#3b3b4f':'#64748b'});if(n===1&&!await G.W(700))return;
  for(let i=0;i<ss.length;i++){const x=(n===1?210:200)+i*(n===1?110:90),g=G.E('g',{});roundRect(G,x-40,y-26,80,52,on?C[i%C.length]:'#cbd5e1',null,14,g);G.tx(x,y,ss[i],{fs:22,w:700,fill:'#fff',p:g});G.pop(g);G.tx(x,y-38,'👏',{fs:18});G.sfx('pop',i);if(!await G.W(600))return;}
  G.tx(560,y,ss.length+'',{fs:28,w:700,fill:on?'#ec4899':'#94a3b8'});if(!await G.W(400))return;}
 const [w,ss]=p.rows[p.hi];G.sfx('chime');G.cap(w+' อ่านว่า '+ss.join('-')+' ปรบมือ '+ss.length+' ครั้ง = '+ss.length+' พยางค์');};
/* ---------- ตัวสะกด ---------- */
R.final=async(p,G)=>{const n=p.ws.length,ys=n===1?[130]:[70,160,250];
 if(p.none){const w=p.ws[0],cl=clus(w),x0=300-(cl.length-1)*31;cl.forEach((c,i)=>G.pop(G.tx(x0+i*62,130,c,{fs:70,w:700})));if(!await G.W(800))return;G.sfx('chime');G.pop(G.tx(300,240,'ไม่มีตัวสะกด → แม่ ก กา',{fs:28,w:700,fill:'#7c3aed'}));G.cap(w+' ไม่มีตัวสะกด จึงอยู่ในแม่ ก กา');return;}
 for(let r=0;r<n;r++){const w=p.ws[r],cl=clus(w),f=finalOf(w),y=ys[r],fs=n===1?70:44,gap=n===1?62:42,x0=300-(cl.length-1)*gap/2;let fi=-1;if(f)for(let i=cl.length-1;i>=0;i--)if(cl[i][0]===f){fi=i;break;}
  cl.forEach((c,i)=>{const t=G.tx(x0+i*gap,y,c,{fs,w:700,fill:'#3b3b4f'});G.pop(t,200);});if(!await G.W(500))return;
  if(fi>=0){const t=G.tx(x0+fi*gap,y,cl[fi],{fs,w:700,fill:'#e11d48'});G.pulse(t);G.tx(x0+fi*gap,y+(n===1?62:34),'ตัวสะกด',{fs:n===1?18:13,w:700,fill:'#e11d48'});if(n>1)G.tx(560,y,maeOf(f),{fs:16,w:700,fill:'#e11d48'});}
  else if(n>1)G.tx(560,y,'ไม่มี',{fs:16,fill:'#94a3b8'});G.sfx('pop',r);if(!await G.W(700))return;}
 const w=p.ws[p.hi],f=finalOf(w);if(n===1){const r=G.tx(300,270,'ตัวสะกด '+f+' → '+maeOf(f)+'  ('+MAE[maeOf(f)].split('').join(' ')+')',{fs:24,w:700,fill:'#7c3aed'});G.pop(r);}
 G.sfx('chime');G.cap(p.ask?w+' มีตัวสะกด '+f+' จึงเป็น'+p.ask:w+' มีตัวสะกดคือ '+f+' อยู่ใน'+maeOf(f));};
/* ---------- ประสมคำ ---------- */
R.spell=async(p,G)=>{const n=p.parts.length,gap=120,x0=300-(n-1)*gap/2,ps=[];
 p.parts.forEach((s,i)=>{const g=G.E('g',{});roundRect(G,x0+i*gap-44,70,88,70,C[i%C.length],null,16,g);G.tx(x0+i*gap,105,s,{fs:34,w:700,fill:'#fff',p:g});if(i)G.tx(x0+i*gap-gap/2,105,'+',{fs:30,w:700,p:g});G.pop(g);ps.push(g);});
 G.cap(p.parts.join(' + '));if(!await G.W(1100))return;
 ps.forEach((g,i)=>G.move(g,300-(x0+i*gap),80,800));G.sfx('whoosh');if(!await G.W(900))return;ps.forEach(g=>G.fade(g,0,300));
 const w=G.tx(300,190,p.w,{fs:80,w:700,fill:'#7c3aed'});G.pop(w,500);G.sfx('chime');G.cap(p.parts.join(' ')+' อ่านว่า '+p.w);};

window.EX2={
 plan(q){try{if(!q||!q.opts||q.ans==null)return null;for(const f of P){const r=f(q);if(r)return Object.assign({},r,{k:'x2'});}}catch(e){}return null;},
 async run(p,ctx){try{if(p.kind==='turn')return await R.turn(p,ctx);const G=mk(ctx);await R[p.kind](p,G);}catch(e){console.warn('EX2',p.kind,e);}}};
})();
