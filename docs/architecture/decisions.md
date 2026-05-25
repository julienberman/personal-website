# Decisions

## 2026-05-25 - Use stable public resume artifact

Resume templates may change under `resume/`, but the website always serves the
compiled resume from `frontend/public/resume.pdf`. CI compiles the selected
LaTeX source and publishes it to the same stable filename so navbar links and
static asset references do not depend on the active template name.


## 2026-05-25 - Use technical resume as public resume

The resume pipeline now builds `resume/resume_technical.tex` and publishes
`frontend/public/resume.pdf`. The navbar links to this stable generated PDF, and
CI compiles the same LaTeX source to keep the public asset reproducible.


## 2026-05-23 - Build resume from LaTeX source

The resume is maintained as `resume/resume_technical.tex` and compiled to
`frontend/public/resume.pdf`, which is served as a static asset and linked from
the navbar. CI recompiles the LaTeX source to ensure the checked-in source
continues to produce a valid PDF.

## 2026-05-23 - Simplify to frontend-only personal site

The project no longer needs a backend, database, cache, or Docker Compose stack
because the current scope is a static personal website with Home and Projects
pages. Content lives directly in the route files for now, and static assets are
served from `frontend/public/`.


## [DATE] - Initialize project from project template
