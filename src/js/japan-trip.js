import { JAPAN_TRIP_ENABLED, JAPAN_TRIP, EXTERNAL_LINKS } from '../data/site-config.js';

export function renderJapanTrip(container) {
  if (!container || !JAPAN_TRIP_ENABLED) return;

  container.innerHTML = `
    <section class="japan-trip-section" id="japan-trip">
      <div class="container japan-trip-inner">
        <div class="japan-trip-copy" data-reveal>
          <p class="eyebrow" style="color:var(--color-red-400);">Special trip</p>
          <h2>${JAPAN_TRIP.title}</h2>
          <p class="japan-trip-blurb">${JAPAN_TRIP.blurb}</p>
          <div class="japan-trip-meta">
            <span>${JAPAN_TRIP.deadline}</span>
          </div>
          <div class="japan-trip-actions">
            <a href="${EXTERNAL_LINKS.decaJapan}" class="btn btn-primary" target="_blank" rel="noopener">
              Learn More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a href="#contact" class="btn btn-ghost" data-contact-open>Ask About Fundraising</a>
          </div>
        </div>
      </div>
    </section>`;
}
