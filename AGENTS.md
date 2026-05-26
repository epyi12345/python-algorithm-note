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


## Multilingual documentation


- Korean `.ko.md` pages should not contain untranslated user-facing
  English prose, except for technical tokens, code, commands, paths,
  URLs, and examples.
- Practice problem pages should include a helpful Hint section.
- Hint sections should link to related learning materials.
- Learning pages should explain syntax, use cases, examples, common
  mistakes, and safe patterns.
- When adding a new practice problem, add or link related learning
  materials when practical.
- English is the default language.
- Korean translations use the `.ko.md` suffix.
- When creating a new important documentation page, also create a
  Korean translation when practical.
- Practice problem pages may be added in English first, but Korean
  translations should be added later for mobile review.
- Keep code blocks and file paths unchanged across translations.
- Do not machine-translate code, identifiers, commands, or URLs.
- The language selector should remain available in the site header.


## Korean technical writing style

- Korean translations should use natural developer-facing terminology, not literal machine translation.
- Keep common technical loanwords when they are more natural in Korean developer contexts.
- Use Korean with English terms in parentheses when it improves clarity.
- Do not translate code, commands, file paths, package names, URLs, Python keywords, variable names inside code, or commit message examples.
- Prefer concise technical documentation style over overly formal or verbose prose.
- Avoid awkward literal translations such as "작업실" for "Workbench" in this site context.

### Korean terminology glossary

- Practice Workbench -> 워크벤치
- Workbench -> 워크벤치
- Python Editor -> 파이썬 에디터
- Editor -> 에디터
- Dashboard -> 대시보드
- Roadmap -> 로드맵
- Learning Materials -> 학습 자료
- Practice -> 문제 연습
- Wrong Notes -> 오답노트
- Problem Summary -> 문제 요약
- Type -> 유형
- Difficulty -> 난이도
- Status -> 상태
- Prerequisites -> 사전 지식
- Rules -> 규칙
- Input Format -> 입력 형식
- Output Format -> 출력 형식
- Constraints -> 제약 조건
- Examples -> 예시
- Explanation -> 예시 설명
- Evaluation Points -> 평가 포인트
- Code Template -> 코드 템플릿
- Hint -> 힌트
- Related learning materials -> 관련 학습자료
- Online Editor -> 온라인 에디터
- Final Recommended Solution -> 최종 권장 풀이
- Key Lessons -> 핵심 교훈
- Complexity -> 복잡도
- Time complexity -> 시간복잡도
- Space complexity -> 공간복잡도
- Review Checklist -> 복습 체크리스트
- My Attempts -> 내 시도
- Feedback -> 피드백
- Correct parts -> 잘한 점
- Issues -> 문제점
- Improvement -> 개선 방향
- Duplicate handling -> 중복 처리
- Tie-break -> 동률 처리
- Prefix Sum -> 누적합(prefix sum)
- Range Query -> 구간 쿼리
- Filtering -> 필터링
- Hash -> 해시(hash)
- Sorting -> 정렬
- Two Pointer -> 투 포인터(two pointer)
- Stack -> 스택(stack)
- Queue -> 큐(queue)
- BFS -> BFS
- DFS -> DFS
- Binary Search -> 이분 탐색(binary search)
- Greedy -> 그리디(greedy)
- DP -> DP


## Problem review notes

- Wrong-answer notes should use a wide review layout because they often contain side-by-side code and feedback.
- Keep the right table of contents visible on wrong-note pages for long-document navigation.
- Keep navigation accessible through the hamburger menu.
- Preserve normal documentation layout for learning, dashboard, roadmap, and practice pages.


## Practice problem writing style

- Custom practice problems should be written as full learning problems, not only as short rule summaries.
- Each practice problem should include: Problem background, Goal, Input meaning, Output meaning, Detailed rules, Constraints, Why efficiency matters, Step-by-step example explanation, Common misunderstanding, Hint, Related learning materials, and Code template.
- For beginner and core-level problems, include a "How to read this problem" section.
- For new concepts, include a "Concept bridge" section that connects the problem to related learning materials.
- External copyrighted problem statements must not be copied in full. Store only a link, short summary, personal notes, and review content for external problems.

- Learning pages should include basic explanation, safe pattern, common mistakes, and advanced applications when a concept commonly expands into harder problems.

- Learning pages should explain theory before problem solving.
- Each learning page should include core idea, pattern, example, common mistakes, safe pattern, complexity, and related problems.
- Korean learning pages should use developer-friendly terminology.
- New practice problems should link to related learning pages.
- Do not copy full copyrighted external problem statements.

- When adding a new English learning page, create the matching Korean `.ko.md` page as part of the same task when practical.
