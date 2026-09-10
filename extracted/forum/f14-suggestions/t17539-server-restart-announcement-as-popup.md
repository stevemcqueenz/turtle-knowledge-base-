---
title: "Server restart announcement as popup"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=17539"
topic_id: 17539
forum_id: 14
forum: "Suggestions"
author: "Tomiko23"
author_authority: "player"
posted: "2025-02-12T10:33:00Z"
last_post: "2025-02-14T18:55:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T11:37:12Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Server restart announcement as popup

## Post 119710 by Tomiko23 — 2025-02-12T10:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119710#p119710 | page 1 | era: pre-1.18.1 -->

Hello, I would like to propose that **server restart** would be **announced as popup window**.

Ideally to trigger error message or warning message that would appear out of chat window and would need to be acknowledged by clicking Okay by Player to disappear.

Something like this,

![Image](https://i.imgur.com/JeJPNQP.jpeg)

just  with different text that would announce us that server will be restarted in 5 minutes and than second one with 1 minute announcement

 *It happens to me frequently that I miss system announcement messages before restart and it usually ends with my death as I am in combat during that restart.*

Thank You in advance :)

*Last edited by Tomiko23 on Wed Feb 12, 2025 10:57 am, edited 1 time in total.*

## Post 119711 by Tomiko23 — 2025-02-12T10:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119711#p119711 | page 1 | era: pre-1.18.1 -->

I dont know if that makes some sense or not, but I explored little with ChatGPT and here is what was suggested to me how this could be achieved on server side:

---
Modify the Server Code to Force a Pop-up Error in WoW 1.12.1
Since you control the server, you can modify the core to send an error-style message to all players. This requires editing the server’s C++ source code if you're using Mangos, TrinityCore, or similar.

 **Step 1: Identify How to Send an Error Pop-up**
World of Warcraft client uses the SendNotification and SendPacket functions to send messages to players.
However, chat announcements are not enough—we need to trigger a UI error pop-up.

Blizzard uses a special opcode for UI error messages (*SMSG_MESSAGECHAT or SMSG_NOTIFICATION*). We can use that to force a warning dialog on all clients.

 **Step 2: Modify the Server Code to Send an Error Message**
You’ll need to modify the server’s source code. Open your server core source (e.g., Mangos or TrinityCore) and find the GM command handler file.

![🔹](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f539.svg) File to edit:

Mangos-based servers: src/game/Commands/Level3.cpp or src/game/ChatHandler.cpp
TrinityCore: src/server/game/Chat/Commands/ChatCommand.cpp
![🔹](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f539.svg) Find or Add a New GM Command:

Look for .announce or similar commands and add this function:

Code: Select all

```
void Command_ForceErrorPopup(Player* player, const char* message)
{
if (!player)
return;

WorldPacket data(SMSG_NOTIFICATION, strlen(message) + 1);
data << message;
player->GetSession()->SendPacket(&data);
}
```

This function forces a pop-up notification on a single player.

 **Step 3: Add a GM Command to Trigger the Pop-up for Everyone**
Modify your GM command handler to send the error message to all online players:

Code: Select all

```
bool HandleServerWarningCommand(ChatHandler* handler, const char* args)
{
if (!*args)
return false;

std::string warningMessage = "SERVER RESTART: " + std::string(args);

// Loop through all online players and send the popup
SessionMap sessions = sWorld.GetAllSessions();
for (SessionMap::iterator itr = sessions.begin(); itr != sessions.end(); ++itr)
{
if (Player* player = itr->second->GetPlayer())
{
Command_ForceErrorPopup(player, warningMessage.c_str());
}
}

return true;
}
```

 **Step 4: Register the GM Command**
Find the list of commands and add a new one for triggering the error:

Code: Select all

```
static ChatCommand ServerCommandTable[] =
{
{ "warning", SEC_GAMEMASTER, false, &HandleServerWarningCommand, "", NULL },
{ NULL,       0,             false, NULL,                       "", NULL }
};
```

Now, a GM can type this command in the console to send an error pop-up:

Code: Select all

```
.server warning
```

The server will restart in 10 minutes. Please log out safely!

 **Step 5: Recompile & Test**
Recompile your server (depends on your setup; usually make && make install).
Restart the server.
Log in as a GM and test the command:
Code: Select all

```
.server warning Maintenance in 5 minutes! Finish your quests!
```

![✅](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2705.svg) Expected Result: Every online player sees an error pop-up that must be dismissed manually before they continue playing.

## Post 119975 by Twinklefairy — 2025-02-14T18:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119975#p119975 | page 1 | era: pre-1.18.1 -->

Seems more like an addon thing doesn 't it?

