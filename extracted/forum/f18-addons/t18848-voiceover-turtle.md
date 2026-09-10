---
title: "Voiceover - turtle"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18848"
topic_id: 18848
forum_id: 18
forum: "AddOns"
author: "Wingo"
author_authority: "player"
posted: "2025-04-24T05:16:00Z"
last_post: "2025-12-10T11:13:00Z"
post_count: 15
pages: 1
fetched: "2026-09-10T10:22:42Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Voiceover - turtle

## Post 128251 by Wingo — 2025-04-24T05:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128251#p128251 | page 1 | era: pre-1.18.1 -->

Hi community. From i was able to find, there is nicely working version of the voiceover addon <https://turtle-wow.fandom.com/wiki/WoW-Voiceover>

I read there's currently no custom content of the turtle wow supported.

I would like to start a project witch will create a new voicelines for all the turtle wow custom quests too.

For that i have some question for the turtle wow community, as i am not that active here:

- Are there any similar efforts it this direction already?

- Are there enough interest feom the players who will appreciate it?
More developer involvements needed:
- Are all custom quests mentioned here? <https://database.turtlecraft.gg/?quests=-44>

- Is there a mapping for NPC display ID to race/gender, so i can fetch the data automatically from the database about nps, to give them correct voices for each race and gender?
Thanks, please share it to friends so i know if it's worth doing, thanks!

## Post 128515 by Lordsunderland — 2025-04-25T22:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128515#p128515 | page 1 | era: pre-1.18.1 -->

I haven't heard a peep about doing a turtle version of the wow voice over addon. It would be incredible.

The public database was updated the other day now that all the K40 stuff was declassified - so yes. In theory all 1.17 quest dialogue would be available to you.

## Post 128797 by Wingo — 2025-04-28T10:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128797#p128797 | page 1 | era: pre-1.18.1 -->

Thanks for info. So far i was able to fetch dialogues of the all 1991 turtle quests needed to make voice lines. But i was not successful with getting the npc info from the turtle database so far. Whats worse, the 3d representation of the npc is not working neither

I have tried to contact turtle developers via mail but no reply so far.

## Post 128847 by Lordsunderland — 2025-04-28T15:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128847#p128847 | page 1 | era: pre-1.18.1 -->

Is there a way to make a local file store that info instead?
I'd be happy to spend an afternoon or two populating that for you

## Post 128860 by Wingo — 2025-04-28T16:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128860#p128860 | page 1 | era: pre-1.18.1 -->

The issue is that I can't see a other way, then to ask developers who can map display ID mentioned at nps site with gender /race. Even of you have 111 afternoons you cant help with it..
The starting NPCs for over 700quests ate missing that info. The rest i fetched successfully

## Post 129433 by Zmarotrix — 2025-05-02T22:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129433#p129433 | page 1 | era: pre-1.18.1 -->

What are the current roadblocks? If you can clearly identify them, I'll contribute however I can.

## Post 130198 by Wingo — 2025-05-08T14:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130198#p130198 | page 1 | era: pre-1.18.1 -->

First of all thank you both for showing the willingness to help. Sadly turtle dev havent replied to my 2 mails yet, so i was not able to move forward.

Current status:
 - i  get all the texts needed to generate voice lines for all the turtle custom quests  showed here: <https://database.turtlecraft.gg/?quests=-44>

 - i get the list of NPCs who provide those quests, so i am able to connect quests with npc

Current roadblocks:
 - Missing information about gender and race of the npc on the turtle wow database
 - needed to generate correct voicelane (woman voice for female characters etc..)

for example, this quest <https://database.turtlecraft.gg/?quest=41356> is started by this npc <https://database.turtlecraft.gg/?npc=62007>, but there is no info about race / gender.

 - there is 1991 custom quests which are started by the 850 NPCs -> so i need to find info about those 850 NPCs somehow

## Post 130202 by basednoob (Patch Note Conspiracy Theorist) — 2025-05-08T14:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130202#p130202 | page 1 | era: pre-1.18.1 -->

> **Wingo wrote: Thu May 08, 2025 2:11 pm**
> First of all thank you both for showing the willingness to help. Sadly turtle dev havent replied to my 2 mails yet, so i was not able to move forward.
>
>  Current status:
>  - i  get all the texts needed to generate voice lines for all the turtle custom quests  showed here: <https://database.turtlecraft.gg/?quests=-44>
>
>  - i get the list of NPCs who provide those quests, so i am able to connect quests with npc
>
>  Current roadblocks:
>  - Missing information about gender and race of the npc on the turtle wow database
>  - needed to generate correct voicelane (woman voice for female characters etc..)
>
>  for example, this quest <https://database.turtlecraft.gg/?quest=41356> is started by this npc <https://database.turtlecraft.gg/?npc=62007>, but there is no info about race / gender.
>
>  - there is 1991 custom quests which are started by the 850 NPCs -> so i need to find info about those 850 NPCs somehow

try ask akalix on the discord

## Post 131344 by Wingo — 2025-05-16T09:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131344#p131344 | page 1 | era: pre-1.18.1 -->

I asked akalix on discord, response: he can't help with that, but he asked internally the dev team, so lets wait a bit more...

## Post 135496 by Smoki1987 — 2025-06-12T15:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135496#p135496 | page 1 | era: pre-1.18.1 -->

> **Wingo wrote: Thu May 08, 2025 2:11 pm**
> First of all thank you both for showing the willingness to help. Sadly turtle dev havent replied to my 2 mails yet, so i was not able to move forward.
>
>  Current status:
>  - i  get all the texts needed to generate voice lines for all the turtle custom quests  showed here: <https://database.turtlecraft.gg/?quests=-44>
>
>  - i get the list of NPCs who provide those quests, so i am able to connect quests with npc
>
>  Current roadblocks:
>  - Missing information about gender and race of the npc on the turtle wow database
>  - needed to generate correct voicelane (woman voice for female characters etc..)
>
>  for example, this quest <https://database.turtlecraft.gg/?quest=41356> is started by this npc <https://database.turtlecraft.gg/?npc=62007>, but there is no info about race / gender.
>
>  - there is 1991 custom quests which are started by the 850 NPCs -> so i need to find info about those 850 NPCs somehow

This maybe helps you
<https://github.com/Frostshake/WMVx>

## Post 138707 by Soosfief — 2025-07-11T08:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138707#p138707 | page 1 | era: pre-1.18.1 -->

Man I'd really love that to happen - are you still working on this project?
Is there anyway of support we could provide you to help you out?

## Post 140037 by Wingo — 2025-07-17T07:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140037#p140037 | page 1 | era: pre-1.18.1 -->

[/quote]
This maybe helps you
<https://github.com/Frostshake/WMVx>
[/quote]

Thanks for idea, i was able to load the turtlewow folder, but in the npc tab, i was able to find only the original npcs with model, no custom turtle content is loaded there :(.

Update regarding turtle wow devs:
I have received no feedback from the developers sadly. I have also dsicussed this topic with Darkneo - he is currently main deeloper of the voiceover addon for the other game versions. He told me he tried to reach turtle devs in hte past with the same outcome.. So aparently there is no willingness on the turtle dev sides to help, even so it would make it 100times easier for us.

Current status:
I have scrapped all the data of the quests and created a npc list, for which i would need to fill the race and gender of the custom turtle quest givers. I have got a newborn this month so i dont have time to further spent much time on it. If we have this data, Darkneo will use his software to generate voicelines from it.
So i can only manage the updates to the npc list which the comunity can help with.

Wanna help?
There is a way how you can help tho!

Reach me on discord via PM i will give you further info :) Code: Select all

```
wingoswk
```

## Post 146250 by Anokic — 2025-08-16T19:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146250#p146250 | page 1 | era: pre-1.18.1 -->

How's the addon going? Still no answer from Turtle Devs?
Would be an awesome addition to have Turtle Quests voiced!

## Post 156288 by Lostinvention — 2025-10-20T10:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156288#p156288 | page 1 | era: 1.18.1-announced-pre-release -->

Just chiming in to say I'd love to see this project come to fruition, and congrats on the newborn!

## Post 162326 by Mcxboi — 2025-12-10T11:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162326#p162326 | page 1 | era: 1.18.1-announced-pre-release -->

Howdy, a friiendly bump.

