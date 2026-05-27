# 0004. Target Sales Window

## Korean Title

목표 매출 구간 찾기

## Type

투 포인터(two pointers) / 연속 구간 / 구현

## Difficulty

Lv.2 Core

## Status

Pending

## Problem Background

매장의 일별 매출 데이터에서 목표 매출을 가장 짧은 기간으로 달성할 수
있는 연속 구간을 찾고 싶습니다.

## Goal

양의 정수 매출 배열과 목표값 `S`가 주어질 때, 합이 `S` 이상인 연속
구간의 최소 길이를 출력하세요. 없으면 `0`을 출력합니다.

## How to Read This Problem

- `N`은 날짜 수입니다.
- 매출 배열 길이는 `N`입니다.
- 반드시 연속된 날짜만 선택할 수 있습니다.
- 선택 구간의 합은 `S` 이상이어야 합니다.

## Prerequisites

- 파이썬 입력 처리
- 슬라이딩 윈도우 기본
- 투 포인터(two pointers)

## Problem Summary

합이 `S` 이상인 연속 구간 중 최소 길이를 구합니다.

## Detailed Rules

1. 연속 구간만 사용할 수 있습니다.
2. 모든 매출 값은 양수입니다.
3. 조건을 만족하는 구간 길이 중 최솟값을 출력합니다.
4. 가능한 구간이 없으면 `0`을 출력합니다.

## Input Format

```text
N S
sales_1 sales_2 ... sales_N
```

## Output Format

```text
minimum_length
```

## Constraints

```text
1 <= N <= 100000
1 <= S <= 100000000
1 <= sales_i <= 10000
```

## Why Efficiency Matters

모든 시작/끝 조합을 확인하는 O(N^2)은 `N = 100000`에서 느립니다.
양수 배열 특성을 이용하면 O(N) 투 포인터로 처리할 수 있습니다.

## Examples

### Example 1

Input:

```text
6 7
2 3 1 2 4 3
```

Output:

```text
2
```

### Step-by-step Explanation

- 2 + 3 + 1 + 2 = 8, 길이 4
- 3 + 1 + 2 + 4 = 10, 길이 4
- 1 + 2 + 4 = 7, 길이 3
- 4 + 3 = 7, 길이 2
최소 길이는 2입니다.

### Example 2

Input:

```text
5 100
1 2 3 4 5
```

Output:

```text
0
```

### Step-by-step Explanation

전체 합이 15라서 100 이상이 되는 연속 구간이 없습니다.

## Common Misunderstandings

- 비연속 원소를 골라도 된다고 착각
- O(N^2) 전수 탐색 시도
- 합이 S 이상이 된 뒤 왼쪽 포인터 축소를 놓침

## Hint

현재 합이 S보다 작으면 오른쪽 포인터를 확장합니다.
현재 합이 S 이상이면 길이를 기록하고 왼쪽 포인터를 축소합니다.

## Concept Bridge

모든 값이 양수이므로 오른쪽 확장은 합 증가, 왼쪽 축소는 합 감소를
보장합니다. 이 조건이 투 포인터 핵심입니다.

## Related Learning Materials

<div class="learning-links" markdown="1">
<a class="learning-link-card" href="../../learning/two-pointers/"><span class="learning-link-card__title">투 포인터</span><span class="learning-link-card__desc">양수 배열 슬라이딩 윈도우</span></a>
<a class="learning-link-card" href="../../learning/python-input/"><span class="learning-link-card__title">파이썬 입력</span><span class="learning-link-card__desc">빠른 입력 처리 패턴</span></a>
<a class="learning-link-card" href="../../learning/complexity-guide/"><span class="learning-link-card__title">복잡도 가이드</span><span class="learning-link-card__desc">왜 O(N)이 필요한지</span></a>
</div>

## Evaluation Points

- 연속 구간 처리 정확성
- 불가능한 경우 처리
- O(N) 접근 설명

## Code Template

```python
def solve():
    pass

if __name__ == "__main__":
    solve()
```

## Author's Intent

누적합 학습 이후, 양수 배열에서 투 포인터로 넘어가는 연결 문제입니다.
