#!/usr/bin/env python3
"""Acceptance tests for site/src/data/*.json (PLAN.md §5).

Run after build-data.py:
    python3 scripts/test_data.py

Exits non-zero (and prints every failure) if any assertion fails.
"""
from __future__ import annotations

import glob
import json
import re
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


SECTION_KEYS = ["overview", "talents", "stats", "rotationSingle", "rotationAoe", "cooldowns",
                "roleStrategy", "gear", "enchants", "consumables", "mistakes", "sources"]
CHIP = re.compile(r'<a class="cite cite-discord" href="(https://github\.com/[^"]+/structured/discord/'
                  r'evidence-[a-z0-9_-]+\.jsonl#L\d+)" title="[^"<>|]*">[^<|]*</a>')
UNKNOWN_CHIP = re.compile(r'<span class="cite cite-discord cite-unknown" title="[^"<>|]*">[^<|]*</span>')


def all_markdown(entry: dict):
    """(where, markdown) for every Markdown string of a class entry."""
    yield "summary", entry.get("summary") or ""
    yield "overview", entry.get("overview") or ""
    for s in entry.get("readme") or []:
        yield f"readme/{s['id']}", s["markdown"]
    for doc in [entry.get("sources")] + list(entry.get("guidePages") or []):
        if doc:
            yield f"{doc['slug']}/intro", doc["intro"]
            for s in doc["sections"]:
                yield f"{doc['slug']}/{s['id']}", s["markdown"]
    for s in (entry.get("leveling") or {}).get("sections") or []:
        yield f"leveling/{s['id']}", s["markdown"]
    for pb in entry.get("playbooks") or []:
        yield f"{pb['id']}/intro", pb["intro"]
        for key, s in pb["sections"].items():
            if s:
                yield f"{pb['id']}/{key}", s["markdown"]
        for s in pb["extraSections"]:
            yield f"{pb['id']}/{s['id']}", s["markdown"]


def check_guides(classes: list, meta: dict) -> None:
    guide_classes = [c["slug"] for c in classes if c.get("guidePath")]
    check(meta.get("guideClasses") == guide_classes,
          f"meta.guideClasses {meta.get('guideClasses')} != classes with guidePath {guide_classes}")
    for c in classes:
        for pb in c["playbooks"]:
            missing = [k for k in SECTION_KEYS if k not in pb["sections"]]
            check(not missing, f"{c['slug']}/{pb['id']}: sections lacks keys {missing}")
            check("guidePath" in pb and "sourceFile" in pb,
                  f"{c['slug']}/{pb['id']}: guidePath/sourceFile missing")
            if pb.get("guidePath"):
                check(c.get("guidePath") is not None,
                      f"{c['slug']}/{pb['id']}: guide playbook in a class without a guide index")
                check(pb["guidePath"].startswith(f"guide/classes/{c['slug']}/"),
                      f"{c['slug']}/{pb['id']}: guidePath {pb['guidePath']} outside the class guide")
                want = (pb.get("yaml") or {}).get("guide")
                check(want == pb["guidePath"],
                      f"{c['slug']}/{pb['id']}: guidePath {pb['guidePath']} != yaml guide {want}")
        if not c.get("guidePath"):
            check(c.get("sources") is None and not c.get("guidePages"),
                  f"{c['slug']}: a synthesis-built class carries guide sources/pages")
            continue
        check(c.get("leveling") is not None and c["leveling"]["sourceFile"].startswith("guide/"),
              f"{c['slug']}: guide class leveling is not read from its guide leveling.md")
        check(c.get("sources") is not None and len(c["sources"]["sections"]) > 0,
              f"{c['slug']}: guide class has no sources page")
        check(c.get("overview"), f"{c['slug']}: guide class has no overview")

        for where, md in all_markdown(c):
            label = f"{c['slug']}/{where}"
            check("[[d:" not in md, f"{label}: unrendered [[d:...]] citation")
            # every emitted chip has the exact shape the sanitizer and CSS expect
            leftovers = re.sub(CHIP, "", re.sub(UNKNOWN_CHIP, "", md))
            check("cite-discord" not in leftovers, f"{label}: malformed Discord citation chip")
            # talents.turtlecraft.gg is offline: its URLs may appear only as code
            # (GFM would autolink a bare URL; the host named in prose, or quoted
            # in a chip's hover title, is not a link)
            no_code = re.sub(r"`[^`]*`", "", leftovers)
            check(not re.search(r"(?:https?://|www\.)talents\.turtlecraft\.gg", no_code),
                  f"{label}: a talents.turtlecraft.gg URL outside a code span")
            check(not re.search(r"href=\"https?://talents\.turtlecraft\.gg", md)
                  and not re.search(r"\]\(https?://talents\.turtlecraft\.gg", md),
                  f"{label}: a link to the offline talents.turtlecraft.gg")
            # relative links to guide .md files must have become routes or URLs
            bad = re.findall(r"\]\((?!https?:|#/|mailto:)[^)]*\.md(?:#[^)]*)?\)", md)
            check(not bad, f"{label}: unrewritten relative links {bad[:3]}")


INSTANCE_ROUTE = re.compile(r"\]\(#/instances/([^)\s#]+)\)|href=\"#/instances/([^\"#]+)\"")
CLASS_ROUTE = re.compile(r"\]\(#/class/([a-z]+)[^)]*\)")


def check_markdown_common(label: str, md: str) -> None:
    """No raw citations, well-formed chips, no dangling relative .md links."""
    check("[[d:" not in md, f"{label}: unrendered [[d:...]] citation")
    leftovers = re.sub(CHIP, "", re.sub(UNKNOWN_CHIP, "", md))
    check("cite-discord" not in leftovers, f"{label}: malformed Discord citation chip")
    bad = re.findall(r"\]\((?!https?:|#/|mailto:)[^)]*\.md(?:#[^)]*)?\)", md)
    check(not bad, f"{label}: unrewritten relative links {bad[:3]}")


PROFESSIONS_ROUTE = re.compile(r"\]\(#/class/([a-z]+)/professions\)")
# one-segment routes in Markdown links: #/professions, #/pvp, #/mechanics, #/matrix ...
TOP_ROUTE = re.compile(r"\]\(#/([a-z0-9-]+)(?:\?[^)\s]*)?\)")
SITE_TOP_ROUTES = {"instances", "matrix", "archive", "about", "glossary"}
# Keep in step with build-data.py GENERAL_GUIDE_ROUTE_SLUGS / GENERAL_GUIDE_SKIP.
GENERAL_GUIDE_ROUTE_SLUGS = {"server-mechanics": "mechanics"}
GENERAL_GUIDE_SKIP = {"index.md", "readme.md"}


def general_guides_on_disk() -> dict[str, str]:
    """route slug -> guide/<name>.md for every top-level guide page."""
    out = {}
    for p in sorted((REPO_ROOT / "guide").glob("*.md")):
        if p.is_file() and p.name.lower() not in GENERAL_GUIDE_SKIP:
            out[GENERAL_GUIDE_ROUTE_SLUGS.get(p.stem, p.stem)] = f"guide/{p.name}"
    return out


def check_general_guides(classes: list) -> list:
    """guide/*.md -> guides.json: one entry per page at #/<slug> (the route
    appears only when its file exists), links resolved both ways. Returns the
    parsed guide entries."""
    on_disk = general_guides_on_disk()
    path = DATA_DIR / "guides.json"
    check(not (DATA_DIR / "professions.json").exists(),
          "professions.json is stale (the overview lives in guides.json)")
    if not on_disk:
        check(not path.exists(), "guides.json exists but guide/ has no top-level page")
        return []
    check(path.exists(), f"guide/ has {sorted(on_disk.values())} but guides.json is missing")
    if not path.exists():
        return []
    data = load_json("guides.json")
    guides = (data or {}).get("guides") or []
    got = {g.get("slug"): g.get("sourceFile") for g in guides}
    check(got == on_disk, f"guides.json pages {got} != guide/*.md on disk {on_disk}")
    class_slugs = {c["slug"] for c in classes}
    inst = load_json("instances.json") if (DATA_DIR / "instances.json").exists() else None
    inst_slugs = {p["slug"] for p in (inst or {}).get("pages") or []}
    top_routes = SITE_TOP_ROUTES | set(on_disk)
    for g in guides:
        slug = g.get("slug")
        check(g.get("route") == f"#/{slug}", f"guides.json {slug}: route {g.get('route')!r}")
        check(isinstance(g.get("title"), str) and g["title"].strip() != "", f"guides.json {slug}: no title")
        sections = g.get("sections") or []
        check(len(sections) > 0, f"guides.json {slug}: no sections")
        ids = [s["id"] for s in sections]
        check(len(set(ids)) == len(ids), f"guides.json {slug}: duplicate section ids")
        check(isinstance(g.get("recommendation"), (str, type(None))),
              f"guides.json {slug}: recommendation must be a string or null")
        for label, md in [(f"{slug}/intro", g.get("intro") or "")] + [(f"{slug}/{s['id']}", s["markdown"]) for s in sections]:
            check_markdown_common(label, md)
            for m in CLASS_ROUTE.finditer(md):
                check(m.group(1) in class_slugs, f"{label}: link to unknown class {m.group(1)}")
            for m in INSTANCE_ROUTE.finditer(md):
                check((m.group(1) or m.group(2)) in inst_slugs, f"{label}: link to unknown instance page {m.group(0)}")
            for m in TOP_ROUTE.finditer(md):
                check(m.group(1) in top_routes, f"{label}: link to unknown page #/{m.group(1)}")
    # nothing links a general guide as a GitHub URL, and every #/<slug> link resolves
    texts = [("classes.json", json.dumps(classes, ensure_ascii=False))]
    if inst is not None:
        texts.append(("instances.json", json.dumps(inst, ensure_ascii=False)))
    texts.append(("guides.json", json.dumps(guides, ensure_ascii=False)))
    for where, text in texts:
        for src in on_disk.values():
            check(f"/{src}" not in text, f"{where} links to {src} on GitHub (use its #/ route)")
        for m in TOP_ROUTE.finditer(text):
            check(m.group(1) in top_routes, f"{where}: link to unknown page #/{m.group(1)}")
    return guides


def check_professions(classes: list, guides: list) -> None:
    """The professions overview (guides.json slug "professions"); class
    professions pages have their own route and link back to it as #/professions."""
    doc = next((g for g in guides if g.get("slug") == "professions"), None)
    if doc is None:
        check(not (REPO_ROOT / "guide" / "professions.md").is_file(),
              "guide/professions.md exists but guides.json has no professions entry")
        return
    sections = doc.get("sections") or []
    texts = [("professions/intro", doc.get("intro") or "")] + [(f"professions/{s['id']}", s["markdown"]) for s in sections]
    slugs = {c["slug"] for c in classes}
    with_page = {c["slug"] for c in classes if any(d["slug"] == "professions" for d in c.get("guidePages") or [])}
    for label, md in texts:
        for m in PROFESSIONS_ROUTE.finditer(md):
            check(m.group(1) in with_page, f"{label}: #/class/{m.group(1)}/professions has no class professions page")
    # every class professions page on disk is in the data and reachable from the overview
    on_disk = {p.parent.name for p in (REPO_ROOT / "guide" / "classes").glob("*/professions.md")}
    check(on_disk <= with_page, f"class professions pages missing from classes.json: {sorted(on_disk - with_page)}")
    linked = {m.group(1) for _, md in texts for m in PROFESSIONS_ROUTE.finditer(md)}
    check(with_page <= linked, f"professions overview does not link {sorted(with_page - linked)}")
    check(slugs >= with_page, "professions pages for unknown classes")
    text = json.dumps(classes, ensure_ascii=False)
    check("/guide/professions)" not in text, "classes.json links to #/class/<slug>/guide/professions (use /professions)")


def check_instances(classes: list, meta: dict) -> None:
    """guide/instances/** -> instances.json (dungeon and raid pages)."""
    idir = REPO_ROOT / "guide" / "instances"
    path = DATA_DIR / "instances.json"
    if not (idir / "index.md").is_file():
        check(not path.exists(), "instances.json exists but guide/instances/index.md does not")
        return
    data = load_json("instances.json")
    if data is None:
        return
    on_disk = sorted(p.stem for p in idir.glob("*.md") if p.name != "index.md")
    pages = data.get("pages") or []
    slugs = [p["slug"] for p in pages]
    check(sorted(slugs) == on_disk,
          f"instances.json pages {len(slugs)} != guide/instances pages on disk {len(on_disk)}")
    check(len(set(slugs)) == len(slugs), "instances.json has duplicate page slugs")
    by_slug = {p["slug"]: p for p in pages}
    kinds = {k: sum(1 for p in pages if p["kind"] == k) for k in ("dungeon", "raid")}
    check(meta.get("instanceCounts") == {"pages": len(pages), "dungeons": kinds["dungeon"],
                                         "raids": kinds["raid"]},
          f"meta.instanceCounts {meta.get('instanceCounts')} does not match instances.json")

    # Index: two groups (Dungeons, Raids); every link resolves; every page listed.
    groups = data.get("groups") or []
    check([g["kind"] for g in groups] == ["dungeon", "raid"],
          f"index groups {[g['heading'] for g in groups]} are not Dungeons, Raids")
    listed = [s for g in groups for s in g["slugs"]]
    check(sorted(set(listed)) == on_disk,
          f"index lists {len(set(listed))} of {len(on_disk)} pages; unlisted "
          f"{sorted(set(on_disk) - set(listed))}")
    raw_index = (idir / "index.md").read_text(encoding="utf-8")
    raw_links = set(re.findall(r"\]\(([a-z0-9-]+)\.md\)", raw_index))
    missing = sorted(raw_links - set(on_disk))
    check(not missing, f"index.md links to missing instance pages {missing}")
    for g in groups:
        routed = {a or b for a, b in INSTANCE_ROUTE.findall(g["markdown"])}
        check(set(g["slugs"]) <= routed, f"index/{g['id']}: slugs without a #/instances route link")
        for slug in g["slugs"]:
            page = by_slug.get(slug)
            check(page is not None and page["kind"] == g["kind"],
                  f"index/{g['id']}: {slug} is not a {g['kind']} page")

    class_slugs = {c["slug"] for c in classes}
    docs = [("index/intro", data.get("intro") or "")] + [(f"index/{g['id']}", g["markdown"]) for g in groups]
    for p in pages:
        check(p["title"].strip() != "", f"instances/{p['slug']}: empty title")
        check(p["sourceFile"] == f"guide/instances/{p['slug']}.md",
              f"instances/{p['slug']}: sourceFile {p['sourceFile']}")
        check(len(p["sections"]) > 0, f"instances/{p['slug']}: no sections")
        ids = [s["id"] for s in p["sections"]]
        check(len(set(ids)) == len(ids), f"instances/{p['slug']}: duplicate section ids")
        docs.append((f"instances/{p['slug']}/intro", p["intro"]))
        docs.extend((f"instances/{p['slug']}/{s['id']}", s["markdown"]) for s in p["sections"])
    for label, md in docs:
        check_markdown_common(label, md)
        for a, b in INSTANCE_ROUTE.findall(md):
            check((a or b) in by_slug, f"{label}: link to unknown instance page {a or b}")
        for cls in CLASS_ROUTE.findall(md):
            check(cls in class_slugs, f"{label}: link to unknown class {cls}")
        check("/guide/instances/" not in md, f"{label}: instance link left as a repository URL")

    # Class guide pages link to instances as site routes, never GitHub or text.
    classes_text = (DATA_DIR / "classes.json").read_text(encoding="utf-8")
    check("/guide/instances/" not in classes_text, "classes.json links to guide/instances/ on GitHub")
    for a, b in INSTANCE_ROUTE.findall(classes_text.replace('\\"', '"')):
        check((a or b) in by_slug, f"classes.json: link to unknown instance page {a or b}")
    dangling = [u for u in meta.get("unwrappedLinks") or []
                if u.startswith("guide/instances/") or "instances/" in u.split(" -> ", 1)[-1]]
    check(not dangling, f"instance links kept as text (target missing): {dangling[:5]}")


def image_size(path: Path) -> tuple[int, int] | None:
    """(width, height) of a WebP file (VP8 / VP8L / VP8X), without Pillow."""
    b = path.read_bytes()[:40]
    if b[:4] != b"RIFF" or b[8:12] != b"WEBP":
        return None
    kind = b[12:16]
    if kind == b"VP8 ":
        return int.from_bytes(b[26:28], "little") & 0x3FFF, int.from_bytes(b[28:30], "little") & 0x3FFF
    if kind == b"VP8L":
        v = int.from_bytes(b[21:25], "little")
        return (v & 0x3FFF) + 1, ((v >> 14) & 0x3FFF) + 1
    if kind == b"VP8X":
        return int.from_bytes(b[24:27], "little") + 1, int.from_bytes(b[27:30], "little") + 1
    return None


def check_maps(data: dict | None) -> tuple[int, int, int]:
    """Instance maps (tools/maps/ -> public/maps/, page.map): every file exists,
    is a WebP of the stated size within sane bounds, markers sit on the image and
    link to an anchor the page renders. -> (pages, floors, markers)."""
    if not data:
        return 0, 0, 0
    public = SITE_DIR / "public"
    source = SITE_DIR / "scripts" / "maps-source.json"
    n_pages = n_floors = n_markers = 0
    total = 0
    for p in data.get("pages") or []:
        m = p.get("map")
        if not m:
            continue
        n_pages += 1
        label = f"instances/{p['slug']}/map"
        anchors = {s["id"] for s in p["sections"]}
        for s in p["sections"]:
            if re.search(r"boss|encounter|wing|floor|event", s["heading"], re.I):
                for h in re.findall(r"^###\s+(.+)$", s["markdown"], re.M):
                    t = re.sub(r"<[^>]+>", "", h.strip()).lower()
                    anchors.add("boss-" + (re.sub(r"[^a-z0-9]+", "-", t).strip("-") or "section"))
        check(set(m.get("provenance") or {}) <= {"minimap", "floorplan"} and m.get("provenance"),
              f"{label}: provenance {m.get('provenance')}")
        files = [m["thumb"]] + m["floors"]
        check(len(m["floors"]) >= 1, f"{label}: no floors")
        check(len({f["floor"] for f in m["floors"]}) == len(m["floors"]), f"{label}: duplicate floor ids")
        for f in files:
            path = public / f["file"]
            check(f["file"].startswith(f"maps/{p['slug']}/") and f["file"].endswith(".webp"),
                  f"{label}: unexpected path {f['file']}")
            if not path.is_file():
                check(False, f"{label}: {f['file']} is missing")
                continue
            total += path.stat().st_size
            size = image_size(path)
            check(size == (f["width"], f["height"]), f"{label}: {f['file']} is {size}, manifest says "
                  f"{(f['width'], f['height'])}")
            check(path.stat().st_size <= 400_000, f"{label}: {f['file']} is {path.stat().st_size} bytes")
        for f in m["floors"]:
            n_floors += 1
            check(f["kind"] in ("minimap", "floorplan"), f"{label}/{f['floor']}: kind {f['kind']}")
            check(200 <= max(f["width"], f["height"]) <= 2048 and min(f["width"], f["height"]) >= 64,
                  f"{label}/{f['floor']}: implausible size {f['width']}x{f['height']}")
            check(f["label"].strip() != "", f"{label}/{f['floor']}: empty label")
            for mk in f["markers"]:
                n_markers += 1
                check(0 <= mk["x"] <= 1 and 0 <= mk["y"] <= 1, f"{label}/{f['floor']}: marker {mk} off the image")
                check(mk["anchor"] in anchors, f"{label}/{f['floor']}: marker {mk['n']} links to missing "
                      f"anchor {mk['anchor']}")
        ns = [mk["n"] for f in m["floors"] for mk in f["markers"]]
        check(sorted(ns) == list(range(1, len(ns) + 1)), f"{label}: marker numbers {ns} are not 1..n")
    if n_pages:
        check(source.is_file(), "instances.json has maps but site/scripts/maps-source.json is missing")
        check(total <= 12_000_000, f"map assets total {total} bytes (budget 12 MB)")
    return n_pages, n_floors, n_markers


GRADES = {"S", "A", "B", "C", "D", "F"}


def check_summaries(classes: list) -> None:
    """The guide-driven summary data: viability tables, talent trees, decoded
    builds and leveling paths (build-data.py "Guide summaries")."""
    for c in classes:
        if not c.get("guidePath"):
            continue
        slug = c["slug"]
        index_md = (REPO_ROOT / c["guidePath"]).read_text(encoding="utf-8")
        v = c.get("viability")
        check(v is not None, f"{slug}: no viability table parsed from {c['guidePath']}")
        if v:
            keys = [col["key"] for col in v["columns"]]
            check(keys == ["raid", "dungeon", "pvp", "leveling", "farming"],
                  f"{slug}: viability columns {keys}")
            check(len(v["rows"]) >= 3, f"{slug}: only {len(v['rows'])} viability rows")
            for row in v["rows"]:
                check(len(row["cells"]) == len(keys), f"{slug}/{row['spec']}: {len(row['cells'])} cells")
                check(row["spec"] in index_md, f"{slug}: viability spec {row['spec']!r} not in index.md")
                for cell in row["cells"]:
                    check(cell["grade"] is None or cell["grade"][0] in GRADES,
                          f"{slug}/{row['spec']}: bad grade {cell['grade']!r}")
                    check("[[d:" not in cell["note"], f"{slug}/{row['spec']}: raw citation in a note")
                if row["playbookId"]:
                    check(any(p["id"] == row["playbookId"] for p in c["playbooks"]),
                          f"{slug}/{row['spec']}: playbook {row['playbookId']} does not exist")
            graded = sum(1 for r in v["rows"] for cell in r["cells"] if cell["grade"])
            check(graded >= 3 * len(v["rows"]), f"{slug}: only {graded} graded viability cells")
        check(bool(c.get("recommendation")), f"{slug}: no recommendation from index.md")

        tree = c.get("talentTree")
        check(tree is not None and len(tree["tabs"]) == 3, f"{slug}: talent tree missing or not 3 tabs")
        if not tree:
            continue
        sizes = [len(t["talents"]) for t in tree["tabs"]]
        for t in tree["tabs"]:
            for tal in t["talents"]:
                check(0 <= tal["row"] < 7 and 0 <= tal["col"] < 4, f"{slug}/{tal['name']}: off-grid")

        def valid(build: dict, where: str) -> None:
            check(len(build["ranks"]) == 3, f"{where}: ranks for {len(build['ranks'])} trees")
            for ti, ranks in enumerate(build["ranks"]):
                check(len(ranks) == sizes[ti], f"{where}: tree {ti} has {len(ranks)} ranks, not {sizes[ti]}")
                for r, tal in zip(ranks, tree["tabs"][ti]["talents"]):
                    check(0 <= r <= tal["max"], f"{where}: {tal['name']} rank {r}/{tal['max']}")
            check(0 < sum(build["totals"]) <= 51, f"{where}: {sum(build['totals'])} points")
            check(build["url"].startswith("https://xian55.github.io/tortoise-db-viewer/?talents=" + slug),
                  f"{where}: calculator url {build['url']}")

        for pb in c["playbooks"]:
            where = f"{slug}/{pb['id']}"
            talents = (pb.get("yaml") or {}).get("talents") or {}
            builds = pb.get("builds") or []
            for b in builds:
                valid(b, where)
            link = talents.get("build_link_tortoise")
            if isinstance(link, str) and "xian55" in link:
                check(bool(builds) and builds[0]["source"] == "playbook" and builds[0]["url"] == link,
                      f"{where}: the published build_link_tortoise is not the first build")
            if pb.get("guidePath"):
                check(pb.get("glance") is not None, f"{where}: no glance")
                check(bool(pb.get("sectionOrder")), f"{where}: no sectionOrder")
                ids = {s["id"] for s in pb["extraSections"]}
                for key in pb.get("sectionOrder") or []:
                    if key.startswith("extra:"):
                        check(key[6:] in ids, f"{where}: sectionOrder names a missing extra {key}")
                    else:
                        check(pb["sections"].get(key) is not None, f"{where}: sectionOrder names empty slot {key}")

        paths = (c.get("leveling") or {}).get("paths") or []
        check(len(paths) >= 1, f"{slug}: no leveling talent path parsed")
        for path in paths:
            resolved = sum(1 for st in path["steps"] if st["talent"])
            check(resolved >= len(path["steps"]) // 2, f"{slug}/{path['id']}: only {resolved} steps resolve")
            if path.get("end"):
                valid(path["end"], f"{slug}/{path['id']} end")


ICONS_DIR = SITE_DIR / "public" / "icons"
SPELL_CODE = re.compile(r"<code>([A-Z0-9][A-Za-z0-9'’:\- ]{1,44})</code>|`([A-Z0-9][A-Za-z0-9'’:\- ]{1,44})`")


def check_icons(classes: list) -> tuple[int, int, int, int, int]:
    """public/icons/manifest.json (tools/icons/extract_icons.py) has an icon for
    every talent, talent tree and class, on sheets that exist. Returns (talents
    with an icon, talents, rotation spell names with an icon, rotation spell
    names, bytes on disk)."""
    path = ICONS_DIR / "manifest.json"
    check(path.exists(), "public/icons/manifest.json missing: run tools/icons/extract_icons.py")
    if not path.exists():
        return 0, 0, 0, 0, 0
    m = json.loads(path.read_text(encoding="utf-8"))
    sheets = m.get("sheets", {})
    for key, sh in sheets.items():
        f = ICONS_DIR / sh["file"]
        check(f.exists(), f"icons: sheet {sh['file']} missing")
        check(sh["count"] <= sh["cols"] * sh["rows"], f"icons: sheet {key} has more cells than its grid")

    def ok(sheet: str, cell) -> bool:
        return isinstance(cell, int) and sheet in sheets and 0 <= cell < sheets[sheet]["count"]

    have = total = 0
    spell_have = spell_total = 0
    for c in classes:
        slug = c["slug"]
        check(ok("common", m.get("classes", {}).get(slug)), f"icons: no class icon for {slug}")
        tree = c.get("talentTree") or {"tabs": []}
        for tab in tree["tabs"]:
            check(ok("common", m.get("tabs", {}).get(slug, {}).get(str(tab.get("id")))),
                  f"icons: no tree icon for {slug}/{tab['name']}")
            for tal in tab["talents"]:
                total += 1
                if ok(slug, m.get("talents", {}).get(slug, {}).get(str(tal.get("id")))):
                    have += 1
                else:
                    failures.append(f"icons: no icon for talent {slug}/{tab['name']}/{tal['name']} (id {tal.get('id')})")
        spells = {k.lower() for k in m.get("spells", {}).get(slug, {})}
        names = set()
        for pb in c["playbooks"]:
            for key in ("rotationSingle", "rotationAoe"):
                sec = (pb.get("sections") or {}).get(key)
                for g in SPELL_CODE.findall((sec or {}).get("markdown", "")):
                    names.add((g[0] or g[1]).strip())
        spell_total += len(names)
        # exact name, or a name followed by lower-case words ("Stormstrike if ready"), as lib/icons.ts matches
        spell_have += sum(1 for n in names if n.lower() in spells or any(
            n.lower().startswith(k + " ") and re.match(r" [a-z(]", n[len(k):]) for k in spells))
    size = sum(f.stat().st_size for f in ICONS_DIR.iterdir() if f.is_file())
    check(size < 3 * 1024 * 1024, f"icons: {size / 1048576:.1f} MB on disk, over the 3 MB budget")
    return have, total, spell_have, spell_total, size


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
    # 47 when the site was first built; the Discord enrichment added two
    # Paladin PvP playbooks. The playbook list is the files on disk.
    expected_playbook_count = len(expected_playbook_files)
    check(expected_playbook_count >= 47,
          f"expected at least 47 files matching synthesis/classes/*/*-{{tank,healer,melee-dps,"
          f"ranged-dps,pvp}}.md on disk, found {expected_playbook_count}")

    total_playbooks = sum(len(c["playbooks"]) for c in classes)
    check(total_playbooks == expected_playbook_count,
          f"expected {expected_playbook_count} playbooks in classes.json, got {total_playbooks}")

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

    check(len(glossary) == 323, f"expected 323 glossary terms, got {len(glossary)}")

    # ---- Every playbook has non-null overview + sources ------------------
    missing_overview = []
    missing_sources = []
    for c in classes:
        for pb in c["playbooks"]:
            pid = f"{c['slug']}/{pb['id']}"
            if pb["sections"].get("overview") is None:
                missing_overview.append(pid)
            # A guide page has no per-spec "Sources" heading: its citations are
            # inline and the class-wide sources page (ClassEntry.sources) lists
            # what informed it.
            if pb["sections"].get("sources") is None and not pb.get("guidePath"):
                missing_sources.append(pid)
    check(not missing_overview,
          f"{len(missing_overview)} playbooks missing sections.overview: {missing_overview}")
    check(not missing_sources,
          f"{len(missing_sources)} playbooks missing sections.sources: {missing_sources}")

    # ---- Guide pages (guide/classes/**) ---------------------------------
    check_guides(classes, meta)

    # ---- General guides (guide/*.md) and professions (guide/classes/*/professions.md)
    general = check_general_guides(classes)
    check_professions(classes, general)

    # ---- Dungeon and raid pages (guide/instances/**) ---------------------
    check_instances(classes, meta)
    map_counts = check_maps(load_json("instances.json") if (DATA_DIR / "instances.json").exists() else None)

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

    check_summaries(classes)
    icon_counts = check_icons(classes)

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
    ic = meta.get("instanceCounts") or {}
    print(f"  instances={ic.get('pages', 0)} (dungeons={ic.get('dungeons', 0)} raids={ic.get('raids', 0)})")
    print(f"  maps: {map_counts[0]} pages, {map_counts[1]} floors, {map_counts[2]} boss markers")
    print(f"  standing lookups: {total_playbooks - len(misses)}/{total_playbooks} matched "
          f"({hit_rate:.1%})")
    th, tt, sh, st, size = icon_counts
    print(f"  icons: talents {th}/{tt} ({th / max(tt, 1):.1%}), rotation spell names {sh}/{st} "
          f"({sh / max(st, 1):.1%}), {size / 1024:.0f} KiB in public/icons")
    return 0


if __name__ == "__main__":
    sys.exit(main())
