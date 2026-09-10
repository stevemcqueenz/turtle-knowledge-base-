---
title: "Totem Macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6791"
topic_id: 6791
forum_id: 48
forum: "Shaman"
author: "Earplugz"
author_authority: "player"
posted: "2023-04-23T22:09:00Z"
last_post: "2023-10-04T14:58:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T08:23:25Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Totem Macro

## Post 42776 by Earplugz — 2023-04-23T22:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42776#p42776 | page 1 | era: pre-1.18.1 -->

Does anyone have a cast sequence macro for shamans? Seems like the ones i used on blizzard servers in classic dont work here....TIA

## Post 42785 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-04-23T22:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42785#p42785 | page 1 | era: pre-1.18.1 -->

You'd need something like this, though this will only support 2 at the mo: Code: Select all

```
/run c=CastSpellByName if n~=1 then c("Earthbind Totem") n=1 else c("Windfury Totem") n=0 ;end
```

Can be modified for more, what is the sequence you are looking for?

## Post 42789 by Earplugz — 2023-04-23T23:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42789#p42789 | page 1 | era: pre-1.18.1 -->

im looking for 3 currently trying to rune searing strength and healing stream

## Post 42791 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-04-24T00:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42791#p42791 | page 1 | era: pre-1.18.1 -->

Try: Code: Select all

```
/run c=CastSpellByName if n==0 then c("Searing Totem") n=1 elseif n==1 then c("Strength of Earth Totem") n=2 else c("Healing Stream Totem") n=0 ;end
```

## Post 68700 by Aereon — 2023-10-04T14:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68700#p68700 | page 1 | era: pre-1.18.1 -->

Anyone have a new macro to drop all 4 totem types at once?

