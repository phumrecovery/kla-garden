/* ทบทวนเลขบ่อย ๆ (ผู้ปกครองขอ 15 ต.ค.): มากน้อย เรียงลำดับ บวกลบ บวกลบต่อเนื่อง และ (ภายหลัง) บวกลบสองหลักมีทด
   ใช้ทั้ง "ข้อพิเศษทบทวนเลข" ท้ายทุกตอน และ "คณิตวันละนิด" ในสนามสอบ
   เพิ่มหัวข้อสองหลักในอนาคต: ใส่ id ลงใน FOCUS (หัวข้อจะเปิดเองเมื่อดูตอนที่สอนแล้ว) */
window.FOCUS=['m_cmp','m_sym','m_sort','m_symx','m_order','m_add','m_sub','m_chain','m_addsub','m_word','m_pv','m_cmp2','m_sort2','m_add2','m_add2c','m_add2w','m_sub2','m_sub2b','m_chain2','m_money'];
/* ระดับความยากตามผลของน้อง (ผู้ปกครองขอ 24 ต.ค. 69) · ข้อในคลังมี lv 1 ง่าย 2 กลาง 3 ยาก
   ดูคำตอบ 8 ข้อหลังสุดของแต่ละหัวข้อ (สนามสอบ คณิตวันละนิด และข้อพิเศษท้ายตอน)
   - ตอบถูก ≥80% จากอย่างน้อย 5 ข้อ หรือข้อกลาง/ยากถูก ≥60% จากอย่างน้อย 3 ข้อ → ข้ามข้อง่าย
   - ตอบถูก ≥90% จาก 8 ข้อ หรือข้อกลาง/ยากถูก ≥80% จากอย่างน้อย 4 ข้อ → เอาข้อยากก่อน
   - ตอบถูกไม่ถึง 50% จากอย่างน้อย 4 ข้อ → พักข้อยากไว้ก่อน
   หัวข้อที่ข้ามข้อง่ายแล้ว แต่ไม่มีข้อกลาง/ยากเหลือ (เช่น นับถึง 20) จะถูกสุ่มน้อยลงแทน */
window.mastery=function(){
  const g=k=>{try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){return null}};
  const H=g('kla-exam-v1')||[],RV=g('kla-review-v1')||[],LV={};(window.BANK?BANK.items:[]).forEach(x=>LV[x.id]=x.lv||1);
  const ev=[];H.forEach(r=>(r.items||[]).forEach((x,i)=>{if(x)ev.push([(r.t||0)+i,x[1],x[2]?1:0,LV[x[0]]||1]);}));RV.forEach(x=>ev.push([x[3]||0,x[1],x[2]?1:0,LV[x[0]]||1]));
  ev.sort((a,b)=>a[0]-b[0]);const by={};ev.forEach(e=>(by[e[1]]=by[e[1]]||[]).push(e));
  const M={};for(const t in by){const a=by[t].slice(-8),n=a.length,acc=a.reduce((s,e)=>s+e[2],0)/n,h=a.filter(e=>e[3]>=2),n2=h.length,acc2=n2?h.reduce((s,e)=>s+e[2],0)/n2:0;
    const up=(n>=5&&acc>=.8)||(n2>=3&&acc2>=.6),hard=(n>=8&&acc>=.9)||(n2>=4&&acc2>=.8),low=n>=4&&acc<.5;
    M[t]={n,acc,min:up&&!low?2:1,max:low?2:3,hard:hard&&!low};}
  return M;};
window.levelPick=function(items,m){if(!m)return {pool:items,capped:false};const L=x=>x.lv||1,pool=items.filter(x=>L(x)>=m.min&&L(x)<=m.max);
  return pool.length?{pool,capped:false}:{pool:items,capped:m.min>1};};
window.levelRank=(x,m)=>m&&m.hard?((x.lv||1)===3?0:1):0;
window.pickFocus=function(n){
  const g=k=>{try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){return null}};
  const P=g('kla-garden-v1')||{},H=g('kla-exam-v1')||[],RV=g('kla-review-v1')||[],all=g('kla-exam-all'),SEEN=g('kla-seen-v1')||{},cnt=x=>(SEEN[x.id]||[0])[0];
  const ts=BANK.topics.filter(t=>FOCUS.includes(t.id)&&(all||(P['EP'+t.ep]&&P['EP'+t.ep].seed)));
  if(!ts.length)return [];
  const st={},add=(t,ok)=>{const o=st[t]=st[t]||{n:0,ok:0};o.n++;o.ok+=ok?1:0;};
  H.slice(-10).forEach(r=>(r.items||[]).forEach(x=>{if(x)add(x[1],x[2]);}));RV.slice(-60).forEach(x=>add(x[1],x[2]));
  const seen=new Set(RV.slice(-40).map(x=>x[0]).concat(H.slice(-2).flatMap(r=>(r.items||[]).filter(Boolean).map(x=>x[0]))));
  // หัวข้อที่ยังพลาดบ่อยได้น้ำหนักมากขึ้น (ถูก 100% = 1 เท่า, ถูก 0% = 5 เท่า)
  const MS=mastery(),LP={};ts.forEach(t=>LP[t.id]=levelPick(BANK.items.filter(x=>x.t===t.id&&(all||!x.ep||(P['EP'+x.ep]&&P['EP'+x.ep].seed))),MS[t.id]));
  // หัวข้อที่ข้ามข้อง่ายแล้วแต่ไม่มีข้อยากกว่าเหลือ ได้น้ำหนักน้อยลง
  const w=ts.map(t=>{const s=st[t.id];const acc=s&&s.n>=2?s.ok/s.n:.6;return (1+4*(1-acc))*(LP[t.id].capped?.3:1);}),W=w.reduce((a,b)=>a+b,0);
  const out=[],used=new Set();
  for(let k=0;k<n*8&&out.length<n;k++){let r=Math.random()*W,i=0;while(i<w.length-1&&r>w[i]){r-=w[i];i++;}
    const m=MS[ts[i].id],pool=LP[ts[i].id].pool.filter(x=>!used.has(x.id));if(!pool.length)continue;
    // ข้อที่ขึ้นน้อยครั้งที่สุดก่อน (ยังไม่เคยทำ = 0) แล้วเลี่ยงข้อที่เพิ่งทำ
    // เอาข้อยากก่อน ถ้าน้องทำหัวข้อนี้ได้ดีมาก
    const rk=Math.min(...pool.map(x=>levelRank(x,m))),p2=pool.filter(x=>levelRank(x,m)===rk);
    const mn=Math.min(...p2.map(cnt)),low=p2.filter(x=>cnt(x)===mn),fresh=low.filter(x=>!seen.has(x.id)),c=fresh.length?fresh:low;
    const x=c[Math.floor(Math.random()*c.length)];if(out.some(y=>y.t===x.t)&&k<n*4)continue;used.add(x.id);out.push(x);}
  return out;};
window.logFocus=function(id,t,ok){try{const k='kla-review-v1';const d=JSON.parse(localStorage.getItem(k)||'[]');d.push([id,t,ok?1:0,Date.now()]);localStorage.setItem(k,JSON.stringify(d.slice(-300)));}catch(e){}};
