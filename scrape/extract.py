#!/usr/bin/env python3
"""Extract clean Markdown and structured data from raw phpBB topic pages.

Reads  raw/forum/f<forum>/t<topic>-p<page>.html.gz (written by crawl.py)
Writes extracted/forum/<forum-slug>/t<topic>.md         one file per topic, all pages merged
       structured/forum/posts/f<forum>.jsonl            one record per post
       structured/forum/topics.jsonl                    one record per topic
       structured/forum/authors.json                    username -> ids, ranks, authority, counts
       structured/external-links.jsonl                  every off-site link found in posts

Usage: python3 scrape/extract.py [--forum 63] [--topic 22214] [--partial]
Always a full deterministic rebuild of the outputs from raw/. Only topics whose raw pages
are all fetched (per the manifest) are extracted unless --partial.
"""
import argparse
import gzip
import json
import os
import re
import sys
from collections import defaultdict
from datetime import datetime, timezone
from html import unescape
from urllib.parse import urlsplit, parse_qsl

from bs4 import BeautifulSoup, NavigableString, Tag

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "raw", "forum")
MANIFEST = os.path.join(ROOT, "scrape", "manifest.jsonl")
EXTRACTED = os.path.join(ROOT, "extracted", "forum")
STRUCT = os.path.join(ROOT, "structured")
FORUM_INDEX = os.path.join(ROOT, "recon", "forum-index.json")
FORUM_URL = "https://forum.turtlecraft.gg"

# Timeline anchors (UTC). 1.18.1 preliminary notes were posted 2025-10-03; the release
# date is refined in structured/forum/timeline.json once found in the sources.
PATCH_1181_ANNOUNCED = datetime(2025, 10, 3, tzinfo=timezone.utc)
TIMELINE = os.path.join(STRUCT, "forum", "timeline.json")

STAFF_RANKS = {"turtle wow team", "game master", "gamemaster", "administrator", "developer", "moderator", "community manager"}
STAFF_COLORS = {"#8dc63f"}

INTERNAL_HOSTS = {"turtlecraft.gg", "forum.turtlecraft.gg", "www.turtlecraft.gg", "database.turtlecraft.gg", "talents.turtlecraft.gg"}


def slugify(s, n=60):
    s = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
    return s[:n].rstrip("-") or "untitled"


def parse_date(s):
    """'Fri Oct 03, 2025 10:13 am' -> ISO 8601 UTC (board shows UTC to guests)."""
    s = s.strip().replace(" ", " ")
    for fmt in ("%a %b %d, %Y %I:%M %p", "%a %b %d, %Y %H:%M"):
        try:
            return datetime.strptime(s, fmt).replace(tzinfo=timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
        except ValueError:
            pass
    return None


def link_type(url):
    h = urlsplit(url).netloc.lower()
    if "youtube.com" in h or "youtu.be" in h:
        return "youtube"
    if "twitch.tv" in h:
        return "twitch"
    if "reddit.com" in h:
        return "reddit"
    if "github.com" in h or "gitlab.com" in h:
        return "git"
    if "fandom.com" in h or "wiki" in h:
        return "wiki"
    if "discord" in h:
        return "discord"
    if "wowhead.com" in h or "classicdb" in h or "wow-classic" in h or "twinstar" in h or "database" in h:
        return "database"
    if "curseforge" in h or "wowinterface" in h or "legacy-wow" in h or "addon" in h:
        return "addon"
    if "imgur" in h or "postimg" in h or "ibb.co" in h or "gyazo" in h or "prnt.sc" in h:
        return "image-host"
    if "docs.google" in h or "sheets.google" in h or "pastebin" in h:
        return "document"
    return "other"


# ---------------------------------------------------------------- html -> markdown
class MD:
    def __init__(self):
        self.links = []
        self.images = []

    def convert(self, node, depth=0):
        out = []
        for c in node.children:
            out.append(self.node(c, depth))
        return "".join(out)

    def node(self, c, depth):
        if isinstance(c, NavigableString):
            if c.parent.name in ("script", "style"):
                return ""
            t = str(c).replace("\r", "")
            t = re.sub(r"[ \t]*\n[ \t]*", " ", t)
            return t
        if not isinstance(c, Tag):
            return ""
        n = c.name
        cls = " ".join(c.get("class", []))
        if n == "br":
            return "\n"
        if n in ("p", "div"):
            inner = self.convert(c, depth)
            return inner + ("\n" if inner.strip() else "")
        if n in ("strong", "b"):
            return self.wrap(c, "**", depth)
        if n in ("em", "i"):
            return self.wrap(c, "*", depth)
        if n == "u":
            return self.convert(c, depth)
        if n in ("s", "del", "strike"):
            return self.wrap(c, "~~", depth)
        if n == "span":
            style = c.get("style", "")
            inner = self.convert(c, depth)
            if "color" in style and inner.strip() and "\n" not in inner.strip():
                m = re.search(r"color:\s*(#[0-9a-fA-F]{3,6}|\w+)", style)
                col = m.group(1).lower() if m else ""
                return "**%s**" % inner.strip() if col in ("#ffbf40", "#ffbf00", "#ffcc00", "orange", "#ff8c00") else inner
            if "font-size" in style and inner.strip():
                return inner
            return inner
        if n == "a":
            href = c.get("href", "")
            inner = self.convert(c, depth).strip()
            if href.startswith("./") or href.startswith("/"):
                href = FORUM_URL + href[1:] if href.startswith("./") else FORUM_URL + href
            href = re.sub(r"[?&]sid=[0-9a-f]+", lambda m: "?" if m.group(0).startswith("?") and False else "", href)
            href = unescape(href)
            if href.startswith("#") or not href:
                return inner
            if "postlink" in cls or href.startswith("http"):
                self.links.append((href, inner))
            if not inner or inner == href:
                return "<%s>" % href
            return "[%s](%s)" % (inner, href)
        if n == "img":
            src = unescape(c.get("src", ""))
            alt = c.get("alt", "") or "image"
            if "smilies" in src:
                return " %s " % (c.get("title") or alt)
            self.images.append(src)
            return "![%s](%s)" % (alt, src)
        if n == "iframe":
            src = c.get("src", "")
            if src:
                self.links.append((src, "embed"))
            return "\n[embed: %s]\n" % src
        if n in ("ul", "ol"):
            items = []
            i = 0
            for li in c.find_all("li", recursive=False):
                i += 1
                body = self.convert(li, depth + 1).strip()
                body = body.replace("\n", "\n" + "  " * (depth + 1))
                items.append("  " * depth + ("- " if n == "ul" else "%d. " % i) + body)
            return "\n" + "\n".join(items) + "\n"
        if n == "li":
            return self.convert(c, depth) + "\n"
        if n == "blockquote":
            cite = c.find("cite", recursive=False) or c.find("cite")
            who = ""
            if cite:
                who = re.sub(r"\s+", " ", cite.get_text(" ", strip=True))
                cite.extract()
            inner = self.convert(c, depth).strip()
            lines = ["> " + l for l in inner.split("\n")]
            head = "> **%s**\n" % who if who else ""
            return "\n" + head + "\n".join(lines) + "\n\n"
        if n == "cite":
            return ""
        if n in ("code", "pre"):
            inner = c.get_text()
            if "\n" in inner or n == "pre":
                return "\n```\n%s\n```\n" % inner.strip("\n")
            return "`%s`" % inner
        if n == "table":
            rows = []
            for tr in c.find_all("tr"):
                cells = [re.sub(r"\s+", " ", self.convert(td, depth)).strip() for td in tr.find_all(["td", "th"])]
                rows.append("| " + " | ".join(cells) + " |")
                if len(rows) == 1:
                    rows.append("|" + "---|" * len(cells))
            return "\n" + "\n".join(rows) + "\n"
        if n in ("h1", "h2", "h3", "h4", "h5", "h6"):
            return "\n**%s**\n" % self.convert(c, depth).strip()
        if n == "hr":
            return "\n---\n"
        if n == "dl" and "codebox" in cls:
            code = c.find("code")
            return "\n```\n%s\n```\n" % (code.get_text() if code else c.get_text())
        if n == "dl" and "attachbox" in cls:
            return "\n[attachment: %s]\n" % re.sub(r"\s+", " ", c.get_text(" ", strip=True))[:200]
        if n == "div" and "spoiler" in cls:
            return "\n[spoiler]\n%s\n[/spoiler]\n" % self.convert(c, depth).strip()
        return self.convert(c, depth)

    def wrap(self, c, mark, depth):
        inner = self.convert(c, depth)
        if not inner.strip():
            return inner
        lead = inner[: len(inner) - len(inner.lstrip())]
        trail = inner[len(inner.rstrip()):]
        core = inner.strip()
        if "\n" in core:
            return inner
        return "%s%s%s%s%s" % (lead, mark, core, mark, trail)


def tidy(md):
    md = re.sub(r"[ \t]+\n", "\n", md)
    md = re.sub(r"\n[ \t]+(?![-*\d])", "\n", md)
    md = re.sub(r"\n{3,}", "\n\n", md)
    return md.strip()


# ---------------------------------------------------------------- page parsing
def parse_topic_page(html):
    soup = BeautifulSoup(html, "lxml")
    out = {"posts": []}
    t = soup.find("title")
    out["title"] = t.get_text().rsplit(" - Turtle WoW", 1)[0].strip() if t else None
    crumbs = [unescape(x.get_text(strip=True)) for x in soup.select("li.breadcrumbs span[itemprop=name], .breadcrumbs .crumb span, li.breadcrumbs a span")]
    out["breadcrumbs"] = crumbs
    pag = soup.find("div", class_="pagination")
    if pag:
        m = re.search(r"Page\s*(\d+)\s*of\s*(\d+)", pag.get_text(" ", strip=True))
        if m:
            out["page"], out["pages"] = int(m.group(1)), int(m.group(2))
        m = re.search(r"(\d+)\s*posts?", pag.get_text(" ", strip=True))
        if m:
            out["post_count"] = int(m.group(1))
    for div in soup.find_all("div", class_="post"):
        pid = div.get("id", "")
        if not pid.startswith("p"):
            continue
        p = {"post_id": int(pid[1:])}
        prof = div.find("dl", class_="postprofile")
        a = None
        if prof:
            a = prof.find("a", class_=re.compile("username"))
            rank = prof.find("dd", class_="profile-rank")
            p["rank"] = rank.get_text(strip=True) if rank else None
            joined = prof.find("dd", class_="profile-joined")
            p["author_joined"] = parse_date(joined.get_text(strip=True).replace("Joined:", "")) if joined else None
            loc = prof.find("dd", class_="profile-phpbb_location")
            p["author_location"] = loc.get_text(strip=True).replace("Location:", "").strip() if loc else None
            posts = prof.find("dd", class_="profile-posts")
        if a is None:
            a = div.find("a", class_=re.compile("username"))
        if a is not None:
            p["author"] = a.get_text(strip=True)
            m = re.search(r"[?&]u=(\d+)", a.get("href", ""))
            p["author_id"] = int(m.group(1)) if m else None
            m = re.search(r"color:\s*(#[0-9a-fA-F]{6})", a.get("style", ""))
            p["author_color"] = m.group(1).lower() if m else None
        else:
            s = div.find("strong")
            p["author"] = s.get_text(strip=True) if s else None
            p["author_id"] = None
            p["author_color"] = None
        pa = div.find("p", class_="author")
        p["date"] = None
        if pa:
            txt = pa.get_text(" ", strip=True)
            m = re.search(r"»\s*(.+)$", txt)
            p["date"] = parse_date(m.group(1)) if m else None
            p["date_raw"] = m.group(1).strip() if m else txt
        h3 = div.find("h3")
        p["subject"] = h3.get_text(strip=True) if h3 else None
        content = div.find("div", class_="content")
        conv = MD()
        p["content_md"] = tidy(conv.convert(content)) if content else ""
        p["content_html"] = str(content) if content else ""
        p["links"] = [{"url": u, "text": t} for u, t in conv.links]
        p["images"] = conv.images
        notice = div.find("div", class_="notice")
        p["edited"] = re.sub(r"\s+", " ", notice.get_text(" ", strip=True)) if notice else None
        thanks = div.find("div", id=re.compile(r"list_thanks"))
        p["thanked_by"] = [x.get_text(strip=True) for x in thanks.find_all("a")] if thanks else []
        out["posts"].append(p)
    return out


# ---------------------------------------------------------------- driver
def load_manifest():
    rows = {}
    with open(MANIFEST) as fh:
        for line in fh:
            if line.strip():
                r = json.loads(line)
                rows[r["url"]] = r
    return rows


def authority(rank, color):
    if rank and rank.lower() in STAFF_RANKS:
        return "staff"
    if color and color.lower() in STAFF_COLORS:
        return "staff"
    return "player"


def era(date_iso, timeline):
    if not date_iso:
        return "unknown"
    d = datetime.strptime(date_iso, "%Y-%m-%dT%H:%M:%SZ").replace(tzinfo=timezone.utc)
    rel = timeline.get("patch_1181_released")
    if rel:
        rel = datetime.strptime(rel, "%Y-%m-%d").replace(tzinfo=timezone.utc)
        if d >= rel:
            return "post-1.18.1"
    if d >= PATCH_1181_ANNOUNCED:
        return "1.18.1-announced-pre-release" if rel else "post-1.18.1-announcement"
    return "pre-1.18.1"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--forum", type=int, action="append")
    ap.add_argument("--topic", type=int, action="append")
    ap.add_argument("--partial", action="store_true", help="extract topics even if some pages are missing")
    a = ap.parse_args()
    idx = {r["forum_id"]: r for r in json.load(open(FORUM_INDEX))}
    timeline = json.load(open(TIMELINE)) if os.path.exists(TIMELINE) else {}
    man = load_manifest()
    # group topic pages by (forum, topic)
    topics = defaultdict(dict)
    for r in man.values():
        if r.get("kind") != "topic":
            continue
        if a.forum and r["forum"] not in a.forum:
            continue
        if a.topic and r["t"] not in a.topic:
            continue
        topics[(r["forum"], r["t"])][r["page"]] = r
    import shutil
    authors_path = os.path.join(STRUCT, "forum", "authors.json")
    authors = {}
    posts_dir = os.path.join(STRUCT, "forum", "posts")
    shutil.rmtree(posts_dir, ignore_errors=True)
    os.makedirs(posts_dir, exist_ok=True)
    shutil.rmtree(EXTRACTED, ignore_errors=True)
    topics_out = os.path.join(STRUCT, "forum", "topics.jsonl")
    existing_topics = {}
    links_out = os.path.join(STRUCT, "external-links.jsonl")
    existing_links = set()
    for pth in (topics_out, links_out):
        if os.path.exists(pth):
            os.remove(pth)
    n_topics = n_posts = 0
    posts_fh = {}
    lf = open(links_out, "a")
    for (f, t), pages in sorted(topics.items()):
        expected = max(r.get("pages", 1) for r in pages.values())
        have = [p for p, r in pages.items() if r["status"] == "done" and os.path.exists(os.path.join(ROOT, r["path"]))]
        if len(have) < expected and not a.partial:
            continue
        posts, meta = [], {}
        for pn in sorted(have):
            r = pages[pn]
            html = gzip.open(os.path.join(ROOT, r["path"])).read().decode("utf-8", "replace")
            pg = parse_topic_page(html)
            if pn == 1 or not meta:
                meta = {k: v for k, v in pg.items() if k != "posts"}
                meta["fetched"] = r["ts"]
            for p in pg["posts"]:
                p["page"] = pn
                p["url"] = "%s/viewtopic.php?p=%d#p%d" % (FORUM_URL, p["post_id"], p["post_id"])
                p["authority"] = authority(p.get("rank"), p.get("author_color"))
                p["era"] = era(p.get("date"), timeline)
                p["topic_id"], p["forum_id"] = t, f
                posts.append(p)
        if not posts:
            continue
        seen = set()
        posts = [p for p in posts if not (p["post_id"] in seen or seen.add(p["post_id"]))]
        posts.sort(key=lambda p: p["post_id"])
        # true forum from breadcrumbs (global announcements appear in every listing)
        crumbs = meta.get("breadcrumbs") or []
        true_forum_name = crumbs[-1] if crumbs else idx[f]["name"]
        true_forum = next((fid for fid, r in idx.items() if r["name"] == true_forum_name), f)
        fslug = "f%d-%s" % (true_forum, slugify(idx[true_forum]["name"], 30))
        title = meta.get("title") or pages[1].get("title") or "untitled"
        first = posts[0]
        rec = {
            "topic_id": t, "forum_id": true_forum, "forum": idx[true_forum]["name"], "listed_in_forum": f,
            "title": title, "url": "%s/viewtopic.php?t=%d" % (FORUM_URL, t),
            "author": first.get("author"), "author_id": first.get("author_id"), "author_authority": first["authority"],
            "posted": first.get("date"), "last_post": max((p.get("date") or "") for p in posts) or None,
            "post_count": len(posts), "pages": expected, "pages_fetched": len(have), "fetched": meta.get("fetched"),
            "era": first["era"], "staff_posts": sum(1 for p in posts if p["authority"] == "staff"),
            "extracted_path": "extracted/forum/%s/t%d-%s.md" % (fslug, t, slugify(title)),
        }
        # markdown
        md = ["---"]
        for k in ("title", "url", "topic_id", "forum_id", "forum", "author", "author_authority", "posted", "last_post", "post_count", "pages", "fetched", "era"):
            v = rec[k]
            md.append("%s: %s" % (k, json.dumps(v, ensure_ascii=False) if isinstance(v, str) else v))
        md.append("note: bold text marks names highlighted in the source; posts are in original order; times are UTC")
        md.append("---\n")
        md.append("# %s\n" % title)
        for p in posts:
            tag = " [STAFF]" if p["authority"] == "staff" else ""
            rank = (" (%s)" % p["rank"]) if p.get("rank") else ""
            md.append("## Post %d by %s%s%s — %s" % (p["post_id"], p.get("author") or "?", rank, tag, (p.get("date") or p.get("date_raw") or "?")))
            md.append("<!-- url: %s | page %d | era: %s -->\n" % (p["url"], p["page"], p["era"]))
            md.append(p["content_md"] or "(empty)")
            if p.get("edited"):
                md.append("\n*%s*" % p["edited"])
            md.append("")
        path = os.path.join(ROOT, rec["extracted_path"])
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "w") as fh:
            fh.write("\n".join(md) + "\n")
        # posts jsonl (append, per true forum)
        pf = posts_fh.get(true_forum)
        if pf is None:
            pf = posts_fh[true_forum] = open(os.path.join(STRUCT, "forum", "posts", "f%d.jsonl" % true_forum), "a")
        for p in posts:
            p2 = dict(p)
            p2["topic_title"] = title
            p2["forum_id"] = true_forum
            pf.write(json.dumps(p2, ensure_ascii=False) + "\n")
            au = authors.setdefault(p.get("author") or "?", {"user_id": p.get("author_id"), "ranks": [], "colors": [], "posts": 0, "topics_started": 0, "authority": "player", "first_seen": None, "last_seen": None})
            au["posts"] += 1
            if p.get("rank") and p["rank"] not in au["ranks"]:
                au["ranks"].append(p["rank"])
            if p.get("author_color") and p["author_color"] not in au["colors"]:
                au["colors"].append(p["author_color"])
            if p["authority"] == "staff":
                au["authority"] = "staff"
            if p.get("date"):
                au["first_seen"] = min(au["first_seen"] or p["date"], p["date"])
                au["last_seen"] = max(au["last_seen"] or p["date"], p["date"])
            for l in p["links"]:
                host = urlsplit(l["url"]).netloc.lower()
                if not host or host in INTERNAL_HOSTS or l["url"].startswith("https://forum.turtlecraft.gg"):
                    continue
                key = (l["url"], p["post_id"])
                if key in existing_links:
                    continue
                existing_links.add(key)
                lf.write(json.dumps({"url": l["url"], "type": link_type(l["url"]), "text": l["text"][:200], "post_id": p["post_id"],
                                     "post_url": p["url"], "topic_id": t, "topic_title": title, "forum": idx[true_forum]["name"],
                                     "author": p.get("author"), "authority": p["authority"], "date": p.get("date")}, ensure_ascii=False) + "\n")
        authors[first.get("author") or "?"]["topics_started"] += 1
        with open(topics_out, "a") as fh:
            fh.write(json.dumps(rec, ensure_ascii=False) + "\n")
        existing_topics[t] = rec
        n_topics += 1
        n_posts += len(posts)
    for fh in posts_fh.values():
        fh.close()
    lf.close()
    with open(authors_path, "w") as fh:
        json.dump(authors, fh, ensure_ascii=False, indent=1, sort_keys=True)
    print("extracted %d topics, %d posts" % (n_topics, n_posts))


if __name__ == "__main__":
    main()
