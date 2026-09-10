---
title: "Arcane Missiles Macro Help"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8847"
topic_id: 8847
forum_id: 43
forum: "Mage"
author: "Janus"
author_authority: "player"
posted: "2023-08-13T05:58:00Z"
last_post: "2023-08-13T10:56:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:05:58Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Arcane Missiles Macro Help

## Post 57047 by Janus — 2023-08-13T05:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57047#p57047 | page 1 | era: pre-1.18.1 -->

I'm looking for a working Arcane Missiles macro that won't break channeling. I have tried the following but none works.
Code: Select all

```
/script if not CastingBarFrame.channeling then CastSpellByName("Arcane Missiles") end
```

Code: Select all

```
/run if(CastingBarFrame.casting ~= 1 and CastingBarFrame.channeling ~= 1) then CastSpellByName("Arcane Missiles"); end;
```

## Post 57048 by Ibux (Patch Note Conspiracy Theorist) — 2023-08-13T06:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57048#p57048 | page 1 | era: pre-1.18.1 -->

if you use pfUI then you need to use this one: Code: Select all

```
/run _ = pfUI.env.UnitChannelInfo("player") or CastSpellByName("Arcane Missiles")
```

and if you use Shagutweaks you can use this one: Code: Select all

```
/run _ = ShaguTweaks.UnitChannelInfo("player") or CastSpellByName("Arcane Missiles")
```

## Post 57049 by Janus — 2023-08-13T06:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57049#p57049 | page 1 | era: pre-1.18.1 -->

> **Ibux wrote: Sun Aug 13, 2023 6:09 am**
> if you use pfUI then you need to use this one: Code: Select all
>
> ```
> /run _ = pfUI.env.UnitChannelInfo("player") or CastSpellByName("Arcane Missiles")
> ```

It worked! Can't believe it's UI addon that breaks macro lol. Thank you so much!

## Post 57065 by Geojak (Grandmaster of Forum PvP) — 2023-08-13T10:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57065#p57065 | page 1 | era: pre-1.18.1 -->

> **Ibux wrote: Sun Aug 13, 2023 6:09 am**
> if you use pfUI then you need to use this one: Code: Select all
>
> ```
> /run _ = pfUI.env.UnitChannelInfo("player") or CastSpellByName("Arcane Missiles")
> ```
>
>   and if you use Shagutweaks you can use this one: Code: Select all
>
> ```
> /run _ = ShaguTweaks.UnitChannelInfo("player") or CastSpellByName("Arcane Missiles")
> ```

wow thx alot, this has been bothing me alot to the point of not playing my arcan mage

