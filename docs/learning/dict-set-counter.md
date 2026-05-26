# dict, set, Counter

## What This Is
Core hash-based tools in Python.

## When to Use It
Counting, grouping, duplicate detection, frequency ranking.

## Core Idea
dict accumulates values, set tracks uniqueness, Counter gives frequency API.

## Basic Syntax or Pattern
```python
from collections import Counter
seen = set()
acc = {}
for x in ["a", "b", "a"]:
    seen.add(x)
    acc[x] = acc.get(x, 0) + 1
freq = Counter(["a", "b", "a"])
```

## Step-by-step Example
Use tuple keys for multi-field identity like `(id, product, qty, status)`.

## Common Mistakes
- Forgetting tuple key immutability needs
- Assuming set keeps order

## Safe Pattern
Pick by intent: uniqueness(set), accumulation(dict), frequency(Counter).

## Time Complexity
Average O(1) per hash operation.

## Related Practice Problems
- [0001. Order Settlement](../practice/0001-order-settlement.md)
- [0002. Popular Products](../practice/0002-popular-products.md)

## Review Checklist
- Did I choose the right hash container?
