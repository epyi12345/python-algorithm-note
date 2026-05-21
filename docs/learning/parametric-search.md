# Parametric Search

## What it is
Binary search on answer values using feasibility check function.

## When to use it
- Need minimum/maximum value satisfying a condition

## Basic pattern
Define `can(x)` and binary-search smallest/ largest feasible x.

## Small example
Can all packages be shipped in D days with capacity C?

## Common mistakes
- Non-monotonic check function
- Using wrong search interval

## Related practice problems
- [0006. Minimum Shipping Capacity](../practice/0006-minimum-shipping-capacity.md)
