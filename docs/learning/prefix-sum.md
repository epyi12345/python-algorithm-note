# Prefix Sum

## What is a prefix array?

A prefix array stores cumulative sums so each index can represent a sum
from the beginning.

- `prefix[i]` means: sum from the first element through index `i`
  (or through the `i`-th element in 1-based style).
- In practice, many coding-test solutions use an extra leading zero:
  `prefix[0] = 0`.

Why `prefix[0] = 0` is useful:

- It gives one consistent formula for all queries, including `L = 1`.
- You avoid special-case branching for the first range.

Sales example:

```text
sales  = [10, 20, 30, 40, 50]
prefix = [0, 10, 30, 60, 100, 150]
```

## Why use prefix sums?

If you compute each range by direct summation, repeated queries are too
slow.

- Direct approach per query: `sum(arr[L-1:R])`
- If there are `Q` queries over an array of size `N`, worst case can
  become `O(NQ)`.
- Prefix sums preprocess once in `O(N)`, then each query is `O(1)`.

This is especially important in problems like large log analysis,
interval statistics, and cumulative sales dashboards.

## Basic formula

For 1-based queries:

```text
range_sum(L, R) = prefix[R] - prefix[L - 1]
```

Why it works:

- `prefix[R]` includes sum from day 1 to day R.
- `prefix[L - 1]` includes sum from day 1 to day L-1.
- Subtracting removes the left part, leaving only `L..R`.

Example with `sales = [10, 20, 30, 40, 50]`:

- `prefix[4] = 100` (day 1..4)
- `prefix[1] = 10` (day 1..1)
- Query `L=2, R=4`: `100 - 10 = 90` (20+30+40)

## Python implementation (concept example)

This is a concept-focused snippet, not a full practice-page solution.

```python
import sys

input = sys.stdin.readline

n, q = map(int, input().split())
arr = list(map(int, input().split()))

prefix = [0] * (n + 1)
for i in range(1, n + 1):
    prefix[i] = prefix[i - 1] + arr[i - 1]

for _ in range(q):
    l, r = map(int, input().split())
    print(prefix[r] - prefix[l - 1])
```

## Common mistakes

- Forgetting `prefix[0] = 0`
- Mixing 0-based list indexes and 1-based query indexes
- Using `sum(arr[L-1:R])` for every query
- Repeatedly calling `int(...)` because input was stored as strings
- Off-by-one errors with `L` and `R`
- Forgetting that `R` is inclusive

## Safe pattern

1. Read the array as integers.
2. Build prefix with size `N + 1`.
3. Use `prefix[i] = prefix[i - 1] + arr[i - 1]`.
4. Answer each query with `prefix[R] - prefix[L - 1]`.

## Advanced applications

### Conditional prefix sums

You can build prefix arrays for values that satisfy a condition.

Example: count even numbers in each range.

- Build `even_prefix[i]` as number of even values in first `i` elements.
- Range-even-count = `even_prefix[R] - even_prefix[L - 1]`.

This pattern also works for counts above threshold, positive/negative
counts, and conditional totals.

### Multiple prefix arrays

Maintain separate prefix arrays for different categories.

Example categories:

- sales of product A
- sales of product B
- count of cancelled orders
- count of successful orders

Then each query can return multiple metrics in `O(1)` each.

### Prefix sum with hash map

For subarray-target-sum problems, use cumulative sum plus hash map.

Core idea:

- Let `curr_prefix` be running sum up to current index.
- If `curr_prefix - target` appeared before, then a subarray ending here
  has sum `target`.

Typically use `dict` or `collections.Counter` to count previously seen
prefix sums.

### 2D prefix sum

For grid rectangle sums, precompute 2D prefix.

```text
rect_sum(r1, c1, r2, c2)
= prefix[r2][c2]
- prefix[r1 - 1][c2]
- prefix[r2][c1 - 1]
+ prefix[r1 - 1][c1 - 1]
```

This is inclusion-exclusion:

- Add full top-left rectangle
- Subtract extra top strip
- Subtract extra left strip
- Add back overlap once

### Difference array

For many range updates, difference array is often better.

If adding value `x` to `[L, R]`:

```text
diff[L] += x
diff[R + 1] -= x
```

After processing all updates, build final values by prefix summing
`diff`.

## When to suspect prefix sum

| Problem signal | Why prefix sum may help |
|---|---|
| Many range sum queries | Avoid repeated summation |
| Static array, many queries | Precompute once |
| Count items in [L, R] | Prefix count |
| Need rectangle sum in grid | 2D prefix sum |
| Many range updates | Difference array |

## Related practice problems

- [0003. Range Sales Query](../practice/0003-range-sales-query.md)
