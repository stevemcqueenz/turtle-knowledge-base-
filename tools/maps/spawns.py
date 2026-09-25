"""Creature spawns + templates from the server's MaNGOS SQL dumps.

Reads sql/base/tw_world_creature{,_template}.sql and every
sql/database_updates/world/*.sql migration (INSERT/REPLACE INTO `creature` /
`creature_template`, applied in file order; later rows win by guid / entry).
No database server needed.

    spawns, templates = load(sql_dir)
    spawns:    {map_id: [(guid, entry, x, y, z), ...]}
    templates: {entry: {"name": str, "rank": int}}
"""
import glob
import os
import re

INS = re.compile(r"(?:INSERT|REPLACE)\s+(?:IGNORE\s+)?INTO\s+`?(creature|creature_template)`?\s*(\(([^)]*)\))?\s*VALUES\s*", re.I)

CREATURE_COLS = ["guid", "id", "id2", "id3", "id4", "map", "position_x", "position_y", "position_z", "orientation"]


def _tuples(s, i):
    """Yield parsed value tuples starting at s[i] ('(' ... ),( ... );)."""
    n = len(s)
    while i < n:
        while i < n and s[i] in " \t\r\n,":
            i += 1
        if i >= n or s[i] != "(":
            return i
        i += 1
        vals, cur, q = [], [], None
        while i < n:
            ch = s[i]
            if q:
                if ch == "\\":
                    cur.append(s[i + 1]); i += 2; continue
                if ch == q:
                    if i + 1 < n and s[i + 1] == q:
                        cur.append(q); i += 2; continue
                    q = None; i += 1; continue
                cur.append(ch); i += 1; continue
            if ch in "'\"":
                q = ch; i += 1; continue
            if ch == ",":
                vals.append("".join(cur).strip()); cur = []; i += 1; continue
            if ch == ")":
                vals.append("".join(cur).strip()); i += 1
                break
            cur.append(ch); i += 1
        yield vals
    return i


def _cols_from_create(text, table):
    m = re.search(r"CREATE TABLE `%s` \((.*?)\n\) ENGINE" % table, text, re.S)
    if not m:
        return None
    return re.findall(r"^\s*`(\w+)`", m.group(1), re.M)


def load(sql_dir):
    base = os.path.join(sql_dir, "base")
    files = [os.path.join(base, "tw_world_creature.sql"), os.path.join(base, "tw_world_creature_template.sql")]
    files += sorted(glob.glob(os.path.join(sql_dir, "database_updates", "world", "*.sql")))
    cols = {}
    creatures, templates = {}, {}
    for f in files:
        text = open(f, encoding="utf-8", errors="replace").read()
        for t in ("creature", "creature_template"):
            c = _cols_from_create(text, t)
            if c:
                cols[t] = c
        for m in INS.finditer(text):
            table = m.group(1).lower()
            clist = [c.strip(" `") for c in m.group(3).split(",")] if m.group(3) else cols.get(table)
            if not clist:
                continue
            for vals in _tuples(text, m.end()):
                if len(vals) != len(clist):
                    continue
                row = dict(zip(clist, vals))
                try:
                    if table == "creature":
                        creatures[int(row["guid"])] = (
                            int(row["id"]), int(row["map"]),
                            float(row["position_x"]), float(row["position_y"]), float(row["position_z"]))
                    else:
                        e = int(row["entry"])
                        old = templates.get(e, {})
                        templates[e] = {
                            "name": row.get("name", old.get("name", "")),
                            "rank": int(row.get("rank", old.get("rank", 0)) or 0),
                        }
                except (KeyError, ValueError):
                    continue
    spawns = {}
    for guid, (e, mp, x, y, z) in creatures.items():
        spawns.setdefault(mp, []).append((guid, e, x, y, z))
    return spawns, templates


if __name__ == "__main__":
    import sys
    s, t = load(sys.argv[1] if len(sys.argv) > 1 else "/home/agent/work/TurtleWoW/server/source/tortoise-wow/sql")
    print(sum(len(v) for v in s.values()), "spawns on", len(s), "maps;", len(t), "templates")
