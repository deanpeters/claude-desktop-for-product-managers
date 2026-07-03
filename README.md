# claude-desktop-for-product-managers

An interactive course that teaches Product Managers how to use Claude Desktop as a real working partner — on real files, with real judgment, producing real artifacts.

This repository is a clean-room build: its own structure, copy, examples, practice company, and exercises. It shares a delivery pattern with sibling courses but no content.

## What this repo is for

Two jobs:

1. Give Product Managers a hands-on way to learn Claude Desktop by doing actual product work — not by watching demos.
2. Publish reference material that supports the interactive course with fast lookup guides.

The audience is smart, capable people who are not full-time programmers and may never open a terminal. The goal is not "teach PMs to code." The goal is "help PMs use Claude Desktop well enough to think better, move faster, and ship stronger artifacts."

## Why Claude Desktop

Claude Desktop meets PMs where they already work:

- **Cowork mode** operates directly on a folder of files — no git, no CLI, no setup wall.
- **Artifacts** turn "prototype something you can react to" into a native step, not a coding detour.
- **Projects and memory** make repeatable, team-shaped workflows possible.
- **Skills and connectors** reach the tools PMs already live in.

The course leans into those strengths instead of pretending the terminal is the point.

## Get the course

You need two things: the Claude Desktop app, and a Claude account on a plan that includes Cowork. That's the whole prerequisite list — no terminal, no git, no installs beyond the app itself.

1. Download this repo as a ZIP (the green **Code** button → **Download ZIP**) and unzip it somewhere you'll find again. Cloning works too, but it's never required.
2. Open Claude Desktop and point a Cowork session at the unzipped `course-materials/` folder.
3. Say: *"I'm starting the course — read COMPANION_INSTRUCTIONS.md and take me to Module 0."*

The reference site lives at [cd4pm.deanpeters.com](https://cd4pm.deanpeters.com) for lookup and recap — but the folder in front of you is the course.

Each lesson states an objective, the files to open, prompts to try, what a good result looks like, and where human judgment still matters.

## Repository structure

```text
claude-desktop-for-product-managers/
├── README.md                 — this file
├── CLAUDE.md                 — operating contract for Claude sessions in this repo
├── CONSTITUTION.md           — guardrails: clean-room, audience, teaching principles
├── PLAN.md                   — build roadmap and current status
├── docs/
│   ├── START_HERE.md         — reading path for contributors
│   └── course-architecture.md — modules, sequence, lesson shape
├── course-materials/
│   ├── README.md
│   ├── COMPANION_INSTRUCTIONS.md — how Claude should behave as course companion
│   ├── lesson-modules/       — module-0 through module-6
│   ├── company-context/      — practice company materials (Phase 1)
│   └── exercises/            — raw files learners work against
└── website/                  — reference site (Astro + Starlight, static)
```

## Current status

Initial bootstrap. Root contracts, course architecture, module skeletons, and the reference-site scaffold (Astro + Starlight) exist. The practice company and full lesson set do not — see `PLAN.md`.
