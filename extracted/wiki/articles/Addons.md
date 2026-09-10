---
title: "Addons"
url: "https://turtle-wow.fandom.com/wiki/Addons"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-09-09T01:15:26Z"
fetched: "2026-09-10T07:38:16Z"
is_turtle_content: false
patch: null
categories: ["A", "Addon"]
---
# Addons

## Looking to install Addons for Turtle WoW? Learn below about how Addons work in this version of WoW, then try **CTRL+F** and search the [Full Addons List](#Full Addons List) on this page to find what you need.
## About Addons; **Read Me!**
Turtle WoW 1.17.2 is a mod of the 2006 version of the game that uses the original 1.12 WoW Vanilla client. As such, **Classic addons** (usually marked for version 1.13/1.15) **DO NOT WORK!** If you are coming from Classic, forget all of what you know about addons and be prepared to find a completely new set of addons to accomplish what you want.

##### **Addons for Turtle WoW are a mix of:**
- Old addons developed back in the day, back in 2006
- New addons developed more recently in the private server era
- Modified versions of old and new addons, updated with fixes that accomodate Turtle's changes

The [#Full Addons List](#Full Addons List) section intends to always list the correct version that you should use.

##### **WeakAuras**
Back in the day, there was an addon called PowerAuras that allowed for easy visual tracking of buffs and debuffs. However, those of you who play on newer versions of WoW may know of PA's succssor: WeakAuras. WA has gone from just buff tracking to serving as a convenient platform for "mini-addons" that many players end up using extensively.

**WeakAuras DO NOT EXIST for Turtle WoW!** Instead, completely separate addons are needed to accomplish the same things that WA does. So if you are looking for a replacement for a specific WA, look for these separate addons instead.

### How to Install Addons
##### **GitAddonsManager**
If you're going to be playing on Turtle for a while and want a sustainable solution to addon management (like Curseforge for Retail/Classic), this is for you. There's a bit more effort to set up at first, but it's worth it in the long run.  

1. Download [GitAddonsManager](https://woblight.gitlab.io/overview/gitaddonsmanager/), and unzip the folder to wherever is most useful for you.
1. In this unzipped folder, find GitAddonsManager.exe and right click to make a shortcut.
1. Move this shortcut wherever you need, and you can easily launch the manager with it.
1. Complete the first time setup. When asked where your addons folder is, input the location of your TurtleWoW/Interface/AddOns/ folder.

You are now ready to install addons with the manager. If you had any manually installed copies of git addons, delete them. Manually-installed addons cannot be updated with GitAddonsManager.

##### **To install a GitHub or Gitlab addon:**
1. Copy the clone link for the git addon, e.g. https://github.com/shagu/ShaguTweaks.git
1. In GitAddonsManager, press the + on the top left, and paste. Press OK. The addon will download and install.
Remember to check GitAddonsManager every so often to update your addons; you can do this individually for each addon or all at once using the upgrade button in the top left of the window.

Restart your game after installing addons. If the installation is correctly done, you should see an Addons button on the bottom left of the character select screen. In that list, you should see your installed addon listed.

##### **Manual Install**
This method is simple and works with any addon you find, even ones that don't use git, but more tedious in that you'll need to repeat this process to update addons. 

1. On the GitHub repository, click **<> Code** (top right), and select Download ZIP.
1. Extract the zip into your <code>TurtleWoW/Interface/AddOns/</code> folder.
1. Now for the tricky part, so **read carefully:** Rename the addon's folder...
In order for WoW to load your addon, addon's folder name and name of the the .toc file inside **MUST match exactly**. For example, if the addon has the file Some-Addon.toc, you must name the folder Some-Addon. When done correctly, your folder and file structure should look like <code>TurtleWoW/Interface/AddOns/ADDONNAME/ADDONNAME.toc</code>. 
1. *In most cases for addons on GitHub, this just means deleting "-master" or "-main" from the folder name.
1. *Beware! 
1. **Sometimes addons have a mismatched folder name (e.g. Aux). If an addon isn't loading, check that .toc file.
1. **Sometimes an addon will be buried a folder too deep (e.g. DPSMate). If your file structure looks like <code>Interface/AddOns/ADDONNAME-MASTER/ADDONNAME/ADDONNAME.toc</code>, it won't work. In this case, move the last folder up directly into the AddOns folder.
1. *Still having trouble? Give the [automated AddonsFixer](https://github.com/alchem1ster/AddOnsFixer/releases/tag/0.2.1) a try.

Restart your game after installing addons. If the installation is correctly done, you should see an Addons button on the bottom left of the character select screen. In that list, you should see your installed addon listed.

##### **Command-line Addons Manager**
If you prefer a command-line interface, you may use [snapjaw](https://github.com/refaim/snapjaw), a git-based addons manager. For detailed information, please refer to the readme file on GitHub.

### How to Update Addons
[Updated 2025 Jan]: Best Recommended Method is to use the TurtleWoW Launcher to verify and update accordingly.

**NOTE**: Don't worry about your addon settings! These are stored separately in the TurtleWoW/WTF folder, and as long as you don't mess with that folder, your settings will persist across addon updates, uninstalls, and reinstalls.

### How to Troubleshoot Addons
If an addon isn't showing up, try restarting your game and checking if it shows up in the addons list.

##### **Do you see your addon on this list?**
- If not, the installation failed and you should review [#How to Install Addons](#How to Install Addons).
- If the addon shows up and is activated, it's installed correctly and should be working once you log in. If you need help using the addon, be sure to check the GitHub. If you need further help after this, check in the addon support channel on the Discord.

## List of Addons
### Featured Addons
(Multiple addons beside each other with a + means they should **both** be installed and used together.)
<u>We recommend that all players choose *one* of these:</u>
- **Essential Improvements for the Default UI:**  [ShaguTweaks](https://github.com/shagu/ShaguTweaks) + [ShaguTweaks-extras](https://github.com/shagu/ShaguTweaks-extras)
- **Complete Minimalist UI Replacement:**  [pfUI](https://github.com/me0wg4ming/pfUI) + [pfUI-turtle](https://github.com/doorknob6/pfUI-turtle). To browse and try premade layouts and configs: [**<u>/r/pfUI</u>**](https://www.reddit.com/r/pfUI/)
- **Warcraft 3 Inspired UI:**  [WIIIUI](https://github.com/Fiurs-Hearth/WIIIUI) + [ExtraResourceBars](https://github.com/Fiurs-Hearth/ExtraResourceBars)

<u>Recommended Leveling Addons:</u>
- **Quest Helper:** [pfQuest](https://github.com/The-Kludge-Bureau/pfQuest) + [pfQuest-Turtle](https://github.com/The-Kludge-Bureau/pfQuest-turtle) (+ Optional: [Magnify](https://github.com/lookino/Magnify))
- **Roleplaying AddOn:** [TurtleRP](TurtleRP)
- - **AI-Voiced Quests and Dialogue:** [WoW-Voiceover](Addon WoW-Voiceover)
- **Quest Immersion**: [Immersive Dialog UI](https://github.com/moiian/ImmersiveDialogUI). A enhanced conversation addon with a focus on immersion and customization.
- Keep a **note for Friends** in Game: [AuldLangSyne](https://github.com/Road-block/AuldLangSyne)
- **Map Markers:** [Modern Map Markers](https://github.com/tilare/ModernMapMarkers) (Shows the locations of dungeons, raids, world bosses, boats, zeppelins, and trams on the world map.)
<u>Recommended Endgame Addons:</u> 
- **Damage Meter:** [ShaguDPS](https://github.com/shagu/ShaguDPS), or if you need advanced tools: [DPSMate](DPSMate)
- **Threat Meter:** [TWThreat](https://github.com/MarcelineVQ/TWThreat) or [KLHThreatMeter](KLHThreatMeter)
- **Encounter Helper:** [BigWigs](Addon BigWigs)
- **Loot tables for Dungeons and Raids:** [AtlasLoot-Turtle](AtlasLoot) or [Atlas-TW](https://github.com/byCFM2/Atlas-TW)
- **Advanced Auction UI:** [Aux](https://github.com/OldManAlpha/aux-addon)
- **Group maker:** [AutoLFM](https://github.com/FSuhas/AutoLFM) - Ideal for setting up a group for a quest, dungeon or raid. Can be used in SoftCore or Hardcore.
- **Raid Lead Help:** [Tactica](https://github.com/Player-Doite/tactica) - Auto-build/sort raids (invite/gearcheck), post tactics, preset masterloot, loot rules & assign roles - synced!

### Full Addons List
These addons are all hosted on Github and other git services, and so they will work with the installation methods provided above. If you do not find the addon you want in the list, and you think what you want might be an ancient addon that was around in 2006, see the bottom of the page for further addon collections.

**[A](#A) . [B](#B) . [C](#C) . [D](#D) . [E](#E) . [F](#F) . [G](#G) . [H](#H) . [I](#I) . [J](#J) . [K](#K) . [L](#L) . [M](#M) . [N](#N) . [O](#O) . [P](#P) . [Q](#Q) . [R](#R) . [S](#S) . [T](#T) . [U](#U) . [V](#V) . [W](#W) . [X](#X) . [Y](#Y) . [Z](#Z)**

### A
- [_AntInvite](https://github.com/Kiiruaa/_AntInvite) - block invitation of people under level 15 [[Img1](https://user-images.githubusercontent.com/26133646/47479185-836e3a80-d82c-11e8-9a9a-e3faeac423ec.png)]
- [_AutoBG](https://github.com/EinBaum/_AutoBG) - auto-queue, join, leave battlegrounds & instant spirit release
- [aBindings](https://gitlab.com/aead/aBindings) - Direct macrotext-to-key bindings
- [Abraxas](https://github.com/xorann/Abraxas) - Warlock Helper [[Img1](https://camo.githubusercontent.com/3dcd600c95ea33d282bda9e2d3f03a86e2a2ae75/68747470733a2f2f692e696d6775722e636f6d2f7635765574664e2e706e67)]
- [ABreathBeneath](https://github.com/Lanrutcon/ABreathBeneath/tree/Vanilla-Port) - a "reskin" of the Blizzard's nameplates [[Img1](https://user-images.githubusercontent.com/26133646/39292495-a566d050-4936-11e8-8c12-05603fcdc63f.png)]
- [Accountant](https://github.com/The-Kludge-Bureau/Accountant) - tracks your incoming / outgoing cash [[Img1](https://user-images.githubusercontent.com/26133646/39262975-40c516a4-48c1-11e8-86c0-80016f1d8807.png)] [Alt](https://github.com/terdong/Accountant)(https://github.com/terdong/Accountant Alt)
- [ActionButtonUtils](https://github.com/Numielle/ActionButtonUtils) - Retail-like glowing for WoW 1.12 ActionButtons
- [ActionBarProfiles](https://github.com/Siventt/ActionBarProfiles) - Create and load action bar layouts for different builds.
- [ActionMirroringFrame](https://gitlab.com/woblight/actionmirroringframe/-/tree/vanilla) - Display a frame showing used actions [[Img1](https://user-images.githubusercontent.com/26133646/39139763-fc3055b6-4722-11e8-854f-3c66341e372e.png)]
- [AddOnOrganizer](AddOnOrganizer) - This mod allows you to turn on and off all of your current addons
- [aDF](Adf) - adds a small HUD that standardizes critical info about your target's defences, including Armor, Resists, and specific debuffs [[Img1](https://github.com/Zebouski/aDF/assets/11151284/d4f9b479-4498-4ec7-88c8-501f9cf759b5)] [Alt](https://github.com/Autignem/aDF)(https://github.com/Autignem/aDF Alt)
- [AdvancedTradeSkillWindow](https://github.com/laytya/AdvancedTradeSkillWindow-vanilla/releases) - replacement for Blizzards trade skill window [<nowiki>[Img1](https://user-images.githubusercontent.com/20452393/281359573-21d345b2-001f-4c83-99ff-725101477e2b.JPG)</nowiki>] use it w/ [LSW](https://github.com/laytya/LilSparkysWorkshop-vanilla)
- [AdvancedTradeSkillWindow2](https://github.com/Shellyoung/AdvancedTradeSkillWindow2) - Improved window for your professions for World of Warcraft vanilla (Evolution of the previous addon) [<nowiki>[Image](https://private-user-images.githubusercontent.com/40469927/465701779-cffb06ff-b310-4fb7-ba07-a04caf6e34a3.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzExMzc5NTUsIm5iZiI6MTc3MTEzNzY1NSwicGF0aCI6Ii80MDQ2OTkyNy80NjU3MDE3NzktY2ZmYjA2ZmYtYjMxMC00ZmI3LWJhMDctYTA0Y2FmNmUzNGEzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAyMTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMjE1VDA2NDA1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWEyMWM1MGRkNDg0NGM5ZGVlYmFmZTJlZDVlMmFkMDRhMjcwMzgxNzlkMWU5YWIwNWVhMjVjN2ViMDA5ZDQ0ZjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.EUn444fh0E-5PiJwJLROObvVMhkKOB2DpzKw7PyLv1Q)</nowiki>].
- [Aero](https://github.com/gashole/Aero) - Adds animations to frames [[Img1](https://camo.githubusercontent.com/31a9cfffe7757716f2b94cd60b95e49c8fd67e82/687474703a2f2f692e696d6775722e636f6d2f4763616c5472482e676966)]
- [agUnitFramesImproved](https://github.com/satan666/ag_UnitFrames_Improved) - Customizable unit frame addon
- [Altoholic](https://github.com/nehswu/Altoholic_Vanilla) - Provides information about your alts. Turtle WoW version, supports cross-faction alts. [[Img1](https://github.com/Dyaxler/Altoholic_Vanilla/raw/master/Screenshots/Containers.JPG)]
  - A version that fixes several bugs and adds modules for raid lockouts and attunements is available [here](https://github.com/gbl/Altoholic_Vanilla).
- [AnnounceKick](https://github.com/EinBaum/AnnounceKick) - Very simple rogue addon that announces "Kick" in say chat
- [AntiAFK](https://github.com/acid9000/AntiAfk) - Prevents AFK status and being kicked for AFK. Useful for AFKing in cities while querying Auction House with Aux-Revamped.
- [__Anticrash](https://github.com/me0wg4ming/__Anticrash) - Unregisters all frame events before logout/reload to prevent crashes.
- [Antispam](https://github.com/shagu/antispam) - Shagu addon to filter out goldsellers and Moo spammers on Turtle WoW
- [AntiSpamStopCast](https://github.com/thepparker/AntiSpamStopCast) - addon to prevent cancellation of fresh spell casts when mashing the button
- [APD](https://github.com/melbaa/apd) - Attack Power Display is an UI realtime monitor for your attack power.
- [ArcaneSurgeWarning](https://github.com/AllinGaming/ArcaneSurgeWarning) - provides a **visual tracker** for the Arcane Surge proc
- [Arcanum](https://github.com/TheRealFayz/Arcanum) - Manages Mage spells and items, including Turtle WoW Mage spells and items
- [ArchiTotem](https://github.com/codeshard/ArchiTotem) - Totem bar and Timers [[Img1](https://user-images.githubusercontent.com/26133646/34494479-feb56e2c-eff0-11e7-8cd2-7672ddc26bd9.png)]
- [ArcHud2](https://github.com/McPewPew/ArcHUD2) - Combat HUD that displays smooth arcs around your character in the middle of the screen to inform you about the health and power (mana, rage, ...) of you, your pet, and your target. [[Img1](https://felbite.com/wp-content/uploads/2022/03/felbite.com-archud-2-logo-archud-2.webp)]
- [Artisan](https://github.com/Otari98/Artisan) - Compact professions window
- [Atlas-TW](https://github.com/byCFM2/Atlas-TW) - Atlas, AtlasLoot, AtlasQuest updated into one new addon with more features and options.
- [Atlas Turtle](Atlas) - View maps of dungeons and raids
- [AtlasLoot Turtle](AtlasLoot) - Browse loot tables for Dungeons and Raids
- [AtlasLoot-GearFilter](https://github.com/Kirchlive/AtlasLoot-GearFilter) - Simple Class Gear Filter Dependency for AtlasLoot TW Edition.
- [AtlasQuest Turtle](AtlasQuest) - see a list of vanilla and TurtleWOW quests related to each dungeon.
- [Attack](https://github.com/shirsig/attack) - Enable attack with /attack
- [Akkio_Consume_Helper](https://github.com/prodigystudios/Akkio_Consume_Helper) - Manage your buffs & Consumables in real time during your adventures
- [AttackBar](https://github.com/Road-block/AttackBar) - Player and Enemy Swing Timer addon [[Img1](https://user-images.githubusercontent.com/26133646/39252348-c08323f2-48a5-11e8-874d-e72c7e7e19d6.png)]
- [AttackBar Turtle](https://github.com/Siventt/AttackBar-TWoW) - Player and Enemy Swing Timer addon [[Img1](https://user-images.githubusercontent.com/26133646/39252348-c08323f2-48a5-11e8-874d-e72c7e7e19d6.png)] + Turtle WoW's Holy Strike support.
- [AuctionAltBuy](https://github.com/EinBaum/AuctionAltBuy) - Alt-Click auctions to buy and cancel instantly
- [Aux-Revamped-Opaque](https://github.com/ftkun/Aux-Revamped-opaque)  I absolutely love Aux, but I’ve always thought the UI could use some polish — and I know many of you agree. So, I took some time to give it a facelift![https://github.com/ftkun/Aux-Revamped-opaque]
- [Auctionator](https://github.com/nimeral/AuctionatorVanilla) - A lightweight addon designed to help manage auctions [[Img1](https://user-images.githubusercontent.com/26133646/39140814-05a2c09a-4726-11e8-8b59-e1096eba3045.png)]
- [AuctionHelper](https://github.com/EinBaum/AuctionHelper) - helps you transfer items through the neutral auction house [[Img1](https://github.com/EinBaum/AuctionHelper/raw/master/preview.jpg?raw=true)]
- [AuctionLink](https://github.com/Zerf/AuctionLink) - allows you to search for items in the AH by shift-clicking them
- [AuctionSearchTimer](https://github.com/EinBaum/AuctionSearchTimer) - Timer that shows when you can refresh the AH [[Img1](http://i.imgur.com/mZmrrYi.png)]
- [AuldLangSyne](https://github.com/Road-block/AuldLangSyne) - combines the functions of CT_PlayerNotes and FriendsFacts
- [AutoBar](https://github.com/laytya/AutoBar-for-Turtle-WoW) - automatically adds potions, water, food, quest and other items you specify into buttons for easy use [[Img1](https://user-images.githubusercontent.com/26133646/39140329-83e78064-4724-11e8-9be5-b538dcabdc1e.png)]
- [AutoBuff](https://github.com/Nikoichu/AutoBuff-Turtle/tree/main) - automatically reapply buffs to yourself. Patched for TWoW's new shaman shield spells.
- [AutoConfirm](https://github.com/LukeElrod/AutoConfirm) - QOL addon to automatically confirm common popups (quests, BOP loot, replacing enchantments, etc.)
- [AutoDB](https://github.com/ERitzman/AutoDB) - Automatically does /db chests and /db rares for pfQuest users.
- [AutoDB2](https://github.com/refaim/AutoDB2) - Automatically does /db chests and /db rares for pfQuest users. Allows to setup any pfQuest commands to execute after logging in.
- [AutoDecline](https://github.com/McPewPew/AutoDecline) - Automatically decline (block) all guild, party, duel invites, as well as guild charters.
- [AutoDot](https://github.com/Atreyyo/AutoDot) - addon for warlocks who wants one button for all dots
- [AutoExpEnable](https://github.com/leenux/AutoExpEnable) - Warning when player's XP is OFF.
- [Autohump](https://github.com/EinBaum/Autohump) - Hump your friends all day long!
- [AutoLFM](https://github.com/FSuhas/AutoLFM) - Automated LFM Message [<nowiki>[img1](https://github.com/FSuhas/AutoLFM/blob/master/AutoLFM.png)</nowiki>] 
- [AutoMana](https://github.com/MarcelineVQ/AutoMana) - Automatic Mana Consume Usage
- [AutoMasterLooter](https://github.com/balakethelock/AutoMasterLooter) - Automatically loot items as masterlooter
- [Automaton](https://gitlab.com/Artur91425/Automaton) - Reduces interface tedium by doing the little things for you [[Img1](https://cloud.githubusercontent.com/assets/15636669/21586276/39de2470-d0e0-11e6-89a7-e5a1574b6a17.jpg)]
**Note:** Do not use the "Attack" module if you want to be able to target friendly units while in combat (if you're unable to click party/raid frames in combat, this could be the cause).
- [AutoMessage](https://github.com/0ldi/AutoMessage) - Allows automatic sending of a message to a channel at an interval specified by a user
- [AutoProfit](https://github.com/Road-block/AutoProfit) - Easy sell trash to vendor WoW addon
- [AutoQuest](https://github.com/MickeyPickey/AutoQuest) - Instant auto-accept and auto-turn-in, picks highest value reward
- [AutoReputationBar](https://github.com/gbl/AutoReputationBar) automatically switches your reputation bar to whichever faction you last gained reputation with.
- [AutoShot](https://github.com/WouterBink/AutoShot) - Automatically take screenshots
- [AutoSpellRanker](https://github.com/Dayfiree/AutoSpellRanker) - Notifies you if there's a higher rank of spell available in your spellbook than on your bars
- [AutoTurnIn](https://github.com/Valiusha90/AutoTurnIn) - Configurable auto turn in for repeatable quests [Alt](https://github.com/fa1l1l/TW-Auto-Turn-In-fixed-/tree/main)(https://github.com/fa1l1l/TW-Auto-Turn-In-fixed-/tree/main Alt)
- [Aux](https://github.com/OldManAlpha/aux-addon) - Overhaul auction house interface [[Vid1](https://www.youtube.com/watch?v=EGt6HN3oLfY&feature=youtu.be)].
- [Aux-Revamped](https://github.com/acid9000/Aux-addon) - *Updated for 1.18* A refreshed and transparent UI update for the classic Aux auction addon [<nowiki>[Img1](https://github.com/acid9000/Aux-addon/raw/master/Tooltip-Example.png)</nowiki>]. (Defunct project link [here](https://github.com/Nelethor/Aux-Revamped))
- [AuxMerchantPrices](https://github.com/shirsig/aux_merchant_prices) - Adds merchant prices to tooltips
- [Avbars](https://github.com/topfreestyle/avbars) - Graphical Timers for Events in AV and AB

[↑ Go to top of page ↑](Addons#Full Addons List)

### B
- [Bagnon](https://github.com/McPewPew/Bagnon) - A group of addons that improve the way the player manages his or her inventory. 
- [Bagshui](https://github.com/The-Kludge-Bureau/Bagshui) - All-in-one auto-categorizing and sorting inventory replacement for Bags and Bank with customizable layout and rules. [Alt](https://github.com/NiclasEriksen/Bagshui)(https://github.com/NiclasEriksen/Bagshui Alt)
- [BananaBar](https://github.com/balakethelock/bananabar) - buttons to set raid symbols/hunter's mark, target by symbol and many other features [[Img1](https://user-images.githubusercontent.com/26133646/39141924-76da410e-4729-11e8-94c4-ad3059821782.png)]
- [BananaRepublicProfs](https://github.com/Fox2k7/BananaRepublicProfs) - Guild profession recipe database with sharing and search functionality
- [Bartender2](https://github.com/McPewPew/Bartender2-Read-Instructions) - An AddOn to move Blizzards default actionbars and buttons.
- [BattleMusic](https://github.com/zmarotrix/BattleMusic/releases) - Plays battle music on combat start and ends when combat ends. [<nowiki>[vid1](https://www.youtube.com/watch?v=YXQPcDtmPDo)</nowiki>] [Alt1](https://github.com/Fiurs-Hearth/BattleMusic)(https://github.com/Fiurs-Hearth/BattleMusic Alt1)
- [BattleMusic Lore Friendly Music Pack](https://www.nexusmods.com/worldofwarcraft/mods/869) - Adds over 30 different Warcraft combat tunes.
- [BattleScribe](https://github.com/gabcinder2004/BattleScribe) - tracks your highest damage and healing records for each ability
- [BearCastBar](https://github.com/Fiskehatt/BearCastBar) - A cool cast bar and swing timer that takes into account latency [[Img1](https://user-images.githubusercontent.com/17283626/46246049-8712cb00-c400-11e8-9313-24981db88d6f.gif)] [[Img2](https://user-images.githubusercontent.com/17283626/46246048-84b07100-c400-11e8-999d-15da78273535.gif)]
- [Beardley's Diablo Orbs](https://github.com/Caestielle/BeardleysDiabloOrbsVanilla) - is a backported Diablo like UI [[Img1](https://i.imgur.com/ZLLwDik.jpg)]
- [Beastiary](https://github.com/CamA-dev/TurtleBeastiary) - A Tooltip extension for Mob abilities
- [Benecast](https://github.com/TcavemanT/BeneCast) - A healing and buff helper
- [BetterAlign](https://github.com/DennisWG/BetterAlign/tree/8840ee2dad218d73e5ae8b23979f552f3c2c56cd) - creates a grid on your screen to aid you in aligning and centering your UI
- [BetterBabelFish](https://github.com/yutsuku/BetterBabelFish) - Better bable talk between factions or not... whatever you like
- [Better Character Panel](https://github.com/Arthur-Helias/BetterCharacterPanel/tree/main?tab=readme-ov-file) - Improves the default character and inspect panel by adding enchants effects and more! Made for TWoW [<nowiki>[Img1](https://github.com/user-attachments/assets/140e2cf7-355f-4176-8133-1881bbc562d7)</nowiki>] [<nowiki>[Img2](https://github.com/user-attachments/assets/6fc24c99-434e-45a9-98a8-ffc088034299)</nowiki>]
- [BetterCharacterStats (BCS)](https://github.com/Otari98/BetterCharacterStats) - Backports the TBC character stats panel, collecting and centralizing info on primary but also secondary stats like spellpower, hit, crit [[Img1](https://raw.githubusercontent.com/yutsuku/BetterCharacterStats/gh-pages/images/BetterCharacterStats.png)]
- [BetterEverlookBroadcastingCo](https://github.com/JeromeM/BetterEverlookBroadcastingCo) - An improved replacement for TurtleWow's built-in Everlook Broadcasting Co radio addon.
- [BetterHelp](https://github.com/neolectron/BetterHelp) - Enhances the <code>/help</code> command to display all available slash commands from your installed addons.
- [BetterQuest](https://github.com/tlplayer/BetterQuest) - Local AI Voiceover for quests, items, gossip, and NPC in-game speech.
- [BetterScoreFrame](https://github.com/yutsuku/BetterScoreFrame) - Better Battlefield Score Frame
- [BGAssistRU](https://github.com/xVitali2/Addons-for-Vanilla-1.12.1/tree/master/BGAssistRU) - Battleground helper
- [BGFlag](https://github.com/Einherjarn/BGFlag) - Small text display of the status of the Alliance and Horde flags
- [BGReport](https://github.com/yutsuku/BGReport) - shows HUGE pie-like menu with predefined macros when you're in battleground zone [[Vid1](https://youtu.be/-YiZs4bvzU0)]
- [BigBrother](https://github.com/jejkas/BigBrother) - addon to spy on your guild mates with! [[Img1](https://user-images.githubusercontent.com/26133646/39141194-550b2dd8-4727-11e8-8eb9-80980235ec4d.png)]
- [BigTimer](Addon BigWigs) - No more macros for BigWigs pull timers, and readychecks.  
- [BigWigs](Addon BigWigs) - raid encounter helper
- [BISList](https://github.com/gabcinder2004/BISList) - Track your Best-in-Slot gear efficiently across multiple equipment lists
- [BitesCookBook](https://github.com/DBFBlackbull/BitesCookBook) - (Better Ingredients Tracking for Efficient Seasoning) shows you which cooking ingredients can be used to cook meals with.
- [BlackList](https://github.com/Zerf/BlackList) - is like Ignore, except unlimited
- [BlizzMo](https://github.com/Dyaxler/BlizzMo_Vanilla) - will move any Blizzard Frame and all your Bags
- [BlizzPlates](https://github.com/brotalnia/BlizzPlates) - adds cast bars, class and rank icons, debuffs and health numbers on the default Blizzard nameplates [[Img1](http://imgur.com/a/FfL6O)]
- [Blockvalue](https://github.com/sondli/blockvalue) - A lightweight TurtleWoW addon that shows you your total block value
- [Bloodrage](https://github.com/muellerj/Bloodrage) - Provide a single button to put you in the "default" stance and activate Bloodrage
- [BMLoot](https://github.com/McPewPew/BMLoot) - auto roll 'need' on Corrupted Sand and Arcane Essence in Black Morass
- [Bongos](https://github.com/jacamo555/Bongos) - Creates customized action bars [[2](https://github.com/UndercityAddons-Vanilla/Bongos)]
- [BonusScanner](https://github.com/jrc13245/BonusScanner) - Scans your equipment for cumulative bonuses like additional spell damage and sums them up
- [BossAlert](https://github.com/turinpt/BossAlert) - alert the guild and play a sound once something spawns under your mouse
- [BossMechanicsHelper](https://github.com/YamaYAML/BossMechanicsHelper) - An addon to share boss mechanics in a raid or group
- [BossTactics](https://github.com/jrc13245/BossTactics) - Posts pre-defined boss tactics to raid warning via slash command.
- [BossDeathTimer](https://github.com/ZenSociety/BossDeathTimer) - A simple countdown timer that displays how long the boss will die.
- [BrainSaver](https://github.com/MarcelineVQ/BrainSaver) - Save and name brainwasher specs
- [Brainwasher Pro](https://github.com/Cinecom/BrainwasherPro) - Modern Brainwasher interface with custom icons and naming for Turtle WoW [Img1](https://i.postimg.cc/QMs70jMs/Brainwasher-Pro.jpg)(https://i.postimg.cc/QMs70jMs/Brainwasher-Pro.jpg Img1)
- [BSAlert TW](https://github.com/FSuhas/BSAlert-TW) - Notifies you when BattleShout is not up
- [Bubbles](https://github.com/computerequipmentgroup/Bubbles) - Addon that displays available rested XP bubbles, how many tents are actively providing them and the remaining time until 150% rested XP
- [BuffAlert](https://github.com/brunt/BuffAlert) - The addon is able to play a sound when you gain a specific buff
- [BuffBlock](https://github.com/towneh/BuffBlock) - Automatically removes selected buffs
- [BuffBlock-TW](https://github.com/uc9089/BuffBlock-TW) - Smart Tanking Buff removal tool for each tanking class (Warrior / Druid / Paladin / Shaman). A fork from Buffblock.
- [BuffCounter](https://github.com/Geigerkind/BuffCounter) - a frame that shows you either how many buffs you can still get or how many you have currently [[Img1](https://i.imgur.com/34THkkS.png)]
- [BuffHook](https://github.com/Schaka/BuffHook) - Shows enemy buffs by hooking WoW API's UnitBuff(unitID, index) and adding buffs to it.
- [BuffReminder](https://github.com/opcow/BuffReminder) - Reminds the player when buffs have or will soon expire [[Img1](http://i.imgur.com/jpnwbj9.png)] [[Img2](http://i.imgur.com/cLyGNv9.png)]
- [BuffWatch](https://github.com/shkarlsson/BuffWatch) - Keeps track of buffs on party members in a small window and highlights them if they have run out
- [BugSack](https://github.com/McPewPew/BugSack) - Eases the process of viewing bugs
- [TWBuyPoisons](https://github.com/Phobos-Programmer/TWBuyPoisons.git) - Buy Stacks of Poison Components

[↑ Go to top of page ↑](Addons#Full Addons List)

### C
- [CallOfElements](CallOfElements) - Shaman addon to simplify totem usage, increase your efficiency in party and PVP [[Img1](https://user-images.githubusercontent.com/26133646/47299339-46325e80-d61a-11e8-897a-93d0ec41dba7.png)], updated to work with Turtle Warcraft
- [CallToArms](https://github.com/Road-block/CallToArms) - Group Hosting, Finding Addon [[Fu](https://github.com/Road-block/FuBar_CTAFu)]
- [Capslock](https://github.com/Sentilix/capslock) - Warlock summon addon
- [CaramelNotes](https://github.com/MrToffee/CaramelNotes) - Write notes about other players. [[Img1](https://raw.githubusercontent.com/MrToffee/CaramelNotes/refs/heads/main/Images/Notes.png)]
- [carinachut](https://gitlab.com/Alizia/carinachut) - gold seller bots blocker
- [Carbonite](https://gitlab.com/knights-of-sunwell/carbonite-vanilla) - Google Maps style world map with built in quest helper, resource nodes and a warehouse
- [Cartographer for TurtleWoW](https://github.com/shagu/Cartographer) - A modular, lightweight, and efficient framework for manipulation of the world map
- [CasterStats](https://github.com/Linae-Kronos/CasterStats) - CasterStats, adds the attribute Spell Dmg in the Character Panel (with hit & crit) [[Img1](https://user-images.githubusercontent.com/24671466/27561934-7b887bfe-5aca-11e7-97b3-41ac64b604fe.png)] (must also install **BonusScanner**)
- [CastHistoryTracker](https://github.com/Abstr4ctz/CastHistoryTracker) - Animated and highly customisable on-screen spell cast history for up to 11 units simultaneously. [img](https://github.com/user-attachments/assets/cf1c676f-060c-4fe9-b257-5ad55da048e0)(https://github.com/user-attachments/assets/cf1c676f-060c-4fe9-b257-5ad55da048e0 img)
- [CastTimer](https://github.com/pepopo978/CastTimer) - Tool for measuring cast times in twow
- [CatDruidDPS](https://github.com/Cernie/CatDruidDPS) - One button feral druid dps
- [Caterer](https://gitlab.com/Artur91425/Caterer) - Auto-trades preset stack counts of water & food to players opening trade [[Img1](https://user-images.githubusercontent.com/24303693/34414693-bfe0eae4-ebfb-11e7-8f45-c1f20cafccd2.jpg)]
- [CCWatch](https://github.com/shirsig/ccwatch) - Enemy CC & DR progress bars with icons [[Img1](https://camo.githubusercontent.com/370198892590c3545d182d805acee491b9458b23/687474703a2f2f692e696d6775722e636f6d2f446243325636642e706e67)]
- [CDFrames](https://github.com/shirsig/cdframes) - Cooldown timers for player, target and targettarget [[Img1](https://camo.githubusercontent.com/40bb1aed1e052c83efc9bf1d63367d9a10787d80/687474703a2f2f692e696d6775722e636f6d2f597264387650662e706e67)]
- [CensusPlusTurtle](https://github.com/cyaohiri/CensusPlusTurtle) - Collects and displays census information for Turtle WoW. [[Img1](https://raw.githubusercontent.com/cyaohiri/CensusPlusTurtle/main/Preview.png)]
- [CerniesWonderfulFunctions](https://github.com/Cernie/CerniesWonderfulFunctions) - Script methods for using specific items and helping players create simple(er) macros
- [Channel monitor](https://github.com/shirsig/channel_monitor) - addOn for monitoring the chat for specific keywords [[Img1](https://i.imgur.com/B1N57HM.png)]
- [ChaosReserves](https://github.com/rnorden/ChaosReserves) - Self-service reserve managing chatbot
- [CharacterMap](https://github.com/Bergador/CharacterMap) - Provides a virtual keyboard of higher-ASCII and Unicode characters which can be inserted into chat boxes
- [CharacterProfiler](https://github.com/celguar/CharacterProfiler) - Export Character Profiles for use out-of-game
- [ChatBar](https://github.com/0ldi/ChatBar) - Button Bar for opening chat messages of each type
- [ChatEmote](https://github.com/Road-block/ChatEmote) - Chat emoticon to Emote Addon
- [ChatFix](https://github.com/0ldi/ChatFix) - Fix for channels World, Trade, etc.
- [ChatLog](https://github.com/0ldi/ChatLog) - Gives you the ability to view or copy/paste any chat logs
- [ChatLootBidder](https://github.com/trumpetx/ChatLootBidder) - A Master-Loot addon to assist in loot distribution.  Works with MS/OS, SR, and Bid systems.  Does not require raiders to install the addon.
- [ChatMonitor](https://github.com/cryptokn1ght-dev/ChatMonitor) - Monitors the chat and alerts you when user-defined keywords are found. Features a nice GUI and a right-clickable minimap button to start/stop the monitoring. [[Img1](https://github.com/cryptokn1ght-dev/ChatMonitor/raw/main/cm_preview_.png)]
- [Chatsuey](https://github.com/ScottHamper/chatsuey) - A collection of chat enhancement addons
- [ChatTimestamps](https://github.com/wbb1977/ChatTimestamps) - Adds customizable timestamps to chat windows
- [Chicken Jockey](https://github.com/SwizzPop/ChickenJockey) - Creates joke titles and shareable links for in-game items
- [ChronicleCompanion](https://github.com/Emyrk/ChronicleCompanion/) - Combat logging for the raid logging website [ChronicleClassic](Raid Logging (ChronicleClassic)). Upload raid logs for analysis and details.
- [ChroniclesBuffAssignments](https://github.com/EinBaum/ChroniclesBuffAssignments) - Automatically generates raid buff assignments that can be copy pasted in the chat
- [ChroniclesPI](https://github.com/EinBaum/ChroniclesPI) - Cast Power Infusion on people who request it via whisper
- [ChroniclesPTR](https://github.com/EinBaum/ChroniclesPTR) - Gamemaster raid organization on PTRs
- [Chronometer](Chronometer) - tracks spell effects (HoTs, DoTs, buffs, debuffs, etc.) that you cast
- [Classicdb](https://github.com/Muehe/classicdb) - helps you to find ingame stuff and getting your quests done
- [ClassicMouseover](https://github.com/satan666/LazySpell) - Mouseover casting support for Vanilla
- [ClassIcons](https://github.com/refaim/ClassIcons) - Displays class icons near your target’s and party members’ portraits
- [ClassicSnowFall](https://github.com/Road-block/ClassicSnowFall) - Cast Abilities on KeyDown
- [ClassPortraits](https://github.com/Ko0z/ClassPortraits_Vanilla) - replaces 2D portraits with a class icon [[Img1](https://user-images.githubusercontent.com/26133646/39146572-6dd31956-4737-11e8-9ee2-c2a22a70552b.png)]
- [CleanChat](https://github.com/refaim/CleanChat) - Colorize names, shows level, shortens channel names and more. Turtle WoW version, can show players factions in chat.
- [CleanPlayerFrame](https://github.com/wbb1977/CleanPlayerFrame) - Small enhancement for the standard player, target and party frames
- [Cleanup](https://github.com/shirsig/Cleanup-vanilla) - This addOn automatically stacks and sorts your items [[Vid1](https://www.youtube.com/watch?v=DGjBcyg4cys)]
  - ["Deprecated" version of Cleanup](https://github.com/shirsig/Clean_Up) that seems to require SUCC-bag. May work as an alternative for some users if the original doesn't function for them.[https://github.com/shirsig/Clean_Up]
- [CleverMacro](https://github.com/DanielAdolfsson/CleverMacro) - Adds extra slash commands for use in macros
- [CleveRoidMacros](https://github.com/cutiepoka/CleveRoidMacros?tab=readme-ov-file#slash-commands) - More advanced and modern style macros.  Lovechild of CleverMacro + Roid-Macros
- [CliffTells](https://github.com/ItsLusse/CliffTells) - announces when a guild member dies, levels up, becomes Immortal, or enters the Inferno challenge, and keeps logs of these events  
- [Clique](https://github.com/shagu/Clique) - Simply powerful click-casting interface (Shagu - May 2023).
- [CLog](https://github.com/Cabro/CLog) - API events logging [[Img1](https://user-images.githubusercontent.com/26133646/39194122-4575d196-47dd-11e8-8487-633f34fd0aa6.png)]
- [CloseUp](https://github.com/Road-block/CloseUp) - Allows you to zoom, reposition, and rotate the UI's built-in models so that you may get a better view
- [CMap](https://github.com/turinpt/CMap) - Backport of SexyMap [[Img1](https://user-images.githubusercontent.com/26133646/39146010-cc41df7e-4735-11e8-9d29-031a5dae3968.png)]
- [Codex](https://github.com/Chad90b/codex) - Displays mobs' spells on mouseover.
- [ColorPickerPlus](https://github.com/mr-rosh/ColorPickerPlus) - Hooks into the standard Color Picker to provide text entry for colors
- [ColorSocialFrame](https://github.com/Road-block/ColorSocialFrame) - Class Color Friends, Guild and Who List addon [[Img1](https://raw.githubusercontent.com/Road-block/ColorSocialFrame/docs/guild.png)]
- [Combat](https://github.com/zirtox1992/Combat) - Shows a combat indicator next to the Target Frame whenever the target is in combat
- [CombatLoggingReminder](https://github.com/trumpetx/CombatLoggingReminder) - Do you forget to enable combat logs in raids? This helps you not forget!
- [CombatPlates](https://github.com/phrxqt/CombatPlates) - Nameplate visibility auto-switching and control. Lets you pick which nameplates (friendly/enemy) should be visible in and out of combat. 
- [Comix](https://github.com/Cysthen/Comix) (Susangrundle/Cysthen) or [Comix](https://github.com/Goose404/Comix) (Goose404) - Adds sounds and special effects to your interface
- [CompanionManager](https://github.com/sica42/CompanionManager) - Radial menu to easily summon companions. [Video](https://i.imgur.com/WlKdqNj.gif)(https://i.imgur.com/WlKdqNj.gif Video)
- [ConsoleExperienceClassic](https://github.com/pepordev/ConsoleExperienceClassic) - Console support for WoW Vanilla 1.12 [Videos](https://youtube.com/playlist?list=PLTY0NFyVGLrUhCEH55gXD9Bt9P13FYQY0&si=d6P7L2_CQ8GB1pRj)(https://youtube.com/playlist?list=PLTY0NFyVGLrUhCEH55gXD9Bt9P13FYQY0&si=d6P7L2_CQ8GB1pRj Videos)
- [Consumes Manager](https://github.com/Cinecom/ConsumesManager) - Easily track and manage your consumables, food buffs, and more across your inventory, bank, and mail, while supporting multiple characters and accounts. Created with ♥ by Horyoshi for World of Warcraft 1.12 Turtle WoW [Video Overview](https://www.youtube.com/watch?v=GMo-7vIHxl0)(https://www.youtube.com/watch?v=GMo-7vIHxl0 Video Overview)
- [CooldownTimers](https://github.com/Road-block/CooldownTimers) - scans your spellbook/inventory for skills/items that are in cooldown and add them to bars [[Img1](https://user-images.githubusercontent.com/26133646/39303487-a452efd0-4956-11e8-8a16-4b8c70a3b29c.png)]
- [CooldownTracker](https://github.com/Abstr4ctz/CooldownTracker) - Auras for tracking your spell and item cooldowns. [<nowiki>[Img1](https://i.imgur.com/NfMFjNM.png)</nowiki>]
- [CoolHealthBar](https://github.com/Redbu11dev/CoolHealthBar) - Extra health and power bar. [<nowiki>[Img1](https://i.imgur.com/9FUPN3k.png)</nowiki>]
- [Cooline](https://github.com/shirsig/cooline) - cooldown mod that displays icons on a single bar/line to give you an idea of when it will be ready [[Img1](https://cloud.githubusercontent.com/assets/26133646/25944440/9fbdfe1e-3643-11e7-8dbf-75a5514550c1.jpg)]
- [CorpseInfo](https://github.com/wbb1977/CorpseInfo) - Adds class, level, online status to the tooltip for a corpse
- [Crafty](https://github.com/shirsig/crafty) - Lightweight craft/tradeskill window [[Img1](https://camo.githubusercontent.com/10376e1238285cbef8e116cf36d0e6279607f32c/687474703a2f2f692e696d6775722e636f6d2f796c437474646b2e706e67)]
- [Crapfilter](https://github.com/Metalgrid/crapfilter) - Blocks messages
- [Critei](https://github.com/Caracioly/Critei) - An simple way to share your highest damage with your friends [<nowiki>[Img1](https://camo.githubusercontent.com/0c8057469cad5dfc5a410be959a7a90b327d2c98b002871cb112f9723c3e6734/68747470733a2f2f692e696d6775722e636f6d2f6535453631504a2e706e67)</nowiki>]
- [Crusader](https://github.com/Azgaardian/Crusader) - Sphere addon for Paladins, mainly for solo play
- [Cryolysis](https://github.com/laytya/Vanilla-Addons/blob/master/Cryolysis.zip) - Management of Mage spells, abilities, and reagents. Not updated for Turtle WoW like the Arcanum addon is.
- [CT BuffMod Sorted](https://github.com/AeroScripts/CT_BuffMod_Sorted) - A quick edit of CT BuffMod to sort buffs properly
- [CT MailMod](https://github.com/Einherjarn/CT_MailMod) - Allows you to send multiple mails to the same person
- [CT PlayerNotes](https://github.com/WoWruRU-ClassicAddons/CT_PlayerNotes) - Allows you to save notes for your friends, guildies & ignored persons.
- [CT UnitFrames](https://github.com/yutsuku/CT_UnitFrames) - Changes display of hp/mana values and adds a percentage
- [CThunWarner](https://github.com/McPewPew/CThunWarner) - Provides information for C'Thun raids
- [CThunPositions](https://github.com/Cinecom/CThunPositions/) - Allows you to drag the raid members on a map of C'Thun to help with positioning in phase 1 [Img1](https://i.ibb.co/s9vL2CD/image.webp)(https://i.ibb.co/s9vL2CD/image.webp Img1)
- [CustomIcons](https://github.com/Tarkusx/CustomIcons) - Create and manage custom floating icons.
- [CustomNameplates](https://github.com/laytya/CustomNameplates) - Nameplate addon [[Img1](https://camo.githubusercontent.com/07ba99a5ed0f6e28a9717e67ead1fad2e8a9ef84/687474703a2f2f692e696d6775722e636f6d2f653041617a734d2e706e67)] [[Img2](https://camo.githubusercontent.com/280a59732b093670d5b90b9d50ca9598cd41fc59/687474703a2f2f692e696d6775722e636f6d2f346f35467271772e6a7067)]
- [cyCircled](https://github.com/retrospectx/cyCircled) - changes the look of various buttons (mostly action bar buttons) [[Img1](http://imgur.com/fmatXIX)]

[↑ Go to top of page ↑](Addons#Full Addons List)

### D
- [DankScore](https://github.com/Cephel/DankScore) - a tool to choose the best items for your spec/gear
- [DamageMeters](https://github.com/dogmax/DamageMeters) - Track damage. You can output the stats in "say", "party", "raid" etc.
- [DBM](https://github.com/yutsuku/LVBM) - Deadly Boss Mods was known as La Vendetta Boss Mods (LVBM) back in Vanilla WoW, it's a stand-alone boss mod for raid groups playing in the end-game content.
- [Deathlog](https://github.com/Kirchlive/Deathlog_Vanilla) - Death heatmap overlay for the world map with danger indicator
- [DebuffFilter](https://github.com/vashin1/DebuffFilter) - Filter out specific target debuffs and player buffs into a separate frame [[Img1](https://camo.githubusercontent.com/ebc054dec9c12ae4dc96e633ae489c6750027201/68747470733a2f2f692e696d6775722e636f6d2f314c70444434542e706e67)] [[Img2](https://camo.githubusercontent.com/fefdd0bc6bd01075219531e02aa5a9a6ac8c2e74/68747470733a2f2f692e696d6775722e636f6d2f555962643353512e706e67)]
- [DebuffListCheck](https://github.com/Geigerkind/DebuffListCheck) - reporting to everyone using the addon which important debuffs are or are not applied
- [DebuffTimers](https://github.com/Voidmenull/DebuffTimers) - Timer Overlays for enemy buffs and debuffs [[Img1](http://i.imgur.com/F31cxHL.png)] [[Img2](http://i.imgur.com/wViWyqS.png)]
- [Decursive](Decursive) - Its job is to help a class that can remove debuffs [[Vid1](https://www.youtube.com/watch?v=qAOVoWETW_k&feature=youtu.be)]
- [Destroy Cursor Item](https://github.com/adrianocastro189/destroy-cursor-item) - Allows you to associate a key with the action of destroying the item currently on the cursor. Useful for quickly removing an item from the bag when it's full, without having to click confirmation.
- [DevilsHunters](https://github.com/jejkas/DevilsHunters) - creates a BigWigs timer when a Devilsaur dies and tries to pick the correct location
- [DialogUI](https://github.com/Jslquintero/DialogUI) - immersive re-skin of the default Quest and Gossip Frame
- [DifficultBulletinBoard](https://github.com/DeterminedPanda/DifficultBulletinBoard) - Inspired by the LFG Bulletin Board, this addon organizes world chat into a structured list, making it easier to find groups.
- [DiivSkins](https://github.com/McPewPew/DiivSkins) - will "paint" auxiliary images onto the two dimensional pane of your user interface [Img1](https://camo.githubusercontent.com/60755ac7bfafaed6595c5aba294a53bc8c58e217/68747470733a2f2f692e696d6775722e636f6d2f363936577745332e6a7067)(https://camo.githubusercontent.com/60755ac7bfafaed6595c5aba294a53bc8c58e217/68747470733a2f2f692e696d6775722e636f6d2f363936577745332e6a7067 Img1)
- [DisableEscape](https://github.com/EinBaum/DisableEscape) - Prevents the escape button from cancelling invites and summons
- [DiscordActionBars](DiscordActionBars) - Spreads your base 120 action buttons across 10 configurable bars
- [DispelBorder](https://github.com/wardz/DispelBorder) - Shows highlight border around enemy magic buffs [[Img1](https://camo.githubusercontent.com/19befcb06313d265a0e8c18d9eebfc6a3e504c2e/687474703a2f2f692e696d6775722e636f6d2f31444b4f784d302e6a7067)]
- [Distance](https://github.com/Linae-Kronos/Distance) - shows how far your target is away, based on the spell ranges your class has [[Img1](https://user-images.githubusercontent.com/26133646/33560281-9ec115cc-d90f-11e7-89eb-8ab56dbe5fef.png)]
- [DistanceDisplay](https://github.com/uc9089/DistanceDisplay) - Precise Distance and Line of Sight Indicator. Need UNITXP_SP3 to work.
- [DKPAuctionBidder](https://github.com/quakerzz/DKPAuctionBidder) - Small UI to bid in DKP Auctions created by [SotA](https://github.com/Sentilix/sota) [[Img1](https://user-images.githubusercontent.com/26133646/57327290-dcd5f100-710e-11e9-95ac-9033d7937aa6.png)]
- [DKPList](https://github.com/quakerzz/DKPList) - display dkp values stored in the public guild note by [SotA](https://github.com/Sentilix/sota)
- [DoiteAuras](https://github.com/Player-Doite/DoiteAuras) - Looking for WeakAuras? DoiteAuras is a lightweight, condition-based tracker for abilities, buffs, debuffs, items and bars [Vid1](https://www.youtube.com/watch?v=oXDpkqRlLDc)(https://www.youtube.com/watch?v=oXDpkqRlLDc Vid1)
- [Doomed](https://github.com/EinBaum/doomed) - (DOOM UI) is for fans of the classic shooter Doom [[Img1](https://user-images.githubusercontent.com/26133646/39195734-b528f6be-47e0-11e8-8f4f-33fbdc6be6a1.png)]
- [DoTimer](https://github.com/kc8pnd/DoTimer) - is a vastly sophisticated DoT tracking addon [[Img1](http://i.imgur.com/FC1X0t0.jpg)]
- [DouseReminder](https://github.com/Numielle/DouseReminder) - Prints a reminder to douse runes in Molten Core to officer chat
- [DPEPGP](https://github.com/yutsuku/DPEPGP) - De Profundis EP/GP Loot System
- [DragonflightUI-Reforged](https://github.com/Stormhand-dev/DragonflightUI-Reforged) - A modern UI replacement inspired by the Dragonflight UI. [Alt](https://github.com/AmonRA/-DragonflightReloaded)(https://github.com/AmonRA/-DragonflightReloaded Alt) [Alt](https://github.com/alchem1ster/DragonflightReloaded)(https://github.com/alchem1ster/DragonflightReloaded Alt)
- [Druid Eclipse Monitor](https://github.com/mdmnky/druid-eclipse-monitor) - Heads up display for Balance Druid eclipse procs.
- [DrunkTracker](https://github.com/akzkak/DrunkTracker) - Track your drunk state.
- [DpsGirl](https://github.com/ahungry/TwowDpsGirl/) - Show current dps with a friend.
- [DPSMate](DPSMate) - combat analyzation tool [[Fu](https://github.com/turinpt/FuBar_DPSMate)]
- [DruidConsumable](https://github.com/Cernie/DruidConsumable) - Script method for Druid consumable usage with powershifting
- [DruidManaBar](https://github.com/gashole/DruidManaBar) - Displays a mana bar when shapeshifted [[Img1](https://camo.githubusercontent.com/9cfe0c9cc1cbd3223408cc11cfd69036d23e5f86/687474703a2f2f692e696d6775722e636f6d2f454631714235342e706e67)]
- [Dwarvenizer](https://github.com/XalZul/Dwarvenizer-1.12) - Roleplaying addon that automatically converts your chat text to the Dwarf or Troll manner of speaking

[↑ Go to top of page ↑](Addons#Full Addons List)

### E
- [EasyCloak](https://github.com/Numielle/EasyCloak) - Automagically equip Onyxia Scale Cloak when entering Nefarian's Lair [[Vid1](https://www.youtube.com/watch?v=cPNl_njfuyk)]
- [EasyLoot](https://github.com/Numielle/EasyLoot) - addon to simplify raid loot distribution
- [EasyPoisons](https://github.com/Cinecom/EasyPoisons/tree/main) - Easily purchase poison materials from vendors with one click.  [[Img1](https://i.postimg.cc/rpQfyL5b/easypoisons.png)]
- [EasyRess](https://github.com/Numielle/EasyRess) - Simplifies chain ressing and drinking
- [EavesDrop](https://github.com/laytya/EavesDrop) - A simple combat log that displays events [[Img1](https://camo.githubusercontent.com/8105054071ab04d1ecd52b865162989be486f22672bca231e81cc8d2da693205/687474703a2f2f692e696d6775722e636f6d2f52594b4f77386e2e6a7067)]
- [eePanels](https://github.com/fulzamoth/eePanels-V) - Create and modify background panels in your WoW UI
- [EFCReport](https://github.com/cubenicke/EFCReport) - Enemy Flag Carrier report tool [[Img1](https://user-images.githubusercontent.com/613122/48218786-fc23d980-e38a-11e8-8e8d-20051e61fc4b.PNG)]
- [Egnar](https://github.com/Medeah/Egnar) - Show a range indicator for hunters [[Img1](https://github.com/Medeah/Egnar/raw/master/screenshot.png)]
- [EliteWarriorTTD](https://github.com/jlabranche/EliteWarriorTTD) - Estimates how much longer it will take to kill a boss
- [ElkBuffBar](https://github.com/Kirchlive/ElkBuffBarHor) - Tries to sort buffs into categories with pretty colors (Fails sometimes) [Alt](https://github.com/gimerstedt/ElkBuffBarHor)(https://github.com/gimerstedt/ElkBuffBarHor Alt) [[Img1](https://cloud.githubusercontent.com/assets/26133646/25943929/c8e28cc6-3641-11e7-985b-1e451f9d717a.jpg)]
- [EmeraldFramework](https://gitlab.com/woblight/EmeraldFramework/-/tree/vanilla) - Framework for addons
- [EM MonkeyBuddy](https://github.com/Rumchiller/EM_MonkeyBuddy) - Helps you configure your MonkeyMods
- [EM MonkeyLibrary](https://github.com/dogmax/MonkeyLibrary) - Mandatory dependency for MonkeyMods.
- [EM MonkeyQuest](https://github.com/Rumchiller/EM_MonkeyQuest) - Displays your quests for quick viewing
- [EM WoWQuote](https://github.com/Rumchiller/EM_WoWQuote) - Receives and transmits sound-quotes
- [EM Yatlas](https://github.com/Rumchiller/EM_Yatlas) - Yet another atlas; does NOT show or support Custom Turtle WoW Maps/Content!
- [EM_CritBam](https://github.com/Rumchiller/EM_CritBam) - EasyMachines CritBam Mod
- [EnemyFrames](https://github.com/zetone/enemyFrames) or [enemyFrames](https://github.com/byCFM2/enemyFrames)- display enemy players on BGs [[Img1](https://user-images.githubusercontent.com/26133646/34179958-3b24b5aa-e50d-11e7-891b-2a5a3740b127.jpg)] [[Img2](https://user-images.githubusercontent.com/26133646/34179950-331dc87e-e50d-11e7-8ee9-24f06097dc6b.jpg)] [[Read](https://iliana-sc.github.io/enemyframes/)]
- [EngBags](https://github.com/laytya/EngBags) - single bag / bank, the bank's remote viewing (auto-sorting, etc.) [[Img1](https://cloud.githubusercontent.com/assets/15636669/21586323/a40d5500-d0e0-11e6-83fb-6e59fc3ced91.jpg)] [[Img2](https://cloud.githubusercontent.com/assets/15636669/21586324/a40d9006-d0e0-11e6-81df-311d9bec4463.jpg)]
- [EngInventory](https://github.com/Brqje/EngInventory) - AutoSorting Inventory Replacement [[Img1](https://camo.githubusercontent.com/e41f237ed4fc939b41b67e5a277315906745dc11/68747470733a2f2f696d6775722e636f6d2f57624241714b4c2e706e67)]
- [Enhancer](https://github.com/Abstr4ctz/Enhancer) - Enhancement Shaman Essentials
- [EPGPexport](https://github.com/isitLoVe/EPGPexport) - Effort Points/Gear Points Loot System export tool
- [EQCompare](https://github.com/laytya/EQCompare-Vanilla) - Compare equipped inventory items against items in chatframe hyperlink and bags/bank [[Img1](https://camo.githubusercontent.com/a8c93e9b7564bb3ed63ed84e4bca127e6874765f/687474703a2f2f692e696d6775722e636f6d2f655877587849612e6a7067)]
- [EQL3](https://github.com/laytya/EQL3) - A reskinned Extended Quest Log addon inspired by TukUI [[Img1](https://camo.githubusercontent.com/8522e483baeba329824998475ce09c177dfefe00/687474703a2f2f692e696d6775722e636f6d2f51376766636e6c2e6a7067)]
- [EquipColor](https://github.com/TrangOul/EquipColor) - colors unequippable items red in the inventory [[Img1](https://cloud.githubusercontent.com/assets/26133646/25950931/72304ea2-365c-11e7-855c-bead97d9b200.jpg)]
- [EquipCompare](https://legacy-wow.com/vanilla-addons/equipcompare/) - Compare items easily with ones you have equipped
- [Erea-RP](https://github.com/erea-turtle-addons/erea-rp-addons) - Lets Game Masters create and distribute interactive RP items to players.
- [ES](https://github.com/Smirgeli/ES) - Plays the loud glang sound when using execute familiar from WotLK expansion
- [ETL](https://github.com/shirsig/ETL) - Exp Per hour/time til level addon [[Img1](http://i.imgur.com/bKZJHjI.png)]
- [eUI](https://github.com/Ennea/eUI) - is a small collection of interface addons [[Img1](https://i.imgur.com/t5WTqEB.jpg)]
- [EVTCalendar](https://github.com/TheOneReed/EVTCalendar) - Event Calendar AddOn [[Img1](http://i.imgur.com/GPPh3Sr.png)]
- [ExoRaidSetup](https://github.com/0ldi/ExoRaidSetup) - allows a raid to share graphical representations of boss pulls
- [ExpandAssist](https://github.com/Geigerkind/ExpandAssist) - enabling the raid assist to do the same as an raid leader
- [Explorer's Map](https://github.com/trashcanhands/ExplorerMap) - Embrace exploration while still keeping track of Quest NPCs
- [EZ-EPGP](https://github.com/yutsuku/EZ-EPGP) - Displays EP/GP ratio in neat frame that can be sorted by clicking on headers [[Img1](https://github.com/yutsuku/EZ-EPGP/raw/master/docs/preview.png?raw=true)]
- [EzDismount](https://github.com/laytya/EzDismount) - Dismounts you whenever "Cannot use while mounted" appear
- [EzPoison-turtle](https://github.com/wierdthing/EzPoison/tree/main) - Rogue Poison Helper, updated for Turtle [[Img1](https://i.imgur.com/LrDLpWF.png)] [[Img2](https://i.imgur.com/iium2ID.png)]

[↑ Go to top of page ↑](Addons#Full Addons List)

### F
- [FadeFrameUI](https://github.com/Bagan95/FadeFrameUI) - Lightweight addon that changes the transparency of the Player Frame, Pet Frame, Minimap, Action Bars and Buff Frame [[Img1](https://i.imgur.com/ic155H3.jpeg)]
- [FastBinding](https://github.com/CDNievas/FastBinding) - Bind spells quickly directly from your action bars
- [Feid](https://github.com/NiclasEriksen/Feid) - Smoothly fade any UI element when entering/exiting combat [Img1](https://github.com/NiclasEriksen/Feid/blob/main/img/preview.png?raw=true)(https://github.com/NiclasEriksen/Feid/blob/main/img/preview.png?raw=true Img1)
- [FelwoodGather](https://github.com/0ldi/FelwoodGather) - helps you and your team mate with felwood fruit gathering, location and timer management
- [FeralFire](https://github.com/MarkTiedemann/FeralFire) - Customizable WoW attack add-on for Cat Form Feral Druids
- [FFXIVCrossHotbar](https://github.com/moiian/FFXIVCrossHotbar) - A complete action bar designed to replicate the controller-friendly Cross Hotbar (XHB) system from Final Fantasy XIV
- [Fika](https://github.com/ItsLusse/Fika) - Fast Invite Komp Assigner invites players from the Raid-Helper roster and organizes raid groups to match the Raid-Helper Discord setup.
- [FineZoom](https://github.com/Stormhand81/FineZoom) - Precise mouse wheel zoom
- [FishInfo2](https://github.com/wbb1977/FishInfo2) - keeps track of which fish you catch in each zone
- [FishingBuddy](Fishing Buddy) - Help with fishing related tasks
- [FishingVolume](https://github.com/Deffar/FishingVolume) - Automatically handle your volume levels and adds a few quality-of-life shortcuts to make long fishing sessions less of a chore.
- [FishSwap](https://github.com/Draiscor/FishSwap) - one-click swapping between a weapon + offhand and a fishing pole.
- [Fizzle](https://github.com/McPewPew/Fizzle) - Show item durability and quality in the character frame
- [Fizzwidget Hunters Helper](https://github.com/McPewPew/GFW_HuntersHelper) - Tooltips and info for learning pet spells from taming.
- [Flamestriker](https://github.com/pepopo978/Flamestriker) - Rotate Flamestrike ranks for overlapping ground effect damage.
- [FlightMap](https://github.com/TrangOul/FlightMap) - Shows flight master locations, flight durations and flight lines.
- [FlightTracker](https://github.com/tilare/FlightTracker) - Shows flight durations and provides flight statistics.
- [FlyerTimer](https://github.com/trumpetx/FlyerTimer) - Shows a BigWgs flight timer when you get on a Turtle custom flying mount such as a guild base mount (requires: BigWigs)
- [Flyout](https://github.com/lookino/Flyout) - Mimicks the flyout feature implemented in later expansions. Using a macro you can create a flyout action button that groups together various spells. [[Img1](https://github.com/luskanek/Flyout/raw/master/screenshots/bar.png)]
- [FocusFrame](https://github.com/wardz/FocusFrame) - Provides [focus targeting](http://wowwiki.wikia.com/wiki/Focus_target) & frame support [[Img1](https://camo.githubusercontent.com/c9ddc4c81975895b69a7f2ba7b988064afffc419/687474703a2f2f692e696d6775722e636f6d2f4f4563577767552e6a7067)]
- [FocusFrame TargetCastbar](https://github.com/wardz/FocusFrame_TargetCastbar) - Adds an extra castbar for your current target
- [FollowMeEnhanced](https://github.com/NOo0B1/FollowMeEnhanced) - Allows other players to put you on auto-follow.
- [FonzAppraiser](https://github.com/byCFM2/FonzAppraiser) - farm/loot tracker with sessions
- [Forged Map Notes](https://github.com/nemanuel/Forged_MapNotes) - Automatically records gathering locations and lets players create custom map notes
- [Forged Pet Happiness](https://github.com/nemanuel/Forged_PetHappiness) - Frame that shows hunters pet status
- [Forged Sell All Grays](https://github.com/nemanuel/Forged_SellAllGrays) - Merchant button that sells all poor-quality items with one click
- [FrameFade](https://github.com/neimad-mp/FrameFade) - Hides the player and pet frames based on conditions. Supports the default and pfUI unitframes
- [FreeBagSlots](https://github.com/anzz1/FreeBagSlots) - Free bag slots counter [[Img1](https://user-images.githubusercontent.com/13628128/58876631-5e517c80-86d7-11e9-97c4-ff6ca33ad2f4.png)]
- [Friend-O-Tron](https://github.com/refaim/Friend-O-Tron) - Synchronizes your friends list across all your characters and accounts (with SuperWoW) on the same realm.
- [FriendFinder](https://github.com/Fiskehatt/FriendFinder) - An addon that helps you find your old friends from other servers!
- [FuBar](FuBar) - A panel that modules can plug into
- [FuBar BuffLeecherFu](https://github.com/birdayz/FuBar_BuffLeecherFu) - FuBar-2.0 Plugin that logs you out once you get Onyxia or ZG buff
- [FuBar Population](https://github.com/Shellyoung/FuBar_Population) - Displays server population
- [Fubar pfQuestFu](https://github.com/goldenpipes/pfQuest_Fu) - Add pfQuest icon and menu to your FuBar!
- [Fubar PortalsFu](https://github.com/laytya/FuBar_PortalFu) - All portals and teleports in one place [img1](https://user-images.githubusercontent.com/20452393/279325992-c3150846-0b34-4595-baf7-27d70d409cfa.jpg)(https://user-images.githubusercontent.com/20452393/279325992-c3150846-0b34-4595-baf7-27d70d409cfa.jpg img1) [img2](https://user-images.githubusercontent.com/20452393/279326105-8a4d5f32-fd7f-4417-afd0-f6b22ad036d1.jpg)(https://user-images.githubusercontent.com/20452393/279326105-8a4d5f32-fd7f-4417-afd0-f6b22ad036d1.jpg img2)
- [Fubar PossessionsFu](https://github.com/Road-block/Fubar_PossessionsFu) - FuBar plugin for Possessions addon
- [FuBar PursueFu](https://github.com/laytya/FuBar_PursueFu) - Easily change tracking abilities in Fubar or standalone.
- [FuBar ToFu](https://github.com/Road-block/FuBar_ToFu) - Flight time recorder
- [FuBar ZepMaster](https://github.com/EbedaNostalrius/FuBar_ZepMaster) - ZepShipMaster FuBar Plugin
- [FullSack](https://github.com/Otari98/FullSack) - Item and money count on tooltips
- [FullUIToggle](https://github.com/spuxx1701/FullUIToggle) - Helps with taking better screenshots! It works similar to the default UI Toggle (that is bound to Alt+Z by default), but also hides overhead player or NPC names.
- [Fury](https://github.com/cubenicke/Fury) - end game raiding addon to make Warrior combat easier

[↑ Go to top of page ↑](Addons#Full Addons List)

### G
- [Gamepad](https://github.com/yutsuku/Gamepad) - Simplifies using abilities when using gamepad
- [GamonKillTimer](https://github.com/Voidmenull/GamonKillTimer) - never miss a gamon kill again!
- [Gatherer](https://github.com/Haaxor1689/Gatherer) - Track the closest plants, deposits and treasure locations on you minimap [[Img1](https://cloud.githubusercontent.com/assets/15636669/21586400/dc061a68-d0e1-11e6-9f16-0fd8da155904.jpg)] [[Img2](https://user-images.githubusercontent.com/26133646/39196751-2dd250ea-47e3-11e8-96c2-6d275a7a90b9.png)].
- [GCDTimerBar](https://github.com/Ageous27/GCDTimerBar) - Simple global cooldown bar  with "press early" latency overlay.
- [GearMenu](https://github.com/RagedUnicorn/wow-vanilla-gearmenu/releases) - Allows for easier switching between items and keybinding them [[Img1](https://github.com/RagedUnicorn/wow-gearmenu/raw/master/Docs/gm_switch_items.gif)]. **Note:** Only download the release build from the releases page on GitHub. Do not download the raw files on the main GitHub page or through GitAddonsManager, as that will result in getting the debug text spam version of the addon.
- [GentleGC](https://github.com/MarcelineVQ/GentleGC) - Run garbage collection without pause-the-world allocation
- [GetHead](https://github.com/trumpetx/GetHead) - Log your character out after receiving Rallying Cry of the Dragonslayer or Spirit of Zandalar (good for AFK world buffing)
- [GFW DisenchantPredictor](https://github.com/McPewPew/GFW_DisenchantPredictor) - A quick reference to sources of Enchanting materials
- [GFW FeedOMatic](https://github.com/Monteo/GFW_FeedOMatic) - Helps a Hunter keep his pets well fed (and the food in his inventory under control)
- [GFW HuntersHelper](https://github.com/McPewPew/GFW_HuntersHelper) - Helps you find tameable beasts to learn pet skills from
- [Ghost](https://github.com/diff3/Ghost) - Creates 25 buttons bar under mouse pointer (hidden) [[Img1](https://user-images.githubusercontent.com/26133646/39396620-89981264-4af1-11e8-96e9-55a621a98127.png)]
- [GlobalFriendsList](https://github.com/TrangOul/GlobalFriendsList) - An addon that can carry your friends list between toons.
- [GMBlacklist](https://github.com/shagu/GMBlacklist) - helps GMs to cut and blacklist raw chat messages
- [GMR](https://github.com/GrenderG/GMR) - provides a GUI for GM tasks
- [GoblinBrainwashingHelper](https://github.com/McPewPew/GoblinBrainwashingHelper) - Customize your Goblin Brainwashing Device with specialization names and colors [[Img1](https://github.com/user-attachments/assets/1079cdc1-714c-4be6-acf4-7541447a990b)]
- [Goblin Brain Saver](https://github.com/FSuhas/Goblin-Brain-Saver) - Goblin Brain Saver is a Turtle addon that allows you to save, restore, and organize your talent specializations. It integrates seamlessly with the game UI using a custom Spellbook-inspired window. [<nowiki>[img](https://github.com/FSuhas/Goblin-Brain-Saver/blob/main/image.png)</nowiki>]
- [GodMode](https://github.com/qiaeru/GodMode) - A comprehensive toolbox for Game Masters
- [Gourmet](https://github.com/jsb/Gourmet) - selects suitable food / drinks for picky eaters
- [GrayAutoSell](https://github.com/ttcremers/GrayAutoSell) - Automatically sells all your gray bag items when you interact with a merchant
- [GreedMeter](https://github.com/iGreed1993/GreedMeter) - Modern DPS and Threat meter. 
- [GrimoireKeeper](https://github.com/Scoboose/GrimoireKeeper) - Tracks which grimoires your warlock pets have learned [2](https://github.com/Lichery/GrimoireKeeper)(https://github.com/Lichery/GrimoireKeeper 2) [3](https://gitlab.com/Artur91425/GrimoireKeeper)(https://gitlab.com/Artur91425/GrimoireKeeper 3) [[Img1](https://user-images.githubusercontent.com/24303693/34895078-207a4008-f7f5-11e7-8fbf-c8dc4a2a3121.jpg)]
- [GrimReaper](https://github.com/xorann/GrimReaper) - Shows the last three hits whenever a player dies
- [GrindSpots](https://github.com/onnateldome/GrindSpots) - helps players quickly find suitable grind spots for their current level
- [GroupCalendar](https://github.com/Monteo/GroupCalendar) - provides an in-game calendar for planning, signing up, and managing events
- [Groupfinder](https://github.com/redshadowz/Groupfinder) - Calltoarms fork, interface simplified, but with expanded chat parsing features.
- [GroupManager](https://github.com/MtxGrower33/GroupManager) - Manages group formations and party utilities
- [GryllsBongos](https://github.com/carolluparu/GryllsBongos) - Bongos Extension for World of Warcraft: Vanilla
- [GryllsSwingTimer](https://github.com/flyinbed/GryllsSwingTimer) - Use the zUI swing timer as a standalone addon with additional color themes. [[Img1](https://raw.githubusercontent.com/GryllsAddons/AddonPreviews/main/GryllsSwingTimer/GST_Class.png)]
- [Guda](https://github.com/vatichild/guda) - Comprehensive bag and bank management.
- [GudaPlates](https://github.com/vatichild/guda-plates) - A customizable nameplate addon
- [GuideCreator](https://github.com/Zarant/GuideCreator/tree/classic) - Auto generates in-game leveling guides
- [Guidelime Vanilla](https://github.com/JeromeM/GuidelimeVanilla) - [BETA] - AddOn providing an enhanced guide system with automatic quest tracking and autonomous navigation. Testers needed !
- [GuildAlts](https://github.com/sica42/GuildAlts) - lets you manage and share alt names for guild members.
- [Guildbank](https://github.com/Road-block/guildbank) - AddOn for posting bags and bank items to forum (BBCODE)
- [GuildMainTagger](https://github.com/graved/GuildMainTagger) - Displays the names of the main characters in guild messages if they are in the officer notes
- [GuildMap](https://github.com/Haaxor1689/GuildMap) - Displays guild members on the world and mini map
- [GuildRecipes](https://github.com/sica42/GuildRecipes) - View and share tradeskill recipes with your guild
- [GuildRoll](https://github.com/RollingSmile/GuildRoll) - Basic Effort Points (EP) manager
- [GuildSearch](https://github.com/yutsuku/GuildSearch) - Search guild roster by provided name or part of it [[Img1](https://github.com/yutsuku/GuildSearch/raw/master/docs/promo.png?raw=true)].

[↑ Go to top of page ↑](Addons#Full Addons List)

### H
- [HardcoreAlarms](https://codeberg.org/hyperhumble/HardcoreAlarms) - Configurable Alarms for Low HP, out of breath, dangerous quests and enemies. Primarily for hardcore characters.
- [HardcoreDeath](https://github.com/Hodareh/HardcoreDeath) - An addon for Turtle WoW that announces in guild how you died if you're doing the hardcore challenge.
- [HasteDisplay](https://github.com/Timanaku/HasteDisplay) - Displays your current haste percentage with color-coded consumable indicators
- [HatTrick](https://github.com/vakos1/HatTrick) - Simple cloak/helm checkboxes in the character frame
- [HawkenPlates](https://github.com/yutsuku/HawkenPlates) - Nameplate based on Hawken (Mech FPS Game) [[Img1](https://user-images.githubusercontent.com/26133646/39197849-ddff86e8-47e5-11e8-8d83-1884d2c7d51b.png)]
- [HBActionBars](https://github.com/hitbutton/HBActionBars) - Action Bars Replacement
- [HBPowerInfusion](https://github.com/hitbutton/HBPowerInfusion) - Helper for Power Infusion Priests
- [HCDeaths](https://github.com/neimad-mp/HCDeaths) - Displays and logs hardcore deaths on Turtle WoW [Img1](https://user-images.githubusercontent.com/107083057/239706238-f12e7732-d9e2-433c-b987-bc880ef186ed.png)(https://user-images.githubusercontent.com/107083057/239706238-f12e7732-d9e2-433c-b987-bc880ef186ed.png Img1) [Img2](https://user-images.githubusercontent.com/107083057/239706235-58b967c1-df33-4620-a2b4-2ae163768802.png)(https://user-images.githubusercontent.com/107083057/239706235-58b967c1-df33-4620-a2b4-2ae163768802.png Img2)
- [HCFilter](https://github.com/trumpetx/TurtleHCFilter) - Filter the HC chan messages and redirect them to a chatframe of choice
- [HCQuest](https://github.com/ilithyia-addons/HCQuest) - Adds a quest warning and information for PvP and dangerous quests.
- [HCRank](https://github.com/neimad-mp/HCRank) - Adds Turtle WoW hardcore death information to the tooltip for dangerous mobs and players.
- [HCSpy](https://github.com/Sulpitz/HCSpy) - Find out who is using Luna unit Frames or HealComm!
- [HCWarn](https://github.com/neimad-mp/HCWarn) - Helps prevent accidental PvP flagging and warns when flagged.
- [Healbot Classic](https://github.com/yogo1212/healbot-classic) - Adds panel with skinable bars for healing and decursive
- [HealComm](https://github.com/Otari98/HealComm) - Visual representation of incoming heals [Alt](https://github.com/maztheman/HealComm)(https://github.com/maztheman/HealComm Alt) [[Img1](https://cloud.githubusercontent.com/assets/15636669/21587110/8b6f4a40-d0e9-11e6-9bcb-ca8f00dd51ca.jpg)]
- [HealersMate](https://github.com/i2ichardt/HealersMate) - Unit frames addon for healers, outdated and succeeded by [Puppeteer](https://github.com/OldManAlpha/Puppeteer)
- [HealingAssignments](https://github.com/Voidmenull/VanillaHealingAssignments) - Make easy and fast Healing Assignments, post them in class-colors! [[Fu](https://github.com/Voidmenull/FuBar_VhaFu)] [[Img1](http://i.imgur.com/RNhe8k2.png)]
- [HendriShift](https://github.com/CosminPOP/HendriShift) - powershift consumables helper
- [HideErrorFrame](https://github.com/zirtox1992/HideErrorFrame) - Removes the error messages that spam your screen
- [HideNamePlates](https://github.com/Hosq/HideNamePlates) - Hides name plates based on unitnames [[Img1](https://camo.githubusercontent.com/507863a840c1be6e56aaa14d3f72d0c4305008b8/68747470733a2f2f7075752e73682f77566f64352f363364303634623738302e6a7067)] [[Img2](https://camo.githubusercontent.com/e8b09a1453de729dedcb5998c1832591fa69f173/68747470733a2f2f7075752e73682f77566f38562f653364363964313432612e6a7067)]
- [HideUI](https://github.com/JakiraElysium/HideUI) - Hides the icons at the end of the action bars [[Img1](https://user-images.githubusercontent.com/26133646/39135808-1aba72e0-471a-11e8-911c-e65114df9347.png)]
- [4HMHelper](https://github.com/NiclasEriksen/4HMHelper) - Shows if you are in the safe zone, stacks you have and Zeliek chain range (/4hm).
- [HolyShift](https://github.com/qrospars/HolyShiftMiio) - Cat druid one-button dps and other useful feral druid functions.
- [honorcounter](https://gitlab.com/woblight/honorcounter/-/tree/vanilla) - Estimates the honor gained
- [HonorSpyTurtle](https://github.com/jrc13245/HonorSpyTurtle) - collects all the honor/rank info on all players you met and shows it [[Img1](https://camo.githubusercontent.com/0591609f4553450e118e82a66a44c2d71b8ae380/68747470733a2f2f686162726173746f726167652e6f72672f66696c65732f3331622f6539322f6639652f33316265393266396562303434613533623465623634326430636134336262632e706e67)]
- [HordeIronfoe](https://github.com/Pre-Elysium/HordeIronfoe) - Ironfoe speech impediment repairer for Horde
- [HotBotPanel](https://github.com/DuduSandsten/HotBotPanel) - Helpful panel for keeping hots up on Sapphiron [[Img1](https://github.com/DuduSandsten/HotBotPanel/raw/master/HotBotPanel-screenshot.png?raw=true)]
- [HunterSwissKnife](https://github.com/enn-wow-addons/HunterSwissKnife) - provides hunters with a set of useful things

[↑ Go to top of page ↑](Addons#Full Addons List)

### I
- [IBDF](https://github.com/Geigerkind/IBDF) - addon to control what mages cast
- [Iconic](https://github.com/alchem1ster/Vanilla-Iconic) - Improves the default macro icon selection system by adding a search bar [<nowiki>[Gif](https://s12.gifyu.com/images/S51tM.gif)</nowiki>]
- [IFAlert](https://github.com/Abstr4ctz/IFAlert) - Notifies you when Inner Fire is not up
- [Ignite Status](https://github.com/vakos1/Ignite-Status) - Indicators for ignite and scorch for fire mages
- [IMBA](https://github.com/0ldi/IMBA) - several unique functions for coordination raid, develop tactics and its display in visual form for all raid
- [IMDead](https://github.com/0ldi/IMDead) - Plays an audio file when you die and lvlup
- [ImprovedErrorFrame](ImprovedErrorFrame) - Display errors in scroll-able/selecting frame
- [ImprovedIgnore](https://github.com/twothe/ImprovedIgnore) - Improved functionality for ignore
- [Impulse-booster](https://github.com/Warlockbugs/impulse-booster) - mainly improves UI loading speed for pre-WotLK clients and sometimes improves performance
- [InsigniaTaken](https://github.com/Bergador/InsigniaTaken) - Hides the "Insignia taken" error message when somebody loots your corpse inside a battleground
- [Inspect](https://github.com/shirsig/inspect) - debug pretty print
- [Inspector](https://github.com/doorknob6/Inspector) - Adds a few features to the standard character inspect: keybinds, caching, stat calculation
- [InstanceJournal](https://github.com/Arthur-Helias/InstanceJournal) - A reimagining of World of Warcraft's original Encounter Journal, built for TurtleWoW! [<nowiki>[Img1](https://github.com/user-attachments/assets/38777084-313a-436c-ba8a-54cf33d53964)</nowiki>] [<nowiki>[Img2](https://github.com/user-attachments/assets/903b18a6-52bc-418a-86d7-ebfcfc8c688e)</nowiki>] [<nowiki>[Img3](https://github.com/user-attachments/assets/a6c8535b-5b45-431a-a81c-d6c0a382480b)</nowiki>] [<nowiki>[Img4](https://github.com/user-attachments/assets/bde67b61-e7f6-4d20-ab93-ab696dc1ec41)</nowiki>]
- [InstanceTimers](https://github.com/MarcelineVQ/InstanceTimers) - Tracks your 5 instance lockouts.
- [IntelliSense](https://github.com/jrc13245/IntelliSense) - provides auto-completion for chat messages. It learns from your typing patterns and suggests word completions as you type
- [Interruptor](https://github.com/Road-block/Interruptor) - Interrupt announcer
- [InventorySale](https://github.com/jejkas/InventorySale) - Converts inventory in to BBcode for easy forum posts
- [ItemHints](https://github.com/Road-block/ItemHints) - Tooltip notes for interesting items
- [ItemIDTooltip](https://github.com/cyaohiri/ItemIDTooltip) - Adds item ID to item tooltips
- [ItemRack](ItemRack) - Context menus for inventory items [[Fu](https://github.com/Linae-Kronos/ItemRackFu)] [[Vid1](https://www.youtube.com/watch?v=Fdfb0gH913U)]
- [ItemsOfPower](https://github.com/Road-block/ItemsOfPower#itemsofpower) - Item Stat Valuation Addon [[Img1](https://github.com/Road-block/ItemsOfPower/raw/docs/IOP_set_stat_weight.png)]
- [ItemSplit](https://github.com/balakethelock/ItemSplit) - merge and split large amounts of items in your inventory with slash commands [<nowiki>[Vid1](https://user-images.githubusercontent.com/111737968/264392113-b13b1279-c690-46a3-bc67-e5e65fe4e7a2.mp4)</nowiki>]
- [ItemTooltipIcons](https://github.com/refaim/ItemTooltipIcons) - enhances item tooltips by displaying profession icons for crafting ingredients [<nowiki>[Img1](https://github.com/refaim/ItemTooltipIcons/raw/master/screenshots/copper.jpg)</nowiki>] [<nowiki>[Img2](https://github.com/refaim/ItemTooltipIcons/raw/master/screenshots/iron.jpg)</nowiki>] [<nowiki>[Img3](https://github.com/refaim/ItemTooltipIcons/raw/master/screenshots/leather.jpg)</nowiki>]
- [IWIN](https://github.com/Atreyyo/IWIN) - A one button macro addon for Warriors
- [Immersion](https://github.com/Stormhand81/Immersion) - Hides UI Elements when outside resting zones for more immersion.
- [Immersive Dialog UI](https://github.com/moiian/ImmersiveDialogUI) - A enhanced conversation addon with a focus on immersion and customization.

[↑ Go to top of page ↑](Addons#Full Addons List)

### J
- [JIM CooldownPulse](https://github.com/pushxd/JIM_CooldownPulse) - As spells, actions, and items become available, their icons will flash in a conspicuous place
- [JIM toolbox](https://github.com/pushxd/JIM_toolbox) - provides configuration UI for other AddOns!
- [Journal](https://github.com/GitStrom/Turtle-Journal) - simple notebook addon for RP players.

[↑ Go to top of page ↑](Addons#Full Addons List)

### K
- [KallyoAutoShot](https://github.com/xniko/KallyoAutoShot) - Auto-shot timer for hunters based on Rais' Auto-shot
- [KANGZ](https://github.com/Grymskvll/KANGZ) - addon for managing Dire Maul Tribute buff run invites [[Img1](https://github.com/Grymskvll/KANGZ/raw/master/KANGZ.png)]
- [KethoDoc](https://github.com/refaim/KethoDoc) - dumps the WoW Lua API for [Vanilla WoW Lua Definitions](https://github.com/refaim/Vanilla-WoW-Lua-Definitions).
- [KeijinAchievementMonitor](https://github.com/KeijinDE/KeijinAchievementMonitor) - a standalone achievement system for Turtle WoW
- [KeijinAutoVendor](https://github.com/KeijinDE/KeijinAutoVendor) - Automatically sells gray (poor quality) items and repairs your gear when visiting a vendor.
- [KeyringOpener](https://github.com/EinBaum/KeyringOpener) - Opens the keyring whenever all bags are opened (Shift-B)
- [KillCounter](https://github.com/FrostShock/KillCounter) - Shows how many things you killed (mobs, players, critters) [<nowiki>[Alt](https://github.com/bucketss/KillCounter)</nowiki>]
- [KillLog](https://github.com/Road-block/KillLog) - a GUI for browsing your Kill Log history [[Img1](http://imgur.com/C7x4hR8.png)] [[Img2](https://i.imgur.com/aZ5IIGl.png)]
- [Killpro](https://github.com/sumowares/killpro) - used for tracking all kills [[Img1](http://i.imgur.com/7b4S0Wol.jpg)]
- [KillTrack](https://github.com/sica42/KillTrack) - Tracks any and all mob kills for you. [Img1](https://imgur.com/HVCrCBA)(https://imgur.com/HVCrCBA Img1) [Img2](https://imgur.com/DawFJzs)(https://imgur.com/DawFJzs Img2)
- [KLHThreatMeter (KTM)](KLHThreatMeter) - Threat meter. This version of KTM uses the TWThreat API when available, and the 1.12 threat guessing code otherwise.
- [KTMemeAddon](https://github.com/Bergador/KTMemeAddon) - Replaces mob names of the KT encounter with meme-ier names
- [KTP3ShackleCounter](https://github.com/Bergador/KTP3ShackleCounter) - Keeps track of the number of shackles on the Kel'Thuzad encounter phase 3
- [Kui Nameplates](Kui Nameplates) - Prettier nameplates. Backport from later WoW versions.

[↑ Go to top of page ↑](Addons#Full Addons List)

### L
- [LagCast](https://github.com/Johnmichael/LagCast) - compensate for latency and the casting design flaw in the Vanilla client
- [Lager](https://github.com/ZenSociety/Lager) - Reduces lag by pausing superfluous combat logs.
- [LanguageFilter](https://github.com/Road-block/LanguageFilter) - Filter chat messages by character range
- [LazyPig](LazyPig) - An addon for lazy people. Helps automate dismounting, repetitive quests, NPC interactions, and interface actions. [[Vid1](https://www.youtube.com/watch?v=NzNAG85UMyU&feature=youtu.be)]
- [LazyRes](https://github.com/BlackHaste/LazyRes) - makes resurrecting the raid after a wipe easy
- [LazyScript](https://github.com/laytya/LazyScript) - very powerful scripting tool [[wiki](https://github.com/laytya/LazyScript/wiki)]
- [LazySpell](https://github.com/laytya/Lazyspell) - auto healing spell rank scale for Clique and Classic Mouseover
- [LazyWeirdo](https://github.com/MarcelineVQ/LazyWeirdo) - Replacment for lazypig and personal loot automation
- [Lern2Spell](https://github.com/mr-rosh/Lern2Spell) - Automatically upgrades spells on your actionbars
- [LevelRange-Turtle](https://github.com/Spartelfant/LevelRange-Turtle) - Shows the zone level range on the World Map. Now with 100% more turtles!
- [LFGHelper](https://github.com/ralliartse/LFGHelper) - Detects LFG/LFM messages in chat and displays them
- [LHCP](https://github.com/turinpt/LHCP) - LeeroyHillCatsPower extended audio emotes
- [LibramSwap](https://github.com/jvaneg/Libramswap) - Adds automatic smart libram swapping for paladins - no macros required.
- [LilSparkysWorkshop](https://github.com/laytya/LilSparkysWorkshop-vanilla) - adds auction-derived pricing information for trade skills right into the trade skill recipe frame [[Img1](https://camo.githubusercontent.com/8344d50dca78948dcbeaafc0eb227d1263fe6c76/687474703a2f2f692e696d6775722e636f6d2f555872524f786c2e6a7067)]
- [Linkmend](https://github.com/shirsig/linkmend) - Converts CLINK links into regular ones and localizes and fixes regular ones if possible
- [LoadIT](https://github.com/laytya/Vanilla-Addons/blob/master/LoadIT.zip) - In-game addon management
- [LoathebOrder](https://github.com/MarcelineVQ/LoathebOrder) - Provides a macro to announce your loatheb heal
- [LockAssignment](https://github.com/Zedorff/LockAssignment) - addon that allow users to assign curses, banish responsibilities, and soul stone recipients for 40 man raids.
- [LockPort](https://github.com/seacrabsam/LockPort) - For warlock players. Coordinates the summoning of those who type 123
- [LockPort_Plus](https://github.com/randall05/LockPort_Plus) - forked from LockPort, add support for multiple localizations (English and Chinese now)
- [Lookup](https://github.com/TrangOul/Lookup) - Adds searchboxes to the backpack and tradeskill window that the player can use to look up what they need[<nowiki>[Img](https://github.com/TrangOul/Lookup/raw/master/screenshot.png)</nowiki>]
- [LootAtMouse](https://github.com/mitjafelicijan/LootAtMouse) - Opens loot window at current mouse cursor position.
- [LootBlare](https://github.com/MarcelineVQ/LootBlare) - A frame that pops up and shows item and rolls when a single uncommon+ item is linked in Raid Warning [<nowiki>[Img](https://github.com/MarcelineVQ/LootBlare/blob/master/lootblareframe.png)</nowiki>]
- [LootBlare 2.0](https://github.com/FSuhas/LootBlare-For-RoolFor) - LootBlare customizable RollCap with /lbr [<nowiki>[Img1](https://raw.githubusercontent.com/FSuhas/LootBlare-2.0/refs/heads/main/image.png)</nowiki>] [<nowiki>[img2](https://raw.githubusercontent.com/FSuhas/LootBlare-2.0/refs/heads/main/lootblareframe.PNG)</nowiki>]
- [LootCrestReminder](https://github.com/KameleonUK/LootCrestReminder) - Visual and Audio warning to loot the new Weekly quest items when the relevant boss dies
- [LootMonitor](https://github.com/Wiggen94/lootmonitor) - Customizable floating loot notification that displays fading notifications with real item icons when you loot items or coins [<nowiki>[img](https://raw.githubusercontent.com/Wiggen94/lootmonitor/refs/heads/main/images/image.png)</nowiki>]
- [LootTracker](https://github.com/Road-block/LootTracker) - The primary purpose of this addon is track the loot that you and your party receive [[Img1](https://camo.githubusercontent.com/fc6bf4d56b90dbd1ecf6f21cbc92deb6a70810ed/687474703a2f2f692e696d6775722e636f6d2f32716d624b73732e6a7067)]
- [LootRes](https://github.com/CosminPOP/LootRes) - Raiding loot helper for use with Soft Reserve loot systems. [[Vid1](https://www.youtube.com/watch?v=OeV2hqkYA_s)]
- [LoseControl](https://github.com/Road-block/LoseControl) - makes it easy to see the duration of crowd control spells by displaying them in a dedicated icon on screen [[Img1](https://i.imgur.com/TTA1bXR.jpg)]
- [LunaUnitFrames](Addon LunaUnitFrames) - Lightweight Unit Frames in a modern look
- [LVBM](https://github.com/yutsuku/LVBM) - (La Vendetta Boss Mods) is a stand-alone boss mod for raid groups playing in the end-game content, you might be familiar with later versions of this known as DBM (Deadly Boss Mods)
- [Loot Hog](https://www.wowinterface.com/downloads/info12031-LootHog.html) - Detects and tracks rolls which are made with '/random' or '/roll' and sorts them, allowing raid leaders to announce roll winners quickly and easily.

[↑ Go to top of page ↑](Addons#Full Addons List)

### M
- [MacroTextStop](https://github.com/WobLight/MacroTextStop) - Hides macro texts in action buttons
- [MacroTT-V](https://github.com/UndercityAddons-Vanilla/MacroTT-V) - Create tooltips for your macros [[Img1](http://i.imgur.com/No29ZuX.jpg)] [[Img2](http://i.imgur.com/6Sq55nX.jpg)]
- [MageHud](https://github.com/pepopo978/MageHud) -  Display remaining mage shields for ice barrier/mana shield/protection pots and more.
- [Magnify](https://github.com/lookino/Magnify) - Enables world map zoom
- [Mail](https://github.com/EinBaum/Mail) - Easier mailbox management in WoW. Mail is a newer rewrite of Postal, both are by the same dev Shirsig.
- [ManaMinder](https://github.com/melbaa/ManaMinder) - addon for managing mana consumables [[Img1](https://github.com/GritsUI/ManaMinder/raw/master/docs/images/Screenshot1.png)]
- [MainTagger](https://github.com/Knomkrad/Turtle-wow_MainTagger) -  Addon that will print your Main character name in Guild chat or Whisper message if you are on an Alt.
- [ManyQTItemTooltips](https://github.com/AtheneGenesis/Vanilla_ManyQTItemTooltips) - Up to 20 tooltips
- [MapOfScars](https://github.com/yutsuku/MapOfScars) - adds the Skyrim's compass [[Vid](https://youtu.be/Qtuv0gdHo7k)]
- [MapTarget](https://github.com/EinBaum/MapTarget) - makes all "red dots" on the minimap clickable [[Vid1](https://www.youtube.com/watch?v=9RwBYzuGHRo)]
- [MasterLootByClass](https://github.com/Otari98/MasterLootByClass) - Sorts raid members by class rather than group
- [MasterLootRemind](https://github.com/Road-block/MasterLootRemind) - Prompt Raid Leader to Set Master Loot when a Boss is detected
- [MasterTradeSkills](https://github.com/refaim/MasterTradeSkills) - Adds trade skill information to tooltips of ingredients [[Img1](https://raw.githubusercontent.com/refaim/MasterTradeSkills/3c7882ea5f416b029138dc1d6468bfdd87b8378c/screenshot1.png)] [[Img2](https://raw.githubusercontent.com/refaim/MasterTradeSkills/3c7882ea5f416b029138dc1d6468bfdd87b8378c/screenshot2.png)] [[Img3](https://raw.githubusercontent.com/refaim/MasterTradeSkills/3c7882ea5f416b029138dc1d6468bfdd87b8378c/screenshot3.png)] [<s><nowiki>[2](https://github.com/ImmortalSom/MasterTradeSkills)</nowiki></s>]
- [MasterLute](https://github.com/yutsuku/MasterLute) - Sends raid chat message with some predefined variables by user
- [MB-CA-icons](https://github.com/asdaaf/MB-CA-icons) - Addon to track when Mongoose Bite & Counterattack is usable
- [McgUI](https://github.com/McgGithub/McgUI) - Melee user interface (1920x1080) [[Img1](https://user-images.githubusercontent.com/26133646/34464425-9ae5dfe4-ee7e-11e7-960d-c26f32d846d7.jpg)]
- [MCP-TW](https://github.com/FSuhas/MCP-TW) - Allows you to enable/disable addons while logged in the game.
- [MeleeStats](https://github.com/jejkas/MeleeStats) - addon to see your melee stats (must also install **BonusScanner**)
- [Mendeleev](https://github.com/laytya/Mendeleev) - adds information to item tooltips, by which profession it is used etc
- [MessageBox](https://github.com/tilare/MessageBox) - Modern messenger-style addon to handle all your whispers in one place. Similar to WIM.
- [MetaHunt](https://github.com/DuvelCorp/MetaHunt) - Unified addon suite for huntards with an arsenal of Hunter's utilities.
- [Metamap](https://github.com/laytya/Metamap-vanilla) - adds features to the world map [[Img1](https://cloud.githubusercontent.com/assets/15636669/21586585/bf145ba2-d0e3-11e6-8e33-c42026563f16.jpg)]
- [Meeting](https://github.com/phyx1u5/Meeting) - scans the /World chat channel for group adds and lists them in a convenient manner
- [MijksRaidAssist](https://github.com/mijkrofl/MijksRaidAssist) - Checks for Flask, GGSP/GGNP/GGFP/GGAP/GGFRP, Mageblood and Mongoose potions [<nowiki>[Img1](https://i.imgur.com/z8jE7uX.png)</nowiki>] [<nowiki>[Img2](https://i.imgur.com/NdDoioU.png)</nowiki>]
- [MikScrollingBattleText (MSBT)](MikScrollingBattleText) - an alternative for Blizzard's Floating Combat Text and Damage output
- [MinimapButtonBag](MinimapButtonBag) - cleans up your Minimap and relocates the buttons in a menu bar
- [MinimapButtonFrame](https://github.com/laytya/MinimapButtonFrame-vanilla) - gathers up all of your minimap addon buttons and puts them into a movable frame. 
If installing via the launcher use - [MinimapButtonFrame](https://github.com/McPewPew/MinimapButtonFrame), [MinimapButtonFrameFu](https://github.com/McPewPew/MinimapButtonFrameFu)
- [MiniMage_TWOW](https://github.com/totalllyswede/MiniMage_TWOW.git) - Mage portal/teleport buttons on mini-map. Updated for TurtleWoW [<nowiki>[Img1](https://i.postimg.cc/L8BL8zSS/ss1.png)</nowiki>]
- [MissingCrafts](https://github.com/refaim/MissingCrafts) - Shows the missing crafts for your crafting professions and how to obtain them. Contains all Turtle WoW recipes including Jewelcrafting. [<nowiki>[Img1](https://i.imgur.com/kOnUMJg.png)</nowiki>] [<nowiki>[Img2](https://i.imgur.com/WwW5k4S.png)</nowiki>] [<nowiki>[Img3](https://i.imgur.com/ES18yju.png)</nowiki>]
- [MissingTradeSkillsList](https://github.com/refaim/MissingTradeSkillsList/) - Shows the missing recipes/skills for a tradeskill and where to get them. Classic 1.13 version, backported for 1.12.1 and updated for Turtle WoW, contains many Turtle WoW recipes. Does not contain Jewelcrafting. Requires [TradeSkillsData](https://github.com/refaim/TradeSkillsData) and [TradeSkillsData-turtle](https://github.com/refaim/TradeSkillsData-turtle) [Img](https://github.com/refaim/MissingTradeSkillsList/blob/master/README.md)(https://github.com/refaim/MissingTradeSkillsList/blob/master/README.md Img).
- [MobHealth](https://github.com/kc8pnd/MobHealth) - displays the current and maximum health of your target on top of the target frame [[2](https://github.com/FrostShock/MobHealth)]
- [MobHealth3](https://github.com/Paparogue/MobHealth3-Kronos3-Edition) - Shows the exact NPC Health [[Img1](https://camo.githubusercontent.com/e84d0bb4f6780d803577176735ed3aae78ea5f18/68747470733a2f2f692e696d6775722e636f6d2f327856717369552e706e67)]
- [MobInfo2Turtle](https://github.com/robs898/MobInfo2Turtle) - provides you with useful additional information about opponents/monsters. Tracks drop rates off mobs.
- [MobResist](https://github.com/0ldi/MobResist) - Show the current armor and resistance of the mob that you are targeting
- [MobResistAndDmg](https://github.com/leenux/MobResistAndDmg) - Mobs resist, damage and speed for Turtle-WoW, update from MobResist.
- [MobStats](https://github.com/refaim/MobStats) - Displays mob stats (damage, attack speed, dps, armor, DR, resists etc) in a human-friendly form in the game tooltip. [Img1](https://github.com/refaim/MobStats/blob/b09cb8ff9d7ff78bfa0d0f7e4550feb1b36995ce/wendigo.png?raw=true)(https://github.com/refaim/MobStats/blob/b09cb8ff9d7ff78bfa0d0f7e4550feb1b36995ce/wendigo.png?raw=true Img1) [Img2](https://github.com/refaim/MobStats/blob/b09cb8ff9d7ff78bfa0d0f7e4550feb1b36995ce/boar.png?raw=true)(https://github.com/refaim/MobStats/blob/b09cb8ff9d7ff78bfa0d0f7e4550feb1b36995ce/boar.png?raw=true Img2)
- [MobsToLevel](https://github.com/idontbyte/MobsToLevel) - adds a small window that tells you how many more mobs you need to level up! [[Img1](https://user-images.githubusercontent.com/26133646/39395707-1bae3ef4-4ae2-11e8-98f6-00c11b572511.png)]
- [Modguide](https://github.com/obble/modguide) - puts VanillaGuide into a chat window
- [ModernFocusFrame](https://github.com/Abstr4ctz/ModernFocusFrame) - Focus frame addon with working castbar and ToT.
- [ModernSpellAlert](https://github.com/Abstr4ctz/ModernSpellAlert) - A powerful, lightweight, and highly customizable addon for tracking spell casts and procs in real time. [<nowiki>[Img1](https://i.imgur.com/QE2UU8N.png)</nowiki>]
- [ModernSpellBook](https://github.com/vegeta1k95/ModernSpellBook) - Changes the spellbook to a more modern look
- [ModifiedPowerAuras (MPowA)](https://github.com/MarcelineVQ/ModifiedPowerAuras) - Lets you customize graphics to remind you do do certain things, based on buff and debuff tracking. The grandfather of the vastly more complex WeakAuras from later WoW versions. [[Img1](https://camo.githubusercontent.com/79a18879d409a230f9006411181294452ccbfcaa/687474703a2f2f692e696d6775722e636f6d2f53473242306a572e6a7067)]
- [Modui](https://github.com/zirtox1992/modui) - Complete vanilla UI (Clean but modern!)
- [ModUICombatTextStandalone](https://github.com/dogmax/ModUICombatTextStandalone)  - The scrolling combat text from ModUI without the whole interface.
- [Modui-FocusFrame](https://github.com/gashole/modui-FocusFrame) - Adds modui style changes to [FocusFrame](https://github.com/wardz/FocusFrame) [[Img1](https://camo.githubusercontent.com/0b4cec0e92fbd6c09601828906499ccead0f64b6/687474703a2f2f692e696d6775722e636f6d2f5553736d3965462e706e67)]
- [Modui-TallHealthBar](https://github.com/gashole/modui-TallHealthBar) - Adds taller player and target health bars to modui [[Img1](https://camo.githubusercontent.com/56a01fa32af47836d67eb00a5d43caf34e500e97/687474703a2f2f692e696d6775722e636f6d2f356267714a6c652e706e67)]
- [MonkeySpeed](https://github.com/TrangOul/MonkeySpeed) - Adds a simple movable speedometer displaying speed as a percentage of run speed.
- [MoPGearTooltips](https://github.com/Zebouski/MoPGearTooltips/tree/masterturtle) - Backports the clean gear tooltip text of MoP, for a consistent and far more readable experience.
- [MorunoRankEnhanced](https://github.com/jrc13245/MorunoRankEnhanced) - addon for estimating PVP-Standings [[Img1](http://i.imgur.com/XfktEXC.jpg)]
- [MouseHighlightCircle](https://github.com/goamania/MouseHighlightCircle) - Adds a white circle around the mouse cursor for better visibility.
- [MouseLookLock](https://github.com/rfelleto/Mlooklock) - MouseLookLock sets up a simple perma-mouselook. 
- [Mouseover](https://github.com/shirsig/mouseover) - Enables mouseover actions on unit frames
- [MouseOverSounds](https://github.com/ftkun/MouseOverSounds) - Plays a warning sound when you mouseover a rare, elite or dangerous mob.
- [MouseOverSounds_PvP](https://github.com//mikefirefly/MouseOverSounds_PvP) - Plays a warning sound when you mouseover a unit that is PvP enabled.
- [MoveAnything](https://github.com/JembaWoW/MoveAnything) - Lets you move, scale, and hide...well...anything at all!<
- [MovementTracker](https://github.com/tilare/MovementTracker) - Tracks time and distance spent running on foot and while mounted.
- [MRE](https://github.com/shirsig/MRE) - is a simple mod that shows the number of rage / energy / mana [[Img1](https://user-images.githubusercontent.com/26133646/39261846-007d20a8-48be-11e8-8a88-9c1f23ca2d32.png)]
- [MrPlow](https://github.com/McPewPew/MrPlow) - Bag sorting addon with various options
- [Mule](https://github.com/cubenicke/Mule) - help moving consumables back and forth between characters [[Img1](https://raw.githubusercontent.com/cubenicke/Mule/master/icons/donkey-icon.png)]
- [MuteCities](https://github.com/KameleonUK/MuteCities) - Mutes the music while in Orgrimmar and Stormwind City

[↑ Go to top of page ↑](Addons#Full Addons List)

### N
- [_Nameplates](_Nameplates) - sorts nameplates into friendly and hostile columns [[Img1](http://i.imgur.com/BYSWogN.jpg)]
- [NameChangeScript](https://github.com/zirtox1992/NameChangeScript) - Change your name in whatever you want, will only be visible to you not to other players.
- [Nauticus](https://github.com/Road-block/Nauticus) - transportation tracker [[Fu](https://github.com/Road-block/FuBar_NauticusFu)]
- [NewLevelFrame](https://github.com/alchem1ster/Vanilla-NewLevelFrame) - shows a congratulations frame when a new level is reached [<nowiki>[gif](https://s12.gifyu.com/images/S5Azk.gif)</nowiki>]
- [NBR](https://github.com/DuduSandsten/NBR) - (NirkBuffRemover) automatically remove the least useful buff when you get close to the buff cap [[Img1](https://github.com/DuduSandsten/NBR/raw/master/screenshot.png)]
- [Necrosis](https://github.com/Nedlinin/necrosis-twow.git) - is a tool designed to help warlock players manage various aspects of their gameplay. [<nowiki>[2](https://github.com/pylebecq/necrosis-twow)</nowiki>]
- [NerfedButtons4Wow](https://github.com/GarethFromWales/NerfedButtons4Wow) - Priority based conditional sequencer for Vanilla WoW
- [Niagara](https://github.com/laytya/Niagara) - makes a list of all your Ace2 Addons that use AceConsole using Waterfall Lib so you have a GUI for config [[Img1](http://i.imgur.com/E50w3iw.jpg)]
- [Nitro](https://gitlab.com/woblight/nitro/-/tree/vanilla) - Displays movement speed meter
- [NoMoreMoo](https://github.com/ahungry/NoMoreMoo) - Get rid of annoying moo and goldspam
- [NosCursor](https://github.com/Beardedrasta/NosCursor) - Advanced but also lightweight cursor tracker
- [NotesUNeed](https://github.com/Scoboose/NotesUNeed-Turtle) - Notes Manager that allows you to track Friends, Ignores, Guild members, Quests, Items and generic notes [https://github.com/rnorden/NotesUNeed[2]] [[Img1](https://user-images.githubusercontent.com/26133646/39304137-f8a20fba-4958-11e8-9494-4e5d390e4f6b.png)]
- [NotChatLootBidder](https://github.com/trumpetx/NotChatLootBidder) - A raider companion addon to [ChatLootBidder](https://github.com/trumpetx/ChatLootBidder) and [RollFor](RollFor) to assist in the bidding and rolling process by popping up loot interface for raiders.
- [NotGrid](NotGrid) - It's pretty much grid and it works
- [NoToggle](https://github.com/shirsig/notoggle) - Disables toggling behavior of Attack, Auto Shot and Shoot
- [NugComboBar](https://github.com/rgd87/NugComboBar/tree/vanilla) - Combo Points tracker
- [NugEnergy](https://github.com/rgd87/NugEnergy/tree/vanilla) - Energy/Rage tracker

[↑ Go to top of page ↑](Addons#Full Addons List)

### O
- [oCB](https://github.com/laytya/Vanilla_oCB) - (Otravi Casting Bar) Quartz Like castbar [<nowiki>[2](https://github.com/martinjlowm/Vanilla_oCB)</nowiki>] [<nowiki>[3](https://github.com/Road-block/Vanilla_oCB)</nowiki>] 
- [<nowiki>oCB  [SuperWoW](https://github.com/Shellyoung/oCB-SuperWoW)</nowiki>] - (Otravi Casting Bar) Quartz Like castbar with SuperWoW support [<nowiki>[Image](https://private-user-images.githubusercontent.com/40469927/438325003-34d65f41-b102-4690-aa7a-68ca45f1b8cd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA5MjI5MDIsIm5iZiI6MTc1MDkyMjYwMiwicGF0aCI6Ii80MDQ2OTkyNy80MzgzMjUwMDMtMzRkNjVmNDEtYjEwMi00NjkwLWFhN2EtNjhjYTQ1ZjFiOGNkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjI2VDA3MjMyMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFiNDI1NjIwZmQwN2QxNmM2MjhhMjgyMmY2NGU2MDkxNTkxZWQ2N2JlY2Q5NmFlZmQzMjQ1ODJjZGFlYTc1ZDMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Rhg5T2dc1r_ygbwYijLFKAhx7zaCixTYBO54qsc3AJU)</nowiki>]. 
- [OctoPawn](https://github.com/iGreed1993/OctoPawn) - A lightweight item scoring and comparison addon 
- [OG-RaidHelper](https://github.com/zanthor/OG-RaidHelper) - Raid addon for organizing, roles, trade, and validation 
- [OmniCC](https://github.com/Otari98/OmniCC) - A universal cooldown count, based on Gello's spec [[Img1](https://user-images.githubusercontent.com/13628128/58881262-7d094080-86e2-11e9-8ef2-be1f22caf5f5.jpg)]
- [OneButtonHunter](https://github.com/Geigerkind/OneButtonHunter) - A very simple addon, executing the rotation of the hunter
- [OnlyASCII](https://github.com/ericschn/OnlyASCII) - removes all chat messages containing non-standard ascii characters
- [OoI](https://github.com/jejkas/OoI) - addon to help with Oil of Immolation
- [OpenClam](https://github.com/goldenpipes/OpenClam) - Search clam shells in inventory and open them after looting
- [oRA2](oRA2) - a lightweight alternative for CTRaidAssist [[Img1](https://cloud.githubusercontent.com/assets/15636669/21586607/f9f4cee6-d0e3-11e6-8ac9-8bc9c8313034.jpg)]
- [Outfitter](https://github.com/pepopo978/Outfitter) - is an equipment management addon which gives you fast access to multiple outfits. [Alt1](https://github.com/MarcelineVQ/Outfitter)(https://github.com/MarcelineVQ/Outfitter Alt1) [[Fu](https://github.com/Voidmenull/FuBar_OutfitterFu)] [[Img1](https://i.imgur.com/iAixuvGl.png)]

[↑ Go to top of page ↑](Addons#Full Addons List)

### P
- [PageTurner](https://github.com/ZythDr/PageTurner) - Scroll through pages at vendors, mailbox, and spellbook
- [PallyPower-Turtle](PallyPower) - easy to use interface that allows you set your own blessings and automatically check for missing buffs
- [Paladin Salva Remover](https://github.com/maxcodk/PaladinSalvaRemover) - removes salva if you have RF threat buff, useful for tanks
- [Paladin Libram Swap](https://github.com/maxcodk/PaladinLibramSwap) - helps to swap librams without breaking gcd
- [Panda](https://github.com/tubtubs/panda) - Makes quick work of disenchanting (/Panda).
- [Parchment](https://github.com/ericraio/vanilla-wow-addons/tree/238c6d633d5a5b8a0cc4ee7a8cbb548ea80da081/p/Parchment) - A way to write down simple notes of things you want to remember
- [PartyPlus](https://github.com/cregham/PartyPlus) - Easy tool for party invites
- [PerfectShot](https://github.com/wbb1977/PerfectShot) - Hides UI / name plates and then takes a series of screenshots
- [PetXPBar](https://github.com/refaim/PetXPBar) - Pet experience bar for the default Blizzard UI [<nowiki>[Img1](https://github.com/refaim/PetXPBar/raw/master/img.jpg)</nowiki>]
- [pfDebug](https://github.com/shagu/pfDebug) - A little tool to monitor the memory usage, peaks and garbage collection [Alt](https://github.com/me0wg4ming/pfDebug)(https://github.com/me0wg4ming/pfDebug Alt) [[Img1](https://github.com/shagu/pfDebug/raw/master/analyzer.jpg)]
- [pfDesktop](https://github.com/shagu/pfdesktop) - An In Game-Desktop Environment [[Img1](https://user-images.githubusercontent.com/26133646/47615473-87f65580-daaf-11e8-91b0-797bf091b789.png)]
- [pfExtend](https://github.com/Cliencer/pfExtend) - Display all monster drops, query the task chain. This module is based on pfQuest (/pfex).
- [pfQuest](https://github.com/The-Kludge-Bureau/pfQuest) - A lightweight quest helper and ingame database [Alt](https://github.com/The-Kludge-Bureau/pfQuest)(https://github.com/The-Kludge-Bureau/pfQuest Alt) [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/pfQuest/map-spawnpoints.png)]
- [pfQuest-icons](https://github.com/shagu/pfQuest-icons) - An extension for pfQuest to use Gatherer icons on resource nodes [Img1](https://github.com/shagu/pfQuest-icons/raw/master/screenshot.png)(https://github.com/shagu/pfQuest-icons/raw/master/screenshot.png Img1)
- [pfQuest-turtle](https://github.com/The-Kludge-Bureau/pfQuest-turtle) - A TurtleWoW DB extension for pfQuest. You need base pfQuest for this to work!
- [pfStudio](https://github.com/shagu/pfStudio) - an in game-IDE [[Vid1](https://www.youtube.com/watch?v=Dmj9dZzeHHM)]
- [pfUI](https://github.com/me0wg4ming/pfUI) - full replacement for the original Wow interface in a single Addon [[Vid1](https://www.youtube.com/watch?v=asbHq5rzK1E)]
  - [pfUI-turtle](https://github.com/doorknob6/pfUI-turtle) - A small extension that fixes some issues that arise from Turtle's custom UI, class and item changes [<nowiki>[img1](https://github.com/doorknob6/pfUI-turtle/raw/images/inspect_character_LFT.png?raw=true)</nowiki>]
- [pfUI-addonskinner](https://github.com/jrc13245/pfUI-addonskinner) - External module for pfUI that provides you with pfUI-themed skins for other addons [[Img1](https://github.com/mr-rosh/pfUI-addonskinner/raw/master/settings.png)]
- [pfUI-autoinvite](https://github.com/BahamutxD/pfUI-autoinvite) - External module for pfUI that allows you to set auto invites through whispers [[Img1](https://raw.githubusercontent.com/BahamutxD/pfUI-autoinvite/main/settings.png)]
- [pfUI-bettertotems](https://github.com/Bombg/pfUI-bettertotems) - External module for pfUI providing some extra features to totems [[Img1](https://camo.githubusercontent.com/bdb43e37c58148fa3182e7b8a440af93edaca1b50d131fab77e0d61620728f37/68747470733a2f2f696d6775722e636f6d2f533251364135732e676966)]
- [pfUI-chatscrollbutton](https://github.com/vakos1/pfUI-chatscrollbutton) - A lightweight pfUI-styled scroll-to-bottom button for chat windows.
- [pfUI-combatdock](https://github.com/bhhandley/pfUI-combatdock) - Automatically swap the loot chat window to the docked meters when in combat and out of combat.
- [pfUI-CustomMedia](https://github.com/mr-rosh/pfUI-CustomMedia) - External module for pfUI providing additional textures for the unit frames and casting bars, background texture for button slots, new fonts, new gryphons. [[Img1](https://i.imgur.com/CuRkjdU.jpeg)]
- [pfUI-eliteoverlay](https://github.com/shagu/pfUI-eliteoverlay) - An extension for pfUI which adds dragon textures to elite, rare and worldbosses. [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/pfUI-eliteoverlay/screenshot.png)]
- [pfUI-font-dyslexic](https://gitlab.com/Road-block/pfUI-font-dyslexic) - A font package for pfUI, providing additional font options from [OpenDyslexic](https://opendyslexic.org/) [[Img1](https://www.dafont.com/img/charmap/o/p/open_dyslexic8.png)]
- [pfUI-fonts](https://github.com/shagu/pfUI-fonts) - A font package for pfUI, providing additional fonts from the google font project. [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/pfUI-fonts/thumbnails.png)]
- [pfUI-lazyres](https://github.com/liiora/pfUI-lazyres) - A lazyres fork, based on pfUIs healcom implementation, without any external libraries.
- [pfUI-LocationPlus](https://github.com/Arthur-Helias/pfUI-LocationPlus) - An external module for pfUI that adds a location panel and more! [<nowiki>[Img1](https://github.com/user-attachments/assets/28fe81d8-d2d1-4f59-af79-3fb4d6be4feb)</nowiki>]
- [pfUI-MoreDatatexts](https://github.com/Arthur-Helias/pfUI-MoreDatatexts) - An external module for pfUI that adds more datatexts for your panels! [<nowiki>[Img1](https://github.com/user-attachments/assets/cece4667-9438-4d36-af92-82e82d59cbaa)</nowiki>]
- [pfUI-RainbowHealthBar](https://github.com/WanLiQiaoXi/pfUI-RainbowHealthBar) - External module for pfUI that adds a dynamic rainbow health bar and enhances 3D portraits [Img1](https://raw.githubusercontent.com/WanLiQiaoXi/Assets/main/WowAddons/pfUI-RainbowHealthBar/124.gif)(https://raw.githubusercontent.com/WanLiQiaoXi/Assets/main/WowAddons/pfUI-RainbowHealthBar/124.gif Img1)
- [pfUI-WeakIcons](https://github.com/jrc13245/pfUI-WeakIcons) - Allows the creation of aura tracking icons, much like MPOWA. [<nowiki>[Img1](https://i.imgur.com/2uo6Rs7.jpeg)</nowiki>]
- [PicoPoisons](https://github.com/jsb/PicoPoisons) - displays remaining poison charges on the respective buff symbols [[Img1](https://camo.githubusercontent.com/4d2a05c89922a1acaf9282b5fa5419465cee4178/687474703a2f2f692e696d6775722e636f6d2f58436a357245302e706e67)]
- [PingoMatic](https://github.com/Road-block/PingoMatic) - Minimap Ping Improvements [[Img1](https://user-images.githubusercontent.com/109839/38913706-dd0b48c2-42e4-11e8-9ffd-9efa17db6b92.png)]
- [Pitty](https://github.com/Sentilix/pitty) - will attempt to identify people healing using automated healing addons, such as QuickHeal
- [PizzaSlices](https://github.com/neimad-mp/PizzaSlices) - Radial action menus for TurtleWoW. A simplified OPie clone. [<nowiki>[Gif1](https://raw.githubusercontent.com/Pizzahawaiii/media/refs/heads/main/PizzaSlices/demo.gif)</nowiki>]
- [PizzaWorldBuffs](https://github.com/acid9000/PizzaWorldBuffs) - Shows tent locations on the map, world buff (head despawn) timers and Darkmoon Faire location [<nowiki>[Img1](https://raw.githubusercontent.com/Pizzahawaiii/PizzaWorldBuffs/main/img/frame.png)</nowiki>] [<nowiki>[Img2](https://raw.githubusercontent.com/Pizzahawaiii/PizzaWorldBuffs/main/img/tent.png)</nowiki>]
- [PlayerStates](https://github.com/Road-block/PlayerStates) - Macro Helper addon
- [PoisonCharges](https://github.com/StafordDev/PoisonCharges) - show you remaining charges and remaining time of your poisons [[Img1](https://user-images.githubusercontent.com/26133646/39842163-b84dcc0a-53e5-11e8-9f7a-45361572e682.png)]
- [PorkNotes](https://github.com/porkfriedlumpia/PorkNotes/) - Write notes about other players, and display them in tooltips and chat. Built from MrToffee/CaramelNotes. [<nowiki>[Img1](https://raw.githubusercontent.com/porkfriedlumpia/PorkNotes/refs/heads/main/Images/NotesWindow.png?token=GHSAT0AAAAAADX2LJ423ZHLRHX2KCRFD7T42NWKW5Q)</nowiki>]
- [Possessions](https://github.com/refaim/Possessions) - Inventory List Addon with Alt support
- [Postal Returned](Postal-Returned) - Improved version of Postal that Includes better mail return functionality, logging of attachments and money
- [PowerAuras](PowerAuras) - This Mod was created to have a better visibility when you gain buffs, debuffs and many more
- [PPBuddy](https://github.com/elboaf/PPBuddy) - Monitor, request, and ban, pallypower assigned pally buffs.
- [Prat](https://github.com/Qxcl/Prat-turtle) - Chat customization addon [[Fu](https://github.com/fulzamoth/Prat_FuBar2_Vanilla)] [[Img1](https://camo.githubusercontent.com/3d51b31cc88ecb6be32007d0ecac675bf12bbeef/68747470733a2f2f692e696d6775722e636f6d2f4235354d4343682e6a7067)] [[Img2](https://camo.githubusercontent.com/774d9425ae2696c050224332881c21f801c1f884/68747470733a2f2f692e696d6775722e636f6d2f783779613258422e6a7067)] [[2](https://github.com/laytya/Prat-vanilla)] [[3](https://github.com/UndercityAddons-Vanilla/Prat-V)]
- [PriestBinds](https://github.com/Numielle/PriestBinds) - Provides keybinds for priest abilities
- [ProcDoc](https://github.com/thezephyrsong/ProcDoc) - Displays flashy, pulsing alerts whenever you gain specific "instant cast" or "free cast" procs (e.g. Shadow Trance, Clearcasting).
- [Profesjonell](https://github.com/NiclasEriksen/Profesjonell) - Automatically gathers known recipes from guild members and synchronizes them, allowing anyone in the guild to easily find who can craft specific items.
- [Profession Levels](https://github.com/gregdeichler/ProfessionLevels.git) - A profession tracking addon frame for Turtle WoW.
- [Profession query](https://github.com/shirsig/profession_query) - useful addon for crafters selling their services!
- [Pummeler](https://github.com/Cernie/Pummeler) - One button for equipping and using Manual Crowd Pummeler(s)
- [Punschrulle](https://github.com/Attero/Punschrulle) - Highly customizable castbar [[Img1](https://user-images.githubusercontent.com/26133646/38198474-47ec1a0e-368d-11e8-971b-500298acde6f.png)]
- [Puppeteer](https://github.com/OldManAlpha/Puppeteer) - Unit frames addon for healers or any class/spec, an alternative to modern WoW's VuhDo, Cell, or Healbot
- [PVPToggleTurtle](https://github.com/Fragglechen/PVPToggleTurtleWOW.git) - Small Frame with Button to show current PVP state and toggle it on/off with a click. Also show a timer for deactivation
- [Pvpwarn](https://github.com/RagedUnicorn/wow-pvpwarn) - Addon that warns players visually and acoustically about pvp events [[Img1](https://github.com/RagedUnicorn/wow-pvpwarn/raw/master/Docs/pvpw_doc_enemy_avoid.png)]
- [pwscounter](https://gitlab.com/woblight/pwscounter) - allows to track how many Power Word: Shields are being cast in a raid fight.

[↑ Go to top of page ↑](Addons#Full Addons List)

### Q
- [QuestAnnouncer](https://github.com/ahhh-reptar/QuestAnnouncer) - Sends a party message as you advance in a quest.
- [QuestFrameFixer](https://github.com/fusionpit/QuestFrameFixer/tree/1.12.1) - Some NPCs that offer multiple quests will show dots instead of ! and ? symbols in their dialogue. This addon fixes this.
- [QuestHaste](https://gitlab.com/woblight/QuestHaste/-/tree/vanilla) - Faster accepting and turning in of quests.
- [QuestHistory](https://github.com/GrenderG/QuestHistory) - An in-game history of quests accepted, completed, and abandoned.
- [QuestItem](https://github.com/wow-vanilla-addons/QuestItem) - stores an in-game database over quest items and tell you which quest they belong to
- [QuestProgressShare](https://github.com/graved/QuestProgressShare) - Shares live quest updates with your party, shows group progress in tooltips, and supports pfQuest links. Bug fixes and improved formatting.
- [QuestRepeat](https://github.com/MarcelineVQ/QuestRepeat) - Repeatedly hand in quests and autopick the reward
- [QuestShell](https://github.com/Valiusha90/QuestShell) - Leveling/quest helper with auto-accept/turn-in and progress tracker
- [QuestSoundBits](https://github.com/Road-block/QuestSoundBits) - is a quest progress sound alert addon
- [QuestTracker](https://github.com/gabcinder2004/QuestTracker) - tracks quest completion progress per zone
- [QuestTranslator](https://github.com/Daribon/QuestTranslator) - Italian Quests Translator [[Img1](https://camo.githubusercontent.com/0da3f06aee5946b1853610c208a4f8d853005901/68747470733a2f2f692e696d6775722e636f6d2f6a6964776f39542e706e67)]
- [QuickBind](https://github.com/DennisWG/QuickBind) - Mouseover keybinds for action bars. 
- [Quickcall](Quickcall) - Battleground PvP Addon for Arathi Basin. 
- [QuickChat](https://github.com/0ldi/QuickChat) - allows you to assign Hotkeys to all your channels
- [QuickHeal Turtle](QuickHeal) - One-button heal automation and assistance [[Orig](https://github.com/Sulpitz/QuickHeal)]
- [Quiver](https://github.com/SabineWren/Quiver) - Hunter auto shot timer, castbar, and more. Read the installation instructions.
- [Quartz3](https://github.com/laytya/Quartz) - Quartz is a modular approach to a casting bar addon. Ported to vanilla.

[↑ Go to top of page ↑](Addons#Full Addons List)

### R
- [RABuffs](https://github.com/pepopo978/Rabuffs) - Monitors a raid / party group, displaying various statistics [[Img1](https://user-images.githubusercontent.com/26133646/39288519-9be1fcde-4928-11e8-99a2-1fcba60d7c28.png)]
- [RaidCalendar](https://github.com/sica42/RaidCalendar) - RaidCalendar lets you view and sign up to raids in game on https://raid-helper.dev/ and register soft reserves on https://raidres.fly.dev.
- [RaidMemberExport](https://github.com/jlabranche/RaidMemberExport) - Stores a variable of your raid members for copy pasting in your SavedVariables folder
- [RaidRollBuddy](https://github.com/Goose404/RaidRollBuddy) - Shows a window with the announced loot with buttons to roll for and a list of all rolls
- [RageTracker](https://github.com/Road-block/RageTracker) - Shows an resizable and movable rage bar.
- [RaidOrganizer](https://github.com/TylkaW/RaidOrganizer) - User-friendly interface for raid role assignment
- [RaidRollHelper](https://github.com/EinBaum/RaidRollHelper) - Fair item distribution with /roll in raids
- [RaidSummon](https://github.com/Linae-Kronos/RaidSummon) - small RaidSummon frame [[Img1](https://user-images.githubusercontent.com/26133646/39392928-15ee8de8-4abf-11e8-982a-fa6ff7f621e6.png)] 
- [RaidSummonPlus](https://github.com/akzkak/RaidSummonPlus) - improved RaidSummon with Soulstone tracking [[Img1](https://github.com/user-attachments/assets/2fb51929-e05b-44ac-9e40-ab2d49704c68)]
- [rais_AutoShot](https://github.com/Eryzil-GitHub/rais_AutoShot) - Lightweight Auto-Shot Timer for Hunters
- [RallyHelper](https://github.com/Weirdpuppy94/RallyHelper) - Turtle WoW World Buff Tracker (Ony/Nef/ZG/Rend/DMF) with verified Timestamps, clean UI, and no Server‑time manipulation.
- [RangeColor](https://github.com/0ldi/RangeColor) - Change the icon color when out of range, no mana or not usable
- [Rank14losSA](https://github.com/Fiskehatt/Rank14losSA) - verbally tells you when somebody is using a Cooldown, or an important ability [[Img1](https://cloud.githubusercontent.com/assets/26133646/25946797/ed5f371a-364c-11e7-8f65-fa68722be0cd.jpg)]
- [RAT](https://github.com/Atreyyo/RAT) - (Raid Ability Tracker) tracks certain class ability cooldowns (in raid) and puts them in an easy to view list
- [RDX](https://github.com/coryo/RDX) (Raid Data Exchange) a tool for acquiring, filtering, and visualizing information about your raid team [[Img1](https://cloud.githubusercontent.com/assets/678207/23583298/8bb52754-010e-11e7-9325-aabfe090c034.png)]
- [ReagentCounter](https://github.com/zetone/reagentCounter) - Displays reagent count on the spell's action button
- [ReagentData](https://github.com/refaim/ReagentData) - A comprehensive set of all reagents and components used by tradeskills. No Preview as this is a library addon.
  - Superseded by LibCrafts, which is included in future addons that require it as a library.

- [Recap](https://github.com/dreaming-possum/Recap) - Track and summarize the damage dealt and received by every participant in a fight around the user.
- [Recents](https://github.com/luskanek/Recents) - highlights recently looted items in the inventory
- [RecipeRadar](https://github.com/laytya/RecipeRadar-vanilla) - assists players in finding recipes
- [ReckCounter](https://github.com/satan666/ReckCounter-Fix) - a small frame showing stored strikes from the Paladin Reckoning talent
- [RenewSpam](https://github.com/Zerf/RenewSpam) - autocasts renew(rank 1) on any raid member that doesn't have renew
- [ResourceCountActionButtons](https://github.com/jsb/ResourceCountActionButtons) - Displays how often you can cast a spell before you run out of resources on the action buttons
- [RestBar](https://github.com/Steelbash/RestBar) - Displays a rest bar [Img1](https://raw.githubusercontent.com/Steelbash/RestBar/main/preview1.png)(https://raw.githubusercontent.com/Steelbash/RestBar/main/preview1.png Img1) [Img2](https://raw.githubusercontent.com/Steelbash/RestBar/main/preview2.png)(https://raw.githubusercontent.com/Steelbash/RestBar/main/preview2.png Img2)
- [Rested](https://github.com/hazlema/Rested) - Rested XP Tracker for Turtle Wow
- [ResurrectionAnnounce](https://github.com/stokbaek/ResurrectionAnnounce) - Plugin That Adds Resurrection Announce to Chat
- [Retarget](https://github.com/shirsig/retarget) - Retargets Hunters after Feign Death and Rogues after Stealth
- [RetherzTargetTracker](https://github.com/Retherz/RetherzTargetTracker) - Raid symbol targeting with debuff tracking.
- [RezzTimer](https://github.com/EinBaum/RezzTimer) - Shows resurrection timers of other party members who have this addon [[Img1](https://github.com/EinBaum/RezzTimer/raw/master/preview.jpg?raw=true)]
- [RightClickModifier](https://github.com/MarcelineVQ/RightClickModifier) - Allows you to modify the behavior of right clicking in game
- [RingMenu](https://github.com/jsb/RingMenu/tree/vanilla) - a circular ActionBar that can be summoned with a click
- [Rinse](https://github.com/Otari98/Rinse) - This addon is very similar to Decursive, it helps with removing debuffs from friendly units
- [RipMap](https://github.com/DaniilSokolyuk/RipMap) - Displays hardcore deaths heatmap on maps with danger indicator
- [ROAR-Guild](https://github.com/Morkahja/RoarGuild) - Battle emotes on action slots with optional global trigger
- [RogueFocus](https://github.com/Road-block/RogueFocus) - Compact Combo/Energy/Tick display [[Img1](https://user-images.githubusercontent.com/26133646/39841013-af09f24e-53e1-11e8-8c66-902876866a26.png)]
- [RoguePack](https://github.com/Monteo/RoguePack) - First necessary add-ons to the Rogue
- [RogueRota](https://github.com/Geigerkind/RogueRota) - A very simple addon, executing the rotation of the rogue
- [RoguePoker](https://github.com/Pokerbhind/RoguePoker) - An addon for rogues that allow you to customize your buff rotation and then trigger it all using a single button. Also creates a single button for all different types of stuns and is also configurable.
- [RogueTick](https://github.com/pseja/RogueTick) - Rogue energy tick for the player frame. [<nowiki>[Vid1](https://i.imgur.com/2i5UKWP.gif)</nowiki>]
- [RogueTicker](https://github.com/akzkak/RogueTicker) - Energy, tick and combo point tracker for rogues with support for latest 1.18.0 Turtle changes. [<nowiki>[Img1](https://private-user-images.githubusercontent.com/29808955/488798669-5f650861-3ed4-4595-b08e-7bbc5abf8fad.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTc4NjU4MDAsIm5iZiI6MTc1Nzg2NTUwMCwicGF0aCI6Ii8yOTgwODk1NS80ODg3OTg2NjktNWY2NTA4NjEtM2VkNC00NTk1LWIwOGUtN2JiYzVhYmY4ZmFkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA5MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwOTE0VDE1NTgyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRhY2I3YmVjYjJhYjM1NjEyM2MwMTI3MDk0NDFiNDc4YWM3OTg3MTcxNTAyMWJhMWE0ZTc1YTYxMWM5MjlkNDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.fylC35O42T1D7DRfZNrQmZPFEha4kMA8kHYI9anlX_0)</nowiki>]
- [Roid-Macros](https://github.com/MarcelineVQ/Roid-Macros) - Allows you to use a small subset of the macro conditions from TBC (and later Retail and Classic).
- [RoleplayingHelper](https://github.com/XalZul/RoleplayingHelper-1.12) - Roleplaying addon that allows your character to speak and react via emotes to various events
- [TurtleRoleplayingHelper](https://github.com/vaaslite/TurtleRoleplayingHelper) - Enhanced version of the original RPHelper addon with new flavor text and TWoW's custom races (High Elf and Goblin).
- [RollFor](https://github.com/obszczymucha/roll-for-vanilla) - An automated item roller with soft ressing support via raidres.fly.dev.
- [RosterFilter](https://github.com/coryo/RosterFilter/tree/ff6fbef57dbf5da428a87f5e7f1b57314a859c1d) - a guild frame based on aux [[Img1](https://user-images.githubusercontent.com/678207/35249442-033ff192-ffa0-11e7-81e1-8cbca0b08d71.png)]
- [RoundRobinhood](https://github.com/ZenSociety/RoundRobinhood) - An addon for managing loot distribution.
- [RWSync](https://github.com/shirsig/rwsync) - Multi Raid Warning

[↑ Go to top of page ↑](Addons#Full Addons List)

### S
- [SafeShift](https://github.com/Grymskvll/SafeShift) - Safety measure against accidentally unshifting immediately after shapeshifting
- [SafeShift-TWoW](https://github.com/DeterminedPanda/SafeShift-TWoW) - fixes the original 'SafeShift' addon by allowing direct form switching (e.g., cat form to bear form) without needing to shift out first.
- [Salad Cthun](https://github.com/goffauxs/Salad_Cthun) - Shows optimal positioning based on group on C'thun [[Img1](https://camo.githubusercontent.com/c3df2b854ce886fda411634396640946b53d06b2/687474703a2f2f692e696d6775722e636f6d2f38384c695473352e706e67)]
- [Samuel](https://github.com/Terrub/Samuel) - Static swing timer with 1 - 1.5 second Slam marker for warriors [[Img1](https://user-images.githubusercontent.com/26133646/39255142-1b26006c-48ac-11e8-8910-c2629d0745b1.png)]
- [SaySapped](https://github.com/Fiskehatt/SaySapped) - Says "Sapped!" to alert those around you whenever a rogue saps you
- [SaySapped Extended](https://github.com/Fiskehatt/SaySapped_Extended) - Also works for many other CCs
- [Screen Resolution Dropdown Fix](https://github.com/jhinzuo/another.ScreenResolutionDropdownFix) - Prevent errors from the Video Options dialog when there are too many resolutions, which is common when running in a VM like Parallels (fixes the UIDROPDOWNMENU_OPEN_MENU Lua error)
- [SealTracker](https://github.com/cryptokn1ght-dev/SealTracker) - Lightweight Paladin seal tracker with a countdown timer. Features a resizable, draggable frame and a right-click options menu. [[Img1](https://github.com/cryptokn1ght-dev/SealTracker/raw/main/st_preview_.png)]
- [SeeThunGroups](https://github.com/yutsuku/SeeThunGroups) - C`thun group setup helper for raid leaders [[Img1](https://github.com/yutsuku/SeeThunGroups/raw/master/docs/promo.png?raw=true)]
- [Select AddOns](https://github.com/Road-block/Select_AddOns) - addons authored by Road-block (some not) [[Img1](https://user-images.githubusercontent.com/26133646/33953667-0d22d41a-e036-11e7-9c3c-ce0a16b8b169.png)]
- [SelfFound](https://github.com/vortigern11/SelfFound) - Prevents you from trading, using the Auction House and mailing. Basically a Solo Self-Found mode without the Solo part. Can be paired with Turtle's Hardcore mode.
- [SellValue](https://github.com/anzz1/SellValue) - Adds vendor prices to tooltips [[Img1](https://user-images.githubusercontent.com/13628128/58877571-b9846e80-86d9-11e9-905d-5da424049b07.png)]
- [Sentry](https://github.com/shirsig/sentry) - Open pvp enemy frames/alerts [[Img1](http://i.imgur.com/dHrYfdo.png)]
- [SimpleLvl](https://github.com/Beardedrasta/SimpleLvl) - A simple yet complex experience tracker - XToLevel.
- [SimpleBars](https://github.com/Beardedrasta/SimpleBars) - A Simple way to display player HUD statusbars.
- [SimplePowershifts](https://github.com/Beardedrasta/SimplePowershifts) - A Simple way to display druid powershifts.
- [ShaguActions](https://github.com/shagu/ShaguActions) - Automatically saves and restores one actionbar profile for each of the 3 skill trees [<nowiki>[Img1](https://raw.githubusercontent.com/shagu/ShaguActions/master/screenshot.png)</nowiki>]
- [ShaguBam](https://github.com/shagu/ShaguBam) - a BamMod alike Addon [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/ShaguBam/screenshot.jpg)]
- [ShaguBoat](https://github.com/shagu/ShaguBoat) - A despawn timer for Turtle-WoW Fishing Boats.
- [ShaguBoP](https://github.com/shagu/ShaguBoP) - auto accepts BoP loot when alone [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/ShaguBoP/popup.jpg)]
- [ShaguChat](https://github.com/shagu/ShaguChat) - highlight and hide custom chat messages [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/ShaguChat/fullscreen.jpg)]
- [ShaguClock](https://github.com/shagu/ShaguClock) - draws a simple movable clock on the screen [[2](https://github.com/FrostShock/ShaguClock)] [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/ShaguClock/orgrimmar.png)]
- [ShaguColor](https://github.com/shagu/ShaguColor) - allows to write colorful chat messages [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/ShaguColor/merged.png)]
- [ShaguCombat](https://github.com/shagu/ShaguCombat) - displays your combat state via glowing screen edges [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/ShaguCombat/animated.gif)]
- [ShaguCopy](https://github.com/shagu/ShaguCopy) - allows to copy chat messages [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/ShaguCopy/button.png)]
- [ShaguDelgado](https://github.com/shagu/ShaguDelgado) - modifies some elements to be purple [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/ShaguDelgado/screenshot.jpg)]
- [ShaguDPS](https://github.com/shagu/ShaguDPS) - A very small and lightweight damage meter [[Img1](https://github.com/shagu/ShaguDPS/blob/master/screenshot.jpg)] [[Img2](https://github.com/shagu/ShaguDPS/blob/master/screenshot2.jpg)]
- [ShaguError](https://github.com/shagu/ShaguError) - hides error and notification message popups [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/ShaguError/chat.png)]
- [ShaguInventory](https://github.com/shagu/ShaguInventory) - shows account wide item count inside the tooltips [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/ShaguInventory/tooltip.jpg)]. 
- [ShaguJunk](https://github.com/shagu/ShaguJunk) - Automatically delete and vendor specified items
- [ShaguKill](https://github.com/shagu/ShaguKill) - displays the remaining kills till level up [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/ShaguKill/screenshot.jpg)]
- [ShaguMount](https://github.com/shagu/ShaguMount) - automatically unmounts the player when using an action [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/ShaguMount/unmount.jpg)]
- [ShaguNotify](https://github.com/shagu/ShaguNotify) - shows achievement alike notifications for several events [[Vid1](https://www.youtube.com/watch?v=_PXG04rTotw)]
- [ShaguPlates](https://github.com/shagu/ShaguPlates) - modifies and extends the default nameplates [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/ShaguPlates/worldboss.jpg)] [TidyPlates-Edit](https://github.com/AtheneGenesis/ShaguPlates---TidyPlates-Edit)
- [ShaguPlates-extra](https://github.com/Redbu11dev/ShaguPlates-extra) - ShaguPlates, but restyled and with extra stuff [<nowiki>[Img1](https://i.imgur.com/Qjbi7kb.png)</nowiki>]
- [ShaguScore](https://github.com/shagu/ShaguScore) - displays a gearscore alike item rating [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/ShaguScore/character.jpg)]
- [ShaguStance](https://github.com/shagu/ShaguStance) - automatically switches to the required stance [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/ShaguStance/battlestance.jpg)]
- [ShaguTooltips](https://github.com/shagu/ShaguTooltips) - modifies the game tooltips [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/ShaguTooltips/preview.jpg)]
- [ShaguTweaks](https://github.com/shagu/ShaguTweaks) - A small AddOn for those who don't want to use any AddOns at all. [[Img1](https://github.com/shagu/ShaguTweaks/raw/master/screenshots/settings.jpg)]
- [ShaguTweaks-extras](https://github.com/shagu/ShaguTweaks-extras) - extends the capabilities of ShaguTweaks by offering optional modules that can be easily toggled on or off.
- [ShaguTweaks DruidManaBar](https://github.com/gashole/ShaguTweaks-DruidManaBar) - Adds ShaguTweaks style changes to DruidManaBar [<nowiki>[Img1](https://camo.githubusercontent.com/73e4aa56977802431fa0ce18cc1fc29e2e4e4ff376ad65be79e8250ff4010ca7/68747470733a2f2f692e696d6775722e636f6d2f515530796d39722e706e67)</nowiki>]
- [ShaguTweaks Mods](https://github.com/TokensWorth/ShaguTweaks-mods) - Mods for the ShaguTweaks addon
- [ShaguTweaks more mods](https://github.com/CrimsonHollow/ShaguTweaks-more-mods) - Adds additional mods to ShaguTweaks [<nowiki>[Img1](https://user-images.githubusercontent.com/22963563/249768892-e7e907c8-c06d-4fe3-a7f2-b2efeff73518.png)</nowiki>]
- [ShaguValue](https://github.com/shagu/ShaguValue) - display item sell and buy values on tooltips [[Img1](https://raw.githubusercontent.com/shagu/ShaguAddons/master/_img/ShaguValue/bag.png)]
- [ShaguWidget](https://github.com/shagu/ShaguWidget) - Movable Information Widget
- [ShamanFix](https://github.com/WouterBink/ShamanFix) - changes the shaman class colour to blue
- [ShardCap](https://github.com/dogmax/ShardCap) - Automatically deletes soul shards above a certain amount (default 5)
- [ShardCapPlus](https://github.com/akzkak/ShardCapPlus) - Automatically deletes soul shards above a certain amount. Support Turtles stack of shards.
- [ShieldBuddy](https://github.com/tr00dudu/ShieldBuddy) - Tracks absorption shields and their remaining values
- [ShieldLeft](https://github.com/mrrosh/ShieldLeft) - Estimates and shows the charges left on shield
- [ShikaSwap](https://github.com/ShikawaLePaladin/ShikaSwap) - Automatically swaps to the correct libram before casting Paladin spells
- [Shootyepgp](https://github.com/Road-block/shootyepgp) - Guild Helper addon for EPGP loot system
- [ShowChests](https://github.com/zirtox1992/ShowChests) - Show chests locations on login with pfQuest
- [SilverDragon](https://github.com/cdmichaelb/SilverDragon) - tracks rares [[Img1](https://cloud.githubusercontent.com/assets/26133646/25950363/067bd6b4-365b-11e7-8b4e-3372a1ebeab2.jpg)]
- [SimpleActionSets (SAS)](SimpleActionSets) - Save action bars as sets that can be swapped out; forked by Pepopo with updates for Turtle WoW Goblin Brainwashing Device compatibility
- [SimpleAuras](https://github.com/yani9o/simpleAuras) - Simple Aura Display. /sa help
- [SimpleCombatLog](https://github.com/Road-block/SimpleCombatLog) - Pretty Print Combat Log AddOn
- [simpleMiniMap](https://github.com/McPewPew/SimpleMinimap) - Minimap replacement
- [SimpleRaidTargetIcons](https://github.com/Road-block/SimpleRaidTargetIcons) - Target Marking and Mark Targeting Improvements [[Img1](https://github.com/Road-block/SimpleRaidTargetIcons/raw/docs/srti_options.png)] [[Img2](https://github.com/Road-block/SimpleRaidTargetIcons/raw/docs/srti_unit_radial_mark.png)]
- [SkelaCustomNameplates](https://github.com/KrekoG/SkelaCustomNameplates) - Skela's Custom Nameplates [<nowiki>[Img1](https://user-images.githubusercontent.com/1638449/131257221-bc4fcfe7-5082-4c7a-bfef-32fd194ff52c.png)</nowiki>]
- [SKMap](https://github.com/EinBaum/SKMap) - tracks player deaths, player pvp kills, their location by zone, and displays them on the world map
- [SleepyPeon](https://github.com/NegusZek/SleepyPeon) - Moveable Rest XP bar, keeps track of rest XP overflow into next level(s)
- [SmallerRollFrames](https://github.com/DennisWG/SmallerRollFrames) - replaces the default Roll-Frames with smaller ones [[Img1](https://cloud.githubusercontent.com/assets/26133646/25947378/835d0808-364f-11e7-974f-39c2c8107aa5.jpg)]
- [SmartBuff](https://github.com/Azzc0/SmartBuff) - Automatically buff self/party/raid. Highly customisable [Alt](https://github.com/livinlicious/Smartbuff-TWOW)(https://github.com/livinlicious/Smartbuff-TWOW Alt)
- [SmartDebuffCheck](https://github.com/Simon3/SmartDebuffCheck) - Simple addon to check if your target has the proper debuffs applied
- [SmartHealer](https://github.com/melbaa/SmartHealer) - Autoscales heals in macros, and click heals for pfUI, Clique and ClassicMouseover (Melbaa). [Alternate Version](https://github.com/dsidirop/SmartHealer) with bugfix/update changes (Dsidrop)
- [SmartLoot](https://github.com/Necroskillz/SmartLoot) - is a unobtrusive group loot frames AddOn [[Img1](http://i.imgur.com/1ABOsUG.png)]
- [SmartRestore](https://github.com/Dauls/SmartRestore) - help people to easily restore their mana and health in and out of combat.
- [SmartRoll](https://github.com/jejkas/SmartRoll) - addon to help with rolling on items for multi-raid groups [[Img1](https://camo.githubusercontent.com/73f6e4356b204bbf63dac4c5e05f54d5e4fd4753/687474703a2f2f692e696d6775722e636f6d2f6a33494f7755702e706e67)]
- [SnagaLoatheb-TurtleEdition](https://github.com/madScripting/SnaguLoatheb-TurtleEdition) - Makes rotating Heals on Loatheb a lot easier. Now with Paladins *and* Shaman!
- [Snipe](https://github.com/shirsig/snipe) - automatically buys any auction that matches a target in a specified target list
- [Sniper](https://github.com/hitbutton/Sniper) - Mob Sniping Helper
- [Snowkoban](https://github.com/vakos1/Snowkoban) - A puzzle minigame adapted from "Sokoban" by Perun Labs
- [Sorgis Raid Marks](https://github.com/sorgis-sorgis/sorgis_raid_marks) - Raid mark targeting and assigning.
- [SortBags](https://github.com/shirsig/SortBags-vanilla) - Bag sorting. Fixed version for Turtle WoW to not cause grayed out items. [Alt](https://github.com/Magues17/SortBags)(https://github.com/Magues17/SortBags Alt)
- [SortByBuyout](https://github.com/Redbu11dev/SortByBuyout) - Adds "sort by buyout" button to the auction house frame [<nowiki>[Img1](https://i.imgur.com/fbUp180.png)</nowiki>]
- [Sota](https://github.com/Sentilix/sota) - State of the Art DKP and Loot addon
- [SoulShardManager](https://github.com/refaim/SoulShardManager) - Keeps your inventory from filling up with soul shards.
- [SoundBoard](https://github.com/FSuhas/SoundBoard) - Shares and plays sounds in the group/raid
- [Speed-o-meter](https://github.com/tomek7667/speed-o-meter.git) - Adds the best speed measuring frame
- [Speedometer](https://github.com/tomek7667/speed-o-meter.git) - Adds a small frame that shows your current running speed.
- [SP_Overpower](https://github.com/EinBaum/SP_Overpower) - Shows an alert tooltip and timer bar on your screen when Overpower procs
- [SP_Revenge](https://github.com/Aggromemnon/SP_Revenge) - Shows an alert tooltip and timer bar on your screen when Revenge procs
- [SP_SwingTimer](https://github.com/balakethelock/SP_SwingTimer) - Warrior Swing Timer [[Img1](https://cloud.githubusercontent.com/assets/15636669/21586658/5e5ada60-d0e4-11e6-8b0d-2d5606c1efac.jpg)]
- [SpamSentry](https://github.com/yutsuku/SpamSentry) - Documents Gold Spammers by making an automatic screenshot of the message
- [SpamThrottle](https://github.com/laytya/SpamThrottle) - Aims to remove unwanted chat messages. [[Img1](https://cloud.githubusercontent.com/assets/15636669/21587182/643c98c8-d0ea-11e6-9816-4fd333cc1cc6.jpg)] [[Upstream](https://github.com/Orukxu/SpamThrottle)]
- [SpartanUI](https://github.com/Dyaxler/SpartanUI_Vanilla) - designed to free your screen by moving a majority of the interface elements to the bottom
- [SpartanUI_SpinCam](https://github.com/Daribon/SpartanUI_SpinCam) - Causes the camera to spin around your character when you go AFK
- [SpecialTalent](https://github.com/KrekoG/SpecialTalent) + [SpecialTalentUI](https://github.com/KrekoG/SpecialTalentUI) - Talent planning/saving/changing, plus the option to view all three talent trees simultaneously (must install both!)
- [SpellAlert](https://github.com/Brqje/SpellAlert) - Warns the player of the spell being casting from the hostile units [[Vid1](https://www.youtube.com/watch?v=Ak0zLLeqmKY)]
- [SpellPowerMulti](https://github.com/kevmodrome/SpellPowerMulti) - displays the current relevant damage multipliers on a target as well as the current total multiplier [[Img1](https://camo.githubusercontent.com/891faca2be478cfec907d8ffb8b38aa8d0a9909f/687474703a2f2f692e696d6775722e636f6d2f525578566b4d342e6a7067)]
- [Spy](https://turtle-wow.fandom.com/wiki/Spy) - Detects and alerts you to the presence of nearby enemy players.
- [sQMinimapFix](https://github.com/Montspy/sQMinimapFix) - Force a constant minimap zoom level across all zones, cities and instances.
- [sRaidFramesImproved](https://github.com/satan666/sRaidFrames_Improved) - was originally designed to replace the raid frames provided by CT_RaidAssist [[Img1](https://cloud.githubusercontent.com/assets/26133646/25947363/78e99b52-364f-11e7-8faa-0c85b956c8f5.jpg)] [[Img2](https://cloud.githubusercontent.com/assets/26133646/25947371/7f6a92a6-364f-11e7-83e7-dc3ab51eee88.jpg)]
- [StatCompare](https://github.com/grimfiendish/StatCompare) 2.0 - adds a Character and Inspection Pane for raid gear checks or to compare gear to your target's. Updates including TurtleWoW specific spells and enchants). [character panel](https://raw.githubusercontent.com/grimfiendish/StatCompare/129ac15b6b7b0308f0a14a214fcf9b0d3e9a2092/media/Character%20-%20Show%20Armor%20-%20Show%20Spells%20-%20Show%20Stats.jpg)(https://raw.githubusercontent.com/grimfiendish/StatCompare/129ac15b6b7b0308f0a14a214fcf9b0d3e9a2092/media/Character%20-%20Show%20Armor%20-%20Show%20Spells%20-%20Show%20Stats.jpg character panel)[inspection panel](https://raw.githubusercontent.com/grimfiendish/StatCompare/129ac15b6b7b0308f0a14a214fcf9b0d3e9a2092/media/Inspect%20-%20Show%20Armor%20-%20Show%20Spells%20-%20Show%20Stats.jpg)(https://raw.githubusercontent.com/grimfiendish/StatCompare/129ac15b6b7b0308f0a14a214fcf9b0d3e9a2092/media/Inspect%20-%20Show%20Armor%20-%20Show%20Spells%20-%20Show%20Stats.jpg inspection panel)
- [StealthOverlay](https://github.com/yutsuku/StealtOverlay) - slowly dims your screen when you enter Stealth [[Img1](https://imgur.com/2eJewL5)]
- [StopDuelBuffer](https://github.com/Paparogue/StopDuelBuffer) - Auto-Decline World Buff / Flask Chugger Duels
- [StopWatch](https://github.com/Geigerkind/StopWatch) - a simple stopwatch that uses blizzards style [[Img1](https://camo.githubusercontent.com/3fb4061e0be6db7bed323f0141c806e96fb3ae68/68747470733a2f2f6269746275636b65742e6f72672f7265706f2f456472624d6a2f696d616765732f3331373531363234362d4234354d7366792e706e67)]
- [Strategos Battleground](https://gitlab.com/WobLight/Strategos_Battleground) - custom minimap for battlegrounds
- [Strategos Minimap](https://gitlab.com/WobLight/Strategos_Minimap) - custom minimap for battlegrounds
- [StrategosCore](https://gitlab.com/WobLight/StrategosCore) - Enhances your BG experience [[Img1](https://user-images.githubusercontent.com/26133646/34726431-4737c72c-f554-11e7-880d-30cea3e7b7cf.png)] [[Discord](https://discord.gg/nVeqHjC)]
- [SUCC-bag](https://github.com/Otari98/SUCC-bag) - addon to unify user inventory and bags. Can sort items automatically if [SortBags](https://github.com/shirsig/SortBags) or [Clean_Up](https://github.com/shirsig/Clean_Up) installed [2](https://github.com/FrostShock/SUCC-bag)(https://github.com/FrostShock/SUCC-bag 2) [Img1](https://cloud.githubusercontent.com/assets/17740865/23642754/f5d4baa6-02b1-11e7-89ad-db77a9b3a6c3.jpg)(https://cloud.githubusercontent.com/assets/17740865/23642754/f5d4baa6-02b1-11e7-89ad-db77a9b3a6c3.jpg Img1)
- [SUCC-ecb](https://github.com/checkem/SUCC-ecb) - enemy castbar
- [SUCC-ui](https://github.com/checkem/SUCC-ui) - UI replacement
- [SummonsMonitor](https://github.com/0ldi/SummonsMonitor) - makes it easy for one or more Warlocks to summon multiple people
- [Sunderarmor](https://github.com/melbaa/sunderarmor) - prints how many sunders people did
- [SunOfTheNight](https://github.com/Lanrutcon/SunOfTheNight) - addOn that tries to "backport" the Character Menu of Skyrim [[Img1](https://imgur.com/vn3TPE8)]
- [SuperIgnore](https://github.com/refaim/SuperIgnore) - Unlimited ignore list with many extra features [[Img1](https://github.com/EinBaum/SuperIgnore/raw/master/preview.jpg?raw=true)].
- [SuperInspect](https://github.com/vakos1/SuperInspect) - Continue inspecting even if you've lost your target and many more new features
- [SuperMacro](SuperMacro) - provides a very much improved interface for macros [[Vid1](https://www.youtube.com/watch?v=bJOzpyX78hI&feature=youtu.be)]
- [SurvivalUI](https://github.com/Oronak/SurvivalUI) - Creates a GUI for the Survival Profession in TurtleWoW [[Img1](https://user-images.githubusercontent.com/107281337/186992117-7d90e46d-2926-4a26-81fa-8c95f3666627.png)]
- [SVT](https://github.com/xorann/SVT) - Keeps track of Shadow Vulnerability
- [SW Stats](https://github.com/Zerf/SW_Stats-Vanilla) - (named after guild Shadow Warrior) is a damage/heal (and more) meter addon
- [swapondeath](https://github.com/melbaa/swapondeath) - re-equip mark of the champion or seal of the dawn after death
- [Swapper](https://github.com/gabrielecimolino/Swapper) - is a container swapping utility addon
- [SwapRaidSubgroupByName](https://github.com/Grymskvll/SwapRaidSubgroupByName) - Adds a function to swap raid members by name rather than by raid-index
- [SyncedUI](https://github.com/vashin1/SyncedUI) - A complete UI solution featuring a customized profile & release of pfUI for for 1920x1080 [[Img1](https://camo.githubusercontent.com/fa0ea52e5a89525b2911e16166a92a299887eff7/687474703a2f2f692e696d6775722e636f6d2f5969655a4a736b2e6a7067)]

[↑ Go to top of page ↑](Addons#Full Addons List)

### T
- [T-OoM](https://github.com/whtmst/T-OoM) - is a simple Out of Mana announcer addon for Turtle WoW
- [T-RestedXP](https://github.com/whtmst/T-RestedXP) - is a simple addon for tracking 0% and 100% rested XP in Turtle WoW
- [!Toggle](https://github.com/shirsig/notoggle) - Disables toggling behavior of Attack, Auto Shot and Shoot
- [Tactica](https://github.com/Player-Doite/tactica) - Tactical addon for raid leading with ease — post clear boss strategies (default or yours), auto-build and post/sort raids (auto-invite/gearcheck), assign & sync roles in raid roster, preset masterloot and set loot modes after kills, all in one place. [<nowiki>[Img1](https://github.com/user-attachments/assets/9879895e-5b73-4098-88f9-d298b794a349)</nowiki>] [<nowiki>[Img2](https://github.com/user-attachments/assets/991708d0-b30d-402f-9eff-57cb767b9859)</nowiki>] [<nowiki>[Img3](https://github.com/user-attachments/assets/9e626051-85bd-496e-b7be-75f91d2c70df)</nowiki>] [<nowiki>[Img4](https://github.com/user-attachments/assets/f8fcd04a-8060-4fa1-bb13-7d76810d9800)</nowiki>]
- [Talentsaver](https://github.com/pepopo978/Talentsaver) - save & load your common Talent Specs with just one click! [Alt](https://github.com/MOUZU/Talentsaver)(https://github.com/MOUZU/Talentsaver Alt) [[Vid1](https://www.youtube.com/watch?v=8au61bMst10)]
- [TankAssignments](https://github.com/Atreyyo/TankAssignments) - helps you assign tanks to raid targets
- [TankBuddy](https://github.com/srazdokunebil/TankBuddy) - Tanking assistance for wars/druids. Notices Party/Raid members when you use last stand, shield wall, lifegiving gem or when your taunt/growl/mocking blow fails.
- [TankBuddyEnh](https://github.com/laytya/TankBuddyEnh) - Alert raid on successful/missed taunt/kick/cc
- [TankHeal](https://github.com/xorann/TankHeal) - Tank Heal Assistant
- [TankHelper](https://github.com/balakethelock/TankHelper) - Shows information about target [<nowiki>[Img1](https://user-images.githubusercontent.com/111737968/244799868-0456e194-d5a4-42d5-a68f-d26b88db0462.png)</nowiki>]
- [TargetAssist](https://github.com/0ldi/TargetAssist) - Simple raid target icons
- [TargetFrameBuff](https://github.com/ZiiMs/TargetFrameBuff) - View all 16 buffs/debuffs on default UI
- [TargetSoundRestore](https://github.com/phrxqt/TargetSoundRestore) -  Restores the default target change sound effects often lost when replacing the Blizzard unit frames (e.g., with custom UI addons)
- [Tframes](https://github.com/oozgul/tframes/) - A sleek loot frames addon
- [Thaliz](https://github.com/Sentilix/thaliz) - Smart addon to handle ressing party / raid members [[Img1](https://user-images.githubusercontent.com/26133646/34412192-24ac7274-ebdc-11e7-8cb9-637353bd59fb.jpg)]
- [Theorycraft Turtle](TheoryCraft) - display average numbers on buttons w/ macros. Incomplete turtle class changes support.
- [Threat](https://github.com/muellerj/Threat) - Providing warrior tank a single button to generate the maximum available threat on a given single target [<nowiki>[Alt](https://github.com/Xleone1/Threat)</nowiki>]
- [ThreatLogger](https://github.com/ZenSociety/ThreatLogger) - Addon for logging ability threat.
- [TimeManager](https://github.com/gashole/TimeManager) - Time Management features [[Img1](https://camo.githubusercontent.com/cfa9e821fdf7f689bad274ae629d1ae713259c6e/687474703a2f2f692e696d6775722e636f6d2f6d7a37515834412e706e67)]
- [TimeToKill](https://github.com/jrc13245/TimeToKill) - Advanced time-to-kill estimation using RLS (Recursive Least Squares) algorithm
- [Timers](https://github.com/0ldi/Timers) - Flexibly customizable timers for tracking by triggers
- [TimeToDrink](https://github.com/TheRealFayz/TimeToDrink) - Editable alerts when healers get low on mana in a 5-man party.  No more wipes due to tanks not seeing the healer is OOM.
- [TimeTracker](https://github.com/jejkas/TimeTracker) - addon to create custom bars
- [TinyTip](https://github.com/EinBaum/TinyTip) - changes the look of your GameTooltip
- [TitanCritLine](https://github.com/isitLoVe/TitanCritLine) - Saves your high normal and critical damage records and flashes a message if your break the record
- [TitanGuild](https://github.com/isitLoVe/TitanGuild) - TitanGuild with EPGP display
- [TitanWowRadio](https://github.com/Daribon/TitanWowRadio) - Titan Plug-in for WowRadio
- [TitleRotator](https://github.com/sica42/TitleRotator) - Automatically change your title every few seconds [Img1](https://imgur.com/a/titlerotator-kcj80x0)(https://imgur.com/a/titlerotator-kcj80x0 Img1)
- [Tmog](https://github.com/Otari98/Tmog) - Adds info about your transmog collection to game tooltips
- [TNE FiveSec](https://github.com/refaim/TNE-FiveSec) - 5 Second Rule and mana regen tick monitor [Img1](https://user-images.githubusercontent.com/55476/201145942-c1957ca2-9b25-4bc7-8f88-214ad400e8ca.png)(https://user-images.githubusercontent.com/55476/201145942-c1957ca2-9b25-4bc7-8f88-214ad400e8ca.png Img1)
- [TNE Nightfall](https://github.com/Monteo/TNE_Nightfall) - Enables a flashing purple effect when you gain Shadow Trance
- [ToggleGather](https://github.com/maxcodk/ToggleGather-by-Svarrog) - Allows you to toggle between Find Herbs and Find Minerals with a single key press, updated for Turtle WoW (Svarrog). [Original upstream version](https://github.com/FrostShock/ToggleGather) (FrostShock)
- [TomTomVanilla](TomTom) - a mix of the Legion TomTom and QuestieArrow
- [TopMeOff](https://github.com/melbaa/TopMeOff) - will automatically top you off on reagents when you talk to a reagent vendor
- [TotemNesia](https://github.com/TheRealFayz/TotemNesia) - A comprehensive totem management addon for Shaman in Turtle WoW
- [TotemTimersEnhanced](https://github.com/MOUZU/TotemTimers-Enhanced) - keep track of shaman totems, how long they'll last and when their next Tick comes [<nowiki>[2](https://github.com/mdmcclel/TotemTimers-Enhanced)</nowiki>]
- [TotemTimers (TurtleWoW)](https://github.com/gregdeichler/TotemTimers) - a polished Turtle WoW addon that gives shamans a fast, readable totem bar with timers, flyout selection, scale controls, and a built-in twist warning helper.
- [Totemus](https://github.com/Azgaardian/Totemus) - Management of shaman spells, abilities, and reagents
- [ToxicTagger](https://github.com/dogmax/ToxicTagger) - Get the tag every time.
- [TourGuide Professions](https://github.com/cralor/TourGuide_Professions) - Professions guides for 1-300
- [TourGuide Turtle](TourGuide Turtle) - Power Leveling guide framework
- [Tracking Menu](https://github.com/blomma/bc_TrackingMenu) - Replaces the tracking icon on the minimap with an icon that has a pop-up menu for tracking abilities.
- [TradeChat](https://github.com/gbl/TradeChat) tells you in chat when people give you money. Use when you can't remember if people gave you money with crafting materials.
- [TradeDispenser](https://github.com/Linae-Kronos/tradeDispenser) - allows to automatically trade any water or food you have in your bags [[Img1](https://user-images.githubusercontent.com/24671466/26872536-2704e430-4b77-11e7-82f3-3dd6279518f5.png)]
- [TradeSkillsData](https://github.com/refaim/TradeSkillsData) - provides database of trade skill recipes, vendors and sources. Required for MissingTradeSkillsList. Library addon. Superseded by LibCrafts.
- [TradeSkillsData-turtle](https://github.com/refaim/TradeSkillsData-turtle) - Turtle-specific database extension for TradeSkillsData. Library addon.
  - Superseded by LibCrafts, which is included in future addons that require it as a library.
- [Trailblazer](https://github.com/Liijin/Trailblazer) -  Lightweight Turtle-addon that helps you manage and summon your favorite mounts more easily.
- [TrainerSkills](https://github.com/refaim/TrainerSkills-vanilla) - Shows class/profession/pet/demon trainer frame from anywhere.
- [TrinketMenu](https://github.com/jrc13245/TrinketMenu) - a mod to make swapping trinkets easier [[Img1](https://user-images.githubusercontent.com/26133646/37241581-b5f3fa7e-245b-11e8-96ac-9e7cc365f999.png)]
- [TriviaBot Turtle](https://github.com/cyaohiri/TriviaBot-TurtleWow) - A fun in-game trivia bot with TurtleWoW questions.
- [TurtleCalendar](https://github.com/sica42/TurtleCalendar) - In-game calendar showing you raid & instances lockout, battleground and Darkmoon faire timers. [Img1](https://private-user-images.githubusercontent.com/155233364/486508147-e6369d2e-5b78-4df3-b1f4-e0968873019c.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTc3MTAzNDksIm5iZiI6MTc1NzcxMDA0OSwicGF0aCI6Ii8xNTUyMzMzNjQvNDg2NTA4MTQ3LWU2MzY5ZDJlLTViNzgtNGRmMy1iMWY0LWUwOTY4ODczMDE5Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkxMlQyMDQ3MjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hODVlYjQ5NzcyZTRkN2Q5ZDg3OTk2Mjc2OTdhZWRiMDEyZDJhNjNiNTFjNWMxMWFmMDFiODA3YzQyZDNlODMxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.bVbwsUxRvP8umm2MzGrGF9UrQNt9g8ICXdRDxf31Ih4)(https://private-user-images.githubusercontent.com/155233364/486508147-e6369d2e-5b78-4df3-b1f4-e0968873019c.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTc3MTAzNDksIm5iZiI6MTc1NzcxMDA0OSwicGF0aCI6Ii8xNTUyMzMzNjQvNDg2NTA4MTQ3LWU2MzY5ZDJlLTViNzgtNGRmMy1iMWY0LWUwOTY4ODczMDE5Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkxMlQyMDQ3MjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hODVlYjQ5NzcyZTRkN2Q5ZDg3OTk2Mjc2OTdhZWRiMDEyZDJhNjNiNTFjNWMxMWFmMDFiODA3YzQyZDNlODMxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.bVbwsUxRvP8umm2MzGrGF9UrQNt9g8ICXdRDxf31Ih4 Img1)
- [TurtleChatColors](https://github.com/DaMaGepyHUN/TurtleChatColors) - For Turtle Hardcore players, cleans up the <Still Alive> guild chat feed and adds features.
- [TurtleCount](https://github.com/neimad-mp/TurtleCount) - Adds a display of the number of turtles online [Img1](https://github.com/GryllsAddons/AddonPreviews/raw/main/TurtleCount/TurtleCount1.png)(https://github.com/GryllsAddons/AddonPreviews/raw/main/TurtleCount/TurtleCount1.png Img1) [Img2](https://github.com/GryllsAddons/AddonPreviews/raw/main/TurtleCount/TurtleCount2.png)(https://github.com/GryllsAddons/AddonPreviews/raw/main/TurtleCount/TurtleCount2.png Img2)
- [TurtleDebug](https://github.com/FrancisEgan/TurtleDebug) - A pretty-print debug tool for Turtle that allows easy copying and saves your variable list
- [TurtleEnchant](https://github.com/madamsmall/TurtleEnchant) - Makes the Enchanting interface searchable, sortable, and able to show items with materials available only. 
- [TurtleHardcoreChatTamer](https://github.com/refaim/TurtleHardcoreChatTamer) - Forces global Hardcore chat to respect the checkbox in chat channels settings
- [TurtleHCFilter](https://github.com/trumpetx/TurtleHCFilter) - Place HC Chat in a preferred window; modify the chat prefix; filter out WTS/T/LFM/G messages that are too far from your level.
- [TurtleHonorSpyEnhanced](https://github.com/dnkrse/TurtleHonorSpyEnhanced) - Enhanced PvP standings tracker.
- [TurtleMail](https://github.com/sica42/TurtleMail) - Automatically opens mail, mail multiple items, autocomplete recipient names, and more. A continuation of the 'Mail' addon with multiple improvements, such as showing the amount of gold collected from mail and allowing you to send multiple COD mail.
- [TurtleMenagerie](https://github.com/TrangOul/TurtleMenagerie) - A simple addon for Turtle WoW to summon a random mount or pet.
- [TurtlePetSearch](https://github.com/Avery1337/TurtlePetSearch) - An addon designed for Turtle WoW to search through your spellbook for companion pets.
- [TurtlePvp](https://github.com/clungo/TurtlePvp) - Broadcasts your world location to other TurtlePvP users to facilitate hunting eachother down and clashing for WPVP.
- [Turtle Reagent Display](https://github.com/FrancisEgan/TurtleReagentDisplay) - Displays reagent counts for spells directly on your action bar buttons.
- [TurtleRestedXP](https://github.com/FrancisEgan/TurtleRestedXP) - A small draggable rested XP progress bar.
- [TurtleRP](https://github.com/OldManAlpha/TurtleRP) - An RP addon custom-made for turtle. [Alt](https://github.com/bratmage/TurtleRP)(https://github.com/bratmage/TurtleRP Alt) [Info](https://victortemprano.com/turtlerp/)
- [TurtlesEpoch](https://codeberg.org/Mejiro/TurtlesEpoch) - AI-generated voice lines for NPC quest text, books, and world objects in Turtle WoW
- [TurtleSnacks](https://github.com/McPewPew/TurtleSnacks) - Collects Turtle Wow's wayward minimap buttons. [[Img1](https://user-images.githubusercontent.com/98543024/154826280-75658db9-18bd-4afb-a786-b832fbae5834.png)]
- [TurtleTaxi](https://github.com/Fragglechen/TurtleTaxi) - Create Transport requests for teleports or summons, or accept requests to teleport or summon other players who need it
- [TurtleTranslator](https://github.com/picardebooks/TurtleTranslator) - Translates chat messages across several languages
- [TurtleTweaks](https://github.com/mitjafelicijan/TurtleTweaks) - Tweaks and Enhancements [<nowiki>[Img1](https://user-images.githubusercontent.com/296714/238207093-910bfad2-9c78-4b35-bc48-e58f7cafa840.png)</nowiki>]
- [TWAssignments](https://github.com/CosminPOP/TWAssignments) - Tank/Healer assignments and more
- [TWBlueDragon](https://github.com/CosminPOP/TWBlueDragon) - Darkmoon Card: Blue Dragon proc tracker
- [TWLC2c](https://github.com/CosminPOP/TWLC2c) - Complete toolkit for guilds wishing to run Loot Council raids.
- [TwMapReveal](https://github.com/Ageous27/TwMapReveal) - Reveal / remove "fog of war" for the World Map.
- [TWoWBulkMail](https://github.com/Khundiann/TWoWBulkMail) - Bulk mail sending addon with autosend rules.
- [TWOwenWilson](https://github.com/CosminPOP/TWOwenWilson) - Owen Wilson WOW sounds when you crit with melee hits and spells
- [TWoW LFG Bulletin Board](https://github.com/Khundiann/TWoWLFGBulletinBoard) - Provides an overview of the group requests from chat channels.
- [TWoW PerHour](https://github.com/Khundiann/TWoWPerHour) - Reputation, experience, honor and gold metric tracker.
- [TWPulse](https://github.com/CosminPOP/TWPulse) - Notifies with a short pulse when cooldowns come off cooldown. [Alt](https://github.com/FSuhas/TWPulse)(https://github.com/FSuhas/TWPulse Alt)
- [TWSunders](https://github.com/CosminPOP/TWSunders) - Counts the time to 5sunders and outputs it in the chat.
- [TWThreat](https://github.com/MarcelineVQ/TWThreat) - Threat Meter for Turtle WoW
- [TWTrans](https://github.com/YamaYAML/twtrans) - Translates chat messages from Russian to English and vice versa.

[↑ Go to top of page ↑](Addons#Full Addons List)

### U
- [UberBanish](https://gitlab.com/Artur91425/UberBanish) - For Warlocks: automatically counts down your banish timer into raid or party chat, notifies other warlocks of early breaks or banisher deaths.
- [UITweaks](https://github.com/yutsuku/UITweaks) - Tweaks the User Interface to be as minimalistic as possible
- [UltimaMacros](https://github.com/jrc13245/UltimaMacros) - lightweight, self-contained macro system
- [UnicodeFont](https://github.com/Daribon/UnicodeFont) - Enables you to see Chinese, Japanese and other languages in game
- [UnifiedTalentGuides](https://github.com/rmarc29/UnifiedTalentGuides) - Show players what talent to choose depending on what class they're playing (based on popular HC guides websites)
- [UnitFramesImproved](https://github.com/Ko0z/UnitFramesImproved_Vanilla) - improve upon the standard blizzard unit frames without going beyond the boundaries set by them [[Img1](https://camo.githubusercontent.com/0082757337a05d228dc6c351f406ddaf59104d91/687474703a2f2f692e696d6775722e636f6d2f78754f664d72792e706e67)]
- [Unitscan](https://turtle-wow.fandom.com/wiki/Unitscan) - automatically scans for characters by name and alerts you upon finding one [[Img1](https://i.imgur.com/d7TLkZm.png)]
- [UnleashedTracker](https://github.com/Szalor/UnleashedTracker) - tracks the Unleashed Potential buff on your demon and displays its icon, alongside a duration and a number of stacks.

[↑ Go to top of page ↑](Addons#Full Addons List)

### V
- [Vamper](https://github.com/MarcelineVQ/Vamper) - Track Vampirism gains
- [VanillaGraphicBoost](https://github.com/hixio-mh/VanillaGraphicBoost) - Push the game's visuals to the max [[Img1](https://user-images.githubusercontent.com/26133646/39453092-ec65f660-4cd4-11e8-9f2b-dc4972bb54cc.png)]
- [VanillaGuide-Plus](https://github.com/DonutsDelivery/VanillaGuide-Plus) - Hybrid leveling guide with race-based routing and TomTom navigation [[Alt](https://github.com/tmerle/VanillaGuide/tree/pfquest-localization)]
- [VanillaGuide_TUGs](https://github.com/TheUnprofessionalGamer/VanillaGuide) - An in-game leveling guide written by TUGs on the basis of VanillaGuide and [GuideLime_TUGs](https://legacy.curseforge.com/wow/addons/guidelime_tugs/files/all).
- [VanillaGuideReloaded](https://github.com/JeromeM/VanillaGuideReloaded) - Remake of VanillaGuide (ongoing project)
- [VanillaMaps](https://github.com/0ldi/VanillaMaps) - collection of detailed and clear maps, gathered from various sources
- [VanillaRatingBuster](https://github.com/kxseven/VanillaRatingBuster) - Displays ratings for items in tooltips based on stat weights [[Img1](https://github.com/kxseven/VanillaRatingBuster/raw/master/VanillaRatingBuster/assets/vb_druid_feral.png)] [[Img2](https://github.com/kxseven/VanillaRatingBuster/raw/master/VanillaRatingBuster/assets/vb_druid_healing.png)]
- [VanillaStoryline](https://github.com/tubtubs/VanillaStoryline) - enhance the readability and immersion when questing [[alt](https://github.com/Voidmenull/VanillaStoryline)] [[Img1](https://i.imgur.com/eJdhBwt.png)] [[Img2](https://i.imgur.com/PA305nO.png)]
- [VanillaStoryline Transparent Patch](https://www.nexusmods.com/worldofwarcraft/mods/870) - Removes paper backgrounds [<nowiki>[Img1](https://staticdelivery.nexusmods.com/mods/1416/images/870/870-1733104190-1852572157.png)</nowiki>]
- [VanillaStoryline Visual Novel](https://github.com/LordGlarthir/VanillaStoryline-Visual-Novel) - New UI Design for even more immersion [Img](https://staticdelivery.nexusmods.com/mods/1416/images/871/871-1733260835-2093659857.png)(https://staticdelivery.nexusmods.com/mods/1416/images/871/871-1733260835-2093659857.png Img)
- [VCB](VCB) - a highly customizable buff frame
- [VendorAutoBuy](https://github.com/EinBaum/VendorAutoBuy) - Auto buy limited items from merchants [[Img1](https://github.com/EinBaum/VendorAutoBuy/raw/master/preview.jpg?raw=true)]
- [VendorList](https://github.com/MarcelineVQ/VendorList) - automatic vending of listed items
- [VF WarriorAddon](https://github.com/Otari98/VF_WarriorAddon) - Announces Last Stand / Shield Wall / Missed Taunts
- [VGAntiCooldown](https://github.com/firenahzku/VanguardAntiCooldown) - Tracks and purge enemy buffs
- [VGAttackBar](https://github.com/firenahzku/VGAttackBar) - Displays a progress bar for your attack speed [[Img1](https://user-images.githubusercontent.com/26133646/39252703-8ece2bb2-48a6-11e8-8661-55f087a97946.png)]
- [VGInterrupt](https://github.com/firenahzku/VGInterrupt) - interrupt your target
- [VGShamanTools](https://github.com/firenahzku/VanguardShamanTools) - tracks weapon enchantment and totem timers [[Img1](https://camo.githubusercontent.com/fea3c6dded6c3fa1de8f734b824cae41e33f8f14/68747470733a2f2f692e696d6775722e636f6d2f7a5847515144542e706e67)]
- [VGSmartUnbuff](https://github.com/firenahzku/VGSmartUnbuff) - removes the lowest-priority buff
- [Vizput](https://github.com/gregdeichler/Vizput) - a Turtle WoW auction house addon built for one job: posting batches of auctions quickly without dragging the same item over and over.
- [VoidBattle](https://github.com/yutsuku/VoidBattle) - AddOn that removes battleground spam messages from chat
- [vPeddler](https://github.com/ZythDr/vPeddler) - A relatively sophisticated junk seller addon that focuses on Qaulity-of-Life features and ease of use.
- [VQueue](https://github.com/dimiglas/vqueuetwow) - Group finder utility [[2](https://github.com/dimiglas/vqueuetwow)]
- [VitalWatch](https://vanillawowaddons.com/download/vitalwatch/) - Alerts you to your own low or critical health or mana, or to a party member or pet's health, using any combination of a centered large font frame, emotes, sounds, and party message.

[↑ Go to top of page ↑](Addons#Full Addons List)

### W
- [WarriorCombatManager](https://github.com/Faraso/WarriorCombatManager) - WCM is a lightweight timeline helper for TurtleWoW (SuperWoW supported setups) that helps you plan and execute cooldown stacking on boss fights.  [<nowiki>[Img1](https://static.wikia.nocookie.net/turtle-wow/images/f/f3/1.jpg)</nowiki>] [<nowiki>[Img2](https://static.wikia.nocookie.net/turtle-wow/images/9/9f/WCM_Options.jpg)</nowiki>]
- [WarriorHUD](https://github.com/mr-rosh/WarriorHUD) - a HUD(Head-up-Display) created exclusively for Warriors [[Img1](https://user-images.githubusercontent.com/26133646/39253411-1553a9fe-48a8-11e8-8b6d-9248a6fa18f7.png)]
- [WarriorTank](https://github.com/Cernie/WarriorTank) - One button warrior tanking
- [WarriorTweaks](https://github.com/Goose404/WarriorTweaks) - Checks for BS, Sunder, AttackPower and estimated kill time
- [WebDKP Elysium](https://github.com/webdkpthroaway/WebDKP_Elysium) - addon to help guild leaders manage their dkp
- [WFW](https://github.com/jejkas/WFW) - addon for switching weapons when you have Windfury totem
- [WhatsTraining_Turtle](https://github.com/FrancisEgan/WhatsTraining_Turtle) - Shows you what spells are available at your class trainer [Alt](https://github.com/Gescht/WhatsTraining_Turtle)(https://github.com/Gescht/WhatsTraining_Turtle Alt) [<nowiki>[Img1](https://raw.githubusercontent.com/spawnedc/WhatsTraining_Turtle/refs/heads/main/images/main-window.png)</nowiki>]
- [WhisperBind](https://github.com/Forbium/WhisperBind) - Interface for quick message sending
- [Whisper Filter](https://github.com/LadaBr/whisperfilter) - If you are annoyed by whispers of gold sellers and beggars this is right choice for you [[Img1](https://user-images.githubusercontent.com/26133646/32120043-6aa3b7fc-bb57-11e7-8473-4da4086d8108.png)]
- [WhisperProfile](https://github.com/ZenSociety/WhisperProfile) - A simple wow vanilla addon to display the profile of the whisper (/wp).
- [WhoFavorites](https://github.com/Road-block/WhoFavorites) - Store and Replay /who queries
- [WhoHas](https://github.com/Road-block/WhoHas) - Tooltip Addon showing item counts and other info
- [WhoKicksNow](https://github.com/yutsuku/WhoKicksNow) - Displays cooldowns for Kick, Gouge, Cheap Shot and Kidney Shot to everyone in group who use the AddOn
- [WhoList_Fix](https://github.com/Voidmenull/WhoList_Fix) - Fix the Who-List Display [[Img1](http://i.imgur.com/Xl7JPPJ.png)]
- [WIIIUI](https://github.com/Fiurs-Hearth/WIIIUI) - A Warcraft III UI addon for vanilla WoW [[Img1](https://user-images.githubusercontent.com/97316608/149590970-9f816046-1437-49f3-a054-57f0091d1da6.png)]
- [WIM](https://github.com/refaim/WIM) - (WoW Instant Messenger) brings an instant messenger feel to communication in game
- [WorkAroundSelfCast](https://github.com/MOUZU/WorkAroundSelfCast) - AddOn to enable the use of autoSelfCast with other AddOns like PallyPower
- [WorldBossAlert](https://github.com/Numielle/WorldBossAlert) - simplifies scouting for world bosses by checking the scout's combat log for crucial events
- [WorldBuffSoundAlert](https://github.com/Bergador/WorldBuffSoundAlert) - Plays a fanfare sound when a world buff is about to go out
- [WorldFilter](https://github.com/twothe/WorldFilter) - filters the world and trade channel by keywords
- [WoWAuctions](https://www.wowauctions.net/) Search the Turtle WoW Auction House from web (not actually an addon, just a useful resource)
- [WowLuaVanilla](https://github.com/laytya/WowLuaVanilla) - A WowLua backport for Vanilla WoW [[Img1](https://user-images.githubusercontent.com/20452393/191373851-17655d76-9bd9-4662-a8ed-761ee07488d7.png)]
- [WowRadio](https://github.com/paokkerkir/WowRadio-Vanilla) - Listen to Internet Radio inside WoW [Alt](https://github.com/Daribon/WowRadio)(https://github.com/Daribon/WowRadio Alt) [[Img1](https://user-images.githubusercontent.com/26133646/39201801-6731232c-47f0-11e8-922c-96747b449861.png)]
- [WoW-Voiceover](Addon WoW-Voiceover) - Adds AI generated voice acting to NPC dialogue and quests
- [WRUGS](https://github.com/Daribon/WRUGS) - Effective addon to block gold seller whispers.

[↑ Go to top of page ↑](Addons#Full Addons List)

### X
- [XckMasterLootAdvanced](https://github.com/unknauwn/XckMasterLootAdvanced/tree/master) - Easy way to assign loot as ML [[Img1](https://camo.githubusercontent.com/266a585b242f8c2ede245f7e68794ed8d0b480ac/68747470733a2f2f707265766965772e6962622e636f2f6543456a45372f53637265656e73686f745f312e706e67)]
- [XFactionChat](https://github.com/EinBaum/XFactionChat) - Cross Faction Chat
- [XLoot](https://github.com/Ko0z/XLoot) - Xloot for 1.12 Shagu Style
- [XLoot AddOns](https://github.com/Road-block/XLoot_AddOns) - A remake of the built-in loot frame [[Img1](https://user-images.githubusercontent.com/26133646/37241321-98633d20-2457-11e8-80b5-6b5ab9422135.png)]
- [XPerl](https://github.com/Redbu11dev/X-Perl-UnitFrames) - Replaces the normal unit, party, target, pet frames and adds target-of-target
- [XToLevel-Classic](https://github.com/jayparry/XToLevel-Classic) - Kills/Quests to level, XP/hour, ETA.
- [XTranqManager](https://github.com/unknauwn/XTranqManager/tree/master) - Easy Auto Announce TranqShot
- [XiaoMount](https://github.com/Kmschr/XiaoMount) - Riding Equipment Autoequipper for TWoW
- [XtraUnitFrame](https://github.com/unknauwn/XtraUnitFrame) - Advanced Compact Unit Raid Frame [[Img1](https://camo.githubusercontent.com/ef38b8a75254f2a5de0d30f72953644ac468ea91/687474703a2f2f696d6167652e70726e747363722e636f6d2f696d6167652f30313231643338356433363634633434386161356666393663373362636263632e706e67)] [[Img2](https://camo.githubusercontent.com/b93d9926ea9297447bd99e5a4de8014db0b9b6f5/68747470733a2f2f696d6167652e6962622e636f2f6362425171642f745f6c5f6368617267656d656e742e706e67)]

[↑ Go to top of page ↑](Addons#Full Addons List)

### Y
- [YAHT Turtle.](https://github.com/aspanj/YaHT-TurtleWoWSteady) - Yet another Hunter Timer. TWoW Trueshot support [[Img1](https://i.imgur.com/aT152lD.png)] [[Img2](https://i.imgur.com/PZlUAkU.png)]
- [YouveGotRedOnYou](https://github.com/whtmst/YouveGotRedOnYou) - Warns if your target is PVP flagged. [[Img1](https://user-images.githubusercontent.com/98543024/151660110-12603778-fac5-4fbc-b90a-f2653ea5b474.jpg)]

[↑ Go to top of page ↑](Addons#Full Addons List)

### Z
- [ZealCycle](https://github.com/TerraBaddie/ZealCycle-turtle) - Zeal Stacker (Crusader Strike) then Holy Strike Spammer (Prot Paladin)
- [ZeroDB](https://github.com/minexew/zeroDB) - database addon [[Img1](https://camo.githubusercontent.com/6cb46960e3e3f9cc7080934e928d1f94b1887dd4/687474703a2f2f692e696d6775722e636f6d2f524857686b41662e706e67)]
- [ZGLoot](https://github.com/Lichery/ZGLoot) - automate looting in ZG, AQ 20 and AQ 40 [[Img1](https://user-images.githubusercontent.com/26133646/36640833-a03d316c-1a26-11e8-9971-7935e2b55bb5.png)]
- [ZGTracker](https://github.com/rsheep/ZGTracker) - Tracks Zul'Gurub coins and bijous lootage
- [Zones Level](https://github.com/Arthur-Helias/ZonesLevel) - A lightweight Turtle WoW addon that displays the mouse hovered zone's level under its title on the world map. [<nowiki>[Img1](https://github.com/user-attachments/assets/ad28d3dd-fa26-42bd-8971-1939c00cbc7b)</nowiki>]
- [Zorlen](https://github.com/Xian55/Zorlen) - a function library addon for all classes and other general functions. it provides a host of functions that have to be activated in macros. [[Original](https://www.briankoponen.com/zorlen-addon-vanilla-world-warcraft/)]
- [zUI](https://github.com/Ko0z/zUI) - A pfUI fork, Complete UI Replacement, that instead aims to preserve the blizzard look/design but with a modern touch and with some nice features added [[Img1](https://camo.githubusercontent.com/f0d07ba5b01bd70a05f64a57366f14543411d9a1/68747470733a2f2f692e696d6775722e636f6d2f37776e48784f772e706e67)] [[Img2](https://camo.githubusercontent.com/02c4e67f8c7c65f9a96e05703980013ccfbf78de/68747470733a2f2f692e696d6775722e636f6d2f4151383658724d2e706e67)]

[↑ Go to top of page ↑](Addons#Full Addons List)

A big thank you to Mr Rosh for maintaining this list in the past, and all wiki contributors for keeping it fresh in the present!

## SuperWoW Addons
These addons either require the [SuperWoW](https://github.com/balakethelock/SuperWoW) client mod to work, or provide more features with SuperWoW.

##### **What is SuperWoW?**
- You can find SuperWoW [**here**](https://github.com/balakethelock/SuperWoW). It's [**feature list**](https://github.com/balakethelock/SuperWoW/wiki/Features) and [**compatibility notes**](https://github.com/balakethelock/SuperWoW/wiki/Compability-with-other-mods) can be found on it's github wiki.

##### **How do I install SuperWoW?**
- Pepopo wrote an [**install guide**](https://github.com/pepopo978/SuperwowInstallation).

##### **Addons that require SuperWoW**
{| class="fandom-table"
!Addon
! Description
|-
|[AutoLock](https://github.com/DavidBecht/AutoLock)
|Priority-based spell rotation addon for Warlocks.
|-
|[AutoMarker](https://github.com/MarcelineVQ/AutoMarker)
|Automatically mark raid mobs.
|-
|[Cursive](https://github.com/pepopo978/Cursive)
|Curse tracker and multi curse assistant 
|-
|[Cursive-raid](https://github.com/Kirchlive/cursive-raid)
|Real-time debuff tracking, live armor monitoring, and full raid visibility.
|-
|[Dragonflight3](https://github.com/Flaxic-LUA/-Dragonflight3)
|A comprehensive UI overhaul. Its in Alpha so expect bugs.
|-
|[GCDisplay](https://github.com/MrDoufuru/GCDisplay)
|Displays your GCD, with the last spell that triggers it, as a circle reducing its size.
|-
|[IWinEnhanced](https://github.com/Profiler781/IWinEnhanced)
|1-button rotation macros for Turtle Druids, Paladins and Warriors.
|-
|[JankyPlates](https://github.com/Ageous27/JankyPlates)
|Colors enemy name plates based on players threat.
|-
|[Lateral](https://github.com/Carravan/Lateral)
|Rogue Rotation and T3.5 Proc Tracking
|-
|[MageHud](https://github.com/pepopo978/MageHud)
|Mage Shield Display for Turtle WoW 
|-
|[MonkeySpeed](https://github.com/MarcelineVQ/MonkeySpeed)
|Displays your speed as a percentage of run speed
|-
|[pfUI](https://github.com/me0wg4ming/pfUI)
|Turtle Edition fork from me0wg4ming
|-
|[pfUI-bettertotems](https://github.com/Bombg/pfUI-bettertotems)
|Totem module with some extra features
|-
|[<nowiki>oCB  [SuperWoW](https://github.com/Shellyoung/oCB-SuperWoW)</nowiki>]
|(Otravi Casting Bar) Quartz Like castbar with SuperWoW support
|-
|[Overhead](https://github.com/Otari98/Overhead)
|Simple and lightweight overlapping nameplates with cast bars and class colors
|-
|[Quartz](https://github.com/laytya/Quartz)
|Modular casting bar
|-
|[QuickTurtleDBLookUp](https://github.com/Taeko-ar/QuickTurtleDBLookUp)
|Quick NPC search in the Turtle WoW database
|-
|[Rank14losSA Reborn](https://github.com/me0wg4ming/Rank14losSA)
|verbally warns you when an enemy uses an important spell
|-
|[ShaguScan](https://github.com/shagu/ShaguScan)
|Tracks and filters nearby players and npcs
|-
|[SoloRaidTargetIcons](https://github.com/refaim/SoloRaidTargetIcons)
|Enables raid target icons through the default Blizzard UI while not in a group
|-
|[SP_SwingTimer](https://github.com/jrc13245/SP_SwingTimer)
|Auto-Attack Swing Timer
|-
|[SunderNP](https://github.com/perks/SunderNP)
|Adds a sunder count to the right of your Nameplates
|-
|[SuperAPI](https://github.com/balakethelock/SuperAPI)
|The companion compatibility addon to the 1.12.1 client mod SuperWoW 
|-
|[SuperAPI Castlib](https://github.com/balakethelock/SuperAPI_Castlib)
|Adds accurate castbars to any nameplate
|-
|[SuperCleveRoid Macros](https://github.com/jrc13245/SuperCleveRoidMacros)
|Enhance macros with dynamic tooltips, conditional execution, and extended syntax
|-
|[SuperLazyScript](https://github.com/arimbaud-x/lazyScript)
|Programmable Class Attacks
|-
|[SuperTotem](https://github.com/elboaf/SuperTotem)
|A Shaman totem and shield manager
|-
|[SuperWowCombatLogger](https://github.com/pepopo978/SuperWowCombatLogger)
|Improved combatlogger for TurtleWoW (for LegacyPlayers/Monkeylogs)
|-
|[SpiritLinker](https://github.com/MarcelineVQ/SpiritLinker)
|Information bar for using Spirit Link
|-
|[Tankalyze](https://github.com/MarcelineVQ/Tankalyze)
| Captures missed Taunts and some other nice to have tank additions
|-
|[TankPlates](https://github.com/MarcelineVQ/TankPlates)
|Colors enemy Nameplates depending on if they're targeting the player 
|-
|[Tattler](https://github.com/MarcelineVQ/Tattler)
|Announce when certain items or spells are used
|-
|[FastTOT](https://github.com/OldManAlpha/FastTOT)
|Massively increases performance of Target Of Target frame
|-
|[TrackTarget](https://github.com/MarcelineVQ/TrackTarget)
|Track any friendly you target which is assistable on the Minimap
|-
|[Twister](https://github.com/MarcelineVQ/Twister)
|Addon to totem twist automatically.
|}

##### **Addons that gain additional features with SuperWoW**
{| class="fandom-table"
!Addon
! Added Feature(s)
!Description 
|-
|[aDF](https://github.com/MarcelineVQ/aDF/)
|?
|Adds a small HUD that standardizes critical info about your target's defences, including Armor, Resists, and specific debuffs
|-
|[Decursive](https://github.com/MarcelineVQ/Decursive)
|Improved Efficiency
|This is a cleaning mod. Its job it to help a class that can remove debuffs, do it with ease.
|-
|[DruidManaBar](https://github.com/gashole/DruidManaBar)
|Accurate Mana Values
|Displays a mana bar when shapeshifted
|-
|[Friend-O-Tron](https://github.com/refaim/Friend-O-Tron)
|Cross-account friend sync
|Synchronizes your friends list across all your characters and accounts on the same realm
|-
|[pfUI](https://github.com/shagu/pfUI)
|Accurate Nameplate and TargetFrame Castbars
|Full UI replacement
|-
|[Puppeteer](https://github.com/OldManAlpha/Puppeteer)
|Precise distance tracking, aura timers, and adds Focus frames
|Unit frames addon for healers or any class/spec, an alternative to modern WoW's VuhDo, Cell, or Healbot
|-
|[Rinse](https://github.com/Otari98/Rinse)
|Improved Efficiency
|This addon is very similar to Decursive, it helps with removing debuffs from friendly units
|-
|[ShaguDPS](https://github.com/shagu/ShaguDPS)
|Track damage from minions such as totems
|A lightweight damage meter 
|-
|[ShaguPlates](https://github.com/shagu/ShaguPlates)
|Accurate Nameplate Castbars
|Standalone pfUI Nameplates
|-
|[ShaguTweaks](https://github.com/shagu/ShaguTweaks)
|Accurate Nameplate and TargetFrame Castbars
|A collection of tweaks and enhancements to the default  interface
|-
|[SimpleActionSets](https://github.com/pepopo978/SimpleActionSets)
|Fixed to work with SuperWoW
| Save action bars as sets that can be swapped out.
|-
|[Sorgis Raid Marks](https://github.com/MarcelineVQ/sorgis_raid_marks)
| More efficient marking 
|Raid mark targeting and assigning, improved fork making use of superwow
|-
|[SP SwingTimer](https://github.com/MarcelineVQ/SP_SwingTimer)
|Flurry support
| Auto-Attack Swing Timer
|}

## Further Addons Collections
It is always better to obtain addons from the links above, as developers post their updates and fixes, and will support you in making sure everything works. However, you may find some old and obscure goodies in the following collections that are not found elsewhere. 

To install these addons, you must use the manual method, and you will never receive updates for these.

If one of these old addons bugs out and breaks due to Turtle WoW's changes, someone can fix it for Turtle and add the fixed Turtle version to the above addons list. Be sure to check to see if someone's done this already.

- [Vigilance](https://web.archive.org/web/*/http://www.vigilance-committee.org/wow/downloads/*), [Ace](https://web.archive.org/web/20061114054055/http://www.wowace.com/files/) ([Alt](https://web.archive.org/web/*/http://www.wowace.com/files/*)), [Curse](https://web.archive.org/web/*/http://static.curse-gaming.com/ftp/datarepos/addons/*), [Worldofwar](https://web.archive.org/web/*/http://downloadmod.worldofwar.net/upload/ui/*) ([Alt](https://web.archive.org/web/*/http://uifiles.worldofwar.net/upload/ui/*)) and [Guru](http://web.archive.org/web/*/http://www.wowguru.com/ui/archives/*) (wayback machine download pages)
- [Road Block's Select AddOns](https://github.com/Road-block/Select_AddOns)
- [RootedCF's Massive Collection for 1.12](https://github.com/rootedCF/classicaddons)
- [CrazyPoultry's Addons Collection](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection)  ([Mirror](https://github.com/freadblangks/Wow1.12.1_Addons_Collection)) ([Alt](https://github.com/aim2kill/Wow1.12.1_Addons_Collection))
- [xVitali2's Addons for Vanilla](https://github.com/xVitali2/Addons-for-Vanilla-1.12.1)
- [Laytya's Vanilla Addons](https://github.com/laytya/Vanilla-Addons)
- [Fastbond's WoW 1.12.1 Addons](https://github.com/fastbond/wow-1.12.1-addons)
- [Oppahansi's WoW UIs](https://github.com/oppahansi/WoW-UIs/tree/master/Vanilla)
- [Suetema's Tweaks to Boldi's Addons](https://github.com/suetema/AddOns)
- [Legacy-wow.com's Vanilla Addons](https://legacy-wow.com/vanilla-addons/)
- [Felbite.com's Vanilla Addons](https://felbite.com/addons/?expansion=vanilla)
- [ruRU ClassicAddons](https://github.com/WoWruRU-ClassicAddons)
- [fondlez's Vanilla Addons](https://github.com/fondlez/wow-addons-vanilla)
- [Ryac's Steam Deck UI](https://github.com/Ryac1/Ryac_TW_Steamdeck_UI)  - Consoleport like UI for 1.12 with 40+ actionbuttons [Img1](https://i.imgur.com/18EUC5F.jpg)(https://i.imgur.com/18EUC5F.jpg Img1)
{| class="fandom-table"
!Addon Name
!Description
|-
|[!! FonTabulous](FonTabulous)
|Replaces fonts in-game (e.g., Diablo fonts).
|-
|[!! Warmup](Warmup)
|Shows load times and memory usage for each addon.
|-
|[! AutoSave](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/!AutoSave_v1.12.1/!AutoSave)
|Periodically and automatically saves settings after certain events.
|-
|[! BugGrabber](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/!BugGrabber-r17008.zip)
|Tracks interface errors; compatible with Ace2. Replacement for ImprovedErrorFrame, traps addon errors and lets you report the full callstack (BugGrabber and BugSack both needed).
|-
|[! ChatBox](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/!ChatBox_v1.20)
|Customizes chat colors, buttons, and layout.
|-
|[! ClearFont](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/!ClearFont_v11200-2)
|Magical UI font-changer. Replaces game fonts with custom ones. [Info](https://web.archive.org/web/20061231024132/http://ui.worldofwar.net/ui.php?id=2436)
|-
|[! ImprovedErrorFrame](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/!Improvederrorframe_v3.2)
|Hides error messages generated by addons (/ief). [Info](https://web.archive.org/web/20060622142654/http://www.wowwiki.com/ImprovedErrorFrame)
|-
|[! OmniCC](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/OmniCC.v6.8.30.zip)
|Displays cooldown timers visually on action buttons.
|-
|[! StopTheSpam](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/!StopTheSpam_r16449/!StopTheSpam)
|Suppresses addon loading messages in chat.
|-
|[ABHEFS](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ABHEFS)
|ABHelper Estimated Final Score Redux. [Info](https://web.archive.org/web/20060908234101/http://ui.worldofwar.net/ui.php?id=1452)
|-
|[ABInfo](https://web.archive.org/web/20060622004216if_/http://downloadmod.worldofwar.net:80/upload/ui/1145638908Addme.zip)
|Action Button Info adds a numerical display of the cooldown, the number of times you can use an ability before you ran out of mana/rage and some other things.
|-
|[ABInfo BlizzardBars](https://web.archive.org/web/20060622004216if_/http://downloadmod.worldofwar.net:80/upload/ui/1145638908Addme.zip)
|Action Button Info - BlizzardBars.
|-
|[ABInfo DiscordActionBars](https://web.archive.org/web/20060622004216if_/http://downloadmod.worldofwar.net:80/upload/ui/1145638908Addme.zip)
|Action Button Info - DiscordActionBars
|-
|[ABTimeLeft](https://web.archive.org/web/20060620024036if_/http://downloadmod.worldofwar.net:80/upload/ui/1148198018ABTimeLeft_011.zip)
|Shows you the estimated time left until a team wins in Arathi Basin.
|-
|[Accountant](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Accountant_v2.3)
|Tracks money spent and earned.
|-
|[Ace](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Ace_v1.3.1)
|AddOn development and management toolkit (Turan). [Info](https://web.archive.org/web/20061205040300/http://www.wowace.com/wiki/Main_Page)
|-
|[Ace2](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Ace2_r17998)
|AddOn development framework (Ace Development Team). [Info](https://web.archive.org/web/20060719023902/http://wiki.wowace.com/index.php/Ace2)
|-
|[AceAccept](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AceAccept_r12403)
|Auto-accepts resurrection and summon requests in raids.
|-
|[AceBidHelper](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AceBidHelper_v0.3)
|Follows auction bids easily.
|-
|[Aced Remixx](https://web.archive.org/web/20061128042231if_/http://uifiles.worldofwar.net:80/upload/ui/Loctorns'%20Aced%20Remixx_20061121.zip)
|Loctorns' UI compilation
|-
|[AceGUI](https://web.archive.org/web/20060719143143if_/http://static.curse-gaming.com/ftp/datarepos/addons/4344/AceGUI%200.9.1.zip)
|AceGUI is a development tool to make it easy to develop GUI's [info](https://web.archive.org/web/20061113025817/http://www.curse-gaming.com/en/wow/addons-4344-1-acegui-091.html)
|-
|[AceNameToggle](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AceNameToggle_v1.0)
|Toggles display options above players’ heads.
|-
|[AceTimer](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AceTimer_r9593)
|Timer for dots, HOTs, totems, etc.
|-
|[AceTooltip](https://web.archive.org/web/20060622005455if_/http://downloadmod.worldofwar.net:80/upload/ui/1145188946TricksterUI.zip)
|Tooltip library for Ace addons.
|-
|[AceUnitFrames](https://web.archive.org/web/20060506050813if_/http://svn.wowace.com:80/dl.php?repname=Ace+SVN&path=%2Ftrunk%2FAceUnitFrames%2F&rev=0&isdir=1)
|A Unit Frame framework.
|-
|[ActionBarOrganizer](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ActionBarOrganizer_v0.02)
|Configures and manages action panels.
|-
|[ACUI](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|Advanced caster UI (Mage). [Info](https://web.archive.org/web/20061028074806/http://ui.worldofwar.net/ui.php?id=787)
|-
|[ACUI_UberQuest](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|Dual pane quest list/log window with integrated Minion.
|-
|[ACUI_Toolbars](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|ACUI Toolbars - based on biToolbars 2.2.
|-
|[ACUI_QuickCash](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|A tiny functioning cash display.
|-
|[ACUI_MyInventory](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|Standalone, configurable inventory viewer.
|-
|[ACUI_MyBank](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|Standalone, configurable bank viewer.
|-
|[ACUI_Config](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|Allows default configuration to be maintained and restored.
|-
|[ACUI_Clock](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|Adds a clock window with time-based tooltip information (/clock).
|-
|[ACUI_AvgXP](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|Calculates Average Exp Gain
|-
|[Adapt](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Adapt_v1.5)
|Adds 3D portraits in standard unit frames. [Info](https://web.archive.org/web/20060912013054/http://ui.worldofwar.net/ui.php?id=2260)
|-
|[Addme](https://web.archive.org/web/20060622004216if_/http://downloadmod.worldofwar.net:80/upload/ui/1145638908Addme.zip)
|Addon Pack.
|-
|[!Addon2Earth](https://web.archive.org/web/20060628200028if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/551/Inc_UI_Adv_D50.6_11000.exe)
|Binding some addons in to the Earth-book.
|-
|[AdvancedChat](https://web.archive.org/web/20060520202632if_/http://downloadmod.worldofwar.net:80/upload/ui/1143884880AlesUI1101-noatlas.zip)
|Add time stamp into Chat/Combat window.
|-
|[AdvancedOnlineMsg](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AdvancedOnlineMsg)
|Customizes messages for players entering/leaving the game.
|-
|[AdvancedTradeSkillWindow](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AdvancedTradeSkillWindow_v0.4.4)
|Improved profession window with sorting.
|-
|[Advanced Timers](https://web.archive.org/web/20060509035032if_/http://downloadmod.worldofwar.net:80/upload/ui/1145961976Timers%203.32.zip)
|A trigger based timers and warning system (MC Respawns).
|-
|[AdWS](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AdWS_v1.0)
|Calculates weapon damage based on character stats.
|-
|[AF_Tooltip](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AF_Tooltip_v5.8_fix)
|Enhanced tooltips with more info.
|-
|[Aftt_extreme](https://web.archive.org/web/20060622004216if_/http://downloadmod.worldofwar.net:80/upload/ui/1145638908Addme.zip)
|Extreme upgrade from the default tooltip
|-
|[AfkAlert](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AfkAlert)
|Notifies when switching to AFK (with sound and large text).
|-
|[ag_UnitFrames](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ag_UnitFrames_r14368)
|Replaces standard unit frames.
|-
|[AggroAlert](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AggroAlert)
|Alerts when an enemy targets you.
|-
|[AH_MailCollect](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AH_MailCollect_r7415)
|Automatically collects auction money from mail.
|-
|[AH_QuickSearch](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AH_QuickSearch_v1.3)
|Adds search filters in auction with Shift + click.
|-
|[AH_ShowBid](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AH_ShowBid_v11000-R1)
|Highlights items you or others bid on.
|-
|[AH_Wipe](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AH_Wipe_r16590)
|Adds a reset button in auction frames.
|-
|[aHelmnCloakToggle](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/aHelmnCloakToggle)
|Show/hide helmet and cloak icons.
|-
|[AHFQ](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/AHFavorites_r16420/AHFavorites)
|Favorites in auction search.
|-
|[AlarmClockWrangler](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AlarmClockWrangler_v1.08)
|Sets alarms/reminders.
|-
|[AlarTTFrame](https://web.archive.org/web/20060509234042if_/http://wow.aspide.it/downloads/AlarMods-1.6.0-11000.zip)
|Create low lag additional unit frame (/att).
|-
|[AlarTheOneFunction](https://web.archive.org/web/20060509234042if_/http://wow.aspide.it/downloads/AlarMods-1.6.0-11000.zip)
|A configurable multispam button functionality (/ato).
|-
|[AlarPetViewer](https://web.archive.org/web/20060509234042if_/http://wow.aspide.it/downloads/AlarMods-1.6.0-11000.zip)
|Let you review your pets without summoning them.
|-
|[AlarMod](https://web.archive.org/web/20060509234042if_/http://wow.aspide.it/downloads/AlarMods-1.6.0-11000.zip)
|Autobuff, autoaspect, hunter helper and much more (/amo).
|-
|[AlarDkp](https://web.archive.org/web/20060509234042if_/http://wow.aspide.it/downloads/AlarMods-1.6.0-11000.zip)
|Show Guild dkp in game. Need edkp.php generated data (/adkp).
|-
|[AlarConfig](https://web.archive.org/web/20060509234042if_/http://wow.aspide.it/downloads/AlarMods-1.6.0-11000.zip)
|Configuration utility for AlarMod.
|-
|[AlesUI](http://downloadmod.worldofwar.net/upload/ui/1143884880AlesUI1101-noatlas.zip)
|Alestrianas UI pack.
|-
|[AlfCast](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AlfCast_r12980)
|Casts on yourself with Alt key (Ace2).
|-
|[Align](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Align_v1.05)
|Screen grid for interface alignment.
|-
|[Alkitron_HonorTab](https://web.archive.org/web/20061127093626if_/http://downloadmod.worldofwar.net:80/upload/ui/1157315670Alkitron_HonorTab_v3.2.zip)
|Replaces standard Honor Tab with an Enhanced version. [Info](https://web.archive.org/web/20061028121048/http://ui.worldofwar.net:80/ui.php?id=2220)
|-
|[AllInOneInventory & Bank](https://web.archive.org/web/20061129103206if_/http://downloadmod.worldofwar.net:80/upload/ui/1156505525AllInOneInventory.zip)
|Unified large inventory and bank UI. [Info](https://web.archive.org/web/20060613172939/http://ui.worldofwar.net/ui.php?id=1598)
|-
|[AllShotAlert](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AllShotAlert_v0.06e)
|Sounds/messages during critical hits.
|-
|[AlphaMap](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AlphaMap_v2.62.11200)
|Persistent map view, including dungeons.
|-
|[AlreadyKilled](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AlreadyKilled_v3.0)
|Tracks how many times you've killed a player.
|-
|[Alternative Global Strings](https://web.archive.org/web/20070510125250if_/http://www.viper.dk:80/wow/files/AlternativeGlobalStrings_v1.21.zip)
|Replaces some of the Global Strings used by the game. [Info](https://web.archive.org/web/20061126084315/http://www.viper.dk/wow/#AlternativeGlobalStrings)
|-
|[Alternative Quest Log](https://web.archive.org/web/20061112173238if_/http://www.viper.dk:80/wow/files/AlternativeQuestLog_v1.34.zip)
|Displays quest levels, with elite prefix. Also removes the double space and expands the length of the quest titles. [Info](https://web.archive.org/web/20061126084315/http://www.viper.dk/wow/#AlternativeQuestLog)
|-
|[AltInvite](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Allows alt-clicking on a user name in chat to invite him/her in the group.
|-
|[AmmoExchange](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AmmoExchange_v1.0)
|Simplifies swapping thorium cartridges for arrows.
|-
|[AmmoSwap](https://web.archive.org/web/20060628190445if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4279/AmmoSwap.zip)
|Allows you to swap between sets of PvP or PvE ammo in your ammobag/quiver (/as).
|-
|[AMThaddius](https://web.archive.org/web/20061111020409if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/5104/AMThaddius-2.9a.zip)
|Thaddius helper mod for Power Surge notification and positioning during Polarity Shifts (/amt).
|-
|[Anathema Hunter](https://web.archive.org/web/20060715185155if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/3056/Anathema%20Hunter%20Mod%20Pack%20v151.zip)
|Anathema Hunter Mod Pack
|-
|[Anathema Warrior](https://web.archive.org/web/20060618201245if_/http://www.shaggi.net:80/wow/dload.php?action=download&file_id=34&amp;sid=260e85523db3b13346bd6fdc5e4b5514)
|Anathema Warrior Mod Pack.
|-
|[Angler](https://web.archive.org/web/20061117122325if_/http://www.wowace.com:80/files/Angler/Angler-r592.zip)
|Fishing made easy
|-
|[AnkhCooldownTimer](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AnkhCooldownTimer_v1.7.0)
|Tracks Reincarnation and related timers (Shamans).
|-
|[AnsweringMachine](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AnsweringMachine_v1.11)
|Reminds you of missed messages after AFK.
|-
|[Antagonist](https://web.archive.org/web/20061113013155if_/http://www.wowace.com:80/files/Antagonist/Antagonist-r13860.zip)
|Tracks enemy casting times, buffs and cooldowns. [Info](https://web.archive.org/web/20061030214922/http://www.wowace.com/wiki/Antagonist)
|-
|[Antiafk](https://web.archive.org/web/20060622012536if_/http://downloadmod.worldofwar.net:80/upload/ui/1145865694Werwolf_Interface_Collection_2.3%20-%2011000.zip)
|A Anti-AFK Script (/aafk).
|-
|[AntiDaze](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AntiDaze_v0.7)
|Cancels Daze effects on hunters.
|-
|[AQAutoMount](https://web.archive.org/web/20060622005600if_/http://downloadmod.worldofwar.net:80/upload/ui/1148365773ShadowcryUI.zip)
|Automatically use a Qiraj Resonating Crystal instead of your normal mount when in Ahn'Qiraj.
|-
|[AQInfo](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AQInfo_v1.22)
|Explains loot in AQ40 (scarabs, idols, etc.).
|-
|[ArcaneBar](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Adds a casting bar to the PlayerFrame.
|-
|[ArcanePartyBars](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ArcanePartyBars_v4.0)
|Displays cast bars of group members.
|-
|[Arcanum](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Arcanum_v0.101)
|Helps unload the interface for mages.
|-
|[Archaeologist](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Archaeologist_v2.92)
|Configures standard frames, icons, buffs, etc. (/arch) [Info](https://web.archive.org/web/20061014171745/http://www.wowwiki.com/Archaeologist)
|-
|[ArchiTotem](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ArchiTotem_v1.3)
|Shaman: totem bar with all totems on 4 buttons.
|-
|[ArcHUD](https://web.archive.org/web/20060717201213if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2200/BasicUI.zip)
|Combat HUD based on NurfedHUD (/archud).
|-
|[ArcHUD2](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ArcHUD2_r12186)
|Adds a combat HUD to your UI, showing player/target/pet hp and mana/rage/whatever as rings centered on your screen. [Info](https://web.archive.org/web/20060822090450/http://ui.worldofwar.net/ui.php?id=1950)
|-
|[ArgentDawnGrinder](https://web.archive.org/web/20070105230543if_/http://uifiles.worldofwar.net:80/upload/ui/ADGrinder17_20061028.zip)
|Keeps track of Argent Dawn faction.
|-
|[Aristocraft](https://web.archive.org/web/20061129185330if_/http://downloadmod.worldofwar.net:80/upload/ui/1155900064Aristocraft.zip)
|Creates a tracker for crafting materials similar to Blizzard's quest tracker.
|-
|[ArjLib](https://web.archive.org/web/20060710052829if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/3822/arjLib-v13.zip)
|Function library for creating better, more simple macros. [Info](https://web.archive.org/web/20060617193053/http://www.curse-gaming.com/en/wow/addons-3822-1-arjlib.html)
|-
|[ArmorCraft](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ArmorCraft_v1.8a)
|Assists in choosing best armor for professions.
|-
|[ArmorMeter](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ArmorMeter_v0.3)
|Shows effects of armor-reducing spells.
|-
|[AshenStaff LifeAlert](https://web.archive.org/web/20061110114454if_/http://uifiles.worldofwar.net:80/upload/ui/1157466076AshenStaff_LifeAlert_v1.3.zip)
|Plays a heartbeat sound alert when a party member's health falls below a specified threshold (/la).
|-
|[AsmoHonorRole](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AsmoHonorRole_v1.8.1)
|Monitors Honor and Keel (Titan).
|-
|[AsmoMOD](AsmoMOD)
|Automates many functions, including PvP. [Info](https://web.archive.org/web/20060909051700/http://ui.worldofwar.net/ui.php?id=2721)
|-
|[Aspected](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Aspected_v0.2)
|Uses standard form-changing panels for Shamans, Priests, Hunters.
|-
|[AssistMe](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Assist Tracking and Auto-Assist.
|-
|[AthenesPlayerNotes](https://web.archive.org/web/20061110114257if_/http://uifiles.worldofwar.net:80/upload/ui/1156639016AthenesPlayerNotesv.1.2.zip)
|Lets you store comments on players, and quickly check players for earlier comments.
|-
|[Atlas](Atlas)
|Shows dungeon maps, boss loot, quest chains. [Info](https://web.archive.org/web/20061027140651/http://ui.worldofwar.net/ui.php%3Fid%3D400)
|-
|[AtlasLootEnhanced](https://web.archive.org/web/20061127093416if_/http://downloadmod.worldofwar.net:80/upload/ui/1160616829AtlasLoot%20Enhanced%20v1.19.03.zip)
|Shows the possible loot from the bosses. [Info](https://web.archive.org/web/20061029152306/http://ui.worldofwar.net:80/ui.php?id=2613)
|-
|[Atlas_HQ_Pack](https://web.archive.org/web/20061023004358if_/http://downloadmod.worldofwar.net:80/upload/ui/1160630089AtlasHqPack1.28.zip)
|High-quality maps for Atlas. [Info](https://web.archive.org/web/20070416030308/http://ui.worldofwar.net/ui.php?id=3324)
|-
|[AtlasOfAzeroth](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AtlasOfAzeroth_v0.1.4)
|Alternative map + flight map.
|-
|[Attack_bar](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Attack_bar_v4.06)
|Displays attack duration.
|-
|[AttackTip](https://web.archive.org/web/20060413225602if_/http://www.emerald-order.com:80/wow/download/download.php?plugin=Emerald-UI)
|Adds additional info to all spell tooltips telling the spell's DPS, and mana efficiency.
|-
|[AuctioneerPack](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AuctioneerPack_v3.9.0.1063)
|Simplifies auction trading, shows item info. [Info](https://web.archive.org/web/20061124040131/https://www.auctioneeraddon.com/)
|-
|[AuctionFilterPlus](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection)
|Adds flyout filters and other features to the auction house. [Info](https://web.archive.org/web/20061028031039/http://ui.worldofwar.net/ui.php?id=1512)
|-
|[AuctionLink](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AuctionLink_v2.0)
|Adds item links in auction search.
|-
|[AuctionSort](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AuctionSort_v1800.1)
|Additional sorting options in auction frame.
|-
|[AuldLangSyne](AuldLangSyne)
|Improved friends/ignore window with notes.
|-
|[AutoAttack](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AutoAttack_r12465)
|Automates class-specific attack behaviors.
|-
|[AutoBar_r14441](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AutoBar_r14441)
|Adds quick access to food, potions, scrolls. [Info](https://web.archive.org/web/20061129051202/http://www.curse-gaming.com/en/wow/addons-4430-1-autobar-toadkiller.html)
|-
|[AutoBar.2006.03.31](https://web.archive.org/web/20060407221349if_/http://64.168.251.69:80/wow/AutoBar.2006.03.31.zip)
|Configurable set of buttons that seeks out configured items in your pack for use. Intended primarily for consumables. [Info](https://web.archive.org/web/20060407221425/http://64.168.251.69/wow/autobar.html)
|-
|[AutoBindOnPickup](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Allows you to bypass the Bind on Pickup box when not in a group.
|-
|[AutoBuff](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AutoBuff_v11200-3)
|Monitors and updates buffs automatically (/autobuff). [Info](https://web.archive.org/web/20061016021129/http://ui.worldofwar.net/ui.php?id=1475)
|-
|[AutoBuffDruid](https://web.archive.org/web/20060716232225if_/http://downloadmod.worldofwar.net:80/upload/ui/1150981213AutoBuffDruid_v3_2.zip)
|Automatically casts various buffs on Druids, if enabled and needed. [Info](https://web.archive.org/web/20061016020545/http://ui.worldofwar.net/ui.php?id=2235)
|-
|[AutoCL](https://web.archive.org/web/20061127093959if_/http://downloadmod.worldofwar.net:80/upload/ui/1157667885autoCL1.1.zip)
|Addon for Wow Web Stats. [Info](https://web.archive.org/web/20061123130732/http://www.lossendil.fr/serendipity/)
|-
|[AutoDecline](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AutoDecline_v1.3)
|Auto-rejects group invites, guild invites, duels.
|-
|[AutoDing](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AutoDing_v0.8)
|Notifies in chat when you level up.
|-
|[AutoDM](https://web.archive.org/web/20060705212426if_/http://downloadmod.worldofwar.net:80/upload/ui/1151866434AutoDM.rar)
|Automatically detects magic on your target when you select it. [Info](https://web.archive.org/web/20061029065439/http://ui.worldofwar.net/ui.php?id=2732)
|-
|[AutoEmote](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AutoEmote_v1.0)
|Sends automatic emotes in response to events.
|-
|[AutoFollow](https://web.archive.org/web/20061028151712if_/http://downloadmod.worldofwar.net:80/upload/ui/1160132677AutoFollow.rar)
|Uses a tell to have another player /follow you.
|-
|[AutoGrats](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AutoGrats_v2.0)
|Auto-greetings for leveling up (/grats).
|-
|[AutoGroup](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AutoGroup_v1.12.1)
|Auto-accepts group invites from friends/guild.
|-
|[AutoHideBar](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AutoHideBar_v1.4)
|Auto-retractable bar for consumables.
|-
|[AutoInnerFire](https://web.archive.org/web/20060828144225if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/1585/AutoInnerFire-1.5.zip)
|Automatically casts inner fire if you need on movement
|-
|[AutoInvite](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AutoInvite_v138)
|Auto-invites players who request it (with filters).
|-
|[AutoMageBuff](https://web.archive.org/web/20061109231511if_/http://uifiles.worldofwar.net:80/upload/ui/1149617849AutoMageBuff3.2.rar)
|Makes mage self-buffs a bit easier (/amb).
|-
|[Automaton](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Automaton_r18593)
|Automates multiple functions (Ace2).
|-
|[AutoPetFeed](https://web.archive.org/web/20060515032530if_/http://www.wowguru.com:80/ui/archives/universal-essentials-217-1530.zip)
|Automatic Pet Feed.
|-
|[AutoPlates](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AutoPlates_v1.0)
|Toggles raid target icons above enemies.
|-
|[AutoProfit](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AutoProfit_v3.11)
|Adds button to sell all gray items.
|-
|[Autorank](https://web.archive.org/web/20060622010708if_/http://downloadmod.worldofwar.net:80/upload/ui/1150599248Enlightened%20UI.zip)
|Automatically casts the appropriate spell rank for buffs on lower level targets.
|-
|[AutoReady](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AutoReady_r91)
|Auto-ready check in raids.
|-
|[AutoRespond](https://web.archive.org/web/20060710053738if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2605/AutoRespond_1.53.zip)
|Automatically sends a whispered response to someone who whispers you using the prescribed string.
|-
|[AutoSelect](https://web.archive.org/web/20060622005600if_/http://downloadmod.worldofwar.net:80/upload/ui/1148365773ShadowcryUI.zip)
|Automatically selects normal NPC action (/as).
|-
|[AutoShoutOut](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AutoShoutOut_v1.15.6)
|Notifies in chat about low HP/MP.
|-
|[AutoTarget](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AutoTarget_v1.2)
|Auto-selects targets based on criteria.
|-
|[AutoTurnin](https://web.archive.org/web/20061113063400if_/http://www.wowace.com:80/files/AutoTurnin/AutoTurnin-r14124.zip)
|AutoCompletes ZG Coin, PVP, Felwood, and other quests.
|-
|[AutoTrinketBar](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/AutoTrinketBar_v1.231)
|Adds buttons for trinkets.
|-
|[AutoTrinketLoader](https://web.archive.org/web/20060710053621if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4223/atl.0.21.11000.zip)
|Trinket CD managements & auto swap
|-
|[AvgXP Deluxe](https://web.archive.org/web/20060520201159if_/http://downloadmod.worldofwar.net:80/upload/ui/1143884598AvgXPDeluxe18.zip)
|Calculates Average Exp Gain.
|-
|[AV](https://web.archive.org/web/20060615220543if_/http://downloadmod.worldofwar.net:80/upload/ui/1150011407AV%20addonpack.zip)
|AV addon pack.
|-
|[AVMod](https://web.archive.org/web/20061110112349if_/http://uifiles.worldofwar.net:80/upload/ui/AV%20Mod_20061018.zip)
|AVMod addon pack.
|-
|[AwayNotificationSystem](https://web.archive.org/web/20070510125729if_/http://www.viper.dk:80/wow/files/AwayNotificationSystem_v1.21.zip)
|Will write a message to your party/raid/guild, that you've gone AFK due to having been idle for too long. [Info](https://web.archive.org/web/20061126084315/http://www.viper.dk/wow/#AwayNotificationSystem)
|-
|[Bag_Status_Meters](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Bag_Status_Meters_v1.5.18/Bag_Status_Meters)
|Tracks inventory space.
|-
|[Bagman](https://web.archive.org/web/20061109225512if_/http://uifiles.worldofwar.net:80/upload/ui/1160504919Bagman.zip)
|Organize your items in your bags (/bam). [Info](https://web.archive.org/web/20061027184658/http://ui.worldofwar.net/ui.php?id=3262)
|-
|[Bagnon](Bagnon)
|Large combined bags and bank with remote view.
|-
|[Bags_and_merchants](https://web.archive.org/web/20060613160152if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/1890/bags_and_merchants%201_2a.zip)
|opens/closes all bags when at merchant (instead of only the bagpack).
|-
|[BagSlots](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BagSlots_r16778)
|Shows used/total bag slots.
|-
|[BagsOpen](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BagsOpen_v1.1.1)
|Keeps bags open after opening.
|-
|[BagSpace](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BagSpace_v1.0)
|Shows free slots in main bag.
|-
|[8Ball](https://web.archive.org/web/20061110111455if_/http://uifiles.worldofwar.net:80/upload/ui/11598242908ball.zip)
|Shakes the magic 8ball (/8ball). Yes/No question recognition.
|-
|[Banana](BananaBar)
|Manages raid icons, hunter tags, etc.
|-
|[BankItems](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BankItems_v11000)
|Remote bank viewing (/bi).
|-
|[BankStatement](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|View the contents of your bank, anywhere in the world, including quantity of each item (/bs).
|-
|[BanzaiAlert](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BanzaiAlert_r17467)
|Audible/visual aggro warning.
|-
|[BarOptions](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Lets you configure extra options for the Main Bar and Action bars.
|-
|[Bartender2](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/Bartender2_pack.zip)
|Fully customizable action bars. [Info](https://web.archive.org/web/20061119142319/http://wowace.com:80/wiki/Bartender2)
|-
|[BarTracker](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BarTracker_v0.57)
|Monitors CP, mana, energy changes graphically.
|-
|[BasicUI](https://web.archive.org/web/20060717201213if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2200/BasicUI.zip)
|BasicUI is Bl4ckSh33p's addon compilation. 
|-
|[BattleCry](https://web.archive.org/web/20060710053659if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4186/BattleCry_1_4_1.zip)
|Enables random emotes/macros on spell-cast
|-
|[BattlefieldCommander2](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BattlefieldCommander2_v2.3)
|A combination of the stock BF minimap, some handy extensions, and Battlefield 2. (Usage: /bfc). [Info](https://web.archive.org/web/20061028120712/http://ui.worldofwar.net/ui.php?id=1935)
|-
|[Battle Planner](https://web.archive.org/web/20060622010952if_/http://downloadmod.worldofwar.net:80/upload/ui/1148463905Guild%20UI%20Pack.zip)
|Mod for sharing battle plans.
|-
|[BBTrader](https://web.archive.org/web/20060725221943if_/http://www.kehlet.cx:80/WoW/BBTrader.zip)
|Export your trade skills to BBCode and share with Itemstats-enabled phpBB forums.
|-
|[BEB](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BEB_v0.87)
|Moveable experience bar replacement. Fully customizable.
|-
|[bc_AmmoWarning](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/bc_AmmoWarning_v1.06)
|Warns when ammo runs out.
|-
|[bc_AspectMenu](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/bc_AspectMenu_v1.1)
|Switches hunter aspects from minimap.
|-
|[bc_TrackingMenu](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/bc_TrackingMenu_v1.39)
|Switch search options on minimap.
|-
|[Beastmaster](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Beastmaster)
|Hunter pet skills management.
|-
|[BeneCast](https://web.archive.org/web/20060718023658if_/http://downloadmod.worldofwar.net:80/upload/ui/1152692933BeneCast%202.1.2%20beta%20Wintrow%206.79.zip)
|Adds buttons for friendly spells near player frames. [Info](https://web.archive.org/web/20061231152433/http://ui.worldofwar.net/ui.php?id=2375)
|-
|[BerserkMeter](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BerserkMeter_v1.04)
|Tracks Berserk ability effectiveness.
|-
|[BerserkerRage](https://web.archive.org/web/20060620025428if_/http://downloadmod.worldofwar.net:80/upload/ui/1150117241BerserkerRage%201.91.zip)
|An AddOn to simplify a Warrior's Life. [Info](https://web.archive.org/web/20061231151714/http://ui.worldofwar.net/ui.php?id=1903)
|-
|[BestBuff](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BestBuff_v1.7)
|Selects best buff rank based on target level.
|-
|[BetterItemCount](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Displays #.#k instead of * for counts > 999.
|-
|[BetterKeyBinding](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/BetterKeyBinding.zip)
|A better key binding interface.
|-
|[BetterWaypoints](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BetterWaypoints_v2.51)
|Shows distance and direction to quests.
|-
|[BFH_various](https://web.archive.org/web/20060614091620if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4219/BFH_various.1.3.zip)
|Best Friend - Healer: various functions (/bfh).
|-
|[bFriendsFrame](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/bFriendsFrame_20120731-044848)
|Logs friends' login/logout events.
|-
|[BGAlerts](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BGAlerts_v1.1)
|BG notifications (sound, text).
|-
|[BGAssist](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BGAssist_2006.09.19)
|Automates BG functions. [Info](https://web.archive.org/web/20060225083025/http://64.168.251.69/wow/bgassist.html)
|-
|[BGBuddy](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BGBuddy_v2.2.4)
|BG-specific features.
|-
|[BGFlag](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BGFlag_v1.12)
|Shows who carries the flag.
|-
|[BGHealer](https://web.archive.org/web/20061110111253if_/http://uifiles.worldofwar.net:80/upload/ui/1156717466BGHealer.zip)
|BG healer for SmartHeal (/bgh). 
|-
|[BGinvite](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BGinvite_v2.4.5.1)
|Auto-invites for BGs.
|-
|[BgMap](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BgMap_v1.0)
|Opens BG map upon port.
|-
|[BGMinimapPlayerTracker](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BGMinimapPlayerTracker_v1.1a)
|Shows BG mini-map player info (hunter).
|-
|[BGQueueJoin](https://web.archive.org/web/20060622004216if_/http://downloadmod.worldofwar.net:80/upload/ui/1145638908Addme.zip)
|Makes joining queue for battlegrounds just a bit easier.
|-
|[BGSoundAlerts](https://web.archive.org/web/20060627204115if_/http://downloadmod.worldofwar.net:80/upload/ui/1150115848BGSoundAlerts15Beta.zip)
|Add vocal (spoken) sounds to important events in the Arathi Basin, Warsong Gulch and Alterac Valley battlegrounds. [Info](https://web.archive.org/web/20060713145423/http://ui.worldofwar.net/ui.php?id=1837)
|-
|[BGSwitch](https://web.archive.org/web/20060711104432if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/3696/BGSwitch_v5.2.zip)
|Never miss a battleground again, get fullscreen and soundplay on confirm! (/BGS)
|-
|[BG's UI](https://web.archive.org/web/20060622011509if_/http://downloadmod.worldofwar.net:80/upload/ui/1144937742BG's%20UI%20Pack%201.1.rar)
|BG's UI pack.
|-
|[BhaldieInfoBar](https://web.archive.org/web/20061230155846if_/http://wow.kingofnothin.net:80/downloads/infobar/BhaldieInfoBarv1.10.6.1.zip)
|Displays information about different aspects of the game. [Info](https://web.archive.org/web/20060714054512/http://wow.kingofnothin.net/infobar.html)
|-
|[BIB_Aggro](https://web.archive.org/web/20061230160932if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanAggro.zip)
|Aggro detection, reporting and more.
|-
|[BIB_AggroAlert](https://web.archive.org/web/20061230161420if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanAggroAlert.zip)
|A module to show your target's target.
|-
|[BIB_AlarmClockWrangler](https://web.archive.org/web/20061230155805if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanAlarmClockWrangler.zip)
|Alarm clock plug-in.
|-
|[BIB_AllPlayed](https://web.archive.org/web/20061230160615if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanAllPlayed.zip)
|Shows time played for all characters.
|-
|[BIB AsmoHonorRole](https://web.archive.org/web/20061230155741if_/http://wow.kingofnothin.net:80/downloads/plugins/AsmoHonorRole.zip)
|Tracks daily honor and kills by your character.
|-
|[BIB_Aspect](https://web.archive.org/web/20061230155752if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanAspect.zip)
|Toggle Hunter Aspects.
|-
|[BIB_Atlas](https://web.archive.org/web/20061230155505if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanAtlas.zip)
|Provides an Atlas entry.
|-
|[BIB_Auctions](https://web.archive.org/web/20061230155830if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanAuctions.zip)
|Shows bids and your auctions while you're away from the AH.
|-
|[BIB_BG](https://web.archive.org/web/20061230161359if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanBG.zip)
|Battleground helper.
|-
|[BIB_BuffReagent](https://web.archive.org/web/20061230160921if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanBuffReagent.zip)
|Manage yor Reagents you need for buffs.
|-
|[BIB_CombatInfo](https://web.archive.org/web/20061230161408if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanCombatInfo.zip)
|Combat stats in a central location.
|-
|[BIB DamageMeters](https://web.archive.org/web/20061230160547if_/http://wow.kingofnothin.net:80/downloads/plugins/DamageMeters.zip)
|Displays accumulated damage totals for you and nearby players.
|-
|[BIB DepositBox](https://web.archive.org/web/20061230160105if_/http://wow.kingofnothin.net:80/downloads/plugins/DepositBox.zip)
|elps you save money for that all important purchase.
|-
|[BIB_DPS](https://web.archive.org/web/20061230161535if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanDPS.zip)
|Adds a DPS meter.
|-
|[BIB_Friends](https://web.archive.org/web/20061230155240if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanFriends.zip)
|A simple friends list.
|-
|[BIB_ItemRack](https://web.archive.org/web/20061230161432if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanItemRack.zip)
|Plugin for ItemRack.
|-
|[BIB_Log](https://web.archive.org/web/20061230161155if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanLog.zip)
|Toggle the built in logging functions on or off.
|-
|[BIB_LootType](https://web.archive.org/web/20061230155539if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanLootType.zip)
|Adds group loot information.
|-
|[BIB_MacroMenu](https://web.archive.org/web/20061230161606if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanMacroMenu.zip)
|Provides the player with a menu for macros.
|-
|[BIB_Mail](https://web.archive.org/web/20061230160346if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanMail.zip)
|Let you know you have mail. Also remembers any Auction alerts.
|-
|[BIB_PortMenu](https://web.archive.org/web/20061230161553if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanPortMenu.zip)
|A hearth/inn tracker and Mage porting drop down list.
|-
|[BIB_PvPStatus](https://web.archive.org/web/20061230155318if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanPvPStatus.zip)
|A module to show PvP Status and Cooldown.
|-
|[BIB_Quests](https://web.archive.org/web/20061230160419if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanQuests.zip)
|A quest list.
|-
|[BIB_Recap](https://web.archive.org/web/20061230160449if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanRecap.zip)
|Plugin for Recap.
|-
|[BIB_Skills](https://web.archive.org/web/20061230160829if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanSkills.zip)
|A simple skills list.
|-
|[BIB_Tracker](https://web.archive.org/web/20061230161137if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanTracker.zip)
|Toggle Tracking.
|-
|[BIB_TradeCoolDown](https://web.archive.org/web/20061230160516if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanTradeCoolDown.zip)
|Lists tradeskill cooldowns across all characters.
|-
|[BIB_WindFury](https://web.archive.org/web/20061230155940if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanWindFury.zip)
|Displays WindFury stats.
|-
|[BIB_XPStatus](https://web.archive.org/web/20061230161647if_/http://wow.kingofnothin.net:80/downloads/plugins/BIB_TitanXPStatus.zip)
|A module to display a summary of currentXP, totalXP, percentageXP and restedXP.
|-
|[BhaldieRecLevel](https://web.archive.org/web/20061230155605if_/http://wow.kingofnothin.net:80/downloads/reclevel/BMRecLevelv2.9.1.zip)
|Displays the zone level range of the zone you are in and also gives you a suggested zone to be in. [Info](https://web.archive.org/web/20060709094525/http://wow.kingofnothin.net/recommend.html)
|-
|[BibMod](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BibMod_v4)
|Configures position and size of UI elements.
|-
|[BigMacro](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BigMacro_v1.1)
|Stores up to 30 macros with hotkeys.
|-
|[BigMinimap](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BigMinimap_v0.9)
|Enlarges mini-map with shortcut.
|-
|[BigTrouble](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BigTrouble_r17372)
|Hunter: cast bar for AimedShot and AutoShot.
|-
|[BigWigs](BigWigs)
|Boss timers and alerts.
|-
|[BlindFlashCount](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BlindFlashCount_v1.2)
|Shows powder count on ability icons (Rogue).
|-
|[BlockSalvation](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BlockSalvation_v1.0)
|Auto-cancels Salvation buff (Warrior).
|-
|[BoldBuffCounter](https://github.com/suetema/AddOns)
|Provides information about the amount of buffs you have (/bbc help).
|-
|[BoldCommon](https://github.com/suetema/AddOns)
|Boldi's collection of semi useful stuff (/bc).
|-
|[BoldLazyWarrior](https://github.com/suetema/AddOns)
|Boldi's warrior rotations (/blw).
|-
|[BoldMasterLooter](https://github.com/suetema/AddOns)
|Boldi's master loot helper (/meep help).
|-
|[BoldNotPaladin](https://github.com/suetema/AddOns)
|Boldi's checker of paladin things for non-paladins (/bnp).
|-
|[BoldPaladin](https://github.com/suetema/AddOns)
|Boldi's misc paladin stuff (/bp).
|-
|[BoldUnBuffer](https://github.com/suetema/AddOns)
|Boldi's remover of unwanted buffs (warriors/paladins).
|-
|[BoldWarrior](https://github.com/suetema/AddOns)
|Boldi's TankBuddy replacement (/bwhelp).
|-
|[BombHide](https://web.archive.org/web/20060615220543if_/http://downloadmod.worldofwar.net:80/upload/ui/1150011407AV%20addonpack.zip)
|Hide the UI when launching  an action that requires you to select a spot in the play field (/bh).
|-
|[Bongos](Bongos)
|Customizable action panels.
|-
|[BonusScanner](https://web.archive.org/web/20060716231931if_/http://downloadmod.worldofwar.net:80/upload/ui/1152269694BonusScanner.zip)
|Scans your Equipment for cumulative item bonuses and sums them up. [Info](https://web.archive.org/web/20060616234408/http://ui.worldofwar.net/ui.php?id=1461)
|-
|[BookEnchants](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BookEnchants_v1.1.0)
|Tooltip info about enchants and ZG enchants.
|-
|[BookOfCrafts](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BookOfCrafts_v11200a)
|Tracks learned recipes.
|-
|[BookStore](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BookStore_v2.0)
|Stores scanned book info. [Info](https://web.archive.org/web/20061119205704/http://wow-kaboom.com/bookstore/)
|-
|[Bookworm](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Bookworm_v0.13)
|Capture location and contents of in-game books
|-
|[BossBlock](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BossBlock_r15201)
|Suppresses boss mod spam.
|-
|[BossKey](https://web.archive.org/web/20061110111341if_/http://uifiles.worldofwar.net:80/upload/ui/1159199817BossKey-0.9.3.zip)
|Having trouble hiding your addiction from your employer? Use this old skool style boss key with modern styling to save face at work (/bk). [Info](https://web.archive.org/web/20061029152532/http://ui.worldofwar.net/ui.php?id=3183)
|-
|[brDamageText](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/brDamageText_v1.55b)
|Displays damage numbers over target portrait.
|-
|[BreakSV](https://web.archive.org/web/20060507052247if_/http://www.vigilance-committee.org:80/wow/downloads/BreakSV-0.3-11000.zip)
|Test scripts to demonstrate SavedVariables.lua bugs
|-
|[Broadcast](https://web.archive.org/web/20060622011653if_/http://downloadmod.worldofwar.net:80/upload/ui/1145982722CouncilOfAzerothModPack.zip)
|This addon simplifies broadcasting messages to other clients.
|-
|[brQLog](https://web.archive.org/web/20060718120954if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/1538/brQLog_v1.4.zip)
|Adds level and color information to your Quests.
|-
|[BrunildeUnits](https://web.archive.org/web/20060622010824if_/http://downloadmod.worldofwar.net:80/upload/ui/1145290209BrunildeUnits-1.0.zip)
|A frame with all the party/raid targets. [Info](https://web.archive.org/web/20060909114500/http://ui.worldofwar.net/ui.php?id=2455)
|-
|[Bubbles](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Bubbles_v0.3)
|Enemy targets as speech bubbles.
|-
|[BuddySync](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BuddySync)
|Syncs friends/ignore list across characters.
|-
|[BuffAhoy](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BuffAhoy_v1.95)
|Raid buffing helper.
|-
|[BuffOptions](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Provides additional options for buffs display.
|-
|[BuffOrg](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BuffOrg_v1.0)
|Simplifies raid buffing.
|-
|[BuffSort](https://web.archive.org/web/20060613143628if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2201/BuffSort1.4.zip)
|Sorts buffs alphabetically or by duration (/buffsort).
|-
|[BuffTimers](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BuffTimers_v1.12)
|Shows buff durations in seconds.
|-
|[BuffWatch](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BuffWatch_v1.15)
|Displays raid buffs/debuffs.
|-
|[BugSack](BugSack)
|Toss those bugs inna sack.
|-
|[ButtonholeAd](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ButtonholeAd_v0.2)
|Combines minimap buttons into one.
|-
|[BuyEmAll](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/BuyEmAll_v2.2)
|Buys multiple items at vendor with Shift.
|-
|[BuyPoisons](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/BuyPoisons.zip)
|Automates poison reagents purchase.
|-
|[C](https://web.archive.org/web/20060615220543if_/http://downloadmod.worldofwar.net:80/upload/ui/1150011407AV%20addonpack.zip)
|Common functions and an invisible tooltip.
|-
|[Calculator](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Calculator_v11000.0)
|In-game calculator.
|-
|[CallOfElements](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/CallOfElements.v2.7.zip)
|Shaman: customizable totem set.
|-
|[CallToArms](https://web.archive.org/web/20061027174212if_/http://downloadmod.worldofwar.net:80/upload/ui/1160431754CallToArms_R12.zip)
|Tracks/filters LFG channel info. [Info](https://web.archive.org/web/20061020033516/http://ui.worldofwar.net:80/ui.php?id=937)
|-
|[CandyDice](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CandyDice_r117)
|Displays cooldowns for rogues.
|-
|[Carnival_EnemyCastBar](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Carnival_EnemyCastBar_v1.6-f-b)
|Enemy cast bars.
|-
|[Carnival_HunterTrapWarn](https://web.archive.org/web/20060622012349if_/http://downloadmod.worldofwar.net:80/upload/ui/1147742767Carnival_HunterTrapWarning_1.0.zip)
|Warn players when hunters drop traps (/chtw).
|-
|[Carnival_ArathiBasinTimer](https://web.archive.org/web/20060619124801if_/http://downloadmod.worldofwar.net:80/upload/ui/1150076501Carnival_ArathiBasinTimers_1.0.0_ALPHA.zip)
|Shows timers for the different attack points within Arathi Basin (/cabt). [Info](https://web.archive.org/web/20060616131823/http://ui.worldofwar.net/ui.php?id=2717)
|-
|[Cartographer](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Cartographer_v2.0)
|Map with coordinates, unexplored areas, dungeons.
|-
|[CashNotify](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CashNotify_v1.31)
|Logs money received/spent.
|-
|[CasterStats](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CasterStats)
|Shows spell damage bonuses.
|-
|[CastingBarTime](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CastingBarTime_v0.1)
|Cast time display.
|-
|[CastOnClick](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CastOnClick_v1.3)
|Casts spells with mouse clicks.
|-
|[CastOptions](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Provides enchanced casting options such as auto self casting.
|-
|[CastPartyCore](https://web.archive.org/web/20060703182556if_/http://downloadmod.worldofwar.net:80/upload/ui/1151361669SexyUI.zip)
|Minimalistic party frame that allows binding of spells, actions and game functions to mouse clicks on the player/target/party/raid members.  Also includes Healomatic that aids healing classes with clickable spells.
|-
|[CastPartyGUI](https://web.archive.org/web/20060703182556if_/http://downloadmod.worldofwar.net:80/upload/ui/1151361669SexyUI.zip)
|GUI gives the user a GUI replacement of the standard Blizzard player/party/target frames, as well as additional features.
|-
|[CastPartyOptions](https://web.archive.org/web/20060703182556if_/http://downloadmod.worldofwar.net:80/upload/ui/1151361669SexyUI.zip)
|Options gives the user a GUI to change/modify the configuration of CastParty.
|-
|[CastPartyRaidGUI](https://web.archive.org/web/20060703182556if_/http://downloadmod.worldofwar.net:80/upload/ui/1151361669SexyUI.zip)
|Raid GUI allows the user to monitor selected raid units, with a CastParty style.
|-
|[CastProgress](https://web.archive.org/web/20060718023853if_/http://downloadmod.worldofwar.net:80/upload/ui/1152116218CastProgress.11100.03.zip)
|Enhancement/replacement for the casting bar. Replaces cast bar with timer text. [Info](https://web.archive.org/web/20060909113554/http://ui.worldofwar.net/ui.php?id=1540)
|-
|[CastTime](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Adds a timer (in seconds) to the casting bar.
|-
|[Catalyst](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Catalyst_r12981)
|Instantly loads different locations. [Info](https://web.archive.org/web/20060426014456/http://demonmagnet.com/elitistforum/viewtopic.php?p=4782)
|-
|[Caterer](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Caterer_r13140)
|Distributes water/food in raids (mages).
|-
|[CCWatch](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CCWatch_v11200.3)
|Timed enemy CC effects. [Info](https://web.archive.org/web/20060625044404/http://curse-gaming.com/en/wow/addons-2572-1-ccwatch.html)
|-
|[cEasyHealer](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/cEasyHealer_v3.7)
|Raid healer: shows damaged players.
|-
|[CEnemyCastBar_Natur](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CEnemyCastBar_Natur_v5.4.8)
|Enemy cast bar (target, boss).
|-
|[CensusPlus](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CensusPlus_v3.5.1)
|Server population stats.
|-
|[cgCrafty](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/cgCrafty_v2.0.14)
|Profession recipes search.
|-
|[ChannelClean](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ChannelClean_r14603)
|Auto-ignore spam chat.
|-
|[CharacterPaperdoll](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CharacterPaperdoll_v1.0)
|Enlarged character portrait.
|-
|[CharacterProfiler](https://web.archive.org/web/20061127094037if_/http://downloadmod.worldofwar.net:80/upload/ui/1158578895CharactersViewer_11000_2.73_Bundle.zip)
|Export Character Profiles for use out-of-game. [Info](https://web.archive.org/web/20061004184601/http://ui.worldofwar.net:80/ui.php?id=893)
|-
|[CharactersViewer](https://web.archive.org/web/20061127094037if_/http://downloadmod.worldofwar.net:80/upload/ui/1158578895CharactersViewer_11000_2.73_Bundle.zip)
|View the equipment and inventory of all your characters. ("/cv help").
|-
|[ChatAssist](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ChatAssist_v0.28)
|Chat customization.
|-
|[Chatbar](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Chatbar_v1.6)
|Quick channel switching.
|-
|[ChatCalc](https://web.archive.org/web/20060413225602if_/http://www.emerald-order.com:80/wow/download/download.php?plugin=Emerald-UI)
|Provide the user with a command-line calculator (/calc).
|-
|[ChatCast](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ChatCast_v1.41)
|Shorthand spell casting in chat.
|-
|[ChatCopy](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ChatCopy_v1.3)
|Stores chat history.
|-
|[ChatHighlight](https://web.archive.org/web/20061027222453if_/http://downloadmod.worldofwar.net:80/upload/ui/1160705437ChatHighlight-1.12.0.zip)
|Highlights specific words in chat. [Info](https://web.archive.org/web/20061230080123/http://ui.worldofwar.net/ui.php?id=1098)
|-
|[ChatIgnore](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ChatIgnore_v1.1)
|Adds ignore options to chat menu.
|-
|[ChatJustify](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ChatJustify_v1.0.1)
|Right-aligns chat window.
|-
|[ChatKeys](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ChatKeys_v1.53)
|Bind chat commands to keys.
|-
|[ChatLink](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ChatLink)
|Link items in chat.
|-
|[ChatLog](https://web.archive.org/web/20061027065318if_/http://downloadmod.worldofwar.net:80/upload/ui/1160663669ChatLog-1.2.6-11200.zip)
|Save chat history. 
|-
|[ChatMats](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ChatMats_v1.43)
|Craft material links in chat.
|-
|[ChatMOD](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ChatMOD_v105b)
|Advanced chat options (scroll, colors).
|-
|[Chatr](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Chatr_v0.3.9)
|Private messaging window.
|-
|[Chat Type Bindings](https://web.archive.org/web/20061112095449if_/http://www.viper.dk:80/wow/files/ChatTypeBindings_v1.21.zip)
|Will allow you to make direct key bindings for opening the different chat types. [Info](https://web.archive.org/web/20061126084315/http://www.viper.dk/wow/#ChatTypeBindings)
|-
|[ChannelManager](https://web.archive.org/web/20060628200028if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/551/Inc_UI_Adv_D50.6_11000.exe)
|Managing your channels.
|-
|[ChamorroUI](https://web.archive.org/web/20061110113214if_/http://uifiles.worldofwar.net:80/upload/ui/1160580632ChamorroUIv1.4.rar)
|Chamorro UI addon compilation.
|-
|[Chronometer](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Chronometer_r16931)
|Timer for buffs, debuffs, saps, etc.
|-
|[Chuck](https://web.archive.org/web/20060614091355if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2168/SexyUI1900r3.zip)
|Generates and posts random Chuck Norris facts (/chuck).
|-
|[ClassIcons](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ClassIcons_v1.12.0)
|Shows class icons on frames.
|-
|[ClassicTooltip](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ClassicTooltip_v1.12.0)
|Old-style tooltips.
|-
|[ClassViewer](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ClassViewer_v1.61)
|Shows class icons, attack speed (/clv).
|-
|[Clean](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Clean_v1.2)
|Quickly hide UI elements.
|-
|[CleanChat](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CleanChat_testversion15a)
|Removes [Party], [Raid], [Officer] and [Guild] prefix from chat messages. [Info](https://web.archive.org/web/20060404110511/http://www.curse-gaming.com/mod.php?addid=2029)
|-
|[CleanMinimap](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CleanMinimap_v2.8)
|Minimap options (move, resize).
|-
|[CleanPlayerFrame](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CleanPlayerFrame_v11200e)
|Enlarged player portrait, HP/Mana.
|-
|[ClickHeal](https://web.archive.org/web/20060901091321if_/http://downloadmod.worldofwar.net:80/upload/ui/1156884058ClickHeal-v1.44.01.zip)
|Click-to-heal interface. [Info](https://web.archive.org/web/20061016021105/http://ui.worldofwar.net/ui.php?id=1789)
|-
|[ClickTarget](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ClickTarget)
|Target selection via Ctrl+click in chat.
|-
|[Clique](Clique)
|Bind macros/spells to mouse clicks.
|-
|[Clock](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Clock)
|Simple in-game clock.
|-
|[ClosetGnome](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ClosetGnome_r17501)
|Gear/clothing change UI.
|-
|[cMinimapButtonBag](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/cMinimapButtonBag_v1.0)
|Minimap button for bags.
|-
|[cMinimapCoordinates](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/cMinimapCoordinates_v3)
|Coordinates display on mini-map.
|-
|[ColdFusionShell](https://web.archive.org/web/20060624142051if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2051/ColdFusionShell-0.1.2.0.zip)
|Shag's ColdFusionShell used for writing, editing, and executing custom Lua scripts in-game. Includes a indentation + syntax highlighting library. [Info](https://web.archive.org/web/20060624191451/http://www.curse-gaming.com/en/wow/addons-2051-1-coldfusionshell.html)
|-
|[Colorblind](https://web.archive.org/web/20060222012240if_/http://ui.worldofwar.net:80/upload/ui/1139022021Colorblind_v2.4.4.zip)
|Various UI Enhancements to make it easier to play for colorblind players.
|-
|[ColorCycle](https://web.archive.org/web/20060622005100if_/http://downloadmod.worldofwar.net:80/upload/ui/1148743136CoaAddons.rar)
|Allows you to change the colors of various UI elements to create effects such as glows, fades, or color-cycles.
|-
|[ColoredWhispers](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ColoredWhispers_v1.2)
|Colored whispers by class.
|-
|[ColoredWhoClasses](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ColoredWhoClasses_v1.0)
|Colors for "Who" window.
|-
|[Combatants](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Combatants_r16240)
|Shows who is in combat.
|-
|[CombatMonitor](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CombatMonitor_v2.0b)
|Combat statistics.
|-
|[CombatSentryGizmo](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CombatSentryGizmo_v0.76b)
|Enemy attack log.
|-
|[Combat Sound Unattached](https://web.archive.org/web/20061026202751if_/http://downloadmod.worldofwar.net:80/upload/ui/1160731214CombatSoundUnattached1.3.zip)
|Enhances your gaming experience by providing audio cues for various combat events. (/coms) [Info](https://web.archive.org/web/20061020190304/http://ui.worldofwar.net/ui.php?id=1311)
|-
|[CombatStats](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CombatStats_v3.76)
|Detailed combat stats.
|-
|[CombatZoom](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CombatZoom_v0.1)
|Changes camera distance during fight.
|-
|[Combine](https://web.archive.org/web/20061117122423if_/http://www.wowace.com:80/files/Combine/Combine-r12466.zip)
|guild and raid management system.
|-
|[Combustion](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Combustion)
|Mage: tracks Combustion spell timer.
|-
|[ComicsUI](https://web.archive.org/web/20060624160348if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/3134/Comics%20UI-1.10-2.exe)
|Comics user interface pack
|-
|[CompactComboBar](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CompactComboBar_v2.05)
|Small bars showing HP, Mana, Energy.
|-
|[CompareStats](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CompareStats_v1.2)
|Detailed stat comparison tooltip.
|-
|[Component](https://web.archive.org/web/20060719005826if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/1256/Component_2.1.zip)
|Assist with crafting activities, recipe database with component search and character crafting details.
|-
|[Confab](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Confab_v1.13.1)
|Word input window settings.
|-
|[ConsisTint](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ConsisTint)
|Remembers chat channel colors.
|-
|[ConsumeBar](https://github.com/fastbond/wow-1.12.1-addons/tree/master/ConsumeBar)
|Adds an additional bar for consumables.
|-
|[coolDown](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/coolDown)
|Generic cooldown timer.
|-
|[CooldownCount](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CooldownCount_r16491)
|Alternative cooldown display.
|-
|[CooldownCountGypsy](https://web.archive.org/web/20060703182556if_/http://downloadmod.worldofwar.net:80/upload/ui/1151361669SexyUI.zip)
|CooldownCount for Gypsy.
|-
|[CooldownCountAutoBar](https://web.archive.org/web/20060703182556if_/http://downloadmod.worldofwar.net:80/upload/ui/1151361669SexyUI.zip)
|CooldownCount for AutoBar.
|-
|[CooldownHud](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CooldownHud)
|During combat will show icons in an arc above your character for spells currently awaiting cooldown. [Info](https://web.archive.org/web/20060214102052/http://64.168.251.69/wow/cooldownhud.html)
|-
|[CooldownTimers](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CooldownTimers_v2.11)
|Warnings for cooldowns.
|-
|[CorpseInfo](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Corpseinfo_testversion13a)
|Adds info to corpse tooltips.
|-
|[CosmosUI](https://web.archive.org/web/20061215132136/http://d.cosmosui.org/files/distros/Cosmos_Release.zip)
|Cosmos AddOns Collection. [Info](http://web.archive.org/web/20060528053233/http://www.wowguru.com/ui/183/cosmos-ui/)
|-
|[Cosmos_Devtools](https://web.archive.org/web/20061205102638if_/http://www.cosmosui.org:80/files/distros/Cosmos_Devtools.zip)
|Cosmos devtools pack. Addons and libraries for debugging and development. [Info](https://web.archive.org/web/20061117083237/http://www.wowwiki.com/Cosmos_Addons)
|-
|[CouncilOfAzeroth](https://web.archive.org/web/20060622011653if_/http://downloadmod.worldofwar.net:80/upload/ui/1145982722CouncilOfAzerothModPack.zip)
|CouncilOfAzeroth Mod Pack.
|-
|[CountDoom](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CountDoom_v0.48c)
|Warlock: spell timers.
|-
|[CountMoon](https://web.archive.org/web/20060716231651if_/http://downloadmod.worldofwar.net:80/upload/ui/1151740472CountMoon0.45a.zip)
|On-screen timers for Druids. [Info](https://web.archive.org/web/20061016020331/http://ui.worldofwar.net/ui.php?id=2561)
|-
|[CP Tracker](https://web.archive.org/web/20060715235746if_/http://tuatara.rezgeek.com:80/WoW/CPTracker/download/CPTracker%20v1.2.2.zip)
|Track players honor so that you can have an easier time figuring out how your fellow players are doing on PvP (/cpt). [Info](https://web.archive.org/web/20060826140414/http://tuatara.rezgeek.com/WoW/CPTracker/)
|-
|[Critastic](https://web.archive.org/web/20061027065205if_/http://downloadmod.worldofwar.net:80/upload/ui/1160229954Critastic_v0.5.zip)
|Emote when you get really high crits.
|-
|[CritFlash](https://web.archive.org/web/20061110112739if_/http://uifiles.worldofwar.net:80/upload/ui/1156962036CritFlash_1_1.zip)
|A very simple addon that provides two 'Screen flash' functions. [Info](https://web.archive.org/web/20061028203301/http://ui.worldofwar.net/ui.php?id=3100)
|-
|[CritLine](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CritLine_v3.1)
|Tracks best crits. List all you attacks and/or Heals with normal and crit damage. [Info](https://web.archive.org/web/20060822040421/http://ui.worldofwar.net/ui.php%3Fid%3D810)
|-
|[CritRecord](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CritRecord_v1.4)
|Stores crit info for tooltips.
|-
|[Cryolysis](https://web.archive.org/web/20060716232441if_/http://downloadmod.worldofwar.net:80/upload/ui/1152859444Cryolysis1.1.3%20FINAL.zip)
|Mage: spell management GUI. [Info](https://web.archive.org/web/20061026062232/http://ui.worldofwar.net/ui.php?id=2864)
|-
|[CS_AddOnOrganizer](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CS_AddOnOrganizer_v1.1011)
|Manages addons.
|-
|[CT_AllBags](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_AllBags)
|Opens multiple bags at once.
|-
|[CT_BagMod](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_BagMod)
|Renames bags.
|-
|[CT_BarMod](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_BarMod)
|Adds extra action bars.
|-
|[CT_BottomBar](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_BottomBar)
|Moves/hides main UI elements.
|-
|[CT_BuffMod](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_BuffMod)
|Custom buff display.
|-
|[ct_em](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ct_em_v1.12)
|Emergency monitor for CT_RaidAssist.
|-
|[CT_ExpenseHistory](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_ExpenseHistory)
|Detailed log of character expenses (/eh).
|-
|[CT_HailMod](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_HailMod)
|Greets nearby players.
|-
|[CT_ItemBuffs](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_ItemBuffs)
|Weapon buff display.
|-
|[CT_MailMod](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_MailMod)
|Mail management tools.
|-
|[CT_MapMod](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_MapMod)
|Map notes & coords.
|-
|[CT_MasterMod](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_MasterMod)
|Core library for CT addons.
|-
|[CT_MovableParty](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_MovableParty)
|Move group frames.
|-
|[CT_PartyBuffs](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_PartyBuffs)
|Group buffs/debuffs.
|-
|[CT_PlayerNotes](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_PlayerNotes)
|Notes on friends.
|-
|[CT_QuestLevels](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_QuestLevels)
|Show quest levels in log.
|-
|[CT_RABossMods](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_RABossMods)
|Boss ability warnings.
|-
|[CT_Raid_RaidIcons](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CT_Raid_RaidIcons_v1.2)
|Raid icon management.
|-
|[CT_RaidAssist](https://web.archive.org/web/20061127093503if_/http://downloadmod.worldofwar.net:80/upload/ui/1156253410CT_RaidAssist%20v1.54.zip)
|Raid evaluation functions. [Info](https://web.archive.org/web/20061113132442/http://www.ctmod.net/)
|-
|[CT_RaidTracker](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_RaidTracker)
|Logs raid loot info.
|-
|[CTRA_TankAssist](https://web.archive.org/web/20061110112349if_/http://uifiles.worldofwar.net:80/upload/ui/AV%20Mod_20061018.zip)
|Tool for checking MTs are on different targets.
|-
|[CT_ShieldMod](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_ShieldMod)
|Shield HP display (Priests, Warlocks, Mages).
|-
|[CT_TickMod](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_TickMod)
|Mana/HP regen per tick.
|-
|[CT_Timer](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_Timer)
|Flexible timers.
|-
|[CT_UnitFrames](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CT_UnitFrames_v1.716_epf_rare)
|Custom unit frames.
|-
|[CT_UnitFrames_epf_rare](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/CT_UnitFrames_v1.716_epf_rare)
|Rarity-based frames.
|-
|[CT_Viewport](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_Viewport)
|Change visible game area.
|-
|[CThunWarner](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CThunWarner_v1.06)
|Warns about C’Thun in AQ40.
|-
|[CTMod](https://web.archive.org/web/20061127093733if_/http://downloadmod.worldofwar.net:80/upload/ui/1156253292CTMod%20v1.856.zip)
|CTMod is an improved User Interface mod. [Info](http://web.archive.org/web/20061127052555/http://www.wowguru.com/ui/109/ctmod/)
|-
|[CTRA_Spy](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CTRA_Spy_v1.4/CTRA_Spy)
|Raid warning enhancements.
|-
|[CustomNameplates](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/CustomNameplates_20121012-155805)
|Replaces default nameplates.
|-
|[cyCircled](cyCircled)
|Makes buttons round (e.g., Bongos, Bartender2).
|-
|[DanceMusic](https://web.archive.org/web/20060620022739if_/http://downloadmod.worldofwar.net:80/upload/ui/1143687791DanceMusic.zip)
|DanceMusic will simply add race and gender specific music to your (and others') dance emote. [Info](https://web.archive.org/web/20061027230530/http://ui.worldofwar.net/ui.php?id=1815)
|-
|[DamageMeters](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DamageMeters_v5.3.1)
|Raid damage, DPS, healing metrics. [Info](https://web.archive.org/web/20061130090720/http://ui.worldofwar.net/ui.php?id=2501)
|-
|[Damn Vengeance!](https://web.archive.org/web/20061127203003if_/http://uifiles.worldofwar.net:80/upload/ui/tnz-damnvengeance-11200.1_20061115.zip)
|Displays your total damage, crits and DPS in a Vengeance buff in a big text frame or through SCT.
|-
|[Damn Windfury](https://web.archive.org/web/20060715181531if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/3516/DamnWindfury1.7.zip)
|Displays your Total WF amount (all 3 swings combined) and Chain Lightning jumps in a big text frame or through SCT (/dw).
|-
|[DataFish](https://web.archive.org/web/20060520202632if_/http://downloadmod.worldofwar.net:80/upload/ui/1143884880AlesUI1101-noatlas.zip)
|Logs where fish are caught and stuff ^_^ based on "Impp's Fishing Info.
|-
|[DBCS (French)](https://web.archive.org/web/20060710052841if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/3824/dbcs010011.zip)
|Memorizes drops of mobs/pinders/peche/resources/chests.
|-
|[Dhask's FlightMap](https://web.archive.org/web/20060901043348if_/http://downloadmod.worldofwar.net:80/upload/ui/1156737115Dhask-FlightMap-v1.12-1.zip)
|Adds a tooltip to the world map showing flightpaths into and out of regions, and region level ranges. [Info](https://web.archive.org/web/20061028162231/http://ui.worldofwar.net/ui.php%3Fid%3D590)
|-
|[DeadlyFunc](https://web.archive.org/web/20061110112032if_/http://uifiles.worldofwar.net:80/upload/ui/1153516474DeadlyFunc.zip)
|Assorted combat functions.
|-
|[DeathAlert](https://web.archive.org/web/20061127042928if_/http://uifiles.worldofwar.net:80/upload/ui/DeathAlert_20061123.zip)
|Warns of player death in raid.
|-
|[DeathEstimator](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DeathEstimator_v3.0)
|Estimates time to death.
|-
|[DebuffFilter](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DebuffFilter_v1.2)
|Filters/debuff display.
|-
|[Decursive](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/Decursive-1.9.8.4.zip)
|This is a raid cleaning mod. The idea behind this is to iterate though the raid party, and cure who ever needs it. It also work on teams, but was written with raids in mind. [Info](https://web.archive.org/web/20061027022438/http://ui.worldofwar.net:80/ui.php?id=2506)
|-
|[DefendYourself](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DefendYourself_v4.38)
|Auto-attack & anti-sheep functions.
|-
|[DefenseTracker](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DefenseTracker_v1.0)
|Monitors defenses.
|-
|[DeLinkWent](https://web.archive.org/web/20060624141924if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4225/DeLinkWent_1.10.0.zip)
|Clears or relabels BoP links so that YOU don't have to see them (/dl).
|-
|[DemonTrainerFrame](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DemonTrainerFrame_v0.0.7)
|Warlock demon trainer UI.
|-
|[DepositBox](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DepositBox_v1.6.0)
|Limits spending money.
|-
|[DetachedMiniButtons](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DetachedMiniButtons_v0.9.22)
|Move minimap buttons freely.
|-
|[DeToggleAttack](https://web.archive.org/web/20061110113830if_/http://uifiles.worldofwar.net:80/upload/ui/1156264935DeToggleAttack-1.2.zip)
|Stops the attack button from being a simple toggle.
|-
|[Detox](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/Detox.zip)
|Similar to Decursive.
|-
|[DeuceCommander](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DeuceCommander_r15614)
|Configures many addons via Ace2.
|-
|[Development Tools](DevTools)
|Debugging, Exploration, and Diagnostic Tools. [DevTools Wiki](https://web.archive.org/web/20070601181235/http://www.wowwiki.com/DevTools)
|-
|[devnull](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/devnull_v2.3.1)
|Disables various audio/messages.
|-
|[dG Killshot Notifier](https://web.archive.org/web/20061127203131if_/http://uifiles.worldofwar.net:80/upload/ui/dgks-11200.0.07_20061122.zip)
|This mod will tell you and the people around you that YOU got the killshot.
|-
|[DHUD](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DHUD_v1.1)
|Drathal's heads-up display overlay. [Info](http://web.archive.org/web/20061207202136/http://www.markus-inger.de/wow/drathals_hud.html)
|-
|[DiabloMod](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DiabloMod_v1.2)
|Classic Diablo-like UI elements.
|-
|[diInCombat](https://web.archive.org/web/20061110210446if_/http://uifiles.worldofwar.net:80/upload/ui/1159938502diInCombat-v1.03.zip)
|Notify on entering/exiting combat mode (/diic).
|-
|[diMapCoords](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/diMapCoords_v1.02)
|Map coordinates.
|-
|[DingRecorder](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DingRecorder_v2)
|Screenshots on level-up (/dr).
|-
|[DiscoDice](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DiscoDice_v0.60)
|Timer mod for rogues.
|-
|[Discord collection](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Discord_collection)
|Customizes frames, textures, panels. [Info](https://web.archive.org/web/20061129234242/http://www.discordmods.com/cgi-bin/page.pl)
|-
|[DiscordActionBars v3.17](https://web.archive.org/web/20061206234716if_/http://www.discordmods.com:80/DiscordActionBars/Downloads/DiscordActionBars3_17b.zip)
|Spreads your base 120 action buttons across 10 configurable bars.
|-
|[DiscordArt v1.52](https://web.archive.org/web/20070320122309if_/http://www.discordmods.com:80/DiscordArt/Downloads/DiscordArt1_52a.zip)
|Lets you configure 20 or more textures for your UI.
|-
|[DiscordFrameModifier v1.2](https://web.archive.org/web/20061026213320if_/http://www.discordmods.com:80/DiscordFrameModifier/Downloads/DiscordFrameModifier1_2.zip)
|Lets you configure any frame in your UI in any way it's possible to configure that frame.
|-
|[DiscordLibrary v1.48](https://web.archive.org/web/20061022045045if_/http://www.discordmods.com:80/DiscordLibrary1_48.zip)
|Common library for all mods by Lozareth.
|-
|[DiscordMacroFunctions](https://web.archive.org/web/20061026023936if_/http://www.discordmods.com:80/DiscordMacroFunctions/Downloads/DiscordMacroFunctions1_26.zip)
|Misc functions for use in macros.
|-
|[DiscordMiniPanels v1.1c](https://web.archive.org/web/20060522012817if_/http://www.discordmods.com:80/DiscordMiniPanels/Downloads/DiscordMiniPanels1_1c.zip)
|Discord Mini Spellbook and Inventory.
|-
|[DiscordUnitFrames v2.46b](https://web.archive.org/web/20060623071225if_/http://www.discordmods.com:80/DiscordUnitFrames/Downloads/DiscordUnitFrames2_46b.zip)
|Replaces the self, party, and target frames with much more configurable frames.
|-
|[Distance](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Distance_v1.3/Distance)
|Shows distance to target. 
|-
|[DivineBlessing](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Simplifies buffing of parties and raids.
|-
|[DLx BuffBindings](https://web.archive.org/web/20061009043451if_/http://ui.dlxmedia.net/dLx_BuffBindings.zip)
|Multiclass buffing.
|-
|[DLx FreezeTrap](https://web.archive.org/web/20061209041412if_/http://ui.dlxmedia.net:80/dLx_FreezeTrap.zip)
|Feigns before trapping if needed.
|-
|[DLx HUD](https://web.archive.org/web/20061009043621if_/http://ui.dlxmedia.net/dLx_HUD.zip)
|Heads-up display.
|-
|[DLx SmartStuff](https://web.archive.org/web/20061009043610if_/http://ui.dlxmedia.net:80/dLx_SmartStuff_2006-05-25.zip)
|Mana conservation for hunters.
|-
|[DLx TrinketKeys](https://web.archive.org/web/20061009043320if_/http://ui.dlxmedia.net:80/dLx_TrinketKeys.zip)
|Gives you two extra hotkeys for trinkets.
|-
|[DmgCalc](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DmgCalc_v1.7)
|Damage/statistics calculator.
|-
|[DoctorDruid](https://web.archive.org/web/20061129103105if_/http://downloadmod.worldofwar.net:80/upload/ui/1159509980doctordruid_v1.1.9b.zip)
|Druid-specific functions. [Info](https://web.archive.org/web/20061117064820/http://ui.worldofwar.net/ui.php?id=2906)
|-
|[Doma](https://web.archive.org/web/20060622005342if_/http://downloadmod.worldofwar.net:80/upload/ui/1142516950DomaModPack.zip)
|Doma Mod Pack.
|-
|[DoTimer](DoTimer)
|Dot/HOT timers.
|-
|[DoubleClickSelfCast](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DoubleClickSelfCast_v1.0)
|Cast on self with double click.
|-
|[DragQueen](https://web.archive.org/web/20060818061302if_/http://static.curse-gaming.com/ftp/datarepos/addons/3562/DragQueen_11000.6.zip)
|Makes most in-game windows and bags draggable.  Once the window/bag is closed, it will snap back to it's original location. [Info](https://web.archive.org/web/20060825032105/http://www.curse-gaming.com/en/wow/addons-3562-1-dragqueen.html)
|-
|[DragonScalePoints](https://web.archive.org/web/20061110112057if_/http://uifiles.worldofwar.net:80/upload/ui/1157880099DSP_2dot1a.zip)
|A semiautomaic inGame tool to organize RaidPoints (/dsp). [Info](https://web.archive.org/web/20061028203148/http://ui.worldofwar.net/ui.php?id=1805)
|-
|[DruidBar](DruidManaBar)
|Mana bar for druid forms.
|-
|[DruidFunc](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DruidFunc_v2.15)
|Bind druid form functions. [Info](https://web.archive.org/web/20060717170007/http://www.hunlock.com/df.php)
|-
|[DruidHelper](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DruidHelper_v1.37)
|Druid class tools.
|-
|[DuctTape](https://web.archive.org/web/20060622010708if_/http://downloadmod.worldofwar.net:80/upload/ui/1150599248Enlightened%20UI.zip)
|Utility library, part of the older Ace framework (/ducttape).
|-
|[DuelInspect](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DuelInspect_v1.01)
|Info about duel requests.
|-
|[DuelLock](https://web.archive.org/web/20061110112404if_/http://uifiles.worldofwar.net:80/upload/ui/1153821541DuelLock.zip)
|Disallows duels, either all of them or only those players you add to the blacklist. You can also allow for your party and/or guild to be able to duel you, or those only on your whitelist (/dl).
|-
|[DuugusAHIgnore](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DuugusAHIgnore_v1.0)
|Ignore auction sellers.
|-
|[DurabilityStatus](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Lets you know your current durability percentage and how much it will cost to repair.
|-
|[DynRepBar](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/DynRepBar_v0.2.12)
|Reputations tracking.
|-
|[EastWest](https://web.archive.org/web/20061110112537if_/http://uifiles.worldofwar.net:80/upload/ui/EastWest_14_20061016.zip)
|This adds letters E, W and S to minimap panel. Now also NE, SE, SW, NW.
|-
|[EasyAuction](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EasyAuction_v1.10)
|Remember auction prices.
|-
|[EasyCast](https://web.archive.org/web/20060628195932if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/3020/EasyCast(includes%20Earth_Sea)_v14.zip)
|Automates and optimizes healing spell targeting and casting (/ec).
|-
|[EasyMail](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|EasyMail automatically fills in the name of last person you mailed.
|-
|[EasyMasterLoot](https://web.archive.org/web/20060622010708if_/http://downloadmod.worldofwar.net:80/upload/ui/1150599248Enlightened%20UI.zip)
|Sorts master loot candidates by class instead of group while in a raid and other nifty features (/EasyMasterLoot).
|-
|[EasyRaid](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EasyRaid_v2.3.2)
|Alternative to CT_RaidAssist.
|-
|[EasyTab](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EasyTab_v0.3.1)
|Target selection options (/easytab).
|-
|[EasyUI](https://web.archive.org/web/20060622012449if_/http://downloadmod.worldofwar.net:80/upload/ui/1143965847Tainger%20Dainger%20-%20Easy%20UI.zip)
|Tainger Danger's Easy UI.
|-
|[EasyUnlock](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EasyUnlock_v1.15)
|Adds unlock button to inventory.
|-
|[EasyWho](https://github.com/byCFM2/EasyWho)
|Search by class in "Who".
|-
|[Easyzoom](https://web.archive.org/web/20060615220543if_/http://downloadmod.worldofwar.net:80/upload/ui/1150011407AV%20addonpack.zip)
|Replaces the -/+ Minimap Zoom Buttons with one Left/Right Click Button and Mouse Wheel Capabilities.
|-
|[EavesDrop](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EavesDrop_v1.1)
|Colored, icon-based combat log.
|-
|[eCastingBar](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/eCastingBar_v1.3.24)
|Custom cast bar.
|-
|[Earth](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|An XML Template Library. [Info](https://web.archive.org/web/20060910142606/http://www.wowwiki.com/Tutorial:_Using_Earth_to_Create_a_QuestLog)
|-
|[EarthFeatureFrame](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Feature AddOn Spellbook Menu.
|-
|[EgoCast](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EgoCast_r13555)
|Casts on self, friends, etc.
|-
|[ElitePlayerFrame](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ElitePlayerFrame_v1.32)
|Makes player frame look elite.
|-
|[ElkBuffBar](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ElkBuffBar_r14740)
|Large buff/debuff bars.
|-
|[Eloquence](https://web.archive.org/web/20060710053439if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2752/Eloquence0.88.zip)
|Ambitious addon primarily written for roleplayers, but offers many features that anyone can appreciate. [Info](https://web.archive.org/web/20061111230717/http://www.curse-gaming.com/en/wow/addons-2752-1-eloquence.html)
|-
|[Emerald-UI v9.0](https://web.archive.org/web/20060116060330if_/http://ui.worldofwar.net:80/upload/ui/1136522658Emerald-UI_v9.0.zip)
|UI pack compiled by Dsanai of The Crimson Knights, Whisperwind Alliance.
|-
|[Emerald-UI v10.1](https://web.archive.org/web/20060413225602if_/http://www.emerald-order.com:80/wow/download/download.php?plugin=Emerald-UI)
|Emerald-UI complete pack. [Info](https://web.archive.org/web/20060615021946/http://www.emerald-order.com/wow/emerald-ui.php)
|-
|[Emergency](https://web.archive.org/web/20070306150058if_/http://ui.orgrimmar.org:80/addons/Emergency/Emergency_v2.2.zip)
|Flashes your screen in special ways when stuff happens. [Info](https://web.archive.org/web/20070302225446/http://ui.orgrimmar.org/addon.php?id=7)
|-
|[EmoteButtons](EmoteButtons)
|Circular emotions button.
|-
|[EmoteMenu](https://web.archive.org/web/20060711111715if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/1607/EmoteMenu_v11100.1.zip)
|Adds a pop-up menu on the left side of the screen with custom emotes/commands.
|-
|[EN_AutoEquip](https://web.archive.org/web/20070630134548if_/http://luodan.com/wow/addons/addons.rar)
|Swap your suites with one click.
|-
|[EN_LRSPro](https://web.archive.org/web/20070630134548if_/http://luodan.com/wow/addons/addons.rar)
|This addons is dedicated to my guild LRS. One world, one dream, all LRS!
|-
|[EN_NinjaRate](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EN_NinjaRate_v1.1.1)
|Display a rate number besides the GroupRoll frame. You can use the rate number as a reference to avoid ninja root.
|-
|[EN_PartyAnnounce](https://web.archive.org/web/20070630134548if_/http://luodan.com/wow/addons/addons.rar)
|Enigma Party Announce sends a party message to inform your current status.
|-
|[EN_TinyAddons](https://web.archive.org/web/20070630134548if_/http://luodan.com/wow/addons/addons.rar)
|Many tiny addons.
|-
|[EN_UnitFrames](https://web.archive.org/web/20070630134548if_/http://luodan.com/wow/addons/addons.rar)
|Enhanced Unit Frames including HP/MP values, class, race, level tag, and more
|-
|[EnchantBot](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EnchantBot_v2.2)
|Auto-view enchants via PM.
|-
|[EnchantingDB](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EnchantingDB_v2.2.2)
|Enchant database (/edb).
|-
|[EnchantingSell](https://web.archive.org/web/20061129103556if_/http://downloadmod.worldofwar.net:80/upload/ui/1156264334EnchantingSeller_11200.1.zip)
|Provides enchanters with a decent tool for managing their profession. [Info](https://web.archive.org/web/20060618113208/http://ui.worldofwar.net/ui.php?id=2358)
|-
|[EnergyTick](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EnergyTick_v4.1)
|Sound alert for energy ticks.
|-
|[EnergyWatch2](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EnergyWatch2_v1.5)
|Energy ticks display.
|-
|[EngBags](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/EngBags.zip)
|Single bag/bank with auto-sorting.
|-
|[EnhanceQuest](https://web.archive.org/web/20061213235957if_/http://upload.hshh.org:80/homes/wow/Interface-20061123a.7z)
|Enhanced Quest Log (/ehq).
|-
|[EnhanceMail](https://web.archive.org/web/20061213235957if_/http://upload.hshh.org:80/homes/wow/Interface-20061123a.7z)
|Enhance Mail Mod (/ehm).
|-
|[EnhancedAssist](https://web.archive.org/web/20061110113955if_/http://uifiles.worldofwar.net:80/upload/ui/1158704400EnhancedAssist_v1.6.zip)
|Advanced assisting functionality. [Info](https://web.archive.org/web/20060813111132/http://orgrimmar.org/addons/EnhancedAssist/)
|-
|[EnhancedFlightMap](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EnhancedFlightMap_v1.5)
|Flight points & times (/efm). [Info](https://web.archive.org/web/20070125222723fw_/http://lysaddons.game-host.org/efm/index.html)
|-
|[EnhancedLootFrames](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EnhancedLootFrames_v0.5)
|Loot window options.
|-
|[EnhancedStackSplit](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EnhancedStackSplit_v1.0)
|Extra stack split buttons.
|-
|[EnhancedTradeSkills](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EnhancedTradeSkills_v1.16.8)
|Shows craft options considering inventory.
|-
|[Enlightened UI](https://web.archive.org/web/20060622010708if_/http://downloadmod.worldofwar.net:80/upload/ui/1150599248Enlightened%20UI.zip)
|Enlightened UI addon compilation.
|-
|[Ephemeral](https://cdn.wowinterface.com/downloads/file7345/Ephemeral.rar?118782045015)
|Roleplay-oriented add-on. It allows the user to create items such as books, props, containers, keys, and instruments. These user-created items can be sent to other users of Ephemeral (icon appears near your minimap).
|-
|[EQCompare](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EQCompare_r13770)
|EquipCompare on Ace2.
|-
|[EQL3](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EQL3_v3.6.1)
|Extended QuestLog is an extension of the questlog. Choose from different layouts as well as many nice features. [Info](https://web.archive.org/web/20061028030725/http://ui.worldofwar.net/ui.php?id=1676)
|-
|[EquipCompare](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EquipCompare_v2.9.8)
|Tooltip gear comparison.
|-
|[EquipManager](https://web.archive.org/web/20060425043344if_/http://64.168.251.69:80/wow/EquipManager.2006.02.24alpha.zip)
|Equipment set manager that can manage equipment changes. Both automatic events and custom events. [Info](https://web.archive.org/web/20060412120228/http://64.168.251.69/wow/equipmanager.html)
|-
|[Eradicator UI](https://web.archive.org/web/20060719145410if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4395/Eradicator_UI_1.11_r1.zip)
|Addons Compilation. [Info](https://web.archive.org/web/20061025200205/http://www.curse-gaming.com/en/wow/addons-4395-1-eradicator-ui.html)
|-
|[ErosManaConserve](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ErosManaConserve_v1.12)
|Mana conservation options.
|-
|[ErrorRedirect](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ErrorRedirect_v11100.3)
|Redirects errors to the combat log. [Info](https://web.archive.org/web/20060427054612/http://www.curse-gaming.com/mod.php?addid=481)
|-
|[EventProfiler](https://web.archive.org/web/20060425084918/http://64.168.251.69:80/wow/EventProfiler.2005.10.19.zip)
|Developer tool to watch events fired. [Info](https://web.archive.org/web/20060216021426/http://64.168.251.69/wow/eventprofiler.html)
|-
|[EventWatcher](https://web.archive.org/web/20060113112501if_/http://ui.worldofwar.net:80/upload/ui/1113245393EventWatcher1.0.zip)
|A UImod development tool used to monitor events and display their arguments (/ew).
|-
|[Evocation](https://web.archive.org/web/20060628190628if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4281/Evocation.zip)
|Helps use spirit based items when useing Evocation.
|-
|[Experience Percentage](https://web.archive.org/web/20060621201534if_/http://www.viper.dk:80/wow/files/ExperiencePercentage_v1.31.zip)
|Shows the current percentage of your experience progress. [Info](https://web.archive.org/web/20061126084315/http://www.viper.dk/wow/#ExperiencePercentage)
|-
|[XPExtended](https://web.archive.org/web/20060716232410if_/http://downloadmod.worldofwar.net:80/upload/ui/1151534710XPExtended%20-%20v1.06.zip)
|Rework of **XPToGo** and **RestXPToGo.** [Info](https://web.archive.org/web/20060909114535/http://ui.worldofwar.net/ui.php?id=2493)
|-
|[XPExtended_NoRep](https://web.archive.org/web/20061110114558if_/http://uifiles.worldofwar.net:80/upload/ui/XPExtended_NoRep%20-%20v2.0_20061023.zip)
|TogoXP counter on XP bar, percentXP counter on XP bar, togoRestedXP counter on XP bar, percentRestedXP counter on XP bar, Special version With No Rep Counters.
|-
|[EX_MashManaConserve](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EX_MashManaConserve_v0.1a)
|Mana saving in raids.
|-
|[EX_Maexxna_WebWatch](https://web.archive.org/web/20061110113930if_/http://uifiles.worldofwar.net:80/upload/ui/1155482341EX_Maexxna_WebWatch.zip)
|Displays players currently affected by Web Wrap (/exmww).
|-
|[Exposed](https://web.archive.org/web/20060624141353if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4218/Reborn100.zip)
|Watches for Expose Weakness Procs on your target and provides a visual and audo alert (/exposed).
|-
|[Extended Ignore](https://web.archive.org/web/20061027010155if_/http://downloadmod.worldofwar.net:80/upload/ui/1160520070ExtendedIgnore-0.8.rar)
|This mod allows you to ignore a (technically) infinite amount of people. [Info](https://web.archive.org/web/20060113060417/http://ui.worldofwar.net/ui.php?id=1010)
|-
|[EzDismount](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/EzDismount_fix)
|Auto-dismounts when needed.
|-
|[EZDI](https://github.com/fastbond/wow-1.12.1-addons/tree/master/EZDI)
|Addon for requesting spells through whispers
|-
|[EZoneLevel](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|Adds a relative safety graphical indicator of mob levels in a zone (/ezl).
|-
|[EzSelfCast](https://web.archive.org/web/20060614091355if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2168/SexyUI1900r3.zip)
|Cast spell on self if there is no target or a hostile target (/ezselfcast).
|-
|[FactionGrinder](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/FactionGrinder_v1.1)
|Simplifies faction farming.
|-
|[FaraFrames](https://web.archive.org/web/20060520195907if_/http://downloadmod.worldofwar.net:80/upload/ui/1126015581FaraFrames.zip)
|XML Frame Examples. [Info](https://web.archive.org/web/20060516040135/http://ui.worldofwar.net/ui.php?id=1288)
|-
|[Fastcast](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Fastcast_v1.11.2)
|Reduces cast delay for high ping.
|-
|[FastQuest](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/FastQuest_v2.11.3)
|Quest info & notifications.
|-
|[FearDance](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/FearDance_v1.5)
|Warrior macro for fear/disarm.
|-
|[FelwoodGather](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/FelwoodGather_v0.98)
|Herb/fruit gathering timer & map.
|-
|[Fenris UI](https://web.archive.org/web/20060515010529if_/http://www.wowguru.com:80/ui/archives/fenrisaui-a1101-225-a1101.zip)
|UI package. [Info](http://web.archive.org/web/20060414235634/http://www.wowguru.com/ui/225/fenrisaui-a1101/)
|-
|[FeralFighter](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/FeralFighter_v1.5.1)
|Druid: auto-buffs & attack.
|-
|[FeralSkills](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/FeralSkills_v1.5)
|Bind multiple abilities to one button.
|-
|[FFat20](https://github.com/fastbond/wow-1.12.1-addons/tree/master/FFat20)
|Tracks and displays the player's Faerie Fire duration on each target.
|-
|[FightBack](https://web.archive.org/web/20061110114106if_/http://uifiles.worldofwar.net:80/upload/ui/1159585798FightBack_104_Bundle.zip)
|Hit Me? I'll hit you back! (/fb).
|-
|[FilterFix](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/FilterFix_4216a)
|Filters abilities in trainer window.
|-
|[FilterKnown](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/FilterKnown2_v1.3)
|Highlights known recipes in auction.
|-
|[Fire](https://web.archive.org/web/20061205102638if_/http://www.cosmosui.org:80/files/distros/Cosmos_Devtools.zip)
|Debugger and System Monitor
|-
|[FishEase](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection)
|Quick fishing with right click. [Info](https://web.archive.org/web/20061113050452/http://www.curse-gaming.com/en/wow/addons-1215-1-fishease.html)
|-
|[Fishing Buddy](https://web.archive.org/web/20061127093427if_/http://downloadmod.worldofwar.net:80/upload/ui/1157395069FishingBuddy-v0.8.8e.zip)
|Fishing info & stats. Help with fishing related tasks -- clothing, fish information, etc. [Info](https://web.archive.org/web/20061028030534/http://ui.worldofwar.net/ui.php%3Fid%3D1095)
|-
|[FixCTGroups](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FixCTGroups)
|Aligns CT_Raid frames.
|-
|[Fixed Floating Chat Frame](https://web.archive.org/web/20070510125743if_/http://www.viper.dk:80/wow/files/FixedFloatingChatFrame_v1.11.zip)
|"Hides" the borders of the chat frames, so they don't obstruct with the game world. [Info](https://web.archive.org/web/20061126084315/http://www.viper.dk/wow/#FixedFloatingChatFrame)
|-
|[Fizzle](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Fizzle_r18261)
|Shows item durability & repair cost.
|-
|[flagRSPLoader](https://web.archive.org/web/20060717201213if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2200/BasicUI.zip)
|Load on demand manager for flagRSP. Not needed if you use another load on demand manager (/rspload). [Info](https://web.archive.org/web/20060720165725/http://flokru.org/flagrsp/)
|-
|[FlagRSP](https://web.archive.org/web/20061023004621if_/http://downloadmod.worldofwar.net:80/upload/ui/1160255515flagRSP2_1-1-2.zip)
|A role playing AddOn that shows extra information about a players' character as entered by them. [Info](https://web.archive.org/web/20061029152442/http://ui.worldofwar.net/ui.php?id=3047)
|-
|[FlameOn](https://web.archive.org/web/20061127203044if_/http://uifiles.worldofwar.net:80/upload/ui/flameOn_20061121.zip)
|Single-button macro for fire mages.  it spams scorch until 5 are stacked, then triggers your zhc/pom and Fireball.
|-
|[FlexBar](http://web.archive.org/web/20070109081505if_/http://flexdev.mmorpgaming.com:80/downloads/FlexBarv1.6.1.zip)
|Adds customizable action buttons. [Info](http://web.archive.org/web/20060720133429/http://flexdev.mmorpgaming.com/index.php?n=Main.FlexBar)
|-
|[FlexTotem](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/FlexTotem_v1.12a)
|Shaman: totem set bar.
|-
|[FlightMap](FlightMap)
|Flight route & time map.
|-
|[FlightPath](FlightPath)
|Flight points & times.
|-
|[FindRemind](https://web.archive.org/web/20060719143130if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/3513/FindRemind_1.2.zip)
|Remind player to reactive find/tracking when it is lost.
|-
|[FollowMeEnhanced](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/FollowMeEnhanced_v1.2b)
|Auto-follow commands.
|-
|[FollowTheLeader](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/FollowTheLeader)
|Auto-follow a specific player.
|-
|[ForceEnchant](https://web.archive.org/web/20061129103217if_/http://downloadmod.worldofwar.net:80/upload/ui/1153261823ForceEnchant.zip)
|A utility to auto-accept re-enchant confirmation dialog boxes. [Info](https://web.archive.org/web/20061027184734/http://ui.worldofwar.net:80/ui.php?id=2516)
|-
|[Forecast](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Forecast_v1.31)
|Tracks enemy spell casts.
|-
|[ForgottenChat](https://web.archive.org/web/20060622011207if_/http://downloadmod.worldofwar.net:80/upload/ui/1148814840Solid%20UI%20V0.05.zip)
|MSN Emulator for the WoW environment (/fc).
|-
|[ForgottenChatChannels](https://web.archive.org/web/20060622011207if_/http://downloadmod.worldofwar.net:80/upload/ui/1148814840Solid%20UI%20V0.05.zip)
|Channel support for ForgottenChat.
|-
|[Fortify](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Fortify_v2.5)
|One-click buffing for raid (/ffy help). [Info](https://web.archive.org/web/20060523174008/http://www.spence.net/ted/article.php?story=20050618075103133)
|-
|[Fragile](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/Fragile-20400-1.zip)
|Aggro Notifications for Blizzard Party Frames.
|-
|[Framerate Adjuster](https://web.archive.org/web/20060719013538if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4100/Framerate%20Adjuster%201.4.1.zip)
|Automatically adjusts terrain distance in an effort to achieve your preferred framerate (/FRA).
|-
|[FreeRefills](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/FreeRefills_v0.2.3231)
|Auto-purchase reagents/items.
|-
|[Friendsfacts](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Friendsfacts_v1.9b)
|Friend info (level, class, location).
|-
|[FriendNotifierPlus](https://web.archive.org/web/20060622012449if_/http://downloadmod.worldofwar.net:80/upload/ui/1143965847Tainger%20Dainger%20-%20Easy%20UI.zip)
|Enhanced notification when friends enter and leave the world (/fnp).
|-
|[FriendShare](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/FriendShare_v1.2.9)
|Sync friends/ignore lists across characters. [Info](https://web.archive.org/web/20060911172219/http://ui.worldofwar.net/ui.php?id=1122)
|-
|[FrostShoock](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/FrostShoock_v1.01)
|Shaman: announces Frost Shock.
|-
|[FrowningCircle](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/FrowningCircle_v1.2)
|Bind 4 totems to one button.
|-
|[FruityLoots](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/FruityLoots_r4862)
|Loot window under cursor (Ace2) (/floots). [Info](https://web.archive.org/web/20061027230506/http://ui.worldofwar.net/ui.php?id=1412)
|-
|[FuBar](FuBar)
|Plugin panel, highly customizable.
|-
|[FuBar Plugins](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/FuBar+plugins.zip)
|Big plugin pack for FuBar
|-
|[FuBar_AmmoFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Ammo count.
|-
|[FuBar_AnkhTimerFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Ankh cooldown for Shamans.
|-
|[FuBar_Aspect](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Hunter aspect display.
|-
|[FuBar_AssistFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Raid target assist.
|-
|[FuBar_AuctionsFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Auction info panel.
|-
|[FuBar_AuditorFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Income/expenses tracker.
|-
|[FuBar_BagFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_BagFu)
|Inventory info.
|-
|[FuBar_BattlegroundFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_BattlegroundFu)
|BG info panel.
|-
|[FuBar_BGQueueNumber](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|BG queue position.
|-
|[FuBar_BlockTradeFu](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/FuBar_v2.0_full/FuBar_BlockTradeFu)
|Lock trade button.
|-
|[FuBar_CheckStoneFu](https://web.archive.org/web/20060513171547if_/http://downloadmod.worldofwar.net:80/upload/ui/1145888796FuBar_CheckStoneFu.zip)
|A raid scanning tool for Soulstones.
|-
|[FuBar_CloakHelmToggle](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Show/hide cloak & helm.
|-
|[FuBar_ClockFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_ClockFu)
|Clock display.
|-
|[FuBar_ConjureFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Mage: create portals/water.
|-
|[FuBar_CorkFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Buffs/debuffs info.
|-
|[FuBar_CRDelayFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Resurrection delay timer.
|-
|[FuBar_CustomMenuFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Custom right-click menu.
|-
|[FuBar_DakSmak](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Miss, Dodge, Parry stats.
|-
|[FuBar_DPS](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_DPS)
|Damage per second monitor.
|-
|[FuBar_DurabilityFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_DurabilityFu)
|Equipment durability & repair.
|-
|[FuBar_DuraTek](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_DuraTek)
|Equipment durability percentage.
|-
|[FuBar_EmoteFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/Fubar_EmoteFu)
|Emotions menu.
|-
|[FuBar_Experienced](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_Experienced)
|Experience info.
|-
|[FuBar_ExperienceFu](https://github.com/laytya/FuBar_ExperienceFu)
|XP & reputation bar.
|-
|[FuBar_FactionItemsFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Items needed for reputation.
|-
|[FuBar_Factions](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Faction reputation display.
|-
|[FuBar_FactionsFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Quick faction reputation info.
|-
|[FuBar_FarmerFu](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/FuBar_v2.0_full/FuBar_FarmerFu)
|Track item counts.
|-
|[Fubar_FishingBuddyFu](https://web.archive.org/web/20060622011207if_/http://downloadmod.worldofwar.net:80/upload/ui/1148814840Solid%20UI%20V0.05.zip)
|Show the FishingBuddy menu in FuBar.
|-
|[FuBar_FontSizeFu](https://web.archive.org/web/20060622005455if_/http://downloadmod.worldofwar.net:80/upload/ui/1145188946TricksterUI.zip)
|Sets the Font Size of FuBar.
|-
|[FuBar_FriendsFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_FriendsFu)
|Friends list.
|-
|[FuBar_FromAViewToAKillF](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Dynamic target icons.
|-
|[FuBar_FuXPFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_FuXPFu)
|XP and reputation bar.
|-
|[FuBar_FwgFu](https://web.archive.org/web/20060624141835if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4126/fwgfu.0.10.110000.zip)
|FuBar plugin for FelwoodGather.
|-
|[FuBar_GarbageFu](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/FuBar_GarbageFu-r16896-rb.zip)
|Auto-sell gray items.
|-
|[FuBar_GCInFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Memory usage info.
|-
|[FuBar_gfxToggleGUI](https://web.archive.org/web/20060622010708if_/http://downloadmod.worldofwar.net:80/upload/ui/1150599248Enlightened%20UI.zip)
|Toggles graphics settings automatically or by mouse/menue.
|-
|[FuBar_GreedBeacon](https://web.archive.org/web/20060622010708if_/http://downloadmod.worldofwar.net:80/upload/ui/1150599248Enlightened%20UI.zip)
|Track down those needy and greedy party members.
|-
|[FuBar_GroupFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_GroupFu)
|Roll/party info.
|-
|[FuBar_GuildFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_GuildFu)
|Guild info.
|-
|[FuBar_HeyFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Lich King notifications.
|-
|[FuBar_HeyFuArchive](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Archive for HeyFu.
|-
|[FuBar_HonorFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_HonorFu)
|Honor points display.
|-
|[FuBar_ItemBonusFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Item bonus info.
|-
|[FuBar_LocationFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_LocationFu)
|Coordinates & dungeon info.
|-
|[FuBar_LockFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Lock action bars & chat.
|-
|[FuBar_LogFu](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/FuBar_v2.0_full/FuBar_LogFu)
|Save combat & chat logs.
|-
|[FuBar_MageFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Mage-specific tools.
|-
|[FuBar_MailFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_MailFu)
|Mail notifier with sounds.
|-
|[FuBar_MCPFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Addons manager.
|-
|[FuBar_MicroMenuFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Compact main menu.
|-
|[FuBar_MiniClockFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Small clock display.
|-
|[FuBar_MiniPerfsFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Performance stats.
|-
|[FuBar_ModMenuTuFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_ModMenuTuFu)
|Custom menu for addons.
|-
|[FuBar_MoneyFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_MoneyFu)
|Gold/coin display.
|-
|[FuBar_NameToggleFu](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/FuBar_v2.0_full/FuBar_NameToggleFu)
|Show/hide character/guild names.
|-
|[FuBar_NanoStatsFu](https://web.archive.org/web/20060624160634if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4237/FuBar_NanoStatsFu-1.0.zip)
|NanoStatsFu brings the data from NanoStats into FuBar.
|-
|[FuBar_NavigatorFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Coordinates & navigation.
|-
|[FuBar_NetStatsFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Network ping & stats.
|-
|[FuBar_NinjutFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Rogue: poisons & powders.
|-
|[FuBar_PerformanceFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_PerformanceFu)
|FPS, ping, memory.
|-
|[FuBar_PetInFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Pet info.
|-
|[FuBar_PetInfo](https://web.archive.org/web/20061118161911if_/http://uifiles.worldofwar.net:80/upload/ui/1149525848FuBar_PetInfo-v1.0.6.zip)
|Display Pet Info.
|-
|[FuBar_PoisonFu](https://web.archive.org/web/20061129185436if_/http://downloadmod.worldofwar.net:80/upload/ui/1158818320FuBar_PoisonFu-11597.zip)
|A simple addon for easily applying and monitoring poisons, sharpening stones, oils, etc. on your main and off-hand weapon.
|-
|[FuBar_PotHerbFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Herbs & potions info.
|-
|[FuBar_ProfessionsFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Professions menu.
|-
|[FuBar_PursueFu](https://github.com/laytya/FuBar_PursueFu)
|Minimap pursuit.
|-
|[FuBar_QuestsFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_QuestsFu)
|Quest log.
|-
|[FuBar_ReagentFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Reagents count.
|-
|[FuBar_ReagentTrackerFu](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/FuBar_v2.0_full/FuBar_ReagentTrackerFu)
|Reagents & reputation.
|-
|[FuBar_RegenFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_RegenFu)
|Life & mana regen.
|-
|[FuBar_ReloadUI](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Reload UI command.
|-
|[FuBar_RestFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Rest XP info.
|-
|[FuBar_ScaleFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Change UI scale.
|-
|[FuBar_SkillsPlusFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_SkillsPlusFu)
|Skills & professions menu.
|-
|[FuBar_SpacingFu](https://web.archive.org/web/20060622005455if_/http://downloadmod.worldofwar.net:80/upload/ui/1145188946TricksterUI.zip)
|Sets the spacing between plugins of FuBar.
|-
|[FuBar_SpeedFu](https://github.com/laytya/FuBar_SpeedFu_TW)
|Movement speed.
|-
|[FuBar_SpellStatusFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Spell usage info.
|-
|[FuBar_SummonFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Warlock summon buttons.
|-
|[FuBar_TankPointsFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Tank stats.
|-
|[FuBar_TCDFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Profession ability cooldowns.
|-
|[FuBar_tcgTradeskills](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Profession buttons.
|-
|[FuBar_ToFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_ToFu)
|Flight time info.
|-
|[FuBar_TopScoreFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Similar to CritLine.
|-
|[FuBar_TrackerFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Minimap search.
|-
|[FuBar_TradeTrackerFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Profession item count tracker.
|-
|[FuBar_TrainerFu](https://web.archive.org/web/20061127042740if_/http://uifiles.worldofwar.net:80/upload/ui/FuBar_TrainerFu-r17864_20061123.zip)
|Keep track of skills you can learn from trainers.
|-
|[FuBar_TransparencyFu](https://web.archive.org/web/20060622005455if_/http://downloadmod.worldofwar.net:80/upload/ui/1145188946TricksterUI.zip)
|Sets the transparency of FuBar.
|-
|[FuBar_TransporterFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Vehicle control.
|-
|[FuBar_uFriends](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Simple friends list.
|-
|[FuBar_uGuild](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Simple guild list.
|-
|[FuBar_VolumeFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_VolumeFu)
|Volume control.
|-
|[FuBar_WindFuryFu](https://raw.githubusercontent.com/laytya/Vanilla-Addons/refs/heads/master/FuBar%2Bplugins.zip)
|Shaman Windfury info.
|-
|[FuBar_WhisperCastFu](https://web.archive.org/web/20060624141937if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4185/FuBar_WhisperCastFu.zip)
|WhisperCast Plugin for FuBar.
|-
|[FuBar-compat-1.2](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar-compat-1.2)
|Compatibility pack for FuBar 1.2 & 2.0.
|-
|[FuBarPlugin-2.0](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBarPlugin-2.0)
|Library for FuBar plugins. [Info](https://web.archive.org/web/20061030220245/http://www.wowace.com/wiki/FuBarPlugin-2.0)
|-
|[Fury](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Fury_v1.15)
|Warrior: ability macros.
|-
|[FuTextures](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuTextures)
|Textures for FuBar.
|-
|[G15Bar](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/G15Bar_v1.5.1/g15bar)
|Logitech G15 keyboard addon.
|-
|[Gar_QuickLook](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Gar_QuickLook_v1.2)
|Quick back view (assign keys).
|-
|[Garr Target](https://web.archive.org/web/20060413225602if_/http://www.emerald-order.com:80/wow/download/download.php?plugin=Emerald-UI)
|Assists in assigning targets for Garr.
|-
|[Gatherer](https://web.archive.org/web/20061127093401if_/http://downloadmod.worldofwar.net:80/upload/ui/1156711488Gatherer-2.2.3.1.zip)
|Gatherer, displays stuff you gather in your minimap and world map. [Info](https://web.archive.org/web/20061103183819/http://ui.worldofwar.net:80/ui.php?id=277)
|-
|[GathererDump](https://web.archive.org/web/20061110205751if_/http://uifiles.worldofwar.net:80/upload/ui/1159818062GathererDump.zip)
|Dumps the entire Gatherer Database upon command (/gdump).
|-
|[GathererShare](https://web.archive.org/web/20060615220543if_/http://downloadmod.worldofwar.net:80/upload/ui/1150011407AV%20addonpack.zip)
|Share data aquired by the Gatherer AddOn with other players also using GathererShare.
|-
|[GatherSage](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GatherSage_v11200-1)
|Adds skill-level and other information to gathering item tooltips.
|-
|[GBars](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GBars_v11200-3)
|Configurable action panels.
|-
|[GBLoothelp](https://web.archive.org/web/20061023003915if_/http://downloadmod.worldofwar.net:80/upload/ui/GBLoothelp10rc9_20061017.zip)
|The ultimate Loothelper in almost all situations. [Info](https://web.archive.org/web/20061231023438/http://ui.worldofwar.net/ui.php?id=2177)
|-
|[GBRaider](https://web.archive.org/web/20061126015758if_/http://wow.reaktio.net:80/gbraider.zip)
|GameBit's Raid Helper Addon (/gbraider).
|-
|[Genesis](https://web.archive.org/web/20060622011653if_/http://downloadmod.worldofwar.net:80/upload/ui/1145982722CouncilOfAzerothModPack.zip)
|Healer is reborn (/genesis).
|-
|[GFW_AdSpace](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/GFW_AdSpace-11200.5-rb.zip)
|Map info for recipes. [Info](https://web.archive.org/web/20061109085302/http://www.fizzwidget.com/adspace/)
|-
|[GFW_AutoCraft](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GFW_AutoCraft_v11200-1)
|Queued crafting. [Info](https://web.archive.org/web/20061109084634/http://www.fizzwidget.com/autocraft/)
|-
|[GFW_DisenchantPredictor](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GFW_DisenchantPredictor_v11200-1)
|Shows disenchant info. [Info](https://web.archive.org/web/20061109085142/http://www.fizzwidget.com/disenchantpredictor/)
|-
|[GFW_EnchantSeller](https://web.archive.org/web/20061129185341if_/http://downloadmod.worldofwar.net:80/upload/ui/1156465766gfw-enchantseller-11200-1.zip)
|Remembers what people trade to you when you enchant their items, and helps you price and advertise your services. [Info](https://web.archive.org/web/20060911084839/http://ui.worldofwar.net:80/ui.php?id=1113)
|-
|[GFW_FactionFriend](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GFW_FactionFriend_v11200-1)
|Auto faction switching. [Info](https://web.archive.org/web/20061109085114/http://www.fizzwidget.com/factionfriend/)
|-
|[GFW_FeedOMatic](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GFW_FeedOMatic_v11200-2)
|Feed pet (hunters). [Info](https://web.archive.org/web/20061109085437/http://www.fizzwidget.com/feedomatic/)
|-
|[GFW_Gemologist](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GFW_Gemologist_v11200-1)
|Gem info from deposits. [Info](https://web.archive.org/web/20061109084744/http://www.fizzwidget.com/gemologist/)
|-
|[GFW_GuildEntipper](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GFW_GuildEntipper_v11200-1)
|Guild member info tooltip. [Info](https://web.archive.org/web/20061109085411/http://www.fizzwidget.com/guildentipper/)
|-
|[GFW_HuntersHelper](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GFW_HuntersHelper_v11200-2)
|Find mobs for pets. [Info](https://web.archive.org/web/20061109084808/http://www.fizzwidget.com/huntershelper/)
|-
|[GFW_Levelator](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GFW_Levelator_v2.0b2)
|Show quest levels. [Info](https://web.archive.org/web/20061217220222/http://www.fizzwidget.com/levelator/)
|-
|[GFW_Linkerator](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GFW_Linkerator_v11200-1)
|Auto-link items. [Info](https://web.archive.org/web/20061109085201/http://www.fizzwidget.com/linkerator/)
|-
|[GFW_ReagentCost](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/GFW_ReagentCost.zip)
|Calculates and displays total materials cost for items in the tradeskill window. [Info](https://web.archive.org/web/20060913004942/http://ui.worldofwar.net:80/ui.php?id=1114)
|-
|[GFW_ShoppingList](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GFW_ShoppingList_v11200-1)
|Auction shopping list. [Info](https://web.archive.org/web/20061109085102/http://www.fizzwidget.com/shoppinglist/)
|-
|[gfxToggle](https://web.archive.org/web/20060622010708if_/http://downloadmod.worldofwar.net:80/upload/ui/1150599248Enlightened%20UI.zip)
|Toggles GFX-Settings from Low to High automatically or by key/macro.
|-
|[GlobalComm](https://web.archive.org/web/20060620024154if_/http://downloadmod.worldofwar.net:80/upload/ui/1143718957GlobalComm_v122.zip)
|Library for global addon communication within your faction. [Info](https://web.archive.org/web/20060618060211/http://ui.worldofwar.net/ui.php?id=1725)
|-
|[GLOCK](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GLOCK_v4.1)
|Magic resist calculator.
|-
|[GLOCK_Nightfall](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GLOCK_Nightfall)
|Nightfall Axe Combat Statistics.
|-
|[GMail](https://web.archive.org/web/20061117122234if_/http://www.wowace.com:80/files/GMail/GMail-r13144.zip)
|Similar to CT_MailMod.
|-
|[GOFAnnounce](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GOFAnnounce_v1.0)
|Raid tank objective messages.
|-
|[GogglesCastHelper](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GogglesCastHelper_v1.0.1)
|One-click spell cast.
|-
|[GoGoMount](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GoGoMount_v107)
|Bind one button to mount.
|-
|[GoldSpammer](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GoldSpammer_v1.06)
|Blocks gold spam messages.
|-
|[GotWood](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GotWood_r15474)
|Totem timers.
|-
|[GraphicViolence](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GraphicViolence_v1.0)
|Graphical stats.
|-
|[Grid](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Grid_v0.1)
|Raid frames (for healers with Clique).
|-
|[GrimoireKeeper](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GrimoireKeeper_v1.10.0)
|Warlock spellbook tracker.
|-
|[GrimPack](http://web.archive.org/web/20060615220755if_/http://downloadmod.worldofwar.net:80/upload/ui/1149935465GrimPack_Jun-10-2006.zip)
|Addon pack and configuration tool. [Info](https://web.archive.org/web/20061125235835/http://grimpickle.com/)
|-
|[GroupButtons v4.98](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GroupButtons_v4.98)
|Creates a bar of 20 buttons for yourself, your party members, and your target.  Clicking a button on a bar uses its action on the person to whom the bar is attached.
|-
|[GroupButtons v4.99a](https://web.archive.org/web/20070319045459if_/http://www.discordmods.com:80/GroupButtons/Downloads/GroupButtons4_99a.zip)
|This mod creates its own "virtual" action buttons. Easy to use GUI for setting up your bars. Type /gb to open it.
|-
|[GroupCalendar](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GroupCalendar_v2.2.1)
|Allows guilds or groups of friends to share an in-game event calendar. [Info](https://web.archive.org/web/20061004184503/http://ui.worldofwar.net/ui.php?id=1675)
|-
|[GroupHeal](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GroupHeal_v1.5.2)
|Heal spell buttons.
|-
|[Group-o-matic](https://web.archive.org/web/20061110114030if_/http://uifiles.worldofwar.net:80/upload/ui/1154103363Group-o-matic%200.1a.zip)
|Easily find a group to an instance (/gom).
|-
|[GroupTags](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GroupTags_v0.6.0)
|Displays group number in chat (/g6).
|-
|[GroovyUI](https://web.archive.org/web/20060622011531if_/http://downloadmod.worldofwar.net:80/upload/ui/1145283480GroovyUI%20-%2011000.1.zip)
|GroovyUI Pack.
|-
|[GuildAds](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GuildAds_v2.0b)
|Guild member info (profs, etc.).
|-
|[GuildBook](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GuildBook_r17305)
|Guild notebook.
|-
|[GuildEventManager](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/GuildEventManager-2.16.zip)
|Guild Event Manager (GEM) Schedule guild raids/events. (see "/gem help"). [Info](https://web.archive.org/web/20061208074602/http://christophe.calmejane.free.fr/wow/gem/)
|-
|[GuildHi](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GuildHi_v1.2)
|Guild welcome window.
|-
|[GuildInfo](https://web.archive.org/web/20061021014845if_/http://www.worldofguilds.com:80/addon/guildinfo_wow_addon_0.7.4.9.zip)
|Guildinfo exports guild data. [Info](https://web.archive.org/web/20061030102609/http://www.worldofguilds.com/setup/)
|-
|[GuildMap](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GuildMap_v1.0)
|Shows guild members on map.
|-
|[GuildMateMap](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GuildMateMap_v1.0)
|Map with guild members.
|-
|[GuildML](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GuildML_v2.08)
|Send guild-wide mail.
|-
|[GuildOrg](https://web.archive.org/web/20060413225602if_/http://www.emerald-order.com:80/wow/download/download.php?plugin=Emerald-UI)
|Allows a user to organize guild members by alts and add private notes (/go).
|-
|[GuildProfiler](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GuildProfiler_v1.6.0)
|Loads guild info.
|-
|[GuildSeen](https://web.archive.org/web/20061022154224if_/http://downloadmod.worldofwar.net:80/upload/ui/1160706155GuildSeen-1.12.0.zip)
|Adds a /seen command, that tells you how long a player has been offline. [Info](https://web.archive.org/web/20061230075556/http://ui.worldofwar.net/ui.php?id=1136)
|-
|[GuildToolS](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GuildToolS_v3.1)
|Officer tools via web.
|-
|[Gymnast](https://web.archive.org/web/20061215132136/http://d.cosmosui.org/files/distros/Cosmos_Release.zip)
|Make your tooltips as flexible as you are.
|-
|[Gypsy](https://web.archive.org/web/20061208075514/http://gypsymod.the-mad.net/download/release/Gypsy_Full.zip)
|Customizes frames, buffs, etc. [Info](https://web.archive.org/web/20061208075610/http://gypsymod.the-mad.net/?id=download)
|-
|[Handy UI](https://web.archive.org/web/20061028020729if_/http://downloadmod.worldofwar.net:80/upload/ui/1160532931HandyUIv1.3.zip)
|Collection of various helpful mods. [Info](https://web.archive.org/web/20061028121312/http://ui.worldofwar.net/ui.php?id=2956)
|-
|[HappyCoil](https://web.archive.org/web/20060711103547if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4257/HappyCoil1.0.zip)
|Simply enough, it changes the tooltip of Deathcoil, to something more happy (/hc).
|-
|[HateMe](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/HateMe_v11200b/HateMe)
|Tank & DPS: taunt & aggro.
|-
|[h4XPacK](https://web.archive.org/web/20060628190443if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4232/h4X%20PacK.zip)
|Addon pack
|-
|[HealBot](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/HealBot_v1.126b)
|Raid healing with one click.
|-
|[Healcap](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Healcap_v0.3)
|Detailed healing overview.
|-
|[HealerButtons](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/HealerButtons_v1.3.005/HealerButtons)
|Heal buttons per party member.
|-
|[HealersAssist](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/HealersAssist_v1.1)
|Raid healing aid.
|-
|[HealingEstimator](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/HealingEstimator_v1.2)
|Shows overheal.
|-
|[Healix](https://web.archive.org/web/20060613142336if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/489/Healix_4_10.zip)
|When casting spells this will notify your party (/hx).
|-
|[HealOrganizer](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/HealOrganizer_v0.8)
|Distributes healing in raid.
|-
|[HealPoints](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/HealPoints_v1.12.1)
|Healing gear assessment.
|-
|[HealSync](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/HealSync)
|Shows who heals current target.
|-
|[HealthFade](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/HealthFade_v1.1.1)
|Color HP bars based on health.
|-
|[Heather](https://web.archive.org/web/20060622011121if_/http://downloadmod.worldofwar.net:80/upload/ui/1147665675HeatherCompilation.zip)
|Heather's Addon Compilation.
|-
|[HitsMode](https://web.archive.org/web/20060628200028if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/551/Inc_UI_Adv_D50.6_11000.exe)
|Customizes the way combat chat appears (/hitsmode).
|-
|[HitsMode (German)](https://web.archive.org/web/20061110111744if_/http://uifiles.worldofwar.net:80/upload/ui/1158166362HitsMode.zip)
|Transforms your combat chat into really beautiful, super functional, fully colorized, highly configurable text! (/hm).
|-
|[HKCounter](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/HKCounter_v1.2)
|Kills & death counter.
|-
|[Hodgepodge](https://web.archive.org/web/20060622011749if_/http://downloadmod.worldofwar.net:80/upload/ui/1145031435Hodgepodge%20Compilation.zip)
|Hodgepodge Addon Compilation.
|-
|[HoloBar](https://web.archive.org/web/20060717140134if_/http://wow.holomad.net:80/HoloBar/HoloBar_3_08.zip)
|Adds a 12 button bar to the left. You can switch the buttons through the 6 possible original bars and the 4 extra bars (/hb). [Info](https://web.archive.org/web/20061121214415/http://wow.holomad.net/HoloBar/)
|-
|[HoloCommands](https://web.archive.org/web/20060717000406if_/http://wow.holomad.net:80/HoloCommands/HoloCommands_0_23.zip)
|Adds various slash commands to the game (/holo). [Info](https://web.archive.org/web/20050912214623/http://wow.holomad.net/HoloCommands/)
|-
|[HoloEssentials](https://web.archive.org/web/20060717000434if_/http://wow.holomad.net:80/HoloEssentials/HoloEssentials_1_09.zip)
|This provides config, buttons and methods for HoloBar and HoloGemini. [Info](https://web.archive.org/web/20050908035025/http://wow.holomad.net/HoloEssentials/)
|-
|[HoloGemini](https://web.archive.org/web/20060717140215if_/http://wow.holomad.net:80/HoloGemini/HoloGemini_1_09.zip)
|Adds a 12 button bar to the right. You can switch the buttons through the 6 possible original bars and the 4 extra bars. [Info](https://web.archive.org/web/20050909053122/http://wow.holomad.net/HoloGemini/)
|-
|[HoloHealth](https://web.archive.org/web/20060717055832if_/http://wow.holomad.net:80/HoloHealth/HoloHealth_0_13.zip)
|Schows the current and max hp of the target. [Info](https://web.archive.org/web/20050910231817/http://wow.holomad.net/HoloHealth/)
|-
|[HoloMicro](https://web.archive.org/web/20060717055557if_/http://wow.holomad.net:80/HoloMicro/HoloMicro_0_11.zip)
|Adds a centered 4 button bar at the bottom. [Info](https://web.archive.org/web/20050420094642/http://wow.holomad.net/HoloMicro/)
|-
|[HoloRP](https://web.archive.org/web/20060717000421if_/http://wow.holomad.net:80/HoloRP/HoloRP_1_11.zip)
|Adds a chat filter (/hrp). [Info](https://web.archive.org/web/20070717035903/http://wow.holomad.net/HoloRP)
|-
|[HolyHope](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/HolyHope_v2.4)
|Paladin: multi-function UI.
|-
|[HolyPower](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/HolyPower_v1.0)
|Paladin: Holy Power tracker.
|-
|[Honor+](https://web.archive.org/web/20060719005646if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2753/Honor+%201.8.zip)
|Standalone version of Titan[Honor+] by Frosty.
|-
|[HonorKillCount](https://web.archive.org/web/20061112094821if_/http://www.viper.dk:80/wow/files/HonorKillCount_v1.72.zip)
|Gives you a small window for keeping track of your rank and kills. [Info](https://web.archive.org/web/20061126084315/http://www.viper.dk/wow/#HonorKillCount)
|-
|[HonorTab](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|On-screen window shows daily kills, daily deaths, session cp, average cp per-kill, and current rank.
|-
|[Horizons](https://web.archive.org/web/20060710053518if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4193/Horizons_0.83.zip)
|Horizons guild / raid addon.
|-
|[HostelBar](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/HostelBar_r11804)
|Buff duration & castbar.
|-
|[HotCandy](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/HotCandy-r14634.zip)
|Druid: HOT monitoring.
|-
|[HunterBar_FeedButton](https://web.archive.org/web/20060718124819if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/163/HunterBar_FeedButton_1.3.13a.zip)
|One click to feed the selected food to your pet (/feedpetbutton).
|-
|[HunterPetSkills](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/HunterPetSkills_v0.2.0)
|Find pets by skills (/sk). [Info](https://web.archive.org/web/20061105140413/http://www.goodintentionsguild.info/hunters.html)
|-
|[HunterVSNefarian](https://web.archive.org/web/20060828144445if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/3909/HunterVSNefarian_2.1.zip)
|Hunter's managment versus Nefarian (/hvsn).
|-
|[HZ_AutoRepBar](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/HZ_AutoRepBar_v1.11-1)
|Auto-reputation bar.
|-
|[HzRazu](https://web.archive.org/web/20061110112157if_/http://uifiles.worldofwar.net:80/upload/ui/1154997382HzRazu.zip)
|Show Timers for priests in Instructor Razuvious Encounter (/HzRazu).
|-
|[IceHUD](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/IceHUD_r13088)
|HUD overlay.
|-
|[ICU](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ICU_v1.3)
|Highlight/identify targets on mini-map.
|-
|[IDCard](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/IDCard_v0.3)
|Adds the itemID to item tooltips (/idcard).
|-
|[IdentiChatGizmo](https://web.archive.org/web/20060628200028if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/551/Inc_UI_Adv_D50.6_11000.exe)
|Keeps track of player info and displays that info by way of chat coloring and popup tooltips.
|-
|[idMinimap](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/idMinimap_r9396)
|Mini-map coordinates.
|-
|[IGuard](https://web.archive.org/web/20060710052333if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2259/IGuard.zip)
|Allows for quick reporting if you need help (/IGuard).
|-
|[IgniteMonitor](https://github.com/fastbond/wow-1.12.1-addons/tree/master/IgniteMonitor)
|Tracks current Ignite damage, stacks, duration, and total damage for all targets in range
|-
|[IGT_FuckOff](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/IGT_FuckOff_v1.6.1)
|Custom reply message (/igtfo).
|-
|[iManaConserve](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/iManaConserve_v1.12.3)
|Raid mana saving.
|-
|[IMBA](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/IMBA_v1.4)
|Boss mechanics & timers.
|-
|[IMBA UI](https://web.archive.org/web/20061110204638if_/http://uifiles.worldofwar.net:80/upload/ui/IMBA_1.0b.0_20061016.zip)
|VoidRaider's UI addons. [Info](https://web.archive.org/web/20060103100942/http://ui.worldofwar.net/ui.php?id=352)
|-
|[IMBA_Assist](https://web.archive.org/web/20061110204638if_/http://uifiles.worldofwar.net:80/upload/ui/IMBA_1.0b.0_20061016.zip)
|Assist allow you to quickly select an assistance player through the unit popup menu.
|-
|[IMBA_LockBars](https://web.archive.org/web/20061110204638if_/http://uifiles.worldofwar.net:80/upload/ui/IMBA_1.0b.0_20061016.zip)
|Lock Bars lock/unlock the Pet / Bags / Action bars in one button click.
|-
|[IMBA_PetBar](https://web.archive.org/web/20061110204638if_/http://uifiles.worldofwar.net:80/upload/ui/IMBA_1.0b.0_20061016.zip)
|Pet Bar shows you your Pet XP Bar along with its debuff/buffs.
|-
|[IMBA_QuestLevel](https://web.archive.org/web/20061110204638if_/http://uifiles.worldofwar.net:80/upload/ui/IMBA_1.0b.0_20061016.zip)
|Quest Level shows you the quest level both in the quest tracker and the quest log.
|-
|[IMBA_StickyChannel](https://web.archive.org/web/20061110204638if_/http://uifiles.worldofwar.net:80/upload/ui/IMBA_1.0b.0_20061016.zip)
|Sticky Channel makes WoW remember the last channel you used.
|-
|[IMBA_VendorBags](https://web.archive.org/web/20061110204638if_/http://uifiles.worldofwar.net:80/upload/ui/IMBA_1.0b.0_20061016.zip)
|Vendor Bags closes the bags automatically after leaving the vendor.
|-
|[IMBA_XPBar](https://web.archive.org/web/20061110204638if_/http://uifiles.worldofwar.net:80/upload/ui/IMBA_1.0b.0_20061016.zip)
|XP Bar enhancing your current XP Bar and shows you your rested state in points.
|-
|[ImmersionRP](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ImmersionRP_alpha4)
|Roleplay enhancements.
|-
|[ImprovedCamera](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ImprovedCamera_v2.0.0)
|Increased camera zoom.
|-
|[ImprovedIgnore](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ImprovedIgnore_v1.1.0.11200)
|Highlights ignored players.
|-
|[ImprovedMacro](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ImprovedMacro)
|Adds macro features.
|-
|[ImproveDressingRoom](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ImproveDressingRoom_v1.5o)
|Rotate character in dressing room.
|-
|[inCombat](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/inCombat_v0.3)
|In-combat notifications.
|-
|[Infield](https://web.archive.org/web/20060622004216if_/http://downloadmod.worldofwar.net:80/upload/ui/1145638908Addme.zip)
|A library of functions for safely scaling and placing frames.
|-
|[Innerfire](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Innerfire_v1.10.3)
|Provides a counter showing how many charges remain on a priest's Inner Fire buff.
|-
|[InnervateTalk](https://web.archive.org/web/20060717202258if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4259/InnervateTalk.zip)
|Innervates another player. Checks for range, cooldown, manabar, allignment and an existing Innervate. Outputs a chatmessage and a whisper.
|-
|[Insomniax](https://web.archive.org/web/20111116232405if_/http://wowguru.com/ui/archives/insomniax-recompilation-18-11202.zip)
|Insomniax Recompilation is a very user friendly and easy to setup compilation of the best User Interface modifications. [Info](https://web.archive.org/web/20061025140724/http://www.curse-gaming.com/en/wow/addons-297-1-insomniax-recompilation.html)
|-
|[Insomniax_MonkeyBuddy](https://web.archive.org/web/20111116232405if_/http://wowguru.com/ui/archives/insomniax-recompilation-18-11202.zip)
|Adds a small icon to the Mini-map to access the MonkeyBuddy panel.
|-
|[Insomniax_ItemSync](https://web.archive.org/web/20111116232405if_/http://wowguru.com/ui/archives/insomniax-recompilation-18-11202.zip)
|Adds a small icon to the Mini-map to access the Item Sync panel.
|-
|[Insomniax_IconMover](https://web.archive.org/web/20111116232405if_/http://wowguru.com/ui/archives/insomniax-recompilation-18-11202.zip)
|Allows the Insomniax Shell Buttons to be moved around the minimap.
|-
|[Insomniax_Core](https://web.archive.org/web/20111116232405if_/http://wowguru.com/ui/archives/insomniax-recompilation-18-11202.zip)
|Fonts used by the Insomniax Recompilation.
|-
|[Insomniax_CombatCaller](https://web.archive.org/web/20111116232405if_/http://wowguru.com/ui/archives/insomniax-recompilation-18-11202.zip)
|Automatically alerts others when you are low on health and mana (/combatcaller).
|-
|[Insomniax_BibWindowMod](https://web.archive.org/web/20111116232405if_/http://wowguru.com/ui/archives/insomniax-recompilation-18-11202.zip)
|Part of BibMod 4.
|-
|[Insomniax_BibToolbars](https://web.archive.org/web/20111116232405if_/http://wowguru.com/ui/archives/insomniax-recompilation-18-11202.zip)
|A modified version of BibToolbars for the Insomniax Recompilation based on original version 4.19.
|-
|[Insomniax_BibFrameFix](https://web.archive.org/web/20111116232405if_/http://wowguru.com/ui/archives/insomniax-recompilation-18-11202.zip)
|Prevent frame level values from rising too high in BibMod.
|-
|[Insomniax_BibCore](https://web.archive.org/web/20111116232405if_/http://wowguru.com/ui/archives/insomniax-recompilation-18-11202.zip)
|Core required by BibToolbars for the Insomniax Recompilation based on original version 4.20.
|-
|[Inspectmemory](https://web.archive.org/web/20060225143945if_/http://64.168.251.69:80/wow/InspectMemory.2006.01.04.zip)
|Keeps a "memory" of all players you mouseover, remembering their current inventory and allowing you to view that inventory. [Info](https://web.archive.org/web/20060216021044/http://64.168.251.69/wow/inspectmemory.html)
|-
|[Inspector](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Inspector_v0.9)
|Inspect distant players.
|-
|[IntensityAH](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/IntensityAH_v1.0.1Alpha)
|Multi-bid auctioning.
|-
|[Interface](https://web.archive.org/web/20061213235957if_/http://upload.hshh.org:80/homes/wow/Interface-20061123a.7z)
|hshh.org's addon pack. [Info](https://web.archive.org/web/20070111231209/http://upload.hshh.org/homes/wow/readme.htm)
|-
|[IntuitiveAttackTarget](https://web.archive.org/web/20061112100415if_/http://www.viper.dk:80/wow/files/IntuitiveAttackTarget_v1.38.zip)
|Modifies the default AttackTarget() function to act a little more intuitive. [Info](https://web.archive.org/web/20061126084315/http://www.viper.dk/wow/#IntuitiveAttackTarget)
|-
|[InventoryHawk](https://web.archive.org/web/20061127094012if_/http://downloadmod.worldofwar.net:80/upload/ui/1159719344InventoryHawk-3.3.1.zip)
|Easily track and assess your important inventory items. [Info](https://web.archive.org/web/20061230075315/http://ui.worldofwar.net/ui.php?id=678)
|-
|[InventoryOnPar](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/InventoryOnPar_v3.60)
|Item level indicator.
|-
|[InviteOMatic](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/InviteOMatic_v2.06)
|Auto-join groups/raids.
|-
|[IsBuffActive](https://web.archive.org/web/20060717202346if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/974/IsBuffActive08.zip)
|Check if a particular Buff or Debuff is Active, by Name, and return the Index.
|-
|[IsCasting](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Library that tracks your casting details.
|-
|[IsMounted](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Mini-Library that maintains a list of who's mounted.
|-
|[Isognomy](https://web.archive.org/web/20060622012312if_/http://downloadmod.worldofwar.net:80/upload/ui/1148896065Isognomy%20Compilation%20v110.rar)
|Isognomy's Addon Compilation.
|-
|[Itemizer](https://web.archive.org/web/20060716193910if_/http://auctioneeraddon.com:80/dl/Itemizer/itemizer-3.7.0.0893.zip)
|Stores items and their corresponding links (/itemizer).
|-
|[ItemLinkRecolor](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ItemLinkRecolor_v1.2.0)
|Color item links by level.
|-
|[ItemRack](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ItemRack_v1.976)
|Gear set management. [Info](https://web.archive.org/web/20061128040232/http://ui.worldofwar.net/ui.php%3Fid%3D1263)
|-
|[ItemScore](https://web.archive.org/web/20060711103536if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4250/ItemScore1.1.zip)
|Gives Score To Your Target's Gear (/itemscore).
|-
|[ItemScripts](https://github.com/fastbond/wow-1.12.1-addons/tree/master/ItemScripts)
|Macro functions for using items.
|-
|[ItemSpam](https://web.archive.org/web/20060624141236if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4125/ItemSpam.zip)
|Designed to be used in macros. /script ItemSpam("Title1",Item1,T2,I2,T3,I3,T4,I4,T5,I5,T6,I6,T7,I7,T8,I8,T9,I9,T10,I10)
|-
|[ItemSync](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ItemSync_v12.4)
|Search/view all seen items.
|-
|[JCSlashCmd](https://web.archive.org/web/20060717201213if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2200/BasicUI.zip)
|Developer slash command helper (/jt).
|-
|[JiralAmmoWarning](https://web.archive.org/web/20060622011653if_/http://downloadmod.worldofwar.net:80/upload/ui/1145982722CouncilOfAzerothModPack.zip)
|Warn the player when ammo is running low.
|-
|[John_Doe](https://web.archive.org/web/20061110112120if_/http://uifiles.worldofwar.net:80/upload/ui/1158509919John_Doe.zip)
|Guildnames off/on (/jd).
|-
|[JokerCast](https://web.archive.org/web/20060717201213if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2200/BasicUI.zip)
|Smart nuking with condition list (/jc).
|-
|[Jotter-K](https://web.archive.org/web/20061213235957if_/http://upload.hshh.org:80/homes/wow/Interface-20061123a.7z)
|In-Game Notebook (/jotter).
|-
|[Jotter-M](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|In-Game Notebook and LUA Executor (/jt).
|-
|[Jubei_AEP](https://web.archive.org/web/20060715181921if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/3107/Jubei_AEP_v0.6.3.zip)
|Agility Equivilance Points (/aep).
|-
|[JudgeHype](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/JudgeHype_v1b)
|Find NPCs on map.
|-
|[JunkSale](https://web.archive.org/web/20060622005100if_/http://downloadmod.worldofwar.net:80/upload/ui/1148743136CoaAddons.rar)
|Automatically sells junk items.
|-
|[JustClick](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/JustClick_v1.2.4)
|Click-to-cast macros (/jc).
|-
|[Kalented](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Kalented_v1.1.9)
|Built-in talent calculator.
|-
|[KBSWeaponSets](https://web.archive.org/web/20060622012449if_/http://downloadmod.worldofwar.net:80/upload/ui/1143965847Tainger%20Dainger%20-%20Easy%20UI.zip)
|Allows you to have up to eight unique weapon configurations,for main, secondary, range and ammo slots, and be able to switch between them with a single command (/ws).
|-
|[KCastTrinket](https://web.archive.org/web/20061110112625if_/http://uifiles.worldofwar.net:80/upload/ui/1155494325KCastTrinket.zip)
|Designed to use the player's trinkets, any trinket with a use:effect ability, as soon as it's available and within the designated health percentage (/kct).
|-
|[KC_AutoRepair](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/KC_AutoRepair_v1.03)
|Auto repair vendor.
|-
|[KC_EnhancedTrades](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/KC_EnhancedTrades_v1.2.2114)
|Professions window enhancements.
|-
|[KC_Items](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/KC_Items_v.94.5)
|Price/highlight/quick search items.
|-
|[KC_ScheduleKeep](https://web.archive.org/web/20060614091355if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2168/SexyUI1900r3.zip)
|Makes a Schedular Function Available via the AceUtils Architecture.
|-
|[KeepItCool](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/KeepItCool_v1.4.2)
|Notifies about profession cooldowns.
|-
|[Kennel](https://web.archive.org/web/20060518183945if_/http://fileserver2.wowinterface.com/download.php?id=4442)
|Swap a random minipet every time you visit the bank.
|-
|[Khaos](Khaos)
|Configuration Manager.
|-
|[KickAll](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/KickAll_v1.01)
|Kicks everyone from raid.
|-
|[KillingBlow](https://web.archive.org/web/20060624141506if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4207/KillingBlow.zip)
|A fun and simple mod that lets you know when you scored a killing blow on bosses, mobs or other players (/kba). [Info](https://web.archive.org/web/20060910180457/http://ui.worldofwar.net/ui.php?id=2675)
|-
|[KillMore](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/KillMore_v0.4)
|Tracks progress to next level.
|-
|[KillsToLevel](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/KillsToLevel_v0.53)
|Mobs needed for level-up (/kills).
|-
|[KLHDecurseMeter](https://web.archive.org/web/20060622012536if_/http://downloadmod.worldofwar.net:80/upload/ui/1145865694Werwolf_Interface_Collection_2.3%20-%2011000.zip)
|Find Who is Decursing in Your Raid.
|-
|[KLHFastTarget](https://web.archive.org/web/20060624140910if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/3659/KLHFastTargetR2.zip)
|Quickly Assign Multiple Targets With Mouseover.
|-
|[KLHManaStorm](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/KLHManaStorm_v4.5b)
|A one click raid healing mod with a focus on overheal prevention in high latency (/kms).
|-
|[KLHPerformanceMonitor](https://turtle-wow.fandom.com/wiki/KLHPerformanceMonitor)
|Tracks the memory creation and CPU usage of all the mods running. [Info](https://web.archive.org/web/20060902051930/http://www.curse-gaming.com/en/wow/addons-4351-klhperformancemonitor.html)
|-
|[KLHThreatMeter](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/KLHThreatMeter-17.36-mezmerize-petmod.zip)
|Monitors and records your threat, and will list your threat in a table with other members of your party or raid group who are using the mod. [Info](https://web.archive.org/web/20061025081550/http://ui.worldofwar.net/ui.php%3Fid%3D2284)
|-
|[KombatStats](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/KombatStats_v1.4)
|Combat/DPS stats.
|-
|[KronosGMAddon](https://github.com/GrenderG/KronosGMAddon)
|Gurky's Game Master Addon. [Img](https://imgur.com/3qgFPEM)(https://imgur.com/3qgFPEM Img)
|-
|[KTMAutoHider](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/KTMAutoHider_v1.1)
|Hides threat meter outside raids.
|-
|[KTMD](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/KTMD_v0.33)
|Threat per second.
|-
|[LanguageCycle](https://web.archive.org/web/20060614091355if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2168/SexyUI1900r3.zip)
|Adds UI, key binding and slash commands for selecting a character's current language (/lc).
|-
|[LanguageCommand](https://web.archive.org/web/20060614091355if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2168/SexyUI1900r3.zip)
|Slash command for changing Languages (/lang).
|-
|[LAX](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/LAX_v0.9.4.1)
|XP bar with customization.
|-
|[LazyFrostMage](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/LazyFrostMage_v0.51)
|Mage macro for offensive spells.
|-
|[LazyScript](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/LazyScript_v1.0.2)
|Programmable Class Attacks. [Info](https://web.archive.org/web/20061112202919/http://ithilyn.com/pmwiki/index.php/LazyScript/LazyScript)
|-
|[LazyRogue](https://web.archive.org/web/20060716232008if_/http://downloadmod.worldofwar.net:80/upload/ui/1151474787LazyRogue-3.0.zip)
|Programmable Rogue attacks. [Info](https://web.archive.org/web/20060814171016/http://ui.worldofwar.net/ui.php%3Fid%3D1574)
|-
|[LazyTank](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/LazyTank_v097b)
|Automates tank macros.
|-
|[LazyWarrior](https://web.archive.org/web/20060826014724if_/http://downloadmod.worldofwar.net:80/upload/ui/1151135175LazyWarrior.zip)
|Programmable Warrior attacks. [Info](https://web.archive.org/web/20061016021241/http://ui.worldofwar.net/ui.php?id=2767)
|-
|[LelekScout](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/LelekScout_v2.0.2)
|BG: enemy & hila counter.
|-
|[lern2count](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/lern2count_r14260)
|Spell usage counter.
|-
|[Lern2Spell](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Lern2Spell_r15902)
|Auto-level spell ranks.
|-
|[Lesly's](https://web.archive.org/web/20060711114359if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4324/lesly's%20ui%201110%20v1.112.zip)
|Lesly's raid addon pack. [Info](https://web.archive.org/web/20061105004909/http://www.curse-gaming.com/en/wow/addons-4324-1-leslys-raid-interface.html)
|-
|[LevelRange](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/LevelRange_v1.2.0)
|Shows location & dungeon levels on map. [Info](http://web.archive.org/web/20070211044357/http://www.levelrange.co.nr/)
|-
|[LevelWiz](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/LevelWiz_v1.0.1)
|Detailed XP info.
|-
|[LeviUI](https://web.archive.org/web/20061027222349if_/http://downloadmod.worldofwar.net:80/upload/ui/1160265142LeviUI%20v1.1.rar)
|Yet another compilation, Mostly Nurfed/ACE stuff for low mem usage.
|-
|[Lexan](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Lexan_v2.1)
|Opens auction window during gameplay.
|-
|[LFT](https://web.archive.org/web/20060614091355if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2168/SexyUI1900r3.zip)
|Looking For Trouble Raid Map extension made to process the WorldDefenseChannel, and to store and show the results advertised on this channel (/lft).
|-
|[Libram](https://web.archive.org/web/20061205102638if_/http://www.cosmosui.org:80/files/distros/Cosmos_Devtools.zip)
|Function library with additional features for Questlog Tracker. [Info](https://web.archive.org/web/20060720181850/http://www.wowwiki.com/Libram_(AddOn))
|-
|[LifeTapWarn](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|Lets party know that Warlock is using Life Tap, not being attacked!
|-
|[LilAddonMessage](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/LilAddonMessage_v1.0)
|Monitors addon messages (/am).
|-
|[LinkWrangler](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/LinkWrangler_v1.4)
|Enhances item links in chat.
|-
|[Lions](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Lions_v1)
|Replaces griffins with lions.
|-
|[LoadIT](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/LoadIT.zip)
|Reloads UI without logout.
|-
|[LoadIT-2](https://web.archive.org/web/20061127202951if_/http://uifiles.worldofwar.net:80/upload/ui/LoadIT-20000.1_20061117.zip)
|In-game addon management.
|-
|[Loc](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Zavier's Location (+Mars) adds a draggable location window (/loc help).
|-
|[Local_Defender](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Local_Defender_v2.5.4)
|Attack warnings in local defense.
|-
|[Localization](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Embeddable addon for sellecting a global localization for addons.
|-
|[LockBox](https://web.archive.org/web/20061116090214if_/http://downloadmod.worldofwar.net:80/upload/ui/1159409703LockBox.zip)
|Automation Tool for Warlocks. Makes every Warlocks Life easier. [Info](https://web.archive.org/web/20060616131805/http://ui.worldofwar.net/ui.php?id=2271)
|-
|[LookLock](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Allows user to switch to a state where moving the mouse rotates the character.
|-
|[Lookout](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Lookout_v2.96)
|Alerts for dangerous dungeon events.
|-
|[LootCounter](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/LootCounter_v0.6)
|Adds loot info to chat.
|-
|[LootFilter](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/LootFilter_v0.9.3.1)
|Filters unwanted loot.
|-
|[LootHog](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/LootHog-2.7.0-rb.zip)
|Tracks rolls & announces.
|-
|[LootLink_Enhanced](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/LootLink_Enhanced_v1.11.e16)
|All loot info & search. [Info](https://web.archive.org/web/20060406181725/http://www.curse-gaming.com/mod.php?addid=3326)
|-
|[LootSpy](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/LootSpy_v1.2)
|Monitors raid loot.
|-
|[Lootster](https://web.archive.org/web/20060622004216if_/http://downloadmod.worldofwar.net:80/upload/ui/1145638908Addme.zip)
|Loot rolling interface that allows you to call for and capture loot roles, arbitrate ties and announce winner(s).
|-
|[LootSwitch](https://web.archive.org/web/20061110111555if_/http://uifiles.worldofwar.net:80/upload/ui/1157578832LootSwitch.zip)
|Allows mob-based loot type switching (/ls). [Info](https://web.archive.org/web/20061029065515/http://ui.worldofwar.net/ui.php?id=2569)
|-
|[LootTracker](https://web.archive.org/web/20060716232239if_/http://downloadmod.worldofwar.net:80/upload/ui/1152064776LootTracker_v1_6_4.zip)
|Tracks party loot and kills to enable nice session summaries. [Info](https://web.archive.org/web/20060715092207/http://ui.worldofwar.net/ui.php?id=2219)
|-
|[Lore](https://github.com/seacrabsam/Lore)
|Create and use custom-defined languages. [Info](https://web.archive.org/web/20060427053722/http://www.curse-gaming.com/mod.php?addid=862)
|-
|[LowestHealth](https://web.archive.org/web/20061112094949if_/http://www.viper.dk:80/wow/files/LowestHealthSelection_v1.21.zip)
|Will select the party member with the lowest amount of health for fast healing response. [Info](https://web.archive.org/web/20061126084315/http://www.viper.dk/wow/#LowestHealthSelectionSystem)
|-
|[LS3D_CraftInfo](https://web.archive.org/web/20060622012536if_/http://downloadmod.worldofwar.net:80/upload/ui/1145865694Werwolf_Interface_Collection_2.3%20-%2011000.zip)
|Gather crafting information for a specific character and trade (/ls3d_ci). [Info](https://web.archive.org/web/20061126084657/http://www.lightstorm3d.com/download/wow/ls3d_craftInfo/ls3d_craft_info.htm)
|-
|[LuaProfiler](LuaProfiler)
|Tool for tracing function calls, measuring execution time, memory usage, and garbage collection activity within your Lua environment.
|-
|[LuaSlinger](https://web.archive.org/web/20060620022800if_/http://downloadmod.worldofwar.net:80/upload/ui/1144600592LuaSlinger.zip)
|Lua workbench.  Use it to write Lua scripts to automate complex tasks, react automatically to certain events, or whatever else you can imagine doing with Lua and the WoW API. [Info](https://web.archive.org/web/20060617221803/http://ui.worldofwar.net/ui.php?id=1386)
|-
|[Ludwig](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Ludwig)
|Item cost & sale info database (/lw or /ludwig).
|-
|[LVBM](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/LVBM_v1.93_RC1)
|Boss timers & alerts.
|-
|[M_Buffbar](https://web.archive.org/web/20061023004319if_/http://downloadmod.worldofwar.net:80/upload/ui/m_buffbar.v1.6_20061016.zip)
|Morganti's Buffbars. Improved Buff, Debuff, and Weapon Buff display. [Info](https://web.archive.org/web/20070509234859/http://ui.worldofwar.net/ui.php%3Fid%3D3115)
|-
|[MAFF](https://web.archive.org/web/20060622010708if_/http://downloadmod.worldofwar.net:80/upload/ui/1150599248Enlightened%20UI.zip)
|This is a frame finder for MoveAnything.  Its sole purpose is to do a /move and /unmove of frames without typing in their name.
|-
|[MageCmd](https://web.archive.org/web/20061110112549if_/http://uifiles.worldofwar.net:80/upload/ui/MageCmd1052_20061026.zip)
|Simple AddOn that added a few slash commands for Mages (/mchelp).
|-
|[MageEye](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MageEye_v1.0)
|Mage: announce polymorph durations.
|-
|[MageHelper](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MageHelper_v1.1)
|Mage class leader tools.
|-
|[MageX](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MageX)
|Mage: auto-buff & more.
|-
|[mailMinimap](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/mailMinimap_20121114-161856)
|Replaces mail icon.
|-
|[MailSound](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MailSound)
|Sound alert on mail.
|-
|[MailTo](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MailTo_v1.12)
|Mail management and tracking. [Info](https://web.archive.org/web/20060912012556/http://ui.worldofwar.net/ui.php?id=934)
|-
|[MainAssist](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MainAssist_v2.1)
|Raid tank target display.
|-
|[ManaAverage](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ManaAverage_v0.1)
|Shows group’s average mana %.
|-
|[ManaPerc](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ManaPerc_r18262)
|Tooltip: mana needed for spells.
|-
|[ManaSaver](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ManaSaver_v2.4.6)
|Adaptive healing spell ranks.
|-
|[ManaStones](https://web.archive.org/web/20060710053542if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4119/ManaStones0-45.zip)
|Make ONE button to create all mana stones for mages.
|-
|[ManaTick](https://github.com/fastbond/wow-1.12.1-addons/tree/master/ManaTick)
|Tracks mana regeneration ticks and displays the estimated time to next tick as a sliding bar.
|-
|[ManaTideTracker](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ManaTideTracker_r18298)
|Raid: Mana Tide totem.
|-
|[MangAdmin](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MangAdmin_v0.10a)
|GM/admin tool for MaNGOS servers.
|-
|[MapCoords](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MapCoords_v0.32)
|Coordinates on world map & frames.
|-
|[MapLocation](https://web.archive.org/web/20060828203856if_/http://downloadmod.worldofwar.net:80/upload/ui/1155994811MapLocation.zip)
|Adds a coordinate display to the Minimap. [Info](https://web.archive.org/web/20070325185608/http://ui.worldofwar.net/ui.php?id=3046)
|-
|[MapNotes](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MapNotes_v2.40.11200)
|Mark notes on the map.
|-
|[MapPinger](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MapPinger_v1.01)
|Mini-map ping indicator.
|-
|[MapZoom](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MapZoom_v1.03)
|Shortcut to zoom mini-map.
|-
|[MarsMod](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|MarsMod's addon collection. [Info](https://web.archive.org/web/20060910221602/http://ui.worldofwar.net/ui.php?id=291)
|-
|[Mars TwoTouchKeys](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Adds key bindings to access bars 2-4 using two keystrokes.
|-
|[MarsTradeHelper](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|CTRL-ALT-Clicking on an item trades it to your target.
|-
|[MarsTargetClass](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Adds a draggable window with your target's class and classification.
|-
|[MarsTargetBarText](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Adds text display to target's health and mana bars.
|-
|[MarsShiftyKeys](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Adds key bindings for shifting down one or two action bars.
|-
|[MarsRightMouseKey](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Adds key binding to simulate right mouse button.
|-
|[MarsRaid](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Advanced raid interface (/mr help).
|-
|[MarsQuestOrganizer](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Organizes your quests into categories (/q).
|-
|[MarsQuestLevel](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Displays quest levels in the quest log.
|-
|[MarsProfessionOrganizer](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Organizes your profession abilities into categories (/po).
|-
|[MarsPartyCast](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Prevents accidentally changing targets when casting beneficial spells on your party.
|-
|[MarsPartyBuff](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Adds advanced buff/debuff display for party members/pets.
|-
|[MarsPartyBarText](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Adds text display to party members' health and mana bars.
|-
|[MarsNeedyGreedy](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Summarizes loot messages (/mng).
|-
|[MarsMailHelper](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Intelligently fills in the address field of mail when sending items.
|-
|[MarsInventoryFunctions](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Adds new inventory functions for macros and mods.
|-
|[MarsGuildTip](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Adds player guild names to tooltip.
|-
|[MarsEditArrows](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Lets you use the arrow keys to edit your chat text.
|-
|[MarsEatNInfoKeys](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Adds key bindings for auto eating and informing party.
|-
|[MarsCenterTooltip](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Moves the main game tooltip from the lower right to the top center.
|-
|[MarsBar](https://web.archive.org/web/20060622010333if_/http://downloadmod.worldofwar.net:80/upload/ui/1147566716MarsMod20060513.zip)
|Shows buttons from action bar pages 2 through 6 (/mb).
|-
|[MarsQuestOrganizer](http://web.archive.org/web/20100714111012if_/http://fin.instinct.org/addons/archive-pre-v2/zips/MarsQuestOrganizer.rar)
|Organizes your quests into categories. Type /q for help.
|-
|[MarstiCOETKeys](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MarstiCOETKeys_v1.0)
|Alternate keybinds for CallOfElements.
|-
|[MarstiLeaveLFG](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MarstiLeaveLFG_v1.3)
|Join/leave LFG channel button.
|-
|[MasterTradeSkills](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MasterTradeSkills_v1.12.3)
|Reagents info in trade window. Adjusts the display of the tooltips to show which recipe is being used by the item your hovering above. [Info](https://web.archive.org/web/20061029065828/http://ui.worldofwar.net/ui.php?id=2146)
|-
|[MaterialsTracker](https://web.archive.org/web/20060710054410if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4233/MaterialsTracker_11000_v0.03.zip)
|Provides information of tradeskill and crafting materials that are in the banks and bags of your characters (/mtracker).
|-
|[Matlink](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Matlink_v0.5)
|Links materials in chat (Alt+click).
|-
|[MBB](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MBB_v0.312)
|Combines mini-map buttons.
|-
|[MCP](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/MCP.zip)
|Addons manager (/reload). [Info](https://web.archive.org/web/20060425065159/http://64.168.251.69/wow/mcp.html)
|-
|[MCPoly](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MCPoly_v0.1)
|Mage: polymorph in raid.
|-
|[MeanMage](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MeanMage_v2.0)
|Mage: auto-respond water/portal.
|-
|[MegaMacro](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MegaMacro_v1.7)
|84 preset macros.
|-
|[MehTrinketeer](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MehTrinketeer_v1.31)
|Manages trinkets.
|-
|[Mendeleev](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Mendeleev_v0.7b)
|Reagent & item info database.
|-
|[MerchantSafeList](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MerchantSafeList_v1.1)
|Protects items from accidental sale.
|-
|[MetaGuild](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MetaGuild_v11100-2)
|Guild info window.
|-
|[MetaHud](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MetaHud_v11200-16)
|Alternative high-quality HUD.
|-
|[MetaMap](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MetaMap_v11200-9)
|Enhanced world map. [Info](https://web.archive.org/web/20061222005854/http://ui.worldofwar.net/ui.php%3Fid%3D3331)
|-
|[MetaMap HQ Pack](https://web.archive.org/web/20061030051102if_/http://downloadmod.worldofwar.net:80/upload/ui/1160630068MetaMapHqPack1.28.zip)
|High Quality map pack add-on for Metamap. [Info](https://web.archive.org/web/20070515043026/http://ui.worldofwar.net/ui.php?id=3325)
|-
|[Mikile_UI](https://web.archive.org/web/20060622010257if_/http://downloadmod.worldofwar.net:80/upload/ui/1143604883Mikile_UI12Beta.rar)
|Mikile UI addon compilation.
|-
|[MinnaStats](https://web.archive.org/web/20061127042912if_/http://uifiles.worldofwar.net:80/upload/ui/MinnaStats_1_0_20061124.zip)
|Tracks your damage/healing/decursing across an entire party/raid (/mstats).
|-
|[MiniBlizzRaid](https://web.archive.org/web/20060622010708if_/http://downloadmod.worldofwar.net:80/upload/ui/1150599248Enlightened%20UI.zip)
|A miniature version of the Blizzard Raid drag-and-drop UI, without the raid frames.
|-
|[MiniCoords](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MiniCoords)
|Mini-map coordinates.
|-
|[MiniFriends](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MiniFriends_v0.12)
|Small friends list window.
|-
|[Minigames_Pack](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Minigames_Pack_v1)
|Collection of mini-games (Tetris, Sapper, etc.).
|-
|[MiniGroup2](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MiniGroup2_h.0.6.h)
|Compact, resource-efficient raid frames. [Info](https://web.archive.org/web/20060428111119/http://wow.jaslaughter.com/)
|-
|[MiniMage](https://github.com/totalllyswede/MiniMage_TWOW.git)
|Mage: portal/teleport buttons on mini-map. Updated for TurtleWoW. [Alt](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MiniMage_v1.2b/MiniMage)(https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MiniMage_v1.2b/MiniMage Alt)
|-
|[Minimalist](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Minimalist_v2.9.0)
|Auto-cancel duels, auto-revive, etc.
|-
|[MinimapMenu](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MinimapMenu_v1.3)
|Right-click menu on mini-map.
|-
|[MinimapZoom](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Hide the + and - zoom buttons and zoom using the Mouse Wheel.
|-
|[MobHealth](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MobHealth_v3.2)
|Shows enemy HP & mana as numbers & %. [Info](http://web.archive.org/web/20060822182514/http://wiki.wowace.com/index.php/MobHealth3_API_Documentation)
|-
|[MobileFrames](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|A template for making frames movable (/mobile). [Info](https://web.archive.org/web/20060612233737/http://www.wowwiki.com/MobileFrames)
|-
|[MobileMinimapButtons](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Move minimap buttons freely.
|-
|[MobInfo2](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MobInfo2_v3.24/MobInfo2)
|Adds information about the hovered mob to the tooltip and shows health/mana information in the target frame. [Info](https://web.archive.org/web/20061230075208/http://ui.worldofwar.net/ui.php%3Fid%3D1143)
|-
|[MobInfo2_Browser](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MobInfo2_v3.12/MobInfo2_Browser)
|Lets you browse and search a ton of data in your MobInfo database.
|-
|[ModelMagic](https://web.archive.org/web/20060718123030if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/3864/ModelMagic0.91cfix.zip)
|Lets you display 3d models on your interface, fully customasiable.
|-
|[Modifier2Sell](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Force holding of modifier button while clicking when selling items to a vendor to help prevent accidental item sales.
|-
|[Mon_ChatExt](https://web.archive.org/web/20061213235957if_/http://upload.hshh.org:80/homes/wow/Interface-20061123a.7z)
|Adds mousewheel scrolling, time stamps, and makes chats sticky.
|-
|[MonitorStatus](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Monitor Status shows party member and target status to help healers and warriors alike.
|-
|[MonkeyMod](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/MonkeyAddons.zip)
|Alternative quest log, clock, speed. [Info](https://web.archive.org/web/20061130144010/http://toctastic.net/)
|-
|[MontiTchota](https://web.archive.org/web/20061110114556if_/http://uifiles.worldofwar.net:80/upload/ui/MontiTchota's%20Compilation_20061017.rar)
|MontiTchota's Addon Compilation
|-
|[Moog_Hud](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Moog_Hud_v1.12.2)
|HUD overlay.
|-
|[Mortal Kombat](https://web.archive.org/web/20111209021945if_/http://www.warcraftrealms.com/mods/MKombat-20003.zip)
|Plays some Mortal Kombat sound effects and other stuff in the future. [Info](https://web.archive.org/web/20061113194236/http://www.warcraftrealms.com/mkombat.php)
|-
|[MountMaster](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MountMaster_v1.8)
|Mounts: auto-use random mount.
|-
|[Mousegesture](https://web.archive.org/web/20061110113257if_/http://uifiles.worldofwar.net:80/upload/ui/1156805706MouseGesture181.zip)
|Adds mousegesture support providing nearly endless instant executable commands. You can fight, fish, follow and everyting else you can do with commands simply by moving your mouse (/mgesture).
|-
|[MovableBags](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MovableBags_v1.2)
|Move bags / UI elements.
|-
|[MoveAnything](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/MoveAnything.zip)
|Move any UI frame. [Info](https://web.archive.org/web/20061025211009/http://www.curse-gaming.com/en/wow/addons-2435-1-moveanything-redux.html)
|-
|[MozzEasyMail](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MozzEasyMail_v1.07)
|Remember last mail recipient.
|-
|[MozzFullWorldMap](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MozzFullWorldMap_v2.05.11200)
|View unexplored map areas.
|-
|[MozzSoundVolumeFix](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MozzSoundVolumeFix_v1.1)
|Fix sound issues on Alt+Tab.
|-
|[Mp3Player](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Mp3Player_v1.0)
|In-game MP3 player.
|-
|[MSBT](MikScrollingBattleText)
|Customizable combat text.
|-
|[MTLove](https://web.archive.org/web/20060627204037if_/http://downloadmod.worldofwar.net:80/upload/ui/1149628088MTLove_2-1-BETA_5_1.zip)
|Displays the name of the party-member (or NPC as option) that a moused-over mob is attacking. [Info](https://web.archive.org/web/20060908113037/http://ui.worldofwar.net/ui.php?id=2411)
|-
|[Muc.G.D.UI](https://web.archive.org/web/20060622005321if_/http://downloadmod.worldofwar.net:80/upload/ui/1148389909Muc.G.D.UI.zip)
|Muc.G.D.UI addon compilation.
|-
|[MultiAssist](https://web.archive.org/web/20060628200028if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/551/Inc_UI_Adv_D50.6_11000.exe)
|Allows you to set up to 20 'Assist' assignments. You can then see the health of thier targets, and the health of thier target's target, including all the debuffs.
|-
|[MusicList](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MusicList_v1.2)
|Play list of music files.
|-
|[myAddOns](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/myAddOns_v2.6)
|Addons manager. [Info](https://web.archive.org/web/20061028030903/http://ui.worldofwar.net/ui.php?id=222)
|-
|[MyBags](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MyBags_v0.4.4)
|Single bag & bank.
|-
|[MyBank](https://web.archive.org/web/20060520202632if_/http://downloadmod.worldofwar.net:80/upload/ui/1143884880AlesUI1101-noatlas.zip)
|Standalone, configurable bank viewer.
|-
|[myBindings2](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/myBindings2_r16536)
|Key binding interface.
|-
|[myClock](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/myClock_v1.8.2)
|Simple clock display.
|-
|[myDebug](myDebug)
|Provides debug tools to the AddOns developpers. You can browse a variable like a tree. You can type scripts and execute them. [Info](https://web.archive.org/web/20060908233633/http://ui.worldofwar.net/ui.php?id=503)
|-
|[MyInventory](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MyInventory_v1.12)
|Enlarged inventory.
|-
|[myMemory](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/myMemory_v1.2)
|Memory & FPS monitor (CTRL + R).
|-
|[myMusic](https://web.archive.org/web/20060710053648if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/1860/myMusic%201.8b2.zip)
|An in-game MP3-player
|-
|[MyQuests](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MyQuests_rev130)
|Create custom quests (/mq create).
|-
|[myReloadUI](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|A ReloadUI button.
|-
|[myReputation](https://web.archive.org/web/20060710054344if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/3334/myReputation_11000R1Beta1.zip)
|Changed display of reputation window and chat messages.
|-
|[MyRolePlay](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/MyRolePlay_v2.2.2)
|RP info for roleplayers.
|-
|[Naked](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Naked_v2.84)
|Quick undress to avoid repair costs.
|-
|[Name Cycle](https://web.archive.org/web/20060507052700if_/http://www.vigilance-committee.org:80/wow/downloads/NameCycle-0.4-11000.zip)
|Cycle between name display options
|-
|[NanoStats](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/NanoStats_r12749)
|DPS/heal monitor.
|-
|[NapalmedUI](https://web.archive.org/web/20060622010056if_/http://downloadmod.worldofwar.net:80/upload/ui/1148668096NapalmedUI10D.zip)
|Napalmed UI addon compilation.
|-
|[Napoleon](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Napoleon_v1.122)
|Raid: organize & manage heals.
|-
|[Necessity](https://web.archive.org/web/20060717205136if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4447/Necessity%20UI%20release.zip)
|Necessity UI pack.
|-
|[Necronomicon](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Necronomicon_r17319)
|Necrosis-like spell management.
|-
|[Necrosis](Necrosis)
|Warlock spells, demons, stones.
|-
|[NeedyList](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/NeedyList_v2.05)
|Raid heal & buff monitoring.
|-
|[NemesisUI](https://web.archive.org/web/20060622011409if_/http://downloadmod.worldofwar.net:80/upload/ui/1149084541Nemesis%20UI_1.10.23.zip)
|Nemesis UI addon compilation.
|-
|[NiceDamage](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/NiceDamage)
|Custom damage fonts.
|-
|[NIce Papyrus](https://web.archive.org/web/20061110114323if_/http://uifiles.worldofwar.net:80/upload/ui/1159797152nIce_Papyrus_v0.7.1beta.zip)
|Enhanced Textpad.
|-
|[Ninja](https://web.archive.org/web/20061110112650if_/http://uifiles.worldofwar.net:80/upload/ui/1158101565Ninja-1.12.0.zip)
|Automatically detect undesirables that join your group (/ninja). [Alt](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)(https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip Alt)
|-
|[NoJoinLeaveSpam](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/NoJoinLeaveSpam_20121015-163756)
|Remove join/leave chat spam.
|-
|[NoteIt](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/NoteIt_v1.05)
|Add notes to NPCs/players.
|-
|[Notes](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Notes_v1.3a)
|Simple note-taking.
|-
|[Notepad](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|A simple tabbed notepad window.
|-
|[NovaWatch](https://web.archive.org/web/20060716232304if_/http://downloadmod.worldofwar.net:80/upload/ui/1151178241NovaWatch%2011100.3.zip)
|Mage: freeze timer display. [Info](https://web.archive.org/web/20060910221349/http://ui.worldofwar.net/ui.php?id=1079)
|-
|[ntmysFixLoadingTimes](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ntmysFixLoadingTimes_v13)
|Faster loading times. [Info](https://web.archive.org/web/20060426014456/http://demonmagnet.com/elitistforum/viewtopic.php?p=4782)
|-
|[NUF](https://web.archive.org/web/20060615220543if_/http://downloadmod.worldofwar.net:80/upload/ui/1150011407AV%20addonpack.zip)
|Noctambul Unit Frames.
|-
|[Nurfed](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Nurfed_v09.06.2006)
|Complete UI overhaul.
|-
|[oApplication](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/oApplication_r10981/oApplication)
|Use poisons with right click.
|-
|[oCB](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/oCB_r17104)
|Custom cast bar.
|-
|[oCD](https://web.archive.org/web/20061112113618if_/http://www.wowace.com:80/files/oCD/oCD-r13727.zip)
|Visual display of bar cooldowns.
|-
|[ODBGTools](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ODBGTools_v2.6b)
|BG helper functions.
|-
|[oGlow](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/oGlow_20130112-173944)
|Highlights in inventory.
|-
|[OmaTriage](https://web.archive.org/web/20060622012449if_/http://downloadmod.worldofwar.net:80/upload/ui/1143965847Tainger%20Dainger%20-%20Easy%20UI.zip)
|Simplified bandage and potion use (/omaTriage).
|-
|[Omnibus](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Omnibus_r16421)
|Notepad.
|-
|[OneBag](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/OneBag.zip)
|Alternative to Bagnon.
|-
|[OneBagSorter](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/OneBagSorter_r16545)
|Sorting for OneBag.
|-
|[OneHitWonder](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/OneHitWonder_v1.9)
|One-click macros for all classes.
|-
|[OnEventWatch](OnEventWatch)
|Estimates OnEvent processing time by frame. [Info](https://web.archive.org/web/20080616110340/http://www.wowinterface.com/downloads/fileinfo.php?id=4840)
|-
|[OneRaid](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/OneRaid_v4.0.4)
|Raid frames.
|-
|[OpenClam](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/OpenClam_v0.7)
|Auto-open loot sinks.
|-
|[Opium](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Opium_v2.7a)
|PvP stats & kill sheets.
|-
|[oRA2](oRA2)
|Raid management (like CT_RaidAssist).
|-
|[oRogueHelper](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/oRogueHelper_r15962)
|Rogue: manage combo points & energy.
|-
|[oSkin](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/oSkin_r15794)
|Custom UI skin (smooth, transparent).
|-
|[Otravi_UnitFrames](https://web.archive.org/web/20060517062011if_/http://svn.wowace.com:80/dl.php?repname=Ace+SVN&path=%2Ftrunk%2Fotravi_UnitFrames%2F&rev=0&isdir=1)
|A unit frame replacement (/ouf).
|-
|[Outfitter](Outfitter)
|Quick gear/disguise switching.
|-
|[OzRaid](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/OzRaid_v1.42)
|Compact raid monitor.
|-
|[PacifistInnervate](https://web.archive.org/web/20060624141911if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4211/PacifistInnervate.zip)
|Intelligently casts Innervate on raid members.
|-
|[Palanoob](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Palanoob_v1.2.1)
|Paladin: simplify buffs.
|-
|[PallyPower](PallyPower)
|Paladin: buff assignment.
|-
|[Panza](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Panza_v4.1)
|Healer: buff/removal helper. [Info](http://web.archive.org/web/20060911084827/http://ui.worldofwar.net/ui.php?id=1042)
|-
|[Paparazzi](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Paparazzi_r16903)
|Screenshots & photo management.
|-
|[Paranoia](https://web.archive.org/web/20060520201148if_/http://downloadmod.worldofwar.net:80/upload/ui/1143820408Paranoia-v1.3.zip)
|Detect enemies in the near vicinity. Detection is done by registering to events which are triggered by enemy players. [Info](https://web.archive.org/web/20070516090125/http://www.xs4all.nl/~rmetzger/paranoia/)
|-
|[Parchment](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Parchment_v3.11)
|Notepad.
|-
|[Parrot](https://web.archive.org/web/20061110210419if_/http://uifiles.worldofwar.net:80/upload/ui/1157928692Parrot%2011200-2.zip)
|Quotes from the Monty Python dead parrot sketch when someone dies.
|-
|[PartyComm](https://web.archive.org/web/20060622011653if_/http://downloadmod.worldofwar.net:80/upload/ui/1145982722CouncilOfAzerothModPack.zip)
|Creates a hidden channel for the party you are currently in that can be used by addons for client/server style communication.
|-
|[PartyQuests](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Shows party member's quests.
|-
|[PartyQuestComm](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/PartyQuestComm_r14075)
|Share quests with party.
|-
|[PartySpotter](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/PartySpotter_v3.10.11200)
|Highlight Party members on the WorldMap and distinguish them from Raid members, and players of the same faction in BattleGrounds.
|-
|[PartyTabSystem](https://web.archive.org/web/20060621201508if_/http://www.viper.dk:80/wow/files/PartyTabSystem_v1.21.zip)
|Cycle through party members using a key binding. [Info](https://web.archive.org/web/20061126084315/http://www.viper.dk/wow/#PartyTabSystem)
|-
|[PassLoot](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/PassLoot_v1.3)
|Decline loot based on rules.
|-
|[Peanut](https://web.archive.org/web/20060622003952if_/http://downloadmod.worldofwar.net:80/upload/ui/1145559873pvcUI_2.1.rar)
|It's Peanut Butter Jelly Time (/Peanut).
|-
|[PerfectRaid](https://web.archive.org/web/20061208005332if_/http://www.wowace.com:80/files/PerfectRaid/PerfectRaid-r17567.zip)
|Minimalistic, but functional raid frames.
|-
|[PerfectShot](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/PerfectShot_testversion7)
|Remove UI/names for screenshots.
|-
|[Perl_Classic](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Perl_Classic_v0.81d)
|Classic style UI enhancements. [Info](https://web.archive.org/web/20061028163032/http://ui.worldofwar.net/ui.php%3Fid%3D1465)
|-
|[Perl](https://github.com/rootedCF/classicaddons/tree/master/AddOns/p/Perl)
|Copies the configuration of X-Perl from old folder to new. Do not re-enable this mod after it has been run once.
|-
|[Perl_ColorChange](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Perl_ColorChange_v1.2_beta1)
|Colors target frame by reaction.
|-
|[Perl_Raid_Distance](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Perl_Raid_Distance_v0.952)
|Show range & status of raid members.
|-
|[Perl_Target_Target](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|Displays a movable target of target frame.
|-
|[Perl_Target_Target_2D](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Perl_Target_Target_2D_v0801)
|2D portrait of target.
|-
|[Perl_Target](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|Displays a movable target frame to replace the default.
|-
|[Perl_Player_Pet](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|Displays a movable pet frame to replace the default.
|-
|[Perl_Player_Buff](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|Displays buffs below the Player Frame.
|-
|[Perl_Player](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|Displays a movable player frame to replace the default.
|-
|[Perl_Party](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|Displays a movable party frame to replace the default.
|-
|[Perl_Config](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|Displays a configuration menu for Perl Classic Unit Frames.
|-
|[Perl_CombatDisplay](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|Displays a movable bar that displays health, rage/energy/mana, and combo points.
|-
|[Perl_ArcaneBar](https://web.archive.org/web/20060716231915if_/http://downloadmod.worldofwar.net:80/upload/ui/1152452082ACUI_v0.6.0.zip)
|Displays a cast bar inside the Player Frame.
|-
|[PetFeeder](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/PetFeeder_v3.3.1.3)
|Hunter: easy pet feeding.
|-
|[PetInfo](https://web.archive.org/web/20060507052323if_/http://www.vigilance-committee.org:80/wow/downloads/PetInfo-0.6-11000.zip)
|Remember information about trained pets
|-
|[Phoenix](Phoenix DevPad)
|Addon Developer Tool.
|-
|[PingSnitch](https://web.archive.org/web/20060624141738if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4145/PingSnitch_1.0.3.zip)
|Snitches on whoever pings the minimap.
|-
|[Pingy](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Pingy_v11200.00)
|Detects who pings on mini-map.
|-
|[PlayerLinkMenu](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/PlayerLinkMenu_v1.58)
|Right-click menu on player names. [Info](https://web.archive.org/web/20061126084315/http://www.viper.dk/WoW/)
|-
|[PlayerMenu](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/PlayerMenu_r16454)
|Extended right-click menu on players.
|-
|[PocketHelper](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/PocketHelper_v0.7)
|Quick loot when using Pick Pocket.
|-
|[PolyHelper](https://web.archive.org/web/20060719205117if_/http://downloadmod.worldofwar.net:80/upload/ui/1153181625PolyHelper.zip)
|Mage: warns of polymorph durations. [Info](https://web.archive.org/web/20061027231123/http://ui.worldofwar.net/ui.php?id=1052)
|-
|[Pong](https://web.archive.org/web/20061110111820if_/http://uifiles.worldofwar.net:80/upload/ui/1159897549Pong002.zip)
|A two-dimensional sports game that simulates table tennis.
|-
|[PopBar](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|PopBar is a highly configurable self hiding action bar.
|-
|[PopupAssist](https://web.archive.org/web/20060614091355if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2168/SexyUI1900r3.zip)
|Player Popup menu to easier Assist (/pa).
|-
|[Popsicle](https://web.archive.org/web/20061124211838if_/http://wow.reaktio.net:80/Popsicle-r13875.zip)
|Show/Hide Seperated ChatFrameX when joining/leaving raid (/pop).
|-
|[PowerAuras](PowerAuras)
|Visual effects for procs & cooldowns.
|-
|[Prat](Prat)
|Extensive chat customization. [Info](https://web.archive.org/web/20061030213705/https://www.wowace.com/wiki/Prat)
|-
|[PriceEach](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/PriceEach_v0.02)
|Shows cost per item in auctions.
|-
|[PriceMaster](https://web.archive.org/web/20061129185545if_/http://downloadmod.worldofwar.net:80/upload/ui/1153075671PriceMaster.zip)
|A script to monitor the vendor price of items.. [Info](https://web.archive.org/web/20061028030951/http://ui.worldofwar.net:80/ui.php?id=1780)
|-
|[PriestHelper](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/PriestHelper_v1.15)
|Priest: class leader tools.
|-
|[Priest Quest](https://web.archive.org/web/20060828144540if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/3689/PriestQuest-1.10-deDE.zip)
|Allows one click help with targetting the Priest Epic Quest Enemys. Simply use /pq or /priestquest to enable the Addon.
|-
|[PrivateChat](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/PrivateChat_r17183)
|Creates virtual cyphered chat channels over guild addon communication channel. [Info](https://web.archive.org/web/20070306100944/http://wowace.com/wiki/PrivateChat)
|-
|[ProcWatcher](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ProcWatcher_v2.0)
|Tracks spell/ability procs.
|-
|[Profession_Helper](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Profession_Helper_v1.0)
|Profession trading helper (/ph).
|-
|[Prowler](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Prowler_v1.7c)
|Druid: form change & stealth panel.
|-
|[PVPCooldownReborn](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/PVPCooldownReborn_v2.9.1)
|PvP timer.
|-
|[PvPLog](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/PvPLog_v0.6.1)
|Logs PvP kills/deaths.
|-
|[PVPTrinket](https://web.archive.org/web/20061022153134if_/http://downloadmod.worldofwar.net:80/upload/ui/PVPTrinket_20061018.zip)
|Auto-switch PVP trinkets (/pt). [Info](https://web.archive.org/web/20061205232556/http://ui.worldofwar.net/ui.php?id=3218)
|-
|[qImmunityClock](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/qImmunityClock_v1.5)
|Timer for PvP CC immunity.
|-
|[Quanjure](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Quanjure_v2.5)
|Mage: various functions.
|-
|[QuestAnnouncer](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/QuestAnnouncer_r17551)
|Announces quest progress.
|-
|[QuestHistory](https://web.archive.org/web/20060720210015if_/http://downloadmod.worldofwar.net:80/upload/ui/1153187349QuestHistory_v11100-1.zip)
|Logs all quest activities. An in-game history of quests accepted, completed, and abandoned. [Info](https://web.archive.org/web/20060207064220/http://www.curse-gaming.com/mod.php?addid=2310)
|-
|[QuestHistoryMap](https://web.archive.org/web/20060510143323if_/http://downloadmod.worldofwar.net:80/upload/ui/1147016429QuestHistoryMap%20v2.0.zip)
|QuestHistoryMap is used to if you have QuestHistory to display all Quests like Gatherer is displaying resources / chests / etc.
|-
|[Questie](https://github.com/Questie/Questie/releases/download/v3.69/Questie-3.69.zip)
|A standalone Vanilla QuestHelper.
|-
|[QuestIon](https://web.archive.org/web/20070114014926if_/http://wow.medievalweapons.net:80/question/downloads/QuestIon-v161.zip)
|A configurable window for quest objective tracking (/qio). [Info](https://web.archive.org/web/20070106075248/http://ui.worldofwar.net/ui.php?id=368)
|-
|[QuestItem](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/QuestItem_v1.7.2)
|Shows quest items in inventory.
|-
|[QuestLevel](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/QuestLevel_v2.1)
|Shows quest levels in log.
|-
|[QuestLink](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/QuestLink)
|Send/receive quest links.
|-
|[QuestLogLevelPatch](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Adds level within paranthesis to the quest log. Example: [62] Order Must Be Restored
|-
|[Quick Chat](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Quick%20Chat_v1.3)
|Assign keys for chat commands.
|-
|[QuickCompare](https://web.archive.org/web/20061110112349if_/http://uifiles.worldofwar.net:80/upload/ui/AV%20Mod_20061018.zip)
|Compare equipped inventory items against items in any other frames, including but not limited to quest and log, bags and bank, chat hyperlinks, and even other mods.
|-
|[QuickHeal](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/QuickHeal_v1.16.2)
|Raid healing macro (/qh cfg). [Info](https://web.archive.org/web/20061028031051/http://ui.worldofwar.net/ui.php?id=1872)
|-
|[QuickLoot Plus](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/QuickLoot%20Plus_v1.12.0/QuickLoot%20Plus)
|Loot window under cursor.
|-
|[QuickLoot](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/QuickLoot_v1.12)
|Basic loot under cursor.
|-
|[QuickMountEquip](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/QuickMountEquip_v2.21)
|Quick gear change on mount.
|-
|[QuuRetarget](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/QuuRetarget_v1.0)
|Retarget after kill.
|-
|[RABuffs](Rabuffs)
|Raid buff monitor.
|-
|[Radar](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Radar_v1.5b)
|Enemy proximity detection.
|-
|[RaidCalendar](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/RaidCalendar_v0.3)
|Guild/raid scheduling.
|-
|[RaidDump](https://web.archive.org/web/20060520164509if_/http://www.ctmod.net:80/blighted/RaidDump.zip)
|Dumps the raid information to be parsed later on (/raiddump).
|-
|[RaidHealer](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/RaidHealer_v1.0.7)
|Raid healing management.
|-
|[Raid Reset Times](https://web.archive.org/web/20060518183827if_/http://fileserver2.wowinterface.com/download.php?id=4669)
|AddOn that tracks when the various Raid Instances reset.
|-
|[RaidSummon](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/RaidSummon_v2.2)
|Warlock: summon raid.
|-
|[RaidSync](https://web.archive.org/web/20061110112703if_/http://uifiles.worldofwar.net:80/upload/ui/1160319918RaidSync_4.0.zip)
|A smaller management system for CT_RaidAssist (/rsync).
|-
|[RaidTarget](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/RaidTarget_v0.7)
|Auto-mark raid targets.
|-
|[RaidTargets](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/RaidTargets_v1.33)
|Manage raid icons.
|-
|[RamzClock](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/RamzClock_v1.8)
|Server time & profession cooldowns.
|-
|[RandomMount](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/RandomMount_v1.2.0)
|Bind button for random mount.
|-
|[RangeHelp](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/RangeHelp_v4.1a)
|Adjust skills based on distance.
|-
|[RangeRecolor](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/RangeRecolor.zip)
|Out-of-range spell indicator.
|-
|[RankScore](https://web.archive.org/web/20060716152044if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/3261/RankScore-11100.1.zip)
|Shows a numeric estimate of your PVP rank point score (/rankscore). [Info](https://web.archive.org/web/20061201215150/http://www.curse-gaming.com/en/wow/addons-3261-1-rankscore.html)
|-
|[RapidQuestPack](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/RapidQuestPack_v1.2)
|Complete quest helper pack.
|-
|[RASCT](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/RASCT_v11200-1)
|Relay CT_RaidAssist warnings.
|-
|[Rauen_Pet](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Rauen_Pet_v4211.1)
|Hunter: pet control.
|-
|[Rawr](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Rawr_r16340)
|Adds sound & roar effects.
|-
|[RDM](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/RDM_v1.2)
|Damage & DPS monitor.
|-
|[ReactionBar](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ReactionBar_v1.2.3)
|Spell panels change based on target’s reaction. [Info](https://web.archive.org/web/20061230190817/http://ui.worldofwar.net/ui.php?id=1445)
|-
|[ReagentCount](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ReagentCount_v1.1)
|Shows reagent counts on action buttons.
|-
|[ReagentHelper](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Adds the professions that a reagent is used by, to the game tooltip.
|-
|[ReagentInfo](https://web.archive.org/web/20061022153049if_/http://downloadmod.worldofwar.net:80/upload/ui/1160283859ReagentInfo%20v1.5.7.zip)
|Displays profession/recipe usage information in item tooltips. Info
|-
|[RealDropDown](https://web.archive.org/web/20060620024731if_/http://downloadmod.worldofwar.net:80/upload/ui/1143798977RealDropDown_v103.zip)
|Allows the use of many different dropdown menus on a single page. [Info](https://web.archive.org/web/20060616201228/http://ui.worldofwar.net/ui.php?id=1704)
|-
|[Recap](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Recap_v3.35)
|Fight stats & DPS.
|-
|[RecipeBook](https://web.archive.org/web/20061023062154if_/http://downloadmod.worldofwar.net:80/upload/ui/1160345690RecipeBook_1.12.0b.zip)
|Keeps track of which of your alts knows what trade skill recipes, on tooltips. [Info](https://web.archive.org/web/20060909050229/http://ui.worldofwar.net:80/ui.php?id=1583)
|-
|[RecipeRadar](https://web.archive.org/web/20061129185417if_/http://downloadmod.worldofwar.net:80/upload/ui/1158605111RecipeRadar-1.11.zip)
|Locates vendors who sell recipes in the current region or by profession. [Info](https://web.archive.org/web/20060914003015/http://ui.worldofwar.net:80/ui.php?id=2492)
|-
|[Redirection](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Redirection_r13574)
|Helps tank regain aggro.
|-
|[RedRange](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/RedRange_v0.4)
|Spell range indicator (red out-of-range).
|-
|[Rejuvenation](https://web.archive.org/web/20060703183017if_/http://downloadmod.worldofwar.net:80/upload/ui/1143549970Rejuvenation.zip)
|Useful tool for helping in refreshing Rejuvenation / Faerie Fire (/re). [Info](https://web.archive.org/web/20060507165237/http://ui.worldofwar.net/ui.php?id=2298)
|-
|[Relinker](https://web.archive.org/web/20060622012536if_/http://downloadmod.worldofwar.net:80/upload/ui/1145865694Werwolf_Interface_Collection_2.3%20-%2011000.zip)
|Allows the user to relink a link from the chat window.
|-
|[ReloadUI](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Adds /reloadui and a Reload UI Keybinding.
|-
|[ReMinimap](https://web.archive.org/web/20061022154154if_/http://downloadmod.worldofwar.net:80/upload/ui/1160081475ReMinimap-1.2.zip)
|Customizes mini-map. [Info](https://web.archive.org/web/20061028162307/http://ui.worldofwar.net/ui.php?id=2810)
|-
|[RepairMyStuff](https://web.archive.org/web/20061110111416if_/http://uifiles.worldofwar.net:80/upload/ui/1158889391RepairMyStuff.zip)
|Automatically repairs your stuff when you speak to a vendor.
|-
|[Reputation](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Reputation_v1800.4)
|Displays reputation points.
|-
|[Reputation2](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Reputation2)
|Reputation info in combat log.
|-
|[ReputationPercentage](https://web.archive.org/web/20060621201553if_/http://www.viper.dk:80/wow/files/ReputationPercentage_v1.23.zip)
|Adds a percentage readout to your reputation level bars. [Info](https://web.archive.org/web/20061126084315/http://www.viper.dk/wow/#ReputationPercentage)
|-
|[Restack2](https://web.archive.org/web/20061110112351if_/http://uifiles.worldofwar.net:80/upload/ui/1153850382Restack2.zip)
|Automatically restack items in your bags and bank, organizing your inventory efficiently (/rs2).
|-
|[RestedBonus](https://web.archive.org/web/20060716232046if_/http://downloadmod.worldofwar.net:80/upload/ui/1151127463RestedBonus_1.1.zip)
|XP bonus from rest. Reports on your rested bonus.
|-
|[RicoDev](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/RicoDev_v1.0)
|Developer tools (/ricodev).
|-
|[Rico's Item Linker](https://web.archive.org/web/20060413225602if_/http://www.emerald-order.com:80/wow/download/download.php?plugin=Emerald-UI)
|TypeLinks allows the user to link an item in chat by typing its name with the syntax [*itemname*] and to search for items with [?string?].
|-
|[RiposteAlert](https://web.archive.org/web/20060620023057if_/http://downloadmod.worldofwar.net:80/upload/ui/1143527073RiposteAlert.zip)
|Alerts you with a whistle whenever a Riposte is ready. [Info](https://web.archive.org/web/20060328175558/http://ui.worldofwar.net/ui.php?id=1155)
|-
|[Rise and Shine](https://web.archive.org/web/20060717205931if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/3639/Rise_and_Shine_DKP_Manager_12.zip)
|Complete DKP management tool that connects to EQdkp.
|-
|[Rise and Shine Incoming Heals](https://web.archive.org/web/20060715184753if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2936/Rise_and_Shine_IncomingHeals_33.zip)
|Shows amount of incoming heals in CT_RaidAssist.
|-
|[Rk_RangeAssist](https://web.archive.org/web/20061110113908if_/http://uifiles.worldofwar.net:80/upload/ui/1159054168Rk_RangeAssist_0-9.zip)
|Shows the estimated range for raid members in CT_RaidAssist (/rkra).
|-
|[rlrp](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/rlrp_v0.50)
|RP: voice & messaging.
|-
|[RogueQuickMount](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/RogueQuickMount_v1.1)
|Rogue: stealth & vanish macro.
|-
|[RogueSpam](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/RogueSpam.zip)
|Filters out some of the annoying error messages during combat. [Info](https://web.archive.org/web/20060909050759/http://ui.worldofwar.net:80/ui.php?id=2117)
|-
|[RogueHelper](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Allows you to get a small window with your health, energy, combo points and targets health that you can drag around.
|-
|[RoleplayingHelper](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/RoleplayingHelper_v0.90d)
|RP: emotions & cues (/rp). [Info](https://web.archive.org/web/20070226143737/http://ui.worldofwar.net/ui.php?id=2914)
|-
|[RollTracker](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/RollTracker_v.1.1.1)
|Track & filter rolls in raids.
|-
|[Ronsoft Hud](https://web.archive.org/web/20060828234051if_/http://downloadmod.worldofwar.net:80/upload/ui/1155925522Ronsoft_Hud_3.2.zip)
|Hud for Player/Target
|-
|[RPPolice](https://web.archive.org/web/20061110111353if_/http://uifiles.worldofwar.net:80/upload/ui/1153496709RPPolice-0.2.zip)
|Makes it easier to report bad names on RP servers (it will also work on normal servers of course!).
|-
|[RSavedHealer](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/RSavedHealer_v1.12.7)
|Heal functions (/rsh).
|-
|[rSelfCast](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/rSelfCast_v2.10)
|Self cast with right-click.
|-
|[RStats](https://web.archive.org/web/20060622011509if_/http://downloadmod.worldofwar.net:80/upload/ui/1144937742BG's%20UI%20Pack%201.1.rar)
|Manage and display resource gathering statistics (mining, smelting, herb gathering, skinning).
|-
|[ruRU](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ruRU_20121009-210932)
|Russian localization.
|-
|[SacredBuff](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SacredBuff_r16352)
|Paladin: buff panel.
|-
|[SadarUI](https://web.archive.org/web/20060622004514if_/http://downloadmod.worldofwar.net:80/upload/ui/1144346296SadarUI.zip)
|Sadar UI addon compilation.
|-
|[SafeDE](https://web.archive.org/web/20060622011653if_/http://downloadmod.worldofwar.net:80/upload/ui/1145982722CouncilOfAzerothModPack.zip)
|Safe Disenchanter pops up a confirmation box before disenchanting an item.
|-
|[SafeDistance](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SafeDistance_v0.3.122)
|Show distance to bosses/debuffs.
|-
|[SAM_Icons](https://web.archive.org/web/20060109151315/http://hem.bredband.net/b138265/SAM_Icons_complete.zip)
|Icon-pack consisting of more than 400 individual icons for use with the in-game macro system. [Info](https://web.archive.org/web/20060112223906/http://www.asymmetric-art.com/SAM_Icons/)
|-
|[SAM_Mage_Keybindings](https://web.archive.org/web/20060222012453if_/http://ui.worldofwar.net:80/upload/ui/1139063051SAM_Mage_Keybindings.zip)
|Smart Mage keybindings(/smk). [Info](https://web.archive.org/web/20060208153059/http://www.asymmetric-art.com/SAM_Keybindings/)
|-
|[SatrinaBuffFrame](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SatrinaBuffFrame_v11100.07)
|Buff/debuff display customization.
|-
|[ScaledLifeTap](ScaledLifeTap)
|Warlock: Life Tap optimization.
|-
|[SecretSauce](https://web.archive.org/web/20060507052931if_/http://www.vigilance-committee.org:80/wow/downloads/SecretSauce-0.12-11000.zip)
|Secret Sauce makes your frames go faster (maybe).
|-
|[ScreenPlus](https://web.archive.org/web/20061110112829if_/http://uifiles.worldofwar.net:80/upload/ui/1159801172ScreenPlus_10.zip)
|Hides main UI and takes screenshot with shooting informations.
|-
|[ScreenshotKeyBinding](https://web.archive.org/web/20061112095312if_/http://www.viper.dk:80/wow/files/ScreenshotKeyBinding_v1.57.zip)
|Will allow you to make a button- or key binding for taking screenshots. Holding down Shift while taking a screenshot will hide the UI when taking it. [Info](https://web.archive.org/web/20061126084315/http://www.viper.dk/wow/#ScreenshotKeyBinding)
|-
|[ScholomanceUI](https://web.archive.org/web/20060622012110if_/http://downloadmod.worldofwar.net:80/upload/ui/1149494914Scholomance%20UI%20-%20v0.5.rar)
|Undead Mage UI Compilation.
|-
|[SCT](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/SCTv5.1.zip)
|Damage & event overlay over UI. Adds Scrolling Combat Text above your character. [Info](https://web.archive.org/web/20061118222201/http://grayhoof.wowinterface.com/portal.php?&id=41&pageid=12)
|-
|[sct_cooldowns](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/sct_cooldowns_v1.4.2)
|Advanced cooldown display.
|-
|[sct_killingblows](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/sct_killingblows_v1.0)
|Announce kills in PvP.
|-
|[SCTD](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SCTD_r13903)
|Damage overlay. [Info](https://web.archive.org/web/20061118045828/http://ui.worldofwar.net/ui.php%3Fid%3D2525)
|-
|[Sea](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|An organized WoW Function Library. Sea is a set of function libraries designed to make the process of writing new UI mods faster and simpler. It is designed to reflect a Java like library style.
|-
|[SeaString](https://web.archive.org/web/20061205102638if_/http://www.cosmosui.org:80/files/distros/Cosmos_Devtools.zip)
|A Mini-Library for string functions.
|-
|[SeaSpellbook](https://web.archive.org/web/20061205102638if_/http://www.cosmosui.org:80/files/distros/Cosmos_Devtools.zip)
|Spellbook cache.
|-
|[SeaPrint](https://web.archive.org/web/20061205102638if_/http://www.cosmosui.org:80/files/distros/Cosmos_Devtools.zip)
|A Mini-Library for standardized print functions.
|-
|[SeaHooks](https://web.archive.org/web/20061205102638if_/http://www.cosmosui.org:80/files/distros/Cosmos_Devtools.zip)
|A Mini-Library for standardized function and frame script element hooks.
|-
|[SealJudge](https://web.archive.org/web/20060620024342if_/http://downloadmod.worldofwar.net:80/upload/ui/1146381103SealJudge-0.6.1.zip)
|This addon will handle all your Seals and Judgements with a single Key (/sj config).
|-
|[SelfCast](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SelfCast_v1.12)
|Supports optional Alt self-casting and auto self-targeting for beneficial spells (/selfcast help). [Info](https://web.archive.org/web/20051203184414/http://www.curse-gaming.com/mod.php?addid=133)
|-
|[SellEnchant](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SellEnchant_v1.12.3)
|Assists in the selling of enchants, tracking of reagents, and learning skill levels. [Info](https://web.archive.org/web/20061230075734/http://ui.worldofwar.net/ui.php?id=1478)
|-
|[Sell-O-Matic](https://web.archive.org/web/20060622011653if_/http://downloadmod.worldofwar.net:80/upload/ui/1145982722CouncilOfAzerothModPack.zip)
|Allow you to define a custom list of items that will be automatically sold as soon as you visit the vendor.
|-
|[SellValue](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SellValue_v38)
|Tracks item sale prices.
|-
|[Serenity](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Serenity_v1.0.2)
|Management of Priest spells, abilities, and reagents. Serenity will provide you a sphere and 9 buttons. The sphere will display relevant information and the outer buttons will provide quick access to all your priestly desires (/seren). [Info](https://web.archive.org/web/20061027140130/http://ui.worldofwar.net/ui.php%3Fid%3D3057)
|-
|[SeriousBuffTimers](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SeriousBuffTimers_r16658)
|Buff durations by seconds.
|-
|[Servitude](Servitude)
|Warlock: pet management.
|-
|[SetWrangler](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SetWrangler_v12)
|Tracks gear sets & bonuses.
|-
|[SexyUI](https://web.archive.org/web/20060703182556if_/http://downloadmod.worldofwar.net:80/upload/ui/1151361669SexyUI.zip)
|The compilation that makes your User-Interface look really Sexy with tons of excellent functionality. [Info](https://web.archive.org/web/20061028121012/http://ui.worldofwar.net/ui.php?id=828)
|-
|[ShadowBar](https://web.archive.org/web/20060620022632if_/http://downloadmod.worldofwar.net:80/upload/ui/1147246159ShadowBar.zip)
|This mod will add a bar for all your shadow priest spells.
|-
|[ShadowCancel](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ShadowCancel_v0.2)
|Priests: exit Shadowform.
|-
|[ShadowcryUI](https://web.archive.org/web/20060622005600if_/http://downloadmod.worldofwar.net:80/upload/ui/1148365773ShadowcryUI.zip)
|Shadowcry UI addon compilation.
|-
|[ShadowPriest](https://web.archive.org/web/20060715181933if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4129/ShadowPriest-1.1.zip)
|Auto switches between action bars for caster and shadowform. Includes Polaris general purpose library. [Info](https://web.archive.org/web/20060703105838/http://curse-gaming.com/en/wow/addons-4129-1-shadowpriest.html)
|-
|[ShadRaidIcons](https://web.archive.org/web/20060717204210if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4435/ShadRaidIcons_v0.2b.zip)
|An advanced ... addon for MTtarget icons! (/sri).
|-
|[ShadTargets](https://web.archive.org/web/20060718121103if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4436/ShadTargets.zip)
|An advanced ... addon for targetting!
|-
|[ShamanAid](https://web.archive.org/web/20060716231955if_/http://downloadmod.worldofwar.net:80/upload/ui/1151091572ShamanAid_2.4.zip)
|Shaman: Weapon buff warning system. [Info](https://web.archive.org/web/20060908235412/http://ui.worldofwar.net/ui.php?id=2417)
|-
|[ShamanBuffBar](https://web.archive.org/web/20061110114042if_/http://uifiles.worldofwar.net:80/upload/ui/1158305084ShamanBuffBar11200.5.zip)
|A row of buttons for your self-buff abilities (/sbbar).
|-
|[ShammyBuff](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ShammyBuff_v3.5)
|Shaman: buff & poison removal.
|-
|[ShapeBind](https://web.archive.org/web/20061109225912if_/http://uifiles.worldofwar.net:80/upload/ui/ShapeBind_20061020.zip)
|Adds keybinding for shapeshifting and dismounting (/shpb). [Info](https://web.archive.org/web/20061016020917/http://ui.worldofwar.net/ui.php?id=3246)
|-
|[Shapeshift Mana Helper](https://web.archive.org/web/20060717205517if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4270/Shapeshift%20Mana%20Helper.zip)
|Shows how much mana you can spend and be able to shapeshift after. Can divide the mana bar into two parts, the left one shows how much shapeshifting takes and the right one the rest (/ssmh).
|-
|[ShardAce](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ShardAce_v3.4)
|Warlock: shard count & info.
|-
|[ShardGrid](https://web.archive.org/web/20061110111921if_/http://uifiles.worldofwar.net:80/upload/ui/1159694603ShardGrid.zip)
|A game where you match rows or columns of colored shards (/sg).
|-
|[ShardHistory](https://web.archive.org/web/20061111020806if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4752/ShardHistory_v1.21.zip)
|Counts what you do with your Shards (/sh).
|-
|[ShardTracker](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ShardTracker_v2.53)
|Warlock: shard monitoring.
|-
|[SheepMod](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SheepMod_v226)
|Mage: polymorph functions & timers.
|-
|[SheepSafe](https://web.archive.org/web/20061110113036if_/http://uifiles.worldofwar.net:80/upload/ui/SheepSafe2-5.0_20061018.zip)
|Advanced Crowd Control.
|-
|[SheepWatch](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SheepWatch_v11100.4)
|Mage: polymorph timer. [Info](http://www.curse-gaming.com/mod.php?addid=1176)
|-
|[Sheppard](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Sheppard_r16468)
|Warns if target is polymorphed.
|-
|[ShieldLeft](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ShieldLeft_v11000.1)
|Remaining shields (Priests, Warlocks, Mages).
|-
|[ShieldsUp](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ShieldsUp_v1.14c)
|Mage: auto shield assignment.
|-
|[Shifter2](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Shifter2_r16164)
|Druid: form switch macros.
|-
|[ShirisMod](https://web.archive.org/web/20061110211135if_/http://uifiles.worldofwar.net:80/upload/ui/ShirisModFull11200.1.23.4_20061025.zip)
|Compilation of mods. [Info](https://web.archive.org/web/20061029030728/http://ui.worldofwar.net/ui.php%3Fid%3D2846)
|-
|[ShowGuild](https://web.archive.org/web/20061027123834if_/http://downloadmod.worldofwar.net:80/upload/ui/1160734147tnz-showguild-11200.2.zip)
|Display guild name of target. [Info](https://web.archive.org/web/20060911173112/http://ui.worldofwar.net/ui.php?id=2676)
|-
|[ShowOnlyAvailable](https://web.archive.org/web/20060520202248if_/http://downloadmod.worldofwar.net:80/upload/ui/1143980957ShowOnlyAvailable.zip)
|Show only the available items from trainers.
|-
|[SHunterTimers](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SHunterTimers_v1.6.11)
|Hunter: ability & debuff timers.
|-
|[SilverDragon](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SilverDragon_r19293)
|Tracks rare mobs.
|-
|[SimpleActionSets](https://web.archive.org/web/20060716232345if_/http://downloadmod.worldofwar.net:80/upload/ui/1145072873SimpleActionSets.0.47b.zip)
|Allows all existing actions to be saved to a set which can be changed to later. [Info](https://web.archive.org/web/20061028162243/http://ui.worldofwar.net/ui.php?id=1560)
|-
|[SimpleAssist](https://web.archive.org/web/20060622010637if_/http://downloadmod.worldofwar.net:80/upload/ui/1148053756SimpleAssist_1_6.zip)
|Replace the common /assist macro
|-
|[SimpleBagStats](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SimpleBagStats_v1.5)
|Visual bag space info.
|-
|[SimpleCombatLog](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SimpleCombatLog_r15413)
|Better, color-coded combat log.
|-
|[SimpleCompass](https://web.archive.org/web/20060716232137if_/http://downloadmod.worldofwar.net:80/upload/ui/1146403609SimpleCompass.0.9.zip)
|A basic, but pretty compass. [Info](https://web.archive.org/web/20060911091110/http://ui.worldofwar.net/ui.php?id=2479)
|-
|[SimpleFeignHealth](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SimpleFeignHealth_v2.0)
|Show party members' feigned death HP.
|-
|[SimpleMinimap](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/simpleMinimap.zip)
|Move and scale the minimap, drag and hide default minimap buttons. [Info](https://web.archive.org/web/20060822104225/http://ui.worldofwar.net/ui.php%3Fid%3D2598)
|-
|[SimpleMp3](https://web.archive.org/web/20060622005100if_/http://downloadmod.worldofwar.net:80/upload/ui/1148743136CoaAddons.rar)
|A Simple Mp3 Player.
|-
|[SimpleSelfCast](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SimpleSelfCast_v1.10)
|Self-casting macro.
|-
|[SimpleTranqShot](https://web.archive.org/web/20060901090900if_/http://downloadmod.worldofwar.net:80/upload/ui/1151233924SimpleTranqShot.1.9.zip)
|Hunter: announce Tranquilize Shot. [Info](https://web.archive.org/web/20061028162931/http://ui.worldofwar.net/ui.php?id=1245)
|-
|[Sinsmod-basic](https://web.archive.org/web/20060618204242if_/http://www.titansofazeroth.com:80/mods/sinsmod-basic.zip)
|Custom profiles for Discord Art and Discord Unit Frames (with the mods included). [Info](https://web.archive.org/web/20061027231009/http://ui.worldofwar.net/ui.php?id=1989)
|-
|[SizeUpGizmo](https://web.archive.org/web/20060628200028if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/551/Inc_UI_Adv_D50.6_11000.exe)
|Player Vs Target comparison plus combat UI (/sug).
|-
|[SkillLevel](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SkillLevel_v1.1)
|Show skill level vs. character level.
|-
|[SkillStance](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SkillStance_v1.03)
|Warrior: change stance based on skill.
|-
|[Skinner](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/Skinner.zip)
|Customize game UI appearance.
|-
|[SKMap](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SKMap_v1.6)
|Tracks PvP/PvE kills & deaths on map.
|-
|[Sky](https://web.archive.org/web/20060623051211if_/http://www.cosmosui.org:80/cosmos/Cosmos_Beginner.zip)
|Network Communication Library for Mods. [Info](https://web.archive.org/web/20060823104508/http://www.wowwiki.com/Sky)
|-
|[Skrom's_TotemTimer](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Skrom's_TotemTimer_v0.1)
|Shaman: totem timers.
|-
|[SlashLib](https://web.archive.org/web/20061110111708if_/http://uifiles.worldofwar.net:80/upload/ui/SlashLib_201_20061026.zip)
|Slash commands library.
|-
|[SmartAspect](https://web.archive.org/web/20060515032530if_/http://www.wowguru.com:80/ui/archives/universal-essentials-217-1530.zip)
|Changes Aspects automatically (/smartaspect).
|-
|[SmartAssist](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SmartAssist_v1.5.0)
|Improves default assisting and targetting system in groups.
|-
|[SmartBandage](https://web.archive.org/web/20060413225602if_/http://www.emerald-order.com:80/wow/download/download.php?plugin=Emerald-UI)
|Find and use the right bandage for the job.
|-
|[SmartBuff](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SmartBuff_v1.12a)
|Automates buffing.
|-
|[SmartEngineer](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SmartEngineer_v0.4)
|Engineer: smart grenade/bomb selection.
|-
|[SmartExplosives](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SmartExplosives_v0.3)
|Best grenade/bomb selection (engineers).
|-
|[SmartHeal](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SmartHeal_v1.30)
|Smart healing & buffing.
|-
|[SmartMedic](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SmartMedic_v2.1.3)
|Best bandages, food, water.
|-
|[SmartML](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SmartML_v1.0)
|Raid loot distribution (DKP).
|-
|[SmartPet](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SmartPet_v2.5.2b)
|Hunter: pet control.
|-
|[SmartRes](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SmartRes_r16069)
|Auto-resurrect & heal.
|-
|[SmartRestore](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SmartRestore_v3.7)
|Restores mana & health efficiently.
|-
|[SmartShopper](https://web.archive.org/web/20061127093337if_/http://downloadmod.worldofwar.net:80/upload/ui/1159574468SmartShopper.zip)
|Simple UI mod that provides statistics for items you try on in the Dressing Room. [Info](https://web.archive.org/web/20070211233211/http://ui.worldofwar.net/ui.php?id=3240)
|-
|[smilie2emote](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/smilie2emote_v1.4.1b)
|Converts chat emoticons to emotions.
|-
|[SM_PlayerMenu](https://web.archive.org/web/20060622004216if_/http://downloadmod.worldofwar.net:80/upload/ui/1145638908Addme.zip)
|Right Click on a Playerlink in Chatwindow will open a menu to handle, eg. invite or ignore
|-
|[SM_UnitFrames](https://web.archive.org/web/20060515010529if_/http://www.wowguru.com:80/ui/archives/fenrisaui-a1101-225-a1101.zip)
|Hud for Player/Target/Party.
|-
|[SnaFu](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/FuBar_v2.0_full/SnaFu)
|Warlock: Soul Stone count (/snafu).
|-
|[SnapToGrid](https://web.archive.org/web/20060622005600if_/http://downloadmod.worldofwar.net:80/upload/ui/1148365773ShadowcryUI.zip)
|Adds a key modifier to snap dragged frames to a grid (/snap).
|-
|[SocialMods](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Adds "Send Message" and "Send Page" buttons and Player notes!
|-
|[SoftenTheBlow](https://web.archive.org/web/20060624141557if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4251/SoftenTheBlow.zip)
|Automagically use Dampen Magic when you are DOTed.
|-
|[SolidUI](https://web.archive.org/web/20060622011207if_/http://downloadmod.worldofwar.net:80/upload/ui/1148814840Solid%20UI%20V0.05.zip)
|Solid UI addon compilation. 
|-
|[SortEnchant](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SortEnchant_v3.0.2)
|Sorts enchants in window. Adds groupings to the Enchanting window, and also includes numorous filtering options.
|-
|[SortEnchantButtons](https://web.archive.org/web/20060717201213if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2200/BasicUI.zip)
|Adds the GUI features added by SortEnchant.
|-
|[SoulStamp](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SoulStamp_v0.2)
|Warlock: item soulstone info.
|-
|[Soundtrack](https://web.archive.org/web/20060509035757if_/http://downloadmod.worldofwar.net:80/upload/ui/1141514717Soundtrack%20v0.23.zip)
|Music customization system. [Info](https://web.archive.org/web/20060515153642/http://ui.worldofwar.net/ui.php?id=2043)
|-
|[Spam_Guard_Plus](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Spam_Guard_Plus_v2.4.1)
|Protects from spam.
|-
|[SpamIam](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SpamIam_v004)
|Blocks spam messages.
|-
|[SpecialTalent](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SpecialTalent)
|Shows talent trees & builds.
|-
|[SpellAlert](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SpellAlert_v1.11.8)
|Warns the player of the spell being casting from the hostile units. [Info](https://web.archive.org/web/20060908113023/http://ui.worldofwar.net/ui.php?id=2403)
|-
|[SpellAlertSCT](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SpellAlertSCT_v11200-4)
|Warns the player of the spell being casting from hostile units through SCT. [Info](https://web.archive.org/web/20060908235631/http://ui.worldofwar.net/ui.php%3Fid%3D2538)
|-
|[SpellBookTag](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SpellBookTag_v0.41)
|Highlights unlearned spells in red.
|-
|[SpellCritTip](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SpellCritTip_20120920-161241)
|Shows crit chance for spells.
|-
|[SpellDPS](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SpellDPS_v0.94)
|Spell damage & DPS in tooltip. [Info](https://web.archive.org/web/20060908111258/http://ui.worldofwar.net/ui.php?id=1323)
|-
|[SpellDRUID](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SpellDRUID_v1.8)
|Druid: optimal spell use.
|-
|[SpellDuration](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SpellDuration_v1.6b10)
|Shows duration of buffs/spells.
|-
|[SpellDurationData](https://web.archive.org/web/20061110114333if_/http://uifiles.worldofwar.net:80/upload/ui/1159944727SpellDurationData1.1b.8.zip)
|Spell Duration [Data File] used with the SpellDuration addon.
|-
|[SpellEmote](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SpellEmote_v1.0)
|Custom chat spell emotes (/spellemote).
|-
|[SpellMats](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SpellMats_v1.12.0.0)
|Reagent count in action panels.
|-
|[Spellometer](https://web.archive.org/web/20061110113244if_/http://uifiles.worldofwar.net:80/upload/ui/1156751899Spellometer-0.6.zip)
|Tool for tallying the total number of each spell cast by people and on whom they were cast.
|-
|[SpelloutMacro](https://web.archive.org/web/20060518183510if_/http://fileserver2.wowinterface.com/download.php?id=4644)
|Macros named after a spell use the spell's tooltip.
|-
|[SpellRankCheck](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SpellRankCheck_v0_1)
|Updates spell ranks in buttons.
|-
|[SpellReadyTurtle](https://github.com/GitUser999A/spellReadyTurtle)
|Center-screen pulse when selected spells become ready (Hunters-only)
|-
|[rpgo-CharacterProfiler](https://web.archive.org/web/20060915040341if_/http://www.rpgoutfitter.com:80/downloads/rpgo-CharacterProfiler-latest.zip)
|Export Character Profiles for use out-of-game. [Info](https://web.archive.org/web/20061029212311/http://www.rpgoutfitter.com/Addons/CharacterProfiler.cfm)
|-
|[rpgo-GuildProfiler](https://web.archive.org/web/20060520202640if_/http://www.rpgoutfitter.com:80/files/rpgo-GuildProfiler_1.5.1.exe)
|Export Guild Roster for use out-of-game. [Info](https://web.archive.org/web/20061029212302/http://www.rpgoutfitter.com/Addons/GuildProfiler.cfm)
|-
|[SpiritCollector](https://web.archive.org/web/20060624141952if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4142/SpiritCollector%20v1.zip)
|Tells you when your mana regen is back to normal.
|-
|[SpiritSphere](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SpiritSphere_v0.3)
|Shaman: totem & spell UI.
|-
|[SpiritVersusIntellect](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SpiritVersusIntellect_v1.11.0)
|Mana regen based on Spirit.
|-
|[Sprocket](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/Sprocket.zip)
|"Wheel" style menu system.
|-
|[SqueakyWheel](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SqueakyWheel_v06.09.18)
|Raid priority & spell management.
|-
|[Squeenix](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Squeenix_r12769)
|Ace2'd Square Minimap.
|-
|[SquidMod](https://web.archive.org/web/20081204073211if_/http://fs.wowinterface.com:80/download.php?id=8659)
|EndCap Graphics Mod. Type /squid for a list of commands. [Info](https://web.archive.org/web/20060411161713if_/http://www.asymmetric-art.com/SquidMod/)
|-
|[Squishy](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Squishy_r14640)
|Raid monitor with distance & settings.
|-
|[sRaidFrames](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/sRaidFrames_r17700)
|Lightweight raid frames.
|-
|[SSHonor](https://web.archive.org/web/20061023004608if_/http://downloadmod.worldofwar.net:80/upload/ui/1160369944SSHonor.zip)
|Honor point tracker.  Enchanted information regarding how much honor you've earned, along with where you earned the honor. [Info](https://web.archive.org/web/20061029152544/http://ui.worldofwar.net/ui.php%3Fid%3D3276)
|-
|[SSLibrary](https://web.archive.org/web/20061110113021if_/http://uifiles.worldofwar.net:80/upload/ui/SSBGLibrary100_20061026.zip)
|Handles battleground specific data.
|-
|[SSPVP](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SSPVP_v1.6.8)
|PvP-related functions (/sspvp). [Info](https://web.archive.org/web/20061231023046/http://ui.worldofwar.net/ui.php?id=1948)
|-
|[Stacker](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Stacker_v1.2.2)
|Auto-stack similar items.
|-
|[StanceSets3](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/StanceSets3.zip)
|Warrior stance & weapon set switcher. [Info](https://web.archive.org/web/20061127095335/http://capnbry.net/wow/)
|-
|[StarshadowUI](https://web.archive.org/web/20060622012241if_/http://downloadmod.worldofwar.net:80/upload/ui/1148219855StarshadowUI_5302_20060521.1.zip)
|StarshadowUI is a compilation of modules. [Info](https://web.archive.org/web/20060619203656/http://ui.worldofwar.net/ui.php?id=1522)
|-
|[StatCompare](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/StatCompare_v1.7.006)
|Detailed stat comparison.
|-
|[StatRings](https://web.archive.org/web/20060507053133if_/http://www.vigilance-committee.org:80/wow/downloads/StatRings-0.6.7dev-10900.zip)
|Ring indicators for health and mana
|-
|[StatusBars](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/StatusBars_v1.6.6)
|HP, mana, rage, energy bars.
|-
|[sToT](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/sToT_v0.1)
|Shows target's target info.
|-
|[Strip](https://web.archive.org/web/20060624141353if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4218/Reborn100.zip)
|Strip down, FAST. /strip - /unstrip - /striptoggle - /stripord -  Enjoy!
|-
|[StupidMount2](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Will automatically dismount when gathering stuff. Will also dismount on any action that can not be performed mounted.
|-
|[StunWatch](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/StunWatch_v2.3b)
|Rogue: stun/debuff duration. [Info](https://web.archive.org/web/20060703104143/http://curse-gaming.com/en/wow/addons-886-1-stunwatch.html)
|-
|[SuicideKings](https://web.archive.org/web/20060828144249if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2335/SuicideKings_2.09.zip)
|Helper for Suicide Kings loot system (/sk). [slide show](https://web.archive.org/web/20060412173743/http://www.shadowlords-gorefiend.com/web/mods/SuicideKings.swf)(https://web.archive.org/web/20060412173743/http://www.shadowlords-gorefiend.com/web/mods/SuicideKings.swf slide show) [Info](https://web.archive.org/web/20061121055002/http://www.curse-gaming.com/en/wow/addons-2335-1-suicidekings.html)(https://web.archive.org/web/20061121055002/http://www.curse-gaming.com/en/wow/addons-2335-1-suicidekings.html Info)
|-
|[SuperCast](https://web.archive.org/web/20051216010639if_/http://ui.worldofwar.net:80/upload/ui/1127980730SuperCast-1.5a.zip)
|Rotating Spell Casting Switching Buttons (/supercast help). [Info](https://web.archive.org/web/20060113222254/http://ui.worldofwar.net/ui.php?id=1344)
|-
|[SuperInspect](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SuperInspect_v1.192.sm12)
|Inspect players at distance.
|-
|[SuperMacro](SuperMacro)
|Advanced macro management.
|-
|[SuperPlayerLink](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SuperPlayerLink_v1.0)
|Extended right-click player menu.
|-
|[SW_Stats](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/SW_Stats-2.0.b7.1-rb.zip)
|Alternative damage meter.
|-
|[SwiftShift](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/SwiftShift%20_v1.7)
|Druid: form change macros.
|-
|[Swinger](https://web.archive.org/web/20061110111531if_/http://uifiles.worldofwar.net:80/upload/ui/1154796909Swinger2.0.zip)
|Adds ranged and melee weapon icon with swing timer (/Swinger).
|-
|[SWPHeal](https://web.archive.org/web/20061110111619if_/http://uifiles.worldofwar.net:80/upload/ui/1157080553SWPHeal_1_3.zip)
|Customizable raid view addon for healers that provides clickable raid member buttons, range checks, buff/debuff displays, and scripting capabilities for efficient healing management (/swp). [Info](https://web.archive.org/web/20061028121148/http://ui.worldofwar.net/ui.php?id=2976)
|-
|[SystemMessageControlTool](https://web.archive.org/web/20070510125636if_/http://www.viper.dk:80/wow/files/SystemMessageControlTool_v1.28.zip)
|Controls system messages (/smct). [Info](https://web.archive.org/web/20061126084315/http://www.viper.dk/wow/#SystemMessageControlTool)
|-
|[Tab](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/Tab_v0.3)
|Auto-complete nicknames with Tab.
|-
|[TackleBox](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Makes the fishermans life much easer.
|-
|[TakHud](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TakHud_v0.71)
|Simple HUD overlay.
|-
|[TalentReminder](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TalentReminder_v1.0)
|Warns about unspent talent points.
|-
|[TalentSafe](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TalentSafe_v1.2)
|Confirms talent point spending.
|-
|[TalentTextLink](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TalentTextLink_v1.23)
|Shows talent info in chat. [Info](https://web.archive.org/web/20061126084315/http://www.viper.dk/wow/#TalentTextLink)
|-
|[TalentWhisper](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TalentWhisper_v1.3)
|Share build info (/tw).
|-
|[TankAlert](https://web.archive.org/web/20060620023524if_/http://downloadmod.worldofwar.net:80/upload/ui/1143759516TankAlert_015.zip)
|Alerts you when your group members are taking hits.
|-
|[TankAssist](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TankAssist_v1.03)
|Tanking aid, shows tank targets. [Info](https://web.archive.org/web/20070519044448/http://www.xs4all.nl/~rmetzger/tankassist)
|-
|[TankPoints](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/TankPoints-0.48-rb.zip)
|Tanking stats overview.
|-
|[TargetBuffs](https://web.archive.org/web/20061110111543if_/http://uifiles.worldofwar.net:80/upload/ui/1155786639TargetBuffs.zip)
|Displays up to 24 buffs and all debuffs below target portrait.
|-
|[TargetCensus](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TargetCensus_v0.5)
|Tracks mobs & NPCs encountered.
|-
|[TargetCheck](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TargetCheck_v0.63b)
|Who is attacking your target.
|-
|[TargetFC](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TargetFC_v1.0)
|Flag carrier info in BGs.
|-
|[TargetHelper](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TargetHelper_r12655)
|Targeting aid for DPS.
|-
|[TargetOnMate](https://web.archive.org/web/20061023062130if_/http://downloadmod.worldofwar.net:80/upload/ui/1160158236TargetOnMate%20v0.05.zip)
|ToM is a plug-in that can be used to inform you when a player in your group/raid takes damage. [Info](https://web.archive.org/web/20061116052110/http://www.fl82.dk/wow.php)
|-
|[TargetOfTarget](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TargetOfTarget_v2.2b1)
|Info about target's target.
|-
|[TargetPercent](https://github.com/fastbond/wow-1.12.1-addons/tree/master/TargetPercent)
|Adds a percent indicator to the default target frame.
|-
|[TargetUnique](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TargetUnique_v1.3.2)
|Selects unique targets.
|-
|[Targetz](https://web.archive.org/web/20060518183849if_/http://fileserver2.wowinterface.com/download.php?id=4567)
|Shows who in your party or raid is targeting an enemy NPC.
|-
|[Taunt Buddy](https://web.archive.org/web/20061201052917if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2863/TauntBuddy_1.33.zip)
|Notices Party/Raid members when your taunt gets resisted or when your mocking blow fails.
|-
|[tcgMobResists](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/tcgMobResists_r14663)
|Shows enemy resistances.
|-
|[Tectonic_Attack_Power](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/Tectonic_Attack_Power_2006.10.09)
|Shows AP in large font.
|-
|[Tectonic_Damage](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/Tectonic_Damage_2006.10.09)
|Shows damage in large font.
|-
|[tekAutoRep](https://web.archive.org/web/20061110112349if_/http://uifiles.worldofwar.net:80/upload/ui/AV%20Mod_20061018.zip)
|Automatically track the last faction you gained reputation with.
|-
|[Telepathy](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Chat communications library for cross client addon information sharing (Sky replacement for 1.12+)
|-
|[Telepathy-Versions](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Keeps track of what Telepathy addons/versions everyone is using.
|-
|[TellParse](https://web.archive.org/web/20060520201213if_/http://downloadmod.worldofwar.net:80/upload/ui/1143923453TellParseV2.2.zip)
|Accept tells request from other players for buffs/water/food/healthstone and queue them until you press the assigned hotkey.
|-
|[TellTrack](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TellTrack)
|Tracks whisper messages.
|-
|[Telo's LootLink](https://web.archive.org/web/20060703183447if_/http://downloadmod.worldofwar.net:80/upload/ui/1151099960LootLink-1.11.0.zip)
|An in-game browseable, searchable item database, with loot link coloring based on rarity (/ll). [Info](https://web.archive.org/web/20060417075954/http://www.curse-gaming.com/mod.php?addid=130)
|-
|[Telo's SideBar](https://web.archive.org/web/20060520202632if_/http://downloadmod.worldofwar.net:80/upload/ui/1143884880AlesUI1101-noatlas.zip)
|Adds two twelve button bars to the right side of the screen that can be separated, moved, and resized (/sb help). 
|-
|[TheLowDown](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TheLowDown_r918)
|Auto-scroll chat.
|-
|[TheoryCraft](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/TheoryCraft_v1.06.5)
|Gear-based damage calculator. Tells you everything about an ability, right on the tooltip. [Info](https://web.archive.org/web/20061029031244/http://ui.worldofwar.net/ui.php?id=2371)
|-
|[TheWho](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TheWho_v0.2)
|Guild member info on shift+click.
|-
|[ThoriumRep](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/ThoriumRep_v0.1)
|Tracks Thorium Brotherhood rep.
|-
|[Thottbot](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Thottbot Profile/Data Module.
|-
|[Tick](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/Tick_v1.3)
|Energy & mana tick timer.
|-
|[TicTacToe](https://web.archive.org/web/20060622005100if_/http://downloadmod.worldofwar.net:80/upload/ui/1148743136CoaAddons.rar)
|TicTacToe-Minigame (/ttt).
|-
|[Timers](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/Timers_v3.42)
|Event timers & warnings.
|-
|[TimeInRaid](https://web.archive.org/web/20061110112525if_/http://uifiles.worldofwar.net:80/upload/ui/1158122259TimeInRaid.zip)
|Tracks the minutes for each member of a raid. It provides onscreen, moveable, scrollable lists (/tir).
|-
|[TimeToLive](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TimeToLive_v1.0.5)
|Shows time till target dies (/ttlshow).
|-
|[tinyClock](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/tinyClock)
|Analog clock above mini-map.
|-
|[TinyPad+Fu](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/TinyPad+Fu-1.4-11200.zip)
|Lightweight notepad mod
|-
|[TinyTip](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TinyTip_r12655)
|Customizes tooltips.
|-
|[TipBuddy](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/TipBuddy_v2.22)
|Tooltip editor. [Info](https://web.archive.org/web/20060404105547/http://www.curse-gaming.com/mod.php?addid=815)
|-
|[Titan](Titan Panel)
|Classic panel + plugins. [Info](https://web.archive.org/web/20061127115903/http://www.wowwiki.com/Titan_Panel)
|-
|[TitanADRep](https://web.archive.org/web/20060518032848if_/http://downloadmod.worldofwar.net:80/upload/ui/1142208330Blaze_TitanADRep_0-1-31_20060313.zip)
|Keeps track Argent Dawn reputation-related items
|-
|[TitanAggro](https://web.archive.org/web/20060518032022if_/http://downloadmod.worldofwar.net:80/upload/ui/1146575112TitanAggro%20v2.8.7.zip)
|Aggro detection, reporting and more.
|-
|[TitanAlarmClockWrangler](https://web.archive.org/web/20060518032752if_/http://downloadmod.worldofwar.net:80/upload/ui/1143939216TitanAlarmClockWrangler108.zip)
|Titan Panel Alarm Clock Wrangler.
|-
|[TitanAllPlayed](https://web.archive.org/web/20060513052812if_/http://downloadmod.worldofwar.net:80/upload/ui/1140205385TitanAllPlayed1.3.1.zip)
|Shows time played for all characters.
|-
|[TitanAnnounceIt](https://web.archive.org/web/20061128041952if_/http://uifiles.worldofwar.net:80/upload/ui/AnnounceIt_20061118.zip)
|Storage and retrieval access to broadcast your stored mesages to Party, Raid and other chat channels.
|-
|[TitanAnyCounter](https://web.archive.org/web/20060413225602if_/http://www.emerald-order.com:80/wow/download/download.php?plugin=Emerald-UI)
|Displays the number of items collected.
|-
|[TitanAspect](https://web.archive.org/web/20060518031531if_/http://downloadmod.worldofwar.net:80/upload/ui/1136829649TitanAspect-v0.04.zip)
|Toggle Hunter Aspects with Titan Panel
|-
|[TitanAssist](https://web.archive.org/web/20060518030509if_/http://downloadmod.worldofwar.net:80/upload/ui/1137242415TitanAssist.zip)
|simple assist managment.
|-
|[TitanAtlas](https://github.com/rootedCF/classicaddons/tree/master/AddOns/t/TitanAtlas)
|Provides an Atlas entry on Titan Panel.
|-
|[TitanBG](https://web.archive.org/web/20060901091241if_/http://downloadmod.worldofwar.net:80/upload/ui/1136875387TitanBG_1_4_3b1.zip)
|Battleground helper for Titanpanel
|-
|[TitanBGinfo](https://web.archive.org/web/20060518031502if_/http://downloadmod.worldofwar.net:80/upload/ui/1136574640TitanBGinfo-v0.06.zip)
|Plugin for Titan Panel to display Battleground Info.
|-
|[TitanBuffReagent](https://web.archive.org/web/20060518031311if_/http://downloadmod.worldofwar.net:80/upload/ui/1144227375TitanBuffReagent.zip)
|Manage yor Reagents you need for buffs.
|-
|[TitanCheckStone](https://web.archive.org/web/20060513171557if_/http://downloadmod.worldofwar.net:80/upload/ui/1146487455TitanCheckStone3_1.zip)
|Shows raid members which are currently soulstoned.
|-
|[TitanClassTracker](https://web.archive.org/web/20060518032355if_/http://downloadmod.worldofwar.net:80/upload/ui/1143898163TitanClassTracker_v2.7.zip)
|A module to track different items and regeants depending on class.
|-
|[TitanClockOffsetFix](https://web.archive.org/web/20060518032612if_/http://downloadmod.worldofwar.net:80/upload/ui/1143737984TitanClockOffsetFix1.0.4.zip)
|Fixes the Titan Panel Clock so that its offset is stored per server not per character.
|-
|[TitanClothTracker](https://web.archive.org/web/20060518031612if_/http://downloadmod.worldofwar.net:80/upload/ui/1139850660TitanClothTracker.zip)
|View the quantity of different cloth in your inventory.
|-
|[TitanCombatInfo](https://web.archive.org/web/20060513052823if_/http://downloadmod.worldofwar.net:80/upload/ui/1144368831TitanCombatInfo.zip)
|Combat stats in a central location.
|-
|[TitanCounter](https://web.archive.org/web/20060517124514if_/http://downloadmod.worldofwar.net:80/upload/ui/1144153896TitanCounter.ZIP)
|Counts the number of various reagents in your bags.
|-
|[TitanCritLine](https://web.archive.org/web/20060517124934if_/http://downloadmod.worldofwar.net:80/upload/ui/1144871087TitanCritLine.0.4.0e.zip)
|Saves your high normal and critical damage records and flashes a message if your break the record.
|-
|[TitanDivinityCounter](https://web.archive.org/web/20060518032546if_/http://downloadmod.worldofwar.net:80/upload/ui/1136631874TitanDivinityCounter_1-3.zip)
|Counts 'Symbol of Divinity' items and shows the number in Titan.
|-
|[TitanDPS](https://web.archive.org/web/20060622011303if_/http://downloadmod.worldofwar.net:80/upload/ui/1145419968TitanDPS_v0.76.11000.zip)
|Adds a DPS meter to Titan Panel.
|-
|[TitanEmoteMenu](https://web.archive.org/web/20060721213016if_/http://downloadmod.worldofwar.net:80/upload/ui/1153187618TitanEmoteMenu_v11100-1.zip)
|Titan Plugin that provides the player with categorized emotes.
|-
|[TitanFactions](https://web.archive.org/web/20060517124828if_/http://downloadmod.worldofwar.net:80/upload/ui/1144707834TitanFactions-v0.13.zip)
|A simple factions reputation list for the Titan Panel AddOn.
|-
|[TitanFriendsx](https://web.archive.org/web/20060622011653if_/http://downloadmod.worldofwar.net:80/upload/ui/1145982722CouncilOfAzerothModPack.zip)
|An extended friends list for the Titan Panel AddOn. Shows Guild members and friend/guild people in the same area.
|-
|[TitanGuild](https://web.archive.org/web/20060504042102if_/http://downloadmod.worldofwar.net:80/upload/ui/1145242353TitanGuild3.0.zip)
|A simple guild list for the Titan Panel AddOn.
|-
|[TitanHawk](https://web.archive.org/web/20060513052735if_/http://downloadmod.worldofwar.net:80/upload/ui/1143829730TitanHawk-1.10.00-1.zip)
|Titan wrapper for Inventory Hawk.
|-
|[TitanHerbTracker](https://web.archive.org/web/20061030050957if_/http://downloadmod.worldofwar.net:80/upload/ui/1160203917TitanHerbTracker.zip)
|View the quantity of different herbs in your inventory and bank.
|-
|[TitanHonorMarks](https://web.archive.org/web/20060518031947if_/http://downloadmod.worldofwar.net:80/upload/ui/1137623894TitanHonorMarks-1.0.zip)
|Track the amount of Honor Marks you have in bag/bank.
|-
|[TitanHonorPlus](https://web.archive.org/web/20060518032600if_/http://downloadmod.worldofwar.net:80/upload/ui/1143150588TitanHonorPlus_r13.10900.zip)
|Adds Today, This Week, and Progress info to Titan.
|-
|[TitanHearthStone](https://web.archive.org/web/20060622011653if_/http://downloadmod.worldofwar.net:80/upload/ui/1145982722CouncilOfAzerothModPack.zip)
|This addon for the Titan bar will add the cooldown / location and ability to cast your Hearthstone to the Titan bar.
|-
|[TitanInn](https://web.archive.org/web/20060518031105if_/http://downloadmod.worldofwar.net:80/upload/ui/1143896181TitanInn_v1.3.4.zip)
|A module to show your current Inn home.
|-
|[TitanItemDed](https://github.com/rootedCF/classicaddons/tree/master/AddOns/t/TitanItemDed)
|Drop the cheapest item from your bags.
|-
|[TitanItemRack](https://web.archive.org/web/20060901042640if_/http://downloadmod.worldofwar.net:80/upload/ui/1137738893TitanItemRack_1_0.zip)
|Titan Panel plugin for ItemRack.
|-
|[TitanJB_Roll](https://web.archive.org/web/20060828144201if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/1689/TitanJB_Roll_1.6.zip)
|Clickable dice and roll overview for Titan Panel.
|-
|[TitanKingsCounter](https://web.archive.org/web/20060826174707if_/http://downloadmod.worldofwar.net:80/upload/ui/1153936090TitanKingsCounter.zip)
|Counts Paladin Symbol of Kings and shows the number in Titan. [Info](https://web.archive.org/web/20060510140501/http://ui.worldofwar.net/ui.php?id=1818)
|-
|[TitanLanguageCycle](https://web.archive.org/web/20060614091355if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2168/SexyUI1900r3.zip)
|Titan Plug-in for the LanguageCycle mod.
|-
|[TitanLog](https://web.archive.org/web/20060518030242if_/http://downloadmod.worldofwar.net:80/upload/ui/1143726660TitanLog.zip)
|toggle the built in logging functions on or off using Titan.
|-
|[TitanLootHog](https://web.archive.org/web/20060622011207if_/http://downloadmod.worldofwar.net:80/upload/ui/1148814840Solid%20UI%20V0.05.zip)
|Titan Panel Interface for LootHog.
|-
|[TitanNameToggle](https://web.archive.org/web/20060622011653if_/http://downloadmod.worldofwar.net:80/upload/ui/1145982722CouncilOfAzerothModPack.zip)
|A Titan Plugin to toggle your name/guild/rank and npc names.
|-
|[TitanMacroMenu](https://web.archive.org/web/20060518032809if_/http://downloadmod.worldofwar.net:80/upload/ui/1144069209TitanMacroMenu-11000-0.05e.zip)
|Titan Plugin that provides the player with a menu for macros.
|-
|[TitanMail](https://github.com/rootedCF/classicaddons/tree/master/AddOns/t/TitanMail)
|A Titan Plugin to let you know you have mail.  Also remembers any Auction alerts
|-
|[TitanManaRegged](https://web.archive.org/web/20060518031720if_/http://downloadmod.worldofwar.net:80/upload/ui/1143485681TitanManaRegged11b.zip)
|This Titan Panel Plugin shows you several stats concerning manaregeneration and mana management while in combat.
|-
|[Titan Mod Support](https://web.archive.org/web/20060628200028if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/551/Inc_UI_Adv_D50.6_11000.exe)
|Titan plugin collection adding support and tweaks for various mods.
|-
|[TitanMyDSP](https://web.archive.org/web/20061110112602if_/http://uifiles.worldofwar.net:80/upload/ui/1157886719myDSP_0dot5.zip)
|This is a Client for DragonScalePoints Mod v2.1+(with titan plugin).
|-
|[TitanMyMusic](https://web.archive.org/web/20060710053844if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/1860/myMusic_Titan%200.1.zip)
|MyMusic Titan Panel support.
|-
|[TitanPetXp](https://web.archive.org/web/20060622011653if_/http://downloadmod.worldofwar.net:80/upload/ui/1145982722CouncilOfAzerothModPack.zip)
|A pet experience module for the Titan Panel AddOn.
|-
|[TitanPvPStatus](https://web.archive.org/web/20060518032303if_/http://downloadmod.worldofwar.net:80/upload/ui/1143895822TitanPvPStatus_v1.6.1.zip)
|A module to show PvP Status and Cooldown.
|-
|[TitanQuests](https://web.archive.org/web/20060703183916if_/http://downloadmod.worldofwar.net:80/upload/ui/1149788627TitanQuests-v0.18.zip)
|A quest list for Titan Panel.
|-
|[TitanReloadUI](https://web.archive.org/web/20060518031927if_/http://downloadmod.worldofwar.net:80/upload/ui/1136573024TitanReloadUI-v0.04.zip)
|A simple ReloadUI button for Titan Panel.
|-
|[TitanRecap](https://web.archive.org/web/20060703183318if_/http://downloadmod.worldofwar.net:80/upload/ui/1150830788TitanRecap1.24.zip)
|Titan Panel plugin for Recap
|-
|[TitanRecZone](https://github.com/rootedCF/classicaddons/tree/master/AddOns/t/TitanRecZone)
|Displays level for current zone and recommends zones and instances for your level.
|-
|[TitanRestPlus](https://web.archive.org/web/20060721213111if_/http://downloadmod.worldofwar.net:80/upload/ui/1153187832TitanRestPlus_v11100-1.zip)
|Keeps track of the RestXP amounts and status for all of your characters.
|-
|[TitanRoguePowder](https://web.archive.org/web/20060620025529if_/http://downloadmod.worldofwar.net:80/upload/ui/1146811384TitanRoguePowder_2.4.4.zip)
|Displays the number of Flash Powder, Blinding Powder, Thistle Tea, Poisons and Bandages in inventory.
|-
|[TitanRoll](https://web.archive.org/web/20060518030059if_/http://downloadmod.worldofwar.net:80/upload/ui/1144054973TitanRoll0_44b.zip)
|Clickable dice and roll overview for the Titan Panel AddOn.
|-
|[TitanRuneCounter](https://web.archive.org/web/20060628200028if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/551/Inc_UI_Adv_D50.6_11000.exe)
|Counts 'Rune of Teleportation' Items and shows the number in Titan.
|-
|[TitanShardCounter](https://web.archive.org/web/20060624141851if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4149/TitanShardCounter.zip)
|Titan ShardCounter Plugin.
|-
|[TitanSilithusTracker](https://web.archive.org/web/20060518032451if_/http://downloadmod.worldofwar.net:80/upload/ui/1143845273TitanSilithusTracker101.zip)
|Track Silithus related items in your inventory.
|-
|[Titan_Skin_Pack](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Titan_Skin_Pack)
|Skins for Titan.
|-
|[TitanSkinTracker](https://web.archive.org/web/20060518032009if_/http://downloadmod.worldofwar.net:80/upload/ui/1144489786TitanSkinTracker210.zip)
|View the quantity of different skins in your inventory, bank and mail
|-
|[TitanSkills](https://web.archive.org/web/20060407143408if_/http://downloadmod.worldofwar.net:80/upload/ui/1144300037TitanSkills-v0.09.zip)
|A simple skills list for the Titan Panel AddOn.
|-
|[TitanSpeed](https://web.archive.org/web/20060413142952if_/http://downloadmod.worldofwar.net:80/upload/ui/1144867312TitanSpeed1101.zip)
|TitanBar plugin: Show your speed in percent.
|-
|[TitanSpeedometer](https://web.archive.org/web/20060518031256if_/http://downloadmod.worldofwar.net:80/upload/ui/1138338711TitanSpeedometer.zip)
|Speedometer for Titan Panel.
|-
|[TitanStones](https://web.archive.org/web/20060703182948if_/http://downloadmod.worldofwar.net:80/upload/ui/1151008860TitanStones.zip)
|Soul Shard and Stone management plugin.
|-
|[TitanStonescan](https://web.archive.org/web/20060620022943if_/http://downloadmod.worldofwar.net:80/upload/ui/1145522565TitanStones.zip)
|Utility functions for TitanShards, HealthStone and Soulstone.
|-
|[TitanSummoner](https://web.archive.org/web/20060620025416if_/http://downloadmod.worldofwar.net:80/upload/ui/1145152680TitanSummoner11000r3.zip)
|Summon Warlock Pets from Titan Panel.
|-
|[TitanTimers](https://github.com/rootedCF/classicaddons/tree/master/AddOns/t/TitanTimers)
|Titan UI for Advanced Timers.
|-
|[TitanTracker](https://web.archive.org/web/20060518031808if_/http://downloadmod.worldofwar.net:80/upload/ui/1144164091TitanTracker-v0.11.zip)
|Toggle Tracking with Titan Panel.
|-
|[TitanTradeCooldown](https://web.archive.org/web/20060518031747if_/http://downloadmod.worldofwar.net:80/upload/ui/1143979303TitanTradeCooldown.zip)
|Lists tradeskill cooldowns across all characters.
|-
|[TitanWardrobe](https://web.archive.org/web/20060518032535if_/http://downloadmod.worldofwar.net:80/upload/ui/1136422434TitanWardrobe_1.40-10900.zip)
|Provides an Wardrobe entry on Titan Panel.
|-
|[TitanWaterboy](https://web.archive.org/web/20060622012536if_/http://downloadmod.worldofwar.net:80/upload/ui/1145865694Werwolf_Interface_Collection_2.3%20-%2011000.zip)
|Enable WaterboyLoc in Titan panel.
|-
|[TitanWWDPS](https://web.archive.org/web/20060901200618if_/http://downloadmod.worldofwar.net:80/upload/ui/1156862408TitanWWDPS.rar)
|The DPS mod of the Gimbatuul. Treat it with care.
|-
|[TitanXPStatus](https://web.archive.org/web/20060407090428if_/http://downloadmod.worldofwar.net:80/upload/ui/1143895676TitanXPStatus_v2.9.2.zip)
|A module to display a summary of currentXP, totalXP, percentageXP and restedXP.
|-
|[TitanZeppelinMaster](https://github.com/rootedCF/classicaddons/tree/master/AddOns/t/TitanZeppelinMaster)
|Titan display for ZeppelinMaster.
|-
|[TitanZoneLevel](https://web.archive.org/web/20060614091355if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2168/SexyUI1900r3.zip)
|Displays current zone levels in Titan Bar.
|-
|[TLoc](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TLoc_v1.2)
|Locate raid members on map.
|-
|[TNE_FiveSec](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TNE_FiveSec_v2.1.2)
|Mana regen delay.
|-
|[TNE_IsAttacking](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TNE_IsAttacking_v1.2)
|Auto-attack macros.
|-
|[TNE_LowHealthWarning](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TNE_LowHealthWarning_v2.2.2)
|Warn on low health/mana (/lowhealth). [Alt](https://drive.google.com/file/d/1ao6me-ROvYD12yCb-TNMcLgH269_O_vp/view?usp=sharing)(https://drive.google.com/file/d/1ao6me-ROvYD12yCb-TNMcLgH269_O_vp/view?usp=sharing Alt)
|-
|[TNE_Nightfall](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TNE_Nightfall_v1.1.2)
|Warlock: Nightfall alert.
|-
|[TNE_RareTracker](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TNE_RareTracker_v1.5.3)
|Rare mob spawn notifier. [Info](https://web.archive.org/web/20060902050245/http://www.curse-gaming.com/en/wow/addons-3415-1-raretracker.html)
|-
|[TNE_RareTrackerStandard](https://web.archive.org/web/20060622004925if_/http://downloadmod.worldofwar.net:80/upload/ui/1144964103WarriorUI.rar)
|Standard interface for RareTracker.
|-
|[TNE_RareTrackerMap](https://web.archive.org/web/20060622004925if_/http://downloadmod.worldofwar.net:80/upload/ui/1144964103WarriorUI.rar)
|Adds rare spawn to your world map.
|-
|[TNE_RareTrackerCore](https://web.archive.org/web/20060622004925if_/http://downloadmod.worldofwar.net:80/upload/ui/1144964103WarriorUI.rar)
|Keeps track of rare spawns and notifies you as you get near one.
|-
|[TNE_Whispers](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TNE_Whispers_v1.1.1)
|Whisper alert overlay.
|-
|[TNZ-DamnVengeance](https://web.archive.org/web/20061127203003if_/http://uifiles.worldofwar.net:80/upload/ui/tnz-damnvengeance-11200.1_20061115.zip)
|Displays your total damage, crits and DPS in a Vengeance buff in a big text frame or through SCT (/dv).
|-
|[TooltipsKhaos](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Provides a complete package for configuring tooltips.
|-
|[Toons](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/Toons_v08)
|Friends tab with detailed info.
|-
|[topChat](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/topChat_v6)
|Chat with timestamps & input move.
|-
|[TopErOff](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TopErOff_v1.2.1)
|Spell rank & CP macros.
|-
|[ToT](https://web.archive.org/web/20060717201213if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2200/BasicUI.zip)
|Shows your target's target in a small movable frame.
|-
|[TOTAlert](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TOTAlert_v1.03)
|Target info display alternative.
|-
|[TotemBar](https://web.archive.org/web/20060620023352if_/http://downloadmod.worldofwar.net:80/upload/ui/1147783303TotemBar_175.zip)
|Add a bar for all your Shamen Totems.
|-
|[TotemMenu](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TotemMenu_v1.6)
|Shaman: large totem panel.
|-
|[TotemTimers](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TotemTimers_8.26.2006)
|Shaman: totem timers.
|-
|[Tracer](https://web.archive.org/web/20060620022051if_/http://downloadmod.worldofwar.net:80/upload/ui/1143526439Tracer.zip)
|Helper addon to log debugging messages to a SavedVariables file. [Info](https://web.archive.org/web/20060618060224/http://ui.worldofwar.net/ui.php?id=1745)
|-
|[TrackBar](https://web.archive.org/web/20060718121039if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4246/TrackBar163.zip)
|A simple little addon for all you hunters, warlocks, paladins, miners and whiners and herbalists and whatnot (/tbar).
|-
|[TrackerToggle](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TrackerToggle_v2.3)
|Control your tracking spells with a handy minimap menu. (Right-click the minimap) Also adds a binding you can use to cycle through your tracking modes.
|-
|[TradeDispenser](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/tradeDispenser_v0.96)
|Distribute water/food (mages). (/tD or /tradeDispenser).
|-
|[TradesBar](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TradesBar_v1.70b)
|Professions: extra panel.
|-
|[TrainerSkills](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/TrainerSkills.zip)
|View trainer remotely.
|-
|[TranqShotList](https://web.archive.org/web/20060624141353if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4218/Reborn100.zip)
|Lists Raid-Hunters with their Tranquilizing Shot Cooldowns (/tsl).
|-
|[TranquilyShot](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TranquilyShot_20121031-034643)
|Hunter: cooldowns for Tranquilize.
|-
|[Transcriptor](https://web.archive.org/web/20061113013243if_/http://www.wowace.com:80/files/Transcriptor/Transcriptor-r13922.zip)
|Boss Encounter Logging Utility
|-
|[Transmogrifier](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/Transmogrifier_v1.31)
|Change item appearances.
|-
|[TrapsBar](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TrapsBar_v1.26)
|Hunter: trap panel.
|-
|[Traveler](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/Traveler_v1.0.5)
|Mages: portal sales for gold.
|-
|[tri](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/tri_r13765)
|Bind raid icons to targets.
|-
|[TricksterUI](https://web.archive.org/web/20060622005455if_/http://downloadmod.worldofwar.net:80/upload/ui/1145188946TricksterUI.zip)
|Trickster UI addon compilation.
|-
|[TrinketMenu](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TrinketMenu_v3.41)
|Quick trinket switch & cooldowns.
|-
|[TriviaBotKiller](http://web.archive.org/web/20100714111233if_/http://fin.instinct.org/addons/archive-pre-v2/zips/TriviaKiller.rar)
|AutoAnswer the TriviaBot's Questions.
|-
|[TTCraftAddict](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TTCraftAddict_v1.08.11100)
|Auto-crafting helper.
|-
|[TTSpellTimer](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TTSpellTimer_v1.15.11100)
|Spell, totem & cooldown timers.
|-
|[TTW_Tooltip](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TTW_Tooltip_v11100.1a)
|Move tooltip position.
|-
|[TwinTrinkets](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TwinTrinkets_v1.4.0)
|Manage trinkets (/tt).
|-
|[TypeDebuff](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TypeDebuff_v1.22.1)
|Quickly identify debuff schools by color.
|-
|[UberActions](https://web.archive.org/web/20060425084825if_/http://64.168.251.69:80/wow/UberActions.2006.03.31.zip)
|Lets you inspect all ActionButtons, Option to set count for spells with reagents, Option to lock ActionButtons so they don't get pulled off accidentally. [Info](https://web.archive.org/web/20060425084930/http://64.168.251.69/wow/uberactions.html)
|-
|[UberBanish](UberBanish)
|Warn before Banish ends (Warlock).
|-
|[UberHeal](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/UberHeal_v1.22)
|Simplify healing with CT_RaidAssist, Squishy. 
|-
|[UberQuest](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/UberQuest_v1.11.9)
|Improved quest log. [Info](https://web.archive.org/web/20060407221420/http://64.168.251.69/wow/)
|-
|[UBotD](https://web.archive.org/web/20060627203832if_/http://downloadmod.worldofwar.net:80/upload/ui/1147687020UBotD_2-6_beta10.zip)
|Ultimate Book of the Dead. Logs your PvE/PvP wins and losses in a book (/aao help). [Info](https://web.archive.org/web/20060212225225/http://ui.worldofwar.net/ui.php?id=1258)
|-
|[UDThad](https://web.archive.org/web/20060828143128if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4730/UDThad1.1.zip)
|Make it very obvious as to what your charge is during the thaddius fight.
|-
|[Ultimate UI](http://web.archive.org/web/20060515074810if_/http://www.wowguru.com:80/ui/archives/ultimate-ui-4-982-default.zip)
|The UUI Menu that you all have been dreaming about...
|-
|[Ultimate-ui-4-982](http://web.archive.org/web/20120104210250if_/http://wowguru.com/ui/archives/ultimate-ui-4-982.zip)
|Classic UI replacement. [Info](https://web.archive.org/web/20060110130222/http://www.wowguru.com/ui/4/ultimate-ui/)
|-
|[UltroPack](https://web.archive.org/web/20060622005100if_/http://downloadmod.worldofwar.net:80/upload/ui/1148743136CoaAddons.rar)
|UltroPack addon compilation. [Info](https://web.archive.org/web/20060613015611/http://www.alternativementalfeedback.dk/ultropack/)
|-
|[UndressButton](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/UndressButton)
|Button to undress character.
|-
|[Universal essentials](http://web.archive.org/web/20060515032530if_/http://www.wowguru.com:80/ui/archives/universal-essentials-217-1530.zip)
|Addon compilation. [Info](http://web.archive.org/web/20060902092818/http://www.wowguru.com/ui/217/universal-essentials/)
|-
|[URLCopy](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/URLCopy_v1.2.11000)
|Copy links from chat.
|-
|[UseByName](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/UseByName_v12)
|Use items by name (/usebyname). [Info](https://web.archive.org/web/20061127095335/http://capnbry.net/wow/)
|-
|[Util](https://github.com/fastbond/wow-1.12.1-addons/tree/master/Util)
|Misc functions.  Adds short print() function.
|-
|[Valami](https://web.archive.org/web/20060620023406if_/http://downloadmod.worldofwar.net:80/upload/ui/1148337548valami_v1_31.zip)
|This addon puts your precious epic ranged weapon to your backpack before classcalls, and equips them a few secs later.
|-
|[VanasKoS](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/VanasKoS_v1.53)
|List of friend/foe players (/vanaskos).
|-
|[vAssist](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/vAssist_v0.8)
|Tank target info (/va set 1).
|-
|[Vault](https://web.archive.org/web/20060715180009if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2000/Vault1.5.zip)
|Updates the spells on all the action bars to the highest rank (/vault).
|-
|[vChat](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/vChat_r18312)
|Simple Ace2 chat.
|-
|[VendingMachine](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/VendingMachine_v2.11.5)
|Auto-sell & distribute water/food (mages).
|-
|[VendorBags](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/VendorBags_v0.9)
|Opens all bags at vendor.
|-
|[VeriFly](https://web.archive.org/web/20060622011653if_/http://downloadmod.worldofwar.net:80/upload/ui/1145982722CouncilOfAzerothModPack.zip)
|will cause a confirmation box to appear before actually leaving a Flight Master.
|-
|[ViperConfigControl](https://web.archive.org/web/20061112095520if_/http://www.viper.dk:80/wow/files/ViperConfigControl_v1.13.zip)
|A GUI for configuring my add-ons. [Info](https://web.archive.org/web/20061126084315/http://www.viper.dk/wow/#ViperConfigControl)
|-
|[VisibilityOptions](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Provides ability to autohide, hide, and change transparency of frames.
|-
|[VitalWatch](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/VitalWatch_r12888)
|Custom warnings for HP, mana, aggro.
|-
|[VoicesFromBeyond](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/VoicesFromBeyond_r16223)
|Raid boss kill alerts in guild chat.
|-
|[Waitress](https://web.archive.org/web/20060413225602if_/http://www.emerald-order.com:80/wow/download/download.php?plugin=Emerald-UI)
|Conjure, consume and trade conjured food/drink at the click of a button.
|-
|[Wardrobe](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Wardrobe_v1.95-AL)
|Quick gear changes.
|-
|[Warrior](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Warrior_v0.62)
|Warrior: ability macros (/warrior).
|-
|[WarriorAlert](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/WarriorAlert_v0.9.2)
|Warrior: ability readiness notifications.
|-
|[WarriorButton](https://web.archive.org/web/20061027123616if_/http://downloadmod.worldofwar.net:80/upload/ui/1160313584WarriorButtonStable.zip)
|Automate warrior abilities. [Info](https://web.archive.org/web/20061016020841/http://ui.worldofwar.net/ui.php?id=2912)
|-
|[WarriorUI](https://web.archive.org/web/20060622004925if_/http://downloadmod.worldofwar.net:80/upload/ui/1144964103WarriorUI.rar)
|Warrior UI addon compilation.
|-
|[WatchCombat](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/WatchCombat_v0.4)
|In-combat notifications.
|-
|[WatchDog](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/WatchDog_v1.25)
|Compact unit frames.
|-
|[WatchTower](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/WatchTower_v112002)
|Detailed target info in chat.
|-
|[WaterboyLoc](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection)
|Mage: automatic water distribution. [Info](https://web.archive.org/web/20061025172009/http://www.curse-gaming.com/en/wow/addons-3582-1-waterboyloc-continued.html)
|-
|[WBags](https://web.archive.org/web/20061110112614if_/http://uifiles.worldofwar.net:80/upload/ui/1154787838WBags.v1.4.8.zip)
|sorts your desired Items in your specified Bags (/wbags).
|-
|[WeaponButtons](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Gives you a little window that contains your main hand weapon and your off hand weapon for easy weapon switching.
|-
|[WeaponQuickSwap](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/WeaponQuickSwap.zip)
|Allow you to switch weapons quickly with a single keystroke. [Info](https://web.archive.org/web/20061127095335/http://capnbry.net/wow/)
|-
|[WeaponRebuff](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/WeaponRebuff_v2.1)
|Weapon buff reminders & buttons.
|-
|[Werwolf](https://web.archive.org/web/20060622012536if_/http://downloadmod.worldofwar.net:80/upload/ui/1145865694Werwolf_Interface_Collection_2.3%20-%2011000.zip)
|Werwolf Interface Collection. [Info](https://web.archive.org/web/20060908112847/http://ui.worldofwar.net/ui.php?id=2321)
|-
|[WHDB](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/RapidQuestPack_v1.2/WHDB)
|Old WoWHead comments in quest log.
|-
|[Wheel Bindings](https://web.archive.org/web/20060507053038if_/http://www.vigilance-committee.org:80/wow/downloads/WheelBindings-0.1-11000.zip)
|Provides mouse-wheel bindable actions
|-
|[WhisperBuff](https://web.archive.org/web/20060624141409if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2001/WhisperBuff.zip)
|Configure to whisper for different buffs without changing macros all the time (/whisperbuff).
|-
|[Whispercast](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/WhisperCast_v3.1)
|Whisper-based buffers.
|-
|[WhispList](https://web.archive.org/web/20060624141454if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4166/WhispList10.zip)
|Displays a list of players who have sent or received a whisp (/wlist).
|-
|[Whiteboard](https://web.archive.org/web/20061110113047if_/http://uifiles.worldofwar.net:80/upload/ui/Whiteboard_1.1_20061028.zip)
|For doodling and playing Pictionary.
|-
|[WhoNeedsThis](https://web.archive.org/web/20061129103153if_/http://downloadmod.worldofwar.net:80/upload/ui/1145727332WhoNeedsThis.zip)
|Helps you decide which other player to mail your trade items to. [Info](https://web.archive.org/web/20060908235348/http://ui.worldofwar.net/ui.php?id=2400)
|-
|[WikiWikiDPS](https://web.archive.org/web/20061110111241if_/http://uifiles.worldofwar.net:80/upload/ui/1156919536WikiWikiDPS_1.0.11.zip)
|An attempt at constructing a DPS-counter that does not suck. Long live Tengil, our savior! (/wiki).
|-
|[WIM](WIM)
|Whisper in dedicated window, with history.
|-
|[WinterRep](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/WinterRep_v0.8)
|Shows reputation with Wintersaber Trainers.
|-
|[WitchHunt](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/WitchHunt_v2.0)
|Shows who is casting (similar to SpellAlert).
|-
|[WL_RecipeBox](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/WL_RecipeBox_v090606)
|Tracks recipes across characters (/rb).
|-
|[WonderBooze](https://web.archive.org/web/20061110113644if_/http://uifiles.worldofwar.net:80/upload/ui/1157771245WonderBoozev1.1.0.zip)
|A drinking game for wow. [Info](https://web.archive.org/web/20061028120824/http://ui.worldofwar.net/ui.php?id=3099)
|-
|[WonderRepp](https://web.archive.org/web/20060520201903if_/http://downloadmod.worldofwar.net:80/upload/ui/1145001161WonderRepv1.1.0.zip)
|Tracks reputation & announces in chat.
|-
|[WorldMapInfo](https://web.archive.org/web/20061215132136if_/http://d.cosmosui.org:80/files/distros/Cosmos_Release.zip)
|Add's Player & Cursor Coordinates to the world map frame.
|-
|[wowChess](https://web.archive.org/web/20061110205653if_/http://uifiles.worldofwar.net:80/upload/ui/1157127264wowChess201.zip)
|In-game chess minigame.
|-
|[WoWGuru](http://web.archive.org/web/20060503062923if_/http://www.wowguru.com:80/ui/archives/wow-guru-data-collection-48-283.zip)
|Collects data for use with the WoW Guru Patcher.
|-
|[WoWTexasHoldem](WoWTexasHoldem)
|Texas Holdem Poker mod. [Alt](https://web.archive.org/web/20061110113114if_/http://uifiles.worldofwar.net:80/upload/ui/1156621903WoWTexasHoldem.zip)(https://web.archive.org/web/20061110113114if_/http://uifiles.worldofwar.net:80/upload/ui/1156621903WoWTexasHoldem.zip Alt) [Info](https://web.archive.org/web/20060902123832/http://www.curse-gaming.com/en/wow/addons-4938-1-wow-texas-holdem.html)
|-
|[WoWTexasHoldemFlopOdds](https://web.archive.org/web/20061110114233if_/http://uifiles.worldofwar.net:80/upload/ui/1159743192WoWTexasHoldemFlopOdds.zip)
|Designed to help you play better poker while using WoW Texas Holdem (/flopodds). [Info](https://web.archive.org/web/20061128115053/http://www.curse-gaming.com/en/wow/addons-5368-1-wow-texas-holdem-flop-odds-v10.html)
|-
|[WoWVid](https://web.archive.org/web/20060622004925if_/http://downloadmod.worldofwar.net:80/upload/ui/1144964103WarriorUI.rar)
|Creates an blank frame with adjustable RBG values, using this frame.  The blank frame with the proper color set will allow video to "show through" being played by any other software operating in overlay mode (/wv).
|-
|[WOWXML](https://web.archive.org/web/20060113070223if_/http://ui.worldofwar.net:80/upload/ui/WOWXML.zip)
|Program that would help beginners create the required XML code. [Info](https://web.archive.org/web/20060212223608/http://ui.worldofwar.net/ui.php?id=323)
|-
|[WT_ZoningTimeFix](https://web.archive.org/web/20060719012220if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/3775/WT_ZoningTimeFix1_6d.zip)
|Speeds up zoning times. [Info](https://web.archive.org/web/20060426014456/http://demonmagnet.com/elitistforum/viewtopic.php?p=4782)
|-
|[XAD](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/XAD_r15314)
|Panel with food & potions.
|-
|[Xcalc](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Xcalc_v2.0)
|In-game calculator.
|-
|[XLoot](XLoot)
|Improved loot window. [Info](https://web.archive.org/web/20070312103050/http://wowace.com/index.php/XLoot)
|-
|[XpCounter](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/XpCounter_v0.14)
|Custom XP bar & info.
|-
|[X-Perl](https://web.archive.org/web/20061027005722if_/http://downloadmod.worldofwar.net:80/upload/ui/X-Perl%201.9.4_20061017.zip)
|Replaces the normal unit, party, target, pet frames and adds target-of-target. [Info](https://web.archive.org/web/20061028163055/http://ui.worldofwar.net/ui.php%3Fid%3D2855)
|-
|[XPerl_TeamSpeak](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/XPerl_TeamSpeak_v1.0)
|Ventrilo/TS overlay.
|-
|[XPerl_RaidAdmin](https://github.com/rootedCF/classicaddons/tree/master/AddOns/x/XPerl_RaidAdmin)
|Provides useful raid admin tools for todays raid leader.
|-
|[XPerl_PartyPet](https://github.com/rootedCF/classicaddons/tree/master/AddOns/x/XPerl_PartyPet)
|Replaces the default party's pet frames.
|-
|[XPerl_RaidHelper](https://github.com/rootedCF/classicaddons/tree/master/AddOns/x/XPerl_RaidHelper)
|Replaces CTRA MT Targets window with extra functionality, and provides assists frame.
|-
|[XPerl_RaidFrames](https://github.com/rootedCF/classicaddons/tree/master/AddOns/x/XPerl_RaidFrames)
|Enhances and customizes the default raid interface
|-
|[XPerl_PlayerPet](https://github.com/rootedCF/classicaddons/tree/master/AddOns/x/XPerl_PlayerPet)
|Replaces the default player's pet frame.
|-
|[XPerl_TargetTarget](https://github.com/rootedCF/classicaddons/tree/master/AddOns/x/XPerl_TargetTarget)
|Replaces the default Target of Target frame.
|-
|[XPToGo](https://web.archive.org/web/20060507052241if_/http://www.vigilance-committee.org:80/wow/downloads/XPToGo-0.3-11000.zip)
|Display XP remaining until level on XP bar
|-
|[XRaid](https://web.archive.org/web/20060518183854if_/http://fileserver2.wowinterface.com/download.php?id=4663)
|Another Raid Addon.
|-
|[XRI](https://web.archive.org/web/20061023062205if_/http://downloadmod.worldofwar.net:80/upload/ui/XRI_20061016.zip)
|Ability to ignore ppl from other servers in cross-realm BGs.
|-
|[XRS](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/XRS_r14751)
|Raid: show who is buffed & ready.
|-
|[Yatlas](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Yatlas_v0.7.3)
|Highly detailed map with points of interest.
|-
|[Yule](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/Yule_v2.1.0)
|Night/holiday log.
|-
|[ZAssist](https://web.archive.org/web/20060622005117if_/http://downloadmod.worldofwar.net:80/upload/ui/1143715734ZAssist0.4.zip)
|A quick and easy assist mod, allowing assigning of MA and SA and swapping between them.
|-
|[zBar](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/zBar_v1.15/zBar)
|Custom action panels.
|-
|[Zenmas](https://web.archive.org/web/20060614094615if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/2976/Zenmas_Addon_Pack_2006-v11.3.0.msi)
|Zenmas Addon Pack
|-
|[ZepShipMaster](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ZepShipMaster_v1.87)
|Tracks airship/ship arrival times.
|-
|[ZGCount](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ZGCount_v1.0)
|Counts coins/jewels from ZG.
|-
|[ZhunterMod](https://web.archive.org/web/20061129185839if_/http://downloadmod.worldofwar.net:80/upload/ui/1158337790ZHunterMod1.12.14.zip)
|Hunter: spell & pet icons. Includes several features to make a hunter's life easier. [Info](https://web.archive.org/web/20061029152015/http://ui.worldofwar.net:80/ui.php?id=2208)
|-
|[Zhinput](https://web.archive.org/web/20060718121053if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/4271/zhinput-1.0.zip)
|A chinese Input Method Addon for Wow(for any language version). (/zi).
|-
|[ZoneLevel](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/ZoneLevel_v3.6.4)
|Displays current zone level. 
|-
|[Zorlen](https://web.archive.org/web/20070227010520if_/http://dzrealms.com:80/svnWoW/Zorlen/tags/Zorlen_4.28.00-11200.zip)
|Library for macros & functions. [Info](https://web.archive.org/web/20061010045039/http://dzrealms.com/wordpress/)
|-
|[Zuxana's ModelCitizen](https://web.archive.org/web/20060518183521if_/http://fileserver2.wowinterface.com/download.php?id=4500)
|Adjustable 3D model portraits.
|-
|[ZGLoot](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/ZGLoot-rb.zip)
|ZG, AQ20/40 and raid trash auto-roller.
|-
|[UTF8](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/UTF8-1.1-11200.zip)
|Adds utf8 compatible versions of some string library methods. For use by other addons, doesn't do anything on its own.
|-
|[TranqRotation](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/TranqRotation211-rb.zip)
|Hunter tranquilizing shot coordination.
|-
|[Tankalyze](https://github.com/Road-block/Select_AddOns/blob/master/Tankalyze-rb.zip)
|Customizable tank alerts (cooldowns, missed taunt, mocking, challenging etc) Warriors and Druids.
|-
|[TankPoints](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/TankPoints-0.48-rb.zip)
|Warrior Tank survivability rating. It only measures "tankiness", not threat or other parts of the tanking role.
|-
|[RollTracker](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/RollTracker-1.1.2-rb.zip)
|Random roll tracking and announcing.
|-
|[NoSalvForTank](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/NoSalvForTank-1.4.zip)
|Automatically removes Blessing of Salvation and Blessing of Protection from warriors in defensive, druids in bear and paladins with RF up and a shield equipped.
|-
|[NabuFiveSec](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/NabuFiveSec-rb.zip)
|Bar tracking 5 second rule time for mana regen.
|-
|[NCCM_ForPaladins](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/NCCM_ForPaladins-rb.zip)
|Nefarian Class Call for Paladins. Automatic cancellation of the "Siphon Blessing" buff. Does not work on all servers.
|-
|[NCCM_ForHunters](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/NCCM_ForHunters-rb.zip)
|Nefarian Class Call for Hunters. Automatic weapon swap before hunter class call and swap back after it's done.
|-
|[MrPlow](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/MrPlow-r23832.zip)
|Sorts stacks and defragments bags and bank.
|-
|[MacroTips](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/MacroTips-1.1-rb.zip)
|#showtooltip replacement for showing spell, item or inventory slot tooltips in macros.
|-
|[LootHog](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/LootHog-2.7.0-rb.zip)
|Loot and roll tracker.
|-
|[GuildReRank](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/GuildReRank-1.03-rb.zip)
|Allows a guild leader to mass move guild members among ranks.
|-
|[ES_GuildCheck](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/ES_GuildCheck-1.61-11200.zip)
|Track and monitor guild roster changes. /egc for options.
|-
|[EkWaitList](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/EkWaitList_1.12_11200.zip)
|Standby raid list addon with main / alt support.
|-
|[EkRaidAttend](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/EkRaidAttend_2.42_11200.zip)
|Raid Attendance logger with import export. Can optionally work with EkWaitList for logging standby.
|-
|[EkBomb](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/EkBomb_1.44_11200.zip)
|Warnings for Bomb type raid debuffs.
|-
|[EgoCast](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/EgoCast-r13555.zip)
|Intelligent auto-self-cast that doesn't interfere with addons that require the Blizzard self-cast option to be 'off'.
|-
|[DragonTracker](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/DragonTracker-1.21-11200.zip)
|Replaces the tracking blip on the minimap with a blinking dragon and removes other blips. Good for Hunters tracking Onyxia position in P2.
|-
|[DeclineTaxiSummon](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/DeclineTaxiSummon-0.1.zip)
|Automatically declines warlock summon while on a gryphon with a message to summoner (it will waste the summoner's shard) to workaround de-sync bug on some servers.
|-
|[ClassMasterLoot](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/ClassMasterLoot-1.10.1-rb.zip)
|Masterloot menu organized by class instead of groups, random assign from the menu, self-assign and roll requests. Intended for default LootFrame (not pfUI or XLoot).
|-
|[Cancellation](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/Cancellation-rb.zip)
|Alert or auto-remove unwanted buffs (eg. Blessing of Protection).
|-
|[BadApples](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/Badapples_v1120.zip)
|Rate and make notes for other players with various warnings.
|-
|[TinyTipOptions](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/TinyTip_r12655/TinyTipOptions)
|Slash command interface for TinyTip
|-
|[AHFavorites](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/AHFavorites_r16420)
|Saves AH searches in a favorites list
|-
|[CornerMinimap](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CornerMinimap)
|Makes the minimap fit to the right up corner
|-
|[TabletLib](https://github.com/rootedCF/classicaddons/tree/master/AddOns/t/TabletLib)
|A library to provide an efficient, featureful tooltip-style display.
|-
|[Slash_GM](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/Slash_GM)
|Command-line mechanism to open GM petition pane
|-
|[MetaMapZSM](https://github.com/rootedCF/classicaddons/tree/master/AddOns/m/MetaMapZSM)
|ZoneShift module for German and French clients.
|-
|[WandCancel](https://github.com/rootedCF/classicaddons/tree/master/AddOns/w/WandCancel)
|Cancels wand casting upon trying to cast a spell
|-
|[TitanDivinityCounter](https://web.archive.org/web/20060826174801if_/http://downloadmod.worldofwar.net:80/upload/ui/1153938002TitanDivinityCounter.zip)
|Counts Paladin Symbol of Divinity and shows the number in Titan. [Info](https://web.archive.org/web/20061016020356/http://ui.worldofwar.net/ui.php?id=1822)
|-
|[BEBOptions](https://github.com/aim2kill/Wow1.12.1_Addons_Collection/tree/master/BEB_v0.87/BEBOptions)
|Options menu for BEB (BasicExperienceBar)
|-
|[UUIVersion](https://github.com/rootedCF/classicaddons/tree/master/AddOns/u/UUIVersion)
|Welcome to the first day of the new Era.
|-
|[OneView](https://github.com/rootedCF/classicaddons/tree/master/AddOns/o/OneView)
|OneView is a all in one inventory and bank viewer.  It allows you to view the inventory and bank of your alts, or your main away from the bank.  Its a compainion for OneBag.
|-
|[EnchanterAdShrinker](https://github.com/rootedCF/classicaddons/tree/master/AddOns/e/EnchanterAdShrinker)
|Enchanter Ad Shrinker
|-
|[GuildEventManager2](https://github.com/rootedCF/classicaddons/tree/master/AddOns/g/GuildEventManager2)
|Allows creating/scheduling/managing future raid instances; players can register/join/cancel.
|-
|[Magellan](https://github.com/rootedCF/classicaddons/tree/master/AddOns/m/Magellan)
|This mod will populate the the Map with MapNotes for all the local landmarks
|-
|[idChat2_Timestamps](https://github.com/rootedCF/classicaddons/tree/master/AddOns/i/idChat2_Timestamps)
|Adds timestamps to all messages in all chatframes.
|-
|[QuuSpellAlert](https://github.com/rootedCF/classicaddons/tree/master/AddOns/q/QuuSpellAlert)
|Puts messages when a non party member is going to cast a spell in the center of the screen.
|-
|[sctd_options](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/sctd_options)
|Options menu for SCTD (LoadOnDemand)
|-
|[UltimateUI](https://github.com/rootedCF/classicaddons/tree/master/AddOns/u/UltimateUI)
|The UUI Menu that you all have been dreaming about...
|-
|[Enchantrix](https://github.com/rootedCF/classicaddons/tree/master/AddOns/e/Enchantrix)
|Display information in item tooltips pertaining to the results of disenchanting said item. [Info](https://web.archive.org/web/20061126015725/http://enchantrix.org/)
|-
|[solColorChatNicks](https://web.archive.org/web/20060828144525if_/http://static.curse-gaming.com:80/ftp/datarepos/addons/3088/solColorChatNicks_19b.zip)
|recolors the chat nicknames in the Class color of the chatter. Mousewheel scrolling, timestamping, supress channel name.
|-
|[ZGLI](https://github.com/rootedCF/classicaddons/tree/master/AddOns/z/ZGLI)
|Zul'Gurub-Loot-Info
|-
|[DiscordLibrary](https://github.com/rootedCF/classicaddons/tree/master/AddOns/d/DiscordLibrary)
|Common library for all mods by Lozareth.
|-
|[Nurfed_CombatLog](https://github.com/rootedCF/classicaddons/tree/master/AddOns/n/Nurfed_CombatLog)
|Nurfed Combat Log Based on HitsMode
|-
|[LootLinkAddDB](https://web.archive.org/web/20061023004006if_/http://downloadmod.worldofwar.net:80/upload/ui/1160549607LootLinkAddDB_39875.rar)
|Add lootlink data from over 39000 items. [Info](https://web.archive.org/web/20060426073812/http://ui.worldofwar.net/ui.php?id=2074)
|-
|[SuperInspect_UI](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/SuperInspect_UI)
|This is the UI that is loaded when SuperInspect loads.
|-
|[LS_Chat](https://github.com/rootedCF/classicaddons/tree/master/AddOns/l/LS_Chat)
|Open Up with /lschat command - Removes the chat buttons , enabled mousewheel scrolling and timestamps chat messages.
|-
|[Fubar_KCIFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/Fubar_KCIFu)
|A handy addon for managing KC_Items functions using only your mouse
|-
|[SupplyAndDemand](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/SupplyAndDemand)
|A versatile Load on Demand stub
|-
|[Minesweeper](https://github.com/rootedCF/classicaddons/tree/master/AddOns/m/Minesweeper)
|Basically this mod is just the standard Minesweeper game that comes with Windows.
|-
|[MetaMapCVT](https://github.com/rootedCF/classicaddons/tree/master/AddOns/m/MetaMapCVT)
|Conversions and imports module
|-
|[bc_AutoMailSubject](https://github.com/rootedCF/classicaddons/tree/master/AddOns/b/bc_AutoMailSubject)
|Sets the subject of a mail message to the name of the attachment when it's added.
|-
|[Bagnon_Options](https://github.com/rootedCF/classicaddons/tree/master/AddOns/b/Bagnon_Options)
|A configuration menu for Bagnon
|-
|[FuBar_ItemBonusesFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_ItemBonusesFu)
|Easy display of item bonus info on FuBar
|-
|[Nurfed_Utility](https://github.com/rootedCF/classicaddons/tree/master/AddOns/n/Nurfed_Utility)
|Library for the Nurfed AddOns
|-
|[TrackerAssist](https://github.com/rootedCF/classicaddons/tree/master/AddOns/t/TrackerAssist)
|Assists the Track ability
|-
|[simpleMinimap_Skins](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/simpleMinimap_Skins)
|minimap re-skin module for simpleMinimap
|-
|[MCom](https://github.com/rootedCF/classicaddons/tree/master/AddOns/m/MCom)
|Set of utility functions to simplify addon creation
|-
|[CooldownCountFlexBar](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CooldownCountFlexBar)
|CooldownCount for FlexBar
|-
|[MetaMapQST](https://github.com/rootedCF/classicaddons/tree/master/AddOns/m/MetaMapQST)
|Displays your quests and keeps a history database.
|-
|[Bartender2_Dreamlayout](https://github.com/rootedCF/classicaddons/tree/master/AddOns/b/Bartender2_Dreamlayout)
|Maia's Mockup layout
|-
|[linkSnag](https://github.com/rootedCF/classicaddons/tree/master/AddOns/l/linkSnag)
|Allows you to click on url's and copy them into a browser. Also keeps a list of all url's seen.
|-
|[Informant](https://github.com/rootedCF/classicaddons/tree/master/AddOns/i/Informant)
|Displays detailed item information in tooltips, and can produce item reports by binding an information window to a keypress.
|-
|[FuBartender2](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBartender2)
|FuBar 2.0 Plugin for Bartender2
|-
|[!ChatBox](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/!ChatBox)
|Removes the chat buttons, enabled mousewheel scrolling, Relink items, stickychat, custom chats strings, etc.
|-
|[idChat2_Buttons](https://github.com/rootedCF/classicaddons/tree/master/AddOns/i/idChat2_Buttons)
|Module for idChat2 that toggles the chat menu and chat window buttons on and off (default=off).
|-
|[Banknon](https://github.com/rootedCF/classicaddons/tree/master/AddOns/b/Banknon)
|Display's the player's bank in a single frame.
|-
|[MinigamesUI](https://github.com/rootedCF/classicaddons/tree/master/AddOns/m/MinigamesUI)
|Minigames! Use /minig
|-
|[Gems](https://github.com/rootedCF/classicaddons/tree/master/AddOns/g/Gems)
|A silly gem-based minigame.
|-
|[Timex](https://github.com/rootedCF/classicaddons/tree/master/AddOns/t/Timex)
|Timex is a versatile timing library, providing core timing functions, customizable timer bars, and chat command integrations. It is compatible with Chronos and offers tools for both developers and players.
|-
|[FlightTime](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FlightTime)
|Measures flight times and displays them for you.
|-
|[DiscordFrameModifier](https://github.com/rootedCF/classicaddons/tree/master/AddOns/d/DiscordFrameModifier)
|Lets you configure any frame in your UI in any way it's possible to configure that frame.
|-
|[Bagnon_Core](https://github.com/rootedCF/classicaddons/tree/master/AddOns/b/Bagnon_Core)
|Core functionality for Bagnon and Banknon
|-
|[simpleMinimap_Autozoom](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/simpleMinimap_Autozoom)
|timed auto zoom-out module for simpleMinimap
|-
|[MetaMapFWM](https://github.com/rootedCF/classicaddons/tree/master/AddOns/m/MetaMapFWM)
|Overlay module which shows unexplored areas of the WorldMap.
|-
|[CombatCaller](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CombatCaller)
|Allows the user to set up a way so that the client will start telling everyone that it has low mana/hitpoints.
|-
|[Fubar_AtlasFu2](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/Fubar_AtlasFu2)
|A FuBar button to load Atlas.
|-
|[MyAcePerc](https://github.com/rootedCF/classicaddons/tree/master/AddOns/m/MyAcePerc)
|Shows percentage value of mana total on spell mouseover
|-
|[simpleMinimap_Pings](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/simpleMinimap_Pings)
|pinger name popup module for simpleMinimap
|-
|[SelfElite](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/SelfElite)
|Makes your character texture 1 of 4 styles (elite/rare/raremob/normal).
|-
|[Stubby](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/Stubby)
|Allows on-demand addons to load automatically based upon simple event notification hooks
|-
|[SpellAlertOptions](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/SpellAlertOptions)
|Load on demand option windows for SpellAlert (modified again).
|-
|[TooltipsBase](https://github.com/rootedCF/classicaddons/tree/master/AddOns/t/TooltipsBase)
|Provides a base mod for moving and modifying tooltips
|-
|[Bongos_Options](https://github.com/rootedCF/classicaddons/tree/master/AddOns/b/Bongos_Options)
|An options menu for Bongos
|-
|[Bongos_RollBar](https://github.com/rootedCF/classicaddons/tree/master/AddOns/b/Bongos_RollBar)
|Makes the frame for rolling on items movable
|-
|[SimpleTip](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/SimpleTip)
|Simple tooltip enhancements
|-
|[AceLoot](https://github.com/rootedCF/classicaddons/tree/master/AddOns/a/AceLoot)
|Automatically positions the most relevant part of the loot window under your cursor.
|-
|[ChatScroll](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/ChatScroll)
|Makes chat windows scrollable with the mouse wheel.
|-
|[DiscordArtOptions](https://github.com/rootedCF/classicaddons/tree/master/AddOns/d/DiscordArtOptions)
|Options window for Discord Art.
|-
|[BanzaiLib](https://github.com/rootedCF/classicaddons/tree/master/AddOns/b/BanzaiLib)
|Aggro notification library.
|-
|[OneBank](https://github.com/rootedCF/classicaddons/tree/master/AddOns/o/OneBank)
|OneBank is a replacement for the default bank frame that combines all the bags into one frame.
|-
|[PetBindings](https://github.com/rootedCF/classicaddons/tree/master/AddOns/p/PetBindings)
|Adds several key bindings to the UI that deal with pets.
|-
|[DeShift](https://github.com/rootedCF/classicaddons/tree/master/AddOns/d/DeShift)
|Auto DeShifts you to humanoid form if you want to talk.
|-
|[DynamicDataItem](https://github.com/rootedCF/classicaddons/tree/master/AddOns/d/DynamicDataItem)
|DynamicData aims to be for dynamic data in WoW what Sea is for lua functions - a library with stuff that gets updated in a timely manner.
|-
|[simpleMinimap_Movers](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/simpleMinimap_Movers)
|Mover frames module for simpleMinimap
|-
|[ProfessionLevel](https://github.com/rootedCF/classicaddons/tree/master/AddOns/p/ProfessionLevel)
|Shows the minimum gathering level of profession resource nodes on mouseover.
|-
|[SCT_ManaGain](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/SCT_ManaGain)
|Shows the mana you regen while drinking, Spirit Tapped, or Evocating.
|-
|[Nurfed_PlayerFrame](https://github.com/rootedCF/classicaddons/tree/master/AddOns/n/Nurfed_PlayerFrame)
|Customizes the default player frame. It moves the frame, adds health/mana/experience displays, and enables various visual and interaction modifications.
|-
|[GuildRaidSnapShot](https://github.com/rootedCF/classicaddons/tree/master/AddOns/g/GuildRaidSnapShot)
|Takes snapshots of raids and loot, and has an in-game DKP interface for bidding, rolling, and dkp lookups.
|-
|[EnhTooltip](https://github.com/rootedCF/classicaddons/tree/master/AddOns/e/EnhTooltip)
|Used to display enhanced tooltips under the original tooltip or in the original tooltip, contains hooking functions for almost all major in game item tooltips.
|-
|[ChatrBacklog](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/ChatrBacklog)
|Records recent chat messages, specifically whispers and notes, and allows you to review them later.
|-
|[myTargetModel](https://github.com/rootedCF/classicaddons/tree/master/AddOns/m/myTargetModel)
|Just a little dragable frame of your target's model.
|-
|[ComboEnergyBar](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/ComboEnergyBar)
|Adds a window displaying combo points and energy bar for Rogues and Druids.
|-
|[FuBar_DamageMetersFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_DamageMetersFu)
|Damage Meters control and data via the FuBaR interface.
|-
|[Backdrop](https://github.com/rootedCF/classicaddons/tree/master/AddOns/b/Backdrop)
|Adds a few resizable backdrops to the UI
|-
|[MetaMapBWP](https://github.com/rootedCF/classicaddons/tree/master/AddOns/m/MetaMapBWP)
|Waypoints system module
|-
|[Bongos_MapBar](https://github.com/rootedCF/classicaddons/tree/master/AddOns/b/Bongos_MapBar)
|A customizable, movable minimap
|-
|[AcePlayerMenu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/a/AcePlayerMenu)
|Hook extra menu to friend list, guild list and chat player
|-
|[Solitaire](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/Solitaire)
|This is just a recreation of the solitaire game.
|-
|[whopinged](https://github.com/rootedCF/classicaddons/tree/master/AddOns/w/whopinged)
|helps identify players who ping the minimap
|-
|[MetaMapWKB](https://github.com/rootedCF/classicaddons/tree/master/AddOns/m/MetaMapWKB)
|MetaMapWKB adds a user database of MoBs/NPCs from aquired targets.
|-
|[DiscordActionBarsOptions](https://github.com/rootedCF/classicaddons/tree/master/AddOns/d/DiscordActionBarsOptions)
|Load on demand options window for Discord Action Bars.
|-
|[SimpleMail](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/SimpleMail)
|Preserve recipient's name and autofill subject line.
|-
|[MetaMapBLT](https://github.com/rootedCF/classicaddons/tree/master/AddOns/m/MetaMapBLT)
|Adds Boss Loot Tables to MetaMap, edited by Daviesh and based on AtlasLoot Enhanced by Daviesh
|-
|[TinyTipExtras](https://github.com/rootedCF/classicaddons/tree/master/AddOns/t/TinyTipExtras)
|Adds extra features to your tooltip, such as pvp icon, buffs, etc.
|-
|[Bongos_ActionBar](https://github.com/rootedCF/classicaddons/tree/master/AddOns/b/Bongos_ActionBar)
|A replacement for the main actionbar
|-
|[FuBar_SWStatsFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_SWStatsFu)
|Fubar 2 plugin for SW_Stats
|-
|[MetaMapHLP](https://github.com/rootedCF/classicaddons/tree/master/AddOns/m/MetaMapHLP)
|Help module for MetaMap.
|-
|[sct_options](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/sct_options)
|Options menu for SCT (LoadOnDemand)
|-
|[WinAce](https://github.com/rootedCF/classicaddons/tree/master/AddOns/w/WinAce)
|This tool provides an easy way for you to keep your Ace addons up to date.
|-
|[FuBar_CombatTimeFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_CombatTimeFu)
|Shows how long you've been in combat
|-
|[CT_RABossRazorgore](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CT_RABossRazorgore)
|An extension to CT_RABossMods that adds Razorgore to the encounters.
|-
|[myModel](https://github.com/rootedCF/classicaddons/tree/master/AddOns/m/myModel)
|Just a little dragable frame of your model.
|-
|[ZoomMap](https://github.com/rootedCF/classicaddons/tree/master/AddOns/z/ZoomMap)
|Bind a key to inflate the minimap
|-
|[ZubanLib](https://github.com/rootedCF/classicaddons/tree/master/AddOns/z/ZubanLib)
|Library functions used by various addons.
|-
|[simpleMinimap_GUI](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/simpleMinimap_GUI)
|GUI options module for simpleMinimap
|-
|[DHUD_Options](https://github.com/rootedCF/classicaddons/tree/master/AddOns/d/DHUD_Options)
|Drathals HUD Options. Type /dhud menu for Options
|-
|[CooldownCountCT](https://github.com/rootedCF/classicaddons/tree/master/AddOns/c/CooldownCountCT)
|CooldownCount for CT
|-
|[Nurfed_General](https://github.com/rootedCF/classicaddons/tree/master/AddOns/n/Nurfed_General)
|Provides more functionality to the base UI.
|-
|[idChat2_Scroll](https://github.com/rootedCF/classicaddons/tree/master/AddOns/i/idChat2_Scroll)
|Enables scrolling with the mousewheel, shift+scroll to go to the top/bottom.
|-
|[Nurfed_Options](https://github.com/rootedCF/classicaddons/tree/master/AddOns/n/Nurfed_Options)
|Nurfed's Options Menu.
|-
|[Bagnon_Forever](https://github.com/rootedCF/classicaddons/tree/master/AddOns/b/Bagnon_Forever)
|Allows the viewing of the bank from anywhere and the inventory of your other characters.
|-
|[MetaMapBKP](https://github.com/rootedCF/classicaddons/tree/master/AddOns/m/MetaMapBKP)
|Backup module for data backup and restore.
|-
|[FuBar_RecapFu](https://github.com/rootedCF/classicaddons/tree/master/AddOns/f/FuBar_RecapFu)
|FuBar Panel plugin for Recap
|-
|[DiscordUnitFramesOptions](https://github.com/rootedCF/classicaddons/tree/master/AddOns/d/DiscordUnitFramesOptions)
|Provides an options window for Discord Unit Frames.
|-
|[GoodInspect](https://github.com/rootedCF/classicaddons/tree/master/AddOns/g/GoodInspect)
|Improves inspect function
|-
|[simpleMinimap_Coords](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/simpleMinimap_Coords)
|minimap coordinates frame module for simpleMinimap
|-
|[OutfitDisplayFrame](https://github.com/rootedCF/classicaddons/tree/master/AddOns/o/OutfitDisplayFrame)
|A utility frame to display a set of equipable items.
|-
|[AvailableOnly](https://github.com/rootedCF/classicaddons/tree/master/AddOns/a/AvailableOnly)
|This hides unavailable spells/skills by default when visiting a trainer.
|-
|[MetaMapEXP](https://github.com/rootedCF/classicaddons/tree/master/AddOns/m/MetaMapEXP)
|MetaMap export module.
|-
|[Sudoku](https://github.com/rootedCF/classicaddons/tree/master/AddOns/s/Sudoku)
|Sudoku puzzle game.
|-
|[Bagnon_Spot](https://github.com/rootedCF/classicaddons/tree/master/AddOns/b/Bagnon_Spot)
|Simple search for Bagnon
|-
|[WoWonid](https://github.com/rootedCF/classicaddons/tree/master/AddOns/w/WoWonid)
|Brick-breaking game
|-
|[Buffalo](https://github.com/rootedCF/classicaddons/tree/master/AddOns/b/Buffalo)
|Customizing your buff display
|}

## Non-Addon Game Modifications
Looking to boost performance? Autoloot without needing to hold shift? Improve graphics a bit? Change the models and textures and sounds of the game? See also, for these non-addon ways you can further tweak your Turtle WoW setup: 
- [Client Fixes and Tweaks](Client Fixes and Tweaks)
- [Client Mods](Client Mods)
- [Sound Mods](Sound Mods)
- [Making Custom Sounds](Making Custom Sounds)
- [3D Model Guide](https://docs.google.com/document/d/15pY_HqGEDbjvs3FztZYETfVxGr9EC_0UGL7c3bzmFaI/edit?tab=t.0#heading=h.4p4p8wueyrc9)
- [Mod Primer Guide](https://docs.google.com/document/d/1kUrZus7HAaxpJeVFX2bJ2iyyZfUR6ZJAmBygIPo-NHA/edit?usp=sharing)

## For Addon Developers
### First Steps To Creating Addons
Do you have a secret dream of becoming a famous addon developer superstar and get all the nerdy wow girls like Shagu? Take your first steps to achieve the dream by reading [a short tutorial from the man himself.](https://github.com/shagu/wow-vanilla-api/blob/master/tutorial/tutorial-01-enUS.md) Also consider reading the [FirstSteps](https://github.com/forwow/FirstSteps/tree/main/Examples/001) guide.

### Basic loop to write an Addon
# Write **Lua**, **XML,** **.toc** as text file, and place them in a folder in game's Interface/AddOns. You could use an IDE like Visual Studio or a text editor like Notepad++ to do this.
# Run the game to see if the addon is working.
# If there is bug, the easiest way is to use **message("string")** or **DEFAULT_CHAT_FRAME:AddMessage("string")** trying to output some info from your program to find the bug.
# If you need advanced debug feature like Step by Step Execution or Call Stack Inspector, you could try the [UnitXP_SP3 full package](https://github.com/OldManAlpha/UnitXP_SP3_Addon), it includes an advanced Lua debugger for the game.

### 1.12 Addon Development Resources
- [Vanilla-Coding in 2025 with AI](https://forum.turtlecraft.gg/viewtopic.php?t=21861) - An updated short guide
- [Interface Customization](https://web.archive.org/web/20061117102607/http://www.wowwiki.com/Interface_Customization) - WoWWiki Interface Customization Main Menu (Wayback machine)
- [API Functions](https://wowpedia.fandom.com/wiki/World_of_Warcraft_API?oldid=352751). This is a link to the wiki dated right before December 5th, 2006, when the 2.0 update was released. Make sure you always look at wiki edits from before this date.
- [API Events](https://github.com/shagu/wow-vanilla-api/blob/master/events.md) - Shagu's git for 1.12.1 Event-Listing.
- [1.12.1-Development](https://github.com/Kabinner/1.12.1-Development) - Kabinner documenting the experience of learning to write addons.
- [Interface Textures](https://github.com/doorknob6/vanilla-wow-interface-textures) - Export of vanilla WoW interface textures converted to .png.
- [UI Macros](https://github.com/Meridaw/Vanilla-Macros/tree/master/User%20Interface) - a large collection of useful macros that can be copied and used on turtle wow.
- [Lua Definitions](https://github.com/refaim/Vanilla-WoW-Lua-Definitions) - Lua definitions for statically typed addon development using Luanalysis IDE.
- [API Type Definitions](https://github.com/SabineWren/wow-api-type-definitions/) - Dokka's🏹 git for type definitions to much of the 1.12.1 API.
- [Turtle WoW UI Source](https://github.com/refaim/Turtle-WoW-UI-Source) - the user interface source code for Turtle WoW.
- [Hex to RGBA](https://rgbacolorpicker.com/hex-to-rgba) - Hex to RGBA Converter.
- [WoWUIDesigner](https://www.wowinterface.com/downloads/info4222-WoWUIDesigner.html) - Helps with the creation of add-ons interface elements.
- [TextureCoordsCalculator](https://github.com/helnesis/TextureCoordsCalculator) - Calculates texture coordinates automatically, by selecting off the desired area directly through your .BLP file.

### Library Addons for Addon Developers
- [Abacus-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide tools for formatting money and time.
- [Ace2](https://github.com/laytya/Ace2) - embeddable framework for rapid WoW addon development.
- [Ace3v](https://github.com/laytya/Ace3v) - port of [Ace3 framework](https://www.curseforge.com/wow/addons/ace3) for Vanilla WoW.
- [AnchorsAway-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Row stacking and anchoring template.
- [AnimationGroup](https://github.com/martinjlowm/AnimationGroup) - A library to provide Retail-like frame animations.
- [Babble-Boss-2.0, 2.1, 2.2 and 2.3](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide localizations for bosses.
- [Babble-Class-2.0, 2.1 and 2.2](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide localizations for classes.
- [Babble-Faction-2.2](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide localizations for factions.
- [Babble-Item-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide localizations for items.
- [Babble-ItemSet-2.2](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide localizations for factions.
- [Babble-Race-2.0, 2.1 and 2.2](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide localizations for races.
- [Babble-Spell-2.0, 2.1, 2.2 and 2.3](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide localizations for spells.
- [Babble-SpellTree-2.0, 2.1 and 2.2](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide localizations for spell and talent trees.
- [Babble-Zone-2.0, 2.1 and 2.2](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide localizations for zones.
- [Banzai-1.0 and 1.1](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Aggro notification library.
- [CallbackHandler-1.0](https://github.com/zerosnake0/CallbackHandler-1.0) - back-end utility library that makes it easy for a library to fire its events to interested parties. It removes the need for addons to be aware of e.g. AceEvent.
- [CandyBar-2.0](https://github.com/laytya/LibCandyBar) - A timer bars library.
- [CandyBar-2.1](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A timer bars library.
- [CastLib-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide information about casts.
- [ChatThrottleLib](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library that keeps outbound chat and addon communication from exceeding the output rate limit in WoW that otherwise causes players to disconnect from the server.
- [Chronos](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library that managers time. You can schedule a function to be called in X seconds, with or without an id. You can request a timer, which tracks the elapsed duration since the timer was started.
- [Classy-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A wrapper for defining classes that inherit from widgets.
- [CommChannel-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library that manages three communication channels ("guild", "raid" and "sync") and allows addons to use a RPC mechanism.
- [Compost-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Recycle tables to reduce garbage generation.
- [Crayon-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide coloring tools.
- [Deformat-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to deformat format strings.
- [Dewdrop-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide a clean dropdown menu interface.
- [DruidManaLib-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide mana values while in shape shift.
- [FAIAP](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library for syntax highlighting and indentation.
- [FiveSecLib-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide feedback about the five second rule for casters.
- [FuBarPlugin-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Plugin for FuBar.
- [GetSpellInfoVanilla](https://github.com/Schaka/GetSpellInfoVanilla) - addon to help developers access information about spells.
- [Glory-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library for PvP and Battlegrounds.
- [GraphLib-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Allows for easy creation of graphs.
- [Gratuity-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Tooltip parsing library.
- [HealComm-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide communication of heals and resurrections.
- [IFrameFactory-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library that helps to create and re-use dynamically created frames.
- [ItemBonusLib-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library that scans your equipment for cumulative item bonuses and sums them up.
- [ItemClasses-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A set of classes used to describe and execute usable items/actions (spells, macros, etc...).
- [Jostle-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to handle rearrangement of blizzard's frames when bars are added to the sides of the screen.
- [LegoBlock](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to create blocks for displaying information.
- [LibCompress](https://github.com/Geigerkind/LibCompressVanilla) - A compression and decompression library implemented entirely in WoW-friendly Lua. It supports the LZW and Huffman algorithms.
- [LibCraftingProfessions-1.0](https://github.com/refaim/LibCraftingProfessions-1.0) - A small library designed to provide a universal interface for crafting professions.
- [LibCrafts-1.0](https://github.com/refaim/LibCrafts-1.0) - A library designed to provide an embeddable database of crafting spells, recipes, reagents, results, sources etc. Supersedes ReagentData, TradeSkillsData and TradeSkillsData-turtle (not as a drop-in replacement; i.e., it is not meant to be installed as an addon! It will be included within addons that require it).
- [LibDataBroker-1.1](https://github.com/tekkub/libdatabroker-1-1) - A library designed to provide a MVC interface for use in various addons.
- [LibDBIcon-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library for creating minimap icons.
- [LibSharedMedia-3.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Shared handling of media data (fonts, sounds, textures, ...) between addons.
- [LibStub](https://github.com/zerosnake0/LibStub) - minimalistic versioning library that allows other libraries to easily register themselves and upgrade. It is meant to be a cross-community library sharing system.
- [LibVendorValue-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library for vendor item values in World of Warcraft 1.12.1.
- [LzwLib-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A simple lua LZW compression library.
- [MD5-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - MD5 (Message-Digest algorithm 5) implementation.
- [Metrognome-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - OnUpdate timer managing library.
- [NPCDB-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide localizations for relevant npcs.
- [OneStorage-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A universal persistent pooled database for bank, inventory, and equipment data.
- [PaintChips-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Color managing library.
- [ParserLib-1.1](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - An embedded combat log parser, which works on all localizations.
- [PeriodicTable and PeriodicTable-2.0 (also Core-2.0 and Misc-2.0)](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Optimized itemid database. Ace alternative to [ReagentData](https://github.com/refaim/ReagentData) library.
- [ProximityLib](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to track raid/party unit's general range.
- [Quixote-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Abstracts out questlog handling.
- [ReagentData](https://github.com/refaim/ReagentData) - comprehensive set of all reagents and components used by trade skills.
  - Superseded by LibCrafts, which is included in future addons that require it as a library.
- [RosterLib-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - party/raid roster management.
- [Satellite](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A tool for slash command enchancement.
- [SeaString](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A mini-library for string functions.
- [SharedMedia-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Shared handling of media data (fonts, sounds, textures, ...) between addons.
- [Sink-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Library that handles chat output.
- [Sol-1.0](https://github.com/martinjlowm/Sol) - Sol reimplements common Lua functions that are only available in Lua versions post 5.0.
- [SpecialEvents-Aura-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Special events for Aura's, (de)buffs gained, lost etc.
- [SpecialEvents-Bags-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Special events for bag/slot changes.
- [SpecialEvents-Breath-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Special events for player holding breath (swimming).
- [SpecialEvents-Equipped-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Special events for equipment changes.
- [SpecialEvents-Keys-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Special events for modifier (ctrl, alt, shift) keypresses.
- [SpecialEvents-LearnSpell-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Special events for mail (received, auction notices, etc).
- [SpecialEvents-Mail-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Special events for mail (received, auction notices, etc).
- [SpecialEvents-Mount-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Special events for mounting.
- [SpecialEvents-Movement-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Special events for movement.
- [SpellCache-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Library that caches spells to speed up look ups.
- [SpellStatus-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Status library that simplifies retrieving spell status information from the player.
- [SpellStatus-AimedShot-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Addon library for SpellStatus-1.0 to allow support for Hunter's Aimed Shot.
- [SpellTimes-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide buff times and cooldowns for spells.
- [Surface-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Shared handling of StatusBar textures between add ons.
- [Tablet-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide an efficient, featureful tooltip-style display.
- [TEALib-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Tiny Encryption Algorythm implementation.
- [TipLib-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library of common functions to tooltips. Can be used to create a psuedo tooltip.
- [TradeSkillsData](https://github.com/refaim/TradeSkillsData) - provides database of vanilla trade skill recipes, vendors and sources.
  - Superseded by LibCrafts, which is included in future addons that require it as a library.
- [TradeSkillsData-turtle](https://github.com/refaim/TradeSkillsData-turtle) - turtle-specific database extension for TradeSkillsData.
  - Superseded by LibCrafts, which is included in future addons that require it as a library.
- [Toolbox-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - Collection of various utility functions.
- [Tourist-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A library to provide information about zones and instances.
- [Vector-2.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - A simple set of vector libraries.
- [Waterfall-1.0](https://github.com/refaim/Vanilla-WoW-1.12-Addon-Development-Libraries-Archive) - GUI configuration library.

### Addons In Need of Fixes
These addons work on normal 1.12 servers, but because of Turtle WoW's changes, these addons are known to suffer lua errors or other serious issues. If you are an addon developer and choose to fix up these addons, please share your fixed fork on the working addons list above.

- [Questie](https://github.com/SaxxonPike/Questie-Twow) - A standalone Vanilla QuestHelper. Has far less features than the 2024 Classic version most people know. Completely lacks support for new Turtle quests and changes. [[Vid1](https://www.youtube.com/watch?v=HeH_DHm1Ecg&t)].
  - Consider instead: pfQuest + pfQuest-turtle
- [ElvUI](https://github.com/ElvUI-Vanilla/ElvUI) - Complete User Interface replacement and overhaul. This is an incomplete backport from later WoW versions. [[Img1](https://user-images.githubusercontent.com/19589902/30231616-62e40f32-94f4-11e7-9712-a32f19719cd8.jpg)]
  - Consider instead: pfUI + pfUI-turtle
- [MacroExtender](https://github.com/PROXiCiDE/MacroExtender) - allows you to create conditional statement macros that are found in TBC+ and more [[Read](http://proxicide.github.io/MacroExtender/)]
  - Consider instead: Roid-Macros
