# 0002. Popular Products

## Problem Summary

- Given purchase logs with customer id, product, quantity, and status.
- BUY increases product quantity.
- CANCEL decreases product quantity.
- Identical logs must be processed only once.
- Products with final quantity less than or equal to 0 are excluded.
- Only products with the highest final quantity are printed.
- If multiple products share the highest quantity, print them by
  product name in ascending order.
- If there are no valid products, print NONE.

## Type

Hash / Implementation / Duplicate handling / Sorting / Tie-break

## Difficulty

Lv.1+ Basic

## Status

Solved with review

## Score

97/100

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
  
  for i in range(n):
    a, b, c, d = input().split()
    key = (a,b,c,d)
    
    if key in seen:
      continue

    seen.add(key)
      
    if d == 'BUY':
      result[b] += int(c)
    elif d == 'CANCEL':
      result[b] -= int(c)
  
  sorted_dict = sorted(result.items(), key= lambda item:item[1], reverse=True)
  
  for j, k in sorted_dict:
    if result[j] > 0:
      print(j, result[j])
      
  k, v = sorted_dict[0]
  if v <= 0:
    print('NONE')

if __name__ == "__main__":
    solve()
```

</div>
<div class="attempt-panel" markdown="1">

**Reviewer feedback**

Correct parts:

- Duplicate detection with set was used correctly.
- BUY and CANCEL accumulation logic was mostly correct.
- continue was used correctly for duplicated logs.

Issues:

- The code printed all positive products.
- The problem asks for only products with the maximum quantity.
- Tie-break sorting by product name was not handled.
- NONE checking happened after printing positive products.

Improvement:

- Filter positive products first.
- If no valid products exist, print NONE and return.
- Find the maximum quantity.
- Print only products whose quantity equals the maximum.

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
  
  for i in range(n):
    a, b, c, d = input().split()
    key = (a,b,c,d)
    
    if key in seen:
      continue

    seen.add(key)
      
    if d == 'BUY':
      result[b] += int(c)
    elif d == 'CANCEL':
      result[b] -= int(c)
  
  sorted_dict = sorted(result.items(), key= lambda item:item[1], reverse=True)

  k, v = sorted_dict[0]
  if v <= 0:
    print('NONE')
    return
  
  max_num = int()
  for j, k in sorted_dict:
    if k >= max_num:
      print(j, k)
      max_num = k

if __name__ == "__main__":
    solve()
```

</div>
<div class="attempt-panel" markdown="1">

**Reviewer feedback**

Correct parts:

- NONE handling was moved before result printing.
- The code tried to print only maximum-quantity products.
- Duplicate filtering with continue was still correct.

Issues:

- Products tied by quantity were not sorted by product name.
- sorted_dict was sorted only by quantity, not by product name.
- max_num = int() works as 0, but the intent is unclear.

Improvement:

- Convert quantity to int immediately after input.
- Use meaningful variable names.
- Separate maximum detection from output sorting.

</div>
</div>

### Attempt 3

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
  
  for i in range(n):
    a, b, c, d = input().split()
    c = int(c)
    key = (a, b, c, d)
    
    if key in seen:
      continue

    seen.add(key)
      
    if d == 'BUY':
      result[b] += c
    elif d == 'CANCEL':
      result[b] -= c
  
  sorted_dict = sorted(result.items(), key= lambda item:item[1], reverse=True)

  k, v = sorted_dict[0]
  if v <= 0:
    print('NONE')
    return
  
  sorted_by_name = []
  
  max_num = 0
  for j, k in sorted_dict:
    if k >= max_num:
      sorted_by_name.append((j, k))
      max_num = k

  for l, m in sorted(sorted_by_name):
    print(l, m)
    
if __name__ == "__main__":
    solve()
```

</div>
<div class="attempt-panel" markdown="1">

**Reviewer feedback**

Correct parts:

- Quantity was converted to int early.
- The code handled maximum ties.
- The tied products were sorted by product name.
- The solution produced the expected result.

Issues:

- Variable names such as a, b, c, d were hard to understand.
- The full quantity sort was unnecessary.
- The max_num loop was more indirect than needed.

Improvement:

- Use customer_id, product, qty, and status as variable names.
- Filter valid positive products first.
- Use max(valid.values()) to get the maximum quantity clearly.

</div>
</div>

### Attempt 4

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
  
  for i in range(n):
    customer_id, product, qty, status = input().split()
    qty = int(qty)
    key = (customer_id, product, qty, status)
    
    if key in seen:
      continue

    seen.add(key)
      
    if status == 'BUY':
      result[product] += qty
    elif status == 'CANCEL':
      result[product] -= qty
  
  sorted_dict = sorted(result.items(), key= lambda item:item[1], reverse=True)

  k, v = sorted_dict[0]
  if v <= 0:
    print('NONE')
    return
  
  valid = {}

  for product, qty in result.items():
    if qty > 0:
      valid[product] = qty
  
  max_num = max(valid.values())
  for product in sorted(valid):
    if valid[product] == max_num:
      print(product, valid[product])
    
if __name__ == "__main__":
    solve()
```

</div>
<div class="attempt-panel" markdown="1">

**Reviewer feedback**

Correct parts:

- Variable names became much clearer.
- valid was introduced to store only positive products.
- max(valid.values()) made the maximum calculation clear.
- Product-name sorting was handled correctly.

Issues:

- sorted_dict was still unnecessary.
- NONE can be checked by testing whether valid is empty.
- The code performed an avoidable O(M log M) sort.

Improvement:

- Remove sorted_dict entirely.
- Build valid first.
- Use if not valid to handle NONE.

</div>
</div>

### Attempt 5

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
    customer_id, product, qty, status = input().split()
    qty = int(qty)
    key = (customer_id, product, qty, status)
    
    if key in seen:
      continue

    seen.add(key)
      
    if status == 'BUY':
      result[product] += qty
    elif status == 'CANCEL':
      result[product] -= qty
  
  valid = {}

  for product, qty in result.items():
    if qty > 0:
      valid[product] = qty
  
  if not valid:
    print('NONE')
    return
  
  max_num = max(valid.values())
  for product in sorted(valid):
    if valid[product] == max_num:
      print(product, valid[product])
    
if __name__ == "__main__":
    solve()
```

</div>
<div class="attempt-panel" markdown="1">

**Reviewer feedback**

Correct parts:

- Duplicate logs are skipped correctly with continue.
- BUY and CANCEL are handled correctly.
- Positive products are filtered into valid.
- NONE is handled before max() is called.
- Maximum quantity is calculated clearly.
- Tied products are printed in product-name order.
- Unnecessary full sorting was removed.

Issues:

- No major correctness issue remains.
- Minor style improvement: max_num could be named max_qty.

Improvement:

- Keep this structure for future problems:
  filtering, empty-case check, maximum calculation, sorted output.

</div>
</div>

## Final Recommended Solution

Use the same final solution as Attempt 5, with only minor naming cleanup:

```python
import sys
from collections import defaultdict

def solve():
    input = sys.stdin.readline
    n = int(input())

    seen = set()
    result = defaultdict(int)

    for _ in range(n):
        customer_id, product, qty, status = input().split()
        qty = int(qty)

        key = (customer_id, product, qty, status)

        if key in seen:
            continue

        seen.add(key)

        if status == "BUY":
            result[product] += qty
        elif status == "CANCEL":
            result[product] -= qty

    valid = {}

    for product, qty in result.items():
        if qty > 0:
            valid[product] = qty

    if not valid:
        print("NONE")
        return

    max_qty = max(valid.values())

    for product in sorted(valid):
        if valid[product] == max_qty:
            print(product, valid[product])

if __name__ == "__main__":
    solve()
```

## Key Lessons

- Printing all positive products is different from printing only maximum
  products.
- For maximum-result problems, first filter valid candidates.
- Check the empty case before calling max().
- Then calculate the maximum value.
- Finally, print only entries matching the maximum.
- Tie-break conditions should be handled explicitly.
- Avoid unnecessary full sorting when only max() is needed.

## Complexity

For the final solution:

- Time complexity: O(N + M + K log K)
- Worst-case time complexity: O(N + M log M)
- Space complexity: O(N + M)

Where:

- N is the number of logs.
- M is the number of product types.
- K is the number of valid positive products.

## Review Checklist

- Did I remove duplicated logs with set?
- Did I convert quantity to int before calculation?
- Did I filter out products with quantity less than or equal to 0?
- Did I handle the empty valid case before max()?
- Did I print only products with the maximum quantity?
- Did I sort tied products by product name?
- Did I avoid unnecessary sorting?
