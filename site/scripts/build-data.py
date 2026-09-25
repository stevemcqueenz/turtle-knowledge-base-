#!/usr/bin/env python3
"""Build site/src/data/*.json from the repository's synthesis/ and structured/ trees.

Reads (repo root, three levels above this file):
  guide/classes/<class>/*.md      player-facing class guides (index, one page per
                                  spec, leveling, pvp, sources). A class with a
                                  guide index.md is built from its guide pages;
                                  every other class falls back to synthesis/.
  synthesis/classes/**            class READMEs, playbooks, leveling guides, gear.md
  structured/classes/**           spec-role-matrix.yaml, per-playbook YAML companions
                                  (their `guide:` key names the playbook's guide page), gear.yaml
  structured/discord/evidence-<channel>.jsonl
                                  verbatim Discord messages behind `[[d:<channel>#<id>]]`
  structured/glossary.jsonl       glossary terms
  structured/forum/timeline.json  forum/patch timeline

Development overrides (for guide pages that live in another checkout):
  --guide-dir DIR       or TKB_GUIDE_DIR       the `guide/` directory to read
  --structured-dir DIR  or TKB_STRUCTURED_DIR  a `structured/` directory whose
                        classes/** and discord/** files win over the repo's
                        (anything missing there falls back to the repo)

  guide/instances/*.md            dungeon and raid pages (index.md lists them)

Writes (site/src/data/):
  classes.json, matrix.json, glossary.json, meta.json,
  instances.json (only when guide/instances/index.md exists)

Only dependency: PyYAML. See site/PLAN.md §2 for the exact data contract and
site/src/data/README.md for a description of the output files.
"""
from __future__ import annotations

import argparse
import html
import json
import os
import posixpath
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
STRUCTURED_DIR = REPO_ROOT / "structured"
GLOSSARY_PATH = REPO_ROOT / "structured" / "glossary.jsonl"
TIMELINE_PATH = REPO_ROOT / "structured" / "forum" / "timeline.json"
COVERAGE_MD_PATH = SYN_CLASSES / "spec-role-coverage.md"
MATRIX_MD_PATH = SYN_CLASSES / "spec-role-matrix.md"

# Set from the command line / environment in main().
GUIDE_DIR = REPO_ROOT / "guide"
STRUCTURED_OVERRIDE: Path | None = None
# Only these sub-trees of structured/ are taken from the override: the guide
# work touches the class YAML and the Discord evidence, not the glossary etc.
OVERRIDABLE = ("classes", "discord")

# Where the published copy of the repository lives: Discord citations link to
# the verbatim evidence record there.
GITHUB_BLOB = "https://github.com/stevemcqueenz/turtle-knowledge-base-/blob/main"
CITE_PREVIEW_CHARS = 300


def structured_path(*parts: str) -> Path:
    """structured/<parts>, preferring the development override when it has the file."""
    if STRUCTURED_OVERRIDE is not None and parts and parts[0] in OVERRIDABLE:
        candidate = STRUCTURED_OVERRIDE.joinpath(*parts)
        if candidate.exists():
            return candidate
    return STRUCTURED_DIR.joinpath(*parts)


def load_yaml_file(path: Path):
    """yaml.safe_load with a clear error (e.g. unresolved merge-conflict markers)."""
    text = path.read_text(encoding="utf-8")
    if re.search(r"^<<<<<<< ", text, re.M):
        raise SystemExit(f"build-data: {path} contains merge-conflict markers; resolve it "
                         f"or pass --structured-dir pointing at a clean structured/ tree")
    try:
        return yaml.safe_load(text)
    except yaml.YAMLError as e:
        raise SystemExit(f"build-data: {path} does not parse as YAML: {e}")

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
# Guide pages (guide/classes/**) use the player-facing headings ("Talent
# build", "Stat priority and caps", "Enchants", "Consumables", "Raid notes",
# "Burst and control sequences", "Matchups" ...). Same first-match-wins rule; a
# key may appear twice so that the specific words win over the generic ones
# ("AoE rotation" is AoE, "Healing rotation" is the single-target slot).
GUIDE_SECTION_KEYWORDS = [
    ("overview", ["overview"]),
    ("talents", ["talent", "build"]),
    ("stats", ["stat"]),
    ("rotationSingle", ["single-target", "single target"]),
    ("rotationAoe", ["multi-target", "multi target", "aoe"]),
    ("rotationSingle", ["rotation", "burst", "sequence", "priority list"]),
    ("cooldowns", ["cooldown", "resource", "mana"]),
    ("roleStrategy", ["role strategy", "strategy", "triage", "threat", "tactics",
                      "matchup", "role duties", "duties", "raid"]),
    ("gear", ["gear", "best-in-slot", "bis"]),
    ("enchants", ["enchant"]),
    ("consumables", ["consumable", "oil", "imbue", "world buff"]),
    ("mistakes", ["mistake"]),
    ("sources", ["source"]),
]
SECTION_KEYS = [key for key, _ in SECTION_KEYWORDS] + ["enchants", "consumables"]


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


TOP_LEVEL_BULLET = re.compile(r"^[-*+]\s+(\S.*)$")


def top_level_bullet_items(markdown: str) -> list[str]:
    """Verbatim Markdown inside each unindented list item.

    Leveling prose remains intact in ``markdown``; this is an additional view
    for the UI's scannable lists. Indented nested bullets are deliberately not
    separate items.
    """
    return [match.group(1) for line in markdown.splitlines()
            if (match := TOP_LEVEL_BULLET.match(line))]


def make_leveling_section(heading: str, markdown: str, level: int) -> dict:
    """A leveling Section plus the top-level bullets available for card UI."""
    section = make_section(heading, markdown, level)
    section["items"] = top_level_bullet_items(markdown)
    return section


# ---------------------------------------------------------------------------
# Leveling talent-order tables
# ---------------------------------------------------------------------------

LEVEL_COL = re.compile(r"^levels?\b|\breach", re.I)
TREE_COL = re.compile(r"^tree$", re.I)
POINTS_COL = re.compile(r"^(points?|(new )?ranks?)\b", re.I)
TALENT_COL = re.compile(r"talent", re.I)
ORDER_COL = re.compile(r"^order$", re.I)
LINK_COL = re.compile(r"^link$", re.I)
EMPHASIS = re.compile(r"[*_]")
PLACEHOLDER_CELL = re.compile(r"^[—–-]+$")
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
    columns become the step's note, except a column headed "Link", whose
    talent-calculator codes are dropped. Cells stay verbatim Markdown.
    """
    def cell(row: list[str], i: int | None) -> str:
        value = row[i].strip() if i is not None and i < len(row) else ""
        return "" if PLACEHOLDER_CELL.match(value) else value

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
            approximate = any("~" in cell(r, level) for r in rows)
            for col in builds:
                steps = []
                for r in rows:
                    name = cell(r, col)
                    if not name:
                        continue
                    note_parts = [cell(r, n) for n in notes if cell(r, n)]
                    steps.append({
                        "level": EMPHASIS.sub("", cell(r, level)) or None,
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
    doc = load_yaml_file(structured_path("classes", "spec-role-matrix.yaml"))
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


def map_sections(h2_sections: list[tuple[str, str]], rules: list) -> tuple[dict, list[dict]]:
    """Slot H2 sections by heading keyword (first match wins, filled slots are
    skipped); everything else goes to extraSections in document order."""
    sections = {key: None for key in SECTION_KEYS}
    extra_sections: list[dict] = []
    order: list[str] = []
    for heading, section_md in h2_sections:
        low = heading.lower()
        matched_key = None
        for key, kws in rules:
            if sections[key] is not None:
                continue  # already filled; a repeat heading falls to extras
            if any(kw in low for kw in kws):
                matched_key = key
                break
        if matched_key is not None:
            sections[matched_key] = make_section(heading, section_md, 2)
            order.append(matched_key)
        else:
            extra = make_section(heading, section_md, 2)
            extra_sections.append(extra)
            order.append(f"extra:{extra['id']}")
    map_sections.last_order = order  # type: ignore[attr-defined]
    return sections, extra_sections


def load_playbook_yaml(class_slug: str, playbook_id: str) -> dict | None:
    yaml_path = structured_path("classes", class_slug, f"{playbook_id}.yaml")
    if not yaml_path.exists():
        return None
    return load_yaml_file(yaml_path)


def guide_page_for(yaml_data: dict | None) -> Path | None:
    """The guide page a playbook YAML's `guide:` key names, if it exists."""
    rel = (yaml_data or {}).get("guide")
    if not isinstance(rel, str) or not rel.strip():
        return None
    rel = rel.strip().lstrip("./")
    if rel.startswith("guide/"):
        rel = rel[len("guide/"):]
    path = GUIDE_DIR / rel
    return path if path.is_file() else None


def build_playbook(class_slug: str, class_name: str, md_path: Path,
                    matrix_rows: list[dict], guide: "GuideContext | None" = None) -> dict | None:
    parsed = parse_playbook_filename(md_path.name)
    if parsed is None:
        return None
    spec_slug, role = parsed
    playbook_id = f"{spec_slug}-{role}"

    yaml_data = load_playbook_yaml(class_slug, playbook_id)
    guide_path = guide_page_for(yaml_data) if guide is not None else None

    if guide_path is not None:
        page = guide.page(guide_path)
        title, intro_md, h2_sections = page["title"], page["intro"], page["sections"]
        sections, extra_sections = map_sections(h2_sections, GUIDE_SECTION_KEYWORDS)
        section_order = list(map_sections.last_order)  # type: ignore[attr-defined]
        # Guide pages open with their recommendation instead of an "Overview"
        # heading; that opening is the overview.
        if sections["overview"] is None and intro_md.strip():
            sections["overview"] = make_section("Overview", intro_md, 2)
            section_order.insert(0, "overview")
        recommendation, rest = recommendation_block(intro_md)
        facts, rest = kv_table(rest)
        glance = {"recommendation": recommendation, "facts": facts, "rest": rest.strip() or None}
        source_file = guide.repo_rel(guide_path)
    else:
        text = read_md(md_path)
        title, body = split_h1_and_body(text)
        intro_md, h2_sections = split_h2_sections(body)
        sections, extra_sections = map_sections(h2_sections, SECTION_KEYWORDS)
        section_order = list(map_sections.last_order)  # type: ignore[attr-defined]
        glance = None
        source_file = str(md_path.relative_to(REPO_ROOT))

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
        "yamlPath": f"structured/classes/{class_slug}/{playbook_id}.yaml" if yaml_data is not None else None,
        "sourceFile": source_file,
        "guidePath": source_file if guide_path is not None else None,
        "sectionOrder": section_order,
        "glance": glance,
        "builds": playbook_builds(yaml_data, class_slug, guide_path),
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
    path = structured_path("classes", class_slug, "gear.yaml")
    if not path.exists():
        return None
    return load_yaml_file(path)


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
        text = read_md(path)
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
# Guide pages (guide/classes/**): links and Discord citations
# ---------------------------------------------------------------------------

DISCORD_CITE = re.compile(r"\[\[d:([a-z0-9_-]+)#(\d+)\]\]")
MD_LINK = re.compile(r"(!?)\[([^\]\n]*)\]\(([^)\s]+)((?:\s+\"[^\"\n]*\")?)\)")
# The only reserved Markdown characters that could reach the chip: escaped as
# entities so marked neither splits a table cell on them nor reads emphasis.
_CHIP_ESCAPES = {"|": "&#124;", "*": "&#42;", "_": "&#95;", "`": "&#96;", "[": "&#91;",
                 "]": "&#93;", "~": "&#126;", "\\": "&#92;"}


def chip_escape(text: str) -> str:
    out = html.escape(text, quote=True)
    return "".join(_CHIP_ESCAPES.get(ch, ch) for ch in out)


class EvidenceIndex:
    """message id -> (1-based line, record) for structured/discord/evidence-<ch>.jsonl."""

    def __init__(self) -> None:
        self._channels: dict[str, dict[str, tuple[int, dict]]] = {}
        self.resolved = 0
        self.unresolved: list[str] = []

    def lookup(self, channel: str, msg_id: str) -> tuple[int, dict] | None:
        if channel not in self._channels:
            index: dict[str, tuple[int, dict]] = {}
            path = structured_path("discord", f"evidence-{channel}.jsonl")
            if path.exists():
                with open(path, encoding="utf-8") as f:
                    for n, line in enumerate(f, start=1):
                        line = line.strip()
                        if not line:
                            continue
                        try:
                            rec = json.loads(line)
                        except json.JSONDecodeError:
                            continue
                        if rec.get("id") is not None:
                            index.setdefault(str(rec["id"]), (n, rec))
            self._channels[channel] = index
        return self._channels[channel].get(msg_id)

    def record(self, channel: str, msg_id: str) -> dict:
        """{label, title, url} for the UI's own chips (YAML text is not Markdown);
        url is null when the message is not in the evidence files."""
        found = self.lookup(channel, msg_id)
        if found is None:
            return {"label": f"#{channel}", "url": None,
                    "title": f"Discord #{channel}, message {msg_id} (not in the archived evidence)"}
        line, rec = found
        author, date, title = self._describe(channel, rec)
        return {"label": " · ".join(x for x in (author, date) if x),
                "url": f"{GITHUB_BLOB}/structured/discord/evidence-{channel}.jsonl#L{line}",
                "title": title}

    @staticmethod
    def _describe(channel: str, rec: dict) -> tuple[str, str, str]:
        author = str(rec.get("author") or "unknown")
        date = str(rec.get("ts") or "")[:10]
        content = re.sub(r"\s+", " ", str(rec.get("content") or "")).strip()
        if len(content) > CITE_PREVIEW_CHARS:
            content = content[:CITE_PREVIEW_CHARS].rstrip() + "…"
        head = f"{author}, {date}, Discord #{channel}" if date else f"{author}, Discord #{channel}"
        return author, date, (f"{head}: {content}" if content else head)

    def collect(self, value, into: dict) -> None:
        """Every `[[d:...]]` inside a YAML value -> into["channel#id"] = record."""
        if isinstance(value, str):
            for m in DISCORD_CITE.finditer(value):
                key = f"{m.group(1)}#{m.group(2)}"
                if key not in into:
                    into[key] = self.record(m.group(1), m.group(2))
        elif isinstance(value, dict):
            for v in value.values():
                self.collect(v, into)
        elif isinstance(value, list):
            for v in value:
                self.collect(v, into)

    def chip(self, channel: str, msg_id: str) -> str:
        """Inline HTML chip for one `[[d:channel#id]]` citation."""
        found = self.lookup(channel, msg_id)
        if found is None:
            self.unresolved.append(f"{channel}#{msg_id}")
            title = f"Discord #{channel}, message {msg_id} (not in the archived evidence)"
            return (f'<span class="cite cite-discord cite-unknown" title="{chip_escape(title)}">'
                    f'{chip_escape("#" + channel)}</span>')
        self.resolved += 1
        line, rec = found
        author, date, title = self._describe(channel, rec)
        label = " · ".join(x for x in (author, date) if x)
        url = f"{GITHUB_BLOB}/structured/discord/evidence-{channel}.jsonl#L{line}"
        return (f'<a class="cite cite-discord" href="{chip_escape(url)}" title="{chip_escape(title)}">'
                f'{chip_escape(label)}</a>')


EVIDENCE = EvidenceIndex()


def transform_markdown(markdown: str, link=None) -> str:
    """Discord citations -> chips (and, for guide pages, relative links ->
    site routes via `link`), outside fenced code and code spans. H1/H2 lines
    lose their citations: they become plain heading strings."""
    out_lines = []
    in_fence = False
    for line in markdown.splitlines():
        if line.lstrip().startswith("```"):
            in_fence = not in_fence
            out_lines.append(line)
            continue
        if in_fence:
            out_lines.append(line)
            continue
        if re.match(r"^#{1,2} ", line):
            line = re.sub(r"\s*\[\[d:[^\]]*\]\]", "", line).rstrip()
        # Code spans stay verbatim (build codes like `talents.turtlecraft.gg/...`).
        parts = re.split(r"(`[^`]*`)", line)
        for i in range(0, len(parts), 2):
            seg = MD_LINK.sub(link, parts[i]) if link else parts[i]
            parts[i] = DISCORD_CITE.sub(lambda m: EVIDENCE.chip(m.group(1), m.group(2)), seg)
        out_lines.append("".join(parts))
    return "\n".join(out_lines)


def read_md(path: Path) -> str:
    """A repository Markdown file with its Discord citations rendered as chips."""
    return transform_markdown(path.read_text(encoding="utf-8"))


class GuideContext:
    """Everything the guide-page build shares across classes: the evidence
    index, the page -> site route map used to rewrite relative links, and a
    cache of parsed pages."""

    def __init__(self, guide_dir: Path) -> None:
        self.dir = guide_dir
        self.evidence = EVIDENCE
        self.routes: dict[str, str] = {}  # "guide/classes/mage/arcane.md" -> "#/class/mage/arcane-ranged-dps"
        self._pages: dict[Path, dict] = {}
        self.unwrapped_links: list[str] = []

    def repo_rel(self, path: Path) -> str:
        """guide/... path as it will sit in the repository."""
        return "guide/" + path.resolve().relative_to(self.dir.resolve()).as_posix()

    def class_dir(self, class_slug: str) -> Path:
        return self.dir / "classes" / class_slug

    def has_class(self, class_slug: str) -> bool:
        return (self.class_dir(class_slug) / "index.md").is_file()

    # ---- text transforms --------------------------------------------------

    def rewrite_link(self, page_rel: str, match: re.Match) -> str:
        bang, text, target, title = match.groups()
        if bang or re.match(r"^[a-z][a-z0-9+.-]*:", target, re.I) or target.startswith("#/"):
            return match.group(0)
        path_part, _, anchor = target.partition("#")
        if not path_part:  # same-page anchor: the page itself (the router has no anchors)
            route = self.routes.get(page_rel)
            return f"[{text}]({route}{title})" if route else text
        resolved = posixpath.normpath(posixpath.join(posixpath.dirname(page_rel), path_part))
        route = self.routes.get(resolved)
        if route:
            return f"[{text}]({route}{title})"
        on_disk = (self.dir / resolved[len("guide/"):]) if resolved.startswith("guide/") \
            else (REPO_ROOT / resolved)
        if not resolved.startswith("..") and on_disk.exists():
            url = f"{GITHUB_BLOB}/{resolved}" + (f"#{anchor}" if anchor else "")
            return f"[{text}]({url}{title})"
        # A page that is not in the repository (yet): keep the words, drop the link.
        self.unwrapped_links.append(f"{page_rel} -> {target}")
        return text

    def transform(self, markdown: str, page_rel: str) -> str:
        return transform_markdown(markdown, lambda m: self.rewrite_link(page_rel, m))

    # ---- pages ------------------------------------------------------------

    def page(self, path: Path) -> dict:
        """{title, intro, sections: [(heading, markdown)], sourceFile} for one guide page."""
        if path not in self._pages:
            rel = self.repo_rel(path)
            text = self.transform(path.read_text(encoding="utf-8"), rel)
            title, body = split_h1_and_body(text)
            intro, sections = split_h2_sections(body)
            self._pages[path] = {"title": title, "intro": intro, "sections": sections, "sourceFile": rel}
        return self._pages[path]

    def doc(self, path: Path, slug: str) -> dict:
        """A standalone guide page (sources, a niche page) as a GuideDoc."""
        page = self.page(path)
        return {
            "slug": slug,
            "title": page["title"],
            "intro": page["intro"],
            "sections": [make_section(h, md, 2) for h, md in page["sections"]],
            "sourceFile": page["sourceFile"],
        }


def guide_playbook_claims(class_slug: str, guide: GuideContext) -> list[tuple[str, Path]]:
    """(playbook id, guide page) for every playbook YAML of the class whose
    `guide:` key names an existing page, in playbook order."""
    claims = []
    for md_path in playbook_files(class_slug):
        parsed = parse_playbook_filename(md_path.name)
        if parsed is None:
            continue
        pid = f"{parsed[0]}-{parsed[1]}"
        page = guide_page_for(load_playbook_yaml(class_slug, pid))
        if page is not None:
            claims.append((pid, page))
    return claims


RESERVED_GUIDE_PAGES = {"index.md", "leveling.md", "sources.md"}


def register_guide_routes(guide: GuideContext) -> None:
    """Fill guide.routes before any page is transformed, so links between
    pages (and between classes) resolve to site routes."""
    for slug in CLASS_ORDER:
        cdir = guide.class_dir(slug)
        if not guide.has_class(slug):
            continue
        base = f"guide/classes/{slug}/"
        guide.routes[base + "index.md"] = f"#/class/{slug}"
        if (cdir / "leveling.md").is_file():
            guide.routes[base + "leveling.md"] = f"#/class/{slug}/leveling"
        if (cdir / "sources.md").is_file():
            guide.routes[base + "sources.md"] = f"#/class/{slug}/sources"
        # A page several playbooks share (protection.md: fury-tank and
        # protection-tank) routes to the playbook named after the page.
        claims = sorted(guide_playbook_claims(slug, guide),
                        key=lambda c: (not c[0].startswith(c[1].stem + "-"),
                                       ROLE_ORDER.index(parse_playbook_filename(c[0] + ".md")[1]), c[0]))
        for pid, page in claims:
            guide.routes.setdefault(guide.repo_rel(page), f"#/class/{slug}/{pid}")
        for page in sorted(cdir.glob("*.md")):
            rel = guide.repo_rel(page)
            if page.name not in RESERVED_GUIDE_PAGES and rel not in guide.routes:
                guide.routes[rel] = f"#/class/{slug}/guide/{page.stem}"


# ---------------------------------------------------------------------------
# Dungeon and raid pages (guide/instances/**)
# ---------------------------------------------------------------------------

INSTANCE_INDEX_LINK = re.compile(r"\]\(([a-z0-9][a-z0-9-]*)\.md(?:#[^)\s]*)?\)")


def instance_dir(guide: GuideContext) -> Path:
    return guide.dir / "instances"


def has_instances(guide: GuideContext) -> bool:
    return (instance_dir(guide) / "index.md").is_file()


def register_instance_routes(guide: GuideContext) -> None:
    """guide/instances/index.md -> #/instances, <slug>.md -> #/instances/<slug>,
    registered before any page is transformed so class pages link to them."""
    if not has_instances(guide):
        return
    idir = instance_dir(guide)
    guide.routes[guide.repo_rel(idir / "index.md")] = "#/instances"
    for page in sorted(idir.glob("*.md")):
        if page.name != "index.md":
            guide.routes[guide.repo_rel(page)] = f"#/instances/{page.stem}"


def instance_kind(heading: str) -> str | None:
    low = heading.lower()
    if "raid" in low:
        return "raid"
    if "dungeon" in low:
        return "dungeon"
    return None


def unique_sections(h2_sections: list[tuple[str, str]]) -> list[dict]:
    """Sections with ids made unique within the page (they are anchor targets)."""
    seen: dict[str, int] = {}
    out = []
    for heading, md in h2_sections:
        section = make_section(heading, md, 2)
        n = seen.get(section["id"], 0)
        seen[section["id"]] = n + 1
        if n:
            section["id"] = f"{section['id']}-{n + 1}"
        out.append(section)
    return out


def build_instances(guide: GuideContext | None) -> dict | None:
    """instances.json: the index (its H2 groups as Markdown, the pages each
    group links to) and every instance page as title / intro / H2 sections.
    A page's kind (dungeon | raid) and group (the H3 it is listed under) come
    from where the index links it; pages the index does not link follow in
    filename order with kind null."""
    if guide is None or not has_instances(guide):
        return None
    idir = instance_dir(guide)
    index_path = idir / "index.md"

    # Membership is read from the untransformed index (its relative links).
    _, raw_body = split_h1_and_body(index_path.read_text(encoding="utf-8"))
    _, raw_h2 = split_h2_sections(raw_body)
    listed: dict[str, dict] = {}
    group_slugs: list[list[str]] = []
    for heading, md in raw_h2:
        kind = instance_kind(heading)
        sub = heading
        slugs: list[str] = []
        for line in md.splitlines():
            if line.startswith("### "):
                sub = line[4:].strip()
            for m in INSTANCE_INDEX_LINK.finditer(line):
                slug = m.group(1)
                if not (idir / f"{slug}.md").is_file() or slug in slugs:
                    continue
                slugs.append(slug)
                listed.setdefault(slug, {"kind": kind, "group": sub})
        group_slugs.append(slugs)

    index = guide.page(index_path)
    groups = []
    for (heading, md), slugs in zip(index["sections"], group_slugs):
        groups.append({
            "id": slugify(heading),
            "heading": heading,
            "kind": instance_kind(heading),
            "markdown": md,
            "slugs": slugs,
        })

    unlisted = sorted(p.stem for p in idir.glob("*.md") if p.name != "index.md" and p.stem not in listed)
    pages = []
    for slug in list(listed) + unlisted:
        page = guide.page(idir / f"{slug}.md")
        info = listed.get(slug, {"kind": None, "group": None})
        pages.append({
            "slug": slug,
            "title": page["title"],
            "kind": info["kind"],
            "group": info["group"],
            "intro": page["intro"],
            "sections": unique_sections(page["sections"]),
            "sourceFile": page["sourceFile"],
        })

    return {
        "title": index["title"],
        "intro": index["intro"],
        "sourceFile": index["sourceFile"],
        "groups": groups,
        "pages": pages,
    }


# ---------------------------------------------------------------------------
# Instance maps (site/scripts/maps-source.json, written by tools/maps/)
# ---------------------------------------------------------------------------
#
# tools/maps/extract_maps.py renders each instance's floors from the client's
# minimap textures (public/maps/<slug>/<floor>.webp) and lists, per floor, the
# unique named elites/bosses the server spawns there ("pois", positions as
# 0..1 fractions of the image). Markers are made here, from the page as it is
# now: a boss named on the page (an H3 in a boss section, the first cell of a
# "Boss" table, or a **bold** name) that matches a poi's creature name gets a
# numbered marker linking to its boss card (H3) or its section.

MAPS_SOURCE_PATH = SCRIPT_DIR / "maps-source.json"
MAP_BOSS_SECTION = re.compile(r"boss|encounter|wing|floor|event", re.I)
MAP_TABLE = re.compile(r"^\|\s*(?:boss|encounter)[^|]*\|.*\n\|[-| :]+\|\n((?:\|.*(?:\n|$))*)", re.I | re.M)
MAP_BOLD = re.compile(r"\*\*([^*\n]{3,80})\*\*")


def boss_anchor(heading: str) -> str:
    """Same rule as src/lib/instances.ts bossAnchor()."""
    s = re.sub(r"<[^>]+>", "", heading).lower()
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return f"boss-{s or 'section'}"


def _map_norm(text: str) -> str:
    text = CHIP_HTML.sub("", text)
    text = re.sub(r"<[^>]+>", "", text)
    text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)
    text = text.replace("’", "'").replace("*", "").replace("`", "")
    return " " + re.sub(r"\s+", " ", text).strip().lower() + " "


MAP_ASIDE = re.compile(r"\([^)]*\b(?:replac\w*|removed|formerly|instead|was)\b[^)]*\)", re.I)


def map_candidates(page: dict) -> list[tuple[str, str, int]]:
    """(text, anchor, tier) for every boss the page names: tier 1 = an H3 of a
    boss section, tier 2 = a "Boss" table's first cell, tier 3 = a **bold** name
    inside a boss section, tier 4 = a bold name elsewhere; page order within a
    tier. Only tier 1 and 2 may name a one-word elite."""
    tiers: dict[int, list[tuple[str, str]]] = {1: [], 2: [], 3: [], 4: []}
    for s in page["sections"]:
        md = s["markdown"]
        bossy = bool(MAP_BOSS_SECTION.search(s["heading"]) and re.search(r"^###\s", md, re.M))
        h3s = [(m.start(), m.group(1).strip()) for m in re.finditer(r"^###\s+(.+)$", md, re.M)] if bossy else []
        found: list[tuple[int, int, str, str]] = []
        for pos, h in h3s:
            found.append((1, pos, MAP_ASIDE.sub("", h), boss_anchor(h)))
        for m in MAP_TABLE.finditer(md):
            base = m.start(1)
            for row in re.finditer(r"^\|([^|\n]*)\|", m.group(1), re.M):
                found.append((2, base + row.start(), MAP_ASIDE.sub("", row.group(1).strip()), s["id"]))
        for m in MAP_BOLD.finditer(md):
            under = [h for pos, h in h3s if pos < m.start()]
            anchor = boss_anchor(under[-1]) if under else s["id"]
            found.append((3 if MAP_BOSS_SECTION.search(s["heading"]) else 4, m.start(), m.group(1), anchor))
        for tier, _pos, text, anchor in sorted(found, key=lambda t: t[1]):
            tiers[tier].append((text, anchor))
    return [(t, a, k) for k in (1, 2, 3, 4) for t, a in tiers[k]]


def attach_maps(instances: dict | None) -> int:
    """Adds `map` {provenance, thumb, floors[{floor,label,file,width,height,kind,
    markers[{n,boss,x,y,anchor}]}]} to every instance page that has one."""
    if instances is None or not MAPS_SOURCE_PATH.exists():
        return 0
    source = json.loads(MAPS_SOURCE_PATH.read_text(encoding="utf-8"))
    n_pages = 0
    for page in instances["pages"]:
        entry = source.get("pages", {}).get(page["slug"])
        if not entry:
            continue
        floors = [{k: f[k] for k in ("floor", "label", "file", "width", "height", "kind")} | {"markers": []}
                  for f in entry["floors"]]
        pois = [(fi, p) for fi, f in enumerate(entry["floors"]) for p in f.get("pois", [])]
        used: set[str] = set()
        n = 0
        for text, anchor, tier in map_candidates(page):
            hay = _map_norm(text)
            hits = []
            for fi, p in pois:
                name = p["name"].replace("’", "'")
                if name in used:
                    continue
                if tier > 2 and p.get("rank") != 3 and " " not in name.strip():
                    continue  # a bare one-word elite ("Bishop") in prose is not a boss call-out
                if re.search(r"(?<![a-z0-9'])" + re.escape(name.lower()) + r"(?![a-z0-9'])", hay):
                    hits.append((fi, p))
            if not hits:
                continue
            fi0 = hits[0][0]
            same = [p for fi, p in hits if fi == fi0]
            for _, p in hits:
                used.add(p["name"].replace("’", "'"))
            n += 1
            floors[fi0]["markers"].append({
                "n": n,
                "boss": " & ".join(dict.fromkeys(p["name"] for p in same)),
                "x": same[0]["x"],
                "y": same[0]["y"],
                "anchor": anchor,
            })
        page["map"] = {
            "provenance": {k: v for k, v in source.get("provenance", {}).items()
                           if any(f["kind"] == k for f in floors)},
            "thumb": {"file": entry["thumb"], "width": entry["thumbWidth"], "height": entry["thumbHeight"]},
            "floors": floors,
        }
        n_pages += 1
    return n_pages


# ---------------------------------------------------------------------------
# Guide summaries: viability matrix, talent trees and builds, leveling paths
# ---------------------------------------------------------------------------
#
# The at-a-glance UI (home cards, the class viability matrix, the spec page's
# "At a glance" block, the leveling timeline) is driven by the player-facing
# guide pages, not by the forum-era synthesis. Everything here is parsed from
# guide/classes/<class>/*.md and structured/talents/talent-trees.json; nothing
# is written by hand.

TALENT_TREES_PATH = REPO_ROOT / "structured" / "talents" / "talent-trees.json"
TORTOISE_LINK = re.compile(r"https://xian55\.github\.io/tortoise-db-viewer/\?talents=([a-z]+)&t=([0-9-]*)")
GRADE = re.compile(r"^([SABCDF])(?:([+-])(?![SABCDF]))?(?:\s*[-–/]\s*([SABCDF][+-]?))?(?![a-z])")
NOT_A_ROLE = re.compile(r"^(n/?a|[-—–]+|not an? .*|none)$", re.I)
CHIP_HTML = re.compile(r"<(a|span) class=\"cite[^\"]*\"[^>]*>.*?</\1>")
_TREES_CACHE: dict | None = None


def talent_trees() -> dict:
    global _TREES_CACHE
    if _TREES_CACHE is None:
        _TREES_CACHE = json.loads(TALENT_TREES_PATH.read_text(encoding="utf-8"))["classes"] \
            if TALENT_TREES_PATH.exists() else {}
    return _TREES_CACHE


def compact_talent_tree(class_slug: str) -> dict | None:
    """{tabs: [{name, talents: [{name, row, col, max, req}]}]} in the calculator's
    talent order (the order its link digits use); `req` is the index of the
    prerequisite talent in the same tab."""
    tree = talent_trees().get(class_slug)
    if not tree:
        return None
    tabs = []
    for tab in tree["tabs"]:
        ids = [t["talent_id"] for t in tab["talents"]]
        tabs.append({
            "name": tab["name"],
            "talents": [{
                "name": t["name"] or f"Talent {t['talent_id']}",
                "row": t["row"],
                "col": t["col"],
                "max": t["max_rank"],
                "req": ids.index(t["requires_talent_id"]) if t.get("requires_talent_id") in ids else None,
            } for t in tab["talents"]],
        })
    return {"tabs": tabs}


def decode_tortoise(url: str, class_slug: str) -> dict | None:
    """A tortoise-db-viewer link -> {url, ranks: [[per talent]], totals, split},
    or None when it is not a valid build for this class's 1.18.1 trees."""
    m = TORTOISE_LINK.search(url or "")
    tree = talent_trees().get(class_slug)
    if not m or m.group(1) != class_slug or not tree:
        return None
    segs = m.group(2).split("-")
    tabs = tree["tabs"]
    if len(segs) > len(tabs):
        return None
    ranks = []
    for i, tab in enumerate(tabs):
        seg = segs[i] if i < len(segs) else ""
        if len(seg) > len(tab["talents"]):
            return None
        row = [int(ch) for ch in seg] + [0] * (len(tab["talents"]) - len(seg))
        if any(r > t["max_rank"] for r, t in zip(row, tab["talents"])):
            return None
        ranks.append(row)
    totals = [sum(r) for r in ranks]
    if not 0 < sum(totals) <= 51:
        return None
    return {"url": m.group(0), "ranks": ranks, "totals": totals, "split": "/".join(str(t) for t in totals)}


def plain_md(text: str) -> str:
    """Markdown/HTML cell -> plain words (chips and citations removed)."""
    text = CHIP_HTML.sub("", text)
    text = DISCORD_CITE.sub("", text)
    text = re.sub(r"<[^>]+>", "", text)
    text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)
    text = text.replace("**", "").replace("`", "").replace("__", "")
    text = html.unescape(text)
    return re.sub(r"\s+", " ", text).strip(" ,;")


def md_blocks(markdown: str) -> list[str]:
    return [b.strip("\n") for b in re.split(r"\n\s*\n", markdown) if b.strip()]


def recommendation_block(intro: str, fallback: bool = False) -> tuple[str | None, str]:
    """(the opening **Recommendation:** paragraph plus the list right after it,
    with the label removed; the rest of the intro)."""
    blocks = md_blocks(intro)
    if not blocks:
        return None, intro
    first = blocks[0]
    if not re.match(r"^\*\*(Recommendation|Summary)s?:?\*\*:?", first):
        if not fallback or first.startswith("|"):
            return None, intro
    taken = [re.sub(r"^\*\*(Recommendation|Summary)s?:?\*\*:?\s*", "", first)]
    i = 1
    while i < len(blocks) and re.match(r"^\s*[-*]\s", blocks[i]):
        taken.append(blocks[i])
        i += 1
    rest = "\n\n".join(blocks[i:])
    rec = "\n\n".join(taken).strip()
    return (rec[:1].upper() + rec[1:]) if rec else None, rest


def kv_table(markdown: str) -> tuple[list[dict], str]:
    """The first `| | |` key/value table (Role, Difficulty, Strengths ...) as
    facts, and the markdown without it."""
    lines = markdown.splitlines()
    for i, line in enumerate(lines):
        if re.match(r"^\|\s*\|\s*\|\s*$", line) and i + 1 < len(lines) and TABLE_SEPARATOR.match(lines[i + 1]):
            facts = []
            j = i + 2
            while j < len(lines) and lines[j].startswith("|"):
                cells = split_table_row(lines[j])
                if len(cells) >= 2 and cells[0]:
                    facts.append({"label": plain_md(cells[0]), "markdown": " | ".join(cells[1:]).strip()})
                j += 1
            rest = "\n".join(lines[:i] + lines[j:]).strip("\n")
            return facts, re.sub(r"\n{3,}", "\n\n", rest)
    return [], markdown


def parse_grade(cell_md: str) -> dict:
    """`**S**: the meta ...` -> {grade: "S", label: "S", note: "the meta ...", contested}."""
    plain = plain_md(cell_md)
    contested = "contested" in plain.lower()
    if not plain or re.match(r"^[—–-]+$", plain) or plain.lower() in ("n/a", "na", "none"):
        return {"grade": None, "label": "—", "note": "", "contested": False}
    if re.match(r"^(not an? |n/a\b)", plain, re.I):
        return {"grade": None, "label": "—", "note": plain, "contested": False}
    m = GRADE.match(plain)
    if not m:
        word = re.match(r"^\**\s*([—–-]+|niche|contested)(?![A-Za-z])\s*\**\s*[:.]?\s*", cell_md.strip(), re.I)
        if word:
            label = "—" if word.group(1)[0] in "—–-" else word.group(1).capitalize()
            return {"grade": None, "label": label, "note": cell_md.strip()[word.end():].strip(),
                    "contested": contested}
        return {"grade": None, "label": "", "note": cell_md.strip(), "contested": contested}
    label = m.group(1) + (m.group(2) or "") + (f"–{m.group(3)}" if m.group(3) else "")
    # Remove the leading grade (bold or not) from the Markdown, then its punctuation.
    note = re.sub(r"^\s*\**\s*[SABCDF](?:[+-])?(?:\s*[-–/]\s*[SABCDF][+-]?)?\s*\**\s*[.:]?\s*", "", cell_md, count=1)
    note = re.sub(r"^\*\*\s*", "", note) if note.startswith("**") and note.count("**") % 2 == 1 else note
    note = re.sub(r"^[:.,;]\s*", "", note.strip())
    return {"grade": m.group(1) + (m.group(2) or ""), "label": label, "note": note, "contested": contested}


VIABILITY_COLUMNS = {"raid": "raid", "dungeon": "dungeon", "pvp": "pvp", "leveling": "leveling",
                     "levelling": "leveling", "open world": "farming", "farming": "farming"}


def viability_column_key(header: str) -> str:
    low = plain_md(header).lower()
    for word, key in VIABILITY_COLUMNS.items():
        if word in low:
            return key
    return slugify(low)


def resolve_spec_route(label_md: str, class_slug: str, guide: "GuideContext") -> str | None:
    """The site route a viability row's spec cell points at: its own link, else
    the guide page whose file name matches the spec's name."""
    m = re.search(r"\]\((#/class/[^)\s]+)\)", label_md)
    if m:
        return m.group(1)
    name = slugify(plain_md(label_md))
    stems = [p.stem for p in sorted(guide.class_dir(class_slug).glob("*.md"))
             if p.name not in RESERVED_GUIDE_PAGES and p.stem != "pvp"]
    pick = next((s for s in stems if s == name), None) \
        or next((s for s in stems if name.startswith(s + "-") or name.startswith(s)), None) \
        or next((s for s in stems if s.split("-")[0] == name.split("-")[0]), None)
    if pick is None:
        return None
    return guide.routes.get(f"guide/classes/{class_slug}/{pick}.md")


def parse_viability(index_sections: list[tuple[str, str]], class_slug: str,
                    guide: "GuideContext", playbooks: list[dict]) -> dict | None:
    """The spec viability table of guide/classes/<class>/index.md."""
    by_id = {pb["id"]: pb for pb in playbooks}
    for heading, md in index_sections:
        for _h3, header, rows in markdown_tables(md):
            names = [plain_md(h).lower() for h in header]
            if not any("raid" in n for n in names) or not any("level" in n for n in names):
                continue
            columns = [{"key": viability_column_key(h), "label": plain_md(h)} for h in header[1:]]
            out_rows = []
            for r in rows:
                if not r or not r[0].strip():
                    continue
                label_md = r[0]
                link_text = re.search(r"\[([^\]]+)\]\(", label_md)
                bold = re.search(r"\*\*([^*]+)\*\*", label_md)
                name = plain_md(link_text.group(1) if link_text else (bold.group(1) if bold else label_md))
                full = plain_md(label_md)
                detail = full[len(name):].strip(" ,") if full.startswith(name) else None
                route = resolve_spec_route(label_md, class_slug, guide)
                pid = route.rsplit("/", 1)[1] if route and route.count("/") == 3 else None
                pb = by_id.get(pid) if pid else None
                cells = []
                for i, col in enumerate(columns):
                    cell = r[i + 1] if i + 1 < len(r) else ""
                    g = parse_grade(cell)
                    g["key"] = col["key"]
                    cells.append(g)
                if not route and all(c["grade"] is None and c["label"] in ("—", "") and not c["note"] for c in cells):
                    continue  # "Healer | — | — ..." : the class has no such spec
                out_rows.append({
                    "spec": name,
                    "detail": detail or None,
                    "route": route,
                    "playbookId": pb["id"] if pb else None,
                    "role": pb["role"] if pb else None,
                    "cells": cells,
                })
            # Prose around the table: a legend line before it, notes after it
            # (the "Pages:" line is the site's own navigation).
            lines = md.splitlines()
            start = next(i for i, l in enumerate(lines) if l.startswith("|"))
            end = start
            while end < len(lines) and lines[end].startswith("|"):
                end += 1
            before = "\n".join(lines[:start]).strip()
            after = "\n".join(l for l in lines[end:] if not l.startswith("Pages:")).strip()
            return {
                "heading": heading,
                "columns": columns,
                "rows": out_rows,
                "legend": before or None,
                "notes": re.sub(r"\n{3,}", "\n\n", after) or None,
            }
    return None


def short_heading(h3: str) -> str:
    """`DefTac Impale, 17/3/31 (recommended MT build)` -> `DefTac Impale`."""
    s = re.split(r",\s*\d+/\d+/\d+|\s\d+/\d+/\d+", h3)[0]
    return re.sub(r"\s*\([^)]*\)\s*$", "", s).strip(" ,:") or h3


def guide_builds(page: Path, class_slug: str) -> list[dict]:
    """Every talent-calculator link in a guide page's talent/build sections, labelled
    by the table row, bullet or H3 it sits in, decoded into per-talent ranks."""
    builds: list[dict] = []
    seen: set[str] = set()
    h2 = h3 = ""
    in_builds = False
    for line in page.read_text(encoding="utf-8").splitlines():
        if line.startswith("## "):
            h2, h3 = line[3:].strip(), ""
            in_builds = bool(re.search(r"talent|build", h2, re.I)) and "leveling" not in h2.lower()
            continue
        if line.startswith("### "):
            h3 = plain_md(line[4:])
            continue
        if not in_builds:
            continue
        for m in TORTOISE_LINK.finditer(line):
            decoded = decode_tortoise(m.group(0), class_slug)
            if not decoded or decoded["url"] in seen:
                continue
            seen.add(decoded["url"])
            label = None
            recommended = False
            if line.startswith("|"):
                label = plain_md(split_table_row(line)[0])
            else:
                bullet = re.match(r"^\s*[-*]\s+\*\*([^*]+)\*\*", line)
                if bullet and len(plain_md(bullet.group(1))) <= 34 and not bullet.group(1).strip().endswith(".") \
                        and not re.search(r"\d+/\d+:?$", bullet.group(1).strip()):
                    label = f"{short_heading(h3)}: {plain_md(bullet.group(1)).rstrip(':')}" if h3 and h3.lower() != "variants" else plain_md(bullet.group(1)).rstrip(":")
                elif h3 and h3.lower() != "variants":
                    first_of_h3 = not any(b.get("_h3") == h3 for b in builds)
                    label = h3 if first_of_h3 else f"{short_heading(h3)} variant"
                    recommended = first_of_h3 and "recommended" in h3.lower()
            builds.append({"label": label or f"Build {decoded['split']}", "recommended": recommended,
                           "_h3": h3, **decoded})
    for b in builds:
        b.pop("_h3", None)
    return builds


def tidy_build_label(build: dict) -> dict:
    """`Raid 43/8/0 (recommended)` -> label `Raid 43/8/0`, tag `recommended`."""
    m = re.search(r"\s*\(([^()]*recommended[^()]*)\)", build["label"], re.I)
    if m:
        build["label"] = (build["label"][:m.start()] + build["label"][m.end():]).strip()
        build["tag"] = m.group(1)
        build["recommended"] = True
    else:
        build.setdefault("tag", None)
    return build


def playbook_builds(yaml_data: dict | None, class_slug: str, guide_path: Path | None) -> list[dict]:
    """The published build (the YAML's working calculator link) first, then every
    other build the guide page links, deduplicated."""
    talents = (yaml_data or {}).get("talents") or {}
    primary = None
    for key in ("build_link_tortoise", "calculator", "build_link"):
        link = talents.get(key)
        if isinstance(link, str):
            primary = decode_tortoise(link, class_slug)
            if primary:
                break
    from_guide = guide_builds(guide_path, class_slug) if guide_path else []
    out: list[dict] = []
    if primary:
        match = next((b for b in from_guide if b["url"] == primary["url"]), None)
        name = plain_md(str(talents.get("build_name") or "")) or None
        out.append({**primary, "label": match["label"] if match else (name or f"Build {primary['split']}"),
                    "recommended": True, "source": "playbook"})
    spec_word = str((yaml_data or {}).get("spec") or "").split(" ")[0].lower()
    for b in from_guide:
        if primary and b["url"] == primary["url"]:
            continue
        # With no published build of its own, only builds named for the spec
        # (a shared PvP page lists every spec's builds).
        if not primary and spec_word and spec_word not in b["label"].lower():
            continue
        out.append({**b, "source": "guide"})
    return [tidy_build_label(b) for b in out]


LEVEL_RANGE = re.compile(r"(\d+)\s*(?:[-–]\s*(\d+))?")
RANK_RANGE = re.compile(r"(\d+)\s*(?:(?:→|->|[-–])\s*(\d+))?")


def find_talent(class_slug: str, name: str) -> tuple[str, dict] | None:
    tree = talent_trees().get(class_slug)
    if not tree:
        return None
    key = re.sub(r"[^a-z0-9]+", " ", name.lower()).strip()
    for tab in tree["tabs"]:
        for t in tab["talents"]:
            if t["name"] and re.sub(r"[^a-z0-9]+", " ", t["name"].lower()).strip() == key:
                return tab["name"], t
    return None


def steps_end_state(class_slug: str, steps: list[dict]) -> dict | None:
    """The build a fully resolved talent order ends on, as a calculator link."""
    tree = talent_trees().get(class_slug)
    if not tree or any(not st["talent"] or not st["rankTo"] for st in steps):
        return None
    digits = [[0] * len(tab["talents"]) for tab in tree["tabs"]]
    for st in steps:
        for ti, tab in enumerate(tree["tabs"]):
            if tab["name"] != st["tree"]:
                continue
            for i, t in enumerate(tab["talents"]):
                if t["name"] == st["talent"]:
                    digits[ti][i] = max(digits[ti][i], min(st["rankTo"], t["max_rank"]))
    segs = ["".join(str(d) for d in row).rstrip("0") for row in digits]
    while segs and segs[-1] == "":
        segs.pop()
    url = f"https://xian55.github.io/tortoise-db-viewer/?talents={class_slug}&t={'-'.join(segs)}"
    return decode_tortoise(url, class_slug)


def leveling_paths(class_slug: str, orders: list[dict], raw_leveling: str) -> list[dict]:
    """The talent-order tables of a leveling guide as level-by-level paths:
    each step resolved to its tree and rank range, respec levels marked, and
    the section's calculator link decoded as the end state."""
    # calculator links per (H2, H3) of the raw leveling page
    links: dict[tuple[str, str], list[str]] = {}
    h2 = h3 = ""
    for line in raw_leveling.splitlines():
        if line.startswith("## "):
            h2, h3 = plain_md(line[3:]), ""
        elif line.startswith("### "):
            h3 = plain_md(line[4:])
        for m in TORTOISE_LINK.finditer(line):
            links.setdefault((h2, h3), []).append(m.group(0))
    paths = []
    for order in orders:
        steps = []
        resolved = 0
        for s in order["steps"]:
            text = plain_md(s["talent"])
            base = re.sub(r"\s*\(.*?\)\s*", " ", text).strip()
            base = re.sub(r"\s+\d+/\d+$", "", base)
            m_inline = re.match(r"^(.*?)\s+(\d+)\s*/\s*(\d+)$", text)
            hit = find_talent(class_slug, base) or (find_talent(class_slug, m_inline.group(1)) if m_inline else None)
            lv_text = plain_md(s["level"] or "")
            lv = LEVEL_RANGE.search(lv_text)
            pts = RANK_RANGE.search(plain_md(s["points"] or "")) if s.get("points") else None
            if hit:
                resolved += 1
            r_from = int(pts.group(1)) if pts else None
            r_to = int(pts.group(2)) if pts and pts.group(2) else r_from
            steps.append({
                "from": int(lv.group(1)) if lv else None,
                "to": int(lv.group(2) or lv.group(1)) if lv else None,
                "levelText": lv_text or None,
                "talent": hit[1]["name"] if hit else None,
                "tree": hit[0] if hit else (plain_md(s["tree"]) if s.get("tree") else None),
                "max": hit[1]["max_rank"] if hit else None,
                "rankFrom": r_from,
                "rankTo": r_to,
                "markdown": s["talent"],
                "note": s.get("note"),
                "respec": "respec" in (lv_text + " " + text).lower(),
            })
        if not steps or resolved < max(3, len(steps) // 2):
            continue  # a gear / dungeon / ability table, not a talent order
        title = plain_md(order["title"])
        subtitle = plain_md(order["subtitle"]) if order.get("subtitle") else None
        label = f"{title} {subtitle or ''}"
        respec_at = re.search(r"respec(?:\s+at)?\s+(\d+)", label, re.I)
        cands = links.get((title, subtitle or ""), []) or ([] if subtitle else links.get((title, ""), []))
        end = next((d for d in (decode_tortoise(u, class_slug) for u in cands) if d), None)
        if end is None and not any(st["respec"] for st in steps):
            end = steps_end_state(class_slug, steps)
        paths.append({
            "id": order["id"],
            "title": title,
            "subtitle": subtitle,
            "approximate": order.get("approximate", False),
            "respecAt": int(respec_at.group(1)) if respec_at else None,
            "noRespec": bool(re.search(r"no respec", label, re.I)),
            "steps": steps,
            "end": end,
        })
    return paths


# ---------------------------------------------------------------------------
# Classes
# ---------------------------------------------------------------------------

def playbook_files(class_slug: str) -> list[Path]:
    """synthesis/classes/<class>/<spec>-<role>.md, the list of playbooks (the
    guide pages are joined to them through the YAML `guide:` key)."""
    class_dir = SYN_CLASSES / class_slug
    return [p for p in sorted(class_dir.glob("*.md"))
            if p.name not in ("README.md", "leveling.md") and parse_playbook_filename(p.name)]


def build_leveling(sections_src: tuple[str, list[tuple[str, str]]], source_file: str) -> dict:
    lvl_intro, lvl_sections = sections_src
    sections = []
    if lvl_intro.strip():
        sections.append(make_leveling_section("Introduction", lvl_intro, 2))
    sections.extend(make_leveling_section(h, md, 2) for h, md in lvl_sections)
    return {
        "sections": sections,
        "talentOrders": parse_talent_orders(sections),
        "sourceFile": source_file,
    }


def build_class_entry(class_slug: str, matrix_rows: list[dict],
                      guide: GuideContext | None = None) -> dict:
    class_dir = SYN_CLASSES / class_slug
    class_name = CLASS_NAMES[class_slug]
    use_guide = guide is not None and guide.has_class(class_slug)
    gdir = guide.class_dir(class_slug) if use_guide else None

    # Synthesis README: the class overview, or the fallback for whatever the
    # guide does not cover.
    readme_text = read_md(class_dir / "README.md")
    _, readme_body = split_h1_and_body(readme_text)
    syn_intro, syn_h2 = split_h2_sections(readme_body)

    def find(h2: list[tuple[str, str]], test) -> str | None:
        return next((md for h, md in h2 if test(h)), None)

    syn_gaps = find(syn_h2, lambda h: "gap" in h.lower())
    syn_patch = find(syn_h2, lambda h: "1.18.1" in h)

    overview = None
    sources_doc = None
    guide_pages: list[dict] = []
    recommendation = None
    if use_guide:
        index = guide.page(gdir / "index.md")
        summary = first_paragraph(index["intro"]) or first_paragraph(syn_intro)
        recommendation, _ = recommendation_block(index["intro"], fallback=True)
        overview = index["intro"] or None
        h2 = [(h, md) for h, md in index["sections"] if h.strip().lower() != "pages"]
        readme_sections = [make_section(h, md, 2) for h, md in h2]
        patch_changes = (find(h2, lambda h: "1.18.1" in h and "chang" in h.lower())
                         or find(h2, lambda h: "1.18.1" in h and "viab" not in h.lower())
                         or syn_patch)
        gaps = find(h2, lambda h: "gap" in h.lower())
        if (gdir / "sources.md").is_file():
            sources_doc = guide.doc(gdir / "sources.md", "sources")
            if gaps is None:
                gaps = next((s["markdown"] for s in sources_doc["sections"]
                             if "gap" in s["heading"].lower()), None)
        if gaps is None:
            gaps = syn_gaps
        claimed = {guide.repo_rel(page) for _, page in guide_playbook_claims(class_slug, guide)}
        for page in sorted(gdir.glob("*.md")):
            if page.name in RESERVED_GUIDE_PAGES or guide.repo_rel(page) in claimed:
                continue
            guide_pages.append(guide.doc(page, page.stem))
    else:
        summary = first_paragraph(syn_intro)
        readme_sections = [make_section(h, md, 2) for h, md in syn_h2]
        gaps = syn_gaps
        patch_changes = syn_patch

    class_matrix_rows = [
        {k: v for k, v in r.items()}
        for r in matrix_rows
        if r["class"] and r["class"].lower() == class_slug.lower()
    ]

    playbooks = [
        pb for pb in (
            build_playbook(class_slug, class_name, p, matrix_rows, guide if use_guide else None)
            for p in playbook_files(class_slug)
        ) if pb is not None
    ]
    playbooks.sort(key=playbook_sort_key)
    for pb in playbooks:
        pb.pop("_spec_slug", None)

    viability = parse_viability(index["sections"], class_slug, guide, playbooks) if use_guide else None

    leveling = None
    if use_guide and (gdir / "leveling.md").is_file():
        page = guide.page(gdir / "leveling.md")
        leveling = build_leveling((page["intro"], page["sections"]), page["sourceFile"])
        leveling["recommendation"], _ = recommendation_block(page["intro"])
        leveling["paths"] = leveling_paths(class_slug, leveling["talentOrders"],
                                           (gdir / "leveling.md").read_text(encoding="utf-8"))
    else:
        leveling_path = class_dir / "leveling.md"
        if leveling_path.exists():
            _, lvl_body = split_h1_and_body(read_md(leveling_path))
            leveling = build_leveling(split_h2_sections(lvl_body),
                                      str(leveling_path.relative_to(REPO_ROOT)))

    gear = load_gear_yaml(class_slug)
    gear_markdown = build_gear_markdown(class_slug)

    # YAML text is rendered by the UI as plain text, not Markdown: the chips
    # for its `[[d:...]]` citations are looked up in this map instead.
    citations: dict = {}
    for pb in playbooks:
        EVIDENCE.collect(pb["yaml"], citations)
    EVIDENCE.collect(gear, citations)
    EVIDENCE.collect(class_matrix_rows, citations)

    return {
        "slug": class_slug,
        "name": class_name,
        "color": CLASS_COLORS[class_slug],
        "summary": summary,
        "recommendation": recommendation,
        "overview": overview,
        "viability": viability,
        "talentTree": compact_talent_tree(class_slug),
        "readme": readme_sections,
        "matrix": class_matrix_rows,
        "playbooks": playbooks,
        "leveling": leveling,
        "gaps": gaps,
        "patchChanges": patch_changes,
        "gear": gear,
        "gearMarkdown": gear_markdown,
        "guidePath": f"guide/classes/{class_slug}/index.md" if use_guide else None,
        "sources": sources_doc,
        "guidePages": guide_pages,
        "citations": dict(sorted(citations.items())),
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
        "The class guides (guide/classes/**) are distilled from a full read of the archived "
        "Turtle WoW Discord in the 1.18.1 era (every class channel, from the patch announcement "
        "to the shutdown), with the forum and the community wiki as secondary sources. Every "
        "recommendation carries its citation: a Discord message ([[d:<channel>#<id>]], the "
        "verbatim text in structured/discord/evidence-<channel>.jsonl) or a forum or wiki link "
        "labelled staff, player or wiki. Where the sources disagree the guide says 'contested'; "
        "where they are silent it says so in its gaps. Forum links stop resolving after the "
        "forum closes on 2026-10-16; the archived post ids and quoted text remain in the "
        "repository. The earlier forum-era synthesis (synthesis/classes/**, the spec-role "
        "matrix) is kept as a research archive."
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

def parse_args(argv: list[str]) -> argparse.Namespace:
    ap = argparse.ArgumentParser(description="Build site/src/data/*.json from the repository.")
    ap.add_argument("--guide-dir", default=os.environ.get("TKB_GUIDE_DIR"),
                    help="guide/ directory to read (default: <repo>/guide; env TKB_GUIDE_DIR)")
    ap.add_argument("--structured-dir", default=os.environ.get("TKB_STRUCTURED_DIR"),
                    help="structured/ directory whose classes/** and discord/** files override "
                         "the repo's (env TKB_STRUCTURED_DIR)")
    return ap.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    global GUIDE_DIR, STRUCTURED_OVERRIDE
    args = parse_args(sys.argv[1:] if argv is None else argv)
    if args.guide_dir:
        GUIDE_DIR = Path(args.guide_dir).expanduser().resolve()
        if not GUIDE_DIR.is_dir():
            raise SystemExit(f"build-data: --guide-dir {GUIDE_DIR} is not a directory")
    if args.structured_dir:
        STRUCTURED_OVERRIDE = Path(args.structured_dir).expanduser().resolve()
        if not STRUCTURED_OVERRIDE.is_dir():
            raise SystemExit(f"build-data: --structured-dir {STRUCTURED_OVERRIDE} is not a directory")

    DATA_DIR.mkdir(parents=True, exist_ok=True)

    matrix_data = load_matrix()
    matrix_rows = matrix_data["rows"]

    has_guide = (GUIDE_DIR / "classes").is_dir() or (GUIDE_DIR / "instances").is_dir()
    guide = GuideContext(GUIDE_DIR) if has_guide else None
    if guide is not None:
        register_guide_routes(guide)
        register_instance_routes(guide)

    classes = [build_class_entry(slug, matrix_rows, guide) for slug in CLASS_ORDER]
    instances = build_instances(guide)
    map_pages = attach_maps(instances)
    guide_classes = [c["slug"] for c in classes if c["guidePath"]]

    matrix_json = {
        "roles": matrix_data["roles"],
        "standings": matrix_data["standings"],
        "rows": matrix_rows,
        "coverageMarkdown": strip_h1(read_md(COVERAGE_MD_PATH)),
        "matrixMarkdown": strip_h1(read_md(MATRIX_MD_PATH)),
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
    meta_json["guideClasses"] = guide_classes
    meta_json["discordCitations"] = {
        "resolved": EVIDENCE.resolved,
        "unresolved": len(EVIDENCE.unresolved),
    }

    meta_json["instanceCounts"] = {
        "pages": len(instances["pages"]) if instances else 0,
        "dungeons": sum(1 for p in instances["pages"] if p["kind"] == "dungeon") if instances else 0,
        "raids": sum(1 for p in instances["pages"] if p["kind"] == "raid") if instances else 0,
    }
    # Relative links whose target is not in the repository (rendered as text).
    meta_json["unwrappedLinks"] = sorted(set(guide.unwrapped_links)) if guide else []

    instances_path = DATA_DIR / "instances.json"
    if instances is not None:
        instances_path.write_text(
            json.dumps(instances, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    elif instances_path.exists():
        instances_path.unlink()
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
    print(f"Discord citations in Markdown: {EVIDENCE.resolved} resolved, "
          f"{len(EVIDENCE.unresolved)} not in the evidence files (rendered as neutral chips)")
    for miss in sorted(set(EVIDENCE.unresolved))[:5]:
        print(f"  e.g. unresolved: {miss}")
    if instances is not None:
        ic = meta_json["instanceCounts"]
        print(f"Instances: {ic['pages']} pages ({ic['dungeons']} dungeons, {ic['raids']} raids), "
              f"{map_pages} with maps")
    if guide is None:
        print(f"No guide directory at {GUIDE_DIR / 'classes'}; every class built from synthesis/")
    else:
        from_guide = sum(1 for c in classes for p in c["playbooks"] if p["guidePath"])
        print(f"Guide classes ({len(guide_classes)}): {', '.join(guide_classes) or 'none'}; "
              f"{from_guide} playbooks from guide pages")
        if guide.unwrapped_links:
            print(f"Links to pages not in the repository (kept as text): {len(guide.unwrapped_links)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
