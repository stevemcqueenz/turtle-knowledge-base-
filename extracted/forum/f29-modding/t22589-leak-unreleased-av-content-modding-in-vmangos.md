---
title: "[LEAK] Unreleased AV content - modding in VMaNGOS"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22589"
topic_id: 22589
forum_id: 29
forum: "Modding"
author: "Zvyrhol"
author_authority: "player"
posted: "2025-10-26T14:52:00Z"
last_post: "2026-04-19T08:10:00Z"
post_count: 20
pages: 1
fetched: "2026-09-10T10:37:31Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [LEAK] Unreleased AV content - modding in VMaNGOS

## Post 157176 by Zvyrhol (Grandmaster of Forum PvP) — 2025-10-26T14:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157176#p157176 | page 1 | era: 1.18.1-announced-pre-release -->

Welcome to my thread about Alterac Valley revamp!
It covers all my custom changes made to this battleground using VMaNGOS which is open source Vanilla server emulator.

My modding adventure has gone further than I initially expected. I decided to rebuild first post to be more reader-friendly.

---
 **TABLE OF CONTENTS**

Click on the shell on the left to navigate between various topics.

- [maintenance_turtle](https://forum.turtlecraft.gg/viewtopic.php?t=22589#p157988) **PRINCIPLES OF MY ALTERAC VALLEY**

- [maintenance_turtle](https://forum.turtlecraft.gg/viewtopic.php?t=22589#p158108) **NEW CHALLENGE: REPAIR OF TOWER**

- [maintenance_turtle](https://forum.turtlecraft.gg/viewtopic.php?t=22589#p158962) **OLD TERRAIN & OLD GRAVEYARDS**

- [maintenance_turtle](https://forum.turtlecraft.gg/viewtopic.php?t=22589#p159796) **PRE-NERFED TOWERS**

- [maintenance_turtle](https://forum.turtlecraft.gg/viewtopic.php?t=22589#p160384) **HONOR SYSTEM REVAMP**

- [maintenance_turtle](https://forum.turtlecraft.gg/viewtopic.php?t=22589#p160387) **COMMANDERS & LIEUTENANTS**

- [maintenance_turtle](https://forum.turtlecraft.gg/viewtopic.php?t=22589#p160392) **MINES**

- [maintenance_turtle](https://forum.turtlecraft.gg/viewtopic.php?t=22589#p161471) **CAVALRY**

- [maintenance_turtle](https://forum.turtlecraft.gg/viewtopic.php?t=22589#p161946) **IVUS AND LOKHOLAR**

- [maintenance_turtle](https://forum.turtlecraft.gg/viewtopic.php?t=22589#p162705) **UNIT UPGRADES**

- [maintenance_turtle](https://forum.turtlecraft.gg/viewtopic.php?t=22589#p162707) **REPUTATION SYSTEM REVAMP**

---

*Last edited by Zvyrhol on Sun Apr 19, 2026 8:11 am, edited 11 times in total.*

## Post 157251 by Xudo (Grandmaster of Forum PvP) — 2025-10-27T06:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157251#p157251 | page 1 | era: 1.18.1-announced-pre-release -->

Welcome to the true endgame of wow.

It is cool that you managed to get your ideas work.

Though, I think that ability to repair bunkers will lead to endless matches. Now they eventually can be resolved. With repairability, it can be just like WSG with 2 good flag carriers.

## Post 157988 by Zvyrhol (Grandmaster of Forum PvP) — 2025-10-31T21:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157988#p157988 | page 1 | era: 1.18.1-announced-pre-release -->

> **Xudo wrote: Mon Oct 27, 2025 6:33 am**
> Welcome to the true endgame of wow.
>
>  It is cool that you managed to get your ideas work.
>
>  Though, I think that ability to repair bunkers will lead to endless matches. Now they eventually can be resolved. With repairability, it can be just like WSG with 2 good flag carriers.

Thanks.
That's good observation because indeed the core principle of my version of AV is to make this battleground less like 30 minutes game (vide AB or WSG) and more like warzone with endless war. Battleground of its own kind.
Ability to repair towers can potentially extend games. Basically recreating 2005 OG prenerfed AV vibe and adjusting it to *modern audience* is the ultimate goal.

Speaking of goals, I forgot to clarify them at first place so let's do it now.

 **PRINCIPLES OF MY ALTERAC VALLEY**

- **Recreating 2005 OG prenerfed AV vibes.**
 *Prenerfed* version of this battleground is the one from patch 1.5 during original Vanilla, the patch when WSG and AV were added as first battlegrounds of WoW. That version was legendary due to very long games and completing team objectives (for example Lokholar or Ivus) that led to epic team fights and unforgettable moments.

- **Adjusting AV to *modern audience.***
While old AV was fun and unique experience, it was terrible in terms of honor gained. Not because of honor awarded but because people usually turtled hard so bonus honor was hard to get. Blizzard gave in to PvP audience pressure back in 2005 and introduced drastic changes to the battleground to make it easier and less PvE dependant.
I see it as a mistake because instead of adjusting it to people needs, Blizzard completely changed the design of this battleground and time has shown it wasn't good decision. My version preserves spirit of original while fixing *modern audience* problem: honor gained per hour.

- **Conservative and QoL changes.**
My version of AV adds some new features like repair tower challenge and more that were never in original AV but fit in the spirit of old version. Also, some objectives that haven't aged well will likely be changed to be more useful (e.g. aerial assault). Some number tweaks and minor bug fixes are common here. Don't expect this version to be completely different from original. You can compare it to how similar is Turtle WoW to original WoW.

- **Diffent approach to awarding players with honor.**
This principle is related with the second one above. Generally, the idea of obtaining vast majority of bonus honor from burning towers and killing NPCs was in my opinion wrong design. It's an irony that purely PvE source of honor killed other PvE activities in AV during original WoW. The way game awards honor should be slightly more shifted to include PvP and quest objective activities like killing other players or summoning elemental. Players will always find the most optimal way to play and the key goal here is to set it correctly so players are encouraged to play like in good old days for fun.

*Last edited by Zvyrhol on Tue Nov 25, 2025 9:36 pm, edited 1 time in total.*

## Post 158029 by Xudo (Grandmaster of Forum PvP) — 2025-11-01T10:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158029#p158029 | page 1 | era: 1.18.1-announced-pre-release -->

Fixing hour per hour is a solution in the model of original ranking (and gearing) system.
This system is bad as a whole.
I hope turtle devs are cooking something better.
People grind Alterac reputation for good offhands and rings on a server without AQ and naxx. Current state of AV is just fine to grind reputation. You can get it for various activities during bg. Not only at the end of it.

## Post 158108 by Zvyrhol (Grandmaster of Forum PvP) — 2025-11-02T08:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158108#p158108 | page 1 | era: 1.18.1-announced-pre-release -->

ORIGINAL POST:
Some time ago I started experimenting in VMaNGOS with Alterac Valley battleground.
I have added a few cool things so I decided to share with you what I have managed to invent.
Note that this is WIP state and some things might no be fully implemented.
Feel free to suggest your ideas, I might add some if they are really good.
I will update this thread over time.

NEW CHALLENGE: Repair of bunker/tower

[embed: https://www.youtube.com/embed/Kg9P3N9vwIM]

This is new team objective similar to upgrading armor scraps, summoning elemental etc.
The idea is that players can collect Lumber that can be found and looted from many places across AV.
Lumber can be turned in via quest to new NPC.
The one you see on video is copy-pasted Murgot Deepforge with changed name (WIP).
When NPC has enough Lumber, player can choose which specific bunker/tower must be repaired.
Then NPC starts escort with his crew (not implemented yet) to that bunker.

Coding the gossips for that NPCs took me many hours... I had to understand how other objectives in AV work in order to implement them correctly. It's not shown on video but you can click the gossip to find out how much more Lumber is needed for bunker repair.

Also, when repair is ready, NPC shows only gossips of bunkers that CAN be repaired. If no bunkers are burnt, escort is not possible.

Repairing is the process when burnt bunker changes its state on the map from gray icon to assault icon. When Alliance repairs bunker, it's marked as blue-gray making it clear for players, also the bunker no longer stays in fire. It is to last 5 minutes as usual assault in AV. On video however, I changed that value to 30 seconds for testing purposes.
If the escort NPC doesn't die, the bunker will be repaired respawning all archers and banner as well as updating it's state on the map.

Repairing bunker grants same amount of honor as destroying enemy bunker.
Killing repair NPC grants same amount of honor for enemy team.

It also despawns/respawns Marshals/Warmasters. If your team has burnt 0 towers and enemy has burnt all of your towers, your boss will have 0 marshals. If you repair all towers somehow, all of them are respawned.

So far this challenge has been implemented only for Alliance side. Only 1 escort to Southern Bunker works at the moment. In the future of this challenge I plan to:
- extend this to both factions and make all 8 escorts to all bunkers.

- add Lumber to loot table of various NPCs in AV as well as adding Lumber as pickable object

- add peons/peasants NPCs from Warcraft 3 to assist during repair

ARMOR SCRAPS FIX

I think this bug is also on Turtle WoW. The issue is that if you upgrade your units to Seasoned/Veteran/Champion via armor scraps quest when your team hasn't turn in EXACTLY 500, 1000 or 1500 of them, the respawn in every node won't even happen. So if someones turn in 1520 armor scraps and doesn't click "upgrade units" gossip a single time, all your currently controlled points won't upgrade your NPC.

One condition in BattleGroundAV.cpp was wrong and it caused all problems when upgrading. I won't go in details, but the issue is gone. In my version upgrading armor works as intended without any bugs. If any dev reads this, contact me on PM, I can tell where exactly the problem lays.

Repair, part 2

I've made great progress in repair tower objective. It's in almost final state.

[embed: https://www.youtube.com/embed/a0rzOLgfQ54]

The most important thing added are Renovators - NPCs that spawn when repair phase starts. You can see they wield repair hammers and use proper animation. This is the same animation used for mining/chopping. There is also a sound of wood being hit. Currently each bunker spawns their own renovators.

From server's point of view, these workers are spawned in similar way as archers in every bunker. In this case: when owner of the bunker is Horde (meaning the Horde has destroyed it) and Alliance "assaults" the bunker somehow, these NPCs assigned to this specific battleground event are spawned. In normal games Alliance has no way to assault their own bunker so nothing can go wrong if I modify that event just for repair NPCs.

When repair phase ends, these NPCs are despawn by the same event and they are replaced by archers.

Another thing is that 8 renovators follow their leader to the proper bunker and are despawned when repair starts (these are not the same NPCs that use animations even though it might look like this). It's not finished yet, in theory this escort works every time for every bunker but only once per game. When I try to repair another bunker or the same one again, they don't follow their leader and stay in place. This must be fixed in the future.
Also, ideally this escort of 9 people should move in formation e.g. leader goes first and 2 rows of 4 people behind him. Unfortunately, I don't know if such formation movement is implemented in the core - even infantry and cavalry escorts from AV should move in formation but they stack on one NPC over time. It's not the most important thing but would look cool if it was possible.

Stormpike Renovator also might use animation that he is moving with wood on his shoulder (there is even 1 renovator on that video!) I plan to apply this animation to every NPC during escort because it's is cool. However, I don't feel good that Horde (at least to my knowledge) doesn't have mirrored version of this animation. Meaning that peons won't be as polished.

Overall, this challenge is almost finished. So far it's only implemented for Alliance but when I finish whole objective for Alliance, copy-pasting everything to Horde side shouldn't take that long.
Escort should be improved and I still need to add event that activates when repair leader is dead. That should grant some honor to enemy team and tower should be immediately destroyed.

Archers

I was a bit bored with repair challenge so I started investigating how archers work. I was surprised to see that AV might use incorrect NPCs by default (even on Turtle)!
As we know, there are 4 types or achers on towers/bunkers:

- normal

- seasoned

- veteran

- champion
and these depend on armor scraps upgrade. However, the normal ones have different behaviour from others. They shoot slower, don't lose aggro when their target is out of sight. And they don't fight in melee. I was surprised to see that actually there are 5 types of archers. That's because there are 2 types of normal ones.

These that I've described above even have different name and much much different stats! They are called Stormpike Bowman/Frostwolf Bowman instead of Stormpike Ranger/Frostwolf Outrunner. The thing is, normal Rangers/Outrunners don't exist anywhere in AV even though they exist in VMaNGOS. I don't know why they aren't used instead of Bowmen but apparently Blizzard also uses them in WoW Classic so it might be feature from old version of Vanilla.
Fun fact is that Bowmen have higher level (59-60) than Seasoned archers (57-58).

I plan to replace Bowmen with original Rangers/Outrunners in the future. For now I fixed only one issue: Bowmen' AI.
In database they don't have assigned AI so they behave unnatural (don't lose aggro when not in LoS). I fixed that, now they use same AI as other archers. So they shoot faster, lose aggro and attack in melee range (only with fists though).

![Image](https://i.imgur.com/DTg2gw5.jpeg)
![Image](https://i.imgur.com/1AnD519.jpeg)

 *Correct behaviour when losing LoS.*

*Last edited by Zvyrhol on Tue Nov 25, 2025 9:25 pm, edited 1 time in total.*

## Post 158962 by Zvyrhol (Grandmaster of Forum PvP) — 2025-11-16T12:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158962#p158962 | page 1 | era: 1.18.1-announced-pre-release -->

**OLD TERRAIN**

- Restored old Alterac Valley terrain from patch 1.5.

On my way to add custom things, I realized that 1.12 client version of this map is not good for this project. Compared to old terrain from patch 1.5, it is cut out with some unnecessary terrain changes like extra "holes" where people spawn behind graveyard banners. Most importantly, core-AV features are missing in new version like Winterax Hold, Gnolls' area and Master Ryson's cave.
If my project is to recreate original Alterac Valley, old terrain is a must.

It took me some time to find out how to import old terrain. Fortunately, Turtle has this terrain in their client files - and as far as I know it's 100% the same as in OG patch 1.5.
After extracting some .MPQs, I managed to import old Alterac Valley terrain.

![Image](https://i.imgur.com/ILgA46L.jpeg)

![Image](https://i.imgur.com/yVMaKsO.jpeg)

The server itself still runs on 1.12 version of the game so only terrain has changed. Trolls and Gnolls from early version are missing and NPCs pretended they knew terrain from later version so I removed all pathing of mobs completely from my server. Now they are able to fly in the sky on their way to their target but at least they don't move like in old terrain.
It's temporary solution, normally I would have to extract the terrain from the client and give it to the server so all mobs know how to run on new terrain but this process takes long hours so I will do it later.

 **OLD GRAVEYARDS**

- Changed location of every graveyard to original position (patch 1.5).

- Changed location of Spirit Healers to new graveyards.

 1.5 terrain was imported but server still used old graveyard spawn locations. For some of them, you respawned under the new terrain which caused your character to infinitely fall when you died close to such graveyard.
Fixes were necessary. So I had to change the location of almost every graveyard and spawn point on the map.

I should mention that I made some research when I was trying to import old terrain. I came across branch of VMaNGOS that aims to restore Alterac Valley from patch 1.6 and 1.8 with very high accuracy compared to the original <https://github.com/vmangos/core/pull/3029>. It's very hard task because at the moment it's impossible to sniff this data from Blizzard. Historical materials (videos and screenshots) are needed to even have knowledge how game looked like during those patches. They all came from 2005/2006 and you can imagine how few people recorded their games back then...

I find their site very useful because it contains little details about old AV even I didn't know about. I was certain that the graveyards and their banners used by Turtle WoW were in original positions... I was wrong!
According to screenshots from that site, all graveyard banners were very close to the respawn point. Meanwhile, not every graveyard on Turtle WoW works this way.
Stonehearth, Iceblood and Frostwolf Graveyards - all of them spawn you a bit further from banner on Turtle than in the very first patch of AV.
Fun fact: if you use your map, the icons of graveyards show the original spot of these banners. It wasn't changed in later versions of WoW.

So I adjusted the respawn position and banner of each graveyard. It was done by hand and locations aren't 100% accurate compared to original but this is general idea, in gameplay it doesn't matter much if banner is 1 yard further. This project aims to restore the spirit of old AV, not to be fully mirrored version of 1.5 AV. So guys who try to restore it on VMaNGOS have harder job.
Here is my final work (graveyards not shown on these screenshots work similar way as on Turtle):

![Image](https://i.imgur.com/R2DcXuA.jpeg)

![Image](https://i.imgur.com/LIxVhs6.jpeg)

![Image](https://i.imgur.com/ruuZuD9.jpeg)

Respawn works almost fine, I only need to move Spirit Healers to my new respawn locations.

By the way, now I know why old AV games lasted that long. It was mainly due to respawn location. In patch 1.5 you respawned right at the banner and could cast a single, let's say, Holy Nova to interrupt enemy. The team that was trying to assault the graveyard, had to kill entire enemy team every 30 seconds in order to capture the banner. In later versions of AVs, respawn points or banners were moved further so when you spawned, you had to walk at least 50 yards to defend the banner. That gave assaulting team extra few seconds to capture the banner so naturally siege became faster.

*Last edited by Zvyrhol on Thu Nov 27, 2025 8:21 pm, edited 1 time in total.*

## Post 159796 by Zvyrhol (Grandmaster of Forum PvP) — 2025-11-16T13:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159796#p159796 | page 1 | era: 1.18.1-announced-pre-release -->

**PRE-NERFED TOWERS**

- Replaced **Frostwolf Bowman** with **Frostwolf Outrunner** and **Stormpike Bowman** with **Stormpike Ranger**.

- Every tower has 9 more melee defenders.

- New defenders are upgradable by Armor Scraps objective.

- Slightly changed position of **Commander Louis Philips** to prevent NPCs swarm.

- Slightly changed position of some archers to prevent NPCs swarm.

I managed to edit towers to include more units like in the past. According to some old screenshots towers used to be denser than they are now. On Turtle WoW and late Vanilla Alterac Valley, towers only have 4 archers and some of them also have Commanders/Mine Layers. So max 5 units stay in each tower.
On some old videos from original game and screenshots from Blizzard PTR (before patch 1.5), some towers are packed with multiple NPCs.

Example:

![Image](https://i.imgur.com/03jUS9L.png)

Although we know towers used to have guards inside, I couldn't find state of every tower. Guard were removed in later patches.
My custom towers aren't to recreate original ones. They serve similar purpose: to make towers more dense and harder to attack. Actual NPCs that guard the tower (at least on Horde side) are original: these are Frostwolf Legionnaire and Frostwolf Bloodhound and are based on one old screenshot. I couldn't find if Alliance also had an animals guarding their bunkers but I decided to place Stormpike Owls as a mirror to Wolves for balance reasons. Second NPC on Alliance side is Stormpike Guardsman as in original.

I've made a general pattern for every tower. Each tower will now have 9 melee NPCs guarding it (not counting Commanders and Mine Layers):

The lowest level of tower/bunker:
- 3 Frostwolf Legionnaire and 1 Frostwolf Bloodhound or 3 Stormpike Guardsman and 1 Stormpike Owl.
The middle level of tower/bunker:
- 2 Frostwolf Legionnaire and 1 Frostwolf Bloodhound or 2 Stormpike Guardsman and 1 Stormpike Owl.
The highest level of tower/bunker around banner:
- 2 Frostwolf Legionnaire or 2 Stormpike Guardsman.

Here are some screenshots of my work.

 *Tower Point overview.*
![Image](https://i.imgur.com/Ejz4Jte.jpeg)

 *This is what happens if you rush to the flag and ignore NPCs.*
![Image](https://i.imgur.com/4POiTAI.jpeg)

 *Frostwolf West Tower.*
![Image](https://i.imgur.com/xNpK0Ub.jpeg)
![Image](https://i.imgur.com/c8uaIfE.jpeg)
![Image](https://i.imgur.com/jkLyCf0.jpeg)

 *Dun Baldar South Bunker.*
![Image](https://i.imgur.com/Yoba1KN.jpeg)
![Image](https://i.imgur.com/VM3ZjUe.jpeg)
![Image](https://i.imgur.com/04R8kTK.jpeg)
![Image](https://i.imgur.com/A76Gge3.jpeg)

That's not everything, at the moment every tower/bunker is finished.
It's worth noting that these NPCs were carefully placed in places where archers don't neighbour-aggro. This prevents from NPCs swarm if archers shoot you as intended. Also, all NPCs in each bunker aren't mega-linked, you fight max 3 mobs at the same time if you are careful. It's balanced and tested.
 1 extra change made to the towers is to archers themselves. Now Frostwolf Outrunner spawns instead of Frostwolf Bowman and Stormpike Ranger instead of Stormpike Bowman. These are NPCs cut from original AV and correspond to 0 level upgrade of Armor Scraps. They behave same as other upgraded Archers and aren't as bugged as Bowmen from later Vanilla.

General changes were needed in order for towers to work properly.
- Added 288 NPCs total.

- NPCs correspond to upgrade level of Armor Scraps (normal, seasoned, veteran, champion).

- Slightly changed some Archers' positions not to chain-aggro melee NPCs and Commanders.

- Commander Louis Philips was moved to the Tower Point banner not to chain-aggro.

- Replaced Bowmen with Frostwolf Outrunner or Stormpike Ranger.

I plan to share my work in the future as simple SQL code so you can add it to your own VMaNGOS. I also plan to expand towers to include some NPCs that wander around these towers.

*Last edited by Zvyrhol on Wed Nov 26, 2025 9:05 pm, edited 2 times in total.*

## Post 160384 by Zvyrhol (Grandmaster of Forum PvP) — 2025-11-23T09:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160384#p160384 | page 1 | era: 1.18.1-announced-pre-release -->

**HONOR SYSTEM REVAMP**

Destroying towers, killing commanders and last boss are no longer the only source of honor in the battleground.
In general, new system also awards honor to the team for completing repeatable objectives in AV and for active PvP engagement.

There are some major changes made to achieve this goal.

 **DIMINISHING RETURNS ON HONOR**

- Limited impact of *diminishing returns* on honor to 50% in Alterac Valley. That means players get at least 50% of honor for honorable kill.
Diminishing returns on honor is a game-mechanic in WoW that decreases your honor gained from killing same player repeatedly. On Turtle WoW every time you kill the player, you get 10% less honor from Honorable Kill on that player. This stacks up to 100%, then you get 0 honor for HK. This penalty is applied to everyone that got Honorable Kill on the player.

Diminishing returns on honor was added in early version of Vanilla to prevent people from farming honor via multiboxing or by killing same people back when battlegrounds didn't exist.
It served good purpose but it also limited earning honor via killing people. It became a problem especially in long AV games where players often faced same enemies. The result was that after some time players got almost 0 honor from PvP in large battles.

Diminishing returns on honor has been changed. Now the penalty stacks up to 50% instead of 100%. For example, first kill grants 100% of HK value, second one 90%, third one 80%... Fifth HK is the limit and every next HK on the player always grants 50% of honor from HK.
This works only in AV. In other battlegrounds and open world, old formula is still applied.
In practice, players will no longer suffer from earning 0 honor in "turtle-games". Large PvP battles should be new source of decent honor.

Exact limit - currently 50% - might be changed in the future if it becomes superior to other objectives in Alterac Valley in terms of honor per hour.

![Image](https://i.imgur.com/Nk2eFnt.png)

---
 **HONOR FOR COMPLETING AV OBJECTIVES**

Repeatable quests, killing blows to important NPCs as well as fulfilled objectives in Alterac Valley now grant bonus honor to everyone in the team.

 **QUESTS**
- **Ivus the Forest Lord** and **Lokholar the Ice Lord** quests grant 3 honor.

- **Crystal Cluster** and **A Gallon of Blood** quests grant 15 honor.

- Wing Commanders' quests grant 5 honor.

- **More Armor Scraps** and **More Booty!** quests grant 10 honor.

- **Empty Stables** quests grant 10 honor.

- **Ram Riding Harnesses** and **Ram Hide Harnesses** quests grant 10 honor.

- **Coldtooth Supplies** and **Irondeep Supplies** quests grant 20 honor.
 **KILLING BLOWS TO NPCS**
- **Stormpike Commando** and **Frostwolf Reaver** grant 20 honor.

- **Field Marshal Teravaine** and **Warmaster Garrick** grant 198 honor.

- **Stormpike Ram Rider** and **Frostwolf Wolf Rider** grant 30 honor.

- **Ivus the Forest Lord** and **Lokholar the Ice Lord** grant 594 honor.
 **OTHER OBJECTIVES**
- Controlling each mine grants 20 honor every minute.

- Summoning the cavalry grants 396 honor.

- Summoning the infantry grants 396 honor.

- Summoning the elemental grants 594 honor.

Numbers may change in the future.
Note that bonus honor is awarded to everyone in the team, not only to single player.

---

 **LINEAR HONOR SCALING**

Formula that grants honor when game ends, has been changed. Now it is linear and stacks up to 12 hours.

Here is new formula:
- Grants (596 * *time*) honor for killing last boss.
 *time* is number of hours since AV game started.

- Grants 596 honor if your Captain is still alive.

- Grants 596 honor for every tower that wasn't destroyed by your enemy.

---

Old formula used to stack only up to 1 hour and wasn't linear so you could get only 596 honor from last boss kill. It also included graveyards and mines controlled by your team. Now this formula is more unified.

New formula stacks up to 12 hours so if game is 12 hours long for some reason, your team will get 7152 honor if you manage to kill last boss. Note that this honor is only granted to victorious team. That should be good incentive to end long games and to properly defend your own boss. In short games, your team will barely receive any bonus honor for the kill.

Note that on AV bonus days, each team receives extra honor after game ends on top of that. This hasn't changed.

*Last edited by Zvyrhol on Fri Dec 12, 2025 11:09 pm, edited 1 time in total.*

## Post 160387 by Zvyrhol (Grandmaster of Forum PvP) — 2025-11-23T09:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160387#p160387 | page 1 | era: 1.18.1-announced-pre-release -->

**COMMANDERS AND LIEUTENANTS**

- Slightly changed some Commanders position on towers.

- All Commanders and Lieutenants respawn every hour instead of 5 days.

- Commanders and Lieutenants assigned to each graveyard despawn immediately after attackers take control over the graveyard.

- Commanders and Lieutenants assigned to each graveyard respawn immediately after defenders take back the graveyard.

- **Grip of Command** restores 24 health and 30 mana per second instead of 12 and 24.

- Fixed a bug that gave significantly less HP regeneration from **Grip of Command** than intended by description.

- **Grip of Command** ignores line of sight.
Commander respawns only if previously graveyard was fully controlled by the attacker. If it's only assaulted and defenders take back the graveyard, Commander won't respawn. So in practice, the minimum respawn time is 5 minutes.

Official patch notes from patch 1.5 (the one that introduced AV and WSG battlegrounds) state that "Enemy NPC lieutenants and commanders no longer respawn". Which means Blizzard originally wanted them to be respawnable.

This change won't have impact on short games but in longer ones it will allow some graveyards or towers to be better defended. Each graveyard is defended by 1 Commander (except First Aid Station, to be changed).
This change should also prevent situations where single player assaults graveyard. Teamwork is adviced.

Also, it means that players can potentially get more bonus honor in longer games.

Commander's buff used to have incorrect value on restored HP per second. It was 5x less than description says. HP1 stat was applied to HP5 one by mistake.
The values given by buff weren't that great so I increased them. The proper way of every tower's siege is to kill Commander first and then kill the rest.
Also the buff is now applied even if friendly Commander is out of sight making it more meaningful during defense of towers.

*Last edited by Zvyrhol on Wed Dec 03, 2025 9:46 pm, edited 1 time in total.*

## Post 160392 by Zvyrhol (Grandmaster of Forum PvP) — 2025-11-23T10:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160392#p160392 | page 1 | era: 1.18.1-announced-pre-release -->

**MINES**

- Controlling each mine grants 20 honor to your team every minute.

- Boxes that contain **Irondeep Supplies** or **Coldtooth Supplies** also contain 5 to 15 **Armor Scraps**.

- Quests related with Irondeep Mine and Coldtooth Mine have been improved:
 - Players no longer need to have proper quest in the quest log to pick supplies up from the Mines.

 - **Irondeep Supplies** and **Coldtooth Supplies** are no longer considered Quest Items.

 - **Irondeep Supplies** and **Coldtooth Supplies** are tradeable.

 - Players are able to collect more than 10 **Irondeep Supplies** or **Coldtooth Supplies**.

- Fixed a bug that caused Horde units in the Mines to be upgradable by Alliance's **UNIT UPGRADES** objective.

Mines used to suffer from objectives conflict. If you let them neutral, Troggs or Kobolds could respawn so in turn you could farm more Armor Scraps. If you captured the Mine, they didn't respawn so you no longer had Armor Scraps farm but at least you could collect ... useless supplies. This didn't make much sense.
Now if you capture the Mine, you are still able to loot Armor Scraps from the boxes.

Supplies quests have always suffered from terrible game design. Players had to accept the quest, run to the Mine, collect 10 supplies and then run back to the base. Repeat this 28 times and maybe you will summon the infantry. All of this often without fighting since Mines were never important in AV. In my opinion, it was the most boring objective.
This has changed. Now controlling the Mine grants passive 20 honor to your team every minute making this place valuable and worth fighting for.

Supplies are no longer limited to 10 - you can collect as many you want.

New playstyle is available where players stay in the Mine for longer time to collect supplies for their team and to defend it from enemies.

Supplies are tradeable meaning that one player can get supplies from other players and deliver them alone. Quality of life change.

---
![Image](https://i.imgur.com/xg08AzK.png)

---
![Image](https://i.imgur.com/qppHaRm.png)

 *Box containing extra Armor Scraps.*

*Last edited by Zvyrhol on Sat Dec 13, 2025 8:32 pm, edited 2 times in total.*

## Post 160409 by Koilos33 — 2025-11-23T14:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160409#p160409 | page 1 | era: 1.18.1-announced-pre-release -->

Really like the mines rework, it never made sense to me that you had to go back and forth every time. Scraps are a good incentive too

## Post 160419 by Escaton1 (Barrens Chat Casualty) — 2025-11-23T15:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160419#p160419 | page 1 | era: 1.18.1-announced-pre-release -->

> **Koilos33 wrote: Sun Nov 23, 2025 2:23 pm**
> Really like the mines rework, it never made sense to me that you had to go back and forth every time. Scraps are a good incentive too

Also removes the excuse of "we're farming scraps" from gold farmers spending entire AV games in the mines killing troggs and kobolds which is nice

## Post 161471 by Zvyrhol (Grandmaster of Forum PvP) — 2025-12-03T21:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161471#p161471 | page 1 | era: 1.18.1-announced-pre-release -->

**CAVALRY**

- **Frostwolf Wolf Rider Commander** and **Stormpike Ram Rider Commander** immobilize their target with **Net** on aggro.

- Fixed a visual bug that made stables full even if taming objective wasn't fully completed.

- Reduced tamed animals needed to summon cavalry from 25 to 20.

- Reduced hides needed to summon cavalry from 25 to 20.

- Now players can ask **Frostwolf Wolf Rider Commander** or **Stormpike Ram Rider Commander** about how many more tamed animals and hides are needed.

- Stormpike stables spawn double amount of **Stabled Alterac Rams** inside.

- Completing each quest about taming animal and turning in hide (**Ram Riding Harnesses**, **Ram Hide Harnesses**, **Empty Stables**) grants 10 bonus honor to everyone in the team.

- Summoning cavalry grants 396 bonus honor to everyone in the team.

---

 *Net spell added to cavalry Commander is a reference to Warcraft 3. Orcish Raiders could use ability Ensnare to ground and immobilize enemy flying units. Net spell was also added to Stormpike Ram Rider Commander to keep factions balanced.*

![Image](https://i.imgur.com/4t4Yb2s.jpeg)

In the past, there was a bug that summoned stabled Wolves or Rams when players tamed 20 animals total. It looked like stables were full while the objective wasn't actually completed and couldn't be tracked by any way. That led to confusion.
Now, stables looks full only when all animals needed to summon cavalry are tamed.

New gossip were added so players can track the progress of cavalry objective. Before, tracking was impossible.

![Image](https://i.imgur.com/5qGsKEz.png)

 *Stormpike stables used to have only 4 summonable stabled rams total. In comparison, Frostwolf stables had 8. It looked unfinished so I added 4 more rams that are summoned outside the stables building as in early Vanilla.*

![Image](https://i.imgur.com/xOP5nZk.jpeg)

## Post 161946 by Zvyrhol (Grandmaster of Forum PvP) — 2025-12-07T20:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161946#p161946 | page 1 | era: 1.18.1-announced-pre-release -->

**IVUS AND LOKHOLAR**

- Health of **Ivus the Forest Lord** and **Lokholar the Ice Lord** is doubled.

- Their running speed is slightly increased.

- Their spells are overhauled:
 - **Wrath** and **Frostbolt** deal less damage.

 - **Wrath** and **Frostbolt** become AOE spells aimed at every enemy in 50 yards.

 - **Frostbolt** no longer slows enemy.

 - **Roots** and **Frost Nova** deal less damage.

 - **Roots** and **Frost Nova** become AOE spells aimed at every enemy in 50 yards.

 - **Roots** and **Frost Nova** root enemy for 6 seconds.

 - **Roots** and **Frost Nova** can no longer break root effect on receiving damage.

 - Cooldown of various spells was changed.

 - **Ivus the Forest Lord** has new spell **Swell of Souls** that has been also used by **Lokholar the Ice Lord**.

 - **Swell of Souls** stackable movement speed bonus was decreased from 10% to 5% per stack.

- Amount of **Storm Crystal** or **Stormpike Soldier's Blood** needed to summon elemental was decreased from 200 to 150.

- Gossips that inform how many **Storm Crystal** or **Stormpike Soldier's Blood** are still needed to summon the elemental, are updated after turning 50 and 100 items instead of unintuitive 100 and 160.

- Turning in each **Storm Crystal** or **Stormpike Soldier's Blood** grants 3 bonus honor to everyone in the team.

- Summoning **Ivus the Forest Lord** or **Lokholar the Ice Lord** grants 596 bonus honor to everyone in the team.

- Killing **Ivus the Forest Lord** or **Lokholar the Ice Lord** grants 596 bonus honor to everyone in the team.

- **Ivus the Forest Lord** or **Lokholar the Ice Lord** are no longer summoned in the Field of Strife. They are summoned near base.
![Image](https://i.imgur.com/87Ge3Bt.jpeg)
![Image](https://i.imgur.com/eZvcyju.jpeg)
- **Arch Druid Renferal** and **Primalist Thurloga** have new waypoints.

- **Ivus the Forest Lord** or **Lokholar the Ice Lord** have new waypoints:
 - Route starts close to **Stormpike Graveyard** or **Frostwolf Graveyard**.

 - They no longer wait certain amount of time before they start going.

 - Route is extended. After defeating enemies at last graveyard, elementals go to straight to the boss room.

- Number of players needed to summon the elemental decreased from 10 to 8.

- **Ivus the Forest Lord** or **Lokholar the Ice Lord** evade if players kite them close to enemy tunnel.

---
Elementals haven't been changed since release of AV. I've experienced them on Turtle and they were far easy to kill with many players in raiding gear. Their HP has been adjusted to keep their relative power as originally during patch 1.5 when average player wore mostly gear from dungeons.

Elementals were famous for breaking long turtle games. Actually, not because they were strong - their main damage came from high single target hits. During my experience on Turtle WoW, they were good at keeping aggro on defenders. That was especially good during fights over Relief Hut or Aid Station - players often kited elementals to boss room leaving the graveyard vulnerable to attackers.

Their spells have been updated. Firstly, their changed spells are mirrored.
Now the elementals are more oppressive on large AoE battles. They often root all enemies and deal significant damage to all. That includes enemy NPCs. With these massive AoE spells buffed, they should basically tank every unit in 50 yards. This is intended because elementals have always been to break stalemate.
Your team has problem with assaulting last graveyard because of large amount of NPCs/players? Summon the elemental. Simple.

Swell of Souls was spell that was used only by Lokholar. The spell was very good if Lokholar managed to kill many players because the bonus stacked. Movement speed bonus was especially important because it didn't let players kite elemental. So Lokholar wasn't able to be kited as easily as Ivus.

Now Ivus has access to the same spell. Both elementals should have similar power. However, some single target spells haven't been changed.

Amount of items needed to summon the elementals has been lowered to make this objective more frequent.
Also, the team is awarded with extra honor for each turn-in. There is also new incentive to summon the elemental. 10 players are needed to do this and it sometimes caused problems when players didn't want to help their team with summoning. Honor granted to everyone when team summons the elemental should help it.

If you have ever explored Alterac Valley, you've probably wondered what was that stone circle close to Frostwolf Keep. It looks unique though the place is not related with any quest or objective. I've decided to move ritual of summoning of Lokholar from Field of Strife to that place.
Invocation of Ivus was also moved to the cozy part of forest to keep both sides balanced.

New summoning places have a few advantages. First of all, Druids or Shamans don't need to risk their lives by going to Field of Strife. If they die, there will be no summon. These places are closer to both bases. Successive invocations should be more common.

Elementals now have longer way ahead. So now, they no longer wait a few minutes in the mid. Instead, they start going as soon as they are summoned.

Now only 8 players must click the altar to summon the elemental. From my experience on Turtle WoW, gathering 10 people was hard job especially in smaller games. It was common that attackers had to go back from front line between last 2 graveyards only to summon elemental. That often resulted in withdrawal of the attack.

Elementals now evade from enemy tunnels. On Turtle WoW, it was abused because guardians in the tunnel were very strong and numerous. Elemental had no chance to survive in the tunnel also because enemies respawned infinitely. This trick trivialized whole objective and was too good. Fixed.

*Last edited by Zvyrhol on Fri Dec 12, 2025 10:36 pm, edited 2 times in total.*

## Post 161951 by Escaton1 (Barrens Chat Casualty) — 2025-12-07T21:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161951#p161951 | page 1 | era: 1.18.1-announced-pre-release -->

Starting to look very interesting.
Hopefully the devs take notice of this   turtle_in_love

## Post 162097 by Zvyrhol (Grandmaster of Forum PvP) — 2025-12-12T22:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162097#p162097 | page 1 | era: 1.18.1-announced-pre-release -->

> **Escaton1 wrote: Sun Dec 07, 2025 9:53 pm**
> Starting to look very interesting.
>  Hopefully the devs take notice of this   turtle_in_love

Thanks. So far I've noticed that they don't care much about PvP - and that's good.
As far as I know, new announced battleground that is based on EotS is 100% work of someone not affiliated with Turtle team. Probably similar situation was with Sunnyglade though this is only my speculation. So in general, any PvP custom content was fan-made and applied by Turtle. This gives me hope...

I plan to share with this work. I haven't done it yet because I'm still improving things. Maybe Mines objective is fully finished because I have no idea how to improve it even more. Other objectives aren't in perfect state yet.

## Post 162705 by Zvyrhol (Grandmaster of Forum PvP) — 2025-12-13T20:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162705#p162705 | page 1 | era: 1.18.1-announced-pre-release -->

**UNIT UPGRADES**

- **Armor Scraps** are no longer soulbound.

- Fixed a bug that didn't force upgrade of units on gossip click if total number of turned-in **Armor Scraps** wasn't exactly 500, 1000 or 1500.

- Turning in 20x **Armor Scraps** rewards 10 bonus honor to everyone in the team.

- **Armor Scraps** can be also collected from **Coldooth Supplies** or **Irondeep Supplies** in the Mines.

- After upgrading units to Champion, players are able to replenish units every next 500 **Armor Scraps**. This respawns all Champion units in controlled areas and buffs every players in your team with +30% bonus damage world buff that lasts 2 minutes.

- Visual indicator of progress of the objective is fixed. Boxes close to the Blacksmith appear and disappear correctly.

---
Armor Scraps become tradeable like on Turtle. This allows some delivery-man to turn in all Armor Scraps from people far from your base.

Capturing neutral Mines no longer deprives someone of access to Armor Scraps. They can be found inside the boxes. Details in the Mines post on this thread.

Now collecting Armor Scraps after upgrading units to Champion still makes sense. Bonus damage buff was originally in AV though players could do this only 3 times per game. Now this buff launched at proper time can be a game changer. Also, it makes the cooperation of everyone organic - low level players who farm Armor Scraps can effectively support people on the front line. Just like in real war.

## Post 162707 by Zvyrhol (Grandmaster of Forum PvP) — 2025-12-13T22:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162707#p162707 | page 1 | era: 1.18.1-announced-pre-release -->

**REPUTATION SYSTEM REVAMP**

Alterac Valley has been known as a good place to farm reputation because of some good gear pieces. Many players join AV just to hit Exalted. While there is nothing wrong with it at first glance, players always find the most optimal way to farm the reputation. The unfortunate outcome was that quick games were the most profitable.

Some changes were made to shift this meta and make original, organic gameplay the most profitable.

---
 **NERFS**
- Reputation for killing enemy Captain decreased from 125 to 60 on normal day and from 175 to 90 on AV day.

- Reputation for killing enemy General decreased from 350 to 150 and on normal day and from 525 to 250 on AV day.

 - **NEW.** This number is only base. The final value is base multiplied by number of hours AV has when game ends (stacks up to 12 hours).

 - **EXAMPLE:** game is 6 hours long when Alliance kills Drek'Thar. So every Alliance player receives 150*6 = 900 reputation for killing the General.

 - **EXAMPLE:** game is 20 minutes long when Alliance kills Drek'Thar. So every Alliance player receives 150 / 3 = 50 reputation for killing the General.

- Reputation rewarded if your Captain is alive when a game ends, decreased from 125 to 75 on normal day and from 175 to 125 on AV day.

---
 **NEW SOURCE OF REPUTATION**

Repeatable quests now reward two kinds of reputation: individual reputation and group one. Individual reputation is new and is rewarded to one specific player that completes repeatable quest. Group reputation has already existed in AV and is rewarded to everyone in the raid group.

New meta for optimal reputation farm should be about individual organic work for Frostwolf Clan or Stormpiike Guard by doing quests.

---
 **INDIVIDUAL REPUTATION**
- Turning in 20 **Armor Scraps** rewards you with 5 reputation points.

- Turning each **Storm Crystal** or **Stormpike Soldier's Blood** rewards you with 3 reputation points.

- Turning each **Frostwolf Hide** or **Alterac Hide** rewards you with 5 reputation points.

- Taming each **Alterac Ram** or **Frostwolf** rewards you with 10 reputation point.

- Turning in 10 supplies from closer Mine rewards you with 10 reputation points.

- Turning in 10 supplies from further Mine rewards you with 20 reputation points.

- Turning in each **Frostwolf Soldier's Medal**, **Frostwolf Lieutenant's Medal**, **Frostwolf Commander's Medal** or **Stormpike Soldier's Flesh**,  **Stormpike Lieutenant's Flesh**, **Stormpike Commander's Flesh** rewards you with 5 reputation points.

---
 **GROUP REPUTATION**
- Turning in 20 **Armor Scraps** rewards everyone with 1 reputation point.

- Turning each **Storm Crystal** or **Stormpike Soldier's Blood** rewards everyone with 1 reputation point.

- Turning each **Frostwolf Hide** or **Alterac Hide** rewards everyone with 1 reputation point.

- Taming each **Alterac Ram** or **Frostwolf** rewards everyone with 1 reputation point.

- Turning in 10 supplies from closer Mine rewards everyone with 2 reputation points.

- Turning in 10 supplies from further Mine rewards everyone with 3 reputation points.

- Turning in each **Frostwolf Soldier's Medal** or **Stormpike Soldier's Flesh** rewards everyone with 1 reputation point.

- Turning in each **Frostwolf Lieutenant's Medal** or **Stormpike Lieutenant's Flesh** rewards everyone with 2 reputation points.

- Turning in each **Frostwolf Commander's Medal** or **Stormpike Commander's Flesh** rewards everyone with 3 reputation points.

---

With the linear modifier added to the reputation for killing General, rapid games no longer are the most profitable. However, this bounty increases over time up to 12 hours. It's worth ending 12 hours long game because accumulated reputation is gigantic.

This reputation overhaul restores original design philosophy of the battleground. Fresh characters with bad gear can't be excellent soldiers but they might be useful elsewhere silently supporting their team on the back.

## Post 162778 by Zvyrhol (Grandmaster of Forum PvP) — 2025-12-14T15:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162778#p162778 | page 1 | era: 1.18.1-announced-pre-release -->

I take a Christmas break from modding. I will go back in the new year.

I leave you with some videos.

[embed: https://www.youtube.com/embed/KVDebiwnQhE]

[embed: https://www.youtube.com/embed/7QW6MnYUa2s]

[embed: https://www.youtube.com/embed/9pdT5Nfgo5Q]

## Post 175910 by Zvyrhol (Grandmaster of Forum PvP) — 2026-04-19T08:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175910#p175910 | page 1 | era: post-1.18.1 -->

> I take a Christmas break from modding. I will go back in the new year.

Christmas break took *longer* than I expected. Anyway, forum shuts down in October so this thread will likely be deleted. I've already archived it and plan to share as open-source project.
Enjoy the read if you haven't yet.

