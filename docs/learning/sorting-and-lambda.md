# Sorting and lambda

## What This Is
How to sort lists and records with custom keys.

## When to Use It
When output order or tie-break rules are required.

## Core Idea
Use `sorted()` with `key=lambda ...` and reverse option.

## Basic Syntax or Pattern
```python
items = [("banana", 5), ("apple", 5), ("carrot", 3)]
print(sorted(items, key=lambda x: (-x[1], x[0])))
```

## Step-by-step Example
Primary key desc by count, secondary asc by name for tie-break.

## Common Mistakes
- Forgetting stable tie-break key
- Sorting dict directly when items needed

## Safe Pattern
Always write required priority order explicitly in key tuple.

## Time Complexity
O(N log N).

## Related Practice Problems
- [0001. Order Settlement](../practice/0001-order-settlement.md)
- [0002. Popular Products](../practice/0002-popular-products.md)

## Review Checklist
- Does my key match tie-break rules?
