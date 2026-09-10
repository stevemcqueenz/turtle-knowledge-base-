---
title: "Incorrect armor formula used against level 60 attackers?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=9017"
topic_id: 9017
forum_id: 4
forum: "General"
author: "Borefficz"
author_authority: "player"
posted: "2023-08-22T08:36:00Z"
last_post: "2023-08-22T12:32:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T10:03:13Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Incorrect armor formula used against level 60 attackers?

## Post 58393 by Borefficz (Patch Note Conspiracy Theorist) — 2023-08-22T08:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=58393#p58393 | page 1 | era: pre-1.18.1 -->

Does TurtleWoW use the incorrect armor formula against level 60 (and possibly 60+) attackers?
According to the information on the internet two armor formulas are used:

If the attacker is level 1-59 the damage reduction formula should be Code: Select all

```
DamageReduction = Armor / (Armor + 400 + 85 * AttackerLevel)
```

If the attacker is level 60+ the damage reduction formula should be Code: Select all

```
DamageReduction = Armor / (Armor + 400 + 85 * (AttackerLevel + 4.5 * (AttackerLevel - 59)))
```

However, when I mouse over my armor value shown on the character sheet, the tooltip says 2456 armor provides a 30.9% reduction against level 60 targets. For my pet, the tooltip says 5014 armor provides a 47.7% reduction against level 60 targets. This falls in line with the level 1-59 formula.
If the level 60 formula was applied instead, the reduction values should have been ~29.5% for 2456 armor and ~46.0% for 5014 armor respectively.

I have found a similar thread on the Nostalrius forums <https://forum.nostalrius.org/viewtopic.php?f=24&t=17968> which suggested the armor formula for level 60 there was Code: Select all

```
DamageReduction = Armor / (Armor + 400 + 85 * (AttackerLevel + 4.5 * (AttackerLevel - 60)))
```

so basically the 1-59 formula after simplification.

Is my information incorrect? Is it just a visual error? Or is the incorrect formula being used?
The main reason I'm making this thread is wanting to find out if raid bosses, and by extension players against raid bosses have the correct physical damage reduction.

## Post 58428 by Elesion (Patch Note Conspiracy Theorist) — 2023-08-22T11:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=58428#p58428 | page 1 | era: pre-1.18.1 -->

As far as we know TWoW is based on the VMaNGOS server, for which you can just look up the [source code](https://github.com/vmangos/core/).

The armor formula does not differentiate by level. The whole armor-affecting-damage calculation looks like this: "{","    uint32 newdamage = 0;","    float armor = (float)pVictim->GetArmor();","    Unit const* pUnit = ToUnit();","","    // Ignore enemy armor by SPELL_AURA_MOD_TARGET_RESISTANCE aura","    if (pUnit)","        armor += pUnit->GetTotalAuraModifierByMiscMask(SPELL_AURA_MOD_TARGET_RESISTANCE, SPELL_SCHOOL_MASK_NORMAL);","","    if (armor < 0.0f)","        armor = 0.0f;","","    float tmpvalue = 0.1f * armor / (8.5f * float(GetLevel()) + 40.0f);","    tmpvalue = tmpvalue / (1.0f + tmpvalue);","","    if (tmpvalue < 0.0f)","        tmpvalue = 0.0f;","    if (tmpvalue > 0.75f)","        tmpvalue = 0.75f;","","    newdamage = damage - (damage * tmpvalue);","","    return (newdamage > 1) ? newdamage : 1;","}"

The most essential parts made a little more readable:
tmpvalue = 0.1*armor / (8.5*attacker_level + 40)
damage reduction = tempvalue/(1 + tempvalue)

That should be isomorph to what you describe as the "level 1-59" formula.
I suspect you are misunderstanding the wiki page though. It describes the formulas as being "for Patch 2.0.8", which means TBC. And there it kinda makes sense to have a different formula for lvl 60+ as lvl 60-70 is TBC content. I don't see anything on the wiki page linked that Vanilla 1.12 used a different formula when you fight lvl 60-63 mobs and I don't really see why it should.

## Post 58441 by Borefficz (Patch Note Conspiracy Theorist) — 2023-08-22T12:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=58441#p58441 | page 1 | era: pre-1.18.1 -->

> **Elesion wrote: Tue Aug 22, 2023 11:55 am**
> As far as we know TWoW is based on the VMaNGOS server, for which you can just look up the [source code](https://github.com/vmangos/core/).
>
>  The armor formula does not differentiate by level. The whole armor-affecting-damage calculation looks like this: "{","    uint32 newdamage = 0;","    float armor = (float)pVictim->GetArmor();","    Unit const* pUnit = ToUnit();","","    // Ignore enemy armor by SPELL_AURA_MOD_TARGET_RESISTANCE aura","    if (pUnit)","        armor += pUnit->GetTotalAuraModifierByMiscMask(SPELL_AURA_MOD_TARGET_RESISTANCE, SPELL_SCHOOL_MASK_NORMAL);","","    if (armor < 0.0f)","        armor = 0.0f;","","    float tmpvalue = 0.1f * armor / (8.5f * float(GetLevel()) + 40.0f);","    tmpvalue = tmpvalue / (1.0f + tmpvalue);","","    if (tmpvalue < 0.0f)","        tmpvalue = 0.0f;","    if (tmpvalue > 0.75f)","        tmpvalue = 0.75f;","","    newdamage = damage - (damage * tmpvalue);","","    return (newdamage > 1) ? newdamage : 1;","}"
>
>
>  The most essential parts made a little more readable:
>  tmpvalue = 0.1*armor / (8.5*attacker_level + 40)
>  damage reduction = tempvalue/(1 + tempvalue)
>
>  That should be isomorph to what you describe as the "level 1-59" formula.
>  I suspect you are misunderstanding the wiki page though. It describes the formulas as being "for Patch 2.0.8", which means TBC. And there it kinda makes sense to have a different formula for lvl 60+ as lvl 60-70 is TBC content. I don't see anything on the wiki page linked that Vanilla 1.12 used a different formula when you fight lvl 60-63 mobs and I don't really see why it should.

I see, thanks for the reply!

