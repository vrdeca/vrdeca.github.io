import { ICONS } from './icons.js';

export function renderContactModal() {
  return `
  <div class="modal-overlay" id="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
    <div class="modal-card">
      <button class="modal-close" id="contact-modal-close" aria-label="Close">${ICONS.close}</button>
      <p class="eyebrow">Get in touch</p>
      <h3 id="contact-modal-title" style="font-family:var(--font-display);font-size:1.8rem;text-transform:uppercase;margin:var(--space-2) 0 var(--space-5);">Reach the Chapter</h3>
      <form id="contact-form">
        <div class="form-field">
          <label for="cf-name">Name</label>
          <input id="cf-name" name="name" type="text" required autocomplete="name" />
        </div>
        <div class="form-field">
          <label for="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" required autocomplete="email" />
        </div>
        <div class="form-field">
          <label for="cf-role">I am a...</label>
          <select id="cf-role" name="role">
            <option>Prospective Member</option>
            <option>Current Member</option>
            <option>Parent / Guardian</option>
            <option>Community Partner / Judge</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-field">
          <label for="cf-message">Message</label>
          <textarea id="cf-message" name="message" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">Send Message</button>
        <p style="font-size:var(--fs-small);color:var(--color-text-muted);margin-top:var(--space-3);text-align:center;">This form isn't wired up to an inbox yet — for now, reach out directly to the chapter advisor in the footer.</p>
      </form>
    </div>
  </div>`;
}
