---
name: project-conventions
description: This project's stack, exact commands (install, test, lint, typecheck, build, dev server), code conventions and recorded decisions. Read first before planning, implementing, reviewing or fixing anything in this repository, and whenever you need to know how to run tests or start the app.
---

# Project conventions

## Product

- What it is: a tiny command-line tip calculator.
- Language: English.

## Stack

- TypeScript on Bun 1.x. No dependencies.
- Package manager: bun.

## Commands

| Task            | Command                         |
| --------------- | ------------------------------- |
| Install         | `bun install`                   |
| Run             | `bun src/cli.ts <amount> [pct]` |
| Test (all)      | `bun test`                      |
| Test (one file) | `bun test src/tip.test.ts`      |

## Layout

```
src/tip.ts       pure calculation functions
src/cli.ts       argument parsing and output
src/*.test.ts    co-located bun:test tests
```

## Code conventions

- Keep logic in pure functions in `src/`, tested with `bun:test`.
- Money is rounded to 2 decimals.
- Commits: Conventional Commits.
- Keep it small. No dependencies.
