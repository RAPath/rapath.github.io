import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'lk',
  title: 'RAPath Sri Lanka',
  tagline: 'Sri Lanka NMRA Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/recent-changes',
  sections: [
    { label: 'Getting Started', to: '/getting-started/what-is-a-medical-device' },
    { label: 'Classification',  to: '/classification/overview' },
    { label: 'Registration',    to: '/registration/overview' },
    { label: 'Post-Market',     to: '/post-market/overview' },
    { label: 'Legislation',     to: '/legislation/nmra-act' },
    { label: "What's New",      to: '/whats-new/recent-changes' },
  ],
  officialSources: [
    { label: 'National Medicines Regulatory Authority (NMRA)', href: 'https://www.nmra.gov.lk/' },
    { label: 'NMRA — Application Forms & Guidelines',         href: 'https://www.nmra.gov.lk/index.php?option=com_content&view=article&id=73' },
    { label: 'Atomic Energy Authority of Sri Lanka',          href: 'https://www.aea.gov.lk/' },
  ],
  regulatorName: 'NMRA or the Sri Lanka Ministry of Health',
  disclaimerSourcesHtml: '<a href="https://www.nmra.gov.lk/" target="_blank" rel="noopener">NMRA</a>',
  metaKeywords: 'NMRA, Sri Lanka, medical devices, NMRA Act 2015, MAH, marketing authorization holder, Class I IIa IIb III, reliance pathway, registration',
  metaDescription: 'Plain English reference for Sri Lanka NMRA medical device regulation — two-step registration, MAH requirements, reliance pathway, and MDEC review process.',
});