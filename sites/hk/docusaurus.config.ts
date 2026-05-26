import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'hk',
  title: 'RAPath Hong Kong',
  tagline: 'Hong Kong MDD / MDACS Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/recent-changes',
  sections: [
    { label: 'Getting Started', to: '/getting-started/what-is-a-medical-device' },
    { label: 'Classification',  to: '/classification/how-classification-works' },
    { label: 'MDACS Listing',   to: '/mdacs-listing/overview' },
    { label: 'Post-Market',     to: '/post-market/overview' },
    { label: 'Legislation',     to: '/legislation/framework' },
    { label: "What's New",      to: '/whats-new/recent-changes' },
  ],
  officialSources: [
    { label: 'Medical Device Division (MDD), Department of Health', href: 'https://www.mdd.gov.hk/' },
    { label: 'MDACS — Technical References & Guidance Notes',       href: 'https://www.mdd.gov.hk/en/technical_references.html' },
    { label: 'MDIS — Medical Device Information System',            href: 'https://www.mdis.gov.hk/' },
  ],
  regulatorName: 'MDD or the Hong Kong Department of Health',
  disclaimerSourcesHtml: '<a href="https://www.mdd.gov.hk/" target="_blank" rel="noopener">MDD</a> and the <a href="https://www.dh.gov.hk/" target="_blank" rel="noopener">Department of Health</a>',
  metaKeywords: 'MDD, MDACS, Hong Kong, medical devices, HKMD, LRP, MDIS, Class II III IV, IVD, registration, regulatory affairs',
  metaDescription: 'Plain English reference for Hong Kong MDACS medical device regulation — listing pathways, classification, LRP obligations, and post-market requirements.',
});