import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'hc',
  title: 'RAPath Health Canada',
  tagline: 'Health Canada Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/regulatory-changes',
  sections: [
    { label: 'Start Here', to: '/start-here/what-is-a-medical-device' },
    { label: 'Pre-Market', to: '/pre-market/classification/how-classification-works' },
    { label: 'Post-Market', to: '/post-market/overview' },
    { label: 'Legislation', to: '/legislation/food-and-drugs-act' },
    { label: "What's New", to: '/whats-new/regulatory-changes' },
  ],
  officialSources: [
    { label: 'Health Canada — Medical Devices', href: 'https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices.html' },
    { label: 'Medical Devices Regulations (SOR/98-282)', href: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-98-282/' },
    { label: 'Food and Drugs Act', href: 'https://laws-lois.justice.gc.ca/eng/acts/F-27/' },
    { label: 'MDALL Database', href: 'https://health-products.canada.ca/mdall-limh/' },
    { label: 'MedEffect Canada', href: 'https://www.canada.ca/en/health-canada/services/drugs-health-products/medeffect-canada.html' },
  ],
  regulatorName: 'Health Canada or the Government of Canada',
  disclaimerSourcesHtml: '<a href="https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices.html" target="_blank" rel="noopener">Health Canada</a> and <a href="https://laws-lois.justice.gc.ca" target="_blank" rel="noopener">laws-lois.justice.gc.ca</a>',
  metaKeywords: 'Health Canada, medical devices, MDL, medical device licence, SOR/98-282, Food and Drugs Act, Canada, regulatory affairs, MDSAP',
  metaDescription: 'Plain English reference for Health Canada medical device regulation — Medical Device Licence, classification, conformity assessment, and post-market obligations.',
});
