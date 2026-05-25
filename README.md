# Personal Website

This repository contains a lightweight personal website built with Next.js,
TypeScript, Tailwind CSS, and Shadcn-compatible styling.


## Quickstart

Run commands from `frontend/`.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.


## Pages

- Home: `frontend/src/app/page.tsx`
- Projects: `frontend/src/app/projects/page.tsx`


## Frontend Structure

The frontend uses the Next.js App Router.

```text
frontend/
|-- public/
|   |-- headshot.jpg
|   `-- resume_short.pdf
|-- src/
|   |-- app/
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- page.tsx
|   |   `-- projects/
|   |       `-- page.tsx
|   |-- components/
|   |   |-- photos/
|   |   |-- projects/
|   |   `-- ui/
|   `-- lib/
|       `-- utils.ts
|-- resume/
|   |-- Makefile
|   `-- resume_short.tex
```

- `frontend/src/app/`: route files, layout, and global styles.
- `frontend/src/components/`: reusable photo, project, and UI components.
- `frontend/src/lib/`: shared frontend utilities.
- `frontend/public/`: static assets served directly from the site root.
- `resume/`: LaTeX resume source and local build target.

Files in `frontend/public/` are available by path. For example,
`frontend/public/profile.jpg` is served at `/profile.jpg`.


## Commands

- `pnpm dev` starts the local development server.
- `pnpm build` builds the production site.
- `pnpm lint` runs ESLint.
- `pnpm typecheck` runs TypeScript checks.
- `pnpm format:check` checks formatting.
- `pnpm format` formats frontend files.
- `make -C ../resume build` compiles `resume/resume_short.tex` to
  `frontend/public/resume_short.pdf` when run from `frontend/`.


## Resume

The resume source lives at `resume/resume_short.tex`. The generated PDF is
served from `frontend/public/resume_short.pdf` and is linked from the navbar.

From the repository root:

```bash
make -C resume build
```


## Static Assets

Use `frontend/public/` for files that should be downloaded or displayed by the
browser without being imported into code.

Examples:

- Profile photo
- Project screenshots
- Research PDFs
- Resume PDF
- Static icons


## Data

There is no backend and no database. Page content currently lives directly in
the relevant route files.


## Shadcn

Shadcn components are generated only when needed.

From `frontend/`:

```bash
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button card input form
```

Add components incrementally instead of generating a large UI set up front.
