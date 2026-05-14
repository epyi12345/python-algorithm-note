# 0001. Order Settlement

- Type: Hash / Implementation / Duplicate handling / Sorting
- Status: Solved with review
- Score: 85/100

## Problem Summary

- Given order logs with order id, product, quantity, and status.
- PAY increases product quantity.
- REFUND decreases product quantity.
- Identical logs must be processed only once.
- Products with final quantity less than or equal to 0 are not printed.
- Output must be sorted by product name.

## Initial Mistake

- Used `pass` for duplicate logs.
- `pass` does not skip the current loop.
- This could allow duplicate logs to continue into calculation if the
  calculation logic is outside the `else` block.

## Correct Idea

- Use a set to store processed log keys.
- Use a tuple of `order_id`, `product`, `qty`, and `status` as the
  duplicate key.
- Use `defaultdict(int)` to accumulate product quantities.
- Use `continue` to skip duplicated logs early.

## Key Lesson

- `pass` means do nothing and continue execution.
- `continue` means skip the rest of the current loop iteration.
- For duplicate filtering, `continue` is usually safer and cleaner.

## Time Complexity

- O(N + M log M)
- N is the number of logs.
- M is the number of product types.

## Space Complexity

- O(N + M)

## Review Notes

- Requirement understanding was good.
- The duplicate key design was correct.
- The main weakness was loop control flow.
- Prefer early `continue` to reduce indentation and avoid accidental
  execution.
