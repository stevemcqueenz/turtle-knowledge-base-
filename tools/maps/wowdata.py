"""Client data readers for the map extractor: md5translate.trs, DBC, WDT/ADT/WMO.

Coordinates: server/world X points north, Y west, Z up. An ADT block is
533.33 yd; block (col,row) of the 64x64 grid spans worldY (32-col-1..32-col)*ADT
and worldX (32-row-1..32-row)*ADT.

WMO placement (MODF, in an ADT or the WDT): local -> world is
    world = Rz(rot.y + 180 deg) * local + T
with T = (32*ADT - pos[2], 32*ADT - pos[0], pos[1]) for ADT placements and
T = (0, 0, 0) for a WDT's global WMO (whose MODF pos is 0). Checked against the
server's creature spawns (every spawn of Dire Maul, BRD, RFK, SFK ... lands in a
WMO group box under this transform and not under the alternatives).
"""
import io
import math
import re
import struct

from PIL import Image

ADT = 1600.0 / 3.0
MAPMID = 32 * ADT
_WMO_TILE = re.compile(r"^(.*)_(\d{3})_(\d{2})_(\d{2})\.blp$")
_ADT_TILE = re.compile(r"^([^\\]+)\\map(\d+)_(\d+)\.blp$")


def chunks(d):
    o = 0
    while o + 8 <= len(d):
        tag = d[o:o + 4][::-1].decode("latin1")
        sz = struct.unpack_from("<I", d, o + 4)[0]
        yield tag, d[o + 8:o + 8 + sz]
        o += 8 + sz


def first_chunks(d):
    out = {}
    for t, b in chunks(d):
        out.setdefault(t, b)
    return out


def strtab(b):
    out, o = {}, 0
    for s in b.split(b"\0"):
        out[o] = s.decode("latin1")
        o += len(s) + 1
    return out


def parse_trs(raw):
    """md5translate.trs -> {lowercased virtual path: md5 file name}."""
    out = {}
    for ln in raw.decode("latin1", "replace").splitlines():
        if "\t" not in ln or ln.lower().startswith("dir:"):
            continue
        a, b = ln.split("\t", 1)
        out[a.strip().lower().replace("/", "\\")] = b.strip()
    return out


def wmo_tile_index(trs):
    """{wmo base (lowercase, no World\\ prefix, no .wmo): {group: {(x, y): md5}}}."""
    out = {}
    for k, v in trs.items():
        m = _WMO_TILE.match(k)
        if m:
            out.setdefault(m.group(1), {}).setdefault(int(m.group(2)), {})[(int(m.group(3)), int(m.group(4)))] = v
    return out


def adt_tile_index(trs):
    """{mapdir lowercase: {(col, row): md5}}."""
    out = {}
    for k, v in trs.items():
        m = _ADT_TILE.match(k)
        if m:
            out.setdefault(m.group(1), {})[(int(m.group(2)), int(m.group(3)))] = v
    return out


def read_dbc(raw):
    """-> (records as tuples of uint32, string lookup fn)."""
    _magic, n, nf, rs, _ss = struct.unpack_from("<4s4I", raw)
    sb = 20 + n * rs
    recs = [struct.unpack_from("<%dI" % nf, raw, 20 + i * rs) for i in range(n)]

    def s(off):
        e = raw.index(b"\0", sb + off)
        return raw[sb + off:e].decode("utf-8", "replace")
    return recs, s


def maps_dbc(raw):
    """Map.dbc (1.12 layout) -> {id: {"dir": str, "name": str, "type": int}}."""
    recs, s = read_dbc(raw)
    return {r[0]: {"dir": s(r[1]), "type": r[2], "name": s(r[4])} for r in recs}


class Placement:
    def __init__(self, wmo, pos, rot, is_global):
        self.wmo = wmo
        self.pos = pos
        self.rot = rot
        self.is_global = is_global
        if is_global:
            self.T = (0.0, 0.0, 0.0)
        else:
            self.T = (MAPMID - pos[2], MAPMID - pos[0], pos[1])
        self.theta = math.radians(rot[1] + 180.0)

    def to_local(self, x, y, z):
        c, s = math.cos(self.theta), math.sin(self.theta)
        dx, dy, dz = x - self.T[0], y - self.T[1], z - self.T[2]
        return c * dx + s * dy, -s * dx + c * dy, dz

    def to_world(self, lx, ly, lz):
        c, s = math.cos(self.theta), math.sin(self.theta)
        return c * lx - s * ly + self.T[0], s * lx + c * ly + self.T[1], lz + self.T[2]


def _modf(b, names):
    out = []
    for j in range(len(b) // 64):
        nid, uid, px, py, pz, rx, ry, rz = struct.unpack_from("<II6f", b, j * 64)
        out.append((uid, names.get(nid, ""), (px, py, pz), (rx, ry, rz)))
    return out


def map_layout(mpq, mapdir):
    """-> (set of (col,row) ADT blocks, [Placement...] unique WMO placements)."""
    wdt = mpq.read("World\\Maps\\%s\\%s.wdt" % (mapdir, mapdir))
    if not wdt:
        return set(), []
    ch = first_chunks(wdt)
    blocks = set()
    main = ch.get("MAIN", b"")
    for i in range(min(4096, len(main) // 8)):
        if struct.unpack_from("<I", main, i * 8)[0] & 1:
            blocks.add((i % 64, i // 64))
    places, seen = [], set()
    if ch.get("MWMO") and ch.get("MODF"):
        names = [n for n in strtab(ch["MWMO"]).values() if n]
        for uid, _n, p, r in _modf(ch["MODF"], {0: names[0]}):
            places.append(Placement(names[0], p, r, True))
    for (x, y) in sorted(blocks):
        a = mpq.read("World\\Maps\\%s\\%s_%d_%d.adt" % (mapdir, mapdir, x, y))
        if not a:
            continue
        ac = first_chunks(a)
        if not (ac.get("MWMO") and ac.get("MODF") and ac.get("MWID")):
            continue
        st = strtab(ac["MWMO"])
        ids = struct.unpack("<%dI" % (len(ac["MWID"]) // 4), ac["MWID"])
        names = {k: st.get(o, "") for k, o in enumerate(ids)}
        for uid, n, p, r in _modf(ac["MODF"], names):
            if uid in seen:
                continue
            seen.add(uid)
            places.append(Placement(n, p, r, False))
    return blocks, places


class WMO:
    """A WMO root's groups (bbox, flags) and their minimap tiles."""

    def __init__(self, mpq, trs_wmo, path):
        self.path = path
        d = mpq.read(path)
        self.groups = []
        if not d:
            return
        ch = first_chunks(d)
        mogi = ch.get("MOGI", b"")
        base = path.lower().replace("/", "\\")
        if base.startswith("world\\"):
            base = base[6:]
        base = base[:-4]
        self.base = base
        for i in range(len(mogi) // 32):
            fl, x0, y0, z0, x1, y1, z1, _n = struct.unpack_from("<I6fi", mogi, i * 32)
            tiles = trs_wmo.get(base, {}).get(i, {})
            self.groups.append({"i": i, "flags": fl, "bb": (x0, y0, z0, x1, y1, z1), "tiles": tiles})

    def minimap_groups(self):
        return [g for g in self.groups if g["tiles"]]


def load_blp(mpq, md5, cache):
    im = cache.get(md5)
    if im is None:
        raw = mpq.read("textures\\Minimap\\" + md5)
        if not raw:
            return None
        im = Image.open(io.BytesIO(raw)).convert("RGBA")
        cache[md5] = im
    return im


def group_image(mpq, g, cache):
    """A group's minimap tiles stitched north-up in its local frame (2 px/yd).

    Returns (RGBA image, X1, Y1): local x = X1 - row/2, local y = Y1 - col/2.
    Tile (i, j) covers local x from minX + 128*i and y from minY + 128*j; inside a
    tile, u runs along +x and the content sits at the bottom (v up = +y).
    """
    x0, y0 = g["bb"][0], g["bb"][1]
    nx = max(t[0] for t in g["tiles"]) + 1
    ny = max(t[1] for t in g["tiles"]) + 1
    W, H = ny * 256, nx * 256
    can = Image.new("RGBA", (W, H))
    for (i, j), md5 in g["tiles"].items():
        t = load_blp(mpq, md5, cache)
        if t is None:
            continue
        w, h = t.size
        r = t.rotate(90, expand=True)  # CCW: +x (u) -> up, +y (v up) -> left
        can.alpha_composite(r, ((ny - j) * 256 - h, (nx - i) * 256 - w))
    return can, x0 + nx * 128.0, y0 + ny * 128.0
