# 정렬

## 개념

정렬은 출력 순서를 문제 조건에 맞게 고정하는 핵심 도구입니다.

## 언제 쓰나

- 출력 순서가 요구될 때
- 동률 처리(tie-break) 기준이 있을 때

## 기본 문법

```python
sorted(nums)
sorted(data)
sorted(data.items())
sorted(items, key=lambda x: x[1])
sorted(items, key=lambda x: x[1], reverse=True)
```

## 작은 예시

```python
for product in sorted(valid):
    print(product, valid[product])
```

## 자주 하는 실수

- 최댓값만 필요한데 전체 정렬하는 경우
- 동률 기준이 이름인데 값 기준으로만 정렬하는 경우

## 안전한 패턴

- 최종 출력 대상만 정렬
- 정렬 key를 문제 조건과 정확히 일치

## 관련 연습 문제

- [0001. Order Settlement](../practice/0001-order-settlement.md)
- [0002. Popular Products](../practice/0002-popular-products.md)
