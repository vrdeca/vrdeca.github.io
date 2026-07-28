import { EVENTS, TIER_LABELS } from '../data/events.js';

const FALLBACK_IMAGE = {
  district: 'linear-gradient(135deg,#2a0a0e,#5c1019)',
  state: 'linear-gradient(135deg,#1a0507,#8c1522)',
  icdc: 'linear-gradient(135deg,#0a0a0b,#cb1a26)',
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

  container.innerHTML = featured.map((ev) => `
    <a class="event-card" href="${import.meta.env.BASE_URL}calendar/#${ev.id}" data-reveal>
      <div style="position:absolute;inset:0;background:${FALLBACK_IMAGE[ev.tier] || FALLBACK_IMAGE.district};"></div>
      <div class="event-card-scrim"></div>
      <div class="event-card-body">
        <span class="event-card-tag">${TIER_LABELS[ev.tier] || ev.tier}</span>
        <h3 class="event-card-title">${ev.shortTitle}</h3>
        <div class="event-card-meta">
          <span>${formatDateRange(ev)}</span>
          <span>${ev.location}</span>
        </div>
      </div>
    </a>`).join('');
}
