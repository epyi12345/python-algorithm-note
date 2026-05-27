# DP Introduction

## What This Is
Dynamic Programming solves overlapping subproblems by reusing results.

## When to Use It
When current answer depends on previous computed states.

## Core Idea
Define state, transition, base case first.

## Basic Syntax or Pattern
Memoization: top-down cache; Tabulation: bottom-up table.

## Step-by-step Example
Fibonacci: `dp[i]=dp[i-1]+dp[i-2]` with base `dp[0], dp[1]`.

## Common Mistakes
- Undefined state meaning
- Missing base case

## Safe Pattern
Write state sentence before coding.

## Time Complexity
Typically O(number_of_states * transition_cost).

## Related Practice Problems
- [0006. Minimum Shipping Capacity](../practice/0006-minimum-shipping-capacity.md)

## Review Checklist
- Did I define state/transition/base clearly?
