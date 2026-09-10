---
title: "[Guide] Importing Custom Models into WoW (1.12.1) with WoW Blender Studio 3.1"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=9360"
topic_id: 9360
forum_id: 29
forum: "Modding"
author: "Elkepwn"
author_authority: "player"
posted: "2023-09-07T16:02:00Z"
last_post: "2026-03-14T22:08:00Z"
post_count: 30
pages: 1
fetched: "2026-09-10T10:37:51Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Guide] Importing Custom Models into WoW (1.12.1) with WoW Blender Studio 3.1

## Post 61292 by Elkepwn (Barrens Chat Casualty) — 2023-09-07T16:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61292#p61292 | page 1 | era: pre-1.18.1 -->

![Image](https://i.ibb.co/8Y6hrKZ/photo-2023-09-07-17-55-43.jpg)

 **Intro:**

hey m8's :),
at first, special Thanks to all WoW Dev's! These Community is insane and explained me a lot of this thematic with my very small knowledge.
So you need some Knowledge, if you don't know how to create a server to test your own custom stuff there, what is a dbc file or how to patch things, you will find a Tutorial Playlist on Youtube.

<https://www.youtube.com/@AmarothEng>

This is a complete Tutorial how to import your own models into your 3.5.5a and 1.12.1 server.
If you have any questions, dm me

 **Tools we work with:**
 - Server repack for 1.12.1 client  (Classic)
 - WoW 3.3.5 client (Wotlk)
 - WoW Model Viewer (3.3.5. version)
 - Blender 3.1 with Blender WoW Studio
 - BLPGN Converter
 - jm2converter (java script)
 - MPQ Editor
 - DBC editor
 - HeidiSQL / Navicat

 **Download Section:**
WoW Model Viewer: [http://www.mediafire.com/file/upde5tcww ... evWork.zip](http://www.mediafire.com/file/upde5tcwwr4rq1q/WMV_Binary_v0701_r252_Win32_DevWork.zip)
Blender 3.1: <https://download.blender.org/release/Blender3.1/>
Blender WoW Studio for 3.1: [https://mega.nz/file/LMFX1TiZ#pcG5oA7xV ... wFYx1MOjmM](https://mega.nz/file/LMFX1TiZ#pcG5oA7xV2ObQqyjQcZSAHoYNQeF_HpFLwFYx1MOjmM)
(optional) m2_by_appletrey.blend: [https://github.com/Appletrey/OBJtoM2-Bl ... /tree/main](https://github.com/Appletrey/OBJtoM2-Blender-File/tree/main)
Amaroth's Tool Package: [https://model-changing.net/files/file/9 ... -toolpack/](https://model-changing.net/files/file/96-amaroths-toolpack/)
Java: [https://www.java.com/en/download/help/d ... tions.html](https://www.java.com/en/download/help/download_options.html)
jm2converter: <https://github.com/WowDevs/jM2converter>
BLPGN Converter: [https://www.wowinterface.com/downloads/ ... erter.html](https://www.wowinterface.com/downloads/info22128-BLPNGConverter.html)

 **F.A.Q. by Kazgrim:**
 1. How do helmets and shoulders work in WoW?

Helmets and shoulders are 3d models in the file format m2. Each expansion of WoW has a unique m2 format. This means that a m2 file from a later expansion does not work in a previous expansion, and vice versa. Therefore, it is important that we convert the m2 file to the correct expansion version in order for it to work ingame.

 2. Why do I need a Wrath of the Lich King client?

The tools and scripts I use -only- work with the m2 version from wrath of the lich king. We will need models from WotLK in order to properly refrence from and align our custom model to make sure it fits to the character model.

 3. Why do I need a server repack to create custom models?

You don't, but it makes testing them possible. You can't add models without replacing existing ones to someone else's server unless they input the correct data to the server DB and DBC.

 4. Why are there so many different versions of the same helmet model?

Each race AND gender has a unique 3d model of a given helmet. You will have to create a unique version for all races and each gender if you want to allow each race/gender to wear a custom helmet. Helmets that correspond to a race and gender end with a specific suffix, such as HuM (human male) or DwF (Dwarf female) or OrM (Orc male).

 5. Why is there a left and right version for shoulder models?

Shoulder models require a left and right version. If you want a custom model to rest on your right shoulder, you need to create a model that fits for the right shoulder. Unlike helmets, shoulders are not unique to races or genders THEREFORE you only need two models (one for left, one for right)..

 **Disclaimer:**
Many other modder works with the OBJtoM2 Converter and 010 Editor. I think, there are many paths that lead to the goal. However, an OBJtoM2 converter only works with the .obj files from blender 2.79b and triangles must be selected in the export, not to mention the 010 editor and other sources of error. the easiest way for me is via the addon "Blender WoW Studio" which is exclusively for version 3.1
How to install WoW Blender Studio addon: [https://wowemu.org/threads/how-to-insta ... art-1.283/](https://wowemu.org/threads/how-to-install-wow-blender-studio-addon-part-1.283/)

also, the filenames from the example i'll made in brackets "[]"

 **The Steps:**

 **Step 1. Exporting a character model, an item (head/shoulder/weapon) and the texture from WoW model viewer for 3.5.5a**

At first you need reference models to be an the right place and scale for your custom model.

![Image](https://i.ibb.co/GFkL1jP/001.png)

Open the WoW Model Viewer, select a character [dwarfmale.m2] and a item model [helm_plate_d_03_dwm.m2] and safe the models as .obj and .x3d the last will safe the texture automatly, that will make it easy to customate.

![Image](https://i.ibb.co/bQXMBR3/002.png)

 **Step 2. Create your Custom Model with Blender 3.1**

This is the fun part and i'll will you present the result that includes some photoshop texture stuff ect.

![Image](https://i.ibb.co/p3b7JWw/003.png)

so import the [dwarfmale.obj] and [helm_plate_d_03_dwm.obj]  files into your blender and edit them. Make sure that the helmet and the shoulders are separate models. You can also import shoulders to see if the scale of the object and if the position of the midpoint fits to the retail model. Now we need to safe the seperate models as [dwarf_platte_head_001.obj], [dwarf_platte_Rshoulder_001.obj] and [dwarf_platte_Lshoulder_001.obj].   Btw, select the model you'll export, then export as obj. and click on "Selected Only" is much easier.

![Image](https://i.ibb.co/yBXhwh3/004.png)

 **Step 3. BLPNG Converter**

(!) be sure the texture you use is the same size as the original texture (square 256x256) otherwise you won't be able to convert the .png file to a .blp

![Image](https://i.ibb.co/gRJ6wz1/005.png)

.blp is the type of file the patch needs to texture our models. the converter is a simple drag and drop program, self-explanatory. I've safe my texture as [dwarf_platte_001.png] and convert it to [dwarf_platte_001.blp]

 **Step 4. Working with Blender WoW Studio**

The easiest way to start is to download my [m2_by_appletrey.blend] in the download section. You can also import a .m2 item, delete all M2 Scene Properties, textures, materials, meshes, objects and actions, but yea, just download the clean file.

So, let's start with the head. At first you open [m2_start_file.blend] and import the .obj file [dwarf_platte_head_001.obj] into your [m2_by_appletrey.blend] template and drag the object towards the middle. check with [helm_plate_d_03_dwm.obj] if the position fits.

![Image](https://i.ibb.co/qg1dfRz/006.png)

Check if your Base Color is your [dwarf_platte_001.png]. Go to Material Properties and change the Vector to UV Map.

![Image](https://i.ibb.co/vHyrD3j/007.png)

Now we need to fill the information in the M2 section in the Scene Properties:

![Image](https://i.ibb.co/GnXRyYY/008.png)

In the M2 Geosets you name the #0 model your modelname. In the M2 Materials Section you name your Material from your Model, don't forget to activate Batch Compatible and the texture_1 and the Path in your patch linke in this case "Item\ObjectComponants\Head\dwarf_platte_001.blp" at the bottom. At least you name your texture at M2 Textures, the Path should be automaticly the same.
Now we can export the M2 file just like that.

![Image](https://i.ibb.co/qBqY4Z0/009.png)

 **Step 5. Converting to 1.12.1 version .m2**

Now we had all files for the 3.5.5a client. Copy the "wotlk" folder and name it "vanilla" so that the 3.5.5a version is not lost.

![Image](https://i.ibb.co/yBP2hr9/010.png)

Each expention has there own .m2 format so the 3.5.5a m2 wouldn't work in the 1.12.1 client. Now we need the jm2converter. The [jM2converter.java] Java Script will make it happen.
After you have downloaded java, open your cmd and write the following command in there:
java -jar "C:\Users\me\Desktop\3DEditWorkspace\jm2converter.jar" -in C:\Users\me\Desktop\3DEditWorkspace\dwarf_plate_001\vanilla\dwarf_platte_head_001_dwm.m2 -out C:\Users\me\Desktop\3DEditWorkspace\dwarf_plate_001\vanilla\dwarf_platte_head_001_dwm.m2  -cl
so it will looks like that:

![Image](https://i.ibb.co/P1XvDZZ/011.png)

your m2 in the "Vanilla" folder will be the 1.12.1 version.

 **Step 6. Adding the custom model to a custom mpq patch**

now we only have to include the files in a new patch. create a new patch with your MPQ editor for example with the name "patch-P.MPQ"

![Image](https://i.ibb.co/cknFjHw/13.png)

make sure that you use the same paths as in the given path for the [dwarf_platte_001.blp]
in this case Item\ObjectComponants\Head\dwarf_platte_001.blp

 **Step 7. Adding the custom model as an entry into client DBC**

We need "ItemDisplayInfo.dbc" from the server folder. make an original copy to be on the safe side.

![Image](https://i.ibb.co/CKWz55N/14.png)

then open the file we want to edit with the WDBX Editor. choose the classic version at the beginning. the numbering is leniar, if you want to change it, left click on the number.

![Image](https://i.ibb.co/mtzYGQ8/15.png)

in the second column comes the name of the model file WITHOUT the racial/gender ending, although it is an m2 file, the name must end with ".mdx". in the fourth column the texture name comes in without the blp ending. the sixth column is for the icon, you can choose a suitable one from the other helmet files above. the twelfth column is for the item type, 10 is for helmets. Columns 13 and 14 determine whether the hair and beard are displayed, with command 368 and 306 they are hidden.
now save your custom and paste it into the server folder and also into your "patch-P.MPQ"

![Image](https://i.ibb.co/qJ7nRjh/16.png)

 **Step 8. Adding the item to your server**

Open your 1.12.1 MySQL, than Heidi SQL or Navicat and create a new entry in item_template

![Image](https://i.ibb.co/hHLmJkH/17.png)

create a new item or copy an existing item, the latter is much easier because you don't have to enter all important data. I chose the "Durability Hat" with the Entry ID 14386

![Image](https://i.ibb.co/VQCcfQv/18.png)

![Image](https://i.ibb.co/GPKWYZM/19.png)

I copy the line, change the entry ID, change the name and display ID to that of my custom helmet 45000

![Image](https://i.ibb.co/MsTNp6P/20.png)

Before you start the game, be sure that your cache in the WTB folder is cleared. Now start the Server, log in, get the item with the GM command ".additem 66000" and you will see the results.

![Image](https://i.ibb.co/qJHTqQ8/21.png)

i know dwarfs without beards are ugly af, but first i have to find out which combination of values ​​is the right one for the beard to stay.

![Image](https://i.ibb.co/b1YvYVn/23.png)

Of course, importing also works with shoulders or weapons, there are only small differences that can be easily recognized in the dbc files of the original items

![Image](https://i.ibb.co/f12x64K/22.png)

## Post 61295 by Isvya (Patch Note Conspiracy Theorist) — 2023-09-07T16:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61295#p61295 | page 1 | era: pre-1.18.1 -->

Ok that looks some quality stuff.
The totem weapon is legit.

## Post 61298 by Karico — 2023-09-07T16:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61298#p61298 | page 1 | era: pre-1.18.1 -->

seems very hard to do crazy but looks dope

## Post 63466 by Ruinsguoguo — 2023-09-13T05:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=63466#p63466 | page 1 | era: pre-1.18.1 -->

Although I don't understand, it looks so impressive

## Post 63471 by Lonjo — 2023-09-13T05:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=63471#p63471 | page 1 | era: pre-1.18.1 -->

Phenomenal work breaking this down for us, thank you o7

## Post 111482 by Imonobor (Bug Report Enthusiast) — 2024-12-05T14:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111482#p111482 | page 1 | era: pre-1.18.1 -->

Hey, sorry for necro posting, but I'm having some weird behaviors with my models.

I edited the silverleaf model, but my version stop being rendered, unless its origin point is within the viewport/camera's bounds, so it disappears on the edge of the screen. The vanilla one doesn't have this issue, nor does the peacebloom model I also edited the same way.

Also when picking it up, the model doesn't disappear until it leaves the viewport. Is this because it doesn't have a "stand" animation? Or perhaps because I remove a [weird human head mesh](https://forum.turtlecraft.gg/viewtopic.php?f=19&t=16339) within the plant? :D

Is there some forum or discord where I can discuss and get help for issues like that? WoW modding is VERY unnecessarily complicated, damn. And I have a lot of experience modding WC3.

## Post 113545 by jy02339377 — 2024-12-20T11:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113545#p113545 | page 1 | era: pre-1.18.1 -->

WoW Blender Studio addon ，The link cannot be downloaded anymore。3q！

## Post 113856 by jy02339377 — 2024-12-22T14:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113856#p113856 | page 1 | era: pre-1.18.1 -->

Thank you very much for your technical sharing!
But there is a problem, my BLENDER doesn't have a suitable plugin because the plugin link you sent is no longer valid. Could you please send me the appropriate plugin and the tutorial for installing and setting up the plugin.
Thank you.
I am your fan!
My email: [[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection#cbf9fcfdf3fbf3f8faf38bbabae5a8a4a6)
Thanks again!

## Post 113923 by jy02339377 — 2024-12-23T00:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113923#p113923 | page 1 | era: pre-1.18.1 -->

If I am fortunate enough to have you see my reply, could you please help me? Thank you very much~
Looking forward to communicating with you~

## Post 113956 by Imonobor (Bug Report Enthusiast) — 2024-12-23T07:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113956#p113956 | page 1 | era: pre-1.18.1 -->

> **jy02339377 wrote: Mon Dec 23, 2024 12:34 am**
> If I am fortunate enough to have you see my reply, could you please help me? Thank you very much~
>  Looking forward to communicating with you~

Hey sorry for the late reply. Here I reuploaded the addon for Blender 3.1 -> [https://www.dropbox.com/scl/fi/b4usxnus ... pwr8h&dl=0](https://www.dropbox.com/scl/fi/b4usxnus7iy6qovfs3cs1/io_scene_wmo.zip?rlkey=eraj0t8c8pockb8kzeyfz6xj1&st=1z0pwr8h&dl=0)

Install into Blender 3.1/3.1/scripts/addons and make sure there is no double folder.
Have fun! :)

EDIT: although now that I check, the link in the OP is working just fine for me.

## Post 113981 by jy02339377 — 2024-12-23T11:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113981#p113981 | page 1 | era: pre-1.18.1 -->

Thank you very much for your reply. I have installed BLENDER3.1 and the plugin you shared, but it is strange that I always encounter errors when importing M2 files. Have you ever encountered this problem? What version of WOW M2 file should the imported file be?
Also, how many places do I need to set the file location for the plugin? Is the error related to this setting?
Thank you for your help and patience~![Image]()

*Last edited by jy02339377 on Mon Dec 23, 2024 11:31 am, edited 1 time in total.*

## Post 114087 by jy02339377 — 2024-12-24T02:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114087#p114087 | page 1 | era: pre-1.18.1 -->

unhappy_turtle   unhappy_turtle  Directly importing M2 model (10.1wow) will result in the following error:

Python: Traceback (most recent call last):
File "E:\模型工具\blender3.1.0\3.1\scripts\addons\io_scene_wmo\ui\operators.py", line 229, in execute
import_m2(int(context.scene.wow_scene.version), self.filepath, True)
File "E:\模型工具\blender3.1.0\3.1\scripts\addons\io_scene_wmo\m2\import_m2.py", line 16, in import_m2
game_data = load_game_data()
File "E:\模型工具\blender3.1.0\3.1\scripts\addons\io_scene_wmo\utils\misc.py", line 111, in load_game_data
bpy.wow_game_data = WoWFileData(addon_preferences.wow_path, addon_preferences.project_dir_path)
File "E:\模型工具\blender3.1.0\3.1\scripts\addons\io_scene_wmo\pywowlib\archives\wow_filesystem.py", line 24, in __init__
self.db_files_client.init_tables()
File "E:\模型工具\blender3.1.0\3.1\scripts\addons\io_scene_wmo\pywowlib\archives\wow_filesystem.py", line 416, in init_tables
self.add('AnimationData')
File "E:\模型工具\blender3.1.0\3.1\scripts\addons\io_scene_wmo\pywowlib\archives\wow_filesystem.py", line 400, in add
wdb.read_from_gamedata(self.game_data)
File "E:\模型工具\blender3.1.0\3.1\scripts\addons\io_scene_wmo\pywowlib\wdbx\wdbc.py", line 105, in read_from_gamedata
f = BytesIO(game_data.read_file('DBFilesClient\\{}.dbc'.format(self.name))[0])
File "E:\模型工具\blender3.1.0\3.1\scripts\addons\io_scene_wmo\pywowlib\archives\wow_filesystem.py", line 79, in read_file
storage, is_archive = self.has_file(identifier)
File "E:\模型工具\blender3.1.0\3.1\scripts\addons\io_scene_wmo\pywowlib\archives\wow_filesystem.py", line 34, in has_file
for storage, storage_type in reversed(self.files):
TypeError: 'NoneType' object is not reversible

location: <unknown location>:-1

unhappy_turtle_head   unhappy_turtle_head  Will WOW When exporting the GLTF model exported from EXPORT directly to M2 after importing, an error occurs:

Python: Traceback (most recent call last):
File "E:\模型工具\blender3.1.0\3.1\scripts\addons\io_scene_wmo\ui\operators.py", line 286, in execute
export_m2(int(context.scene.wow_scene.version), self.filepath, self.export_selected, self.autofill_textures, self.forward_axis, self.scale)
File "E:\模型工具\blender3.1.0\3.1\scripts\addons\io_scene_wmo\m2\export_m2.py", line 50, in export_m2
create_m2(version,filepath,selected_only,fill_textures,forward_axis, scale).write(filepath)
File "E:\模型工具\blender3.1.0\3.1\scripts\addons\io_scene_wmo\m2\export_m2.py", line 39, in create_m2
bl_m2.save_geosets(selected_only, fill_textures)
File "E:\模型工具\blender3.1.0\3.1\scripts\addons\io_scene_wmo\m2\m2_scene.py", line 2915, in save_geosets
if (wow_path) in final_textures:
UnboundLocalError: local variable 'wow_path' referenced before assignment

location: <unknown location>:-1

Thank you for the guidance of the art master~

## Post 114106 by Imonobor (Bug Report Enthusiast) — 2024-12-24T07:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114106#p114106 | page 1 | era: pre-1.18.1 -->

> **jy02339377 wrote: Mon Dec 23, 2024 11:06 am**
> Thank you very much for your reply. I have installed BLENDER3.1 and the plugin you shared, but it is strange that I always encounter errors when importing M2 files. Have you ever encountered this problem? What version of WOW M2 file should the imported file be?
>  Also, how many places do I need to set the file location for the plugin? Is the error related to this setting?
>  Thank you for your help and patience~![Image]()

No, I haven't encountered this particular error, so I'm not sure how to help, sorry. Make sure the m2 version is wotlk. Follow the tutorial in the OP.

## Post 114114 by jy02339377 — 2024-12-24T08:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114114#p114114 | page 1 | era: pre-1.18.1 -->

[/quote]

No, I haven't encountered this particular error, so I'm not sure how to help, sorry. Make sure the m2 version is wotlk. Follow the tutorial in the OP.
[/quote]

Thank you very much for taking the time to answer my questions. I will continue to study until I can use this plugin normally.
I hope that we can discuss and have the opportunity to collaborate on some models in the near future to create a different wow~

## Post 114173 by jy02339377 — 2024-12-25T03:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114173#p114173 | page 1 | era: pre-1.18.1 -->

![Image](https://ibb.co/H7m7VWF.png)
![Image](https://ibb.co/yfq23Z4.png)

turtle_tongue   turtle_tongue
My favorite Diablo 2 made me embed it into wlk~
Happy~

## Post 114201 by Elkepwn (Barrens Chat Casualty) — 2024-12-25T09:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114201#p114201 | page 1 | era: pre-1.18.1 -->

Hey! Unfortunately, this tutorial is no longer up to date! I'm now working with Blender version 3.4 <https://download.blender.org/release/Blender3.4/> and the latest version of WBS <https://gitlab.com/skarnproject/blender-wow-studio> you can find a tutorial here!
[embed: https://www.youtube.com/embed/pVM3ydRkuv0]

The first part of the video on how to set up the addon is important, everything else describes how to import and edit WMO (buildings)

## Post 114207 by jy02339377 — 2024-12-25T11:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114207#p114207 | page 1 | era: pre-1.18.1 -->

> **Elkepwn wrote: Wed Dec 25, 2024 9:51 am**
> Hey! Unfortunately, this tutorial is no longer up to date! I'm now working with Blender version 3.4 <https://download.blender.org/release/Blender3.4/> and the latest version of WBS <https://gitlab.com/skarnproject/blender-wow-studio> you can find a tutorial here!
> [embed: https://www.youtube.com/embed/pVM3ydRkuv0]
>
>
>  The first part of the video on how to set up the addon is important, everything else describes how to import and edit WMO (buildings)

Thank you so much ~ this video is exactly what I needed!  hiding_smth_turtle_head   hiding_smth_turtle_head   hiding_smth_turtle_head   hiding_smth_turtle_head   hiding_smth_turtle_head

## Post 114808 by jy02339377 — 2024-12-30T01:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114808#p114808 | page 1 | era: pre-1.18.1 -->

I'm encountering a very frustrating problem with Blender 3.1.  I installed the M2 import plugin following a video tutorial.  The import process completes without any error messages. However, when I re-export the M2 file without making any modifications, the file size is significantly smaller, and the SKIN file contains far fewer entries. This renders the exported M2 file unusable. I've checked all the settings I'm aware of, but haven't found anything incorrect.  Could anyone help me solve this difficult issue?
![Image](https://ibb.co/41rvWW6)
![Image](https://ibb.co/x5hM3F2)
![Image](https://ibb.co/kXf72Nb)

I would be very grateful for any assistance！

## Post 115929 by Diaboli — 2025-01-08T19:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115929#p115929 | page 1 | era: pre-1.18.1 -->

Hi! I'm having trouble converting the m2 file for 1.12.1, and I don't understand that part of the tutorial.

When I run the cmd and the command it promts me with a window asking to open the M2 file with a program from a drop-off list.

## Post 115972 by Imonobor (Bug Report Enthusiast) — 2025-01-09T07:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115972#p115972 | page 1 | era: pre-1.18.1 -->

> **Diaboli wrote: Wed Jan 08, 2025 7:51 pm**
> Hi! I'm having trouble converting the m2 file for 1.12.1, and I don't understand that part of the tutorial.
>
>  When I run the cmd and the command it promts me with a window asking to open the M2 file with a program from a drop-off list.

Make sure you have the right version of java installed and it has its environment path correctly set up in your OS. You can check that by just typing "java" in the cmd, if you get an error, then here is a tutorial to set it up: [https://www.codejava.net/java-core/how- ... windows-10](https://www.codejava.net/java-core/how-to-set-java-home-environment-variable-on-windows-10)

Also, it's important to follow syntax. You begin the cmand with "java -jar", then point the path to the converter .jar file. Then you give it the input and output paths it expects with ' -in "path.m2" -out "path.m2" '

When writing any of the paths it's much easier to copy them from the explorer window to avoid mistakes.

So the final command might look like:
Code: Select all

```
java -jar "C:\m2converter.jar" -in "C:\model.m2" -out "C:\model_converted.m2"
```

(This assumes all your files are in the root of the C:\ drive, which they shouldn't be, replace with your own paths.)

The parentheses are there to foolproof the command in case you have spaces in your paths.
Hope this helps!   smiling_turtle_head

## Post 116009 by Diaboli — 2025-01-09T16:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116009#p116009 | page 1 | era: pre-1.18.1 -->

> **Imonobor wrote: Thu Jan 09, 2025 7:31 am**
> > **Diaboli wrote: Wed Jan 08, 2025 7:51 pm**
> > Hi! I'm having trouble converting the m2 file for 1.12.1, and I don't understand that part of the tutorial.
> >
> >  When I run the cmd and the command it promts me with a window asking to open the M2 file with a program from a drop-off list.
>
>   Make sure you have the right version of java installed and it has its environment path correctly set up in your OS. You can check that by just typing "java" in the cmd, if you get an error, then here is a tutorial to set it up: [https://www.codejava.net/java-core/how- ... windows-10](https://www.codejava.net/java-core/how-to-set-java-home-environment-variable-on-windows-10)
>
>  Also, it's important to follow syntax. You begin the cmand with "java -jar", then point the path to the converter .jar file. Then you give it the input and output paths it expects with ' -in "path.m2" -out "path.m2" '
>
>  When writing any of the paths it's much easier to copy them from the explorer window to avoid mistakes.
>
>  So the final command might look like:
>  Code: Select all
>
> ```
> java -jar "C:\m2converter.jar" -in "C:\model.m2" -out "C:\model_converted.m2"
> ```
>
>  (This assumes all your files are in the root of the C:\ drive, which they shouldn't be, replace with your own paths.)
>
>  The parentheses are there to foolproof the command in case you have spaces in your paths.
>  Hope this helps!   smiling_turtle_head

Thank you for the reply and the links, I appreciate the help a lot!

I got the file to finally convert, but when using in game with the 1.12.1 server it makes the character invisible and the camera stops following.

Have you ever got a similar issue? I'm completely lost at this point

## Post 116073 by Imonobor (Bug Report Enthusiast) — 2025-01-10T06:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116073#p116073 | page 1 | era: pre-1.18.1 -->

> **Diaboli wrote: Thu Jan 09, 2025 4:06 pm**
> Thank you for the reply and the links, I appreciate the help a lot!
>
>  I got the file to finally convert, but when using in game with the 1.12.1 server it makes the character invisible and the camera stops following.
>
>  Have you ever got a similar issue? I'm completely lost at this point

Glad I could help somewhat. Unfortunately I'm not skilled enough to help further, since the only models I've converted have had issues as well.

Here are some links to the wow modding discord:
<https://discord.gg/68WSJPGUJs>
And the blender wow studio discord:
<https://discord.gg/kZDmFYj5Sj>

I hope someone there can help answer your questions.

## Post 116284 by Mac (Bug Report Enthusiast) — 2025-01-12T00:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116284#p116284 | page 1 | era: pre-1.18.1 -->

I am trying to use this guide to retexture an existing texture for an existing model, but it just comes out as a garbled mess in game. Curious where I might be going wrong, as I’ve read textures can be fickle.

Here’s what I do: extract the texture from an MPQ as a BLP file, convert to TGA (I have also tried PNG), make my edit, convert back to BLP, make an MPQ, and then insert the BLP.

Any tips?

## Post 116318 by Imonobor (Bug Report Enthusiast) — 2025-01-12T09:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116318#p116318 | page 1 | era: pre-1.18.1 -->

> **Mac wrote: Sun Jan 12, 2025 12:37 am**
> I am trying to use this guide to retexture an existing texture for an existing model, but it just comes out as a garbled mess in game. Curious where I might be going wrong, as I’ve read textures can be fickle.
>
>  Here’s what I do: extract the texture from an MPQ as a BLP file, convert to TGA (I have also tried PNG), make my edit, convert back to BLP, make an MPQ, and then insert the BLP.
>
>  Any tips?

Haven't done this myself, but do make sure the texture has an alpha channel as a tga before converting back to blp, even if it's all white. I remember that was a problem with warcraft 3 modding.
Can you take a screenshot of the before and after? It might help to diagnose the problem.

## Post 116673 by Tedrizze — 2025-01-14T09:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116673#p116673 | page 1 | era: pre-1.18.1 -->

> **Mac wrote: Sun Jan 12, 2025 12:37 am**
> I am trying to use this guide to retexture an existing texture for an existing model, but it just comes out as a garbled mess in game. Curious where I might be going wrong, as I’ve read textures can be fickle.
>
>  Here’s what I do: extract the texture from an MPQ as a BLP file, convert to TGA (I have also tried PNG), make my edit, convert back to BLP, make an MPQ, and then insert the BLP.
>
>  Any tips?

I can help you with that.
Basically my workflow is as follows:

 1. Load the Model in WarcraftModelviewer
 2. Export Textures from WMV as .png
 3. Edit texture with your fav programm (GIMP, Photoshop, etc...)
 4. Convert .png to .blp using blpng converter (Settings have to be correct)
 5. put the new blp in a new patch.mpg (structure has to be the same)

Hope that helps. If not, we can try to meetup in discord.

## Post 119210 by Pangea — 2025-02-07T03:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119210#p119210 | page 1 | era: pre-1.18.1 -->

So would the hands and feet (gauntlets/boots) be the same as the helm and shoulders? Or are they different? (Sorry for the smooth brain question.)

## Post 119230 by Imonobor (Bug Report Enthusiast) — 2025-02-07T07:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119230#p119230 | page 1 | era: pre-1.18.1 -->

> **Pangea wrote: Fri Feb 07, 2025 3:54 am**
> So would the hands and feet (gauntlets/boots) be the same as the helm and shoulders? Or are they different? (Sorry for the smooth brain question.)

No, only helm and shoulders have dedicated models. Gloves and feet are just textures that get applied to a few base models (slim/none, thin, thick, with overhang) that are baked into each race I think. No idea how to select which one each piece of equipment uses though.

## Post 124486 by paladinxxx — 2025-03-30T19:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124486#p124486 | page 1 | era: pre-1.18.1 -->

一个伟大且有创意的史诗工程，希望有我体验！

## Post 170776 by Adivon — 2026-03-14T01:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170776#p170776 | page 1 | era: 1.18.1-announced-pre-release -->

I want to add a sock texture to the feet of the pants so that when shoes are put on, it creates the effect of wearing both socks and shoes. Is this possible?

## Post 170835 by Zvyrhol (Grandmaster of Forum PvP) — 2026-03-14T22:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170835#p170835 | page 1 | era: 1.18.1-announced-pre-release -->

Nice tutorial!

Thank you Adivon for necroing this post, it's a jewel among rocks here.

