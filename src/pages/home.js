import '../css/main.css';
import { mountLayout } from '../js/layout.js';
import { initHero } from '../js/hero.js';
import { initCoinCutout } from '../js/coin-cutout.js';
import { initCoinLoader } from '../js/coin-loader.js';
import { renderCalendarPreview } from '../js/calendar-preview.js';
import { renderChart } from '../js/chart.js';
import { renderJapanTrip } from '../js/japan-trip.js';
import { EXTERNAL_LINKS } from '../data/site-config.js';

// Render dynamic content BEFORE mountLayout() so its data-reveal elements
// exist in the DOM before mountLayout's scroll-reveal observer scans for them
// — otherwise cards injected afterward never get observed and stay invisible.
renderCalendarPreview(document.getElementById('calendar-preview-grid'));
renderChart(document.getElementById('icdc-chart-wrap'));
renderJapanTrip(document.getElementById('japan-trip-root'));

mountLayout({ activePath: '/' });
initHero();
initCoinCutout();
initCoinLoader();

const interestFormLink = document.getElementById('interest-form-link');
if (interestFormLink) interestFormLink.href = EXTERNAL_LINKS.interestForm;
