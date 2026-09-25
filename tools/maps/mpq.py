"""Minimal pure-Python MPQ (v0/v1) reader for the 1.12 / Turtle WoW client.

Supports: encrypted hash/block tables, the v1 hi-block table, sectored and
single-unit files, file-key encryption (incl. FIX_KEY), and the compressions
the 1.12 client actually uses (zlib, bzip2, PKWARE DCL implode). No writing.

    arc = MPQArchive(path)
    data = arc.read(r"textures\\Minimap\\md5translate.trs")   # bytes or None

MPQChain(paths) opens several archives; read() tries the LAST one first, so pass
them in load order (base first, highest patch last) and later patches win.
"""
import bz2
import os
import struct
import zlib

# --- crypto table -----------------------------------------------------------
_CT = [0] * 0x500


def _init():
    seed = 0x00100001
    for i in range(0x100):
        idx = i
        for _ in range(5):
            seed = (seed * 125 + 3) % 0x2AAAAB
            t1 = (seed & 0xFFFF) << 16
            seed = (seed * 125 + 3) % 0x2AAAAB
            t2 = seed & 0xFFFF
            _CT[idx] = t1 | t2
            idx += 0x100


_init()


def hash_string(s, htype):
    s1, s2 = 0x7FED7FED, 0xEEEEEEEE
    for ch in s.upper().replace("/", "\\").encode("latin1"):
        v = _CT[(htype << 8) + ch]
        s1 = (v ^ (s1 + s2)) & 0xFFFFFFFF
        s2 = (ch + s1 + s2 + (s2 << 5) + 3) & 0xFFFFFFFF
    return s1


def decrypt(data, key):
    n = len(data) // 4
    out = bytearray(data)
    seed = 0xEEEEEEEE
    vals = struct.unpack_from("<%dI" % n, data)
    res = []
    for v in vals:
        seed = (seed + _CT[0x400 + (key & 0xFF)]) & 0xFFFFFFFF
        ch = v ^ ((key + seed) & 0xFFFFFFFF)
        key = (((~key << 0x15) + 0x11111111) | (key >> 0x0B)) & 0xFFFFFFFF
        seed = (ch + seed + (seed << 5) + 3) & 0xFFFFFFFF
        res.append(ch)
    struct.pack_into("<%dI" % n, out, 0, *res)
    return bytes(out)


# --- PKWARE DCL explode -----------------------------------------------------
# Tables from zlib's contrib/blast (Mark Adler), public domain algorithm.
_LITLEN = [11, 124, 8, 7, 28, 7, 188, 13, 76, 4, 10, 8, 12, 10, 12, 10, 8, 23, 8,
           9, 7, 6, 7, 8, 7, 6, 55, 8, 23, 24, 12, 11, 7, 9, 11, 12, 6, 7, 22, 5,
           7, 24, 6, 11, 9, 6, 7, 22, 7, 11, 38, 7, 9, 8, 25, 11, 8, 11, 9, 12,
           8, 12, 5, 38, 5, 38, 5, 11, 7, 5, 6, 21, 6, 10, 53, 8, 7, 24, 10, 27,
           44, 253, 253, 253, 252, 252, 252, 13, 12, 45, 12, 45, 12, 61, 12, 45,
           44, 173]
_LENLEN = [2, 35, 36, 53, 38, 23]
_DISTLEN = [2, 20, 53, 230, 247, 151, 248]
_BASE = [3, 2, 4, 5, 6, 7, 8, 9, 10, 12, 16, 24, 40, 72, 136, 264]
_EXTRA = [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8]


def _construct(rep):
    length = []
    for r in rep:
        cnt = (r >> 4) + 1
        length += [r & 15] * cnt
    count = [0] * 16
    for l in length:
        count[l] += 1
    offs = [0] * 16
    for i in range(1, 15):
        offs[i + 1] = offs[i] + count[i]
    symbol = [0] * len(length)
    for s, l in enumerate(length):
        if l:
            symbol[offs[l]] = s
            offs[l] += 1
    return count, symbol


_LIT = _construct(_LITLEN)
_LEN = _construct(_LENLEN)
_DIST = _construct(_DISTLEN)


def explode(src):
    pos = [0]
    bitbuf = [0]
    bitcnt = [0]

    def bits(need):
        val = bitbuf[0]
        while bitcnt[0] < need:
            if pos[0] >= len(src):
                raise ValueError("implode: out of input")
            val |= src[pos[0]] << bitcnt[0]
            pos[0] += 1
            bitcnt[0] += 8
        bitbuf[0] = val >> need
        bitcnt[0] -= need
        return val & ((1 << need) - 1)

    def decode(h):
        count, symbol = h
        code = first = index = 0
        for ln in range(1, 16):
            code |= bits(1) ^ 1
            cnt = count[ln]
            if code < first + cnt:
                return symbol[index + (code - first)]
            index += cnt
            first += cnt
            first <<= 1
            code <<= 1
        raise ValueError("implode: bad code")

    lit = bits(8)
    dict_ = bits(8)
    if lit > 1 or dict_ < 4 or dict_ > 6:
        raise ValueError("implode: bad header")
    out = bytearray()
    while True:
        if bits(1):
            sym = decode(_LEN)
            ln = _BASE[sym] + bits(_EXTRA[sym])
            if ln == 519:
                break
            sym = 2 if ln == 2 else dict_
            dist = decode(_DIST) << sym
            dist += bits(sym)
            dist += 1
            for _ in range(ln):
                out.append(out[-dist])
        else:
            out.append(decode(_LIT) if lit else bits(8))
    return bytes(out)


# --- archive ----------------------------------------------------------------
F_IMPLODE = 0x00000100
F_COMPRESS = 0x00000200
F_ENCRYPTED = 0x00010000
F_FIX_KEY = 0x00020000
F_SINGLE = 0x01000000
F_EXISTS = 0x80000000


def _decompress(data, outlen):
    if len(data) >= outlen:
        return data[:outlen]
    mask = data[0]
    body = data[1:]
    if mask & 0x10:
        body = bz2.decompress(body)
    if mask & 0x08:
        body = explode(body)
    if mask & 0x02:
        body = zlib.decompress(body)
    if mask & ~0x1A:
        raise ValueError("unsupported compression mask 0x%02x" % mask)
    return body


class MPQArchive:
    def __init__(self, path):
        self.path = path
        self.f = open(path, "rb")
        hdr = self.f.read(44)
        if hdr[:4] != b"MPQ\x1a":
            raise ValueError("not an MPQ: " + path)
        (hsize, _asize, ver, sshift, ht_off, bt_off, ht_n, bt_n) = struct.unpack_from("<IIHHIIII", hdr, 4)
        self.sector = 512 << sshift
        hi_bt = 0
        ht_hi = bt_hi = 0
        if ver >= 1:
            hi_bt, ht_hi, bt_hi = struct.unpack_from("<QHH", hdr, 32)
        self.f.seek(ht_off | (ht_hi << 32))
        ht = decrypt(self.f.read(ht_n * 16), hash_string("(hash table)", 3))
        self.hashes = {}
        for i in range(ht_n):
            a, b, _loc, _plat, bi = struct.unpack_from("<IIHHI", ht, i * 16)
            if bi >= 0xFFFFFFFE:
                continue
            self.hashes.setdefault((a, b), bi)
        self.f.seek(bt_off | (bt_hi << 32))
        bt = decrypt(self.f.read(bt_n * 16), hash_string("(block table)", 3))
        self.blocks = [struct.unpack_from("<IIII", bt, i * 16) for i in range(bt_n)]
        self.hi = [0] * bt_n
        if hi_bt:
            self.f.seek(hi_bt)
            self.hi = list(struct.unpack("<%dH" % bt_n, self.f.read(bt_n * 2)))

    def has(self, name):
        return (hash_string(name, 1), hash_string(name, 2)) in self.hashes

    def read(self, name):
        bi = self.hashes.get((hash_string(name, 1), hash_string(name, 2)))
        if bi is None or bi >= len(self.blocks):
            return None
        off, csize, fsize, flags = self.blocks[bi]
        if not flags & F_EXISTS:
            return None
        off |= self.hi[bi] << 32
        key = None
        if flags & F_ENCRYPTED:
            base = name.replace("/", "\\").split("\\")[-1]
            key = hash_string(base, 3)
            if flags & F_FIX_KEY:
                key = ((key + (off & 0xFFFFFFFF)) ^ fsize) & 0xFFFFFFFF
        self.f.seek(off)
        raw = self.f.read(csize)
        if fsize == 0:
            return b""
        comp = flags & (F_COMPRESS | F_IMPLODE)
        if flags & F_SINGLE:
            if key is not None:
                raw = decrypt(raw, key) + raw[len(raw) // 4 * 4:]
            if comp and csize < fsize:
                return explode(raw) if flags & F_IMPLODE else _decompress(raw, fsize)
            return raw[:fsize]
        nsec = (fsize + self.sector - 1) // self.sector
        if not comp:
            if key is None:
                return raw[:fsize]
            out = bytearray()
            for i in range(nsec):
                chunk = raw[i * self.sector:(i + 1) * self.sector]
                out += decrypt(chunk, (key + i) & 0xFFFFFFFF) + chunk[len(chunk) // 4 * 4:]
            return bytes(out[:fsize])
        tbl = raw[: (nsec + 1) * 4]
        if key is not None:
            tbl = decrypt(tbl, (key - 1) & 0xFFFFFFFF)
        offs = struct.unpack("<%dI" % (nsec + 1), tbl)
        out = bytearray()
        for i in range(nsec):
            chunk = raw[offs[i]:offs[i + 1]]
            if key is not None:
                chunk = decrypt(chunk, (key + i) & 0xFFFFFFFF) + chunk[len(chunk) // 4 * 4:]
            want = min(self.sector, fsize - i * self.sector)
            if len(chunk) >= want:
                out += chunk[:want]
            elif flags & F_IMPLODE:
                out += explode(chunk)
            else:
                out += _decompress(chunk, want)
        return bytes(out[:fsize])

    def listfile(self):
        d = self.read("(listfile)")
        if not d:
            return []
        return [l.strip() for l in d.decode("latin1", "replace").splitlines() if l.strip()]


# 1.12 load order (lowest precedence first); patch MPQs override the base set.
CLIENT_ORDER = [
    "base.MPQ", "backup.MPQ", "dbc.MPQ", "fonts.MPQ", "interface.MPQ", "misc.MPQ",
    "model.MPQ", "sound.MPQ", "speech.MPQ", "terrain.MPQ", "texture.MPQ", "wmo.MPQ",
    "patch.MPQ", "patch-2.MPQ", "patch-3.mpq", "patch-4.mpq", "patch-5.mpq",
    "patch-6.mpq", "patch-7.mpq", "patch-8.MPQ", "patch-9.MPQ",
]


class MPQChain:
    def __init__(self, data_dir, order=CLIENT_ORDER):
        self.archives = []
        present = {n.lower(): n for n in os.listdir(data_dir)}
        for n in order:
            real = present.get(n.lower())
            if real:
                self.archives.append(MPQArchive(os.path.join(data_dir, real)))

    def read(self, name):
        for a in reversed(self.archives):
            if a.has(name):
                d = a.read(name)
                if d is not None:
                    return d
        return None

    def which(self, name):
        for a in reversed(self.archives):
            if a.has(name):
                return os.path.basename(a.path)
        return None
