# 파이썬 입력

## 이 개념은 무엇인가
코딩 테스트에서 입력을 빠르고 안정적으로 처리하기 위한 기본 패턴입니다.

## 언제 사용하는가
입력 줄 수가 많거나, 한 줄에 여러 정수가 들어오거나, 출력을 여러 줄로 모아야 할 때 사용합니다.

## 핵심 아이디어
문자열을 필요한 타입으로 한 번에 변환하고, 출력은 리스트에 모아 한 번에 출력합니다.

## 기본 문법 또는 패턴
```python
import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))
result = []
for _ in range(n):
    a, b = map(int, input().split())
    result.append(a + b)
print(*result, sep="
")
```

## 단계별 예시
1. `input = sys.stdin.readline`으로 입력 속도를 확보합니다.
2. `map(int, input().split())`으로 숫자 변환을 즉시 처리합니다.
3. N줄 입력은 `for _ in range(n):` 패턴으로 읽습니다.
4. 출력은 `print(*result, sep="\n")`로 묶어서 처리합니다.

## 흔한 실수
- 큰 입력에서 `input()`만 사용해 속도가 느려지는 경우
- 문자열 상태로 저장해 반복적으로 `int()`를 호출하는 경우
- 출력마다 `print()`를 호출해 I/O 오버헤드가 커지는 경우

## 안전한 패턴
- 입력 즉시 형 변환
- 누적 출력 리스트 사용
- 인덱스/개수 검증 후 로직 실행

## 시간복잡도
입력 파싱은 토큰 수를 T라고 하면 O(T)입니다.

## 관련 문제
- [0001. Order Settlement](../practice/0001-order-settlement.md)
- [0007. Store Map Shortest Path](../practice/0007-store-map-shortest-path.md)

## 복습 체크리스트
- `sys.stdin.readline`을 적용했는가?
- 숫자 토큰을 즉시 int로 변환했는가?
- 다중 줄 출력을 배치 처리했는가?
