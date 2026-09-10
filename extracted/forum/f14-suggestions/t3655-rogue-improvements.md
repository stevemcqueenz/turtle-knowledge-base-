---
title: "Rogue improvements"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3655"
topic_id: 3655
forum_id: 14
forum: "Suggestions"
author: "Bloodphobos"
author_authority: "player"
posted: "2022-08-12T18:48:00Z"
last_post: "2023-04-14T22:05:00Z"
post_count: 62
pages: 2
fetched: "2026-09-10T12:19:57Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Rogue improvements

## Post 22152 by Bloodphobos — 2022-08-12T18:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22152#p22152 | page 1 | era: pre-1.18.1 -->

Because we had a lot of discussion in discord and to prevent loose suggestions I want to duplicate everything there to be all in one.

Firstly, I want to describe only existing class issues without their proper implementation. I guess it can help the Turtle developer team in future where to look. Also, when you, developers, want to change something, please ask yourself each time for each change: How will this impact soft leveling? How will this impact HC leveling? How will this impact PVE? How will this impact PVP? If you get 4 answers with positive/neutral/negative impact you will figure out how people will react to them.

Major class issues
 1) Combo Points: they disappear if you switch the target, that means you always lose CP when you fight with 2+ targets, example: you hit one target and accumulate CP, then if you want to make a gouge (control) on 2nd target, you lose all CP on 1st target and have 1 CP on 2nd from gouge. Then you switch back target for 1st and again u lose CP from 2nd target…
 2) Sap: default rogue has useless sap because it breaks stealth. Only subtlety rogues have talent to prevent stealth breaking in deep sub. This means that non deep sub rogues can’t control mobs in dungeons like mage sheep, priest shackle, warlock banish, druid hibernate etc, but they should, similar like they do that from TBC expansion.
 3) Poisons: rogue class first of all about poisons and what we have? Poisons as debuffs are good but very bad from a damage perspective. We see poison talents only in assassination spec but even with 10 points investment, their impact is still negligibly small.  Also, poisons can't be applied with windfury.

Medium class issues
 1) Assassination: Seal Fate build works only with the end progress gear due to high critical rate dependency. We need to do something with it, probably add some mechanic that adds critical rate to combo generate abilities when you have low crit, which will make SF viable on earlier and middle progresses. Also this tree has only one build type, which is based on crits. It would be cool to think about 2nd poison based build in this tree, we can take inspiration from post vanilla expansion where we got a lot of poison talents and abilities.
 2) Subtlety: Deep subtlety requires some extra CP+damage or energy generation improvements. As we see this spec is about daggers because we have 5 points for Backstab+Ambush improvements on 1 tier talent and 3 points for Ambush on 3rd talent tier, for abilities that could be used only with daggers (we're not talking about hemorrhage cuz it's fine). Everyone who tries to leveling with BS/Ambush sees that this build has a big issue with lack of combo points: we always kill mobs before we can reach 5 CP before ~40 lvl and about 8-9 CP till 60 lvl, because Ambush and BS abilities cost 60 energy. Usually till 40 lvl we have 3-4 CP before mob dies and because we lose all CP on target switching all finishers are useless and this is a big spec design gap. In scope of leveling this issue will disappear if we implement the first issue with Combo Point (when they will stick to player instead of mobs), but it still will take place in scope of raids (endgame PVE). So, deep subtlety to be PVE viable requires some extra CP+damage or energy generation improvements.
 3) Backstab: We get this ability on 4 level and it seems have to be an alternative to Sinister Strike leveling, but native vanilla implementation does not allow hitting into face, and that’s why in future expansions blizzard added to BS front hit by default (<https://www.wowhead.com/spell=53/backstab>). Currently in Turtle we have the possibility of strafe-dance but it's a really awkward approach and should be improved (let's save our mouses)

Minor class issues
 1) Assassination: fully deep assassination (Vigor) is not concurrent.
 2) Subtlety: fully deep assassination (Premeditation) is not concurrent.
 3) No AOE: default rogue absolutely has no AOE. There is only one 2-target AOE in deep combat build.
 4) Throw: this is a properly rogue class ability that is not opened in vanilla. I think it is a rogue ability because rogue has it from the start, also in next expansions blizzard added “Deadly Throw” and “Shuriken Toss” (<https://www.wowhead.com/spell=114014/shuriken-toss>). For now Throw has low damage, its weapon can not be repaired, it has no improvement talents, drop tables have no really cool Throw items in comparison to bows, crossbows, guns. So, I guess we need to design some new throw items with great stats on it and add the possibility to repair it or prevent its breakage.
 5) Rogue role as class is useless in the raid: currently there is no exceptional rogue utility in the raid. I.e. warrior has AP shout buff, "free" sunder armor during tanking, possibility to instantly become a lightweight temporal OT; mage has food/water and buffs; warlock has healthstones, soulstones, blood pact, curses; paladin has powerful multi buffs, etc. What has rogue? Nothing! Expose armor can not be counted, because it is not free and if rogue uses it by CD it reduces general damage (main class destination). In future updates to fix this gap, rogues got +8% extra spell damage debuff from "Master Poisoner", +4% extra physical damage from "Savage Combat" and +30% extra bleed debuff from Hemorrhage ability. So all 3 rogue specs got their unique useful raid buff.

Now, when main problem concepts are highlighted, let's take a look at direct suggestions. In next proposal I don't want to change existing popular combat (sword/dagger) or later good geared SF build, I just want to improve weak builds like BS+Ambush or hemorrhage based deep Subtlety and make more different common class leveling, so:

General suggestions
 1) Add “axe” mastery for rogue. Update appropriate talent improvement in combat spec.
 2) make Combo Points (CP) not applicable to current target and stick them to player: allow target switching without CP loss. Self CP is a modern mechanic in the wow.
 3) "Ambush" ability adds +2 Combo Points instead of 1 (WOTLK implementation).
 4) Allow "Backstab" ability hit in face without strafe-dance by default. If it is not very difficult it would be also good to implement it in the same way as in modern wow: normal damage for front hit and some bonus (let say 5-10%) from behind to encourage using backside mechanics. Look at ability description  <https://www.wowhead.com/spell=53/backstab>
 5) Allow to use "Slice and Dice" without stealth breaking (makes good encounter start in PVE with "Premeditation" or after vanish)
 6) “Sap” ability should have TBC implementation (sap always returns to stealth mode after using your Sap ability). Without this change Sap in vanilla absolutely is not a useful ability when you are not a Subtlety spec rogue with wasting points into the talent. If dev-team insists on having original mechanics, let's move "Improved Sap" into 1st tier near the "Master of Deception" talent.
 7) update "Ghostly Strike" ability: does 180% damage if a dagger is equipped (make equal dmg when rogue uses dagger in mh, WOTLK implementation). "Ghostly Strike" buff also grants 15% to resist enemy spell and range shot.
 8) update “Hemorrhage” ability: does 160% damage if a dagger is equipped (make equal dmg when rogue uses dagger in mh, WOTLK implementation)
 9) "Blade Flurry" make it baseline (learned at 18 or 20 lvl), but without the 20% haste bonus. (20% will be added by "Improved Blade Flurry" combat talent). Also reduce CD to 1 min. We want this change to allow all rogue builds to have at least one AOE spell.
 10) "Flourish" this ability is useless, unless you make rogue tank build. To make it more interesting it should be refactored to be useful in low level dungeon (tanking) and have some PVP component: let's make it to be available from 16 lvl, and add 20% spell/shot resist (or even spel/shot reflect).
 11) "Poisons": Let rogue poisons to be applied with Windfury Totem effect. WF is too strong and in vanilla it forces not to use poisons in PVE (in next patches rogue could use poisons with WF)

Assassination suggestions (main idea: add some damage by poisons to make this build more viable in PVE in earlier progress. Make "Vigor" interesting):
 1) "Improved Poisons" talent 5/5 adds 20% (was 10%) apply chance
 2) "Vile Poisons" talent 5/5 adds 40% (was 20%) poison damage
 3) "Vigor" talent adds 20 (was 10) energy and add new passive ability:
while your combo generator ability (Sinister Strike, Hemorrhage, Backstab) does not do critical hit your next combo generator hit has +10% critical chance. Example: you don't do critical SS hit 5 times in a row and now you have +60% crit chance for your next combo generator abilities. This passive smooth out low critical stat gear before AQ40 equip and will do low impact for good gear. Option "B": adds 20 energy and +10-20% to energy generation. Second option fix is easy to implement but it does not remove low crit chance stat gap when rogue is not wear in AQ40+ set and slightly improves existing SF build which is already good on last content Phase. So, it is ideally to implement something that will add crits only for earlier and middle progress and will not much impact on later progress.
 4) "Remorseless Attacks": make buff duration +20 seconds per point (40 seconds at 2/2). 20 seconds very often is not enough to get another mob after previous fight, especially if you need to eat or use bandage after last fight.

Combat suggestions (main idea: add Axe support, and Throw improvements for the build, make riposte talent cost more cheap on leveling):
 1) "Deflection" makes it 3/3. Parry could be 2 or 1 per point
 2) "Sword Specialization" refactor to apply in addition the same bonus to Axe.
 3) "Mace Specialization" Increases the damage dealt by your critical strikes with maces by 1%, and your attacks with maces ignore up to 3% of your opponent's armor. We don't change stun cuz it will destroy pvp build.
 4) "Throwing weapon specialization" Increases the range of Throw and Deadly Throw by 2 yards and gives your Deadly Throw a 50% chance to interrupt the target for 3 sec (WOTLK implementation). [https://www.wowhead.com/wotlk/spell=595 ... ialization](https://www.wowhead.com/wotlk/spell=5952/throwing-specialization). Talent also adds +75% damage to “Throw” ability. “Throw” should be weaker than SS + finisher rotation, so number 75 could be more or less. Need a test with good gear. Because “Throw” is very weak and has a CD, we don't care about overpowering.
 5) Replace "Blade Flurry" (we want it as baseline without 20% bonus) with "Improved Blade Flurry" talent that will increase attack speed by +20%. We want this change to allow all rogue builds to have at least one AOE spell

Subtlety suggestions (main idea: create a viable dagger PVE/PVP build based on "Ambush" and "Backstab" abilities. Add "Setup" leveling way. Make "Premeditation" interesting. Make Ambush more ultimate ability similar to Pyroblast, Soul Fire, Execute). Make "Feint" a viable ability.
 1) "Opportunity" 2 points max. WOTLK
<https://www.wowhead.com/wotlk/spell=14072/opportunity> We need this change if we want to clean place for 3rd talent in 1st row, for example for  "Improved Sap"
 2) "Camouflage" talent makes 3 point max: 5% speed and 2 sec CD per point. We need this change to alow picking other talents on 2nd row.
 3) "Sleight of hand". Feint ability after 10 seconds gives a rogue 15 (30 if 2/2) energy. Also, talent makes critical chance reduction to 2% per point and in additional add threat reduction -15% (30% if 2/2) for all rogue critical hit abilities.
 4) "Setup" 15% -> 33% (100% if 3/3) <https://www.wowhead.com/wotlk/spell=14071/setup>
 5) Replace "Improved Sap" talent with “Dirty Tricks“ TBC talent <https://tbc.wowhead.com/spell=14076/dirty-tricks>. Option “B” if you still want to have an awful vanilla mechanic, I propose to move "Improved Sap" talent in tier 1. This will allow other specs to use playable Sap.
 6) "Improved Ambush" talent makes 25% critical chance per point and adds ~10-15% ignore armor to ability per talent point or make it 33% per point as shadow damage (like in further blizzard updates). Without permanent critical strike and some armor penetration this ability is not worth to spend 60 energy even to hit usual mobs after 40+ lvl during leveling
 7 a) Inject next 5/5 addition in Premeditation or add new tier 6 talent “Slaughter from the Shadows” that Reduces the energy cost of your Backstab and Ambush abilities by 4 and the energy cost of your "Hemorrhage" by 1, and increases all damage done by 1%. [https://www.wowhead.com/wotlk/spell=517 ... he-shadows](https://www.wowhead.com/wotlk/spell=51708/slaughter-from-the-shadows)
 7 b) If you don’t want to add previous change, let's adjust "Deadliness": talent also grants 20% for "Backstab" strike and 7% for “Hemorrhage” to restore 20 energy per point (100% for BS and 35% for HH to restore 20 energy when 5/5).
 7 c) If you don't want to add 7A or 7B suggestion, we can just copy-paste WOTLK "Honor Among Thieves" talent [https://www.wowhead.com/wotlk/spell=516 ... ng-thieves](https://www.wowhead.com/wotlk/spell=51698/honor-among-thieves) in tier 6. From my feeling it won't fully fix Subtlety deep PVE spec gap, but it will be covered at least partially.
 8) "Premeditation" reduce CD to 20 or 30 seconds to make it very useful at least on leveling. Then to make it viable in PVE let's add one of next passive bonus improvements:
idea1: Each time when you hit let say 5 Backstabs in a row you will receive buff that allows rogue to use free Ambush without stealth. If you leave combat this counter will be reset;
idea2: allows to use Premeditation out of stealth plus after activation you will receive a new 10 sec buff that after 10 seconds allows rogue to use 1 “Ambush” strike out of stealth (i.e. you use Premeditation and after 10 seconds you can use Ambush. If you don't use it in next 10 buff disappears). Let's rename Premeditation on "Enter the shadow".
idea3: adds 5 CP and allows to use Premeditation out of stealth. Lets rename it on "Shadow Meditation";
idea4: adds 3 CP, 30-60 sec CD and in addition grants passive +5-10% agility to character (PVE, PVP, Leveling buff);
idea5: each Rupture bleed tick grants +1 CP

Premeditation with passive bonus (idea1-5) could be strong (need a test after implementation) and probably in that case we don't need 7a/b/c sub improvements.
 9) "Initiative" talent has 33% (was 25%) proc per point. This update makes more reliable Ambush+Premeditation opener especially in PVP <https://www.wowhead.com/wotlk/spell=13976/initiative>

Tanking suggestions
As I see from the latest updates, the Turtle team is thinking about rogue tanking. I guess this idea has the right to live, but to be more viable we need to add some regular damage reduction talents or abilities.
 1) Please check my suggestion for Flourish in the beginning of this post. Also, the best candidate for this improvement I see using “Faint” ability with its damage reduction "Elusiveness" talent with 3/3. This new tallent will grant "Your Feint ability have 33% (100% at 3/3) to apply taunt effect on target. Also it reduces all damage taken by 10 (30% at 3/3) % for 5 sec." Put the new "Elusiveness" tallent at tear 6 near the "Deadliness" tallent.
<https://www.wowhead.com/spell=1966/feint>
<https://www.wowhead.com/spell=79008/elusiveness>

 2) Agitating Poison should generate threat even if it it target is immute to poisons, otherwise rogue can't tank units who immune to poisons. Also it should be available from low levels, let say right when you get poisons, to allow tanking in low level dungeons. Generated threat value should be dependent on Aatack power insted of hardcoded value.

 3) Also if we have real tank plans for rogue we need some alternative of warrior “Shield wall” for hard PVE encounters and I’d take a loot at Cheat Death or Combat Readiness spell to allow rogue survive when something went wrong in the raid.
<https://www.wowhead.com/spell=74001/combat-readiness>
<https://www.wowhead.com/spell=31230/cheat-death>
Cheat Death could be taken just as an idea and reworked in scope of proc frequency, buff time and damage percent reduction. I think Cheat Death is very good from lore/design perspective, because rogue is a "glass cannon" class (it has no armor or damage reduction abilities) and it will give a good opportunity to survive mortal hits during tanking.

Also each real tank should have a taunt-like ability to have the possibility of taking the boss from another tank or just for saving someone on over agro. As a taunt candidate ability I see:
a) "Feint + Elusiveness", check previouse description.
b) "Shiv" (was added in TBC) which can taunt targets if your weapon has newly added Agitating Poison.
c) "Surprise Attack" if you don't like a or b proposal, let's make "Surprise Attack" ability with aggro/taunt effect.
d) "Ghostly Strike" also could be enriche with taunt, but I'd say this is the worst option

Poison improve suggestions
 1)  Let rogue poisons to be applied simultaneously with Windfury Totem effect. WF is too strong and in vanilla it forces not to use posions in PVE
 2) Poison damage formula should include rogue Attack Power, similar how it was implemented after the classic.
 3) Deadly Poison after 5 stacks each proc also applies some Instant poison damage. Similar how it works nowadays <https://www.wowhead.com/spell=2823/deadly-poison>  (Coats your weapons with a Lethal Poison that lasts for 1 hour. Each strike has a 30% chance to poison the enemy for [(6.3% of Attack power) * 12 / 2] Nature damage over 12 sec. Subsequent poison applications will instantly deal (4.5% of Attack power) Nature damage.)
 4) Add Master Poisoner tier 5 talent with 3 points: Increases the Nature damage taken by any target you have poisoned by 2% per point and gives a 33% chance to reduce resist/immune by target. It has 5/5 Vile poisons requirement. This is raid buff for Nature spells.
 5) Add Envenom as trainer spell or tier 6 talent with 1 point. Adds Envenom ability that does not consume deadly poisons.

Improve rogue quality of life suggestions
 1) add Blinding Powder reagent to poison vendor or improve existing poison receipt "Fadeleaf" -> "Blinding Powder" from 3 Powder items to 20. Blind is a very frequent ability in PVP and it requires from you to be dependant on constant getting Fadeleafs.
 2) reduce cooldown of Sprint, Evasion, Blind, Vanish abilities from 5 minutes -> 3m, and Preparation 10 minutes -> 5 like it was done in TBC.
 3) ability to remove poisons from weapon (right click on poison buff or special rogue item, aka "POISON CLEANER T-3000")
 4) add poison reagents to field repair bot

*Last edited by Bloodphobos on Sat Jul 01, 2023 12:33 pm, edited 59 times in total.*

## Post 22172 by Gantulga (Grandmaster of Forum PvP) — 2022-08-13T02:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22172#p22172 | page 1 | era: pre-1.18.1 -->

Things like self CPs, adding AoEs and frontstab are a big no to me. Those changes would just go against the whole design/flavor and homogenize the playstyle too much.

It seems like the staff doesn't have any active rogue players and that's why the class received almost no changes compared to the rest and still has two dead-in-the-water 31p talents. I could be wrong though.

## Post 22191 by Bloodphobos — 2022-08-13T09:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22191#p22191 | page 1 | era: pre-1.18.1 -->

> **Gantulga wrote: Sat Aug 13, 2022 2:14 am**
> Things like self CPs, adding AoEs and frontstab are a big no to me. Those changes would just go against the whole design/flavor and homogenize the playstyle too much.

 - have you ever played for rogue? you lose CP even if you just remove mob from target and It's stupid
 - I didn't asked real AOE, like <https://www.wowhead.com/wotlk/spell=51723/fan-of-knives> . All I ask is to make blade flury baseline to cover this gap
 - we already have frontstab thanks to strafepdancing which finally allows rogue to leveling with BS. I just propose to make BS leveling more friendly.

*Last edited by Bloodphobos on Sat Apr 01, 2023 4:47 pm, edited 1 time in total.*

## Post 22193 by Dannyp19921 — 2022-08-13T09:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22193#p22193 | page 1 | era: pre-1.18.1 -->

- Combo Points staying on target even if you de-click it or switch targets, would be a welcome change.
 - Blade Flurry baseline would probably make the class OP. Rogues are already top tier in PvE and PvP. Remember that in Vanilla classes had distinctions that set them apart, such as Mages being the AoE-specialists. As a Rogue I would of course love to have that ability baseline, but I don't want to be unfairly OP either. So I think it's important that the other classes also get buffs in a similar manner if we get spells such as this one.
 - I would like the rotation to be more engaging than mostly spamming Hemorrhage/Sinister Strike, so having an additional CP-builder such as Shiv/Surprise Attack would be welcome.

## Post 22195 by Bloodphobos — 2022-08-13T10:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22195#p22195 | page 1 | era: pre-1.18.1 -->

Blade Flurry without haste (my suggestion) is not OP, cuz it still has a big CD (2 minutes) and short duration (15 sec). So the possibility to kill two mobs instead of one once per two minutes is not not something OP, it's just a good thing at leveling for non deep combat specs.

## Post 22225 by Blues — 2022-08-13T19:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22225#p22225 | page 1 | era: pre-1.18.1 -->

You cannot have combo points sticking to the rogue without unbalancing the class, especially in battlegrounds.  A good rogue can already lock down another player permanently like the video "Control" showed us back in the day.  Rogues also trade out their AoE for an extremely focused kit on taking down one target; it's part of the class fantasy.  If you wanna help out quality of life, just change the talents so rogues can get +10 on every weapon skill by spending talent points so they can compete with humans and orcs (and now goblins too) with a complete lack of glancing blow damage reduction.

## Post 22253 by Gantulga (Grandmaster of Forum PvP) — 2022-08-14T03:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22253#p22253 | page 1 | era: pre-1.18.1 -->

Combo points not being removed by merely targeting something else to blind/kick/bandage or detargeting like it was later on would be a great and much needed improvement.

As for PvP, in 1.12, rogue is only great at world PvP and 1vs1 against certain classes/specs. The true BG powerhouses are warriors, warlocks and paladins and all of those have received substantial buffs.

## Post 22261 by Mozz90 — 2022-08-14T07:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22261#p22261 | page 1 | era: pre-1.18.1 -->

> **Gantulga wrote: Sat Aug 13, 2022 2:14 am**
> Things like self CPs, adding AoEs and frontstab are a big no to me. Those changes would just go against the whole design/flavor and homogenize the playstyle too much.
>
>  It seems like the staff doesn't have any active rogue players and that's why the class received almost no changes compared to the rest and still has two dead-in-the-water 31p talents. I could be wrong though.

I agree. What could be a nice implement would be maintaining combo point on dead targets, so if an enemy dies you can SnD out of it (or Recuperate post Cata). Would be very beneficial for leveling. Regarding the Sap issue i agree 200%, that needs to be changed

## Post 22262 by Venytas (Barrens Chat Casualty) — 2022-08-14T07:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22262#p22262 | page 1 | era: pre-1.18.1 -->

I think Self CPs would be a great change and it wouldnt really change anything in 1v1s but tbh ive never been a rogue player so idk

## Post 22276 by Gantulga (Grandmaster of Forum PvP) — 2022-08-14T09:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22276#p22276 | page 1 | era: pre-1.18.1 -->

Right now you can't even blind/kick another target without losing your CPs which is absolutely horrible. There aren't even proper mouseover macros for this client.

## Post 24995 by Bloodphobos — 2022-09-13T20:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24995#p24995 | page 1 | era: pre-1.18.1 -->

Added some new ideas

## Post 25028 by Akarui (Patch Note Conspiracy Theorist) — 2022-09-14T11:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25028#p25028 | page 1 | era: pre-1.18.1 -->

and soon we will have world of rogues )) Rogues in vannilla are good. This is weak on armor but strong on dmg class. And very agile class in pvp. Other classes till wotlk   or even BC havent enough amount of spells against rogues. U have fun for playing ? if not - try another class or Wotlk. Or Bfa. This is vanilla. Warlocks have tons of soulstones) hunters can put only one trap and only before combat. Shams - havent malestorm and dual mastery. etc

## Post 25226 by Bloodphobos — 2022-09-17T11:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25226#p25226 | page 1 | era: pre-1.18.1 -->

Don't tell rogues what to do and we won't tell you where to go, okay?
Please give us proof, where is the wrong stuff in the main post? Rogues have no roles other than Damage Dealing and therefore all 3 rogue specializations should be viable in all PVE (this is primarily a pve server) progress stages. One specification class is a gap and must be corrected. We need changes in Assassin and Subtlety, similar to how it was done with the weak builds of Moonking, Feral and Restoration druids...

## Post 25331 by Gantulga (Grandmaster of Forum PvP) — 2022-09-17T19:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25331#p25331 | page 1 | era: pre-1.18.1 -->

> **Akarui wrote: Wed Sep 14, 2022 11:29 am**
> and soon we will have world of rogues )) Rogues in vannilla are good. This is weak on armor but strong on dmg class. And very agile class in pvp. Other classes till wotlk   or even BC havent enough amount of spells against rogues. U have fun for playing ? if not - try another class or Wotlk. Or Bfa. This is vanilla. Warlocks have tons of soulstones) hunters can put only one trap and only before combat. Shams - havent malestorm and dual mastery. etc

You don't know what you're talking about. Rogues were already in the middle of the pack in default 1.12 and here they've been pushed further behind with all the buffs to other classes.

## Post 25512 by Akarui (Patch Note Conspiracy Theorist) — 2022-09-19T16:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25512#p25512 | page 1 | era: pre-1.18.1 -->

> **Gantulga wrote: Sat Sep 17, 2022 7:42 pm**
> > **Akarui wrote: Wed Sep 14, 2022 11:29 am**
> > and soon we will have world of rogues )) Rogues in vannilla are good. This is weak on armor but strong on dmg class. And very agile class in pvp. Other classes till wotlk   or even BC havent enough amount of spells against rogues. U have fun for playing ? if not - try another class or Wotlk. Or Bfa. This is vanilla. Warlocks have tons of soulstones) hunters can put only one trap and only before combat. Shams - havent malestorm and dual mastery. etc
>
>   You don't know what you're talking about. Rogues were already in the middle of the pack in default 1.12 and here they've been pushed further behind with all the buffs to other classes.

Thats why u want to see a rogue as best dps and pvp class? Rogues has enough control in vanila. More then other chars. This is advantages thar they already has. If u want realy buff rogues - u have to buff and other classes. Balance   turtle_tongue
I understood. its should be cool to play as progressive class from WOTLK against backwards)) But nope

## Post 25518 by Gantulga (Grandmaster of Forum PvP) — 2022-09-19T16:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25518#p25518 | page 1 | era: pre-1.18.1 -->

I wish people stopped being strongly opinionated over topics they have no idea about.

## Post 25528 by Velite (Patch Note Conspiracy Theorist) — 2022-09-19T18:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25528#p25528 | page 1 | era: pre-1.18.1 -->

In the combo points front we can at least start with what TBC did which is that you retain combo points on initial target so long as you don't build new ones on another target.

## Post 25544 by Gantulga (Grandmaster of Forum PvP) — 2022-09-19T22:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25544#p25544 | page 1 | era: pre-1.18.1 -->

> **Velite wrote: Mon Sep 19, 2022 6:47 pm**
> In the combo points front we can at least start with what TBC did which is that you retain combo points on initial target so long as you don't build new ones on another target.

That's absolutely necessary. The current implementation encourages mindless zug zug since you're punished for trying to interrupt/blind/break totems. Only rogues and druids suffer from such a dumb limitation.

## Post 25581 by Likaleo (Barrens Chat Casualty) — 2022-09-20T09:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25581#p25581 | page 1 | era: pre-1.18.1 -->

> 5) Rogue class uselessness in the raid: currently there is no exceptional rogue utility in the raid. I.e. warrior has AP shout buff, "free" sunder armor during tanking, possibility to become instantly a lightweight temporal OT; mage has food/water and buffs; warlock has healthstones, soulstones, blood pact, curses; paladins has powerful multi buffs, etc. What has rogue? Nothing

first of all i want to say i played rogue in classic but i have no exp in turtle wow raiding.

well Classic should be mana relevant game. but because bosses are kinda easy and we min/max know best builds casters do not run out of mana. Rogue energy is eternal you could do full dps cycle full boss fight if needed where casters run out of mana at somepoint.. but if bosses stay easy there no reason not to take rogue

next you might say "warriors not have mana either and they have sunder and AP shout"
yes but warriors cant control their theath wich limits theirs damage. Where Rogue can reset their threat. gives you great adventange when you dont have to watch your threat meter.

Classic has 40man raids its kinda silly to ask everymember to bring somekind of utility. some dps can be just pure dps. + rogues got easiest and best interupt cycle to keep up.

but i kinda agree on rogue combo points and sap they would be great qol changes

## Post 34781 by Bloodphobos — 2023-02-15T00:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34781#p34781 | page 1 | era: pre-1.18.1 -->

is it possbile to add something from my list to 1.16.6?

## Post 34792 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-15T04:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34792#p34792 | page 1 | era: pre-1.18.1 -->

"default rogue has useless sap because it breaks stealth."

Tell me you're bad at Rogue in one sentence...

## Post 34802 by Heroclastus (Barrens Chat Casualty) — 2023-02-15T07:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34802#p34802 | page 1 | era: pre-1.18.1 -->

I'd like to point out that the ability 'deadly throw' seems partly bugged. It sometimes goes off no problem, the other times my char just stands there with thrown weapon in hand and it says 'interrupted' and nothing happens - standing perfectly still and target is in range. WOuld be nice if it got fixed as it is sometimes useful in PVP.

## Post 34803 by Majestik51 (Patch Note Conspiracy Theorist) — 2023-02-15T08:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34803#p34803 | page 1 | era: pre-1.18.1 -->

ok then, just turn them Rogues to Gods!

turtle_tongue_head   turtle_tongue_head

id like some changes cause i play rogue a lot too.
but this is 2 much man!   turtle_tongue_head   turtle_tongue_head

PEACE!   maintenance_turtle

## Post 34806 by Mekunekud (Barrens Chat Casualty) — 2023-02-15T12:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34806#p34806 | page 1 | era: pre-1.18.1 -->

Things Rogues need:
Combo points to stick until you build on another mob. Include after death so Rogues can SND off a dead mob before the next. It's not going to affect PvE outside levelling and if Rogue tanking ever appears, allows Rogues to go into a fight with SND/Flourish.
Poisons to work ontop of WF/Oils/Stones. Silly that a core class feature gets omitted because another class feature provides a better impact. It'd provide Rogues with a viable DPS increase that wouldn't really impact PvP outside maybe Frost Oil being used as a snare, which can be done with Slowing Poison anyway.  It's only roughly a small DPS increase on most encounters but some  DPS is better than nothing. Unless you want to be generous and have it so Poisons act like SoR and can proc effects as a melee attack and use the ranged attack hit chance so you don't need spell hit to prevent resists.
Reduce the C/D of Adrenaline Rush. It needs to be shorter. Death Wish is a massive boon with its 3 min cooldown for a debatably more powerful effect and on some fights is a major reason why warriors are so strong as they get to double dip one of their offensive C/Ds for early DPS and then execute phase. Rogues don't get that fight most of the time.
Vigor DOES need a change. It's bad for the most part as a capstone. It should be lower on the spec for sure.  I suggest giving Rogues Shiv in it's place. Make it a free offhand guaranteed proc effect in Assassination kind of like what Paladins got with SoTC on a short cooldown such as 6 seconds for 100% of offhand damage. I'd also shrink the cost of the poison talents to lean into that aspect. Change them so its 2 points for imp-poison and 3 for Vile Poisons.
The rest of the OP implies he wants to play WOTLK rogue in Vanilla WoW. Rogues shouldn't get a ranged snare, an actual AoE or any of the other suggestions. The only role they suffer in is raid DPS due to being underwhelming compared to Warriors.

## Post 34862 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-15T21:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34862#p34862 | page 1 | era: pre-1.18.1 -->

> **Mekunekud wrote: Wed Feb 15, 2023 12:27 pm**
> Poisons to work ontop of WF/Oils/Stones. Silly that a core class feature gets omitted because another class feature provides a better impact.

Windfury - Definitely. It makes no sense that a magic effect and "stuff smeared on your blade" don't stack, and this also has the benefit of making Shamans more useful. Windfury should never have been classed as a weapon enhancement at all.

Stones - Not sure how doable, but they really shouldn't overlap.

Oils - Thematically, I think it makes sense to only be able to apply one sort of "coating" to a weapon, but it would make sense if, as their special class skill, poisons were the better option for rogues. What I would do is to change up the "poison level" of Assassination. Make the Improved Poisons talent only have two ranks (same end value), and introduce a new three-rank "Lingering Poisons" that increases debuff duration and charges.

> **Mekunekud wrote: Wed Feb 15, 2023 12:27 pm**
> The rest of the OP implies he wants to play WOTLK rogue in Vanilla WoW.

Nailed it.

## Post 34863 by Gantulga (Grandmaster of Forum PvP) — 2023-02-15T21:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34863#p34863 | page 1 | era: pre-1.18.1 -->

> **Kefke wrote: Wed Feb 15, 2023 4:49 am**
> "default rogue has useless sap because it breaks stealth."
>
>  Tell me you're bad at Rogue in one sentence...

Untalented sap means you have no viable dungeon CC options and rogue is in dire need of utility on this server. There are no negatives at all when it comes to making sap 100% baseline, and the talent could be replaced with something nice like debilitating sap (damage/healing done reduction % for x seconds after leaving sap naturally). It'd also help combat builds in PvP where they suck massively.

## Post 34879 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-16T03:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34879#p34879 | page 1 | era: pre-1.18.1 -->

> **Gantulga wrote: Wed Feb 15, 2023 9:41 pm**
> > **Kefke wrote: Wed Feb 15, 2023 4:49 am**
> > "default rogue has useless sap because it breaks stealth."
> >
> >  Tell me you're bad at Rogue in one sentence...
>
>   Untalented sap means you have no viable dungeon CC options and rogue is in dire need of utility on this server. There are no negatives at all when it comes to making sap 100% baseline, and the talent could be replaced with something nice like debilitating sap (damage/healing done reduction % for x seconds after leaving sap naturally). It'd also help combat builds in PvP where they suck massively.

Yes, I get it. You're not good at the class. Keep practicing and you'll learn to use your abilities correctly.

## Post 34943 by Bloodphobos — 2023-02-16T20:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34943#p34943 | page 1 | era: pre-1.18.1 -->

> **Kefke wrote: Thu Feb 16, 2023 3:00 am**
> > **Gantulga wrote: Wed Feb 15, 2023 9:41 pm**
> > > **Kefke wrote: Wed Feb 15, 2023 4:49 am**
> > > "default rogue has useless sap because it breaks stealth."
> > >
> > >  Tell me you're bad at Rogue in one sentence...
> >
> >   Untalented sap means you have no viable dungeon CC options and rogue is in dire need of utility on this server. There are no negatives at all when it comes to making sap 100% baseline, and the talent could be replaced with something nice like debilitating sap (damage/healing done reduction % for x seconds after leaving sap naturally). It'd also help combat builds in PvP where they suck massively.
>
>   Yes, I get it. You're not good at the class. Keep practicing, and you'll learn to use your abilities correctly.

if you are such a smart rogue, please tell us how an assassin or combat can sap mobs in a dungeon without this deep and unnecessary sub talents??? After sap, you will be out of stealth and die from the mob pack... It means that rogue CC is useless if you don't have sub talent, which is too stupid

*Last edited by Bloodphobos on Thu Feb 16, 2023 8:42 pm, edited 2 times in total.*

## Post 34944 by Bloodphobos — 2023-02-16T20:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34944#p34944 | page 1 | era: pre-1.18.1 -->

> **Majestik51 wrote: Wed Feb 15, 2023 8:39 am**
> id like some changes cause i play rogue a lot too.
>  but this is 2 much man!   turtle_tongue_head   turtle_tongue_head

What exactly is too much? Really, show me at least one point which brings imbalance. All these changes I wrote with mind that we must keep pve and pvp balance.
Of course, tank proposals could be imba if someone puts let say cheat death in tear 1 or makes it baseline, but where I suggested this? Tank proposals part is just a speculating what should be done to make rogue tank spec user-friendly and not a geek spec.

P.S. No one says that everything from these notes should be implemented. I just highlighted problems and possible ways to resolve them

*Last edited by Bloodphobos on Thu Feb 16, 2023 8:50 pm, edited 2 times in total.*

## Post 34945 by Gantulga (Grandmaster of Forum PvP) — 2023-02-16T20:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34945#p34945 | page 1 | era: pre-1.18.1 -->

> **Bloodphobos wrote: Thu Feb 16, 2023 8:29 pm**
> > **Kefke wrote: Thu Feb 16, 2023 3:00 am**
> > > **Gantulga wrote: Wed Feb 15, 2023 9:41 pm**
> > > Untalented sap means you have no viable dungeon CC options and rogue is in dire need of utility on this server. There are no negatives at all when it comes to making sap 100% baseline, and the talent could be replaced with something nice like debilitating sap (damage/healing done reduction % for x seconds after leaving sap naturally). It'd also help combat builds in PvP where they suck massively.
> >
> >   Yes, I get it. You're not good at the class. Keep practicing, and you'll learn to use your abilities correctly.
>
>  if you are such a smart rogue, please tell us how an assassin or combat can CC mobs in a dungeon without this deep and unnecessary sub talents??? After sap, you will be out of stealth and die from the mob pack... It means that rogue CC is useless if you don't have sub talent, which is too stupid

Just ignore him, he's talking out of his ass.

## Post 34946 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-16T21:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34946#p34946 | page 1 | era: pre-1.18.1 -->

> **Bloodphobos wrote: Thu Feb 16, 2023 8:29 pm**
> > **Kefke wrote: Thu Feb 16, 2023 3:00 am**
> > > **Gantulga wrote: Wed Feb 15, 2023 9:41 pm**
> > > Untalented sap means you have no viable dungeon CC options and rogue is in dire need of utility on this server. There are no negatives at all when it comes to making sap 100% baseline, and the talent could be replaced with something nice like debilitating sap (damage/healing done reduction % for x seconds after leaving sap naturally). It'd also help combat builds in PvP where they suck massively.
> >
> >   Yes, I get it. You're not good at the class. Keep practicing, and you'll learn to use your abilities correctly.
>
>  if you are such a smart rogue, please tell us how an assassin or combat can sap mobs in a dungeon without this deep and unnecessary sub talents??? After sap, you will be out of stealth and die from the mob pack... It means that rogue CC is useless if you don't have sub talent, which is too stupid

Either invest in the talent, or don't try to use abilities in situations where you shouldn't be using them.

> **Gantulga wrote: Thu Feb 16, 2023 8:39 pm**
> Just ignore him, he's talking out of his ass.

Yes, "Use your abilities correctly, and don't blame the class for stupid shit it's not meant to do not working." is *such* an uninformed take...[/s]

## Post 34948 by Gantulga (Grandmaster of Forum PvP) — 2023-02-16T21:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34948#p34948 | page 1 | era: pre-1.18.1 -->

"Just delve deep into the PvP tree and forfeit your damage output if you want to use your only standard CC in a PvE dungeon."

Brilliant advice! I think the devs should elaborate on such amazing design further by making it so that mages need to go deep into the arcane tree in order to use their polymorph without also polymorphing themselves every so often, only deep holy priests can use shackle without aggroing all other undead monsters from 300 yards around, only survival hunters can trap monsters of all races instead of only beasts, only deep balance druids can use hibernate without a high chance of enraging the monster, making it immune to all CC effects and so on.

## Post 34964 by Bayanni (Patch Note Conspiracy Theorist) — 2023-02-17T00:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34964#p34964 | page 1 | era: pre-1.18.1 -->

> **Kefke wrote: Thu Feb 16, 2023 9:06 pm**
> Either invest in the talent, or don't try to use abilities in situations where you shouldn't be using them.
>
>  Yes, "Use your abilities correctly, and don't blame the class for stupid shit it's not meant to do not working." is *such* an uninformed take...[/s]

So, "don't try to use" is using it correctly?

If an ability is so bad it's unusable without talents spent, in your point of view, wouldn't that mean it could use a rework? If you disagree, can you elaborate?

## Post 34966 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-02-17T00:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34966#p34966 | page 1 | era: pre-1.18.1 -->

I think the inability to even so much as look at another mob makes Sap a bigger issue than it should be. You are basically forced to focus on one mob at a time to hell with everything else going on in the dungeon. If you could kick, or even blind on occasion without losing combo points, you'd have a lot more utility. I think I'd keep Sap as is since I don't think it'd really change much.

I'd say at most, Sap shouldn't be subject to the heartbeat mechanic which seems to break it super early consistently here, and Improved Sap should be accessible earlier in the tree, probably switching with Ellusiveness since you can't even get Vanish and Blind that early on in levels.

## Post 34970 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-17T01:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34970#p34970 | page 1 | era: pre-1.18.1 -->

> **Bayanni wrote: Fri Feb 17, 2023 12:28 am**
> > **Kefke wrote: Thu Feb 16, 2023 9:06 pm**
> > Either invest in the talent, or don't try to use abilities in situations where you shouldn't be using them.
> >
> >  Yes, "Use your abilities correctly, and don't blame the class for stupid shit it's not meant to do not working." is *such* an uninformed take...[/s]
>
>   So, "don't try to use" is using it correctly?
>
>  If an ability is so bad it's unusable without talents spent, in your point of view, wouldn't that mean it could use a rework? If you disagree, can you elaborate?

If you're a Warrior, and you pick up too much aggro because you charged a mob in the middle of a group, is it the fault of Charge that you're using your ability when you shouldn't be?

## Post 34983 by Bayanni (Patch Note Conspiracy Theorist) — 2023-02-17T03:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34983#p34983 | page 2 | era: pre-1.18.1 -->

> **Kefke wrote: Fri Feb 17, 2023 1:35 am**
> > **Bayanni wrote: Fri Feb 17, 2023 12:28 am**
> > > **Kefke wrote: Thu Feb 16, 2023 9:06 pm**
> > > Either invest in the talent, or don't try to use abilities in situations where you shouldn't be using them.
> > >
> > >  Yes, "Use your abilities correctly, and don't blame the class for stupid shit it's not meant to do not working." is *such* an uninformed take...[/s]
> >
> >   So, "don't try to use" is using it correctly?
> >
> >  If an ability is so bad it's unusable without talents spent, in your point of view, wouldn't that mean it could use a rework? If you disagree, can you elaborate?
>
>   If you're a Warrior, and you pick up too much aggro because you charged a mob in the middle of a group, is it the fault of Charge that you're using your ability when you shouldn't be?

Are you saying charge is unusable without talents? If not, you haven't addressed my question.

## Post 34985 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-17T03:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34985#p34985 | page 2 | era: pre-1.18.1 -->

> **Bayanni wrote: Fri Feb 17, 2023 3:36 am**
> > **Kefke wrote: Fri Feb 17, 2023 1:35 am**
> > > **Bayanni wrote: Fri Feb 17, 2023 12:28 am**
> > > So, "don't try to use" is using it correctly?
> > >
> > >  If an ability is so bad it's unusable without talents spent, in your point of view, wouldn't that mean it could use a rework? If you disagree, can you elaborate?
> >
> >   If you're a Warrior, and you pick up too much aggro because you charged a mob in the middle of a group, is it the fault of Charge that you're using your ability when you shouldn't be?
>
>   Are you saying charge is unusable without talents? If not, you haven't addressed my question.

If I kept trying to use Charge in situations where it would get me killed, instead of where it's actually useful, I'd certainly *think* it was unusable without a buff.

## Post 34988 by Bayanni (Patch Note Conspiracy Theorist) — 2023-02-17T04:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34988#p34988 | page 2 | era: pre-1.18.1 -->

> **Kefke wrote: Fri Feb 17, 2023 3:46 am**
> > **Bayanni wrote: Fri Feb 17, 2023 3:36 am**
> > > **Kefke wrote: Fri Feb 17, 2023 1:35 am**
> > > If you're a Warrior, and you pick up too much aggro because you charged a mob in the middle of a group, is it the fault of Charge that you're using your ability when you shouldn't be?
> >
> >   Are you saying charge is unusable without talents? If not, you haven't addressed my question.
>
>   If I kept trying to use Charge in situations where it would get me killed, instead of where it's actually useful, I'd certainly *think* it was unusable without a buff.

Again, my point was pointing out that you have not stated where sap without talents is usable. You said "Either invest in the talent, or don't try to use abilities in situations where you shouldn't be using them." So, what's the situation where you can?

Charge is usable without talents and is used often. Sap is not. Charge's purpose is to get you into a fight fast and ready to go with a boost of rage so you can immediately be useful. Sap is a CC on humanoids that cannot be used in combat, so automatically it's only useful in a group setting which negates other rogue openers, denying them an entire suite of abilities ever being used without two talents integrated and forcing the rogue to be the aggro target in a group setting. The situations it can be used in are beyond niche and is arguably not usable at all since two combo points and an unbreakable (in PvE) stun are just plain better.

All this is to say you're using a false equivalency and I would like you to, again, please clarify, if you can, when sap can be used without talents to prove your point right and my point wrong, because your line of argument is currently farcical.

## Post 34999 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-17T07:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34999#p34999 | page 2 | era: pre-1.18.1 -->

If you can't figure out on your own when it's appropriate to use an ability that puts a long stun on one target, but breaks stealth, all I can really tell you is to play a class with simpler mechanics.

## Post 35006 by Majestik51 (Patch Note Conspiracy Theorist) — 2023-02-17T08:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35006#p35006 | page 2 | era: pre-1.18.1 -->

> **Bloodphobos wrote: Thu Feb 16, 2023 8:36 pm**
> > **Majestik51 wrote: Wed Feb 15, 2023 8:39 am**
> > id like some changes cause i play rogue a lot too.
> >  but this is 2 much man!   turtle_tongue_head   turtle_tongue_head
>
>  What exactly is too much? Really, show me at least one point which brings imbalance. All these changes I wrote with mind that we must keep pve and pvp balance.
>  Of course, tank proposals could be imba if someone puts let say cheat death in tear 1 or makes it baseline, but where I suggested this? Tank proposals part is just a speculating what should be done to make rogue tank spec user-friendly and not a geek spec.
>
>  P.S. No one says that everything from these notes should be implemented. I just highlighted problems and possible ways to resolve them

bro if u wanna tank and cc mobs u can play warrior or pala with stuns

thats why is called an assasin and stealthed rogue, cause u supposed to ambush and sap players. not mobs...
if u need cc bring mage, priest and warlocks in ur groups.
or a better option for you play project ascension server. maybe u like it more!  satisfied_turtle_head

this is ridiculous. we gonna forget what we knew 20 years in wow....   turtle_tongue_head   turtle_tongue_head

PEACE!   maintenance_turtle

## Post 35015 by Feomatar (Barrens Chat Casualty) — 2023-02-17T09:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35015#p35015 | page 2 | era: pre-1.18.1 -->

THIS what rogues need without breaking balance.

After huge buffs of other classes rogue need, no not pure buffs in pvp but quality of life changes and some minor buffs in pve, this is my list.
 1. Not even change but fix of broken stuff - like pets see rogue after restealth or even after vanish what makes rogue a joke.
 2. CP - cp must be losing on target ONLY if u use cp generating ability on other target and not when u just change the target. I know that its the way it worked in vanilla, but its so much outdated mecanic what feels like a bug.
 3. Poison charges - the same, its just anoing mecanic what have no reason to be in the game.
 4. Sap mst no break stealth ho it was fixed in later expanshion, just quol change for pve, all rogue specs need some form of cc in dung.
 5. Slie & dice - must not break stealth like in later expanshions, its a range self buff and have no reasaons to break stealth.
 6. Mostly for pve - rogues have one of the worst physical damage crit multipliers what makes rogue perform pretty low compare to another classes in pve, so in my opinion garrote and rupture ability must be able to crit.
Now for the talents:
Sublety:
 - Initiative - like at later expanshion must be changed to 100% of giving bonus cp at 3 talents, rogue have more than enough random with stun resists etc, so lil bit of constancy is realy needed fix of a talent.
 - Premeditation - this is the worst last talent in the game, literally the worst, what makes cold blood the real last talent of sublety rogue. My proposition is make it 20s cd, this ISNT will be even the buff of pvp rogue because cold blood will be still better, but this is just legit utility option for pvp rogues.
 - Improved sap - instead of making sap doenst brake stealth (i want this ability dont brake stealth as base ability) give this talent 5\10 range and about 25\50% energy cost what was made in later expanshions.
Combat:
 - Improved backstub must migrate to assasination tree like it was in later expanshion for the sake of logic and the love of God and because there is NO main or sub build with dagger and ombat.
Assasination:
 - Imp. slice & dice must migrate to combat tree for the same reasons as imp. backstab to the ass. tree (swap yea).

## Post 35065 by Kiltzombie — 2023-02-17T15:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35065#p35065 | page 2 | era: pre-1.18.1 -->

These are awesome ideas. Give the rogues some love!

## Post 35220 by Bayanni (Patch Note Conspiracy Theorist) — 2023-02-19T13:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35220#p35220 | page 2 | era: pre-1.18.1 -->

> **Kefke wrote: Fri Feb 17, 2023 7:22 am**
> If you can't figure out on your own when it's appropriate to use an ability that puts a long stun on one target, but breaks stealth, all I can really tell you is to play a class with simpler mechanics.

So you don't know and are talking out of your ass, got it.

For the rest of us, it's rarely if ever usable and a terrible ability in its current implementation. The proposed improvement to sap was implemented in retail on patch 2.1.0, not long after the expansion went live. As with several other QoL improvements turtle has implemented that were inspired by ActiBlizz patches after Vanilla, this one would continue to enhance otherwise frustrating gameplay mechanics and design choices for a better overall experience.

I have not seen a cogent argument against this yet.

## Post 35229 by Gantulga (Grandmaster of Forum PvP) — 2023-02-19T16:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35229#p35229 | page 2 | era: pre-1.18.1 -->

> **Feomatar wrote: Fri Feb 17, 2023 9:37 am**
> THIS what rogues need without breaking balance.
>
>  After huge buffs of other classes rogue need, no not pure buffs in pvp but quality of life changes and some minor buffs in pve, this is my list.
>  1. Not even change but fix of broken stuff - like pets see rogue after restealth or even after vanish what makes rogue a joke.
>  2. CP - cp must be losing on target ONLY if u use cp generating ability on other target and not when u just change the target. I know that its the way it worked in vanilla, but its so much outdated mecanic what feels like a bug.
>  3. Poison charges - the same, its just anoing mecanic what have no reason to be in the game.
>  4. Sap mst no break stealth ho it was fixed in later expanshion, just quol change for pve, all rogue specs need some form of cc in dung.
>  5. Slie & dice - must not break stealth like in later expanshions, its a range self buff and have no reasaons to break stealth.
>  6. Mostly for pve - rogues have one of the worst physical damage crit multipliers what makes rogue perform pretty low compare to another classes in pve, so in my opinion garrote and rupture ability must be able to crit.
>  Now for the talents:
>  Sublety:
>  - Initiative - like at later expanshion must be changed to 100% of giving bonus cp at 3 talents, rogue have more than enough random with stun resists etc, so lil bit of constancy is realy needed fix of a talent.
>  - Premeditation - this is the worst last talent in the game, literally the worst, what makes cold blood the real last talent of sublety rogue. My proposition is make it 20s cd, this ISNT will be even the buff of pvp rogue because cold blood will be still better, but this is just legit utility option for pvp rogues.
>  - Improved sap - instead of making sap doenst brake stealth (i want this ability dont brake stealth as base ability) give this talent 5\10 range and about 25\50% energy cost what was made in later expanshions.
>  Combat:
>  - Improved backstub must migrate to assasination tree like it was in later expanshion for the sake of logic and the love of God and because there is NO main or sub build with dagger and ombat.
>  Assasination:
>  - Imp. slice & dice must migrate to combat tree for the same reasons as imp. backstab to the ass. tree (swap yea).

All of those make perfect sense but you forgot the TBC fix to Cold Blood which made the buff not disappear if the hit didn't connect, which is also needed.

What you listed aren't even actual buffs but little QoL and "bug" fixes to dumb and frustrating mechanics that Blizzard itself tackled during TBC, thanks to the feedback received in vanilla.

I'd like to see some actual buffs here and there to give rogue some raid utility, and a little PvP boost since they struggle there on this server.

## Post 35238 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-19T18:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35238#p35238 | page 2 | era: pre-1.18.1 -->

> **Bayanni wrote: Sun Feb 19, 2023 1:14 pm**
> > **Kefke wrote: Fri Feb 17, 2023 7:22 am**
> > If you can't figure out on your own when it's appropriate to use an ability that puts a long stun on one target, but breaks stealth, all I can really tell you is to play a class with simpler mechanics.
>
>   So you don't know and are talking out of your ass, got it.
>
>
>  For the rest of us, it's rarely if ever usable and a terrible ability in its current implementation. The proposed improvement to sap was implemented in retail on patch 2.1.0, not long after the expansion went live. As with several other QoL improvements turtle has implemented that were inspired by ActiBlizz patches after Vanilla, this one would continue to enhance otherwise frustrating gameplay mechanics and design choices for a better overall experience.
>
>  I have not seen a cogent argument against this yet.

No, I'm saying that you're being so unfathomably stupid about this that I can't possibly fix your skill issue. Sap is a single-target ability that breaks stealth. If you are trying to use it on groups of enemies that will aggro when they see you, you are going to get attacked. ***Figure it out from there, dummy.***

Yes, Retail made a lot of the game easier. That's because Blizzard adopted a "no player left behind" level of casual-friendliness. Turtle isn't trying to be Retail. It's trying to be Vanilla, back when there were a lot more resources to manage, and you didn't have the same level of getting rewards just for showing up that the game has now. That means you have to actually learn how your class abilities work, and put in the thought to not use them in the wrong situations.

- AoE in Duskwood and aggro an invisible high-level ghost who proceeds to shred you? Your fault.
- As a Warrior, use Charge to zip past a group of enemies and they mob you from behind? Your fault.
- Fear enemies into other enemies and cause a chain pull? Your fault.
- Misjudge the size of your AoE? Your fault.
- Try to Sap too close to other enemies? *Your. Fault.*

*Last edited by Kefke on Sun Feb 19, 2023 6:44 pm, edited 5 times in total.*

## Post 35239 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-02-19T18:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35239#p35239 | page 2 | era: pre-1.18.1 -->

> **Feomatar wrote: Fri Feb 17, 2023 9:37 am**
> Combat:
>  - Improved backstub must migrate to assasination tree like it was in later expanshion for the sake of logic and the love of God and because there is NO main or sub build with dagger and ombat.
>  Assasination:
>  - Imp. slice & dice must migrate to combat tree for the same reasons as imp. backstab to the ass. tree (swap yea).

We go through this every time. Assassination has ALL the improved finishers in it. Imp. Eviscerate, Imp. Expose Armor, Imp. Kidney Shot. That's why Imp. Slice and Dice is in there. That is the logic behind it. Assassination improves all the finishers. Why does Combat have Dagger Specialization in it when theres no Dagger build using it? Should that move to the Assassination tree?

You can actually go Seal Fate with 5/5 in Dagger Spec for the extra crit like <https://talents.turtlecraft.gg/rogue/IXF8U15-K350CU1> earlier than you can the main Seal Fate build.

No I don't know why they changed it in TBC, but I have yet to see a good reason as to why they did, and they make further questionable changes in TBC so it's not a simple fix to an original mistake.

## Post 35256 by Feomatar (Barrens Chat Casualty) — 2023-02-19T20:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35256#p35256 | page 2 | era: pre-1.18.1 -->

> **Ravenstone wrote: Sun Feb 19, 2023 6:31 pm**
> > **Feomatar wrote: Fri Feb 17, 2023 9:37 am**
> > Combat:
> >  - Improved backstub must migrate to assasination tree like it was in later expanshion for the sake of logic and the love of God and because there is NO main or sub build with dagger and ombat.
> >  Assasination:
> >  - Imp. slice & dice must migrate to combat tree for the same reasons as imp. backstab to the ass. tree (swap yea).
>
>  We go through this every time. Assassination has ALL the improved finishers in it. Imp. Eviscerate, Imp. Expose Armor, Imp. Kidney Shot. That's why Imp. Slice and Dice is in there. That is the logic behind it. Assassination improves all the finishers. Why does Combat have Dagger Specialization in it when theres no Dagger build using it? Should that move to the Assassination tree?
>
>  You can actually go Seal Fate with 5/5 in Dagger Spec for the extra crit like <https://talents.turtlecraft.gg/rogue/IXF8U15-K350CU1> earlier than you can the main Seal Fate build.
>
>  No I don't know why they changed it in TBC, but I have yet to see a good reason as to why they did, and they make further questionable changes in TBC so it's not a simple fix to an original mistake.

Yea, its so much popular build, everybody raid in it... Oh, its NOT X D

## Post 35257 by Feomatar (Barrens Chat Casualty) — 2023-02-19T20:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35257#p35257 | page 2 | era: pre-1.18.1 -->

> **Gantulga wrote: Sun Feb 19, 2023 4:22 pm**
> > **Feomatar wrote: Fri Feb 17, 2023 9:37 am**
> > THIS what rogues need without breaking balance.
> >
> >  After huge buffs of other classes rogue need, no not pure buffs in pvp but quality of life changes and some minor buffs in pve, this is my list.
> >  1. Not even change but fix of broken stuff - like pets see rogue after restealth or even after vanish what makes rogue a joke.
> >  2. CP - cp must be losing on target ONLY if u use cp generating ability on other target and not when u just change the target. I know that its the way it worked in vanilla, but its so much outdated mecanic what feels like a bug.
> >  3. Poison charges - the same, its just anoing mecanic what have no reason to be in the game.
> >  4. Sap mst no break stealth ho it was fixed in later expanshion, just quol change for pve, all rogue specs need some form of cc in dung.
> >  5. Slie & dice - must not break stealth like in later expanshions, its a range self buff and have no reasaons to break stealth.
> >  6. Mostly for pve - rogues have one of the worst physical damage crit multipliers what makes rogue perform pretty low compare to another classes in pve, so in my opinion garrote and rupture ability must be able to crit.
> >  Now for the talents:
> >  Sublety:
> >  - Initiative - like at later expanshion must be changed to 100% of giving bonus cp at 3 talents, rogue have more than enough random with stun resists etc, so lil bit of constancy is realy needed fix of a talent.
> >  - Premeditation - this is the worst last talent in the game, literally the worst, what makes cold blood the real last talent of sublety rogue. My proposition is make it 20s cd, this ISNT will be even the buff of pvp rogue because cold blood will be still better, but this is just legit utility option for pvp rogues.
> >  - Improved sap - instead of making sap doenst brake stealth (i want this ability dont brake stealth as base ability) give this talent 5\10 range and about 25\50% energy cost what was made in later expanshions.
> >  Combat:
> >  - Improved backstub must migrate to assasination tree like it was in later expanshion for the sake of logic and the love of God and because there is NO main or sub build with dagger and ombat.
> >  Assasination:
> >  - Imp. slice & dice must migrate to combat tree for the same reasons as imp. backstab to the ass. tree (swap yea).
>
>   All of those make perfect sense but you forgot the TBC fix to Cold Blood which made the buff not disappear if the hit didn't connect, which is also needed.
>
>  What you listed aren't even actual buffs but little QoL and "bug" fixes to dumb and frustrating mechanics that Blizzard itself tackled during TBC, thanks to the feedback received in vanilla.
>
>  I'd like to see some actual buffs here and there to give rogue some raid utility, and a little PvP boost since they struggle there on this server.

This is the point, i dont want any class to be op, i just want rogue being fixed with 100% fitting and not overpovered mecanics  hiding_smth_turtle_head

## Post 35259 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-19T21:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35259#p35259 | page 2 | era: pre-1.18.1 -->

When people in this thread say "fixed", what they actually seem to be saying is, "like it is in Retail".

## Post 35265 by Feomatar (Barrens Chat Casualty) — 2023-02-19T21:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35265#p35265 | page 2 | era: pre-1.18.1 -->

> **Kefke wrote: Sun Feb 19, 2023 9:01 pm**
> When people in this thread say "fixed", what they actually seem to be saying is, "like it is in Retail".

Nope i dont and you know it, and i'm not suggesting broken things "hurr durr give me win button because i'm bad" like you do with your suggestion about warrior pvp buffs with overpowered overtuned ability what makes warrior even more just statstick for dummies.   hiding_smth_turtle_head
My guy, honestly, i dont feel anithing bad toward you, but pls STOP make opinions about balance and mecanics because you dont know shit about it and all what you say is the most idiotic things i ever heard, everybody become dummer when reading your things, God have mercy on your soul X D Siriously, no one want retail here, no one asking for shadow dance for rogues or bladestorm for warriors (except you, u asking wotlk healing ability + freedom in one button for class who needs ONLY utility because already have incredible high numbers), everybody (but you) wants just smooth and balanced gameplay for everybody without making extremly overtuned and nonfitting in vanilla abilities.

## Post 35275 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-02-19T21:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35275#p35275 | page 2 | era: pre-1.18.1 -->

> **Feomatar wrote: Sun Feb 19, 2023 8:55 pm**
> > **Ravenstone wrote: Sun Feb 19, 2023 6:31 pm**
> > > **Feomatar wrote: Fri Feb 17, 2023 9:37 am**
> > > Combat:
> > >  - Improved backstub must migrate to assasination tree like it was in later expanshion for the sake of logic and the love of God and because there is NO main or sub build with dagger and ombat.
> > >  Assasination:
> > >  - Imp. slice & dice must migrate to combat tree for the same reasons as imp. backstab to the ass. tree (swap yea).
> >
> >  We go through this every time. Assassination has ALL the improved finishers in it. Imp. Eviscerate, Imp. Expose Armor, Imp. Kidney Shot. That's why Imp. Slice and Dice is in there. That is the logic behind it. Assassination improves all the finishers. Why does Combat have Dagger Specialization in it when theres no Dagger build using it? Should that move to the Assassination tree?
> >
> >  You can actually go Seal Fate with 5/5 in Dagger Spec for the extra crit like <https://talents.turtlecraft.gg/rogue/IXF8U15-K350CU1> earlier than you can the main Seal Fate build.
> >
> >  No I don't know why they changed it in TBC, but I have yet to see a good reason as to why they did, and they make further questionable changes in TBC so it's not a simple fix to an original mistake.
>
>   Yea, its so much popular build, everybody raid in it... Oh, its NOT X D

So you aren't going to refute that there is logic to the placement of the talents? Or explain why the Combat tree has Dagger Specialization even though according to yourself there is no build that would ever even use it.

Yes, the spec I linked isn't as popular as Combat, but it exists and is very viable. It's also better for PvP if you wanted to do both PvP and PvE in the same spec putting points into Improved Kidney Shot instead of Expose Armor.
Combat Daggers also exist if you wanted to do PvP in a mainly Combat spec. Is it as good as Combat Swords at PvE? No, but to claim that no builds use Imp. Backstab and Daggers in the Combat tree is just not true.

You have never provided any good reason to change it, only saying it is illogical, which it isn't, and that Blizzard 'fix' it in future expansions, which is highly debatable. All your change does is cement Combat Swords as the best Rogue PvE spec.

## Post 35281 by Feomatar (Barrens Chat Casualty) — 2023-02-19T21:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35281#p35281 | page 2 | era: pre-1.18.1 -->

> **Ravenstone wrote: Sun Feb 19, 2023 9:35 pm**
> > **Feomatar wrote: Sun Feb 19, 2023 8:55 pm**
> > > **Ravenstone wrote: Sun Feb 19, 2023 6:31 pm**
> > > We go through this every time. Assassination has ALL the improved finishers in it. Imp. Eviscerate, Imp. Expose Armor, Imp. Kidney Shot. That's why Imp. Slice and Dice is in there. That is the logic behind it. Assassination improves all the finishers. Why does Combat have Dagger Specialization in it when theres no Dagger build using it? Should that move to the Assassination tree?
> > >
> > >  You can actually go Seal Fate with 5/5 in Dagger Spec for the extra crit like <https://talents.turtlecraft.gg/rogue/IXF8U15-K350CU1> earlier than you can the main Seal Fate build.
> > >
> > >  No I don't know why they changed it in TBC, but I have yet to see a good reason as to why they did, and they make further questionable changes in TBC so it's not a simple fix to an original mistake.
> >
> >   Yea, its so much popular build, everybody raid in it... Oh, its NOT X D
>
>  So you aren't going to refute that there is logic to the placement of the talents? Or explain why the Combat tree has Dagger Specialization even though according to yourself there is no build that would ever even use it.
>
>  Yes, the spec I linked isn't as popular as Combat, but it exists and is very viable. It's also better for PvP if you wanted to do both PvP and PvE in the same spec putting points into Improved Kidney Shot instead of Expose Armor.
>  Combat Daggers also exist if you wanted to do PvP in a mainly Combat spec. Is it as good as Combat Swords at PvE? No, but to claim that no builds use Imp. Backstab and Daggers in the Combat tree is just not true.
>
>  You have never provided any good reason to change it, only saying it is illogical, which it isn't, and that Blizzard 'fix' it in future expansions, which is highly debatable. All your change does is cement Combat Swords as the best Rogue PvE spec.

First reason - people who make this game fix it like this imidiatly in next expanshion.
Second reason non of COMBAT builds are around daggers, and your build with daggers in pve are still required deep  assasination.
third reason - pvp daggers are crippled and forced to go into threespec instead of logical 2 trees spec.

*Last edited by Feomatar on Mon Feb 20, 2023 10:31 am, edited 1 time in total.*

## Post 35300 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-02-19T22:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35300#p35300 | page 2 | era: pre-1.18.1 -->

> **Feomatar wrote: Sun Feb 19, 2023 9:48 pm**
> Second reason non of COMBAT builds are not around daggers, and your build with daggers in pve are still required deep  assasination.
>  third reason - pvp daggers are crippled and forced to go into threespec instead of logical 2 trees spec.

I don't understand the wording on your second reason, the double negative confuses me. Can you reword it please?
Also yes, the developers wanted people not to spend 51 talent points in a tree. They purposefully put talents that are attractive in other trees. Having to dip into other trees is something every other spec does. Feral Druid is a prime example of going into 3 separate trees which no-one complains about.

It's hardly been crippling for PvP dagger Rogues. SF can solo kill reliably against the majority of classes. Yes Combat Daggers is not the best PvP spec, but Combat itself is the best PvE tree. I can accept they might need some buffs since everyone else gets them here, but I truly don't believe that either of these talents are out of place for the reason I've listed before.

You still haven't addressed why Dagger Specialization is fine in the Combat tree even though the main ability's improved version that you would use it with, you'd see removed from the tree. Would Combat Daggers be good then?

## Post 35331 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-20T05:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35331#p35331 | page 2 | era: pre-1.18.1 -->

> **Feomatar wrote: Sun Feb 19, 2023 9:13 pm**
> > **Kefke wrote: Sun Feb 19, 2023 9:01 pm**
> > When people in this thread say "fixed", what they actually seem to be saying is, "like it is in Retail".
>
>   My guy, honestly, i dont feel anithing bad toward you

Ah, so the insults are just how you normally communicate with people, then?

...and it's just a complete coincidence that all the things that will fix what you think is wrong with Rogue (no one seems to be able to properly explain what exactly *is* wrong with Rogues, just that it absolutely must be fixed immediately, I notice) happen to be the changes that were made in Retail.

## Post 35351 by Feomatar (Barrens Chat Casualty) — 2023-02-20T07:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35351#p35351 | page 2 | era: pre-1.18.1 -->

> **Kefke wrote: Mon Feb 20, 2023 5:28 am**
> > **Feomatar wrote: Sun Feb 19, 2023 9:13 pm**
> > > **Kefke wrote: Sun Feb 19, 2023 9:01 pm**
> > > When people in this thread say "fixed", what they actually seem to be saying is, "like it is in Retail".
> >
> >   My guy, honestly, i dont feel anithing bad toward you
>
>   Ah, so the insults are just how you normally communicate with people, then?
>
>  ...and it's just a complete coincidence that all the things that will fix what you think is wrong with Rogue (no one seems to be able to properly explain what exactly *is* wrong with Rogues, just that it absolutely must be fixed immediately, I notice) happen to be the changes that were made in Retail.

Yes, like berserk for druids, blood lust for shamas, additional casting shot for hunters etc etc etc, but you are rogue hater who wants i win button for warriors but cry like a baby when someone wants just fixes for outdated mecanics for rogues X D

## Post 35361 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-20T07:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35361#p35361 | page 2 | era: pre-1.18.1 -->

You wanna resort to name calling instead of putting together a coherent argument for why changes are needed? Fine. I can do mud-slinging too. "Go back to Retail."

## Post 35368 by Bayanni (Patch Note Conspiracy Theorist) — 2023-02-20T08:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35368#p35368 | page 2 | era: pre-1.18.1 -->

> **Kefke wrote: Mon Feb 20, 2023 7:43 am**
> You wanna resort to name calling instead of putting together a coherent argument for why changes are needed? Fine. I can do mud-slinging too. "Go back to Retail."

Projection.

Sap is worthless, only good for fighting exactly 2 linked or close together mobs, and the mobs you can sap are not the majority. In the situations where it could be used, another opener would be better. It's bad, almost useless, and needs fixing.

You provided no example with my comment, just went to insults without even thinking for a second that maybe, just maybe, I did understand what this did, and the sterile scenario it's intended for, but was trying to guide you towards a conclusion you have not reached. You should stop, you look like you're getting way too worked up and have degraded this thread to a mud fight because you can't handle people's opinions on the internet.

## Post 39872 by Bloodphobos — 2023-04-01T15:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39872#p39872 | page 2 | era: pre-1.18.1 -->

bump topic

## Post 39875 by Tawneyturtle (Barrens Chat Casualty) — 2023-04-01T16:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39875#p39875 | page 2 | era: pre-1.18.1 -->

I dont think Backstab should be made easier to use. Frontstabbing is a skill rogues have to learn via experience and it rewards good gameplay. I like every other suggestion. Player bound CPs would be a massive thing as well as some form of consistent AoE like Fan of Knives. Rogues have gained absolutely nothing here except the ability to tank 2 naxx bosses which should be removed from the game.

atm Rogues have near 0 build diversity with daggers and 2 paths for swords, IEA or no IEA. PVP has about 2-3 viable builds but that's about it.

Blade flurry needs to be baseline at lvl 40, and at lvl 60 give it a rank 2 that reduces it's cooldown by 1 minute.

Player CPs wouldn't break anything as Rogues in pvp on turtlewow are extremely underpowered since every1 has easy access to Naxx gear so you can't stunlock and kill any1 besides clothies and people in greens. And in PVE this would allow them to target switch.

Sap talent alongside Sprint cooldown talent should be default, it makes little sense to have Sprint be on a such a long cooldown while Stealth is extremely underpowered on the server since it's very buggy.

I'd also like to go over Zoomer's request to fix Sap not being able to apply poisons, Crippling poison especially would be needed if the Sap talent doesn't become baseline.

I don't believe the rest of the points are that high prio, WF shouldn't stack with poisons since if it did, it'd have to work with sharpening stones and 2x Sharpening stones + WF would make Warrior even more giga broken than it is right now.

So TLDR

Yes to Rogue bound CP 10000%, makes the class not punishing for being a good player.
No to removing skill ceiling increases like frontstabbing.
Add fan of knives, make Blade flurry baseline and rank 2 with 1 minute CD
Yes to Sap talent being baseline.
Remove rogue tanking from raiding.
Rest of the changes seem overpowered or too far out.

## Post 39879 by Bloodphobos — 2023-04-01T16:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39879#p39879 | page 2 | era: pre-1.18.1 -->

> **Tawneyturtle wrote: Sat Apr 01, 2023 4:05 pm**
> Rest of the changes seem overpowered or too far out.

I have never said that I want to make rogue overpowered. All changes are focused to up unpopular abilities and builds. Because I hate current situation when a single role class has only 1 real build (combat) without any variations. Even combat dagger spec is absolutely the same and does not bring any other experience and this is mega boring.

My suggestions first of all bring the general concept of how to make something unplayable/unpopular to a viable thing. If something is really overpowered, of course it should have less numbers\percentages. Most of these numbers I wrote with the mind that other changes won't be applied. So, if dev-team took all of them, of course number should be much lower...

I don't know about your rogue experience, but for your information more than 55% rogue damage in raids is just a white auto attack damage. So even when you see strong ability improvement keep in mind that it will not bring huge numbers, cuz this will impact only on a small amount of general rogue damage, agree?

## Post 39893 by Tawneyturtle (Barrens Chat Casualty) — 2023-04-01T18:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39893#p39893 | page 2 | era: pre-1.18.1 -->

you need to think on the larger scale. you cannot ask for everything that isn't great to be changed at once, that'd require a massive balance update for all classes. start out with the biggest issues, which to me are the lack of AoE and the overly punishing CP system of vanilla.

## Post 41573 by Bloodphobos — 2023-04-14T22:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41573#p41573 | page 2 | era: pre-1.18.1 -->

> **Tawneyturtle wrote: Sat Apr 01, 2023 6:08 pm**
> you need to think on the larger scale. you cannot ask for everything that isn't great to be changed at once, that'd require a massive balance update for all classes. start out with the biggest issues, which to me are the lack of AoE and the overly punishing CP system of vanilla.

Firstly, I'd like to get any clarity from responsible Turtle devs, about their class change convetions, and acceptable scope of changes Only after that we can start taking about something in details

