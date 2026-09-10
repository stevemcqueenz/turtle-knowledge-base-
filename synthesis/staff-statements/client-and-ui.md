# Staff statements — Client, launcher, addons, UI

Verbatim statements by Turtle WoW staff (forum rank "Turtle WoW Team") about intended behavior and the reasoning behind it, drawn from `structured/forum/posts/*.jsonl`. Machine-readable form: `structured/staff-statements.jsonl`. Index and cross-cutting notes: [staff-statements.md](../staff-statements.md).

50 statements. Every quote is copied verbatim from the cited post; every link is the `url` field of that post.

## Statements

#### 2018-10-01 — Chat channels

> we can't force the client to join custom channel without modifying it or creating an addon. It's only possible in WotLK 3.x.x+ clients via "chatcache hack" ... Client maintains its own list and will ignore all server-side changes.

Clarifies: The vanilla client keeps its own channel list and ignores server-side changes, so auto-joining a custom channel is impossible without client modification or an addon.

[Torta (staff), 2018-10-01](https://forum.turtlecraft.gg/viewtopic.php?p=356#p356) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Chat systems"

#### 2018-10-10 — Quest log size

> quest log size is limited by the client and network protocol, we can't do it with the Blizzard quest components.

Clarifies: The 20-quest log cap is imposed by the client and network protocol and cannot be raised with Blizzard's quest components.

[Torta (staff), 2018-10-10](https://forum.turtlecraft.gg/viewtopic.php?p=706#p706) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Increase max. quest log amount from 20 to 40"

#### 2020-01-09 — Client string and icon limits

> Green text strings are part of the client files. We can't create new. Same goes for the question marks: not all the the gear models have an icon display data.

Clarifies: Green 'Use:' text strings live in client files and cannot be created server-side, and some gear models have no icon display data, producing question-mark icons.

[Torta (staff), 2020-01-09](https://forum.turtlecraft.gg/viewtopic.php?p=4840#p4840) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Bug Report List"

#### 2020-01-09 — Custom spells

> Custom server-side spell won't pass initial client-side checks without having its template in the client files. These are cons of working with someone else's game.

Clarifies: A custom server-side spell fails client-side checks unless its template exists in client files — the stated limit of working without client modification.

[Torta (staff), 2020-01-09](https://forum.turtlecraft.gg/viewtopic.php?p=4843#p4843) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Portable Meeting Stone changes"

#### 2020-04-19 — Tooltips

> We can't do it. Tooltips are handles client side, not from server.

Clarifies: Item tooltips are handled entirely client-side, so they cannot be corrected from the server.

[Torta (staff), 2020-04-19](https://forum.turtlecraft.gg/viewtopic.php?p=5731#p5731) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Riding Turtle"

#### 2020-05-12 — Custom spells / commands

> Implementing custom spell without having client-modifications is not the option, at least right now. We are not resorting to mandatory client updates yet! ... Commands are easy but immersion-breaking. Wouldn't go for it.

Clarifies: In 2020 the team refused mandatory client updates, so illusions ran on unnamed dummy spells; chat commands were rejected as immersion-breaking.

[Torta (staff), 2020-05-12](https://forum.turtlecraft.gg/viewtopic.php?p=5933#p5933) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Shop items as custom spells or commands"

#### 2020-06-17 — Quest log size

> Yes, unfortunately there's a client-side limitation for this. Shame, it could make a great quality of life change.

Clarifies: Reaffirms the quest log cap as a client-side limitation.

[Torta (staff), 2020-06-17](https://forum.turtlecraft.gg/viewtopic.php?p=6393#p6393) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Increase the Quest Number Cap"

#### 2020-12-16 — Launcher

> we're not planning to force our users to install 3rd party software on a mandatory basis. Our expansion updates will be sent directly from server to client

Clarifies: In 2020 a mandatory third-party launcher was rejected in favour of server-to-client updates — later reversed when the official launcher shipped in November 2024 and became required for some features.

[Torta (staff), 2020-12-16](https://forum.turtlecraft.gg/viewtopic.php?p=8720#p8720) · kind: `policy` · era: **pre-1.18.1** · topic: "Turtle WoW Launcher. We need!"

Superseded by: [Torta (staff), 2025-11-04](https://forum.turtlecraft.gg/viewtopic.php?p=158367#p158367) — the official launcher became the required delivery path for client patches.

#### 2021-01-14 — Client binaries / antivirus

> Windows Defender has been falsely blocking our DiscordOverlay.dll. We decided to go open source to prove that there is no harmful content inside the library in question.

Clarifies: DiscordOverlay.dll open-sourced with PDBs after Windows Defender false positives.

[Torta (staff), 2021-01-14](https://forum.turtlecraft.gg/viewtopic.php?p=9110#p9110) · kind: `policy` · era: **pre-1.18.1** · topic: "DiscordOverlay.dll"

#### 2021-02-04 — Distribution and antivirus

> This is one the the reasons why many private WoW servers don't like to go custom: it's not really possible for us to distribute update without problems like Blizzard would do.

Clarifies: Being unable to sign binaries is named as a reason many private servers avoid custom client work at all.

[Torta (staff), 2021-02-04](https://forum.turtlecraft.gg/viewtopic.php?p=9298#p9298) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Turtle Wow Update and Trojan Problem"

#### 2021-06-29 — Terrain tooling

> Sadly Noggit doesn't work very well on Vanilla, deleting water on edited chunks so we can't utilise it to its full power.

Clarifies: Noggit, the terrain editor, works poorly on vanilla and deletes water on edited chunks, limiting terrain work.

[Dragunovi (staff), 2021-06-29](https://forum.turtlecraft.gg/viewtopic.php?p=11101#p11101) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Youtube moder"

#### 2021-07-18 — Transports

> adding NPCs to a moving object is impossible due to the nature of the game itself, prior to WOTLK the boats have been so from what I can remember.

Clarifies: NPCs cannot be placed on moving transports in this client generation.

[Gheor (staff), 2021-07-18](https://forum.turtlecraft.gg/viewtopic.php?p=11314#p11314) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Boats"

#### 2021-08-31 — Field of view

> We don't have client source files (since it's Blizzards) to perform any heavy modifications. There'll be probably 2 binary files with FoV and without.

Clarifies: No client source available, so FoV cannot become an in-game video option; two binaries planned instead.

[Torta (staff), 2021-08-31](https://forum.turtlecraft.gg/viewtopic.php?p=11892#p11892) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Improved Field of View in 1.15.2 — Yes or No?"

#### 2021-09-21 — Race model swaps

> You'd have to litterally change the Undead race into the High Elf one and such, the client can't sustain it

Clarifies: A Dark Ranger appearance for Undead would require replacing the Undead race with the High Elf race, which the client cannot sustain.

[Gheor (staff), 2021-09-21](https://forum.turtlecraft.gg/viewtopic.php?p=12375#p12375) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Dark Ranger Token for Undead"

#### 2021-10-06 — Debuff limit

> This would be possible through the use of an addon modifying the UI. And while it would also be possible to do it through client modifications solely, it would be completely infeasible.

Clarifies: Expanding the visible debuff limit is only feasible via a UI addon; pure client modification was called infeasible. The server-side limit was later raised to 64 in 2023.

[Jamey (staff), 2021-10-06](https://forum.turtlecraft.gg/viewtopic.php?p=12905#p12905) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Remove or Expand Debuff Limit"

#### 2021-12-16 — Model animations

> Editing WoW model's animation is extremely hard task, and we're not able to do that yet.

Clarifies: Editing WoW model animations is beyond the team's current ability.

[Torta (staff), 2021-12-16](https://forum.turtlecraft.gg/viewtopic.php?p=14601#p14601) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Posture option for High Elves"

#### 2022-02-08 — Modelling capacity

> we do not have an active modeler and it's very hard to find people with the right skill-set to work with the old Vanilla models.

Clarifies: High Elf model and animation fixes were blocked in 2022 by having no active modeler with vanilla-model skills.

[Torta (staff), 2022-02-08](https://forum.turtlecraft.gg/viewtopic.php?p=16875#p16875) · kind: `reasoning` · era: **pre-1.18.1** · topic: "High Elf Female Model/Animations fix"

#### 2022-02-18 — Antivirus false positives

> These antiviruses however do not trigger on them because they're big companies that have requested explicit whitelist permissions etc. We're not one of these big companies and thus can't enjoy the same exclusivity they have but rest assured all antivirus flags are false positives.

Clarifies: Antivirus flags come from the patcher writing a file and editing WoW.exe to load the Discord library; the team lacks the whitelist status of large vendors and plans to sign the binary.

[Jamey (staff), 2022-02-18](https://forum.turtlecraft.gg/viewtopic.php?p=17098#p17098) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Detected: Trojan:Win32/Wacatac.B!ml"

#### 2022-02-19 — launcher / antivirus

> the false positive most likely comes from the patcher extracting a new file to the file system, and modifying WoW.exe to load Discords library ... Because editing a binary file is sometimes suspect for Antiviruses to pick up on.

Clarifies: Antivirus false positives are explained as the patcher extracting a file and editing WoW.exe to inject the Discord library.

[Jamey (staff), 2022-02-19](https://forum.turtlecraft.gg/viewtopic.php?p=17125#p17125) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Detected: Trojan:Win32/Wacatac.B!ml"

#### 2022-08-04 — Model porting

> we cannot really design fully custom models. Also, any models post-WotLK are very hard to downport, nor we should: they're too HD and stand out from the rest of the game graphics.

Clarifies: Fully custom models are out of reach and post-WotLK models are too high-detail to sit alongside vanilla art.

[Torta (staff), 2022-08-04](https://forum.turtlecraft.gg/viewtopic.php?p=21044#p21044) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Armored Azure Drake and other dragons..."

#### 2022-08-09 — Vanilla modding tooling

> The client has undergone a lot of changes between these two versions of the game and thus a lot of tools that are public are simply useless to us. Meaning we have to develop them ourselves or modify them

Clarifies: Explanation of why custom models are hard: the modding scene targets WotLK, vanilla formats differ, so tools must be written or adapted in-house by people who know both modelling and vanilla formats.

[Jamey (staff), 2022-08-09](https://forum.turtlecraft.gg/viewtopic.php?p=21661#p21661) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Armored Azure Drake and other dragons..."

#### 2022-08-10 — New client base

> It'll take a LOT of time. Not everybody would be open to months of no content just for a new client.

Clarifies: Moving to a newer client base has been discussed repeatedly but would cost months without content.

[Akalix (staff), 2022-08-10](https://forum.turtlecraft.gg/viewtopic.php?p=21833#p21833) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Armored Azure Drake and other dragons..."

#### 2022-08-11 — Code signing

> This is all caused due to a lack of Digital Signature. We do not have one as it would put the server and our team in danger of litigation.

Clarifies: The patcher is unsigned because obtaining a digital signature would expose the server and team to litigation; hashsums are offered instead.

[Akalix (staff), 2022-08-11](https://forum.turtlecraft.gg/viewtopic.php?p=22041#p22041) · kind: `reasoning` · era: **pre-1.18.1** · topic: "TROJAN ALERT"

#### 2022-09-01 — Quest log size

> It's nearly impossible to extend a quest log size in the Vanilla client without having its source code.

Clarifies: Extending the quest log is nearly impossible without the client source.

[Torta (staff), 2022-09-01](https://forum.turtlecraft.gg/viewtopic.php?p=24111#p24111) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Increase quest log cap"

#### 2022-10-20 — Client compatibility

> No. It's impossible. Our custom additions are not compatible.

Clarifies: The 1.14 (64-bit) client cannot be used against Turtle because the server's custom additions are incompatible.

[Torta (staff), 2022-10-20](https://forum.turtlecraft.gg/viewtopic.php?p=27611#p27611) · kind: `reasoning` · era: **pre-1.18.1** · topic: "wow 1.12.1 server with 1.14.0 (64bit) client"

#### 2023-01-10 — Quest log size

> It's not possible, it's in the fixed array of unit fields. Can't go beyond it.

Clarifies: The quest log limit sits in a fixed array of unit fields and cannot be exceeded; a replacement quest UI would take months and risk severe bugs.

[Torta (staff), 2023-01-10](https://forum.turtlecraft.gg/viewtopic.php?p=32365#p32365) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Increase size of quest log"

#### 2023-01-10 — quest log UI

> Yes, there could be a replacement UI for quests: but it might cause a lot of complications if we change the way the server communicates with the client about quest stuff. Basically, it's just months of work for very little gain and with 99% probability of really bad bugs.

Clarifies: A replacement quest UI to lift the quest log limit is rejected as months of work, little gain and near-certain severe bugs.

[Torta (staff), 2023-01-10](https://forum.turtlecraft.gg/viewtopic.php?p=32366#p32366) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Increase size of quest log"

#### 2023-01-21 — Character creation limits

> We're raising the limit in the upcoming patch, to display more than six buttons on a character creation screen.

Clarifies: The 1.12 client's six-class-button limit on the character creation screen was raised by a client patch.

[Torta (staff), 2023-01-21](https://forum.turtlecraft.gg/viewtopic.php?p=32876#p32876) · kind: `intent` · era: **pre-1.18.1** · topic: "Patch 1.17.0 — Beyond the Greymane Wall"

#### 2023-03-10 — Graphics

> we will not be changing the base graphics of the game, as we are a vanilla server at our core identity.

Clarifies: Base game graphics will not be replaced; HD packs stay optional player-side mods.

[Akalix (staff), 2023-03-10](https://forum.turtlecraft.gg/viewtopic.php?p=37350#p37350) · kind: `policy` · era: **pre-1.18.1** · topic: "Make Legion landscape textures(only) permanent part of Turtle client"

#### 2023-08-10 — Performance

> it's important to avoid using both Vanillatweaks and Vanillafixes together if you encounter crashes ... If you have an older graphics card like the Intel HD3000, it's advisable to avoid using the DXVK version of Vanillafixes.

Clarifies: Official performance guidance: do not run VanillaTweaks and VanillaFixes together if crashing, and avoid the DXVK build on pre-2016 graphics hardware.

[Bowser (staff), 2023-08-10](https://forum.turtlecraft.gg/viewtopic.php?p=56652#p56652) · kind: `policy` · era: **pre-1.18.1** · topic: "Increase performance on old laptop"

#### 2023-09-22 — LFT addon

> LFT is not actually a game mechanic, but rather an addon ... the client we're using is from 2006, which means there may be several issues with how addons work on it.

Clarifies: The Looking For Team tool is a third-party addon, not a server mechanic; its bugs belong on the author's GitHub and it can be disabled in the start menu.

[Pepesmite (staff), 2023-09-22](https://forum.turtlecraft.gg/viewtopic.php?p=66403#p66403) · kind: `working-as-intended` · era: **pre-1.18.1** · topic: "LFT needs fixed or disabled."

#### 2024-01-25 — Modified WoW.exe

> There is a modified version of wow.exe in the game client, which is perceived by the protection as a trojan but is not. Modification of wow.exe is necessary for custom content to work.

Clarifies: The shipped WoW.exe is deliberately modified so custom content works, which is what antivirus software flags as a trojan.

[Pepesmite (staff), 2024-01-25](https://forum.turtlecraft.gg/viewtopic.php?p=85814#p85814) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Update doesnt work - please help"

#### 2024-02-06 — Password handling

> Case insensitivity is a game client issue, a portion we do not control.

Clarifies: Password case-insensitivity comes from the game client's login protocol and is outside the team's control.

[Jamey (staff), 2024-02-06](https://forum.turtlecraft.gg/viewtopic.php?p=87095#p87095) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Urgent Need for Enhanced Account Security"

#### 2024-03-12 — Addon support

> We do not support this addon and do not maintain it. Please try to ask your question to the author of the addon ... All addons that are tested on our server you can find here

Clarifies: Third-party addons are not maintained or supported by staff; a list of addons tested on the server is published separately.

[Pepesmite (staff), 2024-03-12](https://forum.turtlecraft.gg/viewtopic.php?p=89993#p89993) · kind: `policy` · era: **pre-1.18.1** · topic: "[Request]Addon fix - VanillaGuide"

#### 2024-07-03 — Turtle WoW 2.0

> we started our collaboration with the second development team known as Council of Tirisfal. Today, we're excited to present the first look at our special development: Turtle WoW 2.0 — the Vanilla WoW client fully replicated in Unreal Engine 5.

Clarifies: Turtle WoW 2.0 announced: the vanilla client replicated in Unreal Engine 5 by a second team, Council of Tirisfal, worked on for about eighteen months and built for the Turtle core with custom content supported out of the box.

[Torta (staff), 2024-07-03](https://forum.turtlecraft.gg/viewtopic.php?p=98451#p98451) · kind: `roadmap` · era: **pre-1.18.1** · topic: "Turtle WoW 2.0 — Powered by Unreal Engine 5"

Superseded by: [Torta (staff), 2025-12-19](https://forum.turtlecraft.gg/viewtopic.php?p=163158#p163158) — the Unreal Engine 5 client was permanently discontinued on 19 December 2025.

#### 2024-07-04 — Turtle WoW 2.0

> Does this mean Turtle is going past vanilla+ into newer expansions? No, we'll be staying on Mysteries of Azeroth! ... There will be a transitional period where you can play with both the old and new clients. Eventually, the new client will become necessary.

Clarifies: 2.0 FAQ: Legacy Mode targeted at 99.9% of current players, no move past Mysteries of Azeroth, a transitional period with both clients before the old one is retired, and post-release accessibility work including text-to-speech and non-colour indicators.

[Akalix (staff), 2024-07-04](https://forum.turtlecraft.gg/viewtopic.php?p=98501#p98501) · kind: `intent` · era: **pre-1.18.1** · topic: "Turtle WoW 2.0 — Powered by Unreal Engine 5"

#### 2024-07-21 — character customization

> In the Labor & Legacy patch, we have added additional darker skin color tones for Dwarves, High Elves, Gnomes and even Night Elves. The original version had less. It went mostly unnoticed because we tried our best to match the original style.

Clarifies: Labor & Legacy added extra darker skin tones for Dwarves, High Elves, Gnomes and Night Elves, styled to match the original art.

[Torta (staff), 2024-07-21](https://forum.turtlecraft.gg/viewtopic.php?p=100028#p100028) · kind: `intent` · era: **pre-1.18.1** · topic: "P.O.C."

#### 2024-07-21 — Character skin tones

> The new skin tones are within the acceptable range of what orcs can have — yeah, sure, and the same goes for any other race. That's the approach.

Clarifies: New skin tones were added for Dwarves, High Elves, Gnomes and Night Elves in Labor & Legacy and kept within each race's plausible range rather than cross-applied between races.

[Torta (staff), 2024-07-21](https://forum.turtlecraft.gg/viewtopic.php?p=100052#p100052) · kind: `intent` · era: **pre-1.18.1** · topic: "P.O.C."

#### 2024-11-02 — HD patch incompatibility

> The incompatibility in the HD Patch is in Patch-A and Patch-Z. The problem stems from the Spell Effects. Other parts are not heavily problematic.

Clarifies: The community HD patch's incompatibility with the official client is localised to Patch-A and Patch-Z spell effects.

[Akalix (staff), 2024-11-02](https://forum.turtlecraft.gg/viewtopic.php?p=105872#p105872) · kind: `bug-confirmed` · era: **pre-1.18.1** · topic: "[Development Halted] Turtle HD Project"

#### 2024-11-15 — Turtle WoW 2.0

> Turtle WoW 2.0 is a client engine migration, not a content patch.

Clarifies: Turtle WoW 2.0 is a client engine migration rather than a content patch.

[Akalix (staff), 2024-11-15](https://forum.turtlecraft.gg/viewtopic.php?p=108062#p108062) · kind: `roadmap` · era: **pre-1.18.1** · topic: "Any talent calculators available for the upcoming 2.0 patch?"

#### 2024-11-20 — Launcher

> Automated WDB clearing ... Addon Management (One-button updates!) ... Default support for VanillaFixes, Nampower, and DXVK.

Clarifies: Official launcher ships with automated WDB clearing, addon management, and default support for VanillaFixes, Nampower and DXVK.

[Torta (staff), 2024-11-20](https://forum.turtlecraft.gg/viewtopic.php?p=108794#p108794) · kind: `intent` · era: **pre-1.18.1** · topic: "Turtle WoW Launcher"

#### 2025-03-11 — Achievements

> Achievements are planned for the 2.0 client.

Clarifies: Achievements were planned for the 2.0 client.

[Akalix (staff), 2025-03-11](https://forum.turtlecraft.gg/viewtopic.php?p=122250#p122250) · kind: `roadmap` · era: **pre-1.18.1** · topic: "Achievements like WotLK"

#### 2025-03-28 — Platform support

> We do not officially support running the game client on Linux or Mac.

Clarifies: Linux and Mac are not officially supported; help comes only from guides and Discord channels.

[Pepesmite (staff), 2025-03-28](https://forum.turtlecraft.gg/viewtopic.php?p=124169#p124169) · kind: `policy` · era: **pre-1.18.1** · topic: "Problem with Linux installer"

#### 2025-05-04 — Barbershop

> Last time they were in, they kept crashing the realms. Once the issue is fixed, we'll bring them back

Clarifies: Barbershops were disabled because they crashed the realms; return planned once fixed.

[Sleeptime (staff), 2025-05-04](https://forum.turtlecraft.gg/viewtopic.php?p=129547#p129547) · kind: `bug-confirmed` · era: **pre-1.18.1** · topic: "Bring barbershop back"

#### 2025-05-20 — Naked character models

> It was never intended to have "naked" character models, it's just a byproduct of the skins coming from NPCs which never had undergarments modeled as they'd always have on armor.

Clarifies: 'Naked' custom character skins are an unintended byproduct of NPC-derived skins that never had undergarments modelled; a fix needs a client patch.

[Akalix (staff), 2025-05-20](https://forum.turtlecraft.gg/viewtopic.php?p=132217#p132217) · kind: `bug-confirmed` · era: **pre-1.18.1** · topic: "2025 — May 21"

#### 2025-06-05 — Error #124

> Error #124 can occur due to several reasons, including: 1. Having HD mod installed 2. Using Super WoW 3. Having Vanilla Fixes or Vanilla Tweaks installed 4. Running addons that cause memory leaks

Clarifies: Known causes of client error #124: the HD mod, SuperWoW, VanillaFixes/VanillaTweaks, memory-leaking addons, excessive launcher tweak values and weak integrated graphics; crash logs are not analysed by staff.

[Pepesmite (staff), 2025-06-05](https://forum.turtlecraft.gg/viewtopic.php?p=134373#p134373) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Memory Invalid Block"

#### 2025-07-01 — Turtle WoW 2.0

> our current realms support up to 11k players each without any lag. We did have a SEA realms hitting 13k players, but the world update load was too high ... While technically possible to enable flying mounts with real flying physics, it's not planned. It would change the game too much

Clarifies: 2.0 status update: Windows client aimed at December 2025, realms hold about 11k players without lag (SEA hit 13k before world update load forced queues), existing realms and characters unaffected because the change is client-side, and flying mounts explicitly not planned.

[Bowser (staff), 2025-07-01](https://forum.turtlecraft.gg/viewtopic.php?p=137695#p137695) · kind: `reasoning` · era: **pre-1.18.1** · topic: "Turtle WoW 2.0 & Unreal Azeroth — Technical Report"

#### 2025-11-04 — launcher

> The update through the launcher is required.

Clarifies: The small client patch delivered through the launcher is mandatory for cross-faction battlegrounds.

[Torta (staff), 2025-11-04](https://forum.turtlecraft.gg/viewtopic.php?p=158367#p158367) · kind: `policy` · era: **1.18.1-announced-pre-release** · topic: "2025 — November 5"

#### 2025-11-04 — Launcher requirement

> It delivers a minor fix for the Faction.dbc bug that could cause issues when participating in cross‑faction battlegrounds. The fix will also be included in the larger Nightmares of Ursol update, but because this patch is tiny and lightweight we expect players to obtain it via the launcher.

Clarifies: A launcher-delivered client patch (a Faction.dbc fix) is required to play cross-faction battlegrounds.

[Torta (staff), 2025-11-04](https://forum.turtlecraft.gg/viewtopic.php?p=158376#p158376) · kind: `policy` · era: **1.18.1-announced-pre-release** · topic: "2025 — November 5"

#### 2025-12-19 — Turtle WoW 2.0

> Effective today, our development agreement with Unreal Azeroth for the production of the Turtle WoW 2.0 client is permanently discontinued.

Clarifies: The Turtle WoW 2.0 Unreal Engine 5 client was permanently discontinued on 19 December 2025, ending the development agreement with Unreal Azeroth.

[Torta (staff), 2025-12-19](https://forum.turtlecraft.gg/viewtopic.php?p=163158#p163158) · kind: `roadmap` · era: **1.18.1-announced-pre-release** · topic: "Turtle WoW 2.0 — Discontinued"
