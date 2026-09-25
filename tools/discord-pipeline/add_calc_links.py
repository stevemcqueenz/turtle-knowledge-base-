"""Append a working calculator link after every `talents.turtlecraft.gg/<cls>?points=<code>` code span
that is not already followed by a xian55 link. usage: add_calc_links.py <guide/classes dir> <class>..."""
import re, subprocess, sys, glob
root, classes = sys.argv[1], sys.argv[2:]
cache = {}
def link(cls, code):
    if (cls, code) not in cache:
        out = subprocess.run(["python3", "/home/agent/work/turtle-discord/pipeline2/talent_tool.py", "decode", cls, code],
                             capture_output=True, text=True).stdout
        m = re.search(r"calculator\s*:\s*(\S+)", out)
        cache[(cls, code)] = m.group(1) if (m and "\nVALID" in out and "UNMATCHED" not in out) else None
        if not cache[(cls, code)]: print("SKIP (not valid)", cls, code)
    return cache[(cls, code)]
added = 0
for cls in classes:
    for f in sorted(glob.glob(f"{root}/{cls}/*.md")):
        s = open(f).read()
        def rep(m):
            global added
            span, c, code = m.group(0), m.group(1), m.group(2)
            rest = s[m.end():m.end()+400]
            if re.match(r"[^\n]{0,300}xian55\.github\.io", rest): return span
            u = link(c, code)
            if not u: return span
            added += 1
            return f"{span} ([Open in talent calculator]({u}))"
        s2 = re.sub(r"`talents\.turtlecraft\.gg/([a-z]+)\?points=([A-Za-z0-9_-]+)`", rep, s)
        if s2 != s: open(f, "w").write(s2)
print("links added:", added)
