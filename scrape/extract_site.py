#!/usr/bin/env python3
"""Extract Markdown from raw main-site pages (raw/site/*.html.gz) into extracted/site/*.md."""
import gzip
import json
import os
import re
import sys

from bs4 import BeautifulSoup

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from extract import MD, tidy, ROOT, MANIFEST  # noqa: E402

OUT = os.path.join(ROOT, "extracted", "site")


def main():
    man = {}
    for line in open(MANIFEST):
        if line.strip():
            r = json.loads(line)
            if r.get("kind") == "site":
                man[r["url"]] = r
    os.makedirs(OUT, exist_ok=True)
    n = 0
    for url, r in sorted(man.items()):
        path = os.path.join(ROOT, r["path"] or "")
        if r["status"] != "done" or not os.path.exists(path):
            continue
        html = gzip.open(path).read().decode("utf-8", "replace")
        soup = BeautifulSoup(html, "lxml")
        for t in soup(["script", "style", "noscript", "svg", "iframe"]):
            t.decompose()
        title = soup.title.get_text(strip=True) if soup.title else url
        desc = soup.find("meta", attrs={"name": "description"})
        main = soup.find(id="pages") or soup.find("main")
        if main is None:
            main = soup.body
            for sel in ("#main-header", "#footer", "nav", "header", "footer"):
                for t in main.select(sel):
                    t.decompose()
        # turn headings into markdown headings before conversion
        conv = MD()
        parts = []
        for el in main.find_all(["h1", "h2", "h3", "h4"]):
            level = int(el.name[1])
            el.replace_with(soup.new_string("\n" + "#" * min(level + 1, 6) + " " + el.get_text(" ", strip=True) + "\n"))
        md = tidy(conv.convert(main))
        md = re.sub(r"\n{3,}", "\n\n", md)
        slug = os.path.basename(r["path"]).replace(".html.gz", "")
        fm = ["---", 'title: %s' % json.dumps(title, ensure_ascii=False), 'url: "%s"' % url,
              'fetched: "%s"' % r["ts"], 'source_type: "official website page"',
              'description: %s' % json.dumps(desc.get("content", "") if desc else "", ensure_ascii=False), "---", ""]
        with open(os.path.join(OUT, slug + ".md"), "w") as fh:
            fh.write("\n".join(fm) + "# " + title + "\n\n" + md + "\n")
        n += 1
    print("extracted %d site pages" % n)


if __name__ == "__main__":
    main()
