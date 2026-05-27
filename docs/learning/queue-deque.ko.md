# 큐(queue)와 deque

## 이 개념은 무엇인가
큐(queue)는 FIFO(First In, First Out) 구조이며, Python에서는 `collections.deque`로 효율적으로 구현합니다.

## 언제 사용하는가
- 먼저 들어온 작업을 먼저 처리해야 할 때
- BFS 탐색처럼 레벨 순서 처리가 중요할 때
- 대기열/파이프라인 형태의 순차 처리 문제를 풀 때

## 핵심 아이디어
- 큐(queue)는 뒤에 넣고 앞에서 꺼냅니다.
- `deque`는 `append()`와 `popleft()`를 모두 빠르게 처리합니다.
- `list.pop(0)`은 앞 원소를 뺄 때마다 밀림이 발생해 비효율적입니다.

## 기본 문법 또는 패턴
```python
from collections import deque
q=deque([start])
while q:
    cur=q.popleft()
```

## 단계별 예시
1. 시작 노드(또는 시작 상태)를 큐(queue)에 넣습니다.
2. `popleft()`로 가장 먼저 들어온 상태를 꺼냅니다.
3. 다음으로 방문할 이웃 상태를 `append()`로 뒤에 추가합니다.
4. 이 과정을 반복하면 BFS 순서(가까운 것부터)로 탐색됩니다.
5. `0007. Store Map Shortest Path`처럼 최단 경로 BFS에서 기본 골격이 됩니다.

## 흔한 실수
- `list.pop(0)`을 반복해 시간 초과를 유발하는 실수
- 시작 상태 enqueue를 빼먹어 루프가 동작하지 않는 실수
- 방문 체크 시점을 늦게 잡아 중복 enqueue가 폭증하는 실수

## 안전한 패턴
- 큐(queue)는 항상 `deque`를 사용합니다.
- BFS에서는 enqueue 시점에 방문 표시를 해서 중복 삽입을 줄입니다.
- `append()` / `popleft()` 쌍으로 FIFO 의미를 일관되게 유지합니다.

## 시간복잡도
- `deque.append()` / `deque.popleft()`는 평균 `O(1)`입니다.
- BFS 전체는 정점 `V`, 간선 `E` 기준 보통 `O(V + E)`입니다.

## 관련 문제
- [0007. Store Map Shortest Path](../practice/0007-store-map-shortest-path.md)

## 복습 체크리스트
- FIFO 처리에 맞게 `deque`를 사용했는가?
- `list.pop(0)` 대신 `popleft()`를 사용했는가?
- BFS에서 방문 처리 순서를 올바르게 설계했는가?
