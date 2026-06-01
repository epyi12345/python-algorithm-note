# 0005. Next Growth Day

## Korean Title

다음 성장일 찾기

## Type

스택(stack) / 단조 스택(monotonic stack) / 구현

## Difficulty

Lv.2 Core

## Status

Pending

## Problem Background

각 날짜 기준으로, 이후에 더 큰 방문자 수가 언제 나오는지 기다린
일수를 구합니다.

## Goal

각 날짜의 대기 일수를 출력하세요. 이후에 더 큰 값이 없으면 0입니다.

## How to Read This Problem

- 날짜 순서를 유지합니다.
- 엄격히 큰 값(`>`)만 인정합니다.
- 출력 길이는 N입니다.

## Prerequisites

- 스택 기본
- 배열 인덱스 처리

## Problem Summary

각 날짜의 “다음 더 큰 값”까지 거리(일수)를 구하는 문제입니다.

## Detailed Rules

1. 반드시 뒤쪽 날짜만 비교합니다.
2. 조건은 "크거나 같음"이 아니라 "엄격히 큼"입니다.
3. 못 찾으면 0을 출력합니다.

## Input Format

```text
N
visitors_1 visitors_2 ... visitors_N
```

## Output Format

```text
wait_1 wait_2 ... wait_N
```

## Constraints

```text
1 <= N <= 100000
0 <= visitors_i <= 1000000
```

## Why Efficiency Matters

중첩 반복은 O(N^2)까지 증가할 수 있습니다. 단조 스택으로 O(N)에
해결할 수 있습니다.

## Examples

### Example 1
Input:
```text
6
5 3 8 4 6 10
```
Output:
```text
2 1 3 1 1 0
```
### Step-by-step Explanation
각 날짜에서 이후 처음으로 더 큰 방문자 수가 나오는 시점을 계산합니다.

### Example 2
Input:
```text
5
9 8 7 6 5
```
Output:
```text
0 0 0 0 0
```
### Step-by-step Explanation
뒤에 더 큰 값이 한 번도 나오지 않습니다.

## Common Misunderstandings

- `>=`를 사용해 동값도 처리하는 실수
- 값만 저장하고 인덱스를 저장하지 않는 실수
- 미해결 날짜 기본값 0을 놓치는 실수

## Hint

아직 해결되지 않은 인덱스를 스택에 보관하고, 현재 값이 스택 top
인덱스의 값보다 클 때 대기 일수를 계산하세요.

## Concept Bridge

단조 스택(monotonic stack) 기반 next greater element 패턴입니다.

## Related Learning Materials

<div class="learning-links" markdown="1">
<a class="learning-link-card" href="../../learning/python-stack/"><span class="learning-link-card__title">스택</span><span class="learning-link-card__desc">인덱스 기반 스택 처리</span></a>
<a class="learning-link-card" href="../../learning/monotonic-stack/"><span class="learning-link-card__title">단조 스택</span><span class="learning-link-card__desc">O(N) next-greater 처리</span></a>
<a class="learning-link-card" href="../../learning/complexity-guide/"><span class="learning-link-card__title">복잡도 가이드</span><span class="learning-link-card__desc">O(N^2) 회피</span></a>
</div>

## Evaluation Points

- 엄격 비교 해석 정확성
- 대기 일수 계산 정확성
- O(N) 설명

## 코딩 워크스페이스

워크벤치에서 문제 설명과 Python 에디터를 나란히 보면서 풀이를 작성할 수 있습니다.

[워크벤치에서 풀기](../../tools/practice-workbench/?problem=0005){ .md-button .md-button--primary }

[Python Editor 열기](../tools/python-editor.md){ .md-button .md-button--primary }

[OneCompiler 새 탭에서 열기 ↗](https://onecompiler.com/python){ target="_blank" rel="noopener" }

## Code Template
```python
def solve():
    pass

if __name__ == "__main__":
    solve()
```

## Author's Intent

인덱스 거리 계산형 단조 스택을 훈련하기 위한 문제입니다.
