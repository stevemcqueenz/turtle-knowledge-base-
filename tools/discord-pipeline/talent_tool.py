#!/usr/bin/env python3
"""Validate Turtle WoW 1.18.1 talent builds and leveling orders; print calculator codes.

  talent_tool.py tree  <class>                 list the 1.18.1 tree (tab/row/col/talent/max/req)
  talent_tool.py build <class> <file|->        validate a build; file lines: "Tree: Talent = N"
                                               (or "Talent = N"; name must be unique in class)
  talent_tool.py level <class> <file|->        validate a leveling order; file lines:
                                               "<level> Talent" or "<level> Talent +N"
                                               (one point per level from 10; +N only for
                                               respec/bulk rows written as "respec" first)
  talent_tool.py decode <class> <code>         decode a calculator code (any known format)

Leveling file: one line per talent point, e.g.
  10 Deflection
  11 Deflection
  ...
A line "respec" resets all points (a later level can then list many points at once).
Output: per-tree split, validation result, and codes (b36_pair = talents.turtlecraft.gg/<class>/<code>
path form; tree_b64 = talents.turtlecraft.gg/<class>?points=<code> / talent-builder.dev form).
"""
import sys, re, yaml
from pathlib import Path

sys.path.insert(0, "/home/agent/work/turtle-discord/staging/talents")
import talent_codec as tc  # noqa: E402

KB = Path("/home/agent/work/turtle-discord/kb")


def load(cls):
    d = yaml.safe_load(open(KB / "structured/talents" / f"{cls}.yaml"))
    tabs = sorted(d["tabs"], key=lambda t: t.get("order", 0))
    return tabs


def index(tabs):
    by = {}
    for ti, t in enumerate(tabs):
        for j, tal in enumerate(t["talents"]):
            by.setdefault(tc.normalise(tal["name"]), []).append((ti, j))
            by.setdefault(tc.normalise(t["name"]) + "|" + tc.normalise(tal["name"]), []).append((ti, j))
    return by


def find(tabs, by, name):
    if ":" in name:
        tree, tal = name.split(":", 1)
        key = tc.normalise(tree) + "|" + tc.normalise(tal)
        hits = by.get(key)
        if not hits:  # allow tree prefix match (e.g. "Feral")
            hits = [(ti, j) for ti, t in enumerate(tabs) if tc.normalise(t["name"]).startswith(tc.normalise(tree))
                    for j, x in enumerate(t["talents"]) if tc.normalise(x["name"]) == tc.normalise(tal)]
    else:
        hits = by.get(tc.normalise(name))
    if not hits:
        raise SystemExit(f"ERROR unknown talent: {name!r} (use `tree` to list names)")
    if len(set(hits)) > 1:
        raise SystemExit(f"ERROR ambiguous talent {name!r}: prefix it with the tree, e.g. 'Tree: {name}'")
    return hits[0]


def row_ok(tabs, ranks, ti, j):
    tal = tabs[ti]["talents"][j]
    above = sum(r for r, t in zip(ranks[ti], tabs[ti]["talents"]) if t["row"] < tal["row"])
    return above >= 5 * tal["row"], above


def req_ok(tabs, ranks, ti, j):
    tal = tabs[ti]["talents"][j]
    if not tal.get("req"):
        return True, None
    for k, t in enumerate(tabs[ti]["talents"]):
        if t.get("id") == tal["req"]:
            return ranks[ti][k] >= (tal.get("req_rank") or t["max_rank"]), t["name"]
    return False, str(tal["req"])


def report(cls, tabs, ranks):
    ok, total, reasons = tc.validate(ranks, tabs)
    split = "/".join(str(sum(r)) for r in ranks)
    print(f"split {split} ({'/'.join(t['name'] for t in tabs)}), total {total}")
    for ti, t in enumerate(tabs):
        for r, tal in zip(ranks[ti], t["talents"]):
            if r:
                sid = (tal.get("ranks") or [None] * r)[r - 1] if r <= len(tal.get("ranks") or []) else None
                print(f"  {t['name']:14} r{tal['row']}c{tal['col']} {tal['name']:34} {r}/{tal['max_rank']}  spell_id={sid} talent_id={tal.get('id')}")
    print("VALID" if ok else "INVALID: " + "; ".join(reasons))
    try:
        sys.path.insert(0, "/home/agent/work/turtle-discord/kb-integrate/scrape/talents")
        import build_trees as bt
        pts = [(t["name"], tal["name"], r) for t, rr in zip(tabs, ranks) for r, tal in zip(rr, t["talents"]) if r]
        url, unmatched, totals = bt.encode_link(cls, pts)
        print("calculator    :", url, ("UNMATCHED " + ", ".join(unmatched)) if unmatched else "")
        if sum(totals) != sum(map(sum, ranks)):
            print("WARNING calculator link totals", totals, "differ from build")
    except Exception as e:
        print("calculator    : n/a", e)
    try:
        print("code b36_pair :", tc.encode_b36_pair(ranks))
    except Exception as e:
        print("code b36_pair : n/a", e)
    try:
        print("code tree_b64 :", tc.encode(ranks, "tree_b64", tabs))
    except Exception as e:
        print("code tree_b64 : n/a", e)
    return ok


def lines_of(src):
    txt = sys.stdin.read() if src == "-" else open(src).read()
    return [l.split("#")[0].strip() for l in txt.splitlines() if l.split("#")[0].strip()]


def cmd_tree(cls):
    tabs = load(cls)
    for t in tabs:
        print(f"== {t['name']}")
        for tal in sorted(t["talents"], key=lambda x: (x["row"], x["col"])):
            req = ""
            if tal.get("req"):
                rn = next((x["name"] for x in t["talents"] if x.get("id") == tal["req"]), tal["req"])
                req = f"  requires {rn} {tal.get('req_rank')}"
            print(f"  row{tal['row']} col{tal['col']}  {tal['name']}  max {tal['max_rank']}{req}")


def cmd_build(cls, src):
    tabs = load(cls); by = index(tabs)
    ranks = [[0] * len(t["talents"]) for t in tabs]
    for l in lines_of(src):
        m = re.match(r"(.+?)\s*[=:]\s*(\d+)\s*$", l) if "=" in l else re.match(r"(.+?)\s+(\d+)\s*$", l)
        if not m:
            raise SystemExit(f"ERROR cannot parse line: {l!r}")
        ti, j = find(tabs, by, m.group(1).strip())
        ranks[ti][j] = int(m.group(2))
    return 0 if report(cls, tabs, ranks) else 1


def cmd_level(cls, src):
    tabs = load(cls); by = index(tabs)
    ranks = [[0] * len(t["talents"]) for t in tabs]
    errs = []; last = 9; spent = 0; respec = False
    for l in lines_of(src):
        if l.lower().startswith("respec"):
            ranks = [[0] * len(t["talents"]) for t in tabs]; spent = 0; respec = True
            continue
        m = re.match(r"(\d+)\s+(.+?)(?:\s+\+(\d+))?\s*$", l)
        if not m:
            raise SystemExit(f"ERROR cannot parse line: {l!r}")
        lvl, name, n = int(m.group(1)), m.group(2), int(m.group(3) or 1)
        ti, j = find(tabs, by, name)
        tal = tabs[ti]["talents"][j]
        for _ in range(n):
            if lvl < last:
                errs.append(f"L{lvl} {tal['name']}: level goes backwards")
            last = lvl
            if spent + 1 > lvl - 9:
                errs.append(f"L{lvl} {tal['name']}: point #{spent + 1} not available until level {spent + 10}")
            ok, above = row_ok(tabs, ranks, ti, j)
            if not ok:
                errs.append(f"L{lvl} {tal['name']}: row {tal['row']} needs {5 * tal['row']} points in {tabs[ti]['name']}, have {above}")
            rq, rn = req_ok(tabs, ranks, ti, j)
            if not rq:
                errs.append(f"L{lvl} {tal['name']}: requires {rn} maxed first")
            if ranks[ti][j] + 1 > tal["max_rank"]:
                errs.append(f"L{lvl} {tal['name']}: exceeds max rank {tal['max_rank']}")
            ranks[ti][j] += 1; spent += 1
    print(f"points placed: {spent} (last level {last})" + (" [after respec]" if respec else ""))
    for e in errs:
        print("ERROR", e)
    ok = report(cls, tabs, ranks)
    return 0 if (ok and not errs) else 1


def cmd_decode(cls, code):
    tabs = load(cls)
    fmt = tc.classify(code)
    ranks, notes = tc.decode(code, fmt, tabs)
    print("format", fmt, "(decoded against 1.18.1 trees; old b36/wowhead codes may be era-shifted)", notes or "")
    report(cls, tabs, ranks)


if __name__ == "__main__":
    a = sys.argv[1:]
    if not a or a[0] in ("-h", "--help"):
        print(__doc__); sys.exit(0)
    fn = {"tree": cmd_tree, "build": cmd_build, "level": cmd_level, "decode": cmd_decode}[a[0]]
    sys.exit(fn(*a[1:]) or 0)
