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
        else:
            extra_sections.append(make_section(heading, section_md, 2))
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
        # Guide pages open with their recommendation instead of an "Overview"
        # heading; that opening is the overview.
        if sections["overview"] is None and intro_md.strip():
            sections["overview"] = make_section("Overview", intro_md, 2)
        source_file = guide.repo_rel(guide_path)
    else:
        text = read_md(md_path)
        title, body = split_h1_and_body(text)
        intro_md, h2_sections = split_h2_sections(body)
        sections, extra_sections = map_sections(h2_sections, SECTION_KEYWORDS)
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
        "sourceFile": source_file,
        "guidePath": source_file if guide_path is not None else None,
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
        claims = sorted(guide_playbook_claims(slug, guide),
                        key=lambda c: (ROLE_ORDER.index(parse_playbook_filename(c[0] + ".md")[1]), c[0]))
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
    if use_guide:
        index = guide.page(gdir / "index.md")
        summary = first_paragraph(index["intro"]) or first_paragraph(syn_intro)
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

    leveling = None
    if use_guide and (gdir / "leveling.md").is_file():
        page = guide.page(gdir / "leveling.md")
        leveling = build_leveling((page["intro"], page["sections"]), page["sourceFile"])
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
        "overview": overview,
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
        print(f"Instances: {ic['pages']} pages ({ic['dungeons']} dungeons, {ic['raids']} raids)")
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
