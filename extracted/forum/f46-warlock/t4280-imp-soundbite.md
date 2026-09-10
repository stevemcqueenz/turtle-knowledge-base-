---
title: "Imp soundbite"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4280"
topic_id: 4280
forum_id: 46
forum: "Warlock"
author: "Darkgestalt"
author_authority: "player"
posted: "2022-09-19T15:25:00Z"
last_post: "2025-04-25T19:28:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T08:16:30Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Imp soundbite

## Post 25511 by Darkgestalt — 2022-09-19T15:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25511#p25511 | page 1 | era: pre-1.18.1 -->

I dont know about you all, but every other minute when I have my Imp out he starts rambling off about seeing other warlocks. While initially funny, his speech is really long and specific and I have reached my breaking point.

I tried searching all the mpq files that I suspected would hold this soundbite, but I just cant find it. So any fellow warlocks know how to get rid of this annoying speech without removing all emote sounds, or all pet sounds for that matter?

PS: was this in the 2005 version or Classic as well, I dont recall.

## Post 27847 by Reddguard — 2022-10-24T14:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27847#p27847 | page 1 | era: pre-1.18.1 -->

I also can't hear that line anymore. The line is in Speech.MPQ, the file path is
speech/sound/creature/ImpVO, it's the IMP_FUNNY.ogg file.

But I can't replace it. Normally I can replace .ogg files when I recreate the folder path with another .ogg file with the same name in the root folder, but with this file it doesn't work. Has anyone an idea how to replace that particular line?

## Post 27848 by Nhezkho — 2022-10-24T16:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27848#p27848 | page 1 | era: pre-1.18.1 -->

Please share a way to remove the imp sounds, that would be great. Thanks for making this thread.

## Post 27885 by Reddguard — 2022-10-25T06:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27885#p27885 | page 1 | era: pre-1.18.1 -->

Oh okay, it's not an .ogg file but a .wav file. But still I can't replace it with putting a folder into the root folder :(

## Post 28101 by Radlberger — 2022-10-29T08:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28101#p28101 | page 1 | era: pre-1.18.1 -->

> **Reddguard wrote: Mon Oct 24, 2022 2:01 pm**
> I also can't hear that line anymore. The line is in Speech.MPQ, the file path is
>  speech/sound/creature/ImpVO, it's the IMP_FUNNY.ogg file.
>
>  But I can't replace it. Normally I can replace .ogg files when I recreate the folder path with another .ogg file with the same name in the root folder, but with this file it doesn't work. Has anyone an idea how to replace that particular line?

There is no IMPVO in Speech.MPQ    /sound/creature/..
Really strange. I invested some time and searched around in speech and sound. Nothing.

 *edit* *Success*

The ImpVO is in the Patch.MPQ. Since i never want to hear that again i just deleted the IMP_FUNNY, IMP_ORDER(1-4) and the IMP_DISMISS(1-4).

Worked. No Errors so far. Have a good one.

 **edit 2*

You need a MPQ Editor for that. (Freeware, google it)

*Last edited by Radlberger on Sat Oct 29, 2022 9:42 am, edited 1 time in total.*

## Post 28102 by Darkgestalt — 2022-10-29T09:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28102#p28102 | page 1 | era: pre-1.18.1 -->

Can't believe after all this time you guys resurrected this thread and found a fix.

Thanks everyone, and happy summoning!

EDIT Also, interesting to see now: that bloody speech of his is 14 seconds long! 14 seconds that get repeated every other minute! Who thought this was a good idea?

## Post 128495 by emmaChaotic — 2025-04-25T19:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128495#p128495 | page 1 | era: pre-1.18.1 -->

> **Radlberger wrote: Sat Oct 29, 2022 8:40 am**
> There is no IMPVO in Speech.MPQ    /sound/creature/..
>  Really strange. I invested some time and searched around in speech and sound. Nothing.
>
>  *edit* *Success*
>
>  The ImpVO is in the Patch.MPQ. Since i never want to hear that again i just deleted the IMP_FUNNY, IMP_ORDER(1-4) and the IMP_DISMISS(1-4).
>
>  Worked. No Errors so far. Have a good one.
>
>  **edit 2*
>
>  You need a MPQ Editor for that. (Freeware, google it)

Thank you so much.

I used LADIK's MPQ Editor

Game working great after this fix.  No more annoying Imp sounds.

