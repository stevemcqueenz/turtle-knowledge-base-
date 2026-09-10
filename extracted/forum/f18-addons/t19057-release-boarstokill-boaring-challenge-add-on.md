---
title: "[Release] BoarsToKill (Boaring Challenge Add-on)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19057"
topic_id: 19057
forum_id: 18
forum: "AddOns"
author: "zkyxykz"
author_authority: "player"
posted: "2025-05-03T22:58:00Z"
last_post: "2026-03-04T10:14:00Z"
post_count: 12
pages: 1
fetched: "2026-09-10T10:21:47Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Release] BoarsToKill (Boaring Challenge Add-on)

## Post 129538 by zkyxykz — 2025-05-03T22:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129538#p129538 | page 1 | era: pre-1.18.1 -->

Hello Turtle Community,

I tried the "Boaring Challenge" and was bored (lol) about missing information on how many boars were left to reach the next level. I don't know if anyone needs this or if a similar addon already exists, but I made a little addon to give you more information. This is my first WoW addon!   hiding_smth_turtle_head

![Image](https://i.imgur.com/J84aYTg.png)

 **BoarsToKill**
- Shows the number of boars left to kill (based on your XP per boar)

- Displays your current XP

- Dynamic estimated time to level up (based on your real kill pace)

- Number of boars killed this session

- Total number of boars killed (persistent, saved between sessions)

- Draggable window (position saved between sessions)

- Multilingual support (EN, FR, DE, ES, ZH, PT, IT, RU)

- Modern, color-coded, and auto-resizing UI

- Pop-up setup for tracking or not boars kill
Available here: <https://github.com/ZKYXYKZ/BoarsToKill>

If you encounter any issues or have questions, feel free to let me know here—I'll do my best to help you out.
Have fun!   smiling_turtle_head

*Last edited by zkyxykz on Sun May 04, 2025 10:08 am, edited 1 time in total.*

## Post 129550 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-05-04T00:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129550#p129550 | page 1 | era: pre-1.18.1 -->

Nice idea, but small problem:
You event handler is bugged.
It does not detect the boaring challange:

![Image](https://i.ibb.co/V0BWFP0d/Unbenannt.png)

The reason is your event handler.
This is the problem in line 316: Code: Select all

```
BoarsToKillFrameInit:SetScript("OnEvent", function(self, event)
```

You cant pass arguments inside the SetScript func.
Does not work in Vanilla.

## Post 129551 by zkyxykz — 2025-05-04T00:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129551#p129551 | page 1 | era: pre-1.18.1 -->

> **Foreverdelta33 wrote: Sun May 04, 2025 12:29 am**
> You event handler is bugged.
>  [...]
>  Does not work in Vanilla.

Working well for me atm   wary_turtle_head
(english client from TurtleLauncher here)

With Challenge:
![Image](https://i.imgur.com/yfdhSyS.png)

Without Challenge:
![Image](https://i.imgur.com/5rV41Iw.png)

Btw i'm gonna edit detection mod with a simple pop-up question "Starting a boaring challenge ?" with yes - no buttons, will be better ^^'

*Last edited by zkyxykz on Sun May 04, 2025 12:44 am, edited 4 times in total.*

## Post 129559 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-05-04T02:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129559#p129559 | page 1 | era: pre-1.18.1 -->

> **zkyxykz wrote: Sun May 04, 2025 12:33 am**
> Working well for me atm   wary_turtle_head
>  (english client from TurtleLauncher here)

No. :(

It doesnt work properly for you. The reason you think it works "properly" is because
your working with an already created SavedVariables file, so your event handler doesnt
bug out after second load up.

Look at the SetScript syntax in the 1.12.1 API: [https://wowpedia.fandom.com/wiki/Widget ... did=278403](https://wowpedia.fandom.com/wiki/Widget_API?oldid=278403)
Youre doing a classic beginner mistake in vanilla coding.
Has nothing to do with your client.

If you create a new character with your addon it looks like this:
![Image](https://i.ibb.co/LDzw9hRG/2.png)
When you log in again, it works:
![Image](https://i.ibb.co/hJxqSQgV/3.png)

The reason is your bugged event handler.
Youre using ChatGPT obviously and it does that mistake alot.
You can pass inline functions in TBC+, but not in Vanilla.

If you dont want to believe me, up to you, just trying to help you.

## Post 129560 by zkyxykz — 2025-05-04T02:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129560#p129560 | page 1 | era: pre-1.18.1 -->

You totally right, i'm trying to fix this error atm (even if it's 4am here, i'm totally dead lol), following your advices :)
Thank's for help !

## Post 129564 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-05-04T02:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129564#p129564 | page 1 | era: pre-1.18.1 -->

> **zkyxykz wrote: Sun May 04, 2025 2:22 am**
> You totally right, i'm trying to fix this error atm (even if it's 4am here, i'm totally dead lol), following your advices :)
>  Thank's for help !

All good my friend, dont give up.

After looking at your code, it requires 2 fixes:

Nr 1) remove the arguments in line 319 so that it looks like this: Code: Select all

```
BoarsToKillFrameInit:SetScript("OnEvent", function()
```

Nr 2) Replace your "BoarsToKill_SpellDetectFrame" frame logic with this:
Ur unregistering before the spell was found -> bad on first load up:
Code: Select all

```
-- Frame pour détecter le challenge à la connexion via SPELLS_CHANGED
local BoarsToKill_SpellDetectFrame = CreateFrame("Frame")
local checkAttempts = 0 -- var to track attempts to check for spell
local maxCheckAttempts = 5 -- max attempts

BoarsToKill_SpellDetectFrame:RegisterEvent("SPELLS_CHANGED")
BoarsToKill_SpellDetectFrame:RegisterEvent("PLAYER_ENTERING_WORLD")
BoarsToKill_SpellDetectFrame:SetScript("OnEvent", function()
if event == "PLAYER_ENTERING_WORLD" then
checkAttempts = 0
elseif event == "SPELLS_CHANGED" then
if HasBoaringAdventureSpell() then
BoarsToKill_CheckBuffAndInit()
this:UnregisterEvent("SPELLS_CHANGED")
else
checkAttempts = checkAttempts + 1
if checkAttempts >= maxCheckAttempts then -- now we unregister!
this:UnregisterEvent("SPELLS_CHANGED")
BoarsToKill_CheckBuffAndInit()
end
end
end
end)
```

Full code: Code: Select all

```
https://pastebin.com/KZ60kGax
```

Now your addon works on all new characters on first load up.
However, its still very messy. ;)
It has alot of unused locals and redefined locals.

This isnt an elegant fix. Just a quick fix.

## Post 129566 by zkyxykz — 2025-05-04T02:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129566#p129566 | page 1 | era: pre-1.18.1 -->

Oh i edited the first launch by using a simply pop up windows "Start monitoring Boaring Challenge ? Yes - No", instead of detecting the Boaring spell, i'm gonna put locales translation into a locale folder (tomorrow, i'm dead x'))

Tested on multiple new characters, all working well for the moment ![:crossed_fingers:](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f91e.svg), gonna do more tests tomorrow morning.

Thank's again btw, appreciated your help !

 ---

EDIT: Hey ! So, i totally deleted the auto detect section to add a pop up windows, way easier ^^
I tested on multiple chars, with or without tracking, reloading, relogging. Everything working great (for me atm xD)

![Image](https://i.imgur.com/1D0QZd5.png)

Thank you for the help and for the time :)

*Last edited by zkyxykz on Sun May 04, 2025 10:09 am, edited 2 times in total.*

## Post 146400 by Xaldin94 — 2025-08-17T08:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146400#p146400 | page 1 | era: pre-1.18.1 -->

is there a way to reset it? My hc char died and useing the same name it didnt restart

## Post 146402 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-08-17T08:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146402#p146402 | page 1 | era: pre-1.18.1 -->

> **Xaldin94 wrote: Sun Aug 17, 2025 8:27 am**
> is there a way to reset it? My hc char died and useing the same name it didnt restart

Close wow, go to your WTF folder, open the files "BoarsToKill" (probably multiple ones) and open them in your editor,
and edit them. Probably just remove your char names from there, save, and start WoW agian.

## Post 146692 by Xaldin94 — 2025-08-18T07:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146692#p146692 | page 1 | era: pre-1.18.1 -->

okay found the solution:

Go to C:\Users\YourUsername\AppData\Local\TurtleWoW\WTF\Account\Accountname\Servername\Charktername\SavedVariables  and just delete the 2 boar files.

It will ask you on the next log in if you wanna track boars again and starts from 0.

## Post 147818 by Ferretbutler — 2025-08-23T09:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147818#p147818 | page 1 | era: pre-1.18.1 -->

This addon is nearly perfect but it'd be amazing if I had a tracker that would tell you how much time you have before you lose your completely smashed status

## Post 170038 by Niap007 — 2026-03-04T10:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170038#p170038 | page 1 | era: 1.18.1-announced-pre-release -->

Hi can someone upload this addon again please?
The Link on #1 to gethub.com does not work.

Thanks!

