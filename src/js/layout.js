import { renderNav } from './nav.js';
import { renderFooter } from './footer.js';
import { renderMarquee } from './marquee.js';
import { renderContactModal } from './modal.js';
import { initReveal } from './reveal.js';
import { ADVISORS } from '../data/site-config.js';

const CONTACT_EMAIL = ADVISORS[0].email;

export function mountLayout({ activePath = '/' } = {}) {
  const headerRoot = document.getElementById('header-root');
  const marqueeRoot = document.getElementById('marquee-root');
  const footerRoot = document.getElementById('footer-root');
  const modalRoot = document.getElementById('modal-root');

  if (headerRoot) headerRoot.innerHTML = renderNav(activePath);
  if (marqueeRoot) marqueeRoot.innerHTML = renderMarquee();
  if (footerRoot) footerRoot.innerHTML = renderFooter();
  if (modalRoot) modalRoot.innerHTML = renderContactModal();

  initHeaderScroll();
  initMobileNav();
  initContactModal();
  initFooterYear();
  initReveal();
}

function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initContactModal() {
  const overlay = document.getElementById('contact-modal');
  if (!overlay) return;
  const closeBtn = document.getElementById('contact-modal-close');
  const form = document.getElementById('contact-form');

  const open = (e) => {
    if (e) e.preventDefault();
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    overlay.querySelector('input')?.focus();
  };
  const close = () => {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-contact-open]').forEach((btn) => {
    btn.addEventListener('click', open);
  });
  closeBtn?.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
  });
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const role = form.elements.role.value;
    const message = form.elements.message.value.trim();

    // Static site, no backend — hand off to the visitor's own mail client with
    // the message pre-filled, addressed to the chapter advisor.
    const subject = `Vista Ridge DECA website message — ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nI am a: ${role}\n\n${message}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    form.innerHTML = '<p style="font-weight:700;">Opening your email app with this message pre-filled — send it from there to reach the advisor.</p>';
  });
}

function initFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}
