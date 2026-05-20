# Changelog

All notable changes to this project are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Starting from version `0.4.0`, releases are managed automatically by [release-please](https://github.com/googleapis/release-please) based on [Conventional Commits](https://www.conventionalcommits.org/).

## [0.4.0] - 2026-05-20

### Changed

- Dropped `microbundle` (unmaintained) in favour of `tsup` for the build pipeline.
- Migrated the test runner from Jest to Vitest 4 (with `@vitest/coverage-v8` and `vitest-sonar-reporter`).
- Upgraded ESLint from v8 (legacy `.eslintrc`) to v9 flat config with `typescript-eslint` v8; dropped the deprecated `eslint-config-standard-with-typescript`.
- Bumped TypeScript to 5.9 and modernised `tsconfig.json` (`moduleResolution: bundler`, `skipLibCheck`, `isolatedModules`).
- Bumped the testing library stack: `@testing-library/react` 13 → 16, `@testing-library/jest-dom` 5 → 6, `@testing-library/dom` 8 → 10.
- Bumped Prettier to v3, `npm-run-all` → `npm-run-all2` v9, and minimum Node version from 16 to 18.
- Reworked source files to import `JSX` from `'react'` instead of relying on the global `JSX` namespace.

### Added

- React 19 support. The package now lists React 19 in dev dependencies and is verified against it; the `peerDependencies` range remains `react >= 17.0.1`, so React 17 and 18 consumers are still supported.
- Provenance-enabled npm publishing via GitHub Actions trusted publishers (OIDC). The `release.yml` workflow no longer uses `NPM_TOKEN`.

### Removed

- `microbundle`, `jest`, `ts-jest`, `jest-environment-jsdom`, `@types/jest`, `jest-sonar-reporter` and the associated `jest.config.json`.
- Legacy `.eslintrc` / `.eslintignore`.

### Security

- Eliminated all known dev-dependency CVEs from the previous release (notably `svgo` billion-laughs, `ws` request-smuggling/DoS, `yaml` stack overflow, `serialize-javascript` ReDoS). `yarn npm audit --recursive` now reports zero advisories.

## [0.3.2]

Initial pre-changelog release line. See git history for details.
