#!/usr/bin/env python3
"""Build structured/talents/talent-trees.json and turn playbook builds into working links.

Source of the tree structure: Xian55/tortoise-db-viewer `scripts/data/talents.json`
(extracted from the Turtle 1.18.1 client's Talent.dbc + TalentTab.dbc: 9 classes, 476
talents, rank spell ids, row/column, prerequisites). Talent names come from the viewer's
public API (`https://api.tortoiseclothing.org/s/<rank-1 spell id>`), fetched once into
`structured/talents/spell-names.json`.

Link format of the calculator at https://xian55.github.io/tortoise-db-viewer/?talents=<class>&t=<tree1>-<tree2>-<tree3>
where each tree segment has one digit per talent in the tree's talent order (the order of
`tabs[].talents[]` in talent-trees.json), value = ranks taken; trailing zeros may be omitted.

Usage:
  python3 scrape/talents/build_trees.py trees   <viewer-talents.json> <spell-names.json>   # writes structured/talents/talent-trees.json
  python3 scrape/talents/build_trees.py link    <class> "Shield Slam=1,Defiance=5,..."       # prints a link
  python3 scrape/talents/build_trees.py fill                                                 # fills spell_id + build_link_tortoise in structured/classes/*/*.yaml
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TREES = os.path.join(ROOT, "structured", "talents", "talent-trees.json")
VIEWER = "https://xian55.github.io/tortoise-db-viewer/"

TREE_ALIASES = {
    "feral": "feral combat", "feral combat": "feral combat", "beast mastery": "beast mastery", "bm": "beast mastery",
    "marksmanship": "marksmanship", "mm": "marksmanship", "survival": "survival", "sv": "survival",
    "prot": "protection", "ret": "retribution", "resto": "restoration", "ele": "elemental", "enh": "enhancement",
    "disc": "discipline", "sub": "subtlety", "assa": "assassination", "demo": "demonology", "destro": "destruction",
    "aff": "affliction", "affli": "affliction",
}


def norm(s):
    return re.sub(r"[^a-z0-9]+", " ", (s or "").lower().replace("’", "'")).strip()


def build_trees(viewer_path, names_path):
    v = json.load(open(viewer_path))
    names = json.load(open(names_path))
    out = {"source": {"structure": "Xian55/tortoise-db-viewer scripts/data/talents.json (Turtle 1.18.1 client Talent.dbc)",
                      "names": "api.tortoiseclothing.org /s/<spell id>", "link_format": VIEWER + "?talents=<class>&t=<digits per tree, dash separated>"},
           "max_points": v.get("maxPoints", 51), "classes": {}}
    missing = 0
    for cls, c in v["classes"].items():
        tabs = []
        for tab in sorted(c["tabs"], key=lambda t: t["order"]):
            talents = []
            for t in tab["talents"]:
                n = names.get(str(t["ranks"][0])) or {}
                if not n.get("name"):
                    missing += 1
                talents.append({
                    "talent_id": t["id"], "name": n.get("name"), "icon": n.get("icon"), "row": t["row"], "col": t["col"],
                    "max_rank": len(t["ranks"]), "rank_spell_ids": t["ranks"], "requires_talent_id": t.get("req"), "requires_rank": t.get("reqRank"),
                    "description_rank1": n.get("description"),
                })
            tabs.append({"tab_id": tab["id"], "name": tab["name"], "order": tab["order"], "talents": talents})
        out["classes"][cls] = {"name": c["name"], "tabs": tabs}
    os.makedirs(os.path.dirname(TREES), exist_ok=True)
    json.dump(out, open(TREES, "w"), indent=1, ensure_ascii=False)
    n = sum(len(t["talents"]) for c in out["classes"].values() for t in c["tabs"])
    print("wrote", os.path.relpath(TREES, ROOT), "talents=%d unnamed=%d" % (n, missing))


def load_trees():
    return json.load(open(TREES))["classes"]


def find_talent(cls_trees, name, tree_hint=None):
    """Return (tab_index, talent_index, talent) for a talent name; tree_hint narrows ties."""
    key = norm(name)
    hits = []
    for ti, tab in enumerate(cls_trees["tabs"]):
        for i, t in enumerate(tab["talents"]):
            if norm(t["name"]) == key:
                hits.append((ti, i, t))
    if not hits:
        # tolerate abbreviations like "Imp. Shield Slam" and "One-Handed Weapon Spec."
        key2 = key.replace("imp ", "improved ").replace(" spec", " specialization")
        for ti, tab in enumerate(cls_trees["tabs"]):
            for i, t in enumerate(tab["talents"]):
                nt = norm(t["name"])
                if nt == key2 or (len(key) > 8 and nt.startswith(key)):
                    hits.append((ti, i, t))
    if len(hits) > 1 and tree_hint:
        th = TREE_ALIASES.get(norm(tree_hint), norm(tree_hint))
        hits2 = [h for h in hits if norm(cls_trees["tabs"][h[0]]["name"]) == th]
        if hits2:
            hits = hits2
    return hits[0] if hits else None


def encode_link(cls, points, trees=None):
    """points: iterable of (tree, talent name, rank). Returns (url, unmatched list, per-tree totals)."""
    trees = trees or load_trees()
    ct = trees[cls]
    digits = [[0] * len(tab["talents"]) for tab in ct["tabs"]]
    unmatched, totals = [], []
    for tree, name, rank in points:
        try:
            r = int(str(rank).split("-")[0].split("/")[0])
        except Exception:
            r = 0
        if r <= 0:
            continue
        hit = find_talent(ct, name, tree)
        if not hit:
            unmatched.append(name)
            continue
        ti, i, t = hit
        digits[ti][i] = min(r, t["max_rank"])
    segs = ["".join(str(d) for d in row).rstrip("0") for row in digits]
    while segs and segs[-1] == "":
        segs.pop()
    totals = [sum(row) for row in digits]
    return "%s?talents=%s&t=%s" % (VIEWER, cls, "-".join(segs)), unmatched, totals


def fill_playbooks():
    import yaml
    trees = load_trees()
    n_files = n_ids = n_links = 0
    unmatched_all = {}
    for cls in trees:
        d = os.path.join(ROOT, "structured", "classes", cls)
        if not os.path.isdir(d):
            continue
        for fn in sorted(os.listdir(d)):
            if not fn.endswith(".yaml") or fn in ("gear.yaml", "leveling.yaml"):
                continue
            p = os.path.join(d, fn)
            text = open(p, encoding="utf-8").read()
            y = yaml.safe_load(text)
            tal = (y or {}).get("talents") or {}
            pts = tal.get("points") or []
            if not pts:
                continue
            changed = False
            for pt in pts:
                hit = find_talent(trees[cls], pt.get("talent") or "", pt.get("tree"))
                if hit:
                    t = hit[2]
                    rank = pt.get("rank")
                    try:
                        r = max(1, min(int(str(rank).split("-")[0].split("/")[0]), t["max_rank"]))
                    except Exception:
                        r = 1
                    sid = t["rank_spell_ids"][r - 1]
                    if pt.get("spell_id") != sid:
                        pt["spell_id"] = sid
                        pt["talent_id"] = t["talent_id"]
                        changed = True
                        n_ids += 1
                else:
                    unmatched_all.setdefault(cls, set()).add(pt.get("talent"))
            url, unmatched, totals = encode_link(cls, [(pt.get("tree"), pt.get("talent"), pt.get("rank")) for pt in pts], trees)
            if sum(totals) > 0 and tal.get("build_link_tortoise") != url:
                tal["build_link_tortoise"] = url
                tal["build_link_tortoise_note"] = ("Generated from the sourced points list (%d points: %s); the calculator shows the remaining points unassigned. Prerequisite rows the sources skipped may be flagged by the calculator."
                                                   % (sum(totals), ", ".join("%s %d" % (trees[cls]["tabs"][i]["name"], n) for i, n in enumerate(totals) if n)))
                changed = True
                n_links += 1
            if changed:
                with open(p, "w", encoding="utf-8") as fh:
                    yaml.safe_dump(y, fh, sort_keys=False, allow_unicode=True, width=120)
                n_files += 1
    print("files updated=%d spell_ids set=%d links=%d" % (n_files, n_ids, n_links))
    for cls, names in sorted(unmatched_all.items()):
        print("unmatched", cls, sorted(n for n in names if n))


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(2)
    cmd = sys.argv[1]
    if cmd == "trees":
        build_trees(sys.argv[2], sys.argv[3])
    elif cmd == "link":
        cls = sys.argv[2].lower()
        pts = []
        for item in sys.argv[3].split(","):
            name, _, rank = item.partition("=")
            pts.append((None, name.strip(), rank or 1))
        url, unmatched, totals = encode_link(cls, pts)
        print(url)
        if unmatched:
            print("unmatched:", unmatched)
    elif cmd == "fill":
        fill_playbooks()
    else:
        print(__doc__)
        sys.exit(2)


if __name__ == "__main__":
    main()
