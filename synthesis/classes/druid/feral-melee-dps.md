# Druid — Feral melee DPS (Cat Form)

Playbook for Cat-form DPS on Turtle WoW. This spec has the most forum churn of any Druid role: Class Changes 2 (2024-10-12) tried to give cats a non-powershifting "bleed" playstyle, the community spent roughly six months (Oct 2024 – May 2025) disputing whether it out-performed the classic Wolfshead/Furor **powershifting** loop, and by mid-2025 the bleed/claw build had become the accepted single-target meta — with powershifting kept only as the fallback for bleed-immune targets. 1.18.1 added no direct Feral DPS buffs or reworks; the only 1.18.1 changes that touch Cat are the Maul/Savage Bite tank-threat nerf (irrelevant to DPS), two item hotfixes (Yoxtez +224 Feral Attack Power, Fang of Alichos usable in forms) and a Kara40 trinket nerf that specifically hurt cat itemization. Post-1.18.1, multiple posters call Cat "no longer the worst DPS spec — moonkin is" (i.e. still near the bottom).

## Overview

- **Role**: single-target melee DPS via combo points (Shred/Claw → Rip/Ferocious Bite), with a defining choice between two playstyles:
  1. **Powershifting**: exploit Furor (100% chance to gain energy on shapeshift) + a Wolfsheart/Wolfshead-enchanted helm to cancel-and-reshift into Cat Form mid-fight, refilling energy from mana and spamming Shred.
  2. **Bleed/Claw**: keep Rake (9s) and Rip (up to 18s) rolling, spend energy on Claw (buffed vs. Rake targets by Open Wounds), and recover energy passively from Ancient Brutality's bleed-tick energy return instead of shifting.
- **Strengths**: highest scaling ceiling of any Druid spec purely on weapon/AP itemization ("Feral relies on everything being a stat stick to scale to their forms" — [Gorlocktheglock (player), 2026-03-28](https://forum.turtlecraft.gg/viewtopic.php?p=172912#p172912)); good solo/open-world/leveling damage; strong utility (Leader of the Pack crit aura, interrupts via Feral Charge/Bash).
- **Weaknesses (consensus)**: uniquely bad interaction with **glancing blows** — cats have no way to raise weapon skill in form (capped at the 300 baseline), unlike Hunter pets, which have their own weapon skill — "Feral Druids are the only Melee DPS class unable to counter the glancing blow mechanic" — [Slade1994 (player), 2025-03-26](https://forum.turtlecraft.gg/viewtopic.php?p=123857#p123857); weak AoE (Swipe requires Bear Form, Hurricane is a caster spell cats don't itemize for); every raid-power revision so far has been contested as insufficient (see Community standing).
- **Content**: leveling (very strong, see `leveling.md`), dungeons, raids (contested viability — see below), open-world/solo farming (strong).
- **Community standing — pre-1.18.1**: **contested, trending toward "underpowered relative to effort required."** "Feral is competitive thanks to powershifting. If you try to DPS as a feral druid without it you will be seriously gimped" — [Zulnam (player), 2025-02-17](https://forum.turtlecraft.gg/viewtopic.php?p=120217#p120217), arguing the spec is propped up entirely by a mechanic (powershifting) the devs themselves call an "abomination" in player-vs-player forum arguments. By mid-2025 the same debate flipped to defending the *bleed* build's higher DPS while lamenting bleed immunity: "Current top-5 druid DPS on Patchwerk is all claw cats. Claw is clearly ahead of powershred" — [Noephix (player), 2025-04-24](https://forum.turtlecraft.gg/viewtopic.php?p=128297#p128297); "Right now Bleed is ALOT more DPS, around 200+ extra than powershifting shred. You only powershift on bleed immune or you gimp your DPS potential" — [Grizb37 (player), 2025-06-05](https://forum.turtlecraft.gg/viewtopic.php?p=134389#p134389).
- **Community standing — post-1.18.1**: "OK, in 1.18.1 feral is no longer the worst DPS spec - moonkin is. So the title goes from druids to druids" — [Noephix (player), 2026-03-28](https://forum.turtlecraft.gg/viewtopic.php?p=172923#p172923), i.e. still bottom-tier, just not dead last. Item-design frustration continued: "Cat sucks because item devs made a mistake, refused to acknowledge and doubled down on it... Kara40 cat gear [has] tons of dump stats (roughly over 50% of stat budget)... Cat needs to be lvl 62 to take all the mandatory DPS talents without a single flex point. Too bad lvl cap is 60" — [Noephix (player), 2026-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=173102#p173102).

## Talent build

No source decodes a full post-1.18.1 point list (only talents.turtlecraft.gg calculator links, same gap as every other Druid role and the paladin playbook). Named mandatory talents by build:

- **Both builds**: Omen of Clarity, Furor, Blood Frenzy + Primal Fury, Improved Shred (unconditional Shred buff after entering Cat Form as of the 1.18.0 rework per `synthesis/turtle-vs-vanilla-timeline.md`).
- **Powershift build**: prioritizes Furor/Wolfshead synergy; skip Open Wounds and the bleed-energy side of Ancient Brutality.
- **Bleed/Claw build**: **Open Wounds** (Claw +10/20/30% vs. a Rake'd target, reworked Dec 2024 to scale off *every* active bleed including Ferocious Bite) and **Ancient Brutality**'s cat-form bleed-tick energy return (2/3/4 energy per tick as of the Dec-2024 rework, 3/5 by the 1.18.0 rework per the timeline) are the core enablers.
- Example builds shared in-thread (pre-1.18.1, talent tree unchanged in 1.18.1 so still structurally valid): [Bigsmerf's "optimal feral build" link](https://forum.turtlecraft.gg/viewtopic.php?p=106167#p106167) — [2024-11-03](https://forum.turtlecraft.gg/viewtopic.php?p=106167#p106167); a hybrid tank/DPS build by [Reploidrocsa](https://forum.turtlecraft.gg/viewtopic.php?p=110757#p110757) — [2024-11-30](https://forum.turtlecraft.gg/viewtopic.php?p=110757#p110757).
- **Point starvation, post-1.18.1**: raiding cats need Cat DPS talents *and* enough Bear talents to off-tank/tank trash, plus flex points — "We feel really starved for Talent points... ive got FOUR Feral specs just in my Brain Wash device" — [Snkx (player), 2025-08-21](https://forum.turtlecraft.gg/viewtopic.php?p=147482#p147482); Noephix's 2026-03-30 claim that the mandatory DPS talents alone require level 62 (**single source, uncorroborated with a specific point count — flag as unverified**).
- **Avoid**: Feral Adrenaline (see feral-tank.md — same criticism applies in Cat Form).

## Stat priority

- **Hit**: effective melee hit cap is **8%** — [Inovatu (player), 2025-03-04](https://forum.turtlecraft.gg/viewtopic.php?p=121590#p121590) — or **5% with Natural Weapons (3/3, +3% hit)** — [Eyeburn (player), 2025-03-04](https://forum.turtlecraft.gg/viewtopic.php?p=121689#p121689). Hitting above cap does nothing, and hit rating cannot reduce dodge/parry chance, which scales off weapon skill vs. defense — [Atreidon (player), 2025-03-02](https://forum.turtlecraft.gg/viewtopic.php?p=121385#p121385). Cats are permanently capped at 300 weapon skill (unarmed) regardless of gear, unlike weapon-using melee, which the community calls out as an unaddressed glancing-blow tax: "Feral Druids are the only Melee DPS class unable to counter the glancing blow mechanic" — [Slade1994 (player), 2025-03-26](https://forum.turtlecraft.gg/viewtopic.php?p=123857#p123857).
- **Strength/Agility ("stat-stick" scaling)**: primary offensive stats; cat/bear forms convert weapon-slot items into flat Feral Attack Power (FAP)/weapon damage, so any gear with Feral Attack Power or high Str/Agi is valuable regardless of nominal "weapon" status. Post-1.18.1 itemization complaint: "cats scale too well with str/agi, that's why we had to severely limit str/agi on t3.5 gear" (item-dev quote, reported by a player) — [Noephix (player), 2026-03-27](https://forum.turtlecraft.gg/viewtopic.php?p=172655#p172655); Feral T3.5's highest stat is Intellect, not Str/Agi — [Noephix (player), 2026-03-28](https://forum.turtlecraft.gg/viewtopic.php?p=172919#p172919).
- **Intellect on T2.5/T3.5 sets**: **contested**. Complaint: "126 stat points are wasted" on a PvE cat set with heavy Intellect — [Snkx (player), 2025-04-24](https://forum.turtlecraft.gg/viewtopic.php?p=128296#p128296) (see also [Jaffcover (player), 2024-12-25](https://forum.turtlecraft.gg/viewtopic.php?p=114200#p114200)). Defense: "Druid gear needs to be viable for PvP too. INT is necessary for lasting in fights for shifting, healing, and dots" — [Darter (player), 2025-01-29](https://forum.turtlecraft.gg/viewtopic.php?p=118313#p118313), countered by "But T2.5 and T3.5 is not a PvP set, you have the Rank gear for that, ferals don't need int in PvE" — [Grizb37 (player), 2025-01-29](https://forum.turtlecraft.gg/viewtopic.php?p=118323#p118323).
- **Haste/attack speed**: **contested, likely overvalued by item designers per the community**. "They think 'feral is melee so haste is good on them' and keep showing haste down our throats despite the fact that feral is unique in this regard and only gets around 20-30% of its damage from autoattacks (other melee spec hover around 50%)" — [Noephix (player), 2026-03-27](https://forum.turtlecraft.gg/viewtopic.php?p=172655#p172655) (figure revised between posts; a later reply in the same thread restates it as ~20%). **Single source, not independently tested.**
- **Crit**: valued for Clearcasting/Primal Fury-adjacent synergy and raw combo-point-finisher damage; no numeric weight given by any source (**gap**).

## Single-target rotation

There is **no single agreed rotation** — pick based on whether the target can bleed.

### Bleed/Claw build (meta on non-bleed-immune targets since ~mid-2025)
1. Open with Rake, then build to 5 combo points with Claw (buffed by Open Wounds while Rake is up).
2. Apply Rip at 5 combo points; keep Tiger's Fury active (12s duration by the CC2 rework, grants an attack-speed buff plus baseline energy return per 3s as of 1.18.0).
3. Refresh Rake/Rip before they expire; spend excess energy on Claw between refreshes.
4. Weave in Ferocious Bite only when it won't clip a bleed refresh — a common complaint is that Ferocious Bite's "extra damage from spent energy" conversion feels bad and several players asked (unsuccessfully as far as sources show) for it to refresh Rip instead — [Keds (player), 2025-04-23](https://forum.turtlecraft.gg/viewtopic.php?p=128112#p128112).
5. Use **Idol of Laceration** (finishing moves have a 20%-per-combo-point chance to refund 15 energy on your next Shred; also procs off Ferocious Bite — [Inovatu (player), 2025-05-24](https://forum.turtlecraft.gg/viewtopic.php?p=132807#p132807)) to reduce the need to powershift at all.
6. **On a bleed-immune target, swap immediately to the powershift/Shred rotation below** — staying in bleed mode against immune mobs is a large DPS loss: "as soon as bleed immune came, he just fell off a cliff, whereas I switched to p shift shred and carried on dishing out damage" — [Snkx (player), 2025-04-24](https://forum.turtlecraft.gg/viewtopic.php?p=128296#p128296).

### Powershift build (fallback / preferred by players who dislike bleed-tracking, and the only option on bleed-immune targets)
1. Shred to build combo points, using a powershift macro (cancel Cat Form → Furor grants energy on reshift → immediately back into Cat Form) whenever energy is capped/near-capped.
2. Ferocious Bite at 5 combo points.
3. Tiger's Fury when available for the attack-speed buff — note it **drops when you shift out**, so timing matters; several players requested it persist through shifting, unresolved as of the sources read — [Euromind (player), 2024-11-14](https://forum.turtlecraft.gg/viewtopic.php?p=107934#p107934).
4. Track debuff/buff-slot pressure in 40-man raids: Open Wounds' buff and multiple bleeds compete for the 32-buff client display cap, though Turtle's server-side debuff limit is 64 — [Thrank (player), 2024-11-13](https://forum.turtlecraft.gg/viewtopic.php?p=107806#p107806), countered by [Glowingfrom (player), 2024-11-13](https://forum.turtlecraft.gg/viewtopic.php?p=107899#p107899) that addon-visible tracking is still capped lower.

### Bleed-immunity map (Kara40, single source, useful for planning rotation switches mid-raid)
"In Naxx almost nothing is immune to bleeds (even things that should be, like skeletons)... Kara40 is where 'BUT MUH RP' bullcrap starts once again. And it's 50/50. Most things before Anomalus (3rd boss) are not immune, Anomalus is immune and so is everything after him until chess (5th boss). Trash after chess is still immune until the portal orb, where it isn't immune again... Except for Rupturan." — [Noephix (player), 2025-05-25](https://forum.turtlecraft.gg/viewtopic.php?p=132929#p132929).

## Multi-target / AoE rotation

Feral DPS has **weak AoE and no dedicated Cat-form AoE tool** — a repeated community complaint with no fix in the sources:

- Swipe requires **Bear Form**; usable for 2-3 add packs but tanks-in-DPS-gear generate less rage than a real tank, so damage is capped and "even a rank 1 Arcane Explosion mage could out-DPS you here" — [Rmoruser (player), 2025-05-24](https://forum.turtlecraft.gg/viewtopic.php?p=132794#p132794).
- Hurricane exists but is a caster (Balance) spell that cat-itemized druids don't have the spell power to use effectively, and using it means leaving Cat Form entirely — same source.
- No AoE threshold or priority list is given by any source (**gap** — treat single-target rules as the default even on 2-3 targets, switching to Bear/Swipe only when explicitly asked to help with adds).

## Cooldowns and resources

- **Tiger's Fury**: core cooldown for both builds; grants an attack-speed buff (talented) and (1.18.0) baseline energy return over time; **drops on shapeshift**, a frequently-cited pain point for powershifters.
- **Berserk**: 6-minute cooldown, +100% energy regen in Cat Form (or +20% max HP in Bear); criticized as too long to be a reliable raid DPS cooldown compared to ~2-3 minute burst windows on other classes: "in Molten Core or Blackwing Lair, I can't use Berserk on every boss, while other classes can use their burst on nearly every pull" — [Rmoruser (player), 2025-05-24](https://forum.turtlecraft.gg/viewtopic.php?p=132703#p132703).
- **Energy management**: bleed build sustains via Ancient Brutality's per-tick energy return plus Idol of Laceration procs; powershift build sustains via Furor + a Wolfshead/Wolfsheart-enchanted helm converting mana to energy on shapeshift.
- **No mana concerns** in Cat Form itself; mana only matters if the player leaves form to heal/dispel, which is generally discouraged in DPS contexts — "if you're getting out of form to heal allies — you're doing it wrong. The correct move is almost always to stay in cat form" — [Noephix (player), 2025-04-24](https://forum.turtlecraft.gg/viewtopic.php?p=128292#p128292).

## Role strategy

- **Positioning**: attack from behind for Shred/Rake's positional requirement (PvE trash may allow front-attacks depending on tank generosity; raid bosses generally require behind-tanking Feral to be positioned correctly by the tank).
- **Glancing blows**: unaddressed weapon-skill gap (see Stat priority) — factor this into damage expectations rather than trying to itemize around it (no gear-side fix exists).
- **Track bleeds with an addon**: server-side/native UI cannot reliably show more than 32 buffs/16 debuffs without addons; use Cursive, DoTimer or a SuperWoW-based tracker — [Inovatu (player), 2025-05-23](https://forum.turtlecraft.gg/viewtopic.php?p=132728#p132728).
- **Hybrid pressure**: raiding cats are pushed to also carry Bear survivability/tank talents "just in case," which is the direct cause of the talent-point starvation complaints above — plan a primary DPS build and accept that off-tank utility talents (Feral Charge, Feral Swiftness) may not fit.

## Gear, enchants and consumables

- **Idol of Laceration**: core bleed-build idol — finishers have a 20%-per-combo-point chance to refund 15 energy on the next Shred (also procs from Ferocious Bite) — [Rmoruser/Inovatu (players), 2025-05-24](https://forum.turtlecraft.gg/viewtopic.php?p=132703#p132703).
- **Wolfshead Helm / Wolfsheart enchant + Furor**: the historic powershifting enabler; still functional post-1.18.1, though the spec's overall power now leans bleed-first on non-immune content.
- **Feral Attack Power (FAP) items**: prioritize any item with FAP or high Str/Agi regardless of "weapon" flavor text, since forms use these as stat sticks; Turtle has "added Feral Attack Power on many of the more undesirable weapons" as a long-running itemization theme (official, [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102966#p102966)). 1.18.1 hotfixes: **Yoxtez** gained +224 FAP, and **Fang of Alichos** became usable in shapeshift forms ([Torta (staff), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608)).
- **A Kara40 armor-ignoring trinket was nerfed in 1.18.1** and is no longer a strong feral pick, per player report — "Feral is good only if you have a trinket from Kara40 that ignores enemy armor" / "You mean the one that got nerfed in the recent patch and no longer good for feral?" — [Zvyrhol, Noephix (players), 2026-03-29](https://forum.turtlecraft.gg/viewtopic.php?p=172992#p172992) (the trinket's name is not given in this thread — **gap**).
- **Weight/sharpening stones**: contested value post-CC2, discussed in dedicated threads (t7634, t16120) but not resolved with a clear consensus in the material read for this playbook — **gap**.
- Community (non-staff) DPS/gear tools: "Feral Druid DPS gear guide" Google Sheet linked from the wiki (`https://docs.google.com/spreadsheets/d/1EXmDujdlPD_s7xrLKjcFykBJIW_hmMhwRhSXZWUkKBQ`), also referenced directly in-thread — [Drubarrymooer (player), 2025-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=124910#p124910).
- **No pre-raid BiS list found in sources** — gap.

## Common mistakes

- Playing bleed rotation on a bleed-immune target instead of switching to powershift/Shred (large DPS loss).
- Ignoring Idol of Laceration and other energy-return tools, then over-relying on powershifting.
- Rolling on/wearing high-Intellect T2.5/T3.5 pieces as if Intellect were a real DPS stat in PvE.
- Letting Tiger's Fury drop mid-fight by shifting carelessly.
- Not tracking bleed durations with an addon and clipping Rake/Rip early.
- Expecting cat to carry AoE pulls — switch to Bear/Swipe or let another class lead on 3+ targets.
- Under-gearing weapon skill/hit thinking it matters for form combat the same way it does for weapon users — it doesn't (form weapon skill is fixed at 300).

## Sources

| Post | Author (authority) | Date | Era | Agreement |
|---|---|---|---|---|
| [p103902](https://forum.turtlecraft.gg/viewtopic.php?p=103902#p103902), [p104327](https://forum.turtlecraft.gg/viewtopic.php?p=104327#p104327), [p106016](https://forum.turtlecraft.gg/viewtopic.php?p=106016#p106016), [p106024](https://forum.turtlecraft.gg/viewtopic.php?p=106024#p106024) | Grizb37, ForumOLV, Romy, Rakura (players) | 2024-10-19/11-02 | pre-1.18.1 | contested — CC2 launch reaction |
| [p107788](https://forum.turtlecraft.gg/viewtopic.php?p=107788#p107788)–[p113193](https://forum.turtlecraft.gg/viewtopic.php?p=113193#p113193) | Glowingfrom, Xudo, Thrank, Bigsmerf, Noephix et al. (players) | 2024-11-13/12-18 | pre-1.18.1 | contested — debuff-limit/powershift-vs-bleed |
| [p117291](https://forum.turtlecraft.gg/viewtopic.php?p=117291#p117291)–[p120059](https://forum.turtlecraft.gg/viewtopic.php?p=120059#p120059) | Fugus, Biteyou, Templar85, Shambakriger, Grizb37 (players) | 2025-01-19/02-15 | pre-1.18.1 | consensus — hybrid identity loss |
| [p121383](https://forum.turtlecraft.gg/viewtopic.php?p=121383#p121383)–[p121689](https://forum.turtlecraft.gg/viewtopic.php?p=121689#p121689) (incl. [p121590](https://forum.turtlecraft.gg/viewtopic.php?p=121590#p121590)) | Berserkr, Atreidon, Inovatu, Eyeburn (players) | 2025-03-02/04 | pre-1.18.1 | consensus — hit cap |
| [p123857](https://forum.turtlecraft.gg/viewtopic.php?p=123857#p123857)–[p127967](https://forum.turtlecraft.gg/viewtopic.php?p=127967#p127967) | Slade1994, Snkx, Wolf of Rage et al. (players) | 2025-03-26/04-22 | pre-1.18.1 | consensus — glancing blow gap |
| [p124902](https://forum.turtlecraft.gg/viewtopic.php?p=124902#p124902)–[p134525](https://forum.turtlecraft.gg/viewtopic.php?p=134525#p134525) | Keds, Crake, Atreidon, Grizb37, Noephix, Aralise, armsgirl (players) | 2025-04-01/06-06 | pre-1.18.1 | contested → consensus over time — powershift vs. bleed DPS |
| [p127365](https://forum.turtlecraft.gg/viewtopic.php?p=127365#p127365)–[p128217](https://forum.turtlecraft.gg/viewtopic.php?p=128217#p128217) | Beest, Drubarrymooer, Bigsmerf, Turboman, Atreidon, Noephix (players) | 2025-04-18/23 | pre-1.18.1 | contested — playstyle culture war |
| [p128112](https://forum.turtlecraft.gg/viewtopic.php?p=128112#p128112)–[p133350](https://forum.turtlecraft.gg/viewtopic.php?p=133350#p133350) | Keds, Noephix, Snkx, Mundane, Rmoruser, Inovatu, Eyeburn, Bigsmerf (players) | 2025-04-23/05-28 | pre-1.18.1 | contested — long bleed-immunity thread, Kara40 map |
| [p114200](https://forum.turtlecraft.gg/viewtopic.php?p=114200#p114200)–[p120266](https://forum.turtlecraft.gg/viewtopic.php?p=120266#p120266) | Jaffcover, Darter, Grizb37, Eyeburn, Zulnam, Drubarrymooer, Turboman, Bigsmerf (players) | 2024-12-25/2025-02-18 | pre-1.18.1 | contested — Intellect on tier gear |
| [p147482](https://forum.turtlecraft.gg/viewtopic.php?p=147482#p147482), [p149611](https://forum.turtlecraft.gg/viewtopic.php?p=149611#p149611), [p172000](https://forum.turtlecraft.gg/viewtopic.php?p=172000#p172000), [p172923](https://forum.turtlecraft.gg/viewtopic.php?p=172923#p172923), [p172925](https://forum.turtlecraft.gg/viewtopic.php?p=172925#p172925) | Snkx, Noephix, Wosator (players) | 2025-08-21/2026-03-28 | pre/post-1.18.1 | single source — post-patch feral standing |
| [p171608](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608) | Torta (staff) | 2026-03-21 | post-1.18.1 | official — Yoxtez/Fang of Alichos hotfixes |
| [p172655](https://forum.turtlecraft.gg/viewtopic.php?p=172655#p172655), [p172912](https://forum.turtlecraft.gg/viewtopic.php?p=172912#p172912), [p172917](https://forum.turtlecraft.gg/viewtopic.php?p=172917#p172917), [p172919](https://forum.turtlecraft.gg/viewtopic.php?p=172919#p172919), [p172992](https://forum.turtlecraft.gg/viewtopic.php?p=172992#p172992)–[p173098](https://forum.turtlecraft.gg/viewtopic.php?p=173098#p173098) | Noephix, Daoc2001, Gorlocktheglock, Fugus, Zvyrhol (players) | 2026-03-27/30 | post-1.18.1 | single source — item-dev communication complaint |
| `synthesis/1.18.1-master-changelog.md` §Druid, `synthesis/turtle-vs-vanilla-timeline.md` §Druid | — (compiled from staff posts) | — | — | official changelog compilation |
