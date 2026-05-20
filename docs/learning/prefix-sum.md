# Prefix Sum

## What it is

Prefix sum precomputes cumulative totals for fast range-sum queries.

## When to use it

- Many range queries
- Repeated summation is too slow

## Basic syntax

```python
prefix = [0]
for x in arr:
    prefix.append(prefix[-1] + x)

range_sum = prefix[R] - prefix[L - 1]
```

## Small example

```python
arr = [10, 20, 30]
prefix = [0, 10, 30, 60]
# sum day 2..3 = 50
```

## Common mistakes

- Missing `prefix[0] = 0`
- Off-by-one with 1-based indexes
- Recomputing `sum(arr[L:R])` for each query

## Safe pattern

- Build prefix once in O(N)
- Answer each query in O(1)

## Related practice problems

- [0003. Range Sales Query](../practice/0003-range-sales-query.md)
