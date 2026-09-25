# Notes: #priest full chunk 003 (2026-03-13 .. 2026-04-17)

This chunk spans the 1.18.1 "Nightmares of Ursol" release (patch dropped 2026-03-20). Heavy
pre-patch speculation, then a flood of post-patch discovery: new smite tier sets (T1-T3.5), a
reworked Holy tree, Tauren priest racials, and extensive theorycrafting/bug reports.

## Experts observed
- **[Smite]** Snackz maintains the community 1.18.1 Smite SIM spreadsheet (DPS calcs, BiS list,
  rotation math); pinned and widely trusted, does live rotation/DPS modeling (e.g. T3.5 5-set
  ≈+27 dps, rotation becomes 4x Smite+1xHF+2xSmite+1xSW:P at 18.01s cycle; BiS pre-T3.5 ≈1415 dps,
  T3.5 ≈1462, +4pc T3 ≈1530 estimate) — [[d:priest#1484922576034594877]] (Snackz, 2026-03-22;
  📌pinned, +5 reactions), [[d:priest#1484656770084241539]] (Snackz, 2026-03-21),
  [[d:priest#1491077363990265858]] (Snackz, 2026-04-07; confirms T3.5 smite dot "cracked", 1500+ dps parsed).
- **[Shadow]** Zitronenhaze - BUFF SPRIEST runs a pinned Shadow Priest guide (talents, rotation,
  gear list, Ambershire gearing) with VODs; gives detailed rotation/threat/talent-tradeoff advice
  throughout and is treated as the go-to Shadow authority — [[d:priest#1488264724062670920]]
  (+5 reactions, joking "high IQ" post acknowledging his own authority),
  [[d:priest#1485807741002977291]] (self-reports "top3 dps in most guilds... trash on trash"),
  [[d:priest#1487798526288334898]] (irotos posts endgame BiS build referencing community norms).
- **[Holy]** Istrefi gives extensive, consistent, well-received holy raid-healing rotation and
  talent advice (Flash Heal as main heal, R1 Renew weaving for Book of Prayer, Ascendance timing
  around enrage) — [[d:priest#1492115676935229451]] (2026-04-10),
  [[d:priest#1493870884375629836]] (2026-04-14); corroborated/copied by others
  [[d:priest#1484308423762776117]] (Istrefi's build "copied" by Istrefi-adjacent poster).
- **[Holy]** Lirya gives detailed, numeric breakdowns of tier-set value trade-offs (T1/T2/T2.5/T3/
  T3.5 use-cases) that are treated as authoritative — [[d:priest#1487035175626997761]]
  (Lirya, 2026-03-27), confirmed useful by Vellasta/Fragui in-thread.
- **[Shadow theorycraft]** Orb gives a widely-endorsed (+15 reactions) breakdown of shadow
  priest's structural balance problems (no stat scaling on Mind Flay/SW:P, threat, mana identity)
  — [[d:priest#1482571193390207036]] (Orb, 2026-03-15, +15 reactions).
- **[Addons]** Doite (DoiteAuras dev) and t0uchm3 (HealComm/Luna fixes) are the trusted addon
  sources referenced repeatedly for UI fixes — [[d:priest#1482821674817683646]],
  [[d:priest#1486349826315653224]] (t0uchm3 HealComm fix, +3 reactions).

## 1.18.1 changes & their effect
- **[Smite]** Smite spec gets full Tier 1/2/2.5/3/3.5 sets for the first time (previously only
  Holy/Disc shared gear); pieces are converted from equivalent Holy/Shadow tier items at an NPC in
  Ratchet (T1/T2.5) or the ghosts at Blackrock Mountain tomb (T1/T2) — [[d:priest#1483321403129331884]],
  [[d:priest#1485949852096663582]], [[d:priest#1485930350491467866]] (T2.5 exchange at Ratchet).
- **[General]** New itemization makes Discipline gear pure holy-damage-only (no general spell
  power), same as Shadow being pure shadow-damage-only; widely criticized as killing the hybrid
  off-heal fantasy (e.g. PW:Shield now weak on Disc sets since only holy dmg is boosted, not
  healing-relevant stats in the way people expected) — [[d:priest#1484564440207855657]] (51108,
  +2 reactions), [[d:priest#1488642307048739048]] (Greendam, +6 reactions, "disc has thick pws but
  with all spell power changed into holy dmg your pws is pretty weak too").
- **[Holy]** Major Holy tree rework: Prayer of Healing becomes targetable (can be cast on any
  group/person, not just self-cast to own group) and behaves like TBC Circle of Healing (jumps
  between wounded targets in range) without the 50% mana cost of true CoH —
  [[d:priest#1484217772614615302]], [[d:priest#1484217855560908840]] (Istrefi, 2026-03-19);
  confirmed working post-patch, even cross-raid [[d:priest#1484568899641933895]] (Greendam),
  [[d:priest#1484632672851460237]] (+1, "yes you can cast poh on anyone even not in your raid").
- **[Holy]** New capstone talent Book of Prayer refunds mana (15%/30% talented) if the healing
  spell cast is different from the previous one cast; confirmed to work with different spells
  (e.g. Heal vs Greater Heal) but NOT with different ranks of the same spell —
  [[d:priest#1484561705487958016]] (Bluefear, confirms both facts after live testing),
  [[d:priest#1484887536890417222]]
  (t0uchm3, "Only different spell, same spell different rank won't work") and
  [[d:priest#1486824507040862208]] (30, general advice: don't change playstyle to chase it, just
  heal normally and let procs happen). Power Word: Shield does NOT count as a "healing spell" for
  Book of Prayer purposes — [[d:priest#1484259678643945764]] (Snackz, "It's not. Right now it's
  useless"), confirmed later [[d:priest#1485788864084971721]] (L-star). Holy Nova also does not
  count as a healing spell for it — [[d:priest#1485623406207434894]] (Aeterna/Hanayanagi).
- **[Holy]** New Lightwell: ground-targeted, ~5 min CD, 10 charges/1 min duration, smart-heals a
  random wounded target within range of whoever it heals (not necessarily near the priest) —
  [[d:priest#1484205378567798794]] (t0uchm3), [[d:priest#1485231553612353568]] (Chidi <beta
  tester> Q&A thread on lightwell mechanics). Renew talent (Empowered Recovery) duration was
  disputed pre-patch (+3s vs +6s from 2 points) — official result: only 1 extra tick/duration
  increase from the FIRST point, 2nd point does not add more duration —
  [[d:priest#1483504984409506034]] (Snert, question), [[d:priest#1490554883042967562]] (Blossom,
  confirms "only one extra tick" resolution).
- **[Shadow]** Spirit Tap reworked to also proc off Mind Blast crits (previously only on kill
  blows), synergizing with Spiritual Guidance (spirit→spell power) for leveling and even endgame
  — [[d:priest#1482986636680630304]] (Habu), [[d:priest#1488270019375661066]] (Zitronenhaze).
- **[Shadow]** Shadow Weaving reworked: each cast now applies the caster's OWN full stack amount
  rather than building 1 stack per application; debuff duration reduced to 9s (down from 15s),
  widely called too short relative to old 15s and possibly a bug/oversight —
  [[d:priest#1484726495568986112]] (Liddy), [[d:priest#1484728411665600606]] (irotos, "it can be
  15 sec, there's no reason not for it to be"). Side effect: applying SW:P + 5 stacks of Shadow
  Weaving in one GCD makes SW:P apply 6 simultaneous magic debuffs, effectively making it very
  hard to dispel in PvP (called likely unintended) — [[d:priest#1485255007283581048]] (Zvyrhol),
  [[d:priest#1485255166646030368]] ("that's probably unintended so enjoy while it lasts").
- **[Shadow]** Vampiric Embrace history/change: was nerfed to a cast time with no CD, then later
  buffed back to instant cast with a 10s CD (for PvP reasons) — [[d:priest#1484932015143780393]]
  (Stunfisk).
- **[General]** Every priest now gets Fear Ward as a class-wide racial-independent ability, and
  Tauren is added as a new playable Alliance^H^Horde priest race with unique racials —
  [[d:priest#1485156263921848341]] (Snackz), [[d:priest#1485156331227840563]].
- **[General]** Tauren priest racials confirmed: (1) **Spiritwalker** — invisibility ~12-20s,
  3 min CD, not usable in combat (like an invis potion), does not break existing combat, cannot
  cast while active early reports/later confirmed it's an invis-only effect similar to potions;
  (2) **Light of An'she** — 1.5 min CD holy-school spell, learned at level 10 (rank 2 at 20, more
  ranks from trainer), reduces target's hit chance by 10% for ~10s and deals a holy damage-over-
  time effect (scales with holy power); is a *Holy*-school spell so Shadow priests cannot use it
  while in Shadowform — [[d:priest#1484896429666209852]] (Deikara), [[d:priest#1484896469113896981]],
  [[d:priest#1484898033597546539]], [[d:priest#1485970348125061260]] (Irida, +2),
  [[d:priest#1485971317340508340]] (Aladar), [[d:priest#1488251105665089756]] (confirms holy-school
  restriction from shadowform). Book learned via a Tauren-only priest quest at trainer near the
  upper bridge in Bloodhoof Village/Thunder Bluff, not the undead NPCs by the pools —
  [[d:priest#1484921616793342135]] (Deikara).
- **[Champion]** Proclaim Champion (old priest raid buff, mana battery to a caster/tank +
  resistance) removed as an active talent; caused confusion when it briefly still appeared/worked
  as a baseline spell post-patch (bug, later presumably fixed) — [[d:priest#1484563604677328896]]
  (Bluefear), [[d:priest#1484907059777638421]] (Miriala Silverbow mourning its loss),
  [[d:priest#1484908043660693546]] (Stunfisk: it was toxic — best used pre-pull with alt priests
  parked at raid entrances — before it got the 5% dmg buff over Enlighten).
- **[PvP]** Priest PvP gear overhaul criticized: new T2/T3 PvP sets have LESS stamina/armor than
  the old Rank 12-14 honor sets, despite costing much more — [[d:priest#1487406580851806249]]
  (Zeraya), [[d:priest#1487471946298949722]] ("less armor and stamina than old r12/13 sets... pve
  sets"). Resilience/dampening changes reduce both crit AND dot damage, hitting Shadow (Mind Flay,
  SW:P) and disc(VE) twice — [[d:priest#1491433404577742929]] (Koys), [[d:priest#1488633169107484733]]
  (Potatolord: VE is nerfed twice — first the underlying damage is dampened, then the healing
  return from it is reduced again on top).
- **[Fortune stat]** New "Fortune" stat added, multiplicatively increases proc chance of item
  effects (not additive): formula ≈ base_proc × (1 + sum of fortune %) —
  [[d:priest#1484779316180025375]] (Greendam), [[d:priest#1484779443053396161]] (worked example:
  1% base × (1+5%+25%) = 1.3%). Fortune does not affect talent-based procs (e.g. Spirit Tap) or
  set bonuses — [[d:priest#1486873264432091319]] (Varnoc), [[d:priest#1488627929863819376]]
  (Varnoc, "set bonuses don't seem to benefit from Fortune atm").

## Spec viability / tier opinions
- **[Shadow]** Consensus: shadow remains bottom-tier raid DPS by design — "shit tier in dps but
  viable, raids want at least one" for the shadow damage debuff and mana/utility —
  [[d:priest#1486455616250581143]] (Greendam, +2), confirmed repeatedly
  [[d:priest#1485372314307526737]] (Shadurloc: "Shadow is welcome... but at the highest level they
  are both [shadow/disc] on the worst tier of dps specs"). Best fight is single-target sustained
  (e.g. Patchwerk-style): top parsing shadow priests hit ~2000 dps there —
  [[d:priest#1488266890731192402]] (Zitronenhaze), [[d:priest#1488267074605416528]] ("but such a
  single target fight is probably our best fight"). On trash, shadow priests are often *behind
  the tank* in damage — [[d:priest#1485745098858696747]] (Zitronenhaze), [[d:priest#1487833468896411659]].
- **[Shadow]** Core scaling problem (unchanged by patch): Mind Flay and SW:P do not benefit from
  crit or haste, only spell power; only Mind Blast (~15% of shadow dps) benefits from crit —
  [[d:priest#1482571193390207036]] (Orb, +15 reactions, detailed breakdown; +15% shadow dmg buff
  from talent needs several GCDs to ramp and post-patch stacks on the caster instead of the
  target).
- **[Smite]** Smite is "not even a raiding spec, it is being carried by your raid spec, brings
  nothing of value" per some, but others note it's viable and comparable in dps to Shadow with
  proper play — [[d:priest#1486181386850275441]] (L-star), contested by
  [[d:priest#1490693078640754830]] (Greendam: "competitive? no. viable? always.").
  Estimated smite BiS dps post 1.18.1 (Snackz sim): ~1415 pre-T3.5, ~1462 with T3.5 5-set,
  ~1530 with +4pc T3 — [[d:priest#1484657342954864671]], [[d:priest#1484658155592876143]].
- **[Holy]** Holy massively buffed and considered top/near-top healer post-patch — "Holy priests
  reign supreme, finally!" [[d:priest#1485207452227207209]] (Zeraya); Istrefi predicts it becomes
  "one of the strongest healers in the game" with strong AoE (new PoH) plus already-strong single
  target — [[d:priest#1484193406967349432]], [[d:priest#1484218086587629648]] ("we go from being
  one of the strongest ST healers to also the 2nd best AoE healer [after Shaman Chain Heal]").
  Multiple posters express fear of an imminent nerf — [[d:priest#1485623540404195479]] (Tzychotic,
  predicts nerf to holy capstone), [[d:priest#1485996245993525259]].
- **[PvP]** Holy priest solo PvP is considered essentially unplayable ("50% of your time looking
  at graveyard... better play disci") — [[d:priest#1487505164675059807]] (Zeraya, +3),
  confirmed [[d:priest#1487509756003225702]] (Bluefear). Disc PvP has strong shields/burst but is
  weak vs melee/curse of tongues; Shadow PvP suffers from short (20yd base) Mind Flay range,
  unreliable stuns, single damage school, and heavy dampening/resilience nerfs to dots —
  [[d:priest#1487776350658891838]] (Zeraya, detailed comparison).
- **[Leveling]** Discipline (via Divine Fury smite spam) levels faster than Shadow before 40-44;
  Shadow becomes strong/"demigod" from ~43-44 onward once Mind Flay rank 2 and Shadowform are
  available — [[d:priest#1488387052553768970]] (Bluefear), [[d:priest#1489371416963842209]]
  (limbless: "shadow becomes a demigod around 43-44, disc becomes a demigod earlier").

## Talent builds (endgame)
- **[Holy raiding]** Community-shared build: https://www.talent-builder.dev/collections/1.18.1/priest?points=AoDCBDA-aoFBAYLQRYAoBA-
  — only 2 points in Spiritual Guidance (author saw ~30HP diff between rank 2 and 4 in full K40
  gear, and reportedly no increase at all at rank 5), 1 point in Holy Reach for PoH radius —
  [[d:priest#1484588714758770728]] (Kabooble, 2026-03-20).
- **[Holy raiding, alt]** Snackz's suggested "cycle between renew/other heals" holy tree (post
  Book of Prayer/Lightwell rework), can drop 1 point from Empowered Recovery for wand spec or
  Holy Nova utility instead: https://discord.com/channels/... image —
  [[d:priest#1484246385447403711]] (Snackz, 2026-03-19; endorsed by Istrefi
  [[d:priest#1484308423762776117]] "going to copy this myself").
- **[Holy raiding, later consensus]** Widely-used build: https://www.talent-builder.dev/collections/1.18.1/priest?points=AoDCBDA-aAFCAZLoRYAoBA-
  — [[d:priest#1488039697971281981]] (Bluefear, 2026-03-30).
- **[Holy raiding disagreement]** Reservoir of Light 3/3 (~4k healing/boss fight via Lightwell
  synergy) vs 3% crit vs Holy Reach (extends PoH radius, "6yd increase = +44% circle area") is a
  running debate; consensus leans Reservoir/Holy Reach > flat crit for raid healing —
  [[d:priest#1484570386963103745]] (Bluefear), [[d:priest#1484302627947679805]] (Snackz),
  [[d:priest#1489274146826227752]] (Bluefear: prefers Lightwell talent, "10 GH1s ≈20,000+ healing,
  so 3/3 adds 4,000+ smart healing per fight... over 3% crit"). Later bug found: new Lightwell
  ("Splendor of Light") ignores wounded targets and prioritizes/wastes casts on full-HP players —
  [[d:priest#1489176818719391795]] (L-star, +3), [[d:priest#1489379966117216477]] (confirmed:
  "it ignores wounded targets and heals healthy ones, opposite of being smart heal").
- **[Shadow raiding]** irotos's shared endgame builds (hit-capped, 3/5 Shadow Focus):
  progression build https://www.talent-builder.dev/collections/1.18.1/priest?points=AoYCRDA--FgCoCIAVBQAoBA
  and personal BiS build https://www.talent-builder.dev/collections/1.18.1/priest?points=-BoAaDBAo-FoCYCIAEBQAoBA
  — "Shadow/Holy will always have more dps than Shadow/Discipline" —
  [[d:priest#1487798526288334898]], [[d:priest#1487799025569628312]] (irotos, 2026-03-29).
- **[Shadow PvP]** irotos's PvP build: https://www.talent-builder.dev/collections/1.18.1/priest?points=AoAQ-CoAYDA-AoCFQIAUJQAoBA
  ("4/5 shadow weaving can be 4/5 shadow focus if missing hit often") —
  [[d:priest#1487814720428834826]] (irotos, 2026-03-29).
- **[Disc PvP]** Bluefear's disc pvp build https://www.talent-builder.dev/collections/1.18.1/priest?points=DQFQRYYAZIAoBA-CoFKDBA-
  and shadow pvp build https://www.talent-builder.dev/collections/1.18.1/priest?points=AoFRRYA--AoCFQICVJAAoBA
  — [[d:priest#1487630788479680675]], [[d:priest#1487631348079526082]] (2026-03-29).
- **[Shadow rework proposal, community]** Zitronenhaze proposed a full Shadow tree rework (adds
  Mind Flay crit scaling, spirit-tap synergy via Shadow Power row) shared as talent-builder link
  https://www.talent-builder.dev/tree/XeSyS4AcbV — well-received by Arnoldgurke/Fat Pibble with
  Air Pods as more sensible than typical fan reworks — [[d:priest#1486772342813360269]],
  [[d:priest#1486774043863420968]] (Arnoldgurke: "actually dope, not like the unreasonable
  convoluted stuff you usually see"). A competing rework by Afraido posted at
  https://www.talent-builder.dev/tree/Wct1MrCTdl — [[d:priest#1485506991299498066]].
- **[Set-bonus context]** Discipline T1 tier set bonuses (screenshotted): 3-set — 15% of mana
  regen continues while casting; 5-set — 30% chance to avoid pushback while casting Discipline
  spells; 8-set — Inner Fire gains +10 stacks — [[d:priest#1484528181104082994]] (meowww).

## Leveling
- **[Universal]** Standard early-leveling order (multiple confirmations): 2/2 Wand Specialization
  → 5/5 Spirit Tap → 2/2 Holy Focus → into Holy for Divine Fury 5/5 → continue to 5/5 Spiritual
  Guidance (spirit→spell power/healing power); optionally 1-2 points Piercing Light from Disc if
  fighting higher-level mobs — [[d:priest#1488200396366286889]] (Zitronenhaze, +3),
  [[d:priest#1491061921632227400]] (Lirya, exact order),
  [[d:priest#1490664724591939664]] (Greendam, same order). Wand is primary early damage source:
  Lesser Magic Wand at level 5, Greater Magic Wand at level 13; Disc's Wand Specialization talent
  gives +25% wand damage — [[d:priest#1485480981371555962]] (Valaen).
- **[Rotation, leveling]** From ~30+: Holy Fire opener into Smite-Smite-Smite spam; before that,
  wand+SW:P is the standard low-level pattern — [[d:priest#1484713418564042842]] (Greendam),
  [[d:priest#1484713006725071071]] (upgrade wand aggressively before level 30).
- **[Shadow leveling]** Shadow only really comes online at level 40 (Shadowform available) or 44
  (Mind Flay rank 2); leveling as pure Shadow before that is worse than Holy/Disc —
  [[d:priest#1488657196777734204]] (Zitronenhaze), [[d:priest#1488657282798452736]].
- **[Disc leveling rotation]** No SW:P in the disc leveling rotation traditionally, but with the
  patch it becomes viable to weave in: wand+SW:P until 20-25, then Holy Fire > SW:P (elites only)
  > Smite > wand-to-finish — [[d:priest#1483042828509646869]] (Lynathel), noting Disc leveling has
  threat issues without enough points for Silent Resolve — [[d:priest#1483043291082653746]].
- **[Debate]** Whether Holy Nova is worth 1 point while leveling: Philes argues yes (situational
  dual heal+dmg vs 3+ mobs/2-3 players), Lirya argues no (too mana-expensive, situational) —
  extended back-and-forth [[d:priest#1492801039093469195]] through [[d:priest#1492809247237603389]]
  (Philes/Lirya, 2026-04-12).
- **[Debate]** Whether Spiritual Guidance is worth taking for smite dps leveling vs Piercing
  Light/Mental Agility/Improved Inner Fire/Purifying Flames from Disc — Lirya argues Divine Fury
  (Holy) is mandatory but Spiritual Guidance is optional, citing Purifying Flames (+12% dmg) as
  possibly better — [[d:priest#1492796559509819492]] (Lirya, long analysis).
- **[HC/duo leveling]** No specific consensus reached beyond standard build; multiple asks
  referencing the same pinned leveling guide link
  https://discord.com/channels/466622455805378571/810850727215104050/1345481802198024263 —
  [[d:priest#1487104053962870855]] (Valaen).

## Rotation: single target
- **[Smite]** Standard rotation is 4x Smite + 1x Holy Fire per cycle (Purifying Flames/Searing
  Light buff window); with T3.5, adjust to 4x Smite + 1x HF + 2x Smite + 1x SW:P (18.01s full
  cycle) to let the Burning Zeal DoT tick out without clipping — [[d:priest#1484922576034594877]],
  [[d:priest#1486851994512523354]] (Snackz). 10% haste (3% from talent + 7% from gear) is the
  breakpoint to guarantee 4 smites per Holy Fire window; going beyond 10% haste has diminishing
  value — prioritize crit after hitting hit-cap and 10% haste — [[d:priest#1488229451882823920]]
  (Tzychotic), [[d:priest#1491436651363434676]] (Snackz: "haste is only best stat until 10%. After
  that scale crit, because of how the rotation works with Purifying Flames").
- **[Smite]** Missing a Holy Fire cast (resist/interrupt) is very costly: you don't get the
  Purifying Flame buff and must hard-cast Holy Fire again, "ruins your parse" —
  [[d:priest#1490797658879557723]] (Greendam).
- **[Shadow]** Standard shadow rotation described as SW:P → dot maintenance → Mind Flay/Mind
  Blast weave with clipped channel via Nampower "queue channeling spells" option (nochannel), or
  manual clipping is theoretically higher dps — [[d:priest#1494374087177404586]],
  [[d:priest#1494374717791010836]] (Zitronenhaze: "advise to just always clip manual from the
  start"). Devouring Plague (undead racial) does slightly less damage than SW:P and costs more
  mana; barely worth a GCD — [[d:priest#1490748665776832815]] (Izhan), [[d:priest#1490748965338222814]].
- **[Disc]** T3 disc rotation is described as clunky/underwhelming: shielding for Wildfire stacks
  costs more time than it returns; roughly "Holy Fire → 3s filler → Holy Fire again"; damage stays
  comparable to smite spam alone despite the added complexity — detailed math (5k dmg over 4.3s
  crit vs 3.3k non-crit for the 2.8s HF+1.5s shield combo) — [[d:priest#1485394588905766985]]
  (Excinerus).
- **[Priest generally]** Mind Blast (max rank) used to snipe last-hit kills on trash for Spirit
  Tap procs when leveling — [[d:priest#1489729086015279258]] (Bluefear).

## Rotation: AoE / multi-target
- **[Holy Nova]** Widely considered priest's only real AoE tool but weak: only 15% spell power
  scaling on damage, and is now school-specific (holy) since new gear went single-school —
  [[d:priest#1486986938266292235]] (Zitronenhaze: "nova only has 15% spellpower scaling"),
  [[d:priest#1482362080970543245]] (Orb: "Holy nova is kind of the default with all its flaws").
  Magispark Leggings (highest crit legs) considered BiS for Holy Nova AoE farming despite low SP
  scaling — [[d:priest#1486986938266292235]].
- **[Shadow]** Shadow has no real AoE spell; community repeatedly asks for something like Mind
  Sear — [[d:priest#1493653183761879266]] (tom), [[d:priest#1493655964878901338]] (McPewPew).
  DoT triage rule of thumb for trash: only apply SW:P if the target will live ≥3 ticks (≥9s),
  otherwise skip — [[d:priest#1489637342825152522]] (Zitronenhaze - BUFF SPRIEST).

## Stats, caps, weights
- **[Hit]** 16% total spell hit needed for Shadow spells vs 60/63 bosses (10% from talents max,
  plus 6% from gear, or 5%+1% from a Druid's Elemental/Emerald Blessing (ES) buff) —
  [[d:priest#1489093951494426686]] (Greendam). Disc/Smite hit requirement similarly ~16% for
  holy spells (talent covers only holy/disc spells, not universal — repeated ask to make it
  universal spell hit) — [[d:priest#1486394362500878336]] (Varnoc, repeated
  [[d:priest#1489762026610888868]]).
- **[Haste]** Smite haste breakpoint 10% total (3% talent + 7% gear) for the 4-smite/1-holyfire
  cycle; no benefit theorized beyond that threshold — [[d:priest#1485445886791254147]] (LaZy),
  [[d:priest#1494039767082340393]] (Koys, confirms 7% needed from gear for non-NE, 9% for NE
  due to racial haste).
- **[Spirit/mana math]** 1 spirit while not casting ≈ 0.25 mana/2s; detailed example: 30 spirit
  food + Kings + Spirit of Redemption = 36 effective spirit → 9 SP/healing (via Spiritual
  Guidance) and 9 mana/2s out of combat, or 6.75 mp5 in combat with 30% Meditation (3-set T2 +
  3/3 Meditation talent) — argued as better than flat +8 mp5 food —
  [[d:priest#1486698026301915317]] (Lirya), [[d:priest#1486700633032626417]] (Lirya, full math).
- **[Crit conversion]** 1% crit ≈ 3-4 spell power equivalent value for shadow priests via Spirit
  Tap proc math (varies with gear: one estimate 1%crit=0.78sp via spirit tap alone, historically
  ~2.18sp before this change, total <3sp) — [[d:priest#1493756785851633735]] (Mendeleev),
  [[d:priest#1493685228911333427]] (Zitronenhaze: "yup around 4sp").
- **[Resist mechanics]** Binary spell hit formula (from vmangos-derived server code) shared:
  `HitChance = (96 + SpellHit) * (1 - (targetResist - spellPen) * 0.15/60)`; 100 resist with no
  spell penetration = 28% miss chance on a binary spell — [[d:priest#1487710174436134943]]
  (McPewPew). There's always a base 1% miss chance on offensive spells regardless of hit —
  [[d:priest#1487700202667245640]] (McPewPew).

## Gear, BiS, pre-raid, set bonuses
- **[Holy]** Tier evaluation by phase (Lirya): T1 8-set worth it while in MC/BWL gear, falls off
  once in Naxx/Kara40 gear; T2 remains good for BWL/AQ-phase content, especially constant-damage
  fights (Sapphiron, first boss of K40) via the 3-set mana/healing bonus, but Prayer of Healing
  outperforms Greater Heal for AoE-heavy fights; T2.5 healing pieces are catch-up gear only;
  T3's only good piece is the 2-set bonus; T3.5's 3-set bonus is good, 5-set is just "ok" —
  [[d:priest#1487035175626997761]] (Lirya, 2026-03-27; see also
  [[d:priest#1485274206110220298]] Klurifax: "T2 requires constant dmg... so sapph, 1st boss in
  K40").
- **[Smite]** T1 5-set bonus grants +35 spell power specifically while Inner Fire is active (some
  users reported it not applying correctly, likely a display/character-sheet bug, not a real
  bug — buff tooltips don't reflect talent/set modifiers) — [[d:priest#1484942233080827915]]
  (LaZy), [[d:priest#1484815312867168378]] (Valaen: "buff tooltips don't update to account for
  talents; spellbook numbers are accurate").
- **[Smite]** T3 2-set halves the Holy Fire DoT duration to 5s (double-tick rate) while T3 4-set
  should grow stacks to 10 but reportedly capped at 4 in testing — flagged and bug-reported
  — [[d:priest#1484694932798312569]] (Snackz), [[d:priest#1484688385888096378]] (Misandria),
  bug report filed [[d:priest#1486379322062274571]] (Snackz, "Bug report for smite t3 4set bug").
- **[Smite]** T3.5 5-set Blessed Wildfire mechanic: casting Holy Fire/Holy Nova builds Wildfire
  stacks (up to 10) that, when consumed by the NEXT Holy Fire cast, add up to +40% bonus damage;
  casting Holy Fire during the stacking window resets/consumes stacks early, so players must NOT
  cast Holy Fire mid-buildup — [[d:priest#1484588447946506310]] (Snackz), confirmed
  [[d:priest#1484588283198574804]]. Estimated overall gain from T3.5 5-set: only ~+27 dps —
  [[d:priest#1484656770084241539]] (Snackz).
- **[Smite]** T3.5 3-set (Disc) is rated poor/negative-EV: gives only a chance (not guaranteed) to
  buff the party for 30s, described as possibly worse dps than the 14dps flat bonus from T2.5's
  3pc — [[d:priest#1484667910885736599]] (Zvyrhol).
- **[Shadow]** T2.5 3-set/full-set bonus not updated for the patch (widely mocked, "disgrace" that
  Shadow T2 bonuses were left unchanged while Smite got a full new itemization pass) —
  [[d:priest#1484591480457658468]] (Potatolord).
  Shadow's actual new set bonus (T2.5?) grants a flat +14 dps (crit-based, weak) —
  [[d:priest#1484674007428104434]] (Zitronenhaze, "shadow gets a 14dps set bonus" vs
  "holy gets a 40 spirit set bonus").
- **[Trinkets]** Ascendance rated by Lirya as "by far the best trinket" for holy —
  [[d:priest#1487035175626997761]]. Scarab Brooch procs an absorb shield off any heal (incl. PoH),
  lasts 30s (huge uptime in short fights), ~30% of healing done converts to shield —
  [[d:priest#1486557121268154540]] (Greendam), [[d:priest#1486591654117904495]] (Delveless).
  Loop of Infused Renewal only procs off Greater Heal (not confirmed on PoH), pairs well with
  8pc T2 — [[d:priest#1486583246274957443]] (Yoland). Sigil of the Ancient Accord ("droplet"
  trinket) doesn't proc from Mind Flay/SW:P (only Mind Blast/Pain Spike, described as "direct
  harmful spells" only) — deemed a poor fit for shadow priest despite being nominally BiS —
  [[d:priest#1486310582729572433]] (Karna/Vvalter), [[d:priest#1486483043383377992]] (Greendam:
  "every other item with this wording procs on MF/SWP application, kinda fucked when they did it
  right one time on this exact item").
- **[Trinket]** BWL new boss drops "Upgraded spell power goggles" recipe requiring Engineering
  (270 skill) plus a crafted material combine; craftable BiS engineering item for casters —
  [[d:priest#1485304300560449657]], [[d:priest#1485313985581547731]] (Blindpriest),
  [[d:priest#1486384331227398216]] (Ydr, recipe details).
- **[Weapons]** New healing wand from UBRS post-patch (29 healing, 10 stamina) discussed as
  possible upgrade over stat-stick wands — [[d:priest#1486004922028916837]] (Pyronus).
- **[Gearing debate]** Whether 3x T2 (mana regen while casting) is "mandatory" for holy is
  disputed: several posters find themselves rarely oom even in Kara40 with T3.5+3pcT2, suggesting
  the old BiS-sheet claim is outdated as raids get faster/mana becomes less relevant —
  [[d:priest#1488471945728233614]] (Xaxas), [[d:priest#1488474225227595848]] (Evershine),
  [[d:priest#1488498645782237245]] (t0uchm3: "as your raid becomes faster... 3xt2 becomes
  useless").

## Enchants, imbues, oils, poisons, stones
- **[Shoulder]** Debate: ZG shoulder enchant (+SP) vs Naxx shoulder enchant (2% haste) — once you
  hit the 10% haste breakpoint from other sources, ZG SP enchant is preferred; if not, take haste
  — [[d:priest#1485668479255318629]] (Mendeleev), [[d:priest#1485110643223691355]] (Zitronenhaze:
  "yeah swap to [Naxx enchant] now" once available).
- **[Chest/Feet]** For healing, +9 healing on chest preferred over +4 all stats; for boots, Minor
  Speed enchant is largely made redundant in organized raids because it doesn't stack with and is
  overridden by Druid Emerald Blessing's 10% speed aura — [[d:priest#1487352640710119517]]
  (Fragui), [[d:priest#1487354359955325078]] (Greendam).
- **[Gloves]** Ebon Flame (glove) enchant considered for swap depending on T3 8pc value on
  specific fights like Loatheb — [[d:priest#1482471094005927967]] (L-star).
- **[Rep enchant]** +12 spellpower bracer enchant available via Gelkis Centaur reputation —
  [[d:priest#1482940784075477030]] (Cleric).

## Consumables & world buffs
- **[Mana]** "Teas" (cheap, ~1g for 5 from a vendor) function like Demonic Runes for instant mana
  — recommended staple consumable for shadow priests, along with mana pots on cooldown —
  [[d:priest#1488267578773209241]] (Zitronenhaze), [[d:priest#1488267643076218982]].
- **[Food]** +30 spirit food (nightfin soup/hot smoked bass) rated better than flat mp5 food for
  priests due to Spiritual Guidance/Meditation math (see Stats section) —
  [[d:priest#1486698026301915317]] (Lirya). Empowering Herbal Salad (Kara40 cooking recipe) gives
  +24 healing power food — [[d:priest#1486701507825897482]] (Lirya).
- **[Mana regen gear]** Pendant of Forgotten Names + Ring of Spiritual Fervor (+20% regen while
  casting each) recommended swap-in for long Kara fights when going oom —
  [[d:priest#1488477999262339093]] (Fragui).

## Cooldowns, resources, threat, utility
- **[Threat]** Fade reworked: temporary threat reduction (15% base, up to 50% with a talent) for
  a duration plus a static threat removal (~820 flat, ±15%), rather than a pure defensive tool;
  after Fade ends you still gain 100% threat again, so it only delays a pull, doesn't prevent it
  — [[d:priest#1484604133200891944]] (Trinqucy, "so unfortunately we still gain 100% threat while
  fade is active, so in the end it is just going to delay the inevitable if we are going to
  pull").
- **[Threat, general]** Vampiric Embrace causes significant threat spikes because it heals the
  whole group off any shadow damage dealt (essentially free healing generates aggro); best
  practice is to only pop VE when mana/healing is actually needed, and never while Fade is active
  or a damage cooldown trinket is running (to not waste the window on non-damage-relevant
  VE overhead) — [[d:priest#1485766258803867659]] (Zitronenhaze), [[d:priest#1491659277474074716]]
  (personal rules: never VE with no need, never during Fade, rarely during trinket procs).
- **[Utility]** Enlighten (Smite/Disc) can only buff one target for +15% (self) or +10% (another
  non-smite DPS); two priests cannot stack Enlighten on each other — [[d:priest#1490641318630658178]]
  (Subzero). Chastise pre-pull on the tank gives a haste buff and threat/interrupt utility, but is
  basically Disc's only real support spell — [[d:priest#1486224198475976724]] (Xerq).
- **[Ascendance]** Trinket-based CD; timing advice: pop right before boss enrage phases to have
  the buff active during highest-damage windows — [[d:priest#1492116211587088486]] (Istrefi).

## Healing specifics
- **[Rotation]** Post-patch consensus rotation for holy raid healing: Renew (weave R1 on self for
  Book of Prayer refunds) + Flash Heal spam (main ST tool, R7 for big tank damage / R1 to top
  off) + Prayer of Healing (now targetable, primary raid-wide tool) largely replacing Greater
  Heal except in slow-paced/farm content — [[d:priest#1484993455808708691]] (t0uchm3),
  [[d:priest#1493870884375629836]] (Istrefi's rotation guide), [[d:priest#1493919533281312859]].
- **[Proactive vs reactive healing]** Detailed community explainer: proactive healing (pre-casting
  based on predicted incoming damage, e.g. HoTing tanks pre-emptively) outperforms reactive
  healing; paladins can spam proactively due to infinite mana, druids naturally proactive via
  HoTs — [[d:priest#1483066575006204057]] (Pyronus, long post).
- **[Downranking]** At low levels (dungeon healing while leveling), use Lesser Heal/Rank 3 Heal
  and let the 5-second-rule regen kick in between casts rather than spamming Flash Heal; at max
  level with book of prayer / high healing power, downranking matters much less —
  [[d:priest#1493838564381818992]] (Lirya), [[d:priest#1489676012013883713]] (IllegallyParkedFrog).
- **[Class call restriction]** During Nefarian's Priest class call (MC'd priest), only Renew and
  Power Word: Shield are usable as direct heals — casting other heals is bugged/unsafe; Vampiric
  Embrace and Holy Nova can still cause problems/AoE damage during class call —
  [[d:priest#1484524057155211406]] (Istrefi), [[d:priest#1484524779418685481]] (Viertakt warning
  re: Holy Nova), later: Holy Nova registers as "direct healing" and can accidentally KILL people
  during priest class call if cast at low health, since it's treated as a damaging/healing hybrid
  — [[d:priest#1493278987101671544]] (Soundless self-report of accidentally killing self and
  another player).
- **[Bug]** Splendor of Light (new Lightwell) prioritizes healing already-full-health targets over
  wounded ones — see Talent builds section for citation. Multiple priests report PoH's healing
  prediction (in Luna/HealComm addons) still shows only their own group, not the targeted group,
  even though the actual heal lands correctly cross-group — [[d:priest#1484652866101579856]]
  (Fragui), [[d:priest#1485619997056303226]] (Yoland, +2), fixed via updated HealComm/Luna file
  shared by t0uchm3 [[d:priest#1486349826315653224]].
- **[Enlighten targeting]** Cannot self-stack; must be cast on self (15%) or on one other non-
  smite DPS (10%) — see Cooldowns section.

## Dungeons & raids (tactics by instance / boss)
- **[Naxxramas — Loatheb]** T3.5 8-piece disc set bonus (5% Vampiric Touch heal) considered only
  situationally good here since the boss forces heal-reduction; Vampiric Embrace's own overheal
  from spriest is described as already "massively overhealing" on this fight regardless of set
  bonuses — [[d:priest#1482470974921248949]] (L-star), [[d:priest#1482478346767175722]] (Greendam),
  [[d:priest#1482473320980025664]] (irotos: "loatheb is the only use case I can see for 8pc").
  Scarab Brooch's shield-on-heal is also called "great for Loatheb" —
  [[d:priest#1486790188570120244]] (Snackz).
- **[Naxxramas]** T2 3-set (mana regen while casting) shines on fights requiring constant damage
  output, e.g. Sapphiron and the first boss of Kara40 (per Klurifax); becomes "dead weight" on
  fast-paced progression where you can space heals out — [[d:priest#1485261459729547394]]
  (t0uchm3).
- **[BWL — Firemaw]** Holy Reach (PoH radius) and positioning are called out as important because
  Firemaw requires healers to stand at max range — [[d:priest#1484207147133964420]] (Istrefi),
  [[d:priest#1484309361517138105]] (Istrefi again), [[d:priest#1486259006413738166]] (also flags
  Firemaw regarding positioning generally).
- **[Kara40 (Tower of Karazhan)]** Multiple bosses are immune to shadow damage — the new Smite
  T3.5 set (pure shadow-scaling for spriest content) is "immuned by 3 of 9 bosses" —
  [[d:priest#1486032102896959539]] (Zitronenhaze). Heigan-style fear-range mechanics: only need
  1 point in Shadow Reach because it's the only fight requiring extended Mind Flay range —
  [[d:priest#1489094882952876162]] (Greendam), [[d:priest#1489095207839338580]].
- **[Kruul]** Holy Reach considered situationally useful because healers must watch the infernal
  kiter and may not cast PoH much anyway; T3P8 disc set bonus judged possibly useful here too —
  [[d:priest#1484311518580310107]] (Hadjo), [[d:priest#1482473556796248227]] (L-star: "maybe
  kruul and gnarlmoon").
- **[Anub'Rekhan / Naxx trash]** Hunter-pet pull strategy used to pull adds into "the Anub room"
  for shadow priests, letting a pet hold aggro outside while the group AoEs inside —
  [[d:priest#1494364719472054494]] (Zitronenhaze).
- **[Nefarian class call]** See Healing specifics section — Renew/PW:S only during priest class
  call; VE is safe (heals) but can still damage others if the AoE mechanic interacts oddly.
- **[General]** Dot-worth threshold rule for trash packs in raids: only apply SW:P if a mob will
  live at least 3 ticks (~9s) — [[d:priest#1489637342825152522]] (Zitronenhaze).

## PvP
- **[Shadow PvP]** Strong burst potential paired with a caster partner (e.g. destro warlock);
  chain-stunned kills via shadow priest replacing old "chain stunned by disco priest" meme —
  [[d:priest#1483903073318469703]] (Lightemgee), [[d:priest#1485555283022581790]] (Zitronenhaze).
  SW:P is described as effectively undispellable post-patch (6 simultaneous debuffs from one
  cast) making it very strong against flag carriers in WSG — [[d:priest#1485254665892266054]]
  (Zvyrhol), [[d:priest#1485287934339977258]] ("with shadow priest, it would be impossible to
  dispel flag carrier"). Countered hard by Rogue's Shadow Reflector item —
  [[d:priest#1485553306876252212]] (L-star), [[d:priest#1486396858094977239]].
- **[1v1 matchup notes, Shadow/Disc]** Warrior: bubble them, but avoid Mind Blast crits (Warriors
  gain rage/power from being crit); Rogue: fear+dot them; Mage: use consumables to stop
  Polymorph; Druid: outlast with VE, watch for cat burst; Warlock: dot/kill their pet or LoS it;
  other Priest: dispel/silence war of attrition; Paladin: must burst before bubble, hardest
  matchup — [[d:priest#1485369463661395968]] through [[d:priest#1485372451918446712]] (Shadurloc,
  detailed matchup breakdown, 2026-03-23).
- **[Tauren PvP]** Tauren considered a strong new PvP race for priests due to War Stomp + extra
  stamina + Spiritwalker invis utility for repositioning/escaping (though invis breaks on cast
  and can't be used in combat) and Plainsrunning for world PvP sneaking —
  [[d:priest#1486259006413738166]] (DrakeReinz, long analysis), [[d:priest#1486995061299216436]]
  (El Barno asks troll vs tauren), [[d:priest#1487012434068766720]] (Eemo: "tauren is better
  because 1 stomp can save you from getting raped" for general PvP; Troll better for pure shadow
  due to Shadowguard).
- **[Racial]** Troll Shadowguard: thorns-style proc, ~100% total spell-power scaling split across
  hits/orbs (not 100% per orb), reveals the caster through walls in BGs (drawback); pairs with
  Hex of Weakness (-20% healing debuff, described alternately as disease/curse) —
  [[d:priest#1488981916966326363]] (Boltzmann), [[d:priest#1488985820617769182]] (Misandria),
  [[d:priest#1488987975290458223]] (Greendam correction on scaling).
- **[Debuff dispels]** Priest vs Priest and general dispel wars are common; Undead's Will of the
  Forsaken racial breaks and allows removing active Mind Control even while it's active (contrary
  to some players' belief it can't be removed) — [[d:priest#1487939392373919745]] (ShadowPriestOnlyPriest).

## Macros, addons, UI
- **[DoiteAuras]** Actively developed "Vanilla WeakAuras Light" addon by Doite; relevant updates
  in this window: multi-mode auras (v1.6.3), pet aura tracking (v1.6.9), item-based show/hide
  conditions + Healer/Melee Consume Group templates (v1.7.0), Bars feature + import/replace +
  reagent tracking (v1.7.8), "beyond visible buff/debuff cap" tracking (v1.8.3) —
  [[d:priest#1482821674817683646]], [[d:priest#1483560024059150377]], [[d:priest#1483829972635226173]],
  [[d:priest#1488276537810620529]], [[d:priest#1492473669929271438]].
- **[HealComm/Luna]** t0uchm3 maintains a HealComm fix (based on Otari's standalone HealComm addon)
  that fixes Prayer of Healing incoming-heal prediction across groups; later superseded by
  MarcelineVQ's updated LunaUnitFrames with native fix —
  [[d:priest#1486349826315653224]] (t0uchm3, +3), [[d:priest#1486358072749199380]] (Bluefear,
  code snippet: replace `local dur = getSetBonus() and 18 or 15` with a proper talent-rank check
  for Renew's 18s duration since 2/2 Empowered Recovery does NOT extend it to 21s).
- **[Puppeteer]** Mouse-button-bound click-healing addon (all heal ranks + shield bound to mouse
  buttons/modifiers); with SuperWoW shows target distance/direction and incoming heal info —
  [[d:priest#1488482096661004399]] (tomscorer), explained [[d:priest#1488497664474742834]].
- **[QuickHeal]** "One button" auto-targeting heal addon; Demontap's updates: auto-targets groups
  for PoH/PW:S and alternates heals automatically (`/qh cfg`, `/qh poh`), fixed PW:S firing out of
  combat — [[d:priest#1486090931957661827]], [[d:priest#1487196238209224814]],
  [[d:priest#1487196361660305439]]. Selection logic: with no target, casts PoH on lowest-health%
  person in the group with the most combined missing health% — [[d:priest#1487307081521434664]]
  (McPewPew, read the source).
- **[Lightwell placement macro]** `/cast lightwell` + `/run CameraOrSelectOrMoveStart()` +
  `/run CameraOrSelectOrMoveStop()` places Lightwell at the mouse cursor instead of requiring a
  manual ground-target click — [[d:priest#1487150323654197319]] (McPewPew).
- **[Talent calculators]** Community-run unofficial talent calculator for the new patch:
  https://www.talent-builder.dev/collections/1.18.1/priest — [[d:priest#1483229097181184162]]
  (t0uchm3), used throughout the chunk for build-sharing.
- **[Nampower]** For clipping Mind Flay with Mind Blast, enabling "queue channeling spells" in
  Nampower makes it easier for beginners but is theorized as a small dps loss vs manual clipping
  — [[d:priest#1494374087177404586]] (Zitronenhaze).

## Races, professions, gold
- **[Race, PvE]** Human is repeatedly cited as the most optimal PvE race for priest generally and
  for Smite specifically (Perception/Diplomacy racials are minor; human's real edge argued as
  mana return interactions) — [[d:priest#1483688991738822817]] (Istrefi), [[d:priest#1483689303749034014]].
  Undead preferred for pure Shadow PvE (Devouring Plague + 2% dmg vs Undead/Humanoid targets,
  ~2-5% dps gain depending on target type and fight length) —
  [[d:priest#1482672202896642128]] (Greendam), [[d:priest#1482672458720088146]] (Potatolord),
  [[d:priest#1487799254922563644]] (irotos: race-changed to Undead specifically for Devouring
  Plague).
  Troll preferred for Shadow PvP (Shadowguard, Berserking) — [[d:priest#1487012349108948992]]
  (Eemo). Night Elf is the only race with access to a priest bow ability (used at point-blank
  range unlike other bows), but it's mostly RP flavor/niche PvP, not a real dps tool —
  [[d:priest#1483704301590413434]] (Valaen), [[d:priest#1490721834927132823]]/[[d:priest#1490722291875840162]]
  (Zitronenhaze: "its rp, maybe usefull in pvp").
- **[Weapon restriction]** Priests are restricted to wands, one-handed maces, daggers, staves,
  and (Night Elf only) bows — no two-handed weapons — [[d:priest#1484952654450000063]] (Valaen).
- **[Professions]** PvE recommendation: Engineering + Alchemy — [[d:priest#1484601941563539657]]
  (FishyNeo). Engineering explicitly called out as a strong pick due to the new BWL spellpower
  goggles craft recipe (see Gear section).
- **[Racials info sources]** Community-maintained spreadsheet of all priest racial spells:
  https://docs.google.com/spreadsheets/d/1MBPmFgsfEZCTvhXTUA_PTrmL8r5nFtoWsqpGIBTKx9I —
  [[d:priest#1488924294313672836]] (Valaen).

## Bugs & quirks
- **[Shadowform visual]** Shadowform's dark visual becomes much lighter/washed out when mounting,
  and Power Word: Shield visibility toggles unpredictably while shadowformed; workaround is to
  remove and reapply Shadowform — [[d:priest#1483470810847908002]] (Pablito el Grande),
  [[d:priest#1491242990692470834]] (Shopkeh), fix noted [[d:priest#1491256498456756274]]
  (Shadurloc). Bug report filed: https://turtlecraft.gg/bug-report?id=20576 —
  [[d:priest#1484397306982830240]] (Pablito el Grande).
- **[Book of Prayer / PW:S]** Confirmed PW:Shield does NOT count as a healing spell for Book of
  Prayer procs (see 1.18.1 changes section).
- **[Lightwell targeting bug]** New Lightwell heals full-HP targets and ignores wounded ones,
  opposite of intended smart-heal behavior — see Talent builds section.
- **[Set bonus resist interaction]** T3.5 5-piece Disc set: if the holy DoT (converted SW:P) gets
  resisted, it removes the underlying SW:P entirely, forcing a full re-cast of both SW:P and
  Holy Fire — reported to happen frequently against bosses with holy resistance —
  [[d:priest#1485744052828901547]] (Misandria), bug report filed re: Qiraji Deterioration (T2.5
  3pc dot) being cancelled by casting Devouring Plague — https://turtlecraft.gg/bug-report?id=21042
  — [[d:priest#1485779164723417118]] (dafuce).
- **[Group-swap healing bug]** Vampiric Embrace / raid logs occasionally show a shadow priest
  healing a party they are not actually in, likely a raid-group-assignment desync bug (not a
  scripted feature) — [[d:priest#1486032239325351996]] (L-star), confirmed via raw log excerpt
  [[d:priest#1486037382829441124]] (Zitronenhaze).
- **[Cross-faction Lightwell]** Lightwell reportedly cannot be clicked cross-faction —
  [[d:priest#1484737354265657445]] (Lipibidy).
- **[PoH bug/feature]** Prayer of Healing can be cast on players not in the caster's raid at all
  (works across separate raid groups entirely) — widely confirmed, unclear if intended —
  [[d:priest#1484568899641933895]] (Greendam), [[d:priest#1484632672851460237]].
- **[Blessed Recovery]** Only accounts for the LAST hit received, even if it was a small hit after
  a much bigger crit — so a 2000 crit followed by a 500 hit only heals back a portion of the 500,
  not the 2000 — [[d:priest#1488909973315522610]] (Misandria).
- **[WDB cache]** Recurring theme: many gear/talent/set-bonus display bugs are fixed by clearing
  the WDB folder and relogging (e.g. shadow tier not applying visually, talent screen not showing
  correctly, capstone missing) — [[d:priest#1482476697189220484]] (L-star), repeated by many
  ("Disable Patch-O" / clear WDB is the standard fix suggestion) —
  [[d:priest#1484878385782984766]] (Fat Pibble with Air Pods).
- **[Shadow Weaving buff bug]** Shadow Weaving buff fails to apply/refresh if you log in on a dead
  character until you relog — reported as a 2-year-old known bug —
  [[d:priest#1493297099394257009]] (Bluedolf), [[d:priest#1493310444012834937]].
- **[VE targeting bug, post-patch]** Vampiric Embrace stopped healing non-player targets (warlock
  demons/imps) after the patch, unlike before — [[d:priest#1491868819826938076]] (Zitronenhaze).

## Contested / open questions
- **[Whether Book of Prayer/talents work with same-spell-different-rank]** — resolved NO (see
  1.18.1 changes), but was asked repeatedly before confirmation
  ([[d:priest#1484544480886652929]], [[d:priest#1484547681165512846]], [[d:priest#1484549659878883348]]).
- **[Whether Sigil of the Ancient Accord/"droplet" trinket is BiS for Shadow]** — unresolved;
  community leans toward "yes for other casters, marginal/situational for Shadow priest" due to
  proc restrictions to Mind Blast/Pain Spike only — [[d:priest#1486310112246108211]] (Ydr, low
  observed proc rate over 3 minutes of testing), [[d:priest#1489759396660772985]] (Misandria:
  best on classes that partial-resist more; shadow/smite rarely partial resist) — question
  unanswered definitively.
- **[Whether PoH/Chain Heal proc the Timbermaw Hold "direct heal" trinket set]** — unresolved,
  debated whether Renew/PoH/Rejuvenation/Chain Heal count as "direct heals" for a new healer-set
  bonus; no dev confirmation found in-chunk — [[d:priest#1488100159156912148]] (Kuba),
  [[d:priest#1488103931354812597]] (Lynathel speculation only).
- **[Whether Fortune stat affects wand/bow proc-on-hit effects like Hurricane bow]** —
  unresolved; consensus is Fortune affects item procs but likely not talent procs; no confirmation
  for weapon proc effects specifically — [[d:priest#1486855313608020006]] (Nugent),
  [[d:priest#1486885364143751240]] (Xerq, unconfirmed claim of 10%→12.5% math).
- **[Whether Shadow priest is intentionally left undeveloped]** — recurring, unresolved community
  grievance that Shadow has no dedicated class dev and hasn't received a structural
  rework/AoE/scaling fix despite years of the same complaints —
  [[d:priest#1493687428391637083]] (Eemo, +1: "server will shut down before shadow
  priest ever gets a proper rework/design").
