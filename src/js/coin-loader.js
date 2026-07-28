// Loading-screen intro: a big spinning coin with a quick countdown, then it
// flies (FLIP-style transform) into its real position in the hero corner.
// It's the SAME element throughout — re-parented into the hero slot at the
// end, not handed off to a separately-implemented "real" hero coin — so
// there's no possibility of the two looking different (which is exactly
// what happened when the hero used to run a live video+canvas chroma-key
// while the loader used a static transparent PNG).
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
  const heroSlot = document.getElementById('hero-coin-slot');

  if (!overlay || !coinWrap || !countEl || !heroSlot) {
    overlay?.remove();
    return;
  }

  // Move the coin into its permanent hero position (no flight animation)
  // and tear down the loader chrome. Used both for the normal end-of-flight
  // handoff and for every skip path (already seen, reduced motion, failsafe).
  const settle = () => {
    coinWrap.style.transform = '';
    coinWrap.style.transition = '';
    heroSlot.appendChild(coinWrap);
    overlay.remove();
  };

  if (
    sessionStorage.getItem(SESSION_KEY) ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    settle();
    return;
  }
  sessionStorage.setItem(SESSION_KEY, '1');

  const failsafe = setTimeout(settle, FAILSAFE_MS);

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

    // The spin keyframes live on the two .coin-face children now, not this
    // wrapper, so its own layout box — and therefore this rect — stays
    // stable regardless of rotation phase. No need to freeze anything first.
    const startRect = coinWrap.getBoundingClientRect();
    const endRect = heroSlot.getBoundingClientRect();
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
      settle();
    }, { once: true });
  }
}
