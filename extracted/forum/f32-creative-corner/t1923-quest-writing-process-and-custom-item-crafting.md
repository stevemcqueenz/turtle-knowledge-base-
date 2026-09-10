---
title: "Quest writing process and custom item crafting"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1923"
topic_id: 1923
forum_id: 32
forum: "Creative Corner"
author: "Magicono43"
author_authority: "player"
posted: "2021-05-29T01:12:00Z"
last_post: "2023-10-23T00:26:00Z"
post_count: 30
pages: 1
fetched: "2026-09-10T10:48:46Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Quest writing process and custom item crafting

## Post 10719 by Magicono43 — 2021-05-29T01:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10719#p10719 | page 1 | era: pre-1.18.1 -->

So I have been looking around a little bit and could not really find what I was looking for, so I decided may as well make a post about this specific question.

So what is the exact process/workflow to get some ideas that I have for TurtleWoW onto the server and into the code-base, etc? I have seen the creation tools for Items, NPCs, and Quests, but from those tools I don't really get the idea of what one has to do to get those created items, npcs, quests, etc into the next updates and such. Also what about things not listed in that tool-set such as custom crafting recipes/patterns for the various professions, or even custom abilities/professions such as how the survival professions works and such.

Anyway just wanted to make a general post about this as I obviously would like to add some of the above things but don't have much idea of what I would have to do to get started on that besides messaging somebody on Discord and hoping they are not too busy or something. Thanks for any additional info.

## Post 10720 by Sinrek (Grandmaster of Forum PvP) — 2021-05-29T01:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10720#p10720 | page 1 | era: pre-1.18.1 -->

I'd suggest you have a look at [this](https://forum.turtlecraft.gg/viewtopic.php?f=2&t=820).

## Post 10721 by Sinrek (Grandmaster of Forum PvP) — 2021-05-29T01:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10721#p10721 | page 1 | era: pre-1.18.1 -->

There's, also, a fresh [example](https://forum.turtlecraft.gg/viewtopic.php?f=14&t=1783).

## Post 10723 by Magicono43 — 2021-05-29T19:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10723#p10723 | page 1 | era: pre-1.18.1 -->

Thanks, Sinrek I'll read those and see if they achieve what I'm looking for.

## Post 10741 by Magicono43 — 2021-06-01T00:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10741#p10741 | page 1 | era: pre-1.18.1 -->

So after reading through some of the "Online Quest & Item Creator" thread, I'm still missing at what part some of the important details come in, such as location of where quest objects are put in the world, who is dealing with that part?

Such as in the recently added "Oil-Stained Gold" quest, there are oil drum objects in the ships that you have to collect, similar to the gnomish tool boxes in the same ships, but when is it determined where to place these objects, or who is doing that part? Or say for some of the newly added NPCs like the foxes in some of the areas.

I ask because I would like to do that part as well. Also, is it currently possible to add crafting recipes to the existing professions?

## Post 10750 by Starkobjekt (Barrens Chat Casualty) — 2021-06-01T20:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10750#p10750 | page 1 | era: pre-1.18.1 -->

a few custom crafting recipes excist on twow so yes

## Post 11493 by Gheor (Turtle WoW Team) [STAFF] — 2021-08-02T02:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11493#p11493 | page 1 | era: pre-1.18.1 -->

Right so, this is ment to be a guide but it's not complete, I'd rather post what I wrote and answer questions in the post. Our server always had community written quests but not everyone is sure where to start. Being someone that was recruited from the community myself many months ago I wish to inspire you folk and explain how I go about writing quests.

I will break a quest’s format and offer my retrospective of what you should do in a certain case. This might turn out to be a long post since I also wish to offer a few examples.

Let’s begin, shall we?

 **Quest Title** | Self explanatory it’s the name your quest will have.

Pick the title first — I don’t do this often, but it’s simply my preference. If you wish to do this however it will influence your quest text, you choose a theme and will write the text so that the essence of the title is prominent.

 **Quest Text** | This can either influence a title or be influenced by a title and creating a connection between the title and the NPC with text is something very important. You -don’t- need to be a lore expert to write good text, simply visualise what your character would say after you’ve given him a slight backstory and a few traits that make him unique.

Will your quest have breaks in them, will the character stutter? Would they have a slight accent, would they get another NPC’s or location’s name wrong simply to give more creativity to the quest?
Code: Select all

```
I wouldn’t ever see myself doing anything other than working the fields, <class>, it’s my humble imprint I leave upon this world of ours. Especially during harvest season, to grow your own crops from beginning to end and having enough to help us over the cold season is a pride that makes every farmer’s heart pump with excitement.

<NPC clears his throat.>

Oh but I am ever so thirsty, today has been more productive than the days before but it seems to have brought me to my knees. Would you be so kind as to fill this bucket with water from that well over there? I will greatly appreciate it.

Skip the title, if you think you have an idea that might change while you’re writing your text a title is simply just a thorn in your sides, simply write the text first and pick a title at a later time, sometimes it could generally be a phrase from the quest text itself.
```

Code: Select all

```
Quest Title: For Darkshire and its People

Quest Text: When I first joined the Stormwind Guard I didn’t think I’d be stationed in Duskwood, this dreadful place is full of unspeakable horrors. But considering all the Night Watch has been through, a few of us were sent to make sure the place is well defended and none have to fear for their life.

I am aware of the worgen, the undead and everything else that there is to deal with here and even if I am utterly terrified I will stick by them since this is the job I signed up to do, in any case, enough of my boorish banter.
I need to take this official report from Stormwind to the mayor, I am asking you to since I am more than sure I won’t be welcomed with open arms, and please tell the mayor that we are here for Darkshire and its people.
```

That concludes the way I pick my quest titles, moving on to the next bit.

 **Quest Giver and Quest Ender:**
Considering the Giver and Ender may differ I will put them in the same category. Here’s how I usually do things.

 **Existing NPC:** If you plan to use an existing NPC that already has a few quests of its own or even a small gossip as a greeting you should try to match up its personality while writing the text, yes, just like the title the NPC will influence the quest text. You can even go as far as doing some research on the specified character, for that I usually look their name up on Wowpedia, make sure you read only the WC3 + Vanilla parts as future expansions don’t matter.

 **New NPC:** If you plan to create your own character you should start by visualising and fleshing out your character, try to give them a small backstory (you usually won’t have these in the quest texts although it’s not necessarily a rule) and a personality. Make the NPC feel as alive as possible, they can have emotions, as this is influenced by racial aspects. I recommend doing some research before you pick a name and race for them. Will it be a quick to anger Dwarf, an arrogant Elf or simply an emotionless Forsaken husk?

 **Incomplete Text or Turn-in Text:**
I try to be very neutral with these, and keep it short. For example the NPC wants you to kill an x amount of y creatures.
Code: Select all

```
“Any progress?”
“Back so soon?”
```

 **Complete Text:**
This is the rewards menu, after completing a quest the NPC will respond accordingly to your aid or if it’s a simple turn in quest they’d be surprised by your appearance.
Code: Select all

```
“You have done me a great favour <name>, I wish to pay you back, you may choose from these particular items.”
“Oh? And who are you, how can this old dwarf help you?”
```

You can go ahead and write more than that, it all depends on you and this is just a simple example.

 **Rewards:**

 **Items** | I usually look for a quest of the same level and take inspiration from their items and make my own. Refer to **Dragunovi’s Item Making Guide** if you wish to do your own items.

 **Experience and Money** | As above you should find an already in game quest that looks exactly like yours. Be it a kill, turn-in or gathering object x quest, there are databases that offer you this opportunity and you should definitely take it.

## Post 11494 by Gheor (Turtle WoW Team) [STAFF] — 2021-08-02T02:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11494#p11494 | page 1 | era: pre-1.18.1 -->

Also here is the template/format you should use.

Please, from this moment, use this chat template to prepare quests for implementation!
Zone IDs can be found here: [https://trinitycore.atlassian.net/wiki/ ... /AreaTable](https://trinitycore.atlassian.net/wiki/spaces/tc/pages/2129959/AreaTable) Code: Select all

```
Previous quest: Name or entry, if known.
Title: A New Ad-Venture
Quest NPC (Start): Name, if new, entry, if known.
Quest NPC (End): Name, if new, entry, if known.
Quest level: 1
Required level: 1
Quest zone ID: 45
Main description: Alright, pal, listen up. I know this is your first mission for the Venture Company, so I’ll speak real slow. We’re up here to find a special treasure, y'hear? Supposed to be worth more than half the jewels in Undermine all by itself. Boss can’t wait to get his hands on it, but the last guys he sent up here never sent anything back...
Short objective: Gather 8 Whirling Whizmagigs from Whirling Whizz-Bots, then return to Nert Blastentom.
Progress text: You know what they say. Time is money, employee.
Completion: Nice job, kid. If you keep that up, you might be a foreman in, uh, eighteen or nineteen years. Competition’s tough, y'know.
Required creature kills:  Entry (Name), Entry (Name)...
Required items: Name.
— Rewards
Money: 1s40c
Reputation: Ratchet 69:150
XP: 175XP (copy the values from RewXP side note on our database from the quest which is the same level and difficulty)
Items:...
Additional notes: Describe any custom mechanics here.
```

Please use the following variables for name, class and race: $N, $c, $r
Please use the following symbol to split the lines: \n\n (don't add spaced around this construction).

## Post 11509 by Toirto — 2021-08-03T16:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11509#p11509 | page 1 | era: pre-1.18.1 -->

This is good advice

## Post 11511 by Leojj — 2021-08-04T02:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11511#p11511 | page 1 | era: pre-1.18.1 -->

Great guide, are we allowed to make quests for the new factions that offer rep + item rewards?

## Post 11515 by Gheor (Turtle WoW Team) [STAFF] — 2021-08-04T13:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11515#p11515 | page 1 | era: pre-1.18.1 -->

If the quest is good, why not?

## Post 11516 by Leojj — 2021-08-04T16:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11516#p11516 | page 1 | era: pre-1.18.1 -->

> **Mephistopheles wrote: Wed Aug 04, 2021 1:31 pm**
> If the quest is good, why not?

<3

## Post 11524 by Cogitek — 2021-08-04T19:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11524#p11524 | page 1 | era: pre-1.18.1 -->

also remember kobolds can't speak common

## Post 11527 by Gheor (Turtle WoW Team) [STAFF] — 2021-08-05T06:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11527#p11527 | page 1 | era: pre-1.18.1 -->

> **Cogitek wrote: Wed Aug 04, 2021 7:15 pm**
> also remember kobolds can't speak common

wary_turtle_head

## Post 11546 by Merikkinon (Patch Note Conspiracy Theorist) — 2021-08-07T03:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11546#p11546 | page 1 | era: pre-1.18.1 -->

Thanks, Meph. I have really been pouring over a series quest in Mulgore. Excellent share.

## Post 11547 by Merikkinon (Patch Note Conspiracy Theorist) — 2021-08-07T03:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11547#p11547 | page 1 | era: pre-1.18.1 -->

> **Mephistopheles wrote: Mon Aug 02, 2021 2:12 am**
> Please use the following symbol to split the lines: \n\n (don't add spaced around this construction).

Truly I don't understand what is meant by that syntax. Could you give an example, please?

Also, can we create enemy NPCs?

Finally, what are the mechanisms that might be available for us in the quest (such as having enemies appear for an escort quest or battle)? How can we find those?

*Last edited by Merikkinon on Sat Aug 07, 2021 3:37 am, edited 1 time in total.*

## Post 11560 by Gheor (Turtle WoW Team) [STAFF] — 2021-08-08T05:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11560#p11560 | page 1 | era: pre-1.18.1 -->

> **Merikkinon wrote: Sat Aug 07, 2021 3:35 am**
> > **Mephistopheles wrote: Mon Aug 02, 2021 2:12 am**
> > Please use the following symbol to split the lines: \n\n (don't add spaced around this construction).
>
>   Truly I don't understand what is meant by that syntax. Could you give an example, please?
>
>
>
>  Also, can we create enemy NPCs?
>
>
>  Finally, what are the mechanisms that might be available for us in the quest (such as having enemies appear for an escort quest or battle)? How can we find those?

 - Well for the \n\n thing: It acts as a line break basically, as in if you'd want an open space after having text, example:

My dearest Lohena, I have missed you forever in these past days, I am not sure how I will be able to put up with the thought of not seeing you for another year. I truly hope it's worth going back there to learn your craft.\n\nForever yours,\n\n Matthew.

I suppose you understand where the line break should be, in any case, it's usually Torta that handles this process and she will be aware where to split it for visual beauty.

 - Yes, of course. You can use the NPC Editor if you wish to do it by yourself or provide all and any information you consider necessary, such as level, damage, spells if any/ if it is a carbon copy of another NPC but with a different name.
DisplayID, weapon to use, you know, whatever makes a NPC a NPC.

 - Those are mostly script based, our scripters will handle "events" if you'd wanna call it that. If anything simply describe the event with all details you think necessary.

## Post 11602 by Sandtusk (Barrens Chat Casualty) — 2021-08-11T00:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11602#p11602 | page 1 | era: pre-1.18.1 -->

Are there any prerequisites for requesting the creation of custom hubs/settlements for custom npc quest givers?

I made an example below if it helps catch my drift.

Ex) To request custom npc hub please provide:
 - Empty or nonessential space in capital, town, or game world.
 - minimum number of ___ quests created and approved by team.
 - minimum number of ___ custom npc’s approved by team to fill space appropriately
 - List of all objects/props (static & interactive) to be placed (campfires, tents, pack kodo, forge, etc).
 - List how the space is accessible by players (walking, swimming, jumping, teleporting, or flight path creation).

Great guide btw, please continue to add more examples for different types of quests if possible.

## Post 11605 by Gheor (Turtle WoW Team) [STAFF] — 2021-08-11T04:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11605#p11605 | page 1 | era: pre-1.18.1 -->

> **Dasajj wrote: Wed Aug 11, 2021 12:45 am**
> Are there any prerequisites for requesting the creation of custom hubs/settlements for custom npc quest givers?
>
>  I made an example below if it helps catch my drift.
>
>  Ex) To request custom npc hub please provide:
>  - Empty or nonessential space in capital, town, or game world.
>  - minimum number of ___ quests created and approved by team.
>  - minimum number of ___ custom npc’s approved by team to fill space appropriately
>  - List of all objects/props (static & interactive) to be placed (campfires, tents, pack kodo, forge, etc).
>  - List how the space is accessible by players (walking, swimming, jumping, teleporting, or flight path creation).
>
>  Great guide btw, please continue to add more examples for different types of quests if possible.

Definetly, it very much depends on the quests and their role in the lore and world itself, I haven't dealt with much custom buildings for my quests since it's very bothersome to both build it and write the quests for it, I barely started doing so for a project of mine, I am sadly not in any sort of right or power to give you advice on this currently.

As for quests examples, simply ask and I will provide :).

## Post 11617 by Sandtusk (Barrens Chat Casualty) — 2021-08-11T12:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11617#p11617 | page 1 | era: pre-1.18.1 -->

Thank you!

## Post 11626 by Sandtusk (Barrens Chat Casualty) — 2021-08-12T04:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11626#p11626 | page 1 | era: pre-1.18.1 -->

Sry if this is the wrong place to ask, couldn’t find the item making guide pst with the search tool.

Is it possible to swap weapon model IDs when creating custom items?

Example)
 - Create throwing spears/hammers by replacing the throwing axe model ID with polearm/mace model ID

## Post 11629 by Gheor (Turtle WoW Team) [STAFF] — 2021-08-12T07:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11629#p11629 | page 1 | era: pre-1.18.1 -->

> **Dasajj wrote: Thu Aug 12, 2021 4:38 am**
> Sry if this is the wrong place to ask, couldn’t find the item making guide pst with the search tool.
>
>  Is it possible to swap weapon model IDs when creating custom items?
>
>  Example)
>  - Create throwing spears/hammers by replacing the throwing axe model ID with polearm/mace model ID

Not sure that's possible, the title of the item post is Ultimate Item Making Guide.

## Post 21933 by Striderbrah — 2022-08-11T08:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21933#p21933 | page 1 | era: pre-1.18.1 -->

Designed to be fished up exclusively in the Undercity, with a 1% chance, the 'Undercity Bucket Hat', with the detail,
"Favourite chew toy of a Lordaeron hunter's blind companion."
This is a rare fishing item for Horde players brave enough to fish in the undercity sewers.

Appearance Id: 10111
Bind on pickup
Head
 40 Armor
+10 Agility
Requires Fishing (120)
Requires Level 20
Equip: Increased Fishing +5 (spell Id: 7823)

If this is not feasible to do, to be sold be,
Armand Cromwell <Fishing Trainer>, at a reasonably high price would do.

(It’s supposed to look like the same model ID as the “Wanderer’s Hat”)

TOOLTIP:
<https://www.imagebam.com/view/MEC6XRC>

replace into item_template values
('0', '4', '2', 'Undercity Bucket Hat', 'Favourite chew toy of a Lordaeron hunter\'s blind companion.', '10111', '2', '0', '1', '0', '3305', '1', '-1', '-1', '24',
'20', '356', '120', '0', '0', '0', '0', '0', '0', '1', '0', '3', '10', '0', '0',
'0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
'0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '40', '0', '0', '0',
'0', '0', '0', '0', '1', '0', '0', '-1', '0', '-1', '7823', '1', '0', '0', '-1', '0', '-1', '0', '0',
'0', '0', '-1', '0', '-1', '0', '0', '0', '0', '-1', '0', '-1', '0', '0', '0', '0', '-1', '0',
'-1', '1', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
'0', '1', NULL);
 *Apologies if the post is hard to read, but I couldn't find a better way to share what I made in the WoW ID creator.*

## Post 22465 by Dragunovi (Turtle WoW Team) [STAFF] — 2022-08-15T18:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22465#p22465 | page 1 | era: pre-1.18.1 -->

Really like this idea, I'll look into getting this implemented as a rare fishing catch if possible.

## Post 22472 by Striderbrah — 2022-08-15T19:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22472#p22472 | page 1 | era: pre-1.18.1 -->

Thank you. I think it would be great progress with professions to add more offbeat items like this. Perhaps even having Titles available to players who max out their profession trees.

## Post 23801 by Leathertank — 2022-08-28T10:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23801#p23801 | page 1 | era: pre-1.18.1 -->

Where do we submit quests? Is there a git or something?

## Post 23805 by Jam — 2022-08-28T11:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23805#p23805 | page 1 | era: pre-1.18.1 -->

[viewtopic.php?f=2&t=820](https://forum.turtlecraft.gg/viewtopic.php?f=2&t=820)  I've been adding mine to the same forum post that started the tools a few years ago.

## Post 23827 by Zyrael — 2022-08-28T14:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23827#p23827 | page 1 | era: pre-1.18.1 -->

**Beastmaster's Heavy Duty Belt**
 **Mail belt**
 *Bind on Equip*
Required level 50
 215 armor
 15 intellect
 5 agility
+7 swords
Equip increase damage dealt by your pet by 8%
 *chance to deal 90 frost damage on successful melee attack.*
 **Classes: Hunter**

Crafted by Leatherworker, recipe obtained by being Revered with Cenarion Circle.
Mats required:
Larval Acid 10
Cured rugged hide 1
Rune Thread 3
Enchanted Leather 5
Rugged Leather 30

 --------------------------------------------------------------------------------------------------------------------------------------------
Link for database item creator:
[https://dev.turtlecraft.gg/#!/itemcreat ... wiTlVMTCJd](https://dev.turtlecraft.gg/#!/itemcreator/WzAsNCwzLCJCZWFzdG1hc3RlcidzIEhlYXZ5IER1dHkgQmVsdCIsIiIsMzU0MTcsNCwwLDEsMCwwLDYsNCwtMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMCw1LDE1LDMsNSw3LDUsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMjE1LDAsMCwwLDAsMCwwLDAsMiwwLDAsLTEsMCwtMSw3NTI3LDEsMCwwLC0xLDAsLTEsMTk2MTcsMSwwLDAsLTEsMCwtMSwxODI3NiwyLDAsMywtMSwwLC0xLDAsMCwwLDAsLTEsMCwtMSwyLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwiTlVMTCJd)
Personally I'd like the Pet damage bonus should be 10-20% but put it at 8% to keep inline with what's already in the game.
I put +7 swords as the only weaponskill so that hunters can use more weapons, however it having the same +weaponskills as edgemasters would be cool.

## Post 48002 by R3xi3l — 2023-05-29T21:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48002#p48002 | page 1 | era: pre-1.18.1 -->

**Custom Naxxramas Death Knight Gear**:

We are gonna keep away from "Green" Text Effects.

 - Corrupted Frostfire Runeblade:
 5.6% Drop chance: Death Knight Captains, Naxxramas
Damage: 457 (Shadow, Frost, Fire) - High Threat!
Corruption: -250HP DK Debuff
Minus Stats: -45 Stats DK Debuff
Resistances: +75 Resist DK Buff
MS - Warrior / OS - Paladin
Requires Swords: (305)
 - We reduced HP and statistics in change of giving enough resistances to Fire, Frost and Shadow. This should give players enough survivability in sacrifice of damage. Most of Physical damage is converted to Fire, Frost and Shadow giving it High Threat and bonus dps great for tanking.

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/gBT5D4M]

 - Corrupted Death Knight Shield:
 5.6% Drop Chance: Death Knight Captains, Naxxramas
Armor: 4235 DK Buff
Block: 135 DK Buff
Corruption: -250HP DK Debuff
Resistances: +50 Resist DK Buff
MS - Warrior, Paladin
Requires Defense: (350)
 - We reduced HP to increase Armor, Block and Resistances making this the best option for tanking in Naxxramas. Not everyone will be able to wear it due to the Defense Requirement.

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/bYAOBl4]

 - Lich Kel'Thuzad Helmet:
 100% Drop chance: Kel'Thuzad, Naxxramas
Lich: +1200 HP (Same buff as Flask of the Titans)
Plus: Stats +10
Minus: Stats -18
Resistances: +75 Resist Lich Buff
MS - Warrior / OS - Paladin
Requires Defense: (400)

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/h9gjhCl]

Ashbringer [UNLOCKS] The Scarlet Crusader Reputation: Friendly

 - Cleansed Death Knight Shield: The Scarlet Crusader Reputation: Friendly
WORK IN PROGRESS

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/iovQlXl]

 - Purified Frostfire Runeblade: The Scarlet Crusader Reputation: Honored
Must have: Corrupted Frostfire Runeblade to purify it at the Tyr's Hands Altar.
Damage: 635 (Holy, Frost, Fire) - High Threat!
Cleansed: +250HP HK Buff
Minus Stats: +24 Stats HK Buff
Resistances: +75 Resist HK Buff
MS - Paladin / OS  - Warrior
Requires Swords: (305)
 - We increased HP and statistics and item level itself. Fire, Frost and Shadow. This should give players enough survivability in sacrifice of damage. Most of Physical damage is converted to Fire, Frost and Shadow giving it High Threat and bonus dps great for tanking.

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/F2682dY]

About: Death Knight / Holy Knight:

N/A

## Post 72907 by Foobs (Barrens Chat Casualty) — 2023-10-23T00:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72907#p72907 | page 1 | era: pre-1.18.1 -->

**Quest Text** | This can either influence a title or be influenced by a title and creating a connection between the title and the NPC with text is something very important. You -don’t- need to be a lore expert to write good text, simply visualise what your character would say after you’ve given him a slight backstory and a few traits that make him unique.

For the love of everything roleplaying, PLEASE REMEMBER to include in the quest text who the NPC is that requires the item or to talk to and WHERE it is that they are located to turn in.

