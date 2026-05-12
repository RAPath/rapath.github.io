import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'vt',
  title: 'RAPath Vietnam',
  tagline: 'Vietnam DAV Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/whats-new/regulatory-changes',
  sections: [
    { label: 'Start Here', to: '/start-here/what-is-a-medical-device' },
    { label: 'Pre-Market', to: '/pre-market/classification' },
    { label: 'Post-Market', to: '/post-market/overview' },
    { label: 'Legislation', to: '/legislation/decree-98-overview' },
    { label: "What's New", to: '/whats-new/regulatory-changes' },
  ],
  officialSources: [
    { label: 'Drug Administration of Vietnam (DAV)', href: 'https://dav.gov.vn/' },
    { label: 'Ministry of Health Vietnam', href: 'https://moh.gov.vn/' },
    { label: 'DMEC Registration Portal', href: 'https://dichvucong.moh.gov.vn/' },
    { label: 'Circular 46/2017/TT-BYT', href: 'https://luatvietnam.vn/y-te/thong-tu-46-2017-tt-byt-quy-dinh-ve-quan-ly-trang-thiet-bi-y-te-151714-d1.html' },
  ],
  regulatorName: 'DAV or the Vietnamese Government',
  disclaimerSourcesHtml: '<a href="https://dav.gov.vn/" target="_blank" rel="noopener">DAV</a> and <a href="https://moh.gov.vn/" target="_blank" rel="noopener">Ministry of Health Vietnam</a>',
  metaKeywords: 'DAV, Vietnam, medical devices, Circular 46, Class A B C D, ASEAN, regulatory affairs, Ministry of Health',
  metaDescription: 'Plain English reference for Vietnam DAV medical device regulation — registration, classification, and post-market obligations.',
});
