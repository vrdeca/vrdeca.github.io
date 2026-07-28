import { JAPAN_TRIP_ENABLED, JAPAN_TRIP, EXTERNAL_LINKS } from '../data/site-config.js';

const PARALLAX_FACTOR = 0.22; // fraction of scroll delta the photo trails by — subtle, not disorienting
const PARALLAX_MIN_WIDTH = 861; // matches the CSS breakpoint where the photo isn't really visible anyway

export function renderJapanTrip(container) {
  if (!container || !JAPAN_TRIP_ENABLED) return;

  container.innerHTML = `
    <section class="japan-trip-section" id="japan-trip">
      <div class="japan-trip-photo" id="japan-trip-photo" aria-hidden="true"></div>
      <div class="japan-trip-scrim" aria-hidden="true"></div>
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

  initParallax();
}

function initParallax() {
  const section = document.getElementById('japan-trip');
  const photo = document.getElementById('japan-trip-photo');
  if (!section || !photo) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let active = false;
  let ticking = false;
  let maxOffset = 0;

  // How far the (taller) photo layer can travel before its top/bottom edge
  // would come into view — half of its extra height versus the section.
  // Recomputed on resize since both heights are responsive.
  function measure() {
    maxOffset = Math.max(0, (photo.offsetHeight - section.offsetHeight) / 2);
  }

  function update() {
    ticking = false;
    if (!active || window.innerWidth < PARALLAX_MIN_WIDTH) return;
    const rect = section.getBoundingClientRect();
    // Distance of the section's center from the viewport's center — 0 when
    // perfectly centered, growing as it scrolls further away in either
    // direction. Translating the (taller) photo layer by a fraction of this
    // keeps it drifting opposite the scroll, the classic parallax feel.
    // (sectionCenter - viewportCenter), not the reverse, so the photo moves
    // up as the page scrolls down.
    const sectionCenter = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    const raw = (sectionCenter - viewportCenter) * PARALLAX_FACTOR;
    // Hard clamp — the IntersectionObserver's rootMargin means "active"
    // starts well before/after the section is actually in view, so the raw
    // delta can swing far past what the photo's overflow can cover. Never
    // let it exceed that, or the top/bottom edge shows.
    const delta = Math.max(-maxOffset, Math.min(maxOffset, raw));
    photo.style.transform = `translateY(${delta}px)`;
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  function onResize() {
    measure();
    onScroll();
  }

  measure();

  const io = new IntersectionObserver(
    (entries) => {
      active = entries[0]?.isIntersecting ?? false;
      if (active) onScroll();
    },
    { rootMargin: '20% 0px' }
  );
  io.observe(section);

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
}
