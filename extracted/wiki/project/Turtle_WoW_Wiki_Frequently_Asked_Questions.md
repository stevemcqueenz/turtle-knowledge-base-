---
title: "Turtle WoW Wiki:Frequently Asked Questions"
url: "https://turtle-wow.fandom.com/wiki/Turtle_WoW_Wiki:Frequently_Asked_Questions"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-24T00:39:37Z"
fetched: "2026-09-10T07:40:05Z"
is_turtle_content: false
patch: null
categories: []
---
# Turtle WoW Wiki:Frequently Asked Questions

Here you will find an overview of frequently asked support questions.

- **Where can I download the latest client?** [Getting started]   [This](https://forum.turtle-wow.org/viewtopic.php?f=2&t=1649) forum post answers that question. Want to download the client directly? [Click here](https://eudl.turtlecraft.gg/twmoa_1180.zip).
- **What extra steps do I need to take to get the client to work? (if relevant)** [Getting started]
- # The client is downloaded as a zip archive. It is important this file is downloaded **and** extracted in a folder that's excluded from real-time protection. If you're experiencing issues, try disabling your anti-virus products and add the mentioned folder as an excepted folder for Windows Security real-time protection. Please follow [these](https://support.microsoft.com/en-us/windows/add-an-exclusion-to-windows-security-811816c0-4dfd-af4a-47e4-c301afe13b26) instructions by Microsoft.
- # Microsoft Windows includes a zip archiver by default. The instructions can be found [here](https://www.businessinsider.nl/how-to-unzip-files-on-windows-10/) but pretty much speak for themselves.
- # Start WoW.exe in the **extracted** folder. If this doesn't work, try to run it as Administrator by right clicking the icon. You can also create a Desktop shortcut to this file by rightclicking.
- # Still experiencing issues? You can of course always drop a line in #support on our Discord server for more interactive assistance. 
- **My client/camera starts lagging extremely or shows freezes, especially in certain zones?** [Technical issues]
A common cause is the enablement of the 'Hardware cursor' option under video, but can also have to do with other miscellaneous Video Options. Although your interface may look different, play around with the highlighted options shown in the image. 

- **I have enabled Windowed Mode and now my screen is black. How do I solve this?** [Technical issues]   A configuration file of your client can be found in the extracted folder. In the *WTF* folder there is a file called c*onfig.wtf*. Make sure the following lines are either added or changed to the following: <syntaxhighlight lang="ini">
SET gxWindow "1"
SET gxMaximize "1"
</syntaxhighlight>
