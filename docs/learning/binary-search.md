# Binary Search

## What it is
Divide search space by midpoint checks on monotonic condition.

## When to use it
- Sorted data search
- Ordered answer space search

## Basic pattern
If mid is feasible, move right bound left; else move left bound right.

## Small example
Minimum shipping capacity over [max(weights), sum(weights)].

## Common mistakes
- Wrong bounds
- Infinite loop from bad updates

## Related practice problems
- [0006. Minimum Shipping Capacity](../practice/0006-minimum-shipping-capacity.md)
