# Queue and deque

## What This Is
FIFO processing using `collections.deque`.

## When to Use It
BFS or ordered processing pipelines.

## Core Idea
Use append/popleft in O(1).

## Basic Syntax or Pattern
```python
from collections import deque
q=deque([start])
while q:
    cur=q.popleft()
```

## Step-by-step Example
Queue handles first-in-first-out traversal order.

## Common Mistakes
- Using list.pop(0) repeatedly
- Forgetting initial enqueue

## Safe Pattern
Prefer deque for queue semantics and performance.

## Time Complexity
O(1) amortized per append/popleft.

## Related Practice Problems
- [0007. Store Map Shortest Path](../practice/0007-store-map-shortest-path.md)

## Review Checklist
- Did I use deque instead of list.pop(0)?
