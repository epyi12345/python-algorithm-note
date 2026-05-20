# 대시보드

## 요약

- 해결한 문제 수: 3
- 리뷰 완료 문제 수: 3
- 오답노트 수: 3
- 현재 집중 항목: Prefix Sum / Range Query / Indexing

## 최근 문제 로그

| 날짜 | 문제 | 유형 | 난이도 | 결과 | 점수 | 주요 이슈 | 리뷰 목표 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-05-14 | 0003. Range Sales Query | Prefix Sum / Range Query | Lv.2 Core | 리뷰 완료 | 98/100 | direct repeated summation caused O(NQ) | 나중에 다시 풀기 |
| 2026-05-14 | 0002. Popular Products | 해시 / 구현 / 동률 처리 | Lv.1+ Basic | 리뷰와 함께 해결 | 97/100 | 최대값만 출력 + 동률 처리 규칙 | 나중에 다시 풀기 |
| 2026-05-14 | 0001. Order Settlement | 해시 / 구현 | Lv.1 Basic | 리뷰와 함께 해결 | 85/100 | pass vs continue | 나중에 다시 풀기 |

## 난이도 진행 현황

| 난이도 | 해결 | 리뷰 | 대기 | 비고 |
|---|---:|---:|---:|---|
| Lv.0 Warm-up | 0 | 0 | 0 | 아직 필요 없음 |
| Lv.1 Basic | 1 | 1 | 0 | Order Settlement |
| Lv.1+ Basic | 1 | 1 | 0 | Popular Products |
| Lv.2 Core | 1 | 1 | 0 | Range Sales Query |
| Lv.3 Intermediate | 0 | 0 | 0 | 시작 전 |
| Lv.4 Advanced | 0 | 0 | 0 | 시작 전 |
| Lv.5 Challenge | 0 | 0 | 0 | 시작 전 |

## 약점 트래커

- 제어 흐름(control flow): pass vs continue
- set을 이용한 중복 처리
- debug output 제거
- 양수 전체 출력과 최대값 전용 출력 구분
- 상품명 기준 동률 정렬
- 불필요한 전체 정렬 피하기
- max() 호출 전 empty case 처리

- 반복 구간 합산 피하기
- prefix[0] = 0 이해하기
- 1-based 질의 인덱스 처리
- prefix[R] - prefix[L - 1] 적용
