---
title: "Macro for cancelling Tree of Life + Cast NS + Cast Heal"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13046"
topic_id: 13046
forum_id: 42
forum: "Druid"
author: "Rangergripp"
author_authority: "player"
posted: "2024-02-10T05:58:00Z"
last_post: "2024-02-10T19:37:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:02:55Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macro for cancelling Tree of Life + Cast NS + Cast Heal

## Post 87440 by Rangergripp — 2024-02-10T05:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87440#p87440 | page 1 | era: pre-1.18.1 -->

Hi,

I can't get this working as Tree of Life is different from the other forms. Works in all other forms.

/cancelaura (or cancelform)

/cast Nature's Swiftness

/cast Healing Touch

Please help!

## Post 87476 by Elesion (Patch Note Conspiracy Theorist) — 2024-02-10T14:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87476#p87476 | page 1 | era: pre-1.18.1 -->

Take that up with the author of whatever macro addon you're using. /cancelaura or /cancelform are not commands from the Vanilla client, they must come from an addon of yours. Likely that addon is not written open-ended enough to be able to check for Tree of Life, since that shapeshift was not available in actual Vanilla WoW (it's a custom change of TWoW to make it available in 1.12).

A generalized fully-Vanilla macro to cancel out of all forms would be: Code: Select all

```
/run for i=1,GetNumShapeshiftForms() do _,_,a=GetShapeshiftFormInfo(i) if(a==1) then CastShapeshiftForm(i) break end end
```

You can use that instead of /cancelform in your macro.

## Post 87497 by Rangergripp — 2024-02-10T19:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87497#p87497 | page 1 | era: pre-1.18.1 -->

> **Elesion wrote: Sat Feb 10, 2024 2:41 pm**
> Take that up with the author of whatever macro addon you're using. /cancelaura or /cancelform are not commands from the Vanilla client, they must come from an addon of yours. Likely that addon is not written open-ended enough to be able to check for Tree of Life, since that shapeshift was not available in actual Vanilla WoW (it's a custom change of TWoW to make it available in 1.12).
>
>  A generalized fully-Vanilla macro to cancel out of all forms would be: Code: Select all
>
> ```
> /run for i=1,GetNumShapeshiftForms() do _,_,a=GetShapeshiftFormInfo(i) if(a==1) then CastShapeshiftForm(i) break end end
> ```
>
>  You can use that instead of /cancelform in your macro.

Thanks a lot my friend, will try asap.

I figured I could use the “new” macros. Will let you know.

Edit: Works like a charm, what's your toon, I will send some brandy!

