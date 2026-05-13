# Repository Instructions for Codex

## Repository Purpose

This repository is a Python algorithm study note site.

## Documentation Conventions

- Use MkDocs Material for documentation.
- Use `docs/` for documentation pages.
- Use `problems/` for Python solution files.
- Do not include private information, API keys, tokens, or full copyrighted
  problem statements.

## Commit and PR messages

When finishing a task, always suggest:

- Commit title
- Commit body, if useful
- Pull request title
- Pull request description

Pull request titles and descriptions should follow the same convention
where applicable.

All commit messages must follow this format:

```text
type(optional-scope): [#issueNumber - ]Subject

body

footer
```

### Commit Title Rules

- Keep the title within 50 characters.
- Put exactly one space after the colon.
- Do not end the title with punctuation.
- English subjects must start with an uppercase imperative verb.
- Prefer "Add", "Fix", or "Change" for English subjects.
- Korean subjects must start with "추가", "고침", or "변경".
- Do not wrap the subject in quotes.

### Body Rules

- Body is optional.
- Keep each body line within 72 characters.
- Explain what changed and why, not how.

### Footer Rules

- Footer is optional.
- Use one of these formats when referencing issues:
  - `Fixes: #issue`
  - `Resolves: #issue`
  - `Ref: #issue`
  - `Related to: #issue`

### Allowed Types

- `Feat`
- `Fix`
- `Design`
- `!BREAKING CHANGE`
- `!HOTFIX`
- `Style`
- `Refactor`
- `Comment`
- `Docs`
- `Test`
- `Chore`
- `Rename`
- `Remove`

### Examples

```text
Docs: Add repository agent guidelines

Add AGENTS.md to define repository rules for future Codex tasks.

Document the project structure, safety rules, and commit message
convention so future changes follow the same workflow.

Feat(navigation): Add sidebar navigation

Fix: Change broken Pages workflow

Docs: 추가 오답노트 템플릿
```