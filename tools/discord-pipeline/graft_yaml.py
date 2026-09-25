#!/usr/bin/env python3
"""Resolve class-YAML merge conflicts in kb-integrate.

For every structured/classes/<class>/*.yaml in kb-integrate:
  - base = the writer's version from kb/ (discord-enrichment working tree, new guide-backed content)
  - graft GitHub-only keys from github/main when the writer's version lacks them:
      stat_priority, stat_priority_note  (curated sourced gearing order used by the site)
  - talents.build_link_tortoise(+_note) are NOT copied: regenerate afterwards with
      (cd kb-integrate && python3 scrape/talents/build_trees.py fill)
Files that exist only on GitHub (gear.yaml, leveling yamls) are left as they are.
Prints a report; --dry-run writes nothing.
"""
import os, subprocess, sys, yaml

BASE = "/home/agent/work/turtle-discord"
SRC = f"{BASE}/kb/structured/classes"
DST = f"{BASE}/kb-integrate/structured/classes"
GRAFT = ["stat_priority", "stat_priority_note"]
dry = "--dry-run" in sys.argv


def gh(path):
    r = subprocess.run(["git", "-C", f"{BASE}/kb-integrate", "show", f"github/main:{path}"],
                       capture_output=True, text=True)
    return yaml.safe_load(r.stdout) if r.returncode == 0 else None


n = 0
for cls in sorted(os.listdir(SRC)):
    d = os.path.join(SRC, cls)
    if not os.path.isdir(d):
        continue
    for fn in sorted(os.listdir(d)):
        if not fn.endswith(".yaml"):
            continue
        rel = f"structured/classes/{cls}/{fn}"
        mine = yaml.safe_load(open(os.path.join(d, fn)))
        theirs = gh(rel)
        grafted = []
        if isinstance(mine, dict) and isinstance(theirs, dict):
            for k in GRAFT:
                if k not in mine and k in theirs:
                    mine[k] = theirs[k]
                    grafted.append(k)
        n += 1
        print(f"{rel}: grafted={grafted or '-'}")
        if not dry:
            os.makedirs(os.path.join(DST, cls), exist_ok=True)
            with open(os.path.join(DST, cls, fn), "w") as f:
                yaml.safe_dump(mine, f, sort_keys=False, allow_unicode=True, width=110)
            subprocess.run(["git", "-C", f"{BASE}/kb-integrate", "add", rel])
print(f"{n} files {'checked' if dry else 'written+staged'}")
