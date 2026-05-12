import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'id',
  title: 'RAPath Indonesia',
  tagline: 'Indonesia BPOM Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/regulatory-changes',
  sections: [
    { label: 'Start Here', to: '/start-here/what-is-a-medical-device' },
    { label: 'Pre-Market', to: '/pre-market/classification' },
    { label: 'Post-Market', to: '/post-market/overview' },
    { label: 'Legislation', to: '/legislation/government-regulation-overview' },
    { label: "What's New", to: '/whats-new/regulatory-changes' },
  ],
  officialSources: [
    { label: 'BPOM (Badan Pengawas Obat dan Makanan)', href: 'https://www.pom.go.id/' },
    { label: 'REGALKES (Registration System)', href: 'https://regalkes.kemkes.go.id/' },
    { label: 'Ministry of Health — Medical Devices', href: 'https://farmalkes.kemkes.go.id/' },
    { label: 'ASEAN AMDD', href: 'https://asean.org/asean-medical-device-directive/' },
  ],
  regulatorName: 'BPOM or the Indonesian Government',
  disclaimerSourcesHtml: '<a href="https://www.pom.go.id/" target="_blank" rel="noopener">BPOM</a> and <a href="https://regalkes.kemkes.go.id/" target="_blank" rel="noopener">REGALKES</a>',
  metaKeywords: 'BPOM, Indonesia, medical devices, REGALKES, Class A B C D, ASEAN, regulatory affairs, Kemenkes',
  metaDescription: 'Plain English reference for Indonesia BPOM medical device regulation — registration, classification, and post-market obligations.',
});
