import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'sa',
  title: 'RAPath Saudi Arabia',
  tagline: 'Saudi Arabia SFDA Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/recent-changes',
  sections: [
    { label: 'Start Here', to: '/getting-started/what-is-a-medical-device' },
    { label: 'Registration (MDMA)', to: '/mdma-registration/mdma-overview' },
    { label: 'Post-Market', to: '/post-market/overview' },
    { label: 'AR & MDEL', to: '/authorized-representative/ar-overview' },
    { label: 'GCC & International', to: '/gcc-international/ksa-global-landscape' },
    { label: "What's New", to: '/whats-new/recent-changes' },
  ],
  officialSources: [
    { label: 'SFDA — Medical Devices', href: 'https://www.sfda.gov.sa/en/medicaldevices' },
    { label: 'Medical Devices Law (CoM Res. 337)', href: 'https://www.sfda.gov.sa/en/medicaldevices' },
    { label: 'MDS-REQ Guidance Series', href: 'https://www.sfda.gov.sa/en/medicaldevices' },
    { label: 'GHAD Portal', href: 'https://ghad.sfda.gov.sa/' },
    { label: 'NCMDR — Adverse Event Reporting', href: 'https://www.sfda.gov.sa/en/ncmdr' },
  ],
  regulatorName: 'the Saudi Food and Drug Authority or the Saudi Government',
  disclaimerSourcesHtml: '<a href="https://www.sfda.gov.sa/en/medicaldevices" target="_blank" rel="noopener">SFDA</a> and <a href="https://ghad.sfda.gov.sa/" target="_blank" rel="noopener">GHAD Portal</a>',
  metaKeywords: 'SFDA, Saudi Arabia, KSA, medical devices, MDMA, TFA, GHAD, MDS-REQ, Class A B C D, authorized representative, MDEL, regulatory affairs, GCC, Vision 2030',
  metaDescription: 'Plain English reference for Saudi Arabia SFDA medical device regulation — MDMA registration, device classification, authorized representative, MDEL, and post-market obligations.',
});
