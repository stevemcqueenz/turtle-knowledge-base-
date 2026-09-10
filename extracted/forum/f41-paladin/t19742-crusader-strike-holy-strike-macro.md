---
title: "crusader strike + holy strike macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19742"
topic_id: 19742
forum_id: 41
forum: "Paladin"
author: "Rindexxx"
author_authority: "player"
posted: "2025-06-05T23:46:00Z"
last_post: "2025-07-29T19:22:00Z"
post_count: 11
pages: 1
fetched: "2026-09-10T07:56:10Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# crusader strike + holy strike macro

## Post 134455 by Rindexxx (Barrens Chat Casualty) — 2025-06-05T23:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134455#p134455 | page 1 | era: pre-1.18.1 -->

is there a macro for it to use crusader strike first and then holy strike and so on? on retail that would be /castsequence reset=combat crusader strike, holy strike

## Post 134480 by Elisleris (Bug Report Enthusiast) — 2025-06-06T06:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134480#p134480 | page 1 | era: pre-1.18.1 -->

For what spec are you asking about macro? are you need to maintain 3 stacks of zeal by cru strike? And after use holy strike / and cru strike to renew buff?

## Post 134520 by Rindexxx (Barrens Chat Casualty) — 2025-06-06T14:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134520#p134520 | page 1 | era: pre-1.18.1 -->

for retri

## Post 134690 by Gildark (Patch Note Conspiracy Theorist) — 2025-06-07T23:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134690#p134690 | page 1 | era: pre-1.18.1 -->

/cast [nomybuff:Holy_Might>=6, nomybuff:Zeal<#3] Holy Strike(Rank #)
/cast Crusader Strike(Rank #)

This will use CS until you get 3 stacks of Zeal then HS for buff and continue CSing until your buff is less than 6s duration.

## Post 134750 by Rindexxx (Barrens Chat Casualty) — 2025-06-08T14:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134750#p134750 | page 1 | era: pre-1.18.1 -->

> **Gildark wrote: Sat Jun 07, 2025 11:02 pm**
> /cast [nomybuff:Holy_Might>=6, nomybuff:Zeal<#3] Holy Strike(Rank #)
>  /cast Crusader Strike(Rank #)
>
>  This will use CS until you get 3 stacks of Zeal then HS for buff and continue CSing until your buff is less than 6s duration.

doesnt work it only uses crusader strike all the time

## Post 134978 by Gildark (Patch Note Conspiracy Theorist) — 2025-06-10T04:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134978#p134978 | page 1 | era: pre-1.18.1 -->

> **rindexxx wrote: Sun Jun 08, 2025 2:52 pm**
> > **Gildark wrote: Sat Jun 07, 2025 11:02 pm**
> > /cast [nomybuff:Holy_Might>=6, nomybuff:Zeal<#3] Holy Strike(Rank #)
> >  /cast Crusader Strike(Rank #)
> >
> >  This will use CS until you get 3 stacks of Zeal then HS for buff and continue CSing until your buff is less than 6s duration.
>
>   doesnt work it only uses crusader strike all the time

Make sure you have CleveRoidMacros

## Post 135529 by Rindexxx (Barrens Chat Casualty) — 2025-06-13T01:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135529#p135529 | page 1 | era: pre-1.18.1 -->

> **Gildark wrote: Tue Jun 10, 2025 4:10 am**
> > **rindexxx wrote: Sun Jun 08, 2025 2:52 pm**
> > > **Gildark wrote: Sat Jun 07, 2025 11:02 pm**
> > > /cast [nomybuff:Holy_Might>=6, nomybuff:Zeal<#3] Holy Strike(Rank #)
> > >  /cast Crusader Strike(Rank #)
> > >
> > >  This will use CS until you get 3 stacks of Zeal then HS for buff and continue CSing until your buff is less than 6s duration.
> >
> >   doesnt work it only uses crusader strike all the time
>
>   Make sure you have CleveRoidMacros

i did this #showtooltip
/castsequence reset=10 Blessing of Sanctuary(Rank 2), Righteous Fury, Retribution Aura(Rank 3)
had to instal the roidmacro addon and the superwow hook

## Post 136262 by Korythael — 2025-06-19T07:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136262#p136262 | page 1 | era: pre-1.18.1 -->

> **rindexxx wrote: Sun Jun 08, 2025 2:52 pm**
> > **Gildark wrote: Sat Jun 07, 2025 11:02 pm**
> > /cast [nomybuff:Holy_Might>=6, nomybuff:Zeal<#3] Holy Strike(Rank #)
> >  /cast Crusader Strike(Rank #)
> >
> >  This will use CS until you get 3 stacks of Zeal then HS for buff and continue CSing until your buff is less than 6s duration.
>
>   doesnt work it only uses crusader strike all the time

for me it works, I think you need superwow too

## Post 142096 by Rindexxx (Barrens Chat Casualty) — 2025-07-29T16:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=142096#p142096 | page 1 | era: pre-1.18.1 -->

great news everyone with the help of chat gpt i made a macro that uses holy strike if the holy might buff isint there and if it is, then crusader strike. without any addons or mods

/run i=0 h=0 while 1 do b=GetPlayerBuff(i,"HELPFUL") if b==-1 then break end if strfind(GetPlayerBuffTexture(b),"Spell_Holy_HolyNova") then h=1 end i=i+1 end if h==1 then CastSpellByName("Crusader Strike") else CastSpellByName("Holy Strike") end

the holy might icon is holy nova

## Post 142097 by SvenS2 (Bug Report Enthusiast) — 2025-07-29T16:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=142097#p142097 | page 1 | era: pre-1.18.1 -->

> **rindexxx wrote: Tue Jul 29, 2025 4:13 pm**
> great news everyone with the help of chat gpt i made a macro that uses holy strike if the holy might buff isint there and if it is, then crusader strike. without any addons or mods
>
>  /run i=0 h=0 while 1 do b=GetPlayerBuff(i,"HELPFUL") if b==-1 then break end if strfind(GetPlayerBuffTexture(b),"Spell_Holy_HolyNova") then h=1 end i=i+1 end if h==1 then CastSpellByName("Crusader Strike") else CastSpellByName("Holy Strike") end
>
>  the holy might icon is holy nova

Cool, thanks for sharing

## Post 142117 by excin (Barrens Chat Casualty) — 2025-07-29T19:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=142117#p142117 | page 1 | era: pre-1.18.1 -->

> **rindexxx wrote: Tue Jul 29, 2025 4:13 pm**
> great news everyone with the help of chat gpt i made a macro that uses holy strike if the holy might buff isint there and if it is, then crusader strike. without any addons or mods
>
>  /run i=0 h=0 while 1 do b=GetPlayerBuff(i,"HELPFUL") if b==-1 then break end if strfind(GetPlayerBuffTexture(b),"Spell_Holy_HolyNova") then h=1 end i=i+1 end if h==1 then CastSpellByName("Crusader Strike") else CastSpellByName("Holy Strike") end
>
>  the holy might icon is holy nova

This will not work in raid because eventually you'll have enough buffs to exceed what the client draws

[The addon I posted here](https://forum.turtlecraft.gg/viewtopic.php?t=20297) is just a huge macro I turned into a slash command. using timers instead.

It doesn't require super wow, and will detect the cast from the combat log messages

<https://github.com/Excinerus/ExAutoCSHS>

