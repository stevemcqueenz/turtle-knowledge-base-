---
title: "Mechanostrider Silencer sound fix does not work"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8368"
topic_id: 8368
forum_id: 3
forum: "Help & Support"
author: "Stein"
author_authority: "player"
posted: "2023-07-18T11:06:00Z"
last_post: "2023-07-19T10:19:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T09:10:29Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Mechanostrider Silencer sound fix does not work

## Post 53906 by Stein — 2023-07-18T11:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53906#p53906 | page 1 | era: pre-1.18.1 -->

Hi,

I used the audio file from here: <https://turtle-wow.fandom.com/wiki/Sound_Mods>

Nothing has changed when I copied the Sounds folder to the root of WOW folder. What to do?

## Post 53907 by Pepesmite (Turtle WoW Team) [STAFF] — 2023-07-18T11:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53907#p53907 | page 1 | era: pre-1.18.1 -->

> **Stein wrote: Tue Jul 18, 2023 11:06 am**
> Hi,
>
>  I used the audio file from here: <https://turtle-wow.fandom.com/wiki/Sound_Mods>
>
>  Nothing has changed when I copied the Sounds folder to the root of WOW folder. What to do?

Hello!
Please, make a bug report on our tracker: <https://github.com/slowtorta/turtlewow-bug-tracker>
It's easier for the team to document and investigate issues if they're reported on Github.

## Post 53915 by Stein — 2023-07-18T12:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53915#p53915 | page 1 | era: pre-1.18.1 -->

I am not sure if this is a bug or a mistake in wIki?

## Post 53931 by Pepesmite (Turtle WoW Team) [STAFF] — 2023-07-18T13:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53931#p53931 | page 1 | era: pre-1.18.1 -->

> **Stein wrote: Tue Jul 18, 2023 12:13 pm**
> I am not sure if this is a bug or a mistake in wIki?

In that case, I recommend you use discord and ask your question in the #turtle-wiki or #turtle-moding section.

## Post 53985 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-07-18T20:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53985#p53985 | page 1 | era: pre-1.18.1 -->

No need for a bug report; I can already see the problem.
(Also, I'm pretty sure Turtle Team isn't supposed to offer support for **any** third-party gizmos or mods, Pepesmith…)

In "Sound.MPQ", sounds are stored as .WAV files.  The file contained within that "MechanoStrider Muffler" mod is an ".OGG" file, which is the incorrect format.  Additionally, it's also the wrong bitrate and has the wrong number of sound channels.  But getting back to the point, Vanilla *World of Warcraft* isn't smart enough to see the OGG file and decide "Oh, I should replace the WAV file with this because it has the same name!"

Try [this file](https://www.mediafire.com/file/w8z42zv34x3p2j2), instead.  It uses a WAV file matching the specifications of the original sound, so it *should* work, but I'm too lazy to check.  d:

 **07/19 Edit:**
I updated the wiki page, too.  Why not.

*Last edited by Jolikmc on Wed Jul 19, 2023 5:52 pm, edited 1 time in total.*

## Post 54041 by Stein — 2023-07-19T10:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54041#p54041 | page 1 | era: pre-1.18.1 -->

Thanks, this works perfectly! Someone should update wiki!

