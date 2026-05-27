# 힙(heap)과 우선순위 큐(priority queue)

## 이 개념은 무엇인가
힙(heap)은 최솟값 또는 최댓값을 반복적으로 빠르게 꺼내기 위한 자료구조입니다. Python의 `heapq`는 기본적으로 min-heap을 제공합니다.

## 언제 사용하는가
- "가장 작은 값"을 계속 꺼내야 할 때
- 작업 스케줄링, 이벤트 처리, 그리디(greedy) 선택이 반복될 때
- 우선순위 기반 대기열(우선순위 큐(priority queue))이 필요할 때

## 핵심 아이디어
- `heapq.heappush()`로 삽입, `heapq.heappop()`으로 최솟값을 꺼냅니다.
- 매 단계 전체 정렬 대신 힙으로 관리하면 반복 추출 비용을 줄일 수 있습니다.
- max-heap이 필요하면 음수 값을 넣어 min-heap 동작을 뒤집습니다.

## 기본 문법 또는 패턴
```python
import heapq
h=[]
heapq.heappush(h, x)
small=heapq.heappop(h)
```

## 단계별 예시
1. 후보 작업들을 힙(heap)에 넣습니다.
2. 매 반복에서 `heappop()`으로 현재 최우선(최소) 작업을 꺼냅니다.
3. 처리 결과로 새 후보가 생기면 다시 `heappush()`합니다.
4. 이렇게 "삽입 + 최소 추출"을 반복해 우선순위 큐(priority queue)를 유지합니다.
5. 최대 우선순위가 필요하면 `-value`를 넣고 꺼낸 뒤 다시 부호를 복원합니다.

## 흔한 실수
- 단계마다 전체 리스트를 정렬해 불필요한 비용을 쓰는 실수
- `heapq`가 min-heap이라는 점을 잊고 max-heap처럼 사용하는 실수
- 튜플 우선순위에서 비교 기준 순서를 잘못 둬 동률 처리(tie-break)가 깨지는 실수

## 안전한 패턴
- 우선순위 튜플은 `(priority, secondary, payload)`처럼 비교 기준을 명확히 둡니다.
- max-heap 패턴에서는 push/pop 모두 동일한 부호 규칙을 유지합니다.
- 반복 최소 추출 문제가 보이면 힙(heap) 적용 가능성을 먼저 점검합니다.

## 시간복잡도
- `heappush`, `heappop`은 각각 `O(log N)`입니다.
- `N`번 반복 삽입/추출 시 전체는 보통 `O(N log N)`입니다.

## 관련 문제
- [0007. Store Map Shortest Path](../practice/0007-store-map-shortest-path.md)

## 복습 체크리스트
- 반복 최소/최대 추출 요구를 정확히 식별했는가?
- min-heap 기준과 max-heap 변환 규칙(음수)을 일관되게 적용했는가?
- 튜플 우선순위의 동률 처리 순서를 명확히 설계했는가?
