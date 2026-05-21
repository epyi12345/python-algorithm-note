# Python Queue

## What it is
FIFO queue; for BFS use `collections.deque`.

## When to use it
- BFS level traversal
- Ordered processing pipeline

## Basic pattern
`append` to push, `popleft` to pop oldest.

## Small example
Queue nodes with distance in BFS.

## Common mistakes
- Using list pop(0) repeatedly
- Forgetting to enqueue initial state

## Related practice problems
- [0007. Store Map Shortest Path](../practice/0007-store-map-shortest-path.md)
