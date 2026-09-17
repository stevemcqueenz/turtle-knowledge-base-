#!/usr/bin/env python3
"""Normalize a Discord server backup into the repository's structured/extracted layout.

Input: a directory where each channel is either a folder or a single .zip archive (name =
channel name) holding JSON message dumps plus the downloaded attachments (screenshots,
files). Zips are unpacked once into --work-dir (default: <backup>/_unzipped) and then read
like folders. Three dump
shapes are recognized per file, so mixed exports work:

  1. DiscordChatExporter JSON: {"guild": {...}, "channel": {...}, "messages": [...]}
  2. Raw Discord API arrays: [{"id", "channel_id", "author": {"username"}, "timestamp", ...}]
  3. Discord data-package style: [{"ID", "Timestamp", "Contents", "Attachments"}]
  Plus NDJSON (one message object per line) of shapes 2 or 3.

Outputs (all relative to the repo root, mirroring the forum layout so agents and the
validator treat Discord evidence exactly like forum posts):

  structured/discord/messages/<channel-slug>[.partN].jsonl   one record per message
  structured/discord/channels.json                            channel index with counts and date ranges
  structured/discord/authors.json                             author index (roles, authority, counts)
  structured/discord/images.jsonl                             every image attachment with message context
  extracted/discord/<channel-slug>/<YYYY-MM>.md               readable monthly transcripts with
                                                              `<!-- url: ... -->` comments under each message

Usage:
  python3 scrape/discord/ingest.py survey  <backup-dir>            # detect formats, count messages, list attachments; writes nothing
  python3 scrape/discord/ingest.py build   <backup-dir> [--staff-roles "Turtle WoW Team,Admin,..."] [--guild-id N]
  python3 scrape/discord/ingest.py build   <backup-dir> --only "class-warrior,raids"   # subset of channel folders/zips
  python3 scrape/discord/ingest.py build   <backup-dir> --work-dir /path/with/space      # where zips get unpacked

Citations: each record carries `url`. When guild, channel and message ids are known it is the
canonical https://discord.com/channels/<guild>/<channel>/<message> link; otherwise the stable
fallback discord://<channel-slug>/<message-id>. `scrape/validate.py` resolves both forms
against the JSONL written here.

Never invents: fields the dump does not carry stay null. No network access.
"""
import argparse
import datetime as dt
import glob
import gzip
import json
import os
import re
import sys
import zipfile
from collections import Counter, defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT_STRUCT = os.path.join(ROOT, "structured", "discord")
OUT_EXTR = os.path.join(ROOT, "extracted", "discord")
PART_BYTES = 40 * 1024 * 1024

# Same era boundaries as structured/forum/timeline.json.
ERA_ANNOUNCED = dt.datetime(2025, 10, 3, tzinfo=dt.timezone.utc)
ERA_RELEASED = dt.datetime(2026, 3, 20, tzinfo=dt.timezone.utc)

DEFAULT_STAFF_ROLES = [
    "turtle wow team", "turtle team", "staff", "admin", "administrator", "developer", "dev",
    "game master", "gm", "moderator", "mod", "community manager", "cm", "lead", "owner",
]
IMAGE_EXT = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".bmp", ".avif"}
VIDEO_EXT = {".mp4", ".webm", ".mov", ".mkv"}
AUDIO_EXT = {".mp3", ".ogg", ".wav", ".m4a"}
URL_RE = re.compile(r"https?://[^\s<>()\[\]\"']+")


def slugify(name):
    s = re.sub(r"[^a-z0-9]+", "-", (name or "").lower()).strip("-")
    return s or "channel"


def era_of(when):
    if when is None:
        return None
    if when < ERA_ANNOUNCED:
        return "pre-1.18.1"
    if when < ERA_RELEASED:
        return "1.18.1-announced-pre-release"
    return "post-1.18.1"


def parse_ts(v):
    if not v:
        return None
    if isinstance(v, (int, float)):
        return dt.datetime.fromtimestamp(v / (1000 if v > 1e11 else 1), tz=dt.timezone.utc)
    s = str(v).strip().replace("Z", "+00:00")
    for fmt in (None, "%Y-%m-%d %H:%M:%S", "%Y-%m-%d %H:%M:%S.%f", "%Y-%m-%dT%H:%M:%S.%f%z"):
        try:
            d = dt.datetime.fromisoformat(s) if fmt is None else dt.datetime.strptime(s, fmt)
            if d.tzinfo is None:
                d = d.replace(tzinfo=dt.timezone.utc)
            return d.astimezone(dt.timezone.utc)
        except Exception:
            continue
    return None


def iso(d):
    return d.strftime("%Y-%m-%dT%H:%M:%SZ") if d else None


def snowflake_time(sf):
    """Discord ids encode their creation time; used only when a dump has no timestamp."""
    try:
        ms = (int(sf) >> 22) + 1420070400000
        return dt.datetime.fromtimestamp(ms / 1000, tz=dt.timezone.utc)
    except Exception:
        return None


def open_text(path):
    if path.endswith(".gz"):
        return gzip.open(path, "rt", encoding="utf-8", errors="replace")
    return open(path, encoding="utf-8", errors="replace")


def load_json_any(path):
    """Return (shape, header, messages). shape in {dce, api, package, unknown}."""
    with open_text(path) as fh:
        head = fh.read(4096)
        fh.seek(0)
        text = fh.read()
    stripped = head.lstrip()
    data = None
    if stripped.startswith("{") or stripped.startswith("["):
        try:
            data = json.loads(text)
        except json.JSONDecodeError:
            data = None
    if data is None:
        # NDJSON
        msgs = []
        for line in text.splitlines():
            line = line.strip()
            if not line:
                continue
            try:
                msgs.append(json.loads(line))
            except json.JSONDecodeError:
                return "unknown", {}, []
        data = msgs
    if isinstance(data, dict):
        if "messages" in data and isinstance(data["messages"], list):
            header = {k: v for k, v in data.items() if k != "messages"}
            return ("dce" if "channel" in data or "guild" in data else "api"), header, data["messages"]
        if "data" in data and isinstance(data["data"], list):
            return "api", {k: v for k, v in data.items() if k != "data"}, data["data"]
        return "unknown", data, []
    if isinstance(data, list):
        if not data:
            return "api", {}, []
        first = data[0] if isinstance(data[0], dict) else {}
        if "Contents" in first or "ID" in first:
            return "package", {}, data
        return "api", {}, data
    return "unknown", {}, []


class AttachmentIndex:
    """Find the local file for an attachment by exact name, by id, or by a name fragment."""

    def __init__(self, folder):
        self.by_name = {}
        self.by_id = defaultdict(list)
        self.all = []
        for dp, _, fns in os.walk(folder):
            for fn in fns:
                if fn.startswith(".") or fn.lower().endswith((".json", ".json.gz", ".ndjson", ".jsonl")):
                    continue
                p = os.path.join(dp, fn)
                self.all.append(p)
                self.by_name.setdefault(fn, p)
                self.by_name.setdefault(fn.lower(), p)
                for sf in re.findall(r"\d{15,22}", fn):
                    self.by_id[sf].append(p)
        self.used = set()

    def find(self, att_id, filename, url):
        cands = []
        if filename and filename in self.by_name:
            cands.append(self.by_name[filename])
        if filename and filename.lower() in self.by_name:
            cands.append(self.by_name[filename.lower()])
        if att_id and str(att_id) in self.by_id:
            cands += self.by_id[str(att_id)]
        if url:
            for sf in re.findall(r"\d{15,22}", url):
                cands += self.by_id.get(sf, [])
            base = url.split("?")[0].rsplit("/", 1)[-1]
            if base in self.by_name:
                cands.append(self.by_name[base])
        if not cands and filename:
            stem = os.path.splitext(filename)[0].lower()
            if len(stem) >= 6:
                for n, p in self.by_name.items():
                    if stem in n.lower():
                        cands.append(p)
                        break
        for c in cands:
            self.used.add(c)
            return c
        return None


def kind_of(filename, content_type):
    ext = os.path.splitext(filename or "")[1].lower()
    ct = (content_type or "").lower()
    if ext in IMAGE_EXT or ct.startswith("image/"):
        return "image"
    if ext in VIDEO_EXT or ct.startswith("video/"):
        return "video"
    if ext in AUDIO_EXT or ct.startswith("audio/"):
        return "audio"
    return "file"


def norm_author(m, shape):
    a = m.get("author") or {}
    if shape == "package":
        return {"name": None, "id": None, "nick": None, "roles": [], "bot": False}
    name = a.get("name") or a.get("username") or a.get("global_name")
    nick = a.get("nickname") or a.get("global_name")
    roles = []
    for r in a.get("roles") or (m.get("member") or {}).get("roles") or []:
        roles.append(r.get("name") if isinstance(r, dict) else str(r))
    return {"name": name, "id": a.get("id"), "nick": nick, "roles": roles, "bot": bool(a.get("isBot") or a.get("bot"))}


def norm_attachments(m, shape, index, backup_root):
    out = []
    raw = m.get("attachments") or m.get("Attachments") or []
    if isinstance(raw, str):
        raw = [{"url": u} for u in raw.split() if u]
    for a in raw:
        if not isinstance(a, dict):
            a = {"url": str(a)}
        filename = a.get("fileName") or a.get("filename") or (a.get("url") or "").split("?")[0].rsplit("/", 1)[-1]
        local = index.find(a.get("id"), filename, a.get("url"))
        out.append({
            "id": a.get("id"),
            "filename": filename or None,
            "url": a.get("url") or a.get("proxy_url"),
            "local_path": os.path.relpath(local, backup_root) if local else None,
            "content_type": a.get("content_type") or a.get("contentType"),
            "size": a.get("fileSizeBytes") or a.get("size"),
            "width": a.get("width"),
            "height": a.get("height"),
            "kind": kind_of(filename, a.get("content_type")),
        })
    return out


def norm_embeds(m):
    out = []
    for e in m.get("embeds") or []:
        if not isinstance(e, dict):
            continue
        out.append({
            "title": e.get("title"),
            "description": e.get("description"),
            "url": e.get("url"),
            "image": ((e.get("image") or {}).get("url")) if isinstance(e.get("image"), dict) else None,
            "fields": [{"name": f.get("name"), "value": f.get("value")} for f in e.get("fields") or [] if isinstance(f, dict)],
        })
    return out


def norm_reactions(m):
    out = []
    for r in m.get("reactions") or []:
        if not isinstance(r, dict):
            continue
        emoji = r.get("emoji")
        name = emoji.get("name") if isinstance(emoji, dict) else emoji
        out.append({"emoji": name, "count": r.get("count")})
    return out


def resolve_mentions(content, m):
    """Replace <@id> with @name where the dump carries the mention list."""
    names = {}
    for u in m.get("mentions") or []:
        if isinstance(u, dict) and u.get("id"):
            names[str(u["id"])] = u.get("name") or u.get("username") or u.get("global_name")
    def rep(mo):
        n = names.get(mo.group(1))
        return "@" + n if n else mo.group(0)
    return re.sub(r"<@!?(\d+)>", rep, content or "")


def normalize(m, shape, ch, index, backup_root, staff_roles):
    if shape == "package":
        mid = str(m.get("ID") or m.get("id") or "")
        when = parse_ts(m.get("Timestamp")) or snowflake_time(mid)
        content = m.get("Contents") or ""
        author = {"name": None, "id": None, "nick": None, "roles": [], "bot": False}
        reply_to = None
        pinned = False
        edited = None
    else:
        mid = str(m.get("id") or "")
        when = parse_ts(m.get("timestamp")) or snowflake_time(mid)
        content = m.get("content") or ""
        author = norm_author(m, shape)
        ref = m.get("reference") or m.get("message_reference") or {}
        reply_to = str(ref.get("messageId") or ref.get("message_id")) if ref and (ref.get("messageId") or ref.get("message_id")) else None
        pinned = bool(m.get("isPinned") or m.get("pinned"))
        edited = iso(parse_ts(m.get("timestampEdited") or m.get("edited_timestamp")))
    roles_l = [r.lower() for r in author["roles"] if r]
    is_staff = any(any(sr == r or sr in r for sr in staff_roles) for r in roles_l)
    authority = "bot" if author["bot"] else ("staff" if is_staff else "player")
    guild_id = ch.get("guild_id")
    chan_id = ch.get("id")
    if guild_id and chan_id and mid:
        url = "https://discord.com/channels/%s/%s/%s" % (guild_id, chan_id, mid)
    else:
        url = "discord://%s/%s" % (ch["slug"], mid or "unknown")
    content_clean = resolve_mentions(content, m)
    return {
        "message_id": mid,
        "url": url,
        "guild_id": guild_id,
        "channel_id": chan_id,
        "channel": ch["name"],
        "channel_slug": ch["slug"],
        "category": ch.get("category"),
        "author": author["name"],
        "author_id": author["id"],
        "author_nick": author["nick"],
        "author_roles": author["roles"],
        "authority": authority,
        "date": iso(when),
        "era": era_of(when),
        "type": m.get("type"),
        "content": content,
        "content_clean": content_clean,
        "links": URL_RE.findall(content or ""),
        "attachments": norm_attachments(m, shape, index, backup_root),
        "embeds": norm_embeds(m),
        "reply_to": reply_to,
        "pinned": pinned,
        "edited": edited,
        "reactions": norm_reactions(m),
        "reactions_total": sum((r.get("count") or 0) for r in norm_reactions(m)),
        "mentions": [(u.get("name") or u.get("username")) for u in m.get("mentions") or [] if isinstance(u, dict)],
        "thread": (m.get("thread") or {}).get("name") if isinstance(m.get("thread"), dict) else None,
    }


def channel_meta(folder, header, shape, guild_id_arg):
    ch = header.get("channel") or {}
    g = header.get("guild") or {}
    name = ch.get("name") or os.path.basename(folder.rstrip("/"))
    return {
        "name": name,
        "slug": slugify(name),
        "id": ch.get("id") or header.get("channel_id"),
        "category": ch.get("category") or ch.get("categoryName"),
        "topic": ch.get("topic"),
        "guild_id": g.get("id") or guild_id_arg,
        "guild_name": g.get("name"),
        "folder": folder,
    }


def iter_channel_files(folder):
    files = []
    for dp, _, fns in os.walk(folder):
        for fn in fns:
            if fn.lower().endswith((".json", ".json.gz", ".ndjson", ".jsonl")):
                files.append(os.path.join(dp, fn))
    return sorted(files)


def channel_folders(backup, work_dir):
    """Yield one folder per channel; .zip archives are unpacked into work_dir first (idempotent)."""
    work_dir = work_dir or os.path.join(backup, "_unzipped")
    out = []
    for entry in sorted(os.listdir(backup)):
        p = os.path.join(backup, entry)
        if os.path.isdir(p):
            if os.path.abspath(p) != os.path.abspath(work_dir):
                out.append(p)
            continue
        if entry.lower().endswith(".zip"):
            dest = os.path.join(work_dir, os.path.splitext(entry)[0])
            marker = os.path.join(dest, ".unpacked")
            if not os.path.exists(marker):
                os.makedirs(dest, exist_ok=True)
                try:
                    with zipfile.ZipFile(p) as z:
                        z.extractall(dest)
                    open(marker, "w").write(iso(dt.datetime.now(dt.timezone.utc)) or "")
                except zipfile.BadZipFile as e:
                    print("BAD ZIP", entry, e, file=sys.stderr)
                    continue
            out.append(dest)
    return out


def survey(backup, work_dir=None):
    total = 0
    rows = []
    for folder in channel_folders(backup, work_dir):
        files = iter_channel_files(folder)
        idx = AttachmentIndex(folder)
        n = 0
        shapes = Counter()
        first = last = None
        for f in files:
            shape, header, msgs = load_json_any(f)
            shapes[shape] += 1
            n += len(msgs)
            for m in msgs[:1] + msgs[-1:]:
                t = parse_ts(m.get("timestamp") or m.get("Timestamp")) or snowflake_time(m.get("id") or m.get("ID"))
                if t:
                    first = t if first is None or t < first else first
                    last = t if last is None or t > last else last
        total += n
        rows.append((os.path.basename(folder), n, dict(shapes), len(idx.all), iso(first), iso(last)))
    w = max((len(r[0]) for r in rows), default=10)
    print("%-*s %9s %8s  %s  %s" % (w, "channel", "messages", "files", "shapes", "date range"))
    for name, n, shapes, nfiles, a, b in rows:
        print("%-*s %9d %8d  %s  %s .. %s" % (w, name, n, nfiles, shapes, a, b))
    print("channels=%d messages=%d attachments=%d" % (len(rows), total, sum(r[3] for r in rows)))


class PartWriter:
    def __init__(self, base):
        self.base = base
        self.part = 0
        self.fh = None
        self.size = 0
        self.paths = []

    def _open(self):
        if self.fh:
            self.fh.close()
        self.part += 1
        p = self.base + (".jsonl" if self.part == 1 else ".part%d.jsonl" % self.part)
        if self.part == 2:
            # rename part 1 so parts are symmetric with the forum layout
            first = self.base + ".jsonl"
            os.replace(first, self.base + ".part1.jsonl")
            self.paths[0] = self.base + ".part1.jsonl"
        self.fh = open(p, "w", encoding="utf-8")
        self.paths.append(p)
        self.size = 0

    def write(self, rec):
        line = json.dumps(rec, ensure_ascii=False) + "\n"
        if self.fh is None or self.size + len(line.encode("utf-8")) > PART_BYTES:
            self._open()
        self.fh.write(line)
        self.size += len(line.encode("utf-8"))

    def close(self):
        if self.fh:
            self.fh.close()


def md_escape(s):
    return (s or "").replace("\r", "")


def build(backup, staff_roles, guild_id, only, work_dir=None):
    os.makedirs(os.path.join(OUT_STRUCT, "messages"), exist_ok=True)
    os.makedirs(OUT_EXTR, exist_ok=True)
    channels = []
    authors = {}
    images = open(os.path.join(OUT_STRUCT, "images.jsonl"), "w", encoding="utf-8")
    for folder in channel_folders(backup, work_dir):
        base = os.path.basename(folder)
        if only and base not in only and slugify(base) not in only:
            continue
        files = iter_channel_files(folder)
        if not files:
            continue
        idx = AttachmentIndex(folder)
        ch = None
        records = []
        for f in files:
            shape, header, msgs = load_json_any(f)
            if ch is None:
                ch = channel_meta(folder, header, shape, guild_id)
            elif not ch.get("id") and (header.get("channel") or {}).get("id"):
                ch.update({k: v for k, v in channel_meta(folder, header, shape, guild_id).items() if v})
            for m in msgs:
                if not isinstance(m, dict):
                    continue
                records.append(normalize(m, shape, ch, idx, backup, staff_roles))
        seen = set()
        uniq = []
        for r in records:
            key = r["message_id"] or (r["date"], r["author"], r["content"][:40])
            if key in seen:
                continue
            seen.add(key)
            uniq.append(r)
        uniq.sort(key=lambda r: (r["date"] or "", r["message_id"]))
        by_id = {r["message_id"]: r for r in uniq if r["message_id"]}
        for r in uniq:
            if r["reply_to"] and r["reply_to"] in by_id:
                r["reply_to_author"] = by_id[r["reply_to"]]["author"]
                r["reply_to_excerpt"] = (by_id[r["reply_to"]]["content_clean"] or "")[:160]
            else:
                r["reply_to_author"] = None
                r["reply_to_excerpt"] = None
        writer = PartWriter(os.path.join(OUT_STRUCT, "messages", ch["slug"]))
        months = defaultdict(list)
        n_img = 0
        for r in uniq:
            writer.write(r)
            a = authors.setdefault(r["author"] or "(unknown)", {
                "author_id": r["author_id"], "roles": set(), "authority": r["authority"], "messages": 0,
                "first_seen": r["date"], "last_seen": r["date"], "channels": Counter(),
            })
            a["messages"] += 1
            a["roles"].update(r["author_roles"])
            if r["authority"] == "staff":
                a["authority"] = "staff"
            if r["date"] and (a["first_seen"] is None or r["date"] < a["first_seen"]):
                a["first_seen"] = r["date"]
            if r["date"] and (a["last_seen"] is None or r["date"] > a["last_seen"]):
                a["last_seen"] = r["date"]
            a["channels"][ch["slug"]] += 1
            for att in r["attachments"]:
                if att["kind"] == "image":
                    n_img += 1
                    images.write(json.dumps({
                        "url": r["url"], "message_id": r["message_id"], "channel_slug": ch["slug"], "channel": ch["name"],
                        "author": r["author"], "authority": r["authority"], "date": r["date"], "era": r["era"],
                        "filename": att["filename"], "local_path": att["local_path"], "width": att["width"], "height": att["height"],
                        "size": att["size"], "context": (r["content_clean"] or "")[:300],
                        "reply_to_excerpt": r["reply_to_excerpt"], "reactions_total": r["reactions_total"],
                    }, ensure_ascii=False) + "\n")
            months[(r["date"] or "0000-00")[:7]].append(r)
        writer.close()
        cdir = os.path.join(OUT_EXTR, ch["slug"])
        os.makedirs(cdir, exist_ok=True)
        for ym, rs in months.items():
            with open(os.path.join(cdir, ym + ".md"), "w", encoding="utf-8") as fh:
                fh.write("# #%s — %s\n\n" % (ch["name"], ym))
                if ch.get("topic"):
                    fh.write("Channel topic: %s\n\n" % ch["topic"])
                fh.write("Guild %s · channel id %s · %d messages this month. Cite the `<!-- url: ... -->` under each message.\n\n" % (ch.get("guild_id"), ch.get("id"), len(rs)))
                for r in rs:
                    who = r["author"] or "(unknown)"
                    tag = " (staff)" if r["authority"] == "staff" else (" (bot)" if r["authority"] == "bot" else "")
                    fh.write("### %s · %s%s\n<!-- url: %s -->\n" % (r["date"], who, tag, r["url"]))
                    if r["reply_to_author"]:
                        fh.write("> replying to %s: %s\n\n" % (r["reply_to_author"], md_escape(r["reply_to_excerpt"])))
                    if r["content_clean"]:
                        fh.write(md_escape(r["content_clean"]) + "\n")
                    for att in r["attachments"]:
                        fh.write("- attachment [%s] %s%s\n" % (att["kind"], att["filename"], (" -> " + att["local_path"]) if att["local_path"] else " (file not in backup)"))
                    for e in r["embeds"]:
                        if e.get("title") or e.get("description"):
                            fh.write("- embed: %s %s\n" % (e.get("title") or "", (e.get("description") or "")[:300].replace("\n", " ")))
                    if r["reactions_total"]:
                        fh.write("- reactions: %s\n" % ", ".join("%s×%s" % (x["emoji"], x["count"]) for x in r["reactions"]))
                    fh.write("\n")
        dates = [r["date"] for r in uniq if r["date"]]
        channels.append({
            "name": ch["name"], "slug": ch["slug"], "id": ch.get("id"), "category": ch.get("category"), "topic": ch.get("topic"),
            "guild_id": ch.get("guild_id"), "folder": os.path.relpath(folder, backup) if os.path.abspath(folder).startswith(os.path.abspath(backup)) else folder,
            "messages": len(uniq), "staff_messages": sum(1 for r in uniq if r["authority"] == "staff"),
            "authors": len({r["author"] for r in uniq}), "attachments": sum(len(r["attachments"]) for r in uniq),
            "images": n_img, "first": min(dates) if dates else None, "last": max(dates) if dates else None,
            "files": [os.path.relpath(p, ROOT) for p in writer.paths],
            "unmatched_files_in_folder": len([p for p in idx.all if p not in idx.used]),
        })
        print("%-40s %7d msgs %5d img  %s .. %s" % (ch["slug"], len(uniq), n_img, channels[-1]["first"], channels[-1]["last"]), flush=True)
    images.close()
    json.dump({"generated": iso(dt.datetime.now(dt.timezone.utc)), "staff_roles": staff_roles, "channels": channels},
              open(os.path.join(OUT_STRUCT, "channels.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    json.dump({k: {**v, "roles": sorted(v["roles"]), "channels": dict(v["channels"].most_common())} for k, v in sorted(authors.items())},
              open(os.path.join(OUT_STRUCT, "authors.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    print("channels=%d messages=%d authors=%d" % (len(channels), sum(c["messages"] for c in channels), len(authors)))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("mode", choices=["survey", "build"])
    ap.add_argument("backup", help="root folder of the Discord backup (one folder per channel)")
    ap.add_argument("--staff-roles", default=",".join(DEFAULT_STAFF_ROLES), help="comma-separated role names (case-insensitive substring match) that mark staff")
    ap.add_argument("--guild-id", default=None, help="guild id to use when dumps do not carry one (needed for canonical discord.com links)")
    ap.add_argument("--only", default=None, help="comma-separated channel folder names or slugs to process")
    ap.add_argument("--work-dir", default=None, help="where .zip channels are unpacked (default <backup>/_unzipped)")
    a = ap.parse_args()
    staff = [s.strip().lower() for s in a.staff_roles.split(",") if s.strip()]
    only = {s.strip() for s in a.only.split(",")} if a.only else None
    if a.mode == "survey":
        survey(a.backup, a.work_dir)
    else:
        build(a.backup, staff, a.guild_id, only, a.work_dir)


if __name__ == "__main__":
    main()
