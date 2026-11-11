/* เฉลยภาพชุด 3 (9 พ.ย. 69) — หัวข้อเรื่องใหม่จากชุดครูฝน 2566–2569 ที่ยังไม่มีสอนใน EP
   ผู้ปกครองขอ: อธิบายละเอียด ภาพเข้าใจง่ายสำหรับเด็ก 6 ขวบ · ทุกภาพเล่นทีละขั้นพร้อมเสียงพากย์ แล้วจบด้วยคำตอบเรืองแสง
   ใช้ตัวช่วยวาดของ explain2.js (EX2.R / EX2.H) · ข้อมูลภาพมาจาก x2 ของแต่ละข้อ (สร้างโดย เครื่องมือสร้างเนื้อหา/คลังชุด12.py)
   ชนิด: latin rot parts venn exp grp2 cal npuz area bins letters moon dial turnw fact chain queue */
(function(){const X2=window.EX2;if(!X2||!X2.R)return;const R=X2.R,{roundRect,INK}=X2.H;
const C=['#5b8def','#f59e0b','#22c55e','#ec4899','#8b5cf6'];
const sleepCap=async(G,c,segs,ms)=>G.step(c,segs,ms||600);
/* ---------- ตารางห้ามซ้ำ: ทีละช่องว่าง ส่องแถว ส่องหลัก แล้วหาอันที่ยังไม่มี ---------- */
R.latin=async(p,G)=>{const n=p.g.length,s=n===3?88:68,x0=300-n*s/2,y0=(330-n*s)/2,nm=v=>(p.nm&&p.nm[v])||v,cell=[],val=p.g.map(r=>r.slice());
 for(let r=0;r<n;r++){cell[r]=[];for(let c=0;c<n;c++){const bl=p.bl.some(b=>b[0]===r&&b[1]===c);roundRect(G,x0+c*s,y0+r*s,s,s,bl?'#fde68a':'#fff',INK,0);cell[r][c]=G.tx(x0+c*s+s/2,y0+r*s+s/2+2,val[r][c],{fs:n===3?40:30,w:700,fill:bl?'#e11d48':INK});}}
 /* กรอบแถว/หลักวาดทับบนตาราง เป็นเส้นหนาสีชัด (เดิมเป็นพื้นจางอยู่ใต้ช่อง แทบมองไม่เห็น 12 พ.ย. 69) */
 const hr=G.E('rect',{x:x0-5,y:0,width:n*s+10,height:s,rx:10,fill:'#3b82f6','fill-opacity':.12,stroke:'#2563eb','stroke-width':6,opacity:0}),hc=G.E('rect',{x:0,y:y0-5,width:s,height:n*s+10,rx:10,fill:'#ec4899','fill-opacity':.12,stroke:'#db2777','stroke-width':6,opacity:0});
 if(!await G.step('กติกา: ในแถวเดียวกัน และหลักเดียวกัน ห้ามซ้ำ',['กติกาคือ ในแถวเดียวกัน และในหลักเดียวกัน ห้ามมีของซ้ำกัน'],600))return;
 for(let k=0;k<p.bl.length;k++){const [r,c]=p.bl[k],L=p.lab[k];
  hr.setAttribute('y',y0+r*s);G.fade(hr,1);const row=val[r].filter((v,j)=>j!==c&&!p.lab.includes(v));
  if(!await G.step('ช่อง '+L+' · แถวนี้มี '+row.join(' '),['ดูช่อง',L,'แถวนี้มี'].concat(row.map(nm)),700))return;
  hc.setAttribute('x',x0+c*s);G.fade(hc,1);const col=val.map(rr=>rr[c]).filter((v,i)=>i!==r&&!p.lab.includes(v));
  if(!await G.step('หลักนี้มี '+col.join(' '),['หลักนี้มี'].concat(col.map(nm)),700))return;
  const ans=p.sol[r][c];val[r][c]=ans;cell[r][c].textContent=ans;cell[r][c].setAttribute('fill','#16a34a');G.pop(cell[r][c]);G.sfx('pop',k);
  if(!await G.step('ยังไม่มี '+ans+' · ช่อง '+L+' จึงเป็น '+ans,['ที่ยังไม่มีเลย คือ',nm(ans),'ช่อง',L,'จึงเป็น',nm(ans)],900))return;G.fade(hr,0);G.fade(hc,0);}
 await G.fin('ครบทุกช่อง ไม่มีซ้ำเลย',['ครบแล้ว ทุกแถวทุกหลักไม่ซ้ำกันเลย'],p.bl.map(([r,c])=>cell[r][c]));};
/* ---------- หมุนภาพ: ติดจุดแดงไว้ แล้วหมุนให้เห็นจุดเดินตามลูกศร ---------- */
R.rot=async(p,G)=>{const mk=(cx,flip,cy=150,sc=1)=>{const g=G.E('g',{});const ig=G.E('g',{},g);G.E('rect',{x:-60,y:-60,width:120,height:120,rx:16,fill:'#f8fafc',stroke:'#cbd5e1','stroke-width':2},ig);G.tx(0,4,p.ch,{fs:86,w:800,fill:'#2563eb',p:ig});G.E('circle',{cx:38,cy:-42,r:9,fill:'#e11d48'},ig);g.setAttribute('transform','translate('+cx+' '+cy+') scale('+sc+')');if(flip)ig.setAttribute('transform','scale(-1 1)');return [g,ig];};
 const [a]=mk(140);G.pop(a);const CN={0:'มุมบนขวา',90:'มุมล่างขวา','-90':'มุมบนซ้าย',180:'มุมล่างซ้าย'};
 if(!await G.step('ติดจุดสีแดงช่วยดู ไว้ที่มุมบนขวา',['ลองติดจุดสีแดงไว้ช่วยดู','ตอนนี้จุดอยู่มุมบนขวา'],500))return;
 const [b,bi]=mk(450);G.pop(b);const dir=p.dir||(p.ang===180?'หมุนครึ่งรอบ':p.ang>0?'หมุนตามเข็มนาฬิกา หนึ่งในสี่รอบ':'หมุนทวนเข็มนาฬิกา หนึ่งในสี่รอบ');
 {const cw=p.cw!=null?p.cw:p.ang>=0,x=295,y=150,r=30,ex=cw?x-r:x+r;G.E('path',{d:'M'+x+' '+(y-r)+' A'+r+' '+r+' 0 1 '+(cw?1:0)+' '+ex+' '+y,fill:'none',stroke:'#e11d48','stroke-width':6,'stroke-linecap':'round'});G.E('polygon',{points:ex+','+(y-15)+' '+(ex-10)+','+(y+5)+' '+(ex+10)+','+(y+5),fill:'#e11d48'});}if(!await G.step(dir,[dir],400))return;
 bi.style.transformBox='view-box';bi.style.transformOrigin='0px 0px';bi.style.transition=G.F?'none':'transform 1.8s ease-in-out';bi.style.transform='rotate('+p.ang+'deg)';G.sfx('whoosh');if(!await G.W(2000))return;
 if(!await G.step('จุดสีแดงไปอยู่'+CN[p.ang],['จุดสีแดงเดินไปอยู่',CN[p.ang],'ตัว '+p.ch+' ก็หมุนตามไปด้วย'],600))return;
 /* ตัวอย่างภาพกลับด้าน: วางแยกเล็ก ๆ ข้างล่าง ไม่ทับตัวต้นฉบับ (12 พ.ย. 69) */
 const [m]=mk(295,true,272,.42);G.pop(m);G.E('path',{d:'M270 247 L320 297 M320 247 L270 297',stroke:'#e11d48','stroke-width':6,'stroke-linecap':'round'});G.tx(410,272,'กลับด้าน ✗',{fs:18,w:700,fill:'#e11d48'});
 if(!await G.step('ภาพกลับด้านเหมือนกระจก ไม่ใช่การหมุน',['ระวังนะ ภาพที่กลับด้านเหมือนในกระจก ไม่ใช่การหมุน'],700))return;
 await G.fin('คำตอบคือภาพทางขวานี้',['คำตอบคือภาพที่หมุนแล้ว','ทางขวานี้'],[b]);};
/* ---------- ส่วนประกอบของภาพ: ดึงทีละชิ้นออกมาวางเรียง พร้อมชื่อรูป ---------- */
R.parts=async(p,G)=>{const K=2.3,ox=20,oy=26,main=G.E('g',{transform:'translate('+ox+' '+oy+') scale('+K+')'}),pe=p.ps.map(([d,c])=>G.E('path',{d,fill:c,stroke:INK,'stroke-width':3/K,'stroke-linejoin':'round'},main));
 if(!await G.step('ภาพนี้ต่อขึ้นจากรูปเล็ก ๆ หลายรูป',['ภาพนี้ต่อขึ้นมาจากรูปเล็ก ๆ หลายรูป มาแยกออกมาดูทีละรูป'],600))return;
 /* ชิ้นที่แยกออกมา: ใช้รูปขนาดมาตรฐาน (p.pn) วางในช่องของตัวเอง พร้อมชื่อ (เดิมย่อจากตำแหน่งในภาพ เล็กและวางเหลื่อม 12 พ.ย. 69) */
 const slot=k=>[335+(k%2)*130,14+Math.floor(k/2)*104],piece=(d,c,k,op)=>{const [x,y]=slot(k),g=G.E('g',{});roundRect(G,x,y,120,98,'#fff','#e5e7eb',12,g);const s=G.E('g',{transform:'translate('+(x+24)+' '+(y+2)+') scale(.9)'},g);G.E('path',{d,fill:c,stroke:INK,'stroke-width':3.5,opacity:op||1},s);return g;};
 const seen={},cols=[];let k=0;for(let i=0;i<p.ps.length;i++){const nm=p.names[i];G.glow(pe[i],'#ec4899');G.pulse(pe[i]);G.cap(nm);
  if(!seen[nm]){seen[nm]=1;const g=piece(p.pn?p.pn[i]:p.ps[i][0],p.ps[i][1],k);const [x,y]=slot(k);G.tx(x+60,y+86,nm,{fs:nm.length>9?13:15,w:700,p:g});G.pop(g);cols.push(g);k++;}
  G.sfx('pop',i);if(!await G.say([nm]))return;pe[i].style.filter='';}
 if(p.q==='not'){const g=piece(p.ad,'#e5e7eb',k,.6),[x,y]=slot(k);G.tx(x+60,y+86,p.absent,{fs:p.absent.length>9?13:15,w:700,fill:'#e11d48',p:g});G.pop(g);
  G.E('path',{d:'M'+(x+30)+' '+(y+8)+' L'+(x+90)+' '+(y+68)+' M'+(x+90)+' '+(y+8)+' L'+(x+30)+' '+(y+68),stroke:'#e11d48','stroke-width':6,'stroke-linecap':'round'});
  await G.fin('ในภาพไม่มี'+p.absent,['หาจนทั่วแล้ว ไม่มี',p.absent,'เลย','คำตอบคือ',p.absent],[g]);}
 else await G.fin('ภาพนี้ประกอบด้วย '+Object.keys(seen).join(' '),['ภาพนี้ประกอบด้วย'].concat(Object.keys(seen)),cols);};
/* ---------- วงกลมสองวง: ซ้ายเหมือนกันตรงไหน ขวาเหมือนกันตรงไหน ตรงกลางต้องเป็นทั้งสองอย่าง ---------- */
R.venn=async(p,G)=>{const g=G.E('g',{transform:'translate(115 10) scale(1)'});const el1=G.E('ellipse',{cx:120,cy:150,rx:105,ry:78,fill:'#fff7ed',stroke:INK,'stroke-width':3},g),el2=G.E('ellipse',{cx:250,cy:150,rx:105,ry:78,fill:'#eff6ff',stroke:INK,'stroke-width':3,opacity:.75},g);
 const sh=(arr,dy)=>arr.map(([d,c])=>G.E('path',{d,fill:c,stroke:INK,'stroke-width':2,transform:'translate(0 '+dy+')'},g));const L=sh(p.L,60),Rr=sh(p.Rr,60);const q=G.tx(185,156,'?',{fs:50,w:800,fill:'#e11d48',p:g});
 if(!await G.step('ตรงกลางเป็นของทั้งวงซ้ายและวงขวา',['ช่องตรงกลาง อยู่ในวงซ้ายด้วย และอยู่ในวงขวาด้วย'],600))return;
 L.forEach(e=>G.glow(e,'#f97316'));G.glow(el1,'#f97316');if(!await G.step('วงซ้าย: ทุกรูปเป็น'+p.la,['ดูวงซ้าย ทุกรูปเป็น',p.la],900))return;L.forEach(e=>e.style.filter='');el1.style.filter='';
 Rr.forEach(e=>G.glow(e,'#3b82f6'));G.glow(el2,'#3b82f6');if(!await G.step('วงขวา: ทุกรูปเป็น'+p.ra,['ดูวงขวา ทุกรูปเป็น',p.ra],900))return;Rr.forEach(e=>e.style.filter='');el2.style.filter='';
 q.remove();if(p.mode==='left'){const m=G.E('path',{d:p.mid[0],fill:p.mid[1],stroke:INK,'stroke-width':2,'stroke-dasharray':'5 4',opacity:.45,transform:'translate(0 58)'},g);G.pop(m);
  if(!await G.step('ตรงกลาง = เป็นทั้งสองอย่าง',['ตรงกลาง ต้องเป็น',p.la,'และเป็น',p.ra,'พร้อมกัน'],700))return;
  if(!await G.step('วงซ้ายอย่างเดียว = เป็น'+p.la+' แต่ไม่ใช่'+p.ra,['ถ้าอยู่วงซ้ายอย่างเดียว','ต้องเป็น',p.la,'แต่ไม่ใช่',p.ra],700))return;
  const b=G.E('path',{d:p.ad[0],fill:p.ad[1],stroke:INK,'stroke-width':3,transform:'translate(0 60)'},g);G.pop(b,500);return G.fin('คำตอบคือ'+p.an,['คำตอบคือ',p.an],[b]);}
 const a=G.E('path',{d:p.ad[0],fill:p.ad[1],stroke:INK,'stroke-width':3,transform:'translate(0 58)'},g);G.pop(a,500);
 await G.fin('ตรงกลางต้องเป็น'+p.an,['ตรงกลางจึงต้องเป็น',p.la,'และเป็น',p.ra,'คือ',p.an],[a]);};
/* ---------- การทดลอง: ภาพจำลองเคลื่อนไหวของแต่ละแบบ ---------- */
const VIS=l=>/น้ำผึ้ง/.test(l)?4.2:/นมข้น|เชื่อม/.test(l)?3:/น้ำมัน/.test(l)?1.9:/น้ำส้ม|นม/.test(l)?1.2:.8;
const LQC=l=>/น้ำผึ้ง/.test(l)?'#f59e0b':/นมข้น|นม/.test(l)?'#fef3c7':/เชื่อม/.test(l)?'#b45309':/น้ำมัน/.test(l)?'#fde047':/น้ำส้ม/.test(l)?'#fb923c':/แดง/.test(l)?'#f87171':'#93c5fd';
const glass=(G,x,y,col,lv=.75,w=90,h=130)=>{const g=G.E('g',{});G.E('path',{d:'M'+(x-w/2)+' '+y+' L'+(x-w/2+8)+' '+(y+h)+' H'+(x+w/2-8)+' L'+(x+w/2)+' '+y,fill:'#f8fafc',stroke:INK,'stroke-width':3},g);const lq=G.E('rect',{x:x-w/2+6,y:y+h*(1-lv),width:w-12,height:h*lv-2,fill:col,opacity:.85},g);return {g,lq};};
R.exp=async(p,G)=>{const n=p.labs.length,X=i=>110+i*190,m=p.mode,win=p.labs.indexOf(p.win),labs=p.labs;
 const label=(i,y)=>G.tx(X(i),y||300,labs[i],{fs:labs[i].length>12?13:17,w:700});
 const done=async(cs,extra)=>{const t=G.E('rect',{x:X(win)-92,y:20,width:184,height:300,rx:18,fill:'none',stroke:'#16a34a','stroke-width':5});G.pop(t);await G.fin(p.rank||p.win,['คำตอบคือ'].concat(p.rank?p.rank.split(' ➜ ').join(' แล้วก็ '):p.win,extra||[]),[t]);};
 if(m==='sink'||m==='pour'){const gs=labs.map((l,i)=>glass(G,X(i),110,LQC(l)));labs.forEach((l,i)=>label(i));
  if(!await G.step(m==='sink'?'หย่อนลูกพร้อมกันทั้งสามแก้ว':'เทพร้อมกันทั้งสามขวด',[m==='sink'?'หย่อนลูกลงไปพร้อมกัน ดูว่าแก้วไหนถึงก้นช้า หรือเร็ว':'เทพร้อมกัน ดูว่าขวดไหนหมดช้า หรือเร็ว'],400))return;
  const sp=labs.map(VIS),mx=Math.max(...sp);labs.forEach((l,i)=>{if(m==='sink'){const b=G.E('circle',{cx:X(i),cy:60,r:13,fill:'#64748b',stroke:INK,'stroke-width':2});b.style.transition=G.F?'none':'transform '+sp[i]+'s linear';requestAnimationFrame(()=>b.style.transform='translateY(165px)');}
   else{gs[i].lq.style.transformBox='fill-box';gs[i].lq.style.transformOrigin='bottom';gs[i].lq.style.transition=G.F?'none':'transform '+sp[i]+'s linear';requestAnimationFrame(()=>gs[i].lq.style.transform='scaleY(0)');}});
  if(!await G.W(mx*1000+300))return;if(!await G.step('ยิ่งข้นยิ่งหนืด ยิ่งช้า',['ของเหลวที่ข้นและหนืด จะต้านไว้ จึงช้า','ของเหลวใส ๆ ไม่หนืด จึงเร็ว'],400))return;return done();}
 if(m==='dissolve'){const T=l=>/ร้อน/.test(l)?1.2:/อุ่น/.test(l)?2.6:4.4,ic=l=>/ร้อน/.test(l)?'♨️':/อุ่น/.test(l)?'🌤️':'🧊';const gs=labs.map((l,i)=>glass(G,X(i),110,'#bfdbfe'));labs.forEach((l,i)=>{label(i);G.tx(X(i),80,ic(l),{fs:30});});
  const su=labs.map((l,i)=>{const r=G.E('rect',{x:X(i)-14,y:195,width:28,height:28,rx:4,fill:'#fff',stroke:INK,'stroke-width':2});r.style.transformBox='fill-box';r.style.transformOrigin='center';return r;});
  if(!await G.step('ใส่น้ำตาลเท่ากันทุกแก้ว',['ใส่น้ำตาลเท่ากันทุกแก้ว แล้วดูว่าละลายหมดเร็วแค่ไหน'],400))return;
  su.forEach((r,i)=>{r.style.transition=G.F?'none':'transform '+T(labs[i])+'s linear,opacity '+T(labs[i])+'s';requestAnimationFrame(()=>{r.style.transform='scale(0)';r.style.opacity=0;});});if(!await G.W(4600))return;
  if(/ตัวแปร|ต่างกันคือ/.test(p.q)){if(!await G.step('สิ่งที่เปลี่ยน: น้ำร้อน อุ่น เย็น · ที่เท่ากัน: น้ำตาล การคน แก้ว',['ในการทดลองนี้ เราเปลี่ยนแค่อย่างเดียว คือความร้อนของน้ำ','น้ำตาล การคน และแก้ว เท่ากันหมด','สิ่งที่เราเปลี่ยน เรียกว่าตัวแปร'],600))return;}
  else if(!await G.step('น้ำยิ่งร้อน น้ำตาลยิ่งละลายเร็ว',['น้ำยิ่งร้อน น้ำตาลยิ่งละลายเร็ว น้ำเย็นละลายช้าที่สุด'],400))return;return done();}
 if(m==='salty'){const sp=labs.map((l,i)=>{const k=/สาม/.test(l)?3:/สอง/.test(l)?2:1;return k;});labs.forEach((l,i)=>{glass(G,X(i),120,'#bfdbfe',.7,110,120);label(i);});
  for(let i=0;i<n;i++)for(let k=0;k<sp[i];k++){const s=G.tx(X(i)-20+k*20,70,'🧂',{fs:24});G.pop(s);G.sfx('pop',k);if(!await G.W(350))return;}
  labs.forEach((l,i)=>{const d=G.E('rect',{x:X(i)-49,y:160,width:98,height:76,fill:'#fff',opacity:sp[i]*.22});G.pop(d);});
  if(!await G.step('น้ำเท่ากัน ใส่เกลือมากกว่า ก็เค็มกว่า',['น้ำเท่ากันทุกหม้อ หม้อที่ใส่เกลือมากที่สุด จะเค็มที่สุด'],600))return;return done();}
 if(m==='roll'){const D=l=>/กระเบื้อง|ไม้ขัด|เรียบ/.test(l)?1:/หญ้า/.test(l)?.5:.3;const rough=/ออกแรง/.test(p.q);
  labs.forEach((l,i)=>{const y=70+i*85;G.E('path',{d:'M20 '+(y-30)+' L120 '+(y+20)+' H580',fill:'none',stroke:/หญ้า/.test(l)?'#22c55e':/ทราย|ลูกรัง/.test(l)?'#d6a35c':'#94a3b8','stroke-width':8,'stroke-linecap':'round'});G.tx(350,y+42,l,{fs:15,w:700});
   const b=G.tx(30,y-40,rough?'📦':'⚽',{fs:26});b.style.transition=G.F?'none':'transform 2.4s ease-out';const dx=rough?(1-D(l))*0+120+D(l)*330:90+D(l)*430;requestAnimationFrame(()=>b.style.transform='translate('+dx+'px,'+(rough?50:50)+'px)');});
  if(!await G.W(2600))return;if(!await G.step(rough?'พื้นขรุขระ ต้านมาก ต้องออกแรงมาก':'พื้นเรียบลื่น ต้านน้อย ไปได้ไกล',[rough?'พื้นยิ่งขรุขระ ยิ่งต้านการเคลื่อนที่ ต้องออกแรงลากมากขึ้น':'พื้นเรียบลื่นต้านลูกบอลน้อย ลูกบอลจึงกลิ้งไปได้ไกลที่สุด'],400))return;
  const t=G.E('rect',{x:8,y:20+win*85,width:584,height:84,rx:14,fill:'none',stroke:'#16a34a','stroke-width':5});G.pop(t);return G.fin(p.rank||p.win,['คำตอบคือ',p.rank?p.rank.split(' ➜ ').join(' แล้วก็ '):p.win],[t]);}
 if(m==='stone'){const k=labs.map(l=>/สอง/.test(l)?3:/สาม/.test(l)?2:1);const gs=labs.map((l,i)=>glass(G,X(i),100,'#93c5fd',.45));labs.forEach((l,i)=>label(i));
  if(!await G.step('น้ำเท่ากันทุกแก้ว',['ตอนแรกน้ำเท่ากันทุกแก้ว'],400))return;
  for(let i=0;i<n;i++)for(let j=0;j<k[i];j++){const st=G.tx(X(i)-22+j*22,60,'🪨',{fs:26});st.style.transition=G.F?'none':'transform .7s ease-in';requestAnimationFrame(()=>st.style.transform='translateY(150px)');G.sfx('pop',j);if(!await G.W(500))return;}
  labs.forEach((l,i)=>{const lq=gs[i].lq;lq.style.transition=G.F?'none':'all 1s';const h=130*(.45+k[i]*.12);lq.setAttribute('y',100+130-h);lq.setAttribute('height',h-2);});if(!await G.W(1200))return;
  if(!await G.step('หินเข้าไปแย่งที่ น้ำจึงสูงขึ้น',['ก้อนหินเข้าไปแย่งที่ของน้ำ น้ำจึงดันตัวสูงขึ้น หินยิ่งมาก น้ำยิ่งสูง'],400))return;return done();}
 if(m==='balloon'){const S=l=>/ร้อน/.test(l)?1.6:/แข็ง/.test(l)?.55:1;labs.forEach((l,i)=>{G.E('rect',{x:X(i)-70,y:200,width:140,height:70,rx:8,fill:/ร้อน/.test(l)?'#fecaca':/แข็ง/.test(l)?'#e0f2fe':'#dbeafe',stroke:INK,'stroke-width':2});G.tx(X(i)+50,215,/ร้อน/.test(l)?'♨️':/แข็ง/.test(l)?'🧊':'💧',{fs:20});
   G.E('rect',{x:X(i)-18,y:140,width:36,height:110,rx:8,fill:'#f1f5f9',stroke:INK,'stroke-width':2.5});label(i);});
  const bs=labs.map((l,i)=>{const b=G.E('ellipse',{cx:X(i),cy:118,rx:22,ry:26,fill:'#f472b6',stroke:INK,'stroke-width':2});b.style.transformBox='fill-box';b.style.transformOrigin='bottom';return b;});
  if(!await G.step('อากาศในขวดได้รับความร้อน จะขยายตัว',['อากาศในขวด ถ้าได้รับความร้อนจะขยายตัว ถ้าเย็นจะหดตัว'],400))return;
  bs.forEach((b,i)=>{b.style.transition=G.F?'none':'transform 2s ease';requestAnimationFrame(()=>b.style.transform='scale('+S(labs[i])+')');});if(!await G.W(2200))return;return done(null,['ลูกโป่งจึงพองใหญ่ที่สุด']);}
 if(m==='holes'){G.E('rect',{x:220,y:30,width:110,height:250,rx:18,fill:'#dbeafe',stroke:INK,'stroke-width':3});const H=[['รูบน',90,60],['รูกลาง',160,120],['รูล่าง',230,190]];
  if(!await G.step('น้ำข้างบนกดทับน้ำข้างล่าง',['น้ำที่อยู่ลึก ถูกน้ำข้างบนกดทับมาก จึงพุ่งแรงกว่า'],400))return;
  for(const [nm,y,d] of H){const a=G.E('path',{d:'M330 '+y+' Q'+(330+d*.6)+' '+(y-8)+' '+(330+d)+' 300',fill:'none',stroke:'#3b82f6','stroke-width':6,'stroke-linecap':'round'});G.pop(a);G.tx(200,y,nm,{fs:16,w:700});G.sfx('whoosh');if(!await G.W(700))return;}
  return G.fin('รูล่างพุ่งไกลที่สุด',['รูล่างสุดน้ำพุ่งไกลที่สุด']);}
 if(m==='siphon'){const L=[['ถังต่ำกว่า',260,1],['ถังสูงกว่า',40,0],['สูงเท่ากัน',150,0]];G.E('rect',{x:20,y:120,width:180,height:120,fill:'#bfdbfe',stroke:INK,'stroke-width':3});G.tx(110,180,'🐟',{fs:30});G.tx(110,255,'ตู้ปลา',{fs:16,w:700});
  for(const [nm,y,ok] of L){if(!await G.step(nm,[nm],300))return;const b=G.tx(470,y+30,'🪣',{fs:56});const h=G.E('path',{d:'M150 150 Q300 '+(Math.min(y,120)-30)+' 450 '+(y+20),fill:'none',stroke:'#16a34a','stroke-width':5});
   if(ok){const d=G.E('path',{d:'M150 150 Q300 '+(y-60)+' 450 '+(y+20),fill:'none',stroke:'#3b82f6','stroke-width':4,'stroke-dasharray':'8 8'});G.pop(d);if(!await G.say(['น้ำไหลจากที่สูงลงที่ต่ำ ได้']))return;}
   else{const x=G.tx(530,y+20,'✗',{fs:44,w:800,fill:'#e11d48'});G.pop(x);if(!await G.say(['น้ำไม่ไหล']))return;[b,h,x].forEach(e=>G.fade(e,.18));}}
  return G.fin('ถังต้องอยู่ต่ำกว่าตู้ปลา',['ถังต้องอยู่ต่ำกว่าตู้ปลา น้ำจึงไหลลงมาได้']);}
 if(m==='shadow'){const left=/ซ้าย/.test(p.q.split('เงา')[0]),obj=/แมว/.test(p.q)?'🐈':'🌳',sx=left?70:530;G.E('rect',{x:0,y:250,width:600,height:80,fill:'#bbf7d0'});const sun=G.tx(sx,60,'☀️',{fs:56});G.pop(sun);G.tx(300,200,obj,{fs:90});
  if(!await G.step('แสงส่องมาจากดวงอาทิตย์',['แสงส่องมาจากดวงอาทิตย์ ทาง'+(left?'ซ้าย':'ขวา')],400))return;
  for(let k=0;k<3;k++){const l=G.E('line',{x1:sx,y1:80,x2:300+(left?-10:10),y2:160+k*30,stroke:'#facc15','stroke-width':4,'stroke-dasharray':'8 6'});G.pop(l);}if(!await G.W(600))return;
  const sh=G.E('ellipse',{cx:left?400:200,cy:262,rx:90,ry:14,fill:'#334155',opacity:.55});G.pop(sh,600);
  return G.fin('เงาอยู่ฝั่งตรงข้ามกับดวงอาทิตย์',['ของบังแสงไว้ เงาจึงเกิดฝั่งตรงข้ามกับดวงอาทิตย์ คือทาง'+(left?'ขวา':'ซ้าย')],[sh]);}
 if(m==='lightning'){const c=G.tx(300,110,'⛈️',{fs:110});const f=G.E('rect',{x:0,y:0,width:600,height:330,fill:'#fef08a',opacity:0});
  if(!await G.step('ฟ้าแลบ: เห็นแสงวาบ',['ฟ้าแลบ เห็นแสงสว่างวาบ'],200))return;if(!G.F)f.animate([{opacity:0},{opacity:.9},{opacity:0},{opacity:.7},{opacity:0}],{duration:900});if(!await G.W(1000))return;
  const t=G.tx(300,250,'ครืน ครืน 🔊',{fs:40,w:800,fill:'#475569'});G.pop(t);if(!await G.step('ฟ้าร้อง: ได้ยินเสียง',['แล้วตามมาด้วยเสียงฟ้าร้อง ครืน ครืน'],600))return;
  return G.fin('มีทั้งแสงและเสียง',['ฟ้าแลบฟ้าร้อง มีทั้งแสงและเสียง รุ้งกับหมอกมีแต่ให้มองเห็น'],[c]);}
 if(m==='push'){const opp=/เข้าหากัน/.test(p.q);G.E('rect',{x:0,y:250,width:600,height:80,fill:'#e2e8f0'});const box=G.E('rect',{x:250,y:170,width:100,height:80,rx:6,fill:'#d6a35c',stroke:INK,'stroke-width':3});
  const k1=G.tx(210,210,'🧒',{fs:50});const k2=G.tx(opp?390:160,210,opp?'🧒':'🧒',{fs:50});
  if(opp){G.tx(230,150,'➡️',{fs:36});G.tx(370,150,'⬅️',{fs:36});if(!await G.step('ผลักแรงเท่ากัน สวนทางกัน',['สองคนผลักแรงเท่ากัน แต่ผลักสวนทางกัน'],400))return;if(!G.F)box.animate([{transform:'translateX(0)'},{transform:'translateX(4px)'},{transform:'translateX(-4px)'},{transform:'translateX(0)'}],{duration:500,iterations:3});if(!await G.W(1500))return;
   return G.fin('แรงหักล้างกัน กล่องอยู่นิ่ง',['แรงหักล้างกันพอดี กล่องจึงไม่เคลื่อนที่'],[box]);}
  G.tx(200,150,'➡️➡️',{fs:34});if(!await G.step('สองคนผลักไปทางเดียวกัน',['สองคนช่วยกันผลักไปทางเดียวกัน แรงรวมกันมากขึ้น'],400))return;[box,k1,k2].forEach(e=>{e.style.transition=G.F?'none':'transform 1.4s ease-in';e.style.transform='translateX(180px)';});if(!await G.W(1500))return;
  return G.fin('แรงรวมกันมาก กล่องเคลื่อนที่เร็วกว่า',['แรงมากขึ้น กล่องจึงเคลื่อนที่เร็วกว่า'],[box]);}
 await G.fin(p.win,['คำตอบคือ',p.win]);};
/* ---------- เกณฑ์จัดกลุ่ม: ป้ายบอกว่ากลุ่มเหมือนกันตรงไหน (แล้วส่งของใหม่เข้ากลุ่ม) ---------- */
R.grp2=async(p,G)=>{const cx=[160,440],P=[[-40,-40],[40,-40],[0,30]];G.E('circle',{cx:160,cy:150,r:110,fill:'#fff7ed',stroke:INK,'stroke-width':3});G.E('circle',{cx:440,cy:150,r:110,fill:'#eff6ff',stroke:INK,'stroke-width':3});
 const ems=[p.a,p.b].map((arr,k)=>arr.map((e,i)=>G.tx(cx[k]+P[i][0],150+P[i][1],e,{fs:52})));
 if(!await G.step('ดูกลุ่มที่ 1',['ดูกลุ่มที่ 1 ทุกตัวเหมือนกันตรงไหน'],400))return;ems[0].forEach(e=>{G.pulse(e);});const t1=G.E('g',{});roundRect(G,60,272,200,40,'#f97316',null,20,t1);G.tx(160,292,p.la,{fs:18,w:700,fill:'#fff',p:t1});G.pop(t1);if(!await G.say([p.la]))return;
 if(!await G.step('ดูกลุ่มที่ 2',['ดูกลุ่มที่ 2'],300))return;ems[1].forEach(e=>{G.pulse(e);});const t2=G.E('g',{});roundRect(G,340,272,200,40,'#3b82f6',null,20,t2);G.tx(440,292,p.lb,{fs:18,w:700,fill:'#fff',p:t2});G.pop(t2);if(!await G.say([p.lb]))return;
 if(p.add){const e=G.tx(300,40,p.add,{fs:52});G.pop(e);if(!await G.step(p.add+' '+(p.side?p.lb:p.la),[p.side?p.lb:p.la],400))return;G.move(e,cx[p.side]+48-300,170,900);/* ช่องว่างล่างขวาของวง ไม่ทับตัวเดิม (12 พ.ย. 69) */G.sfx('whoosh');if(!await G.W(1000))return;return G.fin('ใส่ในกลุ่มที่ '+(p.side+1),['จึงอยู่กลุ่มที่',String(p.side+1)],[e]);}
 await G.fin('แบ่งด้วย: '+p.la+' กับ '+p.lb,['สองกลุ่มนี้แบ่งด้วย',p.la,'กับ',p.lb],[t1,t2]);};
/* ---------- ปฏิทิน: อ่านวันที่ ดูหัวแถวตั้ง นับไปข้างหน้า ---------- */
const WD=['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์'],WDS=['อา','จ','อ','พ','พฤ','ศ','ส'];
R.cal=async(p,G)=>{if(p.mode==='week'){const n=Math.abs(p.kk),pos=i=>[60+i*80,160];const ch=WD.map((w,i)=>{const g=G.E('g',{});roundRect(G,pos(i)[0]-36,pos(i)[1]-30,72,60,'#fff','#cbd5e1',12,g);G.tx(pos(i)[0],pos(i)[1],WDS[i],{fs:24,w:700,p:g});return g;});
  let w=p.w0;G.glow(ch[w],'#8e5bd8');if(!await G.step('วันนี้วัน'+WD[w],['วันนี้วัน'+WD[w]],500))return;
  for(let i=1;i<=n;i++){w=(w+(p.kk>0?1:6))%7;G.tag(pos(w)[0],pos(w)[1]-44,i,'#ec4899');G.sfx('pop',i);G.cap((p.kk>0?'อีก ':'ย้อนไป ')+i+' วัน · วัน'+WD[w]);if(!await G.say([String(i)]))return;}
  return G.fin('วัน'+WD[w],['ได้วัน'+WD[w]],[ch[w]]);}
 const s=42,x0=12,y0=6,st=p.start,cell={},pos=d=>{const k=st+d-1;return [x0+(k%7)*s,y0+58+Math.floor(k/7)*s];};
 roundRect(G,x0,y0,7*s,30,'#8e5bd8',null,8);G.tx(x0+3.5*s,y0+16,'เดือน'+p.mon,{fs:17,w:700,fill:'#fff'});
 const hd=WDS.map((w,i)=>G.tx(x0+i*s+s/2,y0+44,w,{fs:17,w:700,fill:i===0||i===6?'#e11d48':INK}));
 for(let d=1;d<=p.days;d++){const [x,y]=pos(d);const g=G.E('g',{});G.E('rect',{x:x+1,y:y+1,width:s-2,height:s-2,rx:5,fill:'#fff',stroke:'#e2e0ea'},g);G.tx(x+s/2,y+s/2+1,String(d),{fs:17,p:g});cell[d]=g;}
 const col=k=>G.E('rect',{x:x0+k*s+1,y:y0+32,width:s-2,height:58+6*s-32,rx:8,fill:'#fde68a',opacity:.55});
 const info=(t)=>{const g=G.E('g',{});roundRect(G,318,120,272,90,'#f5f3ff','#c4b5fd',16,g);G.tx(454,165,t,{fs:t.length>14?17:22,w:700,fill:'#5b21b6',p:g});G.pop(g);return g;};
 if(p.mode==='day'){const k=(st+p.d-1)%7;G.glow(cell[p.d],'#ec4899');if(!await G.step('หาวันที่ '+p.d,['หาเลข',String(p.d),'ในปฏิทิน'],600))return;
  const c=col(k);G.pop(c);G.glow(hd[k],'#f59e0b');if(!await G.step('มองขึ้นไปบนสุดของแถวตั้ง',['มองขึ้นไปบนสุดของแถวตั้งนี้'],600))return;info('วันที่ '+p.d+' = วัน'+WD[k]);return G.fin('วัน'+WD[k],['เป็นวัน'+WD[k]],[cell[p.d]]);}
 if(p.mode==='col'){const c=col(p.kk);G.pop(c);G.glow(hd[p.kk],'#f59e0b');if(!await G.step('แถวตั้งของวัน'+WD[p.kk],['ดูแถวตั้งของวัน'+WD[p.kk]],500))return;let n=0;
  for(let d=1;d<=p.days;d++)if((st+d-1)%7===p.kk){n++;const [x,y]=pos(d);G.tag(x+s-7,y+7,n,'#ec4899',11);G.sfx('pop',n);if(!await G.say([String(n)]))return;}
  info('วัน'+WD[p.kk]+' มี '+n+' วัน');return G.fin('มี '+n+' วัน',['เดือนนี้มีวัน'+WD[p.kk],String(n),'วัน']);}
 if(p.mode==='hop'){G.glow(cell[p.d],'#8e5bd8');if(!await G.step('เริ่มที่วันที่ '+p.d,['เริ่มที่วันที่',String(p.d),'ไม่นับวันนี้'],500))return;
  for(let i=1;i<=p.kk;i++){const [x,y]=pos(p.d+i);G.tag(x+s-7,y+7,i,'#ec4899',11);G.sfx('pop',i);if(!await G.say([String(i)]))return;}
  const e=p.d+p.kk,k=(st+e-1)%7;G.glow(cell[e],'#16a34a');info('วันที่ '+e+' · วัน'+WD[k]);return G.fin('วันที่ '+e,['ได้วันที่',String(e),'ตรงกับวัน'+WD[k]],[cell[e]]);}};
/* ---------- ปริศนาตัวเลข ---------- */
R.npuz=async(p,G)=>{if(p.mode==='pyr'){const rows=p.rows,w=74,h=56,box={},cx=300;rows.forEach((row,ri)=>row.forEach((v,ci)=>{const x=cx-row.length*w/2+ci*w,y=30+ri*(h+8),hid=ri===p.hide[0]&&ci===p.hide[1];const g=G.E('g',{});roundRect(G,x,y,w-6,h,hid?'#fde68a':'#fff',INK,10,g);const t=G.tx(x+w/2-3,y+h/2+2,hid?'?':String(v),{fs:28,w:700,fill:hid?'#e11d48':INK,p:g});box[ri+','+ci]={g,t,v};}));
  if(!await G.step('ช่องบน = สองช่องข้างล่างบวกกัน',['กติกาคือ ช่องข้างบน เท่ากับสองช่องที่อยู่ข้างล่างบวกกัน'],600))return;
  const [r,c]=p.hide,ans=rows[r][c],B=k=>box[k];
  if(r<rows.length-1){const a=B((r+1)+','+c),b=B((r+1)+','+(c+1));[a,b].forEach(x=>G.glow(x.g,'#3b82f6'));if(!await G.step(a.v+' + '+b.v+' = '+ans,[String(a.v),'บวก',String(b.v),'ได้',String(ans)],700))return;}
  else{const up=c>0?B((r-1)+','+(c-1)):B((r-1)+','+c),side=c>0?B(r+','+(c-1)):B(r+','+(c+1));[up,side].forEach(x=>G.glow(x.g,'#3b82f6'));if(!await G.step(up.v+' − '+side.v+' = '+ans,['ช่องที่หายอยู่ข้างล่าง ใช้การลบ',String(up.v),'ลบ',String(side.v),'ได้',String(ans)],700))return;}
  const t=B(r+','+c);t.t.textContent=String(ans);t.t.setAttribute('fill','#16a34a');G.pop(t.t);return G.fin('ช่อง ? คือ '+ans,['ช่องที่หายไปคือ',String(ans)],[t.g]);}
 const vals=p.pairs.map(x=>x[0]).concat(p.pairs.map(x=>x[1])),n=vals.length,cx=170,cy=165,P=i=>{const a=2*Math.PI*i/n-Math.PI/2;return [cx+120*Math.cos(a),cy+120*Math.sin(a)];};
 vals.forEach((v,i)=>{const [x,y]=P(i);G.E('line',{x1:cx,y1:cy,x2:x,y2:y,stroke:'#cbd5e1','stroke-width':2});});
 const nd=vals.map((v,i)=>{const [x,y]=P(i),g=G.E('g',{});G.E('circle',{cx:x,cy:y,r:24,fill:i===p.hide?'#fde68a':'#fff',stroke:INK,'stroke-width':2.5},g);const t=G.tx(x,y+1,i===p.hide?'?':String(v),{fs:22,w:700,fill:i===p.hide?'#e11d48':INK,p:g});return {g,t};});
 if(!await G.step('ตัวเลขที่อยู่ตรงข้ามกัน บวกกันได้เท่ากันทุกคู่',['ตัวเลขที่อยู่ตรงข้ามกัน บวกกันได้เท่ากันทุกคู่'],600))return;
 const kp=(p.hide+1)%(n/2),a=kp,b=kp+n/2;[nd[a],nd[b]].forEach(x=>G.glow(x.g,'#3b82f6'));G.tx(450,90,vals[a]+' + '+vals[b]+' = '+p.sum,{fs:28,w:700,fill:'#2563eb'});if(!await G.say([String(vals[a]),'บวก',String(vals[b]),'ได้',String(p.sum)]))return;
 const o=(p.hide+n/2)%n;G.glow(nd[o].g,'#ec4899');const ans=p.sum-vals[o];G.tx(450,170,p.sum+' − '+vals[o]+' = '+ans,{fs:28,w:700,fill:'#db2777'});if(!await G.say(['ช่องตรงข้ามกับช่องที่หาย คือ',String(vals[o]),String(p.sum),'ลบ',String(vals[o]),'ได้',String(ans)]))return;
 nd[p.hide].t.textContent=String(ans);nd[p.hide].t.setAttribute('fill','#16a34a');G.pop(nd[p.hide].t);await G.fin('ช่อง ? คือ '+ans,['ช่องที่หายไปคือ',String(ans)],[nd[p.hide].g]);};
/* ---------- พื้นที่: นับช่องสีเทา ครึ่งช่องสองอันรวมเป็นหนึ่ง ---------- */
R.area=async(p,G)=>{const s=40,g1=[40,90],g2=[340,90],cellR=(o,r,c)=>[o[0]+c*s,o[1]+r*s];const has=(a,r,c)=>a.some(x=>x[0]===r&&x[1]===c);
 for(const o of [g1,g2])for(let r=0;r<4;r++)for(let c=0;c<4;c++){const [x,y]=cellR(o,r,c);const full=o===g1?has(p.ref,r,c):has(p.good[0],r,c),half=o===g2&&has(p.good[1],r,c);
  G.E('rect',{x,y,width:s,height:s,fill:full?'#9ca3af':'#fff',stroke:INK,'stroke-width':1.5});if(half)G.E('polygon',{points:x+','+y+' '+(x+s)+','+(y+s)+' '+x+','+(y+s),fill:'#9ca3af',stroke:INK,'stroke-width':1.5});}
 G.tx(120,62,'ภาพโจทย์',{fs:18,w:700});G.tx(420,62,'คำตอบ',{fs:18,w:700});
 if(!await G.step('นับช่องสีเทาในภาพโจทย์',['นับช่องสีเทาในภาพโจทย์ทีละช่อง'],400))return;let n=0;for(const [r,c] of p.ref){n++;const [x,y]=cellR(g1,r,c);G.tag(x+s/2,y+s/2,n,'#ec4899',11);G.sfx('pop',n);if(!await G.say([String(n)]))return;}
 if(!await G.step('ภาพโจทย์มี '+n+' ช่อง',['ภาพโจทย์มีสีเทา',String(n),'ช่อง'],400))return;let m=0;
 for(const [r,c] of p.good[0]){m++;const [x,y]=cellR(g2,r,c);G.tag(x+s/2,y+s/2,m,'#3b82f6',11);G.sfx('pop',m);if(!await G.say([String(m)]))return;}
 const hs=p.good[1];for(let i=0;i+1<hs.length;i+=2){m++;const a=cellR(g2,hs[i][0],hs[i][1]),b=cellR(g2,hs[i+1][0],hs[i+1][1]);G.tag(a[0]+12,a[1]+s-12,m,'#16a34a',10);G.tag(b[0]+12,b[1]+s-12,m,'#16a34a',10);G.cap('ครึ่งช่อง + ครึ่งช่อง = 1 ช่อง');if(!await G.say(['ครึ่งช่องสองอันรวมกันได้หนึ่งช่อง',String(m)]))return;}
 await G.fin('เท่ากัน '+n+' ช่อง',['ข้อนี้ก็มีสีเทา',String(m),'ช่อง เท่ากันพอดี']);};
/* ---------- ถังขยะ: ขยะลอยลงถังที่ถูก ---------- */
R.bins=async(p,G)=>{const X=i=>90+i*140;const bs=p.bins.map(([c,nm,t,e],i)=>{const g=G.E('g',{});G.E('rect',{x:X(i)-32,y:170,width:64,height:12,rx:4,fill:c,stroke:INK,'stroke-width':2},g);G.E('path',{d:'M'+(X(i)-38)+' 186 H'+(X(i)+38)+' L'+(X(i)+30)+' 270 H'+(X(i)-30)+' Z',fill:c,stroke:INK,'stroke-width':2.5},g);G.tx(X(i),226,e,{fs:24,p:g});G.tx(X(i),292,t.split(' ')[0],{fs:15,w:700,p:g});return g;});
 if(!await G.step('ถังแต่ละสีรับขยะคนละแบบ',['ถังสีเขียว ขยะเปียก','ถังสีเหลือง ขยะรีไซเคิล','ถังสีแดง ขยะอันตราย','ถังสีน้ำเงิน ขยะทั่วไป'],600))return;
 if(p.list){const its=[];for(const [e,nm,b] of p.list){const it=G.tx(300,70,e,{fs:60});G.pop(it);const [,bn,tt]=p.bins[b];if(!await G.step(nm+' เป็น'+tt,[nm,'เป็น'+tt,'ทิ้งลง'+bn],500))return;G.move(it,X(b)-300,150,1000);G.sfx('whoosh');if(!await G.W(1100))return;it.style.opacity=0;its.push(bs[b]);}
  return G.fin('ข้อที่ถูก ต้องทิ้งถูกทั้งสองชิ้น',['ข้อที่ถูก ต้องทิ้งถูกถังทั้งสองชิ้น'],its);}
 const it=G.tx(300,70,p.e,{fs:60});G.pop(it);const [c,nm,t]=p.bins[p.b];if(!await G.step(p.nm+' เป็น'+t,[p.nm,'เป็น'+t],500))return;
 G.move(it,X(p.b)-300,150,1000);G.sfx('whoosh');if(!await G.W(1100))return;it.style.opacity=0;await G.fin('ทิ้งลง'+nm,['จึงทิ้งลง'+nm],[bs[p.b]]);};
/* ---------- ห นำ · วรรณยุกต์ ---------- */
/* วรรณยุกต์เป็นสีแดงบนพยัญชนะ: วาดทั้งตัวสีแดง แล้ววาดตัวที่ไม่มีวรรณยุกต์ทับด้วยสีเข้ม (ฟอนต์เดียวกัน วางตรงกันพอดี) */
const markTx=(G,x,y,base,mark,fs,p)=>{G.tx(x,y,base+mark,{fs,w:700,fill:'#e11d48',p});G.tx(x,y,base,{fs,w:700,fill:INK,p});};
const TMARK=/[่-๋]/;
R.letters=async(p,G)=>{if(p.mode==='marks'){const M=[['่','ไม้เอก','ขีดเดียว'],['้','ไม้โท','เหมือนเลขสอง'],['๊','ไม้ตรี','เหมือนเลขเจ็ด'],['๋','ไม้จัตวา','เหมือนเครื่องหมายบวก']];
  /* เดิมใช้ ◌ (วงกลมประ) ตัวใหญ่ วรรณยุกต์ตัวเล็กมองแทบไม่เห็น · ตอนนี้วางบน ก ให้วรรณยุกต์เป็นสีแดงตัวใหญ่ (12 พ.ย. 69) */
  const gs=M.map(([m,n,d],i)=>{const g=G.E('g',{});const x=90+i*140;roundRect(G,x-58,40,116,190,'#fff','#cbd5e1',16,g);markTx(G,x,140,'ก',m,96,g);G.tx(x,248,n,{fs:20,w:700,p:g});G.tx(x,274,d,{fs:14,fill:'#64748b',p:g});return g;});
  for(let i=0;i<4;i++){G.pulse(gs[i]);G.cap(M[i][1]+' '+M[i][2]);if(!await G.say([M[i][1],M[i][2]]))return;}return G.fin(M[p.pick][1],['คำตอบคือ',M[p.pick][1]],[gs[p.pick]]);}
 /* แยกเป็นพยางค์ย่อย: พยัญชนะ + สระบน/ล่าง/วรรณยุกต์ที่เกาะอยู่ (เดิมแยกทีละอักขระ วรรณยุกต์ลอยอยู่เดี่ยว ๆ เป็นวงกลมประ) */
 const ws=[];for(const ch of p.w){if(/[ัิ-ฺ็-๎]/.test(ch)&&ws.length)ws[ws.length-1]+=ch;else ws.push(ch);}
 const n=ws.length,gap=Math.min(84,520/n),x=i=>300-(n-1)*gap/2+i*gap;const big=G.tx(300,66,p.w,{fs:64,w:700});G.pop(big);
 if(p.not){if(!await G.step(p.not+' ไม่มี ห นำ',['คำว่า',p.not,'ไม่มี ห อยู่ข้างหน้า'],400))return;}
 const tiles=ws.map((ch,i)=>{const g=G.E('g',{});const hi=(p.mode==='hnam'&&ch[0]==='ห'&&i===0)||(p.mode==='tone'&&ch.includes(p.mark));roundRect(G,x(i)-gap/2+4,140,gap-8,104,hi?'#fde68a':'#f1f5f9',hi?'#f59e0b':'#cbd5e1',12,g);
  if(hi&&p.mode==='tone')markTx(G,x(i),196,ch.replace(p.mark,''),p.mark,52,g);else G.tx(x(i),196,ch,{fs:52,w:700,fill:hi?'#b45309':INK,p:g});return {g,hi};});
 tiles.forEach(t=>G.pop(t.g));if(!await G.step('แยกดูทีละส่วน',['ลองแยกดูทีละส่วน'],500))return;const hit=tiles.find(t=>t.hi);
 if(p.mode==='hnam'){G.glow(hit.g,'#f59e0b');G.tx(x(0),268,'ไม่ออกเสียง',{fs:16,w:700,fill:'#b45309'});return G.fin('ห นำ: ห อยู่หน้า แต่ไม่ออกเสียง',['ห อยู่ข้างหน้า แต่ไม่ออกเสียง ห','เรียกว่า ห นำ','ห นำช่วยให้เสียงสูงขึ้น'],[hit.g]);}
 G.glow(hit.g,'#f59e0b');const k=tiles.indexOf(hit);G.tx(x(k),268,'↑ '+p.nm,{fs:17,w:700,fill:'#e11d48'});return G.fin('มี'+p.nm,['คำว่า',p.w,'มี'+p.nm],[hit.g]);};
/* ---------- ดวงจันทร์ 8 แบบในหนึ่งเดือน ---------- */
R.moon=async(p,G)=>{const M=['🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘'],N=['เดือนดับ','ข้างขึ้น','ข้างขึ้น','ข้างขึ้น','วันเพ็ญ','ข้างแรม','ข้างแรม','ข้างแรม'];G.E('rect',{x:0,y:0,width:600,height:330,fill:'#1e1b4b',rx:16});
 const ms=M.map((m,i)=>{const t=G.tx(45+i*73,150,m,{fs:50});return t;});G.tx(150,90,'ข้างขึ้น ➜ สว่างมากขึ้น',{fs:17,w:700,fill:'#fde68a'});G.tx(450,90,'ข้างแรม ➜ มืดลง',{fs:17,w:700,fill:'#c4b5fd'});
 if(!await G.step('ดวงจันทร์เปลี่ยนรูปไปเรื่อย ๆ ในหนึ่งเดือน',['ดวงจันทร์ไม่มีแสงในตัวเอง ได้รับแสงจากดวงอาทิตย์','ในหนึ่งเดือน เราจะเห็นดวงจันทร์เปลี่ยนรูปไปเรื่อย ๆ'],600))return;
 for(let i=0;i<8;i++){G.pulse(ms[i]);G.cap(N[i]);if(i===0||i===1||i===4||i===5){if(!await G.say([N[i]]))return;}else if(!await G.W(350))return;}
 G.glow(ms[p.ph],'#fde047');G.tx(45+p.ph*73,210,N[p.ph],{fs:16,w:700,fill:'#fff'});await G.fin(N[p.ph],['ดวงจันทร์แบบนี้ เรียกว่า',N[p.ph]],[ms[p.ph]]);};
/* ---------- ตาชั่งเข็ม · ไม้บรรทัด ---------- */
R.dial=async(p,G)=>{if(p.mode==='scale'){const cx=200,cy=170,r=130;G.E('circle',{cx,cy,r,fill:'#fff',stroke:INK,'stroke-width':4});for(let k=0;k<10;k++){const a=2*Math.PI*k/10-Math.PI/2;G.E('line',{x1:cx+(r-6)*Math.cos(a),y1:cy+(r-6)*Math.sin(a),x2:cx+(r-24)*Math.cos(a),y2:cy+(r-24)*Math.sin(a),stroke:INK,'stroke-width':4});G.tx(cx+(r-46)*Math.cos(a),cy+(r-46)*Math.sin(a),String(k),{fs:24,w:700});}
  G.tx(470,90,p.e,{fs:70});const nd=G.E('line',{x1:cx,y1:cy,x2:cx,y2:cy-r+20,stroke:'#e11d48','stroke-width':7,'stroke-linecap':'round'});nd.style.transformOrigin=cx+'px '+cy+'px';G.E('circle',{cx,cy,r:9,fill:'#e11d48'});
  if(!await G.step('วางของบนตาชั่ง เข็มจะหมุนไป',['วางของบนตาชั่ง เข็มสีแดงจะหมุนไปชี้ที่ตัวเลข'],400))return;nd.style.transition=G.F?'none':'transform 2s ease-out';nd.style.transform='rotate('+(36*p.v)+'deg)';G.sfx('whoosh');if(!await G.W(2100))return;
  return G.fin(p.v+' กิโลกรัม',['เข็มชี้ที่เลข',String(p.v),'จึงหนัก',String(p.v),'กิโลกรัม']);}
 const X=k=>40+k*52;G.E('rect',{x:20,y:180,width:560,height:60,fill:'#fde68a',stroke:INK,'stroke-width':2});for(let k=0;k<=10;k++){G.E('line',{x1:X(k),y1:180,x2:X(k),y2:k%5?205:212,stroke:INK,'stroke-width':2});G.tx(X(k),226,String(k),{fs:17});}
 const ob=G.E('rect',{x:X(p.a),y:110,width:(p.b-p.a)*52,height:44,rx:10,fill:'#93c5fd',stroke:INK,'stroke-width':2});G.tx((X(p.a)+X(p.b))/2,132,p.e,{fs:30});
 [p.a,p.b].forEach(k=>G.E('line',{x1:X(k),y1:110,x2:X(k),y2:180,stroke:'#e11d48','stroke-width':3,'stroke-dasharray':'6 4'}));
 if(!await G.step('ปลายซ้ายอยู่ที่ '+p.a+' ปลายขวาอยู่ที่ '+p.b,['ปลายซ้ายอยู่ที่',String(p.a),'ปลายขวาอยู่ที่',String(p.b)].concat(p.a?['ไม่ได้เริ่มที่ศูนย์ ต้องนับช่องเอง']:[]),600))return;
 for(let k=p.a;k<p.b;k++){G.tag((X(k)+X(k+1))/2,166,k-p.a+1,'#ec4899',11);G.sfx('pop',k);if(!await G.say([String(k-p.a+1)]))return;}
 await G.fin('ยาว '+(p.b-p.a)+' เซนติเมตร',['นับได้',String(p.b-p.a),'ช่อง จึงยาว',String(p.b-p.a),'เซนติเมตร'],[ob]);};
/* ---------- หุ่นยนต์เดินตามคำสั่ง (หมุนตัวตามจริง) ---------- */
R.turnw=async(p,G)=>{const s=56,ox=150,oy=24,D=[[0,-1],[1,0],[0,1],[-1,0]],cx=a=>ox+a*s+s/2,cy=b=>oy+b*s+s/2;for(let r=0;r<5;r++)for(let c=0;c<5;c++)G.E('rect',{x:ox+c*s,y:oy+r*s,width:s,height:s,fill:'#fff',stroke:'#d6d0e2'});
 const gl=p.goals.map(([a,e])=>G.tx(cx(a[0]),cy(a[1])+2,e,{fs:34}));let [x,y]=p.start,h=p.h;
 const bot=G.E('g',{});const inner=G.E('g',{},bot);G.E('circle',{r:21,fill:'#8e5bd8'},inner);G.E('polygon',{points:'0,-19 11,3 -11,3',fill:'#fff'},inner);
 const put=()=>{bot.setAttribute('transform','translate('+cx(x)+' '+cy(y)+')');inner.style.transition=G.F?'none':'transform .6s';inner.style.transform='rotate('+(h*90)+'deg)';};put();
 const CE={F:'⬆️',L:'↰',R:'↱'};const list=p.cmds.map((c,i)=>{const t=G.tx(40,30+i*36,CE[c],{fs:26});return t;});
 if(!await G.step('ลูกศรสีขาวบอกว่าหุ่นยนต์หันไปทางไหน',['ลูกศรสีขาว บอกว่าหุ่นยนต์หันหน้าไปทางไหน','เลี้ยวซ้าย เลี้ยวขวา คือหมุนตัวอยู่กับที่ ยังไม่ได้เดิน'],600))return;
 for(let i=0;i<p.cmds.length;i++){const c=p.cmds[i];G.glow(list[i],'#ec4899');let hr=0;
  if(c==='F'){x+=D[h][0];y+=D[h][1];put();G.sfx('pop',i);if(!await G.step('เดินหน้า 1 ช่อง',['เดินหน้า'],300))return;}
  else{hr=c==='L'?-1:1;h=(h+(c==='L'?3:1))%4;put();G.sfx('whoosh');if(!await G.step(c==='L'?'เลี้ยวซ้าย: หมุนไปทางมือซ้ายของหุ่นยนต์':'เลี้ยวขวา: หมุนไปทางมือขวาของหุ่นยนต์',[c==='L'?'เลี้ยวซ้าย':'เลี้ยวขวา'],600))return;}
  list[i].style.filter='';list[i].style.opacity=.35;}
 await G.fin('ถึงแล้ว',['หุ่นยนต์ไปถึง'],[gl[0]]);};
/* ---------- ความรู้รอบตัว: การ์ดคำอธิบายใหญ่ ๆ ---------- */
R.fact=async(p,G)=>{const e=G.tx(300,95,p.e,{fs:96});G.pop(e,500);if(!await G.W(500))return;const g=G.E('g',{});roundRect(G,60,180,480,64,'#ecfdf5','#16a34a',18,g);G.tx(300,212,p.a,{fs:p.a.length>22?18:24,w:700,fill:'#166534',p:g});G.pop(g);
 await G.fin(p.a,[p.why],[g]);};
/* ---------- หน่วยสองชั้น / แบ่งน้ำหนัก ---------- */
R.chain=async(p,G)=>{if(p.mode==='split'){const big=G.tx(150,110,p.e[0],{fs:90});G.tx(300,110,'=',{fs:50,w:700});const sm=[];for(let i=0;i<p.kk;i++)sm.push(G.tx(390+i*70,110,p.e[1],{fs:60}));
  if(!await G.step(p.nm[0]+' 1 ตัว หนักเท่ากับ'+p.nm[1]+' '+p.kk+' ตัว',[p.nm[0],'หนึ่งตัว หนักเท่ากับ',p.nm[1],String(p.kk),'ตัว'],500))return;G.tx(150,190,p.w+' กก.',{fs:26,w:700,fill:'#2563eb'});
  if(!await G.step('แบ่ง '+p.w+' ออกเป็น '+p.kk+' ส่วนเท่า ๆ กัน',['แบ่ง',String(p.w),'กิโลกรัม ให้',p.nm[1],String(p.kk),'ตัว เท่า ๆ กัน'],500))return;const a=p.w/p.kk;sm.forEach((e,i)=>{G.tag(390+i*70,170,a,'#16a34a',16);});
  return G.fin('ตัวละ '+a+' กิโลกรัม',['ได้ตัวละ',String(a),'กิโลกรัม'],sm);}
 const [E1,E2,E3]=p.e,big=G.tx(70,165,E1,{fs:80});G.pop(big);if(!await G.step(p.nm[0]+' 1 ใบ = '+p.nm[1]+' '+p.a+' ใบ',[p.nm[0],'หนึ่งใบ เท่ากับ',p.nm[1],String(p.a),'ใบ'],500))return;let n=0;
 for(let i=0;i<p.a;i++){const y=60+i*(240/p.a);G.tx(170,y+20,E2,{fs:42});for(let j=0;j<p.b;j++){n++;const t=G.tx(240+j*56,y+20,E3,{fs:34});G.pop(t);G.tag(240+j*56+18,y+2,n,'#ec4899',10);G.sfx('pop',n);if(!await G.say([String(n)]))return;}}
 await G.fin('รวม '+n+' '+p.nm[2],[p.nm[1],'แต่ละใบเป็น',p.nm[2],String(p.b),'ใบ','รวมทั้งหมด',String(n),p.nm[2]]);};
/* ---------- ลำดับในแถว: วาดคนเรียงกัน ---------- */
R.queue=async(p,G)=>{const n=p.n,gap=Math.min(46,540/n),x=i=>300-(n-1)*gap/2+i*gap;G.tx(x(0),70,'หัวแถว',{fs:15,w:700});G.tx(x(n-1),70,'ท้ายแถว',{fs:15,w:700});
 const kids=[];for(let i=0;i<n;i++)kids.push(G.tx(x(i),150,'🧒',{fs:Math.min(38,gap*.9)}));const me=p.front?p.p-1:n-p.p;
 if(!await G.step('ทั้งหมด '+n+' คน',['มีทั้งหมด',String(n),'คน'],400))return;
 for(let k=1;k<=p.p;k++){const i=p.front?k-1:n-k;G.tag(x(i),112,k,'#8e5bd8',11);G.sfx('pop',k);if(!await G.say([String(k)]))return;}
 kids[me].textContent='👧';G.glow(kids[me],'#ec4899');G.pulse(kids[me]);if(!await G.step('น้องมายคือคนที่ '+p.p+' นับจาก'+(p.front?'หัวแถว':'ท้ายแถว'),['นี่คือน้องมาย'],500))return;
 let c=0;for(let i=0;i<n;i++){if(p.front?i>me:i<me){c++;G.tag(x(i),200,c,'#16a34a',11);G.sfx('pop',c);if(!await G.say([String(c)]))return;}}
 await G.fin((p.front?'ข้างหลัง':'ข้างหน้า')+' '+c+' คน',[(p.front?'ข้างหลังน้องมาย':'ข้างหน้าน้องมาย')+'มี',String(c),'คน']);};
/* ภาพเฉลยชุด 4 + บทเรียนสั้นกึ่งสอน (engine/explain4.js 11 พ.ย. 69) */
try{const s=[...document.scripts].find(x=>/explain3\.js/.test(x.src||''));if(s){const e=document.createElement('script');e.src=s.src.replace(/explain3\.js.*$/,'explain4.js');document.head.append(e);}}catch(e){}
})();
