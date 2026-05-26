# Greedy

## What This Is
Choose locally optimal action each step.

## When to Use It
When local choice can be proven globally valid.

## Core Idea
Often paired with sorting and one-pass selection.

## Basic Syntax or Pattern
Pattern: sort by criterion, iterate and commit decisions.

## Step-by-step Example
Interval scheduling chooses earliest ending first.

## Common Mistakes
- Assuming greedy always works
- No proof/invariant

## Safe Pattern
State why local choice preserves optimality.

## Time Complexity
Often O(N log N) with sorting.

## Related Practice Problems
- [0006. Minimum Shipping Capacity](../practice/0006-minimum-shipping-capacity.md)

## Review Checklist
- Did I justify local-choice validity?
