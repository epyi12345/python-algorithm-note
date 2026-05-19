# 0001. Order Settlement

한국어 제목: 주문 정산기

## 유형

Hash / Implementation / Duplicate handling / Sorting

## 난이도

Lv.1 Basic

## 상태

리뷰와 함께 해결

## 사전 지식

문제를 풀기 전에 다음을 이해해야 합니다:

- Reading input with sys.stdin.readline
- Splitting one input line into multiple values
- Converting numeric strings to integers
- Using set for duplicate detection
- Using dict or defaultdict for accumulation
- Sorting dictionary keys
- The difference between pass and continue

## 문제 요약

A shopping mall provides order logs for one day.

Each log has this format:

```text
order_id product quantity status
```

The status is one of:

- PAY
- REFUND

You need to calculate the final sales quantity for each product.

## 규칙

1. PAY increases the product quantity.
2. REFUND decreases the product quantity.
3. If logs with the same order_id, product, quantity, and status appear
   multiple times, process that log only once.
4. Products with final quantity less than or equal to 0 are not printed.
5. Print products in ascending product-name order.
6. If there are no products to print, print nothing.

## 입력 형식

```text
N
order_id product quantity status
order_id product quantity status
...
```

## 출력 형식

```text
product quantity
product quantity
...
```

If there are no valid products, print nothing.

## 제한 조건

```text
1 <= N <= 100000
1 <= quantity <= 1000
order_id and product are strings without spaces
status is PAY or REFUND
```

## 예시

### Example 1

입력:

```text
9
A001 water10 2 PAY
A002 water20 1 PAY
A001 water10 2 PAY
A003 blanket 1 PAY
A004 water10 1 PAY
A004 water10 1 REFUND
A005 water20 3 PAY
A006 blanket 1 REFUND
A007 tissue 5 PAY
```

출력:

```text
tissue 5
water10 2
water20 4
```

### Explanation 1

The duplicated log:

```text
A001 water10 2 PAY
```

appears twice but must be processed only once.

Final quantities:

```text
blanket = 1 - 1 = 0
tissue = 5
water10 = 2 + 1 - 1 = 2
water20 = 1 + 3 = 4
```

blanket is excluded because its final quantity is 0.

### Example 2

입력:

```text
6
O001 apple 3 PAY
O001 apple 3 PAY
O001 apple 1 REFUND
O002 banana 2 PAY
O003 banana 2 REFUND
O004 carrot 5 REFUND
```

출력:

```text
apple 2
```

### Explanation 2

The duplicated PAY log for apple is processed only once.

Final quantities:

```text
apple = 3 - 1 = 2
banana = 2 - 2 = 0
carrot = -5
```

Only apple is printed.

## 평가 포인트

- Correct duplicate log handling
- Correct PAY and REFUND processing
- Correct use of set for processed logs
- Correct use of dict or defaultdict for product accumulation
- Excluding products with final quantity less than or equal to 0
- Sorting output by product name
- Removing debug output before submission
- Explaining time and space complexity

## 온라인 에디터

로컬 Python 환경이 없을 때 OneCompiler Python editor로 해법을 테스트하세요.

[Open Python Editor](../tools/python-editor.md){ .md-button .md-button--primary }

[Open OneCompiler in a new tab ↗](https://onecompiler.com/python){ target="_blank" rel="noopener" }

## 코드 템플릿

```python
def solve():
    pass

if __name__ == "__main__":
    solve()
```
