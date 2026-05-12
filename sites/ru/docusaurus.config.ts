import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'ru',
  title: 'RAPath Russia',
  tagline: 'Russia Roszdravnadzor Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/regulatory-changes',
  sections: [
    { label: 'Start Here', to: '/start-here/what-is-a-medical-device' },
    { label: 'Pre-Market', to: '/pre-market/classification' },
    { label: 'Post-Market', to: '/post-market/overview' },
    { label: 'Legislation', to: '/legislation/federal-law-323-overview' },
    { label: "What's New", to: '/whats-new/regulatory-changes' },
  ],
  officialSources: [
    { label: 'Roszdravnadzor', href: 'https://roszdravnadzor.gov.ru/' },
    { label: 'Ministry of Health Russia', href: 'https://minzdrav.gov.ru/' },
    { label: 'State Register of Medical Devices (GRLS)', href: 'https://grls.rosminzdrav.ru/GRLS.aspx' },
    { label: 'Federal Law No. 323-FZ', href: 'https://base.garant.ru/12180860/' },
  ],
  regulatorName: 'Roszdravnadzor or the Russian Government',
  disclaimerSourcesHtml: '<a href="https://roszdravnadzor.gov.ru/" target="_blank" rel="noopener">Roszdravnadzor</a> and <a href="https://minzdrav.gov.ru/" target="_blank" rel="noopener">Ministry of Health Russia</a>',
  metaKeywords: 'Roszdravnadzor, Russia, medical devices, GRLS, Federal Law 323, Class 1 2 3, regulatory affairs',
  metaDescription: 'Plain English reference for Russia Roszdravnadzor medical device regulation — registration, classification, and post-market obligations.',
});
