# 힙(heap)과 우선순위 큐(priority queue)

## What This Is
Structure for repeated min/max extraction efficiently.

## When to Use It
Scheduling, top-k, shortest-first processing.

## Core Idea
Python `heapq` is min-heap; max-heap via negative values.

## Basic Syntax or Pattern
```python
import heapq
h=[]
heapq.heappush(h, x)
small=heapq.heappop(h)
```

## Step-by-step Example
Use push/pop to keep best candidate available quickly.

## Common Mistakes
- Sorting every step
- Forgetting min-heap default

## Safe Pattern
For max behavior, push `-value`.

## Time Complexity
Each push/pop O(log N).

## Related Practice Problems
- [0007. Store Map Shortest Path](../practice/0007-store-map-shortest-path.md)

## Review Checklist
- Is heap needed over full re-sort?
