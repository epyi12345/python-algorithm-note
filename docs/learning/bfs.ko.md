# BFS

## 개념
너비 우선 탐색은 거리(레벨) 순서로 노드를 탐색합니다.

## 언제 쓰나
- 무가중치 그래프/격자 최단 경로

## 기본 패턴
시작점을 큐(queue)에 넣고, pop 후 이웃을 확장하며 visited를 표시합니다.

## 작은 예시
S에서 E까지 격자 최단거리 찾기.

## 자주 하는 실수
- visited 누락
- 최단거리 보장을 DFS에 기대

## 관련 연습 문제
- [0007. Store Map Shortest Path](../practice/0007-store-map-shortest-path.md)
