---
title: "Shift modifier macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13206"
topic_id: 13206
forum_id: 43
forum: "Mage"
author: "Anythinggoes"
author_authority: "player"
posted: "2024-02-22T23:52:00Z"
last_post: "2024-05-07T19:14:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:05:39Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Shift modifier macro

## Post 88514 by Anythinggoes — 2024-02-22T23:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88514#p88514 | page 1 | era: pre-1.18.1 -->

Any macros that work with modifiers on this server?
For example, you cast Fireball, and with shift, it casts Pyro?

## Post 88524 by Imonobor (Bug Report Enthusiast) — 2024-02-23T06:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88524#p88524 | page 1 | era: pre-1.18.1 -->

Yes, there are ways to do this, but the icon and tooltip won't change when holding down shift, as it would on more recent expansions.

To solve this, I use Discord Action Bars (DAB), and have set the "shift" key to page my bars to another page. So while holding down shift Bar1 becomes Bar5 for example.

The trouble is that you have to fill Bar5 with the same spells as Bar1 for spells you DON'T want to change when holding down shift. This can get annoying when learning new spells and ranks. (I usually just leave Rank 1 spells on the shifted bar)

Another trouble is that you only have a total of 10 action bars (12 slots each). If you also want to have Ctrl-paging and Alt-paging, that's 4 pages per bar, so you can only have 2 bars that page, and 2 that don't. And the abovementioned problem with filling all those pages when training spells is amplified.

But at least it doesn't waste macro space and works fast and snappy.

If you use PfUI, you can still use DAB with it, you just have to disable PfUI's own action bars.
If you still want to go the macro route, you might need to install some macro addons (like Roid-Macros) to make it work.

## Post 88526 by Sharq — 2024-02-23T07:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88526#p88526 | page 1 | era: pre-1.18.1 -->

Example how to do it (other spell though):
> /script if IsShiftKeyDown() then CastSpellByName("Frostbolt (Rank 1)") else CastSpellByName("Frostbolt") end

Source: [https://github.com/GitGurky/Vanilla-Mac ... ostbolt.md](https://github.com/GitGurky/Vanilla-Macros/blob/master/Mage/Frostbolt.md)

## Post 88586 by Anythinggoes — 2024-02-23T20:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88586#p88586 | page 1 | era: pre-1.18.1 -->

Thanks.

## Post 94204 by Walhall — 2024-05-07T11:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94204#p94204 | page 1 | era: pre-1.18.1 -->

> **Sharq wrote: Fri Feb 23, 2024 7:17 am**
> Example how to do it (other spell though):
> > /script if IsShiftKeyDown() then CastSpellByName("Frostbolt (Rank 1)") else CastSpellByName("Frostbolt") end
>
>   Source: [https://github.com/GitGurky/Vanilla-Mac ... ostbolt.md](https://github.com/GitGurky/Vanilla-Macros/blob/master/Mage/Frostbolt.md)

Does not work the modifier for me, any tips?

## Post 94226 by Zeran (Patch Note Conspiracy Theorist) — 2024-05-07T19:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94226#p94226 | page 1 | era: pre-1.18.1 -->

> **Walhall wrote: Tue May 07, 2024 11:45 am**
> > **Sharq wrote: Fri Feb 23, 2024 7:17 am**
> > Example how to do it (other spell though):
> > > /script if IsShiftKeyDown() then CastSpellByName("Frostbolt (Rank 1)") else CastSpellByName("Frostbolt") end
> >
> >   Source: [https://github.com/GitGurky/Vanilla-Mac ... ostbolt.md](https://github.com/GitGurky/Vanilla-Macros/blob/master/Mage/Frostbolt.md)
>
>
>  Does not work the modifier for me, any tips?

I think there isn't meant to be a space in the CastSpellByName() function spell name. So try
> /script if IsShiftKeyDown() then CastSpellByName("Frostbolt(Rank 1)") else CastSpellByName("Frostbolt") end

instead.

