---
title: "[Turtle Outfitter] Quick Fix for Auto-Riding Outfit Swap"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3128"
topic_id: 3128
forum_id: 18
forum: "AddOns"
author: "Redmagejoe"
author_authority: "player"
posted: "2022-06-12T03:53:00Z"
last_post: "2023-08-29T22:19:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:31:01Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Turtle Outfitter] Quick Fix for Auto-Riding Outfit Swap

## Post 19127 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-12T03:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19127#p19127 | page 1 | era: pre-1.18.1 -->

Some of you have probably noticed that some of the TurtleWoW mounts don't automatically put on your Riding outfit while using Outfitter, thus depriving you of 3-6% mounted movement speed if you forget to manually toggle it. This is because of the way that Outfitter searches for your buffs and reads the description. Specifically, it is looking for "60%" or "100%" in the tooltip. I made a quick edit that works with all mounts currently in the game.

Find where your Outfitter is installed (usually \TurtleWoW\Interface\Addons\Outfitter\) and you should see a file called Outfitter.lua. I changed Line 3773 from
Code: Select all

```
and string.find(vTextLine2, Outfitter_cMountSpeedFormat) then
```

to
Code: Select all

```
and (
string.find(vTextLine2, Outfitter_cMountSpeedFormat) or
string.find(vTextLine2, "Riding") or
string.find(vTextLine2, "Slow and steady...")
) then
```

You can use Notepad++ or another developer-friendly text editor to jump to the specific line number, or Ctrl + F for the specific text. After making this change, your Outfitter should now trigger Riding outfit automatically whenever you mount on the new mounts.

## Post 31756 by Nn23 — 2022-12-29T06:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31756#p31756 | page 1 | era: pre-1.18.1 -->

Thank you!

## Post 32214 by Ejav94 — 2023-01-06T22:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32214#p32214 | page 1 | era: pre-1.18.1 -->

I downloaded outfitter, and saw you updated the download on github. Thank you for redmagejoe

## Post 59831 by Dudu321 — 2023-08-29T22:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=59831#p59831 | page 1 | era: pre-1.18.1 -->

Works like a charm, thank you.

