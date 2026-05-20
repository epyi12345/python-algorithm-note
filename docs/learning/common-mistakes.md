# Common Mistakes

## 1) Using pass when continue is needed

- Symptom: duplicated input still affects result.
- Why it is wrong: `pass` does not skip remaining loop logic.
- Safer pattern: use `continue` right after duplicate check.

## 2) Leaving debug print in final output

- Symptom: output contains extra lines like dictionaries.
- Why it is wrong: judge expects exact output format.
- Safer pattern: remove all debug prints before submission.

## 3) Printing all positive results when only maximum is required

- Symptom: too many lines are printed.
- Why it is wrong: problem may ask only max-value entries.
- Safer pattern: filter valid items, compute max, print matches only.

## 4) Forgetting tie-break sorting

- Symptom: output order is inconsistent or wrong.
- Why it is wrong: many problems require deterministic order.
- Safer pattern: sort by required key before printing.

## 5) Calling max() before empty check

- Symptom: runtime error on empty collection.
- Why it is wrong: `max()` needs at least one element.
- Safer pattern: `if not data: ...` before `max(data)`.

## 6) Using unclear variable names such as a, b, c, d

- Symptom: logic is hard to read and easy to break.
- Why it is wrong: unclear roles increase bug risk.
- Safer pattern: use names like `customer_id`, `product`, `qty`.

## 7) Sorting everything when only max() is needed

- Symptom: unnecessary O(N log N) cost.
- Why it is wrong: full sort is slower than needed.
- Safer pattern: use `max()` first, sort only final candidates.
