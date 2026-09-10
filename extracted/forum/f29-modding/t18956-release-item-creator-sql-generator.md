---
title: "[Release] Item Creator, SQL generator"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18956"
topic_id: 18956
forum_id: 29
forum: "Modding"
author: "Tenyar"
author_authority: "player"
posted: "2025-04-29T15:52:00Z"
last_post: "2025-05-16T11:23:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T10:40:25Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Release] Item Creator, SQL generator

## Post 128995 by Tenyar — 2025-04-29T15:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128995#p128995 | page 1 | era: pre-1.18.1 -->

Hey everyone,

After a lot of long nights (and probably way too many energy drinks), I’m wanted to share the first compiled version of a project I’ve been working on: [an Item Creation Tool for World of Warcraft!](https://github.com/Tenyar97/WoW-Item-Generator/releases) UI is definitely NOT my strong suit.   crying_turtle

![Image](https://i.imgur.com/rjtp8XH.png)

The program is fully GUI based and designed to make creating SQL entries for items way faster, easier, and more reliable — especially on cores like CMaNGOS, Trinity, exc.

Here’s what it can do right now:

[*]
- Generate full SQL INSERT strings for item_template with just a few clicks.

Fill in key fields like entry ID, item class, subclass, name, display ID, quality, vendor prices, stats, spells, requirements, and loot settings.

Dropdowns and smart selectors for inventory types, spell triggers, and other option-heavy fields

Possible to randomize vendor pricing.

Handle optional fields like required skills, limited bag slots, and more.

I wanted to make is as simple as possible, so all dropdowns and selections are readable, understandable text so you no longer have to look up anything manually or remember values.

Export your SQL directly to a file, or copy it to clipboard.
The thing that really kicked off this project was all the other tools I tried to use either didn't work for my core, or had broken field values — so I made the SQL field names configurable.

If your server’s database expects displayID instead of display_id, or iTeMlEvEl instead of itemlevel, you can easily adjust the field names in the config file. No code editing necessary.

This is just version one, but the goal is to keep building on it: more complex item creation (random properties, better displayID selection, Better UI/UX etc.) is already on the roadmap. I'd also like to expand into a suite of these types of tools in the future; NPC creator, Spell creator. Maybe more?

![Image](https://i.imgur.com/ucLwh4g.png)
![Image](https://i.imgur.com/EI6CEvD.png)
![Image](https://i.imgur.com/LQSfqpt.png)
Race/Class bitmask are calculated automatically
![Image](https://i.imgur.com/RzPmU19.png)
![Image](https://i.imgur.com/ifA1dAa.png)

Finally, just a small hint for those who like secrets:
Caution: certain words might open gates to mysterious pastures. ![🐄](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f404.svg)

Good luck out there.

Let me know about any bugs or things to add!

Hope it helps with your projects — and if you'd like to support continued development (or say thanks for saving you some SQL headaches), you can do so [here](https://buymeacoffee.com/tenyar97):

## Post 130359 by Tenyar — 2025-05-09T20:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130359#p130359 | page 1 | era: pre-1.18.1 -->

Wanted to give a quick update; While I realize this isn't super popular, I wanted to update with V1.1.0, moving to Github and away from a sketchy Mega link ;)

## Post 130575 by Zvyrhol (Grandmaster of Forum PvP) — 2025-05-11T11:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130575#p130575 | page 1 | era: pre-1.18.1 -->

Great tool.

## Post 130620 by basednoob (Patch Note Conspiracy Theorist) — 2025-05-11T17:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130620#p130620 | page 1 | era: pre-1.18.1 -->

this is pretty cool. thank you for sharing. guessing it can't generate how a item will look like?

## Post 130676 by Zeran (Patch Note Conspiracy Theorist) — 2025-05-12T07:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130676#p130676 | page 1 | era: pre-1.18.1 -->

Is this similar to <https://dev.turtlecraft.gg/#!/home> ?

## Post 131375 by Tenyar — 2025-05-16T11:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131375#p131375 | page 1 | era: pre-1.18.1 -->

> **basednoob wrote: Sun May 11, 2025 5:13 pm**
> this is pretty cool. thank you for sharing. guessing it can't generate how a item will look like?

At the moment, the icon selection only selects the inventory icon, however you can still manually type in the displayID of a weapon/armor piece and use it's model. I'm still working on a clean or simple way to amend/package a custom display icon/model.

> **Zeran wrote: Mon May 12, 2025 7:34 am**
> Is this similar to <https://dev.turtlecraft.gg/#!/home> ?

Yes, it's similar, but more flexible in some ways, like if your core expects (extreme example) "dIsPlAy_iD" instead of displayID, you have complete control over those field names.

