# Course Architecture

## Course promise

Take a learner from:

"I've heard Claude is powerful, but I don't really know how to use it for product work"

to:

"I can use Claude Desktop to digest context, pressure-test my thinking, prototype concepts, produce delivery artifacts, and take an idea all the way to launch — and I know where my judgment is still the product."

## The narrative lens

The course covers **every element of Claude Desktop**, but never as a feature tour. Each capability is taught at the moment the product narrative needs it: one continuous story — from raw discovery to a launched product — where each module picks up where the last left off. The learner meets Artifacts because they need a prototype, not because Artifacts are next on a syllabus.

### Coverage map

| Claude Desktop element | Where it's taught | Narrative moment |
|---|---|---|
| The three surfaces: chat, Cowork, Claude Code | Module 0 | knowing which room you're standing in |
| Chat, models, Cowork on a folder | Module 0 | getting into the room |
| Projects (home base) | Module 0 | a notebook and rescue line outside the classroom |
| Reading, synthesis, structured output, safe edits | Module 1 | digesting the company's context |
| Web search | Module 2 | market and landscape scan |
| Artifacts (concept prototyping) | Module 3 | something concrete to react to |
| Analysis tool, file creation | Module 4 | delivery artifacts and small data |
| Projects, memory | Module 5 | durable context |
| Skills | Module 5 | repeatable workflows |
| Connectors (MCP) | Module 5 | reaching the team's tools |
| Loops and goals | Module 5 | longer-running work with checkpoints |
| Scheduled tasks / routines | Module 6 | standing agents that keep reporting current |
| Everything combined | Module 6 | taking the product to market |

If a Desktop capability isn't on this map, either add it at its narrative moment or consciously leave it out — no orphaned feature lessons.

## Delivery model

One folder, opened in a Claude Desktop Cowork session. The learner works through lessons in order, on real files, with Claude as both instructor and working partner. `COMPANION_INSTRUCTIONS.md` tells Claude how to behave in that role.

A reference site (`website/`, Astro + Starlight) supports lookup and recap. The interactive track is canonical.

## Modules

### Module 0: Getting set up

- the three Claude surfaces in plain PM English — claude.ai chat, Claude Desktop with Cowork, and Claude Code: what each is for, and how to tell which room you're standing in
- pointing a Cowork session at this folder
- setting up a home-base Project — the learner's notebook and rescue line for whenever they're outside the classroom
- how the course works and how to orient in the materials

Module 0 doubles as the course's safety net: a learner who understands the surfaces and has a home-base Project can always find their way back, no matter how lost they get.

### Module 1: Fundamentals

- reading and synthesizing files without drowning in output
- asking for structured output you can actually use
- making safe, reviewable edits to documents
- verifying results instead of trusting vibes
- small wins that build calibrated confidence

### Module 2: Understanding the problem space

- synthesizing discovery notes and research snippets
- lightweight market and landscape scans
- defining segments and personas
- pains, gains, and jobs-to-be-done
- using a problem framing canvas before any solutioning

### Module 3: Shaping the opportunity

The learn-fast core of the course: low-res idea in, high-res decision out.

- framing the problem crisply
- mapping and choosing among opportunity options
- positioning the idea
- **naming the bet** — the riskiest assumption stated as a testable claim, with an explicit win condition: *"If we ___ for ___ then ___. We know we have succeeded when ___ and ___."*
- **the minimum viable narrative** — six things and nothing more: who the user is, the situation and problem, the riskiest assumption, the win condition, the interaction sequence, what's explicitly excluded. Built to be thrown away.
- **prototyping with Artifacts** — a clickable concept you can react to, no code detour. Brief like a collaborator: describe the goal, not the screens; let the tool propose; correct it at least once.
- **pressure-test and decide** — pass / fail / inconclusive against the win condition, then a real call: go, no-go, or revise and retest. No maybe.

### Module 4: Turning the opportunity into delivery artifacts

- scaffolding a proof-of-concept slice
- defining an epic
- breaking work into stories
- drafting the PRD *after* discovery and design have improved the thinking
- simple data analysis on small datasets
- review loops and quality checks

### Module 5: Advanced workflows

- Projects and memory: giving Claude durable context
- Skills: packaging a repeatable workflow so it runs the same way twice
- connectors: reaching the tools your team already lives in
- loops and goals: giving Claude an outcome and a cadence instead of one prompt at a time
- quality-control patterns and review discipline
- packaging output for teams and stakeholders

### Module 6: Taking it to market (capstone)

One big bundle — messaging, development, deployment, and GTM planning — where everything learned so far compounds on the same product the learner has carried since Module 2:

- from positioning to messaging: message house, value props per persona
- the launch narrative: announcement copy that survives contact with skeptics
- building the demo: a landing page or product demo in an Artifact
- the GTM plan: segments, channels, packaging, launch tiers
- deployment and rollout: phasing, risks, sales and support enablement
- automating the reporting: routines and scheduled tasks — standing agents that keep the PM and stakeholders current without anyone compiling a status deck
- launch review: measurement plan and the post-launch learning loop

This module deliberately reuses the Module 5 toolkit — Skills for repeatable launch assets, connectors to push work into team tools — so the capstone doubles as proof the learner's workflow is real.

## Practice company

A fictional company, built in Phase 1. Requirements:

- broad enough to carry every module
- concrete enough to feel real to working PMs
- invented for this course; not a reuse or echo of any other course's sandbox

## Lesson shape

Every lesson has exactly seven fields:

1. **Objective** — what the learner is trying to do
2. **Why and when** — why this matters to a product manager, and when in real work they'd reach for it
3. **Open these files** — the grounding material
4. **Suggested prompts** — starting points, not scripts
5. **Good result** — what success looks like
6. **Review checklist** — where judgment applies
7. **Extension** — one harder variation for the ambitious
8. **If you're lost** — a copy-paste rescue prompt that re-orients the learner and a fresh Claude session from anywhere, mid-lesson or days later

Two of these fields exist purely for adoption. "Why and when" earns the lesson's place in the learner's real week before asking for effort. "If you're lost" guarantees that no amount of confusion is terminal: every lesson carries its own way back.

## Learning sequence

The course models a sane product workflow:

1. orient in the context
2. synthesize what we learned
3. understand market, segment, and persona
4. explore pains, gains, and jobs-to-be-done
5. clarify the terrain with a framing canvas
6. identify and choose an opportunity
7. position the idea and name the bet — riskiest assumption, explicit win condition
8. scaffold a minimum viable narrative and prototype something concrete enough to react to
9. pressure-test against the win condition and decide: go, no-go, or revise and retest
10. define the proof-of-concept slice, epic, and stories
11. write the PRD only after all of the above improved the thinking
12. turn positioning into messaging, a demo, and a launch narrative
13. plan the go-to-market, rollout, and how you'll know it worked

The spine follows Productside's "Vibe Coding to Learn" arc: low-res demand in, high-res decision out. Confidence isn't evidence — a prototype existing proves nothing until it changes what someone decides.

## The zero-terminal promise

The learner path never requires a terminal, a package manager, or a locally run server. This is a load-bearing constraint, not a preference — the course exists to remove the setup wall, and it must demonstrate its own thesis: Claude Desktop's Artifacts are the PM's interactive surface.

Consequences, decided deliberately (2026-07):

- **No separate app framework** for course interactivity. Server-backed app platforms (Streamlit and kin) were considered and rejected: they reintroduce the setup wall and quietly concede that Artifacts aren't enough.
- Interactivity **inside the course** comes from Artifacts the learner builds or uses.
- Interactivity **on the reference site**, if ever needed (progress checklist, win-condition builder), comes from Astro islands — same stack, static hosting, no server.
- Wanting a richer course UX is a curriculum opportunity first: make the learner build it as an Artifact exercise.

## The graduation path

Claude Desktop is where this course lives, and it deliberately teaches the trade-off it can't escape: a lo-code prototype generates clicks; a coding agent generates evidence — persistence, real state, logs of what users actually did. When a learner's bet needs that grade of proof, the handoff is Claude Code, and the preparation is the same three-file contract idea they've already practiced: context (what we're testing and why), contract (what to build, what to fake, what "done" means), constitution (what overrides everything else). A companion Productside course covers that journey; this course ends by making the learner ready for it.

## Intentional omissions in this bootstrap

- no practice company yet (Phase 1 decision, made deliberately)
- no claimed automation or slash-command runtime that isn't wired up
- the reference site is a scaffold — content stays intentionally light until the lesson model hardens in Phase 2
