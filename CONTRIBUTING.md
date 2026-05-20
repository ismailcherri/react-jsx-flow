# Contributing to react-jsx-flow

Thanks for your interest in react-jsx-flow. This document explains how to set up the project, run tests, and submit changes.

## Code of Conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). By participating you agree to uphold it.

## Development environment

- Node.js 18 or later.
- Yarn 4 (provided via Corepack — run `corepack enable` if it is not already on your PATH).
- Git 2.30+.

```bash
git clone https://github.com/ismailcherri/react-jsx-flow.git
cd react-jsx-flow
corepack enable
yarn install
```

## Repository layout

| Path                | Purpose                                              |
| ------------------- | ---------------------------------------------------- |
| `src/`              | Library source. One folder per component.            |
| `src/index.ts`      | Public entry point.                                  |
| `src/Shared/`       | Internal helpers shared across components.           |
| `test/src/`         | Vitest specs and component fixtures, mirroring src/. |
| `dist/`             | Build output (gitignored).                           |
| `tsup.config.ts`    | Bundler config (ESM + CJS + `.d.ts`).                |
| `vitest.config.ts`  | Test runner + coverage + Sonar reporter config.      |
| `eslint.config.js`  | ESLint 9 flat config.                                |

## Common commands

| Command              | Purpose                                                  |
| -------------------- | -------------------------------------------------------- |
| `yarn build`         | Bundle ESM + CJS + type declarations into `dist/`.       |
| `yarn dev`           | `tsup --watch` for local development.                    |
| `yarn test`          | Full check: ESLint → `tsc --noEmit` → Vitest + coverage. |
| `yarn vitest`        | Vitest in run mode (with coverage).                      |
| `yarn vitest:watch`  | Vitest in watch mode.                                    |
| `yarn eslint`        | Lint only.                                               |
| `yarn tsc-test`      | Type-check only.                                         |

## Commit conventions

We use [Conventional Commits](https://www.conventionalcommits.org/). [release-please](https://github.com/googleapis/release-please) parses commit messages to generate `CHANGELOG.md` and bump the version, so the prefix you choose determines what shows up in the release notes:

| Prefix      | Section in CHANGELOG | Bump (pre-1.0)        |
| ----------- | -------------------- | --------------------- |
| `feat:`     | Features             | minor                 |
| `fix:`      | Bug Fixes            | patch                 |
| `perf:`     | Performance          | patch                 |
| `revert:`   | Reverts              | patch                 |
| `docs:`     | Documentation        | patch                 |
| `refactor:` | Refactors            | patch                 |
| `build:`    | (hidden)             | patch                 |
| `ci:`       | (hidden)             | patch                 |
| `chore:`    | (hidden)             | patch                 |
| `test:`     | (hidden)             | patch                 |
| `style:`    | (hidden)             | patch                 |

Breaking changes: add `!` after the type (`feat!: drop React 17`) or a `BREAKING CHANGE:` footer. release-please will surface them and bump the major (or minor while still pre-1.0).

Keep subject lines under 72 characters. Use the body to explain _why_ when the diff alone is not obvious.

## Pull requests

1. Fork and create a branch from `main`.
2. Make focused changes — one logical concern per PR.
3. Add or update tests for new behavior. Coverage must stay at 100%.
4. Run `yarn test` locally; CI runs the same.
5. Fill out the PR template.
6. Link the issue it resolves (if any) with `Closes #123`.

## Reporting bugs

Use the **Bug report** issue template. Include the react-jsx-flow version, React version, bundler (if relevant), and a minimal reproduction (CodeSandbox / StackBlitz / repo link preferred).

## Release process (maintainers)

Releases are automated via [release-please](https://github.com/googleapis/release-please):

1. Merge Conventional Commits into `main`.
2. The `release-please.yml` workflow opens (or updates) a release PR that bumps `version` in `package.json` and adds a new section to `CHANGELOG.md`.
3. Merging the release PR creates a `vX.Y.Z` tag and a GitHub Release.
4. The tag push triggers `release.yml`, which builds and publishes to npm via the trusted-publisher OIDC flow (no `NPM_TOKEN` is used).

No manual tagging or version bumping is required.
