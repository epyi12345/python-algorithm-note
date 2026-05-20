# 0003. Range Sales Query

한국어 제목: 구간 매출 조회

## 유형

누적합(prefix sum) / 구간 질의(range query) / 구현(implementation)

## 난이도

Lv.2 Core

## 상태

대기 중

## 사전 지식

문제를 풀기 전에 다음을 이해해야 합니다:

- sys.stdin.readline으로 입력 받기
- map과 split으로 정수 리스트 입력 받기
- 숫자를 리스트에 저장하기
- 1-based 질의 인덱스 사용하기
- 반복 구간 합산이 왜 느린지 이해하기
- 누적합(prefix sum)의 기본 개념 이해하기

## 문제 요약

쇼핑몰에서 매일 판매된 상품 수를 기록합니다.

총 N일치 판매 데이터가 있습니다.

Q개의 구간 질의(range query)가 주어집니다.
각 질의는 day L부터 day R까지(양 끝 포함) 판매된 상품 수의 합을
요청합니다.

각 질의마다 해당 구간의 총 판매량을 출력합니다.

## 규칙

1. 판매 데이터는 N개의 정수로 구성됩니다.
2. i번째 정수는 i일차 판매 수량을 의미합니다.
3. 각 질의는 두 정수 L, R로 구성됩니다.
4. 각 질의에 대해 day L부터 day R까지의 판매 합을 출력합니다.
5. day 번호는 1부터 N까지입니다.
6. L과 R은 구간에 포함됩니다.
7. N과 Q가 클 때도 효율적으로 동작해야 합니다.

## 입력 형식

```text
N Q
sales_1 sales_2 ... sales_N
L R
L R
...
```

## 출력 형식

각 질의마다 정수 하나를 출력합니다.

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

### 예시 설명 1

첫 번째 질의:

```text
day 1 to day 3 = 10 + 20 + 30 = 60
```

두 번째 질의:

```text
day 2 to day 5 = 20 + 30 + 40 + 50 = 140
```

세 번째 질의:

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

### 예시 설명 2

질의 결과:

```text
day 1 to day 6 = 0 + 5 + 0 + 10 + 20 + 5 = 40
day 2 to day 4 = 5 + 0 + 10 = 15
day 3 to day 3 = 0
day 5 to day 6 = 20 + 5 = 25
```

## 평가 포인트

- 입력 처리 정확성
- 1-based 인덱스 사용 정확성
- 누적합(prefix sum) 구성 정확성
- 구간 합 공식 적용 정확성
- O(NQ) 반복 합산 회피 여부
- L과 R이 같은 단일 day 질의 처리
- 시간복잡도(time complexity)와 공간복잡도(space complexity) 설명 여부

## 온라인 에디터

로컬 Python 환경이 없을 때 OneCompiler Python editor로 해법을 테스트하세요.

## 코드 작성

이 문제를 워크벤치에서 열어 문제 설명과 파이썬 에디터를
나란히 보며 풀이할 수 있습니다.

[워크벤치에서 풀기](../../tools/practice-workbench/?problem=0003){ .md-button .md-button--primary }

[파이썬 에디터 열기](../tools/python-editor.md){ .md-button .md-button--primary }

[Open OneCompiler in a new tab ↗](https://onecompiler.com/python){ target="_blank" rel="noopener" }

## 코드 템플릿

```python
def solve():
    pass

if __name__ == "__main__":
    solve()
```

## 힌트

질의마다 직접 합산하면 너무 느릴 수 있습니다.

모든 질의에서 다음을 사용하면:

```python
sum(sales[L-1:R])
```

최악의 시간복잡도는 O(NQ)까지 커질 수 있습니다.

다음 형태의 누적합(prefix sum) 리스트를 만들어 보세요:

```text
prefix[i] = total sales from day 1 to day i
```

그러면 L부터 R까지의 구간 합을 빠르게 계산할 수 있습니다.
