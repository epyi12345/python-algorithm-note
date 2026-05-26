# 매개변수 탐색(parametric search)

## What This Is
Binary search on answer value using decision function.

## When to Use It
When asked for min/max value that satisfies a condition.

## Core Idea
Need monotonic feasibility: if C works, larger/smaller side predictable.

## Basic Syntax or Pattern
Shipping concept: `can_ship(capacity)` returns days <= D.

## Step-by-step Example
Search between `max(weights)` and `sum(weights)`.

## Common Mistakes
- Non-monotonic decision function
- Wrong search bounds

## Safe Pattern
Separate decision check from binary search loop cleanly.

## Time Complexity
O(log range * check_cost).

## Related Practice Problems
- [0006. Minimum Shipping Capacity](../practice/0006-minimum-shipping-capacity.md)

## Review Checklist
- Is decision function monotonic?
