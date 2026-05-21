# 매개변수 탐색(parametric search)

## 개념
정답 후보 값을 이분 탐색하고, 판별 함수로 가능 여부를 검사하는 기법입니다.

## 언제 쓰나
- 조건을 만족하는 최소/최대 값을 구할 때

## 기본 패턴
`can(x)`를 정의하고 가능한 x의 최소/최대를 이분 탐색합니다.

## 작은 예시
용량 C로 D일 안에 배송 가능한가?

## 자주 하는 실수
- 단조성이 없는 판별 함수
- 탐색 구간 설정 오류

## 관련 연습 문제
- [0006. Minimum Shipping Capacity](../practice/0006-minimum-shipping-capacity.md)
