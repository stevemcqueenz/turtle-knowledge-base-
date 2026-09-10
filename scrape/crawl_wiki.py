#!/usr/bin/env python3
"""Archive turtle-wow.fandom.com through its public MediaWiki API (HTML pages sit behind a
Cloudflare challenge, which we do not bypass; the API is the documented machine interface).

Writes raw/wiki/allpages-ns<ns>.json           page list per namespace
       raw/wiki/pages/<pageid>.json            latest revision wikitext + categories + timestamp
       raw/wiki/batches/<ns>-<n>.json          raw API batch responses
Rate: one request per second. Resumable (skips pages already on disk).
"""
import json
import os
import sys
import time

import requests

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "raw", "wiki")
API = "https://turtle-wow.fandom.com/api.php"
UA = "TurtleKB-archiver/1.0 (+one-time archive of Turtle WoW reference material; contact: claude@stanislavkulik.de)"
NAMESPACES = [0, 4, 14, 10]  # articles, project pages, categories, templates (for infobox parsing)


def get(sess, params, tries=6):
    params = dict(params, format="json", formatversion="2")
    for i in range(tries):
        try:
            r = sess.get(API, params=params, timeout=(20, 90))
            if r.status_code == 200 and r.headers.get("content-type", "").startswith("application/json"):
                return r.json()
            print("HTTP", r.status_code, r.text[:120], flush=True)
        except Exception as e:
            print("error", e, flush=True)
        time.sleep(min(300, 5 * 2 ** i))
    raise SystemExit("giving up")


def main():
    os.makedirs(os.path.join(OUT, "pages"), exist_ok=True)
    os.makedirs(os.path.join(OUT, "batches"), exist_ok=True)
    sess = requests.Session()
    sess.headers["User-Agent"] = UA
    info = get(sess, {"action": "query", "meta": "siteinfo", "siprop": "statistics|general|namespaces"})
    json.dump(info, open(os.path.join(OUT, "siteinfo.json"), "w"), indent=1)
    time.sleep(1)
    for ns in NAMESPACES:
        lst_path = os.path.join(OUT, "allpages-ns%d.json" % ns)
        if os.path.exists(lst_path):
            pages = json.load(open(lst_path))
        else:
            pages, cont = [], {}
            while True:
                q = {"action": "query", "list": "allpages", "apnamespace": ns, "aplimit": "500", "apfilterredir": "nonredirects"}
                q.update(cont)
                d = get(sess, q)
                pages += d["query"]["allpages"]
                print("ns %d: %d pages listed" % (ns, len(pages)), flush=True)
                if "continue" not in d:
                    break
                cont = d["continue"]
                time.sleep(1)
            json.dump(pages, open(lst_path, "w"), indent=1)
        todo = [p for p in pages if not os.path.exists(os.path.join(OUT, "pages", "%d.json" % p["pageid"]))]
        print("ns %d: %d pages, %d to fetch" % (ns, len(pages), len(todo)), flush=True)
        for i in range(0, len(todo), 50):
            batch = todo[i:i + 50]
            d = get(sess, {"action": "query", "prop": "revisions|categories|info", "rvprop": "content|timestamp|ids|user",
                           "rvslots": "main", "cllimit": "max", "inprop": "url",
                           "pageids": "|".join(str(p["pageid"]) for p in batch)})
            json.dump(d, open(os.path.join(OUT, "batches", "%d-%05d.json" % (ns, i)), "w"))
            for p in d["query"]["pages"]:
                rev = (p.get("revisions") or [{}])[0]
                rec = {"pageid": p["pageid"], "ns": p["ns"], "title": p["title"], "url": p.get("fullurl"),
                       "revid": rev.get("revid"), "timestamp": rev.get("timestamp"), "user": rev.get("user"),
                       "categories": [c["title"] for c in p.get("categories", [])],
                       "wikitext": (rev.get("slots", {}).get("main", {}) or {}).get("content", ""),
                       "fetched": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())}
                json.dump(rec, open(os.path.join(OUT, "pages", "%d.json" % p["pageid"]), "w"), ensure_ascii=False)
            print("ns %d: fetched %d/%d" % (ns, min(i + 50, len(todo)), len(todo)), flush=True)
            time.sleep(1.0)
    print("wiki done", flush=True)


if __name__ == "__main__":
    main()
