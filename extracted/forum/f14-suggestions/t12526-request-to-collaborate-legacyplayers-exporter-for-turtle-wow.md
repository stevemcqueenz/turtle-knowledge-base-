---
title: "Request to Collaborate: LegacyPlayers Exporter for Turtle WoW"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=12526"
topic_id: 12526
forum_id: 14
forum: "Suggestions"
author: "Niralthas"
author_authority: "player"
posted: "2024-01-02T06:06:00Z"
last_post: "2024-04-14T05:43:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T11:54:33Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Request to Collaborate: LegacyPlayers Exporter for Turtle WoW

## Post 83395 by Niralthas — 2024-01-02T06:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83395#p83395 | page 1 | era: pre-1.18.1 -->

Hello Turtle WoW,

I hope this message finds you well. I am Niralthas, the maintainer of LegacyPlayers, and I wanted to reach out to discuss the potential benefits of integrating our LegacyPlayers Exporter with the Turtle WoW Private Server project.

LegacyPlayers v4 has always been committed to supporting private server projects like yours by providing a reliable and customizable solution for managing player data. In fact, it was an idea from the team that sprouted the rejuvenation of <https://www.legacyplayers.com/>. At this moment we're at a crossroads where proven recent stability improvements and impactful infrastructure changes meet the release of several large features of which the biggest one is support for Turtle WoW 1.17.1's custom content.

I'd like to highlight some of the key advantages of using LegacyPlayers Exporter for your server. If you prefer a video summary: here is Shino himself, the original author, making my case for me better than I ever could:
[embed: https://www.youtube.com/embed/xMIu30afqR0?start=153]

 *More info: [https://github.com/YamaYAML/LegacyPlaye ... /Exporter/](https://github.com/YamaYAML/LegacyPlayersV4/raw/main/Exporter/)*

![Image](https://github.com/YamaYAML/LegacyPlayersV4/raw/main/Exporter/LP-Export-Functionality.png)

 **Player Data Control:** With LegacyPlayers, your players will have fine-grained control over their data. They can give or withdraw consent, modify or delete data, and choose which specific information is uploaded. This ensures that players have control over their own data.

 **Easy Configuration:** Our open-source exporter is designed to be easy to configure and install as a Docker container. You won't need to spend excessive time on coding your own exporter; instead, you can quickly set up and use our solution.

 **Open-Source:** LegacyPlayers Exporter is completely open-source, providing transparency and assurance that the application is not malicious. You can trust that your players' data will be handled with the utmost security and integrity.

 **Improved Service Quality:** By integrating LegacyPlayers, your players will have easy and detailed access to an armory, PVE, and PVP logs. This will significantly enhance the quality of your service, as players can access comprehensive character data effortlessly.

 **Data Management**: LegacyPlayers Exporter makes it easy to keep player data up to date, delete or modify it, and maintain a historical record of your players' character developments.

 **Detailed Data:** With LegacyPlayers, you can provide more detailed data that might not be accessible through player uploads alone. This added depth of information can enrich the gaming experience for your players.

 **Player Convenience:** Players will be able to use LegacyPlayers' armory, PVP, and PVE log viewer as a service provided by your server. This familiar interface allows them to access their character data from anywhere.

By collaborating with LegacyPlayers and integrating our Exporter into your project, you can ensure that player data is managed securely and efficiently. You retain full control of the data while offering your players a seamless experience.

There are no downsides to this collaboration. It's a win-win situation that empowers you to take control of the data while enhancing your players' gaming experience.

If you are interested in exploring this opportunity further or have any questions, please don't hesitate to contact me via Discord. You can find my contact details in the footer of this message.

Thank you for considering this collaboration. I look forward to the possibility of working together more to provide a better gaming experience for Turtle WoW players.

Best regards,
Niralthas (LegacyPlayers Maintainer)

<https://discord.gg/YPmdNjSQmG>

Please let me know if you would like me to make any adjustments or if there's anything else I can assist you with regarding this forum post.

*Last edited by Niralthas on Sun Jan 14, 2024 10:17 pm, edited 1 time in total.*

## Post 83577 by Niralthas — 2024-01-03T23:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83577#p83577 | page 1 | era: pre-1.18.1 -->

Also with thanks to Zaas for helping with first-line netops administration and a shameless bump. <3 The core hooks for VMaNGOS (LP-World Plugin) are also available. The impact on performance I have measured is less than one would expect.

## Post 84725 by Niralthas — 2024-01-14T21:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84725#p84725 | page 1 | era: pre-1.18.1 -->

Last try with a bump.

## Post 84726 by Niralthas — 2024-01-14T21:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84726#p84726 | page 1 | era: pre-1.18.1 -->

And others within the Community; please feel free to share your thoughts on this as well.

## Post 84734 by Queenoona (Barrens Chat Casualty) — 2024-01-14T22:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84734#p84734 | page 1 | era: pre-1.18.1 -->

LegacyPlayers having access to better and accurate logging seems like a benefit for both players and the Developers. By having better logging ability players can more easily provide feedback and have data to add to their input.
Additionally it has been shown recently on the Discord that its possible to deliver more information to players via the Combatlog that could also help with this, however if the Devs don't wish to do that, securely providing the same data to legacyplayers via this feature could be very useful.

Of all the jank that happens with the 1.12 client the logging is one of the major QoL things i would like to see improved. It helps players improve and understand things better, having LegacyPlayers already is greatly helpful so I don't see a reason why it shouldn't be made better with this tool.

If the Turtle Team doesn't plan on collaborating with this I would be curious to know why, even though it is not my place.

## Post 84747 by Niralthas — 2024-01-15T00:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84747#p84747 | page 1 | era: pre-1.18.1 -->

Just spoke with devs and it's clear to me why this is a lower priority task and that's understandable and fully respect that. When there's room, I'll look into it with the right contact. Thanks Turtle ![❤️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2764.svg)

## Post 92655 by Sleeplust (Patch Note Conspiracy Theorist) — 2024-04-14T05:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92655#p92655 | page 1 | era: pre-1.18.1 -->

Ishnu'dal'dieb. The peculiar incident was that I encountered a blue screen glitch, which had not been seen on my own PCs for many years, while I was using the TWOW folder downloaded from "legacyplayers.com" to play HC on 13 April, 2024. Fortunately, I was combating with a low level mob and my character is sound. The GM later recommended that I change my password.

I currently relate that rare glitch to the folder I downloaded from the link "<https://legacyplayers.com/twmoa_1171.zip>". I'm not complaining as I am not sure about my speculation. Consider this a glitch report.

