---
title: "Frequently asked questions Support"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2111"
topic_id: 2111
forum_id: 3
forum: "Help & Support"
author: "Fin"
author_authority: "player"
posted: "2021-10-05T16:52:00Z"
last_post: "2021-10-07T10:52:00Z"
post_count: 18
pages: 1
fetched: "2026-09-10T09:26:57Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Frequently asked questions Support

## Post 12880 by Fin (Patch Note Conspiracy Theorist) — 2021-10-05T16:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12880#p12880 | page 1 | era: pre-1.18.1 -->

***Frequently asked questions Support***

- [I can't log in the game, what can i do ?](https://forum.turtlecraft.gg/viewtopic.php?p=12881#p12881)

- [My screen goes black when I switch to windowed mode, how do i fix it?](https://forum.turtlecraft.gg/viewtopic.php?p=12882#p12882)

- [How can i set refresh rate/get more fps?](https://forum.turtlecraft.gg/viewtopic.php?p=12883#p12883)

- [How can i play Turtle WoW on linux and mac?](https://forum.turtlecraft.gg/viewtopic.php?p=12884#p12884)

- [I want to use WoD or Legion model packs, will it work?](https://forum.turtlecraft.gg/viewtopic.php?p=12885#p12885)

- [My camera has weird movement, what can i do?](https://forum.turtlecraft.gg/viewtopic.php?p=12886#p12886)

- [My fps drops when I move the mouse in game, the mouse continuously blinks, what can i do?](https://forum.turtlecraft.gg/viewtopic.php?p=12887#p12887)

- [Models in game look messed up and i get crashes, how do i fix it?](https://forum.turtlecraft.gg/viewtopic.php?p=12888#p12888)

- [How do i change resolution when i have 2 monitors?](https://forum.turtlecraft.gg/viewtopic.php?p=12889#p12889)

- [How can i choose which GPU  the game uses?](https://forum.turtlecraft.gg/viewtopic.php?p=12890#p12890)

- [How do i reset my password?](https://forum.turtlecraft.gg/viewtopic.php?p=12891#p12891)

- [Where can i report a bug?](https://forum.turtlecraft.gg/viewtopic.php?p=12892#p12892)

- [How can i ask for help in game / How do i send a ticket?](https://forum.turtlecraft.gg/viewtopic.php?p=12893#p12893)

- [How do i open screenshots /TGA files?](https://forum.turtlecraft.gg/viewtopic.php?p=12894#p12894)

- [I can't see NPC, they are invisible until i restart the game, what can i do?](https://forum.turtlecraft.gg/viewtopic.php?p=12934#p12934)

- [How do i reset my chat settings?](https://forum.turtlecraft.gg/viewtopic.php?p=12935#p12935)

- [I don't have a WTF folder, what do i do?](https://forum.turtlecraft.gg/viewtopic.php?p=12936#p12936)

## Post 12881 by Fin (Patch Note Conspiracy Theorist) — 2021-10-05T16:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12881#p12881 | page 1 | era: pre-1.18.1 -->

**I can't log in the game, what can i do ?**

Try to:

- Place this file in your game folder: <https://turtlecraft.gg/realmlist.wtf>

- Flush your DNS.

- Check your Firewall.

- Check your VPN.
Be aware:

- Forum and in game have different usernames. Your in game username is the one in the email you receive when you register.

- If you get your information wrong too many times you will get locked out for 15 minutes. The message you will see will be "Could not log in to World of Warcraft at this time. Please try again later."

## Post 12882 by Fin (Patch Note Conspiracy Theorist) — 2021-10-05T16:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12882#p12882 | page 1 | era: pre-1.18.1 -->

**My screen goes black when I switch to windowed mode, how do i fix it ?**

Add these lines to you WTF/Config.wtf file found in your main WoW folder: Code: Select all

```
SET gxWindow "1"
SET gxMaximize "1"
```

## Post 12883 by Fin (Patch Note Conspiracy Theorist) — 2021-10-05T16:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12883#p12883 | page 1 | era: pre-1.18.1 -->

**How can i set refresh rate/get more fps?**

Using gxRefresh to set the refresh rate won't work properly.

Try to:

- Turn game to Windowed mode maximized.

- Turn V-sync off.
V sync  off might lead to random fps jumps, in that case you will need to limit it in the your GPU control panel:

- For 60/75 Hz monitors, limit FPS to: 64

- For 120/144/165/240 Hz monitors, limit FPS to: 120

## Post 12884 by Fin (Patch Note Conspiracy Theorist) — 2021-10-05T16:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12884#p12884 | page 1 | era: pre-1.18.1 -->

**How can i play Turtle WoW on linux and mac?**

You need to use Wine.

## Post 12885 by Fin (Patch Note Conspiracy Theorist) — 2021-10-05T16:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12885#p12885 | page 1 | era: pre-1.18.1 -->

**I want to use WoD or Legion model packs, will it work?**

No, they are no longer supported. Models will look weird and your game will randomly crash.

## Post 12886 by Fin (Patch Note Conspiracy Theorist) — 2021-10-05T16:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12886#p12886 | page 1 | era: pre-1.18.1 -->

**My camera has weird movement, what can i do?**

Add these lines to you WTF/Config.wtf file found in your main WoW folder:
Code: Select all

```
SET rawMouseEnable "1"
SET rawMouseAccelerationEnable "0"
```

## Post 12887 by Fin (Patch Note Conspiracy Theorist) — 2021-10-05T16:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12887#p12887 | page 1 | era: pre-1.18.1 -->

**My fps drops when I move the mouse in game, the mouse continuously blinks, what can i do ?**

Turn off hardware cursor in video game settings.

## Post 12888 by Fin (Patch Note Conspiracy Theorist) — 2021-10-05T16:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12888#p12888 | page 1 | era: pre-1.18.1 -->

**Models in game look messed up and i get crashes, how do i fix it?**

Turn on Vertex Animation Shaders in Video settings.

## Post 12889 by Fin (Patch Note Conspiracy Theorist) — 2021-10-05T16:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12889#p12889 | page 1 | era: pre-1.18.1 -->

**How do i change resolution when i have 2 monitors ?**

Use [CRU[Custom Resolution Utility]](https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CRU).

## Post 12890 by Fin (Patch Note Conspiracy Theorist) — 2021-10-05T16:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12890#p12890 | page 1 | era: pre-1.18.1 -->

**How can i choose which gpu the game uses?**

Go to Settings > System > Display. Scroll down and click the  Graphics Settings.

![Image](https://i.ibb.co/LJdBJr3/Application-Frame-Host-Koh0-Mp5oa7.png)

Choose the aplication.

![Image](https://i.ibb.co/2y2TNB5/Application-Frame-Host-gf-IUn-Fo-Fr-I.png)

Choose your prefered GPU.

![Image](https://i.ibb.co/TcWCzQj/Application-Frame-Host-Ie-NWV392-Kc.png)

## Post 12891 by Fin (Patch Note Conspiracy Theorist) — 2021-10-05T16:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12891#p12891 | page 1 | era: pre-1.18.1 -->

**How do i reset my password ?**

You can reset your password on the  [Turtle WoW website](https://turtlecraft.gg/#/home).

[![Image](https://i.ibb.co/ftmHN88/firefox-0-SWCp00ifs.png)](https://ibb.co/rMnHpbb)

You  will get a  generated password by  email, then use the following command in game  to change it to a custom password.
Code: Select all

```
.account password old_password new_password new_password
```

## Post 12892 by Fin (Patch Note Conspiracy Theorist) — 2021-10-05T16:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12892#p12892 | page 1 | era: pre-1.18.1 -->

**Where can i report a bug ?**

You can report bugs in one of the following places:

- [In game tickets](https://forum.turtlecraft.gg/viewtopic.php?p=12893#p12893) - Best way to get GM assistance!

- [Discord support](https://discord.com/invite/mBGxmHy) - Discuss issues with support here!

- [Github Bug Tracker](https://github.com/slowtorta/turtlewow-bug-tracker/issues) - Here you can check the status of known issues and keep in touch with the developers!
For some issues, if the behavior is not self explanatory, detailed steps to reproduce the problem and sources for the expected behavior would be greatly appreciated. If a issue can't be reproduced, it will be impossible to fix.

## Post 12893 by Fin (Patch Note Conspiracy Theorist) — 2021-10-05T16:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12893#p12893 | page 1 | era: pre-1.18.1 -->

**How can I ask for help in game / How do I send a ticket ?**

Near your key ring, there is a red question mark, press it to send a in game ticket. If you have pf ui,and you don't have the micro bar enabled, you  can type /gm to open the interface. You don't need to be online for tickets to be solved. We are going to answer by in game mail.

![Image](https://i.ibb.co/Z6Y2jfn/Wo-W-DU5-Iwal-DPQ.png)

## Post 12894 by Fin (Patch Note Conspiracy Theorist) — 2021-10-05T16:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12894#p12894 | page 1 | era: pre-1.18.1 -->

**How do i open screenshots /TGA files ?**

You can use any image editor to view the screenshots and change the format.

If you want to batch convert in 1 click  you can use  [Convert Shorts](https://www.hiveworkshop.com/threads/convertshots.210623/).

## Post 12934 by Fin (Patch Note Conspiracy Theorist) — 2021-10-07T10:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12934#p12934 | page 1 | era: pre-1.18.1 -->

**I can't see NPC, they are invisible until i restart the game, what can i do?**

Raise terrain distance in video settings.

## Post 12935 by Fin (Patch Note Conspiracy Theorist) — 2021-10-07T10:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12935#p12935 | page 1 | era: pre-1.18.1 -->

**How do i reset my chat settings?**

For chat fix go to: Turtle WoW Folder > WTF > Account > [Your Account Name] > Turtle WoW > [Character Name] and delete your chat-cache folder.

## Post 12936 by Fin (Patch Note Conspiracy Theorist) — 2021-10-07T10:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12936#p12936 | page 1 | era: pre-1.18.1 -->

**I don't have a WTF folder, what do i do?**

Move the game folder out of program files and start the game, the WTF folder will appear.

