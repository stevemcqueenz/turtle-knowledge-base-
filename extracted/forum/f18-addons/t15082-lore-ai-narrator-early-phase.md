---
title: "Lore AI Narrator (Early Phase)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15082"
topic_id: 15082
forum_id: 18
forum: "AddOns"
author: "Oggu"
author_authority: "player"
posted: "2024-10-04T13:53:00Z"
last_post: "2024-10-08T15:16:00Z"
post_count: 10
pages: 1
fetched: "2026-09-10T10:28:22Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Lore AI Narrator (Early Phase)

## Post 102509 by Oggu — 2024-10-04T13:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102509#p102509 | page 1 | era: pre-1.18.1 -->

Hello Turtle.

What is the most annoying part of WoW lore? That it's not in the game, right?
You have to read books or websites to figure things out. So I thought, how cool would it be if you could play the game and have a narrator tell you important things about zones, characters, or mobs?

So I created Loremaster. It features an AI voice acting as a storyteller for lore, starting with Mulgore.
I’m making it mostly for myself, but I want to share it too for those who enjoy RP.

 **Features and use**:
 - AI voice narrating lore
 - Go in game and choose race at the top of your screen
 - Click on units and see if the "Lore" button appears, then click on it for the story
 - /journal opens "Journal" GUI
 - Button can be dragged with **Shift+Leftclick**

 - Currently only Tauren

 **To Do**:
 - Complete tauren lore
 - Other suggestions?

 **Known Issues**:
 - Sound clipping due to Vanilla API limitations. Use CTRL+S twice to reset sound if issues occur. Avoid pressing "Lore" multiple times or switching zones during narration.

If you like it leave me a comment or some suggestions.
Take care.
I will update it soon.

*Last edited by Oggu on Thu Oct 10, 2024 11:49 am, edited 9 times in total.*

## Post 102530 by Oggu — 2024-10-05T01:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102530#p102530 | page 1 | era: pre-1.18.1 -->

Hello.

I just added "The Barrens".

- **NPC's**:
Tonga Runetotem
Gann Stonespire

 **Mobs/Enemies**:
Wooly Kodo
Lakota'mani
Washte Pawne
Owatanka
Aean Swiftriver (Outrunners)
Hannah Bladeleaf
Marcus Bel
Thora Feathermoon

 **Areas**:
Southern Barrens
Camp Taurajo
The Crossroads
Wailing Caverns
Bael Modan
Razorfen Downs
The Great Lift

You can play now from Level 1-20 with the AI Narrator.
Next I will do "Durotar" and "Orgrimmar", then "Stonetalon Mountains".

Bye.

*Last edited by Oggu on Thu Oct 10, 2024 11:49 am, edited 1 time in total.*

## Post 102556 by Reploidrocsa (Bug Report Enthusiast) — 2024-10-05T11:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102556#p102556 | page 1 | era: pre-1.18.1 -->

Wow
Would be awesome if it had some kind of entry journal with both text and text to speech, excellent when you travel from point a to point b.

I'll be looking on this addon progress with great interest

While it makes the work exponentially bigger, would be cool also lore of zones, factions or even events for those who want to get that extra RPG feeling.

I'm one of those guys who keeps entertained on loading times reading lore bits (skyrim, dragon quest, etx.)

## Post 102583 by Oggu — 2024-10-05T21:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102583#p102583 | page 1 | era: pre-1.18.1 -->

> **Reploidrocsa wrote: Sat Oct 05, 2024 11:49 am**
> Wow
>  Would be awesome if it had some kind of entry journal with both text and text to speech, excellent when you travel from point a to point b.

Thanks for your kind words.

Oh thats a good idea. Would also make the /replay function redundant.
I will try to set that up asap.

> While it makes the work exponentially bigger, would be cool also lore of zones, factions or even events for those who want to get that extra RPG feeling.

The addon already check for Zones (Areas). If you look at the second video I posted, you can see
how Im walking into "Wailing Cavers"-Zone, and the narrator starts to tell the lore relevant to Taurens.
Or inside the list's I also posted the Areas where the narrator gets triggered.

And what kind of events are you thinking about, do you have any ideas in mind?

Greetings

## Post 102601 by Reploidrocsa (Bug Report Enthusiast) — 2024-10-06T04:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102601#p102601 | page 1 | era: pre-1.18.1 -->

> **Oggu wrote: Sat Oct 05, 2024 9:50 pm**
> And what kind of events are you thinking about, do you have any ideas in mind?
>
>  Greetings

Events that happened prior to the game and you see the consequences of them, such as dwarven wars, the emerald dream or the great sundering. So... Maybe if some keywords are mentioned in some lore entry unlock another one with more info about that event?

For example, you enter the wailing caverns, you unlock lore of the wailing caverns, and since it mentions the emerald dream keyword, it also unlocks the entry of the emerald dream.

While we don't directly interact with arthas menethil, an entry for arthas menethil could be added and unlocked when you visit stratholme or uther's tomb. Again, all this makes the work exponentially bigger, so don't feel compelled to do it if you don't want to

## Post 102626 by Oggu — 2024-10-06T12:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102626#p102626 | page 1 | era: pre-1.18.1 -->

> **Reploidrocsa wrote: Sun Oct 06, 2024 4:20 am**
> Events that happened prior to the game and you see the consequences of them, such as dwarven wars, the emerald dream or the great sundering. So... Maybe if some keywords are mentioned in some lore entry unlock another one with more info about that event?

Oh, now I understand. I thought you were talking about game events like "PLAYER_LOGIN" or something lmao.
You are talking about lore events.

That's a good idea. I can do that for zones, not sure about NPC's since they dont trigger any game events.
I could maybe do that for completing specific quest's an NPC gives you.
Let's say you did a quest for Thrall, now you unlocked a piece of additional lore.

Working hard on the base journal GUI as we speak.
I'll post an update soon.

*Last edited by Oggu on Sun Oct 06, 2024 12:05 pm, edited 1 time in total.*

## Post 102639 by Rostovwow — 2024-10-06T14:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102639#p102639 | page 1 | era: pre-1.18.1 -->

I think  Dialogue UI By Peterodox whose download address(<https://www.curseforge.com/wow/addons/dialogueui>) has this feature.
The only porblem is, this addon doesn't work on any client base on ver.1.12.
If you can convert it for turtle WOW, we can use it.  smiling_turtle_head

## Post 102668 by Oggu — 2024-10-07T01:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102668#p102668 | page 1 | era: pre-1.18.1 -->

> **Rostovwow wrote: Sun Oct 06, 2024 2:51 pm**
> I think  Dialogue UI By Peterodox whose download address(<https://www.curseforge.com/wow/addons/dialogueui>) has this feature.
>  The only porblem is, this addon doesn't work on any client base on ver.1.12.
>  If you can convert it for turtle WOW, we can use it.  smiling_turtle_head

Hm not quite. As far as I can see, Dialogue UI seems to be text-based.
What Im doing is sound-based and takes much longer to create.

## Post 102740 by Oggu — 2024-10-08T06:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102740#p102740 | page 1 | era: pre-1.18.1 -->

Hm alright.

*Last edited by Oggu on Wed Oct 09, 2024 2:55 pm, edited 1 time in total.*

## Post 102765 by Rostovwow — 2024-10-08T15:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102765#p102765 | page 1 | era: pre-1.18.1 -->

> **Oggu wrote: Mon Oct 07, 2024 1:04 am**
> > **Rostovwow wrote: Sun Oct 06, 2024 2:51 pm**
> > I think  Dialogue UI By Peterodox whose download address(<https://www.curseforge.com/wow/addons/dialogueui>) has this feature.
> >  The only porblem is, this addon doesn't work on any client base on ver.1.12.
> >  If you can convert it for turtle WOW, we can use it.  smiling_turtle_head
>
>   Hm not quite. As far as I can see, Dialogue UI seems to be text-based.
>  What Im doing is sound-based and takes much longer to create.

It has a AI sound function, you can even switch different AI voice.

