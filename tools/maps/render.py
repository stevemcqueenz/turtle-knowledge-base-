"""World-space compositing of ADT and WMO minimap tiles.

A canvas is described by View(xmax, ymax, S, W, H): pixel (col, row) <->
world (x, y) = (xmax - row/S, ymax - col/S), i.e. north up, west left.
"""
import math

import numpy as np
from PIL import Image

from wowdata import ADT, group_image, load_blp


class View:
    def __init__(self, xmin, xmax, ymin, ymax, S):
        self.xmin, self.xmax, self.ymin, self.ymax, self.S = xmin, xmax, ymin, ymax, S
        self.W = max(1, int(math.ceil((ymax - ymin) * S)))
        self.H = max(1, int(math.ceil((xmax - xmin) * S)))

    def px(self, x, y):
        return (self.ymax - y) * self.S, (self.xmax - x) * self.S


def group_world_bounds(pl, g):
    x0, y0, _z0, x1, y1, _z1 = g["bb"]
    xs, ys = [], []
    for lx in (x0, x1):
        for ly in (y0, y1):
            wx, wy, _ = pl.to_world(lx, ly, 0)
            xs.append(wx)
            ys.append(wy)
    return min(xs), max(xs), min(ys), max(ys)


def draw_group(canvas, view, pl, g, img_cache, mpq, blp_cache):
    """Alpha-composite one WMO group (under placement pl) onto canvas (RGBA, view)."""
    key = (pl.wmo.lower(), g["i"])
    if key not in img_cache:
        img_cache[key] = group_image(mpq, g, blp_cache)
    gimg, X1, Y1 = img_cache[key]
    wx0, wx1, wy0, wy1 = group_world_bounds(pl, g)
    # sub-rectangle of the canvas the group can touch
    c0 = int(math.floor((view.ymax - wy1) * view.S)) - 2
    c1 = int(math.ceil((view.ymax - wy0) * view.S)) + 2
    r0 = int(math.floor((view.xmax - wx1) * view.S)) - 2
    r1 = int(math.ceil((view.xmax - wx0) * view.S)) + 2
    c0, r0 = max(c0, 0), max(r0, 0)
    c1, r1 = min(c1, view.W), min(r1, view.H)
    if c1 <= c0 or r1 <= r0:
        return
    S = view.S
    cs, sn = math.cos(pl.theta), math.sin(pl.theta)
    # output pixel (C, R) of the sub-rect -> canvas (C+c0, R+r0) -> world -> local -> group px
    A = view.xmax - r0 / S - pl.T[0]
    B = view.ymax - c0 / S - pl.T[1]
    a = 2 * cs / S
    b = -2 * sn / S
    c = 2 * Y1 + 2 * sn * A - 2 * cs * B
    d = 2 * sn / S
    e = 2 * cs / S
    f = 2 * X1 - 2 * cs * A - 2 * sn * B
    sub = gimg.transform((c1 - c0, r1 - r0), Image.AFFINE, (a, b, c, d, e, f),
                         resample=Image.BILINEAR if S < 2 else Image.BICUBIC)
    canvas.alpha_composite(sub, (c0, r0))


def draw_adt(canvas, view, tiles, mpq, blp_cache):
    """tiles {(col,row): md5} -> composite scaled ADT minimap blocks onto canvas."""
    size = ADT * view.S
    for (col, row), md5 in tiles.items():
        wy_top = (32 - col) * ADT      # west edge (max y)
        wx_top = (32 - row) * ADT      # north edge (max x)
        c0 = (view.ymax - wy_top) * view.S
        r0 = (view.xmax - wx_top) * view.S
        if c0 > view.W or r0 > view.H or c0 + size < 0 or r0 + size < 0:
            continue
        t = load_blp(mpq, md5, blp_cache)
        if t is None:
            continue
        ic0, ir0 = int(math.floor(c0)), int(math.floor(r0))
        n = int(math.ceil(c0 + size)) - ic0
        im = t.convert("RGBA").resize((n, int(math.ceil(r0 + size)) - ir0), Image.BICUBIC)
        if ic0 >= 0 and ir0 >= 0:
            canvas.alpha_composite(im, (ic0, ir0))
        else:
            _paste_clip(canvas, im, ic0, ir0)


def _paste_clip(canvas, im, x, y):
    cx0, cy0 = max(0, -x), max(0, -y)
    crop = im.crop((cx0, cy0, im.width, im.height))
    canvas.alpha_composite(crop, (max(0, x), max(0, y)))


def alpha_mask(img, thr=8):
    return np.asarray(img.getchannel("A")) > thr
