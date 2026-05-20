# Python Input

## What it is

Python input patterns for coding tests, especially when input is large.

## When to use it

- Many lines of input
- Large `N`
- Structured line-based parsing

## Basic syntax

```python
import sys
input = sys.stdin.readline

n = int(input())
a, b = map(int, input().split())
arr = list(map(int, input().split()))
for _ in range(n):
    line = input().split()
```

## Small example

```python
import sys
input = sys.stdin.readline

n = int(input())
for _ in range(n):
    x, y = map(int, input().split())
    print(x + y)
```

## Common mistakes

- Using `input()` for very large input without performance consideration
- Forgetting `split()` before parsing multiple values
- Calling `int()` on a whole line with spaces

## Safe pattern

- Use `sys.stdin.readline` for speed
- Use `split()` for token parsing
- Use `map(int, ...)` only where numeric conversion is needed

## Related practice problems

- [0001. Order Settlement](../practice/0001-order-settlement.md)
- [0002. Popular Products](../practice/0002-popular-products.md)
- [0003. Range Sales Query](../practice/0003-range-sales-query.md)
