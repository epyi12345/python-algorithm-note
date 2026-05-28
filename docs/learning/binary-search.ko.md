# 이분 탐색(binary search)

## 이 개념은 무엇인가
이분 탐색(binary search)은 탐색 범위를 절반씩 줄여가며 원하는 값을 찾는 알고리즘입니다. 핵심 전제는 **정렬된 배열** 또는 단조성이 있는 탐색 공간입니다.

## 언제 사용하는가
- 정렬된 배열에서 특정 값을 빠르게 찾을 때
- 조건을 기준으로 경계(lower bound / upper bound)를 찾을 때
- 선형 탐색 `O(N)`이 너무 느리고 탐색 범위를 절반씩 줄일 수 있을 때

## 핵심 아이디어
- `left`, `right`, `mid`(중간값)를 유지합니다.
- 매 단계에서 조건 비교 후 왼쪽 경계 또는 오른쪽 경계를 갱신합니다.
- 한 번 비교할 때마다 탐색 범위가 절반 수준으로 줄어듭니다.
- 정확히 같은 값을 찾는 탐색과 lower bound 탐색은 업데이트 규칙이 다릅니다.

## 기본 문법 또는 패턴
```python
# exact target search
while left <= right:
    mid = (left + right) // 2
    if arr[mid] == target:
        return mid
    if arr[mid] < target:
        left = mid + 1
    else:
        right = mid - 1

# lower bound search (first idx with arr[idx] >= target)
while left < right:
    mid = (left + right) // 2
    if arr[mid] >= target:
        right = mid
    else:
        left = mid + 1
```

## 단계별 예시
1. 정렬된 배열에서 `target`을 찾는다고 가정합니다.
2. `left=0`, `right=n-1`로 시작합니다.
3. `mid`를 계산해 `arr[mid]`와 `target`을 비교합니다.
4. 더 큰 구간/작은 구간 중 정답이 있을 수 있는 쪽만 남깁니다.
5. exact 탐색은 `while left <= right`, lower bound는 `while left < right` 패턴이 자주 쓰입니다.

## 흔한 실수
- `left`/`right`를 갱신하지 않아 무한 루프가 생기는 실수
- `while left <= right`와 `while left < right`를 섞어 경계가 깨지는 실수
- lower bound 구현에서 `right = mid - 1`을 써서 첫 위치를 놓치는 실수
- 정렬되지 않은 데이터에 이분 탐색을 적용하는 실수
- off-by-one으로 마지막 원소를 검사하지 못하는 실수

## 안전한 패턴
- 먼저 "정확히 찾기인지", "경계 찾기(lower bound/upper bound)인지"를 명확히 결정합니다.
- 루프 종료 조건과 경계 갱신 규칙을 세트로 외워서 사용합니다.
- 작은 테스트 케이스(길이 1, 모두 같은 값, target 없음)로 경계 동작을 검증합니다.
- 정렬 전제가 필요한 경우 탐색 전에 정렬 여부를 확인합니다.

## 시간복잡도
- 탐색 횟수는 `O(log N)`입니다.
- 전체 비용은 비교/검사 함수 비용을 포함해 결정됩니다.

## 관련 문제
- [0006. Minimum Shipping Capacity](../practice/0006-minimum-shipping-capacity.md)

## 복습 체크리스트
- 탐색 범위가 매 반복마다 확실히 줄어드는가?
- exact 탐색과 lower bound 탐색 규칙을 구분했는가?
- `while left <= right` vs `while left < right`를 의도에 맞게 선택했는가?
- 이분 탐색을 쓰기 어려운(정렬/단조성 없는) 문제는 아닌가?
