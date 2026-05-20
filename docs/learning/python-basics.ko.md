# 문제 해결을 위한 Python 기초

## sys.stdin.readline

큰 입력에서는 빠른 입력을 사용합니다.

```python
import sys
input = sys.stdin.readline
```

## split and map

한 줄을 분리하고 숫자형으로 변환합니다.

```python
a, b = map(int, input().split())
```

## list

순서가 있는 값을 저장하고 인덱스로 접근합니다.

```python
nums = list(map(int, input().split()))
```

## dict

카운팅/집계를 위해 key-value 구조를 사용합니다.

```python
count = {}
count["apple"] = count.get("apple", 0) + 1
```

## set

중복 체크와 빠른 포함 여부 검사에 사용합니다.

```python
seen = set()
if key in seen:
    continue
seen.add(key)
```

## defaultdict

초기화 코드를 줄일 수 있습니다.

```python
from collections import defaultdict
sales = defaultdict(int)
sales[product] += qty
```

## sorting

출력 순서를 고정하기 위해 정렬합니다.

```python
for key in sorted(data):
    print(key, data[key])
```

## for _ in range(n)

인덱스를 쓰지 않을 때 `_`를 사용합니다.

```python
for _ in range(n):
    line = input().split()
```

## continue vs pass

- `pass`: 아무 동작 없이 아래 코드 계속 실행
- `continue`: 현재 반복의 나머지를 건너뛰고 다음 반복으로 이동

```python
if key in seen:
    continue
```

## print formatting

문제에서 요구한 출력 형식을 정확히 맞춥니다.

```python
print(product, qty)
```
