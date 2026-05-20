# pass와 continue

## 개념

`pass`는 아무 동작도 하지 않습니다. `continue`는 현재 반복의 나머지
코드를 건너뛰고 다음 반복으로 이동합니다.

## 언제 쓰나

- 반복문에서 중복 데이터 건너뛸 때
- 조건을 만족하면 즉시 다음 반복으로 넘어갈 때

## 기본 문법

```python
if key in seen:
    continue
```

## 작은 예시

```python
if key in seen:
    continue
seen.add(key)
```

## 자주 하는 실수

- `continue`가 필요한 위치에 `pass`를 쓰는 경우
- 중복 처리 이후 계산 로직이 그대로 실행되는 경우

## 안전한 패턴

- 중복이면 즉시 `continue`
- 일반 계산 로직은 평평한 구조로 유지

## 관련 연습 문제

- [0001. Order Settlement](../practice/0001-order-settlement.md)
