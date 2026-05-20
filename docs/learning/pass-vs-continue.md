# Pass vs Continue

## What it is

`pass` does nothing. `continue` skips the rest of the current loop iteration.

## When to use it

- Duplicate filtering in loops
- Early skip logic

## Basic syntax

```python
if key in seen:
    continue
```

## Small example

```python
if key in seen:
    continue
seen.add(key)
```

## Common mistakes

- Using `pass` where `continue` is required
- Keeping calculation logic outside duplicate guards

## Safe pattern

- Early `continue` for duplicates
- Keep normal calculation flow flat

## Related practice problems

- [0001. Order Settlement](../practice/0001-order-settlement.md)
