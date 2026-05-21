# 0005. Next Growth Day

## Korean Title

다음 성장일 찾기

## Type

Stack / Monotonic Stack / Implementation

## Difficulty

Lv.2 Core

## Status

Pending

## Problem Background

For each day, we want to know how long to wait until a strictly higher
visitor count appears.

## Goal

Print waiting days for each index; if no higher later value exists,
print 0.

## How to Read This Problem

- Day order matters.
- Need strictly higher value (`>`).
- Output length equals N.

## Prerequisites

- Stack basics
- Index-based array processing

## Problem Summary

Find next greater element distance for each day.

## Detailed Rules

1. Use only later days for comparison.
2. Need strictly higher count.
3. Output 0 if unresolved.

## Input Format

```text
N
visitors_1 visitors_2 ... visitors_N
```

## Output Format

```text
wait_1 wait_2 ... wait_N
```

## Constraints

```text
1 <= N <= 100000
0 <= visitors_i <= 1000000
```

## Why Efficiency Matters

Nested loops can degrade to O(N^2). Monotonic stack solves in O(N).

## Examples

### Example 1
Input:
```text
6
5 3 8 4 6 10
```
Output:
```text
2 1 3 1 1 0
```
### Step-by-step Explanation
Each day waits until first later strictly higher count.

### Example 2
Input:
```text
5
9 8 7 6 5
```
Output:
```text
0 0 0 0 0
```
### Step-by-step Explanation
No day has a later higher count.

## Common Misunderstandings

- Using `>=` instead of `>`
- Storing values only, not indexes
- Forgetting unresolved values remain 0

## Hint

Keep unresolved indexes in stack. Resolve while current value is higher
than stack-top index value.

## Concept Bridge

This is the classic monotonic stack “next greater element” pattern.

## Related Learning Materials

<div class="learning-links" markdown="1">
<a class="learning-link-card" href="../../learning/python-stack/"><span class="learning-link-card__title">Stack</span><span class="learning-link-card__desc">Index-based stack handling</span></a>
<a class="learning-link-card" href="../../learning/monotonic-stack/"><span class="learning-link-card__title">Monotonic Stack</span><span class="learning-link-card__desc">Resolve next-greater queries in O(N)</span></a>
<a class="learning-link-card" href="../../learning/complexity-guide/"><span class="learning-link-card__title">Complexity Guide</span><span class="learning-link-card__desc">Avoiding O(N^2) loops</span></a>
</div>

## Evaluation Points

- Strictly-higher interpretation
- Correct waiting-day calculation
- O(N) reasoning

## Code Template
```python
def solve():
    pass

if __name__ == "__main__":
    solve()
```

## Author's Intent

Train monotonic stack with index-distance output.
