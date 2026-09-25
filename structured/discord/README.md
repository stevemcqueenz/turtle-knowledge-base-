# Discord evidence files

Offline proof for Discord citations used in `synthesis/`, `structured/` and
`behavior/`. Every Discord claim in the KB cites a message as
`[[d:<channel>#<message_id>]]` (e.g. `[[d:mage#<message_id>]]`) and the cited
message must exist verbatim in `evidence-<channel>.jsonl` so the citation is
resolvable without the Discord archive.

## Convention

- Cite as `[[d:<channel>#<message_id>]]`, where `<channel>` is the normalized
  channel directory name (`norm/<channel>/messages.jsonl`) and `<message_id>`
  is the Discord snowflake.
- One evidence file per channel: `structured/discord/evidence-<channel>.jsonl`.
- `python3 scrape/validate.py` resolves every `[[d:...]]` citation against these
  files; an unresolved one counts as a failure, exactly like an unresolved
  `viewtopic.php?p=` forum citation.

## Evidence file schema

One JSON object per line, sorted by message id, deduplicated:

| field | source |
|-------|--------|
| `id` | message snowflake (string) |
| `channel` | normalized channel name |
| `ts` | ISO-8601 timestamp |
| `author` | display name |
| `author_id` | author snowflake |
| `content` | message text, verbatim |
| `attachments` | list of `_assets/...` paths |
| `reactions` | reaction count |
| `pinned` | boolean |

`is_bot`, `embeds` and `reply_to` are not stored (not needed to verify a quote);
they remain available in the read-only source `norm/<channel>/messages.jsonl`.

## Rebuild

From `/home/agent/work/turtle-discord`:

```sh
# Resolve all citations found under kb/ and staging/ (default), or given paths.
python3 pipeline/collect_evidence.py
python3 pipeline/collect_evidence.py kb/synthesis/classes

# Prove the tool works end to end on a synthetic citation, then clean up.
python3 pipeline/collect_evidence.py --self-test

# Verify every citation in the KB still resolves.
cd kb && python3 scrape/validate.py
```

The collector never edits `norm/`; it only reads it. Ids that cannot be resolved
are printed and the process exits non-zero.
