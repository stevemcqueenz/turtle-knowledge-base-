#!/usr/bin/env python3
"""Validate synthesis deliverables: citations resolve, data files parse, required sections exist.

Usage: python3 scrape/validate.py [paths...]   (default: synthesis/ structured/ behavior/)
Checks
  - every forum.turtlecraft.gg viewtopic.php?p=<id> citation resolves to a post in structured/forum/posts/*.jsonl
  - every viewtopic.php?t=<id> citation resolves to a topic in structured/forum/topics.jsonl
  - every .yaml/.yml parses with PyYAML; every .jsonl parses line by line; every .json parses
  - playbooks contain the mandatory headings
Exit code 1 if anything fails; prints a summary.
"""
import glob
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PLAYBOOK_HEADINGS = ["Overview", "Talent build", "Stat priority", "Single-target rotation", "Multi-target", "Cooldowns", "Role strategy", "Gear", "Common mistakes", "Sources"]


def load_ids():
    posts, topics = set(), set()
    for f in glob.glob(os.path.join(ROOT, "structured", "forum", "posts", "*.jsonl")):
        for line in open(f):
            if line.strip():
                posts.add(json.loads(line)["post_id"])
    tp = os.path.join(ROOT, "structured", "forum", "topics.jsonl")
    if os.path.exists(tp):
        for line in open(tp):
            if line.strip():
                topics.add(json.loads(line)["topic_id"])
    return posts, topics


def main():
    paths = sys.argv[1:] or ["synthesis", "structured", "behavior"]
    posts, topics = load_ids()
    files = []
    for p in paths:
        p = os.path.join(ROOT, p)
        if os.path.isdir(p):
            for dp, _, fns in os.walk(p):
                files += [os.path.join(dp, x) for x in fns]
        elif os.path.exists(p):
            files.append(p)
    bad = 0
    n_cites = 0
    unresolved = {}
    for f in sorted(files):
        rel = os.path.relpath(f, ROOT)
        if "structured/forum/posts" in rel or rel.endswith("_aliases.json"):
            continue
        try:
            text = open(f, encoding="utf-8").read()
        except Exception as e:
            print("READ FAIL", rel, e)
            bad += 1
            continue
        if f.endswith((".yaml", ".yml")):
            try:
                import yaml
                yaml.safe_load(text)
            except Exception as e:
                print("YAML FAIL", rel, str(e)[:120])
                bad += 1
        elif f.endswith(".jsonl"):
            for i, line in enumerate(text.splitlines(), 1):
                if line.strip():
                    try:
                        json.loads(line)
                    except Exception as e:
                        print("JSONL FAIL", rel, "line", i, str(e)[:80])
                        bad += 1
                        break
        elif f.endswith(".json"):
            try:
                json.loads(text)
            except Exception as e:
                print("JSON FAIL", rel, str(e)[:80])
                bad += 1
        for m in re.finditer(r"forum\.turtlecraft\.gg/viewtopic\.php\?(?:[^\s\"')>]*?)\bp=(\d+)", text):
            n_cites += 1
            pid = int(m.group(1))
            if pid not in posts:
                unresolved.setdefault(rel, set()).add("p=%d" % pid)
        for m in re.finditer(r"forum\.turtlecraft\.gg/viewtopic\.php\?(?:[^\s\"')>]*?)\bt=(\d+)", text):
            n_cites += 1
            tid = int(m.group(1))
            if tid not in topics:
                unresolved.setdefault(rel, set()).add("t=%d" % tid)
        mrole = re.search(r"synthesis/classes/[a-z]+/[a-z]+-(tank|healer|melee-dps|ranged-dps|pvp)\.md$", rel)
        if mrole:
            role = mrole.group(1)
            need = PLAYBOOK_HEADINGS
            if role == "healer":
                need = [h for h in PLAYBOOK_HEADINGS if h not in ("Single-target rotation", "Multi-target")]
            elif role == "pvp":
                need = ["Overview", "Talent build", "Sources"]
            missing = [h for h in need if not re.search(r"^#+\s*.*%s" % re.escape(h), text, re.M | re.I)]
            if missing:
                print("PLAYBOOK missing headings", rel, missing)
                bad += 1
    for rel, ids in sorted(unresolved.items()):
        print("UNRESOLVED", rel, sorted(ids)[:15], "(+%d)" % (len(ids) - 15) if len(ids) > 15 else "")
    tot_unres = sum(len(v) for v in unresolved.values())
    print("files=%d citations=%d unresolved=%d other_failures=%d" % (len(files), n_cites, tot_unres, bad))
    sys.exit(1 if (bad or tot_unres) else 0)


if __name__ == "__main__":
    main()
