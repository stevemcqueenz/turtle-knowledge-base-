#!/usr/bin/env bash
# regroup notes/<channel>/*.md into topics/<channel>/<nn-topic>.md
ch=$1; B=/home/agent/work/turtle-discord; out=$B/topics/$ch; mkdir -p $out
i=0
while IFS= read -r h; do
  i=$((i+1)); slug=$(printf '%02d-%s' $i "$(echo "$h" | tr 'A-Z' 'a-z' | tr -cs 'a-z0-9' '-' | sed 's/-$//')")
  python3 $B/pipeline2/gather_section.py "$h" "$out/$slug.md" $ch >/dev/null
done <<'H'
Experts observed
1.18.1 changes
Spec viability
Talent builds
Leveling
Rotation: single target
Rotation: AoE
Stats, caps, weights
Gear, BiS
Enchants, imbues
Consumables
Cooldowns, resources
Tanking specifics
Healing specifics
Dungeons & raids
PvP
Macros, addons
Races, professions
Bugs & quirks
Contested
H
du -ch $out/*.md | tail -1; ls $out
