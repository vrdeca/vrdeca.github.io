// Loading-screen intro: a big spinning coin with a quick countdown, then it
// flies (FLIP-style transform) into its real position in the hero corner.
// Shows once per browser session — repeat homepage visits skip straight in.
const SESSION_KEY = 'vrhs-deca-coin-loader-seen';
const COUNT_START = 3;
const COUNT_INTERVAL_MS = 350;
const FLY_DURATION_MS = 700;
// Derived, not hardcoded — a fixed failsafe would fire mid-sequence (killing
// the overlay early) if the timing constants above are ever tweaked without
// updating it too. Generous margin since this only exists as a last resort.
const FAILSAFE_MS = COUNT_START * COUNT_INTERVAL_MS + FLY_DURATION_MS + 2500;

export function initCoinLoader() {
  const overlay = document.getElementById('coin-loader');
  const coinWrap = document.getElementById('coin-loader-coin');
  const countEl = document.getElementById('coin-loader-count');
  const realCoin = document.querySelector('.hero-coin');

  if (!overlay || !coinWrap || !countEl || !realCoin) {
    overlay?.remove();
    return;
  }

  const skip = () => {
    overlay.remove();
    realCoin.style.opacity = '1';
  };

  if (sessionStorage.getItem(SESSION_KEY)) {
    skip();
    return;
  }
  sessionStorage.setItem(SESSION_KEY, '1');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    skip();
    return;
  }

  realCoin.style.opacity = '0';
  const failsafe = setTimeout(skip, FAILSAFE_MS);

  let count = COUNT_START;
  countEl.textContent = String(count);
  const tick = setInterval(() => {
    count -= 1;
    if (count <= 0) {
      clearInterval(tick);
      fly();
    } else {
      countEl.textContent = String(count);
    }
  }, COUNT_INTERVAL_MS);

  function fly() {
    countEl.style.opacity = '0';

    // Stop the spin keyframe first — measuring mid-oscillation (squashed to
    // a sliver) would produce a garbage starting rect for the FLIP math.
    coinWrap.style.animation = 'none';
    void coinWrap.offsetWidth; // force reflow so the animation actually stops before we measure

    const startRect = coinWrap.getBoundingClientRect();
    const endRect = realCoin.getBoundingClientRect();
    const scale = endRect.width / startRect.width;
    const dx = (endRect.left + endRect.width / 2) - (startRect.left + startRect.width / 2);
    const dy = (endRect.top + endRect.height / 2) - (startRect.top + startRect.height / 2);

    coinWrap.style.transition = `transform ${FLY_DURATION_MS}ms cubic-bezier(0.65,0,0.35,1)`;
    overlay.style.transition = 'opacity 500ms ease 200ms';
    void coinWrap.offsetWidth;
    coinWrap.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';

    coinWrap.addEventListener('transitionend', () => {
      clearTimeout(failsafe);
      overlay.remove();
      realCoin.style.transition = 'opacity 250ms ease';
      realCoin.style.opacity = '1';
    }, { once: true });
  }
}
