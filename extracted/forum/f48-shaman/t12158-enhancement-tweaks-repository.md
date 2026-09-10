---
title: "Enhancement tweaks repository"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=12158"
topic_id: 12158
forum_id: 48
forum: "Shaman"
author: "Jstansberry"
author_authority: "player"
posted: "2023-12-12T07:47:00Z"
last_post: "2023-12-12T11:14:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:23:06Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Enhancement tweaks repository

## Post 80796 by Jstansberry (Barrens Chat Casualty) — 2023-12-12T07:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80796#p80796 | page 1 | era: pre-1.18.1 -->

I plan to add to this incrementally, starting off I wanted to unload my idea of a rework of the Bloodlust ability Turtle WoW has added as the new capstone enhancement talent. I've also added an idea for a replacement for the Improved Weapon Totems talent. Feedback is welcome, I might fight you on it though >:^)

Edit: added an Enhancing Totems talent rework
Edit2: added a Flurry tweak that attempts to address mana issues
Edit3: added an attempt at creating a new baseline melee ability for shamans, Spirit Strike
Edit4: reworked Spirit Strike
Edit5: Stormstrike rework

Bloodlust rework:
 **Bloodlust: The shaman gains 20% haste and party members gain 5% haste for 10 seconds if 3 melee critical strikes are dealt within a 12 second window.**
The current iteration of Bloodlust is implemented in a very unsatisfying way, and perhaps more importantly, it only exacerbates the issues enhancement shamans faced in vanilla wow.

Enhancement shamans biggest utility is that they can twist totems much more effectively than a resto or ele shaman that has to work around cast bars and could effectively utilize their mana pool towards other means. This utility - totem buffs - does not scale with gear and thus the only benefit enhancement shamans bring is a static benefit that does not improve as the raid progresses through content. This means there is almost no incentive to get better gear for an enhancement shaman as their greatest strength does not scale with gear. Simultaneously, their DPS is the lowest of all damage-oriented specializations across all classes.

Turtle WoW has made minor changes to improve the DPS of enhancement, such as a rank 2 Stormstrike with a lower cooldown and mana cost. This has proven to be a decent buff but these individual changes on their own have not shifted enhancement away from being the last remaining true meme spec - effectively a deadweight compared to a restoration or elemental shaman.

Bloodlust, in it's current iteration, is a strong short duration single target buff with a 5 minute cooldown. It can improve the casting and attack speed of your target significantly. As it is right now, if you are an enhancement shaman and cast Bloodlust on yourself - rather than another raid member playing a more useful spec - you're objectively getting much less value out of the ability and it feels selfish to improve your meagre DPS rather than give the 20% haste to your raid's biggest pumpers or furyprot gigachad main tank. Additionally, it has a mana cost that is decently impactful for a spec that can easily run out of mana before the fight is over even without adding a Bloodlust cast into the mix.
My proposed rework of Bloodlust aims to address the two issues of:
- Enhancement shaman's "utility" not scaling with gear

- Enhancement shaman's personal DPS being so poor that there is no reason to give them better gear due to their subpar scaling

Bloodlust could be reworked to be a passive proc. Instead of having a 5 minute cooldown with a mana cost and being single target - this proc would always grant the enhancement shaman in question a strong personal buff while granting the entirety of their party a smaller but still strong buff.
The numbers would have to be worked out as to what would be "balanced", but this is what I am thinking so far in terms of how it would work:

 **Bloodlust: Increases haste of the shaman by 20% and party members by 5% for 10 seconds if 3 melee critical strikes are dealt within a 12 second window.**

Flurry would become a prerequired talent to take Bloodlust. The implementation would have a Bloodlust proc stack be added every time Flurry is procced from a critical strike. The stack lasts 12 seconds and the duration does not refresh when a new stack is gained. Achieving 3 (or however many is deemed appropriate) stacks would activate Bloodlust automatically.

The higher the critical chance the shaman would have, the higher the uptime of Bloodlust would be - meaning this is a way to have the enhancement shaman play into the "support DPS" identity and allow them to scale with gear. This would also likely increase the personal DPS of enhancement shamans by ~18%.

Ideally, you'd be able to get close to 100% uptime on Bloodlust with pre-BiS or MC/AQ20/ZG gear and the numbers would be tweaked to make it so. So at ~30% melee crit chance you should ideally have a comfortably consistent uptime on Bloodlust. Until that near 100% uptime would be achieved, faster weapons would be the better option as an enhancement shaman, while slower weapons would become better as your critical hit chance increases. This adds a niche for those fast 2h weapons sprinkled around in early level 60 content that no one currently wants to use.

It's also worth noting that this rework would address the "issue" - if you could call it that - of healer shamans speccing deep into enhancement just to pick up bloodlust. If you didn't know, this is not an uncommon build for endgame "resto" shamans due to their being very few talents that affect chain heal within the restoration tree (chain heal being 95% of a restoration shaman's healing). The restoration tree has it's own issues.

As strong as this Bloodlust rework may seem to many, this change alone would likely not push enhancement shaman out of "meme spec" territory. Not many have actually tried enhancement in endgame content to know just how deep the issues go with the spec. If you know, you know

Spirit Weapons talent:
Improved Weapon Totems -> **Spirit Weapons (2/2): Increases your skill with Two-handed weapons by 4/8 and reduces threat caused by melee attacks by 10/20%**
Another glaring weakness of enhancement shamans that prevents them from scaling as well as other physical DPS is their disproportionate reliance on white hits to deal damage and thus the effect glancing blows has on their damage output.
My proposed solution is simple,

Improved Weapon Totems -> **Spirit Weapons (2/2): Increases your skill with Two-handed weapons by 4/8 and reduces threat caused by melee attacks by 10/20%**

Before you get up-in-arms about replacing the Weapon Totems talent, allow me to explain myself. Improved Weapon Totems is one of the percieved main benefits the enhancement tree provides in terms of utility over the other specs - have you ever considered how much extra DPS the talent actually provides teammates? The talent causes the extra attack generated by WFT to have 94 more attack power. Assuming attack power converts to DPS at a 14 AP to 1 DPS ratio on Turtle WoW and Windfury is proccing exactly 20% of the time, that is a flat 1.34 DPS increase to your party members who are auto-attacking. The talent is practically not worth the talent points as it is. Personally, I think Windfury Totem is already a bit too strong as it is and replacing Improved Weapon Totems with a talent that actually increases the power of WFT in any significant capacity would probably be imbalanced in a bad way - at the same time the talent is practically useless so it should be replaced with something good.

The reason I would like to see a weapon skill talent in enhancement is because of the glancing blow reduction weapon skill provides and the fact that there are very few items that provide two-handed weapon skill in the loot pool - all of them being Turtle WoW custom items. Enhancement shamans derive 70-90% of their damage from auto attacks ("white hits"), which have a lower cap with which to benefit from hit rating and white hits are capable of dealing glancing blows - essentially you have a chance to deal less damage to an enemy on each individual attack roll. "Yellow hits" from abilities, such as Heroic Strike or Sinister Strike, are not capable of causing glancing blows. The damage reduction from glancing blows can be up to 40% less damage dealt and against a mob higher level than you (i.e raid bosses) ~30% of auto attacks will be glancing blows. Weapon skill is the only stat that can mitigate the effects of glancing blows by causing the glancing blows to have less of a penalty to the damage dealt. This glancing blow reduction has diminishing returns, but at around 308 weapon skill your glancing blow hits will be doing only ~5% less damage than regular hits. **All of this means weapon skill is disproportionately more important for enhancement than any other DPS spec.**

The two viable options we currently have to get weapon skill as an enhancement shaman are gatekept behind an extremely expensive Blacksmithing crafted set bonus (Towerforge 2 set bonus +6 Two-handed Mace Skill) that costs nearly 2000 gold, or the Ancient Jade Leggings that drop from Solnius in Emerald Sanctum (+8 Two-handed Mace Skill) with a 6% drop chance that are heavily contested. There is also a Thunderbluff Quartermaster item that requires Exalted reputation with TB, Chieftain's Ceremonial Headdress, which is extremely lackluster in stats - essentially being a head slot version of Edgemaster's that locks you into one weapon type instead of three. **Adding the weapon skill required to get sufficient glancing blow reduction as a talent removes the pressure from both players to acquire weapon skill items (and keep them equipped forever) and devs to create and add them to the game.**

This also serves to act as a "hit rating" talent, as currently if an enhancement shaman wants to benefit from the 3% hit rating other hybrid DPS classes also enjoy, they have to put 8 points into the restoration tree - missing out on arguably crucial DPS-oriented talents in the elemental tree. 8 weapon skill also gives about ~3.3% hit rating.

The threat reduction probably doesn't need much explaining - you've likely seen an enhancement shaman die from two "lucky" WF proc crits causing them to irredeemably take first place on the threat meter (despite being near the bottom of the DPS meter), followed by a 4k damage crushing blow by the boss. 20% threat reduction gives them the same threat reduction warriors get in Berserker Stance. In my opinion, all hybrid DPS specs should have access to the same amount of threat reduction their DPS-only counterparts have access to. On top of helping to prevent embarrassing "lucky" proc aggro deaths, threat reduction talents are also important as without them you are more limited in how much DPS you can output - being threat capped despite doing significantly less DPS than anyone else is not a good feeling.

Enhancing Totems rework:
Enhancing Totems (2/2): Increases the effect of your Strength of Earth by 8%/15% of your strength and Grace of Air Totems by 8%/15% of your agility.
As stated in my previous tweak suggestions above, an issue enhancement shaman has is that buffing is their percieved niche and yet they are only marginally better at providing buffs to their teammates compared to the other two shaman specs.
I've also argued that because totem buffs are static benefits that do not get any better from their baseline, there is not much reason to get better gear as an enhancement shaman.
To address these issues, I think the Enhancing Totems talent, which increases the effect of Strength of Earth and Grace of Air by a flat 15%, should be changed to:

 **Enhancing Totems (2/2): Increases the effect of your Strength of Earth by 8%/15% of your strength and Grace of Air Totems by 8%/15% of your agility.**

I think it's a straight-forward and potentially effective way to make enhancement a bit more relevant, it causes your buffing totems to scale with your stats. With BiS enhancement shaman gear, the shaman would be increasing the strength and agility of their party members by an additional 30-35 more than the baseline benefit of the respective totems. The current talent provides a flat 15% bonus to the stats provided by the totems, at max rank of these totems that translates to 11.55 strength or agility respectively. So this change would cause this talent to scale with gear upgrades to possibly be about 3x as effective.

Flurry tweak:
Flurry (5/5): Increases attack speed by 10%/15%/20%/25%/30% and restores 0.5%/0.75%/1%/1.25%/1.5% of maximum mana for your next 3 swings after dealing a critical strike.
Mana management is an issue that all shaman specs suffer from disporportionately compared to classes. For enhancement this problem is exacerbated especially if you are totem twisting. As a totem twisting shaman, you generally have to forsake using shock spells entirely and you have to itemize more for intellect and mp5 to support the mana pool required to keep twisting totems every ~9s.
A non-twisting enhancement shaman can expect to run out of mana quite quickly in a fight, assuming the initial ~800+ mana cost of dropping 4 totems, a 400 mana cost shock spell every 5-6 seconds, and a 200 mana Stormstrike every 12 seconds.
Totem twisting itself should probably be disintentivized - while many of vanilla WoW's most praised mechanics/interactions were unintended and emerged organically out of players pursuing optimal performance, totem twisting be one of them - in my opinion it is an unhealthy and unengaging mechanic and it is like user Elmer's glue to try to seal a gaping wound - it just causes more pain without addressing the issue at hand while providing the perfect environment for an infection (totem-twisting apologists).
Windfury Totem is absolutely strong enough of a party buff on it's own, adding Grace of Air on top of that is just gratuitous in my opinion - that's a bit off-topic, though.

To address mana management for enhancement in a way that feels good (getting better as your character progresses and attains better gear pieces, enchantments, and consumables), I propose yet another mechanic that utilizes melee criticals as the basis.

 **Flurry (5/5): Increases attack speed by 10%/15%/20%/25%/30% and restores 0.5%/0.75%/1%/1.25%/1.5% of maximum mana for your next 3 swings after dealing a critical strike.**

A well geared enhancement shaman will have between 3.5k to 4k mana before buffs. At the maximum rank of this talent, the shaman would be regaining 60 mana per hit if they have a mana pool of 4000. This would be quite a lot of mana gain over the course of a boss fight. Assuming 80% uptime on flurry (a reasonable average for a well geared enhancement shaman with 30+% crit rating), a boss fight lasting 3 minutes (an average boss encounter length), a swing timer of 2.00 seconds (not an unreasonable average swing timer considering Flurry, Totem of Crackling Thunder, my proposed Bloodlust rework, and items/enchantments that provide haste/attack speed) this would translate to ~72 Flurry hits restoring a total of ~4320 mana.

An approximation of how much mana spent per second for an enhancment shaman can be derived from their relatively simple rotation:

 182/12 ;;Stormstrike used on cooldown - every 12 seconds, costing 15.17 mana/sec
 **+**
((369+387)/2)/6)*0.4 ;;You will generally be alternating between Flame Shock and Frost Shock every other cast for optimal dps, they share a 6 second cooldown, this cooldown can be reduced to 5 seconds with the Reverberation talent in the elemental tree, but as an enhancement shaman you'd have to forgoe the 8 points in restoration required for the Nature's Guidance hit rating talent which is incredibly valuable. The 0.4 multiplier is to account for the fact that Elemental Focus will almost always be up considering it has two charges and the only spells you will be casting as enhancement that can use those charges are shock spells.
 **+**
(250+310)/9 ;;This is the cost of twisting Windfury Totem and Grace of Air, divided by 9 as that is longest you will go before refreshing the WFT to keep the buff up.
This would equal to about 102.59 mana spent per second, or 18466.2 mana over a 3 minute encounter

Without the twisting component, it would be 40.37 mana per second, or 7266 mana spent over a 3 minute encounter.

Adding that ~4320 mana regained throughout the fight would absolutely not be overpowered considering these numbers.

 **Spirit Strike, new baseline Shaman ability:**
Spirit Strike
 8s Cooldown 4% Base mana cost
Requires level 12
Your next melee attack can not be dodged, blocked, parried, or resisted. Additionally, your weapon imbue will have a modified effect:
 **Rockbiter Weapon:** The threat bonus from Rockbiter Weapon is increased by 300% on this attack and your armor is increased by 200% for 10 seconds.
 **Flametongue Weapon:** Flametongue Weapon does 200% more damage on this attack and reduces the chance your target will resist your frost and fire spells by 10% for 10 seconds.
 **Frostbrand Weapon:** Frostbrand weapon does 200% more damage and guarantees a Frostbrand Weapon effect to occur on this attack, additionally the target's attack speed is slowed by 25% for 5 seconds and the shaman gains mana equal to half the damage dealt by Frostbrand Weapon.
 **Windfury Weapon:** Windfury Weapon has an additional 30% chance to occur on this attack, additional attacks generated by Windfury Weapon on this attack can not be dodged, blocked, or parried.
Adding entirely new abilities to the game generally has a lot more pitfalls and potential for damage than modifying existing ones. Adding new passive talents is also significantly much easier than adding abilities. It can be very hard to predict how adding an entirely new ability to the game can affect things.
This ability is intended to be a baseline shaman ability - ele is in a decent spot already so I have attempted to mitigate the usefulness of this spell for ele.
The intention of this ability is to fill the void that the shaman class has when it comes to melee. Even the spec that specializes in melee -  enhancement - has only one button to press (Stormstrike) for dealing melee damage.
With the existence of weapon imbues, melee gameplay could (and in my opinion, should) be fleshed out quite a bit more for the baseline shaman experience, not just for enhancement.
Due to how Windfury works, adding another instant attack would likely be quite devastating to PvP balance. Being able to fish for 3 Windfury procs within a 1.5s global cooldown window would be... well... a lot of potential burst damage.
I've heard propositions of adding a Slam-like ability to the shaman kit rather than an instant attack as a melee attack that has a cast bar would have incredibly limited usage in PvP compared to PvE so the impact on PvP balance would be limited, and for a while I really liked that idea. Then I realized how much an absolute pain-in-the-ass it would be to avoid clipping auto-attacks while trying to use a Slam ability when I have a combination of 3 different attack-speed modifying buffs regularly but inconsistently active.
My solution is adding an on-next-hit ability (think Heroic Strike or Holy Strike) that synergizes with the only real melee identity shaman has: weapon imbues.
I'll attempt to explain my rationale behind each imbue's modified effect.

 **Rockbiter:**

Truthfully, I am not a fan of shaman tanking. I think there is nothing in the kit to support it other than good single target threat generation. Shamans have no defensive cooldowns, bad itemization for tanking, no way to maintain AoE threat in their kit, no taunt, and can run out of mana quite easily if you have to Earthshock on cooldown to keep threat over pumpers in your party/raid.
That said, I don't think there is any good reason to not give those who want to try to tank as a shaman a thing or two.
This would provide a strong mitigation buff with extremely high uptime, allowing the shaman to have very high armor values while a shield is equipped. The duration is 9 seconds to account for swing timers and cooldowns likely not aligning well, the intention is to have nearly 100% uptime if Spirit Strike is used on cooldown. Because Spirit Strike can not be parried or dodged, this would be quite useful for ensuring a threat lead in the beginning of encounters.

 **Flametongue:**

The intention of this change was to give a bit of love to the "spellhance" gameplay style.
Flametongue Weapon has a ~10% spellpower ratio, that, as far as I know, varies with weapon speed.
This would cause Flametongue damage to scale to ~20% spellpower for this one hit.
Elemental Fury in the Elemental tree affects Flametongue crits so this could potentially do quite a bit of damage when you account for the base Flametongue damage and the shaman's bare weapon swing damage. A +10% spell hit debuff could allow spellhancement to be somewhat viable beyond leveling content. Obviously, it should be limited to the caster's frost and fire spells specifically as providing a debuff that would give your fire/frost mages 10% spell hit would be a bit insane. The reason it is limited to frost and fire damage spells (of which shocks and imbues are the only truly reliable sources for a shaman) is to avoid a scenario where ele spec shamans are standing in melee range to use this ability as part of their rotation and get 10% spell hit for free.

 **Frostbrand:**

Frostbrand is the most neglected weapon imbue by far. It does a bit more damage than Flametongue when it happens, but has a chance to proc instead of a guaranteed effect.
A semi-permanent chance on hit to slow would sound super strong on a warrior or paladin, but shamans already have two better options for slowing - Frost Shock rank 1 costs very little mana and slows for the same 8 second duration a max rank Frost Shock does, while Earthbind Totem can be placed to slow multiple targets and does not use a GCD.
By guaranteeing a proc, this could actually make Frostbrand a viable choice in some PvP situations.
Addtionally, Frostbrand would be more desirable for PvP due to it doing more base damage. Guaranteeing a proc for one swing would be make it much more desirable in PvP where you will not have 100% uptime on your swing timer.
By adding an attack speed slowing component, this makes it a very viable choice in PvE. It's a stronger, single target version of Thunderclap with significantly less uptime. Could be super useful for a shaman tank to swap into Frostbrand right before using Spirit Strike, then swapping back into Rockbiter. A 25% attack slow could be very strong for many encounters. I'd say it even has a risk of trivializing some encounters if it were to stack with Thunderclap and Hurricane attack slows, but it's hard to say for certain.
One caveat to this is that you would basically be able to grief a warrior tank who wants to be hit more for their DPS/threat generation output.

 **Windfury:**

I already know this is going to be by far the most controversial. An increased Windfury proc chance sounds like it would be absolutely busted in PvP, and I get that. But I simply do not believe it would be.
An enhancement shaman in full BiS, on a triple crit Windfury proc, will do about 4.4k damage to the average cloth wearer.
I see no problem here, unironically.
Mages get to blow people up regardless of armor type and are untouchable by melees. Holy Strike crits for 4k+ in BiS and is holy damage while being on a 10s cooldown. BiS ele shamans can Chain Lightning+Shock you for 4k. WIndfury burst damage is well within the bounds of reason when it comes to vanilla WoW PvP balance, normalizing it so that the first hit in every encounter has a higher chance to proc is not going to break anything.
Windfury is only devastating to cloth wearers, and vanilla WoW has a very caster-favored meta when it comes to PvP.
An enhancement shaman has to get in melee range and roll the dice not just on a 20% proc chance for Windfury, but also for a crit roll on all 3 attacks to do anything impressive, and output is very dependant on the armor of the target.
Enhancement is not "OP" in any capacity in PvP. It's even easier to kite an enhancement shaman than it is a warrior, enhancement's only gap closer is to run at you on their mount and hope they get a lucky hit off before they get kited. If a cloth wearer dies to an enhancement shaman, it's their fault.
It does feel a bit bad when you think of the match-up against warriors (where the warrior actually had an advantage over the other class for once) and how this tilts things more in favor of the enhancement shaman, but warriors could already use some love when it comes to PvP and that isn't the focus of this post.
PvP stuff aside, this would be a really big boon to PvE viability for enhancement. Allowing some normalization for a WF proc every ~8 seconds would be absolutely amazing for when someone finds themselves in an "RNG desert".
Additionally, this ability would be a "yellow" hit and turn any WF proc attacks "yellow" as well, allowing enhancement shamans to be less limited by glancing blows. This, on top of the "can not be dodged, blocked, or parried" component would mean that the crit cap is only limited by "miss" rolls. The shaman would have effective crit rating equal to their stated crit rating for up to 99% crit (depending on hit rating) when rolling for Spirit Strike attacks - making the crit stat scale better for enhancement.

Stormstrike rework:
Stormstrike
 12s cooldown 6% base mana cost
Gives you an extra attack.  In addition, your next 2 Shock spells cast on the target deal bonus damage equal to a portion of your spell power and 20% of the damage dealt by Stormstrike.  Lasts 12 sec.
Allows Shock spells to scale. Currently, Shock spells are the only other damage button you have as an enhancement shaman. If you are not totem twisting, the only buttons you press other than totems are Stormtrike, Shocks, and Bloodlust.

Shocks scale very poorly. Enhancement shamans don't get spell power not only because itemization doesn't permit it, shock spells wouldn't scale even if enhancement shamans itemized for shock DPS specifically. They have a ~43% spellpower coefficient and a 6(5 with the ele talent) second cooldown. That means you get ~0.072(0.086 with ele talent) more DPS from shock spells per point of spell power - in other words, you'd have 72 more DPS from shock spells with 1000 spell power. Flame Shock coefficient specifically is higher but is spread over a duration that overlaps with the 6(5) second shock cooldown so DPS calculation is a bit more complicated - it still ends up being about ~0.1 DPS per spell power.
Even if enhancement shamans had access to spell power through itemization or through a talent like TBC's Mental Quickness, it would have an incredibly small effect on their DPS. Because these shock spells are basically half of the Enhancement rotation (though usually only 10-20% of total damage) and they do not scale at all, enhancement overall is more limited in it's ability to scale.

Weapon damage and melee crit chance are the best scaling stats for an enhancement shaman and this change leans into those stats. A slow base speed and harder hitting weapon would allow for a higher baseline value on the shock bonus damage, and a Stormstrike critical hit would effectively double the shock bonus damage buff value.
The removal of the original Nature damage % increase buff is a bit of a shame as it could be used to buff a Balance druid or Ele shaman's output by quite a bit, but perhaps an ability/effect that helps allied nature damage output could be added back in somewhere else in the enhancement kit.
Additional attacks from a Windfury proc on the Stormstrike hit would not add to the bonus shock damage buff value, only the initial attack would count towards the bonus.

The "and a portion of your spell power" component is another attempt at making spellhancement viable. ~0.20 spell power coefficient for each instance of the debuff would likely not be good enough to give an enhancement shaman a reason to fit spell power into their gear, but it's something for the people who want to use Flametongue instead of Windfury. It'd essentially increase the spell power contribution to shock spell damage output by ~50% if the Stormstrike debuff has 100% uptime. Enhancement shamans currently have little to no spell power in their gear and this change would only be relevant to the shamans who want to play as the Flametongue weapon focused spellhancement build.

This change is intended to be an alternative answer to TBC's Mental Quickness talent - allowing for the "spell" half of this hybrid spec's damage to scale.

Also, I've reduced the mana cost by half. Mana is way too limiting for enhancement even with Stormstrike cost already being almost halved from the first round of class changes.

*Last edited by Jstansberry on Wed Dec 27, 2023 5:19 am, edited 69 times in total.*

## Post 80807 by Glipo (Barrens Chat Casualty) — 2023-12-12T11:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80807#p80807 | page 1 | era: pre-1.18.1 -->

me vote up!

