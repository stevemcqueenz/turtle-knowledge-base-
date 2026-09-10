---
title: "How does the math of defensive tactics actually work?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22519"
topic_id: 22519
forum_id: 40
forum: "Warrior"
author: "Rektthar"
author_authority: "player"
posted: "2025-10-21T15:09:00Z"
last_post: "2025-10-22T09:25:00Z"
post_count: 10
pages: 1
fetched: "2026-09-10T07:52:18Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# How does the math of defensive tactics actually work?

## Post 156470 by Rektthar — 2025-10-21T15:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156470#p156470 | page 1 | era: 1.18.1-announced-pre-release -->

If I take the wording literally, it would be like following:

(Base threat + threat increase in defensive stance * 180 %) * battle stance threat
(1 + 0.3 * 1.8) * 0.8 = 1.232

However, if it replaces the battle stance threat, it would be this:
 1 + 0.3 * 1.8 = 1.54

I doubt it would be like this because it would be ridiculously high:
 1.3 * 1.8 = 2.34

## Post 156471 by Rektthar — 2025-10-21T15:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156471#p156471 | page 1 | era: 1.18.1-announced-pre-release -->

Also, does defiance count in other stances for defensive tactics?

## Post 156473 by Ellifta (Barrens Chat Casualty) — 2025-10-21T15:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156473#p156473 | page 1 | era: 1.18.1-announced-pre-release -->

Defiance does count for other stances if you have defensive tactics talent, but the calculation is a bit confusing. Assuming you will always take 5/5 defiance as a warrior tank, the formula for default defensive stance threat is the following. Defiance is multiplicative, not additive.

t_dStanceDefiance = t_dStance × t_defiance
t_dStanceDefiance = 1,30 × 1,15 = 1,495

Per 1 point of damage, you do 1,495 point of threat in defensive stance normally. With defensive tactics talent 3/3 the following formula applies when calculating how much threat MULTIPLIER you have in other stances.

t_dTactics = (t_dStanceEffective - 1) × 1,8 + 1
Since you should be using Defiance at all times while tanking at max level we calculate:

t_dTactics = (1,495 - 1) × 1,8 + 1 = 1,891

 1,891 is not the final multiplier though, because there's a hidden 0.8 threat modifier in battle and berserker stance for warriors, just like rogues and feral druids do. If you multiply 1.891 with 0.8 you end up at 1.512 threat multiplier in the end. This number is only marginally better than 1,495 without the talent, except there's one big difference. In battle stance you do 10% more damage and get access to overpower and execute. In rough terms this will lead to 15% more threat compared to not having any defensive tactic talent points and staying in defensive stance.

Source:
[embed: https://docs.google.com/spreadsheets/d/1G0SqEf1Su67M0oEaiS8DYx-Nu9jlN-eOleoTLDn6PA4/preview#gid=90747100]

## Post 156478 by Xudo (Grandmaster of Forum PvP) — 2025-10-21T16:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156478#p156478 | page 1 | era: 1.18.1-announced-pre-release -->

> **Ellifta wrote: Tue Oct 21, 2025 3:21 pm**
>

How did you get real threat value? I thought it is not something that you can see in combat log.

## Post 156479 by Ellifta (Barrens Chat Casualty) — 2025-10-21T16:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156479#p156479 | page 1 | era: 1.18.1-announced-pre-release -->

> How did you get real threat value? I thought it is not something that you can see in combat log.

Be in a raid group while attacking an elite mob with DPS and TPS meter on, do singular attacks and reverse engineer a formula that works. The spreadsheet is not mine but I can attest to it as I came to identical conclusions based on my own testing.

## Post 156483 by Eyeburn (Barrens Chat Casualty) — 2025-10-21T16:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156483#p156483 | page 1 | era: 1.18.1-announced-pre-release -->

> **Ellifta wrote: Tue Oct 21, 2025 3:21 pm**
> Defiance does count for other stances if you have defensive tactics talent, but the calculation is a bit confusing. Assuming you will always take 5/5 defiance as a warrior tank, the formula for default defensive stance threat is the following. Defiance is multiplicative, not additive.
>
>  t_dStanceDefiance = t_dStance × t_defiance
>  t_dStanceDefiance = 1,30 × 1,15 = 1,495
>
>  Per 1 point of damage, you do 1,495 point of threat in defensive stance normally. With defensive tactics talent 3/3 the following formula applies when calculating how much threat MULTIPLIER you have in other stances.
>
>  t_dTactics = (t_dStanceEffective - 1) × 1,8 + 1
>  Since you should be using Defiance at all times while tanking at max level we calculate:
>
>  t_dTactics = (1,495 - 1) × 1,8 + 1 = 1,891
>
>  1,891 is not the final multiplier though, because there's a hidden 0.8 threat modifier in battle and berserker stance for warriors, just like rogues and feral druids do. If you multiply 1.891 with 0.8 you end up at 1.512 threat multiplier in the end. This number is only marginally better than 1,495 without the talent, except there's one big difference. In battle stance you do 10% more damage and get access to overpower and execute. In rough terms this will lead to 15% more threat compared to not having any defensive tactic talent points and staying in defensive stance.
>
>  Source:
> [embed: https://docs.google.com/spreadsheets/d/1G0SqEf1Su67M0oEaiS8DYx-Nu9jlN-eOleoTLDn6PA4/preview#gid=90747100]

Mathematical proof that Defensive Tactics is a dumb design direction and forcing deep prot to tank in battle stance to have relevant threat is garbage for the tree.

## Post 156485 by Xudo (Grandmaster of Forum PvP) — 2025-10-21T16:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156485#p156485 | page 1 | era: 1.18.1-announced-pre-release -->

> **Ellifta wrote: Tue Oct 21, 2025 4:20 pm**
> > How did you get real threat value? I thought it is not something that you can see in combat log.
>
>   Be in a raid group while attacking an elite mob with DPS and TPS meter on, do singular attacks and reverse engineer a formula that works. The spreadsheet is not mine but I can attest to it as I came to identical conclusions based on my own testing.

Which threatmeter?
All threatmeters in original classic used to parse combat log and use their own calculation formulas to get "expected" threat value. Real threat values were send to client since tbc and prior to remake of classic servers.
Did turtle change something and send threat data to clients?

If not, you just tested how threatmeter works. Not real threat values used by server.

## Post 156486 by Ellifta (Barrens Chat Casualty) — 2025-10-21T16:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156486#p156486 | page 1 | era: 1.18.1-announced-pre-release -->

> **Xudo wrote: Tue Oct 21, 2025 4:49 pm**
> > **Ellifta wrote: Tue Oct 21, 2025 4:20 pm**
> > > How did you get real threat value? I thought it is not something that you can see in combat log.
> >
> >   Be in a raid group while attacking an elite mob with DPS and TPS meter on, do singular attacks and reverse engineer a formula that works. The spreadsheet is not mine but I can attest to it as I came to identical conclusions based on my own testing.
>
>  Which threatmeter?
>  All threatmeters in original classic used to parse combat log and use their own calculation formulas to get "expected" threat value. Real threat values were send to client since tbc and prior to remake of classic servers.
>  Did turtle change something and send threat data to clients?
>
>  If not, you just tested how threatmeter works. Not real threat values used by server.

I'm just telling you my independent testing on dummies came to the same numerical conclusions as this person did. I use TW threatmeter 1.3. The numbers I see on the threat table have always been accurate as far as people overtaking me on aggro or me overtaking on aggro, so I don't understand what point you are trying to make.

## Post 156488 by Rektthar — 2025-10-21T17:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156488#p156488 | page 1 | era: 1.18.1-announced-pre-release -->

> **Ellifta wrote: Tue Oct 21, 2025 3:21 pm**
> Defiance does count for other stances if you have defensive tactics talent, but the calculation is a bit confusing. Assuming you will always take 5/5 defiance as a warrior tank, the formula for default defensive stance threat is the following. Defiance is multiplicative, not additive.
>
>  t_dStanceDefiance = t_dStance × t_defiance
>  t_dStanceDefiance = 1,30 × 1,15 = 1,495
>
>  Per 1 point of damage, you do 1,495 point of threat in defensive stance normally. With defensive tactics talent 3/3 the following formula applies when calculating how much threat MULTIPLIER you have in other stances.
>
>  t_dTactics = (t_dStanceEffective - 1) × 1,8 + 1
>  Since you should be using Defiance at all times while tanking at max level we calculate:
>
>  t_dTactics = (1,495 - 1) × 1,8 + 1 = 1,891
>
>  1,891 is not the final multiplier though, because there's a hidden 0.8 threat modifier in battle and berserker stance for warriors, just like rogues and feral druids do. If you multiply 1.891 with 0.8 you end up at 1.512 threat multiplier in the end. This number is only marginally better than 1,495 without the talent, except there's one big difference. In battle stance you do 10% more damage and get access to overpower and execute. In rough terms this will lead to 15% more threat compared to not having any defensive tactic talent points and staying in defensive stance.
>
>  Source:
> [embed: https://docs.google.com/spreadsheets/d/1G0SqEf1Su67M0oEaiS8DYx-Nu9jlN-eOleoTLDn6PA4/preview#gid=90747100]

Thanks, so my assumption was correct, it is the first one. I just omitted defiance because how it works is clear to me.

## Post 156589 by Xudo (Grandmaster of Forum PvP) — 2025-10-22T09:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156589#p156589 | page 1 | era: 1.18.1-announced-pre-release -->

> **Ellifta wrote: Tue Oct 21, 2025 4:54 pm**
> I'm just telling you my independent testing on dummies came to the same numerical conclusions as this person did. I use TW threatmeter 1.3. The numbers I see on the threat table have always been accurate as far as people overtaking me on aggro or me overtaking on aggro, so I don't understand what point you are trying to make.

I read source code of TWThreat <https://github.com/MarcelineVQ/TWThreat> I got this link from <https://turtle-wow.fandom.com/wiki/TWThreat>
and haven't found any approximate calculations. It looks like it subscribes to some channel and gets threat values from it.
I don't have any questions to you, thank you for sharing info about your testing.

