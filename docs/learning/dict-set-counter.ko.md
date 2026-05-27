# dict, set, Counter

## 이 개념은 무엇인가
`dict`, `set`, `Counter`는 파이썬에서 가장 자주 쓰는 해시(hash) 기반 자료구조입니다.

## 언제 사용하는가
- 값을 키(key) 기준으로 누적할 때
- 중복 제거가 필요할 때
- 항목별 빈도 계산이 필요할 때
- 다중 조건을 묶어 식별해야 할 때

## 핵심 아이디어
- `dict`: 키-값(value) 매핑으로 누적/조회
- `set`: 중복 없는 원소 집합
- `Counter`: 빈도 계산 특화 API 제공

문제 요구사항을 먼저 보고 “누적/중복/빈도” 중 무엇이 핵심인지 정하면 자료구조 선택이 쉬워집니다.

## 기본 문법 또는 패턴
```python
from collections import Counter
seen = set()
acc = {}
for x in ["a", "b", "a"]:
    seen.add(x)
    acc[x] = acc.get(x, 0) + 1
freq = Counter(["a", "b", "a"])
```

## 단계별 예시
1. 로그 데이터에서 `order_id` 중복을 검사할 때는 `set`을 사용합니다.
2. `product`별 판매량을 누적할 때는 `dict` 또는 `defaultdict(int)`를 사용합니다.
3. 가장 많이 등장한 상품을 빠르게 확인할 때는 `Counter`를 사용합니다.
4. 여러 필드를 함께 식별해야 하면 튜플 키(tuple key) `(customer_id, product, status)`를 사용합니다.

## 흔한 실수
- `set`이 입력 순서를 항상 보존한다고 가정하는 실수
- 변경 가능한 타입(list 등)을 튜플 키(tuple key) 대신 키로 쓰려는 실수
- 단순 빈도 계산인데 `dict`만으로 복잡하게 구현하는 실수

## 안전한 패턴
- 의도 기반 선택: 중복 제거는 `set`, 누적은 `dict`, 빈도 계산은 `Counter`
- 키 설계 먼저: 단일 키인지, 튜플 키(tuple key)인지 미리 결정
- 업데이트 직전 기본값 처리 방식(`get`, `defaultdict`) 통일

## 시간복잡도
해시 연산은 평균적으로 조회/삽입/갱신이 O(1)입니다.
전체 루프가 N번이면 보통 O(N)으로 정리됩니다.

## 관련 문제
- [0001. Order Settlement](../practice/0001-order-settlement.md)
- [0002. Popular Products](../practice/0002-popular-products.md)

## 복습 체크리스트
- 요구사항이 누적인지, 중복 제거인지, 빈도 계산인지 구분했는가?
- 키(key) 설계를 문제 조건에 맞게 했는가?
- `dict`, `set`, `Counter` 중 가장 단순한 도구를 선택했는가?
