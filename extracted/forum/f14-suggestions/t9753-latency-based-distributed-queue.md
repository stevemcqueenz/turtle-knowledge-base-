---
title: "Latency-based distributed queue"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=9753"
topic_id: 9753
forum_id: 14
forum: "Suggestions"
author: "Darrakus"
author_authority: "player"
posted: "2023-09-13T15:57:00Z"
last_post: "2023-09-13T15:57:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T12:09:20Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Latency-based distributed queue

## Post 63750 by Darrakus — 2023-09-13T15:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=63750#p63750 | page 1 | era: pre-1.18.1 -->

Hello,

in order to give everyone from every region an equal chance to play the game, i propose the following change to the queue system:

Available player slots should be divided into four buckets defined by latency, each consisting of 2500 slots:
Bucket 1 for players with a latency of less than or equal to 75 ms
Bucket 2 for players with a latency between 76 and 150 ms
Bucket 3 for players with a latency between 151 and 225 ms
Bucket 4 for players with a latency over 225 ms

If the server has its capacity filled by 75% or higher (7500/10000 players), all latencies should be measured in-game (and in-queue) and the occupied slots counted. The bucket the player has been assigned to will be hidden to avoid manipulation and may be reassigned with further latency measurements.

Should the joining player be assigned to a bucket that is full, they will be queued for this specific bucket. The queue number still reflects the position in the entire queue (that means among all waiting players), therefore the displayed queue number does not reflect the queue number in the bucket.

Should the joining player be assigned to a bucket that is not full, they will be able to join immediately unless the server reached full capacity. In that case, they are to be handled as if their assigned bucket is full.

