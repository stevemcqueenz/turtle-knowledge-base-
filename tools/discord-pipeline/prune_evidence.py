"""Keep only evidence records cited by published content (guide/ structured/ synthesis/ behavior/).
collect_evidence.py merges into existing files, so run this after it. Run from the repo root."""
import re, os, json, glob
CITE = re.compile(r"\[\[d:([A-Za-z0-9_.-]+)#(\d+)\]\]")
used = set()
for root in ["guide", "structured", "synthesis", "behavior"]:
    for dp, _, fns in os.walk(root):
        for fn in fns:
            p = os.path.join(dp, fn)
            if "structured/discord/evidence-" in p:
                continue
            try:
                used.update(CITE.findall(open(p, encoding="utf-8", errors="ignore").read()))
            except OSError:
                pass
kept = 0
for f in glob.glob("structured/discord/evidence-*.jsonl"):
    ch = os.path.basename(f)[len("evidence-"):-len(".jsonl")]
    keep = [l for l in open(f) if l.strip() and (ch, str(json.loads(l)["id"])) in used]
    open(f, "w").writelines(keep)
    kept += len(keep)
print("cited", len(used), "kept", kept)
