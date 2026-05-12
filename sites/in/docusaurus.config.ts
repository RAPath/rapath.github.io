import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'in',
  title: 'RAPath India',
  tagline: 'India CDSCO Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/regulatory-changes',
  sections: [
    { label: 'Start Here', to: '/start-here/what-is-a-medical-device' },
    { label: 'Pre-Market', to: '/pre-market/classification' },
    { label: 'Post-Market', to: '/post-market/overview' },
    { label: 'Legislation', to: '/legislation/medical-devices-rules-2017' },
    { label: "What's New", to: '/whats-new/regulatory-changes' },
  ],
  officialSources: [
    { label: 'CDSCO — Medical Devices', href: 'https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/' },
    { label: 'Medical Devices Rules 2017', href: 'https://cdsco.gov.in/opencms/export/sites/CDSCO_WEB/Pdf-documents/medical-device/Medical-Devices-Rules-2017-Notified.pdf' },
    { label: 'Drugs and Cosmetics Act 1940', href: 'https://cdsco.gov.in/opencms/opencms/en/Acts-Rules/Acts/' },
    { label: 'SUGAM Portal (Registration)', href: 'https://sugam.gov.in/' },
  ],
  regulatorName: 'CDSCO or the Government of India',
  disclaimerSourcesHtml: '<a href="https://cdsco.gov.in" target="_blank" rel="noopener">CDSCO</a> and <a href="https://sugam.gov.in" target="_blank" rel="noopener">SUGAM</a>',
  metaKeywords: 'CDSCO, India, medical devices, Medical Devices Rules 2017, Class A B C D, SUGAM, regulatory affairs',
  metaDescription: 'Plain English reference for India CDSCO medical device regulation — registration, classification, Medical Devices Rules 2017, and post-market obligations.',
});
