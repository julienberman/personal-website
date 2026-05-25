# Data

This site does not use a backend, database, cache, or application datastore.


## Environment Mapping

- No runtime environment variables are required for the current static site.


## Data Ownership

- Page content currently lives directly in route files under
  `frontend/src/app/`.
- Static files live under `frontend/public/` and are served directly by Next.js.
- The resume PDF is generated from `resume/resume_short.tex` and served as
  `frontend/public/resume_short.pdf`.


## Local Development

- Local development runs the frontend only with `pnpm dev` from `frontend/`.
