---
title: "[Game Mechanics][Combat][NPC][Spell] Fire DoTs"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=696"
topic_id: 696
forum_id: 3
forum: "Help & Support"
author: "Meanwalk"
author_authority: "player"
posted: "2019-07-25T10:58:00Z"
last_post: "2019-07-25T13:59:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T09:30:48Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Game Mechanics][Combat][NPC][Spell] Fire DoTs

## Post 3556 by Meanwalk — 2019-07-25T10:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3556#p3556 | page 1 | era: pre-1.18.1 -->

Fire DoTs apllied to character puts him\her in combat(state refreshes each tick), doesnt even matter if player left mob visibility range(may cause a combat bug).
Also prevent mounting attempts if mob is already dead.

Tested on:
Entropic Beasts <https://classic.wowhead.com/spell=15661/immolate>
Searing Ghouls <https://classic.wowhead.com/spell=23038/flame-shock>

## Post 3562 by Pompa (Patch Note Conspiracy Theorist) — 2019-07-25T13:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3562#p3562 | page 1 | era: pre-1.18.1 -->

Greetings. I have also tested this. As soon as you leave the mob visibility range, you'll automatically be removed from combat. Also, if the mob dies, you'll be removed from combat too.

Again, please: delete your WDB folder.

