---
title: "Internal Level 1 small"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20525"
topic_id: 20525
forum_id: 18
forum: "AddOns"
author: "Foreverdelta33"
author_authority: "player"
posted: "2025-07-28T00:37:00Z"
last_post: "2025-07-28T16:49:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:24:58Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Internal Level 1 small

## Post 141794 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-07-28T00:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=141794#p141794 | page 1 | era: pre-1.18.1 -->

Quick Preword:
This is an experimental, internal AI assistant addon that brings natural language processing to vanilla WoW.
It is 100% internal - no external dll's or mods needed. It behaves like any other addon. 100% LUA, nothing else.

As a hobbyist developer (not a professional AI engineer), I'm exploring
what's possible with conversational interfaces in classic WoW. The goal is to create an
intelligent companion that understands plain English commands and helps automate
routine tasks through voice and text interaction.

This is alpha software - expect bugs, missing features, and rough edges.
The AI does not yet learn from your commands, but it can memorize.
Feedback and testing from the community will help alot.
Think of it as having a helpful AI friend.

It does not modify any object in your UI, and therefore should be 100% compatible with all other addons.

AI Intelligence Classification  LEVEL 1 - ANI (Artificial Narrow Intelligence)  (AeonAI)
Domain-specific intelligence
Rule-based or pattern matching systems
No transfer learning between domains
Examples: Chess AI, spam filters, recommendation systems

LEVEL 2 - Enhanced ANI
Sophisticated natural language processing within domain
Complex state management and memory
Multi-modal interaction (voice, text, timing)
Advanced pattern recognition with contextual understanding

LEVEL 3 - Proto-AGI (ChatGPT etc.)
Cross-domain reasoning capabilities
Creative problem solving
Contextual understanding across topics
Limited by training data, no true learning

LEVEL 4 - AGI (Artificial General Intelligence)
Human-level intelligence across all domains
Self-directed learning and adaptation
Creative and abstract reasoning
Transfer knowledge between unrelated fields
Currently theoretical/not achieved

LEVEL 5 - ASI (Artificial Super Intelligence)
Exceeds human intelligence in all areas
Self-improving capabilities
Potentially recursive self-enhancement
Purely theoretical

.

CORE FEATURES:
 - Full control over all processors and AI update rate
 - Natural Language Processing - Understands conversational commands in chat
 - Voice Responses - AI speaks back with male/female voice options
 - Timing System - Schedule commands with natural time expressions
 - Permanent Commands - Set persistent behaviors that survive logouts
BASIC INTERFACE CONTROL:
ai: hi
ai: open bags
ai: close character info
ai: open bags for 30 seconds
ai: close map after 5 minutes
ai: open atlas when entering dungeon for 10 seconds forever
ai: open talents during combat permanently
ai: close social info when im in stormwind

Targets: spellbook, character info, social info, talents, bags, map, atlas, atlasloot

TIMING OPTIONS:
 - after/in [time] - Execute after delay
 - for [time] - Execute now, auto-close later
 - every [time] - Repeat action (with permanent)
 - when entering [zone] - Zone-based triggers
 - when im in [zone] - Zone-based triggers
 - during combat - Combat triggers
 - after combat - Post-combat triggers
 - entering dungeon - Dungeon entry triggers

 - permanently/forever - Persistent commands / saved commands

TIME UNITS:
seconds, minutes, hours, days (e.g., "30 seconds", "5 minutes", "2 hours")

REMINDERS:
ai: remind me to repair after 10 minutes
ai: remind me to check mail when entering stormwind
ai: remind me to eat food after combat
ai: remind me to repair when im in stormwind permanently
ai: remind me to drink water every 30 minutes forever

WARNING SYSTEM:
ai: warn me when hp below 30%
ai: warn me when mana below 200
ai: warn me when level equals 60
ai: warn me when money above 100
ai: warn me when party below 3 permanently
ai: warn me when raid above 20 forever

TEAM MANAGEMENT:
ai: setup team favorites player1 player2 player3 player4
ai: setup group standard tank1 healer1

ai: call team favorites
ai: call team favorites in 5 minutes
ai: call group standard after combat

SOCIAL FEATURES:
ai: invite warrior lvl 55-60 to deadmines
ai: invite hunter lvl 45-50 to zul'farrak
ai: invite priest lvl 60 to MC

ai: follow playername

ZONE INFORMATION:
ai: explain zone

MATH CALCULATOR:
ai: m: 15*8+42
ai: m: (100-25)/3
ai: m: 60*60*24

SYSTEM CONTROL:
ai: offline for 30 minutes
ai: offline

/ai -- open gui
/aeonai -- open gui
/ai reset -- reset addon

.

Report bugs and ideas pls.
Take care.
[/center]

*Last edited by Foreverdelta33 on Thu Jul 31, 2025 7:08 pm, edited 6 times in total.*

## Post 141820 by Reddguard — 2025-07-28T04:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=141820#p141820 | page 1 | era: pre-1.18.1 -->

This sounds very interesting! It works when I type in chat prefixed with "ai:" but how can I use my voice to say commands? Also in help it says ai:explain - Zone information, but when I type "ai:explain" it says "command unclear".

Can I use it to use a specific spell? Then I wouldn't have to keybind it maybe... that would be cool!

edit: also with "ai:explain zone" or "ai:explain Swamp of Sorrows" I only get "command unclear"

## Post 141824 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-07-28T05:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=141824#p141824 | page 1 | era: pre-1.18.1 -->

Yea its an experiment, this is totaly new for me, NLP and AI engineering.

Anyways:

You type via chat. Using voice requires microphone obviously and speech-to-text. But an addon cant provide that.

You type to the AI via chat.

Addons cant cast spells, Blizzard protected that, just like moving. You have to manually press somethign in order for WoW to execute a cast. Thats protected.

And of the "ai: explain zone" when I do that it plays the soundfile.

It has sound fiels for all basic vanilla zones, about 40 or so for both male and female.

Do you misstype maybe? The current parser processor is still very stupid, im already working on a level 3 parser processor that will learn, fizzy match, and confident and intent check.

EDIT: U did "ai:explain" without space in between, parser doesnt understand that yet. u must do "ai: explain" with a space between.

I fixed the help page to display it properly. Main command is always "ai: " with a space.

*Last edited by Foreverdelta33 on Sat Aug 02, 2025 1:57 pm, edited 1 time in total.*

## Post 141908 by Reddguard — 2025-07-28T16:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=141908#p141908 | page 1 | era: pre-1.18.1 -->

Ah, when I type "ai: explain zone" it does work.

I like this one: I type in
ai: invite priest lvl 37 to Scarlet Monastery Library
similar what you do in your video
And then I whisper every lvl 37 priest
"Hey, want to join our group for Scarlet Monastery Library?"

So from the first impression this addon is most useful to invite specific people to my team. Because why do I want to open my spellbook or something like that with ai when I can just press my hotkey for it?

But I'm interested to learn what else I can do with it. Impressive! I've never seen anything like this as a TWoW addon

