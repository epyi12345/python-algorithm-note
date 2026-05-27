# 필터링과 최댓값

## 개념

유효한 값만 남긴 뒤 최댓값 조건에 맞는 결과만 출력하는 패턴입니다.

## 언제 쓰나

- 최대값 결과만 출력해야 할 때
- 0 이하 값을 제외해야 할 때

## 기본 문법

```python
valid = {k: v for k, v in result.items() if v > 0}
if not valid:
    print("NONE")
    return
max_qty = max(valid.values())
```

## 작은 예시

```python
for product in sorted(valid):
    if valid[product] == max_qty:
        print(product, valid[product])
```

## 자주 하는 실수

- 최대값만 필요하지만 양수 전체를 출력하는 경우
- empty check 전에 `max()`를 호출하는 경우

## 안전한 패턴

- 먼저 필터링(filtering)
- empty case 확인
- 최댓값 계산
- 최댓값 일치 항목만 출력

## 관련 연습 문제

- [0002. Popular Products](../practice/0002-popular-products.md)
