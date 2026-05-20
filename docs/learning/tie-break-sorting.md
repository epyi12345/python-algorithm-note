# Tie-break Sorting

## What it is

Tie-break means how to order items when primary values are equal.

## When to use it

- Multiple items share the same score/quantity
- Output requires stable deterministic order

## Basic syntax

```python
# sort by name for tied max values
for name in sorted(candidates):
    print(name, candidates[name])
```

## Small example

- Value sorting picks largest values.
- Name sorting resolves ties among equal values.

## Common mistakes

- Sorting only by value and ignoring tie-break rule
- Printing tied items in input order

## Safe pattern

- First detect target value (e.g., max)
- Then sort tied keys by required order

## Related practice problems

- [0002. Popular Products](../practice/0002-popular-products.md)
