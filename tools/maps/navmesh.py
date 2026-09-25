"""Server navmesh (MaNGOS mmaps: Recast/Detour tiles) -> walkable polygons.

data/mmaps/<map:03><tx:02><ty:02>.mmtile = MmapTileHeader (20 bytes: magic 'MMAP',
dtVersion, mmapVersion, size, usesLiquids + pad) + a Detour dtMeshHeader
(v7, 100 bytes) + verts + polys (dtPoly, 32 bytes, 6 verts max).
Detour vertices are (worldY, worldZ, worldX).
"""
import glob
import os
import struct

HDR = struct.Struct("<15i10f")


def tile_polys(path):
    d = open(path, "rb").read()
    if d[:4] not in (b"PAMM", b"MMAP"):
        return []
    o = 20
    h = HDR.unpack_from(d, o)
    magic, _ver, _x, _y, _layer, _uid, npoly, nvert = h[:8]
    o += HDR.size
    verts = struct.unpack_from("<%df" % (nvert * 3), d, o)
    o += nvert * 12
    out = []
    for i in range(npoly):
        p = o + i * 32
        vi = struct.unpack_from("<6H", d, p + 4)
        flags, vc, at = struct.unpack_from("<HBB", d, p + 28)
        if at >> 6:          # off-mesh connection
            continue
        if flags == 0:       # disabled
            continue
        pts = []
        for k in range(vc):
            j = vi[k] * 3
            pts.append((verts[j + 2], verts[j], verts[j + 1]))  # world x, y, z
        out.append((pts, at & 0x3F))
    return out


def map_polys(mmaps_dir, map_id):
    """All walkable polygons of a map: [([(x, y, z)...], area)]."""
    out = []
    for f in sorted(glob.glob(os.path.join(mmaps_dir, "%03d????.mmtile" % map_id))):
        out.extend(tile_polys(f))
    return out
