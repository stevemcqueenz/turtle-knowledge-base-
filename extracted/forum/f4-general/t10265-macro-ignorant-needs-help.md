---
title: "Macro Ignorant needs help"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=10265"
topic_id: 10265
forum_id: 4
forum: "General"
author: "Wilsonsds"
author_authority: "player"
posted: "2023-09-26T21:27:00Z"
last_post: "2025-07-22T04:44:00Z"
post_count: 10
pages: 1
fetched: "2026-09-10T09:43:12Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macro Ignorant needs help

## Post 67044 by Wilsonsds (Patch Note Conspiracy Theorist) — 2023-09-26T21:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67044#p67044 | page 1 | era: pre-1.18.1 -->

Hello

I have 2 trinkets [Talisman of Ascendance] and [Zandalarian Hero Charm]

i wish to in every single time before casting Flash Heal(Rank 4) to try to use one of them, if they are in cooldown, cast Flash Heal(Rank 4).

I tried

/script UseInventoryItem(14)
/script UseInventoryItem(13)
/cast Flash Heal(Rank 4)

But it does not activate the trinkets, just cast the spell...

Can someone plz help me?

## Post 67046 by Aizawakai — 2023-09-26T22:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67046#p67046 | page 1 | era: pre-1.18.1 -->

/script UseInventoryItem( GetInventorySlotInfo("Trinket0Slot") )

## Post 67054 by Wilsonsds (Patch Note Conspiracy Theorist) — 2023-09-27T00:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67054#p67054 | page 1 | era: pre-1.18.1 -->

Sorry but this just use the trinkets alone, but with i do:

/script UseInventoryItem( GetInventorySlotInfo("Trinket0Slot") )
/cast Flash Heal(Rank 4)

i cant cast the spell, it just make me try to use the trinkets

## Post 67057 by Satirical (Barrens Chat Casualty) — 2023-09-27T00:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67057#p67057 | page 1 | era: pre-1.18.1 -->

Because you're not using the correct macro, that's a modern macro. I don't know enough about Lua scripting to know what the right one is, but that's why you're not using the right one. You'd be better off just downloading Roidmacros so you can use modern macros.

## Post 67114 by Amptie — 2023-09-27T10:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67114#p67114 | page 1 | era: pre-1.18.1 -->

Code: Select all

```
/script a, _, _ = GetInventoryItemCooldown("player", 13); b, _, _ = GetInventoryItemCooldown("player", 14); if a == 0 then UseInventoryItem(13) end; if b == 0 then UseInventoryItem(14) end; CastSpellByName("Flash of Light")
```

Try this, it should use your trinkets if they have no cooldown and cast "Flash of Light" instead, so just change the Name of the Spell in the end. Works for me, when I tested it :D

## Post 67190 by Wilsonsds (Patch Note Conspiracy Theorist) — 2023-09-27T14:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67190#p67190 | page 1 | era: pre-1.18.1 -->

> **Amptie wrote: Wed Sep 27, 2023 10:04 am**
> Code: Select all
>
> ```
> /script a, _, _ = GetInventoryItemCooldown("player", 13); b, _, _ = GetInventoryItemCooldown("player", 14); if a == 0 then UseInventoryItem(13) end; if b == 0 then UseInventoryItem(14) end; CastSpellByName("Flash of Light")
> ```
>
>   Try this, it should use your trinkets if they have no cooldown and cast "Flash of Light" instead, so just change the Name of the Spell in the end. Works for me, when I tested it :D

I tried and it keeps saying, "Another action in progress" and i only cast the healing spells, the trinkets dont activate

## Post 67191 by Wilsonsds (Patch Note Conspiracy Theorist) — 2023-09-27T14:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67191#p67191 | page 1 | era: pre-1.18.1 -->

> **Satirical wrote: Wed Sep 27, 2023 12:41 am**
> Because you're not using the correct macro, that's a modern macro. I don't know enough about Lua scripting to know what the right one is, but that's why you're not using the right one. You'd be better off just downloading Roidmacros so you can use modern macros.

I downloaded Roid Macros

and tried
`
/use 13
/use 14
/cast Flash Heal(Rank 4)

i only do the healing, and the trinkets are not activated

## Post 67193 by Ibux (Patch Note Conspiracy Theorist) — 2023-09-27T14:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67193#p67193 | page 1 | era: pre-1.18.1 -->

this should work if you have 2 trinkets with use effects. Code: Select all

```
/run if GetInventoryItemCooldown("player", 13) == 0 then UseInventoryItem(13) elseif GetInventoryItemCooldown("player", 14) == 0 then UseInventoryItem(14)else CastSpellByName("Flash Heal")end
```

## Post 67207 by Wilsonsds (Patch Note Conspiracy Theorist) — 2023-09-27T15:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67207#p67207 | page 1 | era: pre-1.18.1 -->

> **Ibux wrote: Wed Sep 27, 2023 2:31 pm**
> this should work if you have 2 trinkets with use effects. Code: Select all
>
> ```
> /run if GetInventoryItemCooldown("player", 13) == 0 then UseInventoryItem(13) elseif GetInventoryItemCooldown("player", 14) == 0 then UseInventoryItem(14)else CastSpellByName("Flash Heal")end
> ```

THANKS A LOT ITS WORKING!!

IT LIVES!! IT LIVES!

## Post 140813 by Rindexxx (Barrens Chat Casualty) — 2025-07-22T04:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140813#p140813 | page 1 | era: pre-1.18.1 -->

doesnt work for me tried with consecration

