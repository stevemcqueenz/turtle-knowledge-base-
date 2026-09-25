"""Emit claim/citation pairs for QA.  usage: cite_pairs.py <guide dir or files...> > pairs.md
Each unit = one bullet/paragraph/table row containing [[d:..]] cites, followed by the cited messages."""
import json,re,sys,os,glob
B='/home/agent/work/turtle-discord'
CITE=re.compile(r'\[\[d:([a-z-]+)#(\d+)\]\]')
files=[]
for a in sys.argv[1:]:
    files+= sorted(glob.glob(a+'/*.md')) if os.path.isdir(a) else [a]
units=[]; need={}
for f in files:
    for n,block in enumerate(re.split(r'\n(?=\s*[-*|]|\s*\d+\.|\n)',open(f).read())):
        cs=CITE.findall(block)
        if cs:
            units.append((f,block.strip(),cs))
            for ch,i in cs: need.setdefault(ch,set()).add(i)
msg={}
for ch,ids in need.items():
    for l in open(f'{B}/norm/{ch}/messages.jsonl'):
        i=l[8:40].split('"')[0]
        if i in ids:
            m=json.loads(l); msg[(ch,i)]=f"{m['ts'][:10]} {m['author']}: {(m['content'] or '')[:1200]}"
for k,(f,b,cs) in enumerate(units):
    print(f"=== U{k} {os.path.relpath(f,B+'/kb')}\nCLAIM: {b[:1500]}")
    for ch,i in dict.fromkeys(cs):
        print(f"  [{ch}#{i}] {msg.get((ch,i),'MISSING')}")
    print()
