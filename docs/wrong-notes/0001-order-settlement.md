---
hide:
  - toc
---

# 0001. Order Settlement

## Problem Summary

- Given order logs with order id, product, quantity, and status.
- PAY increases product quantity.
- REFUND decreases product quantity.
- Identical logs must be processed only once.
- Products with final quantity less than or equal to 0 are not printed.
- Output must be sorted by product name.

## Type

Hash / Implementation / Duplicate handling / Sorting

## Difficulty

Lv.1 Basic

## Status

Solved with review

## Score

85/100

## My Attempts

### Attempt 1

<div class="attempt-grid" markdown="1">
<div class="attempt-panel" markdown="1">

**Submitted code**

```python
import sys
from collections import defaultdict

def solve():
    input = sys.stdin.readline

    n = int(input())

    seen = set()
    result = defaultdict(int)

    for _ in range(n):
        order_id, product, qty, status = input().split()
        qty = int(qty)

        key = (order_id, product, qty, status)

        if key in seen:
            pass
        else:
            seen.add(key)

        if status == "PAY":
            result[product] += qty
        else:
            result[product] -= qty

    print(result)
    for product in sorted(result):
        if result[product] > 0:
            print(product, result[product])

if __name__ == "__main__":
    solve()
```

</div>
<div class="attempt-panel" markdown="1">

**Reviewer feedback**

Correct parts:

- The duplicate key was correctly created.
- A set was correctly chosen for duplicate detection.
- defaultdict(int) was a good choice for accumulation.

Issues:

- pass does not skip the current loop iteration.
- Duplicate logs can still continue into the calculation logic.
- print(result) is debug output and breaks the required output format.

Improvement:

- Use continue when a duplicated key is found.
- Remove debug output before final submission.
- Keep duplicate filtering separate from normal calculation logic.

</div>
</div>

### Attempt 2

<div class="attempt-grid" markdown="1">
<div class="attempt-panel" markdown="1">

**Submitted code**

```python
import sys
from collections import defaultdict

def solve():
    input = sys.stdin.readline

    n = int(input())

    seen = set()
    result = defaultdict(int)

    for _ in range(n):
        order_id, product, qty, status = input().split()
        qty = int(qty)

        key = (order_id, product, qty, status)

        if key in seen:
            pass
        else:
            seen.add(key)
            if status == "PAY":
                result[product] += qty
            else:
                result[product] -= qty

    for product in sorted(result):
        if result[product] > 0:
            print(product, result[product])

if __name__ == "__main__":
    solve()
```

</div>
<div class="attempt-panel" markdown="1">

**Reviewer feedback**

Correct parts:

- Duplicate logs are no longer calculated.
- The output format is now correct.
- The solution produces the expected result.

Issues:

- The code still uses pass.
- Normal calculation logic is nested inside else.
- Extra indentation makes future mistakes more likely.

Improvement:

- Prefer early continue for duplicate filtering.
- Add new keys to seen after the duplicate check.
- Keep the main calculation flow flat and easy to read.

</div>
</div>

## Final Recommended Solution

Use this code:

```python
import sys
from collections import defaultdict

def solve():
    input = sys.stdin.readline

    n = int(input())

    seen = set()
    result = defaultdict(int)

    for _ in range(n):
        order_id, product, qty, status = input().split()
        qty = int(qty)

        key = (order_id, product, qty, status)

        if key in seen:
            continue

        seen.add(key)

        if status == "PAY":
            result[product] += qty
        else:
            result[product] -= qty

    for product in sorted(result):
        if result[product] > 0:
            print(product, result[product])

if __name__ == "__main__":
    solve()
```

## Key Lessons

- pass means do nothing and continue executing the following code.
- continue skips the rest of the current loop iteration.
- For duplicate filtering, early continue is usually cleaner and safer.
- Debug output must be removed before final submission.
- A tuple can be used as a set key when multiple fields define identity.

## Complexity

- Time complexity: O(N + M log M)
- N is the number of logs.
- M is the number of product types.
- Space complexity: O(N + M)

## Review Checklist

- Did I define the duplicate key correctly?
- Did I skip duplicated data with continue?
- Did I remove debug prints?
- Did I sort the final output?
- Did I exclude products with quantity less than or equal to 0?
