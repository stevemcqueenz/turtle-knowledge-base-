---
title: "One-button Taunt macro, is it possible?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5363"
topic_id: 5363
forum_id: 41
forum: "Paladin"
author: "Pars"
author_authority: "player"
posted: "2023-01-17T21:15:00Z"
last_post: "2023-01-17T21:37:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T07:59:38Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# One-button Taunt macro, is it possible?

## Post 32683 by Pars — 2023-01-17T21:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32683#p32683 | page 1 | era: pre-1.18.1 -->

Hi, new here and loving it!

Been a while since I played on the vanilla client macros, even with Classic macros I'm no expert by any means. But I've been thinking that a smashable-one button taunt should be doable now. I need help with the syntax, I imagine that it would look something like this:
Code: Select all

```
/run for i=1,40 do local B=UnitBuff("player",i);
if B = "Seal of Justice" then CastSpellByName("Judgement")
else CastSpellByName("Seal of Justice")
end
```

I've not tested this, i know that the Code: Select all

```
if B = "Seal of Justice" then
```

is not correct, I think that one need to find the spell by it's icon, not its name. But that is way out of my knowledge range.

I'll try to read up more, and if I succeed I'll port it here.

## Post 32684 by Shamma (Bug Report Enthusiast) — 2023-01-17T21:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32684#p32684 | page 1 | era: pre-1.18.1 -->

Get Roid-Macros addon. Then here is your 1-button taunt macro:

/run if nil then CastSpellByName("Judgement"); end
/cast [mybuff:Seal_of_Justice] Judgement; Seal of Justice

## Post 32685 by Pars — 2023-01-17T21:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32685#p32685 | page 1 | era: pre-1.18.1 -->

Wow, that was way easier, thanks alot!

