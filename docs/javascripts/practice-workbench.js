(() => {
  const root = document.querySelector('.practice-workbench');
  if (!root) return;

  const locale = root.dataset.locale === 'ko' ? 'ko' : 'en';
  const selector = root.querySelector('#practice-problem-selector');
  const content = root.querySelector('#practice-content');
  const divider = root.querySelector('.workbench-divider');
  const pane = root.querySelector('.practice-pane');

  if (!selector || !content || !divider || !pane) return;

  const data = {
    en: {
      '0001': {
        title: '0001. Order Settlement',
        type: 'Hash / Implementation / Duplicate handling / Sorting',
        difficulty: 'Lv.1 Basic',
        status: 'Solved with review',
        rules: [
          'PAY increases quantity and REFUND decreases quantity.',
          'Process identical logs only once with a duplicate key.',
          'Print only products with final quantity > 0 in product-name order.'
        ],
        sampleInput: '6\n1 apple 3 PAY\n1 apple 3 PAY\n2 banana 2 PAY\n3 apple 1 REFUND\n4 banana 2 REFUND\n5 carrot 4 PAY',
        sampleOutput: 'apple 2\ncarrot 4',
        hint: 'Use a set for duplicates and defaultdict(int) for accumulation.',
        link: '../../practice/0001-order-settlement/'
      },
      '0002': {
        title: '0002. Popular Products',
        type: 'Hash / Implementation / Duplicate handling / Sorting / Tie-break',
        difficulty: 'Lv.1+ Basic',
        status: 'Solved with review',
        rules: [
          'BUY increases quantity and CANCEL decreases quantity.',
          'Process identical logs only once.',
          'Print only max-quantity products; if tied, sort by product name.',
          'If no valid product remains, print NONE.'
        ],
        sampleInput: '5\nU001 book 2 BUY\nU002 book 2 CANCEL\nU003 pen 1 CANCEL\nU004 bag 3 CANCEL\nU001 book 2 BUY',
        sampleOutput: 'NONE',
        hint: 'Filter valid positives first, then compute max and apply tie-break sorting.',
        link: '../../practice/0002-popular-products/'
      },
      '0003': {
        title: '0003. Range Sales Query',
        type: 'Prefix Sum / Range Query / Implementation',
        difficulty: 'Lv.2 Core',
        status: 'Solved with review',
        rules: [
          'Given N daily sales values and Q range queries.',
          'For each query [L, R], print the inclusive range sum.',
          'Use an efficient approach for large N and Q.'
        ],
        sampleInput: '5 3\n10 20 30 40 50\n1 3\n2 5\n4 4',
        sampleOutput: '60\n140\n40',
        hint: 'Build prefix sum once and answer each query in O(1).',
        link: '../../practice/0003-range-sales-query/'
      },
      '0004': {
        title: '0004. Target Sales Window',
        type: 'Two Pointers / Continuous Range / Implementation',
        difficulty: 'Lv.2 Core',
        status: 'Pending',
        rules: [
          'Find the shortest contiguous range whose sum is at least S.',
          'All sales values are positive.',
          'Print 0 if no valid range exists.'
        ],
        sampleInput: '6 7\n2 3 1 2 4 3',
        sampleOutput: '2',
        hint: 'Use two pointers: expand right, then shrink left once sum >= S.',
        link: '../../practice/0004-target-sales-window/'
      },
      '0005': {
        title: '0005. Next Growth Day',
        type: 'Stack / Monotonic Stack / Implementation',
        difficulty: 'Lv.2 Core',
        status: 'Pending',
        rules: [
          'For each day, find distance to next strictly higher visitor count.',
          'If no later higher day exists, output 0.',
          'Output one wait value per day.'
        ],
        sampleInput: '6\n5 3 8 4 6 10',
        sampleOutput: '2 1 3 1 1 0',
        hint: 'Store unresolved indexes in a monotonic stack.',
        link: '../../practice/0005-next-growth-day/'
      },
      '0006': {
        title: '0006. Minimum Shipping Capacity',
        type: 'Binary Search / Parametric Search / Greedy Check',
        difficulty: 'Lv.3 Intermediate',
        status: 'Pending',
        rules: [
          'Packages must stay in original order and cannot be split.',
          'Find minimum capacity to finish within D days.',
          'Capacity is searched over a value range.'
        ],
        sampleInput: '5 3\n1 2 3 4 5',
        sampleOutput: '6',
        hint: 'Binary search the capacity and simulate required days.',
        link: '../../practice/0006-minimum-shipping-capacity/'
      },
      '0007': {
        title: '0007. Store Map Shortest Path',
        type: 'BFS / Grid / Shortest Path',
        difficulty: 'Lv.3 Intermediate',
        status: 'Pending',
        rules: [
          'Move in 4 directions only and avoid walls.',
          'Find minimum moves from S to E.',
          'Print -1 if unreachable.'
        ],
        sampleInput: '3 4\nS000\n1110\n000E',
        sampleOutput: '5',
        hint: 'Use BFS with queue and visited marking.',
        link: '../../practice/0007-store-map-shortest-path/'
      }
    },
    ko: {
      '0001': {
        title: '0001. Order Settlement',
        type: '해시 / 구현 / 중복 제거 / 정렬',
        difficulty: 'Lv.1 Basic',
        status: '리뷰와 함께 해결',
        rules: [
          'PAY는 수량을 증가시키고 REFUND는 수량을 감소시킵니다.',
          '동일한 로그는 중복 key 기준으로 한 번만 처리합니다.',
          '최종 수량이 0보다 큰 상품만 상품명 순으로 출력합니다.'
        ],
        sampleInput: '6\n1 apple 3 PAY\n1 apple 3 PAY\n2 banana 2 PAY\n3 apple 1 REFUND\n4 banana 2 REFUND\n5 carrot 4 PAY',
        sampleOutput: 'apple 2\ncarrot 4',
        hint: '중복은 set으로 걸러내고 누적은 defaultdict(int)로 처리하세요.',
        link: '../../practice/0001-order-settlement/'
      },
      '0002': {
        title: '0002. Popular Products',
        type: '해시 / 구현 / 중복 제거 / 정렬 / 동률 처리',
        difficulty: 'Lv.1+ Basic',
        status: '리뷰와 함께 해결',
        rules: [
          'BUY는 수량을 증가시키고 CANCEL은 수량을 감소시킵니다.',
          '동일 로그는 한 번만 처리합니다.',
          '최대 수량 상품만 출력하고 동률이면 상품명 오름차순으로 출력합니다.',
          '유효 상품이 없으면 NONE을 출력합니다.'
        ],
        sampleInput: '5\nU001 book 2 BUY\nU002 book 2 CANCEL\nU003 pen 1 CANCEL\nU004 bag 3 CANCEL\nU001 book 2 BUY',
        sampleOutput: 'NONE',
        hint: '양수 필터링 후 최댓값을 구하고 동률 정렬을 적용하세요.',
        link: '../../practice/0002-popular-products/'
      },
      '0003': {
        title: '0003. Range Sales Query',
        type: '누적합 / 구간 질의 / 구현',
        difficulty: 'Lv.2 Core',
        status: '리뷰 완료',
        rules: [
          'N일 판매 데이터와 Q개의 구간 질의가 주어집니다.',
          '[L, R] 구간의 합을 질의마다 출력합니다.',
          'N과 Q가 커도 동작하는 효율적 방식이 필요합니다.'
        ],
        sampleInput: '5 3\n10 20 30 40 50\n1 3\n2 5\n4 4',
        sampleOutput: '60\n140\n40',
        hint: '누적합을 한 번 만들고 각 질의를 O(1)에 처리하세요.',
        link: '../../practice/0003-range-sales-query/'
      },
      '0004': {
        title: '0004. Target Sales Window',
        type: '투 포인터 / 연속 구간 / 구현',
        difficulty: 'Lv.2 Core',
        status: '대기 중',
        rules: [
          '합이 S 이상인 최소 연속 구간 길이를 찾습니다.',
          '모든 sales 값은 양수입니다.',
          '가능한 구간이 없으면 0을 출력합니다.'
        ],
        sampleInput: '6 7\n2 3 1 2 4 3',
        sampleOutput: '2',
        hint: 'sum < S면 오른쪽 확장, sum >= S면 왼쪽 축소를 시도하세요.',
        link: '../../practice/0004-target-sales-window/'
      },
      '0005': {
        title: '0005. Next Growth Day',
        type: '스택 / 단조 스택 / 구현',
        difficulty: 'Lv.2 Core',
        status: '대기 중',
        rules: [
          '각 날짜에서 다음으로 더 큰 방문자 수까지의 대기 일수를 구합니다.',
          '더 큰 값이 없으면 0을 출력합니다.',
          '엄격히 큰 값(>)만 인정합니다.'
        ],
        sampleInput: '6\n5 3 8 4 6 10',
        sampleOutput: '2 1 3 1 1 0',
        hint: '미해결 인덱스를 단조 스택으로 관리하세요.',
        link: '../../practice/0005-next-growth-day/'
      },
      '0006': {
        title: '0006. Minimum Shipping Capacity',
        type: '이분 탐색 / 매개변수 탐색 / 그리디 판별',
        difficulty: 'Lv.3 Intermediate',
        status: '대기 중',
        rules: [
          '패키지 순서를 유지한 채 D일 내 배송 가능한 최소 용량을 찾습니다.',
          '패키지는 분할할 수 없습니다.',
          '용량 값에 대해 가능 여부를 판별합니다.'
        ],
        sampleInput: '5 3\n1 2 3 4 5',
        sampleOutput: '6',
        hint: '용량 범위를 이분 탐색하고, 하루 수를 시뮬레이션하세요.',
        link: '../../practice/0006-minimum-shipping-capacity/'
      },
      '0007': {
        title: '0007. Store Map Shortest Path',
        type: 'BFS / 격자 / 최단 경로',
        difficulty: 'Lv.3 Intermediate',
        status: '대기 중',
        rules: [
          '상하좌우 이동만 가능하고 벽은 통과할 수 없습니다.',
          'S에서 E까지 최소 이동 횟수를 구합니다.',
          '도달 불가능하면 -1을 출력합니다.'
        ],
        sampleInput: '3 4\nS000\n1110\n000E',
        sampleOutput: '5',
        hint: '큐(queue)를 사용한 BFS로 최단 거리를 구하세요.',
        link: '../../practice/0007-store-map-shortest-path/'
      }
    }
  };

  const storageKey = 'practice-workbench-state-v1';

  function getProblemFromQuery() {
    const params = new URLSearchParams(window.location.search);
    const problem = params.get('problem');
    if (!problem) return null;
    return Object.prototype.hasOwnProperty.call(data[locale], problem) ? problem : null;
  }

  function updateProblemQuery(problemId) {
    const url = new URL(window.location.href);
    url.searchParams.set('problem', problemId);
    history.replaceState(null, '', url.toString());
  }

  function render(problemId) {
    const item = data[locale][problemId] || data[locale]['0003'];
    content.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>${locale === 'ko' ? '유형' : 'Type'}:</strong> ${item.type}</p>
      <p><strong>${locale === 'ko' ? '난이도' : 'Difficulty'}:</strong> ${item.difficulty}</p>
      <p><strong>${locale === 'ko' ? '상태' : 'Status'}:</strong> ${item.status}</p>
      <h4>${locale === 'ko' ? '핵심 규칙' : 'Core rules'}</h4>
      <ul>${item.rules.map((r) => `<li>${r}</li>`).join('')}</ul>
      <h4>${locale === 'ko' ? '샘플 입력' : 'Sample input'}</h4>
      <pre><code>${item.sampleInput}</code></pre>
      <h4>${locale === 'ko' ? '샘플 출력' : 'Sample output'}</h4>
      <pre><code>${item.sampleOutput}</code></pre>
      <p><strong>${locale === 'ko' ? '힌트' : 'Hint'}:</strong> ${item.hint}</p>
      <p><a href="${item.link}">${locale === 'ko' ? '연습 문제 페이지로 이동' : 'Open practice page'}</a></p>
    `;
  }

  function saveState() {
    const ratio = parseFloat(root.style.getPropertyValue('--split-ratio')) || 0.42;
    localStorage.setItem(storageKey, JSON.stringify({ problem: selector.value, ratio }));
  }

  function loadState(defaultProblem) {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return { problem: defaultProblem, ratio: 0.42 };
      const parsed = JSON.parse(raw);
      return {
        problem: parsed.problem || defaultProblem,
        ratio: typeof parsed.ratio === 'number' ? parsed.ratio : 0.42
      };
    } catch (_) {
      return { problem: defaultProblem, ratio: 0.42 };
    }
  }

  const defaultProblem = root.dataset.defaultProblem || '0003';
  const state = loadState(defaultProblem);
  const queryProblem = getProblemFromQuery();
  const firstAvailableProblem = selector.options.length ? selector.options[0].value : defaultProblem;
  const nextProblem = queryProblem || state.problem || defaultProblem || firstAvailableProblem;
  selector.value = Object.prototype.hasOwnProperty.call(data[locale], nextProblem) ? nextProblem : firstAvailableProblem;
  render(selector.value);
  root.style.setProperty('--split-ratio', String(state.ratio));
  saveState();
  updateProblemQuery(selector.value);

  selector.addEventListener('change', () => {
    render(selector.value);
    saveState();
    updateProblemQuery(selector.value);
  });

  let dragging = false;
  divider.addEventListener('pointerdown', (e) => {
    if (window.matchMedia('(max-width: 1024px)').matches) return;
    dragging = true;
    divider.setPointerCapture(e.pointerId);
    root.classList.add('is-dragging');
  });

  divider.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const rect = root.getBoundingClientRect();
    let ratio = (e.clientX - rect.left) / rect.width;
    ratio = Math.max(0.25, Math.min(0.7, ratio));
    root.style.setProperty('--split-ratio', ratio.toFixed(3));
  });

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    root.classList.remove('is-dragging');
    saveState();
  }
  divider.addEventListener('pointerup', endDrag);
  divider.addEventListener('pointercancel', endDrag);
})();
