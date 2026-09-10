---
title: "Suggestions for rogue class changes"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5614"
topic_id: 5614
forum_id: 47
forum: "Rogue"
author: "Bloodphobos"
author_authority: "player"
posted: "2023-02-15T00:18:00Z"
last_post: "2023-12-30T22:16:00Z"
post_count: 33
pages: 1
fetched: "2026-09-10T08:19:26Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Suggestions for rogue class changes

## Post 34782 by Bloodphobos — 2023-02-15T00:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34782#p34782 | page 1 | era: pre-1.18.1 -->

*Original post was created in "Suggestions", but as I see nowadays such topics are landed in appropriate class topics, so I put my updated list here.*  To consolidate our discussions on Discord and avoid any scattered suggestions, I would like to duplicate everything there so that it's all in one place.

Firstly, I want to describe only existing class issues without their proper implementation. I guess it can help the Turtle developer team in future where to look. Also, when someone wants to change something, each time please ask yourself  about each change: How will this impact soft leveling? How will this impact HC leveling? How will this impact PVE? How will this impact PVP? If you have 4 answers with positive/neutral/negative impact you will figure out how people will react to them.

Major class issues
 1) Combo Points: they disappear if you switch the target, that means you always lose CP when you fight with 2+ targets, example: you hit one target and accumulate CP, then if you want to make a gouge (control) on 2nd target, you lose all CP on 1st target and have 1 CP on 2nd from gouge. Then you switch back target for 1st and again u lose CP from 2nd target… Or at least implement TBC mechanic.
 2) No AOE: default rogue absolutely has no AOE. There is only one 2-target AOE in deep combat build with long CD.
 3) Sap: default rogue has useless sap because it breaks stealth. Only subtlety rogues have talent to prevent stealth breaking in deep sub. This means that non deep sub rogues can’t control mobs in dungeons like mage sheep, priest shackle, warlock banish, druid hibernate etc, but they should, similar like they do that from TBC expansion.
 4)  Poisons: rogue class first of all about poisons and what we have? Poisons as debuffs are good but very bad from a damage perspective. We see poison talents only in assassination spec but even with 10 points investment, their impact is still negligibly small and less than windfury.  Also, poisons can't be applied with windfury. If it's impossible to impement for some reasons, at least let's up poison damage to avoid story when some party totem buff is stonger when whole class feature.
 5)  Agitating Poison  has too low threat impact. To allow take stable mob aggro in party with mages/warlocks/shamans in context when we don't have any taunt ability it should do about x5 times more threat as it does now.

Medium class issues
 1) Assassination: Seal Fate PVE build works only with the end progress gear due to high critical rate dependency and is still weaker than any combat build. We need to do something with it, probably add some mechanic that adds critical rate to combo generate abilities when you have low crit, which will make SF viable on earlier and middle progresses. Also this tree has only one build type, which is based on crits. It would be cool to think about 2nd poison based build in this tree, we can take inspiration from post vanilla expansion where we got a lot of poison talents and abilities.
 2) Subtlety: PVE subtlety build is weak because it has no extra energy generation or any extra combo point incomes in the tree during fight encounters. As we see this spec is about daggers because we have 5 points for Backstab+Ambush improvements on 1 tier talent and 3 points for Ambush on 3rd talent tier, for abilities that could be used only with daggers (we're not talking about hemorrhage cuz it's fine and need only extra damage tweak). Everyone who tries to leveling with BS/Ambush sees that this build has a big issue with lack of combo points: we always kill mobs before we can reach 5 CP before ~40 lvl and about 8-9 CP till 60 lvl, because Ambush and BS abilities cost 60 energy. Usually till 40 lvl we have 3-4 CP before mob dies and because we lose all CP on target switching all finishers are useless and this is a big spec design gap. In scope of leveling this issue will disappear if we implement self sticky Combo Points (they do not disappear if mob die or if we change the target), but lack of CP income and energy for their generation still will take place in the dungeon and raids. So, we need to think about how to improve PVE subtlety build to get more combo points/energy generation with Backstab generator and more damage with hemorrhage generator during fights.
 3) in vanilla rogue has issue with survivibility in pvp and pve due to low HP pool, no any base damage reductuon talents. All they have is Evasion which does not protect from spell damage, AOE effects, range shots and has big CD.

Minor class issues
 1) Assassination: the final assassination Vigor talent is not concurrent.
 2) Subtlety: final subtlety Premeditation talent is not concurrent.
 3) Throw: this is a properly rogue class ability that is not opened in vanilla. I think it is a rogue ability because rogue has it from the start, also in next expansions Blizzard added “Deadly Throw” and “Shuriken Toss” <https://www.wowhead.com/spell=114014/shuriken-toss>. For now Throw has low damage, its weapon can not be repaired, it has no improvement talents, drop tables have no really cool Throw items in comparison to bows, crossbows, guns. So, I guess we need to design some new throw items with great stats on it and add the possibility to repair it or prevent its breakage.
 4) Rogue role as class is useless in the raid: currently there is no exceptional rogue utility in the raid. I.e. warrior has AP shout buff, "free" sunder armor during tanking, possibility to instantly become a lightweight temporal OT; mage has food/water and buffs; warlock has healthstones, soulstones, blood pact, curses; paladin has powerful multi buffs, etc. What has rogue? Nothing! Expose armor can not be counted, because it is not free and if a rogue uses it by CD it reduces general damage (main class destination). In future updates to fix this gap, rogues got +8% extra spell damage debuff from Master Poisoner, +4% extra physical damage from Savage Combat and +30% extra bleed debuff from Hemorrhage ability. So all 3 rogue specs got their unique useful raid buff.
 5) Backstab: add front hitting by default, but with appropriate penalty, like it was originally intended in WOW Alpha version or like it is implemented in modern retail wow. We get this ability on 4th level and it has to be an alternative to Sinister Strike leveling. Because it was impossible to level up or pvp (enemy easy kites you with BS) in future expansions blizzard added to BS ability front hit by default. Currently in Turtle we have the possibility of strafe-dance but it's a really awkward approach and should be improved (let's save our mouses)
[link on modern implementation](https://www.wowhead.com/spell=53/backstab) *Damage increased by 20% when you are behind your target*
[link on alpha implementation](http://web.archive.org/web/20040208022958/http://www.gotwow.net/spelldb.html) *Increases melee damage by 7, but only if attacking from behind*

Now, when main problem concepts are highlighted, let's take a look at direct suggestions. In next proposal I don't want to change existing "popular" combat (sword/dagger), I just want to improve weak builds like SF at early gear progress or BS+Ambush / hemorrhage deep Subtlety build and make more different common class leveling, so:

<https://phobos-programmer.github.io/classic-talent-calculator/#/rogue>[MY SUGGESTION TALENT CALCULATOR](https://phobos-programmer.github.io/classic-talent-calculator/#/rogue)

General suggestions
 1) make Combo Points (CP) not applicable to current target and stick them to player: allow target switching without CP loss. Stop CP loss when mob die (you still lose CP if you are not in combat for 10 seconds). Self CP is a modern mechanic in the wow. If it's too modern, let's use a least TBC Combo Point mechanics.
 2) Blade Flurry make it baseline (learned at ~30 lvl), but without 20% haste bonus (20% bonus will be added by new "Improved Blade Flurry" combat talent). Also reduces CD to 45-60 seconds. We want this change to allow all rogue builds to have at least one AOE spell.
 3) Sap ability should be viable in all specs, so let's move "Improved Sap" talent into 1st tier near the "Master of Deception" talent or even make TBC implementation (sap always returns to stealth without any talents and "Improved Sap" talent instead adds +10 meters for sap range, check "Dirty Tricks" TBC talent). Without this change Sap in vanilla absolutely is not a useful ability when you are not a Subtlety spec rogue.
 4) Add [Cheat Death](https://www.wowhead.com/tbc/spell=31230/cheat-death) ability as a base ability with 3 minutes CD. Glass cannon class should have some base survival ability which will slightly help with enemy spells, AOE and range damage in raids and pvp. Cheat death activation also removes all enemy dots effects. We want this addition because original cheat death without Cloak of Shadow is useless vs multi dot based enemy like warlock or shadow priest.
 5) Ambush ability adds +2 Combo Points instead of 1.
 6) update Hemorrhage ability: does 155% damage if a dagger is equipped (make equal dmg when rogue uses dagger in mh). Now Hemorrhage debuff increases only bleeding damage for 30% and consumes debuff charges only for extra bleed damage impact. This will add a unique rogue buff in raids and will be useful for druid bleed finishers.
 7) Poisons: Let rogue poisons be applied with Windfury Totem effect. WF is too strong and in vanilla it forces not to use poisons in PVE (in next patches rogue could use poisons with WF)
 8) Add the possibility to repair thrown weapons or make them undestroyable. Add more thrown weapons in the raid loot tables and create some cool "rogue only" shuriken thrown weapons similar to other class specific items like relic, idol, etc.
 9) Flourish let's make it available from 16 lvl and adjust buff formula: Ability bonus cannot exceed 80% of total avoidance (dodge+parry). So, If rogue already has 79% avoidance Flourish will add only 1% extra parry bonus. This limit should be implemented only with "Improved Flourish" and "Glancing blow defense''. See subtlety suggestions.
 10) Add Surprise Attack a new ability with 10 seconds CD with taunt effect.
 11) Make Deadly Throw interruption effect as baseline.
 12) Allow to use Slice and Dice without stealth breaking (makes good encounter start in PVE with "Premeditation" or after vanish)
 13) Reduce cooldown of Sprint, Evasion, Blind, Vanish abilities from 5 minutes -> 3m, and Preparation 10 minutes -> 5 like it was done in TBC. We want to reduce strong class CD dependency.
 14) Add Axe mastery for rogue. Update appropriate talent improvement in combat spec.
 15) Allow Backstab ability hit in face without strafe-dance by default. If it is not very difficult it would be also good to implement it in the same way as in modern wow: normal damage for front hit and some bonus (let say 5-10%) from behind to encourage using backside mechanics. Look at [modern ability description](https://www.wowhead.com/spell=53/backstab).
 16) Kick ability should cost less energy, because 25 energy is equal to 2.5 seconds of energy accumulation or -25% energy income if we kick target by CD which is too expensive in comparison to opponents like warrior (main rogue competitor). So Kick should be cheaper (10 energy?) or have a slightly better interruption mechanic, like add +1CP on success interruption.
 17) Eviscerate should have better attack power scaling.
 18) Stop sharing Thistle Tea cooldown with other important items like warlock Healthstone.
 19) add small drop chances for daggers in all Junkboxes from pickpocket. We already have such mechanic with "Gut Ripper'' from "Sturdy Junkbox" and I suggest extending this approach for all Junkbox quality with appropriate dagger quality. We need it because all dagger based rogue builds are dependent on dagger weapon and players during leveling always encounter lack of daggers because they have limited pool of available daggers for current level, when other builds have pools of swords, maces and fist weapons and don't have such issue. To fix this unfair situation let's additionally include "only rogue" or "soulbound" dagger loot in pickpocketable junk boxes throughout 1-60 leveling.

Assassination suggestions (main idea: add some damage by poisons to make this build more viable in PVE in earlier progress. Make "Vigor" interesting):
 1) Remorseless Attacks: make buff duration +20 seconds per point (40 seconds at 2/2). 20 seconds very often is not enough to get another mob after a previous fight, especially if you need to eat or use bandage after last fight.
 2) Improved Expose Armor talent also grants 50% per point (100% if 2/2) not to spend Combo Points. In synergy with "Relentless Strike" and 5 CP it will be free to use and allow rogues to cast Expose Armor buff without losing damage potential.
 3) Improved Poisons talent 5/5 adds 25% (was 10%) apply chance.
 4) Vile Poisons talent 5/5 adds 50% (was 20%) poison damage.
 5) Add Toxic Сourage new tier 5 talent: reduces CD of Cold Blood ability for 3 seconds each time when you apply on target poison effect. This talent requires 5/5 investment in "Vile Poisons" and 1/1 in "Cold Blood".
 6) Add Toxic Atmosphere new tier 5 talent with 3 points: Increases the Nature damage taken by any target you have poisoned by 2% per point and gives all poisons chance per hit to create a cloud of poison in an 5 yard radius around the Rogue for 10 seconds. I suggest reusing existing poisonous puddle spell from the Diseased Ghoul mob in Scholomance dungeon.
 7) Add Master Poisoner new tier 6 talent with 5 points: when you apply any poison on target with 20% (100% when 5/5) you additionally apply an extra instant poison hit. You also have a 20% (100% if 5/5) chance to reduce enemy poison resistance/immunity.
 8) Add Mutilate new tier 6 talent with 1 point: add a new Mutilate ability: Instantly attacks the target with both daggers. The target takes 10% more damage per your stack of Deadly Poison. Awards 2 combo points. Damage bonus could be balanced. This talent requires 5/5 investment in "Master Poisoner".
 9) Vigor talent adds 20 (was 10) energy and add new passive ability:
Option "A: your Deadly poison tick (each 3 seconds) with maximum stacks (5) starts giving rogue additional 3-10 energy (depending on other improvements).
Option "B: Vigor adds 20 energy and +15-25% (depending on other improvements) to energy generation.

Combat suggestions (main idea: add Axe support, and Throw improvements for the build, make getting riposte talent more cheap on leveling, bring PVP part in combat):
 1) Replace Blade Flurry (we want it as baseline without 20% bonus) with "Improved Blade Flurry" talent that will increase attack speed by +20%. We want this change to allow all rogue builds to have at least one AOE spell
 2) Improved Sprint buff also removes all impairing effects each 3 seconds.
 3) Throwing weapon specialization current implementation is not viable and investment in talent is just a waste of 2 talent points.  So, I suggest making Deadly Throw interruption as baseline and probably removing extra range of throw abilities. Instead it will add Deadly throw ability 50% (100% 2/2) chance to immobilize target for 2 seconds and in addition it will increase +50% (+100% if 2/2) “Throw” damage and give Throw ability 50% (100% if 2/2) chance to add 20% dodge buff for 8 sec if rogue makes thow hit not being in combat.
 4) Riposte also generates additional threat.
 5) Mace Specialization move existing mace skills bonus to weapon expertise talent and add new bonus: Increases the damage dealt by your critical strike hits with maces by 1% (5% when 5/5) and your attacks with maces now ignore up to 3% (15% when 5/5) of your opponent's armor. We don't remove passive stun bonus cuz it will destroy pvp/tanking oriented builds. The main aim is to make mace weapons viable and concurrent with swords.
 6) Close Quarters Combat redesign talent to apply additional bonus for fist weapons, like 7.5% instead of 5% for critical chance or 5% chance to restore some energy when you hit with fist weapons. The main aim is to make fist weapons viable and concurrent with swords.
 7) Sword Specialization refactor to apply in addition the same bonus to Axe.
 8) Adrenaline effect also grants immune to fear and stun effects (possibility to make combat viable in pvp).

Subtlety suggestions (main idea: create a viable dagger PVE/PVP build based on "Ambush" and "Backstab" abilities. Add "Setup" leveling and tanking builds. Make "Premeditation" interesting. Make Ambush more ultimate ability similar to Pyroblast, Soul Fire, Execute). Make "Feint" a viable ability.
 1) Master of Deception make it 3 maximum points to invest. 1 -> +2, 2-> +4, 3 points -> +5 effective stealth level. We need this change to allow pick improved ambush and  “Improved Sap”.
 2) Add Improved Flourish a new talent with 3 max points to invest in tier 1. Talent increases the duration of your 'Flourish' ability by 15% (45% when 3/3) and reduces the duration of stun effects on rogue by 10% (30% when 3/3) when 'Flourish' is active. This talent is a prerequisite for 'Glancing Blow Defense'."
 3) Add Glancing blow defense new tier 2 talent with 5 max points to invest: when Flourish is active the rogue additionally receives reduced magic damage by 8% (40% when 5/5) of total avoidance and reduced physical damage by 13% (65% when 5/5) of total avoidance stats, where avoidance is a sum of character dodge and parry stats. This talent requires 3/3 investment in Improved Flourish. Example: if rogue gear has total 50% avoidance (let set 40% dodge and 10% parry) with 5/5 Glancing blow defense you will get 20% spell damage reduction and 32.5% physical damage reduction while flourish is active.
 4) Sleight of hand. Additionally Feint ability hit after 10 seconds brings rogue second breath which generate rogue 15 (30 if 2/2) energy. This brings sense to pick this talent and to use feint ability in PVE rotations.
 5) Elusiveness additionally reduces taken spell damage by 15% (30 if 2/2) and adds 15% (30 if 2/2) to dodge (evade) enemy shots when you have activated Evasion ability.
 6) Setup 15% -> 33% (100% if 3/3). Each proc also reduces CD of Ghostly Strike by 1 sec. This effect cannot occur more than once per second. We want to revive rogue tanking based on setup talent like it was initially designed in the wow alpha version.
 7) Improved Sap each point reduces sap energy cost by 20 energy (-40 if 2/2). Move this talent in tier 1 to allow other specs to use playable Sap.
Option “B” replace this talent with TBC “Dirty Tricks“ <https://tbc.wowhead.com/spell=14076/dirty-tricks> and make Sap always have a 100% chance not to break stealth.
 8) update Ghostly Strike ability: does 190% damage if a dagger is equipped (make equal damage when rogue uses dagger in MH). In addition to existing effects, "Ghostly Strike" buff also grants 15% to resist spell damage and evade range shot. We want to create Ghostly Strike + Setup based subtlety tank build. If we don’t get baseline Blade Flurry, let’s imbue Ghostly Strike with cleave effect to allow pick mob packs on tanking.
 9) Improved Ambush now has 2 max points to invest and gives +25% critical chance per point and
idea1 add new talent Shadow Proficiency: now your Ambush deals shadow damage instead of physical. This talent requires 2/2 investment in Improved Ambush.
idea2 do not create additional talent and just add 25% ignore armor to ability per talent point (50% armor ignored in total when 2/2).
Without permanent critical strike and some armor penetration this ability is not worth spending 60 energy even to hit usual mobs after 40+ lvl during leveling.
 10) Deadliness: talent also generates combo points:
idea1: adds +1 combo point from "Rupture" bleed tick. This effect cannot occur more than once every 20 seconds (5 seconds if 5/5, each investment reduce timer for 5 seconds).
idea2: enrich Deadliness with mechanic from Honor Among Thieves talent [https://www.wowhead.com/wotlk/spell=516 ... ng-thieves](https://www.wowhead.com/wotlk/spell=51698/honor-among-thieves)
 11) Slaughter from the Shadows new tier 6 talent with 3(5) max points to invest: reduces the energy cost of your Backstab and Ambush abilities by 5(4) per talent and increases hemorrhage damage by 5(4)% . This talent requires 5/5 investment in Deadliness.
 12) Premeditation reduces CD to 20-30 seconds, this will make it very useful on leveling and on dungeon trash mobs. Then to make it really viable in PVE/raids let's add one of next passive bonus improvements:
idea1: adds new passive ability: each successful Backstab hit reduces rogue vanish CD for 30 seconds. In that case we make unpopular [Elusiveness] and T1 vanish set bonuses very interesting and bring the ability to enter the stealth in combat each 7 Backstabs which is equal 54 seconds by default or ~40 seconds with tea+AQ trinket or full Naxx set.
idea2: adds possibility to "Enter the shadow" aka Shadow Dance for x seconds. To have the possibility to activate this ability, a rogue should stay in combat for some period of time or should land a series of hits with a CP generating ability (2xBS or 1.1x hemo). This "Enter the shadow" buff should not stop auto attacks and just allow the player to use all abilities (or at least premeditation+ambush) without stealth. Let's rename the Premeditation talent name (not the spell) on "Enter the shadow" or "Shadow Dance".
idea3: Each time when you hit let's say 3 Backstabs in a row your next Backstab will be Ambush hit instead. If you leave combat this counter will be reset. This Ambush must get all ability bonuses, i.e. Initiative and Improved Ambush.
 13) Initiative talent has 33% (was 25%) proc per point. This update makes more reliable Ambush+Premeditation opener especially in PVP <https://www.wowhead.com/wotlk/spell=13976/initiative>

Tanking suggestions
After last big update in 2022 the Turtle team added rogues possibility to tank dungeons (dodge gear set) and raids (requires 100% avoidance on strong bosses without strong spell damage). I guess this idea has the right to live, but to be more viable we MUST to add non/low cd AOE to allow rogue-tank pick up packs with a few mobs in normal dungeons and also good to have some spell damage reduction or survive and taunt abilities for raid tanking. ALso I don't like adea with full avoidance. Lets prevent 100% avoidance but give some damage reduction which is based on avoidance stats. So, rogues won't be immune to melee attacks but they can survive during strong melee critical hits due reduced incoming damage.
 1) We need some reliable AOE ability to have the ability to pull packs of 3+ mobs. I see two ways:
a) make Blade Flurry base line with 45-60 seconds CD
b) add Riposte and Ghostly Strike cleave effect.
b) add "Fan of Poisoned Knifes" ability to allow aggro poisons AOE hits <https://www.wowhead.com/wotlk/spell=51723/fan-of-knives>. I see this ability with 5 seconds CD, it does very low or even zero physical damage and applies with 100% proc rate only poisons that have damage effects, it generates 0 (1) CP and costs 15 (35) energy because after FoPK cast we need to have not less than 65 energy for Ghostly strike (40) and flourish finish with 1 CP (25), otherwise without avoidance buffs rogue can just die after FoPK cast. We don't want to get AOE ability that adds possibility to apply crippling poison in range cuz it will impact on PVP.
 2) Please check my suggestion for "Improved Flourish", "Glancing blow defense" and "Ghostly Strike" talents described in this post. Because rogue has no any damage reduction talent in vanilla, low armor and base HP pool is 30% less than any other tank, we need such changes to have some protection against casters, range shoots and physical mekee critical hits in raids especially after 100% melee avoidance will be nerfed and not achievable.
 4) Each real tank should have a taunt-like ability to have the possibility of taking the boss from another tank or just for saving someone on over agro. As a taunt candidate ability I see:
a) Throwing weapon specialization in addition to my previous suggestion also grants "Throw" ability 50% (100% if 2/2) chance to apply taunt effect on target.
b) Surprise Attack let's make Surprise Attack ability with aggro/taunt effect.
c) Feint with updated or new talent grants taunt effect.
d) Shiv (was added in TBC) which can taunt targets if your weapon has Agitating Poison.
e) Ghostly Strike also could be enriched with taunt, but I'd say this is the worst option.
 5) Also if we have real tank plans for rogue we need some alternative of warrior “Shield wall” for hard PVE encounters. That's why I suggest updating existing  Elusiveness check talent description and additionally and I’d take a loot at Cheat Death spell to allow rogue survive when something went wrong in the raid.
<https://www.wowhead.com/spell=31230/cheat-death>
Cheat Death could be taken just as an idea and reworked in scope of proc frequency, buff time and damage percent reduction. I think Cheat Death is very good from a lore/design perspective, because rogue is a "glass cannon" class (it has no armor or damage reduction abilities) and it will give a good opportunity to survive mortal hits during tanking.
 6) Agitating Poison should generate threat even if the target is immune to poisons, otherwise rogue can't tank Elementals, Mechanics and other units who are immune to poisons. Also Agitating Poison should be available from low levels, let say right when you get poisons, to make viable tanking in low level dungeons.
 7) Setup 15% -> 33% (100% if 3/3). Each proc also reduces CD of Ghostly Strike by 1 sec. This effect cannot occur more than once per second. We want to revive rogue tanking based on setup talent like it was initially designed in the wow alpha version.

Poison improve suggestions
 1) Let rogue poisons be applied simultaneously with the Windfury Totem effect. WF is too strong and in vanilla it forces not to use potions on main hand weapons in PVE. If it's impossible, let's up poison damage to be equal to WF damage impact.
 2) Poison damage formula should include rogue Attack Power, similar to how it was implemented after the classic.
 3) Deadly Poison let's add some talent in assassination to get: after 5 stacks each proc also applies some Instant poison damage. Similar to how it works nowadays <https://www.wowhead.com/spell=2823/deadly-poison>  (Coats your weapons with a Lethal Poison that lasts for 1 hour. Each strike has a 30% chance to poison the enemy for [(6.3% of Attack power) * 12 / 2] Nature damage over 12 sec. Subsequent poison applications will instantly deal (4.5% of Attack power) Nature damage.) Check "Master Poisoner" suggestion.
 4) Let's add some talent in assassination to penetrate poison immunity and some raid buff for poison and Nature spells in general. Check "Toxic Atmosphere" .
 5) Add Mutilate ability: Instantly attacks the target with both daggers. The target takes 10% more damage per your stack of Deadly Poison. Awards 2 combo points. Damage bonus could be balanced.
 6) Add Envenom as trainer spell or tier 6 talent with 1 point. Adds Envenom ability that does not consume deadly poison stacks.
 7) Make poisons scale with spell power. This will allow the creation of a spell power geared fan assassin build, like it was in TBC.

Improve rogue quality of life suggestions
 1) Ability to remove poisons from weapon (right click on poison buff or special rogue item, aka "POISON CLEANER T-3000")
 2) Add poison reagents to field repair bot
 3) Reduce cooldown of Sprint, Evasion, Blind, Vanish abilities from 5 minutes -> 3m, and Preparation 10 minutes -> 5 like it was done in TBC.

Other less rogue related suggestions
 1) Add rogue Insignia of the Horde possibility to remove stuns.
 2) Remove engineering skill requirements from Iron Grenade activation or create "Goblin Thorium Grenade" alternative which will be slightly expensive and can by used by non-engineers. This will allow engineers earn some extra money from profession by selling consumable Iron Grenade (similar like elixirs in alchemy) and will make profession less non-alternatively required for PVP and will allow rogues to tank better and do AOE damage, cuz now non-engineers will get one more extra AOE with 1 min CD. P.S. Engineer will still have monopoly for other cool AOE like Thorium Granades, Goblin Sapper Charge, mana-burn bombs...
 3) Add some unique enchants for Leatherworkers. They already have a bunch of armory kits and they are absolutely useless. Let's add some new consumable LW enchants like Rugged Enchanted Agility Kit, Rugged Enchanted Strength Kit, Rugged Enchanted Intelect Kit, Rugged Enchanted Spirit Kit with appropriate stat.
 4) Add new Telabim food with 15 agility buff
 5) Black Moras dungeon has only 1 useful drop item (chest) for rogues. let's add something additional in loot tables.
 6) Increase run buff speed of goblin [Exit Strategy] or remove daze effect. Currently this is useless almost ability in pvp/pve/leveling, so let's make it usable at least as additional "sprint".
 7) create new quest chains for blue T0.5 items to allow upgrade them on epic quality in new 1.17 dungeons/raids.
 8) Add some casual trinkets to Survival, like add mount speed, swim speed, extra gold from mob loot, extra cooking/fishing skills

Known rogue bugs
 1) Improved Sap sill works badly  in pve - when you sap mob you lose you stealth and if there are two mobs - 2nd mob start gets aggro and starts hitting you in stealth
 2) Vile Poisons talent does not add any additional poison dispel resist
 3) Wound Poisons do not stack from two weapons. Instead of getting twice faster stack they overwrite each other
 4) Improved Slice and Dice work for Flourish as well, but there is no any description about it
 5) you can infinity use range finishers on mob after it was avoided

PVE Build simulation numbers
To bring some preliminary clarity about current rogue PVE build balance numbers, I made some simulations in "Simonize's Classic Rogue Sheet" for average rogue in t2 set with aproximate 60 seconds vs boss fight:
 1) dagger combat pve build - 832.3 conventional DPS <https://talents.turtlecraft.gg/rogue/0UF6O-K350CZ10E6-5>
 2) sword combat pve build - 801.2 conventional DPS <https://talents.turtlecraft.gg/rogue/0XF6U-K65CC51UF6>
 3) SF dagger pve build - 706.8 conventional DPS <https://talents.turtlecraft.gg/rogue/0XF6UV5-K350C51>
 4) SF hemorrhage pve build - 662.7 conventional DPS <https://talents.turtlecraft.gg/rogue/0XF6UV5-0-58X60I06>
 5) Backstab premeditation build (actually it's just a BS+SnD spam, cuz you don't have energy for anything else) - 637.2 conventional DPS with BS <https://talents.turtlecraft.gg/rogue/0UC-0X5-52X30K6B6> and 615 with hemorrhage <https://talents.turtlecraft.gg/rogue/0UF-0U5-52X62I8B6>

in percentages it looks next
combat daggers 100%, as a template, then
combat swords -3.7%
SF daggers -15%
SF hemo -21,5%
Premeditation BS -23.4%, Premeditation hemo -26%

According to simulation, if we want to have "5) BS premeditation pve build" somewhere between combat dagger and sword builds, we need to have +75% energy generation (i.e. each tick should give us extra 15 energy) or an additional source of free combo points (like +1 CP from each Rapture dot tick). So, this highlites how existing deep subtlety spec strongly requires additional +energy and +combo point generation improvements in the tree.
If someone wants to inspect params of simulation I can send files for all builds.

Note: my current vision of tank builds
<https://talents.turtlecraft.gg/rogue/0X26-2UZ105V-UE66> low gear with avoidance lack tank build
<https://talents.turtlecraft.gg/rogue/0X36IU-2UZ1051OC6> max TPS tank build
<https://talents.turtlecraft.gg/rogue/0X36U-2UZD051UC6> Max DPS tank build
<https://talents.turtlecraft.gg/rogue/0X38UV5-2UZ1021> Max CP per minute tank build
[https://talents.turtlecraft.gg/rogue/0X ... 1-UEU6II06](https://talents.turtlecraft.gg/rogue/0X-0UZ1041-UEU6II06) hemo build, the worst tank build

*Last edited by Bloodphobos on Sun Jan 07, 2024 8:49 pm, edited 243 times in total.*

## Post 35093 by Kiltzombie — 2023-02-17T17:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35093#p35093 | page 1 | era: pre-1.18.1 -->

Great ideas. I really think improved sap baseline should be number one with combo point issue tied or a close second.   smiling_turtle

## Post 35234 by Likaleo (Barrens Chat Casualty) — 2023-02-19T16:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35234#p35234 | page 1 | era: pre-1.18.1 -->

> 2) Poison damage formula should include rogue Attack Power, similar how it was implemented after the classic.

i think poison damage should include weapon spell damage. or there should be talent for it in assa tree instead of vigor.
that would open new meme spec with spell damage weapon rogue. but you cannot make it too strong or it will go pass combat

## Post 35251 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-19T20:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35251#p35251 | page 1 | era: pre-1.18.1 -->

> **Likaleo wrote: Sun Feb 19, 2023 4:46 pm**
> > 2) Poison damage formula should include rogue Attack Power, similar how it was implemented after the classic.
>
>   i think poison damage should include weapon spell damage. or there should be talent for it in assa tree instead of vigor.
>  that would open new meme spec with spell damage weapon rogue. but you cannot make it too strong or it will go pass combat

I think scaling the base damage on poisons would be pretty powerful, especially in the late game. My thought on making them more viable would be to have Improved Poisons split into two ranks (5% and 10%) instead of five, and add a new 3-rank talent "Lingering Poisons" that extends the duration of the debuff and (if charges stay) adds a 5/10/15% chance to not consume a charge. If charges are removed (honestly not opposed to this), then I'd say make the base duration of poison on your weapon shorter, and have this talent extend that duration as well.

## Post 35627 by Gantulga (Grandmaster of Forum PvP) — 2023-02-21T14:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35627#p35627 | page 1 | era: pre-1.18.1 -->

> **Kefke wrote: Sun Feb 19, 2023 8:08 pm**
> > **Likaleo wrote: Sun Feb 19, 2023 4:46 pm**
> > > 2) Poison damage formula should include rogue Attack Power, similar how it was implemented after the classic.
> >
> >   i think poison damage should include weapon spell damage. or there should be talent for it in assa tree instead of vigor.
> >  that would open new meme spec with spell damage weapon rogue. but you cannot make it too strong or it will go pass combat
>
>   I think scaling the base damage on poisons would be pretty powerful, especially in the late game. My thought on making them more viable would be to have Improved Poisons split into two ranks (5% and 10%) instead of five, and add a new 3-rank talent "Lingering Poisons" that extends the duration of the debuff and (if charges stay) adds a 5/10/15% chance to not consume a charge. If charges are removed (honestly not opposed to this), then I'd say make the base duration of poison on your weapon shorter, and have this talent extend that duration as well.

None of this matters as long as poisons block the WF totem buff.

## Post 35631 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-21T15:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35631#p35631 | page 1 | era: pre-1.18.1 -->

> **Gantulga wrote: Tue Feb 21, 2023 2:54 pm**
> > **Kefke wrote: Sun Feb 19, 2023 8:08 pm**
> > > **Likaleo wrote: Sun Feb 19, 2023 4:46 pm**
> > > i think poison damage should include weapon spell damage. or there should be talent for it in assa tree instead of vigor.
> > >  that would open new meme spec with spell damage weapon rogue. but you cannot make it too strong or it will go pass combat
> >
> >   I think scaling the base damage on poisons would be pretty powerful, especially in the late game. My thought on making them more viable would be to have Improved Poisons split into two ranks (5% and 10%) instead of five, and add a new 3-rank talent "Lingering Poisons" that extends the duration of the debuff and (if charges stay) adds a 5/10/15% chance to not consume a charge. If charges are removed (honestly not opposed to this), then I'd say make the base duration of poison on your weapon shorter, and have this talent extend that duration as well.
>
>  None of this matters as long as poisons block the WF totem buff.

Well, yeah, that goes without saying.

## Post 36498 by Kiltzombie — 2023-03-01T15:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36498#p36498 | page 1 | era: pre-1.18.1 -->

Well said! I love these ideas make the class better without breaking the game or making rogues OP.
LETS GO!

## Post 39039 by Timonius — 2023-03-25T17:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39039#p39039 | page 1 | era: pre-1.18.1 -->

Great post!
I woud love to see more build variety for the rogue. Viable builds that also focus on class fantasy. I've always thought the vanilla rogue was lacking that. Would be amazing!   turtle_in_love_head

## Post 39084 by Samsara (Barrens Chat Casualty) — 2023-03-26T03:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39084#p39084 | page 1 | era: pre-1.18.1 -->

My opinion on CP would be target bound CP, not character bound CP, but with a combat talent perk that makes it so every additional enemy that aggros you gives you 10% faster energy regen so if you fight 4 targets at once you have 30% faster energy regeneration, and each target has its own CPs (it can be useful to stack a bunch of CPs and keep them on hand to use multiple finishers quickly especially with slice and dice)

Also I think rogues should have dual wield unlocked from level 1.

I've also seen a few people complain that shift clicking pickpocket doesn't autoloot, this should be fixed.

When it comes to poisons, I would like to think outside the box and make it a perk of alchemy perhaps with a class quest to unlock poison recipes with interesting effects every 15-20 levels or so.

## Post 42389 by Bloodphobos — 2023-04-20T23:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42389#p42389 | page 1 | era: pre-1.18.1 -->

bump

## Post 43193 by Huma — 2023-04-26T12:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43193#p43193 | page 1 | era: pre-1.18.1 -->

TBC CP SYSTEM HIGH PRIO, its disgusting to play rogue like this, you cant CC second target   dead_turtle_head

## Post 43201 by Bayanni (Patch Note Conspiracy Theorist) — 2023-04-26T13:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43201#p43201 | page 1 | era: pre-1.18.1 -->

Make poisons scale with spellpower / nature damage you cowards!

## Post 44161 by Enceebe (Barrens Chat Casualty) — 2023-05-02T20:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44161#p44161 | page 1 | era: pre-1.18.1 -->

> **Bayanni wrote: Wed Apr 26, 2023 1:19 pm**
> Make poisons scale with spellpower / nature damage you cowards!

Can you hear it? The loud echoes from screems from the future? Where every high armor class is whining about rogues damage?  A beautifull song  turtle_in_love_head

## Post 44848 by Bloodphobos — 2023-05-07T21:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44848#p44848 | page 1 | era: pre-1.18.1 -->

bump

## Post 44852 by Hamalam (Barrens Chat Casualty) — 2023-05-07T21:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44852#p44852 | page 1 | era: pre-1.18.1 -->

Good ideas, especially the kick and front stab one

## Post 44889 by Reddguard — 2023-05-08T08:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44889#p44889 | page 1 | era: pre-1.18.1 -->

> **Samsara wrote: Sun Mar 26, 2023 3:20 am**
> My opinion on CP would be target bound CP, not character bound CP [...]

This. If CP would be character bound the rogue gameplay would feel similar to the warrior rage mechanic, where you accumulate rage on one mob to use it on the next mob; it would feel like a chase and not rogue-like. The rogue is all about meticulously preparing for the encounter and attacking at the right moment.

## Post 44989 by Enceebe (Barrens Chat Casualty) — 2023-05-08T20:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44989#p44989 | page 1 | era: pre-1.18.1 -->

I agree with many points

"4) Add Master Poisoner tier 5 talent with 3 points: Increases the Nature damage taken by any target you have poisoned by 2% per point and gives a 33% chance to reduce resist/immunity by target. It has 5/5 Vile poisons requirement. This is raid buff for Nature spells (mostly moonkin synergy)."

More like it would buff shamans damage.

Losing Combo points when switching target or it dies is by far the biggest problem. And an other is your finishing moves not hitting. It happens so often so having a talent along the lines of relentless strikes are needed for hit chance.
For example: Your finishing moves have 20% chance for every combopoint to hit your target.

relentless strikes is a really good example how a 6 row talent should look like for assasination or subtelty.
Your finishing moves have 20% chance for every combo point to unleash all proc effects on your main and offhand. It would work nice with poisons and bring a bit healthy chaos into gearing.

The 4th and 6th row talent should as impactful as blade flurry and adrenalin rush.

## Post 45534 by Trismegistos — 2023-05-11T22:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45534#p45534 | page 1 | era: pre-1.18.1 -->

I will start out by saying that I am a rogue tank, and have been tanking since the Scarlet Monastery (well before the acquisition of Flourish) and up to BWL in raid content. However, I have had plenty of experience playing rogue in a damage dealer role at high end raids during multiple expansions. I think rogue tanking on Turtle is overall in a good spot, but there are some issues.

A rogue tank is extremely strong at tanking melee attackers due to a high avoidance. With Flourish active I can easily keep myself at 75% or higher avoidance in T1-T2 equivalent gear. It could be even higher in a full avoidance gear set, but at the cost of health, spell resistances and threat stats. Evasion can then be used as a cooldown that will make the rogue completely unhittable by melee attacks, meaning that barring area threat issues, a rogue will be able to tank humongous amounts of melee mobs without taking any damage whatsoever for 15 seconds. With talents from the Combat tree, the cooldown of Evasion is 3.5 minutes, and while it does nothing to reduce the damage of spells (like Shield Wall does for warriors), it is a very potent mitigation cooldown with high uptime. Further, Riposte is usable by a tank rogue nearly on cooldown, meaning that targets will be disarmed for several seconds in a fight. This reduces the damage of any attacks that do get through the rogue's avoidance.

This does not mean that rogues are bad at tanking casters, however. Only warriors have any spell mitigation (from Defensive Stance and Shield Wall – the latter on a very limiting cooldown), meaning that rogues are pretty much in line with other tanks when it comes to tanking casters. With proper resistance gearing and/or the spell reflector trinkets made by engineering, it is fully within the rogue's capabilities to tank bosses like Baron Geddon and Shazzrah. Probably Ragnaros also, but I have yet to build up enough fire resistance to try.

The key limitations of a rogue tank are a lack of taunt, a weakness to stuns, very limited area of effect abilities for threat generation, and low armor. I believe having limitations is a good design philosophy, and I don't think it is necessary to adjust these; they are features of the class.

Overcoming these limitations at least in part is not impossible with the help of engineering: target dummies have an area taunt that can be used to peel mobs off the backline, grenades are great for area threat during fights (though your parry and dodge chance drop to 0% for the duration of the cast, so they need to be used wisely) and even bring in a bit of mitigation as the mobs are incapacitated for a few seconds.

Swapping targets may feel bad as a damage dealer rogue, but as a tank it is necessary during fights with multiple targets. Generally, I do not expect to get more than one or two combo points before I'm swapping targets, meaning that I will be using them exclusively to refresh Slice and Dice & Flourish, or to snap a two-second Kidney Shot to stop a runner so I can regain aggro. I believe this is good design, and while the suggestion seems to be pretty popular, I don't think we should be getting combo points that can be transferred to other targets. I don't think a tank rogue should have a "rotation" either, as tanking is often much more dynamic in nature than dealing damage.

However, there is one area where the rogue tank is severely lacking; there is no way to generate threat on demand. Warriors have several abilities that generate bonus threat, along with Taunt which will take them to the top position on threat instantly. Paladins and druids have similar tools, and shamans have their Earth Shock and hunters their Distracting Shot. The rogue has only Agitating Poison, and it is a random proc. Fights with tank swaps are much more difficult as a rogue, since picking up threat from another tank is not easily done – especially since one important threat source is Riposte procs, which do not occur when the rogue is not being attacked. While I do not believe a rogue should necessarily have a taunt mechanic, some way to generate threat would be most welcome. Here are a few ideas, ranked in the order from best to worst in my opinion:

 1) "Cruel Strike"
Exactly like Sinister Strike, but generates additional threat when striking the target from behind. It should benefit from the same talents as Sinister Strike, and do identical damage. This would thus replace Sinister Strike on a tank rogue's action bars as the primary combo point generator. While the rogue has threat, there is no effect. However, if the rogue loses threat, this can be used to quickly regain it – or build it up during a multi-tank fight when the rogue is not being attacked. This would in no way affect PvP balance.

 2) "Shiv"
Similar to what rogues had in The Burning Crusade; an offhand attack that costs 20 energy + 10 times the speed of your offhand (so 35 energy with a 1.5 speed weapon), generates a combo point and has a 100% chance to proc the poison on your offhand weapon. Forcing those Agitating Poison procs would generate a solid amount of threat, but I believe this ability would be lacking without Combat Potency from The Burning Crusade talents (20% chance to generate 15 energy on offhand attack). It would also greatly alter the balance of power in PvP, and as such should be heavily scrutinized.

 3) "Envenom"
Similar to what rogues had in The Burning Crusade, but with the later addition of increased poison procs for a few seconds after using it; a finisher that consumes as many Deadly Poison stacks as there are combo points, dealing nature damage and increasing the proc chance of poisons for one second per combo point. This would, however, pigeonhole the tank rogue into using Deadly Poison on at least one of their weapons, but if Shiv is also implemented, it could be used to generate both the stacks and the combo points needed for an Envenom cast, leaving the main hand for Agitating Poison (and while this does mean the rogue will not benefit from Windfury, it would seem to me that this is the case anyway, since relying on the offhand to proc poisons is not sufficient in most scenarios). This would also have a large effect on PvP and PvE damage dealing, and should thus be balanced accordingly, or not implemented at all.

None of the above suggestions counteract the lack of threat generation when tanking targets that are immune to nature damage, which should be seriously looked at in my opinion. Perhaps Agitating Poison should generate threat even on immune targets (though this does have some implications for fights where a mob is intentionally immune to damage, for example during a Divine Shield). Paladins likewise rely heavily on a single spell school for threat generation, but I'm not sure if there are any mobs that are resistant or immune to holy in the game.

I also think Agitating Poison should be made available at a much lower level than 60. It is possible to tank instances without it, but that makes the rogue very reliant on gear to deal more damage than the rest of the party. Getting gear often equates to getting levels, meaning that the rogue will outlevel the content they're able to tank, unless they're on the Slow and Steady challenge.

In their current state, the Subtlety build variations (with Ghostly Strike, Setup, Heightened Senses and/or Hemorrhage) seem to be severely lacking in threat, and I have not found them appealing. Too many talent points are wasted on improving Stealth and opener abilities, which are remarkably unnecessary as a tank rogue. I do however think Setup and Ghostly Strike have an attractive synergy, and would give the tank rogue more opportunities to use finishers at max combo points, even on otherwise "wasteful" abilities such as Expose Armor

To summarize; I like the challenges posed by playing a tank rogue, and don't think every tank should be given the exact same toolkit. However, I think too much of the tank rogue's toolkit comes from engineering (but then again this argument could be made for engineering in general being "too important" for high-end gameplay) and a lack of reliable threat can also be a problem in some situations. Perhaps the Venomous Totem from Blackwing Lair can help with this, but I have yet to see it drop.

For those that are curious, this is my current build:
<https://talents.turtlecraft.gg/rogue/0X36I-2UZD251UC6>

I have also been looking into a threat-focused build along these lines:
<https://talents.turtlecraft.gg/rogue/0X36IO-2UZ1051UC6>

## Post 50752 by Bloodphobos — 2023-06-20T19:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50752#p50752 | page 1 | era: pre-1.18.1 -->

Added new suggestions for assasinss: make general tree build tree poison oriented
Added new suggestions for subtlety: make general tree build bleed oriented
Added new suggestions for not popular mace and fists specs in combat

Added suggestion to move master of deception bonus into Camouflage
added sugeestion for improved Flourish
Added additional idea for improved ambush
updated suggestion about ghostly strike (add spell reduction and, and cleave effect)
updated suggestion for Setup (decrease ghosly strike CD on each dodge) and increase talent tied

## Post 53204 by Bloodphobos — 2023-07-12T19:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53204#p53204 | page 1 | era: pre-1.18.1 -->

updated info about making combat pvp viable:
 - Adrenaline buff grants immune to fear
 - Throwing weapon specialization refactor

bump

## Post 53987 by Cricketwhisker — 2023-07-18T21:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53987#p53987 | page 1 | era: pre-1.18.1 -->

Very clever changes. Like 'em a lot.

## Post 54588 by Czasku (Barrens Chat Casualty) — 2023-07-25T11:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54588#p54588 | page 1 | era: pre-1.18.1 -->

Grant Assassination talent which allows them to use Garrote without Stealth when the target is afflicted with Rupture and Deadly Poison.
Combat could wear Shields and Riposte deal extra Threat.
Subtlety have talent which makes Eviscerate reduce cooldown of Vanish by 3 seconds per combo point.

## Post 57276 by Thesmugsilence — 2023-08-14T13:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57276#p57276 | page 1 | era: pre-1.18.1 -->

> **Bloodphobos wrote: Wed Feb 15, 2023 12:18 am**
> *Original post was created in "Suggestions", but as I see nowadays such topics are landed in appropriate class topics, so I put my updated list here.*  Because we had a lot of discussion in discord and to prevent loose suggestions I want to duplicate everything there to be all in one.
>
>  Firstly, I want to describe only existing class issues without their proper implementation. I guess it can help the Turtle developer team in future where to look. Also, when someone wants to change something, each time please ask yourself  about each change: How will this impact soft leveling? How will this impact HC leveling? How will this impact PVE? How will this impact PVP? If you have 4 answers with positive/neutral/negative impact you will figure out how people will react to them.
>
>  Major class issues
>  1) Combo Points: they disappear if you switch the target, that means you always lose CP when you fight with 2+ targets, example: you hit one target and accumulate CP, then if you want to make a gouge (control) on 2nd target, you lose all CP on 1st target and have 1 CP on 2nd from gouge. Then you switch back target for 1st and again u lose CP from 2nd target… Or at least implement TBC mechanic.
>  2) No AOE: default rogue absolutely has no AOE. There is only one 2-target AOE in deep combat build with long CD.
>  3) Sap: default rogue has useless sap because it breaks stealth. Only subtlety rogues have talent to prevent stealth breaking in deep sub. This means that non deep sub rogues can’t control mobs in dungeons like mage sheep, priest shackle, warlock banish, druid hibernate etc, but they should, similar like they do that from TBC expansion.
>  4)  Poisons: rogue class first of all about poisons and what we have? Poisons as debuffs are good but very bad from a damage perspective. We see poison talents only in assassination spec but even with 10 points investment, their impact is still negligibly small and less them windfury.  Also, poisons can't be applied with windfury. If it's impossible to impement for some reasons, at least let's up poison damage to avoid story when some party totem buff is stonger when whole class feature.
>  5)  Agitating Poison  has too low threat impact. To allow take stable mob aggro in party with mages/warlocks/shamans in context when we don't have any taunt ability it should do about x5 times more threat as it does now.
>
>  Medium class issues
>  1) Assassination: Seal Fate PVE build works only with the end progress gear due to high critical rate dependency and is still weaker than any combat build. We need to do something with it, probably add some mechanic that adds critical rate to combo generate abilities when you have low crit, which will make SF viable on earlier and middle progresses. Also this tree has only one build type, which is based on crits. It would be cool to think about 2nd poison based build in this tree, we can take inspiration from post vanilla expansion where we got a lot of poison talents and abilities.
>  2) Subtlety: PVE subtlety build is weak because it has no extra energy generation or any extra combo point incomes in the tree during fight encounters. As we see this spec is about daggers because we have 5 points for Backstab+Ambush improvements on 1 tier talent and 3 points for Ambush on 3rd talent tier, for abilities that could be used only with daggers (we're not talking about hemorrhage cuz it's fine and need only extra damage tweak). Everyone who tries to leveling with BS/Ambush sees that this build has a big issue with lack of combo points: we always kill mobs before we can reach 5 CP before ~40 lvl and about 8-9 CP till 60 lvl, because Ambush and BS abilities cost 60 energy. Usually till 40 lvl we have 3-4 CP before mob dies and because we lose all CP on target switching all finishers are useless and this is a big spec design gap. In scope of leveling this issue will disappear if we implement self sticky Combo Points (they do not disappear if mob die or if we change the target), but lack of CP income and energy for their generation still will take place in the dungeon and raids. So, we need to think about how to improve PVE subtlety build to get more combo points/energy generation with Backstab generator and more damage with hemorrhage generator during fights.
>  3) in vanilla rogue has issue with survivibility in pvp and pve due to low HP pool, no any base damage reductuon talents. All they have is Evasion which does not protect from spell damage, AOE effects, range shots and has big CD.
>
>  Minor class issues
>  1) Assassination: the final assassination Vigor talent is not concurrent.
>  2) Subtlety: final subtlety Premeditation talent is not concurrent.
>  3) Throw: this is a properly rogue class ability that is not opened in vanilla. I think it is a rogue ability because rogue has it from the start, also in next expansions Blizzard added “Deadly Throw” and “Shuriken Toss” <https://www.wowhead.com/spell=114014/shuriken-toss>. For now Throw has low damage, its weapon can not be repaired, it has no improvement talents, drop tables have no really cool Throw items in comparison to bows, crossbows, guns. So, I guess we need to design some new throw items with great stats on it and add the possibility to repair it or prevent its breakage.
>  4) Rogue role as class is useless in the raid: currently there is no exceptional rogue utility in the raid. I.e. warrior has AP shout buff, "free" sunder armor during tanking, possibility to instantly become a lightweight temporal OT; mage has food/water and buffs; warlock has healthstones, soulstones, blood pact, curses; paladin has powerful multi buffs, etc. What has rogue? Nothing! Expose armor can not be counted, because it is not free and if a rogue uses it by CD it reduces general damage (main class destination). In future updates to fix this gap, rogues got +8% extra spell damage debuff from Master Poisoner, +4% extra physical damage from Savage Combat and +30% extra bleed debuff from Hemorrhage ability. So all 3 rogue specs got their unique useful raid buff.
>  5) Backstab: add front hitting by default, but with appropriate penalty, like it was originally intended in WOW Alpha version or like it is implemented in modern retail wow. We get this ability on 4th level and it has to be an alternative to Sinister Strike leveling. Because it was impossible to level up or pvp (enemy easy kites you with BS) in future expansions blizzard added to BS ability front hit by default. Currently in Turtle we have the possibility of strafe-dance but it's a really awkward approach and should be improved (let's save our mouses)
>  [link on modern implementation](https://www.wowhead.com/spell=53/backstab) *Damage increased by 20% when you are behind your target*
>  [link on alpha implementation](http://web.archive.org/web/20040208022958/http://www.gotwow.net/spelldb.html) *Increases melee damage by 7, but only if attacking from behind*
>
>  Now, when main problem concepts are highlighted, let's take a look at direct suggestions. In next proposal I don't want to change existing "popular" combat (sword/dagger), I just want to improve weak builds like SF at early gear progress or BS+Ambush / hemorrhage deep Subtlety build and make more different common class leveling, so:
>
>
>
>  General suggestions
>  1) make Combo Points (CP) not applicable to current target and stick them to player: allow target switching without CP loss. Stop CP loss when mob die (you still lose CP if you are not in combat for 10 seconds). Self CP is a modern mechanic in the wow.
>  2) Blade Flurry make it baseline (learned at ~30 lvl), but without 20% haste bonus (20% bonus will be added by new "Improved Blade Flurry" combat talent). Also reduces CD to 45-60 seconds. We want this change to allow all rogue builds to have at least one AOE spell.
>  3) Sap ability should be viable in all specs, so let's move "Improved Sap" talent into 1st tier near the "Master of Deception" talent or even make TBC implementation (sap always returns to stealth without any talents and "Improved Sap" talent instead adds +10 meters for sap range, check "Dirty Tricks" TBC talent). Without this change Sap in vanilla absolutely is not a useful ability when you are not a Subtlety spec rogue.
>  4) Add [Cheat Death](https://www.wowhead.com/tbc/spell=31230/cheat-death) ability as a base ability with 3 minutes CD. Glass cannon class should have some base survival ability which will slightly help with enemy spells, AOE and range damage in raids and pvp. Cheat death activation also removes all enemy dots effects. We want this addition because original cheat death without Cloak of Shadow is useless vs multi dot based enemy like warlock or shadow priest.
>  5) Ambush ability adds +2 Combo Points instead of 1.
>  6) update Hemorrhage ability: does 155% damage if a dagger is equipped (make equal dmg when rogue uses dagger in mh). Now Hemorrhage debuff increases only bleeding damage for 30% and consumes debuff charges only for extra bleed damage impact. This will add a unique rogue buff in raids and will be useful for druid bleed finishers.
>  7) Poisons: Let rogue poisons be applied with Windfury Totem effect. WF is too strong and in vanilla it forces not to use poisons in PVE (in next patches rogue could use poisons with WF)
>  8) Add the possibility to repair thrown weapons or make them undestroyable. Add more thrown weapons in the raid loot tables and create some cool "rogue only" shuriken thrown weapons similar to other class specific items like relic, idol, etc.
>  9) Flourish let's make it available from 16 lvl and adjust buff formula: Ability bonus cannot exceed 80% of total avoidance (dodge+parry). So, If rogue already has 79% avoidance Flourish will add only 1% extra parry bonus. This limit should be implemented only with "Improved Flourish" and "Glancing blow defense''. See subtlety suggestions.
>  10) Add Surprise Attack a new ability with 10 seconds CD with taunt effect.
>  11) Make Deadly Throw interruption effect as baseline.
>  12) Allow to use Slice and Dice without stealth breaking (makes good encounter start in PVE with "Premeditation" or after vanish)
>  13) Reduce cooldown of Sprint, Evasion, Blind, Vanish abilities from 5 minutes -> 3m, and Preparation 10 minutes -> 5 like it was done in TBC. We want to reduce strong class CD dependency.
>  14) Add Axe mastery for rogue. Update appropriate talent improvement in combat spec.
>  15) Allow Backstab ability hit in face without strafe-dance by default. If it is not very difficult it would be also good to implement it in the same way as in modern wow: normal damage for front hit and some bonus (let say 5-10%) from behind to encourage using backside mechanics. Look at [modern ability description](https://www.wowhead.com/spell=53/backstab).
>  16) Kick ability should cost less energy, because 25 energy is equal to 2.5 seconds of energy accumulation or -25% energy income if we kick target by CD which is too expensive in comparison to opponents like warrior (main rogue competitor). So Kick should be cheaper (10 energy?) or have a slightly better interruption mechanic, like add +1CP on success interruption.
>  17) Eviscerate should have better attack power scaling.
>  18) Stop sharing Thistle Tea cooldown with other important items like warlock Healthstone.
>  19) add small drop chances for daggers in all Junkboxes from pickpocket. We already have such mechanic with "Gut Ripper'' from "Sturdy Junkbox" and I suggest extending this approach for all Junkbox quality with appropriate dagger quality. We need it because all dagger based rogue builds are dependent on dagger weapon and players during leveling always encounter lack of daggers because they have limited pool of available daggers for current level, when other builds have pools of swords, maces and fist weapons and don't have such issue. To fix this unfair situation let's additionally include "only rogue" or "soulbound" dagger loot in pickpocketable junk boxes throughout 1-60 leveling.
>
>
>  Assassination suggestions (main idea: add some damage by poisons to make this build more viable in PVE in earlier progress. Make "Vigor" interesting):
>  1) Remorseless Attacks: make buff duration +20 seconds per point (40 seconds at 2/2). 20 seconds very often is not enough to get another mob after a previous fight, especially if you need to eat or use bandage after last fight.
>  2) Improved Expose Armor talent also grants 50% per point (100% if 2/2) not to spend Combo Points. In synergy with "Relentless Strike" and 5 CP it will be free to use and allow rogues to cast Expose Armor buff without losing damage potential.
>  3) Improved Poisons talent 5/5 adds 25% (was 10%) apply chance.
>  4) Vile Poisons talent 5/5 adds 50% (was 20%) poison damage.
>  5) Add Toxic Сourage new tier 5 talent: reduces CD of Cold Blood ability for 3 seconds each time when you apply on target poison effect. This talent requires 5/5 investment in "Vile Poisons" and 1/1 in "Cold Blood".
>  6) Add Toxic Atmosphere new tier 5 talent with 3 points: Increases the Nature damage taken by any target you have poisoned by 2% per point and gives all poisons chance per hit to create a cloud of poison in an 5 yard radius around the Rogue for 10 seconds. I suggest reusing existing poisonous puddle spell from the Diseased Ghoul mob in Scholomance dungeon.
>  7) Add Master Poisoner new tier 6 talent with 5 points: when you apply any poison on target with 20% (100% when 5/5) you additionally apply an extra instant poison hit. You also have a 20% (100% if 5/5) chance to reduce enemy poison resistance/immunity.
>  8) Add Mutilate new tier 6 talent with 1 point: add a new Mutilate ability: Instantly attacks the target with both daggers. The target takes 10% more damage per your stack of Deadly Poison. Awards 2 combo points. Damage bonus could be balanced. This talent requires 5/5 investment in "Master Poisoner".
>  9) Vigor talent adds 20 (was 10) energy and add new passive ability:
>  Option "A: your Deadly poison tick (each 3 seconds) with maximum stacks (5) starts giving rogue additional 3-10 energy (depending on other improvements).
>  Option "B: Vigor adds 20 energy and +15-25% (depending on other improvements) to energy generation.
>
>  Combat suggestions (main idea: add Axe support, and Throw improvements for the build, make getting riposte talent more cheap on leveling, bring PVP part in combat):
>  1) Replace Blade Flurry (we want it as baseline without 20% bonus) with "Improved Blade Flurry" talent that will increase attack speed by +20%. We want this change to allow all rogue builds to have at least one AOE spell
>  2) Improved Sprint buff also removes all impairing effects each 3 seconds.
>  3) Throwing weapon specialization current implementation is not viable and investment in talent is just a waste of 2 talent points.  So, I suggest making Deadly Throw interruption as baseline and probably removing extra range of throw abilities. Instead it will add Deadly throw ability 50% (100% 2/2) chance to immobilize target for 2 seconds and in addition it will increase +50% (+100% if 2/2) “Throw” damage and give Throw ability 50% (100% if 2/2) chance to add 20% dodge buff for 8 sec if rogue makes thow hit not being in combat.
>  4) Riposte also generates additional threat.
>  5) Mace Specialization move existing mace skills bonus to weapon expertise talent and add new bonus: Increases the damage dealt by your critical strike hits with maces by 1% (5% when 5/5) and your attacks with maces now ignore up to 3% (15% when 5/5) of your opponent's armor. We don't remove passive stun bonus cuz it will destroy pvp/tanking oriented builds. The main aim is to make mace weapons viable and concurrent with swords.
>  6) Close Quarters Combat redesign talent to apply additional bonus for fist weapons, like 7.5% instead of 5% for critical chance or 5% chance to restore some energy when you hit with fist weapons. The main aim is to make fist weapons viable and concurrent with swords.
>  7) Sword Specialization refactor to apply in addition the same bonus to Axe.
>  8) Adrenaline effect also grants immune to fear and stun effects (possibility to make combat viable in pvp).
>
>  Subtlety suggestions (main idea: create a viable dagger PVE/PVP build based on "Ambush" and "Backstab" abilities. Add "Setup" leveling and tanking builds. Make "Premeditation" interesting. Make Ambush more ultimate ability similar to Pyroblast, Soul Fire, Execute). Make "Feint" a viable ability.
>  1) Master of Deception make it 3 maximum points to invest. 1 -> +2, 2-> +4, 3 points -> +5 effective stealth level. We need this change to allow pick improved ambush and  “Improved Sap”.
>  2) Add Improved Flourish a new talent with 3 max points to invest in tier 1. Talent increases the duration of your 'Flourish' ability by 15% (45% when 3/3) and reduces the duration of stun effects on rogue by 10% (30% when 3/3) when 'Flourish' is active. This talent is a prerequisite for 'Glancing Blow Defense'."
>  3) Add Glancing blow defense new tier 2 talent with 5 max points to invest: when Flourish is active the rogue additionally receives reduced magic damage by 8% (40% when 5/5) of total avoidance and reduced physical damage by 13% (65% when 5/5) of total avoidance stats, where avoidance is a sum of character dodge and parry stats. This talent requires 3/3 investment in Improved Flourish. Example: if rogue gear has total 50% avoidance (let set 40% dodge and 10% parry) with 5/5 Glancing blow defense you will get 20% spell damage reduction and 32.5% physical damage reduction while flourish is active.
>  4) Sleight of hand. Additionally Feint ability hit after 10 seconds brings rogue second breath which generate rogue 15 (30 if 2/2) energy. This brings sense to pick this talent and to use feint ability in PVE rotations.
>  5) Elusiveness additionally reduces taken spell damage by 15% (30 if 2/2) and adds 15% (30 if 2/2) to dodge (evade) enemy shots when you have activated Evasion ability.
>  6) Setup 15% -> 33% (100% if 3/3). Each proc also reduces CD of Ghostly Strike by 1 sec. This effect cannot occur more than once per second. We want to revive rogue tanking based on setup talent like it was initially designed in the wow alpha version.
>  7) Improved Sap each point reduces sap energy cost by 20 energy (-40 if 2/2). Move this talent in tier 1 to allow other specs to use playable Sap.
>  Option “B” replace this talent with TBC “Dirty Tricks“ <https://tbc.wowhead.com/spell=14076/dirty-tricks> and make Sap always have a 100% chance not to break stealth.
>  8) update Ghostly Strike ability: does 190% damage if a dagger is equipped (make equal damage when rogue uses dagger in MH). In addition to existing effects, "Ghostly Strike" buff also grants 15% to resist spell damage and evade range shot. We want to create Ghostly Strike + Setup based subtlety tank build. If we don’t get baseline Blade Flurry, let’s imbue Ghostly Strike with cleave effect to allow pick mob packs on tanking.
>  9) Improved Ambush now has 2 max points to invest and gives +25% critical chance per point and
>  idea1 add new talent Shadow Proficiency: now your Ambush deals shadow damage instead of physical. This talent requires 2/2 investment in Improved Ambush.
>  idea2 do not create additional talent and just add 25% ignore armor to ability per talent point (50% armor ignored in total when 2/2).
>  Without permanent critical strike and some armor penetration this ability is not worth spending 60 energy even to hit usual mobs after 40+ lvl during leveling.
>  10) Deadliness: talent also generates combo points:
>  idea1: adds +1 combo point from "Rupture" bleed tick. This effect cannot occur more than once every 20 seconds (5 seconds if 5/5, each investment reduce timer for 5 seconds).
>  idea2: enrich Deadliness with mechanic from Honor Among Thieves talent [https://www.wowhead.com/wotlk/spell=516 ... ng-thieves](https://www.wowhead.com/wotlk/spell=51698/honor-among-thieves)
>  11) Slaughter from the Shadows new tier 6 talent with 3(5) max points to invest: reduces the energy cost of your Backstab and Ambush abilities by 5(4) per talent and increases hemorrhage damage by 5(4)% . This talent requires 5/5 investment in Deadliness.
>  12) Premeditation reduces CD to 20-30 seconds, this will make it very useful on leveling and on dungeon trash mobs. Then to make it really viable in PVE/raids let's add one of next passive bonus improvements:
>  idea1: adds new passive ability: each successful Backstab hit reduces rogue vanish CD for 30 seconds. In that case we make unpopular [Elusiveness] and T1 vanish set bonuses very interesting and bring the ability to enter the stealth in combat each 7 Backstabs which is equal 54 seconds by default or ~40 seconds with tea+AQ trinket or full Naxx set.
>  idea2: adds possibility to "Enter the shadow" aka Shadow Dance for x seconds. To have the possibility to activate this ability, a rogue should stay in combat for some period of time or should land a series of hits with a CP generating ability (2xBS or 1.1x hemo). This "Enter the shadow" buff should not stop auto attacks and just allow the player to use all abilities (or at least premeditation+ambush) without stealth. Let's rename the Premeditation talent name (not the spell) on "Enter the shadow" or "Shadow Dance".
>  idea3: Each time when you hit let's say 3 Backstabs in a row your next Backstab will be Ambush hit instead. If you leave combat this counter will be reset. This Ambush must get all ability bonuses, i.e. Initiative and Improved Ambush.
>  13) Initiative talent has 33% (was 25%) proc per point. This update makes more reliable Ambush+Premeditation opener especially in PVP <https://www.wowhead.com/wotlk/spell=13976/initiative>
>
>
>  Tanking suggestions
>  After last big update in 2022 the Turtle team added rogues possibility to tank dungeons (dodge gear set) and raids (requires 100% avoidance on strong bosses without strong spell damage). I guess this idea has the right to live, but to be more viable we MUST to add non/low cd AOE to allow rogue-tank pick up packs with a few mobs in normal dungeons and also good to have some spell damage reduction or survive and taunt abilities for raid tanking. ALso I don't like adea with full avoidance. Lets prevent 100% avoidance but give some damage reduction which is based on avoidance stats. So, rogues won't be immune to melee attacks but they can survive during strong melee critical hits due reduced incoming damage.
>  1) We need some reliable AOE ability to have the ability to pull packs of 3+ mobs. I see two ways:
>  a) make Blade Flurry base line with 45-60 seconds CD
>  b) add Riposte and Ghostly Strike cleave effect.
>  b) add "Fan of Poisoned Knifes" ability to allow aggro poisons AOE hits <https://www.wowhead.com/wotlk/spell=51723/fan-of-knives>. I see this ability with 5 seconds CD, it does very low or even zero physical damage and applies with 100% proc rate only poisons that have damage effects, it generates 0 (1) CP and costs 15 (35) energy because after FoPK cast we need to have not less than 65 energy for Ghostly strike (40) and flourish finish with 1 CP (25), otherwise without avoidance buffs rogue can just die after FoPK cast. We don't want to get AOE ability that adds possibility to apply crippling poison in range cuz it will impact on PVP.
>  2) Please check my suggestion for "Improved Flourish", "Glancing blow defense" and "Ghostly Strike" talents described in this post. Because rogue has no any damage reduction talent in vanilla, low armor and base HP pool is 30% less than any other tank, we need such changes to have some protection against casters, range shoots and physical mekee critical hits in raids especially after 100% melee avoidance will be nerfed and not achievable.
>  4) Each real tank should have a taunt-like ability to have the possibility of taking the boss from another tank or just for saving someone on over agro. As a taunt candidate ability I see:
>  a) Throwing weapon specialization in addition to my previous suggestion also grants "Throw" ability 50% (100% if 2/2) chance to apply taunt effect on target.
>  b) Surprise Attack let's make Surprise Attack ability with aggro/taunt effect.
>  c) Feint with updated or new talent grants taunt effect.
>  d) Shiv (was added in TBC) which can taunt targets if your weapon has Agitating Poison.
>  e) Ghostly Strike also could be enriched with taunt, but I'd say this is the worst option.
>  5) Also if we have real tank plans for rogue we need some alternative of warrior “Shield wall” for hard PVE encounters. That's why I suggest updating existing  Elusiveness check talent description and additionally and I’d take a loot at Cheat Death spell to allow rogue survive when something went wrong in the raid.
>  <https://www.wowhead.com/spell=31230/cheat-death>
>  Cheat Death could be taken just as an idea and reworked in scope of proc frequency, buff time and damage percent reduction. I think Cheat Death is very good from a lore/design perspective, because rogue is a "glass cannon" class (it has no armor or damage reduction abilities) and it will give a good opportunity to survive mortal hits during tanking.
>  6) Agitating Poison should generate threat even if the target is immune to poisons, otherwise rogue can't tank Elementals, Mechanics and other units who are immune to poisons. Also Agitating Poison should be available from low levels, let say right when you get poisons, to make viable tanking in low level dungeons.
>  7) Setup 15% -> 33% (100% if 3/3). Each proc also reduces CD of Ghostly Strike by 1 sec. This effect cannot occur more than once per second. We want to revive rogue tanking based on setup talent like it was initially designed in the wow alpha version.
>
>  Poison improve suggestions
>  1) Let rogue poisons be applied simultaneously with the Windfury Totem effect. WF is too strong and in vanilla it forces not to use potions on main hand weapons in PVE. If it's impossible, let's up poison damage to be equal to WF damage impact.
>  2) Poison damage formula should include rogue Attack Power, similar to how it was implemented after the classic.
>  3) Deadly Poison let's add some talent in assassination to get: after 5 stacks each proc also applies some Instant poison damage. Similar to how it works nowadays <https://www.wowhead.com/spell=2823/deadly-poison>  (Coats your weapons with a Lethal Poison that lasts for 1 hour. Each strike has a 30% chance to poison the enemy for [(6.3% of Attack power) * 12 / 2] Nature damage over 12 sec. Subsequent poison applications will instantly deal (4.5% of Attack power) Nature damage.) Check "Master Poisoner" suggestion.
>  4) Let's add some talent in assassination to penetrate poison immunity and some raid buff for poison and Nature spells in general. Check "Toxic Atmosphere" .
>  5) Add Mutilate ability: Instantly attacks the target with both daggers. The target takes 10% more damage per your stack of Deadly Poison. Awards 2 combo points. Damage bonus could be balanced.
>  6) Add Envenom as trainer spell or tier 6 talent with 1 point. Adds Envenom ability that does not consume deadly poison stacks.
>  7) Make poisons scale with spell power. This will allow the creation of a spell power geared fan assassin build, like it was in TBC.
>
>  Improve rogue quality of life suggestions
>  1) Ability to remove poisons from weapon (right click on poison buff or special rogue item, aka "POISON CLEANER T-3000")
>  2) Add poison reagents to field repair bot
>  3) Reduce cooldown of Sprint, Evasion, Blind, Vanish abilities from 5 minutes -> 3m, and Preparation 10 minutes -> 5 like it was done in TBC.
>
>
>  Other less rogue related suggestions
>  1) Add rogue Insignia of the Horde possibility to remove stuns.
>  2) Remove engineering skill requirements from Iron Grenade activation or create "Goblin Thorium Grenade" alternative which will be slightly expensive and can by used by non-engineers. This will allow engineers earn some extra money from profession by selling consumable Iron Grenade (similar like elixirs in alchemy) and will make profession less non-alternatively required for PVP and will allow rogues to tank better and do AOE damage, cuz now non-engineers will get one more extra AOE with 1 min CD. P.S. Engineer will still have monopoly for other cool AOE like Thorium Granades, Goblin Sapper Charge, mana-burn bombs...
>  3) Add some unique enchants for Leatherworkers. They already have a bunch of armory kits and they are absolutely useless. Let's add some new consumable LW enchants like Rugged Enchanted Agility Kit, Rugged Enchanted Strength Kit, Rugged Enchanted Intelect Kit, Rugged Enchanted Spirit Kit with appropriate stat.
>  4) Add new Telabim food with 15 agility buff
>  5) Black Moras dungeon has only 1 useful drop item (chest) for rogues. let's add something additional in loot tables.
>  6) Increase run buff speed of goblin [Exit Strategy] or remove daze effect. Currently this is useless almost ability in pvp/pve/leveling, so let's make it usable at least as additional "sprint".
>  7) create new quest chains for blue T0.5 items to allow upgrade them on epic quality in new 1.17 dungeons/raids.
>  8) Add some casual trinkets to Survival, like add mount speed, swim speed, extra gold from mob loot, extra cooking/fishing skills
>
>  Known rogue bugs
>  1) Improved Sap sill works badly  in pve - when you sap mob you lose you stealth and if there are two mobs - 2nd mob start gets aggro and starts hitting you in stealth
>  2) Vile Poisons talent does not add any additional poison dispel resist
>  3) Wound Poisons do not stack from two weapons. Instead of getting twice faster stack they overwrite each other
>  4) Improved Slice and Dice work for Flourish as well, but there is no any description about it
>  5) you can infinity use range finishers on mob after it was avoided
>
>  PVE Build simulation numbers
>  To bring some preliminary clarity about current rogue PVE build balance numbers, I made some simulations in "Simonize's Classic Rogue Sheet" for average rogue in t2 set with aproximate 60 seconds vs boss fight:
>  1) dagger combat pve build - 832.3 conventional DPS <https://talents.turtlecraft.gg/rogue/0UF6O-K350CZ10E6-5>
>  2) sword combat pve build - 801.2 conventional DPS <https://talents.turtlecraft.gg/rogue/0XF6U-K65CC51UF6>
>  3) SF dagger pve build - 706.8 conventional DPS <https://talents.turtlecraft.gg/rogue/0XF6UV5-K350C51>
>  4) SF hemorrhage pve build - 662.7 conventional DPS <https://talents.turtlecraft.gg/rogue/0XF6UV5-0-58X60I06>
>  5) Backstab premeditation build (actually it's just a BS+SnD spam, cuz you don't have energy for anything else) - 637.2 conventional DPS with BS <https://talents.turtlecraft.gg/rogue/0UC-0X5-52X30K6B6> and 615 with hemorrhage <https://talents.turtlecraft.gg/rogue/0UF-0U5-52X62I8B6>
>
>  in percentages it looks next
>  combat daggers 100%, as a template, then
>  combat swords -3.7%
>  SF daggers -15%
>  SF hemo -21,5%
>  Premeditation BS -23.4%, Premeditation hemo -26%
>
>  According to simulation, if we want to have "5) BS premeditation pve build" somewhere between combat dagger and sword builds, we need to have +75% energy generation (i.e. each tick should give us extra 15 energy) or an additional source of free combo points (like +1 CP from each Rapture dot tick). So, this highlites how existing deep subtlety spec strongly requires additional +energy and +combo point generation improvements in the tree.
>  If someone wants to inspect params of simulation I can send files for all builds.
>
>
>  Note: my current vision of tank builds
>  <https://talents.turtlecraft.gg/rogue/0X26-2UZ105V-UE66> low gear with avoidance lack tank build
>  <https://talents.turtlecraft.gg/rogue/0X36IU-2UZ1051OC6> max TPS tank build
>  <https://talents.turtlecraft.gg/rogue/0X36U-2UZD051UC6> Max DPS tank build
>  <https://talents.turtlecraft.gg/rogue/0X38UV5-2UZ1021> Max CP per minute tank build
>  [https://talents.turtlecraft.gg/rogue/0X ... 1-UEU6II06](https://talents.turtlecraft.gg/rogue/0X-0UZ1041-UEU6II06) hemo build, the worst tank build

Having looked through this and hearing the arguements for it I would point out some critical pain points I feel the need to be devil's advocate for.

Rogue Tanking 1. Rogue tanking is a meme. The idea of rogue tanks was only viable because of how broken we were at the begining of the game so much so we could solo or duo alot of bosses *At level*. If we want to legitimize rogue tanking in some fashion, and break the core concept it was started on, we must make a sacrifice for it somewhere.

 1.a. If you want rogue to have competitive AoE, they can't have BiS single target at the same time, similar to threat. If we turn this into world of rogue craft that kills the game. I would suggest putting in a talent reasonably deep, say 21-26 points in to a tree, that you get aoe on your abilities, but 50% damage reduction *at least* and big threat. I should not be able to pick up prep or cold blood as a rogue tank. Its too overpowered straight up.

 1.b. If we want to remain kings of single target damage, let's not diversify into aoe. If you want to AoE grind, play mage. Instead let's look at tools to add more than big pp dps to a group as mentioned; Sap is broken in pve and needs love. Some extra CC tools or expansion of 'soft' cc tools pre combat would be good.

 1.c.. If you want subtly to be a tank spec, an early one at that, make it cost something. even if its two sets of first and second row talents. all it would need is a Taunt and a single low damage medium energy cost AoE ability. Fan of Knives on a 60 energy cost with high threat adds combo point if we move to the CP on self system. put a 5 talent point first row for threat generation, then a 1 pointer for FoK and attached 2-3 pointer to boost it on second row. This makes it expensive enough you can't get CB as well as BF/AR etc to go with prep and premed.

In general in the early levels, a group of 3-4 rogues and a druid healer can solo most at level content without too much trouble. Conventional meta keeps you from getting groups to do so and the social difficulty of having to farm a dungeon so many times for the drops we want. In this case, adding low level rogue tank options is just trying to get people to group with you more readily for easier gear than it is a 'good' idea for the class as a whole or this server.

QoL 2. Rogue QoL I feel is more dependent on gear and groups than it is class features. Yes combo point management would be nice. Yes lower CD's would be cool. Yes, we love being over powered and dangerous. Our class is hands down the most powerful in vanilla. We do not need to make it stronger or 'easier' to play in my opinion. Face stabbing is player skill and ping based, mostly, and should remain a skill gate rather than a default function since leveling and playing a dagger rogue is a good way to gatekeep people from just rolling rogue and as mentioned turning it into world of rogue craft.

 2.a. Rather than lowering CD's or adjusting the 'base' CD, reset and proc mechanics with both itemization and talents are more appropriate. Want your sprint back up? Kill stuff to proc resets or reduce CD. Want evasion back up? proc on sucessful dodges or a tank mechanic skill or as part of a 'set' bonus in rogue specific tank gear (hell make that what rogue T1 is about other than just looking bad ass).

 2.b. Windfury, is a trade for poison. If you think we need windfury and poison to be competitive? You are straight up wrong. Dagger rogue backstab procs on WF is and always has been busted. I see no reason to give us more disgusting amounts of dps than this already does.

 2.c. Dagger Leveling QoL, is so easy to fix by just adding more lower level and mid level dagger options, some more itemization in the mid game, and buffing some crafting gear options if you can't get dungeon groups fast enough for your preference. That is 100% the only struggle that I see with dagger rogue currently.

 2.d. Non-Sword/dagger QoL. Similarly fixed with itemization. Give an Axe specialization bleed proc talent or roll it into sword/mace. Fist weapons could use more itemization during leveling as well. In general I think its still kinda sad as a rogue I will end up using the same BiS leveling itemization of Fang pants, westfall chest(if alliance), perfect deviate belt, and cruelbarb/meteor shard until SM quest reward. The defias mask off smite is nice, and will last a very very long time. Though I think some mid level break point gear in wrist slot is needed and 'off pieces' as such need introduction to the game to help us sort things out.

 2.e. Engineering is not a rogue class feature; as much as it is a great profession, it should remain a profession and not a free damage consume for pvp/pve aoe. It's a tool kit option, not a feature.

Almost all the problems I see in this area are a result of early level itemization and the strugglebus of getting good gear outside of waiting a very long time for dungeons. I challenge anyone who thinks otherwise to tell me why I would wait for groups in WC/Deadmines/SFK for blue gear if the replacements for it were not so few and far between?

TBC Skills and talents 3.  Adding muta would be a fundamental mistake, even if it is a ass tree capstone, as would be most of the other suggestions I'm seeing in a similar vein. This is a vanilla server, and fundamentally should remain so. Every suggestion I'm seeing in this vein is basically asking for more power without real cost.

 3.a Keep it simple and maintain the power curve for our class vs others. Other classes don't need their TBC shit save paladin because otherwise it was unplayably bad outside of healing and being a buff bot.

 3.b QoL and other functions would as prior make us too broken, especially in a vanilla environment, Poisons are cheap, charges on them are fine, and if you are poor as a rogue your doing it wrong.

If you want a TBC server, make a TBC server and go else where. Leave this one alone.

Good idea's  4. Kick lower energy cost is huge, even if it was slapped on the improved kick talent.
 4.a CP on self would be huge.
 4.b. junkboxes in general getting a little boost of rogue specific love

Of the ideas presented, the only big ones I agree with in total are Kick energy cost, Combo Points transfer targets, and junkboxes being a dagger rogue focus. It's a subtly appropriate change, doesn't really change rogue economics, and puts us out there to engage in more content in general outside of dungeons.

Bad Idea's  Don't just lower CD's and buff our shit out of hand when we're already the best class in the game nerd!

I may be playing Devils advocate here, but legitimately we do not need to be stronger in vanilla, maybe some more itemization options early game and some little QoL stuff that was left over because of technological limits but thats it.

My Idea;
Rather than changing class features, I want to see us rogues engaging in more about what our class is supposed to do as a theme. Ironically leading me to suggest what I hate doing most; Questing. We need more rogue friendly and appropriate quests to do shit and rewarded with things that we would like as rogues. Rather than straight up gear, reward recipes for professions appropriate to us similar to how the deviate scale belt is our BIS belt into the late 40's.

Zone Control After 10-20, start a series of quest chains starting at level 21 to get recipe rewards for doing rogue shit in various zones in the game to A: Encourage travel B: pvp and C: Non-standard rogue dungeons. Set some break points and let the quests go into the 40 bracket so we're going into pre-raid bis dungeons as appropriate.

I think they should be tied in part to faction oriented tasks but just as easily handled with Ravenholdt etc. Play with the encroahment of Ashenvale, Hillsbrad, I don't think STV needs any encouragement, and even more far and away places like Desolace. Let's make some of the contested zones, Contested.

We can settle things around 3 key themes, Assasination of enemy commanders, Steal stuff, and PvP. If you are flagged the 'zone' outpost or w.e has a reachable, non-interfering with the normal quest hub rogue camp near by, run by faction intelligence equivilant, the commander will give you a hour long zone buff if you talk with him. A non-killable Lt./Sgt, who gives you rogue based zone quests. 1- Assasinate the other factions commander with say a 5-15 minute respawn you do with a group of other rogues. 2- Stealth in and pickpocket/sap loot chests in around enemy base. 3. Kill other rogues or rogue outpost guards(incase dead zone). The rewards should mostly be off piece gear or recipes for them in LW etc. Let's say you need Lucky Charms or something pick pocketed or junkbox looted as part of their crafting process just to make it interesting on top of the usual leather.

Wrist, Glove, boot, shoulder, and belt. Maybe some capstone for the zone quest for jewelry or engineering based recipe for trinkets? or a Dagger depending on zone etc. Also disguises/poisons/alchemy?

It is gear and cool shit, not ability rebalance that I think will make rogue have a better experience. Give me something more than Deadmines/WC to do from 15-25, and more than Gnomer to SM in my 30-40 range for my BiS till 50+ gear. Make me want to do something other than dungeon queue because the quest loot is hot ass for me as a rogue unless I pick up LW to make even passable gear after level 30. Make it worth my time to farm the equivilant of 10 perfect deviate scales for my BiS belt in WC to 40+. Make something other than just engineering a viable profession option, like poison bombs with alchemy AND poison skill required to make them. Let me pick pocket stuff to make rogue LW gear that isn't replaced with clownsuit gear from dungeons and looks cool to stab people in. Add more Blacksmithing daggers, swords, and shit so I'm not just farming for cruel barb and meteor shard. Make the recipes drop from dungeons I would otherwise skip but these things give me a good reason to go there. Don't make it free loot, it doesn't even have to be better just make it a reasonable effort comparison and a choice to do it.

End Game Itemization I think it's not really a unknown at this point that rogue's have a pretty set in stone power curve tied directly to our tier set and weapon quality. We rock perditions blade or maladath, with Felstriker or Thunderfury, Blessaed Blade of the Windseeker in offhand until naxx or if lucky AQ has some options. I believe, that if we want to expand anything that rogue can do with the classes beyond vanilla's baseline, we need to go to a token based loot system rather than a raw drop for class tier set loot. Each spec or archetype, needs its own specifically purposed set and balance for Hit, Stats, and crit on top of it's 'unique' set features.

Subtly needs stealth/threat/reset mechanics as appropriate. Combat I think fits most of the original tier sets fine. Assasination needs poison love and effect on kill/crit procs.

Rogue is dead simple in stat priority, and our gear reflects it fine, it's the more unique properties and making sure we are hit/crit capped as possible that has been a sore spot in any of our class tier sets or end game itemization. Hand of Justice, Band of Accuria, and our jewelry's, trinket, and off piece itemization is where I think we could use some shake up in terms of getting new choices for our gear. We have been governed since time eternal by what is BiS entirely on boosting our damage in PVE, and new options for gear need to compete on an equivalence level at very least to stop us from sitting on the same stuff for the last 20 years. I don't think most of us would be here if we wanted TBC or Wrath changes or styles in itemization, so we should balance this conceptually in mind on the idea that we meet the same bench mark with new or changed items, so we are encouraged to farm different places or use side grades if we don't want the same gear without feeling weaker for doing so.

## Post 57300 by Xudo (Grandmaster of Forum PvP) — 2023-08-14T15:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57300#p57300 | page 1 | era: pre-1.18.1 -->

There should be more uses for stealth in raids except opening attack. For example "gathering intelligence".
Rogue moves in stealth and tags mobs with some skill. Each tagged mob allows rogue to buff group with "planned attack" buff. It should increase damage for 1% per tagged mob, up to 10 or 15%. Tagging skill should be 10 yards or close to it. Higher than melee, less than ranged distance.

## Post 57497 by Hyrag (Barrens Chat Casualty) — 2023-08-15T19:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57497#p57497 | page 1 | era: pre-1.18.1 -->

+1 for assassination being more poison focused.
envenom Plus rework in poison talents
Maybe 1 talent that turn SS into shiv
+1 for more Sub bleed mechanics

## Post 57776 by Bloodphobos — 2023-08-17T17:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57776#p57776 | page 1 | era: pre-1.18.1 -->

> **Thesmugsilence wrote: Mon Aug 14, 2023 1:46 pm**
> ...

Too much words to comment everything. Do you want to have a call and discuss it step by step? I want to mention that all these suggestions are just a concept and no one says we need to implement all of them. If I had any input from responsible devs, I'd update it for sure. But now all I have are our rogue discussions in discord and most of them I tried to note here to have some post of inspiration for further work.
My aim is not to make rogue strong, I just want to improve weak specs, build, concepts... to be in the row with existing.
And I can argue with you that rogue is the best single target class, best single target and tank class on TW is warrior.

## Post 79588 by Feomatar (Barrens Chat Casualty) — 2023-12-01T21:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79588#p79588 | page 1 | era: pre-1.18.1 -->

> **Bloodphobos wrote: Thu Aug 17, 2023 5:26 pm**
> > **Thesmugsilence wrote: Mon Aug 14, 2023 1:46 pm**
> > ...
>
>  Too much words to comment everything. Do you want to have a call and discuss it step by step? I want to mention that all these suggestions are just a concept and no one says we need to implement all of them. If I had any input from responsible devs, I'd update it for sure. But now all I have are our rogue discussions in discord and most of them I tried to note here to have some post of inspiration for further work.
>  My aim is not to make rogue strong, I just want to improve weak specs, build, concepts... to be in the row with existing.
>  And I can argue with you that rogue is the best single target class, best single target and tank class on TW is warrior.

Dude, they hate rogues, both omunity and devs for some reason. maybe because they are to lazy or cheap to buy consumables to counter rogues, or just glad that rogues is crap and want them to be in this pose. But i dont think that roges get any real kind of buffs or even hotfixes ever. twow is not for rogues, thats it.

## Post 79595 by Algeri420 (Barrens Chat Casualty) — 2023-12-01T22:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79595#p79595 | page 1 | era: pre-1.18.1 -->

get fucked, you rouges deserve only nerfs
everyone (except rouges) despise you, now play class that isnt for kids woth down syndrome

## Post 79605 by Bigsmerf (Grandmaster of Forum PvP) — 2023-12-02T00:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79605#p79605 | page 1 | era: pre-1.18.1 -->

> **Algeri420 wrote: Fri Dec 01, 2023 10:21 pm**
> get fucked, you rouges deserve only nerfs
>  everyone (except rouges) despise you, now play class that isnt for kids woth down syndrome

Typical rogue behavior aimed specifically at the rogues? Well, this is new. I think I like it though. Got any other words of wisdom for us?

## Post 79627 by Artashir — 2023-12-02T10:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79627#p79627 | page 1 | era: pre-1.18.1 -->

Rogue like every other class need some changes, Hybrid class get soo cool new talent , ROgues get Range on Deadly throw.

## Post 81455 by Justaddwater — 2023-12-16T22:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81455#p81455 | page 1 | era: pre-1.18.1 -->

+ i agree

## Post 83171 by Critterbug — 2023-12-30T13:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83171#p83171 | page 1 | era: pre-1.18.1 -->

> **Algeri420 wrote: Fri Dec 01, 2023 10:21 pm**
> get fucked, you rouges deserve only nerfs
>  everyone (except rouges) despise you, now play class that isnt for kids woth down syndrome

a shame you can't be reported for such a hateful comment.   People with downs don't need to be the butt of your joke as you spew such hateful crap.    Show some sensitivity instead of trying to be edgy, kiddo.

## Post 83195 by Hyrag (Barrens Chat Casualty) — 2023-12-30T22:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83195#p83195 | page 1 | era: pre-1.18.1 -->

bump for more venom oriented talents only

