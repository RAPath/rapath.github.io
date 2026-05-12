import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'jp',
  title: 'RAPath Japan',
  tagline: 'Japan PMDA Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/recent-amendments',
  sections: [
    { label: 'Start Here', to: '/start-here/what-is-a-medical-device' },
    { label: 'Pre-Market', to: '/pre-market/classification' },
    { label: 'Post-Market', to: '/post-market/overview' },
    { label: 'MAH & Licences', to: '/mah-licences/overview' },
    { label: 'Legislation', to: '/legislation/pmd-act' },
    { label: "What's New", to: '/whats-new/recent-amendments' },
  ],
  officialSources: [
    { label: 'PMDA (English)', href: 'https://www.pmda.go.jp/english/' },
    { label: 'MHLW (English)', href: 'https://www.mhlw.go.jp/english/' },
    { label: 'PMD Act (e-Gov)', href: 'https://elaws.e-gov.go.jp/document?lawid=335AC0000000145' },
    { label: 'JMDN Nomenclature', href: 'https://www.pmda.go.jp/english/review-services/reviews/0001.html' },
  ],
  regulatorName: 'PMDA, MHLW, or the Japanese Government',
  disclaimerSourcesHtml: '<a href="https://www.pmda.go.jp/english/" target="_blank" rel="noopener">PMDA</a> and <a href="https://www.mhlw.go.jp/english/" target="_blank" rel="noopener">MHLW</a>',
  metaKeywords: 'PMDA, Japan, medical devices, PMD Act, MHLW, MAH, manufacturing licence, regulatory affairs, JMDN, Shonin',
  metaDescription: 'Plain English reference for Japan PMDA medical device regulation — approval pathways, MAH requirements, PMD Act, and post-market obligations.',
});
