# 0002. Popular Products

한국어 제목: 인기 상품

## 유형

Hash / Implementation / Duplicate handling / Sorting / Tie-break

## 난이도

Lv.1+ Basic

## 상태

리뷰와 함께 해결

## 사전 지식

문제를 풀기 전에 다음을 이해해야 합니다:

- Reading input with sys.stdin.readline
- Splitting one input line into multiple values
- Converting numeric strings to integers
- Using set for duplicate detection
- Using dict or defaultdict for accumulation
- Filtering dictionary items by value
- Finding a maximum value
- Sorting tied results by product name

## 문제 요약

A shopping mall provides purchase logs for one day.

Each log has this format:

```text
customer_id product quantity status
```

The status is one of:

- BUY
- CANCEL

You need to calculate the final sales quantity for each product and
print the product or products with the highest final sales quantity.

## 규칙

1. BUY increases the product quantity.
2. CANCEL decreases the product quantity.
3. If logs with the same customer_id, product, quantity, and status
   appear multiple times, process that log only once.
4. Products with final quantity less than or equal to 0 are excluded.
5. Print only the product or products with the highest final quantity.
6. If multiple products have the same highest quantity, print all of
   them in ascending product-name order.
7. If there are no products to print, print NONE.

## 입력 형식

```text
N
customer_id product quantity status
customer_id product quantity status
...
```

## 출력 형식

Print the product name and final quantity for the product or products
with the highest final quantity.

```text
product quantity
product quantity
...
```

If there are no valid products, print:

```text
NONE
```

## 제한 조건

```text
1 <= N <= 100000
1 <= quantity <= 1000
customer_id and product are strings without spaces
status is BUY or CANCEL
```

## 예시

### Example 1

입력:

```text
10
U001 apple 3 BUY
U002 banana 5 BUY
U003 apple 2 BUY
U004 banana 1 CANCEL
U001 apple 3 BUY
U005 carrot 4 BUY
U006 carrot 1 BUY
U007 banana 1 BUY
U008 apple 1 CANCEL
U009 melon 2 CANCEL
```

출력:

```text
banana 5
carrot 5
```

### Explanation 1

The duplicated log:

```text
U001 apple 3 BUY
```

appears twice but must be processed only once.

Final quantities:

```text
apple = 3 + 2 - 1 = 4
banana = 5 - 1 + 1 = 5
carrot = 4 + 1 = 5
melon = -2
```

melon is excluded because its final quantity is less than or equal to 0.

The highest final quantity is 5, so banana and carrot are printed in
ascending product-name order.

### Example 2

입력:

```text
5
U001 book 2 BUY
U002 book 2 CANCEL
U003 pen 1 CANCEL
U004 bag 3 CANCEL
U001 book 2 BUY
```

출력:

```text
NONE
```

### Explanation 2

The duplicated log:

```text
U001 book 2 BUY
```

appears twice but must be processed only once.

Final quantities:

```text
book = 2 - 2 = 0
pen = -1
bag = -3
```

There are no products with final quantity greater than 0, so NONE is
printed.

## 평가 포인트

- Correct duplicate log handling
- Correct BUY and CANCEL processing
- Correct use of set for processed logs
- Correct use of dict or defaultdict for product accumulation
- Excluding products with final quantity less than or equal to 0
- Finding the maximum final quantity
- Printing all products tied for maximum quantity
- Sorting tied products by product name
- Printing NONE when there are no valid products
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
