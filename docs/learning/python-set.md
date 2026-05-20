# Set

## What it is

`set` stores unique values and supports fast membership checks.

## When to use it

- Duplicate detection
- Seen/unseen tracking
- Fast `in` lookup

## Basic syntax

```python
seen = set()
if key in seen:
    continue
seen.add(key)
```

## Small example

```python
key = (order_id, product, qty, status)
if key in seen:
    continue
seen.add(key)
```

## Common mistakes

- Using list for duplicate checks (slow)
- Building ambiguous keys

## Safe pattern

- Use tuple keys for multi-field identity
- Check membership first, then add

## Related practice problems

- [0001. Order Settlement](../practice/0001-order-settlement.md)
- [0002. Popular Products](../practice/0002-popular-products.md)
