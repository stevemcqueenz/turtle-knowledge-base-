---
title: "[Request] Recolor robes of insight"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=12445"
topic_id: 12445
forum_id: 29
forum: "Modding"
author: "Drenari"
author_authority: "player"
posted: "2023-12-27T06:17:00Z"
last_post: "2024-01-16T09:40:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T10:42:31Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Request] Recolor robes of insight

## Post 82874 by Drenari — 2023-12-27T06:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82874#p82874 | page 1 | era: pre-1.18.1 -->

Would like a mod to alter the greenish color of the robes of insight to be black like the robes of ravenshire.
As seen here:
<https://imgur.com/a/tr12IjD>
Would this be difficult?

## Post 83611 by Theexpell — 2024-01-04T08:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83611#p83611 | page 1 | era: pre-1.18.1 -->

That isn't difficult, it's a simple texture swap or if you wanna be fancy you can swap what texture the item pulls from.

Question is why you want it done, can't you just use transmog?
Either way, I can swap it for you when I get the time, I'll get back to you.

## Post 83652 by Drenari — 2024-01-04T23:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83652#p83652 | page 1 | era: pre-1.18.1 -->

I haven't edited wow files before so that whole process is new. I would transmog if I could but to my knowledge a black color variant of the robes of insight does not exist anywhere in game in order to get it and transmog to make it look that way.

To my knowledge that chest piece is only used in 5 items
Robes of insight (Greenish colour)
Robes of the Guardian Saint (Teal colour)
Robes of the Triumvirate (greenish like insight robes)
Robes of the Battleguard (darker gold/yellow)
Vestments of the Shifting Sands (Purpleish)

Thought it would be simple to mod to check out how a black color one would look for a warlock character and if it looks good would have screen shots for a recommendation to add one to the game.

My lock is not yet 60 but I could get the robes of insight so its an item I can use on the character I currently have. I had them on my mage back in the original wow days and always though it looked cool cause its the same clothing item the eleven statues have when they added Dire Maul.
![Image](https://i.ibb.co/d6JKmDk/Dire-Maul-Statues.jpg)

If recolors like that are pretty easy can you recommend any good tutorials on making those kind of changes?

## Post 84611 by Theexpell — 2024-01-14T00:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84611#p84611 | page 1 | era: pre-1.18.1 -->

I have looked into your request, and there is a small complication. These two items do not use the same amount of textures for their displays.

robes of ravenshire has 6 textures (displayid: 21114):
Robe_B_02Black_Sleeve_AU (ARM UPPER)
Robe_B_02Black_Sleeve_AL (ARM LOWER)
Robe_B_02Black_Chest_TU (TORSO UPPER)
Robe_B_02Black_Chest_TL (TORSO LOWER)
Robe_B_02Black_Pants_LU (LEG UPPER)
Robe_B_02Black_Pant_LL (LEG LOWER)

While Robes of Insight (displayid: 16676) has 5 textures:
Robe_D_01Cyan_Sleeve_AU
 -
Robe_D_01Green_Chest_TU
Robe_D_01Green_Chest_TL
Robe_D_01Green_Pant_LU
Robe_D_01Green_Pant_LL

This means that you can't just swap the textures from one to the other since there will be one texture missing, specifically the lower arm will be bare.

This missing texture can be added into the ItemDisplayInfo.dbc files, but with a caveat.. When turtleWoW inevitablyrelease a new patch this modification will stop working properly.

So there are two options here, either you switch out the textures of another item that contain ALL texture files or you are fine with that the mod needs to be redone once a new major patch is released.

## Post 84867 by Drenari — 2024-01-16T05:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84867#p84867 | page 1 | era: pre-1.18.1 -->

I would assume that to do what I want I would need to unpack a mpq that contains the 5 textures that are used for the robes of insight. Open those 5 texture files in an image editor, change the color from green to black, save the image files in whatever format it requires, then repack a new MPQ that is my patch with just the 5 edited image files that are saved in whatever folder specification is required.

Unless a future patch removes my mpq file that should overwrite whatever the default textures are. I know nothing of file editing with mpq files or the method that wow uses for its data files. I have had some experience creating skins and such for models in the quake 3 engine and saving them to the pk3 file format which is just a renamed zip file that contains the file folders in the zip.

Quake 3 files were much easier to figure out as you can just rename the pk3 to a zip and extract whatever you need, and the image files were easy to edit. If I knew how to unpack the specific image files I need to edit, know how I need to edit them as in specific format when saving after making changes, then how to repack them into a new mpq patch, then I might be able to do it myself.

## Post 84878 by Theexpell — 2024-01-16T09:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84878#p84878 | page 1 | era: pre-1.18.1 -->

I have completely missunderstood you. I thought you wanted to swap the texture of the green robe to the textures for ravenshire robes.

I understand now that you simply want the color green to be black instead.

Yes, as you mentioned you need to open the MPQ file, find the texture, export those textures and change their colour. Then this is simple!

For reference:
 1. Open the correct MPQ file and find the textures
 2. Convert the textures from .blp to a workable format (recommend .tga to not lose alfa layers)
 3. Change the colour
 4. Change back to .blp
 5. Create a new MPQ file named Patch-{letter}.mpq
 6. Add the new .blp files and make sure they have the same name and the exact same folder structure as the origianl textures
 7. Bob's your uncle!

You can hit me up in-game if you encounter difficulties. Nordanaar Seffix
I can also send you some modding tools I use, they can be difficult at times to find on the net.

