# Jev review brief: fix the citations TypeSafe Jev flagged (one class or page group)

Paths: BASE=/home/agent/work/turtle-discord, KB=$BASE/kb-integrate (do NOT commit).
Input: `$BASE/staging/jev_review/<group>.jsonl`: one flagged claim/citation pair per line, from
`tools/discord-pipeline/jev_audit.py` (TypeSafe Jev, System One). Fields:
- `file`, `section` (heading), `claim` (the sentence the citation is attached to), `channel`, `id`
- `relation` (supports | contradicts | says_nothing) + `relation_conf`
- `unserious` = probability that the cited message is a joke, sarcasm, speculation, or retracted
- `suggest` = the neighbouring message Jev judged best supports the claim (or "none"), plus
  `suggest_conf` and `suggest_text`

Jev is a fast screener, not the judge: **you decide each case** by reading the evidence.
Tools: `python3 $BASE/pipeline2/show.py <channel> <id>...` (full message text),
`python3 $BASE/pipeline2/near.py <channel> <id> [n]` (neighbours with reply links),
`grep -i '<phrase>' $BASE/norm/<channel>/messages.jsonl` (search).

## For each flagged pair
1. Read the claim in its page (find it in `file`) and the cited message (with neighbours).
2. Decide:
   - **Actually supported** (Jev false alarm, e.g. a short answer whose question is nearby):
     leave it; optionally add the question/answer pair as a second citation if clearer.
   - **Wrong message, right idea** — the `suggest` message (or another you find) supports it:
     re-point the ID (the replacement must actually support the claim).
   - **Partly supported**: trim the claim to what the evidence says, or add the missing
     supporting citation.
   - **Unsupported**: reword to what the message does say, or remove the claim. Never keep an
     unsupported claim.
   - **Unserious (joke, sarcasm, speculation, retracted):** if the message is a joke or retracted,
     remove the claim or replace it with the author's correction; if it is speculation, label it
     as such ("players speculated…") or drop it.
   - **Contradicts:** if the message says the opposite, fix the claim; if sources genuinely
     disagree, mark "**Contested:**" with both sides cited.
3. Keep edits minimal; keep page structure; if a change alters a build/rotation/number, keep the
   matching `$KB/structured/classes/<class>/*.yaml` consistent.

## Finish
`python3 $BASE/pipeline2/check_notes.py <edited files>` → bad=0. Write
`$BASE/staging/jev_review/<group>-result.jsonl` (one line per input pair: `{file, id, action:
kept|repointed|trimmed|reworded|removed|contested, new_id?, note}`) and reply in 4 lines:
counts per action, Jev false-alarm rate you observed, notable fixes.
