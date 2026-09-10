---
title: "[Hunter] Fox as a pet: Attack speed"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1976"
topic_id: 1976
forum_id: 45
forum: "Hunter"
author: "Markuis"
author_authority: "player"
posted: "2021-08-22T20:31:00Z"
last_post: "2022-11-09T04:43:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:15:11Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Hunter] Fox as a pet: Attack speed

## Post 11768 by Markuis (Patch Note Conspiracy Theorist) — 2021-08-22T20:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11768#p11768 | page 1 | era: pre-1.18.1 -->

Hello everyone!

I have a simple question: what's the fox's attack speed? I've seen there are dofferent foxes so there should be different stats for each?

EDIT: I just learned how to check the attack speed. Its 10.2 for red fox.

## Post 28010 by Patientzer0 — 2022-10-26T18:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28010#p28010 | page 1 | era: pre-1.18.1 -->

How did you find this out? I'm curious about some of the new pets attack speeds as well.

## Post 28015 by Elisleris (Bug Report Enthusiast) — 2022-10-26T19:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28015#p28015 | page 1 | era: pre-1.18.1 -->

Blue fox 53 lvl from Winterspring has 1.2 attack speed

## Post 28040 by Markuis (Patch Note Conspiracy Theorist) — 2022-10-27T09:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28040#p28040 | page 1 | era: pre-1.18.1 -->

<https://www.wow-petopia.com/classic/attackspeed.php>

Iirc the beast lore spell tells you the AS of the beast.

## Post 28236 by Glavorli — 2022-11-01T12:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28236#p28236 | page 1 | era: pre-1.18.1 -->

> **Markuis wrote: Thu Oct 27, 2022 9:20 am**
> <https://www.wow-petopia.com/classic/attackspeed.php>
>
>  Iirc the beast lore spell tells you the AS of the beast.

You can also hover with your mouse over the pet character panel, and then hover over its damage.
The tooltip will show you the attack speed directly in game.

## Post 28795 by Nedyar — 2022-11-09T04:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28795#p28795 | page 1 | era: pre-1.18.1 -->

You can know its speed without taming it, by targeting and runing the following code:
Code: Select all

```
/run mainSpeed, offSpeed = UnitAttackSpeed("target") print(format("%s: attack speed = %.2f", GetUnitName("target"), mainSpeed))
```

(Source: <https://www.wow-petopia.com/classic/attackspeed.php>)

