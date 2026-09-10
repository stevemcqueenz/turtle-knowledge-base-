---
title: "Survival has broken the addon Altoholic..."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5578"
topic_id: 5578
forum_id: 18
forum: "AddOns"
author: "Messenjah"
author_authority: "player"
posted: "2023-02-10T23:01:00Z"
last_post: "2023-03-16T07:01:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T10:32:39Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Survival has broken the addon Altoholic...

## Post 34514 by Messenjah — 2023-02-10T23:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34514#p34514 | page 1 | era: pre-1.18.1 -->

Hi,

Altoholic tracks data about your characters. Learning Survival on a character has broken Altoholic as it doesn't know Survival as a Secondary skill.

I don't know the .lua language but looking at it I decided to add Survival to the bottom of any secondary profession list in various Altoholic files conforming to the format. That hasn't worked...

Can anyone advise?

## Post 34693 by Blehz — 2023-02-13T07:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34693#p34693 | page 1 | era: pre-1.18.1 -->

Check this branch, it has specific TW fixes:
<https://github.com/nehswu/Altoholic_Vanilla>

Haven't tested it yet though.

## Post 34701 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-13T09:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34701#p34701 | page 1 | era: pre-1.18.1 -->

> **Blehz wrote: Mon Feb 13, 2023 7:21 am**
> Check this branch, it has specific TW fixes:
>  <https://github.com/nehswu/Altoholic_Vanilla>
>
>  Haven't tested it yet though.

Did you mean to link this fork? <https://github.com/refaim/Altoholic-turtle>

## Post 34729 by Messenjah — 2023-02-13T22:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34729#p34729 | page 1 | era: pre-1.18.1 -->

Oh wow. I don't think this is in the master list. I didn't think to check forks. Thank you!

## Post 34736 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-14T01:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34736#p34736 | page 1 | era: pre-1.18.1 -->

> **Messenjah wrote: Mon Feb 13, 2023 10:55 pm**
> Oh wow. I don't think this is in the master list. I didn't think to check forks. Thank you!

Haven't tried it myself, but you're welcome and I hope it works!

## Post 34914 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-16T12:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34914#p34914 | page 1 | era: pre-1.18.1 -->

Update on this. The forked version *mostly* works, with a few hiccups. Survival isn't shown on the skill list, but *is* shown on the recipes list, though you can't actually look at recipes for it. Also, Turtle-specific reputations don't appear to be listed. Checking the commits for the main branch, it lists Turtle fixes in there too, so it might be worth just using that, though I can't say for sure that it will make a difference.

## Post 37942 by Blehz — 2023-03-16T07:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37942#p37942 | page 1 | era: pre-1.18.1 -->

> **Kefke wrote: Mon Feb 13, 2023 9:39 am**
> > **Blehz wrote: Mon Feb 13, 2023 7:21 am**
> > Check this branch, it has specific TW fixes:
> >  <https://github.com/nehswu/Altoholic_Vanilla>
> >
> >  Haven't tested it yet though.
>
>   Did you mean to link this fork? <https://github.com/refaim/Altoholic-turtle>

Late reply but the one I linked is one commit ahead.
For me it has been working fine although I mainly use it for searching items and item tooltip, which alts have what.

