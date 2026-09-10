---
title: "Default chat tab upon login never \"General\""
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6954"
topic_id: 6954
forum_id: 3
forum: "Help & Support"
author: "Backlit"
author_authority: "player"
posted: "2023-05-01T07:46:00Z"
last_post: "2025-08-20T10:28:00Z"
post_count: 13
pages: 1
fetched: "2026-09-10T08:41:09Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Default chat tab upon login never "General"

## Post 43970 by Backlit — 2023-05-01T07:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43970#p43970 | page 1 | era: pre-1.18.1 -->

Hello,

Ever since creating new Chat tabs for things such as group chat, whispers only etc, the default tab upon login is never "General".  It's a very minor thing but gets slightly annoying having to change chat tabs every login.

I have scoured the chat-cache.txt in the character folder in the depths of the WTF.  I don't see anything that screams Window 1 should not be defaulted.  Window 1 (which I assume  is General) has "SHOWN 1" while every other Window is "SHOWN 0".  Although I am not quite sure what everything means in the file.

I'm not sure if there is another setting in a different cache file that represents the default chat tab.  Any help is appreciated!  smiling_turtle

## Post 44156 by Raffle0 — 2023-05-02T18:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44156#p44156 | page 1 | era: pre-1.18.1 -->

I have the exact same problem. If I make any custom tab, I always have to pick general on login.

## Post 44382 by Shark0175 — 2023-05-04T04:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44382#p44382 | page 1 | era: pre-1.18.1 -->

Maybe the default chat tab setting is stored in a different cache file. Please try resetting the chat settings to their default values to see if it works.

## Post 44385 by Jammyxx (Patch Note Conspiracy Theorist) — 2023-05-04T06:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44385#p44385 | page 1 | era: pre-1.18.1 -->

+1 really annoying.

## Post 44389 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-05-04T07:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44389#p44389 | page 1 | era: pre-1.18.1 -->

This is a Vanilla client bug.  As far as I'm aware, every Vanilla client has this happen regardless of what's done to it.  I've made some observations about the tab behavior:

Observations
- For some reason, *World of Warcraft* v1.12.1 is coded to always set your "default" tab to be **the last one in the order of appearance** in the "*chat-cache.txt*" file.
So, if you make three custom tabs, Window 5 will always be the one you "log into".  It doesn't matter if you move it to position 1, 3, 2, or 4 on your tabs bar, Window 5 will **always** be the "default" upon login.
- Trying to manually change the order of Window 1 or Window 2 in *chat-cache.txt* will **phenominally** break the chat interface, causing the input box to vanish and tabs to overlap.  Even after a */console reloadui*, the Combat Log will be missing.  General Chat also acts a little odd when it's not Window 1.
My advice?  Don't try and re-order these.  (,:
- Re-ordering tabs is a bit of a crapshoot.  It seems like the first and last visible tabs always want to be one spot over from where they would be.  So, if you have Windows 3, 4, and 5 open, then you re-order them to 5, 4, and 3, the next time you log in, the tabs will probably show up as **5, 3, and 4**.  No idea why.
- You can make up to **seven tabs** in *World of Warcraft*.  Upon creating the seventh tab, however, the chat interface becomes a little "wacky".  Specifically, the currently active tab will constantly overlap the first tab.  Even if you remove all other custom tabs, Window 7 will mess things up.
- There is space for **ten tabs** in the *chat-cache.txt* file.  However, Window 8, 9, and 10 will never be used.  I don't know if these are reserved for something or what, but no amount of fiddling will get them to appear, normally.

 
In any case, I have a solution, but you may not like it.
  ![Image](https://i.imgur.com/5ZPJxb4.jpg)

The [Prat AddOn](https://github.com/laytya/Prat-vanilla) can set your default login tab to 1 (General), among other things.  So, if you don't mind an(other) AddOn suite, this is a pretty decent solution.  Plus, you can just disable / delete the parts of it you don't want. (Including the 8 MB font file it comes with…)

Now, the module **has to be enabled** for the "login tab" part of it to work, which means that your tabs will suddenly stay visible at all times (by default).  If you don't like your tabs always being visible, though, you can set it to "Individual" mode and set each tab to "Default".  This will restore it to normal *World of Warcraft* visibility settings.

## Post 46843 by Backlit — 2023-05-21T10:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46843#p46843 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Thu May 04, 2023 7:38 am**
> This is a Vanilla client bug.  As far as I'm aware, every Vanilla client has this happen regardless of what's done to it.  I've made some observations about the tab behavior:
>
>  Observations
> - For some reason, *World of Warcraft* v1.12.1 is coded to always set your "default" tab to be **the last one in the order of appearance** in the "*chat-cache.txt*" file.
>    So, if you make three custom tabs, Window 5 will always be the one you "log into".  It doesn't matter if you move it to position 1, 3, 2, or 4 on your tabs bar, Window 5 will **always** be the "default" upon login.
> - Trying to manually change the order of Window 1 or Window 2 in *chat-cache.txt* will **phenominally** break the chat interface, causing the input box to vanish and tabs to overlap.  Even after a */console reloadui*, the Combat Log will be missing.  General Chat also acts a little odd when it's not Window 1.
>    My advice?  Don't try and re-order these.  (,:
> - Re-ordering tabs is a bit of a crapshoot.  It seems like the first and last visible tabs always want to be one spot over from where they would be.  So, if you have Windows 3, 4, and 5 open, then you re-order them to 5, 4, and 3, the next time you log in, the tabs will probably show up as **5, 3, and 4**.  No idea why.
> - You can make up to **seven tabs** in *World of Warcraft*.  Upon creating the seventh tab, however, the chat interface becomes a little "wacky".  Specifically, the currently active tab will constantly overlap the first tab.  Even if you remove all other custom tabs, Window 7 will mess things up.
> - There is space for **ten tabs** in the *chat-cache.txt* file.  However, Window 8, 9, and 10 will never be used.  I don't know if these are reserved for something or what, but no amount of fiddling will get them to appear, normally.
>
>
>
>   
>  In any case, I have a solution, but you may not like it.
>    ![Image](https://i.imgur.com/5ZPJxb4.jpg)
>
>
>  The [Prat AddOn](https://github.com/laytya/Prat-vanilla) can set your default login tab to 1 (General), among other things.  So, if you don't mind an(other) AddOn suite, this is a pretty decent solution.  Plus, you can just disable / delete the parts of it you don't want. (Including the 8 MB font file it comes with…)
>
>  Now, the module **has to be enabled** for the "login tab" part of it to work, which means that your tabs will suddenly stay visible at all times (by default).  If you don't like your tabs always being visible, though, you can set it to "Individual" mode and set each tab to "Default".  This will restore it to normal *World of Warcraft* visibility settings.

Thank you for the information!  I am at slight ease knowing it's a widespread annoyance and not just something I deal with alone :D

## Post 57591 by Geojak (Grandmaster of Forum PvP) — 2023-08-16T11:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57591#p57591 | page 1 | era: pre-1.18.1 -->

thank you for the detailed infos jol. i will test the prat addon as this is rly anoying bug

## Post 57595 by Geojak (Grandmaster of Forum PvP) — 2023-08-16T11:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57595#p57595 | page 1 | era: pre-1.18.1 -->

i went trough the prat addon code.
you dont need the hole thing to just fix this bug.
jsut one lines of code executed to swtich to general window
i included it into my shagutweaks mods that adds the "What happened to me" player combat log that caused me this issue. now i call that line of code to switch abck automatically

FCF_SelectDockFrame(ChatFrame1)

## Post 78888 by Paulhenge12 — 2023-11-27T03:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78888#p78888 | page 1 | era: pre-1.18.1 -->

I read somewhere that there is a solution to this annoying problem but I can't find it

## Post 78899 by Sofiacarson11 — 2023-11-27T07:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78899#p78899 | page 1 | era: pre-1.18.1 -->

I tried setting the default chat tab which is stored in another cache file. It's also quite easy to make and the results are quite surprising [tap tap shots](https://tap-tapshots.com)

## Post 78900 by Majestik51 (Patch Note Conspiracy Theorist) — 2023-11-27T07:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78900#p78900 | page 1 | era: pre-1.18.1 -->

new shagu tweaks addon is the solution to ur problem guys.

it does it automatically for u, check it out.

PEACE!!  maintenance_turtle

## Post 82926 by Krogzor — 2023-12-27T18:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82926#p82926 | page 1 | era: pre-1.18.1 -->

Can you link the new shagutweaks addon pls? I cant find any new version of it

## Post 147226 by Noahenett — 2025-08-20T10:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147226#p147226 | page 1 | era: pre-1.18.1 -->

It's great that you're taking the initiative to explore the chat-cache.txt file to find a solution.

