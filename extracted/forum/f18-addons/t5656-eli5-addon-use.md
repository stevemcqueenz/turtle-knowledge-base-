---
title: "eli5 addon use"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5656"
topic_id: 5656
forum_id: 18
forum: "AddOns"
author: "Cwolf"
author_authority: "player"
posted: "2023-02-19T18:47:00Z"
last_post: "2023-02-19T21:02:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:32:52Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# eli5 addon use

## Post 35241 by Cwolf — 2023-02-19T18:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35241#p35241 | page 1 | era: pre-1.18.1 -->

sorry for the nub question, but how exactly do you get addons to work in game? I have atlas loot downloaded but i dont know how to get it into the game itself.  its not available in the addons tab next to my characters.  any advice is appreciated.

Thanks!

## Post 35245 by Ibux (Patch Note Conspiracy Theorist) — 2023-02-19T19:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35245#p35245 | page 1 | era: pre-1.18.1 -->

if it's downloaded from github then you most likely just need to remove -master from the folder name.
this is the most recent version of atlas loot. <https://github.com/Lexiebean/AtlasLoot>

## Post 35247 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-19T19:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35247#p35247 | page 1 | era: pre-1.18.1 -->

You need to use a program like 7zip or Winrar to extract the contents of the compressed file to your addons folder, which can be found in the main WoW folder for your Turtle install. Look for whatever you have the main WoW folder named as (mine is renamed to "Turtle WoW", the game doesn't care), and then Interface > Addons

Next, make sure there isn't another folder inside the one you extracted. It should go [Main folder] > Interface > Addons > [Mod Name] > [All of the mod's files] - there may be other folders in the mod, but the base level should contain a file with a ".toc" extension. If the folder with the .toc is inside another folder (other than the Addons folder), WoW can't see it.

Lastly, make sure the mod folder has the same name as the .toc file, minus the .toc part. If they don't have the exact same name, WoW goes, "Oh. That's not *this* mod's .toc file!" and ignores it.

Do all that, and the addon should appear on the in-game list.

## Post 35253 by Cwolf — 2023-02-19T20:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35253#p35253 | page 1 | era: pre-1.18.1 -->

thankyou both very much, success.

## Post 35260 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-19T21:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35260#p35260 | page 1 | era: pre-1.18.1 -->

Glad I could help!   happy_turtle_head

