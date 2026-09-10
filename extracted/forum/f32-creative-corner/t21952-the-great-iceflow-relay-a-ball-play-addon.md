---
title: "The Great Iceflow Relay - A ball play addon"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21952"
topic_id: 21952
forum_id: 32
forum: "Creative Corner"
author: "Morkahja"
author_authority: "player"
posted: "2025-09-17T16:22:00Z"
last_post: "2025-09-17T16:22:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T10:47:33Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# The Great Iceflow Relay - A ball play addon

## Post 152109 by Morkahja (Barrens Chat Casualty) — 2025-09-17T16:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152109#p152109 | page 1 | era: pre-1.18.1 -->

Hi yall,
Recently I found myself developing a relay ball game add-on for turtle, a simple relay with 4 checkpoints on Iceflow Lake in Dun Morogh, starting and finishing at the landing stages of brewnal village.

The reason I created this addon is because I love throwing the ball in wow but i got a bit bored since there is nothing more to it than just passing it back and forth.

I am new to creating addons and not very good at coding, so I am using AI to create my scripts. That means it's all a bit rudimentary, using mostly chat-commands but I think it's a cute add-on for those who like to do rp activities and have a little fun with the ball.
The goal in this game is to pass the ball as many times as possible, keeping the ball as short as possible in the inventory, while staying a long distance from each other and running from checkpoint to checkpoint together.

SO, what it does:

There are 6 checkpoints, one Start, 4 in between and one Finish checkpoint. The location's coordinates can be seen in the chat by typing “/iceflow checkpoints”, the players can also move to a checkpoint and type “/iceflow check” to see if they are in a checkpoint or not, so they can find the checkpoints and memorize the locations in preparation for the game.

The players arm the relay with "/iceflow ready", signaling the group that they are ready.
Stepping in the starting point, the Player starts the relay, a group message is sent to signal everyone that the player started.

The players then collect points, called Iceflow Shards, every time they catch the ball and once on each checkpoint.

There is a penalty for keeping the Ball too long in the inventory as well as for being too close to the other player(target must be farther than 28yards).

After running to all the checkpoints and then to the Finish checkpoint the addon sends a message to the groupchat with a summary of the individual players performance, that is the Iceflow Shards(points) minus the Penalty.

The players can type “/iceflow end” to disarm the addon, also “/iceflow pos” will show them their coordinates, “/iceflow ballcheck” will tell them if they have a leather ball in the inventory.

The game is meant to be played in pairs, but can be played with any number of players successfully as long as the ball is passed as quick as possible, for example three players can pass two or even three balls around and run in a triangle.

Since it's a bit of a pickle to find the checkpoints I fixed a marked image of the route so players have it easier to find the checkpoints and memorize them.

Well, I wish yall a wonderful time in Azeroth and may you have lots of fun playing ball!
You can find the addon in my GitHub repository and install it via the launcher with this link:
<https://github.com/Morkahja/TheGreatIceflowRelay>

![Image](https://i.imgur.com/rOi9gRO.png)

