# 누적합

## 개념

누적합(prefix sum)은 구간 합 질의를 빠르게 처리하기 위해 누적 값을
미리 계산해 두는 기법입니다.

## 언제 쓰나

- 구간 질의가 많은 경우
- 반복 합산이 느린 경우

## 기본 문법

```python
prefix = [0]
for x in arr:
    prefix.append(prefix[-1] + x)

range_sum = prefix[R] - prefix[L - 1]
```

## 작은 예시

```python
arr = [10, 20, 30]
prefix = [0, 10, 30, 60]
# sum day 2..3 = 50
```

## 자주 하는 실수

- `prefix[0] = 0`을 빼먹는 경우
- 1-based 인덱스에서 off-by-one 실수
- 질의마다 `sum(arr[L:R])`를 반복하는 경우

## 안전한 패턴

- 누적합을 O(N)에 한 번만 구축
- 각 질의는 O(1)에 처리

## 관련 연습 문제

- [0003. Range Sales Query](../practice/0003-range-sales-query.md)
