# Monotonic Stack

## What it is
A stack maintained in monotonic order for one-pass resolution problems.

## When to use it
- Next greater element
- Previous smaller element

## Basic pattern
While current breaks monotonic condition, pop and resolve popped index.

## Small example
Next higher day waits in O(N).

## Common mistakes
- Wrong strict/non-strict comparison
- Forgetting unresolved defaults

## Related practice problems
- [0005. Next Growth Day](../practice/0005-next-growth-day.md)
