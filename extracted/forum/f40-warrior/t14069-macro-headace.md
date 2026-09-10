---
title: "Macro headace"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14069"
topic_id: 14069
forum_id: 40
forum: "Warrior"
author: "Rashakhan"
author_authority: "player"
posted: "2024-05-28T08:26:00Z"
last_post: "2024-06-02T19:45:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T07:54:02Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macro headace

## Post 95862 by Rashakhan — 2024-05-28T08:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95862#p95862 | page 1 | era: pre-1.18.1 -->

I am trying to put together a macro that will cast retaliation, shield wall or recklessness depending on current stance. I got retaliation and shield wall working, however, despite following same syntax (I think) I only receive errors.
This is the one working:
/run local a1, a2, battle = GetShapeshiftFormInfo(1) b1, b2, defensive = GetShapeshiftFormInfo(2) c1, c2, recklessness = GetShapeshiftFormInfo(3) if battle then CastSpellByName("Retaliation") else if defensive then CastSpellByName("Shield Wall") end end
This is the one I cannot get to work:
/run local a1, a2, battle = GetShapeshiftFormInfo(1) b1, b2, defensive = GetShapeshiftFormInfo(2) c1, c2, recklessness = GetShapeshiftFormInfo(3) if battle then CastSpellByName("Retaliation") else if defensive then CastSpellByName("Shield Wall") else if recklessness then CastSpellByName("Recklessness") end end
I've tried different syntaxes: three "end"s at the end, to "end"s at the end and one after shield wall statement. I've tried just using else for the last condition. The error message changes relative to the statment that I am attempting to make.
Anyone knows how to get this working or can recommend a solid source regarding 1.12.1 macros?

## Post 95865 by Borefficz (Patch Note Conspiracy Theorist) — 2024-05-28T09:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95865#p95865 | page 1 | era: pre-1.18.1 -->

Without having looked much into your macro, whenever I make lengthy macros I make sure to use /script instead of /run as this has been the cause of some of my macro issues in the past.

## Post 95866 by Xudo (Grandmaster of Forum PvP) — 2024-05-28T09:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95866#p95866 | page 1 | era: pre-1.18.1 -->

How about putting those buttons on default skill tab? For example on button 8 and rebind it to X.
This way those skills will automatically switch when you change stance.

## Post 95872 by Borefficz (Patch Note Conspiracy Theorist) — 2024-05-28T11:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95872#p95872 | page 1 | era: pre-1.18.1 -->

Try this

/script local a1, a2, battle = GetShapeshiftFormInfo(1) b1, b2, defensive = GetShapeshiftFormInfo(2) c1, c2, recklessness = GetShapeshiftFormInfo(3) if battle then CastSpellByName("Retaliation") elseif defensive then CastSpellByName("Shield Wall") elseif recklessness then CastSpellByName("Recklessness") end

I replaced /run with /script, else if with elseif and removed one of the end. If you use else if instead you have to put an end for each if in the code (three in this case).

## Post 96197 by Rashakhan — 2024-06-02T18:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96197#p96197 | page 1 | era: pre-1.18.1 -->

I figured it out and sort of forgot about this post. But thanks for the tips, they will be helpful when I make more macros.

## Post 96201 by Ibux (Patch Note Conspiracy Theorist) — 2024-06-02T19:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96201#p96201 | page 1 | era: pre-1.18.1 -->

> **Rashakhan wrote: Sun Jun 02, 2024 6:13 pm**
> I figured it out and sort of forgot about this post. But thanks for the tips, they will be helpful when I make more macros.

you can check out this git. it has many working macros like this that you can copy/paste.
[https://github.com/Meridaw/Vanilla-Macr ... er/Warrior](https://github.com/Meridaw/Vanilla-Macros/tree/master/Warrior)

