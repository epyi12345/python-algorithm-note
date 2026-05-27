# 힙(heap)과 우선순위 큐(priority queue)

## 이 개념은 무엇인가
힙(heap)은 우선순위가 가장 높은(파이썬 기본은 가장 작은) 값을 빠르게 꺼내기 위한 자료구조입니다.
`heapq`로 min-heap을 사용할 수 있습니다.

## 언제 사용하는가
- 최소값/최대값을 반복 추출해야 할 때
- 작업 스케줄링(가장 이른/가벼운 작업부터 처리)
- 그리디(greedy) 방식으로 “현재 최선 후보”를 계속 뽑아야 할 때

## 핵심 아이디어
전체를 매번 정렬하지 않고, push/pop 때마다 힙 속성만 유지하면 됩니다.
그래서 반복 추출 시 정렬 반복보다 효율적입니다.

## 기본 문법 또는 패턴
```python
import heapq
h=[]
heapq.heappush(h, x)
small=heapq.heappop(h)
```

## 단계별 예시
1. 후보 값을 `heappush`로 넣습니다.
2. 다음으로 처리할 최소값을 `heappop`으로 꺼냅니다.
3. 새 후보가 생기면 다시 `heappush`합니다.
4. 이 과정을 반복하면 우선순위 큐(priority queue) 흐름이 완성됩니다.

## 흔한 실수
- 최소값 추출 문제인데 매 단계 전체 정렬을 반복하는 실수
- `heapq`가 min-heap 기본이라는 점을 잊는 실수
- max-heap이 필요한데 부호 반전을 누락하는 실수

## 안전한 패턴
- min-heap: 원값 그대로 push
- max-heap: `-value`를 push하고 pop 후 다시 부호 복원
- 우선순위가 여러 개인 경우 `(priority, tie_breaker, payload)` 튜플 사용

## 시간복잡도
- `heappush`: O(log N)
- `heappop`: O(log N)
- 최솟값 확인(`h[0]`): O(1)

## 관련 문제
- [0007. Store Map Shortest Path](../practice/0007-store-map-shortest-path.md)

## 복습 체크리스트
- 힙(heap)이 필요한 상황인지(반복 최소/최대 추출) 판단했는가?
- min-heap / max-heap 처리를 올바르게 선택했는가?
- 정렬 반복 대신 우선순위 큐(priority queue)로 비용을 줄였는가?
