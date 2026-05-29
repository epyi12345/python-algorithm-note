# Time and Memory Complexity

## What This Is

Complexity checking is the habit of estimating **runtime** and **memory usage** before writing code. It helps you reject approaches that are too slow or too large for the constraints.

Time complexity describes how the number of operations grows. Memory complexity, also called space complexity, describes how much extra storage the algorithm needs.

## When to Use It

Use this check immediately after reading a problem, especially when you see:

- Large constraints such as `N`, `Q`, or `N * M`.
- Repeated queries over the same data.
- Nested loops over large inputs.
- Large arrays, grids, dictionaries, sets, queues, stacks, or DP tables.
- Python recursion that may go deep.

## Core Idea

Read the largest input size first, then estimate the worst-case operation count and the largest data structures.

For example:

- `N` usually means one-dimensional input size.
- `Q` usually means the number of queries.
- `N * M` often means every cell in a grid.
- If both `N` and `Q` can be large, `O(NQ)` is dangerous.

A solution that is correct on sample input can still fail when the worst case is much larger.

## Time Complexity Check

### Read the constraints

Before coding, write down the largest values that matter:

```text
N <= 100000
Q <= 100000
```

Then estimate the approach:

```text
Direct work per query: O(N)
Number of queries: Q
Total: O(NQ)
```

If `N = 100000` and `Q = 100000`, then `O(NQ)` can mean about:

```text
100000 * 100000 = 10000000000
```

That is too large for typical coding-test limits.

### Common acceptable ranges

Exact limits depend on language, judge hardware, and time limit, but these rules are useful for first-pass decisions.

| Constraint shape | Usually acceptable | Usually risky |
|---|---|---|
| Small `N` such as `N <= 100` | Nested loops may be fine | Over-optimizing too early |
| `N <= 1000` | `O(N^2)` may pass | `O(N^3)` may be risky |
| `N <= 100000` | `O(N)` or `O(N log N)` | `O(N^2)` |
| Many queries `Q` | Preprocessing + fast query | Recomputing from scratch per query |
| Grid `N * M` | Visit each cell once | Repeated full-grid scans |

### Examples

| Approach | Time complexity | Why |
|---|---:|---|
| Direct range sum per query | `O(NQ)` | Each query may scan up to `N` values |
| Prefix sum | `O(N + Q)` | Precompute once, answer each query in `O(1)` |
| Sorting | `O(N log N)` | Typical comparison sort cost |
| BFS on a grid | `O(N * M)` | Each grid cell is visited at most once |

## Memory Complexity Check

Memory complexity asks: **what large structures will exist at the same time?**

Do not try to guess exact bytes unless the problem requires it. Practical Big-O memory reasoning is usually enough, and byte-level details depend on the Python runtime and environment.

Common estimates:

| Structure | Memory complexity |
|---|---:|
| Input list or array | `O(N)` |
| Prefix array | `O(N)` |
| 2D grid | `O(N * M)` |
| 2D visited array | `O(N * M)` |
| Dictionary or set | `O(number of unique keys)` |
| Queue or stack | Worst case `O(N)` or `O(N * M)` |
| DP table | Depends on state count |
| Recursion stack | Up to recursion depth |

### Slicing and copies matter

In Python, slicing creates a new list:

```python
part = arr[l:r]
```

If this happens inside a loop, it can add both time and memory overhead. For range sums, prefer prefix sums instead of repeatedly creating slices.

### Streaming output can reduce memory

If the problem allows immediate output, you do not always need to store every intermediate result. Batched output can still be useful for speed, but avoid keeping large result lists when streaming or chunking is enough.

## Practical Checklist Before Coding

Ask these questions before implementing:

- What is the largest input size?
- How many nested loops do I have?
- Are there repeated queries?
- Can I preprocess?
- What large arrays, sets, dicts, queues, stacks, or visited tables will I allocate?
- Is the memory proportional to `N`, `N * M`, or something larger?
- Am I accidentally copying lists or slices?
- Can I stream or process data without storing everything?
- Is recursion depth safe in Python?

## Common Memory Mistakes

### Using `list.pop(0)` for queues

`list.pop(0)` shifts the remaining list and is inefficient for queue behavior. Use `collections.deque` and `popleft()`.

### Creating slices inside loops

```python
for l, r in queries:
    total = sum(arr[l:r])
```

This creates a new slice for each query and can turn into extra time and memory work. Prefer index-based logic or preprocessing.

### Storing every query result unnecessarily

If output can be streamed, avoid storing all answers unless batched output is needed for performance.

### Creating multiple unnecessary copies

Calls such as `list(arr)`, `arr[:]`, or repeated conversions can duplicate large inputs. Keep one representation unless another copy is truly needed.

### Ignoring recursion depth

Recursive DFS can use one stack frame per depth level. In Python, deep recursion can fail or consume too much stack space. Consider iterative DFS when depth can be large.

### Allocating a full 2D visited table too quickly

A `visited` table for an `N * M` grid is `O(N * M)`. That is normal for many grid BFS problems, but it may be too large if constraints describe a huge sparse space. In sparse cases, a set of visited coordinates may be more appropriate.

## Pattern Table

| Pattern | Time | Memory | Notes |
|---|---:|---:|---|
| Single loop | `O(N)` | `O(1)` or `O(N)` | Depends on whether results are stored |
| Sorting | `O(N log N)` | Depends on implementation/output | `sorted()` returns a new list; `.sort()` sorts in place |
| Prefix sum | `O(N + Q)` | `O(N)` | Good for repeated range queries |
| Two pointers | `O(N)` | Usually `O(1)` | Often works for continuous ranges |
| Monotonic stack | `O(N)` | `O(N)` | Each index is pushed/popped at most once |
| BFS on grid | `O(N * M)` | `O(N * M)` | Queue and visited can grow with grid size |
| Binary search | `O(log answer * check_cost)` | Depends on check | Used for sorted space or answer search |
| DP | Depends on state count | Depends on state count | Define state before coding |

## Safe Pattern

1. Read `N`, `Q`, grid sizes, and value ranges.
2. Estimate time complexity from loops and repeated work.
3. Estimate memory complexity from stored structures.
4. Reject approaches that are clearly too large.
5. Choose a pattern that matches the constraint pressure.

Examples:

```text
Many range-sum queries -> prefix sum
Continuous positive range -> two pointers / sliding window
Next greater value -> monotonic stack
Unweighted grid shortest path -> BFS
Minimum feasible value -> binary search / parametric search
Repeated overlapping states -> DP
```

## Related Practice Problems

- [0003. Range Sales Query](../practice/0003-range-sales-query.md)
- [0004. Target Sales Window](../practice/0004-target-sales-window.md)
- [0005. Next Growth Day](../practice/0005-next-growth-day.md)
- [0006. Minimum Shipping Capacity](../practice/0006-minimum-shipping-capacity.md)
- [0007. Store Map Shortest Path](../practice/0007-store-map-shortest-path.md)

## Review Checklist

- Did I check the largest possible `N`, `Q`, or `N * M`?
- Did I estimate the worst-case operation count?
- Does any loop structure create `O(N^2)` or `O(NQ)` by accident?
- Are repeated queries handled with preprocessing when needed?
- What large arrays, dicts, sets, queues, stacks, or visited tables am I storing?
- Is memory `O(N)`, `O(N * M)`, or larger?
- Am I creating slices or copies inside loops?
- Can I stream results instead of storing everything?
- Is recursion depth safe for Python?
