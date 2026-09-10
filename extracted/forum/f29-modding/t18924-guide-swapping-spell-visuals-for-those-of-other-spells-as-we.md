---
title: "[GUIDE] Swapping spell visuals for those of other spells, as well as other edits."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18924"
topic_id: 18924
forum_id: 29
forum: "Modding"
author: "Dannydeditto"
author_authority: "player"
posted: "2025-04-28T04:49:00Z"
last_post: "2025-07-19T20:20:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:39:53Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [GUIDE] Swapping spell visuals for those of other spells, as well as other edits.

## Post 128776 by Dannydeditto — 2025-04-28T04:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128776#p128776 | page 1 | era: pre-1.18.1 -->

Hello, you might have seen my Shadow Paladin mod around in these forums, due to how the files in these mods work, i will not be updating it anymore because they need to be redone basicaly every update, and i personaly don't have the patience for that, and i take long breaks from wow from time to time. However i'm writing this guide for anybody that won't mind editing their own spells to make their own sets of swaps.

So for starters,/color] if you would like a visual example of any of this guide's steps you can follow this video <https://www.youtube.com/watch?v=Jai6HF4aEmo> I do not claim ownership of this video and all credit goes to A KA on youtube.

Disclaimer, the video in question follows steps for the wrath client of the game, and while it's similar, there's a few minor differences between it and the vanilla client, so even if you follow the video guide i would recommend following this written guide at the same time.

So let's begin, you will require two programs, the first being MyWarCraftStudio:
[https://gitlab.com/coolzoom/wtools-Tool ... 00.10.6337](https://gitlab.com/coolzoom/wtools-Tools/-/tree/master/MyWarCraftStudio%200.10.6337)

Alt download link [https://drive.google.com/file/d/14sWWxV ... sp=sharing](https://drive.google.com/file/d/14sWWxV3XyYZVp7GADL15K8VFQQ8SYVw-/view?usp=sharing)

The second, is MyDbcEditor:
[https://github.com/n0t49a1n/Tools/blob/ ... Editor.exe](https://github.com/n0t49a1n/Tools/blob/master/MyDbcEditor%201.2.2.42/MyDbcEditor.exe)

Alt download link [https://drive.google.com/file/d/1Vy-s16 ... sp=sharing](https://drive.google.com/file/d/1Vy-s16oexg98-ZJ9bQOXdS79xZUjf-ZR/view?usp=sharing)

The programs are portable so they shouldn't require installation.

 1. So the first thing you're gonna do is extract the file containing all the data for all the spells in the game, to do that you're gonna open MyWarcraftStudio as administrator, go to ''File(F)'' at the top left of the window and click ''Open MPQ Archive''.

 2. Navigate to your World of Warcraft/Data directory and select ''dbc.MPQ'', you should see a folder to your left saying ''DBCFilesClient'', you can click the + symbol to open the dropdown showing its contents to make sure it has the right data we need, such as spell, spellauranames, spellicon etc.

 3. You're gonna right click on ''DBCFilesClient'' and select ''Extract Folder'', you're gonna want to make a new folder for this file, place it anywhere and name it whatever such as ''Clean DBC File'', once that's done extract the ''DBCFilesClient'' folder into it and write ''c1'' into the Name field.

 4. Now you're gonna go back to step 1, you're gonna do the exact same thing but with all the .MPQ files named ''patch'', you're gonna extract the ''DBCFilesClient'' folder into the same ''Clean DBC File'' folder you created and extracted the previous .MPQ files into, and you're gonna do this with both the individual and numbered patch .MPQ files. If there's any other folder other than DBCFilesClient in your newly created folder (such as ''creature'' or whatever) that means you extracted the wrong thing and need to go back and make sure all the .MPQ files are extracted correctly.

DISCLAIMER: I regret to inform you that after ANY update that adds new content you will have to do this whole process again, as the files you've extracted, as you will see later, include the data for all the spells in the game, at this date i do not think there is a comfortable way to create a mod file that only affects your desired spells.

 5. Now we get to the ''fun'' part, changing the spells, you're gonna go into the 2nd program, MyDbcEditor. You're gonna open it and go into ''File'', then ''Open'' and you're gonna navigate to wherever you put your newly created folder, where you extracted all the .MPQ's files, and in that DBFilesClient folder you're gonna look for and select ''Spell.dbc''

 6. You'll be met with a gigantic list of every single spell in the game, player spells, NPC spells, item spells, almost anything you can think of, now actualy i lied to you, THIS is the ''fun'' part, let's think a moment, what spell do i wanna change? let's start with something simple, let's say i'm a mage and suddenly for some fuckin reason i wanna play a warlock, but i still wanna play mage, so let's just change Fireball into Shadowbolt. To do this you'll first have to find the VFX ID. In MyDbcEditor you'll notice numerical horizontal rows that go up to 173, the row you're looking for is 116. So with that out of the way we need to find Shadowbolt, you could scroll for like 3 days and go insane, but i assume you don't huff gloom weed, so we'll go up top and select ''Edit'' and then ''Search'', here you have two options, one is just writing the spell name, ''Shadow Bolt'' into the search field and start looking with that, that works, but another thing you can do that might prove more effective is write a part of the spell's description THAT DOES NOT INCLUDE NUMERICAL VALUES SUCH AS DAMAGE, so for example, you could write ''Sends a shadowy bolt at the enemy, causing'' into the search field and it should send you straight to the spell you wanna change, this is important because there's many spells that share the same name as the spells you use as a player, such as the ''spells'' trainers use when they teach you a new rank of the spell, change that, and your trainer will teach you new spells with a more direct, painful way :p. So a thing you can always do to check that the spell you're replacing IS the spell YOU as a player use, is to look at its description in row 139.

 7. In any case, we have now found the spell we desire, Shadow Bolt, if we scroll back to row 116 we can see the ID is ''64'', great, write it down or remember it, because now we need to go find Fireball and replace that spell's ID, same thing, either write Fireball into the search field, or part of its description, if that's done we'll see that Fireball's ID is ''67'', simply double click, write ''64'', go to ''File'', then ''Save'' and you're done for now.

 8. EXCEPT NOT REALLY, that was just Rank 1 of Fireball!, you'll have to keep searching for all the ranks of Fireball and change those as they are their own individual spells.

 9. With all that out of the way, good job! you're almost done, now with your .dbc file saved we just need to pack that into a mod file, for that you're gonna go back to MyWarCraftStudio and go into ''Pack(P)'' and select ''Create MPQ Archive'', navigate once more to your World of Warcraft/Data folder and create a patch file, like ''patch-s'', it can be any letter, only rule is that it needs to have a letter different to any other patch file inside your data folder.

 10. With that done, MyWarCraftStudio will have that patch file open, so now we wanna import our mod into it, so you're gonna right click the blank white field to your left and select ''Import Folder'', navigate back to your mod's folder with the spell.dbc file, open it, select the spell.dbc file, press open and, lastly, go select ''Pack(P)'' once more in MyWarCraftStudio and select ''Save and Close Archive''

 11. ONE LAST STEP! go into your turtle wow launcher and go to the ''Mods'' tab, you should find your patch under Custom Patches, if it's not enabled, tick the box to enable it.

 12. Celebrate! assuming you followed all the steps correctly, you've created your own mod! log in game and fireball should now be Shadow Bolt!.

IMPORTANT NOTES, Different spells might work different than others, if you change a melee spell with a ranged one, please keep in mind that character animations are a part of the spell itself, you won't be swinging away a Shadowbolt if you replace something like Mortal Strike with it, your character will simply cast Shadow Bolt at melee range, so always take that into account when deciding what to change with what.

It's time for you to go on a VFX safari!, you can, to some extent, rely on wowhead searches under NPC/Player abilities (they sometimes have pictures) <https://www.wowhead.com/classic/spells/npc-abilities>, or stumble upon an NPC with a particularily fitting VFX for whatever you desire, if it's a spell with a cast bar it's as easy as writing down the spell's name, if it's instant cast i guess you'll have to go into wowhead or the turtle wow database to find the NPC and look at all its spells for the name.

However, for those that liked my Shadow Paladin mod, i've left two notepad files i used to write down all the spells i've tried out while developing it, they're in the dbc editor rar under the alt download link, so if you wanna use any of those spells the IDs are written down.

FAQ:

Does this affect other players? will they be able to see the spells swapped???
Nope, these changes are all client sided.

Will these changes affect anything gameplay wise? will my Fireball do Shadow Damage!?!?!?!?
Nope, i don't believe you can change any of those values with the dbc editor.

I woke up today and my mod is broken!!!!!!!
Like i said at the beginning, patches can often change the .mpq files of the game, this is sadly something we have to deal with, you'll have to re do all these steps with an updated .dbc file. If anybody knows a better way to make these edits without them breaking every update, please let us know.

## Post 132025 by Elladaryn — 2025-05-20T02:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132025#p132025 | page 1 | era: pre-1.18.1 -->

Thanks for the guide, Danny! I managed to do a sucessful swap of Seal of Justice to Enlighment as a proof of concept.

If that helps anyone in the future, instead of MyDbcEditor (which was triggering my antivirus), I used WDBX.Editor and MPQ Editor.

 ---

Right now I am trying to work on a mod to bring out the more modern Paladin visuals (like Seals and Blessings), which already seem to be in the server files but are unused.

## Post 138635 by Kovac15 — 2025-07-10T12:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138635#p138635 | page 1 | era: pre-1.18.1 -->

Great guide Danny!

I was wondering if it was possible to swap spell visuals with those from retail WoW using this guide? I am using modern graphics patch, so spell visuals are the only thing missing, and I can't find those anywhere :D

Cheers!

## Post 140533 by Dannydeditto — 2025-07-19T20:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140533#p140533 | page 1 | era: pre-1.18.1 -->

> **Kovac15 wrote: Thu Jul 10, 2025 12:18 pm**
> Great guide Danny!
>
>  I was wondering if it was possible to swap spell visuals with those from retail WoW using this guide? I am using modern graphics patch, so spell visuals are the only thing missing, and I can't find those anywhere :D
>
>  Cheers!

I am not sure about that, i would've loved to port over spell visuals from wrath DK over but i'm pretty sure you'd have to find something else for that, however mywarcraftstudio has preview models for the VFX in game, so that'd be where to look, i guess you'd have to replace the files.

