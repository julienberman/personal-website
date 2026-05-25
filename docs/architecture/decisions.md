# Decisions

## 2026-05-23 - Build resume from LaTeX source

The resume is maintained as `resume/resume_short.tex` and compiled to
`frontend/public/resume_short.pdf`, which is served as a static asset and linked
from the navbar. CI recompiles the LaTeX source to ensure the checked-in source
continues to produce a valid PDF.

## 2026-05-23 - Simplify to frontend-only personal site

The project no longer needs a backend, database, cache, or Docker Compose stack
because the current scope is a static personal website with Home and Projects
pages. Content lives directly in the route files for now, and static assets are
served from `frontend/public/`.


## [DATE] - Initialize project from project template
