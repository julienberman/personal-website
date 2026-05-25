# Directory Structure

This file provides the high-level tree for the repository.

```text
personal-website/
|-- AGENTS.md
|-- README.md
|-- .github/
|   `-- workflows/
|       `-- ci.yml
|-- docs/
|   |-- commands.md
|   |-- style.md
|   `-- architecture/
|       |-- data.md
|       |-- decisions.md
|       `-- directory_structure.md
|-- frontend/
|   |-- Dockerfile
|   |-- package.json
|   |-- tsconfig.json
|   |-- postcss.config.mjs
|   |-- next.config.ts
|   |-- public/
|   |   |-- headshot.jpg
|   |   `-- resume_technical.pdf
|   `-- src/
|       |-- app/
|       |   |-- globals.css
|       |   |-- layout.tsx
|       |   |-- page.tsx
|       |   `-- projects/
|       |       `-- page.tsx
|       |-- components/
|       |   |-- photos/
|       |   |   `-- photo_card.tsx
|       |   |-- projects/
|       |   |   |-- research_card.tsx
|       |   |   `-- software_card.tsx
|       |   `-- ui/
|       |       `-- copy_button.tsx
|       `-- lib/
|           `-- utils.ts
|-- resume/
|   |-- Makefile
|   `-- resume_technical.tex
```


## Directory Purpose

- `docs/`: project documentation and architecture standards.
- `frontend/`: Next.js app, static assets, and frontend dependencies.
- `frontend/public/`: static assets served from the site root.
- `frontend/src/app/`: route composition and app-level layout/pages.
- `frontend/src/app/globals.css`: global CSS entrypoint and Tailwind import.
- `frontend/src/components/photos/`: photo-oriented display components.
- `frontend/src/components/projects/`: project card components.
- `frontend/src/components/ui/`: shared UI primitives.
- `frontend/src/lib/`: shared frontend utilities.
- `resume/`: LaTeX resume source and build target.


## Notes

- The site is frontend-only.
- There is no backend, database, cache, or Docker Compose runtime.
