---
title: "Shaman Macro Collection"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20390"
topic_id: 20390
forum_id: 48
forum: "Shaman"
author: "Phyle"
author_authority: "player"
posted: "2025-07-20T10:52:00Z"
last_post: "2025-07-20T10:52:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T08:21:00Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Shaman Macro Collection

## Post 140595 by Phyle — 2025-07-20T10:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140595#p140595 | page 1 | era: pre-1.18.1 -->

Hello :D

I could not find a big Shaman Macro collection with testet Macros on Turtle WoW. So maybe we can start one here. Got them from a Github Repo but I can not find it anymore....
If there is already a macro collection feel free to direct me there.

Totems on 1 Click (Spammed):
Code: Select all

```
/run local _gspells = { "Flametongue Totem", "Strength of Earth Totem", "Mana Spring Totem"} if GetSpellCooldown(4,"BOOKTYPE_SPELL")==0 then _gi=_gi and _gi > 0 and _gi or 1 CastSpellByName(_gspells[_gi]) _gi = math.mod(1+_gi, 1+table.getn(_gspells))end
```

Code: Select all

```
/run local _gspells = { "Windfury Totem", "Strength of Earth Totem", "Mana Spring Totem"} if GetSpellCooldown(4,"BOOKTYPE_SPELL")==0 then _gi=_gi and _gi > 0 and _gi or 1 CastSpellByName(_gspells[_gi]) _gi = math.mod(1+_gi, 1+table.getn(_gspells))end
```

paste totems in "XXXX",  For a fourth Totem the space of 255 is to small.

Spirit Wolf Mount + Demount:
Code: Select all

```
/run local i=0 g=GetPlayerBuff while not(g(i) == -1)do if(strfind(GetPlayerBuffTexture(g(i)), "SpiritWolf"))then CancelPlayerBuff(g(i))end i=i+1 end CastSpellByName("Ghost Wolf",1)
```

Macro for Spell + Startattack workaround:
Code: Select all

```
/run if not PlayerFrame.inCombat then AttackTarget() end
/cast Stormstrike
/target NearestEnemy();
```

Code: Select all

```
/run if not PlayerFrame.inCombat then AttackTarget() end
/cast Flame Shock
/target NearestEnemy();
```

Code: Select all

```
/run if not PlayerFrame.inCombat then AttackTarget() end
/cast Earth Shock
/target NearestEnemy();
```

Code: Select all

```
/run if not PlayerFrame.inCombat then AttackTarget() end
/cast Frost Shock
/target NearestEnemy();
```

The Startattack Workaround ist sometimes bugged, and jumping to NPCs outside of your reach.

You have to TAB additionaly when useing the macro. Annoying, but still much faster than clicking.

Known Places: (In case someone cares to fix this)
- A kind of Tiger in Tousand Needles

- Necromancer in the Glenshire Area

- Spiders in Glenshire Area (in a cave in the Undead Starting Zone)

- Friendly NPC in Tarrens Mill

- Friendly NPC in Gobilntown in Stonetalon

- Happend in a Grp with a friendly player

- hostile gnome at the Gnomer port horde side

*Last edited by Phyle on Mon Jul 21, 2025 9:10 am, edited 1 time in total.*

