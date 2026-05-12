import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'kr',
  title: 'RAPath South Korea',
  tagline: 'South Korea MFDS Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/regulatory-changes',
  sections: [
    { label: 'Start Here', to: '/start-here/what-is-a-medical-device' },
    { label: 'Pre-Market', to: '/pre-market/classification' },
    { label: 'Post-Market', to: '/post-market/overview' },
    { label: 'Legislation', to: '/legislation/medical-devices-act' },
    { label: "What's New", to: '/whats-new/regulatory-changes' },
  ],
  officialSources: [
    { label: 'MFDS (Ministry of Food and Drug Safety)', href: 'https://www.mfds.go.kr/eng/' },
    { label: 'NIFDS (National Institute of Food and Drug Safety Evaluation)', href: 'https://www.nifds.go.kr/eng/' },
    { label: 'Medical Device Information System (UDIKOREA)', href: 'https://udikorea.mfds.go.kr/' },
    { label: 'Korean Medical Device Act', href: 'https://www.law.go.kr/LSW/eng/engLsSc.do?menuId=2' },
  ],
  regulatorName: 'MFDS or the South Korean Government',
  disclaimerSourcesHtml: '<a href="https://www.mfds.go.kr/eng/" target="_blank" rel="noopener">MFDS</a> and <a href="https://www.law.go.kr" target="_blank" rel="noopener">National Law Information Center</a>',
  metaKeywords: 'MFDS, Korea, medical devices, Medical Devices Act, Class I II III IV, NIFDS, regulatory affairs, UDIKOREA',
  metaDescription: 'Plain English reference for South Korea MFDS medical device regulation — approval pathways, classification, and post-market obligations.',
});
