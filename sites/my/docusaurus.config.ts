import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'my',
  title: 'RAPath Malaysia',
  tagline: 'Malaysia MDA Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/regulatory-changes',
  sections: [
    { label: 'Start Here', to: '/start-here/what-is-a-medical-device' },
    { label: 'Pre-Market', to: '/pre-market/classification' },
    { label: 'Post-Market', to: '/post-market/overview' },
    { label: 'Legislation', to: '/legislation/medical-device-act-2012' },
    { label: "What's New", to: '/whats-new/regulatory-changes' },
  ],
  officialSources: [
    { label: 'MDA (Medical Device Authority)', href: 'https://www.mda.gov.my/' },
    { label: 'Medical Device Act 2012 (Act 737)', href: 'https://www.mda.gov.my/act-regulation/medical-device-act-2012' },
    { label: 'MeDC@St Registration System', href: 'https://emedic.mda.gov.my/' },
    { label: 'ASEAN AMDD', href: 'https://asean.org/asean-medical-device-directive/' },
  ],
  regulatorName: 'MDA or the Malaysian Government',
  disclaimerSourcesHtml: '<a href="https://www.mda.gov.my/" target="_blank" rel="noopener">MDA</a> and <a href="https://emedic.mda.gov.my/" target="_blank" rel="noopener">MeDC@St</a>',
  metaKeywords: 'MDA, Malaysia, medical devices, Medical Device Act 2012, Class A B C D, ASEAN, regulatory affairs',
  metaDescription: 'Plain English reference for Malaysia MDA medical device regulation — registration, classification, Medical Device Act 2012, and post-market obligations.',
});
