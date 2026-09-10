---
title: "AA and CP cancelling"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4864"
topic_id: 4864
forum_id: 4
forum: "General"
author: "Existenz"
author_authority: "player"
posted: "2022-11-16T00:21:00Z"
last_post: "2022-11-18T02:05:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:09:55Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# AA and CP cancelling

## Post 29286 by Existenz — 2022-11-16T00:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29286#p29286 | page 1 | era: pre-1.18.1 -->

Is nobody else really having a problem since this month with autoattacks being cancelled and combo points dropping?

Seeing this on my druid where autoattacks randomly just stop. I have to re-attack in caster, bear and cat form to attack, it just randomly (and quite OFTEN) stops.

With combo points, it almost never goes above 1 CP, you can do claw 1 cp, claw 1 cp, claw 1 cp; all the while my autoattack gets stopped.

Is anybody else experiencing this?

I never had this problem until after one patch in November.

## Post 29334 by Geojak (Grandmaster of Forum PvP) — 2022-11-16T11:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29334#p29334 | page 1 | era: pre-1.18.1 -->

I remeber the patch include performance improvement na with targeting or something.

IF somehow the client switches targets then you lose your combo points

## Post 29347 by Kairion (Bug Report Enthusiast) — 2022-11-16T16:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29347#p29347 | page 1 | era: pre-1.18.1 -->

Are you using macros to turn on your autoattack with skill usage?

This has hiccups on pservers yet many guids recommend that crap

Also target self - then target last target maceos will wipe your cps

## Post 29411 by Existenz — 2022-11-18T01:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29411#p29411 | page 1 | era: pre-1.18.1 -->

This has been narrowed down to pfUI's 40-yard range check. The librange.lua file in it contains the following function:
Code: Select all

```
librange:SetScript("OnUpdate", function()
if ( this.tick or 1) > GetTime() then
return
else
this.tick = GetTime() + this.interval
end

 -- skip invalid units
while not this:NeedRangeScan(units[this.id]) and this.id <= numunits do
this.id = this.id + 1
end

if this.id <= numunits and librange.slot then
local unit = units[this.id]
if not UnitIsUnit("target", unit) then
 -- suspend for various conditions
if pfUI.loot and pfUI.loot:IsShown() then return nil end
if LootFrame and LootFrame:IsShown() then return nil end
if InspectFrame and InspectFrame:IsShown() then return nil end
if TradeFrame and TradeFrame:IsShown() then return nil end

pfScanActive = true
TargetUnit(unit)
unitdata[unit] = IsActionInRange(librange.slot)
TargetLastTarget()
pfScanActive = false
this:ReAttack()
end

this.id = this.id + 1
else
this.id = 1
end
end)
```

Disabling 40-yard range check appears to fix it, and adding a few more "conditions" to the function helps under certain conditions (i.e. "do not range check if I am actively attacking, or in stealth, etc.").

I don't think that IsActionInRange can be effectively replaced in this client, however disabling the rangecheck while in cat form and in combat certainly lowers my blood pressure.

I will need to debug this a little more to find out why ReAttack() seems to bug out (like I said, auto-attacks get interrupted while rangecheck is ongoing), but for now at least this is pretty much the cause.

The 40y check does not occur all the time - there are a few more criteria for it to come into effect and so perhaps I couldn't have noticed it until getting to raids / bgs.

## Post 29415 by Gantulga (Grandmaster of Forum PvP) — 2022-11-18T02:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29415#p29415 | page 1 | era: pre-1.18.1 -->

I just hope we'll get TBC combo points so all this nonsense ends.

