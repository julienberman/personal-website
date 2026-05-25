# Commands

Commands must be run from `frontend/` unless noted otherwise.


## Validation Policy

- Validation runs directly through pnpm.
- CI runs frontend lint, typecheck, format checks, and LaTeX resume compilation.


## Bootstrap

- `pnpm install` installs frontend dependencies.
- `pnpm dev` starts the Next.js development server.


## Testing

- No test runner is currently configured.


## Lint

- `pnpm lint` runs frontend lint checks.


## Type Check

- `pnpm typecheck` runs frontend TypeScript checks.


## Format

- `pnpm format:check` checks frontend formatting.
- `pnpm format` formats frontend files.


## Build

- `pnpm build` builds the production site.
- From the repository root, `make -C resume build` compiles
  `resume/resume_short.tex` to `frontend/public/resume_short.pdf`.
