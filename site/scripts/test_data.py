#!/usr/bin/env python3
"""Acceptance tests for site/src/data/*.json (PLAN.md §5).

Run after build-data.py:
    python3 scripts/test_data.py

Exits non-zero (and prints every failure) if any assertion fails.
"""
from __future__ import annotations

import glob
import json
import sys
from pathlib import Path

import yaml

SCRIPT_DIR = Path(__file__).resolve().parent
SITE_DIR = SCRIPT_DIR.parent
REPO_ROOT = SITE_DIR.parent
DATA_DIR = SITE_DIR / "src" / "data"

failures: list[str] = []


def check(condition: bool, message: str) -> None:
    if not condition:
        failures.append(message)


def load_json(name: str):
    path = DATA_DIR / name
    try:
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        failures.append(f"{name} failed to parse: {e}")
        return None


def main() -> int:
    # ---- All JSON files parse -------------------------------------------
    classes = load_json("classes.json")
    matrix = load_json("matrix.json")
    glossary = load_json("glossary.json")
    meta = load_json("meta.json")

    if classes is None or matrix is None or glossary is None or meta is None:
        print("FATAL: one or more JSON files did not parse; aborting further checks.")
        for f in failures:
            print(f" - {f}")
        return 1

    # ---- Acceptance counts (PLAN.md §5.1) --------------------------------
    check(len(classes) == 9, f"expected 9 classes, got {len(classes)}")

    expected_playbook_files = glob.glob(
        str(REPO_ROOT / "synthesis" / "classes" / "*" /
            "*-tank.md")
    ) + glob.glob(
        str(REPO_ROOT / "synthesis" / "classes" / "*" / "*-healer.md")
    ) + glob.glob(
        str(REPO_ROOT / "synthesis" / "classes" / "*" / "*-melee-dps.md")
    ) + glob.glob(
        str(REPO_ROOT / "synthesis" / "classes" / "*" / "*-ranged-dps.md")
    ) + glob.glob(
        str(REPO_ROOT / "synthesis" / "classes" / "*" / "*-pvp.md")
    )
    expected_playbook_count = len(expected_playbook_files)
    check(expected_playbook_count == 47,
          f"expected 47 files matching synthesis/classes/*/*-{{tank,healer,melee-dps,"
          f"ranged-dps,pvp}}.md on disk, found {expected_playbook_count}")

    total_playbooks = sum(len(c["playbooks"]) for c in classes)
    check(total_playbooks == expected_playbook_count,
          f"expected {expected_playbook_count} playbooks in classes.json, got {total_playbooks}")
    check(total_playbooks == 47, f"expected 47 playbooks, got {total_playbooks}")

    leveling_count = sum(1 for c in classes if c.get("leveling") is not None)
    check(leveling_count == 9, f"expected 9 leveling guides, got {leveling_count}")

    # ---- Classes whose leveling guide publishes talent-order tables -------
    tabled_orders = {"warrior", "paladin", "hunter", "rogue", "priest", "shaman", "warlock"}
    without_orders = sorted(
        c["slug"] for c in classes
        if c["slug"] in tabled_orders and not (c.get("leveling") or {}).get("talentOrders")
    )
    check(not without_orders,
          f"{len(without_orders)} classes publish a talent-order table but parsed none: "
          f"{without_orders}")

    check(len(matrix["rows"]) == 106,
          f"expected 106 matrix rows, got {len(matrix['rows'])}")

    check(len(glossary) == 313, f"expected 313 glossary terms, got {len(glossary)}")

    # ---- Every playbook has non-null overview + sources ------------------
    missing_overview = []
    missing_sources = []
    for c in classes:
        for pb in c["playbooks"]:
            pid = f"{c['slug']}/{pb['id']}"
            if pb["sections"].get("overview") is None:
                missing_overview.append(pid)
            if pb["sections"].get("sources") is None:
                missing_sources.append(pid)
    check(not missing_overview,
          f"{len(missing_overview)} playbooks missing sections.overview: {missing_overview}")
    check(not missing_sources,
          f"{len(missing_sources)} playbooks missing sections.sources: {missing_sources}")

    # ---- Every playbook with a YAML file has yaml non-null ----------------
    missing_yaml = []
    for c in classes:
        for pb in c["playbooks"]:
            yaml_path = (REPO_ROOT / "structured" / "classes" / c["slug"] /
                         f"{pb['id']}.yaml")
            if yaml_path.exists() and pb.get("yaml") is None:
                missing_yaml.append(f"{c['slug']}/{pb['id']}")
    check(not missing_yaml,
          f"{len(missing_yaml)} playbooks have a YAML file on disk but yaml=null: {missing_yaml}")

    # ---- gear (PLAN.md §7 addendum): every class has non-null gear +
    #      gearMarkdown, and every gear.yaml parses ---------------------------
    missing_gear = [c["slug"] for c in classes if c.get("gear") is None]
    missing_gear_md = [c["slug"] for c in classes if c.get("gearMarkdown") is None]
    check(not missing_gear, f"classes missing non-null gear: {missing_gear}")
    check(not missing_gear_md, f"classes missing non-null gearMarkdown: {missing_gear_md}")

    gear_yaml_parse_failures = []
    for c in classes:
        gear_yaml_path = REPO_ROOT / "structured" / "classes" / c["slug"] / "gear.yaml"
        if not gear_yaml_path.exists():
            continue
        try:
            with open(gear_yaml_path, encoding="utf-8") as f:
                yaml.safe_load(f)
        except Exception as e:
            gear_yaml_parse_failures.append(f"{c['slug']}: {e}")
    check(not gear_yaml_parse_failures,
          f"gear.yaml failed to parse for: {gear_yaml_parse_failures}")

    print("\nGear counts per class (spec entries / brackets / items):")
    for c in classes:
        gear = c.get("gear")
        specs = gear.get("specs") or [] if gear else []
        bracket_count = 0
        item_count = 0
        for spec in specs:
            brackets = (spec or {}).get("brackets") or []
            bracket_count += len(brackets)
            for bracket in brackets:
                for slot in (bracket or {}).get("slots") or []:
                    item_count += len((slot or {}).get("items") or [])
        print(f"  {c['slug']:<8} specs={len(specs):<3} brackets={bracket_count:<4} items={item_count}")

    # ---- standing lookups succeed for >= 90% of playbooks -----------------
    misses = []
    for c in classes:
        for pb in c["playbooks"]:
            if pb.get("standing") is None:
                misses.append(f"{c['slug']}/{pb['id']} (spec={pb['spec']!r}, role={pb['role']!r})")
    if total_playbooks:
        hit_rate = 1 - (len(misses) / total_playbooks)
    else:
        hit_rate = 0
    if misses:
        print(f"standing lookup misses ({len(misses)}/{total_playbooks}, "
              f"hit rate {hit_rate:.1%}):")
        for m in misses:
            print(f"  - {m}")
    check(hit_rate >= 0.90,
          f"standing lookup hit rate {hit_rate:.1%} is below the required 90%")

    # ---- Report -----------------------------------------------------------
    if failures:
        print(f"\nFAILED: {len(failures)} check(s) failed")
        for f in failures:
            print(f" - {f}")
        return 1

    print("OK: all data-contract acceptance checks passed")
    print(f"  classes={len(classes)} playbooks={total_playbooks} "
          f"leveling={leveling_count} matrixRows={len(matrix['rows'])} "
          f"glossaryTerms={len(glossary)}")
    print(f"  standing lookups: {total_playbooks - len(misses)}/{total_playbooks} matched "
          f"({hit_rate:.1%})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
