---
title: "Death message"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6493"
topic_id: 6493
forum_id: 14
forum: "Suggestions"
author: "Nudibranch"
author_authority: "player"
posted: "2023-04-09T08:46:00Z"
last_post: "2024-05-14T11:47:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T11:53:06Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Death message

## Post 40872 by Nudibranch — 2023-04-09T08:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40872#p40872 | page 1 | era: pre-1.18.1 -->

Just a small consistency improvement to the hardcore character death message:

Currently, messages are in this format:
 *A tragedy has occurred. Hardcore character Blanchy has fallen to Charred Ancient (level 25) at level 24. May this sacrifice not be forgotten.*

Suggested message format:
 *A tragedy has occurred. Hardcore character Blanchy (level 24) has fallen to Charred Ancient (level 25) in Elwynn Forest. May this sacrifice not be forgotten.*

The difference is that the level would always be displayed right after the character/NPC name, unlike the current format, that puts NPC's level right after its name, but player's level is at the very end, making it harder to read.

I've also added the zone name as I think it would be a nice addition.

A variation suggested by others is to omit the word "level" entirely.

Another suggestion is to make the character's name clickable, so we can easily either shift-click their name to get more info or whisper the person, instead of having to manually type "/who <name>".

## Post 41050 by Ugoboom (Bug Report Enthusiast) — 2023-04-10T20:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41050#p41050 | page 1 | era: pre-1.18.1 -->

Agreed, simple change, would be way more readable. And yeah zone text would be nice.

The shift-clickable thing I think is addon dependent and would have to be shipped with te client.

## Post 41056 by Anrey — 2023-04-10T21:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41056#p41056 | page 1 | era: pre-1.18.1 -->

Can we have kill count on npcs also?

## Post 41123 by Nudibranch — 2023-04-11T09:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41123#p41123 | page 1 | era: pre-1.18.1 -->

> **Ugoboom wrote: Mon Apr 10, 2023 8:54 pm**
> The shift-clickable thing I think is addon dependent and would have to be shipped with te client.

Fortunately, this can be done with no addons, and it's by including this string in the message, where "User" is the name of the character: Code: Select all

```
\124cffffffff\124Hplayer:User\124h[User]\124h\124r
```

For example, running Code: Select all

```
/run DEFAULT_CHAT_FRAME:AddMessage("Say hi to ".."\124cffffffff\124Hplayer:User\124h[User]\124h\124r")
```

will print "Say hi to [User]", and [User] will be clickable without any addons enabled.

## Post 94832 by Nudibranch — 2024-05-14T09:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94832#p94832 | page 1 | era: pre-1.18.1 -->

Annual bump!

## Post 94842 by Bowser (Turtle WoW Team) [STAFF] — 2024-05-14T11:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94842#p94842 | page 1 | era: pre-1.18.1 -->

We will implement your suggestion.

