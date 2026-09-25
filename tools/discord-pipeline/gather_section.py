"""Concatenate one H2 section (by heading prefix) from all notes files.
usage: gather_section.py "Dungeons & raids" out.md [channel ...]"""
import sys,glob,os,re
head=sys.argv[1]; out=sys.argv[2]; chans=sys.argv[3:]
B='/home/agent/work/turtle-discord/notes'
parts=[]
for f in sorted(glob.glob(f'{B}/*/*.md')):
    ch=f.split('/')[-2]
    if chans and ch not in chans: continue
    t=open(f).read()
    m=re.search(r'^## '+re.escape(head)+r'.*?$(.*?)(?=^## |\Z)',t,re.M|re.S)
    if m and m.group(1).strip():
        parts.append(f'\n### from {ch}/{os.path.basename(f)}\n{m.group(1).strip()}\n')
open(out,'w').write(f'# Gathered section: {head}\n'+''.join(parts))
print(out,len(parts),'sections',sum(len(p) for p in parts),'bytes')
