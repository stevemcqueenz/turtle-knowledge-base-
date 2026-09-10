# Popular addons: what players use, for what, and how they talk about it

Sources: `structured/forum/posts/*.jsonl` (161,896 posts), keyword/substring pass (see Method). Addon talk concentrates in **AddOns (f18)** for install/support questions and in **Suggestions (f14)** for "please add a built-in equivalent of X" requests; class forums (f40–f48) carry addon mentions mostly as rotation/macro tooling asides.

## Method and caveat

Counts below are a **name/substring match per post** (a post counts once per addon even if the addon is mentioned many times in it), with extra disambiguation logic for names that collide with ordinary English or in-game words (e.g. "Grid", "Atlas", "Cartographer" is also a Turtle-WoW-specific exploration *title*, "Necrosis" is also a warlock DoT-adjacent word, "DBM" collides with usernames like "Player-0322", "Opie" collides with "copies"/"copied") — those required the substring to co-occur with an addon-context word (addon/UI/nameplate/threat/frame/download/github/install/etc.) within ~45 characters, which trades a little recall for much better precision. This is a keyword census, not a manually verified count of unique addon installs — treat the numbers as **frequency evidence for relative popularity**, not exact totals.

## Top 30 addons by mentions

| # | Addon | Mentions | What for |
|--:|---|--:|---|
| 1 | pfUI | 598 | Full UI overhaul (unit frames, nameplates, action bars, tooltips) — the single most-mentioned real addon in the archive |
| 2 | ShaguTweaks / ShaguPlates | 441 | Turtle-community UI/QoL tweak suite from shagu.org; nameplates, tweaks, addon manager ecosystem |
| 3 | pfQuest | 351 | Quest helper/tracker (database-driven, pfUI-family) |
| 4 | Auctioneer | 168 | Auction-house scanning/pricing addon ("the auctioneer mod") |
| 5 | AUX | 124 | Lightweight auction-house addon, an alternative to Auctioneer |
| 6 | Nampower | 113 | Client-side `.dll` performance/QoL patch (not a Lua addon) — macro/casting improvements |
| 7 | AtlasLoot | 105 | Loot-table/dungeon-drop browser |
| 8 | Healbot | 104 | Click-heal raid-frame addon |
| 9 | Gatherer | 95 | Herb/ore node tracking on the map/minimap |
| 10 | SuperMacro | 91 | Extended macro scripting beyond the Blizzard macro UI |
| 11 | Bagshui | 84 | Bag/inventory management and sorting |
| 12 | Questie | 76 | Quest helper/tracker (the best-known one from retail-adjacent Classic) |
| 13 | Threat meter (generic/KLHThreatMeter/KTM) | 59 | Aggro/threat tracking |
| 14 | TurtleRP | 59 | Roleplay profile/flagging addon |
| 15 | Clique | 58 | Click-casting framework (bind spells to clicks on frames) |
| 16 | Atlas | 58 | Dungeon/instance map and lore browser (base addon AtlasLoot builds on) |
| 17 | GW2 UI / Dragonflight UI | 56 | Modern-look full UI replacement ports |
| 18 | Decursive | 51 | One-click mass decurse/dispel addon |
| 19 | Bagnon | 49 | Combined single-window bag addon |
| 20 | Power Auras (Classic/"MPOWA") | 44 | Custom buff/proc visual alert addon |
| 21 | BigWigs | 42 | Raid boss-ability warning addon (boss mod) |
| 22 | MikScrollingBattleText (MSBT) | 40 | Scrolling combat text, incl. showing healing done |
| 23 | MoveAnything | 39 | Repositions any UI frame freely |
| 24 | GitAddonsManager | 38 | GitHub-based addon installer/updater, Turtle-community favorite |
| 25 | HealersMate | 38 | New (2024) healer raid-frame addon, positioned as a Healbot/VuhDo alternative (later renamed "Puppeteer") |
| 26 | MyRolePlay | 37 | Roleplay character-profile addon |
| 27 | Bartender | 36 | Action-bar replacement/customization |
| 28 | ItemRack | 34 | Gear-set swapping addon |
| 29 | WeakAuras | 34 | Custom condition-based visual/audio alerts |
| 30 | Luna Unit Frames | 34 | Unit-frame replacement addon |

Just outside the top 30: Necrosis (warlock soul-shard/utility addon, 30), ElvUI (26), Bongos (25), Carapace ("A TurtleWoW Addon Manager," 1 clean mention after removing false positives from the plain English word "carapace" — a good example of why the disambiguation step in Method matters), Recount/Skada/Details! (DPS/damage meters — see note below).

**DPS-meter note:** dedicated DPS-parsing addons (Recount 23, Details! 12, Skada not separately confirmed above noise) are mentioned far less than boss-mod/threat tooling in this archive. That's a real signal, not a search artifact — vanilla-style raiding here is discussed far more in terms of threat and boss mechanics than personal DPS ranking.

## Built-in client features (not addons, but discussed like them)

- **Slow & Steady** (leveling-challenge toggle) — 771 mentions, more than any single addon. See `leveling-and-progression.md` for the full mechanic and staff quotes.
- **LFT ("Looking For Turtle")** built-in dungeon-finder tool — 531 mentions. Also see `leveling-and-progression.md` for etiquette/bug complaints; it is talked about exactly like an addon would be ("filter LFT out of world chat," "LFT is bugged").

## Categories and real usage

### Quest helpers
- **Questie** is the reference point players measure other tools against, even when discussing built-in features: "Ideally something like the quests by zone from questie" — [Player, 2023-05-10, f14](https://forum.turtlecraft.gg/viewtopic.php?p=45312#p45312).
- **pfQuest** breaks on server updates, a recurring support pattern: "pfQuests reseted my completed quests after the 1.16.5 update and I lost track of the remaining ones" — [Player, 2023-06-03, f14](https://forum.turtlecraft.gg/viewtopic.php?p=32498#p32498).
- **Some players deliberately avoid quest-helper addons** for immersion — see the "conflicts/complaints" section below and the whole "Minimal Addons" thread theme: "I was thinking about playing without Addons like Questie so that you're forced to read quests, explore the world and interact with others. Anyone else thinking of doing something similar?" — [Player-0319 (player), 2018-09-20, thread "Minimal Addons"](https://forum.turtlecraft.gg/viewtopic.php?p=162#p162).
- **GuidelimeVanilla** (a full leveling-route addon, actively being rewritten for Turtle as of 2026): "I'm actually totally rewriting Guidelime addon for TurtleWow. I've already worked a lot on it, but there is still a lot of work to do (and a lot of bugs to fix..). I need some people to test it" — [Player-0321 (player, addon author), 2026-02-03](https://forum.turtlecraft.gg/viewtopic.php?p=167323#p167323).

### Threat meters
Real usage is small relative to boss mods/raid frames (59 mentions across all generic-threat-meter phrasing and KLHThreatMeter/KTM by name). A representative example, showing threat meters bundled with UI addons as a set: "I cannot get Advanced Trade to work, among a few others. Ace2, KLH Threat meter, etc. Might be my pfUI screwing with them." — [Player, 2019-08-15, f14](https://forum.turtlecraft.gg/viewtopic.php?p=3731#p3731). No explicit "don't pull threat" etiquette callouts using the phrase "threat meter" were found in this archive — see Gaps.

### Raid frames / healing addons
- **Healbot** is the default reference for click-healing; a newer competitor pitches itself directly against it: "I'm working on an addon called HealersMate. I'm trying to make it into a proper alternative to VuhDo or Healbot." — [Player-0324 (player, addon author), 2024-11-04](https://forum.turtlecraft.gg/viewtopic.php?p=106416#p106416) (later renamed to "Puppeteer").
- **Clique + Decursive** are named together as a minimal healer kit by players who explicitly avoid addon bloat: "always try to use as less addons as possible. Shagutweaks, Outfitter, Bigwigs and Decursive" — [Player, 2025-01-24, f14](https://forum.turtlecraft.gg/viewtopic.php?p=117808#p117808).
- **A missing built-in feature (healing numbers over player heads) drives addon recommendations**, showing the addon-vs-built-in tension directly: "REALLY TURTLE DEVS???!!? REALLY??!! ...i cant believe you did not fix/add thing that is so annoying about vanilla-is that you cant see healing when you heal someone other than yourself. Dont tell me there are addons that can show you healing, i know about it..." — [Player-0329 (player), 2022-12-13](https://forum.turtlecraft.gg/viewtopic.php?p=30604#p30604); answered: "you can use mike scrolling battle text to show your heals on, jsut not aboe player heads" — [Player-0221 (player), 2022-08-27](https://forum.turtlecraft.gg/viewtopic.php?p=23710#p23710).

### Auction tools
- **Auctioneer** is treated as "the" AH mod, referenced by lowercase generic name: "messing up the pricing on the auctioneer mod by putting the prices so high no one will buy the stuff" — [Player-0323 (player), 2019-10-26](https://forum.turtlecraft.gg/viewtopic.php?p=4315#p4315).
- **AUX** is the lighter alternative, recommended tersely: "Just use aux for those features it has what you ask for" — [Player-0221 (player), 2022-08-26](https://forum.turtlecraft.gg/viewtopic.php?p=23619#p23619) — but has known reliability complaints: "AUX has a bit of a problem: Today I've found some cheap auctions, clicked on them, and... AUX was like 'searching for auction' and by the time it finished, all were bought up.... The delay is horrible." — [Player-0333 (player), 2025-11-22](https://forum.turtlecraft.gg/viewtopic.php?p=160343#p160343).
- **AH tax/deposit complaints tie directly to addon behavior** — see `economy.md` for the gold-sink framing of the same discussions.

### UI packs
- **pfUI** and **ShaguTweaks** dominate; both are treated as base layers other addons must be compatible with ("Might be my pfUI screwing with them"). ShaguTweaks in particular gets installation advice phrased as a direct fix for a specific annoyance: "Install shagutweaks, handles all autodismounting for custom turtle mounts." — [Player-0285 (player), 2023-03-27](https://forum.turtlecraft.gg/viewtopic.php?p=39345#p39345).
- **GW2 UI / Dragonflight UI** ports are popular full-UI replacements for players who want a modern look on the 1.12 client.

### Turtle-specific addons and tools
- **GitAddonsManager** is the community-recommended install/update method, offered directly in response to a support question about an older tool: "Hello, is there a good addon for addons management? I am using Master Control Program at this moment and it works very well, but I am wondering if there is a GitHub addon for that." — [Player-0318 (player), quoted 2024-01-17](https://forum.turtlecraft.gg/viewtopic.php?p=85019#p85019); answered with a direct link to GitAddonsManager — [Player-0018 (player), same thread](https://forum.turtlecraft.gg/viewtopic.php?p=85019#p85019).
- **Nampower** is a client-side `.dll`, not a Lua addon, and gets used for macro tricks specific to Turtle's class kit: "Use nampower to make a macro that can place all 4 totems at same time with 1 button press" — [Player-0258 (player), 2024-11-21](https://forum.turtlecraft.gg/viewtopic.php?p=109231#p109231); a shaman-focused player/dev pushes back on the premise rather than the tool: "It's a valid idea for pve and I'll look into it. Still I rarely plant the exact same set, especially not in pvp." — [Player-0325 (player), same thread](https://forum.turtlecraft.gg/viewtopic.php?p=109279#p109279).
- **Bagshui** is Turtle-community-adjacent (actively developed on GitHub, referenced by URL in-thread): "u mean this? https://github.com/veechs/Bagshui" — [Player-0332 (player), 2025-06-03](https://forum.turtlecraft.gg/viewtopic.php?p=134066#p134066).
- **TurtleRP / MyRolePlay** are the two competing RP-profile addons; see roleplay-culture context in `leveling-and-progression.md`'s tents section for the wider RP-addon ecosystem (FlagRSP, ImmersionRP also mentioned but below the top 30).

## "Install X" advice — the pattern

The overwhelming majority of addon mentions in f18 are this exact shape: someone describes a missing feature or asks "is there an addon for X," and another player answers with a bare imperative and the addon name, often without a link (assuming the asker will search):

- "Install shagutweaks, handles all autodismounting for custom turtle mounts." (see above)
- "Just use aux for those features it has what you ask for." (see above)
- "you can use mike scrolling battle text to show your heals on..." (see above)
- "u mean this? [github link]" (Bagshui example above) — link-only responses are also common once the addon name has already been said once in-thread.

## Addon-related conflicts and complaints

- **Cross-addon breakage attributed to a base UI layer:** "I cannot get Advanced Trade to work, among a few others. Ace2, KLH Threat meter, etc. Might be my pfUI screwing with them." — [Player, 2019-08-15](https://forum.turtlecraft.gg/viewtopic.php?p=3731#p3731).
- **Generic "addon conflict" as a crash explanation, self-diagnosed:** "First of all I know that on this server this is a feature and not a bug... today while I was raiding Nefarian, my game crashed due to an addon conflict or network..." — [Player-0326 (player), 2023-10-11](https://forum.turtlecraft.gg/viewtopic.php?p=70226#p70226).
- **Update breakage across two competing quest addons in the same patch (community pain point):** "Are these two addons updated with the new additions of the new patch or do we have to update them manually?" — [Player-0320 (player), thread "New patch AtlasLoot and PfQuest", 2023-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=68464#p68464) — both major database addons needing simultaneous fixes after a content patch is a recurring pattern any time Turtle ships new custom zones/quests, since these addons rely on community-maintained forks of upstream Vanilla addons rather than official support.
- **Minimalist/anti-addon sentiment exists and is articulate, not just contrarian** (see the Player-0319 quote above) — it drew both agreement, "Support! This is as important a question as xp rate. It is necessary to prohibit Questie." — [Player-0327 (player), 2018-09-22](https://forum.turtlecraft.gg/viewtopic.php?p=187#p187), and disagreement, "They don't effect your will to play authenticly. :) But they do make gameplay easier and by doing so you have more time to pay attention to the content and each other." — [Player-0337 (player), 2018-12-11](https://forum.turtlecraft.gg/viewtopic.php?p=1525#p1525), in the same thread.

## Patterns for bots

1. **Recommend by bare name, imperative mood, no fluff:** `Install [Addon]. [one-clause reason].` — matches the dominant real phrasing exactly (see "Install X advice" above).
2. **Bundle-list your own addon setup when asked, terse, comma-separated, no explanation per item:** `Shagutweaks, Outfitter, Bigwigs and Decursive` style — real players answer "what addons do you use" this way, not with a paragraph.
3. **Treat pfUI/ShaguTweaks as the base layer** when troubleshooting: if another addon misbehaves, a knowledgeable player's first guess is "might be my pfUI/ShaguTweaks screwing with them," not the addon itself.
4. **When a feature is missing, name the specific addon that covers it** rather than describing the feature abstractly — e.g. answer "can I see incoming heals" with "MSBT" or "HealBot," not "there might be an addon for that."
5. **Version-churn awareness:** after any patch, expect (and can mention) that AtlasLoot/pfQuest/quest-history addons may need a fresh community fork; this is a known, recurring pain point, not a one-off bug.
6. **Anti-addon roleplay is a legitimate, sourced player stance** — a bot can plausibly say "I play with minimal addons for the exploration/immersion" without it reading as out of character.

## What not to do (drawn from complaints in these sources)

- Don't assume Auctioneer/AUX are instant — both have reported reliability issues (Auctioneer's price-distortion side effects on guild-bank-style hoarding; AUX's "searching for auction" delay costing snipes).
- Don't assume an addon still works after a content patch without checking — pfQuest specifically is reported to reset completed-quest tracking after updates.
- Don't conflate Nampower (a client `.dll` performance patch) with a Lua addon in dialogue meant to sound informed — players who mention it know the distinction.
- Don't invent a "no addon-ban list" — no staff post banning or blanket-restricting specific addons was found in this archive (one player asked "Is iMorph bannable like on the live servers?" in 2022 and the thread has no reply on record) — treat addon legality as an open question, not settled either way, unless a specific staff statement is found.

## Gaps (not found in sources)

- No staff post enumerating banned or disallowed addons was found; one relevant question (iMorph model-changer, 2022) went unanswered in the archive.
- No post uses the literal phrase "threat meter etiquette" or a close equivalent ("don't pull threat," "watch your threat meter") tied explicitly to a named threat-meter addon — threat/aggro discussion in the archive is almost entirely about class/talent mechanics, not addon-mediated etiquette norms.
- Skada mentions could not be reliably disambiguated from noise at this pass's effort level and are not separately reported above; treat DPS-meter usage as under-measured, not absent.
