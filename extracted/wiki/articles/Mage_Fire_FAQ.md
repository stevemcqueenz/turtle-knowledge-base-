---
title: "Mage Fire FAQ"
url: "https://turtle-wow.fandom.com/wiki/Mage_Fire_FAQ"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-04T22:25:36Z"
fetched: "2026-09-10T07:39:11Z"
is_turtle_content: false
patch: null
categories: ["Classes"]
---
# Mage Fire FAQ

Go back to https://turtle-wow.fandom.com/wiki/Mage_FAQ

## Is Fire good on this server?
Yes fire is still good but not the dominant raiding spec since 1.17.2 patch on Nov 8th 2024. Can read about the changes here https://forum.turtle-wow.org/viewtopic.php?p=102974#p102968 ==

<s>The biggest change affecting Fire in 1.17.2 was ignite was changed from a 4 second window to a 6 second one, but the damage it does was split into 3 ticks instead of 2.  This means it is easier to keep ignite up than before but it does less max damage.  This buffed solo fire mage but significantly lowered the number of fire mages you could have in a raid before the average fire mage dps decreased from 4-5 -> 1-2.</s>

Fire was heavily changed again in 1.18.0.  Ignite was changed back to a 4 second window,  Fire Blast now applies scorch stacks (renamed to Fire Vulnerability), blast wave cd was shortened, and more.  Can see all the changes here https://forum.turtle-wow.org/viewtopic.php?p=141159#p141159.  

## What talents to use when leveling?
I've never leveled as fire, this is just some suggestions you can really choose whatever talents you want while leveling.

Talent Priorities:
1.Improved Fireball
1.Elemental precision
1.Burning soul
1.Arcane concentration

## What talents to use when raiding?
Pepo raid

## What talents to use leveling?
So when starting to level as fire, your first talent points should go into Improved Fireball, Ignite, and then Pyroblast. 

By this point you are level 20. Your next 2 points go into Burning soul. having a 70% chance to not suffer pushback is great.

Next, you should start looking into the frost tree for Elemental Precision. Get all 3 points here. 

Jump over to Arcane and grab Arcane Subtlety. Both points. And since they flipped Arcane focus and Magic Absorption you don't need to put ANY points into Arcane focus. (That will give you 3 extra points later on). Throw 3 more points into Magic Absorption. at this point you are level 30.

You can either put 5 points into  Arcane Concentration or go back to the Fire tree. Personally I would put the 5 points into the Arcane Concentration and then go back to fire and finish it up.

<nowiki>*</nowiki>From here, this is how I build my fire mage as I leveled to 60.*

2 points into Incinerate. 

3 Points into Master of Elements.

3 points into Fire Vulnerability.

1 point into Blast Wave.

3 points into Critical Mass.

2 points into Hot Streak.

5 points into Fire Power.

1 Point into Combustion.

By this point in time you are level 55. and have 5 points to play with however you would like. 

## Fire Rotation
Opener: Fire blast -> 3x Scorch -> Fireball -> Fireblast -> 
Rotation: hot streak pyro if available -> Fireblast if available -> Fireball

Scorch to extend ignite can be worth doing but depends on a lot of variables.

## Solo Fire Simmed Stat Weights No Cooldowns
generated with https://github.com/pepopo978/wowsim Take with a grain of salt, no promises this perfectly matches turtle or there aren't bugs.

You really want 2-4% haste minimum + nampower to ensure that you can get off 2 fireballs within the 6 second ignite window when accounting for the  lag that occurs on all casts.

Weights are dependent on many factors like your gear and raid composition but to give a general idea with endgame gear:
 50k runs, 2 min fight, 0.07 server lag per cast
 control_sp = 1000
 control_crit = 40
 control_hit = 15
 control_haste = 5

 Using rotation above

 control DPS Mean              : 1500 in 66.8 casts
 1 hit DPS Mean                : 1521 in 66.8 casts
 1 crit DPS Mean               : 1523 in 66.8 casts
 1 haste DPS Mean              : 1514 in 67.3 casts
 20sp DPS Mean                 : 1518 in 66.8 casts

 
 ------ Per Spell Data ------
 1 crit:
    Fire Blast                    : 17.0 casts, 24535 dmg (13.6%), 1443 avg dmg, 1.0 avg cast time, 1443 dps
    ignite                        : 11.4 casts, 55657 dmg (29.9%), 5127 avg dmg
    Scorch                        : 4.0 casts, 4149 dmg (2.3%), 1036 avg dmg, 1.57 avg cast time, 660 dps
    Fireball                      : 30.5 casts (52.7 ticks), 82703 dmg (45.7%), 2716 avg dmg, 2.93 avg cast time, 927 dps
    Pyroblast                     : 4.0 casts (14.4 ticks), 15760 dmg (8.6%), 3959 avg dmg, 1.02 avg cast time, 3881 dps
 1 hit:
    Fire Blast                    : 17.0 casts, 24678 dmg (13.7%), 1451 avg dmg, 1.0 avg cast time, 1451 dps
    ignite                        : 11.4 casts, 54701 dmg (29.4%), 5029 avg dmg
    Scorch                        : 4.0 casts, 4176 dmg (2.3%), 1044 avg dmg, 1.57 avg cast time, 665 dps
    Fireball                      : 30.5 casts (52.8 ticks), 83274 dmg (46.1%), 2733 avg dmg, 2.93 avg cast time, 933 dps
    Pyroblast                     : 3.9 casts (14.4 ticks), 15694 dmg (8.5%), 3986 avg dmg, 1.02 avg cast time, 3908 dps
 1 haste:
    Fire Blast                    : 17.1 casts, 24563 dmg (13.7%), 1437 avg dmg, 1.0 avg cast time, 1437 dps
    ignite                        : 11.5 casts, 54107 dmg (29.2%), 4919 avg dmg
    Scorch                        : 4.0 casts, 4138 dmg (2.3%), 1033 avg dmg, 1.57 avg cast time, 658 dps
    Fireball                      : 30.8 casts (52.7 ticks), 83338 dmg (46.3%), 2706 avg dmg, 2.9 avg cast time, 933 dps
    Pyroblast                     : 3.9 casts (14.2 ticks), 15517 dmg (8.5%), 3951 avg dmg, 1.01 avg cast time, 3912 dps
 20sp:
    Fire Blast                    : 17.0 casts, 24663 dmg (13.7%), 1450 avg dmg, 1.0 avg cast time, 1450 dps
    ignite                        : 11.4 casts, 54281 dmg (29.2%), 4980 avg dmg
    Scorch                        : 4.0 casts, 4189 dmg (2.3%), 1046 avg dmg, 1.57 avg cast time, 666 dps
    Fireball                      : 30.5 casts (52.7 ticks), 83434 dmg (46.3%), 2737 avg dmg, 2.93 avg cast time, 934 dps
    Pyroblast                     : 3.9 casts (14.1 ticks), 15541 dmg (8.5%), 3996 avg dmg, 1.02 avg cast time, 3918 dps
 control:
    Fire Blast                    : 17.0 casts, 24427 dmg (13.7%), 1436 avg dmg, 1.0 avg cast time, 1436 dps
    ignite                        : 11.4 casts, 53644 dmg (29.2%), 4925 avg dmg
    Scorch                        : 4.0 casts, 4137 dmg (2.3%), 1033 avg dmg, 1.57 avg cast time, 658 dps
    Fireball                      : 30.5 casts (52.7 ticks), 82458 dmg (46.3%), 2705 avg dmg, 2.93 avg cast time, 923 dps
    Pyroblast                     : 3.9 casts (14.1 ticks), 15346 dmg (8.5%), 3946 avg dmg, 1.02 avg cast time, 3869 dps

So comparing the DPS changes some rough weights:
 1 crit  = ~25   SP
 1 hit   = ~23   SP
 1 haste = ~15   SP

for a fresh 60 with these stats

 control_sp = 300
 control_crit = 18
 control_hit = 13
 control_haste = 3

control DPS Mean              : 637 in 62.6 casts
1 hit DPS Mean                : 644 in 62.7 casts
1 crit DPS Mean               : 645 in 62.8 casts
1 haste DPS Mean              : 643 in 63.1 casts
20sp DPS Mean                 : 648 in 62.6 casts

 1 crit  = ~17 SP
 1 hit   = ~15 SP
 1 haste = ~11 SP 

## Solo Fire Trinket Comparison
generated with https://github.com/pepopo978/wowsim
 base_sp = 1000
 base_crit = 40
 base_hit = 14
 base_haste = 4

 20k runs 2 min fight
 Rotation above, no cooldowns

 scythe DPS Mean               : 1586 in 66.5 casts
 tear DPS Mean                 : 1547 in 66.3 casts
 mark of champ DPS Mean        : 1540 in 66.3 casts
 eye of dim DPS Mean           : 1539 in 66.5 casts
 mqg DPS Mean                  : 1536 in 68.8 casts
 reos DPS Mean                 : 1525 in 66.3 casts
 shard of nightmare DPS Mean   : 1519 in 66.3 casts
 gulch DPS Mean                : 1502 in 66.5 casts
 zandalarian DPS Mean          : 1492 in 66.3 casts
 toep DPS Mean                 : 1492 in 66.3 casts
 nothing DPS Mean              : 1470 in 66.3 casts

 20k runs 5 min fight
 Rotation above, no cooldowns

 scythe DPS Mean               : 1661 in 165 casts
 tear DPS Mean                 : 1613 in 165 casts
 mark of champ DPS Mean        : 1610 in 165 casts
 eye of dim DPS Mean           : 1606 in 165 casts
 shard of nightmare DPS Mean   : 1587 in 165 casts
 gulch DPS Mean                : 1581 in 166 casts
 reos DPS Mean                 : 1578 in 165 casts
 mqg DPS Mean                  : 1562 in 167 casts
 zandalarian DPS Mean          : 1544 in 165 casts
 toep DPS Mean                 : 1544 in 165 casts
 nothing DPS Mean              : 1535 in 165 casts
