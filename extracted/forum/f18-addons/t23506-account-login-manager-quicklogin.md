---
title: "Account Login Manager - QuickLogin"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23506"
topic_id: 23506
forum_id: 18
forum: "AddOns"
author: "Olzon"
author_authority: "player"
posted: "2026-01-06T03:06:00Z"
last_post: "2026-01-06T03:06:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T10:22:27Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Account Login Manager - QuickLogin

## Post 164497 by Olzon — 2026-01-06T03:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=164497#p164497 | page 1 | era: 1.18.1-announced-pre-release -->

**I noticed that all the Account Login addons on the Wiki were either gone or saved passwords in plaintext which is unacceptable in my opinion, so I made my own!**

 **QuickLogin** is a small Windows utility that streamlines logging into World of Warcraft by securely storing account credentials and typing them into the login screen on demand.

It is designed for convenience and simplicity, with a clean interface and no background processes.

<https://github.com/totalllyswede/QuickLogin>

![✨](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2728.svg) What QuickLogin Does
Securely stores login credentials using Windows Credential Manager
Brings World of Warcraft to the foreground
Types the selected account’s username and password
Submits the login automatically
Exits immediately after completing the action
QuickLogin does not interact with the game client beyond sending standard keyboard input.

![🖥️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f5a5.svg) Requirements
Windows 7 or newer
.NET Desktop Runtime 8
World of Warcraft running and on the login screen

![📁](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4c1.svg) Installation
Download - QuickLogin.zip
Extract
Run QuickLogin.exe
Right Click > Send to Desktop to make a shortcut

![🔒](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f512.svg) Security
Credentials are stored only in Windows Credential Manager
No plaintext credential files
No network communication
No telemetry or background services
All credentials are tied to the current Windows user account.

![🚀](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f680.svg) Usage
Start World of Warcraft and wait at the login screen
Launch QuickLogin
Add one or more accounts
Select an account from the dropdown
Click Log In
QuickLogin will focus the WoW window, type the credentials, submit the login, and then close automatically.

![⚠️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/26a0.svg) Important Notes
The “Remember Account Name” option must be unchecked on the WoW login screen
This tool relies on simulated keyboard input and requires the login screen to be active
QuickLogin is intended for personal convenience only

![❓](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2753.svg) FAQ
Does QuickLogin automate gameplay?

No. It only types credentials at the login screen.
Does it modify game files or memory?

No.
Is this affiliated with Blizzard?

No. This is an independent, community-made utility.

![📄](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4c4.svg) License
This project is provided as-is for personal use.
No warranties are expressed or implied.

