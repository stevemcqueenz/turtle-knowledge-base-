# QA brief: verify every Discord citation in one class's guide pages

Paths: BASE=/home/agent/work/turtle-discord, KB=$BASE/kb. Class pages: $KB/guide/classes/<class>/*.md.

## Why
Reader notes sometimes attached a claim to the wrong message ID (a neighbouring message, the
question instead of the answer, or an unrelated reply). The ID exists, so the automated check
passes, but the citation does not support the claim. Your job: make every citation support
its claim.

## Steps
1. Generate the claim/citation pairs:
   `D=$(mktemp -d); python3 $BASE/pipeline2/cite_pairs.py $KB/guide/classes/<class> > $D/pairs-<class>.md` (use your own mktemp dir; never a shared path)
   Each unit = a bullet/row/paragraph (CLAIM) followed by the full text of every message it cites.
2. Read pairs.md in pieces. For each unit judge each citation: SUPPORTS (the message says or
   clearly implies the part of the claim it is attached to; a quote in the claim must appear in
   the message), or MISMATCH.
3. For every MISMATCH, find the right message:
   - look at neighbours of the cited message: `python3 $BASE/pipeline2/near.py <channel> <id> [n]`
     prints the n (default 8) messages before and after it with IDs;
   - or search the archive: `grep -i '<distinctive phrase>' $BASE/norm/<channel>/messages.jsonl`
     (the claim's quote or key numbers are good search terms);
   - replace the ID in the guide page with the correct one. If no supporting message can be
     found, reword the claim to what the cited message does say, or remove the claim (and say
     so in your report). Never keep an unsupported claim.
4. Also check: numbers/talent points/spell names in the claim match the message; "single source"
   / "contested" marks are consistent with what the messages show.
5. Re-run `python3 $BASE/pipeline2/check_notes.py $KB/guide/classes/<class>/*.md` → bad=0.

Only edit files in $KB/guide/classes/<class>/ (and, if you change a build or rotation, keep
$KB/structured/classes/<class>/*.yaml consistent). Do not restructure pages; fix citations and
the claims attached to them.

## Calculator links
Every published build must carry a working talent-calculator link. If a build shows only a
code for the offline talents.turtlecraft.gg, run
`python3 $BASE/pipeline2/talent_tool.py decode <class> <code>` and add the printed `calculator`
URL as `[Open in talent calculator](<url>)`; confirm the decoded split matches the page.

## Final reply
Four lines: units checked, mismatches found, fixed by re-pointing / reworded / removed.
