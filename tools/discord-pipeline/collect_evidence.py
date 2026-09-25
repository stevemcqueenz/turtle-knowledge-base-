#!/usr/bin/env python3
"""Collect verbatim evidence for [[d:<channel>#<message_id>]] Discord citations.

Usage:
  python3 pipeline/collect_evidence.py [paths...]
  python3 pipeline/collect_evidence.py --self-test

Scans paths (default: kb/ and staging/ next to this repo) for Discord citations,
resolves each <message_id> in norm/<channel>/messages.jsonl and writes/updates
kb/structured/discord/evidence-<channel>.jsonl (normalized record + "channel").
Idempotent: deduplicated and sorted by message id. Exit 1 if a citation cannot
be resolved.
"""
import argparse
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)  # /home/agent/work/turtle-discord
NORM_ROOT = os.path.join(ROOT, "norm")
EVIDENCE_DIR = os.path.join(ROOT, "kb", "structured", "discord")
DEFAULT_SCAN = [os.path.join(ROOT, "kb"), os.path.join(ROOT, "staging")]

CITE = re.compile(r"\[\[d:([A-Za-z0-9_.-]+)#(\d+)\]\]")
# Evidence schema (WORKER-BRIEF): one JSON object per line.
EVIDENCE_FIELDS = ("id", "channel", "ts", "author", "author_id", "content",
                   "attachments", "reactions", "pinned")


def iter_files(paths):
    for p in paths:
        if os.path.isdir(p):
            for dp, dns, fns in os.walk(p):
                dns[:] = [d for d in dns if d != ".git"]
                for fn in fns:
                    yield os.path.join(dp, fn)
        elif os.path.isfile(p):
            yield p


def find_citations(paths):
    """Return {(channel, message_id)} cited in any file under paths."""
    found = set()
    ev = os.path.abspath(EVIDENCE_DIR) + os.sep
    for f in iter_files(paths):
        if os.path.abspath(f).startswith(ev):
            continue  # never mine our own evidence output
        try:
            text = open(f, encoding="utf-8", errors="ignore").read()
        except OSError:
            continue
        for m in CITE.finditer(text):
            found.add((m.group(1), m.group(2)))
    return found


def load_messages(norm_root, channel):
    """id(str) -> normalized record for one channel (empty if absent)."""
    out = {}
    path = os.path.join(norm_root, channel, "messages.jsonl")
    if os.path.exists(path):
        with open(path, encoding="utf-8") as fh:
            for line in fh:
                if not line.strip():
                    continue
                try:
                    r = json.loads(line)
                except ValueError:
                    continue
                out[str(r.get("id"))] = r
    return out


def make_record(channel, msg):
    return {
        "id": str(msg.get("id")),
        "channel": channel,
        "ts": msg.get("ts"),
        "author": msg.get("author"),
        "author_id": msg.get("author_id"),
        "content": msg.get("content"),
        "attachments": msg.get("attachments") or [],
        "reactions": msg.get("reactions", 0),
        "pinned": msg.get("pinned", False),
    }


def _sort_key(mid):
    return int(mid) if mid.isdigit() else 0


def collect(paths, norm_root=NORM_ROOT, out_dir=EVIDENCE_DIR):
    cites = find_citations(paths)
    resolved, unresolved = {}, []
    cache = {}
    for channel, mid in sorted(cites):
        if channel not in cache:
            cache[channel] = load_messages(norm_root, channel)
        msg = cache[channel].get(mid)
        if msg is None:
            unresolved.append((channel, mid))
        else:
            resolved.setdefault(channel, {})[mid] = make_record(channel, msg)

    written = []
    os.makedirs(out_dir, exist_ok=True)
    for channel, new in sorted(resolved.items()):
        path = os.path.join(out_dir, "evidence-%s.jsonl" % channel)
        merged = {}
        if os.path.exists(path):
            with open(path, encoding="utf-8") as fh:
                for line in fh:
                    if line.strip():
                        r = json.loads(line)
                        merged[str(r["id"])] = r
        merged.update(new)
        ordered = [merged[k] for k in sorted(merged, key=_sort_key)]
        with open(path, "w", encoding="utf-8") as fh:
            for r in ordered:
                fh.write(json.dumps(r, ensure_ascii=False) + "\n")
        written.append((path, len(ordered), len(new)))
    return cites, resolved, unresolved, written


def self_test():
    import tempfile

    with tempfile.TemporaryDirectory() as td:
        norm = os.path.join(td, "norm")
        out = os.path.join(td, "out")
        scan = os.path.join(td, "scan")
        os.makedirs(os.path.join(norm, "synthtest"))
        os.makedirs(scan)
        msg = {"id": "123456789", "ts": "2025-01-01T00:00:00+00:00", "author": "tester",
               "author_id": "1", "is_bot": False, "content": "synthetic",
               "attachments": [], "embeds": [], "reactions": 3, "reply_to": None,
               "pinned": True}
        with open(os.path.join(norm, "synthtest", "messages.jsonl"), "w", encoding="utf-8") as fh:
            fh.write(json.dumps(msg) + "\n")
        with open(os.path.join(scan, "doc.md"), "w", encoding="utf-8") as fh:
            fh.write("claim [[d:synthtest#123456789]]\n")

        cites, resolved, unresolved, written = collect([scan], norm, out)
        assert cites == {("synthtest", "123456789")}, cites
        assert not unresolved, unresolved
        assert written and written[0][1] == 1, written
        ev = os.path.join(out, "evidence-synthtest.jsonl")
        recs = [json.loads(l) for l in open(ev, encoding="utf-8") if l.strip()]
        assert len(recs) == 1 and recs[0]["id"] == "123456789", recs
        assert recs[0]["channel"] == "synthtest" and recs[0]["pinned"] is True, recs[0]

        collect([scan], norm, out)  # idempotent
        recs = [json.loads(l) for l in open(ev, encoding="utf-8") if l.strip()]
        assert len(recs) == 1, recs

        with open(os.path.join(scan, "doc.md"), "w", encoding="utf-8") as fh:
            fh.write("bad [[d:synthtest#999]] and [[d:nosuch#1]]\n")
        _, _, unresolved, _ = collect([scan], norm, out)
        assert sorted(unresolved) == [("nosuch", "1"), ("synthtest", "999")], unresolved

    print("self-test OK: resolved, appended verbatim, idempotent, unresolved detected")
    return 0


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("paths", nargs="*", help="files/dirs to scan (default: kb/ staging/)")
    ap.add_argument("--self-test", action="store_true", help="run synthetic resolution check")
    args = ap.parse_args(argv)
    if args.self_test:
        return self_test()

    paths = args.paths or DEFAULT_SCAN
    cites, resolved, unresolved, written = collect(paths)
    for path, total, new in written:
        print("wrote %s (%d records, %d new)" % (os.path.relpath(path, ROOT), total, new))
    for channel, mid in unresolved:
        print("UNRESOLVED [[d:%s#%s]]" % (channel, mid), file=sys.stderr)
    print("cited=%d resolved=%d unresolved=%d evidence_files=%d" % (
        len(cites), sum(len(v) for v in resolved.values()), len(unresolved), len(written)))
    return 1 if unresolved else 0


if __name__ == "__main__":
    sys.exit(main())
