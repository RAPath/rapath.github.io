import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'sg',
  title: 'RAPath Singapore',
  tagline: 'Singapore HSA Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/regulatory-changes',
  sections: [
    { label: 'Start Here', to: '/start-here/what-is-a-medical-device' },
    { label: 'Pre-Market', to: '/pre-market/classification/how-classification-works' },
    { label: 'Post-Market', to: '/post-market/overview' },
    { label: "Dealer's Licence", to: '/dealers-licence/overview' },
    { label: 'International & ASEAN', to: '/international/asean-harmonisation' },
    { label: "What's New", to: '/whats-new/regulatory-changes' },
  ],
  officialSources: [
    { label: 'HSA — Medical Devices', href: 'https://www.hsa.gov.sg/medical-devices' },
    { label: 'Health Products Act (Cap. 122D)', href: 'https://sso.agc.gov.sg/Act/HPA2007' },
    { label: 'HP(MD) Regulations 2010', href: 'https://sso.agc.gov.sg/SL/HPA2007-S436-2010' },
    { label: 'SHARE Portal', href: 'https://www.hsa.gov.sg/medical-devices/e-services' },
    { label: 'Singapore Statutes Online', href: 'https://sso.agc.gov.sg' },
  ],
  regulatorName: 'the Health Sciences Authority or the Singapore Government',
  disclaimerSourcesHtml: '<a href="https://www.hsa.gov.sg/medical-devices" target="_blank" rel="noopener">HSA</a> and <a href="https://sso.agc.gov.sg" target="_blank" rel="noopener">Singapore Statutes Online</a>',
  metaKeywords: 'HSA, Singapore, medical devices, Health Products Act, SHARE, regulatory affairs, ASEAN, Class A B C D',
  metaDescription: 'Plain English reference for Singapore HSA medical device regulation — product registration, classification, Health Products Act, and post-market obligations.',
});
