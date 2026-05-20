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

- 중복 판별용 key를 올바르게 만들었습니다.
- 중복 처리를 위해 set을 올바르게 선택했습니다.
- 누적 계산에 defaultdict(int)를 적절히 사용했습니다.

문제점:

- pass는 현재 반복을 건너뛰지 않습니다.
- 중복 로그가 계산 로직까지 계속 흘러갈 수 있습니다.
- print(result)는 디버그 출력이며 요구된 출력 형식을 깨뜨립니다.

개선 방향:

- 중복 key를 찾았을 때 continue를 사용하세요.
- 최종 제출 전 디버그 출력을 제거하세요.
- 중복 필터링과 일반 계산 로직을 분리해 유지하세요.

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
- 출력 형식이 요구사항에 맞게 수정되었습니다.
- 해법이 기대한 결과를 정확히 생성합니다.

문제점:

- 코드에서 여전히 pass를 사용하고 있습니다.
- 일반 계산 로직이 else 블록 안에 중첩되어 있습니다.
- 과도한 들여쓰기는 이후 유지보수 실수를 늘릴 수 있습니다.

개선 방향:

- 중복 필터링은 early continue 패턴이 더 명확합니다.
- 중복 검사 후 새 key를 seen에 추가하세요.
- 메인 계산 흐름은 평평하고 읽기 쉽게 유지하세요.

</div>
</div>

## 최종 권장 풀이

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

- pass는 아무 동작도 하지 않고 다음 코드를 계속 실행합니다.
- continue는 현재 반복의 나머지 코드를 건너뜁니다.
- 중복 필터링은 early continue 방식이 보통 더 간결하고 안전합니다.
- 최종 제출 전 디버그 출력은 반드시 제거해야 합니다.
- 여러 필드로 동일성을 정의할 때 tuple을 set key로 사용할 수 있습니다.

## 복잡도

- 시간복잡도(time complexity): O(N + M log M)
- N은 로그 개수입니다.
- M은 상품 종류 수입니다.
- 공간복잡도(space complexity): O(N + M)

## 리뷰 체크리스트

- 중복 판별 key를 정확히 정의했는가?
- 중복 데이터를 continue로 건너뛰었는가?
- 디버그 출력을 제거했는가?
- 최종 출력을 정렬했는가?
- 수량이 0 이하인 상품을 제외했는가?
