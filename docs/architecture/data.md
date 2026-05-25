# Data

This site does not use a backend, database, cache, or application datastore.


## Environment Mapping

- No runtime environment variables are required for the current static site.


## Data Ownership

- Page content currently lives directly in route files under
  `frontend/src/app/`.
- Static files live under `frontend/public/` and are served directly by Next.js.
- Research PDFs live under `frontend/public/research/` and are linked from the
  projects page.
- The resume PDF is generated from the selected template under `resume/` and
  served as the stable public artifact `frontend/public/resume.pdf`.


## Local Development

- Local development runs the frontend only with `pnpm dev` from `frontend/`.
