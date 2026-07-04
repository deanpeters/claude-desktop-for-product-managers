# Website

The reference layer for `claude-desktop-for-product-managers`: fast lookup, recap, and reinforcement. The interactive course in `course-materials/` is canonical — this site points at the work, it never replaces it.

## Stack

- Astro + Starlight, static output
- Pagefind search comes free with Starlight
- Sidebar groups autogenerate from `src/content/docs/<module-directory>/`

Chosen deliberately: sturdier and lighter than the Next.js + Nextra route most course sites take, and content stays plain MDX a PM could edit.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Content rules

- One directory per module, matching the sidebar groups in `astro.config.mjs`.
- Pages summarize and reinforce lessons; the eight-field lesson files in `course-materials/` remain the source of truth. If the two drift, the site is wrong.

## Deployment

Static hosting on a Dreamhost subdomain: `https://cdesktop.deanpeters.com` (already set as `site` in `astro.config.mjs`). Build locally, then rsync `dist/` up — see `../scripts/deploy.sh`. The server needs nothing but files.
