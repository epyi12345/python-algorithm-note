# Prefix Sum

Prefix sums answer repeated range-sum questions efficiently.

## Checklist

- Define whether the prefix array starts with `0`.
- Convert an inclusive range carefully.
- Use a hash map when matching previous cumulative values.

## Python hint

For range `[left, right]`, a zero-based prefix list often uses `prefix[right + 1] - prefix[left]`.
