---
title: "Looking for addons that do a few things"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13357"
topic_id: 13357
forum_id: 18
forum: "AddOns"
author: "Anythinggoes"
author_authority: "player"
posted: "2024-03-10T13:50:00Z"
last_post: "2025-04-07T05:46:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:26:25Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Looking for addons that do a few things

## Post 89828 by Anythinggoes — 2024-03-10T13:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89828#p89828 | page 1 | era: pre-1.18.1 -->

1)On the character panel you have your stats displayed. If you are melee, that is enough, usually. If you are a caster, however, this tells you nothing. Spell damage, spell crit, spell hit, healing? Any addon to reveal that?

 2)There was this neat little addon that opened a window on the character panel next to the item slot you wanted to change and it allowed you to quickly switch items without looking at your bags. Item rack I think it was called, but can't find it on <https://turtle-wow.fandom.com/wiki/Addons>. Any alternatives? Outfitter is fine, but it works differently.

 3)Any way to make mouseover healing work without addons? Any macro that does the job?

 4)X-perl unit frames does a lot of things. When you heal, it displays how much health your next heal will replenish on a player. It also highlights debuffs on raid and party, like curses, for example. What it doesn't do is allow you to increase the debuff size on your target and see a countdown. This can be fixed with an addon called Debuff timers, but the numbers are still tiny? No idea how to increase the size? Any unit frames addon that displays both things (healing and debuff)well?

## Post 89834 by Ibux (Patch Note Conspiracy Theorist) — 2024-03-10T15:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89834#p89834 | page 1 | era: pre-1.18.1 -->

1:
<https://github.com/Lexiebean/BetterCharacterStats>

 2:
<https://github.com/McPewPew/ItemRack>

 3: Code: Select all

```
/run i=(GetMouseFocus().unit) if i then CastSpellByName("Blessing of Freedom") SpellTargetUnit(i) else CastSpellByName("Blessing of Freedom") end
```

 4:
<https://github.com/Geigerkind/VCB>
<https://github.com/Lexiebean/Decursive>

## Post 89851 by Anythinggoes — 2024-03-10T21:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89851#p89851 | page 1 | era: pre-1.18.1 -->

Thank you very much!

## Post 125807 by Gunnz — 2025-04-07T05:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125807#p125807 | page 1 | era: pre-1.18.1 -->

> **Anythinggoes wrote: Sun Mar 10, 2024 1:50 pm**
> 4)X-perl unit frames does a lot of things. When you heal, it displays how much health your next heal will replenish on a player. It also highlights debuffs on raid and party, like curses, for example. What it doesn't do is allow you to increase the debuff size on your target and see a countdown. This can be fixed with an addon called Debuff timers, but the numbers are still tiny? No idea how to increase the size? Any unit frames addon that displays both things (healing and debuff)well?

My xperl doesn’t show the incoming heals. What did u do to allow this?

