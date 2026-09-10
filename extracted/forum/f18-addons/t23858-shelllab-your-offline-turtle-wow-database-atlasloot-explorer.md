---
title: "ShellLab: Your Offline Turtle WoW Database & AtlasLoot Explorer"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23858"
topic_id: 23858
forum_id: 18
forum: "AddOns"
author: "Holylance"
author_authority: "player"
posted: "2026-02-04T03:11:00Z"
last_post: "2026-04-20T13:11:00Z"
post_count: 11
pages: 1
fetched: "2026-09-10T10:20:53Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# ShellLab: Your Offline Turtle WoW Database & AtlasLoot Explorer

## Post 167371 by Holylance — 2026-02-04T03:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167371#p167371 | page 1 | era: 1.18.1-announced-pre-release -->

Hi everyone,

I’m excited to share **ShellLab**, a powerful desktop companion for your journey on Turtle WoW. It’s designed to provide a lightning-fast, offline-friendly way to browse game data without needing to alt-tab to a browser or wait for slow websites to load.

 **GitHub:** [<https://github.com/oplancelot/ShellLab>](<https://github.com/oplancelot/ShellLab>)

 ---

### ![📦](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4e6.svg) Local AtlasLoot Browsing

Browse the complete collection of Turtle WoW items and loot tables locally. Whether you are hunting for specific dungeon drops or checking out new world rewards, the data is available instantly.

[![Image](https://i.ibb.co/S74PH24N/atlasloot.png)](https://ibb.co/DgHtmNH4)
### ![🌐](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f310.svg) Official Database Integration

Stay up to date with the latest Turtle WoW specific entries. ShellLab brings the official database details directly into a desktop interface, covering custom NPCs, Spells, and Quests unique to this server.

[![Image](https://i.ibb.co/Xrp0nzTT/database.png)](https://ibb.co/7dVM3GFF)

[![Image](https://i.ibb.co/FbTRnk3Z/npc.png)](https://ibb.co/KjvTmch4)

### ![🔍](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f50d.svg) Advanced Filtering & Search

Stop fighting with clunky search bars. ShellLab features powerful filtering options that allow you to narrow down items by stats, level, or type, making it easy to plan your gear progression.
[![Image](https://i.ibb.co/S4z82P6j/search.png)](https://ibb.co/LX3WM80F)

### ![⭐](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2b50.svg) Personal Favorites (Collections)

Found an item you need to farm later? Use the built-in collection feature to save items, quests, or NPCs to your personal favorites list for quick access anytime.

[![Image](https://i.ibb.co/3mFjVV8n/favorites.png)](https://ibb.co/DfMvmm6Z)

 ---

### ![📥](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4e5.svg) Download

Grab the latest release from our GitHub page:
![👉](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f449.svg) **[Download ShellLab Releases](<https://github.com/oplancelot/ShellLab/releases>)**

Feedback and suggestions are always welcome. See you in Azeroth!

*Last edited by Holylance on Wed Feb 04, 2026 3:26 am, edited 2 times in total.*

## Post 167372 by basednoob (Patch Note Conspiracy Theorist) — 2026-02-04T03:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167372#p167372 | page 1 | era: 1.18.1-announced-pre-release -->

the images not working. upload them with <https://imgbb.com/> and add them to the forum with the BBCode

## Post 167373 by Holylance — 2026-02-04T03:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167373#p167373 | page 1 | era: 1.18.1-announced-pre-release -->

Thanks a lot for the tip! I've re-uploaded the images to imgbb as you suggested, and the BBCode is working perfectly now. Appreciate the help!

## Post 167392 by Reploidrocsa (Bug Report Enthusiast) — 2026-02-04T08:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167392#p167392 | page 1 | era: 1.18.1-announced-pre-release -->

Might be a dumb question, but does it keep the db updated? Or everytime the web db changes it needs to be manually updated?

What about parts of the db that arent available to the public? Can you access them aswell?

What will happen when new patch drops and they close the db? Will this still be working?

## Post 167393 by Polang — 2026-02-04T09:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167393#p167393 | page 1 | era: 1.18.1-announced-pre-release -->

Can it filter out all the item that can be actively used?

## Post 167396 by Holylance — 2026-02-04T09:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167396#p167396 | page 1 | era: 1.18.1-announced-pre-release -->

> **Reploidrocsa wrote: Wed Feb 04, 2026 8:51 am**
> Might be a dumb question, but does it keep the db updated? Or everytime the web db changes it needs to be manually updated?
>
>  What about parts of the db that arent available to the public? Can you access them aswell?
>
>  What will happen when new patch drops and they close the db? Will this still be working?

This is a very important question, not dumb at all!

Offline Access: The app uses a local offline database, so it will still work perfectly even if the official DB is down for maintenance or a new patch drops.

Updates: It doesn't auto-update yet (I might add this in the future), but you can manually trigger an update in the Settings. It will fetch the latest data and sync it to your local DB. Once successful, you're all set.

Private Data: If you are looking for specific data that might not be public, you can always check the SQLite database file directly to see if it contains what you need.

## Post 167397 by Holylance — 2026-02-04T09:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167397#p167397 | page 1 | era: 1.18.1-announced-pre-release -->

> **Polang wrote: Wed Feb 04, 2026 9:06 am**
> Can it filter out all the item that can be actively used?

It’s not implemented yet, but it is definitely possible. I’m planning to refer to Wowhead’s filtering logic to add a feature that filters items with "Use" effects. Stay tuned!

## Post 167404 by Ashth0rn — 2026-02-04T11:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167404#p167404 | page 1 | era: 1.18.1-announced-pre-release -->

How do I open this? Readme.txt installation guide doesn't help:

### Installation

```bash
# Clone the repository
git clone <https://github.com/oplancelot/ShellLab.git>
cd ShellLab

# Install dependencies
go mod download
cd frontend && npm install && cd ..

# Run in development mode
wails dev

## Post 167410 by Holylance — 2026-02-04T12:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167410#p167410 | page 1 | era: 1.18.1-announced-pre-release -->

> **Ashth0rn wrote: Wed Feb 04, 2026 11:18 am**
> How do I open this? Readme.txt installation guide doesn't help:
>
>  ### Installation
>
>  ```bash
>  # Clone the repository
>  git clone <https://github.com/oplancelot/ShellLab.git>
>  cd ShellLab
>
>  # Install dependencies
>  go mod download
>  cd frontend && npm install && cd ..
>
>  # Run in development mode
>  wails dev

Just a quick heads-up: The README is mainly for developer reference. If you just want to use the app, you can download the latest version directly from the Releases page here: <https://github.com/oplancelot/ShellLab/releases>

## Post 172163 by Pucelle — 2026-03-24T14:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172163#p172163 | page 1 | era: post-1.18.1 -->

Thanks for your tool, I'm also looking for a turtle wow database for my site.

## Post 175999 by Zeran (Patch Note Conspiracy Theorist) — 2026-04-20T13:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175999#p175999 | page 1 | era: post-1.18.1 -->

So, with the server and the associated DB going down next month, any such preservation of info is now 100x more useful/important, if you are still considering it.

