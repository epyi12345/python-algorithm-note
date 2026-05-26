# 파이썬 입력

## What This Is
Safe and fast input handling patterns for coding tests.

## When to Use It
When input size is large or structured by lines/tokens.

## Core Idea
Parse once into the right types; avoid repeated string conversion.

## Basic Syntax or Pattern
```python
import sys
input = sys.stdin.readline
n = int(input())
arr = list(map(int, input().split()))
result = []
for _ in range(n):
    a, b = map(int, input().split())
    result.append(a + b)
print(*result, sep="\n")
```

## Step-by-step Example
1) Read N. 2) Read values with split/map. 3) Process N lines. 4) Print batched output.

## Common Mistakes
- Using plain `input()` in huge input
- Forgetting `strip()` side effects
- Storing numbers as strings

## Safe Pattern
- Use `sys.stdin.readline`
- Convert to int at read time
- Print once with `print(*result, sep="\n")`

## Time Complexity
Read/parse is O(total tokens).

## Related Practice Problems
- [0001. Order Settlement](../practice/0001-order-settlement.md)
- [0007. Store Map Shortest Path](../practice/0007-store-map-shortest-path.md)

## Review Checklist
- Did I convert numeric tokens once?
- Did I avoid per-line slow output?
