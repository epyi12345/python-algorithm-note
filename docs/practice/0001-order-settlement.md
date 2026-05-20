# 0001. Order Settlement

## Type

Hash / Implementation / Duplicate handling / Sorting

## Difficulty

Lv.1 Basic

## Status

Solved with review

## Goal

Compute the final product-level sales totals correctly under duplicate-log constraints and required output conditions.

## How to Read This Problem

- Read each log as one transaction event for a product.
- Treat logs with identical fields as one event only.
- First decide which logs are valid to count, then apply quantity updates.
- Finally apply output conditions (positive-only or max-only depending on problem).

## Prerequisites

Before solving this problem, the learner should understand:

- Reading input with sys.stdin.readline
- Splitting one input line into multiple values
- Converting numeric strings to integers
- Using set for duplicate detection
- Using dict or defaultdict for accumulation
- Sorting dictionary keys
- The difference between pass and continue

## Problem Summary

A shopping mall provides order logs for one day.

Each log has this format:

```text
order_id product quantity status
```

The status is one of:

- PAY
- REFUND

You need to calculate the final sales quantity for each product.

## Rules

1. PAY increases the product quantity.
2. REFUND decreases the product quantity.
3. If logs with the same order_id, product, quantity, and status appear
   multiple times, process that log only once.
4. Products with final quantity less than or equal to 0 are not printed.
5. Print products in ascending product-name order.
6. If there are no products to print, print nothing.

## Input Format

```text
N
order_id product quantity status
order_id product quantity status
...
```

## Output Format

```text
product quantity
product quantity
...
```

If there are no valid products, print nothing.

## Constraints

```text
1 <= N <= 100000
1 <= quantity <= 1000
order_id and product are strings without spaces
status is PAY or REFUND
```

## Examples

### Example 1

Input:

```text
9
A001 water10 2 PAY
A002 water20 1 PAY
A001 water10 2 PAY
A003 blanket 1 PAY
A004 water10 1 PAY
A004 water10 1 REFUND
A005 water20 3 PAY
A006 blanket 1 REFUND
A007 tissue 5 PAY
```

Output:

```text
tissue 5
water10 2
water20 4
```

### Explanation 1

The duplicated log:

```text
A001 water10 2 PAY
```

appears twice but must be processed only once.

Final quantities:

```text
blanket = 1 - 1 = 0
tissue = 5
water10 = 2 + 1 - 1 = 2
water20 = 1 + 3 = 4
```

blanket is excluded because its final quantity is 0.

### Example 2

Input:

```text
6
O001 apple 3 PAY
O001 apple 3 PAY
O001 apple 1 REFUND
O002 banana 2 PAY
O003 banana 2 REFUND
O004 carrot 5 REFUND
```

Output:

```text
apple 2
```

### Explanation 2

The duplicated PAY log for apple is processed only once.

Final quantities:

```text
apple = 3 - 1 = 2
banana = 2 - 2 = 0
carrot = -5
```

Only apple is printed.

## Evaluation Points

- Correct duplicate log handling
- Correct PAY and REFUND processing
- Correct use of set for processed logs
- Correct use of dict or defaultdict for product accumulation
- Excluding products with final quantity less than or equal to 0
- Sorting output by product name
- Removing debug output before submission
- Explaining time and space complexity

## Online Editor

Use OneCompiler Python editor to test your solution when a local Python
environment is not available.

## Coding Workspace

Open this problem in Practice Workbench to view the statement and Python
editor side by side.

[Open in Practice Workbench](../../tools/practice-workbench/?problem=0001){ .md-button .md-button--primary }

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

- Using `pass` for duplicates does not skip accumulation; `continue` is needed when you want to skip the current loop iteration.
- Printing intermediate dictionaries can break judged output format.
- In ranking problems, printing all positive items is different from printing only max-valued items.

## Hint

Start by removing duplicated logs with a `set`, then accumulate product
quantities with `defaultdict(int)`.

### Related learning materials

<div class="learning-links" markdown="1">

<a class="learning-link-card" href="../../learning/python-input/">
  <span class="learning-link-card__title">Python input</span>
  <span class="learning-link-card__desc">sys.stdin.readline, split, map, repeated input</span>
</a>

<a class="learning-link-card" href="../../learning/python-set/">
  <span class="learning-link-card__title">set</span>
  <span class="learning-link-card__desc">Duplicate handling, membership checks, tuple keys</span>
</a>

<a class="learning-link-card" href="../../learning/python-dict-defaultdict/">
  <span class="learning-link-card__title">dict / defaultdict</span>
  <span class="learning-link-card__desc">Counting, accumulation, and default integer values</span>
</a>

<a class="learning-link-card" href="../../learning/pass-vs-continue/">
  <span class="learning-link-card__title">pass vs continue</span>
  <span class="learning-link-card__desc">Loop control flow and safe duplicate skipping</span>
</a>

<a class="learning-link-card" href="../../learning/python-sorting/">
  <span class="learning-link-card__title">Sorting</span>
  <span class="learning-link-card__desc">sorted, key, lambda, ascending and descending order</span>
</a>

</div>
