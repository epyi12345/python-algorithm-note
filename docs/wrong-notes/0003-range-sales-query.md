# 0003. Range Sales Query

## Type

Prefix Sum / Range Query / Implementation

## Difficulty

Lv.2 Core

## Status

Solved with review

## Score

98/100

## Problem Summary

- Given N days of sales data and Q range queries.
- Each query asks for the total sales from day L to day R.
- L and R are 1-based and inclusive.
- Directly summing every range can be too slow when N and Q are large.
- A prefix sum array allows each query to be answered in O(1).

## My Attempts

### Attempt 1

<div class="code-review" markdown="1">
<div class="code-review__code" markdown="1">

**Submitted code**

```python
import sys

def solve():
    input = sys.stdin.readline

    n, q = map(int, input().split())

    day_list = list(input().split())

    result = list()

    for _ in range(q):
        s_date, e_date = map(int, input().split())
        date_range = range(s_date - 1, e_date)
        temp_sum = list()
        for i in date_range:
            temp_sum.append(int(day_list[i]))
        result.append(sum(temp_sum))
    print(*result, sep="\n")


if __name__ == "__main__":
    solve()
```

</div>
<div class="code-review__note" markdown="1">

**Reviewer feedback**

Correct parts:
- The input format was understood correctly.
- N and Q were separated correctly.
- The query range was converted from 1-based to 0-based indexing.
- The sample-level range sum could be calculated correctly.

Issues:
- Each query directly iterated over the range again.
- The worst-case time complexity becomes O(NQ).
- With N and Q up to 100000, this can cause time limit exceeded.
- day_list was stored as strings, so int conversion was repeated.
- temp_sum was created for every query, causing unnecessary memory use.

Improvement:
- Read sales as integers from the beginning.
- Build a prefix sum array once.
- Use prefix[R] - prefix[L - 1] to answer each query in O(1).
- Keep prefix[0] = 0 to handle ranges starting at day 1 cleanly.

</div>
</div>

### Attempt 2

<div class="code-review" markdown="1">
<div class="code-review__code" markdown="1">

**Submitted code**

```python
import sys

def solve():
    input = sys.stdin.readline
    
    n, q = map(int, input().split())

    sales = list(map(int, input().split()))

    prefix = [0] * (n + 1)

    for i in range(1, n + 1):
        prefix[i] = prefix[i - 1] + sales[i - 1]

    result = []

    for _ in range(q):
        s_date, e_date = map(int, input().split())
        result.append(prefix[e_date] - prefix[s_date - 1])

    print(*result, sep="\n")


if __name__ == "__main__":
    solve()
```

</div>
<div class="code-review__note" markdown="1">

**Reviewer feedback**

Correct parts:
- sales was read as an integer list.
- prefix was created with size n + 1.
- prefix[0] = 0 was used correctly.
- prefix[i] = prefix[i - 1] + sales[i - 1] was implemented correctly.
- Each query was answered with prefix[R] - prefix[L - 1].
- The solution reduces query processing from O(NQ) to O(N + Q).

Issues:
- No major correctness issue remains.
- Minor naming option: l and r are more common in general range query
  problems, but s_date and e_date are clear in this sales-date context.

Improvement:
- Keep this prefix sum pattern for future range query problems.
- Always check whether indexes are 1-based or 0-based before applying
  the formula.

</div>
</div>

## Final Recommended Solution

Use the same final solution as Attempt 2:

```python
import sys

def solve():
    input = sys.stdin.readline
    
    n, q = map(int, input().split())

    sales = list(map(int, input().split()))

    prefix = [0] * (n + 1)

    for i in range(1, n + 1):
        prefix[i] = prefix[i - 1] + sales[i - 1]

    result = []

    for _ in range(q):
        s_date, e_date = map(int, input().split())
        result.append(prefix[e_date] - prefix[s_date - 1])

    print(*result, sep="\n")


if __name__ == "__main__":
    solve()
```

## Key Lessons

- Directly summing every query range can pass small examples but fail
  large constraints.
- Prefix sums are useful when the array is static and there are many
  range sum queries.
- prefix[0] = 0 makes 1-based range queries easier to handle.
- For 1-based inclusive queries, use prefix[R] - prefix[L - 1].
- Preprocessing once can reduce repeated query work dramatically.

## Complexity

For the final solution:

- Time complexity: O(N + Q)
- Space complexity: O(N + Q)

Where:
- N is the number of sales records.
- Q is the number of range queries.

The prefix array uses O(N) space.
The result list uses O(Q) space.

## Review Checklist

- Did I read the numbers as integers?
- Did I create prefix with size N + 1?
- Did I keep prefix[0] = 0?
- Did I use sales[i - 1] when building prefix[i]?
- Did I remember that L and R are 1-based?
- Did I calculate the range sum with prefix[R] - prefix[L - 1]?
- Did I avoid sum(arr[L-1:R]) inside every query?
