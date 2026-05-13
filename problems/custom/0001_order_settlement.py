"""Small custom example for aggregating order settlements.

This is an original practice snippet and not a copied problem statement.
"""

from collections.abc import Iterable


def settle_orders(transactions: Iterable[tuple[str, int]]) -> dict[str, int]:
    """Return final balance deltas per account."""
    balances: dict[str, int] = {}

    for account, delta in transactions:
        balances[account] = balances.get(account, 0) + delta

    return balances


if __name__ == "__main__":
    sample = [("alice", 100), ("bob", -40), ("alice", -25)]
    print(settle_orders(sample))
