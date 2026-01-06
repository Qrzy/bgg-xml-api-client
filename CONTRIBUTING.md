# Contributing

Thanks for your interest in contributing to `bgg-xml-api-client`!
A few guidelines to make contributions smooth and easy to review.

## Reporting Issues
- Search existing issues first. If none match, open a new issue with a clear title and reproduction steps.

## Development Setup
Install dependencies with pnpm and run the playground or tests locally:

```bash
pnpm install
pnpm run playground   # run the example playground app
pnpm test             # run unit & integration tests
pnpm run lint         # run eslint
```

## Branches & Pull Requests
- Create a new branch from `master` with a descriptive name (e.g. `fix/thing-name` or `feat/new-wrapper`).
- Open a PR against `master` and provide a short description of the change and any notes for reviewers.

## Commit Messages
- Use concise, imperative messages (e.g. `fix: handle missing id in parser`).
- **Conventional Commits (enforced):** This repository enforces the Conventional Commits spec via `commitlint` and a Husky `commit-msg` hook. Commit messages must follow the spec (e.g. `feat:`, `fix:`, `chore:`, etc.). If you have trouble composing a message, run `pnpm commitlint --edit` or ask in an issue.

### Examples
Valid Conventional Commit examples:

- `feat: add getBggHot wrapper`
- `fix(parser): handle missing id in parser`
- `docs: update README examples`
- `chore(deps): bump vite`
- `refactor: simplify xml parser`
- `perf: improve parsing speed`
- `test: add unit tests for getBggThing`
- `ci: add commitlint check`

Commit template:

```
<type>(<scope?>): <short summary>

Optional longer description and motivation.

Footer: BREAKING CHANGES or related issue references
```

Common `type` values: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`.

If a commit is rejected by the hook, run `pnpm commitlint --edit` to validate a draft message or edit the message before committing.

## Code Style
- Project uses TypeScript and ESLint. Run `pnpm run lint` and fix any issues before opening a PR.

## Tests
- Add tests for bug fixes and new features. The test suite uses Vitest; run `pnpm test` locally.

## CI / Pre-merge
- Pull requests should pass the test suite and linting. The project uses Husky + lint-staged to run checks locally on commit.

## Contact
- If you need help, open an issue and tag the maintainer.

Thanks — contributions are welcome!
