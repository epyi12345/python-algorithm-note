# 0002. Popular Products

한국어 제목: 인기 상품

## 문제 요약

- customer id, product, quantity, status로 구성된 구매 로그가 주어집니다.
- BUY는 상품 수량을 증가시킵니다.
- CANCEL은 상품 수량을 감소시킵니다.
- 완전히 동일한 로그는 한 번만 처리해야 합니다.
- 최종 수량이 0 이하인 상품은 제외합니다.
- 최종 수량이 가장 큰 상품만 출력해야 합니다.
- 최대 수량이 같은 상품이 여러 개면 상품명 오름차순으로 출력합니다.
- 유효한 상품이 없으면 NONE을 출력합니다.

## 유형

해시(hash) / 구현(implementation) / 중복 제거(duplicate handling) / 정렬(sorting) / Tie-break

## 난이도

Lv.1+ Basic

## 상태

리뷰와 함께 해결

## 점수

97/100

## 내 시도

### 시도 1

<div class="attempt-grid" markdown="1">
<div class="attempt-panel" markdown="1">

**제출 코드**

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

**리뷰어 피드백**

잘한 점:

- set을 사용한 중복 감지는 올바르게 처리했습니다.
- BUY와 CANCEL에 따른 누적 로직은 대부분 올바르게 작성했습니다.
- 중복 로그를 건너뛰기 위해 continue를 올바르게 사용했습니다.

문제점:

- 코드가 양수인 상품을 모두 출력했습니다.
- 문제는 최대 수량을 가진 상품만 출력하라고 요구합니다.
- 상품명 기준 동률 처리(tie-break sorting)를 반영하지 못했습니다.
- 양수 상품을 출력한 뒤에 NONE 여부를 확인했습니다.

개선 방향:

- 먼저 양수 상품만 필터링(filtering)하세요.
- 유효한 상품이 없으면 NONE을 출력하고 종료하세요.
- 최대 수량을 계산하세요.
- 수량이 최대값과 같은 상품만 출력합니다.

</div>
</div>

### 시도 2

<div class="attempt-grid" markdown="1">
<div class="attempt-panel" markdown="1">

**제출 코드**

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

**리뷰어 피드백**

잘한 점:

- NONE 처리를 결과 출력보다 먼저 배치했습니다.
- 코드가 최대 수량 상품만 출력하려고 시도했습니다.
- continue를 이용한 중복 필터링은 여전히 올바릅니다.

문제점:

- 수량 동률 상품이 상품명 기준으로 정렬되지 않았습니다.
- sorted_dict가 수량 기준으로만 정렬되고 상품명 기준이 반영되지 않았습니다.
- max_num = int()는 0으로 동작하지만 의도가 불명확합니다.

개선 방향:

- 입력 직후 quantity를 int로 변환하세요.
- 의미 있는 변수명을 사용하세요.
- 최대값 계산과 출력 정렬을 분리하세요.

</div>
</div>

### 시도 3

<div class="attempt-grid" markdown="1">
<div class="attempt-panel" markdown="1">

**제출 코드**

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

**리뷰어 피드백**

잘한 점:

- quantity를 초기에 int로 변환했습니다.
- 코드가 최대값 동률 처리를 수행했습니다.
- 동률 상품을 상품명 기준으로 정렬했습니다.
- 기대한 결과를 생성합니다.

문제점:

- a, b, c, d 같은 변수명은 의미 파악이 어렵습니다.
- 전체 수량 정렬은 불필요했습니다.
- max_num 계산 루프가 필요 이상으로 우회적입니다.

개선 방향:

- customer_id, product, qty, status 같은 변수명을 사용하세요.
- 먼저 유효한 양수 상품을 필터링하세요.
- max(valid.values())로 최대 수량을 명확히 계산하세요.

</div>
</div>

### 시도 4

<div class="attempt-grid" markdown="1">
<div class="attempt-panel" markdown="1">

**제출 코드**

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

**리뷰어 피드백**

잘한 점:

- 변수명이 훨씬 명확해졌습니다.
- 양수 상품만 담는 valid를 도입했습니다.
- max(valid.values())로 최대값 계산이 명확해졌습니다.
- 상품명 정렬을 올바르게 처리했습니다.

문제점:

- sorted_dict는 여전히 불필요합니다.
- valid가 비었는지 확인해 NONE을 처리할 수 있습니다.
- 코드가 불필요한 O(M log M) 정렬을 수행했습니다.

개선 방향:

- sorted_dict를 완전히 제거하세요.
- valid를 먼저 구성하세요.
- if not valid로 NONE을 처리하세요.

</div>
</div>

### 시도 5

<div class="attempt-grid" markdown="1">
<div class="attempt-panel" markdown="1">

**제출 코드**

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

**리뷰어 피드백**

잘한 점:

- Duplicate logs are skipped correctly with continue.
- BUY and CANCEL are handled correctly.
- Positive products are filtered into valid.
- NONE is handled before max() is called.
- Maximum quantity is calculated clearly.
- Tied products are printed in product-name order.
- Unnecessary full sorting was removed.

문제점:

- 주요 정답성 문제는 더 이상 없습니다.
- 사소한 스타일 개선: max_num을 max_qty로 바꿀 수 있습니다.

개선 방향:

- Keep this structure for future problems:
  filtering, empty-case check, maximum calculation, sorted output.

</div>
</div>

## 최종 권장 해법

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

## 핵심 교훈

- Printing all positive products is different from printing only maximum
  products.
- For maximum-result problems, first filter valid candidates.
- Check the empty case before calling max().
- Then calculate the maximum value.
- Finally, print only entries matching the maximum.
- Tie-break conditions should be handled explicitly.
- Avoid unnecessary full sorting when only max() is needed.

## 복잡도

최종 해법 기준:

- Time complexity: O(N + M + K log K)
- Worst-case time complexity: O(N + M log M)
- Space complexity: O(N + M)

기호 설명:

- N is the number of logs.
- M is the number of product types.
- K is the number of valid positive products.

## 리뷰 체크리스트

- Did I remove duplicated logs with set?
- Did I convert quantity to int before calculation?
- Did I filter out products with quantity less than or equal to 0?
- Did I handle the empty valid case before max()?
- Did I print only products with the maximum quantity?
- Did I sort tied products by product name?
- Did I avoid unnecessary sorting?
