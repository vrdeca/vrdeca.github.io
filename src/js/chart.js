import { ICDC_STATS } from '../data/icdc-stats.js';

const BAR_MAX_PX = 260;

export function renderChart(container) {
  if (!container) return;

  const maxVal = Math.max(...ICDC_STATS.map((d) => Math.max(d.qualifiers, d.finalists)));

  const cols = ICDC_STATS.map((d) => {
    const qh = Math.round((d.qualifiers / maxVal) * BAR_MAX_PX);
    const fh = Math.round((d.finalists / maxVal) * BAR_MAX_PX);
    return `
      <div class="chart-col">
        <div class="chart-bars">
          <div class="bar qual" style="height:${qh}px;" title="${d.qualifiers} ICDC Qualifiers">
            <span class="bar-value">${d.qualifiers}</span>
          </div>
          <div class="bar fin" style="height:${fh}px;" title="${d.finalists} ICDC Finalists">
            <span class="bar-value">${d.finalists || ''}</span>
          </div>
        </div>
        <span class="chart-year">'${String(d.year).slice(2)}</span>
      </div>`;
  }).join('');

  container.innerHTML = `<div class="chart" id="icdc-chart">${cols}</div>`;

  const chartEl = container.querySelector('#icdc-chart');
  const totalQualifiers = ICDC_STATS.reduce((sum, d) => sum + d.qualifiers, 0);
  const totalFinalists = ICDC_STATS.reduce((sum, d) => sum + d.finalists, 0);
  const bestYear = ICDC_STATS.reduce((a, b) => (b.qualifiers > a.qualifiers ? b : a));

  const statNums = document.querySelectorAll('[data-stat]');
  statNums.forEach((el) => {
    const key = el.dataset.stat;
    if (key === 'total-qualifiers') el.textContent = `${totalQualifiers}+`;
    if (key === 'total-finalists') el.textContent = `${totalFinalists}+`;
    if (key === 'best-year') el.textContent = bestYear.year;
  });

  if (!('IntersectionObserver' in window)) {
    chartEl.classList.add('is-visible');
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          chartEl.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  io.observe(chartEl);
}
