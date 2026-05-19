import { buildSiteConfig } from '../../packages/theme/src/index';
export default buildSiteConfig({
  siteCode: 'mx',
  title: 'RAPath Mexico',
  tagline: 'Mexico COFEPRIS Medical Device Regulatory Reference',
  sidebarId: 'regulationSidebar',
  whatsNewPath: '/resources/useful-links',
  sections: [
    { label: 'Getting Started', to: '/getting-started/what-is-a-medical-device' },
    { label: 'Pre-Market', to: '/premarket/overview' },
    { label: 'Post-Market', to: '/postmarket/overview' },
    { label: 'Registration Holder', to: '/mexico-registration-holder/what-is-mrh' },
    { label: 'Legislation & NOMs', to: '/legislation/ley-general-de-salud' },
    { label: 'International', to: '/international/imdrf-membership' },
  ],
  officialSources: [
    { label: 'COFEPRIS — Dispositivos Médicos', href: 'https://www.gob.mx/cofepris' },
    { label: 'Diario Oficial de la Federación', href: 'https://www.dof.gob.mx' },
    { label: 'Ley General de Salud', href: 'https://www.diputados.gob.mx' },
    { label: 'DIGIPRiS Portal', href: 'https://www.gob.mx/cofepris' },
    { label: 'Reglamento de Insumos para la Salud', href: 'https://www.diputados.gob.mx' },
  ],
  regulatorName: 'COFEPRIS or the Mexican Government',
  disclaimerSourcesHtml: '<a href="https://www.gob.mx/cofepris" target="_blank" rel="noopener">COFEPRIS</a> and <a href="https://www.dof.gob.mx" target="_blank" rel="noopener">Diario Oficial de la Federación</a>',
  metaKeywords: 'COFEPRIS, Mexico, medical devices, Ley General de Salud, NOM-241, NOM-137, NOM-240, sanitary registration, registro sanitario, MRH, technovigilance, tecnovigilancia, regulatory affairs, equivalency route',
  metaDescription: 'Plain English reference for Mexico COFEPRIS medical device regulation — sanitary registration, classification, NOM-241 GMP, technovigilance, and the Mexico Registration Holder (MRH).',
});
