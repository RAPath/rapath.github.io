import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'nz',
  title: 'RAPath New Zealand',
  tagline: 'New Zealand Medical Device Regulation — Medsafe & Medicines Act 1981',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/recent-changes',
  sections: [
    { label: 'Getting Started',       to: '/getting-started/what-is-a-medical-device' },
    { label: 'Market Entry — WAND',   to: '/market-entry/wand-overview' },
    { label: 'Device Classification', to: '/device-classification/how-classification-works' },
    { label: 'Sponsor Obligations',   to: '/sponsor-obligations/what-is-a-sponsor' },
    { label: 'Post-Market',           to: '/post-market/adverse-event-reporting' },
    { label: 'Legislation',           to: '/legislation/medicines-act-1981' },
    { label: "What's New",            to: '/whats-new/recent-changes' },
  ],
  officialSources: [
    { label: 'Medsafe — Medical Devices',       href: 'https://www.medsafe.govt.nz/regulatory/DevicesNew.asp' },
    { label: 'Medicines Act 1981',              href: 'https://www.legislation.govt.nz/act/public/1981/0118/latest/whole.html' },
    { label: 'WAND Regulations 2003',           href: 'https://www.legislation.govt.nz/regulation/public/2003/0352/latest/whole.html' },
    { label: 'Ministry of Health NZ',          href: 'https://www.health.govt.nz/regulation-legislation/medicines-legislation' },
    { label: 'Medical Products Bill',           href: 'https://www.health.govt.nz/regulation-legislation/medicines-legislation/regulating-medicines-medical-devices-and-natural-health-products' },
    { label: 'NZ Legislation (legislation.govt.nz)', href: 'https://www.legislation.govt.nz' },
  ],
  regulatorName: 'Medsafe or the New Zealand Ministry of Health',
  disclaimerSourcesHtml: '<a href="https://www.medsafe.govt.nz" target="_blank" rel="noopener">Medsafe</a> and <a href="https://www.legislation.govt.nz" target="_blank" rel="noopener">New Zealand legislation</a>',
  metaKeywords: 'Medsafe, New Zealand, medical devices, WAND, Medicines Act 1981, NZ Sponsor, TTMRA, Medical Products Bill, SaMD, regulatory affairs NZ, GMDN, GHTF',
  metaDescription: 'Plain-language reference for New Zealand medical device regulation under Medsafe — WAND notification, Sponsor obligations, device classification, adverse event reporting, and the upcoming Medical Products Bill.',
});
