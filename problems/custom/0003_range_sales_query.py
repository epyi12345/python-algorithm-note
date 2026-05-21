import sys


def solve():
    input = sys.stdin.readline
    
    n, q = map(int, input().split())

    sales = list(map(int, input().split()))

    prefix = [0] * (n + 1)

    for i in range(1, n + 1):
        prefix[i] = prefix[i - 1] + sales[i - 1]

    result = []

    for _ in range(q):
        s_date, e_date = map(int, input().split())
        result.append(prefix[e_date] - prefix[s_date - 1])

    print(*result, sep="\n")


if __name__ == "__main__":
    solve()
