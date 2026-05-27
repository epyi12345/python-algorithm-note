# 큐(queue)와 deque

## 이 개념은 무엇인가
큐(queue)는 FIFO(First-In, First-Out) 자료구조이며, 파이썬에서는 `collections.deque`로 효율적으로 구현합니다.

## 언제 사용하는가
- BFS 탐색
- 순서대로 처리되는 작업 파이프라인
- 오래된 항목부터 꺼내야 하는 시뮬레이션

## 핵심 아이디어
큐(queue)는 먼저 들어온 항목을 먼저 처리합니다.
`deque`는 앞/뒤 양쪽에서 O(1)로 삽입/삭제가 가능합니다.

## 기본 문법 또는 패턴
```python
from collections import deque
q=deque([start])
while q:
    cur=q.popleft()
```

## 단계별 예시
1. 시작 노드(또는 시작 좌표)를 `append`로 넣습니다.
2. 반복문에서 `popleft`로 가장 먼저 들어온 항목을 꺼냅니다.
3. 다음 후보를 다시 `append`로 뒤에 넣습니다.
4. 이 순서가 BFS의 레벨 순회와 동일합니다.

## 흔한 실수
- 큐(queue) 구현에 리스트 `pop(0)`을 사용하는 실수
- 초기 원소 enqueue를 빼먹는 실수
- 방문 처리 타이밍을 늦춰 중복 삽입이 커지는 실수

## 안전한 패턴
- 큐(queue)는 항상 `deque` 사용
- 삽입은 `append`, 추출은 `popleft`로 고정
- 방문 처리(visited)는 enqueue 시점에 수행

## 시간복잡도
`deque.append`, `deque.popleft`는 평균 O(1)입니다.
탐색 전체는 보통 정점/칸 수 기준 O(V+E) 또는 O(NM)으로 정리됩니다.

## 관련 문제
- [0007. Store Map Shortest Path](../practice/0007-store-map-shortest-path.md)

## 복습 체크리스트
- list 대신 `deque`를 사용했는가?
- FIFO 순서가 유지되는지 확인했는가?
- BFS에서 방문 처리 시점을 올바르게 잡았는가?
