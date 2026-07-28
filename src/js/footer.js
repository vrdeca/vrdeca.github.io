import { FOOTER_COLUMNS, SOCIAL_LINKS, SITE, ASSET_VERSION } from '../data/site-config.js';
import { NONDISCRIMINATION_STATEMENT } from '../data/legal.js';
import { ICONS } from './icons.js';

export function renderFooter() {
  const columns = FOOTER_COLUMNS.map((col) => `
    <div class="footer-col">
      <h4>${col.title}</h4>
      <ul>
        ${col.links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
      </ul>
    </div>`).join('');

  const social = SOCIAL_LINKS.map((s) => `
    <a href="${s.href}" aria-label="${s.label}" target="_blank" rel="noopener">${ICONS[s.icon] || ''}</a>`).join('');

  const statement = NONDISCRIMINATION_STATEMENT.map((entry) => `
    <div>
      <strong>${entry.lang}</strong>
      ${entry.body.map((p) => `<p>${p}</p>`).join('')}
    </div>`).join('');

  return `
  <footer class="site-footer" id="contact-anchor">
    <div class="container">
      <div class="footer-top">
        <div>
          <div class="footer-brand">
            <img src="${import.meta.env.BASE_URL}assets/images/vrhs-deca-logo.jpg?v=${ASSET_VERSION}" alt="Vista Ridge Rangers crest" width="52" height="52" />
            <span class="footer-brand-text">Vista Ridge DECA</span>
          </div>
          <p style="max-width:34ch;font-size:var(--fs-small);">Cedar Park, TX — an official chartered chapter of DECA Inc., preparing emerging leaders and entrepreneurs in business, marketing, finance, hospitality, and management.</p>
          <div class="footer-social">${social}</div>
        </div>
        ${columns}
      </div>
      <div class="footer-legal">
        <div class="footer-bottom-row">
          <span>&copy; <span id="footer-year"></span> ${SITE.chapterName}. Built by students, for students.</span>
          <span>${SITE.schoolName} &middot; ${SITE.district}</span>
        </div>
        <details>
          <summary>Non-Discrimination Statement</summary>
          <div class="statement-block">${statement}</div>
        </details>
      </div>
    </div>
  </footer>`;
}
