#!/usr/bin/env python3
"""Consistent pseudonyms for the behavior corpus.

alias(username) -> a stable alias like "Player-0413" (staff keep a "Staff-NN" alias so authority stays visible).
The mapping lives in behavior/_aliases.json (git-ignored). Usage as a library or:
  python3 scrape/pseudonymize.py < text_with_usernames.txt > text_with_aliases.txt   (replaces known usernames)
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MAP = os.path.join(ROOT, "behavior", "_aliases.json")
AUTHORS = os.path.join(ROOT, "structured", "forum", "authors.json")


class Aliaser:
    def __init__(self):
        self.map = json.load(open(MAP)) if os.path.exists(MAP) else {}
        self.authors = json.load(open(AUTHORS)) if os.path.exists(AUTHORS) else {}
        self.n_staff = sum(1 for v in self.map.values() if v.startswith("Staff-"))
        self.n_player = len(self.map) - self.n_staff

    def alias(self, name):
        if not name:
            return "Unknown"
        if name in self.map:
            return self.map[name]
        staff = self.authors.get(name, {}).get("authority") == "staff"
        if staff:
            self.n_staff += 1
            a = "Staff-%02d" % self.n_staff
        else:
            self.n_player += 1
            a = "Player-%04d" % self.n_player
        self.map[name] = a
        return a

    def save(self):
        os.makedirs(os.path.dirname(MAP), exist_ok=True)
        json.dump(self.map, open(MAP, "w"), indent=1, sort_keys=True, ensure_ascii=False)

    def scrub(self, text):
        """Replace every known username (authors.json) that appears as a whole word."""
        names = sorted(self.authors, key=len, reverse=True)
        for n in names:
            if len(n) < 4:
                continue
            if n in text:
                text = re.sub(r"(?<![\w-])%s(?![\w-])" % re.escape(n), self.alias(n), text)
        return text


if __name__ == "__main__":
    a = Aliaser()
    sys.stdout.write(a.scrub(sys.stdin.read()))
    a.save()
