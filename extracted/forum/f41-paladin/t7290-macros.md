---
title: "Macros"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7290"
topic_id: 7290
forum_id: 41
forum: "Paladin"
author: "Plerk125"
author_authority: "player"
posted: "2023-05-17T06:00:00Z"
last_post: "2023-05-17T10:30:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T07:59:06Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macros

## Post 46183 by Plerk125 — 2023-05-17T06:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46183#p46183 | page 1 | era: pre-1.18.1 -->

Hi,

I looked up how to make specific macros and none of them work. Is this due to the version of the game when certain macros were simply not working?

Specifically I am looking for a "judge --> seal" macro like:

#showtooltipp Judgement (or Seal of Command)
/cast Judgement
/stopcasting
/cast Seal of Command

Any help welcome!

## Post 46185 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-05-17T06:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46185#p46185 | page 1 | era: pre-1.18.1 -->

The absolutely Vanilla version of this macro should be something like…
Code: Select all

```
/run --CastSpellByName("Judgement");
/cast Judgement
/run SpellStopCasting();
/run CastSpellByName("Seal of Command");
```

Notes
- "/run CastSpellByName("")" casts the **highest rank available**.  For spells without ranks, "/cast" is simplier.
- Adding two dashes before the first "CastSpellByName("")" causes the macro's icon to display the **cooldown** or **availability** of the quoted spell.  Vanilla never had proper "spell being casted" tooltips.
- There are AddOns that can add the *Burning Crusade*-style shortcuts in, as well as proper tooltips and automatic icon changing for macro icons.

 
Hope this helps!

## Post 46189 by Plerk125 — 2023-05-17T07:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46189#p46189 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Wed May 17, 2023 6:51 am**
> The absolutely Vanilla version of this macro should be something like…
>  Code: Select all
>
> ```
> /run --CastSpellByName("Judgement");
> /cast Judgement
> /run SpellStopCasting();
> /run CastSpellByName("Seal of Command");
> ```
>
>  Notes
> - "/run CastSpellByName("")" casts the **highest rank available**.  For spells without ranks, "/cast" is simplier.
> - Adding two dashes before the first "CastSpellByName("")" causes the macro's icon to display the **cooldown** or **availability** of the quoted spell.  Vanilla never had proper "spell being casted" tooltips.
> - There are AddOns that can add the *Burning Crusade*-style shortcuts in, as well as proper tooltips and automatic icon changing for macro icons.
>
>
>
>   
>  Hope this helps!

Will try after work. Thanks a lot, sir!

## Post 46209 by Illyria (Barrens Chat Casualty) — 2023-05-17T10:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46209#p46209 | page 1 | era: pre-1.18.1 -->

Download the addon SUPER MACRO

## Post 46210 by Ibux (Patch Note Conspiracy Theorist) — 2023-05-17T10:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46210#p46210 | page 1 | era: pre-1.18.1 -->

check this for 1.12 macros <https://github.com/Meridaw/Vanilla-Macros>

