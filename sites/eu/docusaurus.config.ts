import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'eu',
  title: 'RAPath EU',
  tagline: 'EU Medical Device Regulatory Reference — MDR & IVDR',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/recent-regulatory-changes',
  sections: [
    { label: 'Start Here', to: '/start-here/what-is-a-medical-device' },
    { label: 'Pre-Market', to: '/pre-market/classification/how-classification-works' },
    { label: 'Post-Market', to: '/post-market/post-market-overview' },
    { label: 'Legislation', to: '/legislation/what-is-mdr-ivdr' },
    { label: 'Notified Bodies', to: '/notified-bodies/what-notified-bodies-do' },
    { label: "What's New", to: '/whats-new/recent-regulatory-changes' },
  ],
  officialSources: [
    { label: 'MDR 2017/745 (EUR-Lex)', href: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745' },
    { label: 'IVDR 2017/746 (EUR-Lex)', href: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0746' },
    { label: 'MDCG Guidance Documents', href: 'https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en' },
    { label: 'EUDAMED', href: 'https://ec.europa.eu/tools/eudamed' },
    { label: 'NANDO Database', href: 'https://ec.europa.eu/growth/tools-databases/nando' },
  ],
  regulatorName: 'the European Commission or any EU institution',
  disclaimerSourcesHtml: '<a href="https://eur-lex.europa.eu" target="_blank" rel="noopener">EUR-Lex</a>, <a href="https://health.ec.europa.eu/medical-devices-sector_en" target="_blank" rel="noopener">EC DG SANTE</a>, and <a href="https://ec.europa.eu/tools/eudamed" target="_blank" rel="noopener">EUDAMED</a>',
  metaKeywords: 'EU MDR, IVDR, medical devices, CE marking, EUDAMED, MDCG, notified body, European Union, regulatory affairs, 2017/745, 2017/746',
  metaDescription: 'Plain English guide to EU medical device regulation — MDR 2017/745 and IVDR 2017/746, CE marking, conformity assessment, EUDAMED, and post-market obligations.',
});
