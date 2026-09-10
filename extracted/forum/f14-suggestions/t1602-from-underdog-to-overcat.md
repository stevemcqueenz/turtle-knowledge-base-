---
title: "From Underdog to... Overcat?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1602"
topic_id: 1602
forum_id: 14
forum: "Suggestions"
author: "Schwrop"
author_authority: "player"
posted: "2021-02-18T16:04:00Z"
last_post: "2021-03-25T22:34:00Z"
post_count: 11
pages: 1
fetched: "2026-09-10T12:41:13Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# From Underdog to... Overcat?

## Post 9420 by Schwrop — 2021-02-18T16:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9420#p9420 | page 1 | era: pre-1.18.1 -->

As it is well known, the **druid class is below mediocre at the DPS role** whether in Moonkin or Feral Cat specs, therefore they're at the back of the line when joining a raid, most of  the time.
Though, with this post, I want to adress the Feral Cat spec.
Yes, druid class is **jack of all trades, but master of none**. But I think the DPS performance is well **below average** to fit that saying.
The core problem might be lying in the talents and/or abilities themselves, however, that is a dangerous and complicated area and I don't (nor anyone else, I assume) want to go there.
Yet, another big problem is **poor itemization**:
 **BiS weapon** is level 29 [Manual Crowd Pummeler](https://database.turtlecraft.gg/?item=9449) with 3 attack speed charges (from Gnomeregan),
 **BiS head** is level 45 [Wolfshead Helm](https://database.turtlecraft.gg/?item=8345) (from leatherworking).
There are nice one-handed weapons such as [Mace of Unending Life](https://database.turtlecraft.gg/?item=21407), [Blessed Qiraji War Hammer](https://database.turtlecraft.gg/?item=21268). If you use those, the **best off-hand frill** is [Tome of Knowledge](https://database.turtlecraft.gg/?item=13385). All of that and it's **still worse than the damned Manual Crowd Pummeler.**
You have to farm MCPs just so you could go **from below mediocre to mediocre.**

MCP is even more of a **Bear tank problem than Cat DPS**, but that is because Bear tanks ARE being played, while there are **almost zero Cat DPS players**. Bear and Cat BiS gear overlap on a lot of items and they're **closely related**.
I've been thinking of an item that could possibly **complement** existing weapons and make MCP **less relevant**.
Naturally, an off-hand frill!

LORE:

So I've read some lore and brainstormed ideas for a possible name and background for the item. It **fits right in** vanilla lore.
 ***Claw of Bethekk***. Based on **Troll Loas**, also known as Wild Gods. Bethekk is a **panther** loa, worshipped by the Zandalari and Gurubashi.
If there's need for faction versions, then:
Alliance - Claw of Bethekk (Panther loa). Drop from **High Priestess Arlokk** in Zul'Gurub. Boss transforms to a half-panther Tigon female.
Horde - Claw of Shirvallah (Tiger loa). Drop from **High Priest Thekal** in Zul'Gurub. Boss transforms to a half-tiger Tigon male.
Otherwise, only Claw of Bethekk for both, to evade, e.g. faction change problems.

ITEMIZATION:

Possible item [model and icon](https://classic.wowhead.com/item=19910/arlokks-grasp)
As for the stats. I've followed the vanilla [itemization formulas](https://wow.allakhazam.com/wiki/Itemization_Formulas_%28wow%29) that Dragunovi linked in his [helpful guide](https://forum.turtlecraft.gg/viewtopic.php?f=4&t=1567).
Made some approximate calculations of budgets and costs for items that are relevant as examples. **Manual Crowd Pummeler, Tome of Knowledge and Jin'do's Bag of Whammies**, which is an **itemlevel 66 off-hand frill from Zul'Gurub**.
The resulting costs were higher than the budgets. So either the formulas are a bit off and should be more complex for more than 2 attributes or I failed hard. Nevertheless, the numbers are close enough.
Sorry to whoever peeks into my clunky calculations in the spoilers. **Mini summary at the end.**

[Manual Crowd Pummeler](https://database.turtlecraft.gg/?item=9449) (Blue)
Item Level 34
Two-hand
+16 Strength
+5 Agility
Use: Increases your attack speed by 50% for 30 sec. Total budget for this quality (0,625), item level (34) and 2-handed slot modifier (1):
(0,625*34 - 1,15)*1 = 20 [Budget]
We can calculate what part do attributes take and see the leftover bugdet used for the "Use:..." spell.
Let's say "Use:..." is our x:
 16^1,5 + 5^1,5 + x^1,5 [Cost] ~ 20^1,5 [Budget]
 64 + 11,18 + x^1,5 [Cost] ~ 89,44 [Budget]
x^1,5 ~ 14,26
x ~ 5,88

[Tome of Knowledge](https://database.turtlecraft.gg/?item=13385) (Blue)
Item Level 61
Held In Off-hand
+8 Strength
+8 Agility
+8 Intellect
+8 Stamina
+8 Spirit Total budget for this quality (0,625), item level (61) and Off-hand slot modifier (0,55):
(0,625*61 - 1,15)*0,55=20,33625 [Budget]
(8^1,5)*5 [Cost] ~ 20,33625^1,5 [Budget]
 113,13 [Cost] ~ 91,70 [Budget]
 23,76 [Cost] ~ 20,33625 [Budget]

[Jin'do's Bag of Whammies](https://database.turtlecraft.gg/?item=19891) (Purple)
Item Level 66
Held In Off-hand
+11 Intellect
+8 Stamina
Equip: Increases damage and healing done by magical spells and effects by up to 18.
Equip: Improves your chance to hit with spells by 1%. Total budget for this quality (0,77), item level (66) and Off-hand slot modifier (0,55):
(0,77*66-1)*0,55=27,401 [Budget]
 11^1,5 + 8^1,5 + 15,48^1,5 + 14^1,5 [Cost] ~ 27,401^1,5 [Budget]
 36,48 + 12 + 60,9 + 52,38 [Cost] ~ 143,42 [Budget]
 161,76 [Cost] ~ 143,42 [Budget]
 30,19 [Cost] ~ 27,401 [Budget]

Work In Progress [Claw of Bethekk](https://dev.turtlecraft.gg/#!/itemcreator/WzAsIjEuMTUuMCIsNCwwLCJDbGF3IG9mIEJldGhla2siLCJFcXVpcDogSW5jcmVhc2VzIHlvdXIgYXR0YWNrIHNwZWVkIGJ5IDI1JSBpbiBDYXQsIEJlYXIgYW5kIERpcmUgQmVhciBmb3JtcyBvbmx5LiAvLy9NZW93LiBBIHBvc3NpYmxlIFRvbWUgb2YgS25vd2xlZGdlIHVwZ3JhZGUgZm9yIGRydWlkcz8gQXJlIHllIG91dHRhIHllciBtaW5kLCBsYWQ~2FIiwzMjYxNSw0LDY1NTQwLDEsMCwwLDIzLC0xLC0xLDcwLDYwLDAsMCwwLDAsMCwwLDAsMSwxLDAsNCw4LDMsOCw1LDgsNyw4LDYsOCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsbnVsbCwwLDAsMCwwLDAsMCwwLDEsMCwwLC0xLDAsLTEsMCwwLDAsMCwtMSwwLC0xLDAsMCwwLDAsLTEsMCwtMSwwLDAsMCwwLC0xLDAsLTEsMCwwLDAsMCwtMSwwLC0xLDEsMCwwLDAsMCwwLDgsNiwwLDAsMCwwLDAsMCwwLDQ4LDAsMCwwLDAsMSwiTlVMTCJd) (Purple)
Item Level 66
Held In Off-hand
+8 Strength
+8 Agility
+8 Intellect
+8 Stamina
+8 Spirit
"Equip: Increases your attack speed by 25% in Cat, Bear and Dire Bear forms only" Total budget for this quality (0,77), item level (66) and Off-hand slot modifier (0,55):
Let's see what budget is left after substracting the cost of +8 stats and
(0,77*66-1)*0,55=27,401 [Budget]
(8^1,5)*5 + y^1,5 [Cost] ~ 27,401^1,5 [Budget]
 23,76^1,5 + y^1,5 [Cost] ~ 27,401^1,5 [Budget]
 113,13 + y^1,5 [Cost] ~ 143,42 [Budget]
y^1,5 ~ 30,29
y ~ 9,82

The attack speed effect **"Use:"** *(or x)* in MCP is ~5,88 attribute value.
In the custom item, the attack speed effect **"Equip:"** *(or y)* has space for ~9,82 attribute value.
There's plenty of budget to add that passive attack speed bonus. Could heighten, lower, remove the +all stats or the attack speed and change to some other stats or spell effects.
Constructive suggestions are welcome!
Different lore background? item stat? Possible quest?!

## Post 9431 by Lexi (Barrens Chat Casualty) — 2021-02-19T11:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9431#p9431 | page 1 | era: pre-1.18.1 -->

Another possibility could be to have an idol that increases attack speed for your feral forms but that it doesn't stack with mcp and having it drop in a dungeon, raid or world boss drop. Another idea I like is having a craftable consume weapon from engineers that is very similar to mcp, ideally still a two-handed mace. Maybe you can refill the charges like you can with mortars or even just have a refill option on mcps if you have engineering(with a cost of course).

## Post 9728 by Starkobjekt (Barrens Chat Casualty) — 2021-03-11T07:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9728#p9728 | page 1 | era: pre-1.18.1 -->

Bump.

This deserves more attention. On turtle any spec is welcomed but still no one wants to feral dps. This item is still worse than MCP but removes the awful need to farm a low level dungeon for a possible drop so you can attend raid and be -useful-

## Post 9729 by Unangwata (Patch Note Conspiracy Theorist) — 2021-03-11T15:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9729#p9729 | page 1 | era: pre-1.18.1 -->

Just make damn idol increase all damage by 10%. And give it to lev 1 character.

## Post 9739 by Unangwata (Patch Note Conspiracy Theorist) — 2021-03-12T14:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9739#p9739 | page 1 | era: pre-1.18.1 -->

I'm serious. Will add variety to the game and make people use more specs.

## Post 9742 by Balake (Bug Report Enthusiast) — 2021-03-12T16:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9742#p9742 | page 1 | era: pre-1.18.1 -->

The fix is better itemization. Rogues and kitties use similar gear, but tiny changes can be made to make a specific item stronger for cats and weaker for rogues without changing its stat budget. More leather strength gear in the lategame is an indirect and interesting buff to feral druids, because they benefit much more from strength compared to rogues. Also, powerful statstick weapons would help fight the monopoly of MCP as the strongest.

## Post 9813 by Lichenwitch (Barrens Chat Casualty) — 2021-03-20T09:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9813#p9813 | page 1 | era: pre-1.18.1 -->

love the lore for the item :) i also agree with Balake, more strength gear for feral dps sounds ideal.

## Post 9821 by Yohans — 2021-03-20T11:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9821#p9821 | page 1 | era: pre-1.18.1 -->

Love the idea, especially about the item droping from the panther/tiger bosses, but maybe change the stats a bit so it isn't a tome of knowledge rip off as much, I think 12 str/ 12 agi/ 10 int would fit more with the nature of thekal/arlokk. Also maybe the atack speed buff shouldn't be an equip, but rather a Use: Increases your attack speed by 30% in Cat, Bear and Dire Bear forms only (20 second duration, 2 min cd or 15 second duration 1 min 30 seconds cd or smth), so it's more of a midway point between the Tome of Knowledge and MCP.

## Post 9830 by Lichenwitch (Barrens Chat Casualty) — 2021-03-21T00:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9830#p9830 | page 1 | era: pre-1.18.1 -->

wow i think that makes a lot of sense Yohans! personally i don't think anyone will miss the spirit that much and would gladly take more str, agi, and int instead.

## Post 9836 by Starkobjekt (Barrens Chat Casualty) — 2021-03-21T14:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9836#p9836 | page 1 | era: pre-1.18.1 -->

Or just a class quest to unlock a spell, either, passive that gives attack speed in bear and cat form all the time or one to activate that has a cooldown but gives more attack speed for a duration. Or both.
I prefer this because then you can add in more off-hands and main hands to keep upgrading your character in the future. Looking at how much Paladins benefit on T-wow from both holy strike and windfury this is not much, only fair.

## Post 9884 by Joy — 2021-03-25T22:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9884#p9884 | page 1 | era: pre-1.18.1 -->

I have a question: what is the procedure for submitting community suggestions?

Assuming Schwrop's solution is sufficiently concrete and balanced, how do we proceed?

Do we wait for official feedback or, conversely, whom do we contact for review and possible testing?

