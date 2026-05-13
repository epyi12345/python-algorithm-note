# Repository Instructions for Codex

## Repository Purpose

This repository is a Python algorithm study note site.

## Documentation Conventions

- Use MkDocs Material for documentation.
- Use `docs/` for documentation pages.
- Use `problems/` for Python solution files.
- Do not include private information, API keys, tokens, or full copyrighted
  problem statements.

## Commit Message Convention

Use the following commit message format:

```text
type(optional-scope): [#issueNumber - ]Subject

body

footer
```

### Commit Message Rules

- The subject must summarize the change briefly.
- Put exactly one space after the colon.
- The subject must be within 50 characters.
- Do not end the subject with punctuation.
- English subjects must start with an uppercase imperative verb.
- Prefer "Add", "Fix", or "Change" for English subjects.
- Korean subjects must start with "추가", "고침", or "변경".
- Body is optional.
- Body lines should be within 72 characters.
- Body should explain what changed and why, not how.
- Footer is optional.
- Footer should use one of:
  - `Fixes: #issue`
  - `Resolves: #issue`
  - `Ref: #issue`
  - `Related to: #issue`

### Allowed Types

- `Feat`: new feature
- `Fix`: bug fix
- `Design`: UI or CSS design change
- `!BREAKING CHANGE`: large API change
- `!HOTFIX`: urgent critical bug fix
- `Style`: formatting only, no code change
- `Refactor`: production code refactoring
- `Comment`: comments added or changed
- `Docs`: documentation change
- `Test`: tests added or refactored
- `Chore`: build task, package manager, or config change
- `Rename`: file or folder rename only
- `Remove`: file removal only

### Examples

```text
Docs: Add MkDocs setup guide

Feat(navigation): Add sidebar navigation

Fix: Change broken Pages workflow

Docs: 추가 오답노트 템플릿
```
