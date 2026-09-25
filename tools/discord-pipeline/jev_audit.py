#!/usr/bin/env python3
"""Audit Discord citations in guide pages with TypeSafe Jev (System One). Report only; edits nothing.

For every [[d:<channel>#<id>]] in the given Markdown files:
  1. claim  = the sentence (or table cell / bullet) the citation is attached to
  2. one Jev request, two parallel questions over the same state:
       relation   Choice: supports | contradicts | says_nothing   (docs: citation-check cookbook)
       unserious  Noul:   is the message a joke / sarcasm / speculation, or retracted by its author
                          in the following messages?
  3. if relation != supports (or low confidence): a second request selects the best supporting
     message among the cited message's neighbours (select-instead-of-generate), or "none".

usage: jev_audit.py [--sample N] [--seed S] [--workers W] [--out report.jsonl] <md files or dirs>
Needs TYPESAFE_API_KEY (or ~/keys/typesafe.txt) and the raw export norm/<channel>/messages.jsonl.
"""
import argparse, glob, json, os, random, re, sys, time, urllib.error, urllib.request
from concurrent.futures import ThreadPoolExecutor

BASE = "/home/agent/work/turtle-discord"
API = os.environ.get("TYPESAFE_BASE_URL", "https://api.typesafe.ai") + "/v1/systemone"
MODEL = os.environ.get("TYPESAFE_MODEL", "jev-latest")
CITE = re.compile(r"\[\[d:([a-z-]+)#(\d+)\]\]")
NEIGHBOURS = 8


def api_key():
    k = os.environ.get("TYPESAFE_API_KEY")
    if not k and os.path.exists(os.path.expanduser("~/keys/typesafe.txt")):
        k = open(os.path.expanduser("~/keys/typesafe.txt")).read().strip()
    if not k:
        sys.exit("no TYPESAFE_API_KEY")
    return k


KEY = None


def call(state, questions, tries=5):
    body = json.dumps({"state": state, "model": MODEL, "questions": questions}).encode()
    for i in range(tries):
        req = urllib.request.Request(API, data=body, method="POST", headers={
            "Authorization": f"Bearer {KEY}", "Content-Type": "application/json"})
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return json.load(r)
        except urllib.error.HTTPError as e:
            if e.code in (429, 529, 500, 502, 503) and i < tries - 1:
                time.sleep(2 ** i)
                continue
            raise RuntimeError(f"HTTP {e.code}: {e.read()[:300]!r}")
        except urllib.error.URLError:
            if i < tries - 1:
                time.sleep(2 ** i)
                continue
            raise


# ---------- claims ----------
def claims_from(path):
    """Yield (claim_text, channel, id) — the text between the previous boundary and the citation."""
    text = open(path, encoding="utf-8").read()
    heading = ""
    for block in re.split(r"\n\s*\n", text):
        for line in block.split("\n"):
            hm = re.match(r"^#{2,4}\s+(.*)", line)
            if hm:
                heading = CITE.sub("", hm.group(1)).strip()
            if "[[d:" not in line:
                continue
            cells = line.split("|") if line.lstrip().startswith("|") else [line]
            row_label = cells[1].strip() if len(cells) > 2 else ""
            for cell in cells:
                last = 0
                for m in CITE.finditer(cell):
                    seg = cell[last:m.start()]
                    # claim = last sentence before the citation(s), stripped of other cites/markup
                    seg = CITE.sub("", seg)
                    sents = re.split(r"(?<=[.!?])\s+(?=[A-Z*\[(])", seg.strip())
                    claim = next((s for s in reversed(sents) if len(s.strip(" ,;:–—-")) > 12), seg).strip(" ,;:")
                    claim = re.sub(r"\s+", " ", claim)
                    if row_label and row_label not in claim and len(cells) > 2:
                        claim = f"{row_label}: {claim}"
                    if len(claim) > 8:
                        yield claim[:900], m.group(1), m.group(2), heading
                    if not CITE.match(cell, m.end()) and not cell[m.end():m.end() + 3].startswith(", [["):
                        last = m.end()


# ---------- archive ----------
_CH = {}


def channel(ch):
    if ch not in _CH:
        msgs, idx = [], {}
        for l in open(f"{BASE}/norm/{ch}/messages.jsonl", encoding="utf-8"):
            m = json.loads(l)
            if m.get("is_bot"):
                continue
            idx[m["id"]] = len(msgs)
            msgs.append({"id": m["id"], "author": m["author"], "date": m["ts"][:10],
                         "text": (m.get("content") or "")[:4000], "reply_to": m.get("reply_to")})
        _CH[ch] = (msgs, idx)
    return _CH[ch]


def context(ch, mid):
    msgs, idx = channel(ch)
    i = idx.get(mid)
    if i is None:
        return None, [], []
    cited = msgs[i]
    after = [m for m in msgs[i + 1:i + 12] if m["author"] == cited["author"]][:3]
    around = msgs[max(0, i - NEIGHBOURS):i + NEIGHBOURS + 1]
    parent = msgs[idx[cited["reply_to"]]] if cited.get("reply_to") in idx else None
    return cited, after, around, parent


# ---------- questions ----------
Q1 = {
    "relation": {
        "type": "choice",
        "instructions": ("A guide sentence (`claim`, found under the heading `guide_section`) cites a Discord "
                         "message (`message.text`) from a World of Warcraft (Turtle WoW) community as its source. "
                         "Judge how the message relates to the claim. If the message is a short answer, read it "
                         "together with `replying_to`. A claim under a heading such as 'Common mistakes' describes "
                         "something to avoid. Game slang and abbreviations are normal."),
        "criteria": {
            "supports": "The message states or clearly implies what the claim attributes to it.",
            "contradicts": "The message states the opposite of the claim.",
            "says_nothing": "The message does not address the claim (e.g. it is a question, an unrelated remark, "
                            "or about a different point).",
        },
    },
    "unserious": {
        "type": "noul",
        "instructions": ("Is `message.text` not a sincere factual statement — i.e. a joke, sarcasm, meme, obvious "
                         "exaggeration, pure speculation, or something its author retracts or corrects in "
                         "`author_next_messages` (e.g. 'jk', 'nvm', 'actually…')?"),
        "criteria": {"true": "Joke, sarcasm, speculation, or retracted/corrected by the author.",
                     "false": "A sincere statement the author stands by."},
    },
}


def select_question(cands):
    crit = {c["id"]: f"{c['author']} ({c['date']}): {c['text'][:300]}" for c in cands}
    crit["none"] = "None of these messages supports the claim."
    return {"best": {"type": "choice",
                     "instructions": ("Which Discord message best supports the guide sentence in `claim`? Pick the "
                                      "message that states it, not a question asking about it."),
                     "criteria": crit}}


def audit(item):
    claim, ch, mid, src, heading = item
    cited, after, around, parent = context(ch, mid)
    rec = {"file": src, "channel": ch, "id": mid, "claim": claim, "section": heading}
    if not cited:
        rec["error"] = "id not in archive"
        return rec
    state = {"guide_section": heading, "claim": claim,
             "message": {"author": cited["author"], "date": cited["date"], "text": cited["text"]},
             "replying_to": ({"author": parent["author"], "text": parent["text"][:1000]} if parent else None),
             "author_next_messages": [m["text"][:600] for m in after]}
    r = call(state, Q1)
    a = r["answers"]
    rec.update(relation=a["relation"]["choice"], relation_conf=round(a["relation"]["confidence"], 3),
               relation_probs={k: round(v, 3) for k, v in a["relation"]["probabilities"].items()},
               unserious=round(a["unserious"]["noul"], 3), usage=r.get("usage"))
    if rec["relation"] != "supports" or rec["relation_conf"] < 0.8:
        cands = [m for m in around if len(m["text"]) > 3]
        r2 = call({"guide_section": heading, "claim": claim}, select_question(cands))
        b = r2["answers"]["best"]
        rec.update(suggest=b["choice"], suggest_conf=round(b["confidence"], 3),
                   suggest_text=next((c["text"][:300] for c in cands if c["id"] == b["choice"]), None))
    return rec


def main():
    global KEY
    ap = argparse.ArgumentParser()
    ap.add_argument("paths", nargs="+")
    ap.add_argument("--sample", type=int, default=0)
    ap.add_argument("--seed", type=int, default=7)
    ap.add_argument("--workers", type=int, default=8)
    ap.add_argument("--out", default="jev_audit.jsonl")
    a = ap.parse_args()
    KEY = api_key()
    files = []
    for p in a.paths:
        files += sorted(glob.glob(os.path.join(p, "**/*.md"), recursive=True)) if os.path.isdir(p) else [p]
    items = [(c, ch, i, os.path.relpath(f), h) for f in files for c, ch, i, h in claims_from(f)]
    if a.sample:
        random.Random(a.seed).shuffle(items)
        items = items[:a.sample]
    print(f"{len(items)} claim/citation pairs", file=sys.stderr)
    out, t0 = [], time.time()
    with ThreadPoolExecutor(a.workers) as ex:
        for rec in ex.map(lambda it: _safe(it), items):
            out.append(rec)
    with open(a.out, "w") as f:
        for r in out:
            f.write(json.dumps(r, ensure_ascii=False) + "\n")
    ok = [r for r in out if "relation" in r]
    tok = sum((r.get("usage") or {}).get("input_tokens", 0) for r in ok)
    from collections import Counter
    print(json.dumps({"pairs": len(out), "errors": len(out) - len(ok),
                      "relation": Counter(r["relation"] for r in ok),
                      "low_conf_supports": sum(1 for r in ok if r["relation"] == "supports" and r["relation_conf"] < 0.8),
                      "unserious_over_0.5": sum(1 for r in ok if r["unserious"] > 0.5),
                      "input_tokens_first_pass": tok, "seconds": round(time.time() - t0, 1)}, default=dict), file=sys.stderr)


def _safe(it):
    try:
        return audit(it)
    except Exception as e:  # keep going; report the failure
        return {"file": it[3], "channel": it[1], "id": it[2], "claim": it[0], "section": it[4], "error": str(e)[:300]}


if __name__ == "__main__":
    main()
