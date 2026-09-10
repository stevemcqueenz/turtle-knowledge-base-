#!/usr/bin/env python3
"""Split structured/forum/posts/f<id>.jsonl files larger than 40 MB into f<id>.partN.jsonl parts
(GitHub rejects files over 100 MB). extract.py keeps appending to f<id>.jsonl; readers glob posts/*.jsonl."""
import glob, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(ROOT, "structured", "forum", "posts")
LIMIT = 40 * 1024 * 1024
for f in sorted(glob.glob(os.path.join(D, "f*.jsonl"))):
    base = os.path.basename(f)
    if ".part" in base or os.path.getsize(f) <= LIMIT:
        continue
    stem = base[:-6]
    n = len(glob.glob(os.path.join(D, stem + ".part*.jsonl")))
    out, size = None, 0
    with open(f) as src:
        for line in src:
            if out is None or size > LIMIT:
                if out: out.close()
                n += 1
                out = open(os.path.join(D, "%s.part%d.jsonl" % (stem, n)), "w"); size = 0
            out.write(line); size += len(line)
    if out: out.close()
    os.remove(f)
    print("split", base, "into", n, "parts")
