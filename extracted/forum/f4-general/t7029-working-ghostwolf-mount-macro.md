---
title: "Working Ghostwolf / mount macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7029"
topic_id: 7029
forum_id: 4
forum: "General"
author: "Kundishunter"
author_authority: "player"
posted: "2023-05-05T14:33:00Z"
last_post: "2023-05-07T01:59:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:06:29Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Working Ghostwolf / mount macro

## Post 44584 by Kundishunter — 2023-05-05T14:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44584#p44584 | page 1 | era: pre-1.18.1 -->

Anybody got a working macro that would do:

Cast ghostwolf if in combat or indoors
Cast your mount if you're outdoors

?

I have been trying for 2 days and nothing works. Any help appreciated.

## Post 44595 by Ibux (Patch Note Conspiracy Theorist) — 2023-05-05T16:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44595#p44595 | page 1 | era: pre-1.18.1 -->

i don't have a shaman to test. but try this.
Code: Select all

```
/run if UnitAffectingCombat("player") then CastSpellByName("Ghost Wolf") else CastSpellByName("Riding Turtle")end
```

## Post 44607 by Piccadilly — 2023-05-05T17:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44607#p44607 | page 1 | era: pre-1.18.1 -->

Ghostwolf is not castable indoors, just fyi. :D

## Post 44759 by Kundishunter — 2023-05-07T01:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44759#p44759 | page 1 | era: pre-1.18.1 -->

Found something that worked, but you're right, it doesnt work indoors. But it does work in combat, so you can use this:
/cast [nocombat]Plainsrunning; [] Ghost Wolf

