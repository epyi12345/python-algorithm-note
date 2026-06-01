# 0006. Minimum Shipping Capacity

## Korean Title

최소 배송 용량 찾기

## Type

이분 탐색(binary search) / 매개변수 탐색(parametric search) / 그리디 판별

## Difficulty

Lv.3 Intermediate

## Status

Pending

## Problem Background

고정된 순서의 패키지를 제한 일수 안에 배송해야 합니다.

## Goal

모든 패키지를 D일 안에 배송할 수 있는 최소 용량을 찾습니다.

## How to Read This Problem

- 패키지 순서를 바꿀 수 없습니다.
- 패키지는 분할할 수 없습니다.
- 탐색 대상은 용량 값입니다.

## Prerequisites

- 이분 탐색(binary search)
- 그리디 시뮬레이션 판별

## Problem Summary

정답 용량에 대해 "가능/불가능"을 판별하며 최소 가능값을 찾습니다.

## Detailed Rules
1. 패키지 순서를 유지합니다.
2. 하루 적재 합은 용량을 넘을 수 없습니다.
3. D일 이내 배송 가능한 최소 용량을 출력합니다.

## Input Format
```text
N D
weight_1 weight_2 ... weight_N
```

## Output Format
```text
minimum_capacity
```

## Constraints
```text
1 <= N <= 100000
1 <= D <= N
1 <= weight_i <= 100000
```

## Why Efficiency Matters

모든 용량을 순회하면 비효율적입니다. `[max(weights), sum(weights)]` 범위를
이분 탐색하고 O(N) 판별 함수를 쓰면 O(N log range)로 줄일 수 있습니다.

## Examples
### Example 1
Input:
```text
5 3
1 2 3 4 5
```
Output:
```text
6
```
### Step-by-step Explanation
용량 6은 3일 가능, 용량 5는 4일이 필요합니다.

### Example 2
Input:
```text
6 3
7 2 5 10 8 1
```
Output:
```text
14
```
### Step-by-step Explanation
14는 3일 가능, 13은 4일 필요합니다.

## Common Misunderstandings

- 패키지를 정렬하는 실수
- 인덱스를 이분 탐색하는 실수
- left를 max(weights)보다 작게 두는 실수

## Hint

용량을 이분 탐색하고, 후보 용량에서 필요한 일수를 시뮬레이션하세요.

## Concept Bridge

매개변수 탐색(parametric search)의 전형적인 구조입니다.

## Related Learning Materials

<div class="learning-links" markdown="1">
<a class="learning-link-card" href="../../learning/binary-search/"><span class="learning-link-card__title">이분 탐색</span><span class="learning-link-card__desc">정렬된 답 공간 탐색</span></a>
<a class="learning-link-card" href="../../learning/parametric-search/"><span class="learning-link-card__title">매개변수 탐색</span><span class="learning-link-card__desc">가능 여부 판별 기반 탐색</span></a>
<a class="learning-link-card" href="../../learning/complexity-guide/"><span class="learning-link-card__title">복잡도 가이드</span><span class="learning-link-card__desc">O(N log range) 해석</span></a>
</div>

## Evaluation Points

- 경계값 설정 정확성
- 판별 함수 정확성
- 최소 가능 해 출력

## 코딩 워크스페이스

워크벤치에서 문제 설명과 Python 에디터를 나란히 보면서 풀이를 작성할 수 있습니다.

[워크벤치에서 풀기](../../tools/practice-workbench/?problem=0006){ .md-button .md-button--primary }

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

실전형 이분 탐색/매개변수 탐색을 훈련하기 위한 문제입니다.
