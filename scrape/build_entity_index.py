#!/usr/bin/env python3
"""Build structured/entity-index/ from the wiki records (first pass; forum-sourced IDs are merged later).

Entities: quests, npcs, zones, factions. Cross-links: quest.start_npc / quest.end_npc -> npc; npc.location -> zone;
quest.previous/next -> quest; npc.quests (from 'Objective of' / 'Quests' sections) -> quest; zone <- npcs located there.
Every record keeps `source` (wiki URL) and `ids` (in-game IDs when the source states them; otherwise null).
"""
import json
import os
import re
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
W = os.path.join(ROOT, "structured", "wiki")
OUT = os.path.join(ROOT, "structured", "entity-index")


def load(name):
    return [json.loads(l) for l in open(os.path.join(W, name + ".jsonl"))]


def main():
    os.makedirs(OUT, exist_ok=True)
    quests, npcs, zones, factions = load("quests"), load("npcs"), load("zones"), load("factions")
    npc_by_name = {n["title"]: n for n in npcs}
    zone_names = {z["title"] for z in zones}
    quest_by_name = {q["title"]: q for q in quests}

    def names(rec, field):
        return rec.get("field_links", {}).get(field) or ([rec["fields"][field]] if rec["fields"].get(field) else [])

    Q, N, Z = {}, {}, {}
    for q in quests:
        f = q["fields"]
        start, end = names(q, "start"), names(q, "end") or names(q, "finish")
        Q[q["title"]] = {
            "name": q["title"], "quest_id": q.get("quest_id"), "level": f.get("level"), "faction": f.get("faction"),
            "category": f.get("category"), "type": f.get("type"), "start_npc": start, "end_npc": end,
            "previous": names(q, "previous"), "next": names(q, "next"), "rewards": f.get("rewards"),
            "experience": f.get("experience"), "is_turtle_content": q["is_turtle_content"], "patch": q.get("patch"),
            "objectives": q.get("objectives"), "source": q["url"],
        }
    for n in npcs:
        f = n["fields"]
        loc = names(n, "location")
        N[n["title"]] = {
            "name": n["title"], "npc_id": None, "level": f.get("level"), "type": f.get("type"), "race": f.get("race"),
            "creature": f.get("creature"), "faction": f.get("faction"), "affiliation": f.get("affiliation"),
            "title": f.get("title"), "status": f.get("status"), "instance": f.get("instance"),
            "location": loc, "zones": [l for l in loc if l in zone_names],
            "gives_quests": [], "ends_quests": [], "loot": n.get("loot") or n.get("drops"), "abilities": n.get("abilities"),
            "vendor": n.get("vendor") or n.get("sells"), "is_turtle_content": n["is_turtle_content"], "patch": n.get("patch"),
            "source": n["url"],
        }
    for z in zones:
        f = z["fields"]
        Z[z["title"]] = {
            "name": z["title"], "zone_id": None, "level": f.get("level") or f.get("levels"), "type": f.get("type"),
            "faction": f.get("faction") or f.get("races"), "continent": f.get("continent"), "location": f.get("location"),
            "instance_size": f.get("players") or f.get("size"), "bosses": names(z, "bosses") or names(z, "final boss"),
            "npcs": [], "quests": [], "is_turtle_content": z["is_turtle_content"], "patch": z.get("patch"), "source": z["url"],
        }
    # cross-links
    for qn, q in Q.items():
        for s in q["start_npc"]:
            if s in N:
                N[s]["gives_quests"].append(qn)
        for e in q["end_npc"]:
            if e in N:
                N[e]["ends_quests"].append(qn)
        cat = q.get("category")
        if cat in Z:
            Z[cat]["quests"].append(qn)
    for nn, n in N.items():
        for z in n["zones"]:
            Z[z]["npcs"].append(nn)
    # unresolved references (names mentioned but no wiki page in our data)
    unresolved = {"npcs": sorted({s for q in Q.values() for s in q["start_npc"] + q["end_npc"] if s not in N}),
                  "quests": sorted({p for q in Q.values() for p in q["previous"] + q["next"] if p not in Q})}
    for name, data in (("quests", Q), ("npcs", N), ("zones", Z)):
        json.dump(data, open(os.path.join(OUT, name + ".json"), "w"), indent=1, ensure_ascii=False, sort_keys=True)
    json.dump({f["title"]: {"name": f["title"], "fields": f["fields"], "is_turtle_content": f["is_turtle_content"], "patch": f.get("patch"), "source": f["url"]} for f in factions},
              open(os.path.join(OUT, "factions.json"), "w"), indent=1, ensure_ascii=False, sort_keys=True)
    json.dump(unresolved, open(os.path.join(OUT, "unresolved.json"), "w"), indent=1, ensure_ascii=False)
    with open(os.path.join(OUT, "README.md"), "w") as fh:
        fh.write("# Entity index\n\nFirst pass built from the fandom wiki infoboxes by `scrape/build_entity_index.py`. "
                 "Records are keyed by name; `quest_id`/`npc_id`/`zone_id` are filled only when a source states the ID "
                 "(wiki quest IDs come from the Questbox `id` field). Cross-links: quests.start_npc/end_npc -> npcs; "
                 "npcs.zones -> zones; zones.npcs/quests; npcs.gives_quests/ends_quests.\n\n"
                 "| file | records |\n|---|---|\n| quests.json | %d (%d with quest_id, %d Turtle content) |\n| npcs.json | %d (%d Turtle content) |\n| zones.json | %d (%d Turtle content) |\n| factions.json | %d |\n| unresolved.json | %d NPC names, %d quest names referenced without a page |\n"
                 % (len(Q), sum(1 for q in Q.values() if q["quest_id"]), sum(1 for q in Q.values() if q["is_turtle_content"]),
                    len(N), sum(1 for n in N.values() if n["is_turtle_content"]), len(Z), sum(1 for z in Z.values() if z["is_turtle_content"]),
                    len(factions), len(unresolved["npcs"]), len(unresolved["quests"])))
    print(open(os.path.join(OUT, "README.md")).read())


if __name__ == "__main__":
    main()
