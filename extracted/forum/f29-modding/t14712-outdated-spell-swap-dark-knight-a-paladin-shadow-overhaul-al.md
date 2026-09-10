---
title: "OUTDATED: (Spell Swap) Dark Knight, a Paladin Shadow overhaul (Also comes with a tutorial on how to make your own swaps)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14712"
topic_id: 14712
forum_id: 29
forum: "Modding"
author: "Dannydeditto"
author_authority: "player"
posted: "2024-08-29T02:10:00Z"
last_post: "2025-04-28T04:51:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T10:41:21Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# OUTDATED: (Spell Swap) Dark Knight, a Paladin Shadow overhaul (Also comes with a tutorial on how to make your own swaps)

## Post 100354 by Dannydeditto — 2024-08-29T02:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100354#p100354 | page 1 | era: pre-1.18.1 -->

Hello this is my first mod, it's (so far) Version 1 is a simple swap of:

All Seals -> Shadowform
Seal of Command proc -> Ghostly Strike
Judgement -> Devouring Plague (and similar)
Holy Strike -> Wing Clip
Crusader Strike -> Sunder Armor
Exorcism -> Mind Blast
Holy Light & Flash of Light -> Shadowbolt
Turn Undead -> Fear
Divine Shield/Protection - Anti-Magic Shield
Consecration -> Death & Decay
Righteous Fury -> Shadowguard
Vengeance proc -> Nightfall proc

Open for suggestions. As you can see you can use monster spells as well, however keep in mind that if you suggest that i change some melee attack with a spell cast, the character won't be swinging away a shadowbolt for example, it'll change the skill to have a casting animation instead.

INSTALL:

you can see all the updates **below**, place the latest one inside your Data folder, THEN make sure to enable it in the mods section of your launcher, if you cannot find it, make sure the file is named patch-s (you can change the final letter if it conflicts with a different mod) replace the file with any update below.

And also the video tutorial that i used, if you wanna try to make your own spell swaps, credit goes to A KA on youtube <https://www.youtube.com/watch?v=Jai6HF4aEmo>

There's some differences between the wrath client used in the video and the classic client, first off when exctacting the MPQ archives you'll be looking for dbc.MPQ instead of locale, the rest is the same just get the patch files with a number on em. Once you get to the editing part the only difference is that the column for visuals will be 116 instead, be on the lookout that whenever you're searching for a spell, the horizontal scroll will be altered and you might accidentaly edit column 118 (for spell icons) without realising it.
If any issues arise you can ask me on discord, i'm Ariel Cishan in the server's disc, but do keep in mind that i'm no expert so my knowledge is limited.

Below is a clean .dbc file in case you mess up the whole extracting the .mpq files thing. I would still recommend you try to make your own file for future's sake, remember that we got hacked and the forums were down for weeks: [https://drive.google.com/file/d/189ZbH_ ... drive_link](https://drive.google.com/file/d/189ZbH_Gikh0Sz7aqzbrfkrcxRevbCcrE/view?usp=drive_link)

Like i said this is my first time posting a mod so i'll ask a bit of patience, i'm not even sure the drive links are set correctly lol.

UPDATE 1:

Fixed Seal of Light/Wisdom keeping their original visuals past rank 1.

UPDATE 2:

 -Changed Holy Light & Flash of light to Dark Mending.
 -Changed Lay on Hands to Fear Ward.
 -Changed Seal of Wisdom & Seal of Light to Dark Sludge, could consider making a version changing all seals to it.

UPDATE 3:

 -Changed Holy Shield to Unholy Shield.
 -Changed Holy Shock to Shadow Word: Pain. (apologies if any issues arrise i haven't found a shockadin to test this one yet)
 -Changed Holy Wrath to Chain Burn. (Missing sound effects but i dig the chain effect... subject to changes if i find something better)

UPDATE 4:

 -Changed Holy Shock to Banshee Wail.
 -Changed Blessing of Protection to Bone Shield.
 -Changed Divine Intervention to Anti-Magic Shield.
 -Changed the icons for all affected abilities, including Cleanse, i would've liked to use many of the icons from the macro list but i have no clue how to find their .dbc IDs, however i hope this minimizes some macro dependency.

 ***WARNING!*** aparently there's many classic macros that use the icons IDs for their code, so installing the icons version will break them, added a clean version, below is a list of the icon IDs for if you don't mind changing all your macros.

This is ONLY if you use, for example, the macros from the huge macro github, i had issues with my judgement+seal macros but i found the ones from [viewtopic.php?t=4593](https://forum.turtlecraft.gg/viewtopic.php?t=4593) this guide to do the same thing without checking for icons (kudos to Unchallenged :) ), hopefuly it'll suffice if you find yourself in the same spot as i did.

Holy Strike -> Spell_shadow_chilltouch

Crusader Strike -> Rank 1 -> Inv_sword_17
Rank 2+ -> Spell_holy_blessingofstrength

Seal of Righteousness -> Spell_shadow_curse

Seal of Command  -> Ability_creature_cursed_05

Seal of the Crusader  -> Spell_shadow_summonvoidwalker

Seal of Light -> Spell_shadow_lifedrain02

Seal of Wisdom -> Spell_shadow_siphonmana

Seal of Justice -> Spell_arcane_blink

Judgement -> Spell_holy_devotion

Righteous Fury -> Spell_shadow_antishadow

Holy Light -> Spell_shadow_requiem

Flash of Light -> Spell_nature_faeriefire

Blessing of Protection -> Inv_shield_01

Divine Shield/Protection -> Spell_shadow_antimagicshell

Lay on Hands  -> Spell_nature_removecurse

Exorcism  -> Ability_creature_cursed_03

Holy Wrath  -> Spell_shadow_enslavedemon

Cleanse  -> Spell_nature_nullifydisease

Consecration  -> Spell_shadow_deathanddecay

Holy Shield  -> Spell_shadow_detectlesserinvisibility

Holy Shock -> Spell_shadow_blackplague

UPDATE 5:

 -Changed Repentance to Sleep.
 -Changed the names of all affected spells so far (and a couple more), be adviced that this WILL mess up your macros and you'll have to update the spell names in them to match the new names.
 -Changed the description of Seal of Righteousness, i will update the rest of the spells descriptions over time as it is a very tedious thing to do.
 -Changed the icons for Blessing of Light and Divine Intervention.

UPDATE 6:

 -Changed Hammer of Wrath to C'thun's Eye Beam, as well as it's name and description.
 -Fixed the name change for Divine Protection Rank 1.

UPDATE 7:

 -Changed Redemption to Soulstone.
 -Changed the names, icons and descriptions of many more abilities, including some that had been changed already.
 -Changed the Paladin class name to Dark Knight, this will affect how NPCs refer to you in dialogues.

Added a separate version with no class name change because i got informed it was breaking addons such as TurtleRP.

UPDATE 8:

 -Changed Hammer of Justice to Enslave Demon as well as it's name.

UPDATE 9:

 -Changed Blessing of Light to Blessing of Sanctuary
 -Changed the name and description of Blessing of Sanctuary
 -Changed the icons for Holy Light and Flash of Light
 -Fixed the name for Blessing of Light Rank 2

 *I'm discontinuing the class name change version cuz it's something that can be very problematic and even if you really wanted it, all you have to do it edit ChrClasses.dbc with dbceditor and make a patch. (make sure spell.dbc isn't in there because it will cause conflicts with the mod)

UPDATE 10:

 -Changed Consecration to Lightning Cloud as well as it's icon, name & description.
 -Changed Blessing of Protection to Arcane Bubble as well as it's icon, name & description.
 -Changed all Aura descriptions, including the name of Devotion Aura and the icon and name of Sanctity Aura.
 -Changed the descriptions for debuffs and buffs on targets.

 *Aside from anti-magic shell i'm going back to the original concept, though lightning cloud might be... well, lightning, i find it more fitting to the concept of a shadow paladin and besides, shadow priests Mind Flay classic effect is lightning, and c'thun has a lot of lightning shit of his own anyway, you can just assume the bolts of lightning come from the void or the old gods. If you miss the Death Knight abilities in future updates, i might make a separate version when i consider this mod as finished, otherwise stick around for whenever i level a Warrior alt cuz i plan that to be my future Death Knight mod.

UPDATE 11:

 -Changed the on-hit mana gain effect of Judgement of Wisdom to the purple version of Sanctified Command.
 -Changed the debuff names of Judgement of Wisdom and Judgement of Light.

UPDATE 12:

 -Changed Holy Shield to Vampiric Embrace.
 -Changed Divine Shield/Protection & Divine Intervention to Unholy Shield.
 -Changed the names & descriptions of Crusader Strike, Holy Wrath, Seal of Wisdom, Seal of the Crusader, Divine Shield and Divine Protection to something more Shadow Priest and less Warlock/Death Knight.
Changed the Icon for Divine Shield/Protection.
 -Fixed rank 1 of Consecration still being Death & Decay.

UPDATE 13: [https://drive.google.com/file/d/1OrpezC ... sp=sharing](https://drive.google.com/file/d/1OrpezCImpGuX3oA-M9fdcEJSi9DjYWo5/view?usp=sharing)

I had to put D&D back because the lightning clouds have an issue where the clouds do not dissipate when the ability duration is expired, also Divine Shield is now Banish. Also i am NOT changing all the icons and names again, not only is it a lot of work but it broke certain important addons like pallypower.

UPDATE 14: [https://drive.google.com/file/d/1DXYSWK ... sp=sharing](https://drive.google.com/file/d/1DXYSWKoy8WZs0KZw5gA-QagLeTtfoHPe/view?usp=sharing)

Just added some stuff that was missing, namely the purple effect for mana gains for judgement of wisdom and shadowguard for righteous fury

____________________________________________________________________________________________

Side Notes

Before you ask, no, this does not change anything mechanicaly, your skills are still dealing Holy damage even though they are rebranded to Dark damage in their descriptions.

I know i went a bit Death Knight with the BoP and Consecration changes, reason being that i still haven't found a more void-looking shield or ground AoE effect, i hope you don't mind, i might make a separate version replacing the more death based spells with more void based ones, if i find any...

Fine i updated it, i haven't tested it extensively and i've had reports of other people trying to do spell swaps getting crashes in custom zones, however it may be because those people were trying to modify .dbc files made pre-update, so i've updated the clean file above

 **Make sure to re-read the install instructions above in the beginning of the post**

Preview:

[embed: //drive.google.com/file/d/119IvOtrwNTY3pQMf-ynVPa3Ly5GLMrBK/preview]

*Last edited by Dannydeditto on Sun Apr 20, 2025 8:48 pm, edited 13 times in total.*

## Post 102729 by Faustorgo (Barrens Chat Casualty) — 2024-10-08T01:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102729#p102729 | page 1 | era: pre-1.18.1 -->

My lvl 54 paladin just die (hrdcore) i giving this a try, and man i love it so far, please dont let it die, and try another combos too, ty a lot.

## Post 104854 by Brinner — 2024-10-26T02:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104854#p104854 | page 1 | era: pre-1.18.1 -->

Hey thanks very much for this it is very cool. I think DnD for consecrate looked much better but appreciate you sticking to the theme you wanted!  Would certainly be interested in a 'death knight' theme and look forward to future updates

*Last edited by Brinner on Sat Oct 26, 2024 2:24 am, edited 1 time in total.*

## Post 127859 by Mrkrissatan (Patch Note Conspiracy Theorist) — 2025-04-21T18:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127859#p127859 | page 1 | era: pre-1.18.1 -->

I might try this

## Post 128285 by Ayrill — 2025-04-24T12:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128285#p128285 | page 1 | era: pre-1.18.1 -->

just saw that mod! is that also working with other classes?

is that still working?

Any chance to make the warlock Armor Buff (the one we get with lvl 2 and the later one) to look like Shadowform from Priest?

## Post 128289 by Jodeci — 2025-04-24T12:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128289#p128289 | page 1 | era: pre-1.18.1 -->

This looks really cool

## Post 128777 by Dannydeditto — 2025-04-28T04:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128777#p128777 | page 1 | era: pre-1.18.1 -->

[viewtopic.php?p=128776#p128776](https://forum.turtlecraft.gg/viewtopic.php?p=128776#p128776)

I'm discontinuing this mod but leaving a more thorough tutorial on how to recreate it or make something that's entirely your own.

