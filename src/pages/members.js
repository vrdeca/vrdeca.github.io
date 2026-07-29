import '../css/main.css';
import { mountLayout } from '../js/layout.js';
import { EXTERNAL_LINKS } from '../data/site-config.js';

mountLayout({ activePath: '/members/' });

document.querySelectorAll('[data-interest-form-link]').forEach((el) => {
  el.href = EXTERNAL_LINKS.interestForm;
});
