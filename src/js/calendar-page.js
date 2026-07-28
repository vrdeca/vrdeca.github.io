import { EVENTS, TIER_LABELS } from '../data/events.js';
import { ICONS } from './icons.js';

const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function sortedEvents() {
  return [...EVENTS].sort((a, b) => new Date(a.date) - new Date(b.date));
}

function renderList(container) {
  const items = sortedEvents().map((ev) => {
    const d = new Date(`${ev.date}T00:00:00`);
    return `
    <div class="event-list-row" id="${ev.id}" data-reveal>
      <div class="date-badge">
        <span class="month">${d.toLocaleDateString('en-US', { month: 'short' })}</span>
        <span class="day">${d.getDate()}</span>
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
  container.innerHTML = `<div class="event-list">${items}</div>`;
}

function eventsByDateKey() {
  const map = new Map();
  EVENTS.forEach((ev) => {
    const key = ev.date;
    const list = map.get(key) || [];
    list.push(ev);
    map.set(key, list);
  });
  return map;
}

function renderGrid(container, cursor) {
  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const startOffset = firstOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const byDate = eventsByDateKey();

  const cells = [];
  for (let i = 0; i < startOffset; i++) {
    const dayNum = daysInPrevMonth - startOffset + i + 1;
    cells.push({ dayNum, outside: true });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ dayNum: d, outside: false, key: `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}` });
  }
  while (cells.length % 7 !== 0) {
    cells.push({ dayNum: cells.length - (startOffset + daysInMonth) + 1, outside: true });
  }

  const dow = DOW.map((d) => `<div class="cal-grid-dow">${d}</div>`).join('');
  const cellsHtml = cells.map((c) => {
    const evs = c.key ? byDate.get(c.key) || [] : [];
    const pills = evs.map((ev) => `<div class="cal-event-pill" title="${ev.title}">${ev.shortTitle}</div>`).join('');
    return `<div class="cal-cell${c.outside ? ' is-outside' : ''}"><span class="cell-num">${c.dayNum}</span>${pills}</div>`;
  }).join('');

  container.innerHTML = `
    <div class="cal-grid-head">
      <button class="cal-nav-btn" id="cal-prev" aria-label="Previous month">${ICONS.chevronLeft}</button>
      <h3>${MONTH_NAMES[month]} ${year}</h3>
      <button class="cal-nav-btn" id="cal-next" aria-label="Next month">${ICONS.chevronRight}</button>
    </div>
    <div class="cal-grid">${dow}${cellsHtml}</div>`;

  container.querySelector('#cal-prev').addEventListener('click', () => {
    cursor.setMonth(cursor.getMonth() - 1);
    renderGrid(container, cursor);
  });
  container.querySelector('#cal-next').addEventListener('click', () => {
    cursor.setMonth(cursor.getMonth() + 1);
    renderGrid(container, cursor);
  });
}

export function initCalendarPage() {
  const listContainer = document.getElementById('event-list-view');
  const gridContainer = document.getElementById('cal-grid-view');
  const toggleBtns = document.querySelectorAll('.view-toggle button');
  if (!listContainer || !gridContainer) return;

  renderList(listContainer);
  const cursor = EVENTS.length ? new Date(`${sortedEvents()[0].date}T00:00:00`) : new Date();
  renderGrid(gridContainer, cursor);

  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const view = btn.dataset.view;
      listContainer.style.display = view === 'list' ? 'block' : 'none';
      gridContainer.style.display = view === 'grid' ? 'block' : 'none';
    });
  });

  return import('./reveal.js').then(({ initReveal }) => initReveal(listContainer));
}
