---
title: "Working 5 second mana addon?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13167"
topic_id: 13167
forum_id: 18
forum: "AddOns"
author: "Draknathar"
author_authority: "player"
posted: "2024-02-20T08:56:00Z"
last_post: "2024-02-22T00:05:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:29:24Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Working 5 second mana addon?

## Post 88219 by Draknathar — 2024-02-20T08:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88219#p88219 | page 1 | era: pre-1.18.1 -->

Does anybody have a working 5 second mana addon? I tried Five Second Rule but the bar dissapears after just one tick. I also tried RogueFocus that this user said is using instead [viewtopic.php?t=11697](https://forum.turtlecraft.gg/viewtopic.php?t=11697) but the one on the addons wiki doesn't show up and the slash commands don't work. I was also recommended zUI but I can only get the swingtimer to work but not the mana regen. I'd be thankful if anybody can provide a working mp5 addon or even a working RogueFocus if nothing else.

## Post 88233 by Azcron (Patch Note Conspiracy Theorist) — 2024-02-20T13:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88233#p88233 | page 1 | era: pre-1.18.1 -->

I use this one <https://github.com/refaim/TNE_FiveSec>. I have not ran into any issues.

## Post 88243 by Draknathar — 2024-02-20T14:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88243#p88243 | page 1 | era: pre-1.18.1 -->

How do you keep the bar from stopping to function? If I have /fs move off the bar dissapears after the first time it fills and if i have it on then the bar stays but only fills up once and then doesn't fill until I cast another spell.

## Post 88336 by Trismegistos — 2024-02-21T16:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88336#p88336 | page 1 | era: pre-1.18.1 -->

Are you looking for a five-second-rule tracker that counts down 5 seconds after you last spent mana to indicate when your mana regeneration rate will be full again? Or are you looking for a 2 second mana ticker which would indicate the exact moment a tick of mana regen will occur?

For the former you only need it to count down once after a (mana-using) cast. For the latter there are no readymade options available to my knowledge, meaning that you would need to hack something together by editing the code of other addons (such as energy tickers) or writing an addon from scratch.

## Post 88368 by Draknathar — 2024-02-22T00:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88368#p88368 | page 1 | era: pre-1.18.1 -->

Yeah my bad, I was hoping that Five Second Rule would have built in a 2 second mana ticker. Guess i'll just settle for Five Sec. Thanks for helping me clarify.

