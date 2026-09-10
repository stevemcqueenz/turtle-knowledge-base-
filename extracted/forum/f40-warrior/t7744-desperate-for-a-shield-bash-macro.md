---
title: "Desperate for a Shield Bash macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7744"
topic_id: 7744
forum_id: 40
forum: "Warrior"
author: "Guillaume"
author_authority: "player"
posted: "2023-06-10T19:01:00Z"
last_post: "2023-06-10T21:51:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T07:54:35Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Desperate for a Shield Bash macro

## Post 49588 by Guillaume — 2023-06-10T19:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49588#p49588 | page 1 | era: pre-1.18.1 -->

Greetings to all the Turtlers out there. I've been struggling to create a proper Shield Bash macro that would :

 1) Replace my equipped two-hander with a one-hander and a shield;
 2) Shieldbash the target
 3) The macro must then check if Shield Bash is on cooldown. If it is, it must make my character equip a two-hander, and keep it equipped as long as SB is on cooldown.

The last action is necessary to prevent accidental switching to the one-hander, as I only need it for shieldbashing. I have Macro Extender installed, and it does allow for a "cooldown" conditional.

My attempts can be summarized in the following macro :

/equip "my one-hander name"
/equip "my shield name"
/cast @focus Shield Bash
/equip [cooldown:Shield Bash] "my two-hander name"

If the above does not make the slightest sense to you, it's because I have zero experience in creating complex macros.

The only thing this macro does is equip a one-hander, after which it tells me that I "must have a shield equipped". Despite the fact that this is exactly what my second line tells it to do. Could any macro-proficient person advise me on what to do ?

Thanks in advance.

## Post 49592 by Ibux (Patch Note Conspiracy Theorist) — 2023-06-10T19:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49592#p49592 | page 1 | era: pre-1.18.1 -->

try use /equipoh for the shield

maybe like this
> /equip [nocooldown:Shield Bash] "my one-hander name"
>  /equipoh [nocooldown:Shield Bash] "my shield name"
>  /cast [@focus] Shield Bash
>  /equip [cooldown:Shield Bash] "my two-hander name"

*Last edited by Ibux on Sat Jun 10, 2023 8:10 pm, edited 1 time in total.*

## Post 49597 by Balake (Bug Report Enthusiast) — 2023-06-10T19:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49597#p49597 | page 1 | era: pre-1.18.1 -->

<https://github.com/DennisWG/Roid-Macros>
[https://denniswg.github.io/Roid-Macros/ ... /cooldown/](https://denniswg.github.io/Roid-Macros/conditions/cooldown/)
You need this addon to get /equipoh and [cooldown] conditional support.

Focus does not work entirely in vanilla I think

## Post 49598 by Ibux (Patch Note Conspiracy Theorist) — 2023-06-10T19:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49598#p49598 | page 1 | era: pre-1.18.1 -->

> **Balake wrote: Sat Jun 10, 2023 7:49 pm**
> <https://github.com/DennisWG/Roid-Macros>
>  [https://denniswg.github.io/Roid-Macros/ ... /cooldown/](https://denniswg.github.io/Roid-Macros/conditions/cooldown/)
>  You need this addon to get /equipoh and [cooldown] conditional support.
>
>  Focus does not work entirely in vanilla I think

i assume he is using roid macro considering it equipped his one hand weapon. there is a addon for focus. but i'm not sure how well it works <https://github.com/wardz/FocusFrame>

it says on roid macro wiki that roid macro is compatible with focus frame. and you can use the [@focus] condition with roid macros if you got both addons.

## Post 49600 by Guillaume — 2023-06-10T20:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49600#p49600 | page 1 | era: pre-1.18.1 -->

Thanks for all of your replies. I am currently using the following macro :

/equip [nocooldown:Shield_Bash] one-hander name
/equipoh [nocooldown:Shield_Bash] shield name
/cast Shield Bash
/equip [cooldown:Shield Bash] two-hander name

The @focus or @target command after /cast renders the macro completely unusable, even with FocusFrame installed.

So, at the very first use, the macro did the following :

 1) Equipped a sword and a shield
 2) Triggered some 1-second global cooldown during which I was unable to cast any abilities, including Shield Bash. Knowing that a spell such as Fear takes only 1,5 seconds to cast, this is a **major**  downside.
 3) I had to make sure that cooldown was off before casting SB otherwise I kept switching between weapons.
 4) Immediately after casting Bash, it equipped my two-hander back.

I waited for Shield Bash cooldown to expire in order to test it again. But when the cooldown was off, the macro switched my one- and two-handers back and forth, while triggering the same 1 sec global cooldown and displaying the "Must equip a shield" message. I pressed the macro button a couple of times, and at some point, it finally ended up equipping a shield and casting Shield Bash. This time, without equipping the two-hander back.

I am sure the majority of warriors already figured that macro out and would appreciate their input.

## Post 49605 by Ibux (Patch Note Conspiracy Theorist) — 2023-06-10T21:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49605#p49605 | page 1 | era: pre-1.18.1 -->

> **Guillaume wrote: Sat Jun 10, 2023 8:37 pm**
> Thanks for all of your replies. I am currently using the following macro :
>
>  /equip [nocooldown:Shield_Bash] one-hander name
>  /equipoh [nocooldown:Shield_Bash] shield name
>  /cast Shield Bash
>  /equip [cooldown:Shield Bash] two-hander name
>
>  The @focus or @target command after /cast renders the macro completely unusable, even with FocusFrame installed.
>
>  So, at the very first use, the macro did the following :
>
>  1) Equipped a sword and a shield
>  2) Triggered some 1-second global cooldown during which I was unable to cast any abilities, including Shield Bash. Knowing that a spell such as Fear takes only 1,5 seconds to cast, this is a **major**  downside.
>  3) I had to make sure that cooldown was off before casting SB otherwise I kept switching between weapons.
>  4) Immediately after casting Bash, it equipped my two-hander back.
>
>  I waited for Shield Bash cooldown to expire in order to test it again. But when the cooldown was off, the macro switched my one- and two-handers back and forth, while triggering the same 1 sec global cooldown and displaying the "Must equip a shield" message. I pressed the macro button a couple of times, and at some point, it finally ended up equipping a shield and casting Shield Bash. This time, without equipping the two-hander back.
>
>  I am sure the majority of warriors already figured that macro out and would appreciate their input.

looks like you might have missed an underscore for the two handed condition. try this.

> /equip [nocooldown:Shield_Bash] one-hander name
>  /equipoh [nocooldown:Shield_Bash] shield name
>  /cast Shield Bash
>  /equip [cooldown:Shield_Bash] two-hander name

## Post 49611 by Guillaume — 2023-06-10T21:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49611#p49611 | page 1 | era: pre-1.18.1 -->

> **Ibux wrote: Sat Jun 10, 2023 9:06 pm**
> > **Guillaume wrote: Sat Jun 10, 2023 8:37 pm**
> > Thanks for all of your replies. I am currently using the following macro :
> >
> >  /equip [nocooldown:Shield_Bash] one-hander name
> >  /equipoh [nocooldown:Shield_Bash] shield name
> >  /cast Shield Bash
> >  /equip [cooldown:Shield Bash] two-hander name
> >
> >  The @focus or @target command after /cast renders the macro completely unusable, even with FocusFrame installed.
> >
> >  So, at the very first use, the macro did the following :
> >
> >  1) Equipped a sword and a shield
> >  2) Triggered some 1-second global cooldown during which I was unable to cast any abilities, including Shield Bash. Knowing that a spell such as Fear takes only 1,5 seconds to cast, this is a **major**  downside.
> >  3) I had to make sure that cooldown was off before casting SB otherwise I kept switching between weapons.
> >  4) Immediately after casting Bash, it equipped my two-hander back.
> >
> >  I waited for Shield Bash cooldown to expire in order to test it again. But when the cooldown was off, the macro switched my one- and two-handers back and forth, while triggering the same 1 sec global cooldown and displaying the "Must equip a shield" message. I pressed the macro button a couple of times, and at some point, it finally ended up equipping a shield and casting Shield Bash. This time, without equipping the two-hander back.
> >
> >  I am sure the majority of warriors already figured that macro out and would appreciate their input.
>
>   looks like you might have missed an underscore for the two handed condition. try this.
>
> > /equip [nocooldown:Shield_Bash] one-hander name
> >  /equipoh [nocooldown:Shield_Bash] shield name
> >  /cast Shield Bash
> >  /equip [cooldown:Shield_Bash] two-hander name

For some reason, I do not get switched back to the two-hander with underscore in "cooldown". Unlike "nocooldown" which must have an underscore to equip a shield  dead_turtle_head

I also get an "Interrupted" message when macro fails to cast SB.

