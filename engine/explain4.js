/* เฉลยภาพชุด 4 (11 พ.ย. 69) — ข้อชุด 13 (เครื่องมือสร้างเนื้อหา/คลังชุด13.py) + บทเรียนสั้นกึ่งสอน
   ผู้ปกครองขอ: เรื่องใหม่ที่ยังไม่มีใน EP ให้เฉลยแบบกึ่งสอน ละเอียด เหมาะกับเด็ก 6 ขวบ · ภาพ 3 มิติเมื่อจำเป็น
   1) ชนิดภาพใหม่ (x2.kind): sym dots domino overlay shape3 stepcmp digits ceilg promo trip2 wscan tclock dice7 ptri corder chart2
   2) EX2.TEACH[หัวข้อ] = บทเรียนสั้น 3–5 ภาพ (หลักคิด ตัวอย่าง เคล็ดลับ) · explain2 เล่นก่อนภาพเฉลยของข้อ ครั้งแรกของแต่ละหัวข้อในการเปิดหน้าหนึ่งครั้ง
   ใช้ตัวช่วยวาดของ explain2.js (EX2.R / EX2.H) ภาพกว้าง 600 สูง 330 */
(function(){const X2=window.EX2;if(!X2||!X2.R)return;const R=X2.R,{roundRect,INK}=X2.H;
const C=['#5b8def','#f59e0b','#22c55e','#ec4899','#8b5cf6','#14b8a6'];
const PIPS={1:[[50,50]],2:[[28,28],[72,72]],3:[[26,26],[50,50],[74,74]],4:[[28,28],[72,28],[28,72],[72,72]],5:[[26,26],[74,26],[50,50],[26,74],[74,74]],6:[[28,24],[72,24],[28,50],[72,50],[28,76],[72,76]]};
const pips=(G,n,x,y,s,p)=>(PIPS[n]||[]).map(([a,b])=>G.E('circle',{cx:x+a*s/100,cy:y+b*s/100,r:s*.085,fill:INK},p));
const lbl=(G,x,y,t,o={})=>{const g=G.E('g',{},o.p);const fs=o.fs||16,w=Math.max(56,[...t].length*fs*.55+22);roundRect(G,x-w/2,y-16,w,32,o.bg||'#f5f3ff',o.bd||'#c4b5fd',16,g);G.tx(x,y+1,t,{fs,w:700,fill:o.fill||'#5b21b6',p:g});G.pop(g);return g;};
const raw=(G,html,tf,p)=>{const g=G.E('g',{transform:tf||''},p);g.innerHTML=html;return g;};
const ring=(G,x,y,r,col,p)=>{const k=G.E('circle',{cx:x,cy:y,r,fill:'none',stroke:col||'#e11d48','stroke-width':5},p);G.pop(k);return k;};
const sayN=n=>String(n);
/* กล่อง/ลูกเต๋ามุมเฉียง เห็น ซ้าย ขวา บน (เลขาคณิตเดียวกับ box3_fig ในคลังชุด12.py) */
function box3(G,L,Rr,T,ox,oy,s,p){const ex=[.866,.5],ey=[-.866,.5],P=(x,y,z)=>[ox+s*(x*ex[0]+y*ey[0]),oy+s*(x*ex[1]+y*ey[1]-z)+s];
 const quad=(pts,f)=>G.E('polygon',{points:pts.map(q=>q.join(',')).join(' '),fill:f,stroke:INK,'stroke-width':3,'stroke-linejoin':'round'},p);
 const fT=quad([P(0,0,1),P(1,0,1),P(1,1,1),P(0,1,1)],'#fff7d6'),fL=quad([P(0,1,1),P(1,1,1),P(1,1,0),P(0,1,0)],'#ffe7a8'),fR=quad([P(1,1,1),P(1,0,1),P(1,0,0),P(1,1,0)],'#fde68a');
 const face=(o,u,v,val)=>{const g=G.E('g',{transform:'matrix('+(u[0]*s/100)+' '+(u[1]*s/100)+' '+(v[0]*s/100)+' '+(v[1]*s/100)+' '+o[0]+' '+o[1]+')'},p);if(typeof val==='number')pips(G,val,0,0,100,g);else G.tx(50,52,val,{fs:58,p:g});return g;};
 face(P(0,1,1),ex,[0,1],L);face(P(1,1,1),[-ey[0],-ey[1]],[0,1],Rr);face(P(0,0,1),ex,ey,T);return {fT,fL,fR};}
function die2(G,n,x,y,s,p,hl){const g=G.E('g',{},p);roundRect(G,x,y,s,s,hl?'#fde68a':'#fff',INK,s*.16,g);if(n)pips(G,n,x,y,s,g);return g;}
/* บล็อกมุมเฉียงอย่างง่าย (ใช้ในบทเรียน) · คืนกลุ่มของก้อน */
function cube(G,x,y,s,col,p){const d=s*.38,g=G.E('g',{},p);G.E('rect',{x,y,width:s,height:s,fill:col,stroke:INK,'stroke-width':2.5},g);
 G.E('polygon',{points:[x,y,x+d,y-d,x+s+d,y-d,x+s,y].join(' '),fill:col,stroke:INK,'stroke-width':2.5,'stroke-linejoin':'round',style:'filter:brightness(1.08)'},g);
 G.E('polygon',{points:[x+s,y,x+s+d,y-d,x+s+d,y+s-d,x+s,y+s].join(' '),fill:col,stroke:INK,'stroke-width':2.5,'stroke-linejoin':'round',style:'filter:brightness(.82)'},g);return g;}
const SOLID={cyl:'<path d="M26 28 V76 A24 9 0 0 0 74 76 V28" fill="#93c5fd" stroke="#3b3b4f" stroke-width="2.5"/><ellipse cx="50" cy="28" rx="24" ry="9" fill="#dbeafe" stroke="#3b3b4f" stroke-width="2.5"/><rect x="32" y="38" width="7" height="36" rx="3" fill="#fff" opacity=".45"/>',
 sph:'<circle cx="50" cy="52" r="36" fill="#fca5a5" stroke="#3b3b4f" stroke-width="2.5"/><path d="M14 52 A36 11 0 0 0 86 52" fill="none" stroke="#3b3b4f" stroke-width="1.5" opacity=".35"/><ellipse cx="37" cy="38" rx="10" ry="7" fill="#fff" opacity=".6"/>',
 box:'<polygon points="10,42 26,28 90,28 74,42" fill="#fde68a" stroke="#3b3b4f" stroke-width="2.5" stroke-linejoin="round"/><polygon points="74,42 90,28 90,64 74,78" fill="#f59e0b" stroke="#3b3b4f" stroke-width="2.5" stroke-linejoin="round"/><rect x="10" y="42" width="64" height="36" fill="#fbbf24" stroke="#3b3b4f" stroke-width="2.5"/>',
 cube:'<polygon points="18,36 34,22 78,22 62,36" fill="#d9f99d" stroke="#3b3b4f" stroke-width="2.5" stroke-linejoin="round"/><polygon points="62,36 78,22 78,66 62,80" fill="#65a30d" stroke="#3b3b4f" stroke-width="2.5" stroke-linejoin="round"/><rect x="18" y="36" width="44" height="44" fill="#a3e635" stroke="#3b3b4f" stroke-width="2.5"/>',
 cone:'<path d="M50 12 L80 76 A30 10 0 0 1 20 76 Z" fill="#c4b5fd" stroke="#3b3b4f" stroke-width="2.5" stroke-linejoin="round"/><path d="M20 76 A30 10 0 0 0 80 76" fill="none" stroke="#3b3b4f" stroke-width="1.5" opacity=".4"/><path d="M44 30 L32 70" stroke="#fff" stroke-width="5" opacity=".4" stroke-linecap="round"/>'};
const SOLN={cyl:'ทรงกระบอก',sph:'ทรงกลม',box:'ทรงสี่เหลี่ยมมุมฉาก',cube:'ลูกบาศก์',cone:'กรวย'};
const SOLD={cyl:['ด้านบนและด้านล่างเป็นวงกลม','ด้านข้างโค้ง วางนอนแล้วกลิ้งได้'],sph:['กลมทุกด้าน ไม่มีมุมเลย','กลิ้งไปได้ทุกทิศ'],box:['มีหกหน้า ทุกหน้าเป็นสี่เหลี่ยม','มีมุม วางแล้วไม่กลิ้ง'],cube:['มีหกหน้า','ทุกหน้าเป็นสี่เหลี่ยมจัตุรัส ขนาดเท่ากันหมด'],cone:['ก้นเป็นวงกลม','ปลายข้างบนแหลม']};
const FLAT={c:'M-50 0 a50 50 0 1 0 100 0 a50 50 0 1 0 -100 0 Z',s:'M-44 -44 H44 V44 H-44 Z',t:'M0 -52 L54 40 H-54 Z',e:'M-60 0 a60 36 0 1 0 120 0 a60 36 0 1 0 -120 0 Z',r:'M-62 -34 H62 V34 H-62 Z'};
const FLATN={c:'วงกลม',s:'สี่เหลี่ยมจัตุรัส',t:'สามเหลี่ยม',e:'วงรี',r:'สี่เหลี่ยมผืนผ้า'};
const poly=(k,cx,cy,r)=>{const n={t:3,s:4,n5:5,n6:6}[k],a0=k==='s'?-Math.PI*3/4:-Math.PI/2;return [...Array(n)].map((_,i)=>[cx+r*Math.cos(a0+2*Math.PI*i/n),cy+r*Math.sin(a0+2*Math.PI*i/n)]);};

/* ---------- สมมาตร: พับครึ่งขวาทับครึ่งซ้ายให้เห็นจริง ---------- */
R.sym=async(p,G)=>{const s=46,n=4;
 const grid=(g,x0,y0)=>{for(let r=0;r<n;r++)for(let c=0;c<n;c++)G.E('rect',{x:x0+c*s,y:y0+r*s,width:s,height:s,fill:g[r][c]||'#fff',stroke:INK,'stroke-width':1.5});};
 const line=(x0,y0)=>G.E('line',{x1:x0+2*s,y1:y0-14,x2:x0+2*s,y2:y0+n*s+14,stroke:'#e11d48','stroke-width':4,'stroke-dasharray':'8 6'});
 const fold=async(g,x0,y0,from)=>{const half=G.E('g',{});const cs=from==='L'?[0,1]:[2,3];for(let r=0;r<n;r++)for(const c of cs)G.E('rect',{x:x0+c*s+3,y:y0+r*s+3,width:s-6,height:s-6,rx:6,fill:g[r][c]||'#fff',stroke:g[r][c]?INK:'#cbd5e1','stroke-width':1.5,opacity:g[r][c]?.85:.45},half);
  half.style.transformBox='view-box';half.style.transformOrigin=(x0+2*s)+'px 0px';half.style.transition=G.F?'none':'transform 1.4s ease-in-out';G.sfx('whoosh');requestAnimationFrame(()=>{half.style.transform='scaleX(-1)';});if(!await G.W(1500))return null;
  const bad=[];for(let r=0;r<n;r++)for(let c=0;c<2;c++)if((g[r][c]||'')!==(g[r][3-c]||''))bad.push([r,c]);return {half,bad};};
 if(p.mode==='half'){const x0=208,y0=60,L=p.g.map(r=>[r[0],r[1],'','']);grid(L,x0,y0);for(let r=0;r<n;r++)for(let c=2;c<n;c++)G.E('rect',{x:x0+c*s+2,y:y0+r*s+2,width:s-4,height:s-4,fill:'#f8fafc',stroke:'#cbd5e1','stroke-dasharray':'4 3'});line(x0,y0);
  if(!await G.step('ครึ่งขวาต้องเป็นเงาในกระจกของครึ่งซ้าย',['ภาพสมมาตร ครึ่งขวาต้องเหมือนเงาในกระจกของครึ่งซ้าย','ลองพับครึ่งซ้ายข้ามเส้นประไปดู'],600))return;
  const f=await fold(p.g,x0,y0,'L');if(!f)return;
  if(!await G.step('ช่องที่ชิดเส้นประ ก็ไปชิดเส้นประอีกข้าง',['ช่องที่อยู่ชิดเส้นประ ก็ไปอยู่ชิดเส้นประอีกข้าง','ช่องที่อยู่ริมนอก ก็ไปอยู่ริมนอกอีกข้าง'],700))return;
  if(!await G.step('คัดลอกมาเฉย ๆ ไม่กลับด้าน = ผิด',['ระวังนะ ถ้าคัดลอกมาเฉย ๆ ไม่กลับด้าน จะไม่สมมาตร'],500))return;
  return G.fin('ครึ่งขวาต้องกลับด้านเหมือนเงาในกระจก',['คำตอบคือแบบที่กลับด้าน เหมือนเงาในกระจก'],[f.half]);}
 const pick=p.mode==='pick',x0=pick?70:208,y0=60;grid(p.g,x0,y0);line(x0,y0);
 if(!await G.step('เส้นประสีแดงคือเส้นพับ',['เส้นประสีแดง คือเส้นพับ','ลองพับครึ่งขวา ทับลงบนครึ่งซ้าย'],600))return;
 const f=await fold(p.g,x0,y0,'R');if(!f)return;
 if(pick){if(!await G.step('ทับกันพอดีทุกช่อง ✓',['ทับกันพอดีทุกช่องเลย','ภาพนี้สมมาตร'],600))return;
  const x1=350;grid(p.w,x1,y0);line(x1,y0);if(!await G.step('ลองพับภาพอื่นดูบ้าง',['ลองพับภาพอื่นดูบ้าง'],400))return;const f2=await fold(p.w,x1,y0,'R');if(!f2)return;
  f2.bad.forEach(([r,c])=>ring(G,x1+c*s+s/2,y0+r*s+s/2,s*.44));if(!await G.step('มีช่องที่ไม่มีคู่ ✗',['ภาพนี้มีช่องที่ไม่มีคู่','พับแล้วไม่ทับกันสนิท จึงไม่สมมาตร'],700))return;
  const ok=G.E('rect',{x:x0-10,y:y0-10,width:4*s+20,height:4*s+20,rx:14,fill:'none',stroke:'#16a34a','stroke-width':5});return G.fin('คำตอบคือภาพที่พับแล้วทับกันสนิท',['คำตอบคือภาพที่พับแล้ว สองข้างทับกันสนิท'],[ok]);}
 const rs=f.bad.map(([r,c])=>ring(G,x0+c*s+s/2,y0+r*s+s/2,s*.44));
 await G.fin('มีช่องที่ไม่มีคู่ จึงไม่สมมาตร',['พับแล้วมีช่องที่ไม่มีคู่','ทับกันไม่สนิท','ภาพนี้จึงไม่สมมาตร'],rs);};

/* ---------- ลากเส้นเชื่อมจุด: ลากจากจุดแรกทีละจุด สีละจุด นับเส้น ---------- */
R.dots=async(p,G)=>{const K=1.45,ox=40,oy=16,P=p.pts.map(([x,y])=>[ox+x*K,oy+y*K]),n=P.length,lg=G.E('g',{}),pre=new Set((p.pre||[]).map(([a,b])=>a+'-'+b));
 (p.pre||[]).forEach(([a,b])=>G.E('line',{x1:P[a][0],y1:P[a][1],x2:P[b][0],y2:P[b][1],stroke:'#94a3b8','stroke-width':5,'stroke-linecap':'round'},lg));
 const nd=P.map(([x,y],i)=>{if(p.who)return G.tx(x,y,p.who[i],{fs:42});const g=G.E('g',{});G.E('circle',{cx:x,cy:y,r:13,fill:i===p.red?'#e11d48':INK},g);G.tx(x,y+1,String(i+1),{fs:14,w:700,fill:'#fff',p:g});return g;});
 const who=p.who?'คนที่ ':'จุดที่ ',unit=p.who?'ครั้ง':'เส้น';
 const intro={all:['ลากจากจุดที่หนึ่ง ไปหาทุกจุดก่อน','แล้วไปจุดถัดไป ลากเฉพาะเส้นที่ยังไม่มี'],from:['ลากจากจุดสีแดง ไปหาจุดสีดำทีละจุด'],shake:['การจับมือหนึ่งครั้ง เหมือนลากเส้นหนึ่งเส้นระหว่างสองคน','เริ่มจากคนที่หนึ่ง จับมือกับทุกคน'],rest:['เส้นสีเทามีอยู่แล้ว','มาลากเส้นที่ยังขาด ทีละจุด']}[p.mode];
 if(!await G.step(p.mode==='shake'?'จับมือ 1 ครั้ง = เส้น 1 เส้น':'ลากทีละจุด ไม่ลากซ้ำ',intro,600))return;
 const starts=p.mode==='from'?[p.red]:[...Array(n-1).keys()],sums=[];let cnt=0;
 for(const i of starts){const col=C[i%C.length],js=[...Array(n).keys()].filter(j=>p.mode==='from'?j!==i:j>i);let k=0;G.glow(nd[i],col);
  for(const j of js){if(pre.has(i+'-'+j))continue;k++;cnt++;const l=G.E('line',{x1:P[i][0],y1:P[i][1],x2:P[j][0],y2:P[j][1],stroke:col,'stroke-width':5,'stroke-linecap':'round'},lg);G.pop(l);G.tag(P[i][0]+(P[j][0]-P[i][0])*.4,P[i][1]+(P[j][1]-P[i][1])*.4,cnt,col,11);/* ไม่วางกลางเส้น: เส้นทแยงตัดกันตรงกลาง ป้ายเลขเคยซ้อนกัน (12 พ.ย. 69) */G.sfx('pop',cnt);if(!await G.say([sayN(cnt)]))return;}
  nd[i].style.filter='';sums.push(k);G.tx(455,58+sums.length*32,who+(i+1)+' : เพิ่ม '+k+' '+unit,{fs:17,w:700,fill:col});
  if(!await G.step(who+(i+1)+' ได้เพิ่ม '+k+' '+unit,[who+(i+1),'ได้เพิ่ม',sayN(k),unit],300))return;}
 const ex=sums.length>1?sums.join(' + ')+' = '+cnt:String(cnt);const t=lbl(G,455,80+sums.length*32+20,ex+' '+unit,{fs:18,bg:'#ecfdf5',bd:'#16a34a',fill:'#166534'});
 if(p.mode==='rest'){G.tx(455,80+sums.length*32+60,'มีอยู่แล้ว '+pre.size+' เส้น',{fs:16,fill:'#64748b'});}
 await G.fin('ทั้งหมด '+cnt+' '+unit,sums.length>1?[sums.join(' บวก '),'ได้',sayN(cnt),unit]:['ได้',sayN(cnt),unit],[t]);};

/* ---------- โดมิโน: ดูแถวบน แถวล่าง แยกกัน · ตัวอักษรกระโดดบนแถว A–Z ---------- */
R.domino=async(p,G)=>{if(p.mode==='abc'){const A='ABCDEFGHIJKLMNOPQRSTUVWXYZ',w=22,x0=300-13*w,seq=p.seq,st=p.step;
  const cells=[...A].map((ch,i)=>{const g=G.E('g',{});G.E('rect',{x:x0+i*w,y:236,width:w-2,height:34,rx:5,fill:'#fff',stroke:'#cbd5e1'},g);G.tx(x0+i*w+w/2-1,254,ch,{fs:15,w:700,p:g});return g;});
  const top=seq.map((ch,i)=>{const g=G.E('g',{}),x=120+i*90;roundRect(G,x-32,52,64,64,i===4?'#fde68a':'#fff',INK,12,g);const t=G.tx(x,85,i===4?'?':ch,{fs:34,w:800,fill:i===4?'#e11d48':INK,p:g});return {g,t,x};});
  if(!await G.step('เทียบกับแถว A ถึง Z ข้างล่าง',['ลองหาตัวอักษรแต่ละตัว ในแถว A ถึง Z ข้างล่าง'],500))return;
  const cx=i=>x0+i*w+w/2-1;let prev=-1;
  for(let i=0;i<5;i++){const idx=A.indexOf(seq[i]);if(prev>=0){const a=G.E('path',{d:'M'+cx(prev)+' 232 Q'+((cx(prev)+cx(idx))/2)+' '+(200-st*6)+' '+cx(idx)+' 232',fill:'none',stroke:'#ec4899','stroke-width':3});G.pop(a);G.tx((cx(prev)+cx(idx))/2,206-st*6,'+'+st,{fs:14,w:800,fill:'#db2777'});}
   if(i===4){top[4].t.textContent=seq[4];top[4].t.setAttribute('fill','#16a34a');G.pop(top[4].t);}
   G.glow(cells[idx],'#f59e0b');G.sfx('pop',i);if(!await G.say(i?['เลื่อนไป',sayN(st),'ตัว ได้',seq[i]]:[seq[0]]))return;prev=idx;}
  return G.fin('เลื่อนไปทีละ '+st+' ตัว ได้ '+seq[4],['แต่ละตัวเลื่อนไปทีละ',sayN(st),'ตัว','ตัวที่หายไปคือ',seq[4]],[top[4].g]);}
 const n=p.seq.length,w=58,gap=26,x0=300-(n*w+(n-1)*gap)/2,y0=62,X=i=>x0+i*(w+gap);
 const tiles=p.seq.map(([t,b],i)=>{const g=G.E('g',{});const h=i===p.hide;roundRect(G,X(i),y0,w,2*w,h?'#fde68a':'#fff',INK,10,g);G.E('line',{x1:X(i)+6,y1:y0+w,x2:X(i)+w-6,y2:y0+w,stroke:INK,'stroke-width':2},g);
  const q=h?G.tx(X(i)+w/2,y0+w,'?',{fs:34,w:800,fill:'#e11d48',p:g}):null;if(!h){pips(G,t,X(i),y0,w,g);pips(G,b,X(i),y0+w,w,g);}return {g,q};});
 const qs=[],row=async(k,d,y,col,nm)=>{for(let i=0;i<n;i++){const v=p.seq[i][k];if(i===p.hide)qs.push(G.tx(X(i)+w/2,y,'?',{fs:20,w:800,fill:'#e11d48'}));else G.tag(X(i)+w/2,y,v,col,13);
   if(i>0)G.tx(X(i)-gap/2,y,d>0?'+'+d:d<0?'−'+(-d):'=',{fs:15,w:800,fill:col});}G.sfx('pop',k);
  return G.step(nm+(d>0?' เพิ่มทีละ '+d:d<0?' ลดทีละ '+(-d):' เท่าเดิม'),['ดู'+nm+'อย่างเดียว',d>0?'เพิ่มทีละ':d<0?'ลดทีละ':'เท่าเดิมทุกชิ้น'].concat(d?[sayN(Math.abs(d))]:[]),700);};
 if(!await G.step('โดมิโนมีสองช่อง บน และ ล่าง',['โดมิโนแต่ละชิ้นมีสองช่อง ข้างบนและข้างล่าง','ดูทีละแถว แยกกัน'],500))return;
 if(!await row(0,p.dt,y0-18,'#3b82f6','แถวบน'))return;if(!await row(1,p.db,y0+2*w+20,'#ec4899','แถวล่าง'))return;
 const [t,b]=p.seq[p.hide],h=tiles[p.hide];h.q.remove();/* ป้าย ? เหนือ/ใต้ชิ้นที่หายกลายเป็นตัวเลข (เดิมค้างเป็น ? 12 พ.ย. 69) */qs.forEach(e=>e.remove());G.tag(X(p.hide)+w/2,y0-18,t,'#3b82f6',13);G.tag(X(p.hide)+w/2,y0+2*w+20,b,'#ec4899',13);pips(G,t,X(p.hide),y0,w,h.g);pips(G,b,X(p.hide),y0+w,w,h.g);G.pop(h.g);
 await G.fin('ข้างบน '+t+' จุด ข้างล่าง '+b+' จุด',['ชิ้นที่หายไป','ข้างบน',sayN(t),'จุด','ข้างล่าง',sayN(b),'จุด'],[h.g]);};

/* ---------- แผ่นใสซ้อนกัน · ภาพตรงข้าม ---------- */
R.overlay=async(p,G)=>{if(p.mode==='inv'){const n=p.g.length,s=n===3?62:50,x0=60,x1=560-n*s,y0=(330-n*s)/2+10;const cp=[];
  for(let r=0;r<n;r++){cp[r]=[];for(let c=0;c<n;c++){G.E('rect',{x:x0+c*s,y:y0+r*s,width:s,height:s,fill:p.g[r][c]?INK:'#fff',stroke:INK,'stroke-width':2});cp[r][c]=G.E('rect',{x:x1+c*s,y:y0+r*s,width:s,height:s,fill:p.g[r][c]?INK:'#fff',stroke:INK,'stroke-width':2});}}
  G.tx(x0+n*s/2,y0-22,'ภาพเดิม',{fs:17,w:700});G.tx(x1+n*s/2,y0-22,'ภาพตรงข้าม',{fs:17,w:700,fill:'#7c3aed'});G.tx(300,y0+n*s/2,'➜',{fs:44,fill:'#7c3aed'});
  if(!await G.step('สลับทีละช่อง: ดำ → ขาว · ขาว → ดำ',['ภาพตรงข้าม คือสลับสีทุกช่อง','ช่องดำกลายเป็นขาว ช่องขาวกลายเป็นดำ','ตำแหน่งเหมือนเดิม ไม่กลับซ้ายขวา'],600))return;
  for(let r=0;r<n;r++){for(let c=0;c<n;c++){cp[r][c].setAttribute('fill',p.g[r][c]?'#fff':INK);G.pulse(cp[r][c]);G.sfx('pop',c);if(!await G.W(160))return;}if(!await G.say(['แถวที่',sayN(r+1)]))return;}
  const t=G.E('rect',{x:x1-8,y:y0-8,width:n*s+16,height:n*s+16,rx:12,fill:'none',stroke:'#16a34a','stroke-width':5});return G.fin('ทุกช่องสลับสีหมด',['ทุกช่องสลับสีกันหมด','นี่คือภาพตรงข้าม'],[t]);}
 const s=56,sheet=(x0,y0,A,B,bg)=>{const g=G.E('g',{});G.E('rect',{x:x0,y:y0,width:3*s,height:3*s,rx:6,fill:bg,stroke:INK,'stroke-width':3},g);for(let k=1;k<3;k++){G.E('line',{x1:x0+k*s,y1:y0,x2:x0+k*s,y2:y0+3*s,stroke:'#cbd5e1','stroke-width':1.5},g);G.E('line',{x1:x0,y1:y0+k*s,x2:x0+3*s,y2:y0+k*s,stroke:'#cbd5e1','stroke-width':1.5},g);}
  A.forEach(([r,c])=>G.E('circle',{cx:x0+c*s+s/2,cy:y0+r*s+s/2,r:s*.3,fill:'#3b82f6',stroke:INK,'stroke-width':2},g));
  B.forEach(([r,c])=>{const cx=x0+c*s+s/2,cy=y0+r*s+s/2,h=s*.32;G.E('polygon',{points:[cx,cy-h,cx+h,cy+h*.8,cx-h,cy+h*.8].join(' '),fill:'#ef4444',stroke:INK,'stroke-width':2},g);});return g;};
 sheet(60,70,p.A,[],'#eff6ff');const b=sheet(370,70,[],p.B,'rgba(255,241,242,.35)'),plus=G.tx(300,155,'+',{fs:50,w:800,fill:'#e11d48'});
 if(!await G.step('แผ่นใส มองทะลุได้',['แผ่นใส มองทะลุได้','วางซ้อนกันแล้ว จะเห็นรูปของทั้งสองแผ่น'],600))return;
 G.fade(plus,0);G.move(b,-310,0,1300);G.sfx('whoosh');if(!await G.W(1400))return;
 if(!await G.step('วงกลม '+p.A.length+' รูป + สามเหลี่ยม '+p.B.length+' รูป อยู่ช่องเดิม',['เห็นวงกลม',sayN(p.A.length),'รูป','และสามเหลี่ยม',sayN(p.B.length),'รูป','อยู่ช่องเดิมของมัน ไม่ย้ายไปไหน'],600))return;
 const t=G.E('rect',{x:50,y:60,width:3*s+20,height:3*s+20,rx:12,fill:'none',stroke:'#16a34a','stroke-width':5});await G.fin('เห็นรูปของทั้งสองแผ่นครบ',['คำตอบคือภาพที่มีรูปของทั้งสองแผ่นครบ อยู่ช่องเดิม'],[t]);};

/* ---------- รูปทรงสามมิติของจริง · รูปแบน · นับด้าน ---------- */
R.shape3=async(p,G)=>{if(p.mode==='solid'){const o=G.tx(140,150,p.e,{fs:120});G.pop(o,500);if(!await G.step(p.nm,[p.nm],400))return;
  G.tx(275,150,'➜',{fs:50,fill:'#7c3aed'});const sd=raw(G,SOLID[p.s],'translate(340 40) scale(1.9)');G.pop(sd,600);
  if(!await G.step('รูปทรงแบบนี้เรียกว่า'+SOLN[p.s],['รูปทรงแบบนี้ เรียกว่า',SOLN[p.s]],500))return;
  let y=262;for(const d of SOLD[p.s]){lbl(G,300,y,d,{fs:16});G.pulse(sd);if(!await G.say([d]))return;y+=38;}
  return G.fin(p.nm+'เป็น'+SOLN[p.s],[p.nm,'เป็น'+SOLN[p.s]],[sd]);}
 if(p.mode==='face'){const o=G.tx(170,165,p.e,{fs:150});G.pop(o,500);if(!await G.step('มองขอบนอกของสิ่งนี้',['มองขอบนอกของสิ่งนี้ ว่าเหมือนรูปอะไร'],500))return;
  G.tx(305,160,'➜',{fs:50,fill:'#7c3aed'});/* ไม่วาดเส้นทับอีโมจิ (ลูกรักบี้เอียงแต่เส้นวงรีตั้งตรง ไม่ตรงกัน 12 พ.ย. 69) */
  const sh=G.E('path',{d:FLAT[p.f],transform:'translate(440 150)',fill:'#e9d5ff',stroke:INK,'stroke-width':3});G.pop(sh,500);const t=lbl(G,440,250,FLATN[p.f],{fs:20});
  return G.fin('คล้ายรูป'+FLATN[p.f],['ขอบนอกเหมือนรูป',FLATN[p.f]],[sh]);}
 const ks=p.ks,m=ks.length,gap=600/m,cnt=[],shapes=[];let total=0;
 ks.forEach((k,i)=>{const pts=poly(k,gap*i+gap/2,150,m>2?62:72);shapes.push({k,pts,el:G.E('polygon',{points:pts.map(q=>q.join(',')).join(' '),fill:'#bae6fd',stroke:INK,'stroke-width':3,'stroke-linejoin':'round'})});});
 if(!await G.step('แตะนับทีละด้าน',['ด้าน คือเส้นรอบรูป','แตะนับทีละด้าน วนไปจนครบรอบ'],500))return;
 for(let i=0;i<m;i++){const {pts,el}=shapes[i],cx=gap*i+gap/2;let k=0;G.glow(el,'#f59e0b');G.cap('รูปที่ '+(i+1)+': นับด้าน');
  for(let j=0;j<pts.length;j++){const a=pts[j],b=pts[(j+1)%pts.length],mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,dx=mx-cx,dy=my-150,dl=Math.hypot(dx,dy)||1;k++;total++;
   G.E('line',{x1:a[0],y1:a[1],x2:b[0],y2:b[1],stroke:C[i%C.length],'stroke-width':6,'stroke-linecap':'round'});G.tag(mx+dx/dl*20,my+dy/dl*20,k,C[i%C.length],11);G.sfx('pop',k);if(!await G.say([sayN(k)]))return;}
  el.style.filter='';cnt.push(k);lbl(G,cx,268,k+' ด้าน',{fs:17});}
 if(p.ask==='sum'){const t=lbl(G,300,306,cnt.join(' + ')+' = '+total+' ด้าน',{fs:19,bg:'#ecfdf5',bd:'#16a34a',fill:'#166534'});return G.fin('รวม '+total+' ด้าน',[cnt.join(' บวก '),'ได้',sayN(total),'ด้าน'],[t]);}
 const want=/5 ด้าน/.test(p.ask)?cnt.indexOf(5):/มาก/.test(p.ask)?cnt.indexOf(Math.max(...cnt)):cnt.indexOf(Math.min(...cnt));
 await G.fin('คำตอบคือรูปที่มี '+cnt[want]+' ด้าน',['คำตอบคือรูปที่มี',sayN(cnt[want]),'ด้าน'],[shapes[want].el]);};

/* ---------- ก้าวยาว ก้าวสั้น: ทางเท่ากัน แบ่งเป็นก้าว ---------- */
R.stepcmp=async(p,G)=>{const who=p.who,m=who.length,x0=100,x1=540,Y=i=>m===2?120+i*110:85+i*85;
 G.tx(x0,30,'🏠',{fs:30});G.tx(x1,30,'🥭',{fs:30});G.E('line',{x1:x0,y1:48,x2:x0,y2:310,stroke:'#cbd5e1','stroke-width':2,'stroke-dasharray':'5 5'});G.E('line',{x1:x1,y1:48,x2:x1,y2:310,stroke:'#cbd5e1','stroke-width':2,'stroke-dasharray':'5 5'});
 if(!await G.step('ระยะทางเท่ากันทุกคน',['ทุกคนเดินระยะทางเท่ากัน จากบ้านถึงต้นมะม่วง'],500))return;const rows=[];
 for(let i=0;i<m;i++){const [e,nm,n]=who[i],y=Y(i),L=(x1-x0)/n,g=G.E('g',{});G.tx(50,y,e,{fs:34});G.tx(50,y+28,nm,{fs:14,w:700});G.E('line',{x1:x0,y1:y+10,x2:x1,y2:y+10,stroke:'#e2e8f0','stroke-width':3});
  for(let k=0;k<n;k++){const a=x0+k*L,b=a+L;G.E('path',{d:'M'+a+' '+(y+10)+' Q'+((a+b)/2)+' '+(y+10-Math.min(46,L*.8))+' '+b+' '+(y+10),fill:'none',stroke:C[i],'stroke-width':3.5},g);G.E('ellipse',{cx:b,cy:y+12,rx:5,ry:3,fill:C[i]},g);if(!await G.W(90))return;}
  G.tag(x1+30,y,n,C[i],14);rows.push(g);if(!await G.step(nm+' เดิน '+n+' ก้าว',[nm,'เดิน',sayN(n),'ก้าว'],300))return;}
 const ns=who.map(w=>w[2]);if(new Set(ns).size===1)return G.fin('ก้าวยาวเท่ากัน',['เดินจำนวนก้าวเท่ากัน ในทางที่ยาวเท่ากัน','ก้าวจึงยาวเท่ากัน'],rows);
 if(!await G.step('ก้าวยาว ใช้ก้าวน้อย · ก้าวสั้น ใช้ก้าวเยอะ',['ดูสิ ก้าวยาว ๆ ใช้ไม่กี่ก้าวก็ถึง','ก้าวสั้น ๆ ต้องใช้หลายก้าว'],600))return;
 const k=p.ask==='long'?ns.indexOf(Math.min(...ns)):ns.indexOf(Math.max(...ns));
 await G.fin(who[k][1]+' ก้าว'+(p.ask==='long'?'ยาว':'สั้น')+'ที่สุด',[who[k][1],'เดิน',sayN(who[k][2]),'ก้าว',p.ask==='long'?'น้อยที่สุด จึงก้าวยาวที่สุด':'มากที่สุด จึงก้าวสั้นที่สุด'],[rows[k]]);};

/* ---------- เขียนเลข 1 ถึง N แล้วนับเลขที่ต้องการทีละตัว ---------- */
R.digits=async(p,G)=>{const N=p.N,d=String(p.d),cw=52,ch=46,x0=300-5*cw,y0=26,pos=[];let cnt=0;
 for(let i=1;i<=N;i++){const r=Math.floor((i-1)/10),c=(i-1)%10,x=x0+c*cw,y=y0+r*ch,s=String(i);G.E('rect',{x:x+2,y:y+2,width:cw-4,height:ch-4,rx:8,fill:'#fff',stroke:'#e2e8f0'});
  [...s].forEach((dg,k)=>{const dx=s.length===2?(k?9:-9):0;G.tx(x+cw/2+dx,y+ch/2+1,dg,{fs:21,w:700});if(dg===d)pos.push([x+cw/2+dx,y+ch/2+1,i]);});}
 if(!await G.step('เขียนเลข 1 ถึง '+N+' แล้วหาเลข '+d,['เขียนเลขตั้งแต่หนึ่ง ถึง',sayN(N),'ออกมาจริง ๆ','แล้วหาเลข',d,'ทีละตัว'],600))return;
 let last=-1;for(const [x,y,i] of pos){cnt++;G.E('circle',{cx:x,cy:y,r:12,fill:'#fde68a',opacity:.75});G.tx(x,y,d,{fs:21,w:800,fill:'#b45309'});G.tag(x+11,y-15,cnt,'#ec4899',9);G.sfx('pop',cnt);
  if(i===last){G.cap('เลข '+i+' มีเลข '+d+' สองตัว!');if(!await G.say(['เลข',sayN(i),'มีเลข',d,'สองตัว',sayN(cnt)]))return;}else if(!await G.say([sayN(cnt)]))return;last=i;}
 const t=lbl(G,300,y0+Math.ceil(N/10)*ch+34,'เลข '+d+' มีทั้งหมด '+cnt+' ตัว',{fs:20,bg:'#ecfdf5',bd:'#16a34a',fill:'#166534'});
 await G.fin('เลข '+d+' มีทั้งหมด '+cnt+' ตัว',['เลข',d,'มีทั้งหมด',sayN(cnt),'ตัว','อย่าลืมเลขที่มีเลข',d,'สองตัวนะ'],[t]);};

/* ---------- นั่งกระเช้า/รถ: ใส่คนทีละที่ คนที่เหลือก็ต้องใช้อีกคัน ---------- */
R.ceilg=async(p,G)=>{const n=p.n,k=p.per,me=p.me,cars=Math.ceil(n/k),cw=Math.min(96,540/cars),x0=300-cars*cw/2,cols=Math.min(k,2),rows=Math.ceil(k/cols),y0=110,bh=rows*44+20;
 const cb=[...Array(cars)].map((_,i)=>{const g=G.E('g',{});roundRect(G,x0+i*cw+5,y0,cw-10,bh,'#fef3c7','#f59e0b',14,g);G.tx(x0+i*cw+cw/2,y0-18,p.e+' '+(i+1),{fs:16,w:700,p:g});
  for(let s=0;s<k;s++){const cx=x0+i*cw+cw/2+(cols===2?(s%2?16:-16):0),cy=y0+28+Math.floor(s/cols)*44;G.E('circle',{cx,cy,r:15,fill:'none',stroke:'#d6a35c','stroke-dasharray':'4 3'},g);}return g;});
 if(!await G.step(p.u+'ละ '+k+' คน',[p.u+'ละ',sayN(k),'คน','ใส่คนทีละคน จนเต็มแล้วค่อยไป'+p.u+'ถัดไป'],600))return;
 for(let j=0;j<n;j++){const i=Math.floor(j/k),s=j%k,cx=x0+i*cw+cw/2+(cols===2?(s%2?16:-16):0),cy=y0+28+Math.floor(s/cols)*44,isMe=me&&j===me-1;const e=G.tx(cx,cy,isMe?'👧':'🧒',{fs:24});G.pop(e);G.sfx('pop',j);
  if(isMe){G.glow(e,'#ec4899');G.glow(cb[i],'#ec4899');if(!await G.step('น้องฟ้าคนที่ '+me+' อยู่'+p.u+'ที่ '+(i+1),['นี่คือน้องฟ้า คนที่',sayN(me),'ได้นั่ง'+p.u+'ที่',sayN(i+1)],600))return;
   return G.fin(p.u+'ที่ '+(i+1),['น้องฟ้าได้นั่ง'+p.u+'ที่',sayN(i+1)],[cb[i]]);}if(!await G.say([sayN(j+1)]))return;}
 const left=n%k;if(left){if(!await G.step('เต็ม '+Math.floor(n/k)+' '+p.u+' ยังเหลืออีก '+left+' คน',['เต็มแล้ว',sayN(Math.floor(n/k)),p.u,'ยังเหลืออีก',sayN(left),'คน','ถึงไม่เต็ม ก็ต้องใช้อีกหนึ่ง'+p.u],600))return;G.glow(cb[cars-1],'#ec4899');}
 await G.fin('ต้องใช้ '+cars+' '+p.u,['ต้องใช้อย่างน้อย',sayN(cars),p.u],cb);};

/* ---------- โปรโมชัน ซื้อ … แถม … ---------- */
R.promo=async(p,G)=>{const b=p.buy,f=p.free,set=b+f,packs=p.want/set,pay=b*packs,iw=48,y0=p.price?50:64,gh=p.price?78:82;let n=0;const paid=[];
 if(!await G.step('ซื้อ '+b+' แถม '+f+' = ได้ '+set+' '+p.u,['ซื้อ',sayN(b),'แถม',sayN(f),'จ่ายเงิน',sayN(b),p.u,'แต่ได้ของ',sayN(set),p.u],600))return;
 for(let i=0;i<packs;i++){const y=y0+i*gh,g=G.E('g',{});roundRect(G,30,y,set*iw+24,gh-12,'#f0f9ff','#93c5fd',14,g);G.tx(set*iw+80,y+(gh-12)/2,'ชุดที่ '+(i+1),{fs:15,w:700,fill:'#2563eb',p:g});G.pop(g);
  for(let j=0;j<set;j++){const x=42+j*iw+iw/2,e=G.tx(x,y+26,p.e,{fs:32,p:g});if(j<b){n++;const t=G.tag(x,y+gh-26,n,'#f59e0b',10);paid.push(t);}else{const t=G.E('g',{},g);roundRect(G,x-20,y+gh-36,40,20,'#16a34a',null,10,t);G.tx(x,y+gh-26,'แถม',{fs:12,w:700,fill:'#fff',p:t});}}
  G.sfx('pop',i);if(!await G.step('ชุดที่ '+(i+1)+' · รวม '+((i+1)*set)+' '+p.u,['ชุดที่',sayN(i+1),'ได้ของรวม',sayN((i+1)*set),p.u],500))return;}
 if(!await G.step('จ่ายเงินซื้อ '+pay+' '+p.u,['ได้ครบ',sayN(p.want),p.u,'แล้ว','ต้องจ่ายเงินซื้อแค่',sayN(pay),p.u,'ที่มีเลขสีส้ม'],600))return;
 if(!p.price)return G.fin('จ่ายเงินซื้อ '+pay+' '+p.u,['จ่ายเงินซื้อ',sayN(pay),p.u],paid);
 const t=lbl(G,470,286,pay+' × '+p.price+' = '+pay*p.price+' บาท',{fs:19,bg:'#ecfdf5',bd:'#16a34a',fill:'#166534'});
 const cnt=[];for(let i=1;i<=pay;i++)cnt.push(sayN(i*p.price));if(!await G.say([p.u+'ละ',sayN(p.price),'บาท','นับทีละ',sayN(p.price)].concat(cnt)))return;
 await G.fin('จ่าย '+pay*p.price+' บาท',['ต้องจ่ายเงิน',sayN(pay*p.price),'บาท'],[t]);};

/* ---------- ไป-กลับ ---------- */
R.trip2=async(p,G)=>{const pl=p.pl,m=pl.length,X=i=>90+i*(420/(m-1)),y=170;G.E('line',{x1:X(0),y1:y,x2:X(m-1),y2:y,stroke:'#cbd5e1','stroke-width':10,'stroke-linecap':'round'});
 pl.forEach(([e,nm],i)=>{G.tx(X(i),y-52,e,{fs:44});G.tx(X(i),y+36,nm,{fs:16,w:700});});p.km.forEach((k,i)=>lbl(G,(X(i)+X(i+1))/2,y-12,k+' กม.',{fs:15,bg:'#fff7ed',bd:'#fdba74',fill:'#c2410c'}));
 const s=p.km.reduce((a,b)=>a+b,0);
 if(!await G.step('ขาไป '+s+' กิโลเมตร',['ขาไป จาก'+pl[0][1]+' ถึง'+pl[m-1][1]].concat(m>2?[p.km.join(' บวก '),'ได้']:[]).concat([sayN(s),'กิโลเมตร']),400))return;
 const go=G.E('path',{d:'M'+X(0)+' '+(y+70)+' H'+X(m-1),stroke:'#3b82f6','stroke-width':5,'marker-end':'',fill:'none'});G.pop(go);G.tx(X(m-1)+16,y+70,'▶',{fs:20,fill:'#3b82f6'});G.tx(300,y+92,'ไป '+s+' กม.',{fs:16,w:700,fill:'#2563eb'});
 const kid=G.tx(X(0),y-6,'🧒',{fs:30});G.move(kid,X(m-1)-X(0),0,1200);G.sfx('whoosh');if(!await G.W(1300))return;
 if(!await G.step('ขากลับ อีก '+s+' กิโลเมตร',['ขากลับทางเดิม ก็ต้องเดินอีก',sayN(s),'กิโลเมตร'],400))return;
 const bk=G.E('path',{d:'M'+X(m-1)+' '+(y+112)+' H'+X(0),stroke:'#f97316','stroke-width':5,fill:'none'});G.pop(bk);G.tx(X(0)-16,y+112,'◀',{fs:20,fill:'#f97316'});G.tx(300,y+134,'กลับ '+s+' กม.',{fs:16,w:700,fill:'#c2410c'});
 G.move(kid,0,0,1200);if(!await G.W(1300))return;const day=2*s;
 let t=lbl(G,300,40,'ไปและกลับ '+s+' + '+s+' = '+day+' กม.',{fs:19,bg:'#ecfdf5',bd:'#16a34a',fill:'#166534'});
 if(p.days>1){if(!await G.step('วันละ '+day+' กิโลเมตร',['ไปและกลับหนึ่งวัน',sayN(day),'กิโลเมตร'],400))return;t.remove();t=lbl(G,300,40,'วันละ '+day+' กม. × '+p.days+' วัน = '+day*p.days+' กม.',{fs:19,bg:'#ecfdf5',bd:'#16a34a',fill:'#166534'});
  return G.fin('รวม '+day*p.days+' กิโลเมตร',['ทำแบบนี้',sayN(p.days),'วัน','รวม',sayN(day*p.days),'กิโลเมตร'],[t]);}
 await G.fin('รวม '+day+' กิโลเมตร',[sayN(s),'บวก',sayN(s),'ได้',sayN(day),'กิโลเมตร'],[t]);};

/* ---------- ดูทีละคำ (ตัวสะกด · เสียงพยัญชนะต้น · ห นำ) ---------- */
R.wscan=async(p,G)=>{const ws=p.ws,n=ws.length,fs=n>6?22:26,wd=ws.map(w=>Math.max(64,22+[...w].length*fs*.62)),gap=10,tot=wd.reduce((a,b)=>a+b,0)+gap*(n-1),sc=Math.min(1,570/tot),x0=300-tot*sc/2,xs=[];let acc=x0;
 const tiles=ws.map((w,i)=>{xs.push(acc+wd[i]*sc/2);const g=G.E('g',{});roundRect(G,acc,100,wd[i]*sc,70,'#fff7ed','#fdba74',14,g);G.tx(acc+wd[i]*sc/2,136,w,{fs:fs*Math.max(.8,sc),w:700,p:g});acc+=(wd[i]+gap)*sc;return g;});
 const intro={nofin:['ตัวสะกด คือพยัญชนะที่อยู่ท้ายคำ หลังสระ','ดูทีละคำนะ'],init:['ฟังเสียงแรกของแต่ละคำ','ห นำ ไม่ออกเสียง ห ให้ฟังตัวข้างหลัง'],snd:['ฟังเสียงพยัญชนะตัวแรกของแต่ละคำ','ตัวอักษรต่างกัน ก็ออกเสียงเหมือนกันได้'],hn:['ห นำ คือ ห ที่ไม่ออกเสียง','อยู่หน้า ง ญ น ม ย ร ล ว']}[p.mode];
 if(!await G.step(intro[0],intro,600))return;let cnt=0;const hits=[];
 for(let i=0;i<n;i++){const h=p.hit[i],good=p.mode==='snd'?h:h;G.pulse(tiles[i]);G.glow(tiles[i],good?'#16a34a':'#94a3b8');
  lbl(G,xs[i],n>3&&i%2?232:196,p.note[i],{fs:13,bg:good?'#ecfdf5':'#f1f5f9',bd:good?'#16a34a':'#cbd5e1',fill:good?'#166534':'#475569'});
  const segs=[ws[i],p.note[i]];if(h&&p.mode!=='snd'){cnt++;G.tag(xs[i],86,cnt,'#ec4899',12);segs.push(sayN(cnt));hits.push(tiles[i]);}G.sfx('pop',i);if(!await G.say(segs))return;tiles[i].style.filter='';}
 if(p.mode==='snd'){const od=p.hit.indexOf(false);G.glow(tiles[od],'#e11d48');ring(G,xs[od],135,52,'#e11d48');return G.fin(p.fin,[p.fin],[tiles[od]]);}
 await G.fin(p.fin,[p.fin],hits);};

/* ---------- เวลาแบบไทย: ตี โมงเช้า เที่ยง บ่าย โมงเย็น ทุ่ม ---------- */
const TNM=h=>h<=5?'ตี'+h:h<=11?h+'โมง':h===12?'เที่ยง':h<=15?'บ่าย'+(h-12):h<=18?(h-12)+'โมง':h<=23?(h-18)+'ทุ่ม':'เที่ยงคืน';
const TCOL=h=>h<=5?'#1e3a8a':h<=11?'#fde68a':h===12?'#fb923c':h<=15?'#fdba74':h<=18?'#f9a8d4':h<=23?'#c4b5fd':'#1e1b4b';
R.tclock=async(p,G)=>{const cw=46,x0=300-6*cw,Y=[86,206],cells={},pos={};
 for(let h=1;h<=24;h++){const r=h>12?1:0,c=(h-1)%12,x=x0+c*cw,y=Y[r],g=G.E('g',{}),dark=h<=5||h===24;pos[h]=[x+cw/2,y+64];roundRect(G,x+2,y,cw-4,62,TCOL(h),'#fff',8,g);G.tx(x+cw/2,y+20,String(h),{fs:18,w:800,fill:dark?'#fff':INK,p:g});G.tx(x+cw/2,y+45,TNM(h),{fs:10,w:700,fill:dark?'#e0e7ff':'#475569',p:g});cells[h]=g;}
 G.tx(x0+2.5*cw,Y[0]-16,'🌙 ตี (กลางดึก)',{fs:13,w:700});G.tx(x0+8.5*cw,Y[0]-16,'☀️ โมงเช้า',{fs:13,w:700});G.tx(x0+1.5*cw,Y[1]-16,'บ่าย…โมง',{fs:13,w:700});G.tx(x0+4.5*cw,Y[1]-16,'…โมงเย็น',{fs:13,w:700});G.tx(x0+9*cw,Y[1]-16,'🌙 ทุ่ม',{fs:13,w:700});
 if(!await G.step('หนึ่งวันมี 24 ชั่วโมง',['หนึ่งวันมียี่สิบสี่ชั่วโมง','คนไทยเรียกเวลาแต่ละช่วงไม่เหมือนกัน'],600))return;
 const hop=async(from,to)=>{let k=0;for(let h=from+1;;h++){const hh=(h-1)%24+1;k++;G.tag(pos[hh][0],pos[hh][1],k,'#ec4899',10);G.sfx('pop',k);if(!await G.say([sayN(k)]))return false;if(hh===to)return k;}};
 if(p.mode==='span'){G.glow(cells[p.h],'#16a34a');if(!await G.step(p.nm+' = '+p.h+' นาฬิกา',[p.nm,'คือ',sayN(p.h),'นาฬิกา'],500))return;G.glow(cells[p.h1],'#ec4899');if(!await G.step(p.nm1+' = '+p.h1+' นาฬิกา',[p.nm1,'คือ',sayN(p.h1),'นาฬิกา','นับทีละชั่วโมง'],500))return;
  const k=await hop(p.h,p.h1);if(k===false)return;return G.fin(k+' ชั่วโมง',['นับได้',sayN(k),'ชั่วโมง'],[cells[p.h],cells[p.h1]]);}
 const h=p.h;let rule;
 if(h>=19&&h<=23)rule=['ทุ่ม เริ่มนับหลังหกโมงเย็น','หกโมงเย็น คือสิบแปดนาฬิกา','นับต่อไปทีละหนึ่ง เป็นหนึ่งทุ่ม สองทุ่ม'];
 else if(h>=13&&h<=15)rule=['บ่ายโมง เริ่มนับหลังเที่ยงวัน','เที่ยงวัน คือสิบสองนาฬิกา','นับต่อไป บ่ายโมง บ่ายสองโมง'];
 else if(h>=16&&h<=18)rule=['สี่โมงเย็น ถึงหกโมงเย็น','คือสิบหก ถึงสิบแปดนาฬิกา'];
 else if(h<=5)rule=['ตีหนึ่ง ถึงตีห้า คือกลางดึก','ตรงกับหนึ่ง ถึงห้านาฬิกา'];
 else if(h===12)rule=['เที่ยงวัน คือสิบสองนาฬิกา'];else rule=['ตอนเช้า หกโมงเช้า ถึงสิบเอ็ดโมง','ตัวเลขเท่ากับนาฬิกาพอดี'];
 if(!await G.step(rule[0],rule,500))return;
 if(h>=19&&h<=23){G.glow(cells[18],'#f59e0b');const k=await hop(18,h);if(k===false)return;}else if(h>=13&&h<=15){G.glow(cells[12],'#f59e0b');const k=await hop(12,h);if(k===false)return;}
 G.glow(cells[h],'#16a34a');G.pulse(cells[h]);const t=lbl(G,300,300,p.nm+' = '+h+' นาฬิกา',{fs:20,bg:'#ecfdf5',bd:'#16a34a',fill:'#166534'});
 await G.fin(p.nm+' = '+h+' นาฬิกา',[p.nm,'ตรงกับ',sayN(h),'นาฬิกา'],[cells[h],t]);};

/* ---------- ลูกเต๋า: ด้านที่มองไม่เห็น = 7 − ด้านตรงข้าม ---------- */
R.dice7=async(p,G)=>{const b=box3(G,p.L,p.Rr,p.T,160,40,100);const W=7,pan=[];
 const panel=(i,x,lab,v)=>{const g=G.E('g',{});G.tx(x,48,lab,{fs:14,w:700,p:g});roundRect(G,x-38,62,76,76,'#f8fafc',INK,12,g);const q=G.tx(x,100,'?',{fs:34,w:800,fill:'#e11d48',p:g});G.pop(g);return {g,q,x,v};};
 if(!await G.step('ด้านตรงข้ามกัน รวมกันได้ 7 เสมอ',['ลูกเต๋า ด้านที่อยู่ตรงข้ามกัน บวกกันได้เจ็ดเสมอ','หนึ่งคู่กับหก สองคู่กับห้า สามคู่กับสี่'],700))return;
 const want=p.ask==='hidden'?['T','L','Rr']:[{bottom:'T',oppL:'L',oppR:'Rr'}[p.ask]],NM={T:'ด้านบน',L:'ด้านซ้าย',Rr:'ด้านขวา'},FE={T:b.fT,L:b.fL,Rr:b.fR},LAB={T:'ด้านล่าง',L:'ตรงข้ามซ้าย',Rr:'ตรงข้ามขวา'};
 const xs=want.length===1?[470]:[360,455,550];
 for(let i=0;i<want.length;i++){const k=want[i],v=p[k],P=panel(i,xs[i],LAB[k],W-v);pan.push(P);G.glow(FE[k],'#3b82f6');
  if(!await G.step(NM[k]+' '+v+' จุด → ด้านตรงข้าม 7 − '+v+' = '+(W-v),[NM[k],'มี',sayN(v),'จุด','ด้านตรงข้ามจึงมี','เจ็ด ลบ',sayN(v),'ได้',sayN(W-v),'จุด'],700))return;
  P.q.remove();pips(G,W-v,P.x-34,66,68,P.g);G.pop(P.g);G.sfx('pop',i);FE[k].style.filter='';}
 if(p.ask!=='hidden')return G.fin((LAB[want[0]])+' มี '+(W-p[want[0]])+' จุด',['คำตอบคือ',sayN(W-p[want[0]]),'จุด'],[pan[0].g]);
 const a=W-p.T,b2=W-p.L,c=W-p.Rr,s=a+b2+c;const t=lbl(G,455,190,a+' + '+b2+' + '+c+' = '+s+' จุด',{fs:19,bg:'#ecfdf5',bd:'#16a34a',fill:'#166534'});
 if(!await G.step('รวมสามด้านที่มองไม่เห็น',[sayN(a),'บวก',sayN(b2),'บวก',sayN(c),'ได้',sayN(s),'จุด'],500))return;
 lbl(G,455,236,'หรือ 21 − '+(p.T+p.L+p.Rr)+' = '+s,{fs:16});await G.fin('รวม '+s+' จุด',['หรือคิดว่า ทั้งลูกมียี่สิบเอ็ดจุด ลบด้านที่เห็น ก็ได้',sayN(s),'จุดเหมือนกัน'],[t]);};

/* ---------- สามเหลี่ยมตัวเลข: กลางเส้น = มุม + มุม ---------- */
R.ptri=async(p,G)=>{const P=[[300,36],[478,290],[122,290]],M=[[0,1],[1,2],[2,0]].map(([a,b])=>[(P[a][0]+P[b][0])/2,(P[a][1]+P[b][1])/2]),ALL=P.concat(M),v=p.v,h=p.hide;
 G.E('polygon',{points:P.map(q=>q.join(',')).join(' '),fill:'#f0f9ff',stroke:INK,'stroke-width':3,'stroke-linejoin':'round'});
 const nd=ALL.map(([x,y],i)=>{const g=G.E('g',{});G.E('circle',{cx:x,cy:y,r:26,fill:i===h?'#fde68a':i<3?'#fff':'#dbeafe',stroke:INK,'stroke-width':2.5},g);const t=G.tx(x,y+1,i===h?'?':String(v[i]),{fs:24,w:800,fill:i===h?'#e11d48':INK,p:g});return {g,t};});
 const SIDE=[[3,0,1],[4,1,2],[5,2,0]];
 if(!await G.step('เลขกลางเส้น = เลขที่มุมสองข้างบวกกัน',['กติกาคือ','เลขในวงกลมสีฟ้ากลางเส้น','เท่ากับเลขที่มุมสองข้างของเส้นนั้นบวกกัน'],700))return;
 const ex=SIDE.find(s=>!s.includes(h));[ex[1],ex[2],ex[0]].forEach(i=>G.glow(nd[i].g,'#3b82f6'));
 if(!await G.step('ตัวอย่าง: '+v[ex[1]]+' + '+v[ex[2]]+' = '+v[ex[0]],['ลองดูเส้นนี้',sayN(v[ex[1]]),'บวก',sayN(v[ex[2]]),'ได้',sayN(v[ex[0]]),'จริงด้วย'],600))return;[ex[1],ex[2],ex[0]].forEach(i=>nd[i].g.style.filter='');
 let msg,segs;if(h>=3){const [,a,b]=SIDE[h-3];[a,b].forEach(i=>G.glow(nd[i].g,'#ec4899'));msg=v[a]+' + '+v[b]+' = '+v[h];segs=['ช่องที่หายอยู่กลางเส้น','เอามุมสองข้างบวกกัน',sayN(v[a]),'บวก',sayN(v[b]),'ได้',sayN(v[h])];}
 else{const s=SIDE.find(s=>s.includes(h)),o=s[1]===h?s[2]:s[1];[s[0],o].forEach(i=>G.glow(nd[i].g,'#ec4899'));msg=v[s[0]]+' − '+v[o]+' = '+v[h];segs=['ช่องที่หายอยู่ที่มุม','เอาเลขกลางเส้น ลบเลขอีกมุมหนึ่ง',sayN(v[s[0]]),'ลบ',sayN(v[o]),'ได้',sayN(v[h])];}
 if(!await G.step(msg,segs,700))return;nd[h].t.textContent=String(v[h]);nd[h].t.setAttribute('fill','#16a34a');G.pop(nd[h].t);await G.fin('ช่อง ? คือ '+v[h],['ช่องที่หายไปคือ',sayN(v[h])],[nd[h].g]);};

/* ---------- ลำดับ ก–ฮ ---------- */
const THC=[...'กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ'];
R.corder=async(p,G)=>{const idx=p.mode==='next'?[p.i0,p.i0+p.n]:p.mode==='between'?[p.i0,p.i1]:p.ix,lo=Math.max(0,Math.min(...idx)-1),hi=Math.min(43,Math.max(...idx)+(p.mode==='next'?1:1)),n=hi-lo+1,w=Math.min(48,560/n),x0=300-n*w/2;
 const cell={};for(let i=lo;i<=hi;i++){const g=G.E('g',{});roundRect(G,x0+(i-lo)*w+2,120,w-4,64,'#fff','#cbd5e1',10,g);G.tx(x0+(i-lo)*w+w/2,153,THC[i],{fs:30,w:700,p:g});cell[i]=g;}
 const X=i=>x0+(i-lo)*w+w/2;G.tx(X(lo)-w*.8,153,'…',{fs:24,fill:'#94a3b8'});G.tx(X(hi)+w*.8,153,'…',{fs:24,fill:'#94a3b8'});
 if(!await G.step('เรียงตามลำดับ ก ถึง ฮ',['นี่คือพยัญชนะช่วงนี้ เรียงตามลำดับ ก ถึง ฮ'],500))return;
 if(p.mode==='next'){G.glow(cell[p.i0],'#3b82f6');if(!await G.step('เริ่มที่ '+THC[p.i0]+' ไม่นับตัวนี้',['เริ่มที่',THC[p.i0],'ไม่นับตัวนี้'],400))return;
  for(let k=1;k<=p.n;k++){const i=p.i0+k;G.tag(X(i),104,k,'#ec4899',12);G.sfx('pop',k);if(!await G.say([sayN(k),THC[i]]))return;}const a=p.i0+p.n;G.glow(cell[a],'#16a34a');return G.fin('คำตอบคือ '+THC[a],['คำตอบคือ',THC[a]],[cell[a]]);}
 if(p.mode==='between'){[p.i0,p.i1].forEach(i=>G.glow(cell[i],'#3b82f6'));if(!await G.step('ไม่นับ '+THC[p.i0]+' กับ '+THC[p.i1],['ไม่นับสองตัวที่โจทย์ให้','นับเฉพาะตัวที่อยู่ระหว่างกลาง'],500))return;let k=0;
  for(let i=p.i0+1;i<p.i1;i++){k++;G.tag(X(i),104,k,'#ec4899',12);G.sfx('pop',k);if(!await G.say([THC[i],sayN(k)]))return;}return G.fin('มี '+k+' ตัว',['ระหว่างกลางมี',sayN(k),'ตัว']);}
 const ord=[...p.ix].sort((a,b)=>a-b);for(let k=0;k<ord.length;k++){G.glow(cell[ord[k]],'#16a34a');G.tag(X(ord[k]),104,k+1,'#16a34a',12);G.sfx('pop',k);if(!await G.say([THC[ord[k]],'มาเป็นลำดับที่',sayN(k+1)]))return;}
 const t=lbl(G,300,232,ord.map(i=>THC[i]).join(' ➜ '),{fs:24,bg:'#ecfdf5',bd:'#16a34a',fill:'#166534'});await G.fin('เรียงได้ '+ord.map(i=>THC[i]).join(' '),['เรียงได้'].concat(ord.map(i=>THC[i])),[t]);};

/* ---------- แผนภูมิรูปภาพ 1 ภาพแทนหลายหน่วย: นับทีละ per ---------- */
R.chart2=async(p,G)=>{const rows=p.rows,per=p.per,y0=70,rh=64;G.tx(300,24,p.title,{fs:20,w:700});const lg=lbl(G,300,300,'1 ภาพ แทน '+per+' '+p.unit,{fs:17,bg:'#fff7ed',bd:'#fdba74',fill:'#c2410c'});
 const icons=rows.map(([nm,e,k],i)=>{const y=y0+i*rh;G.E('rect',{x:20,y:y-28,width:560,height:rh-6,rx:12,fill:i%2?'#f8fafc':'#fff',stroke:'#e2e8f0'});G.tx(80,y,nm,{fs:18,w:700});return [...Array(k)].map((_,j)=>G.tx(160+j*52,y,e,{fs:34}));});
 if(!await G.step('ดูก่อน: 1 ภาพ แทนกี่'+p.unit,['ดูตรงนี้ก่อนนะ','ภาพหนึ่งภาพ แทน',sayN(per),p.unit,'ไม่ใช่หนึ่ง'],600))return;
 for(let i=0;i<rows.length;i++){const [nm,e,k]=rows[i],y=y0+i*rh,cnt=[];for(let j=0;j<k;j++){G.tag(160+j*52+16,y-18,(j+1)*per,C[i],11);G.sfx('pop',j);cnt.push(sayN((j+1)*per));}
  lbl(G,540,y,(k*per)+' '+p.unit,{fs:16,bg:'#ecfdf5',bd:'#16a34a',fill:'#166534'});if(!await G.say([nm,'นับทีละ',sayN(per)].concat(cnt,[p.unit])))return;}
 await G.fin(p.fin,[p.fin]);};

/* ---------- บทเรียนสั้นกึ่งสอน ---------- */
const T={};X2.TEACH=T;
const lesson=(title,slides)=>async G=>{const hd=G.E('g',{});roundRect(G,150,4,300,32,'#8e5bd8',null,16,hd);G.tx(300,21,'📖 '+title,{fs:16,w:700,fill:'#fff',p:hd});
 const bk=G.tx(300,180,'📖',{fs:110});G.pop(bk,500);
 if(!await G.step('📖 บทเรียนสั้น: '+title,['ก่อนดูเฉลย','มาเรียนเรื่อง'+title+'กันก่อนนะ'],500))return false;
 bk.remove();let g=null;for(const [cap,segs,draw,ms] of slides){if(g)g.remove();g=G.E('g',{});if(draw){const r=draw(G,g);if(r&&r.then&&!await r)return false;}if(!await G.step(cap,segs,ms||700))return false;}
 if(g)g.remove();return await G.step('ทีนี้มาดูข้อนี้กัน',['เข้าใจแล้ว','ทีนี้มาดูเฉลยข้อนี้กันนะ'],400);};
const em=(G,g,x,y,s,fs)=>{const e=G.tx(x,y,s,{fs:fs||44,p:g});G.pop(e);return e;};
const row=(G,g,y,arr,fs,gap)=>{gap=gap||Math.min(90,560/arr.length);const x0=300-(arr.length-1)*gap/2;return arr.map((s,i)=>em(G,g,x0+i*gap,y,s,fs));};
const tx=(G,g,x,y,s,o)=>G.tx(x,y,s,Object.assign({fs:17,w:700,p:g},o||{}));
const grid3=(G,g,x0,y0,s,cells,hl)=>cells.forEach((r,ri)=>r.forEach((v,ci)=>{G.E('rect',{x:x0+ci*s,y:y0+ri*s,width:s,height:s,fill:hl&&hl(ri,ci)?'#fde68a':'#fff',stroke:INK,'stroke-width':2},g);G.tx(x0+ci*s+s/2,y0+ri*s+s/2+2,v,{fs:s*.55,p:g,fill:v==='?'?'#e11d48':INK,w:700});}));

T.l_dice=lesson('ลูกเต๋าและภาพคลี่',[
 ['ลูกเต๋ามี 6 หน้า มีจุด 1 ถึง 6',['ลูกเต๋ามีหกหน้า','แต่ละหน้ามีจุด ตั้งแต่หนึ่ง ถึงหก'],(G,g)=>{for(let i=1;i<=6;i++)G.pop(die2(G,i,40+(i-1)*90,130,70,g));}],
 ['ด้านตรงข้ามรวมกันได้ 7',['ด้านที่อยู่ตรงข้ามกัน บวกกันได้เจ็ดเสมอ','หนึ่งคู่กับหก','สองคู่กับห้า','สามคู่กับสี่'],(G,g)=>{[[1,6],[2,5],[3,4]].forEach(([a,b],i)=>{const x=60+i*180;die2(G,a,x,110,56,g);tx(G,g,x+76,138,'+');die2(G,b,x+92,110,56,g);tx(G,g,x+76,200,'= 7',{fs:22,fill:'#16a34a'});});}],
 ['ภาพคลี่ = กล่องที่แกะออกมาวางแบน',['ภาพคลี่ คือกล่องที่แกะออกมาวางแบน ๆ','ช่องที่อยู่แถวเดียวกัน และมีช่องคั่นหนึ่งช่อง','พับแล้วจะอยู่ตรงข้ามกัน'],(G,g)=>{const s=58,x0=184,y0=60,N=[[1,0,2],[0,1,3],[1,1,1],[2,1,4],[3,1,6],[1,2,5]];N.forEach(([c,r,v])=>die2(G,v,x0+c*s,y0+r*s,s,g,v===1||v===6));
   const a=G.E('path',{d:'M'+(x0+1.5*s)+' '+(y0+2*s+4)+' Q'+(x0+2.5*s)+' '+(y0+2.9*s)+' '+(x0+3.5*s)+' '+(y0+2*s+4),fill:'none',stroke:'#e11d48','stroke-width':4},g);G.pop(a);tx(G,g,x0+2.5*s,y0+2.95*s+12,'1 กับ 6 อยู่ตรงข้ามกัน',{fill:'#e11d48'});}],
 ['สามด้านที่เห็นพร้อมกัน ต้องไม่อยู่ตรงข้ามกัน',['มองลูกเต๋าครั้งเดียว เห็นได้มากที่สุดสามด้าน','สามด้านนั้นอยู่ติดกันที่มุมเดียวกัน','ไม่มีคู่ไหนอยู่ตรงข้ามกัน'],(G,g)=>{box3(G,1,2,3,300,50,90,g);}]]);
T.l_blocks3=lesson('บล็อกที่ติดกัน และการมองด้านข้าง',[
 ['ติดกัน = แตะกันเต็มหน้า',['บล็อกสองก้อนที่ติดกัน คือแตะกันเต็มหน้า'],(G,g)=>{cube(G,210,140,80,'#cbd5e1',g);cube(G,290,140,80,'#fff',g);tx(G,g,300,270,'✓ ติดกัน',{fs:22,fill:'#16a34a'});}],
 ['แตะแค่ขอบหรือมุม ไม่นับว่าติด',['ถ้าแตะกันแค่ขอบ หรือแค่มุม','ไม่นับว่าติดกัน'],(G,g)=>{cube(G,210,170,80,'#cbd5e1',g);cube(G,290,90,80,'#fff',g);tx(G,g,300,290,'✗ แตะแค่ขอบ ไม่นับ',{fs:22,fill:'#e11d48'});}],
 ['ข้างบน ข้างล่าง ข้างหลัง ก็นับด้วย',['อย่าลืมดูก้อนที่อยู่ข้างบน ข้างล่าง','และก้อนที่ซ่อนอยู่ข้างหลังด้วยนะ'],(G,g)=>{cube(G,290,120,70,'#fff',g);cube(G,250,170,70,'#fff',g);cube(G,250,100,70,'#fff',g);cube(G,180,170,70,'#cbd5e1',g);tx(G,g,300,290,'ก้อนสีเทาติดกับก้อนข้าง ๆ เต็มหน้า',{fs:17});}],
 ['มองจากด้านข้าง เห็นความสูงแต่ละแถว',['ถ้ายืนมองจากด้านข้าง','จะเห็นความสูงของแต่ละแถว','ก้อนที่สูงกว่าจะบังก้อนข้างหลังไว้'],(G,g)=>{cube(G,130,200,52,'#93c5fd',g);cube(G,130,148,52,'#93c5fd',g);cube(G,182,200,52,'#93c5fd',g);em(G,g,300,170,'🐱',48);tx(G,g,300,215,'มองจากตรงนี้ ➜',{fs:14});
   [[0,2],[1,1]].forEach(([c,h])=>{for(let z=0;z<h;z++)G.E('rect',{x:420+c*52,y:200-z*52,width:52,height:52,fill:'#93c5fd',stroke:INK,'stroke-width':2.5},g);});tx(G,g,472,280,'ภาพที่แมวเห็น',{fs:15});}]]);
T.l_latin=lesson('ตารางห้ามซ้ำ',[
 ['ทุกแถวมีครบ ไม่ซ้ำ',['ดูแถวนอนทีละแถว','ทุกแถวมีครบทั้งสามอย่าง ไม่ซ้ำกันเลย'],(G,g)=>grid3(G,g,210,50,70,[['🍎','🍌','🍇'],['🍇','🍎','🍌'],['🍌','🍇','🍎']],r=>r===0)],
 ['ทุกหลักก็ไม่ซ้ำ',['ดูแถวตั้ง หรือหลัก ก็ไม่ซ้ำเหมือนกัน'],(G,g)=>grid3(G,g,210,50,70,[['🍎','🍌','🍇'],['🍇','🍎','🍌'],['🍌','🍇','🍎']],(r,c)=>c===1)],
 ['ช่องว่าง: ดูว่าแถวและหลักยังขาดอะไร',['ช่องที่ว่าง ให้ดูว่าแถวนั้น และหลักนั้น ยังขาดอะไร','แถวนี้มีแอปเปิลกับกล้วยแล้ว','ที่ยังไม่มีคือองุ่น'],(G,g)=>grid3(G,g,210,50,70,[['🍎','🍌','?'],['🍇','🍎','🍌'],['🍌','🍇','🍎']],(r,c)=>r===0&&c===2)],
 ['เริ่มจากช่องที่ง่ายที่สุด',['ถ้ามีหลายช่อง','เริ่มจากช่องที่แถวหรือหลักของมันเกือบเต็มแล้ว']]]);
T.l_rotate=lesson('การหมุนภาพ',[
 ['ตามเข็มนาฬิกา ⟳',['หมุนตามเข็มนาฬิกา','คือหมุนไปทางเดียวกับเข็มนาฬิกา'],(G,g)=>{em(G,g,220,160,'🕐',110);em(G,g,400,160,'⟳',110);}],
 ['ทวนเข็มนาฬิกา ⟲',['หมุนทวนเข็มนาฬิกา คือหมุนกลับอีกทาง'],(G,g)=>{em(G,g,220,160,'🕐',110);em(G,g,400,160,'⟲',110);}],
 ['หนึ่งในสี่รอบ = จุดเลื่อนไป 1 มุม',['หมุนหนึ่งในสี่รอบ จุดสีแดงจะเลื่อนไปหนึ่งมุม','บนขวา ไปล่างขวา ไปล่างซ้าย ไปบนซ้าย'],async(G,g)=>{const s=150,x=225,y=85;G.E('rect',{x,y,width:s,height:s,rx:16,fill:'#f8fafc',stroke:INK,'stroke-width':3},g);const P=[[x+s-22,y+22],[x+s-22,y+s-22],[x+22,y+s-22],[x+22,y+22]];
   for(let i=0;i<4;i++){const d=G.E('circle',{cx:P[i][0],cy:P[i][1],r:14,fill:'#e11d48',opacity:i?.35:1},g);G.pop(d);G.tag(P[i][0]+(i<2?34:-34),P[i][1],i+1,'#8b5cf6',12);if(!await G.W(350))return false;}return true;}],
 ['สองครั้ง = ครึ่งรอบ · สี่ครั้ง = กลับที่เดิม',['หมุนหนึ่งในสี่รอบ สองครั้ง เท่ากับครึ่งรอบ หัวกลับลงล่าง','หมุนสี่ครั้ง ครบหนึ่งรอบ กลับมาเหมือนเดิม'],(G,g)=>{[0,90,180,270,360].forEach((a,i)=>{const t=G.tx(0,0,'F',{fs:56,w:800,fill:'#2563eb',p:g});t.setAttribute('transform','translate('+(80+i*110)+' 150) rotate('+a+')');G.pop(t);tx(G,g,80+i*110,225,i===0?'เริ่ม':i+' ครั้ง',{fs:15});});}],
 ['ภาพในกระจก ไม่ใช่การหมุน',['ระวังนะ ภาพที่กลับซ้ายขวาเหมือนในกระจก','ไม่ใช่การหมุน'],(G,g)=>{tx(G,g,220,150,'F',{fs:90,w:800,fill:'#2563eb'});const m=tx(G,g,0,0,'F',{fs:90,w:800,fill:'#94a3b8'});m.setAttribute('transform','translate(390 150) scale(-1 1)');G.E('line',{x1:330,y1:90,x2:450,y2:210,stroke:'#e11d48','stroke-width':7,'stroke-linecap':'round'},g);}]]);
T.l_parts=lesson('ส่วนประกอบของภาพ',[
 ['ภาพใหญ่ ต่อจากรูปเล็ก ๆ',['ภาพใหญ่หนึ่งภาพ','ต่อขึ้นมาจากรูปเล็ก ๆ หลายรูป'],async(G,g)=>{const a=G.E('path',{d:'M220 150 H380 V260 H220 Z',fill:'#fde68a',stroke:INK,'stroke-width':3},g);G.pop(a);if(!await G.W(300))return false;const b=G.E('path',{d:'M200 150 L300 70 L400 150 Z',fill:'#f87171',stroke:INK,'stroke-width':3},g);G.pop(b);if(!await G.W(300))return false;const c=G.E('path',{d:'M282 205 H318 V260 H282 Z',fill:'#a16207',stroke:INK,'stroke-width':3},g);G.pop(c);return true;}],
 ['ดูทีละชิ้น บอกชื่อรูป',['ลองชี้ทีละชิ้น แล้วบอกชื่อรูป','สามเหลี่ยม สี่เหลี่ยม สี่เหลี่ยมผืนผ้า'],(G,g)=>{[['M-40 30 L0 -34 L40 30 Z','#f87171','สามเหลี่ยม'],['M-38 -38 H38 V38 H-38 Z','#fde68a','สี่เหลี่ยม'],['M-16 -38 H16 V38 H-16 Z','#a16207','สี่เหลี่ยมผืนผ้า']].forEach(([d,c,n],i)=>{const e=G.E('path',{d,fill:c,stroke:INK,'stroke-width':3,transform:'translate('+(120+i*180)+' 140)'},g);G.pop(e);tx(G,g,120+i*180,215,n);});}],
 ['รูปที่หาไม่เจอ = ไม่เป็นส่วนประกอบ',['รูปไหนหาในภาพไม่เจอเลย','รูปนั้นไม่เป็นส่วนประกอบของภาพ'],(G,g)=>{G.E('circle',{cx:300,cy:150,r:60,fill:'#e5e7eb',stroke:INK,'stroke-width':3},g);G.E('path',{d:'M240 90 L360 210 M360 90 L240 210',stroke:'#e11d48','stroke-width':8,'stroke-linecap':'round'},g);tx(G,g,300,250,'บ้านหลังนี้ไม่มีวงกลม',{fill:'#e11d48'});}]]);
const vennBase=(G,g)=>{G.E('ellipse',{cx:230,cy:165,rx:150,ry:105,fill:'#fff7ed',stroke:INK,'stroke-width':3},g);G.E('ellipse',{cx:370,cy:165,rx:150,ry:105,fill:'#eff6ff',stroke:INK,'stroke-width':3,opacity:.75},g);tx(G,g,150,48,'สีแดง',{fill:'#dc2626'});tx(G,g,450,48,'รูปดาว',{fill:'#2563eb'});};
const star=(G,g,x,y,c)=>{const pts=[...Array(10)].map((_,i)=>{const r=i%2?12:28,a=-Math.PI/2+i*Math.PI/5;return (x+r*Math.cos(a))+','+(y+r*Math.sin(a));}).join(' ');const e=G.E('polygon',{points:pts,fill:c,stroke:INK,'stroke-width':2},g);G.pop(e);return e;};
T.l_venn=lesson('วงกลมสองวงซ้อนกัน',[
 ['วงซ้าย = สีแดง · วงขวา = รูปดาว',['วงซ้าย เก็บของสีแดง','วงขวา เก็บรูปดาว'],vennBase],
 ['สีแดงแต่ไม่ใช่ดาว → วงซ้ายอย่างเดียว',['วงกลมสีแดง เป็นสีแดง แต่ไม่ใช่ดาว','จึงอยู่วงซ้ายอย่างเดียว'],(G,g)=>{vennBase(G,g);const e=G.E('circle',{cx:150,cy:165,r:26,fill:'#ef4444',stroke:INK,'stroke-width':2},g);G.pop(e);}],
 ['ดาวแต่ไม่ใช่สีแดง → วงขวาอย่างเดียว',['ดาวสีน้ำเงิน เป็นดาว แต่ไม่ใช่สีแดง','จึงอยู่วงขวาอย่างเดียว'],(G,g)=>{vennBase(G,g);star(G,g,450,165,'#3b82f6');}],
 ['ดาวสีแดง → ตรงกลาง',['ดาวสีแดง เป็นทั้งสีแดง และเป็นดาว','จึงอยู่ตรงกลาง ตรงที่สองวงซ้อนกัน'],(G,g)=>{vennBase(G,g);star(G,g,300,165,'#ef4444');}]]);
const robot=(G,g,x,y,h)=>{const r=G.E('g',{transform:'translate('+x+' '+y+') rotate('+h*90+')'},g);G.E('circle',{r:30,fill:'#8e5bd8'},r);G.E('polygon',{points:'0,-26 15,4 -15,4',fill:'#fff'},r);G.pop(r);return r;};
T.l_turn=lesson('เลี้ยวซ้าย เลี้ยวขวา',[
 ['ลูกศรสีขาว = ทางที่หุ่นยนต์หัน',['ลูกศรสีขาว บอกว่าหุ่นยนต์หันหน้าไปทางไหน','เดินหน้า คือเดินไปทางที่ลูกศรชี้'],(G,g)=>{robot(G,g,300,160,0);}],
 ['เลี้ยว = หมุนตัวอยู่กับที่',['เลี้ยวซ้าย เลี้ยวขวา คือหมุนตัวอยู่กับที่','ยังไม่ได้เดินไปไหน'],async(G,g)=>{const r=robot(G,g,300,160,0);if(!await G.W(400))return false;r.setAttribute('transform','translate(300 160) rotate(90)');tx(G,g,300,240,'เลี้ยวขวา',{fill:'#db2777'});return true;}],
 ['หุ่นยนต์หันลง: ซ้ายของมัน = ขวาของเรา',['ถ้าหุ่นยนต์หันหน้าลงมาหาเรา','มือซ้ายของหุ่นยนต์ อยู่ทางขวาของเรา','ให้นึกว่าเราเป็นหุ่นยนต์ หันไปทางเดียวกับมัน'],(G,g)=>{robot(G,g,300,150,2);tx(G,g,400,150,'ซ้ายของหุ่นยนต์ ➜',{fill:'#2563eb'});tx(G,g,180,150,'⬅ ขวาของหุ่นยนต์',{fill:'#db2777'});}],
 ['ทำทีละคำสั่ง ใช้นิ้วชี้ตาม',['ทำตามคำสั่งทีละอัน','ใช้นิ้วชี้ตามไปด้วย จะไม่หลง']]]);
T.s_exp=lesson('การทดลองวิทยาศาสตร์',[
 ['ทดลองให้ยุติธรรม',['การทดลองที่ดี ต้องทำให้ทุกอย่างเหมือนกัน','แก้วเท่ากัน น้ำเท่ากัน น้ำตาลเท่ากัน'],(G,g)=>row(G,g,160,['🥛','🥛','🥛'],70,150)],
 ['เปลี่ยนแค่อย่างเดียว = ตัวแปร',['แล้วเปลี่ยนแค่อย่างเดียว','เช่น น้ำร้อน น้ำอุ่น น้ำเย็น','สิ่งที่เราเปลี่ยน เรียกว่าตัวแปร'],(G,g)=>{row(G,g,140,['♨️','🌤️','🧊'],60,150);[['น้ำร้อน',150],['น้ำอุ่น',300],['น้ำเย็น',450]].forEach(([t,x])=>tx(G,g,x,220,t));}],
 ['สังเกตผล แล้วเปรียบเทียบ',['สังเกตว่าแบบไหนเร็ว แบบไหนช้า','แล้วเรียงจากมากไปน้อยได้']]]);
T.s_group=lesson('เกณฑ์การจัดกลุ่ม',[
 ['ของปนกันอยู่',['ของพวกนี้ปนกันอยู่','ลองแบ่งเป็นสองกลุ่ม'],(G,g)=>row(G,g,160,['🐘','🐟','🦒','🐙','🐰','🦀'],50)],
 ['แบ่งด้วยที่อยู่: บนบก · ในน้ำ',['แบ่งด้วยที่อยู่','กลุ่มหนึ่งอยู่บนบก','อีกกลุ่มอยู่ในน้ำ'],(G,g)=>{G.E('circle',{cx:160,cy:160,r:100,fill:'#fff7ed',stroke:INK,'stroke-width':3},g);G.E('circle',{cx:440,cy:160,r:100,fill:'#eff6ff',stroke:INK,'stroke-width':3},g);[['🐘',125,130],['🦒',195,130],['🐰',160,195],['🐟',405,130],['🐙',475,130],['🦀',440,195]].forEach(([e,x,y])=>em(G,g,x,y,e,40));tx(G,g,160,285,'อยู่บนบก');tx(G,g,440,285,'อยู่ในน้ำ');}],
 ['เกณฑ์ = สิ่งที่ทุกตัวในกลุ่มเหมือนกัน',['เกณฑ์ คือสิ่งที่ทุกตัวในกลุ่มเหมือนกัน','และต่างจากอีกกลุ่ม','เช่น ที่อยู่ อาหาร หรือการเกิด']]]);
T.s_moon=lesson('ดวงจันทร์ ข้างขึ้น ข้างแรม',[
 ['ดวงจันทร์ไม่มีแสงในตัวเอง',['ดวงจันทร์ไม่มีแสงในตัวเอง','ที่เราเห็นสว่าง เพราะแสงจากดวงอาทิตย์ส่องมากระทบ'],(G,g)=>{G.E('rect',{x:0,y:40,width:600,height:270,rx:16,fill:'#1e1b4b'},g);em(G,g,110,170,'☀️',80);em(G,g,470,170,'🌕',80);for(let i=0;i<3;i++)G.E('line',{x1:170,y1:140+i*30,x2:410,y2:150+i*20,stroke:'#facc15','stroke-width':4,'stroke-dasharray':'10 8'},g);}],
 ['ข้างขึ้น: สว่างมากขึ้นทุกคืน',['หลังเดือนดับ ส่วนสว่างค่อย ๆ โตขึ้นทุกคืน','เรียกว่าข้างขึ้น จนเต็มดวงเป็นวันเพ็ญ'],(G,g)=>{G.E('rect',{x:0,y:40,width:600,height:270,rx:16,fill:'#1e1b4b'},g);row(G,g,160,['🌑','🌒','🌓','🌔','🌕'],56,110);tx(G,g,300,250,'เดือนดับ ➜ ข้างขึ้น ➜ วันเพ็ญ',{fill:'#fde68a'});}],
 ['ข้างแรม: มืดลงทุกคืน',['หลังวันเพ็ญ ส่วนสว่างค่อย ๆ เล็กลง','เรียกว่าข้างแรม จนมืดทั้งดวงเป็นเดือนดับ'],(G,g)=>{G.E('rect',{x:0,y:40,width:600,height:270,rx:16,fill:'#1e1b4b'},g);row(G,g,160,['🌕','🌖','🌗','🌘','🌑'],56,110);tx(G,g,300,250,'วันเพ็ญ ➜ ข้างแรม ➜ เดือนดับ',{fill:'#c4b5fd'});}],
 ['เดือนดับ ถึงวันเพ็ญ ประมาณ 15 วัน',['จากเดือนดับ ถึงวันเพ็ญ ประมาณสิบห้าวัน','วันลอยกระทง ดวงจันทร์เต็มดวง เป็นวันเพ็ญ']]]);
const BIN4=[['#22c55e','เขียว','ขยะเปียก','🍌 🥬 🐟'],['#facc15','เหลือง','รีไซเคิล','🧴 🥫 📦'],['#ef4444','แดง','อันตราย','🔋 💡 🧯'],['#3b82f6','น้ำเงิน','ทั่วไป','🍬 🥡 🛍️']];
const bins=(G,g,show)=>BIN4.forEach(([c,n,t,e],i)=>{const x=90+i*140;G.E('rect',{x:x-32,y:120,width:64,height:12,rx:4,fill:c,stroke:INK,'stroke-width':2},g);G.E('path',{d:'M'+(x-38)+' 136 H'+(x+38)+' L'+(x+30)+' 226 H'+(x-30)+' Z',fill:c,stroke:INK,'stroke-width':2.5},g);tx(G,g,x,250,'ถัง'+n);tx(G,g,x,275,t,{fs:14,fill:'#475569'});if(show&&show.includes(i))tx(G,g,x,90,e,{fs:22});});
T.o_waste=lesson('แยกขยะ 4 ถัง',[
 ['ถังขยะ 4 สี รับขยะคนละแบบ',['ถังขยะมีสี่สี','รับขยะคนละแบบ'],(G,g)=>bins(G,g)],
 ['เขียว: ขยะเปียก · เหลือง: รีไซเคิล',['ถังสีเขียว ขยะเปียกที่เน่าได้ เช่น เปลือกกล้วย เศษผัก','ถังสีเหลือง ของที่นำไปขายหรือทำใหม่ได้ เช่น ขวด กระป๋อง กล่อง'],(G,g)=>bins(G,g,[0,1])],
 ['แดง: อันตราย · น้ำเงิน: ทั่วไป',['ถังสีแดง ขยะอันตราย เช่น ถ่านไฟฉาย หลอดไฟ กระป๋องสเปรย์','ถังสีน้ำเงิน ขยะทั่วไป เช่น ซองขนม กล่องโฟม'],(G,g)=>bins(G,g,[2,3])],
 ['ถามตัวเอง 3 ข้อ',['ก่อนทิ้ง ถามตัวเองว่า','เน่าได้ไหม ขายได้ไหม อันตรายไหม']]]);
T.o_trip=lesson('ความรู้รอบตัวเวลาเดินทาง',[
 ['เตรียมของตามอากาศ',['ไปทะเล อากาศร้อน แดดจัด เตรียมชุดว่ายน้ำ หมวก ครีมกันแดด','ไปดอยหน้าหนาว อากาศเย็น เตรียมเสื้อกันหนาว'],(G,g)=>{em(G,g,160,130,'🏖️',70);tx(G,g,160,210,'👙 🧢 🧴',{fs:30});em(G,g,440,130,'🏔️',70);tx(G,g,440,210,'🧥 🧤 🧣',{fs:30});}],
 ['วงกลมแดงมีเส้นขีด = ห้าม',['ป้ายวงกลมสีแดง มีเส้นขีดทับ แปลว่าห้าม'],(G,g)=>{em(G,g,300,160,'🚷',110);}],
 ['เจอสิ่งอันตราย บอกผู้ใหญ่',['เจอไฟ ควัน หรือสิ่งอันตราย','รีบบอกผู้ใหญ่ทันที ไม่ทำเอง'],(G,g)=>row(G,g,160,['🔥','➜','🗣️','➜','👩'],60,100)]]);
T.m_cal=lesson('ปฏิทินและการนับวัน',[
 ['แถวบนสุดคือชื่อวัน',['ในปฏิทิน แถวบนสุดบอกชื่อวัน','ตัวเลขข้างล่างคือวันที่'],(G,g)=>{const W=['อา','จ','อ','พ','พฤ','ศ','ส'];W.forEach((w,i)=>{G.E('rect',{x:90+i*60,y:70,width:56,height:36,rx:8,fill:'#8e5bd8'},g);tx(G,g,118+i*60,89,w,{fill:'#fff'});for(let r=0;r<3;r++){const d=r*7+i+1;G.E('rect',{x:90+i*60,y:112+r*50,width:56,height:46,rx:8,fill:'#fff',stroke:'#e2e8f0'},g);tx(G,g,118+i*60,135+r*50,String(d),{w:400});}});}],
 ['1 สัปดาห์มี 7 วัน วนเป็นวง',['หนึ่งสัปดาห์มีเจ็ดวัน','อาทิตย์ จันทร์ อังคาร พุธ พฤหัส ศุกร์ เสาร์','แล้ววนกลับมาวันอาทิตย์ใหม่'],(G,g)=>{['อา','จ','อ','พ','พฤ','ศ','ส'].forEach((w,i)=>{const a=-Math.PI/2+i*2*Math.PI/7,x=300+110*Math.cos(a),y=170+110*Math.sin(a);G.E('circle',{cx:x,cy:y,r:28,fill:'#f5f3ff',stroke:'#8e5bd8','stroke-width':2.5},g);tx(G,g,x,y+1,w);});em(G,g,300,170,'🔁',50);}],
 ['ผ่านไป 7 วัน กลับมาวันเดิม',['ผ่านไปเจ็ดวัน ครบหนึ่งสัปดาห์','จะกลับมาเป็นวันเดิมพอดี','ผ่านไปสิบสี่วัน ก็วันเดิมเหมือนกัน']],
 ['นับไปข้างหน้า ไม่นับวันนี้',['เวลานับว่าอีกกี่วัน','เริ่มนับหนึ่งที่วันพรุ่งนี้','ไม่นับวันนี้']]]);
T.m_puzzle=lesson('ปริศนาตัวเลข',[
 ['ช่องบน = สองช่องล่างบวกกัน',['ในพีระมิดตัวเลข','ช่องข้างบน เท่ากับสองช่องข้างล่างบวกกัน','สอง บวก สาม ได้ห้า'],(G,g)=>{[[270,80,'5'],[230,150,'2'],[310,150,'3']].forEach(([x,y,v])=>{roundRect(G,x,y,70,56,'#fff',INK,10,g);tx(G,g,x+35,y+29,v,{fs:28});});}],
 ['ช่องล่างหาย: ใช้การลบ',['ถ้าช่องที่หายอยู่ข้างล่าง','ใช้การลบ','ห้า ลบ สอง ได้สาม'],(G,g)=>{[[270,80,'5'],[230,150,'2'],[310,150,'?']].forEach(([x,y,v])=>{roundRect(G,x,y,70,56,v==='?'?'#fde68a':'#fff',INK,10,g);tx(G,g,x+35,y+29,v,{fs:28,fill:v==='?'?'#e11d48':INK});});tx(G,g,300,250,'5 − 2 = 3',{fs:26,fill:'#16a34a'});}],
 ['สามเหลี่ยม: กลางเส้น = มุม + มุม',['ในสามเหลี่ยมตัวเลข','เลขกลางเส้น เท่ากับเลขที่มุมสองข้างบวกกัน'],(G,g)=>{G.E('polygon',{points:'300,60 420,250 180,250',fill:'#f0f9ff',stroke:INK,'stroke-width':3},g);[[300,60,'2'],[420,250,'4'],[180,250,'1'],[360,155,'6'],[300,250,'5'],[240,155,'3']].forEach(([x,y,v],i)=>{G.E('circle',{cx:x,cy:y,r:22,fill:i<3?'#fff':'#dbeafe',stroke:INK,'stroke-width':2.5},g);tx(G,g,x,y+1,v,{fs:20});});}]]);
T.m_area=lesson('พื้นที่',[
 ['นับช่องสีเทา',['พื้นที่ คือนับว่ามีช่องสีเทากี่ช่อง'],(G,g)=>{for(let i=0;i<3;i++){G.E('rect',{x:210+i*60,y:120,width:60,height:60,fill:'#9ca3af',stroke:INK,'stroke-width':2},g);G.tag(240+i*60,150,i+1,'#ec4899',13);}}],
 ['ครึ่งช่อง + ครึ่งช่อง = 1 ช่อง',['ช่องที่ระบายครึ่งเดียว','เอาสองอันมาต่อกัน ได้หนึ่งช่องเต็ม'],(G,g)=>{G.E('polygon',{points:'150,110 210,170 150,170',fill:'#9ca3af',stroke:INK,'stroke-width':2},g);tx(G,g,250,150,'+',{fs:30});G.E('polygon',{points:'290,110 350,110 350,170',fill:'#9ca3af',stroke:INK,'stroke-width':2},g);tx(G,g,390,150,'=',{fs:30});G.E('rect',{x:420,y:110,width:60,height:60,fill:'#9ca3af',stroke:INK,'stroke-width':2},g);}],
 ['รูปร่างต่างกัน พื้นที่เท่ากันได้',['รูปร่างไม่เหมือนกัน','แต่ถ้านับช่องได้เท่ากัน ก็มีพื้นที่เท่ากัน']]]);
T.m_dial=lesson('อ่านตาชั่งและไม้บรรทัด',[
 ['ตาชั่ง: ดูเลขที่เข็มชี้',['วางของบนตาชั่ง','ดูว่าเข็มสีแดงชี้ที่เลขอะไร'],(G,g)=>{G.E('circle',{cx:300,cy:165,r:100,fill:'#fff',stroke:INK,'stroke-width':4},g);for(let k=0;k<10;k++){const a=2*Math.PI*k/10-Math.PI/2;tx(G,g,300+72*Math.cos(a),165+72*Math.sin(a),String(k),{fs:18});}G.E('line',{x1:300,y1:165,x2:300+80*Math.cos(2*Math.PI*3/10-Math.PI/2),y2:165+80*Math.sin(2*Math.PI*3/10-Math.PI/2),stroke:'#e11d48','stroke-width':6,'stroke-linecap':'round'},g);}],
 ['ไม้บรรทัด: เริ่มที่ 0',['วางของให้ปลายข้างหนึ่งตรงกับเลขศูนย์','ปลายอีกข้างตรงเลขไหน ก็ยาวเท่านั้น']],
 ['ไม่ได้เริ่มที่ 0 ให้นับช่อง',['ถ้าของไม่ได้เริ่มที่ศูนย์','ให้นับช่องระหว่างปลายทั้งสองข้าง'],(G,g)=>{G.E('rect',{x:40,y:170,width:520,height:50,fill:'#fde68a',stroke:INK,'stroke-width':2},g);for(let k=0;k<=10;k++){G.E('line',{x1:50+k*50,y1:170,x2:50+k*50,y2:190,stroke:INK,'stroke-width':2},g);tx(G,g,50+k*50,206,String(k),{fs:14,w:400});}G.E('rect',{x:150,y:120,width:200,height:40,rx:10,fill:'#93c5fd',stroke:INK,'stroke-width':2},g);for(let k=0;k<4;k++)G.tag(175+k*50,110,k+1,'#ec4899',11);}]]);
T.m_more=lesson('คิดหลายขั้น',[
 ['เปลี่ยนหน่วยทีละขั้น',['โอ่งหนึ่งใบ เท่ากับถังสองใบ','ถังหนึ่งใบ เท่ากับขวดสามขวด'],(G,g)=>{em(G,g,80,160,'🏺',70);tx(G,g,140,160,'=',{fs:30});em(G,g,200,120,'🪣',40);em(G,g,200,200,'🪣',40);[120,200].forEach(y=>{tx(G,g,250,y,'=',{fs:22});for(let i=0;i<3;i++)em(G,g,300+i*50,y,'🍼',32);});}],
 ['แล้วนับรวม',['ถังสองใบ ใบละสามขวด','สาม บวก สาม ได้หกขวด','โอ่งหนึ่งใบ จึงเท่ากับหกขวด']],
 ['ลำดับในแถว: วาดคนเรียงกัน',['ถ้าโจทย์ถามเรื่องคนในแถว','ให้วาดวงกลมแทนคน แล้วนับ'],(G,g)=>row(G,g,160,['🧒','🧒','👧','🧒','🧒','🧒'],40,70)]]);
T.t_hnam=lesson('ห นำ และวรรณยุกต์',[
 ['ห นำ อยู่หน้า ง ญ น ม ย ร ล ว',['ห นำ จะอยู่หน้าพยัญชนะแปดตัวนี้','ง ญ น ม ย ร ล ว'],(G,g)=>row(G,g,160,['ง','ญ','น','ม','ย','ร','ล','ว'],44,64)],
 ['หมา = ห + มา · ห ไม่ออกเสียง',['คำว่า หมา มี ห อยู่ข้างหน้า','แต่เราไม่ออกเสียง ห','ห นำ ช่วยให้เสียงสูงขึ้น'],(G,g)=>{tx(G,g,300,120,'หมา',{fs:70});tx(G,g,300,215,'ห (ไม่ออกเสียง) + มา',{fs:22,fill:'#b45309'});}],
 ['ห ที่ออกเสียงเอง ไม่ใช่ ห นำ',['คำว่า หัว ห่าน ห ออกเสียงเอง','จึงไม่ใช่ ห นำ'],(G,g)=>{tx(G,g,200,150,'หัว',{fs:56});tx(G,g,400,150,'ห่าน',{fs:56});}],
 ['วรรณยุกต์ 4 รูป',['ไม้เอก ขีดเดียว','ไม้โท เหมือนเลขสอง','ไม้ตรี เหมือนเลขเจ็ด','ไม้จัตวา เหมือนเครื่องหมายบวก'],(G,g)=>{[['่','ไม้เอก'],['้','ไม้โท'],['๊','ไม้ตรี'],['๋','ไม้จัตวา']].forEach(([m,n],i)=>{tx(G,g,90+i*140,150,'ก'+m,{fs:84,fill:'#e11d48'});tx(G,g,90+i*140,150,'ก',{fs:84});tx(G,g,90+i*140,250,n);});}]]);
const sg=(G,g,x0,y0,cells,s)=>{s=s||40;cells.forEach((r,ri)=>r.forEach((v,ci)=>G.E('rect',{x:x0+ci*s,y:y0+ri*s,width:s,height:s,fill:v?'#60a5fa':'#fff',stroke:INK,'stroke-width':1.5},g)));G.E('line',{x1:x0+2*s,y1:y0-10,x2:x0+2*s,y2:y0+cells.length*s+10,stroke:'#e11d48','stroke-width':4,'stroke-dasharray':'8 6'},g);};
T.l_sym=lesson('สมมาตร',[
 ['ภาพสมมาตร: พับแล้วสองข้างทับกันสนิท',['ภาพที่สมมาตร','พับครึ่งตามเส้นประแล้ว','สองข้างทับกันสนิทพอดี'],(G,g)=>{em(G,g,300,160,'🦋',150);G.E('line',{x1:300,y1:60,x2:300,y2:270,stroke:'#e11d48','stroke-width':4,'stroke-dasharray':'8 6'},g);}],
 ['สองข้างเหมือนเงาในกระจก',['ช่องสีฝั่งซ้าย มีคู่อยู่ฝั่งขวา','ห่างจากเส้นประเท่ากันเสมอ'],(G,g)=>sg(G,g,220,80,[[1,0,0,1],[0,1,1,0],[1,1,1,1]])],
 ['มีช่องไม่มีคู่ = ไม่สมมาตร',['ถ้ามีช่องไหนไม่มีคู่','พับแล้วทับกันไม่สนิท','ภาพนั้นไม่สมมาตร'],(G,g)=>{sg(G,g,220,80,[[1,0,0,0],[0,1,1,0],[1,1,1,1]]);ring(G,360,100,18,'#e11d48',g);}]]);
T.l_dots=lesson('ลากเส้นเชื่อมจุด',[
 ['3 จุด ลากได้ 3 เส้น',['จุดสามจุด ลากเส้นเชื่อมทุกคู่','ได้สามเส้น เป็นรูปสามเหลี่ยม'],async(G,g)=>{const P=[[300,70],[400,240],[200,240]];for(const [a,b] of [[0,1],[1,2],[2,0]]){const l=G.E('line',{x1:P[a][0],y1:P[a][1],x2:P[b][0],y2:P[b][1],stroke:'#3b82f6','stroke-width':5},g);G.pop(l);if(!await G.W(300))return false;}P.forEach(([x,y])=>G.E('circle',{cx:x,cy:y,r:12,fill:INK},g));return true;}],
 ['4 จุด: นับจากจุดแรกทีละจุด',['จุดที่หนึ่ง ลากได้สามเส้น','จุดที่สอง ลากเพิ่มได้สองเส้น','จุดที่สาม ลากเพิ่มได้หนึ่งเส้น','สาม บวก สอง บวก หนึ่ง ได้หกเส้น'],async(G,g)=>{const P=[[200,80],[400,80],[400,250],[200,250]],L=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]];let k=0;for(const [a,b] of L){k++;const l=G.E('line',{x1:P[a][0],y1:P[a][1],x2:P[b][0],y2:P[b][1],stroke:C[a],'stroke-width':5},g);G.pop(l);if(!await G.W(250))return false;}P.forEach(([x,y],i)=>{G.E('circle',{cx:x,cy:y,r:14,fill:INK},g);tx(G,g,x,y+1,String(i+1),{fs:13,fill:'#fff'});});tx(G,g,520,165,'3+2+1 = 6',{fs:22,fill:'#16a34a'});return true;}],
 ['ไม่นับเส้นซ้ำ',['เส้นที่ลากแล้ว ไม่ต้องลากซ้ำ','จับมือทักทายกันทุกคู่ ก็คิดแบบเดียวกัน']]]);
T.l_domino=lesson('โดมิโนและแบบรูป',[
 ['โดมิโนมีสองช่อง บนและล่าง',['โดมิโนหนึ่งชิ้น มีสองช่อง','ข้างบน และข้างล่าง'],(G,g)=>{roundRect(G,250,50,100,200,'#fff',INK,14,g);G.E('line',{x1:260,y1:150,x2:340,y2:150,stroke:INK,'stroke-width':3},g);pips(G,2,250,50,100,g);pips(G,5,250,150,100,g);}],
 ['ดูแถวบนอย่างเดียวก่อน',['ดูจุดแถวบนอย่างเดียวก่อน','หนึ่ง สอง สาม เพิ่มทีละหนึ่ง'],(G,g)=>{[[1,5],[2,4],[3,3]].forEach(([t,b],i)=>{const x=170+i*100;roundRect(G,x,60,70,140,'#fff',INK,10,g);G.E('line',{x1:x+6,y1:130,x2:x+64,y2:130,stroke:INK,'stroke-width':2},g);pips(G,t,x,60,70,g);pips(G,b,x,130,70,g);G.tag(x+35,44,t,'#3b82f6',13);});}],
 ['แล้วดูแถวล่างแยกกัน',['แล้วค่อยดูแถวล่าง','ห้า สี่ สาม ลดทีละหนึ่ง'],(G,g)=>{[[1,5],[2,4],[3,3]].forEach(([t,b],i)=>{const x=170+i*100;roundRect(G,x,60,70,140,'#fff',INK,10,g);G.E('line',{x1:x+6,y1:130,x2:x+64,y2:130,stroke:INK,'stroke-width':2},g);pips(G,t,x,60,70,g);pips(G,b,x,130,70,g);G.tag(x+35,216,b,'#ec4899',13);});}],
 ['ตัวอักษรก็เรียงตามแบบรูปได้',['ตัวอักษรก็เรียงเป็นแบบรูปได้','เอ ซี อี กระโดดข้ามทีละหนึ่งตัว','ตัวต่อไปคือ จี'],(G,g)=>{[...'ABCDEFG'].forEach((c,i)=>{const on=i%2===0;roundRect(G,90+i*62,120,54,60,on?'#fde68a':'#fff',on?'#f59e0b':'#cbd5e1',10,g);tx(G,g,117+i*62,151,c,{fs:28,fill:on?'#b45309':'#94a3b8'});});}]]);
T.l_overlay=lesson('แผ่นใสและภาพตรงข้าม',[
 ['แผ่นใส มองทะลุได้',['แผ่นใส มองทะลุได้','วางซ้อนกัน จะเห็นของทั้งสองแผ่น'],(G,g)=>{G.E('rect',{x:120,y:80,width:150,height:150,rx:8,fill:'#eff6ff',stroke:INK,'stroke-width':3},g);G.E('circle',{cx:160,cy:120,r:20,fill:'#3b82f6'},g);G.E('rect',{x:330,y:80,width:150,height:150,rx:8,fill:'rgba(255,241,242,.5)',stroke:INK,'stroke-width':3},g);G.E('polygon',{points:'440,170 462,206 418,206',fill:'#ef4444'},g);}],
 ['วางซ้อนกัน: เห็นครบทั้งสองแผ่น',['ซ้อนกันแล้ว วงกลมกับสามเหลี่ยม','ยังอยู่ช่องเดิมของมัน'],(G,g)=>{G.E('rect',{x:225,y:80,width:150,height:150,rx:8,fill:'#eff6ff',stroke:INK,'stroke-width':3},g);G.E('circle',{cx:265,cy:120,r:20,fill:'#3b82f6'},g);G.E('polygon',{points:'345,170 367,206 323,206',fill:'#ef4444'},g);}],
 ['ภาพตรงข้าม: ดำเป็นขาว ขาวเป็นดำ',['ภาพตรงข้าม คือสลับสีทุกช่อง','ดำกลายเป็นขาว ขาวกลายเป็นดำ'],(G,g)=>{const a=[[1,0],[0,1]];[[150,a],[350,a.map(r=>r.map(v=>1-v))]].forEach(([x,m])=>m.forEach((r,ri)=>r.forEach((v,ci)=>G.E('rect',{x:x+ci*60,y:100+ri*60,width:60,height:60,fill:v?INK:'#fff',stroke:INK,'stroke-width':2},g))));tx(G,g,300,160,'➜',{fs:40});}]]);
T.l_shapeobj=lesson('รูปทรงรอบตัว',[
 ['รูปทรง 3 มิติ 5 แบบ',['รูปทรงที่เจอบ่อย มีห้าแบบ','ทรงกระบอก ทรงกลม ทรงสี่เหลี่ยมมุมฉาก ลูกบาศก์ และกรวย'],(G,g)=>{['cyl','sph','box','cube','cone'].forEach((k,i)=>{const s=raw(G,SOLID[k],'translate('+(18+i*116)+' 70) scale(1.0)',g);G.pop(s);tx(G,g,68+i*116,200,SOLN[k],{fs:13});});}],
 ['ของจริงเหมือนรูปทรงไหน',['กระป๋องเป็นทรงกระบอก','ลูกบอลเป็นทรงกลม','กล่องนมเป็นทรงสี่เหลี่ยมมุมฉาก','ลูกเต๋าเป็นลูกบาศก์','ไอศกรีมโคนเป็นกรวย'],(G,g)=>{['🥫','⚽','🧃','🎲','🍦'].forEach((e,i)=>em(G,g,68+i*116,90,e,48));['cyl','sph','box','cube','cone'].forEach((k,i)=>{raw(G,SOLID[k],'translate('+(33+i*116)+' 140) scale(.7)',g);});}],
 ['ลูกบาศก์: ทุกหน้าเท่ากันหมด',['ลูกบาศก์ ทุกหน้าเป็นสี่เหลี่ยมจัตุรัส ขนาดเท่ากันหมด','ทรงสี่เหลี่ยมมุมฉาก หน้าอาจยาวไม่เท่ากัน'],(G,g)=>{raw(G,SOLID.cube,'translate(110 60) scale(1.6)',g);raw(G,SOLID.box,'translate(330 60) scale(1.6)',g);}],
 ['นับด้าน: แตะทีละด้าน',['สามเหลี่ยมมีสามด้าน','สี่เหลี่ยมมีสี่ด้าน','ห้าเหลี่ยมมีห้าด้าน','หกเหลี่ยมมีหกด้าน'],(G,g)=>{['t','s','n5','n6'].forEach((k,i)=>{const pts=poly(k,90+i*140,150,52);G.E('polygon',{points:pts.map(q=>q.join(',')).join(' '),fill:'#bae6fd',stroke:INK,'stroke-width':3},g);tx(G,g,90+i*140,235,(i+3)+' ด้าน');});}]]);
T.m_more2=lesson('โจทย์คิดหลายขั้น',[
 ['ทางเท่ากัน: ก้าวยาว นับก้าวน้อย',['ถ้าเดินทางยาวเท่ากัน','คนที่ก้าวยาว จะใช้ก้าวน้อย','คนที่ก้าวสั้น ต้องใช้หลายก้าว'],(G,g)=>{[[3,'#3b82f6',110],[6,'#ec4899',210]].forEach(([n,c,y])=>{const L=400/n;for(let k=0;k<n;k++)G.E('path',{d:'M'+(100+k*L)+' '+y+' Q'+(100+k*L+L/2)+' '+(y-L*.5)+' '+(100+(k+1)*L)+' '+y,fill:'none',stroke:c,'stroke-width':4},g);tx(G,g,540,y-10,n+' ก้าว',{fill:c});});}],
 ['เลข 11 มีเลข 1 สองตัว',['เวลานับว่าเขียนเลขหนึ่งกี่ตัว','เลขสิบเอ็ด มีเลขหนึ่งสองตัว ต้องนับสองครั้ง'],(G,g)=>{tx(G,g,300,150,'11',{fs:110});G.tag(268,90,1,'#ec4899',14);G.tag(332,90,2,'#ec4899',14);}],
 ['คนที่เหลือ ก็ต้องใช้อีกที่หนึ่ง',['รถนั่งได้คันละสองคน มีห้าคน','ได้สองคันเต็ม เหลืออีกหนึ่งคน','ก็ต้องใช้อีกหนึ่งคัน รวมสามคัน'],(G,g)=>{for(let i=0;i<3;i++){roundRect(G,120+i*130,110,110,80,'#fef3c7','#f59e0b',14,g);const k=i<2?2:1;for(let j=0;j<k;j++)em(G,g,152+i*130+j*46,150,'🧒',30);}}],
 ['ซื้อ 3 แถม 1 = จ่าย 3 ได้ 4',['ซื้อสามแถมหนึ่ง','จ่ายเงินแค่สามชิ้น แต่ได้ของสี่ชิ้น'],(G,g)=>{for(let j=0;j<4;j++){em(G,g,180+j*80,140,'🍩',48);if(j<3)G.tag(180+j*80,195,j+1,'#f59e0b',12);else tx(G,g,180+j*80,195,'แถม',{fill:'#16a34a'});}}],
 ['ไปแล้วกลับ = นับสองเที่ยว',['ไปแล้วกลับทางเดิม','ต้องนับระยะทางสองเที่ยว ขาไป และขากลับ']]]);
T.t_more=lesson('ตัวสะกด เสียงพยัญชนะ และเวลาแบบไทย',[
 ['ตัวสะกด = พยัญชนะท้ายคำ',['ตัวสะกด คือพยัญชนะที่อยู่ท้ายคำ หลังสระ','คำว่า ตลาด มี ด เป็นตัวสะกด'],(G,g)=>{tx(G,g,300,130,'ตลาด',{fs:70});tx(G,g,300,220,'ด อยู่ท้ายคำ = ตัวสะกด',{fs:22,fill:'#e11d48'});}],
 ['คำไม่มีตัวสะกด อ่านจบที่สระ',['คำที่ไม่มีตัวสะกด เช่น ปลา ดู ที่','อ่านจบที่เสียงสระเลย'],(G,g)=>row(G,g,160,['ปลา','ดู','ที่','แม่'],50,130)],
 ['ตัวอักษรต่างกัน เสียงเหมือนกันได้',['ส ศ ซ ออกเสียงเหมือนกัน','ข ค ฆ ก็ออกเสียงเหมือนกัน','ห นำ ไม่ออกเสียง ห ให้ฟังตัวข้างหลัง'],(G,g)=>{row(G,g,120,['ส','ศ','ซ'],56,90);row(G,g,220,['ข','ค','ฆ'],56,90);}],
 ['ทุ่ม = หลังหกโมงเย็น',['หกโมงเย็น คือสิบแปดนาฬิกา','หลังจากนั้นนับเป็นทุ่ม','หนึ่งทุ่ม คือสิบเก้านาฬิกา','บ่ายโมง คือสิบสามนาฬิกา'],(G,g)=>{[[18,'6 โมงเย็น'],[19,'1 ทุ่ม'],[20,'2 ทุ่ม'],[21,'3 ทุ่ม']].forEach(([h,n],i)=>{roundRect(G,90+i*110,110,96,96,i?'#c4b5fd':'#f9a8d4','#fff',14,g);tx(G,g,138+i*110,145,String(h),{fs:30});tx(G,g,138+i*110,182,n,{fs:15});});}]]);
T.s_more=lesson('วิทยาศาสตร์รอบตัว',[
 ['เปลี่ยนแล้ว กลับคืนได้ หรือไม่ได้',['น้ำแข็งละลาย แช่เย็นก็กลับเป็นน้ำแข็งได้','ไข่ที่ทอดสุกแล้ว กลับเป็นไข่ดิบไม่ได้'],(G,g)=>{row(G,g,120,['🧊','⇄','💧'],56,90);row(G,g,230,['🥚','➜','🍳'],56,90);tx(G,g,520,120,'กลับได้',{fill:'#16a34a'});tx(G,g,520,230,'กลับไม่ได้',{fill:'#e11d48'});}],
 ['แหล่งน้ำ: ธรรมชาติ · คนสร้าง',['แม่น้ำ ทะเล น้ำตก เกิดเองตามธรรมชาติ','เขื่อน อ่างเก็บน้ำ สระว่ายน้ำ คนสร้างขึ้น'],(G,g)=>{row(G,g,120,['🏞️','🌊'],56,110);row(G,g,230,['🏗️','🏊'],56,110);}],
 ['วัสดุกันน้ำ',['พลาสติกและผ้าเคลือบ น้ำซึมผ่านไม่ได้','จึงใช้ทำร่ม และเสื้อกันฝน'],(G,g)=>row(G,g,160,['☂️','🧥','🌧️'],70,140)],
 ['อาหารโปรตีน',['ไข่ นม ปลา และเนื้อสัตว์ มีโปรตีน','ช่วยให้ร่างกายเติบโต แข็งแรง'],(G,g)=>row(G,g,160,['🥚','🥛','🐟','🍗'],60,110)]]);
})();
