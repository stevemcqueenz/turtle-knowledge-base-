#!/usr/bin/env python3
"""Polite, resumable crawler for turtlecraft.gg and forum.turtlecraft.gg.

Single fetcher process with a token-bucket rate limit (default 1 request/second),
exponential backoff on 429/5xx/timeouts and a global pause when errors spike.
Every URL lives in scrape/manifest.jsonl (append-only; last record per URL wins)
with status queued / claimed / done / failed, owning agent and timestamp.
Raw HTML is stored gzipped under raw/ so re-parsing never needs a refetch.

Usage:
  python3 scrape/crawl.py seed            # build the initial queue (idempotent)
  python3 scrape/crawl.py run [--rate 1.0] [--max N]
  python3 scrape/crawl.py status
  python3 scrape/crawl.py requeue-failed  # put retryable failures back in the queue
Touch scrape/STOP to make a running crawler exit cleanly after the current request.
"""
import argparse
import gzip
import heapq
import json
import math
import os
import random
import re
import sys
import time
from collections import deque
from datetime import datetime, timezone
from html import unescape
from urllib.parse import urlsplit, urlunsplit, parse_qsl, urlencode

import requests

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCRAPE = os.path.join(ROOT, "scrape")
RAW = os.path.join(ROOT, "raw")
MANIFEST = os.path.join(SCRAPE, "manifest.jsonl")
STATUS = os.path.join(SCRAPE, "status.json")
LOG = os.path.join(SCRAPE, "crawl.log")
STOP = os.path.join(SCRAPE, "STOP")
FORUM_INDEX = os.path.join(ROOT, "recon", "forum-index.json")

UA = "TurtleKB-archiver/1.0 (+one-time archive of turtlecraft.gg before its 2026-10-16 closure; contact: claude@stanislavkulik.de)"
FORUM = "https://forum.turtlecraft.gg"
SITE = "https://turtlecraft.gg"
PER_PAGE = 35

# Crawl order (forum ids). Non-English forums other than German (56) are excluded.
FORUM_ORDER = [
    63,  # Patch Notes & Changelog
    2,   # Announcements
    70,  # Itemization
    75,  # Remastered Client (small, official)
    74,  # Everlook Broadcasting Co. (official, small)
    40, 41, 42, 43, 44, 45, 46, 47, 48,  # class forums
    28,  # Raids
    33,  # Professions
    73,  # PvP
    37,  # Hardcore Lounge
    3,   # Help & Support
    4,   # General
    23,  # Guild Recruitment
    50,  # Roleplay Guild Recruitment
    18,  # AddOns
    19,  # Lore
    29,  # Modding
    72,  # Level One Lunatics
    17,  # Storyteller's Corner
    32,  # Creative Corner
    22,  # Streams & Videos
    14,  # Suggestions (largest)
    56,  # German
]

SITE_SLUGS = [
    "", "rules", "terms-of-service", "hardcore", "challenges", "new-races", "high-elves", "goblins",
    "class-race-combinations", "raids-and-dungeons", "classic-dungeons-update", "new-locations-and-maps",
    "new-factions-and-quests", "additional-transport-routes", "jewelcrafting", "survival-and-gardening",
    "guild-banks", "guild-quarters", "transmogrification", "character-customizations", "pets-and-mounts",
    "dynamic-mount-speed", "achievement-titles", "client-interface-improvements", "player-versus-player-content",
    "seasonal-events", "roleplay", "remastered", "sound-design", "radio", "watch", "bug-tracker",
    "artworks", "community-artworks", "logos", "tshirt-designs",
]

IMAGE_FORUMS = {63, 2, 70}  # forums whose post images (hosted on turtlecraft.gg) are archived too


def now():
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def log(msg):
    line = "%s %s" % (now(), msg)
    print(line, flush=True)
    with open(LOG, "a") as fh:
        fh.write(line + "\n")


def normalize(url):
    """Strip phpBB sid, resolve ./ links, sort query keys."""
    if url.startswith("./"):
        url = FORUM + url[1:]
    elif url.startswith("/"):
        url = FORUM + url
    url = unescape(url)
    p = urlsplit(url)
    q = [(k, v) for k, v in parse_qsl(p.query, keep_blank_values=True) if k != "sid"]
    q.sort()
    return urlunsplit((p.scheme, p.netloc, p.path, urlencode(q), ""))


# ---------------------------------------------------------------- manifest
class Manifest:
    def __init__(self):
        self.rows = {}   # url -> latest record
        self.seen_topics = set()
        if os.path.exists(MANIFEST):
            with open(MANIFEST) as fh:
                for line in fh:
                    line = line.strip()
                    if not line:
                        continue
                    r = json.loads(line)
                    self.rows[r["url"]] = r
                    if r.get("kind") == "topic":
                        self.seen_topics.add(r["t"])
        self.fh = open(MANIFEST, "a")
        self.new_urls = []

    def write(self, rec):
        rec["ts"] = now()
        self.rows[rec["url"]] = rec
        self.fh.write(json.dumps(rec, ensure_ascii=False) + "\n")
        self.fh.flush()

    def add(self, url, **fields):
        url = normalize(url)
        if url in self.rows:
            return False
        rec = dict(url=url, status="queued", attempts=0, agent=None, path=None, http=None, note=None)
        rec.update(fields)
        if rec.get("kind") == "topic":
            self.seen_topics.add(rec["t"])
        self.write(rec)
        self.new_urls.append(url)
        return True

    def counts(self):
        out = {}
        for r in self.rows.values():
            sec = r.get("section", "?")
            d = out.setdefault(sec, {"queued": 0, "claimed": 0, "done": 0, "failed": 0})
            d[r["status"]] = d.get(r["status"], 0) + 1
        return out


# ---------------------------------------------------------------- seeding
def load_forum_index():
    return {r["forum_id"]: r for r in json.load(open(FORUM_INDEX))}


def seed(m):
    idx = load_forum_index()
    n = 0
    for prio, f in enumerate(FORUM_ORDER):
        info = idx[f]
        pages = max(1, math.ceil(info["topics"] / PER_PAGE))
        for i in range(pages):
            start = i * PER_PAGE
            url = "%s/viewforum.php?f=%d" % (FORUM, f) + ("&start=%d" % start if start else "")
            n += m.add(url, kind="list", section="forum-%d" % f, forum=f, start=start, prio=prio * 10,
                       path="raw/forum/f%d/list-%05d.html.gz" % (f, start))
    for slug in SITE_SLUGS:
        n += m.add(SITE + "/" + slug, kind="site", section="site", prio=25, path="raw/site/%s.html.gz" % (slug or "index"))
    log("seed: %d new urls" % n)


# ---------------------------------------------------------------- parsing for discovery
RE_TOPIC_ROW = re.compile(r'<a href="\./viewtopic\.php\?([^"]*?)" class="topictitle">(.*?)</a>(.*?)</dl>', re.S)
RE_REPLIES = re.compile(r'class="posts">(\d+)')
RE_PAGE_OF = re.compile(r'Page\s*<strong>(\d+)</strong>\s*of\s*<strong>(\d+)</strong>|Page (\d+) of (\d+)')
RE_IMG = re.compile(r'src="(https://turtlecraft\.gg/images/[^"]+)"')


def discover_from_listing(m, rec, html):
    f, prio = rec["forum"], rec["prio"]
    new = 0
    for mt in RE_TOPIC_ROW.finditer(html):
        qs, title, rest = mt.group(1), mt.group(2), mt.group(3)
        q = dict(parse_qsl(unescape(qs)))
        if "t" not in q:
            continue
        t = int(q["t"])
        if t in m.seen_topics:
            continue
        mr = RE_REPLIES.search(rest)
        replies = int(mr.group(1)) if mr else 0
        pages = max(1, math.ceil((replies + 1) / PER_PAGE))
        title = unescape(re.sub(r"<[^>]+>", "", title)).strip()
        for i in range(pages):
            start = i * PER_PAGE
            url = "%s/viewtopic.php?t=%d" % (FORUM, t) + ("&start=%d" % start if start else "")
            new += m.add(url, kind="topic", section="forum-%d" % f, forum=f, t=t, page=i + 1, pages=pages,
                         title=title, prio=prio + 5, path="raw/forum/f%d/t%d-p%d.html.gz" % (f, t, i + 1))
    return new


def discover_from_topic(m, rec, html):
    """Fallback: enqueue pages the listing's reply count missed; collect images."""
    f, t, prio = rec["forum"], rec["t"], rec["prio"]
    new = 0
    mp = RE_PAGE_OF.search(html)
    if mp:
        total = int(mp.group(2) or mp.group(4))
        for i in range(total):
            start = i * PER_PAGE
            url = "%s/viewtopic.php?t=%d" % (FORUM, t) + ("&start=%d" % start if start else "")
            new += m.add(url, kind="topic", section=rec["section"], forum=f, t=t, page=i + 1, pages=total,
                         title=rec.get("title"), prio=prio, path="raw/forum/f%d/t%d-p%d.html.gz" % (f, t, i + 1))
    if f in IMAGE_FORUMS:
        for img in set(RE_IMG.findall(html)):
            img = unescape(img)
            p = urlsplit(img).path.lstrip("/")
            new += m.add(img, kind="image", section="images", prio=900, forum=f, t=t, path="raw/" + p)
    return new


# ---------------------------------------------------------------- fetching
class Limiter:
    def __init__(self, rate):
        self.base = 1.0 / rate
        self.interval = self.base
        self.last = 0.0
        self.ok_streak = 0
        self.err_streak = 0
        self.window = deque(maxlen=50)

    def wait(self):
        dt = self.interval - (time.monotonic() - self.last)
        if dt > 0:
            time.sleep(dt + random.uniform(0, 0.15))
        self.last = time.monotonic()

    def success(self):
        self.ok_streak += 1
        self.err_streak = 0
        self.window.append(0)
        # speed up gently after a long clean run, never below 0.67 s (1.5 req/s)
        if self.ok_streak >= 300 and self.interval > 0.67:
            self.interval = max(0.67, self.interval - 0.1)
            self.ok_streak = 0
            log("limiter: interval -> %.2fs" % self.interval)

    def error(self, hard=True):
        self.err_streak += 1
        self.ok_streak = 0
        self.window.append(1)
        self.interval = max(self.interval, self.base)
        back = min(300, 5 * (2 ** min(self.err_streak, 6))) if hard else min(60, 3 * self.err_streak)
        if len(self.window) >= 25 and sum(self.window) / len(self.window) > 0.2:
            log("limiter: error rate %.0f%% over last %d requests, pausing 600s" % (100 * sum(self.window) / len(self.window), len(self.window)))
            self.window.clear()
            back = 600
        log("limiter: backoff %ds (streak %d)" % (back, self.err_streak))
        time.sleep(back)


def looks_blocked(text):
    t = text[:4000].lower()
    return "just a moment" in t and "cloudflare" in t or "attention required" in t and "cloudflare" in t


def fetch(sess, url):
    return sess.get(url, timeout=(20, 90), allow_redirects=True)


def validate(rec, resp):
    """Return (ok, note). ok=False means retry."""
    ct = resp.headers.get("content-type", "")
    if rec["kind"] == "image":
        return (resp.status_code == 200 and len(resp.content) > 0, None)
    text = resp.text
    if looks_blocked(text):
        return (False, "cloudflare challenge")
    if "</html>" not in text[-3000:].lower():
        return (False, "truncated html")
    if rec["kind"] in ("list", "topic"):
        if "The requested topic does not exist" in text or "The forum you selected does not exist" in text:
            return (True, "phpbb: does not exist")
        if "You are not authorised" in text or "not authorised to read this forum" in text:
            return (True, "phpbb: not authorised (gated)")
        if rec["kind"] == "topic" and 'class="post ' not in text and 'class="post has-profile' not in text:
            return (True, "no posts found on page")
    return (True, None)


def save(rec, resp):
    path = os.path.join(ROOT, rec["path"])
    os.makedirs(os.path.dirname(path), exist_ok=True)
    if rec["kind"] == "image":
        with open(path, "wb") as fh:
            fh.write(resp.content)
    else:
        with gzip.open(path, "wb") as fh:
            fh.write(resp.content)


def write_status(m, extra=None):
    st = {"ts": now(), "sections": m.counts()}
    if extra:
        st.update(extra)
    tot = {"queued": 0, "claimed": 0, "done": 0, "failed": 0}
    for d in st["sections"].values():
        for k in tot:
            tot[k] += d.get(k, 0)
    st["total"] = tot
    tmp = STATUS + ".tmp"
    with open(tmp, "w") as fh:
        json.dump(st, fh, indent=1, sort_keys=True)
    os.replace(tmp, STATUS)
    return st


def run(m, rate, max_n, agent):
    sess = requests.Session()
    sess.headers.update({"User-Agent": UA, "Accept": "text/html,application/xhtml+xml,image/*;q=0.9,*/*;q=0.8",
                         "Accept-Language": "en-GB,en;q=0.8"})
    lim = Limiter(rate)
    heap = []
    seq = 0
    for r in m.rows.values():
        if r["status"] in ("queued", "claimed"):
            heapq.heappush(heap, (r["prio"], seq, r["url"]))
            seq += 1
    log("run: %d urls pending, rate %.2f/s, agent %s" % (len(heap), rate, agent))
    done_n = 0
    while heap:
        if os.path.exists(STOP):
            log("STOP file present, exiting")
            break
        if max_n and done_n >= max_n:
            break
        prio, _, url = heapq.heappop(heap)
        rec = m.rows[url]
        if rec["status"] not in ("queued", "claimed"):
            continue
        rec = dict(rec, status="claimed", agent=agent, attempts=rec["attempts"] + 1)
        m.write(rec)
        lim.wait()
        t0 = time.monotonic()
        try:
            resp = fetch(sess, url)
            code = resp.status_code
            if code in (429, 500, 502, 503, 504, 520, 521, 522, 523, 524, 525):
                raise requests.HTTPError("HTTP %d" % code)
            if code in (403,) and looks_blocked(resp.text):
                raise requests.HTTPError("HTTP 403 cloudflare")
            if code in (404, 410, 403):
                rec.update(status="failed", http=code, note="HTTP %d (permanent)" % code)
                m.write(rec)
                log("gone %s -> HTTP %d" % (url, code))
                lim.success()
                continue
            ok, note = validate(rec, resp)
            if not ok:
                raise requests.HTTPError(note or "invalid")
            if code != 200:
                rec.update(status="failed", http=code, note="HTTP %d" % code)
                m.write(rec)
                log("FAIL %s -> HTTP %d" % (url, code))
                lim.error(hard=False)
                continue
            save(rec, resp)
            rec.update(status="done", http=code, note=note, bytes=len(resp.content))
            m.write(rec)
            lim.success()
            done_n += 1
            new = 0
            try:
                if rec["kind"] == "list":
                    new = discover_from_listing(m, rec, resp.text)
                elif rec["kind"] == "topic":
                    new = discover_from_topic(m, rec, resp.text)
            except Exception as e:
                log("discovery error on %s: %s" % (url, e))
            for u in m.new_urls:
                heapq.heappush(heap, (m.rows[u]["prio"], seq, u))
                seq += 1
            m.new_urls.clear()
            log("ok   %s (%d B, %.1fs)%s%s" % (url, len(resp.content), time.monotonic() - t0,
                                             " +%d queued" % new if new else "", " [%s]" % note if note else ""))
        except Exception as e:  # network errors, 5xx, timeouts
            err = str(e)[:160]
            if rec["attempts"] >= 6:
                rec.update(status="failed", note=err)
                m.write(rec)
                log("FAIL %s after %d attempts: %s" % (url, rec["attempts"], err))
            else:
                rec.update(status="queued", note=err)
                m.write(rec)
                heapq.heappush(heap, (prio, seq, url))
                seq += 1
                log("retry %s (attempt %d): %s" % (url, rec["attempts"], err))
            lim.error(hard=True)
        if done_n % 25 == 0:
            write_status(m, {"pending": len(heap), "interval_s": round(lim.interval, 2)})
    write_status(m, {"pending": len(heap), "interval_s": round(lim.interval, 2)})
    log("run finished: %d fetched this run, %d pending" % (done_n, len(heap)))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("cmd", choices=["seed", "run", "status", "requeue-failed"])
    ap.add_argument("--rate", type=float, default=1.0)
    ap.add_argument("--max", type=int, default=0)
    ap.add_argument("--agent", default="crawler-%d" % os.getpid())
    a = ap.parse_args()
    os.makedirs(SCRAPE, exist_ok=True)
    m = Manifest()
    if a.cmd == "seed":
        seed(m)
        write_status(m)
    elif a.cmd == "run":
        if os.path.exists(STOP):
            os.remove(STOP)
        run(m, a.rate, a.max, a.agent)
    elif a.cmd == "status":
        st = write_status(m)
        print(json.dumps(st, indent=1, sort_keys=True))
    elif a.cmd == "requeue-failed":
        n = 0
        for r in list(m.rows.values()):
            if r["status"] == "failed" and r.get("http") not in (404, 410):
                m.write(dict(r, status="queued", attempts=0))
                n += 1
        log("requeued %d failed urls" % n)


if __name__ == "__main__":
    main()
