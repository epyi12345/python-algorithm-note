# 0003. Range Sales Query

## Type

Prefix Sum / Range Query / Implementation

## Difficulty

Lv.2 Core

## Status

Solved with review

## Problem Background

A shopping mall tracks daily sales counts for N days, then receives many
queries asking for total sales over specific date ranges.

For example, if daily sales are:

```text
10 20 30 40 50
```

then total sales from day 1 to day 3 are `10 + 20 + 30 = 60`.

## Goal

For each of Q queries, print the total sales from day L to day R quickly
and correctly.

## How to Read This Problem

- `N` is the number of days in the sales array.
- `Q` is the number of range queries.
- The second input line contains `N` sales values.
- Each of the next `Q` lines contains `L R`.
- `L` and `R` are 1-based day indexes.
- The range `[L, R]` is inclusive.

## Prerequisites

Before solving this problem, the learner should understand:

- Reading input with sys.stdin.readline
- Reading a list of integers with map and split
- Using a list to store numbers
- Using 1-based query indexes
- Understanding why repeated range summation can be too slow
- Basic idea of prefix sums

## Problem Summary

A shopping mall records the number of products sold each day.

There are N days of sales data.

You are given Q range queries.  
Each query asks for the total number of products sold from day L to day R,
inclusive.

For each query, print the total sales in that range.

## Detailed Rules

1. The sales data contains N integers.
2. The i-th integer represents the number of products sold on day i.
3. Each query contains two integers L and R.
4. For each query, print the sum of sales from day L to day R.
5. Days are numbered from 1 to N.
6. L and R are inclusive.
7. The solution should be efficient for large N and Q.

## Input Meaning

Input provides one sales array and many independent range-sum queries over that array.

## Input Format

```text
N Q
sales_1 sales_2 ... sales_N
L R
L R
...
```

## Output Meaning

For each query, output one number: the inclusive sum from day L to day R.

## Output Format

Print one integer for each query.

```text
range_sum
range_sum
...
```

## Constraints

```text
1 <= N <= 100000
1 <= Q <= 100000
0 <= sales_i <= 1000
1 <= L <= R <= N
```

## Why Efficiency Matters

With `N` and `Q` up to `100000`, summing each query range directly can lead to `O(NQ)` worst-case time, which is too slow.

Use prefix sums so each query can be answered in `O(1)` after `O(N)` preprocessing.

## Concept Bridge

This problem is a direct practice case for prefix sum.

```text
prefix[i] = sum of sales from day 1 to day i
```

Then:

```text
range(L, R) = prefix[R] - prefix[L - 1]
```

## Examples

### Example 1

Input:

```text
5 3
10 20 30 40 50
1 3
2 5
4 4
```

Output:

```text
60
140
40
```

### Explanation 1

For the first query:

```text
day 1 to day 3 = 10 + 20 + 30 = 60
```

For the second query:

```text
day 2 to day 5 = 20 + 30 + 40 + 50 = 140
```

For the third query:

```text
day 4 to day 4 = 40
```

### Example 2

Input:

```text
6 4
0 5 0 10 20 5
1 6
2 4
3 3
5 6
```

Output:

```text
40
15
0
25
```

### Explanation 2

Final query results:

```text
day 1 to day 6 = 0 + 5 + 0 + 10 + 20 + 5 = 40
day 2 to day 4 = 5 + 0 + 10 = 15
day 3 to day 3 = 0
day 5 to day 6 = 20 + 5 = 25
```

## Evaluation Points

- Correct input handling
- Correct use of 1-based indexes
- Correct prefix sum construction
- Correct range sum formula
- Avoiding O(NQ) repeated summation
- Handling single-day queries where L equals R
- Explaining time and space complexity

## Online Editor

Use OneCompiler Python editor to test your solution when a local Python
environment is not available.

## Coding Workspace

Open this problem in Practice Workbench to view the statement and Python
editor side by side.

[Open in Practice Workbench](../../tools/practice-workbench/?problem=0003){ .md-button .md-button--primary }

[Open Python Editor](../tools/python-editor.md){ .md-button .md-button--primary }

[Open OneCompiler in a new tab ↗](https://onecompiler.com/python){ target="_blank" rel="noopener" }

## Code Template

```python
def solve():
    pass

if __name__ == "__main__":
    solve()
```

## Common Misunderstandings

- `L` and `R` are 1-based day numbers, not 0-based array indexes.
- `R` is included in the range.
- Using `sum(sales[L-1:R])` per query may pass small cases but can time out on large inputs.
- Setting `prefix[0] = 0` makes `L = 1` cases use the same formula safely.

## Hint

Use prefix sums to avoid repeated `sum(...)` calls per query.

### Related learning materials

<div class="learning-links" markdown="1">

<a class="learning-link-card" href="../../learning/python-input/">
  <span class="learning-link-card__title">Python input</span>
  <span class="learning-link-card__desc">sys.stdin.readline, split, map, repeated input</span>
</a>

<a class="learning-link-card" href="../../learning/prefix-sum/">
  <span class="learning-link-card__title">Prefix Sum</span>
  <span class="learning-link-card__desc">Build prefix once, answer range sums in O(1)</span>
</a>

<a class="learning-link-card" href="../../learning/complexity-guide/">
  <span class="learning-link-card__title">Complexity Guide</span>
  <span class="learning-link-card__desc">Estimate worst-case operations before implementation</span>
</a>

</div>