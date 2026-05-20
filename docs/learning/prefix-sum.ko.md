# 누적합(prefix sum)

## prefix 배열이란?

prefix 배열은 "처음부터 현재 위치까지의 누적 합"을 저장하는 배열입니다.

- `prefix[i]`는 첫 원소부터 `i`까지의 합(또는 1-based 기준에서 i번째까지의 합)을 뜻합니다.
- 실전에서는 앞에 0을 하나 둔 형태를 자주 사용합니다: `prefix[0] = 0`.

`prefix[0] = 0`이 유용한 이유:

- `L = 1`인 질의도 같은 공식으로 처리할 수 있습니다.
- 첫 구간 예외 처리를 따로 두지 않아도 됩니다.

판매량 예시:

```text
sales  = [10, 20, 30, 40, 50]
prefix = [0, 10, 30, 60, 100, 150]
```

## 왜 누적합을 쓰나?

구간 합(range sum)을 질의마다 직접 더하면 반복 비용이 너무 큽니다.

- 질의당 직접 합산: `sum(arr[L-1:R])`
- 배열 길이 `N`, 질의 수 `Q`일 때 최악 시간복잡도는 `O(NQ)`까지 커질 수 있습니다.
- 누적합(prefix sum)은 전처리 `O(N)` + 질의당 `O(1)`로 줄여줍니다.

대량 로그 집계, 기간별 통계, 판매량 분석 문제에서 매우 자주 등장합니다.

## 기본 공식

1-based index 질의에서:

```text
range_sum(L, R) = prefix[R] - prefix[L - 1]
```

동작 원리:

- `prefix[R]`에는 1일부터 R일까지의 합이 들어 있습니다.
- `prefix[L - 1]`에는 1일부터 L-1일까지의 합이 들어 있습니다.
- 두 값을 빼면 L일부터 R일까지만 남습니다.

예시 (`sales = [10, 20, 30, 40, 50]`):

- `prefix[4] = 100` (1~4일 합)
- `prefix[1] = 10` (1~1일 합)
- `L=2, R=4` 질의: `100 - 10 = 90` (20+30+40)

## Python 구현 (개념 예시)

아래 코드는 개념 설명용이며, 특정 연습문제의 정답 코드 전체를 대체하지 않습니다.

```python
import sys

input = sys.stdin.readline

n, q = map(int, input().split())
arr = list(map(int, input().split()))

prefix = [0] * (n + 1)
for i in range(1, n + 1):
    prefix[i] = prefix[i - 1] + arr[i - 1]

for _ in range(q):
    l, r = map(int, input().split())
    print(prefix[r] - prefix[l - 1])
```

## 자주 하는 실수

- `prefix[0] = 0`을 빼먹는 실수
- 0-based index와 1-based index를 섞는 실수
- 질의마다 `sum(arr[L-1:R])`를 반복하는 실수
- 입력을 문자열로 둔 채 `int(...)`를 반복 호출하는 실수
- `L`, `R` 경계에서 off-by-one 실수
- `R`이 포함 구간이라는 점을 놓치는 실수

## 안전한 패턴

1. 배열을 정수로 입력받습니다.
2. 길이 `N + 1`의 prefix 배열을 만듭니다.
3. `prefix[i] = prefix[i - 1] + arr[i - 1]`로 채웁니다.
4. 질의는 `prefix[R] - prefix[L - 1]`로 처리합니다.

## 고급 응용

### 조건 누적합

조건을 만족하는 값만 누적하는 prefix 배열을 만들 수 있습니다.

예: 구간 내 짝수 개수 세기

- `even_prefix[i]` = 앞에서 i개 원소 중 짝수 개수
- 구간 짝수 개수 = `even_prefix[R] - even_prefix[L - 1]`

임계값 이상 개수, 양수/음수 개수, 조건부 합계에도 같은 패턴을 적용할 수 있습니다.

### 다중 prefix 배열

카테고리별로 prefix 배열을 여러 개 유지할 수 있습니다.

예시:

- 상품 A 판매량
- 상품 B 판매량
- 취소 주문 수
- 성공 주문 수

이렇게 하면 한 질의에서 여러 지표를 각각 `O(1)`에 계산할 수 있습니다.

### 해시맵(hash map) + 누적합

부분배열 합이 target인 경우의 수를 세는 문제에서 자주 사용합니다.

핵심 아이디어:

- 현재 누적합을 `curr_prefix`라고 할 때,
- 과거에 `curr_prefix - target`이 등장했다면,
- 현재 위치에서 끝나는 어떤 부분배열의 합이 target입니다.

보통 `dict` 또는 `collections.Counter`로 과거 누적합 빈도를 관리합니다.

### 2차원 누적합

격자(grid)에서 직사각형 구간 합을 빠르게 구할 때 사용합니다.

```text
rect_sum(r1, c1, r2, c2)
= prefix[r2][c2]
- prefix[r1 - 1][c2]
- prefix[r2][c1 - 1]
+ prefix[r1 - 1][c1 - 1]
```

포함-배제(inclusion-exclusion) 관점:

- 큰 사각형을 더하고
- 위/왼쪽 불필요 영역을 빼고
- 두 번 빠진 겹침 영역을 다시 한 번 더합니다.

### 차분 배열(difference array)

구간 업데이트가 매우 많을 때는 차분 배열이 더 효율적인 경우가 많습니다.

구간 `[L, R]`에 `x`를 더할 때:

```text
diff[L] += x
diff[R + 1] -= x
```

모든 업데이트 후 `diff`를 한 번 누적합하면 최종 배열을 복원할 수 있습니다.

## 누적합을 의심해야 하는 신호

| 문제 신호 | 누적합이 도움 되는 이유 |
|---|---|
| 구간 합 질의가 매우 많다 | 반복 합산을 피할 수 있음 |
| 고정 배열 + 질의 다수 | 한 번 전처리 후 재사용 가능 |
| [L, R] 구간 개수를 세야 한다 | prefix count로 O(1) 처리 |
| 격자 직사각형 합이 필요하다 | 2차원 누적합 적용 가능 |
| 구간 업데이트가 많다 | 차분 배열(difference array) 활용 가능 |

## 관련 연습 문제

- [0003. Range Sales Query](../practice/0003-range-sales-query.md)
