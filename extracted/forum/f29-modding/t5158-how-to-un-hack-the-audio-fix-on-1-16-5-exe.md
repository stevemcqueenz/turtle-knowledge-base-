---
title: "How to (Un)Hack the Audio Fix on 1.16.5 EXE"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5158"
topic_id: 5158
forum_id: 29
forum: "Modding"
author: "Redmagejoe"
author_authority: "player"
posted: "2022-12-21T20:27:00Z"
last_post: "2023-12-10T19:35:00Z"
post_count: 13
pages: 1
fetched: "2026-09-10T10:42:38Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# How to (Un)Hack the Audio Fix on 1.16.5 EXE

## Post 31333 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-21T20:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31333#p31333 | page 1 | era: pre-1.18.1 -->

Many people, like myself, are complaining about the janky sound caused by removing a hack that was in the previous client with this latest update. Sounds sometimes not playing, or playing as though far far far away, making for a somewhat unresponsive game experience where the audio feedback you rely on is, well, not reliable. This change was made to supposedly address sound-related crashes people experienced in raids or elsewhere, but it seems not everyone experienced this problem.

As a result, I took it upon myself to pester the powers that be to undo this change on my personal client, and I see others looking for this solution as well. I will outline the steps to revert the audio changes, what to do in case this causes other problems, and disclaimers to using this entire process below.

 **DISCLAIMER: Neither I nor Turtle staff accept any responsibility for problems that arise from tampering with your WoW.exe binary. If you are not familiar with hex editing, you SHOULD NOT use this guide. Please follow the steps exactly and do not change anything other than what is listed.**

Before making any changes, it is advised that you make a copy of your WoW.exe and name it something you'll recognize, like WoWbackup.exe or WoW.exe.backup or anything you desire. You can skip the following process if you already know what to do from this image shown: ![Image](https://i.imgur.com/LYGFwvH.png)

In order to apply this fix, you are going to need a hex editor of your choice. Personally, I prefer TinyHexer. You will want to open this program and drop your WoW.exe in, and you should see the binary of the program as shown below.

![Image](https://i.imgur.com/lpmcZcG.png)

Referencing the image shown with the offsets and addresses, you are going to want to navigate to those specific offsets and change those bytes AND THOSE BYTES ONLY. You can do this through Ctrl + G to open a prompt where you must type the exact offset shown.

![Image](https://i.imgur.com/9LVXm6K.png)

This will take you to the exact byte you want to edit. BE SURE THAT YOU ARE IN INSERT MODE (hit the Insert Key). This will be indicated by your cursor being a flashing box rather than a flashing line.

![Image](https://i.imgur.com/z1iSV2x.png)

Type the byte values listed above for the specific offsets. Therefore, we are changing 385D to 9C5C. If you did this properly, none of the bytes to the right of where you are editing should have shifted, and your new byte values should be highlighted in yellow. If this is not true, use Ctrl + Z to undo any change you just made.

![Image](https://i.imgur.com/SSmR0vy.png)

Repeat the process of Goto Offset (Ctrl + G), using Insert Mode, and changing the byte values for all 3 listed offsets. Once you are done save the file in your hex editor and close. In the case of Tiny Hexer, a backup of your pre-edited file will be saved automatically in the same directory so that if you break something, you have a fallback.

And there you have it. You now have the same sound configuration as the previous client had.

## Post 31340 by Shamma (Bug Report Enthusiast) — 2022-12-21T21:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31340#p31340 | page 1 | era: pre-1.18.1 -->

While this is doable for some, it will be hex voodoo magic for others. Why not also post your modified .exe here?

## Post 31383 by Kingalion — 2022-12-22T13:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31383#p31383 | page 1 | era: pre-1.18.1 -->

Thanks for posting this, but I have a question, values we change in the other offsets. U showed us to change 0x0005728C in column 0C0D. what other values we change to and in what column? can u make it clear. and thanks so much in advance.

## Post 31641 by Ashstache (Barrens Chat Casualty) — 2022-12-27T10:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31641#p31641 | page 1 | era: pre-1.18.1 -->

You can also enter these into chat (or, better, make a macro):
/console SoundMemoryCache 128
/console SoundMaxHardware Channels 128
/console SoundSoftwareChannels 128

## Post 31672 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-27T20:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31672#p31672 | page 1 | era: pre-1.18.1 -->

> **Ashstache wrote: Tue Dec 27, 2022 10:59 am**
> You can also enter these into chat (or, better, make a macro):
>  /console SoundMemoryCache 128
>  /console SoundMaxHardware Channels 128
>  /console SoundSoftwareChannels 128

With my testing, the hardcoded changes to the binary prevented these from restoring the sound to its previous appropriate behavior, which is why I made this guide.

## Post 31985 by Redmagejoe (Grandmaster of Forum PvP) — 2023-01-02T20:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31985#p31985 | page 1 | era: pre-1.18.1 -->

Don't forget to reapply this hack after the latest client update.

## Post 35619 by Scaryna — 2023-02-21T14:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35619#p35619 | page 1 | era: pre-1.18.1 -->

Hi! Do you guys maybe know why wow sometimes doesn't play a hit sound when I'm using two weapons? It seems like if the hit happens too fast, wow just skips the sound. I'm modding my hit sounds to make them like in Ragnarok Online, and that's when I found that problem. I used this Fix but it didn't help.

## Post 35687 by Redmagejoe (Grandmaster of Forum PvP) — 2023-02-22T00:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35687#p35687 | page 1 | era: pre-1.18.1 -->

> **Scaryna wrote: Tue Feb 21, 2023 2:00 pm**
> Hi! Do you guys maybe know why wow sometimes doesn't play a hit sound when I'm using two weapons? It seems like if the hit happens too fast, wow just skips the sound. I'm modding my hit sounds to make them like in Ragnarok Online, and that's when I found that problem. I used this Fix but it didn't help.

The answer to your question should be in the OP, and I would assume the reason you're in this thread is to fix the issue you described. Therefore you will need to follow the instructions.

## Post 40331 by Dhrazar (Barrens Chat Casualty) — 2023-04-05T01:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40331#p40331 | page 1 | era: pre-1.18.1 -->

Why aren't you showing us the other two changed lines in your screenshots ?
Your Screenshots just showing the first offset edited, not the other two.
When searching for 0x000572C8 it brings you to 0x000572C0, so I assume this is the right line.
For the first two offsets we have the 8300 after the edited 9C5C.
This is correct for 0x00057280 and 0x00057250.
But for the last one 0x000572C0 I have after the edited 9C5C ---> BA4C instead of 8300 like the others.
Should I change this too? Like in your first screenshot the values ending with 83.

## Post 42274 by Daithos — 2023-04-20T01:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42274#p42274 | page 1 | era: pre-1.18.1 -->

Can you just post your .exe client so everyone else can use it for troubleshooting?

## Post 66257 by Remorsxz — 2023-09-21T17:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66257#p66257 | page 1 | era: pre-1.18.1 -->

has anybody managed to do this magic and willing to post his .exe for downloading?

## Post 66260 by Redmagejoe (Grandmaster of Forum PvP) — 2023-09-21T17:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66260#p66260 | page 1 | era: pre-1.18.1 -->

You could also just use vanilla-tweaks and it has a Sound Channels fix built in.

## Post 80567 by Samadhi63 — 2023-12-10T19:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80567#p80567 | page 1 | era: pre-1.18.1 -->

Is it possible just upload fixed "wow.exe"  file ?)

