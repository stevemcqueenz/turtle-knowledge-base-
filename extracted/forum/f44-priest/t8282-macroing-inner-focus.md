---
title: "Macroing Inner Focus"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8282"
topic_id: 8282
forum_id: 44
forum: "Priest"
author: "Tamlan"
author_authority: "player"
posted: "2023-07-14T00:02:00Z"
last_post: "2023-07-17T01:01:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T08:09:08Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macroing Inner Focus

## Post 53363 by Tamlan — 2023-07-14T00:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53363#p53363 | page 1 | era: pre-1.18.1 -->

Hello Turtle Priest Community!

I have a question about Inner Focus and how to include it in macros.
All the information I have found about classic macroing says that you can including multiple spells that don't set a global cooldown (IF does not) in a chain macro. So for example, the following macro should work:

> /cast Inner Focus
>  /cast Power Word: Shield

This exact macro works in later versions of the client, but it doesn't seem to work with Turtle.
When executed, the Inner Focus fires, but the PWS does not and there is an error message on the screen that says,

"Another action is in progress"

Apparently the Inner Focus blocks the execution of the /cast PWS line.
I saw that some variations of this macro type required the use of stopcasting between then two invocations:

> /cast Inner Focus
>  /run SpellStopCasting() -- /stopcasting doesn't seem to work
>  /cast Power Word: Shield

But this macro just fires the PWS and apparently aborts the Inner Focus invocation.

So my question is, is there any way to use the Turtle client to make this sort of macro work? I love IF but I don't always remember to use it before casting big-ticket spells so I'm looking for a lazy way to make sure I get my money's worth out of it.

Thanks! /hugs

## Post 53441 by Baess — 2023-07-14T16:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53441#p53441 | page 1 | era: pre-1.18.1 -->

In the old 1.12 client, which turtle uses, it is 1 action per button press sadly.

You can make this work, maybe someone more familiar with the old syntax can help

Or you could get a macro addon like roidMacro or SuperMacro and maybe try something like

If not buffed(inner focus) CastSpellByName("inner focus") else CastSpellByName("Power Word:Shield") end.

Ofc, make sure you have the spelling of the spells correct

## Post 53454 by Ibux (Patch Note Conspiracy Theorist) — 2023-07-14T18:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53454#p53454 | page 1 | era: pre-1.18.1 -->

you could use this macro. but you might have to change 29 depending on what id Inner Focus got in your spellbook: Code: Select all

```
/run if GetSpellCooldown(29,'spell')==0 then CastSpellByName("Inner Focus") else CastSpellByName("Power Word: Shield")end
```

you can check what spell id Inner Focus got if you use this macro: Code: Select all

```
/run for id = 1, 180, 1 do local spellName, subSpellName = GetSpellName(id, SpellBookFrame.bookType);if spellName and string.find(spellName, "Inner Focus", 1, true) then ChatFrame1:AddMessage("ID is "..id, 1.0, 1.0, 0.5); end; end;
```

you can also use a macro like this if you get the roid macro addon: Code: Select all

```
/cast [nocooldown:Inner_Focus] Inner Focus; Power Word: Shield
```

## Post 53457 by Getplucked (Patch Note Conspiracy Theorist) — 2023-07-14T18:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53457#p53457 | page 1 | era: pre-1.18.1 -->

Even if the action is off the GCD, macros in the 1.12 client can only perform 1 action per button press. So yeah, you have to press the button twice.

## Post 53461 by Ibux (Patch Note Conspiracy Theorist) — 2023-07-14T18:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53461#p53461 | page 1 | era: pre-1.18.1 -->

> **Getplucked wrote: Fri Jul 14, 2023 6:20 pm**
> Even if the action is off the GCD, macros in the 1.12 client can only perform 1 action per button press. So yeah, you have to press the button twice.

yep yep. i didn't mean you could use it to perform more then 1 action per press. just another method to do the macro.

## Post 53765 by Tamlan — 2023-07-17T00:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53765#p53765 | page 1 | era: pre-1.18.1 -->

Thanks all for the quick info!

One cast per press isn't so bad, I guess. I'll just need to train the muscle memory to double-tap on my big spells.

## Post 53766 by Getplucked (Patch Note Conspiracy Theorist) — 2023-07-17T01:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53766#p53766 | page 1 | era: pre-1.18.1 -->

Yeah Paladins run into the same issue when making Judgement macros. Even though Judgement is off the GCD, we still have to press the macro twice to judge + re-apply seal. It's really annoying.

