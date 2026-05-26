# defaultdict

## What This Is
Dictionary with automatic default values.

## When to Use It
When repeated key initialization is noisy.

## Core Idea
`defaultdict(int)` removes manual `if key not in dict`.

## Basic Syntax or Pattern
```python
from collections import defaultdict
acc = defaultdict(int)
acc["apple"] += 3
```

## Step-by-step Example
Every unseen key starts at 0 for int factory.

## Common Mistakes
- Using normal dict then getting KeyError
- Forgetting factory type

## Safe Pattern
Use `defaultdict(int)` for numeric accumulation patterns.

## Time Complexity
O(1) average per update.

## Related Practice Problems
- [0001. Order Settlement](../practice/0001-order-settlement.md)
- [0002. Popular Products](../practice/0002-popular-products.md)

## Review Checklist
- Did I remove manual key-init branches?
