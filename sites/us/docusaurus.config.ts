import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'us',
  title: 'RAPath US',
  tagline: 'FDA Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/regulatory-changes',
  sections: [
    { label: 'Start Here', to: '/start-here/what-is-a-medical-device' },
    { label: 'Pre-Market', to: '/pre-market/classification/how-classification-works' },
    { label: 'Post-Market', to: '/post-market/overview' },
    { label: 'Quality System (QMSR)', to: '/qms/overview' },
    { label: 'Establishment & UDI', to: '/establishment-udi/registration-overview' },
    { label: "What's New", to: '/whats-new/regulatory-changes' },
  ],
  officialSources: [
    { label: 'FDA — Medical Devices', href: 'https://www.fda.gov/medical-devices' },
    { label: 'FD&C Act (eCFR)', href: 'https://www.ecfr.gov/current/title-21/chapter-I' },
    { label: '21 CFR Title 21', href: 'https://www.ecfr.gov/current/title-21' },
    { label: 'FDA 510(k) Database', href: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm' },
    { label: 'GUDID Database', href: 'https://accessgudid.nlm.nih.gov' },
  ],
  regulatorName: 'the U.S. Food and Drug Administration or the U.S. Government',
  disclaimerSourcesHtml: '<a href="https://www.fda.gov/medical-devices" target="_blank" rel="noopener">FDA</a> and <a href="https://www.ecfr.gov" target="_blank" rel="noopener">eCFR</a>',
  metaKeywords: 'FDA, medical devices, 510k, PMA, De Novo, regulatory, 21 CFR, GUDID, UDI, regulatory affairs, QMSR',
  metaDescription: 'Plain English reference for FDA medical device regulation — 510(k), PMA, De Novo, quality system, UDI, and post-market obligations.',
});
