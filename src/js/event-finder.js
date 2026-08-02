// Interactive "find your event" quiz — recreates DECA's official event-selection
// flowchart (deca.org) as a step-through wizard instead of a static image, so it
// reads as something a student actually clicks through rather than studies.
const COMPETE_URL = 'https://www.deca.org/compete#competitive-events';
const MAX_STEPS = 3; // deepest path is 3 questions; shorter paths just fill in early

const TREE = {
  start: {
    question: 'What kind of competitive event sounds like you?',
    options: [
      { label: 'Solving a challenge by thinking on your feet', next: 'soloOrPartner' },
      { label: 'Having a prepared plan and a chance to rehearse', next: 'preparedFocus' },
      { label: 'Engaging in computer-based simulations', next: 'simulationFocus' },
    ],
  },
  soloOrPartner: {
    question: 'Do you want to work individually, or with a partner?',
    options: [
      { label: 'Individually', next: 'firstYearCheck' },
      { label: 'With a partner', next: 'resultTeamDecision' },
    ],
  },
  firstYearCheck: {
    question: 'Are you a first-year DECA member?',
    options: [
      { label: 'Yes', next: 'resultIndividualPfl' },
      { label: 'No', next: 'resultPba' },
    ],
  },
  preparedFocus: {
    question: 'Which of these sounds most like you?',
    options: [
      { label: 'Event planning and management', next: 'resultProjectMgmt' },
      { label: 'Business research and strategy', next: 'resultBizOpsResearch' },
      { label: 'Innovation or owning a business', next: 'resultEntrepreneurship' },
      { label: 'Marketing, selling, or consulting', next: 'resultMarketing' },
    ],
  },
  simulationFocus: {
    question: 'Which of these sounds most like you?',
    options: [
      { label: 'Managing a portfolio of stocks', next: 'resultStockMarket' },
      { label: 'Testing your skills in a simulated business', next: 'resultVirtualBiz' },
    ],
  },
};

const RESULTS = {
  resultIndividualPfl: 'Individual Series Events or Personal Financial Literacy',
  resultPba: 'Principles of Business Administration Events',
  resultTeamDecision: 'Team Decision Making Events',
  resultProjectMgmt: 'Project Management Events',
  resultBizOpsResearch: 'Business Operations Research Events',
  resultEntrepreneurship: 'Entrepreneurship Events',
  resultMarketing: 'Integrated Marketing Campaign Events or Professional Selling and Consulting Events',
  resultStockMarket: 'Stock Market Game',
  resultVirtualBiz: 'Virtual Business Challenges',
};

export function initEventFinder(container) {
  if (!container) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let path = ['start']; // stack of node ids; last entry is the current node

  container.innerHTML = `
    <div class="event-finder">
      <button type="button" class="event-finder-back" aria-label="Back to previous question">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 6l-6 6 6 6"/></svg>
        Back
      </button>
      <div class="event-finder-progress" aria-hidden="true">
        ${Array.from({ length: MAX_STEPS }).map(() => '<span class="event-finder-dot"></span>').join('')}
      </div>
      <div class="event-finder-stage"></div>
    </div>`;

  const stage = container.querySelector('.event-finder-stage');
  const backBtn = container.querySelector('.event-finder-back');
  const dots = Array.from(container.querySelectorAll('.event-finder-dot'));

  backBtn.addEventListener('click', () => {
    if (path.length <= 1) return;
    path.pop();
    render({ direction: 'back' });
  });

  function currentNodeId() {
    return path[path.length - 1];
  }

  function isResult(nodeId) {
    return Object.prototype.hasOwnProperty.call(RESULTS, nodeId);
  }

  function updateProgress() {
    // Count question steps taken so far (path includes the current node).
    const answered = isResult(currentNodeId()) ? path.length - 1 : path.length - 1;
    dots.forEach((dot, i) => dot.classList.toggle('is-filled', i < Math.min(answered, MAX_STEPS)));
    if (isResult(currentNodeId())) dots.forEach((dot) => dot.classList.add('is-filled'));
  }

  function buildStageContent() {
    const nodeId = currentNodeId();
    if (isResult(nodeId)) {
      return `
        <div class="event-finder-result">
          <span class="event-finder-eyebrow">Your path</span>
          <h3 class="event-finder-result-title">Check out DECA's ${RESULTS[nodeId]}</h3>
          <p class="event-finder-result-desc">That's where your instincts line up best — but every event teaches skills that carry over. Talk to an officer about prepping for it.</p>
          <div class="event-finder-result-actions">
            <a href="${COMPETE_URL}" class="btn btn-primary" target="_blank" rel="noopener">
              See Event Details
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <button type="button" class="btn btn-ghost event-finder-restart">Start Over</button>
          </div>
        </div>`;
    }

    const node = TREE[nodeId];
    return `
      <div class="event-finder-question">
        <span class="event-finder-eyebrow">Question ${path.length}</span>
        <h3 class="event-finder-question-title">${node.question}</h3>
      </div>
      <div class="event-finder-options">
        ${node.options.map((opt, i) => `
          <button type="button" class="event-finder-option" data-next="${opt.next}" style="--i:${i}">
            <span>${opt.label}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        `).join('')}
      </div>`;
  }

  function wireStageEvents() {
    stage.querySelectorAll('.event-finder-option').forEach((btn) => {
      btn.addEventListener('click', () => {
        path.push(btn.dataset.next);
        render({ direction: 'forward' });
      });
    });
    const restart = stage.querySelector('.event-finder-restart');
    if (restart) restart.addEventListener('click', () => {
      path = ['start'];
      render({ direction: 'back' });
    });
  }

  function render({ direction }) {
    backBtn.classList.toggle('is-visible', path.length > 1);
    updateProgress();

    if (reduceMotion) {
      stage.innerHTML = buildStageContent();
      wireStageEvents();
      return;
    }

    stage.dataset.dir = direction;
    stage.classList.add('is-leaving');
    window.setTimeout(() => {
      stage.innerHTML = buildStageContent();
      wireStageEvents();
      stage.classList.remove('is-leaving');
      stage.classList.add('is-entering');
      // Force a reflow so the entering transform/opacity actually transitions in.
      void stage.offsetWidth;
      stage.classList.remove('is-entering');
    }, 220);
  }

  render({ direction: 'forward' });
}
