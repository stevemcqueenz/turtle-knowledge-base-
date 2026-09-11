#!/usr/bin/env python3
"""Build site/src/data/*.json from the repository's synthesis/ and structured/ trees.

Reads (repo root, three levels above this file):
  synthesis/classes/**            class READMEs, playbooks, leveling guides, gear.md
  structured/classes/**           spec-role-matrix.yaml, per-playbook YAML companions, gear.yaml
  structured/glossary.jsonl       glossary terms
  structured/forum/timeline.json  forum/patch timeline

Writes (site/src/data/):
  classes.json, matrix.json, glossary.json, meta.json

Only dependency: PyYAML. See site/PLAN.md §2 for the exact data contract and
site/src/data/README.md for a description of the output files.
"""
from __future__ import annotations

import json
import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

import yaml

# ---------------------------------------------------------------------------
# Paths and constants
# ---------------------------------------------------------------------------

SCRIPT_DIR = Path(__file__).resolve().parent
SITE_DIR = SCRIPT_DIR.parent
REPO_ROOT = SITE_DIR.parent
DATA_DIR = SITE_DIR / "src" / "data"

SYN_CLASSES = REPO_ROOT / "synthesis" / "classes"
STRUCT_CLASSES = REPO_ROOT / "structured" / "classes"
GLOSSARY_PATH = REPO_ROOT / "structured" / "glossary.jsonl"
TIMELINE_PATH = REPO_ROOT / "structured" / "forum" / "timeline.json"
MATRIX_YAML_PATH = STRUCT_CLASSES / "spec-role-matrix.yaml"
COVERAGE_MD_PATH = SYN_CLASSES / "spec-role-coverage.md"
MATRIX_MD_PATH = SYN_CLASSES / "spec-role-matrix.md"

# Class order per PLAN.md §4 (design system class-color ordering).
CLASS_ORDER = [
    "warrior", "paladin", "hunter", "rogue", "priest",
    "shaman", "mage", "warlock", "druid",
]
CLASS_NAMES = {slug: slug.capitalize() for slug in CLASS_ORDER}
CLASS_COLORS = {
    "warrior": "#C69B6D",
    "paladin": "#F48CBA",
    "hunter": "#AAD372",
    "rogue": "#FFF468",
    "priest": "#FFFFFF",
    "shaman": "#0070DD",
    "mage": "#3FC7EB",
    "warlock": "#8788EE",
    "druid": "#FF7C0A",
}

# Role suffixes on playbook filenames, longest-first so "melee-dps"/"ranged-dps"
# are matched before the shorter "pvp"/"tank"/"healer" suffixes.
ROLE_SUFFIXES = ["melee-dps", "ranged-dps", "tank", "healer", "pvp"]
ROLE_ORDER = ["tank", "healer", "melee-dps", "ranged-dps", "pvp"]
ROLE_LABELS = {
    "tank": "Tank",
    "healer": "Healer",
    "melee-dps": "Melee DPS",
    "ranged-dps": "Ranged DPS",
    "pvp": "PvP",
}

# Playbook section keyword rules (PLAN.md §2). First match wins; a key already
# filled must not be overwritten (a second "sources"-like heading falls
# through to extraSections).
SECTION_KEYWORDS = [
    ("overview", ["overview"]),
    ("talents", ["talent"]),
    ("stats", ["stat"]),
    ("rotationSingle", ["single-target", "single target"]),
    ("rotationAoe", ["multi-target", "multi target", "aoe"]),
    ("cooldowns", ["cooldown", "resource"]),
    ("roleStrategy", ["role strategy", "strategy", "triage", "threat", "tactics"]),
    ("gear", ["gear", "enchant", "consumable", "best-in-slot", "bis"]),
    ("mistakes", ["mistake"]),
    ("sources", ["source"]),
]
SECTION_KEYS = [key for key, _ in SECTION_KEYWORDS]


# ---------------------------------------------------------------------------
# Markdown helpers
# ---------------------------------------------------------------------------

def slugify(text: str) -> str:
    s = text.strip().lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = s.strip("-")
    return s or "section"


def split_h1_and_body(markdown: str) -> tuple[str, str]:
    """Return (h1_title, body) with the single leading H1 line stripped."""
    lines = markdown.splitlines()
    title = ""
    start = 0
    for i, line in enumerate(lines):
        if line.startswith("# "):
            title = line[2:].strip()
            start = i + 1
            break
    body = "\n".join(lines[start:])
    return title, body.strip("\n")


def split_h2_sections(body: str) -> tuple[str, list[tuple[str, str]]]:
    """Split body (post-H1) into (intro_markdown, [(heading, section_markdown), ...]).

    H3+ headings stay inside their parent H2's markdown; only top-level "## "
    lines start a new section.
    """
    lines = body.splitlines()
    intro_lines: list[str] = []
    sections: list[tuple[str, list[str]]] = []
    current_heading = None
    current_lines: list[str] = []

    for line in lines:
        if line.startswith("## "):
            if current_heading is not None:
                sections.append((current_heading, current_lines))
            current_heading = line[3:].strip()
            current_lines = []
        else:
            if current_heading is None:
                intro_lines.append(line)
            else:
                current_lines.append(line)
    if current_heading is not None:
        sections.append((current_heading, current_lines))

    intro_md = "\n".join(intro_lines).strip("\n")
    result = [(h, "\n".join(ls).strip("\n")) for h, ls in sections]
    return intro_md, result


def first_paragraph(markdown: str) -> str:
    """First paragraph of a markdown blob (text up to the first blank line)."""
    lines = markdown.splitlines()
    # Skip leading blank lines.
    i = 0
    while i < len(lines) and lines[i].strip() == "":
        i += 1
    para_lines = []
    while i < len(lines) and lines[i].strip() != "":
        para_lines.append(lines[i])
        i += 1
    return "\n".join(para_lines).strip()


def make_section(heading: str, markdown: str, level: int) -> dict:
    return {
        "id": slugify(heading),
        "heading": heading,
        "level": level,
        "markdown": markdown,
    }


# ---------------------------------------------------------------------------
# Leveling talent-order tables
# ---------------------------------------------------------------------------

LEVEL_COL = re.compile(r"^levels?\b|\breach", re.I)
TREE_COL = re.compile(r"^tree$", re.I)
POINTS_COL = re.compile(r"^points?\b", re.I)
TALENT_COL = re.compile(r"talent", re.I)
ORDER_COL = re.compile(r"^order$", re.I)
LINK_COL = re.compile(r"^link$", re.I)
TABLE_SEPARATOR = re.compile(r"^\|?\s*:?-{3,}")


def split_table_row(line: str) -> list[str]:
    return [c.strip() for c in line.strip().strip("|").split("|")]


def plain_heading(text: str) -> str:
    """Header cell without links, emphasis or code marks."""
    return re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", text).replace("**", "").replace("`", "").strip()


def markdown_tables(markdown: str) -> list[tuple[str | None, list[str], list[list[str]]]]:
    """(nearest preceding H3, header cells, body rows) for every pipe table."""
    tables = []
    h3 = None
    lines = markdown.splitlines()
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.startswith("### "):
            h3 = line[4:].strip()
        if line.startswith("|") and i + 1 < len(lines) and TABLE_SEPARATOR.match(lines[i + 1]):
            header = split_table_row(line)
            rows = []
            i += 2
            while i < len(lines) and lines[i].startswith("|"):
                rows.append(split_table_row(lines[i]))
                i += 1
            tables.append((h3, header, rows))
            continue
        i += 1
    return tables


def parse_talent_orders(sections: list[dict]) -> list[dict]:
    """Every leveling table that has a level column, as level -> talent steps.

    Column roles are read from the header: a level column (Level/Levels/"Reaches
    at"), an optional tree column, an optional points column, a talent column
    (named "Talent", or "Order" when its cells are not plain ordinals). A table
    whose header names builds instead of a talent column ("Levels | Protection
    0/31/20 | Retribution 11/8/31") yields one order per build column. Remaining
    columns become the step's note, so no cited text is dropped. Cells stay
    verbatim Markdown.
    """
    def cell(row: list[str], i: int | None) -> str:
        return row[i].strip() if i is not None and i < len(row) else ""

    orders: list[dict] = []
    for section in sections:
        for h3, header, rows in markdown_tables(section["markdown"]):
            names = [plain_heading(h) for h in header]
            level = next((i for i, n in enumerate(names) if LEVEL_COL.search(n)), None)
            if level is None or not rows:
                continue
            tree = next((i for i, n in enumerate(names) if TREE_COL.search(n)), None)
            points = next((i for i, n in enumerate(names) if POINTS_COL.search(n)), None)
            ordinal = next((i for i, n in enumerate(names)
                            if ORDER_COL.search(n) and all(cell(r, i).isdigit() for r in rows)), None)
            taken = {level, tree, points, ordinal}
            talent = next((i for i, n in enumerate(names) if TALENT_COL.search(n) and i not in taken), None)
            if talent is None:
                talent = next((i for i, n in enumerate(names) if ORDER_COL.search(n) and i not in taken), None)
            free = [i for i in range(len(names)) if i not in taken and i != talent
                    and not LINK_COL.match(names[i])]
            builds = [talent] if talent is not None else free
            notes = free if talent is not None else []
            approximate = bool(re.search(r"approx|arithmetic", names[level], re.I)) or any(
                "~" in cell(r, level) for r in rows)
            for col in builds:
                steps = []
                for r in rows:
                    name = cell(r, col)
                    if not name:
                        continue
                    note_parts = [cell(r, n) for n in notes if cell(r, n)]
                    steps.append({
                        "level": cell(r, level) or None,
                        "talent": name,
                        "tree": cell(r, tree) or None,
                        "points": cell(r, points) or None,
                        "note": " · ".join(note_parts) or None,
                    })
                if not steps:
                    continue
                subtitle = header[col].strip() if talent is None else h3
                orders.append({
                    "id": f"{section['id']}-{len(orders) + 1}",
                    "title": section["heading"],
                    "subtitle": subtitle or None,
                    "approximate": approximate,
                    "steps": steps,
                })
    return orders


# ---------------------------------------------------------------------------
# Matrix
# ---------------------------------------------------------------------------

def load_matrix() -> dict:
    with open(MATRIX_YAML_PATH, encoding="utf-8") as f:
        doc = yaml.safe_load(f)
    rows = []
    for r in doc["rows"]:
        rows.append({
            "class": r.get("class"),
            "spec": r.get("spec"),
            "role": r.get("role"),
            "standing": r.get("standing"),
            "agreement": r.get("agreement"),
            "source_quality": r.get("source_quality"),
            "playbook_path": r.get("playbook_path"),
            "yaml_path": r.get("yaml_path"),
            "notes": r.get("notes"),
        })
    return {
        "roles": doc.get("roles", []),
        "standings": doc.get("standing_values", []),
        "rows": rows,
    }


def find_standing(matrix_rows: list[dict], class_name: str, spec: str, role: str) -> dict | None:
    """First matrix row matching class (exact, case-insensitive), role (exact)
    and spec (case-insensitive equality, or containment either direction)."""
    spec_low = spec.lower()
    candidates = [
        r for r in matrix_rows
        if r["class"] and r["class"].lower() == class_name.lower() and r["role"] == role
    ]
    # Pass 1: exact spec match (case-insensitive).
    for r in candidates:
        row_spec = r["spec"] or ""
        if row_spec.lower() == spec_low:
            return r
    # Pass 2: containment either direction.
    for r in candidates:
        row_spec = (r["spec"] or "").lower()
        if not row_spec or not spec_low:
            continue
        if spec_low in row_spec or row_spec in spec_low:
            return r
    return None


# ---------------------------------------------------------------------------
# Playbooks
# ---------------------------------------------------------------------------

def parse_playbook_filename(filename: str) -> tuple[str, str] | None:
    """('protection-tank.md') -> ('protection', 'tank'), or None if filename
    does not end in a known role suffix (e.g. supporting docs like pets.md)."""
    stem = filename[:-3] if filename.endswith(".md") else filename
    for role in ROLE_SUFFIXES:
        suffix = "-" + role
        if stem.endswith(suffix):
            spec_slug = stem[: -len(suffix)]
            return spec_slug, role
    return None


def title_case_spec(spec_slug: str) -> str:
    words = spec_slug.split("-")
    return " ".join(w.capitalize() for w in words)


def build_playbook(class_slug: str, class_name: str, md_path: Path,
                    matrix_rows: list[dict]) -> dict | None:
    parsed = parse_playbook_filename(md_path.name)
    if parsed is None:
        return None
    spec_slug, role = parsed
    playbook_id = f"{spec_slug}-{role}"

    text = md_path.read_text(encoding="utf-8")
    title, body = split_h1_and_body(text)
    intro_md, h2_sections = split_h2_sections(body)

    sections = {key: None for key in SECTION_KEYS}
    extra_sections: list[dict] = []

    for heading, section_md in h2_sections:
        low = heading.lower()
        matched_key = None
        for key, kws in SECTION_KEYWORDS:
            if sections[key] is not None:
                continue  # already filled; a repeat heading falls to extras
            if any(kw in low for kw in kws):
                matched_key = key
                break
        if matched_key is not None:
            sections[matched_key] = make_section(heading, section_md, 2)
        else:
            extra_sections.append(make_section(heading, section_md, 2))

    # YAML companion.
    yaml_path = STRUCT_CLASSES / class_slug / f"{playbook_id}.yaml"
    yaml_data = None
    if yaml_path.exists():
        with open(yaml_path, encoding="utf-8") as f:
            yaml_data = yaml.safe_load(f)

    spec_name = None
    if yaml_data and yaml_data.get("spec"):
        spec_name = str(yaml_data["spec"])
    else:
        spec_name = title_case_spec(spec_slug)

    standing = find_standing(matrix_rows, class_name, spec_name, role)

    return {
        "id": playbook_id,
        "spec": spec_name,
        "role": role,
        "roleLabel": ROLE_LABELS[role],
        "title": title,
        "intro": intro_md,
        "sections": sections,
        "extraSections": extra_sections,
        "standing": standing,
        "yaml": yaml_data,
        "_spec_slug": spec_slug,  # used only for ordering, stripped before write
    }


def playbook_sort_key(pb: dict) -> tuple:
    role = pb["role"]
    role_idx = ROLE_ORDER.index(role) if role in ROLE_ORDER else len(ROLE_ORDER)
    return (role_idx, pb["spec"].lower())


# ---------------------------------------------------------------------------
# Gear (PLAN.md §7 addendum)
# ---------------------------------------------------------------------------

def load_gear_yaml(class_slug: str) -> dict | None:
    """Parsed structured/classes/<class>/gear.yaml, passed through as-is, or
    None if the file doesn't exist."""
    path = STRUCT_CLASSES / class_slug / "gear.yaml"
    if not path.exists():
        return None
    with open(path, encoding="utf-8") as f:
        return yaml.safe_load(f)


def build_gear_markdown(class_slug: str) -> list[dict] | None:
    """Section[] from synthesis/classes/<class>/gear.md, or gear-*.md files
    concatenated in filename order (gear.md, the index, first if present),
    H1 stripped from each file and split on H2 as for the other documents.
    None if no gear*.md file exists for this class."""
    class_dir = SYN_CLASSES / class_slug
    index_path = class_dir / "gear.md"
    part_paths = sorted(class_dir.glob("gear-*.md"))
    files = ([index_path] if index_path.exists() else []) + part_paths
    if not files:
        return None

    sections: list[dict] = []
    for path in files:
        text = path.read_text(encoding="utf-8")
        _, body = split_h1_and_body(text)
        _intro_md, h2_sections = split_h2_sections(body)
        sections.extend(make_section(h, md, 2) for h, md in h2_sections)
    return sections


def count_gear_stats(gear: dict | None) -> tuple[int, int, int]:
    """(spec entries, brackets, items) in a parsed gear.yaml, tolerant of
    missing/odd shapes."""
    if not gear:
        return 0, 0, 0
    specs = gear.get("specs") or []
    bracket_count = 0
    item_count = 0
    for spec in specs:
        brackets = (spec or {}).get("brackets") or []
        bracket_count += len(brackets)
        for bracket in brackets:
            slots = (bracket or {}).get("slots") or []
            for slot in slots:
                items = (slot or {}).get("items") or []
                item_count += len(items)
    return len(specs), bracket_count, item_count


# ---------------------------------------------------------------------------
# Classes
# ---------------------------------------------------------------------------

def build_class_entry(class_slug: str, matrix_rows: list[dict]) -> dict:
    class_dir = SYN_CLASSES / class_slug
    class_name = CLASS_NAMES[class_slug]

    readme_path = class_dir / "README.md"
    readme_text = readme_path.read_text(encoding="utf-8")
    _, readme_body = split_h1_and_body(readme_text)
    intro_md, h2_sections = split_h2_sections(readme_body)
    summary = first_paragraph(intro_md)

    readme_sections = [make_section(h, md, 2) for h, md in h2_sections]

    gaps = None
    for h, md in h2_sections:
        if "gap" in h.lower():
            gaps = md
            break

    patch_changes = None
    for h, md in h2_sections:
        if "1.18.1" in h:
            patch_changes = md
            break

    class_matrix_rows = [
        {k: v for k, v in r.items()}
        for r in matrix_rows
        if r["class"] and r["class"].lower() == class_slug.lower()
    ]

    playbook_files = sorted(class_dir.glob("*.md"))
    playbook_files = [
        p for p in playbook_files
        if p.name not in ("README.md", "leveling.md")
    ]
    playbooks = [
        pb for pb in (
            build_playbook(class_slug, class_name, p, matrix_rows)
            for p in playbook_files
        ) if pb is not None
    ]
    playbooks.sort(key=playbook_sort_key)
    for pb in playbooks:
        pb.pop("_spec_slug", None)

    leveling = None
    leveling_path = class_dir / "leveling.md"
    if leveling_path.exists():
        lvl_text = leveling_path.read_text(encoding="utf-8")
        _, lvl_body = split_h1_and_body(lvl_text)
        lvl_intro, lvl_sections = split_h2_sections(lvl_body)
        sections = []
        if lvl_intro.strip():
            sections.append(make_section("Introduction", lvl_intro, 2))
        sections.extend(make_section(h, md, 2) for h, md in lvl_sections)
        leveling = {
            "sections": sections,
            "talentOrders": parse_talent_orders(sections),
            "sourceFile": str(leveling_path.relative_to(REPO_ROOT)),
        }

    gear = load_gear_yaml(class_slug)
    gear_markdown = build_gear_markdown(class_slug)

    return {
        "slug": class_slug,
        "name": class_name,
        "color": CLASS_COLORS[class_slug],
        "summary": summary,
        "readme": readme_sections,
        "matrix": class_matrix_rows,
        "playbooks": playbooks,
        "leveling": leveling,
        "gaps": gaps,
        "patchChanges": patch_changes,
        "gear": gear,
        "gearMarkdown": gear_markdown,
    }


# ---------------------------------------------------------------------------
# Glossary
# ---------------------------------------------------------------------------

def load_glossary() -> list[dict]:
    terms = []
    with open(GLOSSARY_PATH, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            d = json.loads(line)
            terms.append({
                "term": d.get("term"),
                "meaning": d.get("meaning"),
                "category": d.get("category"),
                "scope": d.get("scope"),
                "citation_url": d.get("citation_url"),
            })
    return terms


# ---------------------------------------------------------------------------
# Meta
# ---------------------------------------------------------------------------

def strip_h1(text: str) -> str:
    _, body = split_h1_and_body(text)
    return body


def git_short_commit() -> str:
    try:
        out = subprocess.run(
            ["git", "rev-parse", "--short", "HEAD"],
            cwd=REPO_ROOT, capture_output=True, text=True, check=True,
        )
        return out.stdout.strip()
    except Exception:
        return "unknown"


def build_meta(counts: dict) -> dict:
    with open(TIMELINE_PATH, encoding="utf-8") as f:
        timeline = json.load(f)
    notes = (
        "Content is sourced only from this repository's synthesis/ and structured/ "
        "trees, which in turn cite the archived Turtle WoW forum. Every claim is "
        "labelled with a source tier: staff (Turtle WoW Team, the authority on intent), "
        "player, or wiki (community Fandom wiki, least reliable) — staff is preferred "
        "over player over wiki, and synthesis/contradictions.md lists where sources "
        "disagree. Forum links (viewtopic.php?...) stop resolving after the forum "
        "closes on 2026-10-16; the archived post ids and quoted text remain valid in "
        "this repository regardless. Nothing on this site is invented: where sources "
        "are silent, the relevant playbook or class README says so explicitly under "
        "its gaps section rather than guessing."
    )
    return {
        "generatedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "repoCommit": git_short_commit(),
        "counts": counts,
        "timeline": timeline,
        "notes": notes,
    }


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> int:
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    matrix_data = load_matrix()
    matrix_rows = matrix_data["rows"]

    classes = [build_class_entry(slug, matrix_rows) for slug in CLASS_ORDER]

    matrix_json = {
        "roles": matrix_data["roles"],
        "standings": matrix_data["standings"],
        "rows": matrix_rows,
        "coverageMarkdown": strip_h1(COVERAGE_MD_PATH.read_text(encoding="utf-8")),
        "matrixMarkdown": strip_h1(MATRIX_MD_PATH.read_text(encoding="utf-8")),
    }

    glossary_json = load_glossary()

    total_playbooks = sum(len(c["playbooks"]) for c in classes)
    counts = {
        "classes": len(classes),
        "playbooks": total_playbooks,
        "matrixRows": len(matrix_rows),
        "glossaryTerms": len(glossary_json),
    }
    meta_json = build_meta(counts)

    (DATA_DIR / "classes.json").write_text(
        json.dumps(classes, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    (DATA_DIR / "matrix.json").write_text(
        json.dumps(matrix_json, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    (DATA_DIR / "glossary.json").write_text(
        json.dumps(glossary_json, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    (DATA_DIR / "meta.json").write_text(
        json.dumps(meta_json, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    print(f"Wrote {DATA_DIR}: classes={counts['classes']} playbooks={counts['playbooks']} "
          f"matrixRows={counts['matrixRows']} glossaryTerms={counts['glossaryTerms']}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
