# PLAN.md

Build roadmap. Update as phases complete — this is the map, not a museum piece.

## Goal

A publishable, Claude Desktop-native course for Product Managers: an interactive Cowork experience, realistic exercises, and a reference layer.

## Milestone: v0.1 — "a stranger can start"

**Definition of done:** a PM with zero setup knowledge can download this repo, point a Cowork session at `course-materials/`, and complete Module 0 and all of Module 1 against the real practice company — with working exercise files, honest checkpoint gating, and no dead links. The site builds clean and covers what's written.

Sequenced steps:

1. **Practice company** (Phase 1, the blocker for everything) — company overview, product overview, personas, competitive landscape, and the HiPPO's demand memo. *Gate: Dean approves the company concept before docs are written — client-IP and distinctness check.*
2. **Exercise files for Modules 0–1** — discovery notes and supporting raw files, all derived from the approved company.
3. **Write Module 0 (0.1–0.3) and finish Module 1 (1.2–1.4)** — lesson 1.1 already exists as the format exemplar.
4. **Real learner pass** — Dean (or a volunteer PM) walks Module 0 → 1 in an actual Cowork session; capture friction; refine lessons and `COMPANION_INSTRUCTIONS.md`; lock the lesson format.
5. **Site sync** — install deps, verify the build, add reference pages for every written lesson, fix links. Add real screenshots (Mac and Windows) to the Start Here page — the deep-end audience needs pictures, and only a human with both machines can capture them.
6. **Front-door alignment and tag** — README/status honesty pass, decide public vs. private, tag `v0.1`.

Explicitly **not** in v0.1: Modules 2–6 lesson content, site deployment/domain, instructor notes, distribution polish. The Module 2→3 learn-fast spine is the headline of v0.2.

Open decision for Dean: the company concept (step 1 gate). Decided 2026-07-04: the repo is public before v0.1, at github.com/deanpeters/claude-desktop-for-product-managers, with the README carrying the early-access disclosure.

## Phase 0: Bootstrap (current)

- [x] Root contracts: README, CLAUDE.md, CONSTITUTION, PLAN
- [x] Course architecture and module skeletons (module-0 through module-6)
- [x] Companion instructions for Claude-as-instructor
- [x] Git initialized, first commit
- [x] Reference-site scaffold: Astro + Starlight, one overview page per module

## Phase 1: Practice company

Invent a fictional company from scratch — credible to working PMs, broad enough to carry the full arc from discovery through launch (Modules 0–6), and not an echo of any fictional company used in another course we publish (verifying that is part of the concept gate below). Output: company overview, product overview, personas, competitive landscape in `course-materials/company-context/`.

The company docs should plant a HiPPO — a senior stakeholder with a bloated, certain, plausible-sounding demand ("build me a dashboard that shows everything"). Not evil, just certain. That demand is the cold open the learner meets in Module 2 and learns to refuse, narrow, and test through Modules 3–4. Design the company so the demand feels inevitable.

## Phase 2: Harden one complete path

- Write one lesson end-to-end with all supporting exercise files
- Walk it as a learner in a real Cowork session
- Refine the lesson shape based on actual friction, then lock the format

## Phase 3: Fill the curriculum

- Complete modules 0–6 against the locked format
- Build exercise bundles: discovery notes, research snippets, small datasets, draft PRDs, strategy docs
- Add instructor-facing notes where a lesson benefits from facilitation

## Phase 4: Reference layer and publishing

The reference surface is decided: `website/`, built on Astro + Starlight (static output, Pagefind search) — deliberately not the Next.js + Nextra route most course sites take.

Hosting is decided too: static files on a Dreamhost subdomain, **cdesktop.deanpeters.com** — no Node on the server, build locally and rsync `dist/` up via `scripts/deploy.sh`. Later nicety: a GitHub Action that deploys on push to main.

- [x] Set the production `site` URL in `astro.config.mjs`
- [x] Deploy script (`scripts/deploy.sh`)
- [ ] Create the subdomain in the Dreamhost panel and run the first deploy
- Sync lesson content into reference pages as lessons land (one directory per module, matching the sidebar)
- Style the homepage
- Distribution: "Get the course" is in the README (ZIP download, zero-terminal); revisit polish at v0.1

## Phase 5: Launch readiness

- Full learner pass from zero on a clean machine
- QA links, prompts, and setup steps
- Launch assets

## Current recommendation

Prove the Module 2 → Module 4 spine first (synthesize → frame → choose → position → prototype → epic/stories → PRD). If that path feels smooth in Cowork, everything else is decoration.
