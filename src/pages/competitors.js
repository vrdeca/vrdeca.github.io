import '../css/main.css';
import { mountLayout } from '../js/layout.js';
import { sortedEvents, renderEventListRows } from '../js/event-list.js';

// Render BEFORE mountLayout() so its data-reveal elements exist in the DOM
// before mountLayout's scroll-reveal observer scans for them.
const timeline = document.getElementById('competitor-prep-timeline');
if (timeline) timeline.innerHTML = renderEventListRows(sortedEvents());

mountLayout({ activePath: '/competitors/' });
