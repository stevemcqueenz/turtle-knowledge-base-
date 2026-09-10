---
title: "Good macros to have"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1559"
topic_id: 1559
forum_id: 4
forum: "General"
author: "Bayanni"
author_authority: "player"
posted: "2021-01-26T01:48:00Z"
last_post: "2023-09-03T19:42:00Z"
post_count: 12
pages: 1
fetched: "2026-09-10T10:02:37Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Good macros to have

## Post 9233 by Bayanni (Patch Note Conspiracy Theorist) — 2021-01-26T01:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9233#p9233 | page 1 | era: pre-1.18.1 -->

I haven't seen much on macros on this forum, so I'd like to contribute some useful ones I know and hope others will do the same. These aren't originally written by me, but it's been a long time and I can't find the original authors to credit. If they're out there, feel free to label your work. To note: some of these will only work if you have the addon "SuperMacro" installed, linked below:

<https://github.com/Monteo/SuperMacro>

Mark Skull for DPS Target:
/run if GetRaidTargetIndex("target")~=8 then SetRaidTarget("target",8)end

Don't cast Renew on a target that already has Renew buffed:
/script --CastSpellByName("Renew")
/script local b = 1; for j=0,15 do a = UnitBuff("target", j); if (a and string.find(a, "Renew")) then b = nil; break; end; end; if (:ph34r: then CastSpellByName("Renew"); end;

Alternative to prevent Renew cast on renewed target:
/run local i,x=1,0 while UnitBuff("target",i) do if UnitBuff("target",i)=="Interface\\Icons\\Spell_Holy_Renew" then x=1 end i=i+1 end if x==0 then CastSpellByName("Renew")end

Script to add to Paladin buffs, among others, to refresh if almost finished:
/script if not IsCurrentAction(60) then UseAction(60) end;

Shield Slam
#showtooltip Shield Slam
/stopattack
/equipslot 16 <1H>
/equipslot 17 <Shield>
/cast Shield Slam
/cast [stance:3] Defensive Stance
/equip [modifier:ctrl] <2H>

Shield Wall:
#showtooltip Shield Wall
/stopattack
/equipslot 16 <1H>
/equipslot 17 <Shield>
/cast Defensive Stance
/cast Shield Wall

Shield Wall another way:
/stopattack
/equip 1h weapon name here
/equip shield name here
/cast Defensive Stance
/cast Shield Wall

Kill Shaman Totems:
/target Tremor Totem (or any totem, probably grounding or earthbind)
/script PetAttack();
/script TargetLastTarget();
/script PetPassiveMode();

Druid one-button Ravage/Shred depending on stealth
/script i=1;m=0;while(UnitBuff("player",i)~=nil) do if(strfind(UnitBuff("player",i),"Ability_Ambush")~=nil) then m=1; end;i=i+1;end; c=CastSpellByName; if(m==1) then c("Ravage(rank 4)");else c("Shred(rank 5)");end;

Druid one-button combined faerie fire/feral faerie fire:
/script i=1;m=0;while(UnitBuff("player",i)~=nil) do if(strfind(UnitBuff("player",i),"Form")~=nil) then m=1; end;i=i+1;end; c=CastSpellByName; if(m==1) then c("Faerie Fire (Feral)()");else c("Faerie Fire(Rank 4)");end;

Druid don't overwrite other druid's Rejuvenation:
/script i=1;x=0;m=0;c=CastSpellByName;while(UnitBuff("target",i)~=nil) do if(strfind(UnitBuff("target",i),"Spell_Nature_Rejuvenation")) then m=1;end;i=i+1;end;if (m~=1) then c"Rejuvenation";else c"Healing Touch(rank 3)";end;

Druid one-button raiding do-it-all macro:
/script i=1;x=0;m=0;c=CastSpellByName;while(UnitBuff("target",i)~=nil) do if(strfind(UnitBuff("target",i),"Spell_Nature_Rejuvenation")) then m=1;end;i=i+1;end;if UnitMana"player"<500 then c("Innervate",1) c"Healing Touch(Rank 2)";elseif(m~=1) then c"Rejuvenation";elseif (m==1)and((UnitHealthMax"target")-(UnitHealth"target"))>4000then c"Nature's Swiftness" c"Healing Touch";elseif (m==1) and((UnitHealthMax"target")-(UnitHealth"target"))>3000then c"Swiftmend" c"Healing Touch(Rank 8)";elseif (m==1) and((UnitHealthMax"target")-(UnitHealth"target"))>1500 then c"Swiftmend" c"Healing Touch(Rank 6)";elseif(m==1) and((UnitHealthMax"target")-(UnitHealth"target"))>1000then c"Healing Touch(rank 4)";else c"Healing Touch(rank 2)";end;

Boomkin Wrath swap into Starfire with Nature's Blessing proc:
/script i=1;m=0;c=CastSpellByName;while(UnitBuff("player",i)~=nil) do if(strfind(UnitBuff("player",i),"Spell_Nature_NaturesBlessing")~=nil) then m=1;end;i=i+1;end;if (m==1) then c"Starfire";else c"Wrath";end;

Warrior swap to Battle Stance and Charge:
/script a,b,c=GetShapeshiftFormInfo(1);if (c) then CastSpellByName("Charge") else CastSpellByName("Battle Stance");end
/cast Hamstring

Warrior swap to Berzerker Stance and Intercept:
/script a,b,c=GetShapeshiftFormInfo(3);if (c) then CastSpellByName("Intercept") else CastSpellByName("Berserker Stance");end
/cast Hamstring

Trollin:
/y B :-)
/y B:-)
/y B-)
/y Deal with it.

## Post 9235 by Bazou — 2021-01-26T06:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9235#p9235 | page 1 | era: pre-1.18.1 -->

That’s awesome!

## Post 9237 by Jimmicz (Barrens Chat Casualty) — 2021-01-26T11:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9237#p9237 | page 1 | era: pre-1.18.1 -->

#showtooltip

and /startattack commands do not work in the vanilla client

## Post 9254 by Bayanni (Patch Note Conspiracy Theorist) — 2021-01-28T16:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9254#p9254 | page 1 | era: pre-1.18.1 -->

@Jimmicz
Yes, they'll need the addon linked above

## Post 9257 by Jimmicz (Barrens Chat Casualty) — 2021-01-30T01:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9257#p9257 | page 1 | era: pre-1.18.1 -->

doesn't work even with the addon, in my case, the addon picks the first spell /cast available and displays it as a tooltip.

so in case below the tooltip displayed would be actually "defensive stance" tooltip
Shield Wall:
#showtooltip Shield Wall
/stopattack
/equipslot 16 <1H>
/equipslot 17 <Shield>
/cast Defensive Stance
/cast Shield Wall

## Post 17413 by Judditude — 2022-03-06T08:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17413#p17413 | page 1 | era: pre-1.18.1 -->

Does anyone have a working shift/mouseover macro ? Like cast @mouseover either heal A (nomod) or Heal B (shift)?

## Post 17416 by Geojak (Grandmaster of Forum PvP) — 2022-03-06T11:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17416#p17416 | page 1 | era: pre-1.18.1 -->

You can give also roid macros addon a try. It impwlwmtns most retail macro things with a good documentation for ir

## Post 17535 by Judditude — 2022-03-14T21:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17535#p17535 | page 1 | era: pre-1.18.1 -->

"/cast [@mouseover, esists] Blessing of Protection(Rank 3); Blessing of Protection(Rank 3)"

So the above macro works with turtle wow with ROID macro running.  I am yet unable to get mod:shift to work within this macro.

## Post 47170 by Ashitaka77 — 2023-05-23T20:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47170#p47170 | page 1 | era: pre-1.18.1 -->

> Boomkin Wrath swap into Starfire with Nature's Blessing proc:
>  /script i=1;m=0;c=CastSpellByName;while(UnitBuff("player",i)~=nil) do if(strfind(UnitBuff("player",i),"Spell_Nature_NaturesBlessing")~=nil) then m=1;end;i=i+1;end;if (m==1) then c"Starfire";else c"Wrath";end;

So I tried to make this macro work replacing wrath and starfire with healing touch ranks 2 and 3, and it worked... only problem now is how to make this a mouseover macro. Think you can help? :)

## Post 60619 by Thoriamuss — 2023-09-03T10:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60619#p60619 | page 1 | era: pre-1.18.1 -->

Does anyone have a macro that does dps (ie SMITE) if targeting a hostile; and casting (heal) if targeting a friendly?  So, that my one keybind can be used for dps or heals depending on target.  Thank you in advance.

## Post 60622 by Ibux (Patch Note Conspiracy Theorist) — 2023-09-03T10:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60622#p60622 | page 1 | era: pre-1.18.1 -->

> **Thoriamuss wrote: Sun Sep 03, 2023 10:14 am**
> Does anyone have a macro that does dps (ie SMITE) if targeting a hostile; and casting (heal) if targeting a friendly?  So, that my one keybind can be used for dps or heals depending on target.  Thank you in advance.

<https://github.com/Meridaw/Vanilla-Macros>
Code: Select all

```
/run if UnitCanAttack("player","target") == 1 then CastSpellByName("Smite") else CastSpellByName("Heal") end
```

## Post 60670 by Snnail — 2023-09-03T19:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60670#p60670 | page 1 | era: pre-1.18.1 -->

Very useful, thx

