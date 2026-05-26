# 격자 탐색(grid movement)

## What This Is
Standard row/column traversal with direction vectors.

## When to Use It
Maze, map simulation, BFS/DFS on grid.

## Core Idea
Use `dr/dc` arrays and boundary + wall checks.

## Basic Syntax or Pattern
```python
dr=[1,-1,0,0]; dc=[0,0,1,-1]
for k in range(4):
    nr, nc = r+dr[k], c+dc[k]
```

## Step-by-step Example
Check `0<=nr<N and 0<=nc<M` before access.

## Common Mistakes
- Swapping row/col
- Missing bounds
- Crossing walls

## Safe Pattern
Centralize `in_range` helper and visited checks.

## Time Complexity
O(NM) traversal for full scan.

## Related Practice Problems
- [0007. Store Map Shortest Path](../practice/0007-store-map-shortest-path.md)

## Review Checklist
- Are boundary and wall checks explicit?
