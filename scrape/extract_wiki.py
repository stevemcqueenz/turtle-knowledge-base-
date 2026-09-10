#!/usr/bin/env python3
"""Extract the fandom wiki archive (raw/wiki/pages/*.json) into Markdown and structured data.

Writes extracted/wiki/<ns>/<slug>.md
       structured/wiki/pages.jsonl        one per page: title, url, ns, categories, is_turtle_content, patch, infobox type
       structured/wiki/npcs.jsonl         Npcbox / NPC infobox fields
       structured/wiki/quests.jsonl       Questbox fields (+ objectives text)
       structured/wiki/zones.jsonl        Infobox zone / town
       structured/wiki/factions.jsonl     Infobox faction
       structured/wiki/items.jsonl        item-like infoboxes
       structured/wiki/links.jsonl        wiki-internal links (from -> to) for the entity index
"""
import glob
import json
import os
import re
import shutil
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "raw", "wiki", "pages")
OUT = os.path.join(ROOT, "extracted", "wiki")
STRUCT = os.path.join(ROOT, "structured", "wiki")
BASE = "https://turtle-wow.fandom.com/wiki/"

NS_NAMES = {0: "articles", 4: "project", 10: "templates", 14: "categories"}
INFOBOX_KINDS = {
    "npcbox": "npc", "npc box": "npc", "infobox npc": "npc", "mob": "npc", "mobbox": "npc",
    "questbox": "quest", "infobox quest": "quest",
    "infobox zone": "zone", "infobox town": "zone", "zonebox": "zone", "infobox instance": "zone", "infobox subzone": "zone",
    "infobox faction": "faction", "factionbox": "faction",
    "itembox": "item", "infobox item": "item", "item": "item", "tooltip": "item",
    "infobox spell": "spell", "spellbox": "spell", "abilitybox": "spell",
}


def slugify(s):
    return re.sub(r"[^A-Za-z0-9._-]+", "_", s).strip("_")[:120] or "page"


def find_templates(text):
    """Yield (name, params_dict, start, end) for top-level {{...}} templates."""
    i = 0
    n = len(text)
    while i < n:
        s = text.find("{{", i)
        if s < 0:
            return
        depth, j = 0, s
        while j < n:
            if text.startswith("{{", j):
                depth += 1
                j += 2
            elif text.startswith("}}", j):
                depth -= 1
                j += 2
                if depth == 0:
                    break
            else:
                j += 1
        body = text[s + 2:j - 2]
        # split on top-level pipes
        parts, depth, cur = [], 0, []
        k = 0
        while k < len(body):
            c = body[k]
            if body.startswith("{{", k) or body.startswith("[[", k):
                depth += 1
                cur.append(body[k:k + 2])
                k += 2
                continue
            if body.startswith("}}", k) or body.startswith("]]", k):
                depth -= 1
                cur.append(body[k:k + 2])
                k += 2
                continue
            if c == "|" and depth == 0:
                parts.append("".join(cur))
                cur = []
            else:
                cur.append(c)
            k += 1
        parts.append("".join(cur))
        name = parts[0].strip()
        params = {}
        pos = 0
        for p in parts[1:]:
            if "=" in p:
                key, val = p.split("=", 1)
                params[key.strip().lower()] = val.strip()
            else:
                pos += 1
                params[str(pos)] = p.strip()
        yield name, params, s, j
        i = j


def strip_markup(s):
    """Wikitext inline -> plain text (keeps link targets as text)."""
    if not s:
        return ""
    s = re.sub(r"<ref[^>]*>.*?</ref>", "", s, flags=re.S)
    s = re.sub(r"<ref[^>]*/>", "", s)
    s = re.sub(r"<br\s*/?>", ", ", s)
    s = re.sub(r"<[^>]+>", "", s)
    s = re.sub(r"\[\[([^|\]]+)\|([^\]]+)\]\]", r"\2", s)
    s = re.sub(r"\[\[([^\]]+)\]\]", r"\1", s)
    s = re.sub(r"'''?", "", s)
    # simple templates
    s = re.sub(r"\{\{(?:aggro)\|[^}]*\}\}", "", s, flags=re.I)
    s = re.sub(r"\{\{(?:questlong|Questlong)\|[^|}]*\|[^|}]*\|([^|}]*)(?:\|[^}]*)?\}\}", r"\1", s)
    s = re.sub(r"\{\{(?:RaceIcon|Alliance|Horde|Neutral)(?:\|[^}]*)?\}\}", "", s)
    s = re.sub(r"\{\{[^{}]*\}\}", "", s)
    return re.sub(r"\s+", " ", s).strip(" ,")


def links_in(text):
    return [m.group(1).split("#")[0].strip() for m in re.finditer(r"\[\[([^|\]]+)(?:\|[^\]]*)?\]\]", text)
            if not m.group(1).lower().startswith(("category:", "file:", "image:"))]


def to_markdown(text):
    md = text
    md = re.sub(r"<ref[^>]*>(.*?)</ref>", r" (ref: \1)", md, flags=re.S)
    md = re.sub(r"<ref[^>]*/>", "", md)
    md = re.sub(r"<!--.*?-->", "", md, flags=re.S)
    md = re.sub(r"\[\[(?:Category|File|Image):[^\]]*\]\]", "", md, flags=re.I)
    # templates: questlong -> quest name, gossip -> quote, others dropped (infobox handled separately)
    md = re.sub(r"\{\{(?:questlong|Questlong)\|[^|}]*\|[^|}]*\|([^|}]*)(?:\|([^}]*))?\}\}", lambda m: "[quest: %s]" % (m.group(2) or m.group(1)), md)
    md = re.sub(r"\{\{(?:queststartfinish|queststart|questfinish)\|([^}]*)\}\}", lambda m: "[quest: %s]" % m.group(1).split("|")[-1], md)
    md = re.sub(r"\{\{gossip\|([^}]*)\}\}", r"> Gossip: \1", md, flags=re.I)
    md = re.sub(r"\{\{Patch\|([^}]*)\}\}", r"(Patch \1)", md)
    md = re.sub(r"\{\{(?:cost|co)\|([^}]*)\}\}", lambda m: " ".join(x for x in m.group(1).split("|")) + " (g/s/c)", md)
    md = re.sub(r"\{\{coords\|([^|}]*)\|([^|}]*)[^}]*\}\}", r"[\1, \2]", md)
    md = re.sub(r"\{\{(?:RaceIcon|Alliance|Horde|Neutral|clrl|clr|portal|Stub|stub|reflist|Reflist|Elinks|Succession|lrare|Combat|Aggro|aggro)(?:\|[^}]*)?\}\}", "", md)
    for _ in range(3):
        md = re.sub(r"\{\{[^{}]*\}\}", "", md, flags=re.S)
    md = re.sub(r"\[\[([^|\]]+)\|([^\]]+)\]\]", r"[\2](\1)", md)
    md = re.sub(r"\[\[([^\]]+)\]\]", r"[\1](\1)", md)
    md = re.sub(r"\[(https?://[^\s\]]+)\s+([^\]]+)\]", r"[\2](\1)", md)
    md = re.sub(r"^(=+)\s*(.+?)\s*\1\s*$", lambda m: "#" * (len(m.group(1))) + " " + m.group(2), md, flags=re.M)
    md = re.sub(r"^\*\*\s*", "  - ", md, flags=re.M)
    md = re.sub(r"^\*\s*", "- ", md, flags=re.M)
    md = re.sub(r"^#(?![# ])\s*", "1. ", md, flags=re.M)
    md = re.sub(r"'''(.+?)'''", r"**\1**", md)
    md = re.sub(r"''(.+?)''", r"*\1*", md)
    md = re.sub(r"^;(.+)$", r"**\1**", md, flags=re.M)
    md = re.sub(r"^:+", "  ", md, flags=re.M)
    md = re.sub(r"<span[^>]*>|</span>|<div[^>]*>|</div>|<small>|</small>|<big>|</big>|<center>|</center>", "", md)
    md = re.sub(r"<br\s*/?>", "\n", md)
    md = re.sub(r"\n{3,}", "\n\n", md)
    return md.strip()


def main():
    shutil.rmtree(OUT, ignore_errors=True)
    shutil.rmtree(STRUCT, ignore_errors=True)
    os.makedirs(STRUCT, exist_ok=True)
    outs = {k: open(os.path.join(STRUCT, k + ".jsonl"), "w") for k in ("pages", "npcs", "quests", "zones", "factions", "items", "spells", "links")}
    counts = defaultdict(int)
    for f in sorted(glob.glob(os.path.join(RAW, "*.json"))):
        p = json.load(open(f))
        wt = p["wikitext"] or ""
        ns = p["ns"]
        cats = [c.replace("Category:", "") for c in p.get("categories", [])]
        is_turtle = "Turtle WoW content" in cats
        patch = None
        m = re.search(r"\{\{Patch\|([^}|]*)", wt)
        if m:
            patch = m.group(1).strip()
        infobox_kind = None
        infobox = None
        for name, params, s, e in find_templates(wt):
            kind = INFOBOX_KINDS.get(name.strip().lower())
            if kind:
                infobox_kind, infobox = kind, params
                break
        rec = {"pageid": p["pageid"], "title": p["title"], "url": p.get("url") or BASE + p["title"].replace(" ", "_"),
               "ns": ns, "categories": cats, "is_turtle_content": is_turtle, "patch": patch,
               "infobox": infobox_kind, "revision": p.get("timestamp"), "chars": len(wt)}
        outs["pages"].write(json.dumps(rec, ensure_ascii=False) + "\n")
        counts["pages"] += 1
        if infobox:
            clean = {k: strip_markup(v) for k, v in infobox.items()}
            clean_links = {k: links_in(v) for k, v in infobox.items() if "[[" in v}
            data = {"title": p["title"], "url": rec["url"], "is_turtle_content": is_turtle, "patch": patch,
                    "categories": cats, "fields": clean, "field_links": clean_links}
            if infobox_kind == "quest":
                # objectives / description sections
                for sec in ("Objectives", "Description", "Progress", "Completion", "Rewards", "Notes"):
                    m = re.search(r"==\s*%s\s*==\s*(.*?)(?=\n==[^=]|\Z)" % sec, wt, re.S)
                    if m:
                        data[sec.lower()] = to_markdown(m.group(1))[:4000]
                qid = clean.get("id")
                data["quest_id"] = int(qid) if qid and qid.isdigit() else None
            if infobox_kind == "npc":
                for sec in ("Abilities", "Loot", "Drops", "Quotes", "Notes", "Objective of", "Quests", "Vendor", "Sells", "Location"):
                    m = re.search(r"==\s*%s\s*==\s*(.*?)(?=\n==[^=]|\Z)" % sec, wt, re.S)
                    if m:
                        data[sec.lower().replace(" ", "_")] = to_markdown(m.group(1))[:4000]
            key = {"npc": "npcs", "quest": "quests", "zone": "zones", "faction": "factions", "item": "items", "spell": "spells"}[infobox_kind]
            outs[key].write(json.dumps(data, ensure_ascii=False) + "\n")
            counts[key] += 1
        for target in set(links_in(wt)):
            outs["links"].write(json.dumps({"from": p["title"], "to": target}, ensure_ascii=False) + "\n")
        # markdown
        d = os.path.join(OUT, NS_NAMES.get(ns, "ns%d" % ns))
        os.makedirs(d, exist_ok=True)
        fm = ["---", "title: %s" % json.dumps(p["title"], ensure_ascii=False), 'url: "%s"' % rec["url"],
              'source_type: "community wiki (turtle-wow.fandom.com), not an official source"',
              'revision: "%s"' % p.get("timestamp"), 'fetched: "%s"' % p.get("fetched"),
              "is_turtle_content: %s" % ("true" if is_turtle else "false"), "patch: %s" % json.dumps(patch),
              "categories: %s" % json.dumps(cats, ensure_ascii=False), "---", ""]
        body = to_markdown(wt)
        if infobox:
            box = ["| field | value |", "|---|---|"] + ["| %s | %s |" % (k, strip_markup(v).replace("|", "/")) for k, v in infobox.items() if v.strip()]
            body = "\n".join(box) + "\n\n" + body
        with open(os.path.join(d, slugify(p["title"]) + ".md"), "w") as fh:
            fh.write("\n".join(fm) + "# " + p["title"] + "\n\n" + body + "\n")
    for fh in outs.values():
        fh.close()
    print(dict(counts))


if __name__ == "__main__":
    main()
