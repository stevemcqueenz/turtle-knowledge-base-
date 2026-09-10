---
title: "Keybinging Problem"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8887"
topic_id: 8887
forum_id: 3
forum: "Help & Support"
author: "Mavdog"
author_authority: "player"
posted: "2023-08-14T19:57:00Z"
last_post: "2023-08-15T00:06:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T09:09:16Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Keybinging Problem

## Post 57326 by Mavdog — 2023-08-14T19:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57326#p57326 | page 1 | era: pre-1.18.1 -->

I'm having an issue with binding the Bottom Left ActionBar,
I've bound Special Action Button 1 though 10 to function keys F1 though F10 but only F1 works. I've searched online everywhere to find a solution and rebound and removed the bars numerous times but had no luck.
Does anyone know a reason for this and or a solution?

Thanks

## Post 57328 by Geojak (Grandmaster of Forum PvP) — 2023-08-14T20:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57328#p57328 | page 1 | era: pre-1.18.1 -->

F2 etc works, for me no issue. Do you have some special laptop function on these?

## Post 57332 by Mavdog — 2023-08-14T21:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57332#p57332 | page 1 | era: pre-1.18.1 -->

> **Geojak wrote: Mon Aug 14, 2023 8:38 pm**
> F2 etc works, for me no issue. Do you have some special laptop function on these?

Nope, I'm playing on my desktop and my keyboard is working correctly, I've even tried an online keyboard tester and on other games and all is working well.

## Post 57335 by Sinrek (Grandmaster of Forum PvP) — 2023-08-14T23:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57335#p57335 | page 1 | era: pre-1.18.1 -->

> **Mavdog wrote: Mon Aug 14, 2023 7:57 pm**
> I'm having an issue with binding the Bottom Left ActionBar,
>  I've bound Special Action Button 1 though 10 to function keys F1 though F10 but only F1 works. I've searched online everywhere to find a solution and rebound and removed the bars numerous times but had no luck.
>  Does anyone know a reason for this and or a solution?
>
>  Thanks

Bottom Left ActionBar (BLA) has nothing to do with Special Action Buttons (SAB). SAB is referring to class-specific action buttons, which would be Auras for paladins, stances for warriors and forms for druids, as well as stealth for rogues.

## Post 57338 by Mavdog — 2023-08-15T00:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57338#p57338 | page 1 | era: pre-1.18.1 -->

> **Sinrek wrote: Mon Aug 14, 2023 11:26 pm**
> > **Mavdog wrote: Mon Aug 14, 2023 7:57 pm**
> > I'm having an issue with binding the Bottom Left ActionBar,
> >  I've bound Special Action Button 1 though 10 to function keys F1 though F10 but only F1 works. I've searched online everywhere to find a solution and rebound and removed the bars numerous times but had no luck.
> >  Does anyone know a reason for this and or a solution?
> >
> >  Thanks
>
>   Bottom Left ActionBar (BLA) has nothing to do with Special Action Buttons (SAB). SAB is referring to class-specific action buttons, which would be Auras for paladins, stances for warriors and forms for druids, as well as stealth for rogues.

Hey thanks, I was literally just coming on here to say just mostly that and that I'd figured it out. What had confused me was the F1 was bound to my class specific (rogue stealth) and I had stealth in what would be F1 of my Bottom Left Action Button 1, so when I tested it I stealthed and there my problem started, I though I had the correct bar to be binding. I just logged in just a few moments ago to have another look and this time scrolled right down and found MultirActionBar Bindings and under it Bottom Left Action Button 1-12, bound those to my function keys and all good.

I feel so stupid now that I'd missed it, I only played this game for like a decade before quitting first time round.

I was even looking at my bindings-cache.wtf file and looking at github for comparison.

Thanks again.

