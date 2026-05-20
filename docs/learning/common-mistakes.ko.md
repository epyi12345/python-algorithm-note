# 자주 하는 실수

## 1) continue가 필요한데 pass를 사용함

- Symptom: 중복 입력이 결과에 반영됨
- Why it is wrong: `pass`는 아래 코드를 계속 실행함
- Safer pattern: 중복 확인 직후 `continue` 사용

## 2) 최종 출력에 debug print를 남김

- Symptom: 딕셔너리 등 불필요한 출력이 섞임
- Why it is wrong: 채점은 정확한 출력 형식만 허용함
- Safer pattern: 제출 전 debug print 전부 제거

## 3) 최대값만 필요한데 양수 결과를 전부 출력함

- Symptom: 출력 라인이 과하게 많음
- Why it is wrong: 문제 조건은 최대값 항목만 요구할 수 있음
- Safer pattern: 유효값 필터링 → 최대값 계산 → 최대값만 출력

## 4) 동점 정렬 규칙을 놓침

- Symptom: 출력 순서가 불안정하거나 오답 처리됨
- Why it is wrong: 동점 시 정렬 기준이 명시되는 경우가 많음
- Safer pattern: 요구된 키 기준으로 정렬 후 출력

## 5) 빈 컬렉션 확인 전에 max()를 호출함

- Symptom: 런타임 에러 발생
- Why it is wrong: `max()`는 원소가 최소 1개 필요함
- Safer pattern: `if not data:` 확인 후 `max(data)` 호출

## 6) a, b, c, d 같은 불명확한 변수명 사용

- Symptom: 코드 의도가 불분명하고 실수 가능성이 커짐
- Why it is wrong: 변수 역할이 드러나지 않아 유지보수가 어려움
- Safer pattern: `customer_id`, `product`, `qty`처럼 의미 있는 이름 사용

## 7) max()만 필요해도 전체 정렬을 수행함

- Symptom: 불필요한 O(N log N) 비용 발생
- Why it is wrong: 전체 정렬은 과한 연산일 수 있음
- Safer pattern: 먼저 `max()`로 값 계산, 필요한 후보만 정렬
