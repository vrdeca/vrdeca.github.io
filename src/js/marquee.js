import { MARQUEE_ENABLED, MARQUEE_MESSAGES } from '../data/site-config.js';

// A fixed animation duration looks fine with a full slate of messages, but
// with only one or two configured it left long stretches of empty track
// scrolling by before the message reappeared — read as "slow" with a lot of
// blank space. Forcing a minimum repeat count keeps the track full, and
// tying duration to that repeat count keeps the scroll speed constant no
// matter how many distinct messages are configured.
const MIN_REPEATS = 10;
const SECONDS_PER_ITEM = 8;

export function renderMarquee() {
  if (!MARQUEE_ENABLED || MARQUEE_MESSAGES.length === 0) return '';

  const repeatCount = Math.max(MIN_REPEATS, MARQUEE_MESSAGES.length * 3);
  const repeated = Array.from({ length: repeatCount }, (_, i) => MARQUEE_MESSAGES[i % MARQUEE_MESSAGES.length]);
  const items = repeated
    .map((msg) => `<span class="marquee-item"><span class="dot">&bull;</span>${msg}</span>`)
    .join('');
  const duration = (repeatCount * SECONDS_PER_ITEM).toFixed(1);

  // Duplicate the run so the -50% translateX loop has no visible seam.
  return `
  <div class="marquee" role="status" aria-label="Chapter announcements">
    <div class="marquee-track" style="animation-duration:${duration}s;">
      <div style="display:flex;">${items}</div>
      <div style="display:flex;" aria-hidden="true">${items}</div>
    </div>
  </div>`;
}
