# 0001. Order Settlement

한국어 제목: 주문 정산기

## 유형

해시(hash) / 구현(implementation) / 중복 제거(duplicate handling) / 정렬(sorting)

## 난이도

Lv.1 Basic

## 상태

리뷰와 함께 해결

## 사전 지식

문제를 풀기 전에 다음을 이해해야 합니다:

- sys.stdin.readline으로 입력 받기
- 한 줄 입력을 여러 값으로 분리하기
- 숫자 문자열을 정수로 변환하기
- 중복 감지를 위해 set 사용하기
- 누적 계산을 위해 dict 또는 defaultdict 사용하기
- 딕셔너리 키를 기준으로 정렬하기
- pass와 continue의 차이 이해하기

## 문제 요약

쇼핑몰에서 하루 동안의 주문 로그를 제공합니다.

각 로그의 형식은 다음과 같습니다:

```text
order_id product quantity status
```

status 값은 다음 중 하나입니다:

- PAY
- REFUND

각 상품의 최종 판매 수량을 계산해야 합니다.

## 규칙

1. PAY는 해당 상품의 수량을 증가시킵니다.
2. REFUND는 해당 상품의 수량을 감소시킵니다.
3. order_id, product, quantity, status가 모두 같은 로그가 여러 번
   등장하면 한 번만 처리합니다.
4. 최종 수량이 0 이하인 상품은 출력하지 않습니다.
5. 상품명 오름차순으로 출력합니다.
6. 출력할 상품이 없으면 아무것도 출력하지 않습니다.

## 입력 형식

```text
N
order_id product quantity status
order_id product quantity status
...
```

## 출력 형식

```text
product quantity
product quantity
...
```

유효한 상품이 없으면 아무것도 출력하지 않습니다.

## 제한 조건

```text
1 <= N <= 100000
1 <= quantity <= 1000
order_id and product are strings without spaces
status is PAY or REFUND
```

## 예시

### Example 1

입력:

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

출력:

```text
tissue 5
water10 2
water20 4
```

### Explanation 1

중복된 로그:

```text
A001 water10 2 PAY
```

두 번 등장하지만 한 번만 처리해야 합니다.

최종 수량:

```text
blanket = 1 - 1 = 0
tissue = 5
water10 = 2 + 1 - 1 = 2
water20 = 1 + 3 = 4
```

blanket은 최종 수량이 0이므로 제외됩니다.

### Example 2

입력:

```text
6
O001 apple 3 PAY
O001 apple 3 PAY
O001 apple 1 REFUND
O002 banana 2 PAY
O003 banana 2 REFUND
O004 carrot 5 REFUND
```

출력:

```text
apple 2
```

### Explanation 2

apple의 중복 PAY 로그는 한 번만 처리됩니다.

최종 수량:

```text
apple = 3 - 1 = 2
banana = 2 - 2 = 0
carrot = -5
```

apple만 출력됩니다.

## 평가 포인트

- 중복 로그 처리 정확성
- PAY/REFUND 처리 정확성
- 처리된 로그 추적을 위한 set 사용 정확성
- 상품 집계를 위한 dict/defaultdict 사용 정확성
- 최종 수량이 0 이하인 상품 제외 여부
- 상품명 기준 정렬 출력 여부
- 제출 전 debug output 제거 여부
- 시간복잡도(time complexity)와 공간복잡도(space complexity) 설명 여부

## 온라인 에디터

로컬 Python 환경이 없을 때 OneCompiler Python editor로 해법을 테스트하세요.

[Open Python Editor](../tools/python-editor.md){ .md-button .md-button--primary }

[Open OneCompiler in a new tab ↗](https://onecompiler.com/python){ target="_blank" rel="noopener" }

## 코드 템플릿

```python
def solve():
    pass

if __name__ == "__main__":
    solve()
```


## 힌트

먼저 `set`으로 중복 로그를 제거한 뒤, `defaultdict(int)`로 상품별
수량을 누적해보세요.

### 관련 학습자료

<div class="learning-links" markdown="1">

<a class="learning-link-card" href="../../learning/python-input/">
  <span class="learning-link-card__title">파이썬 입력</span>
  <span class="learning-link-card__desc">sys.stdin.readline, split, map, 반복 입력</span>
</a>

<a class="learning-link-card" href="../../learning/python-set/">
  <span class="learning-link-card__title">set</span>
  <span class="learning-link-card__desc">중복 제거, 포함 여부 확인, tuple key</span>
</a>

<a class="learning-link-card" href="../../learning/python-dict-defaultdict/">
  <span class="learning-link-card__title">dict / defaultdict</span>
  <span class="learning-link-card__desc">상품별 수량 누적, 기본값 처리</span>
</a>

<a class="learning-link-card" href="../../learning/pass-vs-continue/">
  <span class="learning-link-card__title">pass와 continue</span>
  <span class="learning-link-card__desc">반복문에서 건너뛰기와 아무것도 하지 않기의 차이</span>
</a>

<a class="learning-link-card" href="../../learning/python-sorting/">
  <span class="learning-link-card__title">정렬</span>
  <span class="learning-link-card__desc">sorted, key, lambda, 오름차순과 내림차순</span>
</a>

</div>
