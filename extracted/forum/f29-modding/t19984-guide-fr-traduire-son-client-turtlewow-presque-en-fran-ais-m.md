---
title: "[GUIDE FR] Traduire son client TurtleWoW (presque) en français - Méthode Simple"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19984"
topic_id: 19984
forum_id: 29
forum: "Modding"
author: "Svtodmeken"
author_authority: "player"
posted: "2025-06-22T12:49:00Z"
last_post: "2025-10-30T13:36:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T10:38:49Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [GUIDE FR] Traduire son client TurtleWoW (presque) en français - Méthode Simple

## Post 136624 by Svtodmeken — 2025-06-22T12:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136624#p136624 | page 1 | era: pre-1.18.1 -->

This guide can help international players and anyone who wants part of their game in their own language.

---

Salutations !

Après quelques changements de fichiers .MPQ et un peu de chirurgie hexadécimale du WoW.exe via HxD, voici ce que j'ai pu franciser sur TurtleWoW :

![✅](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2705.svg) Voix françaises
![✅](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2705.svg) Cartes et certains lieux minimap
![✅](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2705.svg) Noms de PNJ du jeu de base
![✅](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2705.svg) Noms des objets du jeu de base
![✅](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2705.svg) Textes et objectifs de quêtes du jeu de base

Malheureusement, **tout ne peut pas être traduit** de cette façon. Certains éléments comme l'interface restent en anglais car ne dépendent pas des fichiers .MPQ, et sont à mon avis codés en profondeur dans le client.

 **Voici ce que j'ai pu constater :**
- Boutons et menus : les libellés comme "Main Menu", "Character", "Quest Log"
- Infobulles : les encadrés d'aide qui s'affichent au survol d'un bouton par la souris (ex. : Zoom In/Zoom Out, Backpack (B), etc...)
- Les sorts : que ce soit dans le grimoire ou les barres d'action (noms, descriptions, effets)
- Infos du personnage et des objets : statistiques et types affichées sous forme d’infobulles sous les objets ou dans la fiche de personnage. (ex. : +5 Strength)
Pour mieux visualiser les changements voici quelques images :

| ![Image](https://i.imgur.com/Bu2vo21.jpeg) | ![Image](https://i.imgur.com/oWieLmt.jpeg) | ![Image](https://i.imgur.com/HfyLmbs.jpeg) |
|---|---|---|
| ![Image](https://i.imgur.com/J7cWdZI.jpeg) |
| ![Image](https://i.imgur.com/xBKWHro.jpeg) | ![Image](https://i.imgur.com/IMv8Jjn.jpeg) | ![Image](https://i.imgur.com/GSMFK7X.jpeg) |
| ![Image](https://i.imgur.com/nMmbpo4.png) | ⟵ Objet du jeu de base :[Bottes en peau de tigre](https://www.wowhead.com/classic/fr/item=4942/bottes-en-peau-de-tigre) Objet custom by TurtleWoW : ⟶ [Smashed Azureborn Ring](https://database.turtlecraft.gg/?item=60745) | ![Image](https://i.imgur.com/O2rmD5c.png) |

Si vous souhaitez (presque) franciser votre client comme sur les images et avec les voix FR, je vous met à disposition les étapes à suivre.

 **![⚠️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/26a0.svg) Important :**
- ![⚠️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/26a0.svg)  sachez que ce patch est non officiel et sera annulé par toute mise à jour via le launcher officiel de TurtleWoW. Si vous voulez garder la traduction, **lancez le jeu uniquement via le WoW.exe modifié ou refaites les étapes après chaque mise à jour**.
- **![⚠️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/26a0.svg) Cela implique la modification de fichiers du jeu (cela ne touche pas au code du jeu, juste aux paramètres de langue), soyez attentif !**
- **![⚠️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/26a0.svg) Faites toujours une sauvegarde de votre client avant toute modification.**

---

 **1. Récupérer les fichiers FR (.MPQ)**

Il vous faudra extraire les fichiers suivant depuis le dossier [WoW]\Data d'un client FR 1.12 :

- **patch.MPQ** → pour la carte (minimap, noms des zones)
- **speech.MPQ** → pour les voix française
- **interface.MPQ** → pour les noms de PNJ, objets et quêtes
Copiez-les et remplacez ceux déjà présents dans votre dossier TurtleWoW :
"C:\Games\World of Warcraft\TurtleWoW\Data" par exemple.

---

 **2. Modifier WoW.exe avec HxD**

À ce stade, si vous lancez le jeu, certains textes seront absents ou vides (ex. : textes de chargement, nom de zone au-dessus de la minimap).
Cela est dû au fait que le client cherche les fichiers dans le répertoire **enUS** au lieu de **frFR**.
Comme nous avons remplacé ces fichiers, il n'y a donc plus rien à afficher dans certains cas.

Voici comment corriger ça :

- Faites une **copie de votre WoW.exe** avant modification et renommez-la (ex. : WoW_original.exe ou WoW_backup.exe)
- Téléchargez et installez le logiciel HxD (éditeur hexadécimal gratuit)
- Ouvrez le fichier **WoW.exe** dans HxD
- Appuyez sur **Ctrl + F**, allez dans l’onglet *"Chaîne – Texte"*
- Recherchez : **enUS**
- Vous devriez trouver la séquence suivante à l’offset **00455910** (encadré en rouge sur l'image) : Code: Select all

```
 65 6E 55 53
```

![Image](https://i.imgur.com/LceXdXH.png)
- Remplacez **UNIQUEMENT** cette séquence par : Code: Select all

```
 66 72 46 52
```

![Image](https://i.imgur.com/TkrrKVA.png)
(*enUS → frFR*)
- Sauvegardez et fermez HxD

---

 **3. Lancer le jeu**

Vous pouvez maintenant lancer **WoW.exe** directement (pas via le launcher TurtleWoW !).
Vous pouvez créer vous-même un raccourci et le placer où bon vous semble.
 **![⚠️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/26a0.svg) Rappel : Le launcher de TurtleWoW réinitialisera vos fichiers si vous appuyez sur Update.**

Pour revenir en arrière, supprimez simplement le WoW.exe modifié, puis renommez la copie de sauvegarde que vous aviez mise de côté en WoW.exe.
Ensuite, lancez le launcher TurtleWoW et cliquez sur Update pour restaurer les fichiers officiels.

Voilà !

---

À travers ce guide, je vous propose une **méthode simple, non exhaustive**, pour profiter agréablement du jeu (encore une fois presque) en français sans modifier profondément le client.

Il est destiné à ceux qui veulent **jouer avec les voix, les quêtes, les noms des objets et ceux des PNJ de base**, en attendant une solution de traduction complète.

Pour tous ceux qui hésitaient à nous rejoindre à cause de la barrière de la langue, vous n’avez désormais plus aucune excuse !

J’espère que ce guide vous sera utile ! N’hésitez pas à partager vos retours ou améliorations possibles ci-dessous. ![😉](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f609.svg)

 **En espérant qu'un jour, les développeurs proposeront un vrai patch multilingue avec l’aide de la communauté !** ![🤞](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f91e.svg)

À bientôt sur TurtleWoW !

---

## Post 137235 by Dannic — 2025-06-27T13:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137235#p137235 | page 1 | era: pre-1.18.1 -->

Bonne initiative même si pour ma part j'attend plus avec impatience une intégration complète du français dans Turtle, j'espère au plus tard avec la 2.0.

## Post 139631 by Darknorth — 2025-07-15T17:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=139631#p139631 | page 1 | era: pre-1.18.1 -->

Top merci ! C'est quand même plus immersif.

## Post 139793 by Adraes — 2025-07-16T05:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=139793#p139793 | page 1 | era: pre-1.18.1 -->

Si jamais, vous pouvez utiliser le launcher ET les fichiers en français, il faut juste faire une petite manip' à chaque lancement.

 - Lancez le launcher (en profiter pour mettre à jour des choses, comme les addons par exemples)
 - Quand le bouton PLAY est vert, ne cliquez pas dessus !
 - Ouvrir le fichier data, remplacer les fichiers de twow par les fichiers en français
 - Vous pouvez lancer le jeu en appuyant sur PLAY maintenant, le launcher va lancer le jeux avec les fichier en français :)

Pour gagner du temps :

 - Créée un dossier sur le bureau
 - Y mettre un raccourci pour le fichier data
 - Y mettre un dossier "langues" pour les fichiers à remplacer

 - Dans le dossier "langues", avoir un dossier avec les fichiers en français, et un dossier avec les fichiers en anglais de twow
 - Au lieu de UPDATE et de retélécharger les fichiers en anglais à chaque fois, avant de lancer le launcher, mettre les fichiers anglais dans le dossier data. Comme ça, quand vous lancerez le launcher, les fichiers en anglais seront déjà là, et si il y a une mise à jour, vous pourrez la voir et la faire.
 - Quand tout est bon, ouvrir le dossier "langues", ouvrir le dossier avec les fichiers en français, les mettre dans le dossier data, et enfin appuyer sur PLAY
 - Quand vous fermer le jeu, faire la même manip mais avec les fichiers du dossier "langues" en anglais, comme ça, la prochaine fois, tout sera déjà prêt.

Ca vous épargnes de tout retélécharger à chaque fois, il faut juste faire un glisser déposer des fichiers en français avant de lancer le jeu, et, un glisser déposer des fichier en anglais quand vous ne jouer plus (perso j'oublie tout le temps, à chaque fois je lance le launcher et je vois le bouton UPDATE qui me le rappelle :) ) du coup je ferme le launcher, met les ficher anglais, puis relance pour faire la manip :) J'ai beau avoir une excellente co internet, ça reste plus rapide de faire un transfert de fichier que de télécharger à chaque fois.

Vu que le jeu va avoir une maj dans pas longtemps, et j'imagine que d'après la roadmap, ils ont prévu de lancer la version unreal engine pour Noel, on aura la version du jeu en français AVANT Noel...
On le vois pas, parcequ'on s'en fou un peu, mais sur le launcher, y a de temps en temps des langues qui sont rajouter, quand le launcher est sortie, et c'était pas y a SI longtemps que ça, il n'y avait que l'anglais et le chinois de dispo, maintenant, y a espagnol, portugais, allemand et russe. Vu que j'imagine que c'est lié au dev de la version UE5 en parallèle, la version française officiel de twow ne devrait plus "trop tarder" :)

## Post 157795 by Alex848 — 2025-10-30T09:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157795#p157795 | page 1 | era: 1.18.1-announced-pre-release -->

Bonjour,

Comment Récupère t'on les fichiers FR (.MPQ) ?

En vous Remerciant.

## Post 157827 by Catyngla (Barrens Chat Casualty) — 2025-10-30T13:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157827#p157827 | page 1 | era: 1.18.1-announced-pre-release -->

> **Alex848 wrote: Thu Oct 30, 2025 9:23 am**
> Bonjour,
>
>  Comment Récupère t'on les fichiers FR (.MPQ) ?
>
>  En vous Remerciant.

Comme cela :

> **Svtodmeken wrote: Sun Jun 22, 2025 12:49 pm**
> **1. Récupérer les fichiers FR (.MPQ)**
>
>  Il vous faudra extraire les fichiers suivant depuis le dossier [WoW]\Data d'un client FR 1.12 :
>
> - **patch.MPQ** → pour la carte (minimap, noms des zones)
> - **speech.MPQ** → pour les voix française
> - **interface.MPQ** → pour les noms de PNJ, objets et quêtes

Donc il te faut un client officiel FR...et un vieux, 1.12

