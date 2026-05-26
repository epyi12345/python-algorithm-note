# 스택(stack)

## 개념
후입선출(LIFO) 자료구조로, 파이썬에서는 list append/pop으로 자주 구현합니다.

## 언제 쓰나
- 상태 되돌리기
- next greater/smaller 스캔

## 기본 패턴
조건을 만족할 때까지 pop하고, 새 항목을 append합니다.

## 작은 예시
미해결 인덱스를 스택에 두고 더 큰 값이 나오면 해결합니다.

## 자주 하는 실수
- 빈 스택 pop
- 인덱스가 필요한데 값만 저장

## 관련 연습 문제
- [0005. Next Growth Day](../practice/0005-next-growth-day.md)
