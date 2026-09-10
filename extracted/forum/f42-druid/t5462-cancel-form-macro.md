---
title: "Cancel Form Macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5462"
topic_id: 5462
forum_id: 42
forum: "Druid"
author: "Hello666"
author_authority: "player"
posted: "2023-01-29T16:05:00Z"
last_post: "2023-01-29T16:41:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:04:09Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Cancel Form Macro

## Post 33462 by Hello666 — 2023-01-29T16:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33462#p33462 | page 1 | era: pre-1.18.1 -->

Hello guys I don't know how macros work very well, especially on the 1.12.1 client. I want a simple universal cancel form macro that will get me out of an any animal form and into caster form. /cancelform does not work. Any tips?

## Post 33463 by Ibux (Patch Note Conspiracy Theorist) — 2023-01-29T16:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33463#p33463 | page 1 | era: pre-1.18.1 -->

this macro will change you into caster. but you can also use some addon like for example [shagutweaks](https://github.com/shagu/ShaguTweaks) have a option to turn you into the correct form depending on what spell you try to use. Code: Select all

```
/run for i = 1, GetNumShapeshiftForms() do local _, _, active = GetShapeshiftFormInfo(i) if active then CastShapeshiftForm(i) return end end
```

## Post 33467 by Hello666 — 2023-01-29T16:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33467#p33467 | page 1 | era: pre-1.18.1 -->

> **Ibux wrote: Sun Jan 29, 2023 4:13 pm**
> this macro will change you into caster. but you can also use some addon like for example [shagutweaks](https://github.com/shagu/ShaguTweaks) have a option to turn you into the correct form depending on what spell you try to use. Code: Select all
>
> ```
> /run for i = 1, GetNumShapeshiftForms() do local _, _, active = GetShapeshiftFormInfo(i) if active then CastShapeshiftForm(i) return end end
> ```

Thank you very much! I didn't realize how long the macro needs to be on this version.

