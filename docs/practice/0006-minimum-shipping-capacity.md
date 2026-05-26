# 0006. Minimum Shipping Capacity

## Korean Title

최소 배송 용량 찾기

## Type

Binary Search / Parametric Search / Greedy Check

## Difficulty

Lv.3 Intermediate

## Status

Pending

## Problem Background

Packages must be shipped in fixed order within limited days.

## Goal

Find the minimum truck capacity that ships all packages within D days.

## How to Read This Problem

- Package order cannot change.
- Package split is not allowed.
- Capacity is the search target value.

## Prerequisites

- Binary search
- Greedy simulation check

## Problem Summary

Binary search on answer with a day-count check function.

## Detailed Rules
1. Preserve package order.
2. Each day sum must not exceed capacity.
3. Find minimum capacity satisfying day limit.

## Input Format
```text
N D
weight_1 weight_2 ... weight_N
```

## Output Format
```text
minimum_capacity
```

## Constraints
```text
1 <= N <= 100000
1 <= D <= N
1 <= weight_i <= 100000
```

## Why Efficiency Matters

Trying every capacity is too slow. Binary search over `[max(weights), sum(weights)]`
with O(N) check gives O(N log range).

## Examples
### Example 1
Input:
```text
5 3
1 2 3 4 5
```
Output:
```text
6
```
### Step-by-step Explanation
Capacity 6 works in 3 days; capacity 5 needs 4 days.

### Example 2
Input:
```text
6 3
7 2 5 10 8 1
```
Output:
```text
14
```
### Step-by-step Explanation
14 works in 3 days; 13 needs 4 days.

## Common Misunderstandings

- Sorting packages (not allowed)
- Binary-searching indexes instead of capacity
- Left bound below max(weights)

## Hint

Binary-search capacity, and for each candidate simulate required days.

## Concept Bridge

This is parametric search: decision check + monotonic feasibility.

## Related Learning Materials

<div class="learning-links" markdown="1">
<a class="learning-link-card" href="../../learning/binary-search/"><span class="learning-link-card__title">Binary Search</span><span class="learning-link-card__desc">Search over ordered answer space</span></a>
<a class="learning-link-card" href="../../learning/parametric-search/"><span class="learning-link-card__title">Parametric Search</span><span class="learning-link-card__desc">Feasibility-based answer search</span></a>
<a class="learning-link-card" href="../../learning/complexity-guide/"><span class="learning-link-card__title">Complexity Guide</span><span class="learning-link-card__desc">O(N log range) interpretation</span></a>
</div>

## Evaluation Points

- Correct bounds
- Correct check function
- Minimum feasible answer

## Code Template
```python
def solve():
    pass

if __name__ == "__main__":
    solve()
```

## Author's Intent

Train binary search on answer with realistic constraints.
