---
title: "GitAddonsManager"
url: "https://turtle-wow.fandom.com/wiki/GitAddonsManager"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-01-09T17:33:08Z"
fetched: "2026-09-10T07:38:51Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# GitAddonsManager

Git based manager for Turtle WoW add-ons.

This application exclusively manage git repositories, add-ons not containing a git repositories will be ignored. All add-ons hosted on Gitlab, Github and likes are compatible but must be cloned through git (if you don't know what that means, you will need to re-download your add-ons through this app).

## Download
- [**Download for Windows x64**](https://gitlab.com/woblight/GitAddonsManager/-/jobs/artifacts/master/download?job=Win64)
- [**Download for Linux (flatpak)**](https://gitlab.com/woblight/flatpak-repo/-/raw/master/GitAddonsManager.flatpakref?ref_type=heads&inline=false)
- [**Source code (zip)**](https://gitlab.com/woblight/GitAddonsManager/-/releases)

## What does it do?
- Download and update add-ons from git repositories such us GitLab and GitHub. It doesn’t require login.
- Repair add-ons files.
- Delete add-ons.

## What does it *NOT* do?
- It does not search for add-ons.
- It does not detect existing add-ons which are not downloaded though a git client (they’re missing the .git folder).
- It does not handle add-ons relying on <code>.pkgmeta</code> files for packing.

## Preview
