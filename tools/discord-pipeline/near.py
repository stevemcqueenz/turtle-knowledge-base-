"""near.py <channel> <id> [n] -- print n messages before/after a message id"""
import json,sys
ch,i=sys.argv[1],sys.argv[2]; n=int(sys.argv[3]) if len(sys.argv)>3 else 8
L=open(f'/home/agent/work/turtle-discord/norm/{ch}/messages.jsonl').readlines()
idx=next(k for k,l in enumerate(L) if l[8:40].split('"')[0]==i)
for l in L[max(0,idx-n):idx+n+1]:
    m=json.loads(l); mark='>>' if m['id']==i else '  '
    print(f"{mark}[{m['id']}] {m['ts'][:16]} {m['author']}{' ↩'+m['reply_to'] if m.get('reply_to') else ''}: {(m['content'] or '')[:500]}")
