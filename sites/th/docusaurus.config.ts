import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'th',
  title: 'RAPath Thailand',
  tagline: 'Thailand Thai FDA / MDCD Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/recent-changes',
  sections: [
    { label: 'Getting Started',       to: '/getting-started/what-is-a-medical-device' },
    { label: 'Classification',        to: '/classification/overview' },
    { label: 'Registration Pathways', to: '/three-pathways/overview' },
    { label: 'CSDT & Docs',           to: '/csdt-documentation/overview' },
    { label: 'Post-Market',           to: '/post-market/overview' },
    { label: 'Legislation',           to: '/legislation/overview' },
    { label: "What's New",            to: '/whats-new/recent-changes' },
  ],
  officialSources: [
    { label: 'Thai FDA — Medical Device Control Division (MDCD)', href: 'https://www.fda.moph.go.th/sites/Medical/Pages/home.aspx' },
    { label: 'Thai FDA (main site)',                              href: 'https://www.fda.moph.go.th/' },
    { label: 'NBTC (for wireless device review)',                href: 'https://www.nbtc.go.th/' },
  ],
  regulatorName: 'Thai FDA or the Thailand Ministry of Public Health',
  disclaimerSourcesHtml: '<a href="https://www.fda.moph.go.th/" target="_blank" rel="noopener">Thai FDA</a> and the <a href="https://www.moph.go.th/" target="_blank" rel="noopener">Ministry of Public Health</a>',
  metaKeywords: 'Thai FDA, MDCD, Thailand, medical devices, AMDD, ASEAN, Class 1 2 3 4, CSDT, listing notification license, Establishment License, NBTC',
  metaDescription: 'Plain English reference for Thailand Thai FDA medical device regulation — three registration pathways, CSDT dossier, ASEAN AMDD alignment, and Establishment License requirements.',
});