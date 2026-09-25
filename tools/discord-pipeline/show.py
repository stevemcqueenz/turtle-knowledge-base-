"""print cited messages: show.py <channel> <id> [<id>...]"""
import json,sys
ch=sys.argv[1]; ids=set(sys.argv[2:])
for l in open(f'/home/agent/work/turtle-discord/norm/{ch}/messages.jsonl'):
    i=l[8:40].split('"')[0]
    if i in ids:
        m=json.loads(l); print(f"[{m['id']}] {m['ts'][:10]} {m['author']}: {m['content'][:600]}\n")
