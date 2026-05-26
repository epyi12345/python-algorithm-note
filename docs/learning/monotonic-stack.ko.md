# 단조 스택(monotonic stack)

## What This Is
Stack that keeps monotonic order to solve next greater/smaller in O(N).

## When to Use It
Next greater day/temperature/price span styles.

## Core Idea
While current breaks monotonic condition, pop and resolve.

## Basic Syntax or Pattern
```python
for i,v in enumerate(arr):
    while st and arr[st[-1]] < v:
        j=st.pop(); ans[j]=i-j
    st.append(i)
```

## Step-by-step Example
Each index pushed once and popped once.

## Common Mistakes
- Using >= vs > incorrectly
- Storing values only

## Safe Pattern
Store indexes; unresolved answers remain default 0.

## Time Complexity
O(N).

## Related Practice Problems
- [0005. Next Growth Day](../practice/0005-next-growth-day.md)

## Review Checklist
- Did each index push/pop at most once?
