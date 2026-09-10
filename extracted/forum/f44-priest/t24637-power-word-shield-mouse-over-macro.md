---
title: "Power Word: Shield Mouse Over Macro?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24637"
topic_id: 24637
forum_id: 44
forum: "Priest"
author: "Jozer"
author_authority: "player"
posted: "2026-03-31T17:55:00Z"
last_post: "2026-04-01T16:38:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:06:29Z"
era: "post-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Power Word: Shield Mouse Over Macro?

## Post 173474 by Jozer — 2026-03-31T17:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=173474#p173474 | page 1 | era: post-1.18.1 -->

Hello,
Is there a way to do a mouseover macro without the PF addons?
I can do mouseover macros with other spells like Renew or Lesser Heal just fine!

"#showtooltip
/cast [@mouseover, help, nodead] Lesser Heal"

But when I try to do this with Power Word: Shield, it mistakenly casts it on me! Just curious to know if this is intentional or a possible bug.

Thank you!!

## Post 173501 by Azcron (Patch Note Conspiracy Theorist) — 2026-03-31T20:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=173501#p173501 | page 1 | era: post-1.18.1 -->

I dont use PFui but you cant try /pfcast Power Word: Shield or something like:

/run TargetUnit("mouseover")
/cast Power Word: Shield
/run TargetLastTarget()

## Post 173528 by Crake (Patch Note Conspiracy Theorist) — 2026-04-01T00:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=173528#p173528 | page 1 | era: post-1.18.1 -->

> **Azcron wrote: Tue Mar 31, 2026 8:36 pm**
> I dont use PFui but you cant try /pfcast Power Word: Shield or something like:
>
>  /run TargetUnit("mouseover")
>  /cast Power Word: Shield
>  /run TargetLastTarget()

That macro will wig out if you mouse over your current target, and will target your previous target.

You need to add in an if statement to check if the mouseover target, and your current target are the same, and only target last target if they’re different.

I’d share my macro for it, but I’m not at home right now

## Post 173658 by Edem87 — 2026-04-01T16:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=173658#p173658 | page 1 | era: post-1.18.1 -->

Install CleveRoidMacros and you can use:

#showtooltip
/cast [@mouseover alive help] Power Word: Shield;Power Word: Shield

