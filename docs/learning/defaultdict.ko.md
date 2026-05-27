# defaultdict

## 이 개념은 무엇인가
`defaultdict`는 없는 키(key)에 접근했을 때 기본값을 자동으로 만들어 주는 dict 확장 자료구조입니다.

## 언제 사용하는가
- 키가 처음 등장할 때마다 초기화 코드가 반복될 때
- 빈도 계산, 합계 누적, 그룹핑처럼 누적 패턴이 많은 문제를 풀 때
- 누락 키 처리 실수(`KeyError`)를 줄이고 싶을 때

## 핵심 아이디어
- `defaultdict(int)`는 없는 키의 기본값을 `0`으로 시작합니다.
- 그래서 `acc[key] += 1` 같은 누적 코드를 바로 작성할 수 있습니다.
- 일반 dict에서는 먼저 키 존재 여부를 확인해야 하지만, `defaultdict`는 이 분기를 줄여 코드 안전성을 높입니다.

## 기본 문법 또는 패턴
```python
from collections import defaultdict
acc = defaultdict(int)
acc["apple"] += 3
```

## 단계별 예시
1. 일반 dict라면 `if key not in acc: acc[key] = 0`가 필요합니다.
2. `defaultdict(int)`를 쓰면 없는 키는 자동으로 `0`이 됩니다.
3. 따라서 루프 안에서 `acc[key] += value`만 유지하면 됩니다.
4. 누적 분기가 줄어들어 코드가 짧아지고 실수가 줄어듭니다.

## 흔한 실수
- `defaultdict`를 일반 dict처럼 다루다 타입/출력 형태를 혼동하는 실수
- 기본 팩토리(factory)를 잘못 선택해 의도와 다른 기본값이 들어가는 실수
- 순수 조회만 하려는 코드에서 불필요하게 키를 생성해 버리는 실수

## 안전한 패턴
- 숫자 누적은 `defaultdict(int)`를 우선 고려합니다.
- 리스트 그룹핑은 `defaultdict(list)`처럼 목적에 맞는 팩토리를 사용합니다.
- 외부 반환 직전에 필요하면 `dict(acc)`로 변환해 명시적으로 전달합니다.

## 시간복잡도
- 키 조회/갱신은 평균 `O(1)`입니다.
- 전체 누적은 입력 크기 `N` 기준 보통 `O(N)`입니다.

## 관련 문제
- [0001. Order Settlement](../practice/0001-order-settlement.md)
- [0002. Popular Products](../practice/0002-popular-products.md)

## 복습 체크리스트
- 수동 초기화 분기를 `defaultdict`로 안전하게 줄였는가?
- 기본 팩토리(`int`, `list` 등)를 문제 의도에 맞게 선택했는가?
- 누락 키 접근으로 인한 오류 가능성을 제거했는가?
