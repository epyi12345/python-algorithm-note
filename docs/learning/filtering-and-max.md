# Filtering and Max

## What it is

A pattern for selecting valid values and printing only max-value results.

## When to use it

- Need only top value outputs
- Need to exclude non-positive totals

## Basic syntax

```python
valid = {k: v for k, v in result.items() if v > 0}
if not valid:
    print("NONE")
    return
max_qty = max(valid.values())
```

## Small example

```python
for product in sorted(valid):
    if valid[product] == max_qty:
        print(product, valid[product])
```

## Common mistakes

- Printing all positive values instead of max-only
- Calling `max()` before empty check

## Safe pattern

- Filter first
- Check empty case
- Compute max
- Print matching entries only

## Related practice problems

- [0002. Popular Products](../practice/0002-popular-products.md)
