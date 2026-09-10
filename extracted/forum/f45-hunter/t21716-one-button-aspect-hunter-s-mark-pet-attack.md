---
title: "One-button Aspect, Hunter's Mark, Pet Attack"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21716"
topic_id: 21716
forum_id: 45
forum: "Hunter"
author: "Edwanji"
author_authority: "player"
posted: "2025-09-06T05:14:00Z"
last_post: "2025-09-06T05:14:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T08:11:07Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# One-button Aspect, Hunter's Mark, Pet Attack

## Post 150440 by Edwanji (Barrens Chat Casualty) — 2025-09-06T05:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150440#p150440 | page 1 | era: pre-1.18.1 -->

This took me a bit of work and figuring out APIs, so I figure I'd put it out there in case anybody has a similar Hunter style to mine.
This macro:
 1) If Aspect of the Hawk is not selected, cast Aspect of the Hawk.  I don't know if there's a better way to do this, but I take advantage of Hunter Aspects being stances now.  Basically, if the button for Hawk has the Raven claw texture, it's not activated.
 2) If Hunter's Mark isn't in GCD (likely due to having just cast Aspect of the Hawk) Instruct my pet to attack, and cast Hunter's Mark.

So push once to switch aspect if needed, push again to go on the attack.
Code: Select all

```
/run local t=GetShapeshiftFormInfo(2);if t and strfind(t, "Raven") then CastSpellByName("Aspect of the Hawk");end
/run local c,s=CastSpellByName,"Hunter's Mark";local i=nil;for j=1,180 do local n=GetSpellName(j,BOOKTYPE_SPELL);if n and strfind(n,s) then i=j;break;end end if i then if GetSpellCooldown(i,BOOKTYPE_SPELL)<1 then PetAttack() c(s) end end
```

NOTE: PetAttack() will select the nearest target if you don't have one selected.  That's why it goes before Hunter's Mark.  I'm often too lazy to select the target myself.

