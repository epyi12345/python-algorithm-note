# Complexity Guide

## Why time complexity matters

Even correct logic can fail if it runs too slowly. Large input sizes
require efficient patterns.

## N-size judgment table

| Input size (N) | Preferred complexity |
|---|---|
| up to 1,000 | O(N^2) can be acceptable |
| up to 100,000 | Usually O(N log N) or O(N) |
| up to 1,000,000 | Usually O(N) or better |

## Common complexities

- O(1): constant-time lookup or operation
- O(log N): binary search
- O(N): single pass
- O(N log N): sorting-based
- O(N^2): double loop over N
- O(NQ): nested work over N and Q, often too slow at scale

## Why repeated range summation is slow

If each query runs `sum(arr[L:R])`, one query can take O(N).
With Q queries, total can become O(NQ), which is too slow for large
constraints.

## Complexity checklist

- Check input size first.
- Estimate worst-case operations.
- Choose data structure based on constraints.
