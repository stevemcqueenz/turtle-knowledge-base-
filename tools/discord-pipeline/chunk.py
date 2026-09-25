"""Build compact reading chunks for reader agents.
full:       every message >= 2025-10-03 (1.18.1 announced + post)
highlights: 2024-11-01..2025-10-02 messages that are pinned, reactions>=3, or >=350 chars; plus all-time pinned
"""
import json, os, re, sys
BASE='/home/agent/work/turtle-discord'
OUT=f'{BASE}/read'
URL=re.compile(r'https?://\S+')
TARGET=int(os.environ.get("TARGET","480000"))
CLASSES=['warrior','paladin','hunter','rogue','priest','shaman','mage','warlock','druid']

def fmt(m):
    t=(m.get('content') or '').replace('\r','').strip()
    t=re.sub(r'\n+',' ⏎ ',t)
    extra=''
    if m.get('reply_to'): extra+=f' ↩{m["reply_to"]}'
    if m.get('attachments'): extra+=f' 📎{len(m["attachments"])}'
    if m.get('reactions'): extra+=f' +{m["reactions"]}'
    if m.get('pinned'): extra+=' 📌PINNED'
    return (m["ts"][:10], f'[{m["id"]}] {m["author"]}{extra}: {t}\n')

REPLIED=set()
def keep_full(m):
    t=URL.sub('',m.get('content') or '').strip()
    if len(t)>=50 or m.get('pinned'): return True
    if len(t)>=12 and (m.get('reply_to') or m['id'] in REPLIED or m.get('reactions',0)>=2): return True
    return bool(m.get('attachments')) and (m.get('reactions',0)>=2 or m.get('pinned'))

def write_chunks(ch, kind, lines, manifest):
    os.makedirs(f'{OUT}/{ch}',exist_ok=True)
    buf=[];size=0;n=0;cur=None;days=[]
    def flush():
        nonlocal buf,size,n
        if not buf: return
        p=f'{OUT}/{ch}/{kind}-{n:03d}.md'
        first=days[0]; last=days[-1]
        with open(p,'w') as f:
            f.write(f'# #{ch} {kind} chunk {n:03d}  ({first} .. {last})\n')
            f.write('# line format (under ## date headers): [message_id] author [↩reply_to_id] [📎attachments] [+reactions] [📌PINNED]: text  (⏎ = newline)\n\n')
            f.writelines(buf)
        manifest.append({'channel':ch,'kind':kind,'path':p,'from':first,'to':last,'bytes':size,'lines':len(buf)})
        buf=[];size=0;n+=1;days.clear()
    nonlocal_cur=[None]
    for d,l in lines:
        if not buf or nonlocal_cur[0]!=d:
            h=f'\n## {d}\n'; buf.append(h); size+=len(h); nonlocal_cur[0]=d; days.append(d)
        buf.append(l); size+=len(l.encode())
        if size>=TARGET: flush()
    flush()

manifest=[]
for ch in CLASSES+['pvp-general']:
    full=[];hl=[]
    REPLIED.clear()
    for l in open(f'{BASE}/norm/{ch}/messages.jsonl'):
        r=json.loads(l).get('reply_to')
        if r: REPLIED.add(r)
    for l in open(f'{BASE}/norm/{ch}/messages.jsonl'):
        m=json.loads(l)
        if m.get('is_bot'): continue
        d=m['ts'][:10]
        if d>='2025-10-03':
            if keep_full(m): full.append(fmt(m))
        elif m.get('pinned') or ('2024-11-01'<=d and (m.get('reactions',0)>=3 or len(m.get('content') or '')>=350)):
            hl.append(fmt(m))
    write_chunks(ch,'full',full,manifest)
    if ch!='pvp-general': write_chunks(ch,'hl',hl,manifest)
json.dump(manifest,open(f'{OUT}/manifest.json','w'),indent=1)
from collections import Counter
c=Counter((x['channel'],x['kind']) for x in manifest)
for k,v in sorted(c.items()): print(k,v)
print('total chunks',len(manifest), 'MB', sum(x['bytes'] for x in manifest)/1e6)
