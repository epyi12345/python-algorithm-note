# Dict and Defaultdict

## What it is

`dict` maps keys to values. `defaultdict(int)` simplifies numeric accumulation.

## When to use it

- Product/user aggregation
- Frequency counting
- Incremental totals

## Basic syntax

```python
result = {}
result[product] = result.get(product, 0) + qty

from collections import defaultdict
result = defaultdict(int)
result[product] += qty
```

## Small example

```python
if status == "PAY":
    result[product] += qty
else:
    result[product] -= qty
```

## Common mistakes

- Forgetting key initialization in plain dict
- Mixing string and int values

## Safe pattern

- Prefer `defaultdict(int)` for accumulation
- Keep numeric types consistent

## Related practice problems

- [0001. Order Settlement](../practice/0001-order-settlement.md)
- [0002. Popular Products](../practice/0002-popular-products.md)
