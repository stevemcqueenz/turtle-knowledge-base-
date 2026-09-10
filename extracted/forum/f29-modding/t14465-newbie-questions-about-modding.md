---
title: "Newbie questions about modding"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14465"
topic_id: 14465
forum_id: 29
forum: "Modding"
author: "Zannara"
author_authority: "player"
posted: "2024-07-05T08:29:00Z"
last_post: "2024-07-07T01:05:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T10:42:11Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Newbie questions about modding

## Post 98565 by Zannara — 2024-07-05T08:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98565#p98565 | page 1 | era: pre-1.18.1 -->

HI! I hope this is the right place to find an answer to my question.

I'm planning on roleplaying as a Kirin Tor mage in Ambermill, but that place is full of voidwalkers who annoy me a lot, so I thought of making a custom patch that would replace their model with a model of an arcane elemental.

Now, the problem is, I have no idea how to do so. I have an MPQ editor and I got to the part of creatures -> voidwalker, but I have little to no clue how to do the rest.

Where can I find a place to get models for creatures that I want to replace, and how to do so properly?

Thanks!

## Post 98578 by Lordb — 2024-07-05T12:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98578#p98578 | page 1 | era: pre-1.18.1 -->

I tested it myself to make sure it works, and it does. So I'll post the file here to save you the trouble (it only took around 5 minutes to do this, no worries).

[https://www.dropbox.com/scl/fi/pmz927np ... 1dht3&dl=0](https://www.dropbox.com/scl/fi/pmz927np67j5ebu36ec35/ArcaneGolemVoidWalker.zip?rlkey=0hn08be7kjnh233cs1gqph1v1&st=e3c1dht3&dl=0)

I opened patch-3.mpq and went to "*Creature/ArcaneGolem*" and extracted these files:

- arcanegolem.m2 (the model file)

- AG_Model_Mesh_ArcaneDefense.blp (one of the texture files, you could pick any of these)
Then renamed them to:

- voidwalker.m2

- VoidWalkerSkin.blp
Now, I use Ladik's MPQ Editor and I can't offer specific steps for a different program, but I imagine they would be similar.

So after that I made a new .mpq by clicking in the top left "*MPQs > New MPQ*". I Named it "*patch-z*" but any single letter would work. "*patch-a*" "*patch-b*" etc. The rest of the settings I left as default.

In the new empty .mpq I remade the file path by right clicking on either side and selecting "*New Folder*" and named it "*Creature*", then made another in that folder named "*Voidwalker*". I placed the renamed .m2 and .blp files into the "*Voidwalker*" folder by dragging them into the MPQ Editor window, and finally clicked the "*Compact Archives*" in the top right. Launched game, tested mod.

I hope that helps.   smiling_turtle_head

Few extra notes from my experience:
- Don't launch the game with an .mpq file still open in the MPQ Editor. It'll prevent it from loading and you'll wonder like an idiot why your mod isn't working.

- Sometimes model swapping like this will cause the game to crash. Not sure why.

- Turtle WoW updates can purge the Data folder of mods. Keep backups.

## Post 98579 by Theexpell — 2024-07-05T12:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98579#p98579 | page 1 | era: pre-1.18.1 -->

I can try to walk you through the process using the example of replacing a chicken model with a ragnarose model.

 1. Create a New MPQ File:
Name your new MPQ file as "Patch-X.MPQ" (where X represents the load order).

 2. Obtain the New Model:
Locate the .m2 model file of ragnarose from your original WoW client files.

 3. Rename the Model:
Rename the ragnarose.m2 file to chicken.m2.
This step ensures that the WoW client will load the ragnarose model whenever it searches for the chicken model.

 4. Place the Renamed Model in the Patch File:
Insert the renamed ragnarose (chicken.m2) file into your newly created "Patch-X.MPQ".

 5.Replace Textures:
Find the corresponding texture files for ragnarose, which is in .blp format.
Rename these texture files from ragnarose.blp to chicken.blp.
Place the renamed texture files into the same patch file.

Be prepared for potential issues and unexpected errors with your patch.
It's common to encounter problems, especially when dealing with models from expansions beyond the vanilla client.
Furthermore, if you are replacing a model that has many texture variants you need to replace every single texture that the model uses.

In the example above you might find that chicken.m2 will have several different textures (white chicken, brown chicken, black etc.). When the model gets loaded the specific texture will be used, so if you replace the .m2 to ragnarose it will still load with the chicken texture, which will create an abomination.

If you need further assistance, you can find me in-game (Character name Seffix).

Using models from expansions or external sources involves more complicated steps and wil require additional tools and techniques.

## Post 98593 by Zannara — 2024-07-05T14:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98593#p98593 | page 1 | era: pre-1.18.1 -->

Thank you so much for the help! Now I can do it on my own and I'm testing different variations. What tools do I have to use in order to import models from order expansions tho? There aren't many arcane-focused models in classic.

## Post 98733 by Lordb — 2024-07-06T23:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98733#p98733 | page 1 | era: pre-1.18.1 -->

First you'll need to download a client for the expansion you want to pull models and textures from. After that you need to run the .m2 you extract through a script to convert it the classic version of WoW. The .blp files don't need to be converted as far as I know. If the creature you want has .skin or .anim files you'll need to extract those as well.

A download link for the jm2converter script can be found here [viewtopic.php?t=1225](https://forum.turtlecraft.gg/viewtopic.php?t=1225). You may also need to install Java.

Place everything you extracted into the same folder as jm2converter.jar, then hold down shift and right click in the folder and select "*Open PowerShell window here*". Depending on your version of windows it might say command prompt instead.

Once that's open paste in this command.
Code: Select all

```
java -jar jm2converter.jar -in INPUT.m2 -out OUTPUT.m2 -cl
```

Change INPUT to the .m2 file you want to convert and OUTPUT to... Something else. You can always change the output's file name afterwards.

Example:
Code: Select all

```
java -jar jm2converter.jar -in CoolModelFromWotLK.m2 -out VoidWalker.m2 -cl
```

If the conversion process works, great! If not, I'm afraid I can't help you. The error messages are all arcane to me.
The .skin and .anim files (if present) are no longer needed, so just pack up the .m2 and .blp files as usual and you're done.

## Post 98738 by Qorvulth (Barrens Chat Casualty) — 2024-07-07T01:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98738#p98738 | page 1 | era: pre-1.18.1 -->

you might want to hold off on modding til 2.0 comes as we dont know if you will need a Ue5 modding tools or not.

