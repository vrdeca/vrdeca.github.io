// ---------------------------------------------------------------------------
// Competition calendar — edit freely. `tier` drives the badge color/label.
// `image` paths are placeholders until real event photos are supplied.
// Dates use ISO format (YYYY-MM-DD) so both the list and grid views can
// parse them directly.
// ---------------------------------------------------------------------------

export const EVENTS = [
  {
    id: 'district-cdc-2026',
    title: 'District Career Development Conference',
    shortTitle: 'District CDC',
    tier: 'district',
    date: '2026-12-07',
    endDate: '2026-12-08',
    time: '7:30 AM – 4:00 PM',
    location: 'Kalahari Resorts & Convention Center, Round Rock, TX',
    image: '/assets/images/placeholder-district.jpg',
    blurb: 'The qualifying round for state — every competitive member\'s first stop of the season.',
    featured: true,
  },
  {
    id: 'state-cdc-2027',
    title: 'Texas DECA State Career Development Conference',
    shortTitle: 'State CDC',
    tier: 'state',
    date: '2027-02-25',
    endDate: '2027-02-27',
    time: 'All Day',
    location: 'George R. Brown Convention Center, Houston, TX',
    image: '/assets/images/placeholder-state.jpg',
    blurb: 'Top district finishers face off for a shot at qualifying for ICDC.',
    featured: true,
  },
  {
    id: 'icdc-2027',
    title: 'DECA International Career Development Conference',
    shortTitle: 'ICDC',
    tier: 'icdc',
    date: '2027-04-17',
    endDate: '2027-04-20',
    time: 'All Day',
    location: 'Anaheim Convention Center, Anaheim, CA',
    image: '/assets/images/placeholder-icdc.jpg',
    blurb: 'The world stage — Vista Ridge competes against the best chapters on Earth.',
    featured: true,
  },
  {
    id: 'fall-leadership-summit-2026',
    title: 'Fall Leadership Summit (Officers Only)',
    shortTitle: 'Leadership Summit',
    tier: 'leadership',
    date: '2026-09-08',
    time: '8:00 AM – 3:00 PM',
    location: 'Reunion Ranch, Georgetown, TX',
    blurb: 'Officers-only summit to plan the semester ahead.',
  },
];

export const TIER_LABELS = {
  district: 'District',
  state: 'State',
  icdc: 'ICDC',
  chapter: 'Chapter',
  leadership: 'Leadership',
  prep: 'Prep',
};
