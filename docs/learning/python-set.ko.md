# set

## 개념

`set`은 중복 없는 값을 저장하며 빠른 포함 검사(`in`)를 지원합니다.

## 언제 쓰나

- 중복 제거(duplicate detection)
- 처리 여부 추적
- 빠른 membership check

## 기본 문법

```python
seen = set()
if key in seen:
    continue
seen.add(key)
```

## 작은 예시

```python
key = (order_id, product, qty, status)
if key in seen:
    continue
seen.add(key)
```

## 자주 하는 실수

- 중복 검사에 list를 사용해 느려지는 경우
- 여러 필드를 구분하지 않고 키를 만드는 경우

## 안전한 패턴

- 여러 필드 식별에는 tuple key 사용
- 먼저 membership check, 이후 add

## 관련 연습 문제

- [0001. Order Settlement](../practice/0001-order-settlement.md)
- [0002. Popular Products](../practice/0002-popular-products.md)
