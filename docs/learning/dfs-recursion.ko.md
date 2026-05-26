# DFS와 재귀(recursion)

## What This Is
Depth-first traversal with recursion or explicit stack.

## When to Use It
Connected components, path existence, exhaustive traversal.

## Core Idea
Recursive call over unvisited neighbors.

## Basic Syntax or Pattern
```python
def dfs(u):
    visited.add(u)
    for v in graph[u]:
        if v not in visited:
            dfs(v)
```

## Step-by-step Example
Traverse as deep as possible before backtracking.

## Common Mistakes
- Recursion depth overflow
- Missing visited checks

## Safe Pattern
For deep graphs, consider iterative DFS with stack.

## Time Complexity
O(V+E).

## Related Practice Problems
- [0007. Store Map Shortest Path](../practice/0007-store-map-shortest-path.md)

## Review Checklist
- Is recursion depth safe for constraints?
