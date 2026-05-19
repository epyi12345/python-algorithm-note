# 0003. Range Sales Query

한국어 제목: 구간 매출 조회

## 유형

Prefix Sum / Range Query / Implementation

## 난이도

Lv.2 Core

## 상태

대기 중

## 사전 지식

문제를 풀기 전에 다음을 이해해야 합니다:

- Reading input with sys.stdin.readline
- Reading a list of integers with map and split
- Using a list to store numbers
- Using 1-based query indexes
- Understanding why repeated range summation can be too slow
- Basic idea of prefix sums

## 문제 요약

A shopping mall records the number of products sold each day.

There are N days of sales data.

You are given Q range queries.  
Each query asks for the total number of products sold from day L to day R,
inclusive.

For each query, print the total sales in that range.

## 규칙

1. The sales data contains N integers.
2. The i-th integer represents the number of products sold on day i.
3. Each query contains two integers L and R.
4. For each query, print the sum of sales from day L to day R.
5. Days are numbered from 1 to N.
6. L and R are inclusive.
7. The solution should be efficient for large N and Q.

## 입력 형식

```text
N Q
sales_1 sales_2 ... sales_N
L R
L R
...
```

## 출력 형식

Print one integer for each query.

```text
range_sum
range_sum
...
```

## 제한 조건

```text
1 <= N <= 100000
1 <= Q <= 100000
0 <= sales_i <= 1000
1 <= L <= R <= N
```

## 예시

### Example 1

입력:

```text
5 3
10 20 30 40 50
1 3
2 5
4 4
```

출력:

```text
60
140
40
```

### Explanation 1

For the first query:

```text
day 1 to day 3 = 10 + 20 + 30 = 60
```

For the second query:

```text
day 2 to day 5 = 20 + 30 + 40 + 50 = 140
```

For the third query:

```text
day 4 to day 4 = 40
```

### Example 2

입력:

```text
6 4
0 5 0 10 20 5
1 6
2 4
3 3
5 6
```

출력:

```text
40
15
0
25
```

### Explanation 2

Final query results:

```text
day 1 to day 6 = 0 + 5 + 0 + 10 + 20 + 5 = 40
day 2 to day 4 = 5 + 0 + 10 = 15
day 3 to day 3 = 0
day 5 to day 6 = 20 + 5 = 25
```

## 평가 포인트

- Correct input handling
- Correct use of 1-based indexes
- Correct prefix sum construction
- Correct range sum formula
- Avoiding O(NQ) repeated summation
- Handling single-day queries where L equals R
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

## 힌트

A direct sum for every query can be too slow.

If every query uses:

```python
sum(sales[L-1:R])
```

the worst-case time complexity can become O(NQ).

Try to create a prefix sum list where:

```text
prefix[i] = total sales from day 1 to day i
```

Then the range sum from L to R can be calculated quickly.
