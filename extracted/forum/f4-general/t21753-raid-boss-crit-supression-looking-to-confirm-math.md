---
title: "Raid Boss Crit Supression - Looking to Confirm Math"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21753"
topic_id: 21753
forum_id: 4
forum: "General"
author: "Pugwoof"
author_authority: "player"
posted: "2025-09-07T15:51:00Z"
last_post: "2025-09-11T04:58:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T09:40:51Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Raid Boss Crit Supression - Looking to Confirm Math

## Post 150673 by Pugwoof — 2025-09-07T15:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150673#p150673 | page 1 | era: pre-1.18.1 -->

I'm trying to confirm if Turtle uses a flat -3% Crit Suppression when fighting Raid Bosses.

There have been different variations of crit suppression used in WoW when fighting Mobs over lvl 60.
 **Specifically, in Classic:**
 - lvl 61 = -1% Crit Suppression
 - lvl 62 = -2% Crit Suppression
 - lvl 63 = -3% Crit Suppression
 - RAID BOSS = -3%, and an additional -1.8% Crit Suppression = -4.8%

Technically, I've also seen Classic used weapon skill to mitigate this suppression by 0.04% for every skill over 300.
>> BOSS Crit = Spell Book Crit - 3% - 1.8% +  (Y * 0.04)
>> >> Where Y is = Wep Skill >300
 **EXAMPLE: 50% Spell book Crit / 315 Weapon Skill**
>> BOSS Crit = 50% - 3% - 1.8% + (15 * 0.04)
>> >> 50% - 4.8% + 0.6% = **45.8%**

 ***Based on my reading/searching; I think TWoW utilizes more simple Crit Suppression (shown below). I'm hoping fellow players can help confirm this and/or share Turtle's exact formula?***

 ***TURTLE WOW Crit Suppression:***
 - lvl 61 = -1% Crit Suppression
 - lvl 62 = -2% Crit Suppression
 - lvl 63 = -3% Crit Suppression
 - RAID BOSS = -3% Crit Suppression

## Post 150907 by jaclyncrimson — 2025-09-09T02:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150907#p150907 | page 1 | era: pre-1.18.1 -->

Interesting analysis, Pugwoof! I've also been digging into crit suppression mechanics. Perhaps Turtle WoW uses a simpler -3% flat reduction for raid bosses, discarding the extra -1.8%. Weapon skill mitigation is key too. Have you considered terrain affecting calculations, like when you're riding, say, a Snow Rider, on different slopes? Anyone else have data?

## Post 151171 by Pugwoof — 2025-09-10T18:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151171#p151171 | page 1 | era: pre-1.18.1 -->

One additional thing I have confirmed is that Weapon Skill >315 does still add Crit to your spell Book displayed Crit.
>> I thought 315 was the Hard Cap for everything; not just glancing blow reduction capping at 95% with no additional benefit beyond 315.
>> I was able to see a +0.04% Crit change for Weapon Skill well beyond 315; the specific test I did was going from 316 to 322...Spell Book Crit reflected a +0.24% increase in Crit chance (with all other variables constant)

Overall this does nothing to answer my question as to Crit Suppression against a Raid Boss (or if it differs against a lvl 63 VS a Raid Boss). I still have yet to determine if turtle is using a -3% Crit Suppression only or including the additional -1.8% suppression for Bosses seen in Classic.

It is good to know that the 0.04% Crit gains for +1 Weapon Skill seem to persist past 315. I wonder if WP Skill past 315 also adds 0.2% HIT as well? As this would impact Crit Cap.

## Post 151211 by Cheruscan (Bug Report Enthusiast) — 2025-09-11T04:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151211#p151211 | page 1 | era: pre-1.18.1 -->

Pretty sure the crit chance of a lvl 63 mob including bosses is 5,6%

