# Discord backup ingestion

`ingest.py` turns the Turtle WoW Discord backup (one zip or folder per channel, JSON message
dumps plus attachments) into the repository layout, so Discord evidence is read, cited and
validated exactly like forum posts:

| output | content |
|---|---|
| `structured/discord/messages/<channel-slug>[.partN].jsonl` | one record per message (schema in the module docstring and `AGENTS.md` §2) |
| `structured/discord/channels.json` | channel index: ids, category, counts, staff share, date range, files |
| `structured/discord/authors.json` | author index: roles, authority, counts, channels |
| `structured/discord/images.jsonl` | every image attachment with its message context (input for the vision pass) |
| `extracted/discord/<channel-slug>/<YYYY-MM>.md` | readable monthly transcripts; the `<!-- url: ... -->` line under each message is the citation |

```
python3 scrape/discord/ingest.py survey "<backup dir>" --work-dir <scratch>
python3 scrape/discord/ingest.py build  "<backup dir>" --work-dir <scratch> --staff-roles "Turtle WoW Team,Admin,Developer,Game Master,Moderator" --guild-id <id>
python3 scrape/validate.py structured/discord synthesis   # citations resolve
```

Citations: `https://discord.com/channels/<guild>/<channel>/<message>` when the ids are in the dump, otherwise `discord://<channel-slug>/<message-id>`; `scrape/validate.py` resolves both.

`fixtures/` holds a tiny synthetic backup (two channels in two dump shapes) used to test the ingester: `python3 scrape/discord/ingest.py build scrape/discord/fixtures --work-dir /tmp/dc-fixture --guild-id 111` then delete the generated `structured/discord` and `extracted/discord` before committing.

The full workflow (phases, agents, deliverables) is `scrape/prompts/discord-local-agent.md`.
