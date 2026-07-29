// ---------------------------------------------------------------------------
// Site-wide, easily editable configuration.
// Officers / dates below are placeholders — swap for real info before launch.
// ---------------------------------------------------------------------------

// Files copied from public/ (videos, the logo, the loader image) keep the
// same filename on every deploy — Vite only content-hashes files it runs
// through its own build pipeline, not raw public/ assets. That means
// browsers and GitHub's CDN can go on serving old cached bytes indefinitely
// after we update one of these files. Bump this any time you replace a
// video/image in public/assets/ so the URL changes and caches bust.
export const ASSET_VERSION = 4;

export const SITE = {
  chapterName: 'Vista Ridge DECA',
  schoolName: 'Vista Ridge High School',
  district: 'Leander ISD',
  googleClassroomCode: '[classroom code]',
};

// Chapter advisors — supports more than one. Add/remove entries here and
// every page that lists advisors (Parents contact card, footer) updates.
export const ADVISORS = [
  {
    name: 'Israel Martinez Jr.',
    email: 'israel.martinez@leanderisd.org',
    role: 'Chapter Advisor',
  },
  {
    name: '[Second Advisor Name]',
    email: '[second.advisor@leanderisd.org]',
    role: 'Chapter Advisor',
  },
];

// External links referenced from multiple pages — edit once here.
export const EXTERNAL_LINKS = {
  minga: 'https://minga.io', // student portal used during flex time — replace with the chapter's actual Minga link
  interestForm: '#', // Google Form for prospective-member interest — swap in the real link once it exists
  handbook: '#', // Chapter Handbook PDF, for transparency — swap in the real file link
  decaJapan: '#', // official DECA Japan trip page — swap in the real link
};

// DECA Japan trip — homepage feature section under the calendar cards.
// Toggle JAPAN_TRIP_ENABLED off if the trip isn't happening this cycle.
export const JAPAN_TRIP_ENABLED = true;
export const JAPAN_TRIP = {
  title: 'DECA Japan',
  blurb: "A once-in-a-lifetime international trip for Vista Ridge DECA members — details, fundraising, and payment deadlines coming soon.",
  deadline: '[Payment deadline TBD]',
};

// Turn the emergency marquee banner off by flipping this to false.
export const MARQUEE_ENABLED = true;

export const MARQUEE_MESSAGES = [
  'Welcome to the new VRHS DECA site — under construction, updated often.',
  'Decision Day is quickly approaching — talk with your officer team for more info.',
];

// import.meta.env.BASE_URL already ends in '/' (e.g. '/VistaRidgeDECA/' in
// production, '/' in dev) — use it so links work whether the site is hosted
// at a domain root or a GitHub Pages project subpath.
const BASE = import.meta.env.BASE_URL;

export const NAV_LINKS = [
  { label: 'Members', href: `${BASE}members/` },
  { label: 'Competitors', href: `${BASE}competitors/` },
  { label: 'Parents', href: `${BASE}parents/` },
  { label: 'Volunteers', href: `${BASE}volunteers/` },
  { label: 'Calendar', href: `${BASE}calendar/` },
];

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'Remind', href: '#', icon: 'bell' },
];

export const FOOTER_COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: BASE },
      { label: 'Members', href: `${BASE}members/` },
      { label: 'Competitors', href: `${BASE}competitors/` },
      { label: 'Parents', href: `${BASE}parents/` },
      { label: 'Volunteers', href: `${BASE}volunteers/` },
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
      { label: 'Chapter Handbook (PDF)', href: EXTERNAL_LINKS.handbook },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact the Chapter', href: '#contact' },
      ...ADVISORS.map((a) => ({ label: `Email ${a.name}`, href: `mailto:${a.email}` })),
      { label: 'DECA Inc.', href: 'https://www.deca.org' },
    ],
  },
];
