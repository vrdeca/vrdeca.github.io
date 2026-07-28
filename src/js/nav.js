import { NAV_LINKS } from '../data/site-config.js';

export function renderNav(activePath = '/') {
  const links = NAV_LINKS.map((link) => {
    const isActive = link.href === activePath;
    return `<a href="${link.href}"${isActive ? ' aria-current="page"' : ''}>${link.label}</a>`;
  }).join('');

  return `
  <header class="site-header" id="site-header">
    <div class="nav-inner">
      <a href="${import.meta.env.BASE_URL}" class="brand-mark" aria-label="Vista Ridge DECA home">
        <img src="${import.meta.env.BASE_URL}assets/images/vrhs-deca-logo.jpg" alt="Vista Ridge High School Rangers star and horseman crest" width="56" height="56" />
        <span class="brand-mark-text">Vista Ridge<span>DECA</span></span>
      </a>
      <nav class="nav-links" id="nav-links">
        ${links}
        <a href="#contact" class="btn btn-primary nav-mobile-cta" data-contact-open>Contact</a>
      </nav>
      <div class="nav-actions">
        <a href="#contact" class="btn btn-primary" data-contact-open>Contact</a>
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-links">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>`;
}
