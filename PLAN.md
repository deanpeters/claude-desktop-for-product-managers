# PLAN.md

Build roadmap. Update as phases complete — this is the map, not a museum piece.

## Goal

A publishable, Claude Desktop-native course for Product Managers: an interactive Cowork experience, realistic exercises, and a reference layer.

## Phase 0: Bootstrap (current)

- [x] Root contracts: README, CLAUDE.md, CONSTITUTION, PLAN
- [x] Course architecture and module skeletons (module-0 through module-6)
- [x] Companion instructions for Claude-as-instructor
- [x] Git initialized, first commit
- [x] Reference-site scaffold: Astro + Starlight, one overview page per module

## Phase 1: Practice company

Invent a fictional company from scratch — credible to working PMs, broad enough to carry the full arc from discovery through launch (Modules 0–6), and distinct from every adjacent course's sandbox (including OrbitOps and the field guide's company). Output: company overview, product overview, personas, competitive landscape in `course-materials/company-context/`.

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

- Sync lesson content into reference pages as lessons land (one directory per module, matching the sidebar)
- Set the production `site` URL in `astro.config.mjs`, style the homepage, prepare deployment
- Prepare distribution: how a PM actually gets this folder onto their machine

## Phase 5: Launch readiness

- Full learner pass from zero on a clean machine
- QA links, prompts, and setup steps
- Launch assets

## Current recommendation

Prove the Module 2 → Module 4 spine first (synthesize → frame → choose → position → prototype → epic/stories → PRD). If that path feels smooth in Cowork, everything else is decoration.
