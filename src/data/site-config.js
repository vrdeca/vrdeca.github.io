// ---------------------------------------------------------------------------
// Site-wide, easily editable configuration.
// Officers / dates below are placeholders — swap for real info before launch.
// ---------------------------------------------------------------------------

export const SITE = {
  chapterName: 'Vista Ridge DECA',
  schoolName: 'Vista Ridge High School',
  district: 'Leander ISD',
  advisorName: 'Israel Martinez Jr.',
  advisorEmail: 'israel.martinez@leanderisd.org',
  googleClassroomCode: '[classroom code]',
};

// Turn the emergency marquee banner off by flipping this to false.
export const MARQUEE_ENABLED = true;

export const MARQUEE_MESSAGES = [
  'Welcome to the new VRHS DECA site — under construction, updated often.',
  'General Chapter Meeting — [Date] — Room [###]',
  'District CDC registration opens soon — talk to your officer team.',
];

// import.meta.env.BASE_URL already ends in '/' (e.g. '/VistaRidgeDECA/' in
// production, '/' in dev) — use it so links work whether the site is hosted
// at a domain root or a GitHub Pages project subpath.
const BASE = import.meta.env.BASE_URL;

export const NAV_LINKS = [
  { label: 'Members', href: `${BASE}members/` },
  { label: 'Competitors', href: `${BASE}competitors/` },
  { label: 'Parents', href: `${BASE}parents/` },
  { label: 'Calendar', href: `${BASE}calendar/` },
];

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'Remind', href: '#', icon: 'bell' },
  { label: 'Discord', href: '#', icon: 'discord' },
];

export const FOOTER_COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: BASE },
      { label: 'Members', href: `${BASE}members/` },
      { label: 'Competitors', href: `${BASE}competitors/` },
      { label: 'Parents', href: `${BASE}parents/` },
      { label: 'Full Calendar', href: `${BASE}calendar/` },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Join DECA', href: `${BASE}members/#join` },
      { label: 'Study Materials', href: `${BASE}competitors/#study-materials` },
      { label: 'Officer Applications', href: `${BASE}members/#leadership` },
      { label: 'Scholarships', href: `${BASE}parents/#scholarships` },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact the Chapter', href: '#contact' },
      { label: `Email ${SITE.advisorName}`, href: `mailto:${SITE.advisorEmail}` },
      { label: 'DECA Inc.', href: 'https://www.deca.org' },
    ],
  },
];
