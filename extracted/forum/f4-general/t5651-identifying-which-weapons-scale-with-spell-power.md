---
title: "Identifying which weapons scale with spell power"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5651"
topic_id: 5651
forum_id: 4
forum: "General"
author: "Scarth"
author_authority: "player"
posted: "2023-02-19T05:55:00Z"
last_post: "2023-02-20T01:33:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T10:08:48Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Identifying which weapons scale with spell power

## Post 35211 by Scarth — 2023-02-19T05:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35211#p35211 | page 1 | era: pre-1.18.1 -->

Is there a way to tell which weapon procs scale with spell power? I'm interested in playing a melee warlock and according to [this guide](https://www.warcrafttavern.com/wow-classic/guides/melee-warlock/#:~:text=The%20only%20weapon%20for%20Warlocks%20found%20to%20scale%20with%20spell%20power%20in%20the%20blizzard%20client%20is%20the%20Zulian%20Slicer.) the only weapon usable by warlocks that scales with spell power on Blizzard's official classic client is this sword. However, Turtle offers some custom weapons such as [The Ripper](https://database.turtlecraft.gg/?item=60422) or the swords on [this page](https://database.turtlecraft.gg/?items=-500#300+11+3+1) which may be viable for this playstyle.

<https://database.turtlecraft.gg/?spell=48004>

Using GideonAI's guide to investigating this myself here
[embed: https://www.youtube.com/embed/Exu2TIBeKuE]

It appears some of these effects such as [Call of Shadow's](https://database.turtlecraft.gg/?item=51046) proc do scale. However I'm not sure if this is the case on Turtle, as the WoW.Tools page only shows official Blizzard information.

This is also difficult to determine with Turtle-original proc effects; The sword [Dream's Herald](https://database.turtlecraft.gg/?item=65008) for example looks appealing, but as the proc effect doesn't exist in official Classic I can't see a way to determine if it scales or not.

Any help would be appriciated. I'm more interested to learn which section of the table on Turtle's database allows me to tell if it scales or not.

Also, did I read something about Warlocks, Priests and Paladins receiving some mechanic that cauases spell power to scale with int or spirit? Maybe I'm misremembering.

## Post 35212 by Kairion (Bug Report Enthusiast) — 2023-02-19T07:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35212#p35212 | page 1 | era: pre-1.18.1 -->

In case of the Ripper:
Open the item in the turtlewow database. Click on the proc you want to investigate.
For example i went with the dot.
<https://database.turtlecraft.gg/?spell=3396>

Look the same spellid up on wowhead classic.
[https://www.wowhead.com/classic/spell=3 ... ive-poison](https://www.wowhead.com/classic/spell=3396/corrosive-poison)

Look at the effects
Apply Aura: Periodic Damage
Value: 10 every 5 seconds (SP mod: 0.1)

SP mod: 0.1

That means a 10% scaling.

Turtle database does not list sp mods afaik and there can be differencs between wowhead and turtle. For instance scaling could have been added to make an item more appealing or removed since the proc has been moved to an item that would be too strong with scaling.
But its method to get an idea what you should expect.

In the case of corrosive poison from the ripper.  There is also a weapon called vile sting that shares the same proc. It might be a good idea to seek that weapon out and test it. As thats a surefire way to find out if the ripper scales.

In casw of items like dreams herald, the proc is also custommade and can not be found in the wowhead classic db. In these cases i suggest you get your hands on some greater arcane elixirs and seek out owners of these weapons, hand them the elixir and ask to test ^^

Priest has a talent to turn spirit into spellpower. But otherwise no, intelligence only slightly increases spellcrit (62int =1% spellcrt i think) and no further offensive gains from these stats

## Post 35315 by Scarth — 2023-02-20T01:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35315#p35315 | page 1 | era: pre-1.18.1 -->

Thank you, that's a bit easier than looking up the tables. The main thing I was trying to find out is if there's a way to view the SP mod of those custom effects but I suppose not. Thanks anyway.

