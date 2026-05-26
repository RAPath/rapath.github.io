import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'bd',
  title: 'RAPath Bangladesh',
  tagline: 'Bangladesh DGDA Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/recent-changes',
  sections: [
    { label: 'Getting Started', to: '/getting-started/what-is-a-medical-device' },
    { label: 'Classification',  to: '/classification/overview' },
    { label: 'Registration',    to: '/registration/overview' },
    { label: 'Post-Market',     to: '/post-market/overview' },
    { label: 'Legislation',     to: '/legislation/overview' },
    { label: "What's New",      to: '/whats-new/recent-changes' },
  ],
  officialSources: [
    { label: 'Directorate General of Drug Administration (DGDA)', href: 'https://www.dgda.gov.bd/' },
    { label: 'Ministry of Health & Family Welfare',               href: 'https://mohfw.gov.bd/' },
  ],
  regulatorName: 'DGDA or the Bangladesh Ministry of Health & Family Welfare',
  disclaimerSourcesHtml: '<a href="https://www.dgda.gov.bd/" target="_blank" rel="noopener">DGDA</a>',
  metaKeywords: 'DGDA, Bangladesh, medical devices, Drug and Cosmetics Act 2023, Class A B C D, registration, authorized representative, regulatory affairs',
  metaDescription: 'Plain English reference for Bangladesh DGDA medical device regulation — Class A–D registration, local authorized representative, and the Drug and Cosmetics Act 2023.',
});