import { MARQUEE_ENABLED, MARQUEE_MESSAGES } from '../data/site-config.js';

export function renderMarquee() {
  if (!MARQUEE_ENABLED || MARQUEE_MESSAGES.length === 0) return '';

  const items = MARQUEE_MESSAGES
    .map((msg) => `<span class="marquee-item"><span class="dot">&bull;</span>${msg}</span>`)
    .join('');

  // Duplicate the run so the -50% translateX loop has no visible seam.
  return `
  <div class="marquee" role="status" aria-label="Chapter announcements">
    <div class="marquee-track">
      <div style="display:flex;">${items}</div>
      <div style="display:flex;" aria-hidden="true">${items}</div>
    </div>
  </div>`;
}
