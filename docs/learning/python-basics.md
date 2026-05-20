# Python Basics for Problem Solving

## sys.stdin.readline

Use fast input for large test cases.

```python
import sys
input = sys.stdin.readline
```

## split and map

Split one line and convert numeric values.

```python
a, b = map(int, input().split())
```

## list

Store ordered values and access by index.

```python
nums = list(map(int, input().split()))
```

## dict

Map key to value for counting and aggregation.

```python
count = {}
count["apple"] = count.get("apple", 0) + 1
```

## set

Use for duplicate checks and O(1)-average membership test.

```python
seen = set()
if key in seen:
    continue
seen.add(key)
```

## defaultdict

Avoid manual key initialization.

```python
from collections import defaultdict
sales = defaultdict(int)
sales[product] += qty
```

## sorting

Sort keys or items for deterministic output.

```python
for key in sorted(data):
    print(key, data[key])
```

## for _ in range(n)

Use `_` when loop index is not needed.

```python
for _ in range(n):
    line = input().split()
```

## continue vs pass

- `pass`: do nothing, then keep executing below.
- `continue`: skip to next loop iteration.

```python
if key in seen:
    continue
```

## print formatting

Print exactly as required by output format.

```python
print(product, qty)
```
