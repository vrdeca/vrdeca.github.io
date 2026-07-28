// ---------------------------------------------------------------------------
// Site-wide, easily editable configuration.
// Officers / dates below are placeholders — swap for real info before launch.
// ---------------------------------------------------------------------------

export const SITE = {
  chapterName: 'Vista Ridge DECA',
  schoolName: 'Vista Ridge High School',
  district: 'Leander ISD',
  advisorName: '[Advisor Name]',
  advisorEmail: 'ron.hull@leanderisd.org',
  googleClassroomCode: '[classroom code]',
};

// Turn the emergency marquee banner off by flipping this to false.
export const MARQUEE_ENABLED = true;

export const MARQUEE_MESSAGES = [
  'Welcome to the new VRHS DECA site — under construction, updated often.',
  'General Chapter Meeting — [Date] — Room [###]',
  'District CDC registration opens soon — talk to your officer team.',
];

export const NAV_LINKS = [
  { label: 'Members', href: '/members/' },
  { label: 'Competitors', href: '/competitors/' },
  { label: 'Parents', href: '/parents/' },
  { label: 'Calendar', href: '/calendar/' },
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
      { label: 'Home', href: '/' },
      { label: 'Members', href: '/members/' },
      { label: 'Competitors', href: '/competitors/' },
      { label: 'Parents', href: '/parents/' },
      { label: 'Full Calendar', href: '/calendar/' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Join DECA', href: '/members/#join' },
      { label: 'Study Materials', href: '/competitors/#study-materials' },
      { label: 'Officer Applications', href: '/members/#leadership' },
      { label: 'Scholarships', href: '/parents/#scholarships' },
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
