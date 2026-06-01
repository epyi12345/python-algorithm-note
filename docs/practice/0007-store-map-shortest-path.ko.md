# 0007. Store Map Shortest Path

## Korean Title

매장 지도 최단거리

## Type

BFS / 격자(grid) / 최단 경로

## Difficulty

Lv.3 Intermediate

## Status

Pending

## Problem Background

매장 지도를 격자로 보고 벽을 피해서 시작점에서 출구까지 이동합니다.

## Goal

`S`에서 `E`까지의 최소 이동 횟수를 구하고, 불가능하면 `-1`을 출력합니다.

## How to Read This Problem

- 이동은 상하좌우 4방향만 가능합니다.
- 벽(`1`)은 통과할 수 없습니다.
- 방문 칸 수가 아니라 이동 횟수를 셉니다.

## Prerequisites

- BFS 기본
- 큐(queue) 사용
- 격자 경계 검사

## Problem Summary

가중치 없는 격자 최단 경로 문제입니다.

## Detailed Rules
1. 칸 값은 `0`, `1`, `S`, `E` 중 하나입니다.
2. 격자 밖 이동/벽 통과는 불가합니다.
3. 최단 이동 횟수 또는 `-1`을 출력합니다.

## Input Format
```text
N M
row_1
row_2
...
row_N
```

## Output Format
```text
minimum_moves
```

## Constraints
```text
1 <= N <= 1000
1 <= M <= 1000
There is exactly one S.
There is exactly one E.
```

## Why Efficiency Matters

BFS는 O(NM)으로 동작합니다. DFS 백트래킹은 최단거리 보장이 어렵고
입력이 커지면 비효율적일 수 있습니다.

## Examples
### Example 1
Input:
```text
3 4
S000
1110
000E
```
Output:
```text
5
```
### Step-by-step Explanation
S에서 E까지 최단 경로 이동 횟수는 5입니다.

### Example 2
Input:
```text
3 3
S10
111
00E
```
Output:
```text
-1
```
### Step-by-step Explanation
벽 때문에 시작점과 출구가 분리되어 도달할 수 없습니다.

## Common Misunderstandings

- DFS로 최단거리까지 보장된다고 착각
- visited 표시 누락
- row/column 인덱스 혼동
- 경계 검사 누락

## Hint

S에서 BFS를 시작하고, E에 처음 도달하는 순간의 거리가 최단거리입니다.

## Concept Bridge

가중치 없는 그래프/격자에서는 BFS의 레벨 순회가 최단 경로를 보장합니다.

## Related Learning Materials

<div class="learning-links" markdown="1">
<a class="learning-link-card" href="../../learning/bfs/"><span class="learning-link-card__title">BFS</span><span class="learning-link-card__desc">무가중치 최단 경로 레벨 탐색</span></a>
<a class="learning-link-card" href="../../learning/python-queue/"><span class="learning-link-card__title">큐(queue)</span><span class="learning-link-card__desc">BFS 큐 연산 패턴</span></a>
<a class="learning-link-card" href="../../learning/grid-movement/"><span class="learning-link-card__title">격자 이동</span><span class="learning-link-card__desc">방향 벡터와 경계 처리</span></a>
</div>

## Evaluation Points

- BFS 탐색 정확성
- 이동 횟수 계산 정확성
- 도달 불가 처리 정확성

## 코딩 워크스페이스

워크벤치에서 문제 설명과 Python 에디터를 나란히 보면서 풀이를 작성할 수 있습니다.

[워크벤치에서 풀기](../../tools/practice-workbench/?problem=0007){ .md-button .md-button--primary }

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

배열 중심 패턴에서 그래프/BFS 최단거리 패턴으로 넘어가기 위한 문제입니다.
