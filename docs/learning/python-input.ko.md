# 파이썬 입력

## 개념

코딩 테스트에서 자주 사용하는 Python 입력 처리 패턴입니다.

## 언제 쓰나

- 입력 줄 수가 많은 경우
- `N`이 큰 경우
- 줄 단위 파싱이 필요한 경우

## 기본 문법

```python
import sys
input = sys.stdin.readline

n = int(input())
a, b = map(int, input().split())
arr = list(map(int, input().split()))
for _ in range(n):
    line = input().split()
```

## 작은 예시

```python
import sys
input = sys.stdin.readline

n = int(input())
for _ in range(n):
    x, y = map(int, input().split())
    print(x + y)
```

## 자주 하는 실수

- 큰 입력에서 성능 고려 없이 `input()`만 사용하는 경우
- 여러 값을 읽는데 `split()`을 빼먹는 경우
- 공백이 있는 한 줄 전체에 `int()`를 적용하는 경우

## 안전한 패턴

- 속도가 필요하면 `sys.stdin.readline` 사용
- 토큰 분리는 `split()`으로 처리
- 숫자 변환은 필요한 위치에서만 `map(int, ...)` 사용

## 관련 연습 문제

- [0001. Order Settlement](../practice/0001-order-settlement.md)
- [0002. Popular Products](../practice/0002-popular-products.md)
- [0003. Range Sales Query](../practice/0003-range-sales-query.md)
