import '../css/main.css';
import { mountLayout } from '../js/layout.js';
import { initHero } from '../js/hero.js';
import { renderCalendarPreview } from '../js/calendar-preview.js';
import { renderChart } from '../js/chart.js';

mountLayout({ activePath: '/' });
initHero();
renderCalendarPreview(document.getElementById('calendar-preview-grid'));
renderChart(document.getElementById('icdc-chart-wrap'));
