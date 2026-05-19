# Repository Guidelines

## Practice problem pages

- Every practice problem page should include:
  - Problem title
  - Type
  - Status
  - Prerequisites or assumptions
  - Problem summary
  - Rules
  - Input format
  - Output format
  - Constraints
  - Input/output examples
  - Example explanations
  - Evaluation points
  - Code template
- Practice problem pages must not include the solution.
- Practice problem pages must not include full copyrighted problem statements from external sources.
- Custom problems may include the full statement because they are created for this repository.
- When a problem is solved later, keep the practice page as the problem statement and record attempts, feedback, and final solution in docs/wrong-notes/.


## Difficulty levels

- Lv.0 Warm-up:
  Basic input/output, simple conditions, simple loops.

- Lv.1 Basic:
  Basic implementation with dict, set, sorting, counting, or simple
  condition handling.

- Lv.1+ Basic:
  Lv.1 concepts with additional output conditions, tie-break rules, or
  multiple filtering steps.

- Lv.2 Core:
  Core coding test patterns such as prefix sum, two pointers, stack,
  queue, or basic simulation with constraints.

- Lv.3 Intermediate:
  BFS/DFS, greedy, binary search, or graph traversal basics.

- Lv.4 Advanced:
  DP, heap, shortest path, advanced graph algorithms, or harder
  optimization problems.

- Lv.5 Challenge:
  Mixed patterns, high implementation difficulty, advanced optimization,
  or practical coding test challenge problems.

Rules:

- Every practice problem page must include a "Difficulty" section.
- Every wrong-answer note must include the same difficulty value.
- The dashboard should track difficulty for each recent problem.
- Use the internal difficulty level, not external BOJ/Programmers tiers,
  unless explicitly added later as a separate field.

## Commit and PR messages

### Strict commit title rules

- Do not use generic lowercase Conventional Commits such as:
  - docs: add ...
  - feat: add ...
  - chore: update ...
- The type is case-sensitive and must use one of the repository's
  allowed tags exactly as written:
  - Feat
  - Fix
  - Design
  - !BREAKING CHANGE
  - !HOTFIX
  - Style
  - Refactor
  - Comment
  - Docs
  - Test
  - Chore
  - Rename
  - Remove
- The commit title must use this format exactly:

  Type(optional-scope): Subject

- There must be exactly one space after the colon.
- Do not wrap the subject in quotes.
- Do not end the title with punctuation.
- English subjects must start with an uppercase imperative verb.
- Prefer these English verbs:
  - Add
  - Fix
  - Change
- Korean subjects must start with:
  - 추가
  - 고침
  - 변경

### Valid and invalid examples

Invalid:

```text
docs: add mobile learning materials
```

Valid:

```text
Docs: Add mobile learning materials
```

Invalid:

```text
chore: update mkdocs config.
```

Valid:

```text
Chore: Change MkDocs configuration
```

Invalid:

```text
Docs: "Add Python editor page"
```

Valid:

```text
Docs: Add Python editor page
```

Invalid:

```text
Add mobile learning materials
```

Valid:

```text
Docs: Add mobile learning materials
```

### Required final suggestion format

At the end of every task, Codex must suggest messages in this exact
format:

```text
Commit title:
Docs: Add example title

Commit body:
Add a concise explanation of what changed and why.

Pull request title:
Docs: Add example title

Pull request description:
## Summary

- Add the main change
- Update related documentation

## Notes

Mention important review notes if needed.
```

- Before presenting final commit or PR suggestions, check them against
the strict commit title rules and correct them if they do not match.
