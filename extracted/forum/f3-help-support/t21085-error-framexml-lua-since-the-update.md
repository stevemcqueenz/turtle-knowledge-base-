---
title: "Error FrameXML/Lua since the update"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21085"
topic_id: 21085
forum_id: 3
forum: "Help & Support"
author: "Mothius"
author_authority: "player"
posted: "2025-08-17T21:10:00Z"
last_post: "2025-08-20T02:24:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T08:41:12Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Error FrameXML/Lua since the update

## Post 146602 by Mothius (Barrens Chat Casualty) — 2025-08-17T21:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146602#p146602 | page 1 | era: pre-1.18.1 -->

Hello there.

Since the update, i got a message error when i log in with any character, like the image down bellow.

![Image](https://i.imgur.com/jQziOCe.jpeg)

It seems the problem is related with the Turtle Group Finder, inside a lua script.

Looking at the files i noticed that with the update a new file in the "data" folder was created, named "patch-9.mpq".

The problem started soon as the file was downloaded, and looking at it, it have a lua script inside, which probably is causing the problem.

![Image](https://i.imgur.com/nq7Dxgo.jpeg)

It tried to clear the cache and verify the files in the launcher and the message continue the same, also i tried to disable all addons to see if any of them could be causing the problem, but no, even without any addons the message keep appearing.

Also, if i remove the "patch-9.mpq" from the folder and run the game the message don't appear anymore.

As an observation, another problem happen when i open a vendor page or the guild bank, a second message appear:

![Image](https://i.imgur.com/IOVeYnu.jpeg)

It seems related to the Guld Vault with a similar script in the same file.

Furthermore, for knowledge, when i first download the update, and the "patch-9.mpq" was added in the files, not even the loot was working, when i tried to loot the message bellow appeared:

![Image](https://i.imgur.com/AJSKm7K.jpeg)

Soon after, a new update appeared in the launcher, and the "patch-9.mpq" file was updated with it, after the update the current problems started.

I hope this can be fixed, thanks.

## Post 146646 by Mothius (Barrens Chat Casualty) — 2025-08-18T00:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146646#p146646 | page 1 | era: pre-1.18.1 -->

Just to complement, both LFT and Guild Bank don't work because of this script problem, if the file "patch-9.mpq" is removed it work again.

## Post 146647 by Axellvk — 2025-08-18T01:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146647#p146647 | page 1 | era: pre-1.18.1 -->

Yeah, having the same problem and if I remove patch-9 the error goes away.

## Post 146769 by Hanacka — 2025-08-18T14:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146769#p146769 | page 1 | era: pre-1.18.1 -->

has anybody solved this? I have the same problem :(

## Post 146793 by Madlouk — 2025-08-18T15:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146793#p146793 | page 1 | era: pre-1.18.1 -->

I'm having this issue too.  any ideas?

Note: Am playing on Linux

## Post 146857 by Mothius (Barrens Chat Casualty) — 2025-08-18T21:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146857#p146857 | page 1 | era: pre-1.18.1 -->

> **Hanacka wrote: Mon Aug 18, 2025 2:28 pm**
> has anybody solved this? I have the same problem :(

> **Madlouk wrote: Mon Aug 18, 2025 3:58 pm**
> I'm having this issue too.  any ideas?
>
>  Note: Am playing on Linux

Right now the only "fix" is removing the file "patch-9.mpq" from the "Data" folder in the game installation.

## Post 147151 by Mothius (Barrens Chat Casualty) — 2025-08-20T02:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147151#p147151 | page 1 | era: pre-1.18.1 -->

I got a new update yesterday (both patch-8.mpq and patch-9.mpq) and the problem was fixed, thanks.

