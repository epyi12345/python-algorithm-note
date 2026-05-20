# Sorting

## What it is

Sorting arranges values into deterministic order for required output.

## When to use it

- Output order is required
- Tie-break by name/key

## Basic syntax

```python
sorted(nums)
sorted(data)
sorted(data.items())
sorted(items, key=lambda x: x[1])
sorted(items, key=lambda x: x[1], reverse=True)
```

## Small example

```python
for product in sorted(valid):
    print(product, valid[product])
```

## Common mistakes

- Sorting everything when only max is needed
- Sorting by value when tie-break needs name

## Safe pattern

- Sort only the final output candidates
- Match sort key to problem statement

## Related practice problems

- [0001. Order Settlement](../practice/0001-order-settlement.md)
- [0002. Popular Products](../practice/0002-popular-products.md)
