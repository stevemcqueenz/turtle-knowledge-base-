---
title: "Macro not working"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5372"
topic_id: 5372
forum_id: 4
forum: "General"
author: "Ozzymagnum"
author_authority: "player"
posted: "2023-01-18T16:35:00Z"
last_post: "2023-01-18T17:56:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:09:15Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macro not working

## Post 32730 by Ozzymagnum — 2023-01-18T16:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32730#p32730 | page 1 | era: pre-1.18.1 -->

I googled for a mindflay macro that  allows you to spam the keybind without the spell overlapping./use [nochanneling:Mind Flay] Mind Flay, but the macro dont work

## Post 32732 by Shamma (Bug Report Enthusiast) — 2023-01-18T16:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32732#p32732 | page 1 | era: pre-1.18.1 -->

U need to google better.

Try using Roid-macros and read its docu 1st.

## Post 32734 by Ibux (Patch Note Conspiracy Theorist) — 2023-01-18T17:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32734#p32734 | page 1 | era: pre-1.18.1 -->

> **Ozzymagnum wrote: Wed Jan 18, 2023 4:35 pm**
> I googled for a mindflay macro that  allows you to spam the keybind without the spell overlapping./use [nochanneling:Mind Flay] Mind Flay, but the macro dont work

this is the vanilla version Code: Select all

```
/run if not CastingBarFrame.channeling then CastSpellByName("Mind Flay") end
```

## Post 32736 by Ozzymagnum — 2023-01-18T17:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32736#p32736 | page 1 | era: pre-1.18.1 -->

thx

