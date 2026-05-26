# Time Complexity

## What This Is
A way to estimate runtime growth as input increases.

## When to Use It
When deciding whether an approach will pass constraints.

## Core Idea
Use worst-case upper bound and operation count estimation.

## Basic Syntax or Pattern
| Class | Meaning |
|---|---|
| O(1) | constant |
| O(log N) | halving search |
| O(N) | linear scan |
| O(N log N) | sort+scan |
| O(N^2) | double loop |
| O(NQ) | nested by N and Q |

## Step-by-step Example
For N=100000, O(N^2) is too large; O(N log N) is usually acceptable.

## Common Mistakes
- Ignoring worst-case input
- Confusing average and worst case

## Safe Pattern
Estimate operations before coding; reject clearly too-large designs early.

## Time Complexity
Depends on algorithm; compare against constraints table.

## Related Practice Problems
- [0003. Range Sales Query](../practice/0003-range-sales-query.md)

## Review Checklist
- Did I check worst-case N/Q?
