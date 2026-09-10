---
title: "[Warrior] Defensive Stance Quest."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2647"
topic_id: 2647
forum_id: 14
forum: "Suggestions"
author: "Monmothma21"
author_authority: "player"
posted: "2022-02-01T13:29:00Z"
last_post: "2022-02-01T13:29:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T12:35:48Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Warrior] Defensive Stance Quest.

## Post 16560 by Monmothma21 — 2022-02-01T13:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16560#p16560 | page 1 | era: pre-1.18.1 -->

**Disclamer: First of all - im a big fan of taurens and i only played as them. Second of all -  I tried using the Web-quest-creator-thingy but it keep screwing everything i do in it. It also is a bit confusing, theres a lot going on in it. Some of my "saved in browser" mockups are gone too for some reason. If anyone with more experience wants to help with it - please do. Also sorry for this being so long. I started it lightly, added some things here and there and then BAM - its 23k characters long now.** -------------------------------------------

I always thought that Warrior quests are a bit lacking and wanted them to be something more. Since one of this server's shtick is custom user-suggested content - here is one suggestion from me:

The Defence Stance quest for Horde is an absolute joke. The goal of it is to talk to an Orc, go bonk 10 thunder-lizards and come back. After all of that you, suddenly, in the middle of nowhere, learn a defensive stance. Its lame. Its borring and teaches player nothing at all. My suggestion would be a series of quests that will introduce player to at least one tank related mechanic and give some kind of proper reward that might butter player up in to tanking. -------------------------------------------

The details:

The suggested quest chain can start with a letter sent in to your mailbox on getting level 10. The letter should invite player to visit [Krang Stonehoof](https://database.turtlecraft.gg/?npc=3063) in Bloodhoof Village.
This chain will require:
1. Two new npcs - Brave Auka(new), tauren Warrior Lady with a shield and Deadtongue(new), the gnoll miniboss. Code: Select all

```
Brave Auka(new)
Auka could be any tauren lady with armor on.
Brave Auka(new) will not participate in any fights, so her stats are irrelevant.
```

Code: Select all

```
Deadtongue(new) is a Gnoll-Mystic "miniboss" and should have following stats:
Level 8-9(lower, to ensure that player can hit him)
Humanoid
Faction: Gnoll - Shadowhide
 1200 HP
 1200 Mana
 100 Armor
Damage: 1-1(Physical)
Abilities:
id18809 - Rank 8 Pyroblast - his main attack, he should spam it;
id11719 - rank 2 Curse of Tongues. HE should be permanently affected by it.

Pyroblast could be replaced with any similar spell.
The Spell should one-shot the player, if allowed to finish.
The main goal is for him to have a spell with stupid damage but 10+seconds cast time.
```
2. Two new items;
 - Totem(New) - quest related weapon - is temporary and is only for the quest. [Link to Item Creator](https://dev.turtlecraft.gg/#!/itemcreator/WzAsMiw1LCJUb3RlbSIsIiIsNTgyMCwyLDE5MiwxLDAsMCwxNywxLDMyLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwwLDEsMTUsNCwzLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMjEwMCwwLDAsMTAsMzUsMCwxLDYsMywwLDAsMCwwLDAsMCwwLDAsMCwwLDUwLDAsMCwwLDAsMCwwLDY1MjQsMCwwLDAsLTEsMCwtMSwxNTQ2OCwxLDAsMCwwLDAsLTEsMCwwLDAsMCwwLDAsLTEsMCwwLDAsMCw3MDAwLDAsLTEsMCwwLDAsMCwtMSwwLC0xLDQsMCwwLDAsMCwwLDIsMSwwLDAsMzAwLDEsMTgwMCwxNjM4NCwwLDAsMCwwLDIsMSwiTlVMTCJd)
And here is a preview picture, in case the link will be broken:
![Image](https://i.imgur.com/hsIA1Rt.png)
This is a quest related item that player would temporarely get.
In the editor i made it in to Conjured item with timed life, limited to Mulgore.

It has 2 main abilities:
id6524 Ground Tremor, lvl1 stun with 5 seconds CD.
id15468 Improve Hit Chance, that gives 5% chance to hit while equipped(to reduce the chance player will miss with the stun).

Player would be required to give it back to finish the quest.
Limited life-time will destroy it. Being conjured item will destroy it if player is offline for 15+ minutes.
 -------------------------------------------
 - Warrior's Duty(new) - This is the Quest-chain reward item player will get in the end.  [Link to Item Creator](https://dev.turtlecraft.gg/#!/itemcreator/WzAsMiw0LCJXYXJyaW9yJ3MgRHV0eSIsIkxvb2tzIGEgYml0IHJ1c2hlZCwgYnV0IGZhaXJseSB3ZWxsIGRvbmUuIEJyaWF0aG9ybiB3YXMgdXNlZCB0byB3cmFwIHRoZSBoYW5kbGUsIHNoYXJwIHNwaWtlcyBwb2tlIG91dCBvZiBpdCBoZXJlIGFuZCB0aGVyZS4gV29yZHMgXCJOZXZlciBmb3JnZXRcIiBhcmUgZW5ncmF2ZWQgYWJvdmUgaXQuIiw4MjgxLDIsMCwxLDAsMCwxMywxLDMyLDE1LDEwLDk1LDIsMCwwLDAsMCwwLDAsMSwwLDcsNSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxNTAwLDAsMCwxMiwxOSwwLDEsNiwzLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCw4MDYsMiwwLDEsMzAwMDAsMCwtMSwwLDAsMCwwLC0xLDAsLTEsMCwwLDAsMCwtMSwwLC0xLDAsMCwwLDAsLTEsMCwtMSwwLDAsMCwwLC0xLDAsLTEsMSwwLDAsMCwwLDAsMCwxLDAsMCwyNTAsMCwwLDAsMCwwLDAsMCwwLDAsMSwiTlVMTCJd)
And here is a preview picture, in case the link is broken:
![Image](https://i.imgur.com/nj99PUn.png)
I would force atleast 45 sec CD on this proc and give it 3-5% chance.
 14 STR is alot, but that is the only spell i found that fits the theme.
Also - the point is to give a tank something cool, to promote tanking.
It has Defence 2 requirement which, if i understand it correctly, would require player to have 2 defence on in order to use it. You can garantee 2 defence by wasting 1 talent point in to dedicated talent in your prot talent tree.
 -------------------------------------------
3. somehow getting a prop to appear in world or make static npc with prop model;
4. both mobs would have to be placed in the world, with Auka being in 2 places at the same time.

Here is the mock-up version of the quest chain itself. Since my small brain can not make web-quest-creator to work i'll just describe them instead, using a template i found somewhere on this forum. Its a bit long, and cheesy, but thats how it is(i also formated the text, with $B for line break, and everything):
1. Warrior's Duty.  Previous quest: Reach level 10, get the letter to start this one.
Title: Warrior's Duty.
Quest NPC (Start): The letter.
Quest NPC (End): [Krang Stonehoof](https://database.turtlecraft.gg/?npc=3063).
Quest level: 10
Required level: 10-60
Quest zone ID: 215 (Mulgore/Kalimdor)
Main description: Time to face the trial has come, young $N. Gather your wits and come to the Bloodhoof Village. Master Stonehoof will be overseeing your trial, contact him on arival.
Short objective: Visit Bloodhoof Village and talk to Krang Stonehoof to start your Trial.
Progress text: none? you talk to the man and thats the progress.
Completion: Good. You have grown a lot, young $N. I heared many tales about your endeavours around, even if your current victories are small - they do matter. On behalf of the elders - i thank you for every thing you do for us, for the Horde. You are our future, and seeing younglings like you makes the old bull happy.
Required creature kills:  just talk to the guy, no need to get this far.
Required items: the letter, maybe?
— Rewards
Money: 5s
Reputation: ThunderBluff, Orgrimmar, Trolls + a bit?
XP: 50XP
Additional notes: the guy can squize a tear on completion.

 -------------------------------------------
2. Warrior's Duty, Part 1.  Previous quest: Warrior's Duty.
Title: Warrior's Duty, Part 1.
Quest NPC (Start): [Krang Stonehoof](https://database.turtlecraft.gg/?npc=3063).
Quest NPC (End): [Krang Stonehoof](https://database.turtlecraft.gg/?npc=3063).
Quest level: 10
Required level: 10-60
Quest zone ID: 215 (Mulgore/Kalimdor)
Main description: With all pleasantries aside - we can proceed, young $N. Before the real test begins we should see to every one being ready. Why dont we start with a little warm-up? $B And i think we already have volontiers.$B <Stonehoof points towards the Ring.>$B Prepare yourself and step in to the ring. You will face some of my pupils.
Short objective: Step in to the ring to start an exercise.
Progress text: Take your time, young $N
Completion: Ha ha! Good! This will cool their heads for a while.
Required creature kills: 3x[Novice Warrior](https://database.turtlecraft.gg/?npc=10721). But instead of killing it sould be a duel.
Required items: none.
— Rewards
Money: none
Reputation: none
XP: 50xp
Additional notes: [Novice Warrior](https://database.turtlecraft.gg/?npc=10721) could spawn in waves, one after another. Or you could make it so player would have to go and talk to them(they sit around the Ring) and challange them in to a fight.

 -------------------------------------------
3. Warrior's Duty, Part 2.  Previous quest:  Warrior's Duty, Part 1
Title: Warrior's Duty, Part 2
Quest NPC (Start): [Krang Stonehoof](https://database.turtlecraft.gg/?npc=3063)
Quest NPC (End): the prop item or similar thing.
Quest level: 10
Required level: 10-60
Quest zone ID: 215 (Mulgore/Kalimdor)
Main description: Im now confident that you are ready. $B We received a disturbing messages from our hunters - local Gnolls are getting bolder. This could only mean one thing - they got someone to lead them. Im hesitant to send you on it but we have no other choice - we are short on hands, and the matter should be resolved immediately.  I prepared a Hunting party to investigate last reports - hunters are about to gather and scout the area  near the Palemane Rock cave. Im am sorry, but this will have to be your trial, be careful.
Short objective: Contact the Hunting Party near the Palemane Rock cave, to the west of Bloodhoof Village.
Progress text: Be swift, enemy will not wait.
Completion: <Looks recent, the party might be in already. They left some supplies behind in a rush. Should make haste>
Required creature kills: none
Required items: none.
— Rewards
Money: [Lesser Healing Potion](https://database.turtlecraft.gg/?item=858)x3
Reputation: none
XP: 50 XP
Additional notes: Player would have to walk to Palemane Cave and search for the party. The Hunting party's stuff could be placed somewhere near the cave, to the left of it. Something like a smoke effect or a torch could be added to attaract attention. Player submits this quest to a prop inside hunter's camp.
The Palemane Cave is this one:
![Image](https://i.imgur.com/pxc23X9.png)
Additionaly - player would be tasked to go in to the cave and reach the end. The amount of gnolls in this cave is stupid. For a single warrior that could be a challange, i propose a temporary buff that will carry player over to the end of it. 30 minutes of in-combat health regen as the reward, like a temporary healing totem but better.

 -------------------------------------------
4. Warrior's Duty, Part 3.  Previous quest: Warrior's Duty, Part 2
Title: Warrior's Duty, Part 3
Quest NPC (Start): whatever prop item you had to click in part 2.
Quest NPC (End): Brave Auka(new)
Quest level: 10
Required level:10-60
Quest zone ID: 215 (Mulgore/Kalimdor)
Main description: The hunting party left their post in a hurry, something might happened to them. The gnoll presence here is heavy, searching for the party should be the priority.
Short objective: Search for the Hunting Party inside the Palemane Cave
Progress text:<..nothing of value left..>  (the text could appear if you click on the prop item that starts the quest?)
Completion:<The tauren lady is in shock, here friends are alive but need help.>
Required creature kills: none, expect ones you would have to kill to get deeper in to the cave.
Required items: none
— Rewards
Money: none
Reputation: none
XP: 200 xp
Additional notes:The cave ends in this kind of opening: ![Image](https://i.imgur.com/DWpUcye.png) The Deadtongue(new) should be on top of that little island, with Brave Auka(new) and her fallen friends close to the wall to the left of it, in the water. Both Auka and the miniboss should be far enouth for player to be able to talk with Auka with out agroing it. Both Auka and the miniboss should be passive and not interracting with each other or other mobs. Brave Auka(new) should not help you in any fight and just /kneel. Her random generic looking warrior friends could be /sleep-ing around here. Player submits this quest to Auka.

 -------------------------------------------
5. Warrior's Duty, Part 4.  Previous quest: Warrior's Duty, Part 3
Title: Warrior's Duty, Part 4
Quest NPC (Start): Brave Auka(new)
Quest NPC (End): Deadtongue(new)
Quest level: 10
Required level: 10-60
Quest zone ID: 215 (Mulgore/Kalimdor)
Main description: <She refuses to look you in the eyes> $B$B ..i failed, i rushed like an idiot and this is the result.. $B$B <She keeps mumbling to herself, it looks like she is in a deep shock from the pain her burned wound causes her.>$B$B<Looking further you see her weapon, and slightly further - the one who did all of this. The menacing looking gnoll rustles through his stuff, despirately trying to find something. Rushing for help is not an option, the only option is to fight. You take Auka's weapon and ready yourself to whatever comes>
Short objective: Defeat Deadtongue(new)
Progress text: <She keeps mumling nonsence>
Completion: ..i failed everyone..
Required creature kills: Deadtongue(new)
Required items:Totem(new)
— Rewards
Money: none / Deadtongue's Head?
Reputation: none
XP: 250 xp
Additional notes: This quest should start by giving player a Totem(new), weapon described at the begining. Player supposed to use it to defeat the miniboss. The premise is simple - miniboss attacks by casting super long spell, capable of one-shotting the player. The Player supposed to use Totem's On-Use ability to interrupt his cast or they will die. Time the usage of On-Use ability and interrupt when miniboss' cast progress will be at 3/4 or so for better effect. Thats it.

 -------------------------------------------
6. Warrior's Duty, Part 5.  Previous quest: Warrior's Duty, Part 4
Title: Warrior's Duty, Part 5
Quest NPC (Start): Brave Auka(new)
Quest NPC (End): [Krang Stonehoof](https://database.turtlecraft.gg/?npc=3063).
Quest level: 10
Required level: 10-60
Quest zone ID: 215 (Mulgore/Kalimdor)
Main description:<Seems like she and her friends finaly came to their senses>$B$BI can't belive how dumb i am. All i wanted is to prove myself. The worst thing is that my friends have to pay for it now. I supposed to save everyone, not make it worst. I forgot. Forgot everything old man was drilling in to my head.$B$B<You gave Auka her totem back, to give her something to prop on, and the rest of the supplies they left outside>.$B$B Go back, go back and tell Stonehoof that the deed is done. I'll tend to their wounds in the mean time.
Short objective: Talk to [Krang Stonehoof](https://database.turtlecraft.gg/?npc=3063)
Progress text: Go, we will be ok.
Completion: What happened!? Where is my daugt.. were is Auka and the others?
Required creature kills: its just a talk quest.
Required items: none / Deadtongue's Head?
— Rewards
Money: 1s
Reputation: Thunder Bluff 100
XP: 250 xp
Additional notes: Its a simple talk quest. If miniboss can drop something(like a head), this item could be used as a goal item.

 -------------------------------------------
7. Warrior's Duty, Part 6.  Previous quest: Warrior's Duty, Part 5
Title: Warrior's Duty, Part 6
Quest NPC (Start): [Krang Stonehoof](https://database.turtlecraft.gg/?npc=3063)
Quest NPC (End): [Krang Stonehoof](https://database.turtlecraft.gg/?npc=3063)
Quest level: 10
Required level: 10-60
Quest zone ID: 215 (Mulgore/Kalimdor)
Main description: <He listened to everything you said about what happened. His face changed in a way that gave you chills, but he quiclky comed down>$B$BI understand, the issue is resolved.. I will send people to extract them. In the mean time, would.. would you help up prepare for them? ..We, ..we probably would need some.. bandages. Yes, bandages - get them to me when you are ready. Talk to Vira if you need help with them, she is at the Inn.$B$B<He tries hes best to keep composture, but he is clearly upset.>
Short objective:1) Talk to [Vira Younghoof](https://database.turtlecraft.gg/?npc=5939) 2)Craft 3x [Linen Bandage](https://database.turtlecraft.gg/?item=1251)
Progress text: Stonehoof: Please.. just go. Vira is at the Inn if you need her help. Vira: That's so sudden! i am happy everyone is alive, i will prepare and do my best! If you need help with bandages - just ask!
Completion: Thank you. They arrived while you were off, Vira will tend to them. You did well.
Required creature kills:  none
Required items: 3x [Linen Bandage](https://database.turtlecraft.gg/?item=1251)
— Rewards
Money: 1s
Reputation: none
XP: 50 xp
Additional notes: Talk to Vira, learn/craft 3 basic bandages, give them to Stonehoof. Cloth drops from gnolls player was fighting before so it should not be a problem.

 -------------------------------------------
8. Warrior's Duty, Part 7.  Previous quest: Warrior's Duty, Part 6
Title: Warrior's Duty, Part 7
Quest NPC (Start): [Krang Stonehoof](https://database.turtlecraft.gg/?npc=3063)
Quest NPC (End): Brave Auka(New)
Quest level: 10
Required level: 10-60
Quest zone ID: 215 (Mulgore/Kalimdor)
Main description: My hunters are fine. Auka too. Everything didn't go the way i planned but such is life, i guess. Im happy all of you got back alive. Thank you, young..$B$B<He stumbles for a second, but then smiles>$B$B Thank you Brave $N.$BI hope all of us can use this experience to learn something from it. And by all i mostly mean her.. I would hate seeing Auka torture herself with it. Failure is not the end, for as long as you are alive. $B$B Auka rushed out towards the Capital as soon as her friends were helped. She said that there is something special she wants to give to you. Auka will be at the Blacksmith shop.
Short objective: Talk to Auka in Thunder Bluff.
Progress text: <He Nods>$B Brave $N.
Completion: Youve made it. Thank you.
Required creature kills:  none
Required items: none
— Rewards
Money: none
Reputation: none
XP: 10xp
Additional notes: just a talk quest, to transition.

 -------------------------------------------
9. Warrior's Duty, Part 8.  Previous quest: Warrior's Duty, Part 7.
Title: Warrior's Duty, Part 8
Quest NPC (Start): Brave Auka(New)
Quest NPC (End): Brave Auka(New)
Quest level: 10
Required level: 10-60
Quest zone ID: 1638 Thunder Bluff ?
Main description: I used to be a craftswoman. I probably should have stayed as one. Its silly of me to think that protect and lead would be easy. This is the lesson i will never forget. I want to thank you, for fixing the mess i created. You are the true Warrior. A Warrior i will do my best to become one day.$B$B<Auka grabs a weapon from her anvil and gives it to you>$B$BThis is my gift to you. I dont think i can wield it after everything that happened. I want you to have it. So you would remember. Remember me, my mistakes and never repeat them. Thank you.
Short objective: Talk to Auka
Progress text: none
Completion:Thank you.
Required creature kills:  none
Required items: none
— Rewards
Money: id8121 should be casted on you. Its called Path of Defence, it "Teaches Defensive Stance (Rank 1) and Sundering Strike (Rank 1)." I belive this is the spell that teaches you Defensice stance, unless there is more? Double check it please.
Reputation: 20 with Thunder Bluff
XP: 100 xp
Additional notes: This is the last quest. Player should be rewarded with the Warrior's Duty described at the very beginning.
 -------------------------------------------

The only quest i would suggest after this is a quest to upgrade this hammer to lvl 25 version of it, through Thun'grim Firegaze quests. He is Orc blacksmith that gives warrior related quests.

Feel free to drag me over this in any way shape or form. Im open to everything.

Thank you.

