# dict와 defaultdict

## 개념

`dict`는 key-value 매핑을 저장합니다. `defaultdict(int)`는 숫자 누적을
간결하게 처리합니다.

## 언제 쓰나

- 상품/사용자 집계
- 빈도수 계산
- 누적 합계 계산

## 기본 문법

```python
result = {}
result[product] = result.get(product, 0) + qty

from collections import defaultdict
result = defaultdict(int)
result[product] += qty
```

## 작은 예시

```python
if status == "PAY":
    result[product] += qty
else:
    result[product] -= qty
```

## 자주 하는 실수

- 일반 dict에서 key 초기화를 빼먹는 경우
- 문자열/정수 타입을 섞어 쓰는 경우

## 안전한 패턴

- 누적 계산에는 `defaultdict(int)` 우선 사용
- 수치 값 타입을 일관되게 유지

## 관련 연습 문제

- [0001. Order Settlement](../practice/0001-order-settlement.md)
- [0002. Popular Products](../practice/0002-popular-products.md)
