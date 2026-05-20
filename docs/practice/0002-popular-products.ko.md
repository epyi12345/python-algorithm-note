# 0002. Popular Products

한국어 제목: 인기 상품

## 유형

해시(hash) / 구현(implementation) / 중복 제거(duplicate handling) / 정렬(sorting) / Tie-break

## 난이도

Lv.1+ Basic

## 상태

리뷰와 함께 해결

## 목표

중복 로그 조건과 출력 조건을 모두 만족하면서 상품별 최종 수량을 정확히 계산하는 것이 목표입니다.

## 이 문제를 읽는 방법

- 각 로그를 상품 수량 변화 이벤트로 읽어보세요.
- 필드가 완전히 같은 로그는 한 번만 반영합니다.
- 먼저 어떤 로그를 반영할지 결정한 뒤, 수량을 누적하세요.
- 마지막에 출력 조건(양수만 출력/최댓값만 출력)을 적용하세요.

## 사전 지식

문제를 풀기 전에 다음을 이해해야 합니다:

- sys.stdin.readline으로 입력 받기
- 한 줄 입력을 여러 값으로 분리하기
- 숫자 문자열을 정수로 변환하기
- 중복 감지를 위해 set 사용하기
- 누적 계산을 위해 dict 또는 defaultdict 사용하기
- 값 기준으로 딕셔너리 항목 필터링하기
- 최댓값 찾기
- 동률 결과를 상품명 기준으로 정렬하기

## 문제 요약

쇼핑몰에서 하루 동안의 구매 로그를 제공합니다.

각 로그의 형식은 다음과 같습니다:

```text
customer_id product quantity status
```

status 값은 다음 중 하나입니다:

- BUY
- CANCEL

각 상품의 최종 판매 수량을 계산하고, 최종 수량이 가장 큰 상품(들)만 출력해야 합니다.

## 규칙

1. BUY는 해당 상품의 수량을 증가시킵니다.
2. CANCEL은 해당 상품의 수량을 감소시킵니다.
3. customer_id, product, quantity, status가 모두 같은 로그가 여러 번
   등장하면 한 번만 처리합니다.
4. 최종 수량이 0 이하인 상품은 제외합니다.
5. 최종 수량이 가장 큰 상품만 출력합니다.
6. 최종 수량이 가장 큰 상품이 여러 개라면 상품명 오름차순으로 모두
   출력합니다.
7. 출력할 상품이 없으면 NONE을 출력합니다.

## 입력 형식

```text
N
customer_id product quantity status
customer_id product quantity status
...
```

## 출력 형식

최종 수량이 가장 큰 상품(들)의 이름과 수량을 출력합니다.

```text
product quantity
product quantity
...
```

유효한 상품이 없으면 다음을 출력합니다:

```text
NONE
```

## 제한 조건

```text
1 <= N <= 100000
1 <= quantity <= 1000
customer_id and product are strings without spaces
status is BUY or CANCEL
```

## 예시

### Example 1

입력:

```text
10
U001 apple 3 BUY
U002 banana 5 BUY
U003 apple 2 BUY
U004 banana 1 CANCEL
U001 apple 3 BUY
U005 carrot 4 BUY
U006 carrot 1 BUY
U007 banana 1 BUY
U008 apple 1 CANCEL
U009 melon 2 CANCEL
```

출력:

```text
banana 5
carrot 5
```

### Explanation 1

중복된 로그:

```text
U001 apple 3 BUY
```

두 번 등장하지만 한 번만 처리해야 합니다.

최종 수량:

```text
apple = 3 + 2 - 1 = 4
banana = 5 - 1 + 1 = 5
carrot = 4 + 1 = 5
melon = -2
```

melon은 최종 수량이 0 이하이므로 제외됩니다.

최대 최종 수량은 5이므로 banana와 carrot을 상품명 오름차순으로
출력합니다.

### Example 2

입력:

```text
5
U001 book 2 BUY
U002 book 2 CANCEL
U003 pen 1 CANCEL
U004 bag 3 CANCEL
U001 book 2 BUY
```

출력:

```text
NONE
```

### Explanation 2

중복된 로그:

```text
U001 book 2 BUY
```

두 번 등장하지만 한 번만 처리해야 합니다.

최종 수량:

```text
book = 2 - 2 = 0
pen = -1
bag = -3
```

최종 수량이 0보다 큰 상품이 없으므로 NONE을 출력합니다.

## 평가 포인트

- 중복 로그 처리 정확성
- BUY/CANCEL 처리 정확성
- 처리된 로그 추적을 위한 set 사용 정확성
- 상품 집계를 위한 dict/defaultdict 사용 정확성
- 최종 수량이 0 이하인 상품 제외 여부
- 최대 최종 수량 계산 정확성
- 최대 수량 동률 상품 출력 여부
- 동률 상품명 정렬 여부
- 유효한 상품이 없을 때 NONE 출력 여부
- 시간복잡도(time complexity)와 공간복잡도(space complexity) 설명 여부

## 온라인 에디터

로컬 Python 환경이 없을 때 OneCompiler Python editor로 해법을 테스트하세요.

## 코드 작성

이 문제를 워크벤치에서 열어 문제 설명과 파이썬 에디터를
나란히 보며 풀이할 수 있습니다.

[워크벤치에서 풀기](../../tools/practice-workbench/?problem=0002){ .md-button .md-button--primary }

[파이썬 에디터 열기](../tools/python-editor.md){ .md-button .md-button--primary }

[Open OneCompiler in a new tab ↗](https://onecompiler.com/python){ target="_blank" rel="noopener" }

## 코드 템플릿

```python
def solve():
    pass

if __name__ == "__main__":
    solve()
```


## 흔한 오해

- 중복 로그에서 `pass`를 쓰면 반복을 건너뛰지 못합니다. 건너뛰려면 `continue`가 필요합니다.
- 중간 디버그 출력을 남기면 채점 출력 형식이 깨질 수 있습니다.
- 양수 상품 전체 출력과 최댓값 상품만 출력은 서로 다른 조건입니다.

## 힌트

양수 값만 먼저 필터링하고, empty case를 확인한 다음, 최댓값과
일치하는 항목만 출력해보세요.

### 관련 학습자료

<div class="learning-links" markdown="1">

<a class="learning-link-card" href="../../learning/python-set/">
  <span class="learning-link-card__title">set</span>
  <span class="learning-link-card__desc">중복 제거, 포함 여부 확인, tuple key</span>
</a>

<a class="learning-link-card" href="../../learning/python-dict-defaultdict/">
  <span class="learning-link-card__title">dict / defaultdict</span>
  <span class="learning-link-card__desc">상품별 수량 누적, 기본값 처리</span>
</a>

<a class="learning-link-card" href="../../learning/filtering-and-max/">
  <span class="learning-link-card__title">필터링과 최댓값</span>
  <span class="learning-link-card__desc">양수 필터링, empty case 확인, 안전한 max 사용</span>
</a>

<a class="learning-link-card" href="../../learning/tie-break-sorting/">
  <span class="learning-link-card__title">동률 정렬</span>
  <span class="learning-link-card__desc">최댓값 선택 후 동률 상품을 이름 기준으로 정렬</span>
</a>

<a class="learning-link-card" href="../../learning/python-sorting/">
  <span class="learning-link-card__title">정렬</span>
  <span class="learning-link-card__desc">sorted, key, lambda, 오름차순과 내림차순</span>
</a>

</div>
