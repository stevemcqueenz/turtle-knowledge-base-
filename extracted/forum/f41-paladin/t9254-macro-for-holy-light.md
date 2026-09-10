---
title: "Macro for Holy Light"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=9254"
topic_id: 9254
forum_id: 41
forum: "Paladin"
author: "Antonioparolisi"
author_authority: "player"
posted: "2023-09-01T07:43:00Z"
last_post: "2023-09-04T19:57:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T07:58:31Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macro for Holy Light

## Post 60416 by Antonioparolisi — 2023-09-01T07:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60416#p60416 | page 1 | era: pre-1.18.1 -->

Hello, I'm trying to make a macro working for healing with Holy Light, but it seems doesn't work. I'm trying to follow [https://us.forums.blizzard.com/en/wow#b ... ng-macro-4](https://us.forums.blizzard.com/en/wow#base-healing-macro-4) to make my Holy Light spell smarter. But when I'm in solo game says me that I'm not in a party, but it doesn't have to work even if I'm in solo?

My current macro is: Code: Select all

```
/cast [mod:alt,@player] [@mouseover,help,nodead] [help] [@targettarget,help,nodead] [] Holy Light
```

But it doesn't works even if it's simple: Code: Select all

```
/cast [] Holy Light
```

Works only if I write: Code: Select all

```
/cast Holy Light
```

Could you help me?

## Post 60492 by Geojak (Grandmaster of Forum PvP) — 2023-09-01T17:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60492#p60492 | page 1 | era: pre-1.18.1 -->

Your first macro is wrong, this isn't real or classic
I hast to be
/cast [conditions] spell name; [] spell ; spell
The ; can be read as else
What you did with [] [] []  does not work, you need to put a spell after each [] and separate with ;

Here is how it could look like
/cast [@mouseover help] Holy Light; Holy Light

Oh and of course you need roid macro addon to use tbc macro formats like these

*Last edited by Geojak on Fri Sep 01, 2023 5:30 pm, edited 1 time in total.*

## Post 60493 by Geojak (Grandmaster of Forum PvP) — 2023-09-01T17:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60493#p60493 | page 1 | era: pre-1.18.1 -->

Also I woukd advice agaiant these mega macro. When I first started i also. Rested the same thing. Good learning experience for lua, but ultimately not usefull. Too little controlled to what you acutally gonna heal, imo too complex

## Post 60840 by Antonioparolisi — 2023-09-04T16:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60840#p60840 | page 1 | era: pre-1.18.1 -->

> **Geojak wrote: Fri Sep 01, 2023 5:26 pm**
> Oh and of course you need roid macro addon to use tbc macro formats like these

I don't know what is this addon, do you have a link?

## Post 60847 by Ibux (Patch Note Conspiracy Theorist) — 2023-09-04T17:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60847#p60847 | page 1 | era: pre-1.18.1 -->

> **Antonioparolisi wrote: Mon Sep 04, 2023 4:33 pm**
> > **Geojak wrote: Fri Sep 01, 2023 5:26 pm**
> > Oh and of course you need roid macro addon to use tbc macro formats like these
>
>   I don't know what is this addon, do you have a link?

you find links to most turtle wow addons on the wiki
<https://turtle-wow.fandom.com/wiki/Addons>

## Post 60890 by Antonioparolisi — 2023-09-04T19:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60890#p60890 | page 1 | era: pre-1.18.1 -->

Also, do you have a list of useful macro for paladin working on Turtle?

