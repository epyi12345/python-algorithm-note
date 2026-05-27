# defaultdict

## 이 개념은 무엇인가
`defaultdict`는 없는 키(key)에 접근해도 기본값을 자동으로 생성해 주는 `dict` 확장 자료구조입니다.

## 언제 사용하는가
- 숫자를 반복 누적할 때
- 키 초기화 분기(`if key not in ...`)가 많을 때
- 그룹핑 결과를 리스트/집합으로 쌓아야 할 때

## 핵심 아이디어
`defaultdict(int)`를 쓰면 없는 키의 시작값이 자동으로 `0`이 됩니다.
그래서 누적 코드에서 분기문을 줄이고 실수를 줄일 수 있습니다.

## 기본 문법 또는 패턴
```python
from collections import defaultdict
acc = defaultdict(int)
acc["apple"] += 3
```

## 단계별 예시
1. 일반 `dict`에서는 키가 없으면 `KeyError`가 날 수 있습니다.
2. `defaultdict(int)`는 없는 키를 만나면 `0`으로 시작합니다.
3. 그래서 `acc[key] += value` 패턴을 바로 사용할 수 있습니다.
4. 문제에서 항목별 합계를 자주 계산할 때 코드가 짧고 안전해집니다.

## 흔한 실수
- `defaultdict`를 쓴다고 해놓고 일반 `dict`처럼 초기화 분기를 남겨두는 실수
- 기본 팩토리(factory)를 잘못 선택하는 실수(예: 숫자 누적인데 `list` 사용)
- 출력 직전에 일반 `dict` 변환이 필요한 상황을 놓치는 실수

## 안전한 패턴
- 숫자 누적: `defaultdict(int)`
- 목록 누적: `defaultdict(list)`
- 중복 없는 묶음: `defaultdict(set)`
- 팀 규칙상 일반 `dict` 출력이 필요하면 마지막에 `dict(acc)`로 변환

## 시간복잡도
키 접근/갱신은 해시 기반 평균 O(1)입니다.
N건 처리 시 보통 O(N)입니다.

## 관련 문제
- [0001. Order Settlement](../practice/0001-order-settlement.md)
- [0002. Popular Products](../practice/0002-popular-products.md)

## 복습 체크리스트
- 누적 패턴에 맞는 기본 팩토리를 선택했는가?
- 불필요한 키 초기화 분기를 제거했는가?
- `defaultdict`가 코드 가독성과 안정성을 실제로 높였는가?
