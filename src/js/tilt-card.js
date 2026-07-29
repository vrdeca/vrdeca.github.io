// Hover-expand + cursor-follow 3D tilt for card elements. Scoped via a
// class (.tilt-card) rather than baked into .event-card generally, since
// only specific card groups asked for this — the shared .event-card hover
// elsewhere is left alone.
//
// Deliberately NOT using per-card mouseenter/mousemove/mouseleave listeners
// (the first version of this did, and only the first card in each group
// ever responded on a real device — the per-element browser hit-testing
// for overlapping/3D-transformed siblings wasn't resolving to the card
// actually under the cursor, and a z-index fix alone didn't resolve it).
// Instead: one mousemove listener per group, and on every move we do our
// own geometric containment check against each card's current
// getBoundingClientRect() to decide which card (if any) the cursor is
// over. That sidesteps the browser's hit-testing for this decision
// entirely, so it can't be wrong the same way.
const MAX_TILT_DEG = 9;
const HOVER_SCALE = 1.05;

export function initTiltCards(cards) {
  const cardList = Array.from(cards);
  if (!cardList.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let activeCard = null;

  function applyTilt(card, rect, clientX, clientY) {
    card.classList.remove('is-resetting');
    // Inline style beats any stylesheet rule regardless of specificity/order —
    // needed because these cards also carry [data-reveal], whose own
    // transition (for the scroll-in fade/slide) ties .tilt-card's specificity
    // and wins on source order, silently smoothing every tilt update.
    card.style.transition = 'none';
    const px = (clientX - rect.left) / rect.width;
    const py = (clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * MAX_TILT_DEG * 2;
    const rotateX = (0.5 - py) * MAX_TILT_DEG * 2;
    card.style.zIndex = '5';
    card.style.transform = `perspective(900px) scale(${HOVER_SCALE}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function resetCard(card) {
    card.classList.add('is-resetting');
    // Clear the inline override so the (higher-specificity) .is-resetting
    // stylesheet rule can animate the snap-back.
    card.style.transition = '';
    card.style.transform = '';
    card.style.zIndex = '';
  }

  function handleMove(e) {
    let hit = null;
    for (const card of cardList) {
      const rect = card.getBoundingClientRect();
      if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
        hit = { card, rect };
        break;
      }
    }

    if (hit) {
      if (activeCard && activeCard !== hit.card) resetCard(activeCard);
      activeCard = hit.card;
      applyTilt(hit.card, hit.rect, e.clientX, e.clientY);
    } else if (activeCard) {
      resetCard(activeCard);
      activeCard = null;
    }
  }

  function handleLeaveDocument() {
    if (activeCard) {
      resetCard(activeCard);
      activeCard = null;
    }
  }

  document.addEventListener('mousemove', handleMove, { passive: true });
  document.documentElement.addEventListener('mouseleave', handleLeaveDocument, { passive: true });
}
