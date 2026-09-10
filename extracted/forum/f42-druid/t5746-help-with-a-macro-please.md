---
title: "Help with a macro please"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5746"
topic_id: 5746
forum_id: 42
forum: "Druid"
author: "Eynarxdd"
author_authority: "player"
posted: "2023-02-25T01:22:00Z"
last_post: "2023-10-25T12:32:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T08:03:12Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Help with a macro please

## Post 36031 by Eynarxdd — 2023-02-25T01:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36031#p36031 | page 1 | era: pre-1.18.1 -->

Macro for rejuvenation and healing touch?  any other usefull macro like wrath and moonfire or what ever..
please thank you !!

## Post 36047 by Ibux (Patch Note Conspiracy Theorist) — 2023-02-25T07:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36047#p36047 | page 1 | era: pre-1.18.1 -->

Check out this link if you want vanilla macros. <https://github.com/Meridaw/Vanilla-Macros>

Or download this addon if you want to use tbc+ macros <https://github.com/DennisWG/Roid-Macros>

## Post 36111 by Eynarxdd — 2023-02-25T22:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36111#p36111 | page 1 | era: pre-1.18.1 -->

> **Ibux wrote: Sat Feb 25, 2023 7:36 am**
> Check out this link if you want vanilla macros. <https://github.com/Meridaw/Vanilla-Macros>
>
>  Or download this addon if you want to use tbc+ macros <https://github.com/DennisWG/Roid-Macros>

How you open this roid macro interface in game?

## Post 72917 by Snnail — 2023-10-23T02:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72917#p72917 | page 1 | era: pre-1.18.1 -->

> **Eynarxdd wrote: Sat Feb 25, 2023 10:32 pm**
> > **Ibux wrote: Sat Feb 25, 2023 7:36 am**
> > Check out this link if you want vanilla macros. <https://github.com/Meridaw/Vanilla-Macros>
> >
> >  Or download this addon if you want to use tbc+ macros <https://github.com/DennisWG/Roid-Macros>
>
>   How you open this roid macro interface in game?

have same question

## Post 73623 by Kangaraxxus — 2023-10-25T12:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=73623#p73623 | page 1 | era: pre-1.18.1 -->

Roid Macros does not provide any specific ui ingame, it just extends available macro commands to be used in standard macro window

Few macros i use
Code: Select all

```
/cast [mod:alt @player]Regrowth;[mod:ctrl stance:5 @mouseover help]Regrowth(rank 4);[mod:ctrl stance:5 help]Regrowth(rank 4);[mod:ctrl @mouseover help]Healing Touch(rank 3);[mod:ctrl]Healing Touch(rank 3);[@mouseover help]Regrowth; [@target]Regrowth
```

Code: Select all

```
/cast [mod:ctrl @mouseover help]Rejuvenation(rank 8);[mod:ctrl @mouseover harm]Moonfire(rank 9);[mod:ctrl]Moonfire(rank 9);[stance:5]Moonkin Form
/cast [mod:alt @player]Rejuvenation;[@mouseover help]Rejuvenation;[help @target]Rejuvenation
```

Code: Select all

```
/unshift [stance:2/3/4/5]
/cast [stance:0]Dire Bear Form
/cast [stance:1]Feral Charge
```

Code: Select all

```
/script if IsControlKeyDown() then for i=0,32 do t=GetPlayerBuffTexture(i); if t~=nil and strfind(t, "Enrage") then CancelPlayerBuff(i); end;end; else CastSpellByName("Enrage"); end
```

