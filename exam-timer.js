(()=>{const theme=document.createElement('link');theme.rel='stylesheet';theme.href='studyai-theme.css?v=1';document.head.appendChild(theme);const exams=[
{d:'2026-10-26',n:'מבחן 1 באנגלית'},
{d:'2026-10-28',n:'מבחן 1 במדעים'},
{d:'2026-11-03',n:'מבחן 1 במתמטיקה'},
{d:'2026-11-05',n:'מבחן 1 בעברית'},
{d:'2026-11-10',n:'מבחן 1 תרבות ישראל'},
{d:'2026-11-16',n:'מבחן 1 בתנ״ך'},
{d:'2026-11-18',n:'מבחן 1 בערבית'},
{d:'2026-11-25',n:'מבחן 1 בספרות'},
{d:'2026-12-01',n:'מבחן 2 במתמטיקה'},
{d:'2026-12-03',n:'מבחן 1 בהיסטוריה'},
{d:'2026-12-14',n:'מבחן 2 באנגלית'},
{d:'2026-12-17',n:'מבחן 2 בעברית'},
{d:'2026-12-22',n:'מבחן 2 במדעים'},
{d:'2026-12-27',n:'מבחן משלים: אנגלית, היסטוריה, ספרות'},
{d:'2026-12-29',n:'מבחן משלים במתמטיקה'},
{d:'2027-01-03',n:'מבחן משלים: עברית, מדעים, ערבית, תנ״ך, תרבות ישראל'},
{d:'2027-01-31',n:'מבחן 3 במתמטיקה'},
{d:'2027-02-03',n:'מבחן 3 במדעים'},
{d:'2027-02-10',n:'מבחן 3 באנגלית'},
{d:'2027-02-16',n:'מבחן 3 בעברית'},
{d:'2027-02-21',n:'מבחן 2 בהיסטוריה'},
{d:'2027-02-25',n:'מבחן 2 בערבית'},
{d:'2027-02-28',n:'מבחן 2 בספרות'},
{d:'2027-03-10',n:'מבחן 2 בתנ״ך'},
{d:'2027-03-15',n:'מבחן 2 בתרבות ישראל'},
{d:'2027-03-31',n:'מבחן 4 במדעים'},
{d:'2027-04-05',n:'מבחן 4 באנגלית'},
{d:'2027-04-08',n:'מבחן 4 במתמטיקה'},
{d:'2027-04-11',n:'מבחן 4 בעברית'}
];
const css=`.exam-countdown{position:sticky;top:0;z-index:1100;background:linear-gradient(135deg,#0e2252,#244fba);color:white;padding:11px 14px;box-shadow:0 5px 16px #10285a2b;font-family:system-ui,Arial;direction:rtl}.exam-countdown .wrap{max-width:1000px;margin:auto;display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap}.exam-countdown .exam-name{font-weight:800}.exam-countdown .exam-date{opacity:.85;font-size:14px}.exam-countdown .clock{display:flex;gap:6px;direction:ltr}.exam-countdown .unit{min-width:54px;background:#ffffff18;border:1px solid #ffffff30;border-radius:10px;padding:5px 7px;text-align:center}.exam-countdown .num{font-size:20px;font-weight:900;line-height:1}.exam-countdown .lbl{font-size:10px;opacity:.82;direction:rtl}.exam-countdown .no-exams{font-weight:800}@media(max-width:520px){.exam-countdown{padding:8px}.exam-countdown .wrap{gap:8px}.exam-countdown .unit{min-width:45px}.exam-countdown .num{font-size:17px}.exam-countdown .exam-name{font-size:14px}}`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
const bar=document.createElement('div');bar.className='exam-countdown';bar.innerHTML='<div class="wrap"><div class="info"><div class="exam-name"></div><div class="exam-date"></div></div><div class="clock"><div class="unit"><div class="num" data-u="d">--</div><div class="lbl">ימים</div></div><div class="unit"><div class="num" data-u="h">--</div><div class="lbl">שעות</div></div><div class="unit"><div class="num" data-u="m">--</div><div class="lbl">דקות</div></div><div class="unit"><div class="num" data-u="s">--</div><div class="lbl">שניות</div></div></div></div>';
const header=document.querySelector('header');if(header)header.insertAdjacentElement('afterend',bar);else document.body.prepend(bar);
const q=s=>bar.querySelector(s);let currentKey='';function at0800(ds){const [y,m,d]=ds.split('-').map(Number);return new Date(y,m-1,d,8,0,0,0)}function pad(n){return String(n).padStart(2,'0')}function pick(){const now=new Date();return exams.find(e=>at0800(e.d)>now)||null}function render(){const e=pick();if(!e){bar.innerHTML='<div class="wrap"><div class="no-exams">🎉 אין כרגע מבחן עתידי בלוח</div></div>';return}const target=at0800(e.d),now=new Date(),diff=Math.max(0,target-now);if(currentKey!==e.d){currentKey=e.d;q('.exam-name').textContent='⏳ המבחן הקרוב: '+e.n;const [y,m,d]=e.d.split('-');q('.exam-date').textContent=`${d}.${m}.${y} • הספירה עד 08:00 ביום המבחן`;}const total=Math.floor(diff/1000);q('[data-u=d]').textContent=Math.floor(total/86400);q('[data-u=h]').textContent=pad(Math.floor(total%86400/3600));q('[data-u=m]').textContent=pad(Math.floor(total%3600/60));q('[data-u=s]').textContent=pad(total%60)}render();setInterval(render,1000);
})();