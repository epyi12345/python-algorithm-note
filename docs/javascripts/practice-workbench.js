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
        status: 'Pending',
        rules: [
          'Given N daily sales values and Q range queries.',
          'For each query [L, R], print the inclusive range sum.',
          'Use an efficient approach for large N and Q.'
        ],
        sampleInput: '5 3\n10 20 30 40 50\n1 3\n2 5\n4 4',
        sampleOutput: '60\n140\n40',
        hint: 'Build prefix sum once and answer each query in O(1).',
        link: '../../practice/0003-range-sales-query/'
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
        status: '대기 중',
        rules: [
          'N일 판매 데이터와 Q개의 구간 질의가 주어집니다.',
          '[L, R] 구간의 합을 질의마다 출력합니다.',
          'N과 Q가 커도 동작하는 효율적 방식이 필요합니다.'
        ],
        sampleInput: '5 3\n10 20 30 40 50\n1 3\n2 5\n4 4',
        sampleOutput: '60\n140\n40',
        hint: '누적합을 한 번 만들고 각 질의를 O(1)에 처리하세요.',
        link: '../../practice/0003-range-sales-query/'
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
