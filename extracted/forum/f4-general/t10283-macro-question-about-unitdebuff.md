---
title: "Macro question about UnitDebuff"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=10283"
topic_id: 10283
forum_id: 4
forum: "General"
author: "Aizawakai"
author_authority: "player"
posted: "2023-09-27T12:47:00Z"
last_post: "2023-09-27T14:54:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T10:00:56Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macro question about UnitDebuff

## Post 67157 by Aizawakai — 2023-09-27T12:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67157#p67157 | page 1 | era: pre-1.18.1 -->

<code>
/script local c, i, b, f = CastSpellByName; for i = 1, 16 do b = UnitDebuff("target", i); if b and strfind(b, "Pain") then f = 1; break; end; end; if f then c("Smite"); else c("Shadow Word: Pain"); end
</code>

Hello, this piece of code works fine on my priest character's macro, but when I modify it with 'if b and strfind(b, "Pain")' and use it on my hunter and warrior characters' macros, it doesn't seem to detect the debuffs 'Wing Clip' or 'Rend' on the target. Is it a syntax issue on my end, or is there another way to make this determination?

## Post 67195 by Ibux (Patch Note Conspiracy Theorist) — 2023-09-27T14:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67195#p67195 | page 1 | era: pre-1.18.1 -->

make sure you use the correct effect name when you change spells. for rend "Pain" need to be changed to Ability_Gouge and it is Ability_Rogue_Trip for wing clip. [https://wowwiki-archive.fandom.com/wiki ... did=352483](https://wowwiki-archive.fandom.com/wiki/Queriable_buff_effects?oldid=352483)

## Post 67197 by Aizawakai — 2023-09-27T14:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67197#p67197 | page 1 | era: pre-1.18.1 -->

> **Ibux wrote: Wed Sep 27, 2023 2:37 pm**
> make sure you use the correct effect name when you change spells. for rend "Pain" need to be changed to Ability_Gouge and it is Ability_Rogue_Trip for wing clip. [https://wowwiki-archive.fandom.com/wiki ... did=352483](https://wowwiki-archive.fandom.com/wiki/Queriable_buff_effects?oldid=352483)

Thank you very much for your response.
The issue has been resolved, it was indeed due to my use of the incorrect effect name.

