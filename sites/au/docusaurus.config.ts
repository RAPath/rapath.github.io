import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'au',
  title: 'RAPath Australia',
  tagline: 'Australian TGA Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/regulatory-changes',
  sections: [
    { label: 'Start Here', to: '/start-here/what-is-a-medical-device' },
    { label: 'Pre-Market', to: '/pre-market/classification/how-classification-works' },
    { label: 'Post-Market', to: '/post-market/overview' },
    { label: 'Legislation', to: '/legislation/therapeutic-goods-act' },
    { label: "What's New", to: '/whats-new/regulatory-changes' },
  ],
  officialSources: [
    { label: 'TGA — Medical Devices', href: 'https://www.tga.gov.au/products/medical-devices' },
    { label: 'ARTG Public Summary', href: 'https://www.tga.gov.au/resources/artg' },
    { label: 'Therapeutic Goods Act 1989', href: 'https://www.legislation.gov.au/Series/C2004A03952' },
    { label: 'MD Regulations 2002', href: 'https://www.legislation.gov.au/Series/F2002B00237' },
    { label: 'IRIS Reporting Portal', href: 'https://www.tga.gov.au/reporting-problems' },
  ],
  regulatorName: 'the TGA or the Australian Government',
  disclaimerSourcesHtml: '<a href="https://www.tga.gov.au" target="_blank" rel="noopener">TGA</a> and <a href="https://www.legislation.gov.au" target="_blank" rel="noopener">legislation.gov.au</a>',
  metaKeywords: 'TGA, medical devices, regulatory, ARTG, Australia, therapeutic goods, Essential Principles, conformity assessment, regulatory affairs',
  metaDescription: 'Plain English reference for Australian medical device regulation — TGA requirements, ARTG inclusion, Essential Principles, post-market obligations.',
});
