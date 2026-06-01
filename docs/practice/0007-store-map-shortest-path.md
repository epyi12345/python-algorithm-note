# 0007. Store Map Shortest Path

## Korean Title

매장 지도 최단거리

## Type

BFS / Grid / Shortest Path

## Difficulty

Lv.3 Intermediate

## Status

Pending

## Problem Background

A store map is represented as a grid with walls and open paths.

## Goal

Find the minimum number of moves from `S` to `E`, or `-1` if unreachable.

## How to Read This Problem

- Move only up/down/left/right.
- Cannot pass walls (`1`).
- Count moves, not visited cells.

## Prerequisites

- BFS basics
- Queue usage
- Grid boundary checks

## Problem Summary

Unweighted shortest path on a grid.

## Detailed Rules
1. Cells are `0`, `1`, `S`, `E`.
2. You cannot move out of bounds or through walls.
3. Print shortest moves or `-1`.

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

BFS runs in O(NM). Path search by repeated DFS/backtracking can be too
slow or incorrect for shortest-path guarantees.

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
Shortest route uses 5 moves from S to E.

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
Walls separate start and exit.

## Common Misunderstandings

- Using DFS expecting shortest path
- Forgetting visited marking
- Mixing row/column indexes
- Missing boundary checks

## Hint

Start BFS from S. The first time E is reached gives shortest distance.

## Concept Bridge

BFS on unweighted graph guarantees shortest path by level order.

## Related Learning Materials

<div class="learning-links" markdown="1">
<a class="learning-link-card" href="../../learning/bfs/"><span class="learning-link-card__title">BFS</span><span class="learning-link-card__desc">Level-based shortest path in unweighted graph</span></a>
<a class="learning-link-card" href="../../learning/python-queue/"><span class="learning-link-card__title">Queue</span><span class="learning-link-card__desc">Queue operations for BFS traversal</span></a>
<a class="learning-link-card" href="../../learning/grid-movement/"><span class="learning-link-card__title">Grid Movement</span><span class="learning-link-card__desc">Direction vectors and boundary safety</span></a>
</div>

## Evaluation Points

- Correct BFS traversal
- Correct move counting
- Correct unreachable handling

## Coding Workspace

Open this problem in Practice Workbench to view the statement and Python
editor side by side.

[Open in Practice Workbench](../../tools/practice-workbench/?problem=0007){ .md-button .md-button--primary }

[Open Python Editor](../tools/python-editor.md){ .md-button .md-button--primary }

[Open OneCompiler in a new tab ↗](https://onecompiler.com/python){ target="_blank" rel="noopener" }

## Code Template
```python
def solve():
    pass

if __name__ == "__main__":
    solve()
```

## Author's Intent

Bridge from array/query patterns to graph shortest-path thinking.
