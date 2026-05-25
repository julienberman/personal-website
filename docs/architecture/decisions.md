# Decisions

## 2026-05-25 - Use technical resume as public resume

The resume pipeline now builds `resume/resume_technical.tex` and publishes
`frontend/public/resume_technical.pdf`. The navbar links to this generated PDF,
and CI compiles the same LaTeX source to keep the public asset reproducible.


## 2026-05-23 - Build resume from LaTeX source

The resume is maintained as `resume/resume_technical.tex` and compiled to
`frontend/public/resume_technical.pdf`, which is served as a static asset and linked
from the navbar. CI recompiles the LaTeX source to ensure the checked-in source
continues to produce a valid PDF.

## 2026-05-23 - Simplify to frontend-only personal site

The project no longer needs a backend, database, cache, or Docker Compose stack
because the current scope is a static personal website with Home and Projects
pages. Content lives directly in the route files for now, and static assets are
served from `frontend/public/`.


## [DATE] - Initialize project from project template
