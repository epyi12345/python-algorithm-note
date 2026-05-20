---
hide:
  - toc
---

# 0001. Order Settlement

한국어 제목: 주문 정산기

## 문제 요약

- order id, product, quantity, status로 구성된 주문 로그가 주어집니다.
- PAY는 상품 수량을 증가시킵니다.
- REFUND는 상품 수량을 감소시킵니다.
- 완전히 동일한 로그는 한 번만 처리해야 합니다.
- 최종 수량이 0 이하인 상품은 출력하지 않습니다.
- 출력은 상품명 오름차순이어야 합니다.

## 유형

해시(hash) / 구현(implementation) / 중복 제거(duplicate handling) / 정렬(sorting)

## 난이도

Lv.1 Basic

## 상태

리뷰와 함께 해결

## 점수

85/100

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

**리뷰어 피드백**

잘한 점:

- The duplicate key was correctly created.
- A set was correctly chosen for duplicate detection.
- defaultdict(int) was a good choice for accumulation.

문제점:

- pass does not skip the current loop iteration.
- Duplicate logs can still continue into the calculation logic.
- print(result) is debug output and breaks the required output format.

개선 방향:

- Use continue when a duplicated key is found.
- Remove debug output before final submission.
- Keep duplicate filtering separate from normal calculation logic.

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

**리뷰어 피드백**

잘한 점:

- Duplicate logs are no longer calculated.
- The output format is now correct.
- The solution produces the expected result.

문제점:

- 코드에서 여전히 pass를 사용하고 있습니다.
- Normal calculation logic is nested inside else.
- Extra indentation makes future mistakes more likely.

개선 방향:

- Prefer early continue for duplicate filtering.
- Add new keys to seen after the duplicate check.
- Keep the main calculation flow flat and easy to read.

</div>
</div>

## 최종 권장 해법

다음 코드를 사용합니다:

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

## 핵심 교훈

- pass means do nothing and continue executing the following code.
- continue skips the rest of the current loop iteration.
- For duplicate filtering, early continue is usually cleaner and safer.
- Debug output must be removed before final submission.
- A tuple can be used as a set key when multiple fields define identity.

## 복잡도

- Time complexity: O(N + M log M)
- N is the number of logs.
- M is the number of product types.
- Space complexity: O(N + M)

## 리뷰 체크리스트

- Did I define the duplicate key correctly?
- Did I skip duplicated data with continue?
- Did I remove debug prints?
- Did I sort the final output?
- Did I exclude products with quantity less than or equal to 0?
