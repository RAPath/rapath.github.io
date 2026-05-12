import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'cn',
  title: 'RAPath China',
  tagline: 'China NMPA Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/regulatory-changes',
  sections: [
    { label: 'Start Here', to: '/start-here/what-is-a-medical-device' },
    { label: 'Pre-Market', to: '/pre-market/classification' },
    { label: 'Post-Market', to: '/post-market/overview' },
    { label: 'Legislation', to: '/legislation/medical-device-supervision-regulations' },
    { label: "What's New", to: '/whats-new/regulatory-changes' },
  ],
  officialSources: [
    { label: 'NMPA (National Medical Products Administration)', href: 'https://www.nmpa.gov.cn/' },
    { label: 'CIMDN (Medical Device Nomenclature)', href: 'https://www.nmpa.gov.cn/ylqx/ylqxjgdt/' },
    { label: 'National Medical Device Registration System', href: 'https://www.nmpa.gov.cn/ylqx/' },
    { label: 'Center for Medical Device Evaluation (CMDE)', href: 'https://www.cmde.org.cn/eportal/ui?pageId=330595' },
  ],
  regulatorName: 'NMPA or the Chinese Government',
  disclaimerSourcesHtml: '<a href="https://www.nmpa.gov.cn/" target="_blank" rel="noopener">NMPA</a> and <a href="https://www.cmde.org.cn" target="_blank" rel="noopener">CMDE</a>',
  metaKeywords: 'NMPA, China, medical devices, CFDA, Class I II III, registration, regulatory affairs, CIMDN',
  metaDescription: 'Plain English reference for China NMPA medical device regulation — registration pathways, classification, and post-market obligations.',
});
