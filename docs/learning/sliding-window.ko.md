# 슬라이딩 윈도우(sliding window)

## What This Is
Window-based incremental range processing.

## When to Use It
Fixed-size or variable-size contiguous range problems.

## Core Idea
Reuse previous window state instead of recomputing each range.

## Basic Syntax or Pattern
```python
# fixed-size sum k
window = sum(arr[:k])
for i in range(k, n):
    window += arr[i] - arr[i-k]
```

## Step-by-step Example
Update by add entering value and remove leaving value.

## Common Mistakes
- Recomputing full window each step
- Wrong left/right updates

## Safe Pattern
Track window state (sum/count/frequency) incrementally.

## Time Complexity
Often O(N).

## Related Practice Problems
- [0004. Target Sales Window](../practice/0004-target-sales-window.md)

## Review Checklist
- Am I updating window in O(1) per step?
