import { EVENTS, TIER_LABELS } from '../data/events.js';
import { initTiltCards } from './tilt-card.js';

const CARD_IMAGE = {
  district: '/assets/images/card-district.jpg?v=3',
  state: '/assets/images/card-state.jpg',
  icdc: '/assets/images/card-icdc.jpg',
};
const FALLBACK_GRADIENT = {
  district: 'linear-gradient(135deg,#2a0a0e,#5c1019)',
  state: 'linear-gradient(135deg,#1a0507,#8c1522)',
  icdc: 'linear-gradient(135deg,#0a0a0b,#cb1a26)',
};
// card-icdc.jpg is a tall 9:16 graphic against the card's 4:5 box, so the
// default center crop clips the "DECA" wordmark off the top — bias the
// visible window upward so it stays in frame.
const CARD_IMAGE_POSITION = {
  icdc: 'center 15%',
};

function formatDateRange(ev) {
  const start = new Date(`${ev.date}T00:00:00`);
  const opts = { month: 'short', day: 'numeric' };
  if (ev.endDate && ev.endDate !== ev.date) {
    const end = new Date(`${ev.endDate}T00:00:00`);
    return `${start.toLocaleDateString('en-US', opts)} – ${end.toLocaleDateString('en-US', { ...opts, year: 'numeric' })}`;
  }
  return start.toLocaleDateString('en-US', { ...opts, year: 'numeric' });
}

export function renderCalendarPreview(container) {
  if (!container) return;
  const featured = EVENTS.filter((e) => e.featured);

  container.innerHTML = featured.map((ev) => {
    const image = CARD_IMAGE[ev.tier];
    const position = CARD_IMAGE_POSITION[ev.tier];
    const visual = image
      ? `<img class="event-card-photo" src="${image}" alt="" loading="lazy"${position ? ` style="object-position:${position};"` : ''} />`
      : `<div style="position:absolute;inset:0;background:${FALLBACK_GRADIENT[ev.tier] || FALLBACK_GRADIENT.district};"></div>`;

    return `
    <a class="event-card tilt-card" href="${import.meta.env.BASE_URL}calendar/#${ev.id}" data-reveal>
      ${visual}
      <div class="event-card-scrim"></div>
      <div class="event-card-body">
        <span class="event-card-tag">${TIER_LABELS[ev.tier] || ev.tier}</span>
        <h3 class="event-card-title">${ev.shortTitle}</h3>
        <div class="event-card-meta">
          <span>${formatDateRange(ev)}</span>
          <span>${ev.location}</span>
        </div>
      </div>
    </a>`;
  }).join('');

  initTiltCards(container.querySelectorAll('.tilt-card'));
}
