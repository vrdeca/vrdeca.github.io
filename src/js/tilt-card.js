// Hover-expand + cursor-follow 3D tilt for card elements. Scoped via a
// class (.tilt-card) rather than baked into .event-card generally, since
// only specific card groups asked for this — the shared .event-card hover
// elsewhere is left alone.
const MAX_TILT_DEG = 9;
const HOVER_SCALE = 1.05;

export function initTiltCards(cards) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  cards.forEach((card) => {
    const apply = (e) => {
      // Without this, only the card that happens to win default stacking
      // order captures hover in any overlap zone — the scale+rotate combo
      // (perspective foreshortening pushes the tilted edge out further than
      // the scale alone) can extend just far enough into a neighboring
      // card's box to "steal" its pointer events, which reads as "only the
      // first card responds" even though every card's own listeners are
      // wired up correctly.
      card.style.zIndex = '5';
      card.classList.remove('is-resetting');
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * MAX_TILT_DEG * 2;
      const rotateX = (0.5 - py) * MAX_TILT_DEG * 2;
      card.style.transform = `perspective(900px) scale(${HOVER_SCALE}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    const reset = () => {
      card.classList.add('is-resetting');
      card.style.transform = '';
      card.style.zIndex = '';
    };

    card.addEventListener('mouseenter', apply);
    card.addEventListener('mousemove', apply);
    card.addEventListener('mouseleave', reset);
  });
}
