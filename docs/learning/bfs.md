# BFS

## What This Is
Breadth-first search by distance layers.

## When to Use It
Unweighted shortest path on graph/grid.

## Core Idea
Queue + visited + distance increments by layers.

## Basic Syntax or Pattern
```python
from collections import deque
q=deque([(sr,sc,0)])
visited={(sr,sc)}
```

## Step-by-step Example
Expand four neighbors and record first reach distance.

## Common Mistakes
- Missing visited
- Using DFS for shortest path guarantee

## Safe Pattern
Mark visited when enqueueing to prevent duplicates.

## Time Complexity
O(V+E) / O(NM) on grid.

## Related Practice Problems
- [0007. Store Map Shortest Path](../practice/0007-store-map-shortest-path.md)

## Review Checklist
- Do I track distance with BFS layers?
