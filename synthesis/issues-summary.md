# Turtle WoW bug and issue list — summary and emulator test checklist

Companion to `structured/issues.yaml` (122 entries, `ISS-0001` … `ISS-0122`). Built only from material in
this repository: the extracted forum (`extracted/forum/**`, `structured/forum/posts/*.jsonl`), the 1.18.1
patch table (`structured/patches/1.18.1-changes.yaml`) and `synthesis/1.18.1-master-changelog.md`. Every
citation is an exact post URL copied from those files. Conventions: `synthesis/CONVENTIONS.md`. Dates UTC.

## Scope and method

- Forums surveyed: Help & Support (f3), General (f4), Suggestions (f14), Addons (f18), Raids (f28),
  Professions (f33), Hardcore (f37), the nine class forums (f40–f48), Patch Notes (f63) and PvP (f73) —
  19,784 topics in total.
- A topic entered the candidate pool when its title or opening post matched bug wording (bug, broken, not
  working, doesn't work, exploit, glitch, stuck, missing, can't …): 2,731 candidate topics, 308 of them
  started on or after 2025-10-01. Staff posts were scanned separately: 4,127 staff posts, 501 of them
  containing status wording (fixed, hotfix, as intended, known issue, bug tracker).
- **Excluded, but counted as the task asks:** 884 account, login, password, donation, character-restore and
  ban-appeal topics (f3 719, f4 60, f14 101, f18 3, f37 1). These are support tickets, not game bugs.
- Authority is marked on every report. **Staff** = rank "Turtle WoW Team" (Torta, Jamey, Pepesmite,
  Sleeptime, Reynolds, Akalix, Dragunovi, Shadowsong, Hyundef). Everything else is **player**.
- `patch_reported` is derived from `structured/patches/timeline.yaml`: 1.18.0 was live 2025-08-15 …
  2026-03-19, 1.18.1 from 2026-03-20.

### Status values

| status | meaning | count |
|---|---|---|
| `open` | reported, no staff answer and no fix found in the sources | 73 |
| `confirmed` | a staff post acknowledges the bug (investigating / QA aware / forwarded) | 4 |
| `fixed` | a staff changelog or hotfix line states it was fixed | 12 |
| `intended` | staff (or, where noted, player consensus) say the behaviour is deliberate | 8 |
| `unclear` | contested between players, or the only report is thin or self-resolved | 25 |

A large `open` share is expected: staff answer almost every forum bug report with a redirect to
<https://turtlecraft.gg/bug-tracker>, and the tracker itself is **not** part of this repository.

## Counts by system

| system | open | confirmed | fixed | intended | unclear | total |
|---|---|---|---|---|---|---|
| classes | 18 | 0 | 3 | 3 | 8 | 32 |
| items | 10 | 1 | 1 | 2 | 3 | 17 |
| pvp | 11 | 0 | 1 | 0 | 1 | 13 |
| world | 6 | 1 | 4 | 0 | 2 | 13 |
| ui-client | 8 | 1 | 0 | 1 | 2 | 12 |
| professions | 9 | 0 | 1 | 0 | 1 | 11 |
| quests | 5 | 0 | 0 | 1 | 3 | 9 |
| raids | 4 | 0 | 0 | 0 | 2 | 6 |
| economy | 1 | 1 | 0 | 0 | 2 | 4 |
| server | 0 | 0 | 2 | 1 | 0 | 3 |
| dungeons | 1 | 0 | 0 | 0 | 0 | 1 |
| hardcore | 0 | 0 | 0 | 0 | 1 | 1 |
| **total** | **73** | **4** | **12** | **8** | **25** | **122** |

By severity: minor 56, major 43, blocker 8, cosmetic 8, exploit 4, crash 3.
By era: pre-1.18.1 3, 1.18.1-announced-pre-release 68, post-1.18.1 51.
By affected area (entries may count more than once): raid 28, client 24, pvp 24, profession 17, ui 16,
leveling 15, economy 12, quest 10, hardcore 7, dungeon 5; by class: hunter 10, warlock 7, shaman 6, druid 5,
priest 5, paladin 4, rogue 4, warrior 3, mage 2.

### Where the class issues sit

| class | entries | headline items |
|---|---|---|
| hunter | 10 | Improved Primal Aspects heal missing, cast bars absent, Volley preview, FD/trap macros |
| warlock | 7 | pet pathing and water, T2.5 doomguards, grimoire ranks, Improved Stones |
| shaman | 6 | Earthquake hit count, Earthen Bulwark, Lightning Strike relog, mana totem |
| druid | 5 | Glyph of the Moon model, Moonkin bar icons, DoT ticks not proccing items |
| priest | 5 | Shadow Weaving from Mana Burn/Pain Spike, Shadowguard through walls, Levitate BG crash |
| paladin | 4 | Holy Strike on miss/parry, Holy Strike heal targeting, Ironclad, self-flash visual |
| rogue | 4 | stealth detection, T3.5 proc rate, chest lock state, pickpocket lockboxes |
| warrior | 3 | One-Handed Weapon Specialization, Intercept on Ragnaros, T2.5 swap NPC |
| mage | 2 | T3.5 3-piece rewind bonus, vampirism gear needing a re-equip |

## Prioritised test list for the local server (top 50)

Ordering: (1) staff-confirmed or staff-hotfixed and touching core gameplay, (2) widely reported by several
independent players, (3) single reports worth a cheap check. "Verify" means: reproduce the step on the
emulator and record whether the emulator behaves like the last documented Turtle state.

### Tier 1 — staff-confirmed or staff-hotfixed, core gameplay (1–19)

| # | id | severity | test step |
|---|---|---|---|
| 1 | ISS-0012 | blocker | Zone in and out of Balor Island repeatedly; verify no player is relocated into Blackrock lava. Staff confirmed the teleport bug was under investigation ([Pepesmite (staff), 2025-12-12](https://forum.turtlecraft.gg/viewtopic.php?p=162596#p162596)). |
| 2 | ISS-0108 | crash | Fuzz item and spell casts (especially newly added ones) against a running world server; verify no single item/spell can take the realm down, as happened on Nordanaar ([Sleeptime (staff), 2026-04-07](https://forum.turtlecraft.gg/viewtopic.php?p=174255#p174255)). |
| 3 | ISS-0105 | crash | Log a character into the new zones (Balor Island) with a localisation pack that lacks the new strings; verify the client does not crash on login. Staff-supplied cause and workaround. |
| 4 | ISS-0069 | major | List random-suffix items on the auction house; verify the browse list shows the suffix ("of the Bear"), not only the base name. Staff confirmed devs were working on it ([Pepesmite (staff), 2025-08-20](https://forum.turtlecraft.gg/viewtopic.php?p=147250#p147250)). |
| 5 | ISS-0026 | major | Cast Holy Strike and Crusader into a dodge, a parry and a miss; verify the heal/benefit still applies (hotfixed 2026-03-21, still reported broken for two days after). |
| 6 | ISS-0027 | minor | Use Holy Strike in a raid with mixed health; verify which targets receive the heal and how many. No staff post defines the intended selection. |
| 7 | ISS-0042 | major | Melee with Flametongue/Frostbrand imbues and Elemental Weapons; verify Flurry procs from imbue crits, is consumed on attack, and is not overwritten by Windfury. |
| 8 | ISS-0040 | major | Attack using only Stormstrike and Lightning Strike; verify Earthen Bulwark stacks build up (hotfix claims melee abilities count; players still reported failure on 2026-04-07). |
| 9 | ISS-0041 | major | Learn Lightning Strike, relog, reopen the talent tree; verify the talent is still there and trainable at every rank. |
| 10 | ISS-0064 | cosmetic | Apply the Facetted Crystal Scope; verify the enchant text appears on the weapon tooltip (hotfixed twice, still reported 2026-04-01). |
| 11 | ISS-0008 | major | Farm Cannon Master Willey; verify Schematic: Enchanted Thorium Shells is in the loot table (fix announced 2026-04-07, players still report no drops). |
| 12 | ISS-0030 | cosmetic | Apply Glyph of the Moon / Glyph of Stars on an Alliance night elf druid; verify the moonkin model and texture match the race and gender. |
| 13 | ISS-0017 | major | Take the Talrendis Point (Azshara) flight path; verify the player can dismount at the destination. |
| 14 | ISS-0018 | major | Use every Moonglade druid flight master; verify all routes work. |
| 15 | ISS-0019 | major | Open Insom'ni's Chest without the associated quest; verify Leni, the Silent Blade does not spawn. |
| 16 | ISS-0014 | minor | Fish in Moonhoof Village and Moonwhisper Coast; verify catches are valid and there are no "dead" catches. |
| 17 | ISS-0016 | minor | Log out in the Moro'gai, Moonhoof Village and Earthen Ring inns; verify rested XP accrues. |
| 18 | ISS-0065 | minor | Enchant every cloak in the PvP and new-zone item sets; verify none is rejected as the wrong armour class. |
| 19 | ISS-0059 | minor | Apply each cosmetic tier of Mark of Nature; verify tier III does not render as tier II. Staff said the store displays were mixed up. |

### Tier 2 — widely reported by several players (20–39)

| # | id | severity | test step |
|---|---|---|---|
| 20 | ISS-0084 | blocker | Hold Rank 14 across a weekly honor flush; verify the rank is not reset to 0 and the title is kept (the documented design says decay cannot drop a rank). |
| 21 | ISS-0085 | exploit | Farm non-honorable kills on a fresh character; verify no honor is granted and no rank jump occurs — watch for a signed/unsigned overflow near 4.29e9. |
| 22 | ISS-0086 | major | Play battlegrounds for a full week; verify the rank bar moves forward, and that the weekly decay matches the documented percentage. |
| 23 | ISS-0088 | exploit | Walk the Warsong Gulch tunnel roof, graveyard and wall seams; verify collision blocks the known jump spots or accept them as Turtle behaviour. |
| 24 | ISS-0051 | major | Stack Master of Deception and +stealth items and walk past lower-level mobs; verify detection range scales with the stealth value; test Vanish while being meleed. |
| 25 | ISS-0072 | major | Level the reworked Survival profession past 15/75 using torches, then cut wood; verify the recipe/skill gates and the grey/orange colouring of torches. |
| 26 | ISS-0049 | major | Mount up with an enslaved or greater demon and ride away, then swim; verify the pet follows without a delay and can cross water. |
| 27 | ISS-0080 | minor | Fish at different frame rates; verify the bobber animation plays and the reaction window is the intended length. |
| 28 | ISS-0025 | major | Compare warrior ability damage with 0/5 and 5/5 One-Handed Weapon Specialization; verify whether abilities or only auto attacks are boosted, and match the tooltip. |
| 29 | ISS-0039 | major | Cast Earthquake with Elemental Fury; verify the number of hits and that every hit uses the crit multiplier. |
| 30 | ISS-0022 | blocker | Fight Nefarian and take a fear at the room edge; verify players are not pushed outside the map and can be resurrected or summoned back. |
| 31 | ISS-0021 | major | Fight Firemaw; verify void zones spawn on the raid's plane, in line of sight and inside the room. |
| 32 | ISS-0023 | blocker | Use Intercept on Ragnaros; verify the warrior is not moved under the floor and, if ported out, can re-enter the instance. |
| 33 | ISS-0020 | major | Take a pet through the Onyxia's Lair tunnel after the first boss; verify the pet stays above the floor. |
| 34 | ISS-0093 | crash | Cast Levitate inside Arathi Basin and other battlegrounds; verify no client disconnect or crash (and no deserter penalty). |
| 35 | ISS-0034 | minor | Cast Aimed Shot, Multi-Shot, Steady Shot and Volley on a default UI; verify a cast bar appears as the 1.18.1 notes promise. |
| 36 | ISS-0036 | major | Fire a Feign Death → trap macro while in PvP combat; verify the trap lands without an extra delay. |
| 37 | ISS-0097 | minor | Use click-to-move and Follow with an uncapped frame rate; verify pathing is frame-rate independent. |
| 38 | ISS-0101 | major | Eat a Savory Deviate Delight / drink a Noggenfogger Elixir; verify model scale and, crucially, that creature aggro radius does not change with it. |
| 39 | ISS-0013 | blocker | Walk into the new dwarf village near Gnomeregan; verify terrain and WMOs load and the player cannot fall through the world. |

### Tier 3 — single or thin reports worth a cheap check (40–50)

| # | id | severity | test step |
|---|---|---|---|
| 40 | ISS-0007 | blocker | Trigger The Missing Diplomat ambush; verify every attacker is hostile and attackable (a friendly-flagged attacker killed a hardcore character). |
| 41 | ISS-0010 | major | Pull an out-of-range creature into combat; verify the combat log names the real attacker and that no invisible creature can engage the player. |
| 42 | ISS-0092 | major | End an Alterac Valley match through the low-population timer with the Horde ahead; verify the winner follows the score. |
| 43 | ISS-0090 | major | Backfill a running WSG/AB with single queuers; verify players are placed on the team that is short, not always Alliance. |
| 44 | ISS-0091 | minor | Queue a group for two battlegrounds, finish one, leave at staggered times; verify the whole group keeps its queue slot. |
| 45 | ISS-0071 | minor | Unlock a chest in a party; verify all members see it unlocked and can roll. |
| 46 | ISS-0060, ISS-0061, ISS-0062 | major | Walk every tier-set exchange and token turn-in NPC (priest T2.5 shoulders, Feid Rota warrior T2.5, Eligor Dawnbringer T3) with the right items; verify each offers the exchange. |
| 47 | ISS-0044 | minor | Cast Mana Burn and Pain Spike; verify Shadow Weaving stacks are applied and refreshed. |
| 48 | ISS-0053, ISS-0048, ISS-0052 | major | Test the set bonuses that players report as broken: mage T3.5 3-piece AoE rewind (scaling and multi-target), warlock T2.5 doomguard attacking, rogue T3.5 5-piece proc rate over 1,000 swings. |
| 49 | ISS-0077, ISS-0078 | major | Plant Gardening planters, restart the world server, and log back in; verify planters and seeds survive, and that several planters in one spot all stay interactable. |
| 50 | ISS-0081, ISS-0082 | major | Send mail cross-faction and between four own characters in quick succession; verify delivery and that the unique-recipient cap message is not raised for one's own alts. |

## Issues staff marked "intended" — reproduce these, do not "fix" them

An emulator that aims to behave like Turtle WoW 1.18.1 must keep these behaviours.

| id | behaviour | authority |
|---|---|---|
| ISS-0111 | The Shaman Tier 1 set bonus interaction with Chain Heal that players call broken is deliberate: "That interaction is intended." | [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166084#p166084) |
| ISS-0112 | The current Alt'lympics mount is not usable at level 1, unlike the previous gorilla mount: "This isn't a bug." | [Torta (staff), 2025-11-19](https://forum.turtlecraft.gg/viewtopic.php?p=160068#p160068) |
| ISS-0113 | Priests (night elf, bow) get Shoot Bow only from level 20, even though the weapon skill can be learned earlier. | [Pepesmite (staff), 2026-01-21](https://forum.turtlecraft.gg/viewtopic.php?p=165876#p165876) |
| ISS-0117 | A quest giver cannot be talked to while the player has the At War flag set for his faction; clearing the flag restores the dialog. | [Sleeptime (staff), 2026-01-11](https://forum.turtlecraft.gg/viewtopic.php?p=164921#p164921) |
| ISS-0116 | Talents and spells that appear missing or "DEPRECATED" come from custom files in the client `/data` folder, not from the server. | [Pepesmite (staff), 2026-03-22](https://forum.turtlecraft.gg/viewtopic.php?p=171762#p171762) |
| ISS-0109 | The in-game clock running at double speed is, per the reporter, an intentional change (his tracker report was closed with that reason); only the per-player divergence was called a bug. **Player-relayed, no staff forum post.** | [Pizzayo (player), 2025-12-19](https://forum.turtlecraft.gg/viewtopic.php?p=163303#p163303) |
| ISS-0114 | Thunderfury's chain effect applies its debuff to nearby targets but damages only the primary target. **Player consensus only**, no staff post. | [Atreidon (player), 2025-10-24](https://forum.turtlecraft.gg/viewtopic.php?p=156891#p156891) |
| ISS-0115 | The flat power step of Renew rank 5 and Flash Heal rank 3 is a deliberate Class Changes 2 design, not a typo. **Player-sourced.** | [Elesion (player), 2025-12-27](https://forum.turtlecraft.gg/viewtopic.php?p=163861#p163861) |

Two more behaviours are worth reproducing even though they are not phrased as "intended":

- The mail system enforces a cap on unique recipients per period (ISS-0082); the confusing part is the
  message, not the rule — [Ironbob (player), 2025-11-12](https://forum.turtlecraft.gg/viewtopic.php?p=159364#p159364).
- Honor is capped at 20,000 per week under the new PvP system, which players first read as a bug at 65k
  total honor — [Grizb37 (player), 2026-03-23](https://forum.turtlecraft.gg/viewtopic.php?p=171939#p171939).

## Fixed in 1.18.1 (regression tests)

Twelve entries are staff-fixed: ISS-0014, ISS-0016, ISS-0017, ISS-0018, ISS-0019 (world), ISS-0026,
ISS-0030, ISS-0042 (classes), ISS-0065 (items), ISS-0108, ISS-0110 (server), ISS-0119 (pvp). Four of them
were reported again by players **after** the staff fix line — ISS-0026, ISS-0030, ISS-0064 and ISS-0008 —
which makes them the most valuable regression tests in the list: the fix either did not ship, did not cover
every case, or needed a realm restart to take effect
([Ellifta (player), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172112#p172112) reports the
Holy Strike case working only after a restart).

## Gaps

1. **The official bug tracker is not in this repository.** Staff answer nearly every forum bug report with
   "please use <https://turtlecraft.gg/bug-tracker>"
   ([Pepesmite (staff), 2025-11-29](https://forum.turtlecraft.gg/viewtopic.php?p=161044#p161044)). Players
   quote tracker ids (5638, 8949, 10302, 16592, 17804, 18234, 18395, 18459, 18473, 18568, 19887, 19982,
   21117, 21725, 21743, 21878) whose content is **not found in sources**. The real bug list for this server
   is therefore larger than 122 entries, and the resolution state of most `open` entries is unknown.
2. **Status is usually unknowable from the forum alone.** 73 of 122 entries have no staff answer at all.
   Absence of a fix line here does not prove the bug is live.
3. **No numbers for PvP dampening.** Staff never published the class/spec dampening values
   ([Jamey (staff), 2026-03-02](https://forum.turtlecraft.gg/viewtopic.php?p=169701#p169701) restates the
   feature only), so ISS-0095 (pets not dampened) cannot be checked against an intended value.
4. **Intended Holy Strike heal targeting is undocumented** (ISS-0027): the hotfix says "no longer heals more
   targets than intended" without stating the intended target count.
5. **The crashing item/spell on Nordanaar is never named** (ISS-0108), so the crash cannot be reproduced
   deliberately.
6. **Cross-faction mail** (ISS-0081): no staff source says whether it is supposed to work at all.
7. **Gardening persistence across restarts** (ISS-0077) is not specified anywhere in the sources.
8. **Client-side bugs cannot be separated cleanly from server bugs** in many reports (ISS-0097, ISS-0102,
   ISS-0106, ISS-0072). Staff routinely blame custom `/data` files, stale `patch-9.mpq` or addons; for an
   emulator these need retesting on a clean client before they are treated as server defects.
9. **Screenshot-only reports.** Several entries (ISS-0043 mana totem, ISS-0056 duplicate item display,
   ISS-0083 mail money) rest on external images that are not part of the extraction; the affected entity
   names are therefore probable, not certain.
10. **Hardcore deaths caused by bugs are unrecoverable and under-reported.** Staff policy is no restoration
    ([Sleeptime (staff), 2026-03-22](https://forum.turtlecraft.gg/viewtopic.php?p=171706#p171706)), so
    affected players often stop posting; ISS-0096 is likely the tip of a larger set.
11. **Excluded on purpose:** 884 account/login/donation/ban topics, and pure balance complaints (class
    "nerf" threads) that no source frames as defects.

## Source index

- Entry data: `structured/issues.yaml`
- Patch and hotfix lines: `structured/patches/1.18.1-changes.yaml`, `synthesis/1.18.1-master-changelog.md`
- Forum posts: `structured/forum/posts/f*.jsonl` (post URLs), `extracted/forum/**` (readable threads)
- Patch dates: `structured/patches/timeline.yaml`, `structured/forum/timeline.json`
