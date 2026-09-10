---
title: "Sound Folder Editing"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6572"
topic_id: 6572
forum_id: 29
forum: "Modding"
author: "Thirstybeta"
author_authority: "player"
posted: "2023-04-13T18:04:00Z"
last_post: "2023-04-20T01:55:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T10:43:19Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Sound Folder Editing

## Post 41428 by Thirstybeta — 2023-04-13T18:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41428#p41428 | page 1 | era: pre-1.18.1 -->

My friends and I made a sound pack over the years that change a lot of the spell and death sounds to various goofy things. We used the retail WoW Classic client and it worked fine: You make a Sound folder and put in your custom sounds that have been renamed to the spells you want to replace, following the original file structure. In Turtle WoW, that doesn't seem to fully work.

I saw some people say it has to be .wav files instead of .ogg files, which is what Classic used. When I use .ogg files it keeps the original sound, but when I convert them to .wav files, it will play no noise at all when I fire off the spell. Has anyone gotten this to work consistently?

So for instance:

Turtle WoW/Sound/spells/stealth.ogg doesn't work because it keeps the original sound.
Turtle Wow/Sound/spells/stealth.wav also doesn't work because it plays no sound at all. But it is obviously recognizing that I changed something or it would keep the original sound like the .ogg file did.

Someone help. We can't play WoW without our sound pack.

## Post 41429 by Maesus (Barrens Chat Casualty) — 2023-04-13T18:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41429#p41429 | page 1 | era: pre-1.18.1 -->

Bumping because now I'd love to add some Darkest Dungeon sound effects to the game and I wan't to know how.

## Post 41430 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-04-13T18:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41430#p41430 | page 1 | era: pre-1.18.1 -->

I remember reading that the sound files need to be the same length in playtime, otherwise it doesn't play anything. Have you checked if there are any differences?

## Post 41431 by Thirstybeta — 2023-04-13T18:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41431#p41431 | page 1 | era: pre-1.18.1 -->

> **Ravenstone wrote: Thu Apr 13, 2023 6:10 pm**
> I remember reading that the sound files need to be the same length in playtime, otherwise it doesn't play anything. Have you checked if there are any differences?

I read that too, and didn't think much of it because that wasn't the case in Classic or most of our sounds wouldn't have worked. I'll make one exactly the same and see if that works now though just to say I tried it.

Edit: Actually, I just checked and for the example I used for the spell stealth, both the original and the custom files are both 1 second and it still comes out as silence.

## Post 41442 by Nilay (Barrens Chat Casualty) — 2023-04-13T19:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41442#p41442 | page 1 | era: pre-1.18.1 -->

> **Maesus wrote: Thu Apr 13, 2023 6:10 pm**
> Bumping because now I'd love to add some Darkest Dungeon sound effects to the game and I wan't to know how.

Now I want to do the same o_o

## Post 42275 by Daithos — 2023-04-20T01:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42275#p42275 | page 1 | era: pre-1.18.1 -->

I've had the exact same problem since I started. I've made a post here and asked on the discord as well, and no one has given any kind of response to what might be causing it. I've tried changing durations and lowering the quality of multiple customs that will not play and neither method seems to fix it.

> that wasn't the case in Classic or most of our sounds wouldn't have worked

Classic didn't run off of 1.12 like TWoW does. That is definitely the source of the problem with most custom sound files.

