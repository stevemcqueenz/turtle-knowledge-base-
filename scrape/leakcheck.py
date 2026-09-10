#!/usr/bin/env python3
"""Scan behavior/ for real forum usernames (from structured/forum/authors.json) that should have been pseudonymized.
Skips usernames that are common English words / short tokens; prints file, username, count."""
import glob, json, os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
authors = json.load(open(os.path.join(ROOT, "structured", "forum", "authors.json")))
COMMON = set("""about after again alone always anyone armor arrow attack balance banana beast black blade blood bones boss brave bright bunny castle chaos chief cloud combat comet crystal dagger dawn death demon devil doom dragon dream drums dust eagle earth elder ember empire falcon fatal fire flame flash forest frost fury ghost giant glory gnome goblin grave green guard hammer heart hero hunter hydra iron jester karma king kitten knight legend light lion lotus lunar magic mage mana master mirror monk moon mystic night ninja nobody north ocean orange paladin panda phantom pirate plague priest prime queen raven reaper rogue royal ruby rune saint scout shade shadow shaman silver skull smith snake soul spark spirit storm sugar summer sunny sword tank thunder tiger titan toast troll turtle twilight venom viking viper warden warrior whisper winter wizard wolf zero master looter culture saturday sunday monday hunter human alliance horde healer druid warlock wombat guide admin support player staff turtlewow team""".split())
names = [n for n in authors if len(n) >= 5 and n.lower() not in COMMON and not re.fullmatch(r"[A-Z][a-z]+", n) or (len(n) >= 7 and n.lower() not in COMMON)]
names = sorted(set(names), key=len, reverse=True)
leaks = 0
for f in sorted(glob.glob(os.path.join(ROOT, "behavior", "*.md")) + glob.glob(os.path.join(ROOT, "behavior", "*.jsonl"))):
    text = open(f, encoding="utf-8").read()
    # strip URLs (post URLs carry no names, but wiki/external URLs might)
    text_nourl = re.sub(r"https?://\S+", "", text)
    for n in names:
        c = len(re.findall(r"(?<![\w-])%s(?![\w-])" % re.escape(n), text_nourl))
        if c:
            leaks += c
            print("%s: %r x%d" % (os.path.relpath(f, ROOT), n, c))
print("candidate leaks:", leaks, "(review each; common-word usernames may be false positives)")
