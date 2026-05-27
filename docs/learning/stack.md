# Stack

## What This Is
LIFO data structure for nested or last-in-first-out tasks.

## When to Use It
Bracket matching, undo, next-greater helpers.

## Core Idea
Push with append, pop from end.

## Basic Syntax or Pattern
```python
stack=[]
for ch in s:
    if ch=="(": stack.append(ch)
    elif stack: stack.pop()
```

## Step-by-step Example
Process left to right, resolve latest unresolved item.

## Common Mistakes
- Popping empty stack
- Using values when indexes needed

## Safe Pattern
Store indexes if output requires distance/position.

## Time Complexity
O(N) total for one pass patterns.

## Related Practice Problems
- [0005. Next Growth Day](../practice/0005-next-growth-day.md)

## Review Checklist
- Is stack content representing unresolved state?
