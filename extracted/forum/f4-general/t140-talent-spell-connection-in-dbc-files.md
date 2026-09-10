---
title: "Talent - Spell connection in dbc files."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=140"
topic_id: 140
forum_id: 4
forum: "General"
author: "Ethismos"
author_authority: "player"
posted: "2018-10-12T19:54:00Z"
last_post: "2018-10-13T10:06:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T10:15:09Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Talent - Spell connection in dbc files.

## Post 764 by Ethismos — 2018-10-12T19:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=764#p764 | page 1 | era: pre-1.18.1 -->

Hello,

I have a question about editing dbc files and was told to ask here!

I am trying to change a talent (lets say divine fury) to affect more spells! I have managed to edit the cd reduction, icons, change the effect to something else etc but i can't "connect" it to other spells or understand how it is connected to those 4 in the first place. Any hint?

For reference its spell 18530 in spell.dbc and talent 1181 in talent.dbc.

If you could point me to an active forum or anything similar it would help a lot because mangos is against dbc editing and ownedcore takes weeks/months for a reply.

Thanks in advance for your help :P

## Post 765 by Natrist — 2018-10-12T20:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=765#p765 | page 1 | era: pre-1.18.1 -->

Hi Ethismos,

What you want to achieve requires a few changes on the server side. You can edit the SpellEffects.cpp file to add special cases for whatever spells you want to modify.

For example:

if (spellID == 1234)
if (caster->HasAura(123))
DoSomethingSpecial();

## Post 771 by Ethismos — 2018-10-13T10:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=771#p771 | page 1 | era: pre-1.18.1 -->

Thanks for your answer!

However...what happens if i just want to see how a spell works and i can't seem to find it. In this case i want to know how divine fury is connected to those 4 spells and i can't seem to find it in any of the cpp files (searched by talent and spell ID's and parts of the code that have to do about priests in general), so i guessed it was something in the dbc files. I probably was wrong but i have the same issue with many talents that affect spells (improved wrath and starfire come to mind).

If you have the time could you find me how/where the specific talent -affected spell relation is
handled?

(PS: Found that every spell has a "SpellClassSet" which is a binary number with just one ace and one effect that is a binary number with aces at all the spells affected. Still not sure how its handled at c++ files but if wrath is 0x1 and starfire 0x4 then 0x5 should effect both spells -0001 and 0100 added at 0101)

