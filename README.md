# Portfolio — Alexis Brettes

Single-page portfolio built with SvelteKit (Svelte 5), Tailwind CSS v4 and TypeScript,
deployed to GitLab Pages.

## Getting started

```sh
npm install
npm run dev
```

## Editing content

All content lives in `src/lib/data/` — you should never need to touch components to update text:

| File | What it controls |
| --- | --- |
| `site.ts` | Page title, SEO description, navigation sections |
| `profile.ts` | Name, role, tagline, about paragraphs, socials, languages, passions, assets |
| `education.ts` | Education timeline |
| `experience.ts` | Jobs and internships |
| `skills.ts` | Skill groups and tags |
| `projects.ts` | Project cards |
| `career.ts` | Past / present / future career stages |
| `mobility.ts` | Exchange targets and application kit |

Static files (CV, article PDFs) go in `static/files/`.

## Build & deploy

```sh
npm run check   # type-check
npm run build   # static output in build/
npm run preview # serve the build locally
```

`.gitlab-ci.yml` deploys the `build/` directory to GitLab Pages on every push to the
default branch. The base path is derived automatically from `CI_PAGES_URL`, so the site
works both at `https://<user>.gitlab.io/<project>/` and locally.
