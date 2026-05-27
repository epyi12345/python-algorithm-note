# 큐(queue)

## 개념
선입선출(FIFO) 자료구조이며 BFS에서는 `collections.deque`를 권장합니다.

## 언제 쓰나
- BFS 레벨 탐색
- 순서 기반 처리 파이프라인

## 기본 패턴
넣을 때 `append`, 꺼낼 때 `popleft`를 사용합니다.

## 작은 예시
BFS에서 위치와 거리 정보를 큐에 저장.

## 자주 하는 실수
- list의 pop(0) 반복 사용
- 시작 상태 enqueue 누락

## 관련 연습 문제
- [0007. Store Map Shortest Path](../practice/0007-store-map-shortest-path.md)
