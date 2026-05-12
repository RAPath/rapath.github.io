import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'br',
  title: 'RAPath Brazil',
  tagline: 'Brazil ANVISA Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/regulatory-changes',
  sections: [
    { label: 'Start Here', to: '/start-here/what-is-a-medical-device' },
    { label: 'Pre-Market', to: '/pre-market/classification' },
    { label: 'Post-Market', to: '/post-market/overview' },
    { label: 'Legislation', to: '/legislation/rdc-overview' },
    { label: "What's New", to: '/whats-new/regulatory-changes' },
  ],
  officialSources: [
    { label: 'ANVISA — Medical Devices', href: 'https://www.gov.br/anvisa/pt-br/assuntos/regulamentacao/regularizacao/produtos-para-saude' },
    { label: 'DATAVISA (Registration System)', href: 'https://consultas.anvisa.gov.br/' },
    { label: 'RDC 751/2022 (Classification)', href: 'https://www.in.gov.br/en/web/dou/-/resolucao-rdc-n-751-de-27-de-setembro-de-2022-430090983' },
    { label: 'REDE (Adverse Event Reporting)', href: 'https://www.gov.br/anvisa/pt-br/assuntos/farmacovigilancia/rede' },
  ],
  regulatorName: 'ANVISA or the Brazilian Government',
  disclaimerSourcesHtml: '<a href="https://www.gov.br/anvisa" target="_blank" rel="noopener">ANVISA</a> and <a href="https://consultas.anvisa.gov.br" target="_blank" rel="noopener">DATAVISA</a>',
  metaKeywords: 'ANVISA, Brazil, medical devices, RDC, STED, Class I II III IV, regulatory affairs, registration',
  metaDescription: 'Plain English reference for Brazil ANVISA medical device regulation — registration, classification, RDC requirements, and post-market obligations.',
});
