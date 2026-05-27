# 파이썬 입력

## 이 개념은 무엇인가

코딩테스트에서 입력 처리는 풀이의 시작점입니다. 입력을 느리게 받거나, 숫자를 문자열로 둔 채 계산하면 정답 로직이 맞아도 시간 초과나 타입 오류가 발생할 수 있습니다.

파이썬에서는 입력 크기가 커질 수 있으므로 보통 `sys.stdin.readline`을 사용합니다.

```python
import sys
input = sys.stdin.readline
```

이렇게 지정하면 이후에는 `input()`처럼 호출하면서도 더 빠르게 한 줄씩 읽을 수 있습니다.

## 언제 사용하는가

다음 상황에서는 빠른 입력 패턴을 먼저 떠올리는 것이 좋습니다.

- 입력 줄 수가 많다.
- `N`이 `100000` 이상으로 커질 수 있다.
- 한 줄에 여러 숫자가 들어온다.
- 여러 줄의 데이터를 반복해서 읽어야 한다.
- 결과를 여러 줄 출력해야 한다.

작은 예제에서는 기본 `input()`도 동작하지만, 실전에서는 처음부터 안정적인 패턴을 쓰는 것이 좋습니다.

## 핵심 아이디어

입력 처리의 핵심은 세 가지입니다.

1. 한 줄을 읽는다.
2. 필요한 단위로 나눈다.
3. 계산에 맞는 타입으로 바로 변환한다.

예를 들어 한 줄에 숫자 두 개가 들어오면 다음처럼 처리합니다.

```python
n, q = map(int, input().split())
```

한 줄에 숫자 배열이 들어오면 다음처럼 처리합니다.

```python
arr = list(map(int, input().split()))
```

이렇게 처음부터 `int`로 바꿔두면 나중에 `int(arr[i])`를 반복 호출하지 않아도 됩니다.

## 기본 문법 또는 패턴

### 정수 하나 입력

```python
n = int(input())
```

### 한 줄에서 정수 여러 개 입력

```python
a, b = map(int, input().split())
```

### 정수 리스트 입력

```python
arr = list(map(int, input().split()))
```

### 문자열 여러 개 입력

```python
order_id, product, qty, status = input().split()
qty = int(qty)
```

숫자와 문자열이 섞여 있다면, 먼저 `split()`으로 나눈 뒤 숫자 필드만 따로 변환합니다.

### N줄 반복 입력

```python
n = int(input())

for _ in range(n):
    a, b = map(int, input().split())
```

### 결과를 모아서 한 번에 출력

```python
result = []

for _ in range(n):
    result.append("OK")

print(*result, sep="\n")
```

출력이 많을 때는 매번 `print()`를 호출하는 것보다 결과를 리스트에 모아 마지막에 한 번에 출력하는 패턴이 안정적입니다.

## 단계별 예시

입력:

```text
3
1 2
3 4
5 6
```

목표는 각 줄의 두 숫자를 더해서 출력하는 것입니다.

```python
import sys

input = sys.stdin.readline

n = int(input())
result = []

for _ in range(n):
    a, b = map(int, input().split())
    result.append(a + b)

print(*result, sep="\n")
```

출력:

```text
3
7
11
```

처리 흐름은 다음과 같습니다.

1. `n = int(input())`으로 줄 개수를 읽습니다.
2. `for _ in range(n)`으로 정확히 `N`줄을 반복합니다.
3. 각 줄에서 `a`, `b`를 정수로 변환합니다.
4. 결과를 `result`에 저장합니다.
5. 마지막에 줄바꿈 기준으로 한 번에 출력합니다.

## 흔한 실수

### 숫자를 문자열로 저장하는 경우

```python
arr = input().split()
```

이렇게 받으면 `arr`에는 문자열이 들어갑니다.

```python
["10", "20", "30"]
```

계산할 배열이라면 처음부터 이렇게 받는 것이 좋습니다.

```python
arr = list(map(int, input().split()))
```

### `readline()` 뒤의 줄바꿈을 오해하는 경우

`sys.stdin.readline()`은 줄 끝의 `\n`을 포함할 수 있습니다. 하지만 `split()`은 공백과 줄바꿈을 기준으로 자동 분리하므로 대부분의 숫자 입력에서는 별도 `strip()`이 필요하지 않습니다.

```python
a, b = map(int, input().split())
```

문자열 자체를 비교해야 하는 경우에는 필요에 따라 `strip()`을 사용할 수 있습니다.

```python
status = input().strip()
```

### 출력을 너무 자주 호출하는 경우

반복문 안에서 `print()`를 많이 호출해도 통과하는 경우가 많지만, 출력량이 큰 문제에서는 결과를 모아서 출력하는 습관이 좋습니다.

```python
print(*result, sep="\n")
```

### 입력 형식을 코드보다 늦게 이해하는 경우

문제를 풀기 전에 입력 형식을 먼저 구조화해야 합니다.

```text
N Q
value_1 value_2 ... value_N
L R
L R
...
```

이런 입력이라면 `N`, `Q`, 배열, `Q`개의 질의를 각각 따로 읽어야 합니다.

## 안전한 패턴

대부분의 문제에서 시작 템플릿은 다음처럼 잡으면 됩니다.

```python
import sys

def solve():
    input = sys.stdin.readline

    n = int(input())
    arr = list(map(int, input().split()))

    result = []

    for _ in range(n):
        # 필요한 처리
        pass

    print(*result, sep="\n")

if __name__ == "__main__":
    solve()
```

모든 문제에 그대로 맞지는 않지만, 입력 처리와 출력 구조를 안정적으로 잡는 데 도움이 됩니다.

## 시간복잡도

입력 처리는 전체 토큰 수에 비례합니다.

```text
시간복잡도: O(total input tokens)
```

입력 자체를 읽는 비용은 피할 수 없습니다. 대신 같은 값을 반복해서 변환하거나, 불필요한 리스트를 계속 만드는 비용을 줄이는 것이 중요합니다.

예를 들어 다음 패턴은 좋지 않습니다.

```python
arr = input().split()
for i in range(n):
    total += int(arr[i])
```

처음부터 정수 리스트로 받는 편이 좋습니다.

```python
arr = list(map(int, input().split()))
```

## 관련 문제

- [0001. Order Settlement](../practice/0001-order-settlement.md)
- [0002. Popular Products](../practice/0002-popular-products.md)
- [0003. Range Sales Query](../practice/0003-range-sales-query.md)
- [0007. Store Map Shortest Path](../practice/0007-store-map-shortest-path.md)

## 복습 체크리스트

- 숫자 입력을 처음부터 `int`로 변환했는가?
- 한 줄에 여러 값이 있을 때 `split()`과 `map()`을 올바르게 사용했는가?
- `N`줄 입력을 정확히 `N`번 반복했는가?
- 문자열 비교가 필요한 값에는 `strip()`이 필요한지 확인했는가?
- 출력이 많을 때 결과를 모아서 출력했는가?
- 입력 형식을 코드 작성 전에 먼저 구조화했는가?
