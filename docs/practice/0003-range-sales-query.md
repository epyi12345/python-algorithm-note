# 0003. Range Sales Query

## Type

Prefix Sum / Range Query / Implementation

## Difficulty

Lv.2 Core

## Status

Pending

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

## Rules

1. The sales data contains N integers.
2. The i-th integer represents the number of products sold on day i.
3. Each query contains two integers L and R.
4. For each query, print the sum of sales from day L to day R.
5. Days are numbered from 1 to N.
6. L and R are inclusive.
7. The solution should be efficient for large N and Q.

## Input Format

```text
N Q
sales_1 sales_2 ... sales_N
L R
L R
...
```

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

[Open Python Editor](../tools/python-editor.md){ .md-button .md-button--primary }

[Open OneCompiler in a new tab ↗](https://onecompiler.com/python){ target="_blank" rel="noopener" }

## Code Template

```python
def solve():
    pass

if __name__ == "__main__":
    solve()
```

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