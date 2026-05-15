import sys
from collections import defaultdict


def solve():
    input = sys.stdin.readline

    n = int(input())

    seen = set()
    result = defaultdict(int)

    for _ in range(n):
        order_id, product, qty, status = input().split()
        qty = int(qty)

        key = (order_id, product, qty, status)

        if key in seen:
            continue

        seen.add(key)

        if status == "PAY":
            result[product] += qty
        else:
            result[product] -= qty

    for product in sorted(result):
        if result[product] > 0:
            print(product, result[product])


if __name__ == "__main__":
    solve()
