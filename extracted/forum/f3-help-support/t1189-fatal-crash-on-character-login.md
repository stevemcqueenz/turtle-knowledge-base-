---
title: "Fatal crash on character login"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1189"
topic_id: 1189
forum_id: 3
forum: "Help & Support"
author: "Roxanneflowers"
author_authority: "player"
posted: "2020-07-22T01:28:00Z"
last_post: "2020-07-22T16:34:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T09:29:30Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Fatal crash on character login

## Post 7012 by Roxanneflowers (Patch Note Conspiracy Theorist) — 2020-07-22T01:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7012#p7012 | page 1 | era: pre-1.18.1 -->

One of my characters was moving through Dun Morogh on the road to the Dwarven Mortar Team when the game client suddenly fatal crashed to desktop.  All attempts to log into that character have resulted in a repeating fatal crash to desktop.

Strangely enough, I'm able to log into the other characters on my account just fine in other zones (Stormwind, Darnassus).  Makes me wonder if Dun Morogh (alone) crashed and is preventing any character from logging into that zone.

WDB folder was deleted before even launching game session, and has been deleted again after crashes to desktop (no change).

Request assistance with recovering character (Level 6 Paladin) to either the nearest Inn or to Ironforge so I can restart my journey from a crashless location on login.

## Post 7013 by Balake (Bug Report Enthusiast) — 2020-07-22T02:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7013#p7013 | page 1 | era: pre-1.18.1 -->

Do you have any updated models/graphic mods? They might be what is causing the crashes.

## Post 7015 by Roxanneflowers (Patch Note Conspiracy Theorist) — 2020-07-22T04:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7015#p7015 | page 1 | era: pre-1.18.1 -->

Have been playing successfully for more a couple of weeks with no updated graphics.  No changes (other than delete WDB folder) before logging in.  Was able to run from Ironforge to south of Kharanos before the game client just crashed to desktop with no warning.

I tested logins on all of my other alts ... no problems at all.
Log in attempts on the affected character would give me the zone loading bar ... and then crash to desktop before zoning in.

Decided to play an alt for about an hour+ before trying to login on the (damaged?) character afflicted by the crash condition(s).  Was able to log in successfully, presumably due to the hard logout the game automatically does server side after 15 minutes.  Had no problems after that and was able to play the character that had been crashing for about an hour before Hearthing and parking near a bank.

Kind of curious to know what went CURSE-BLOOEY on that character in the first place that would then corrupt subsequent login attempts in such a way as to force a fatal game client crash to desktop ... but since the issue "resolved itself" without requiring a reroll of the character, I'm not going to get too bent out of shape over it.

## Post 7016 by Parcival (Barrens Chat Casualty) — 2020-07-22T10:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7016#p7016 | page 1 | era: pre-1.18.1 -->

Could be a plethora of things that could've caused it. From the client running out of memory, a bad code somewhere, loading a file that doesn't exist or you don't have permission to... I could go on.

For the future - try to place the WoW folder somewhere, where you have all permissions (so, out of Program Files, if you've already done that - disregard this). You can try to use the 4GB patch on the .exe to help with memory issues ( <https://ntcore.com/?page_id=371> ). But what's most interesting is that the crash was caused right by the scripted NPC encounter... I'll try to get a character there and see what happens.

## Post 7018 by Roxanneflowers (Patch Note Conspiracy Theorist) — 2020-07-22T11:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7018#p7018 | page 1 | era: pre-1.18.1 -->

I have my game client located in Application Files under OSX 10.13.6 and am using a Mac Client.

It's interesting that you mention the scripted NPCs of the Dwarven Mortar Team south of Kharanos, because when I (finally) logged back into the character I heard sound playing for their scripted skit, and they were within perception range, but they were all standing around near their tent (at rest and idle) rather than going through their comedy play (which is, of course, scripted).  Makes me wonder if the crash happened because their scripted performances were already in progress when my perception range reached them (I had just run past the curve in the road and turned towards them) when my client fatally crashed to desktop reliably.  It could be that the scripting for their performance art only "works" if you're within perception range of it from the start, but if you enter perception range after the start while their scripting is in progress SOMETHING BREAKS in a way that causes the fatal error crash ... and that in order to "fix" it requires the "wait 15 minutes" hard character reset server side with the scripting for the Dwarven Mortar Team no longer running by the time you attempt to log back in after those 15 minutes.

So basically a coding/scripting trap that breaks if you "intrude" upon it after it has started, but which is fine if you're there from the beginning of it.  That would make a lot of sense.  The location is right (entering perception range of the Dwarven Mortar Team while moving) and the evidence upon finally logging in successfully fits (audio clips of the Mortar Team play but they're not performing their skit).

## Post 7020 by Parcival (Barrens Chat Casualty) — 2020-07-22T16:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7020#p7020 | page 1 | era: pre-1.18.1 -->

Hmmm... they should do their thing without you needing to be there. Even if you walk into the scene midway, it just continues. Since they stand there motionless could be a client issue alltogether.

It is best someone with a mac client also tries the scene and we will see.

