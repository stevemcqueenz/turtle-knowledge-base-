---
title: "Is Holy Resistance real?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=12246"
topic_id: 12246
forum_id: 44
forum: "Priest"
author: "Zvyrhol"
author_authority: "player"
posted: "2023-12-17T16:07:00Z"
last_post: "2023-12-17T20:42:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T08:08:45Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Is Holy Resistance real?

## Post 81512 by Zvyrhol (Grandmaster of Forum PvP) — 2023-12-17T16:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81512#p81512 | page 1 | era: pre-1.18.1 -->

I was reading a document today about spell resistances and spell hit calculations, you can read it here if you are interested: <https://royalgiraffe.github.io/resist-guide>

While reading this wall of text, I came across reference:

> *There is also Holy, but almost no effects add Holy Resistance so is almost always 0, with an exception of NPCs having level-based resistance to Holy as discussed later.*

This puzzled me because until now I thought Holy Resistance didn't exist or even if it did exist, it was always equal to 0. So I googled some topics regarding Holy Resistance and it seems that every enemy gets +5 to all resistances multiplied by level difference between enemy and you (this works only if your enemy has higher level than you). So raid bosses, which are lv 63, have always +15 extra resistances against you. The most interesting thing is that these resistances seem to include Holy Resistance - this resistance should affect your holy spells so they will be resisted more often.

I haven't tested this yet so I write this post. Would be cool if fellow Smite priests or people who know resistances well, confirm my discovery.

EDIT:
Conclusion regarding Smite priests is that they can have up to +16% bonus spell hit in order to fully increase the chance to hit the raid bosses, they don't need any item that decreases resistance because level-difference-resistance is impenetrable. They will always have at least 1% miss chance though. It's worth noting that in PVP you can achieve the same thing with only +3% spell hit from items.

FINAL EDIT:
Level-based resistance for holy spells doesn't exist! At least in Turtle WoW. It was removed from the game: [viewtopic.php?p=27521&hilit=holy+resist ... age%20Scar](https://forum.turtlecraft.gg/viewtopic.php?p=27521&hilit=holy+resistance#p27521:~:text=has%20been%20increased.-,Removed%20level%20based%20resist%20chance%20from%20Holy%20spells.%20Not%20to%20be%20confused%20with%20chance%20to%20miss.,-Ferocious%20Rage%20Scar)
It should still be present in other vanilla private servers/Classic though.

*Last edited by Zvyrhol on Sun Dec 17, 2023 8:46 pm, edited 2 times in total.*

## Post 81522 by Blackduck (Barrens Chat Casualty) — 2023-12-17T17:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81522#p81522 | page 1 | era: pre-1.18.1 -->

You can use this macro to check a mobs armor value and resistance levels

/script u=UnitResistance y="target" a=u(y ,0) h=u(y ,1) f=u(y ,2) n=u(y ,3) fr=u(y ,4) s=u(y ,5) z=u(y ,6) SendChatMessage(UnitName(y).." has "..a.." Armor, "..h.." HR, "..f.." FR, "..n.." NR, "..fr.." FrR, "..s.." SR and "..z.." AR.", SAY)

Every enemy in the game including bosses that I've checked has 0 holy resist.

The only enemies in the game that actually "resist" holy spells are chromag and the drakkonoids in bwl but I think that's just a general spell resist and not because they have any holy resistance.  They just never get a weakness to holy magic like they do with other types of spells.

## Post 81524 by Atreidon (Grandmaster of Forum PvP) — 2023-12-17T17:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81524#p81524 | page 1 | era: pre-1.18.1 -->

Decreasing enemy level based resistences via gear is not possible. Your source even says:

> This level based resistance cannot be reduced even by Spell Penetration or Curse of Shadow/Elements - the NPC always will have at least this much resistance score, against non-binary spells.

This remains true for Holy, wether they do have lvl based resistences against holy or not. You couldn't pierce them eitherway with 1.12.1 resistence mechanics in play

## Post 81526 by Zvyrhol (Grandmaster of Forum PvP) — 2023-12-17T18:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81526#p81526 | page 1 | era: pre-1.18.1 -->

> **Blackduck wrote: Sun Dec 17, 2023 5:29 pm**
> You can use this macro to check a mobs armor value and resistance levels
>
>  /script u=UnitResistance y="target" a=u(y ,0) h=u(y ,1) f=u(y ,2) n=u(y ,3) fr=u(y ,4) s=u(y ,5) z=u(y ,6) SendChatMessage(UnitName(y).." has "..a.." Armor, "..h.." HR, "..f.." FR, "..n.." NR, "..fr.." FrR, "..s.." SR and "..z.." AR.", SAY)
>
>  Every enemy in the game including bosses that I've checked has 0 holy resist.
>
>  The only enemies in the game that actually "resist" holy spells are chromag and the drakkonoids in bwl but I think that's just a general spell resist and not because they have any holy resistance.  They just never get a weakness to holy magic like they do with other types of spells.

Are you sure this macro includes extra resistance that comes from level difference? No doubt every mob has 0 basic resistance but the question is: does your macro show proper resistances including your level difference? I'm still not convinced. Probably the easiest way to find out would be joining Molten Core or any other raid as lv 59. Or even Karazhan Crypt, I remember there was a boss with skull, the third one iirc. If macro shows that the boss with skull has +5 more resistances than on your lv 60 character, that will mean Holy Resistance really doesn't affect holy spells no matter how big is difference in levels between you and enemy. If macro shows the same numbers, then we can assume macro shows only unit's resistance without calculating level difference.

## Post 81527 by Zvyrhol (Grandmaster of Forum PvP) — 2023-12-17T18:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81527#p81527 | page 1 | era: pre-1.18.1 -->

> **Atreidon wrote: Sun Dec 17, 2023 5:48 pm**
> Decreasing enemy level based resistences via gear is not possible. Your source even says:
>
> > This level based resistance cannot be reduced even by Spell Penetration or Curse of Shadow/Elements - the NPC always will have at least this much resistance score, against non-binary spells.
>
>   This remains true for Holy, wether they do have lvl based resistences against holy or not. You couldn't pierce them eitherway with 1.12.1 resistence mechanics in play

Thanks, I will correct my post so as not to mislead anyone.

## Post 81538 by Balake (Bug Report Enthusiast) — 2023-12-17T19:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81538#p81538 | page 1 | era: pre-1.18.1 -->

Lots of misinformation here
[viewtopic.php?p=27521&hilit=holy+resist ... age%20Scar](https://forum.turtlecraft.gg/viewtopic.php?p=27521&hilit=holy+resistance#p27521:~:text=has%20been%20increased.-,Removed%20level%20based%20resist%20chance%20from%20Holy%20spells.%20Not%20to%20be%20confused%20with%20chance%20to%20miss.,-Ferocious%20Rage%20Scar)

"Removed level based resist chance from Holy spells. Not to be confused with chance to miss."
If this change is still working and not bugged, that means while other magic schools have 24 unpenetrable resistance on level 63 mobs, for holy there is no unpenetrable resistance.

## Post 81543 by Zvyrhol (Grandmaster of Forum PvP) — 2023-12-17T20:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81543#p81543 | page 1 | era: pre-1.18.1 -->

> **Balake wrote: Sun Dec 17, 2023 7:58 pm**
> Lots of misinformation here
>  [viewtopic.php?p=27521&hilit=holy+resist ... age%20Scar](https://forum.turtlecraft.gg/viewtopic.php?p=27521&hilit=holy+resistance#p27521:~:text=has%20been%20increased.-,Removed%20level%20based%20resist%20chance%20from%20Holy%20spells.%20Not%20to%20be%20confused%20with%20chance%20to%20miss.,-Ferocious%20Rage%20Scar)
>
>  "Removed level based resist chance from Holy spells. Not to be confused with chance to miss."
>  If this change is still working and not bugged, that means while other magic schools have 24 unpenetrable resistance on level 63 mobs, for holy there is no unpenetrable resistance.

Thanks, I haven't seen this post. So it seems Turtle WoW is the only vanilla server that removed this resistance. It should still be present in other 1.12 vanilla servers though. Thanks again for clarifying.

