# 이분 탐색(binary search)

## What This Is
Halving search interval on monotonic condition.

## When to Use It
Sorted data or ordered feasible space.

## Core Idea
Use `left`, `right`, `mid` with `while left <= right`.

## Basic Syntax or Pattern
```python
while left <= right:
    mid = (left + right)//2
    if cond(mid):
        right = mid - 1
    else:
        left = mid + 1
```

## Step-by-step Example
Maintain invariant of search interval and shrink correctly.

## Common Mistakes
- Infinite loops from bad updates
- Wrong boundary initialization

## Safe Pattern
Define target variant (exact/lower-bound) before coding.

## Time Complexity
O(log N) checks; total depends on check cost.

## Related Practice Problems
- [0006. Minimum Shipping Capacity](../practice/0006-minimum-shipping-capacity.md)

## Review Checklist
- Do left/right updates strictly move?
