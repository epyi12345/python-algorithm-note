# 0004. Target Sales Window

## Korean Title

목표 매출 구간 찾기

## Type

Two Pointers / Continuous Range / Implementation

## Difficulty

Lv.2 Core

## Status

Pending

## Problem Background

A store tracks daily sales values and wants to detect the shortest
continuous period that can reach a target sales amount.

## Goal

Given positive daily sales values and a target `S`, print the minimum
length of a contiguous range whose sum is at least `S`. If impossible,
print `0`.

## How to Read This Problem

- `N` is the number of days.
- The sales list has `N` positive values.
- You must choose a contiguous range only.
- The range must satisfy sum >= `S`.

## Prerequisites

- Python input parsing
- Sliding window basics
- Two pointers on arrays

## Problem Summary

Find the minimum contiguous window length with sum at least `S`.

## Detailed Rules

1. You can only use contiguous days.
2. All sales values are positive.
3. Print the shortest valid window length.
4. If no window reaches `S`, print `0`.

## Input Format

```text
N S
sales_1 sales_2 ... sales_N
```

## Output Format

```text
minimum_length
```

## Constraints

```text
1 <= N <= 100000
1 <= S <= 100000000
1 <= sales_i <= 10000
```

## Why Efficiency Matters

A brute-force O(N^2) check over all start/end pairs can time out at
`N = 100000`. Positive values allow an O(N) two pointers approach.

## Examples

### Example 1

Input:

```text
6 7
2 3 1 2 4 3
```

Output:

```text
2
```

### Step-by-step Explanation

- 2 + 3 + 1 + 2 = 8, length 4
- 3 + 1 + 2 + 4 = 10, length 4
- 1 + 2 + 4 = 7, length 3
- 4 + 3 = 7, length 2
Shortest valid length is 2.

### Example 2

Input:

```text
5 100
1 2 3 4 5
```

Output:

```text
0
```

### Step-by-step Explanation

Total sum is 15, so no contiguous range can reach 100.

## Common Misunderstandings

- Selecting non-contiguous values
- Trying all pairs in O(N^2)
- Forgetting to shrink left pointer after sum reaches S

## Hint

If current sum < S, move right pointer.
If current sum >= S, record length and move left pointer.

## Concept Bridge

Because all values are positive, expanding right always increases sum
and shrinking left always decreases sum. This is the key condition for
classic two pointers.

## Related Learning Materials

<div class="learning-links" markdown="1">
<a class="learning-link-card" href="../../learning/two-pointers/"><span class="learning-link-card__title">Two Pointers</span><span class="learning-link-card__desc">Sliding window on positive arrays</span></a>
<a class="learning-link-card" href="../../learning/python-input/"><span class="learning-link-card__title">Python Input</span><span class="learning-link-card__desc">Fast input parsing patterns</span></a>
<a class="learning-link-card" href="../../learning/complexity-guide/"><span class="learning-link-card__title">Complexity Guide</span><span class="learning-link-card__desc">Why O(N) matters here</span></a>
</div>

## Evaluation Points

- Correct contiguous-window handling
- Correct no-solution handling
- O(N) style approach reasoning

## Coding Workspace

Open this problem in Practice Workbench to view the statement and Python
editor side by side.

[Open in Practice Workbench](../../tools/practice-workbench/?problem=0004){ .md-button .md-button--primary }

[Open Python Editor](../tools/python-editor.md){ .md-button .md-button--primary }

[Open OneCompiler in a new tab ↗](https://onecompiler.com/python){ target="_blank" rel="noopener" }

## Code Template

```python
def solve():
    pass

if __name__ == "__main__":
    solve()
```

## Author's Intent

This problem trains the transition from prefix-sum thinking to two
pointers with positive arrays.
