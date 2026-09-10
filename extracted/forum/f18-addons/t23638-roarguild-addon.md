---
title: "\"ROARGuild\"-Addon"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23638"
topic_id: 23638
forum_id: 18
forum: "AddOns"
author: "Morkahja"
author_authority: "player"
posted: "2026-01-17T07:03:00Z"
last_post: "2026-01-31T19:00:00Z"
post_count: 15
pages: 1
fetched: "2026-09-10T10:22:13Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# "ROARGuild"-Addon

## Post 165407 by Morkahja (Barrens Chat Casualty) — 2026-01-17T07:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165407#p165407 | page 1 | era: 1.18.1-announced-pre-release -->

I am pretty happy with my addon and jsut wanted to share it here so you guys can play around with it as you like :)

<https://github.com/Morkahja/RoarGuild>

![🦁](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f981.svg) RoarGuild Addon

Version: 1.2 Author: babunigaming Environment: Vanilla / Turtle WoW 1.12 (Lua 5.0)

RoarGuild is a flavor-first action bar addon that makes your character feel alive. It triggers emotes and movement-based rituals directly from gameplay—no macros, no rotation pollution. Includes GodBod, a physical reminder system to keep the player alive too.

━━━━━━━━━━━━━━━━━━

What It Does

RoarGuild • Uses real action bar presses as triggers • Each watched slot belongs to an instance with its own cooldown and chance • Emotes are no longer hardcoded • You maintain a master emote list • Each instance can draw from multiple emotes, chosen randomly • Default emote is always ROAR • Global 0.5% chance to emote on any action for emergent flavor

GodBod • Independent system • Action bar presses trigger short exercise reminders • Configurable chance and cooldown • Outputs locally or to party/guild/chat depending on roll • Designed to interrupt sedentary play without breaking immersion

The two systems share a hook but are otherwise isolated.

━━━━━━━━━━━━━━━━━━

RoarGuild Slash Commands (/rogu)

Slot & Timing • /rogu slotX <slot> — assign slot to instance X • /rogu chanceX <0–100> — trigger chance for instance X • /rogu timerX <seconds> — cooldown for instance X

Emote System • /rogu emote <TOKEN> — add emote to master list • /rogu emote list — list all emotes with IDs • /rogu emoteX <id> — add emote ID to instance X • /rogu emoteX -<id> — remove emote ID • /rogu emoteX clear — reset instance X to ROAR • /rogu emoteX list — list emotes for instance X

Control & Info • /rogu watch — print pressed slots • /rogu info — full instance overview • /rogu reset — clear all instances • /rogu on / /rogu off — enable or disable • /rogu roar — manually fire instance 1 • /rogu rexp — show rested XP (max 30 bubbles)

━━━━━━━━━━━━━━━━━━

GodBod Slash Commands (/godbod)

• /godbod slot <slot> — watch slot • /godbod unslot <slot> — remove slot • /godbod clear — clear all slots • /godbod watch — debug slot presses • /godbod chance <0–100> — trigger chance • /godbod cd <seconds> — cooldown • /godbod on / /godbod off — enable or disable • /godbod info — show current settings

━━━━━━━━━━━━━━━━━━

Quick Setup

RoarGuild

/rogu watch
Press desired action bar slot
/rogu slot1 <slot>
/rogu emote LAUGH
/rogu emote1 2
/rogu chance1 40
/rogu timer1 10
/rogu on

GodBod

/godbod slot <slot>
/godbod chance 80
/godbod cd 60
/godbod on

━━━━━━━━━━━━━━━━━━

Design Notes • No polling, no OnUpdate spam • Fully event-driven through real gameplay • Emotes are data-driven • SavedVariables sanitized on load • Default state is always safe and minimal

Characters are not loadouts. They are stories in motion.

*Last edited by Morkahja on Sun Jan 18, 2026 2:31 pm, edited 1 time in total.*

## Post 165414 by Reddguard — 2026-01-17T10:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165414#p165414 | page 1 | era: 1.18.1-announced-pre-release -->

Sounds interesting but I can't imagine how it is in action. Can you provide screenshots or videos? :)

## Post 165438 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2026-01-17T15:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165438#p165438 | page 1 | era: 1.18.1-announced-pre-release -->

> **Reddguard wrote: Sat Jan 17, 2026 10:33 am**
> Sounds interesting but I can't imagine how it is in action. Can you provide screenshots or videos? :)

I looked at the code since I also didnt understand the description;

As far as I can tell, it basically does 2 things:
 - You config a button, on wich when pressed, it will use an emote like /roar etc. (60 sec CD)
 - Also a hardcoded 0.5% to procc on any button press
 - It also has a 7 minute reminder in case u havent emoted in a while (?)

 - And then there is a hardcoded list of exercise reminders like : "Squeeze your shoulder blades together for five breaths." or "Drink water. Posture check." etc.
 - There is also a 13% chance it will write that to your guild or raid

The code is quite verbose and looks AI generated. The core logic is maybe 100 lines of code.
The DB initialization is the most funny code Ive seen in a while.   happy_turtle_head

But the addon should work and do its job.
Hope it helps understanding the addon.

> **Morkahja wrote: Sat Jan 17, 2026 7:03 am**
> Fully event-driven through real gameplay (???)
>
>  Emotes are data-driven (????) • SavedVariables sanitized on load (??????)

Bro what...?? xD

## Post 165500 by Atreidon (Grandmaster of Forum PvP) — 2026-01-18T07:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165500#p165500 | page 1 | era: 1.18.1-announced-pre-release -->

Code: Select all

```
local function outputExercise(text)
local roll = math.random(1,100)
if roll >= 99 then
SendChatMessage(text, "CHANNEL", nil, 6)
elseif roll >= 97 then
SendChatMessage(text, "CHANNEL", nil, 1)
elseif roll >= 95 then
SendChatMessage(text, "PARTY")
elseif roll >= 93 then
SendChatMessage(text, "YELL")
elseif roll >= 91 then
SendChatMessage(text, "SAY")
elseif roll >= 87 then
SendChatMessage(text, "GUILD")
else
godChat(text)
end
end
```

Kekw, automatic /1 and what i presume is expected to be worldchat at /6 poisoning included   dead_turtle_head

## Post 165503 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2026-01-18T07:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165503#p165503 | page 1 | era: 1.18.1-announced-pre-release -->

Ye its kinda wild. Also WoW assigns channels dynamically, so /6 wont always be worldchat.

## Post 165504 by basednoob (Patch Note Conspiracy Theorist) — 2026-01-18T07:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165504#p165504 | page 1 | era: 1.18.1-announced-pre-release -->

so it's not really a guild addon but it can occasionally send messages to your guild?

## Post 165505 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2026-01-18T07:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165505#p165505 | page 1 | era: 1.18.1-announced-pre-release -->

> **basednoob wrote: Sun Jan 18, 2026 7:46 am**
> so it's not really a guild addon but it can occasionally send messages to your guild?

Yes it has a this 13% chance to send these exercise messages to the guild.
Like "posture check" etc.

## Post 165509 by basednoob (Patch Note Conspiracy Theorist) — 2026-01-18T08:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165509#p165509 | page 1 | era: 1.18.1-announced-pre-release -->

> **Foreverdelta33 wrote: Sun Jan 18, 2026 7:51 am**
> > **basednoob wrote: Sun Jan 18, 2026 7:46 am**
> > so it's not really a guild addon but it can occasionally send messages to your guild?
>
>   Yes it has a this 13% chance to send these exercise messages to the guild.
>  Like "posture check" etc.

That seems high enough to risk a guild kick   dead_turtle_head

## Post 165529 by Morkahja (Barrens Chat Casualty) — 2026-01-18T13:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165529#p165529 | page 1 | era: 1.18.1-announced-pre-release -->

> **Foreverdelta33 wrote: Sat Jan 17, 2026 3:22 pm**
> > **Reddguard wrote: Sat Jan 17, 2026 10:33 am**
> > Emotes are data-driven (????) • SavedVariables sanitized on load (??????)
>
>   Bro what...?? xD

Hi, yes i am using AI for the scripts and texts, wouldnt be able to realize my ideas otherwise :)

 **Emotes are data-driven**

The addon does not hardcode(anymore) which emotes can fire.
Emotes live as data in ROGUDB.emotes and are referenced by ID.

 **SavedVariables sanitized on load**

When the addon loads, it actively validates and repairs saved data before use.

Thanks for the feedback. To clarify: all features except one are disabled by default and do nothing until explicitly configured. The only behavior active on installation is a 0.5% chance to trigger a **ROAR** emote on action bar use, now gated by a 2-second cooldown.

For all features chance and cooldown are fully configurable so everyone can choose themselves how often it triggers.

Good point with the godbod posting in other channels, best to remove the world channel from this one, even if the chance is so low that it really doesnt happen often ^^

## Post 165531 by Morkahja (Barrens Chat Casualty) — 2026-01-18T14:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165531#p165531 | page 1 | era: 1.18.1-announced-pre-release -->

> **Foreverdelta33 wrote: Sun Jan 18, 2026 7:51 am**
> > **basednoob wrote: Sun Jan 18, 2026 7:46 am**
> > so it's not really a guild addon but it can occasionally send messages to your guild?
>
>   Yes it has a this 13% chance to send these exercise messages to the guild.
>  Like "posture check" etc.

for some reason only 87-90 is posting to giuld chat :)) so its what, 4%?

i removed the global channels:

local function outputExercise(text)
local roll = math.random(1,100)
if roll >= 95 then
SendChatMessage(text, "PARTY")
elseif roll >= 93 then
SendChatMessage(text, "YELL")
elseif roll >= 91 then
SendChatMessage(text, "SAY")
elseif roll >= 87 then
SendChatMessage(text, "GUILD")
else
godChat(text)
end
end

So IF godbod is configured (i have it on the actionslot i use for my drinks so always when my char drinks i get a reminder to move my body:) ) it has a chance to share the messages locally
PARTY: rolls 95–100 → 6%
YELL: rolls 93–94 → 2%
SAY: rolls 91–92 → 2%
GUILD: rolls 87–90 → 4%
Local GodBod chat(printed only for player self): rolls 1–86 → 86%

Keep in mind that the chance to send the message is fully configurable, for example by default the slots have a 60seconds cooldown.

## Post 165536 by Morkahja (Barrens Chat Casualty) — 2026-01-18T14:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165536#p165536 | page 1 | era: 1.18.1-announced-pre-release -->

Ah and for the name - its the "ROAR-Guild" - addon, not the ROAR Guild-addon, thats a bit confusing :D

## Post 165546 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2026-01-18T17:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165546#p165546 | page 1 | era: 1.18.1-announced-pre-release -->

> **Morkahja wrote: Sun Jan 18, 2026 1:51 pm**
> Hi, yes i am using AI for the scripts and texts, wouldnt be able to realize my ideas otherwise :)
>
>  1) **Emotes are data-driven**
>
>  The addon does not hardcode(anymore) which emotes can fire.
>  Emotes live as data in ROGUDB.emotes and are referenced by ID.
>
>  2) **SavedVariables sanitized on load**
>
>  When the addon loads, it actively validates and repairs saved data before use.

I like your addon idea, but...

 1) "Data-driven" - brother everything in software is "data-driven".
What do you mean by that exactly?   happy_turtle_head .

 2) SavedVariables sanitization - you're type-checking all over the place dude?
If youre serious about coding with AI, u could read this for a start: [viewtopic.php?t=21861](https://forum.turtlecraft.gg/viewtopic.php?t=21861)

Again, the idea is cool for sure.   smiling_turtle_head

*Last edited by Foreverdelta33 on Mon Jan 19, 2026 11:26 pm, edited 3 times in total.*

## Post 165570 by Morkahja (Barrens Chat Casualty) — 2026-01-19T00:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165570#p165570 | page 1 | era: 1.18.1-announced-pre-release -->

Thanks for the feedback, a bit weird to get stuck on wording, but i understand the confusion, since some of the description (for example the part with data-driven) originate from an internal past development. And its confusion that the roarguild addon includes godbod, that actually was it's own project and addon. So unlike before, the emotes used for the /rogu part of the addon don't base on a hardcoded list, but rather derive from data that is saved by the user, that's where the data-driven comes from. Some hiccups in the development might have led to unnecessary double-checking of the emote table, probably because it was a pain in the ass to change from the hardcoded version to the fully dynamic. Thanks for the hint that the sanitizer seems rudimentary.  Also thanks for the link.

## Post 166969 by Morkahja (Barrens Chat Casualty) — 2026-01-30T18:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166969#p166969 | page 1 | era: 1.18.1-announced-pre-release -->

changes since 1.2:

- GodBod is no longer part of RoarGuild.
Exercise messages no longer appear.
RoarGuild focuses only on emotes and invites.

- Characters no longer share settings.
Each character has its own watched slots, chances, timers, and on/off state.
Switching characters no longer changes another character’s behavior.

- Watched action slots trigger more reliably.
 100% chance actually means 100%.

- Cooldowns reset on login / reload.
Emotes can trigger immediately after logging in.

- New /rogu resetcd command, Instantly clears all emote cooldowns

- Global fallback emote more consistent. Still fires randomly on any action.

- /rogu invite <1–10> sends a roar invite message to a specific channel. Each invite picks randomly from the full message list.

- /rogu on / /rogu off are working properly now - State is remembered correctly after reloads

- /rogu info shows more data - per-character information

## Post 167079 by Xudo (Grandmaster of Forum PvP) — 2026-01-31T19:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167079#p167079 | page 1 | era: 1.18.1-announced-pre-release -->

I assume you grasp the addon making basics. How about making some useful stuff?

Here is an idea - addon that is turned on in dungeons. When player presses the button, addon automatically finds the best target to kill and marks it with a skull?

Another idea - addon that allows you to make wishlist of items and when you join LFG group (and all party members joined), it prints your wishlist for that dungeon to party chat.

