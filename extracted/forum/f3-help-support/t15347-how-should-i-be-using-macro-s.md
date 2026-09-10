---
title: "How should I be using macro's?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15347"
topic_id: 15347
forum_id: 3
forum: "Help & Support"
author: "Amorfati"
author_authority: "player"
posted: "2024-10-25T18:09:00Z"
last_post: "2024-10-28T19:44:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T08:50:52Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# How should I be using macro's?

## Post 104830 by Amorfati — 2024-10-25T18:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104830#p104830 | page 1 | era: pre-1.18.1 -->

So, after a while I started playing here again and I forgot that "normal" macro's don't work without the addons "Roid-Macro" and/or "SuperMacro" unless you know how to write "oldschool" macro's.

Since I do use macro's ALLOT and I don't know how to write the oldschool macro's, I picked up those addons again, but they somehow are a bit buggy for me.
Aside from that, a macro like
> /use [@mouseover,help,nodead][help,nodead][@player]Power Word: Fortitude

does not seem to work, even with the addons...

So I started looking for forums or anything online to find out about oldschool vanilla macro's, but somehow I still find loads of websites that all use /cast, /use, /startattack, /petattack, [@mouseover], and above examples given.

Is there anybody out here who can point me to some website(s) to learn about old macro's, or give any advice about using macro's. Whether it be the old or the new ones (preferably new ones though).

Would be much appreciated!   turtle_in_love_head

## Post 104875 by Akos1896 (Grandmaster of Forum PvP) — 2024-10-26T12:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104875#p104875 | page 1 | era: pre-1.18.1 -->

PFUI somewhat supports it.
Pls check the answers (not the question) in this thread

[embed: https://s9e.github.io/iframe/2/reddit.min.html#turtlewow/comments/16hxt7z#theme=]

## Post 104882 by Templar85 (Patch Note Conspiracy Theorist) — 2024-10-26T14:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104882#p104882 | page 1 | era: pre-1.18.1 -->

Install Roid Macros <https://github.com/DennisWG/Roid-Macros>. I also have super macro and SuperWow. You can find them on the Turtle wiki page. I also use a lot of macros, 90% of my spells are converted to multifunction (often penta) function macros. Clever macros making healing easier and more efficient in raids.

This is the bread and butter macro. You can make this for any of your single target heal.

/cast [help @mouseover]  Regrowth;  [help @target] Regrowth; [@targettarget,help,nodead] Regrowth;  [help @player] Regrowth;

Prioritise mouseover then target then targettarget then self.

For more specific macros go to the priest discord channel.

## Post 104928 by Ulukay (Patch Note Conspiracy Theorist) — 2024-10-27T06:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104928#p104928 | page 1 | era: pre-1.18.1 -->

I don't know about the above addons. I only have a super macro to expand the character max and my own macros on LUA.
Link to help [https://wowwiki-archive.fandom.com/wiki ... rcraft_API](https://wowwiki-archive.fandom.com/wiki/World_of_Warcraft_API)

## Post 105139 by Amorfati — 2024-10-28T19:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105139#p105139 | page 1 | era: pre-1.18.1 -->

Thnx all.

Tried pfUI, but I don't lilke it. Using the stock UI with some basic changes.
I'll just try the macro that Templar85 posted, hope it works...

