---
title: "#support - Add option to search open issues on bug tracker"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=10999"
topic_id: 10999
forum_id: 14
forum: "Suggestions"
author: "Niralthas"
author_authority: "player"
posted: "2023-10-18T20:14:00Z"
last_post: "2023-10-19T22:58:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T12:05:56Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# #support - Add option to search open issues on bug tracker

## Post 71985 by Niralthas — 2023-10-18T20:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71985#p71985 | page 1 | era: pre-1.18.1 -->

Hi,

I would like to suggest to add a Discord bot (or Finytin command) which listens to #support for a search query which returns either: number of open issues in bugtracker or if there is one result, return the found issue with URL.

Example of a simple implementation: Code: Select all

```
import discord
from discord.ext import commands
import requests

TOKEN = 'YOUR_DISCORD_BOT_TOKEN'
GITHUB_API_URL = 'https://api.github.com/search/issues'

headers = {
'Authorization': 'token YOUR_GITHUB_TOKEN',
'Accept': 'application/vnd.github.v3+json'
}

bot = commands.Bot(command_prefix='!')

@bot.command()
async def search(ctx, *, query: str):
response = requests.get(GITHUB_API_URL, headers=headers, params={'q': query + ' type:issue'}).json()

if not response.get('items'):
await ctx.send("No issues found with the provided query!")
return

if len(response['items']) == 1:
issue_url = response['items'][0]['html_url']
await ctx.send(f"Found one issue: {issue_url}")
else:
open_issues = sum(1 for item in response['items'] if item['state'] == 'open')
await ctx.send(f"Found {len(response['items'])} issues. {open_issues} of them are open.")

bot.run(TOKEN)
```

## Post 71996 by Akos1896 (Grandmaster of Forum PvP) — 2023-10-18T22:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71996#p71996 | page 1 | era: pre-1.18.1 -->

As a troll shaman I see the voodoo in these lines but having no idea what the spirits mean by this sacred text.

## Post 72223 by Niralthas — 2023-10-19T20:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72223#p72223 | page 1 | era: pre-1.18.1 -->

> **Akos1896 wrote: Wed Oct 18, 2023 10:45 pm**
> As a troll shaman I see the voodoo in these lines but having no idea what the spirits mean by this sacred text.

Ey mon, lemme break it down for ya in da trollish way. Dis here be a ritual to summon a spirit in da Discord realm. When ya chant da '!search' incantation, da spirit be reachin' out to da GitHub spirits to see if dere be any issues lurkin' around.

If da spirit finds nothin', it be tellin' ya straight up, "No issues found with da provided query!" But if it finds just one issue, it be sharin' da sacred link to dat issue. And if dere be many issues, it be countin' how many of dem be still causin' trouble (open) and sharin' dat number wit ya.

Da TOKEN be like da spirit's name, and da GITHUB_API_URL be where it goes to seek da knowledge. Da headers, mon, dey be like da offerings ya give to da spirits to make 'em listen to ya.

So don't ya worry, mon. Dis ain't no dark voodoo. It just be a way to communicate wit da spirits of da GitHub realm. Respect da spirits, and dey'll help ya out!

## Post 72249 by Akos1896 (Grandmaster of Forum PvP) — 2023-10-19T22:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72249#p72249 | page 1 | era: pre-1.18.1 -->

Please write a book about programming languages. This was awesome!

## Post 72253 by Ghola (Patch Note Conspiracy Theorist) — 2023-10-19T22:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72253#p72253 | page 1 | era: pre-1.18.1 -->

turtle wow forum has peaked

