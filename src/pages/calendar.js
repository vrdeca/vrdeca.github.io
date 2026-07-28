import '../css/main.css';
import { mountLayout } from '../js/layout.js';
import { initCalendarPage } from '../js/calendar-page.js';

mountLayout({ activePath: '/calendar/' });
initCalendarPage();
