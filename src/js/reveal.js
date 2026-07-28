export function initReveal(root = document) {
  const targets = root.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const groups = new Map();
  targets.forEach((el) => {
    const group = el.closest('[data-reveal-group]');
    if (group) {
      const list = groups.get(group) || [];
      list.push(el);
      groups.set(group, list);
    }
  });
  groups.forEach((els) => {
    els.forEach((el, i) => el.style.setProperty('--reveal-index', i));
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );

  targets.forEach((el) => io.observe(el));
}
