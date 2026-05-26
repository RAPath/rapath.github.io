import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'ph',
  title: 'RAPath Philippines',
  tagline: 'Philippines FDA / CDRRHR Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/recent-changes',
  sections: [
    { label: 'Getting Started', to: '/getting-started/what-is-a-medical-device' },
    { label: 'Classification',  to: '/classification/overview' },
    { label: 'CMDN / CMDR',    to: '/cmdn-cmdr/cmdn-class-a' },
    { label: 'CDRRHR Ops',     to: '/cdrrhr-operations/establishment-license' },
    { label: 'Post-Market',    to: '/post-market/overview' },
    { label: 'Legislation',    to: '/legislation/overview' },
    { label: "What's New",     to: '/whats-new/recent-changes' },
  ],
  officialSources: [
    { label: 'FDA Philippines — CDRRHR', href: 'https://www.fda.gov.ph/center-for-device-regulation-radiation-health-and-research/' },
    { label: 'FDA Philippines (main site)', href: 'https://www.fda.gov.ph/' },
    { label: 'FDA Philippines — Approved CMDN/CMDR list', href: 'https://www.fda.gov.ph/list-of-registered-medical-devices/' },
  ],
  regulatorName: 'FDA Philippines or the Philippine Department of Health',
  disclaimerSourcesHtml: '<a href="https://www.fda.gov.ph/" target="_blank" rel="noopener">FDA Philippines</a> and the <a href="https://doh.gov.ph/" target="_blank" rel="noopener">Department of Health</a>',
  metaKeywords: 'FDA Philippines, CDRRHR, RA 9711, medical devices, CMDN, CMDR, Class A B C D, ASEAN AMDD, LTO, abridged pathway, registration',
  metaDescription: 'Plain English reference for Philippines FDA medical device regulation — CMDN/CMDR pathways, Class A–D classification, abridged ASEAN NRA reliance, and LTO requirements.',
});
