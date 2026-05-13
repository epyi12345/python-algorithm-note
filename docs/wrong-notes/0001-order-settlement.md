# Wrong Note 0001: Order Settlement

## Mistake

I updated balances while iterating through transactions, then used the partially updated state to make later decisions.

## Fix

Separate the calculation into two phases: first aggregate every delta, then apply or report the final result.

## Reminder

When order matters, write down which values are raw inputs and which values are derived outputs.
