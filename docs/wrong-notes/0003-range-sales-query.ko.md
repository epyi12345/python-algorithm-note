# 0003. Range Sales Query

## 유형

누적합(prefix sum) / 구간 질의(range query) / 구현(implementation)

## 난이도

Lv.2 Core

## 상태

리뷰 완료

## 점수

98/100

## 문제 요약

- N일 판매 데이터와 Q개의 구간 질의가 주어집니다.
- 각 질의는 L일부터 R일까지의 총 판매량을 묻습니다.
- L과 R은 1-based index이며 구간 양 끝을 포함합니다.
- N과 Q가 클 때 질의마다 직접 합산하면 매우 느려질 수 있습니다.
- 누적합(prefix sum) 배열을 사용하면 각 질의를 O(1)에 처리할 수 있습니다.

## 내 시도

### 시도 1

<div class="code-review" markdown="1">
<div class="code-review__code" markdown="1">

**제출 코드**

```python
import sys

def solve():
    input = sys.stdin.readline

    n, q = map(int, input().split())

    day_list = list(input().split())

    result = list()

    for _ in range(q):
        s_date, e_date = map(int, input().split())
        date_range = range(s_date - 1, e_date)
        temp_sum = list()
        for i in date_range:
            temp_sum.append(int(day_list[i]))
        result.append(sum(temp_sum))
    print(*result, sep="\n")


if __name__ == "__main__":
    solve()
```

</div>
<div class="code-review__note" markdown="1">

**리뷰어 피드백**

잘한 점:
- 입력 형식을 정확히 이해했습니다.
- N과 Q를 올바르게 분리했습니다.
- 질의 구간을 1-based index에서 0-based index로 정확히 변환했습니다.
- 샘플 수준에서는 구간 합(range sum)을 정확히 계산했습니다.

문제점:
- 각 질의마다 구간을 다시 순회했습니다.
- 최악 시간복잡도(time complexity)가 O(NQ)가 됩니다.
- N과 Q가 100000까지 커지면 시간 초과가 발생할 수 있습니다.
- day_list를 문자열로 저장해 int 변환을 반복했습니다.
- 질의마다 temp_sum을 생성해 불필요한 메모리를 사용했습니다.

개선 방향:
- 처음부터 sales를 정수 리스트로 읽으세요.
- 누적합(prefix sum) 배열을 한 번만 구축하세요.
- 각 질의는 prefix[R] - prefix[L - 1]로 O(1)에 처리하세요.
- day 1부터 시작하는 구간 처리를 위해 prefix[0] = 0을 유지하세요.

</div>
</div>

### 시도 2

<div class="code-review" markdown="1">
<div class="code-review__code" markdown="1">

**제출 코드**

```python
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
```

</div>
<div class="code-review__note" markdown="1">

**리뷰어 피드백**

잘한 점:
- sales를 정수 리스트로 읽었습니다.
- prefix를 n + 1 크기로 올바르게 만들었습니다.
- prefix[0] = 0을 정확히 사용했습니다.
- prefix[i] = prefix[i - 1] + sales[i - 1] 구현이 정확합니다.
- 각 질의를 prefix[R] - prefix[L - 1]로 처리했습니다.
- 질의 처리 비용을 O(NQ)에서 O(N + Q)로 줄였습니다.

문제점:
- 주요 정답성 문제는 없습니다.
- 변수명은 일반 구간 질의 문제에서 l, r도 자주 쓰지만,
  판매 날짜 맥락에서는 s_date, e_date도 충분히 명확합니다.

개선 방향:
- 이후 구간 질의 문제에서도 이 누적합 패턴을 유지하세요.
- 공식을 적용하기 전에 index 기준이 1-based인지 0-based인지 항상 먼저 확인하세요.

</div>
</div>

## 최종 권장 풀이

시도 2와 동일한 최종 풀이를 사용합니다:

```python
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
```

## 핵심 교훈

- 질의마다 직접 합산하는 방식은 작은 예제에서는 통과해도 큰 제한에서 실패할 수 있습니다.
- 배열이 고정되어 있고 구간 합(range sum) 질의가 많을 때는 누적합(prefix sum)이 매우 유용합니다.
- prefix[0] = 0을 두면 1-based index 질의를 훨씬 안전하게 처리할 수 있습니다.
- 1-based index 포함 구간에서는 prefix[R] - prefix[L - 1] 공식을 사용합니다.
- 전처리를 한 번 수행하면 반복 질의 비용을 크게 줄일 수 있습니다.

## 복잡도

최종 풀이 기준:

- 시간복잡도(time complexity): O(N + Q)
- 공간복잡도(space complexity): O(N + Q)

기호 설명:
- N은 판매 데이터 개수입니다.
- Q는 구간 질의 개수입니다.

prefix 배열은 O(N) 공간을 사용합니다.
result 리스트는 O(Q) 공간을 사용합니다.

## 리뷰 체크리스트

- 숫자를 정수로 입력받았는가?
- prefix를 N + 1 크기로 만들었는가?
- prefix[0] = 0을 유지했는가?
- prefix[i]를 만들 때 sales[i - 1]을 사용했는가?
- L과 R이 1-based index라는 점을 확인했는가?
- 구간 합(range sum)을 prefix[R] - prefix[L - 1]로 계산했는가?
- 질의마다 sum(arr[L-1:R])를 반복하지 않았는가?
