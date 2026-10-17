/* ทบทวนเลขบ่อย ๆ (ผู้ปกครองขอ 15 ต.ค.): มากน้อย เรียงลำดับ บวกลบ บวกลบต่อเนื่อง และ (ภายหลัง) บวกลบสองหลักมีทด
   ใช้ทั้ง "ข้อพิเศษทบทวนเลข" ท้ายทุกตอน และ "คณิตวันละนิด" ในสนามสอบ
   เพิ่มหัวข้อสองหลักในอนาคต: ใส่ id ลงใน FOCUS (หัวข้อจะเปิดเองเมื่อดูตอนที่สอนแล้ว) */
window.FOCUS=['m_cmp','m_sym','m_sort','m_symx','m_order','m_add','m_sub','m_chain','m_addsub','m_word','m_pv','m_cmp2','m_sort2','m_add2','m_add2c','m_add2w','m_sub2','m_sub2b','m_chain2','m_money'];
window.pickFocus=function(n){
  const g=k=>{try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){return null}};
  const P=g('kla-garden-v1')||{},H=g('kla-exam-v1')||[],RV=g('kla-review-v1')||[],all=g('kla-exam-all');
  const ts=BANK.topics.filter(t=>FOCUS.includes(t.id)&&(all||(P['EP'+t.ep]&&P['EP'+t.ep].seed)));
  if(!ts.length)return [];
  const st={},add=(t,ok)=>{const o=st[t]=st[t]||{n:0,ok:0};o.n++;o.ok+=ok?1:0;};
  H.slice(-10).forEach(r=>(r.items||[]).forEach(x=>{if(x)add(x[1],x[2]);}));RV.slice(-60).forEach(x=>add(x[1],x[2]));
  const seen=new Set(RV.slice(-40).map(x=>x[0]).concat(H.slice(-2).flatMap(r=>(r.items||[]).filter(Boolean).map(x=>x[0]))));
  // หัวข้อที่ยังพลาดบ่อยได้น้ำหนักมากขึ้น (ถูก 100% = 1 เท่า, ถูก 0% = 5 เท่า)
  const w=ts.map(t=>{const s=st[t.id];const acc=s&&s.n>=2?s.ok/s.n:.6;return 1+4*(1-acc);}),W=w.reduce((a,b)=>a+b,0);
  const out=[],used=new Set();
  for(let k=0;k<n*8&&out.length<n;k++){let r=Math.random()*W,i=0;while(i<w.length-1&&r>w[i]){r-=w[i];i++;}
    const pool=BANK.items.filter(x=>x.t===ts[i].id&&!used.has(x.id)),fresh=pool.filter(x=>!seen.has(x.id)),c=fresh.length?fresh:pool;if(!c.length)continue;
    const x=c[Math.floor(Math.random()*c.length)];if(out.some(y=>y.t===x.t)&&k<n*4)continue;used.add(x.id);out.push(x);}
  return out;};
window.logFocus=function(id,t,ok){try{const k='kla-review-v1';const d=JSON.parse(localStorage.getItem(k)||'[]');d.push([id,t,ok?1:0,Date.now()]);localStorage.setItem(k,JSON.stringify(d.slice(-300)));}catch(e){}};
