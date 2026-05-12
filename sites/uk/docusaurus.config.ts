import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'uk',
  title: 'RAPath UK',
  tagline: 'UK MHRA Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/regulatory-changes',
  sections: [
    { label: 'Start Here', to: '/start-here/what-is-a-medical-device' },
    { label: 'Pre-Market', to: '/pre-market/classification/how-classification-works' },
    { label: 'Post-Market', to: '/post-market/post-market-overview' },
    { label: 'Legislation', to: '/legislation/uk-mdr-2002-overview' },
    { label: 'UK Approved Bodies', to: '/approved-bodies/what-are-approved-bodies' },
    { label: 'Northern Ireland', to: '/northern-ireland/overview' },
    { label: "What's New", to: '/whats-new/regulatory-changes' },
  ],
  officialSources: [
    { label: 'UK MDR 2002 (legislation.gov.uk)', href: 'https://www.legislation.gov.uk/uksi/2002/618/contents/made' },
    { label: 'MHRA', href: 'https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency' },
    { label: 'MHRA Submissions Portal', href: 'https://submissions.mhra.gov.uk/' },
    { label: 'UK Approved Bodies List', href: 'https://www.gov.uk/government/publications/approved-bodies-for-medical-devices' },
    { label: 'MHRA Yellow Card', href: 'https://yellowcard.mhra.gov.uk/' },
  ],
  regulatorName: 'MHRA or any UK Government body',
  disclaimerSourcesHtml: '<a href="https://www.legislation.gov.uk" target="_blank" rel="noopener">legislation.gov.uk</a> and <a href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency" target="_blank" rel="noopener">MHRA</a>',
  metaKeywords: 'MHRA, UK, medical devices, UKCA, UK MDR 2002, regulatory affairs, approved bodies, Northern Ireland, post-Brexit',
  metaDescription: 'Plain English reference for UK MHRA medical device regulation — UKCA marking, classification, UK MDR 2002, and post-market obligations.',
});
