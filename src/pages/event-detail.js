import '../css/main.css';
import { mountLayout } from '../js/layout.js';

// District / State / ICDC detail pages are conceptually part of the
// calendar, not their own nav item — highlight Calendar in the header.
mountLayout({ activePath: '/calendar/' });
