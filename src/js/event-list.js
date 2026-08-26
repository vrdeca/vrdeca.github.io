import { EVENTS, TIER_LABELS } from '../data/events.js';
import { ICONS } from './icons.js';

export function sortedEvents() {
  return [...EVENTS].sort((a, b) => new Date(a.date) - new Date(b.date));
}

// Shared list-row markup for EVENTS entries — used by the full calendar page
// and any other page (e.g. competitors) that surfaces the same event data,
// so there's a single source of truth and no page can drift out of sync.
export function renderEventListRows(events) {
  return events.map((ev) => {
    const d = new Date(`${ev.date}T00:00:00`);
    // Multi-day events (District, State, ICDC all run 2+ days) get a "7–8"
    // style range in the badge instead of a single day number — same month
    // for every multi-day event on the calendar today, so we don't need to
    // handle a range that crosses a month boundary here.
    const end = ev.endDate && ev.endDate !== ev.date ? new Date(`${ev.endDate}T00:00:00`) : null;
    const dayLabel = end ? `${d.getDate()}–${end.getDate()}` : `${d.getDate()}`;
    const featuredClass = ev.featured ? ' is-featured' : '';
    return `
    <div class="event-list-row${featuredClass}" id="${ev.id}" data-reveal>
      <div class="date-badge${end ? ' is-range' : ''}">
        <span class="month">${d.toLocaleDateString('en-US', { month: 'short' })}</span>
        <span class="day">${dayLabel}</span>
      </div>
      <div class="event-list-info">
        <div class="event-list-tags"><span class="event-list-tag">${TIER_LABELS[ev.tier] || ev.tier}</span></div>
        <h3>${ev.title}</h3>
        ${ev.blurb ? `<p style="color:var(--color-text-muted);margin-bottom:var(--space-3);">${ev.blurb}</p>` : ''}
        <div class="event-list-meta">
          ${ev.time ? `<span>${ICONS.clock}${ev.time}</span>` : ''}
          <span>${ICONS.pin}${ev.location || 'TBD'}</span>
        </div>
      </div>
    </div>`;
  }).join('');
}
