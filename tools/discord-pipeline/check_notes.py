"""Check [[d:ch#id]] citations in notes/ resolve to norm/<ch>/messages.jsonl. usage: check_notes.py [files]"""
import json,re,sys,glob,os
B='/home/agent/work/turtle-discord'
files=sys.argv[1:] or glob.glob(f'{B}/notes/*/*.md')
cites={}
for f in files:
    for ch,i in re.findall(r'\[\[d:([a-z-]+)#(\d+)\]\]',open(f).read()):
        cites.setdefault(ch,{}).setdefault(i,set()).add(f)
bad=0;tot=0
for ch,ids in cites.items():
    have=set()
    for l in open(f'{B}/norm/{ch}/messages.jsonl'):
        i=l[8:40].split('"')[0]
        if i in ids: have.add(i)
    for i,fs in ids.items():
        tot+=1
        if i not in have: bad+=1; print('BAD',ch,i,sorted(os.path.basename(x) for x in fs))
print(f'files={len(files)} cites={tot} bad={bad}')
