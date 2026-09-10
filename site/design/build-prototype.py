#!/usr/bin/env python3
"""Build the clickable design prototype (single HTML file) from site/src/data/*.json.

Output: site/design/turtle-guides-prototype.html. Every spec, talent, cap, rotation
step and standing on the page comes from the generated data files; nothing is typed in
by hand except the Warrior 1.18.1 changelog items (warrior patchChanges is null in the
data) and the page chrome.
"""
import json, re, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[1]
classes = json.load(open(ROOT / 'src/data/classes.json'))
matrix = json.load(open(ROOT / 'src/data/matrix.json'))

ORDER = ['warrior','paladin','hunter','rogue','priest','shaman','mage','warlock','druid']
DISPLAY_COLOR = {'priest': '#E8E8E8', 'shaman': '#3d9bff'}

def short(spec):
    mo = re.match(r'^(.*?)\s*\((.*)\)\s*$', spec or '')
    if mo and len(mo.group(2)) > 12:
        return mo.group(1).strip()
    return spec

data = {'classes': [], 'rows': []}
for r in matrix['rows']:
    data['rows'].append({k: r.get(k) for k in ['class','spec','role','standing','agreement','source_quality','notes','playbook_path']})

WARRIOR_1181 = [
    ['Defiance', '4 / 8 / 12 / 15 / 20% threat, was 3 – 15%'],
    ['Shield Slam', 'scales with 20% attack power, 75% threat modifier'],
    ['Arms tree', 'Ravager and Precision Cut added, Boundless Anger swapped out'],
    ['Tier sets', 'set bonuses revised across all warrior sets'],
]
for slug in ORDER:
    w = next(c for c in classes if c['slug'] == slug)
    pbs = []
    for p in w['playbooks']:
        y = p['yaml'] or {}
        pbs.append({
            'id': p['id'], 'spec': p['spec'], 'role': p['role'], 'roleLabel': p['roleLabel'],
            'title': p['title'], 'intro': p['intro'],
            'standing': p['standing'], 'yaml': y,
        })
    patch = None
    if w['patchChanges']:
        patch = [s.strip() for s in re.split(r';\s*', w['patchChanges']) if s.strip()]
    elif slug == 'warrior':
        patch = [f'{a}: {b}' for a, b in WARRIOR_1181]
    data['classes'].append({
        'slug': slug, 'name': w['name'], 'color': DISPLAY_COLOR.get(slug, w['color']),
        'playbooks': pbs, 'patch': patch,
        'levelingHeadings': [s['heading'] for s in (w['leveling'] or {}).get('sections', [])],
    })

payload = json.dumps(data, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/')

HTML = r'''<title>Turtle Class Guides</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap">
<style>
:root{
  --bg:#f6f7f9; --fg:#14161a; --mu:#5f6675; --mu2:#8a919e; --hl:rgba(0,0,0,0.10); --hl2:rgba(0,0,0,0.05);
  --dim:#d5d9e0; --body:#3a404a; --fav:#1f9d55; --alt:#2b6fd6; --nic:#b7791f; --nv:#8a919e; --warn:#b7791f; --staff:#4f8a1f;
  --c-warrior:#9a6b3a; --c-paladin:#c4457f; --c-hunter:#5e8f2a; --c-rogue:#a8901a; --c-priest:#6b7280; --c-shaman:#1f5fbf; --c-mage:#1b8fb0; --c-warlock:#6a5acd; --c-druid:#d3630a;
  --sans:Manrope,"Segoe UI",Helvetica,Arial,sans-serif; --disp:"Space Grotesk","Segoe UI",Helvetica,Arial,sans-serif;
  color-scheme:light;
}
@media (prefers-color-scheme:dark){ :root:not([data-theme="light"]){
  --bg:#0b0c10; --fg:#eef0f3; --mu:#8b93a1; --mu2:#5c6470; --hl:rgba(255,255,255,0.08); --hl2:rgba(255,255,255,0.04);
  --c-warrior:#C69B6D; --c-paladin:#F48CBA; --c-hunter:#AAD372; --c-rogue:#FFF468; --c-priest:#E8E8E8; --c-shaman:#3d9bff; --c-mage:#3FC7EB; --c-warlock:#8788EE; --c-druid:#FF7C0A; --dim:#3a3f4a; --body:#c9ced6; --fav:#3ddc84; --alt:#4ea1ff; --nic:#f5b942; --nv:#5c6470; --warn:#f5b942; --staff:#8dc63f; color-scheme:dark; } }
:root[data-theme="dark"]{
  --bg:#0b0c10; --fg:#eef0f3; --mu:#8b93a1; --mu2:#5c6470; --hl:rgba(255,255,255,0.08); --hl2:rgba(255,255,255,0.04);
  --c-warrior:#C69B6D; --c-paladin:#F48CBA; --c-hunter:#AAD372; --c-rogue:#FFF468; --c-priest:#E8E8E8; --c-shaman:#3d9bff; --c-mage:#3FC7EB; --c-warlock:#8788EE; --c-druid:#FF7C0A; --dim:#3a3f4a; --body:#c9ced6; --fav:#3ddc84; --alt:#4ea1ff; --nic:#f5b942; --nv:#5c6470; --warn:#f5b942; --staff:#8dc63f; color-scheme:dark; }
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--fg);font-family:var(--sans);font-size:15px;line-height:1.5;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
a:hover{color:var(--ac,var(--fg))}
button{font:inherit;color:inherit;background:none;border:0;padding:0;cursor:pointer}
:focus-visible{outline:2px solid var(--ac,#4ea1ff);outline-offset:3px;border-radius:3px}
.h{font-family:var(--disp);letter-spacing:-0.02em;text-wrap:balance}
.wrap{width:min(1328px,100% - 48px);margin-inline:auto}
@media (max-width:600px){.wrap{width:calc(100% - 32px)}}
.top{height:64px;display:flex;align-items:center;justify-content:space-between;gap:24px}
.top .brand{font-family:var(--disp);font-weight:700;font-size:16px}
.top .brand span{color:var(--mu)}
.top nav{display:flex;gap:26px;font-size:14px;color:var(--mu)}
.top nav a.on{color:var(--fg)}
.tog{display:flex;gap:6px;font-size:12px;color:var(--mu)}
.tog button{padding:4px 9px;border:1px solid var(--hl);border-radius:6px;color:var(--mu)}
.tog button.on{color:var(--fg);border-color:var(--fg)}
.eyebrow{font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ac,var(--mu))}
.mu{color:var(--mu)}
.dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--sc);flex:none}
.st{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:var(--sc);white-space:nowrap}
.hr{border-top:1px solid var(--hl)}
.crumb{display:flex;gap:10px;font-size:13px;color:var(--mu);flex-wrap:wrap}
.crumb b{color:var(--fg);font-weight:500}
/* home */
.hero{display:flex;align-items:flex-end;justify-content:space-between;gap:48px;padding-block:64px 40px;flex-wrap:wrap}
.hero h1{font-size:clamp(36px,5vw,60px);font-weight:700;line-height:1.02;margin:0;max-width:760px}
.hero p{font-size:18px;color:var(--mu);max-width:600px;margin:0}
.legend{display:flex;flex-direction:column;gap:8px;font-size:13px;color:var(--mu)}
.legend span{display:flex;align-items:center;gap:8px}
.grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0 56px;padding-bottom:72px}
@media (max-width:1000px){.grid3{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:640px){.grid3{grid-template-columns:1fr}}
.cell{display:flex;flex-direction:column;gap:12px;padding:28px 0 32px;border-top:1px solid var(--hl)}
.cell .name{display:flex;align-items:baseline;justify-content:space-between}
.cell .name a{font-family:var(--disp);font-size:26px;font-weight:700;color:var(--ac);letter-spacing:-0.02em}
.cell .name small{font-size:12px;color:var(--mu)}
.rr{display:flex;align-items:baseline;gap:16px;padding:6px 0;font-size:13px}
.rr .rl{width:62px;flex:none;color:var(--mu)}
.rr .sp{display:flex;flex-wrap:wrap;gap:6px 16px}
.rr .sp a{display:inline-flex;align-items:center;gap:7px;color:var(--mu);font-weight:500}
.rr .sp a.f{color:var(--fg);font-weight:600}
.rr .sp a:hover{color:var(--ac)}
/* class page */
.chead{padding-block:48px 36px;border-bottom:1px solid var(--hl);display:flex;flex-direction:column;gap:18px}
.chead .row{display:flex;align-items:flex-end;justify-content:space-between;gap:48px;flex-wrap:wrap}
.chead h1{font-size:clamp(44px,6vw,72px);font-weight:700;line-height:.95;margin:0;color:var(--ac)}
.chead p{font-size:18px;color:var(--mu);max-width:720px;margin:0}
.facts{display:flex;gap:36px;flex-wrap:wrap;font-size:14px;padding-bottom:6px}
.facts div{display:flex;flex-direction:column;gap:3px}
.facts small{font-size:12px;color:var(--mu)}
.facts b{font-weight:600}
.two{display:grid;grid-template-columns:1fr 1fr;gap:44px 80px;padding-block:40px 72px}
@media (max-width:900px){.two{grid-template-columns:1fr}}
.sec{display:flex;flex-direction:column;gap:4px;min-width:0}
.sec > header{display:flex;align-items:baseline;gap:14px;padding-bottom:8px;flex-wrap:wrap}
.sec > header h2{font-family:var(--disp);font-size:22px;font-weight:700;margin:0;letter-spacing:-0.02em}
.sec > header .n{font-family:var(--disp);font-size:13px;color:var(--mu);font-weight:600}
.sec > header .r{margin-left:auto;font-size:13px;color:var(--mu)}
.list{display:flex;flex-direction:column}
.li{display:flex;align-items:center;gap:20px;padding:14px 0;border-bottom:1px solid var(--hl);flex-wrap:wrap}
.li:last-child{border-bottom:0}
.li .t{font-size:16px;font-weight:600;width:220px;flex:none}
.li .d{font-size:14px;color:var(--mu);flex:1;min-width:200px}
.kv{display:flex;gap:16px;padding:12px 0;border-bottom:1px solid var(--hl);font-size:15px}
.kv:last-child{border-bottom:0}
.kv b{font-weight:600;width:170px;flex:none}
.kv span{color:var(--mu)}
/* guide */
.guide{display:grid;grid-template-columns:200px 1fr;gap:64px;padding-block:40px 80px}
.guide.tabs{grid-template-columns:1fr}
@media (max-width:900px){.guide{grid-template-columns:1fr}}
.rail{position:sticky;top:24px;align-self:start;display:flex;flex-direction:column;gap:28px}
.guide.tabs .rail{position:sticky;top:0;background:var(--bg);flex-direction:row;gap:32px;border-bottom:1px solid var(--hl);z-index:2;overflow-x:auto}
@media (max-width:900px){.rail{position:static}}
.rail .who{display:flex;flex-direction:column;gap:4px;font-size:13px;color:var(--mu)}
.rail .who b{color:var(--fg);font-weight:600}
.guide.tabs .rail .who{display:none}
.rail nav{display:flex;flex-direction:column;gap:2px;font-size:14px}
.guide.tabs .rail nav{flex-direction:row;gap:30px}
.rail nav a{display:flex;align-items:center;gap:12px;height:34px;color:var(--mu)}
.rail nav a i{width:18px;height:2px;background:transparent}
.rail nav a.on{color:var(--fg);font-weight:600}
.rail nav a.on i{background:var(--ac)}
.guide.tabs .rail nav a{height:52px;border-bottom:2px solid transparent;white-space:nowrap}
.guide.tabs .rail nav a i{display:none}
.guide.tabs .rail nav a.on{border-bottom-color:var(--ac)}
.rail .others{display:flex;flex-direction:column;gap:8px;font-size:12px;color:var(--mu);border-top:1px solid var(--hl);padding-top:20px}
.rail .others a{color:var(--fg)}
.guide.tabs .rail .others{display:none}
.content{display:flex;flex-direction:column;gap:64px;max-width:1064px;min-width:0}
.gsec{display:flex;flex-direction:column;gap:26px;scroll-margin-top:72px}
.gsec > header{display:flex;align-items:baseline;gap:16px;flex-wrap:wrap}
.gsec > header h2{font-family:var(--disp);font-size:28px;font-weight:700;margin:0;letter-spacing:-0.02em}
.gsec > header .n{font-family:var(--disp);font-size:13px;color:var(--mu);font-weight:600}
.gsec > header .r{margin-left:auto;font-size:14px;color:var(--mu)}
.verdict h1{font-size:clamp(40px,5vw,56px);font-weight:700;line-height:1;margin:0}
.verdict .lead{font-size:18px;color:var(--mu);max-width:720px;margin:0}
.chips{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:28px;border-top:1px solid var(--hl);padding-top:22px}
@media (max-width:900px){.chips{grid-template-columns:repeat(2,minmax(0,1fr))}}
.chips div{display:flex;flex-direction:column;gap:5px;min-width:0}
.chips small{font-size:12px;color:var(--mu)}
.chips b{font-size:15px;font-weight:600;display:flex;align-items:center;gap:8px}
.bar{display:flex;height:14px;border-radius:7px;overflow:hidden;gap:3px}
.bar i{display:block;background:var(--dim)}
.bar i.ac{background:var(--ac)}
.barlab{display:flex;justify-content:space-between;font-size:13px;color:var(--mu);flex-wrap:wrap;gap:8px}
.barlab b{color:var(--fg);font-weight:600}
.tal{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 56px}
@media (max-width:800px){.tal{grid-template-columns:1fr}}
.tr{display:flex;align-items:center;gap:14px;min-height:48px;padding:6px 0;border-bottom:1px solid var(--hl)}
.pips{display:flex;gap:3px;width:46px;flex:none}
.pips i{width:7px;height:7px;border-radius:50%;background:var(--ac)}
.pips i.off{background:var(--dim)}
.tr .t{font-size:15px;font-weight:600;flex:1;min-width:110px}
.tr .n{font-size:13px;color:var(--mu);text-align:right;max-width:46%}
.tr .n.w{color:var(--warn)}
.tr .tree{font-size:11px;color:var(--mu2);width:70px;flex:none;text-align:right}
.lvl{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0 40px}
@media (max-width:900px){.lvl{grid-template-columns:1fr}}
.lv{display:flex;align-items:center;gap:14px;min-height:40px;padding:4px 0;border-bottom:1px solid var(--hl);font-size:14px}
.lv .k{font-family:var(--disp);font-weight:700;color:var(--ac);width:28px;flex:none;font-variant-numeric:tabular-nums}
.lv .t{font-weight:500;flex:1;min-width:0}
.lv .tree{font-size:11px;color:var(--mu2)}
.notes{display:grid;grid-template-columns:1fr 1.4fr;gap:40px;font-size:14px;line-height:1.5}
@media (max-width:800px){.notes{grid-template-columns:1fr}}
.notes small{display:block;font-size:12px;color:var(--mu);margin-bottom:6px}
.notes .p{color:var(--body)}
.strike{color:var(--mu);text-decoration:line-through}
.links{display:flex;gap:8px;flex-wrap:wrap}
.links a{font-size:12px;border:1px solid var(--hl);border-radius:6px;padding:4px 10px;color:var(--mu)}
.links a:hover{color:var(--ac);border-color:var(--ac)}
.stats{display:grid;grid-template-columns:1.4fr 1fr;gap:64px}
@media (max-width:900px){.stats{grid-template-columns:1fr}}
.pr{display:flex;gap:20px;padding:15px 0;border-bottom:1px solid var(--hl)}
.pr .k{font-family:var(--disp);font-size:22px;font-weight:700;color:var(--ac);width:32px;flex:none}
.pr .t{font-size:17px;font-weight:600}
.pr .d{font-size:14px;color:var(--mu)}
.cap{display:flex;align-items:baseline;justify-content:space-between;gap:16px;padding:14px 0;border-bottom:1px solid var(--hl)}
.cap .l{display:flex;flex-direction:column;gap:2px;font-size:14px;min-width:0}
.cap .l small{font-size:12px;color:var(--mu)}
.cap .v{font-family:var(--disp);font-size:30px;font-weight:700;flex:none;letter-spacing:-0.02em;font-variant-numeric:tabular-nums}
.cap .v.s{font-size:15px;font-family:var(--sans);font-weight:500;color:var(--body);text-align:right;max-width:55%;flex:1}
.opener{display:flex;flex-direction:column;gap:10px}
.opener .seq{display:flex;align-items:center;gap:12px;flex-wrap:wrap;font-size:15px;font-weight:600}
.opener .seq em{font-style:normal;color:var(--dim)}
.rot{display:grid;grid-template-columns:1.5fr 1fr;gap:64px}
@media (max-width:900px){.rot{grid-template-columns:1fr}}
.step{display:flex;align-items:center;gap:18px;min-height:50px;padding:6px 0;border-bottom:1px solid var(--hl)}
.step .k{font-family:var(--disp);font-size:15px;font-weight:700;color:var(--ac);width:20px;flex:none}
.step .t{font-size:16px;font-weight:600;width:190px;flex:none}
.step .d{font-size:14px;color:var(--mu);flex:1;min-width:160px}
.aoe{display:flex;flex-direction:column;gap:26px}
.aoe .g{display:flex;flex-direction:column;gap:8px;font-size:15px}
.aoe .g b{font-weight:600}
.aoe .g span{color:var(--mu)}
.cdg{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 40px}
@media (max-width:700px){.cdg{grid-template-columns:1fr}}
.cd{display:flex;flex-direction:column;gap:3px;padding:14px 0;border-bottom:1px solid var(--hl)}
.cd b{font-size:15px;font-weight:600}
.cd span{font-size:13px;color:var(--mu)}
.dont{display:flex;flex-direction:column;font-size:14px}
.dont div{display:flex;gap:14px;padding:12px 0;border-bottom:1px solid var(--hl)}
.dont div b{color:var(--warn);font-weight:700}
.split{display:grid;grid-template-columns:1.5fr 1fr;gap:64px}
@media (max-width:900px){.split{grid-target-columns:1fr;grid-template-columns:1fr}}
.src{display:flex;align-items:center;justify-content:space-between;gap:16px;padding-top:24px;border-top:1px solid var(--hl);font-size:14px;flex-wrap:wrap}
.src .l{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.srclist{display:none;flex-direction:column;font-size:13px}
.srclist.open{display:flex}
.srclist a{display:flex;gap:16px;padding:8px 0;border-bottom:1px solid var(--hl);color:var(--mu)}
.srclist a b{color:var(--fg);font-weight:600;width:120px;flex:none}
.srclist a .s{color:var(--staff)}
.empty{font-size:13px;color:var(--mu);padding:10px 0}
/* matrix */
.mtx{overflow-x:auto;padding-bottom:72px}
table{border-collapse:collapse;width:100%;font-size:14px;min-width:820px}
th{text-align:left;font-size:12px;color:var(--mu);font-weight:600;padding:10px 12px 10px 0;border-bottom:1px solid var(--hl);letter-spacing:.04em;text-transform:uppercase}
td{padding:11px 12px 11px 0;border-bottom:1px solid var(--hl);vertical-align:top}
td.c{font-weight:700;color:var(--ac);white-space:nowrap}
td.no{color:var(--mu);max-width:560px}
.foot{padding-block:24px 48px;font-size:12px;color:var(--mu);border-top:1px solid var(--hl);display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
@media (prefers-reduced-motion:no-preference){html{scroll-behavior:smooth}}
</style>
<div id="app"></div>
<script id="data" type="application/json">__DATA__</script>
<script>
(function(){
const D = JSON.parse(document.getElementById('data').textContent);
const ROLE = {tank:'Tank',healer:'Healer','melee-dps':'Melee','ranged-dps':'Ranged',pvp:'PvP',leveling:'Leveling'};
const ROLE_ORDER = ['tank','healer','melee-dps','ranged-dps','pvp','leveling'];
const RANK = {favored:0,alternative:1,niche:2,'not-viable':3};
const SC = {favored:'var(--fav)',alternative:'var(--alt)',niche:'var(--nic)','not-viable':'var(--nv)'};
const SL = {favored:'Favored',alternative:'Alternative',niche:'Niche','not-viable':'Not viable'};
const esc = s => String(s==null?'':s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const byName = {}; D.classes.forEach(c => byName[c.name] = c);
const shortSpec = s => { const m = /^(.*?)\s*\((.*)\)\s*$/.exec(s||''); return (m && m[2].length > 12) ? m[1].trim() : (s||''); };
const norm = s => (s||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
// map a matrix row to a playbook id when one exists
function findPlaybook(cls, row){
  if(!row.spec) return null;
  const roleMatch = p => p.role===row.role || (row.role==='pvp' && p.role==='pvp');
  const cands = cls.playbooks.filter(roleMatch);
  const sp = norm(shortSpec(row.spec));
  let best = cands.find(p => norm(p.spec)===sp) || cands.find(p => norm(p.spec).startsWith(sp.split(' ')[0]) || sp.startsWith(norm(p.spec).split(' ')[0]));
  return best ? best.id : null;
}
let prefs = {theme:null, layout:'rail'};
try { prefs = Object.assign(prefs, JSON.parse(localStorage.getItem('tg-prefs')||'{}')); } catch(e){}
function savePrefs(){ try{ localStorage.setItem('tg-prefs', JSON.stringify(prefs)); }catch(e){} }
function applyTheme(){ const r=document.documentElement; if(prefs.theme) r.setAttribute('data-theme', prefs.theme); else r.removeAttribute('data-theme'); }
applyTheme();

function top(active){
  const t = prefs.theme || 'system';
  return `<div class="wrap top">
    <div style="display:flex;align-items:center;gap:36px">
      <a class="brand" href="#/">turtle<span>.guides</span></a>
      <nav><a href="#/" class="${active==='classes'?'on':''}">Classes</a><a href="#/matrix" class="${active==='matrix'?'on':''}">Matrix</a><a>Glossary</a><a>About</a></nav>
    </div>
    <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;justify-content:flex-end">
      <div class="tog" title="Theme"><button data-theme-set="" class="${t==='system'?'on':''}">Auto</button><button data-theme-set="dark" class="${t==='dark'?'on':''}">Dark</button><button data-theme-set="light" class="${t==='light'?'on':''}">Light</button></div>
      <div class="tog" title="Guide layout"><button data-layout="rail" class="${prefs.layout==='rail'?'on':''}">Rail</button><button data-layout="tabs" class="${prefs.layout==='tabs'?'on':''}">Tabs</button></div>
    </div>
  </div>`;
}
function foot(){ return `<div class="wrap foot"><span>Prototype. Every spec, standing, talent, cap and rotation step is read from the generated data files; prose sections are one click away in the full site.</span><span>Turtle WoW · patch 1.18.1</span></div>`; }

function home(){
  const cells = D.classes.map(c => {
    const roles = {};
    D.rows.filter(r => r.class===c.name && r.spec && r.standing!=='not-viable').forEach(r => {
      const k = shortSpec(r.spec); const d = roles[r.role] = roles[r.role] || {};
      if(!(k in d) || RANK[r.standing] < RANK[d[k].standing]) d[k] = {standing:r.standing, id:findPlaybook(c, r)};
    });
    const rows = ROLE_ORDER.filter(r => roles[r]).map(r => {
      const items = Object.entries(roles[r]).sort((a,b)=>RANK[a[1].standing]-RANK[b[1].standing]).map(([k,v]) =>
        `<a href="${v.id?`#/g/${c.slug}/${v.id}`:`#/c/${c.slug}`}" class="${v.standing==='favored'?'f':''}" style="--sc:${SC[v.standing]}"><i class="dot"></i>${esc(k)}</a>`).join('');
      return `<div class="rr"><span class="rl">${ROLE[r]}</span><span class="sp">${items}</span></div>`;
    }).join('');
    return `<div class="cell" style="--ac:var(--c-${c.slug})"><div class="name"><a href="#/c/${c.slug}">${c.name}</a><small>${c.playbooks.length} guides →</small></div><div>${rows}</div></div>`;
  }).join('');
  return top('classes') + `<div class="wrap">
    <div class="hero"><div style="display:flex;flex-direction:column;gap:18px"><span class="eyebrow" style="--ac:#C69B6D">Turtle WoW · patch 1.18.1</span><h1 class="h">Play your class the way Turtle players actually do.</h1><p>Builds, leveling paths, stat caps and rotations for every spec, distilled from the archived forums. Every number links to the post it came from.</p></div>
    <div class="legend"><span style="--sc:var(--fav)"><i class="dot"></i>Favored by the community</span><span style="--sc:var(--alt)"><i class="dot"></i>Alternative, works with caveats</span><span style="--sc:var(--nic)"><i class="dot"></i>Niche, but the sources describe it</span></div></div>
    <div class="grid3">${cells}</div></div>` + foot();
}

function firstSentence(s){ const m=/^(.*?[.!?])(\s|$)/.exec(s||''); return m?m[1]:(s||''); }
function classPage(slug){
  const c = D.classes.find(x=>x.slug===slug); if(!c) return notFound();
  const rows = D.rows.filter(r => r.class===c.name);
  const secs = ROLE_ORDER.map(role => {
    const rs = rows.filter(r => r.role===role && r.spec && r.standing!=='not-viable').sort((a,b)=>RANK[a.standing]-RANK[b.standing]);
    if(!rs.length) return '';
    const lis = rs.map(r => { const id = findPlaybook(c, r); const label = SL[r.standing] + (/contested/.test(r.agreement||'') ? ', contested' : '');
      return `<div class="li"><a class="t" href="${id?`#/g/${c.slug}/${id}`:'#/c/'+c.slug}">${esc(r.spec)}</a><span class="st" style="--sc:${SC[r.standing]}"><i class="dot"></i>${label}</span><span class="d">${esc(firstSentence(r.notes))}</span></div>`; }).join('');
    return `<section class="sec"><header><h2 class="h">${ROLE[role]}</h2><span class="r">${rs.length} ${rs.length===1?'option':'options'}</span></header><div class="list">${lis}</div></section>`;
  }).join('');
  const best = role => { const r = rows.filter(x=>x.role===role && x.spec && x.standing!=='not-viable').sort((a,b)=>RANK[a.standing]-RANK[b.standing])[0]; return r ? shortSpec(r.spec) : null; };
  const facts = [['Raid tank',best('tank')],['Healer',best('healer')],['Melee',best('melee-dps')],['Ranged',best('ranged-dps')],['PvP',best('pvp')],['Level as',best('leveling')]].filter(f=>f[1]).map(f=>`<div><small>${f[0]}</small><b>${esc(f[1])}</b></div>`).join('');
  const patch = c.patch ? `<section class="sec"><header><h2 class="h">What 1.18.1 changed</h2><span class="r" style="color:var(--warn)">staff changelog</span></header><div class="list">${c.patch.map(p => { const m=/^([^:]{2,40}):\s*(.*)$/.exec(p); return m?`<div class="kv"><b>${esc(m[1])}</b><span>${esc(m[2])}</span></div>`:`<div class="kv"><span>${esc(p)}</span></div>`; }).join('')}</div></section>` : '';
  const solid = `<section class="sec"><header><h2 class="h">How solid is this</h2></header><div class="list">${c.playbooks.map(p => `<div class="kv"><b>${esc(p.spec)} · ${esc(p.roleLabel)}</b><span>${esc(p.standing.source_quality||'')}</span></div>`).join('')}</div></section>`;
  return top('classes') + `<div class="wrap" style="--ac:var(--c-${c.slug})">
    <div class="chead"><div class="crumb"><a href="#/">Classes</a><span>/</span><b>${c.name}</b></div>
      <div class="row"><div style="display:flex;flex-direction:column;gap:14px"><h1 class="h">${c.name}</h1><p>${c.playbooks.length} spec guides. Pick a role; green is what the community runs, blue works with caveats, amber is a niche the sources describe.</p></div><div class="facts">${facts}</div></div></div>
    <div class="two">${secs}${patch}${solid}</div></div>` + foot();
}

function capLabel(k){ return k.replace(/_player_claim$/,'').replace(/_pct$/,'').replace(/_pct_/,'_').replace(/_yd$/,' yd').replace(/_s$/,' s').replace(/_/g,' ').replace(/\bpvp\b/,'PvP').replace(/\bdw\b/,'dual wield').replace(/\bhp\b/,'HP').replace(/\bap\b/,'AP').replace(/\bpom\b/,'PoM').replace(/\bt3\b/,'T3').replace(/^./, s=>s.toUpperCase()); }
function capValue(k, v){ if(v==null) return null; if(typeof v==='number') return {big:true, text: /pct/.test(k) ? v+'%' : String(v)}; const s=String(v); const m=/^~?\s*(\d+(?:\.\d+)?)\s*%/.exec(s); if(m && s.length<=8) return {big:true,text:s}; return {big:false,text:s}; }

function guide(slug, id){
  const c = D.classes.find(x=>x.slug===slug); if(!c) return notFound();
  const p = c.playbooks.find(x=>x.id===id); if(!p) return notFound();
  const y = p.yaml || {}; const st = p.standing || {}; const ac = `var(--c-${c.slug})`;
  const row = D.rows.find(r => r.class===c.name && r.role===p.role && norm(shortSpec(r.spec))===norm(p.spec)) || D.rows.find(r => r.class===c.name && r.role===p.role && norm(r.spec||'').startsWith(norm(p.spec).split(' ')[0]));
  const standing = st.standing || (row&&row.standing) || 'niche';
  const agreement = st.agreement || (row&&row.agreement) || '';
  const lead = (row && row.notes) ? row.notes : firstSentence(p.intro);
  const hasLvl = !!(y.talents && y.talents.leveling_order && y.talents.leveling_order.length);
  const sections = [['verdict','Verdict'],['talents','Talents']].concat(hasLvl?[['leveling','Leveling order']]:[]).concat([['stats','Stats and caps'],['rotation','Rotation'],['cooldowns','Cooldowns'],['dont',"Don't"],['sources','Sources']]);
  const num = k => String(sections.findIndex(x=>x[0]===k)).padStart(2,'0');
  // talents
  const pts = (y.talents&&y.talents.points)||[];
  const trees = []; pts.forEach(t => { if(!trees.includes(t.tree)) trees.push(t.tree); });
  const sums = trees.map(t => pts.filter(x=>x.tree===t).reduce((a,x)=>a+(x.rank||0),0));
  const total = sums.reduce((a,b)=>a+b,0);
  const mainTree = trees[sums.indexOf(Math.max(...sums))];
  const bar = total ? `<div class="bar">${trees.map((t,i)=> sums[i] ? `<i class="${t===mainTree?'ac':''}" style="width:${(100*sums[i]/total).toFixed(1)}%" title="${esc(t)} ${sums[i]}"></i>`:'').join('')}</div>
    <div class="barlab">${trees.map((t,i)=>`<span><b>${esc(t)} ${sums[i]}</b></span>`).join('')}<span>${total} sourced points${total<51?` · the other ${51-total} are not fixed by any source`:''}</span></div>` : '<div class="empty">No talent points are pinned down by the sources for this build.</div>';
  const talRows = pts.map(t => { const r=t.rank||0; const pips = r ? Array.from({length:Math.min(r,5)},()=>'<i></i>').join('') : '<i class="off"></i>'; const note = t.note ? `<span class="n ${/contest|optional|\?/.test(t.note)?'w':''}">${esc(t.note)}</span>` : ''; return `<div class="tr"><span class="pips">${pips}</span><span class="t">${esc(t.talent)}${r>5?` <span class="mu">${r}</span>`:''}</span>${note}<span class="tree">${esc(t.tree)}</span></div>`; }).join('');
  const skip = (y.talents&&y.talents.skip&&y.talents.skip.length) ? `<div><small>Skip</small><div>${y.talents.skip.map(s=>`<span class="strike">${esc(s)}</span>`).join(' · ')}</div></div>` : '';
  const pv = y.patch_validity || {};
  const patchNote = pv.notes ? `<div><small style="color:var(--warn)">1.18.1 · ${pv.valid_for_1181===false?'not valid':'valid'}</small><div class="p">${esc(pv.notes)}</div></div>` : '';
  const links = (y.talents && (y.talents.build_link ? [].concat(y.talents.build_link) : (y.talents.links_opaque||[]))) || [];
  const linkHtml = links.length ? `<div class="links">${links.map((l,i)=>`<a href="${esc(l)}" target="_blank" rel="noopener">Talent calculator${links.length>1?' '+(i+1):''} ↗</a>`).join('')}</div>` : '';
  const lvl = (y.talents && y.talents.leveling_order && y.talents.leveling_order.length) ? y.talents.leveling_order : null;
  const lvlItem = s => typeof s==='string' ? {lvl:'', t:s} : {lvl: s.level!=null ? s.level : (s.lvl!=null?s.lvl:''), t: [s.talent||s.name||'', s.rank?`${s.rank}`:''].filter(Boolean).join(' '), tree: s.tree||''};
  const lvlHtml = lvl ? `<div class="gsec" id="leveling"><header><span class="n">${num('leveling')}</span><h2 class="h">Leveling order</h2><span class="r">${lvl.length} steps as the source lists them${(y.talents.leveling_order_source)?' · '+esc(y.talents.leveling_order_source):''}</span></header><div class="lvl">${lvl.map(lvlItem).map(o=>`<div class="lv"><span class="k">${esc(o.lvl)}</span><span class="t">${esc(o.t)}</span>${o.tree?`<span class="tree">${esc(o.tree)}</span>`:''}</div>`).join('')}</div></div>` : '';
  // stats
  let prio = [];
  if(Array.isArray(y.stat_priority)) prio = y.stat_priority.map(s=>({t:String(s).replace(/-/g,' ').replace(/\//g,' / '),d:''}));
  else if(y.stat_weights && typeof y.stat_weights==='object') prio = Object.entries(y.stat_weights).map(([k,v])=>({t:capLabel(k),d:String(v)}));
  const prioHtml = prio.length ? prio.map((s,i)=>`<div class="pr"><span class="k">${i+1}</span><div><div class="t">${esc(s.t)}</div>${s.d?`<div class="d">${esc(s.d)}</div>`:''}</div></div>`).join('') : '<div class="empty">No stat order is published for this spec.</div>';
  const caps = Object.entries(y.caps||{}).filter(([k,v])=>v!=null && k!=='note');
  const capHtml = caps.length ? caps.map(([k,v])=>{ const cv=capValue(k,v); return `<div class="cap"><div class="l"><span>${esc(capLabel(k))}</span>${/player_claim/.test(k)?'<small>player claim</small>':''}</div><span class="v ${cv.big?'':'s'}">${esc(cv.text)}</span></div>`; }).join('') + (y.caps.note?`<div class="empty">${esc(y.caps.note)}</div>`:'') : '<div class="empty">No hard caps are published for this spec.</div>';
  // rotation
  const rs = (y.rotation_single||[]).filter(x=>x&&typeof x==='object');
  const opener = rs.find(x => x.priority===0 || /opener/i.test(x.condition||''));
  const steps = rs.filter(x => x!==opener);
  const openerHtml = opener ? `<div class="opener"><small class="mu" style="font-size:12px">Opener</small><div class="seq">${String(opener.action).split(/\s*(?:->|→)\s*/).map(s=>`<span>${esc(s)}</span>`).join('<em>→</em>')}</div></div>` : '';
  const stepHtml = steps.length ? steps.map((s,i)=>`<div class="step"><span class="k">${i+1}</span><span class="t">${esc(s.action)}</span><span class="d">${esc(s.condition||'')}</span></div>`).join('') : '<div class="empty">No single-target priority is published.</div>';
  const ra = (y.rotation_aoe||[]).filter(x=>x&&typeof x==='object');
  const groups = {}; ra.forEach(x => { const k = x.targets_min!=null ? x.targets_min : (y.aoe_threshold||2); (groups[k]=groups[k]||[]).push(x); });
  const gkeys = Object.keys(groups).map(Number).sort((a,b)=>a-b);
  const aoeHtml = gkeys.length ? gkeys.map((k,i)=>{ const next = gkeys[i+1]; const lab = next ? `${k} – ${next-1} targets` : `${k} or more`; return `<div class="g"><small class="mu" style="font-size:12px">${lab}</small>${groups[k].sort((a,b)=>(a.priority||0)-(b.priority||0)).map(x=>`<div><b>${esc(x.action)}</b> <span>· ${esc(x.condition||'')}</span></div>`).join('')}</div>`; }).join('') : '<div class="empty">No multi-target rotation is published.</div>';
  const res = (y.resource_rules||[]).length ? `<div class="g"><small class="mu" style="font-size:12px">Resource rules</small>${y.resource_rules.map(r=>`<div><span>${esc(r)}</span></div>`).join('')}</div>` : '';
  const cds = (y.cooldowns||[]).map(cd=>`<div class="cd"><b>${esc(cd.name)}</b><span>${esc(cd.use_when||'')}</span></div>`).join('') || '<div class="empty">No cooldown rules are published.</div>';
  const dont = (y.mistakes_to_avoid||[]).map(m=>`<div><b>—</b><span>${esc(m)}</span></div>`).join('') || '<div class="empty">No common mistakes are listed.</div>';
  const srcs = y.sources||[]; const dates = srcs.map(s=>s.date).filter(Boolean).sort(); const staff = [...new Set(srcs.filter(s=>s.authority==='staff').map(s=>s.author))];
  const srcLine = `${srcs.length} cited posts${dates.length?`, ${dates[0].slice(0,7)} to ${dates[dates.length-1].slice(0,7)}`:''}${staff.length?` · staff: ${staff.slice(0,4).join(', ')}`:''}`;
  const srcList = srcs.map(s=>`<a href="${esc(s.url)}" target="_blank" rel="noopener"><b>${esc(s.author||'')}</b><span class="${s.authority==='staff'?'s':''}">${esc(s.authority||'')}</span><span>${esc(s.date||'')}</span><span style="overflow:hidden;text-overflow:ellipsis">${esc(s.url)}</span></a>`).join('');
  const others = c.playbooks.filter(x=>x.id!==p.id).map(x=>`<a href="#/g/${c.slug}/${x.id}">${esc(x.spec)} · ${esc(x.roleLabel)}</a>`).join('');
  const chip = (l,v) => `<div><small>${l}</small><b>${v}</b></div>`;
  const layout = prefs.layout==='tabs' ? 'guide tabs' : 'guide';
  const navHtml = sections.map(([k,l],i)=>`<a href="#/g/${c.slug}/${p.id}/${k}" data-sec="${k}" class="${i===0?'on':''}"><i></i>${l}</a>`).join('');
  const pre = prefs.layout==='tabs' ? '' : '';
  return top('classes') + `<div class="wrap" style="--ac:${ac}">
    <div class="crumb" style="padding-top:20px"><a href="#/">Classes</a><span>/</span><a href="#/c/${c.slug}">${c.name}</a><span>/</span><b>${esc(p.spec)} · ${esc(p.roleLabel)}</b></div>
    <div class="${layout}">
      <aside class="rail"><div class="who"><span>${c.name}</span><b>${esc(p.spec)} · ${esc(p.roleLabel)}</b></div><nav id="secnav">${navHtml}</nav><div class="others"><span>Other ${c.name} guides</span>${others}</div></aside>
      <div class="content">
        <div class="gsec verdict" id="verdict"><div style="display:flex;flex-direction:column;gap:14px"><span class="eyebrow">${c.name} · ${esc(p.roleLabel)}</span><h1 class="h">${esc(p.spec)}</h1><p class="lead">${esc(lead)}</p></div>
          <div class="chips">${chip('Community standing', `<span class="st" style="--sc:${SC[standing]}"><i class="dot"></i>${SL[standing]}</span>`)}${chip('Agreement', esc(agreement||'—'))}${chip('Patch 1.18.1', pv.valid_for_1181===false?'Needs re-checking':(pv.valid_for_1181?'Valid':'Unknown'))}${chip('Written for', esc(pv.written_for||'—'))}</div></div>
        <div class="gsec" id="talents"><header><span class="n">01</span><h2 class="h">Talents</h2><span class="r">${esc((y.talents&&y.talents.build_name)||'')}</span></header>
          <div style="display:flex;flex-direction:column;gap:10px">${bar}</div>
          ${pts.length?`<div class="tal">${talRows}</div>`:''}
          <div class="notes">${skip||'<div></div>'}${patchNote}</div>${linkHtml}</div>
        ${lvlHtml}
        <div class="gsec" id="stats"><header><span class="n">${num('stats')}</span><h2 class="h">Stats and caps</h2></header>
          <div class="stats"><div>${prioHtml}${prio.length&&Array.isArray(y.stat_priority)?'<div class="empty">No numeric stat weights are published; the order is the players’ consensus.</div>':''}</div><div>${capHtml}</div></div></div>
        <div class="gsec" id="rotation"><header><span class="n">${num('rotation')}</span><h2 class="h">Rotation</h2>${y.aoe_threshold?`<span class="r">switch to AoE at ${y.aoe_threshold} targets</span>`:''}</header>
          ${openerHtml}
          <div class="rot"><div><small class="mu" style="font-size:12px;display:block;padding-bottom:6px">Single target · use the first that applies</small>${stepHtml}</div><div class="aoe">${aoeHtml}${res}</div></div></div>
        <div class="split">
          <div class="gsec" id="cooldowns"><header><span class="n">${num('cooldowns')}</span><h2 class="h">Cooldowns</h2></header><div class="cdg">${cds}</div></div>
          <div class="gsec" id="dont"><header><span class="n">${num('dont')}</span><h2 class="h">Don't</h2></header><div class="dont">${dont}</div></div>
        </div>
        <div class="gsec" id="sources" style="gap:0"><div class="src"><div class="l"><span class="n" style="font-family:var(--disp);font-size:13px;color:var(--mu);font-weight:600">${num('sources')}</span><b>Sources and evidence</b><span class="mu">${esc(srcLine)}</span></div><button id="srctog" class="mu">Show ↓</button></div><div class="srclist" id="srclist">${srcList}</div></div>
      </div>
    </div></div>` + foot();
}

function matrixPage(){
  const rows = D.rows.filter(r=>r.spec).map(r => { const c=byName[r.class]; const id = c?findPlaybook(c,r):null; return `<tr><td class="c" style="--ac:${c?`var(--c-${c.slug})`:'inherit'}"><a href="#/c/${c?c.slug:''}">${esc(r.class)}</a></td><td>${id?`<a href="#/g/${c.slug}/${id}" style="font-weight:600">${esc(r.spec)}</a>`:esc(r.spec)}</td><td>${ROLE[r.role]||esc(r.role)}</td><td><span class="st" style="--sc:${SC[r.standing]}"><i class="dot"></i>${SL[r.standing]}</span></td><td class="no">${esc(r.agreement||'')}</td><td class="no">${esc(firstSentence(r.notes))}</td></tr>`; }).join('');
  return top('matrix') + `<div class="wrap"><div class="chead" style="border-bottom:0"><div style="display:flex;flex-direction:column;gap:12px"><h1 class="h" style="color:var(--fg);font-size:48px">Spec and role matrix</h1><p>Every class, spec and role the sources rate, with how much the community agrees.</p></div></div>
  <div class="mtx"><table><thead><tr><th>Class</th><th>Spec</th><th>Role</th><th>Standing</th><th>Agreement</th><th>In one line</th></tr></thead><tbody>${rows}</tbody></table></div></div>` + foot();
}
function notFound(){ return top('') + `<div class="wrap" style="padding-block:80px"><h1 class="h">Nothing here</h1><p class="mu"><a href="#/">Back to the classes</a></p></div>`; }

const app = document.getElementById('app');
function route(){
  const h = location.hash.replace(/^#\/?/,''); const parts = h.split('/').filter(Boolean);
  let html, sec=null;
  if(!parts.length) html = home();
  else if(parts[0]==='c') html = classPage(parts[1]);
  else if(parts[0]==='g'){ html = guide(parts[1], parts[2]); sec = parts[3]||null; }
  else if(parts[0]==='matrix') html = matrixPage();
  else html = notFound();
  app.innerHTML = html;
  if(sec){ const el=document.getElementById(sec); if(el) el.scrollIntoView(); } else window.scrollTo(0,0);
  const tog=document.getElementById('srctog'); if(tog) tog.addEventListener('click',()=>{ const l=document.getElementById('srclist'); l.classList.toggle('open'); tog.textContent = l.classList.contains('open')?'Hide ↑':'Show ↓'; });
  const nav=document.getElementById('secnav'); if(nav && 'IntersectionObserver' in window){
    const links=[...nav.querySelectorAll('a')]; const secs=links.map(a=>document.getElementById(a.dataset.sec)).filter(Boolean);
    const io=new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ links.forEach(a=>a.classList.toggle('on', a.dataset.sec===e.target.id)); } }); },{rootMargin:'-20% 0px -70% 0px'});
    secs.forEach(s=>io.observe(s));
  }
}
document.addEventListener('click', e => {
  const b = e.target.closest('button[data-theme-set],button[data-layout]'); if(!b) return;
  if(b.hasAttribute('data-theme-set')){ prefs.theme = b.dataset.themeSet || null; applyTheme(); }
  else prefs.layout = b.dataset.layout;
  savePrefs(); route();
});
window.addEventListener('hashchange', route);
route();
})();
</script>
'''
out = ROOT / 'design/turtle-guides-prototype.html'
out.write_text(HTML.replace('__DATA__', payload), encoding='utf-8')
print('wrote', out, out.stat().st_size, 'bytes')
