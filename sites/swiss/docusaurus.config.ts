import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'swiss',
  title: 'RAPath Swissmedic',
  tagline: 'Swiss Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/recent-regulatory-changes',
  sections: [
    { label: 'Start Here', to: '/start-here/overview' },
    { label: 'Pre-Market', to: '/pre-market/overview' },
    { label: 'Post-Market', to: '/post-market/overview' },
    { label: 'Legislation', to: '/legislation/meddo-overview' },
    { label: 'Conformity Assessment Bodies', to: '/conformity-assessment-bodies/overview' },
    { label: "What's New", to: '/whats-new/recent-regulatory-changes' },
  ],
  officialSources: [
    { label: 'Swissmedic', href: 'https://www.swissmedic.ch' },
    { label: 'Fedlex MedDO SR 812.213', href: 'https://www.fedlex.admin.ch/eli/cc/2020/552/en' },
    { label: 'DAPI Product Database', href: 'https://www.dapi.ch' },
    { label: 'BASEC Ethics Network', href: 'https://www.basec.ch' },
    { label: 'NANDO EU Notified Bodies', href: 'https://ec.europa.eu/growth/tools-databases/nando' },
  ],
  regulatorName: 'Swissmedic or the Swiss Confederation',
  disclaimerSourcesHtml: '<a href="https://www.swissmedic.ch" target="_blank" rel="noopener">Swissmedic</a> and <a href="https://www.fedlex.admin.ch" target="_blank" rel="noopener">Fedlex</a>',
  metaKeywords: 'Swissmedic, Switzerland, medical devices, MedDO, Swiss regulation, conformity assessment, regulatory affairs',
  metaDescription: 'Plain English reference for Swiss Swissmedic medical device regulation — MedDO requirements, conformity assessment, and post-market obligations.',
});
