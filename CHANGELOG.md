# Changelog

All notable changes to this project are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Starting from version `0.4.0`, releases are managed automatically by [release-please](https://github.com/googleapis/release-please) based on [Conventional Commits](https://www.conventionalcommits.org/).

## [0.5.0](https://github.com/ismailcherri/react-jsx-flow/compare/v0.4.0...v0.5.0) (2026-05-20)


### Features

* Adds For and ForMemo components ([f951756](https://github.com/ismailcherri/react-jsx-flow/commit/f951756df68e0ddc8216eaf365025241674db306))
* Adds ForIf and ForIfMemo components ([b1e4143](https://github.com/ismailcherri/react-jsx-flow/commit/b1e414315aa08a5b09cf4ccf63b68e542adf86ce))
* Adds Hide component ([4c175f9](https://github.com/ismailcherri/react-jsx-flow/commit/4c175f955e8bb4e84408df4e97d8a0c1993b4571))
* Adds Hide component ([9c615c2](https://github.com/ismailcherri/react-jsx-flow/commit/9c615c2b16981748f96451ac1ada47e9898f0b50))
* Adds Show component ([9d2ac6d](https://github.com/ismailcherri/react-jsx-flow/commit/9d2ac6d4b01a40d205d99fe991db7b692cc27ddc))
* Adds Switch/Match components ([2044c0d](https://github.com/ismailcherri/react-jsx-flow/commit/2044c0d3c68479956af1d284a6871187b825aa4f))
* Fix sonar scan issues ([261c6a9](https://github.com/ismailcherri/react-jsx-flow/commit/261c6a930a29ed951d8f45da5ce400d9239f2069))


### Bug Fixes

* Build name ([eb9eb0b](https://github.com/ismailcherri/react-jsx-flow/commit/eb9eb0bd6005ff91324076b58dabd0e97d7bfc00))
* Correctly test ForIfMemo memoization ([f3594f6](https://github.com/ismailcherri/react-jsx-flow/commit/f3594f69b97bac7e89d5623115fbf2a9b15c1ed7))
* Optimize imports ([60e6bbd](https://github.com/ismailcherri/react-jsx-flow/commit/60e6bbd050b514eaba3fc5a111e187449af5938b))
* remove unused react memo ([b113e5b](https://github.com/ismailcherri/react-jsx-flow/commit/b113e5b063482fad69768484a3315f2ffbaa5b24))
* remove unused react memo ([54376af](https://github.com/ismailcherri/react-jsx-flow/commit/54376af3d6e9166c9c4e1a9a924f8be3ffd9943c))
* Rename ForIf tests ([891e643](https://github.com/ismailcherri/react-jsx-flow/commit/891e643d558d774d94f0a3aa1ea4ff3303ff6307))
* SonarCloud analysis issues ([#6](https://github.com/ismailcherri/react-jsx-flow/issues/6)) ([18b4f7a](https://github.com/ismailcherri/react-jsx-flow/commit/18b4f7a27c5296682648aba3ee460fb59ac2aac3))


### Refactors

* migrate ESLint configuration to new format and update dependencies ([45b035d](https://github.com/ismailcherri/react-jsx-flow/commit/45b035d6739256a3fc8230576c027bd02a11c785))
* migrate to vitest ([76b8719](https://github.com/ismailcherri/react-jsx-flow/commit/76b87198867aa0a33a694c22c9f87eaa1026bffb))

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
